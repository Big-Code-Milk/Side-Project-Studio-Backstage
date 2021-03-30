import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import FirebaseModel from 'src/app/shared/models/firebase-model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import { DialogHelperService } from 'src/app/shared/common/dialog-helper/dialog-helper.service';
import { FireStorageHelperService } from 'src/app/shared/common/fire-storage-helper/fire-storage-helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarHelperService } from 'src/app/shared/common/snack-bar-helper/snack-bar-helper.service';
import { MatDialogConfig } from '@angular/material/dialog';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit {

  DisplayMode: boolean;
  HTMLContent: string;
  MarkdownContent: string;
  FirebaseModel: FirebaseModel = new FirebaseModel();
  Term: FormGroup;
  Tags: string[] = [];
  _FormControl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  _FilteredTags: Observable<string[]>;
  allTags: string[] = ['工作室', '行銷', '架構', '技術', '業務'];

  Key: string
  constructor(
    private _DialogHelper: DialogHelperService,
    private _FireStorageHelper: FireStorageHelperService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    private _SnackBarHelper: SnackBarHelperService,
  ) {
    this.Key = this._ActivatedRoute.snapshot.params['key'];
    this._FilteredTags = this._FormControl.valueChanges.pipe(
      startWith(null),
      map((Tag: string | null) => Tag ? this._filter(Tag) : this.allTags.slice()));
    this.FirebaseModel.StartDate = new Date();
  }

  ngOnInit(): void {
    // console.log('this.Key', this.Key);
    if (this.Key != undefined) {
      this.DataInit();
    }
  }

  SyncModel(Value: any) {
    // console.log('最外層 Value', Value);
    this.HTMLContent = Value.HTMLContent;
    this.MarkdownContent = Value.MarkdownContent;
  }

  remove(Tag: string): void {
    const index = this.Tags.indexOf(Tag);

    if (index >= 0) {
      this.Tags.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.Tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this._FormControl.setValue(null);
  }

  @ViewChild('TagInput') TagInput: ElementRef<HTMLInputElement>;
  selected(event: MatAutocompleteSelectedEvent): void {
    this.Tags.push(event.option.viewValue);
    this.TagInput.nativeElement.value = '';
    this._FormControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(Tag => Tag.toLowerCase().indexOf(filterValue) === 0);
  }

  _MatDialogConfig: MatDialogConfig = {} as MatDialogConfig;

  CheckFormThenSubmit() {

    if (!confirm('確定要儲存草稿嗎?')) {
      return;
    }

    this.FirebaseModel.Status = "草稿";
    this.FirebaseModel.Content = this.HTMLContent;
    this.FirebaseModel.MarkdownContent = this.MarkdownContent;
    this.FirebaseModel.Tags = [... new Set(this.Tags)];

    if (this.FirebaseModel.Content === undefined || this.FirebaseModel.Name === undefined) {
      this._MatDialogConfig.data = "必填請務必填寫";
      this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
    } else {
      if (this.Key != undefined) {
        this.Update();
      } else {
        this.Add();
      }
    }
  }

  DataInit() {
    var _Document = this._FireStorageHelper.GetFireDocument('Article/' + this.Key);
    _Document.valueChanges().subscribe((Param: any) => {
      this.FirebaseModel = Param;
      this.HTMLContent = Param.Content;
      this.MarkdownContent = Param.MarkdownContent;
      // console.log('Param', Param);
      // console.log('Param.HTMLContent', Param.Content);
      // console.log('this.HTMLContent', this.HTMLContent);
      // console.log('this.MarkdownContent', this.MarkdownContent);
    });
  }

  Add() {
    // 新增一筆
    let _Collection = this._FireStorageHelper.GetFireCollection<FirebaseModel>('Article');
    let JSONString = JSON.stringify(this.FirebaseModel);
    let Obj = JSON.parse(JSONString);
    // console.log('Obj', Obj);
    var HttpRequest = _Collection.add(Obj).catch(error => {
      this._MatDialogConfig.data = error;
      this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
    }).then(success => {
      this.FirebaseModel = new FirebaseModel();
      this.Tags = [];
      this.FirebaseModel.StartDate = new Date();
      this._SnackBarHelper.OpenSnackBar('操作成功!');
      this._Router.navigate(['dashboard/pages/contentmgmt']);
    });
  }

  Update() {
    // 更新
    var _Document = this._FireStorageHelper.GetFireDocument('Article/' + this.Key);
    let JSONStringUpdate = JSON.stringify(this.FirebaseModel);
    let ObjUpdate = JSON.parse(JSONStringUpdate);
    var _Update = _Document.update(ObjUpdate).catch(error => {
      this._MatDialogConfig.data = error;
      this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
    }).then(success => {
      // this._MatDialogConfig.data = "success";
      // this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
      // this.IsEdit = false;

      this._Router.navigate(['dashboard/']);
      this._SnackBarHelper.OpenSnackBar('操作成功!');
      this._Router.navigate(['dashboard/pages/contentmgmt']);

    });
  }
}
