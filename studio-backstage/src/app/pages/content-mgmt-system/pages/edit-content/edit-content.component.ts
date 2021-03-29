import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import GtdTask from 'src/app/shared/models/gtd-task';
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
  GtdTask: GtdTask = new GtdTask();
  Term: FormGroup;
  Tags: string[] = [];
  _FormControl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  _FilteredTags: Observable<string[]>;
  allTags: string[] = ['工作室', '行銷', '架構', '技術', '業務'];

  constructor(
    private _DialogHelper: DialogHelperService,
    private _FireStorageHelper: FireStorageHelperService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    private _SnackBarHelper: SnackBarHelperService,
  ) {
    this._FilteredTags = this._FormControl.valueChanges.pipe(
      startWith(null),
      map((Tag: string | null) => Tag ? this._filter(Tag) : this.allTags.slice()));
    this.GtdTask.StartDate = new Date();
  }

  ngOnInit(): void {
    this.DataInit();
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
    if (!confirm('確定要存為草稿嗎?')) {
      return;
    }
    this.GtdTask.Content = this.HTMLContent;
    if (this.GtdTask.Content === undefined || this.GtdTask.Name === undefined) {
      this._MatDialogConfig.data = "必填請務必填寫";
      this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
    } else {
      this.GtdTask.Status = "草稿";
      this.GtdTask.Content = this.HTMLContent;
      this.GtdTask.MarkdownContent = this.MarkdownContent;
      this.GtdTask.Tags = [... new Set(this.Tags)];
      let _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Article');
      let JSONString = JSON.stringify(this.GtdTask);
      let Obj = JSON.parse(JSONString);
      // console.log('Obj', Obj);
      var HttpRequest = _Collection.add(Obj).catch(error => {
        this._MatDialogConfig.data = error;
        this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
      }).then(success => {
        this.GtdTask = new GtdTask();
        this.Tags = [];
        this.GtdTask.StartDate = new Date();
        this._SnackBarHelper.OpenSnackBar('操作成功!');
      });
    }
  }

  DataInit() {

  }
}
