// 參考
// router 取得參數 https://ithelp.ithome.com.tw/articles/10209035

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import GtdTask from '../../../shared/models/gtd-task';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { DialogHelperService } from '../../../shared/common/dialog-helper/dialog-helper.service';
import { MatDialogConfig } from '@angular/material/dialog';

import { FireStorageHelperService } from '../../../shared/common/fire-storage-helper/fire-storage-helper.service';

import { CKEditorComponent } from 'ng2-ckeditor';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.css']
})
export class OrganizeComponent implements OnInit {

  GtdTask: GtdTask = new GtdTask();
  Term: FormGroup;

  constructor(
    private _DialogHelper: DialogHelperService,
    private _FireStorageHelper: FireStorageHelperService,
    private _Router: ActivatedRoute,
  ) {
    const Today = new Date();
    const TodayAdd7days = dayjs(Today).add(7, 'day').toDate();

    this.Term = new FormGroup({
      start: new FormControl(Today),
      end: new FormControl(TodayAdd7days)
    });

    // Rxjs 應用 (這裡已經到進階應用了寫完 GTD 再來詳細看) KeyWord AG大師 & Rxjs
    // 這段目的是藉由管道(pipe)排除輸入空白
    this._FilteredTags = this._FormControl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));


  }

  ngOnInit(): void {
    this.InitCkeditor();

    // 取得參數
    this._Router.queryParams.subscribe((queryParams: any) => {
      console.log('a', queryParams);
    });

    let b = this._Router.snapshot.queryParams['key'];
    console.log('b', b);

    // let c = this._Router.params['key'];
    // console.log('c', b);

    let d = this._Router.snapshot.params['key']; // 結果只有這種方法有撈到 ...
    console.log('d', d);

    // 讀取特定的 docutment
    this.DataInit();
  }

  // Chips Autocomplete 應用
  separatorKeysCodes: number[] = [ENTER, COMMA];
  // FormControl 應用 https://angular.tw/api/forms/FormControl
  _FormControl = new FormControl();
  _FilteredTags: Observable<string[]>;
  Tags: string[] = ['未處理'];
  allFruits: string[] = ['工作室', '行銷', '架構', '技術', '業務'];

  // ViewChild 應用參考 https://www.itread01.com/content/1544339826.html
  @ViewChild('TagInput') TagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

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

  remove(Tag: string): void {
    const index = this.Tags.indexOf(Tag);

    if (index >= 0) {
      this.Tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.Tags.push(event.option.viewValue);
    this.TagInput.nativeElement.value = '';
    this._FormControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  _MatDialogConfig: MatDialogConfig = {} as MatDialogConfig;

  CheckFormThenSubmit() {
    this.GtdTask.StartDate = this.Term.value.start;
    this.GtdTask.EndDate = this.Term.value.end;
    this.GtdTask.Tags = this.Tags;

    if (this.GtdTask.Content === undefined || this.GtdTask.Name === undefined) {
      this._MatDialogConfig.data = "必填請務必填寫";
      this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
    } else {
      // 儲存至 FireStore 之後這裡要多做一層，因為 firebase 只吃無型別資料...
      // Function addDoc() called with invalid data. Data must be an object, but it was: a custom object
      let _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Task');
      let JSONString = JSON.stringify(this.GtdTask);
      let Obj = JSON.parse(JSONString);
      _Collection.add(Obj).catch(error => {
        this._MatDialogConfig.data = error;
        this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
      }).then(success => {
        this._MatDialogConfig.data = "success";
        this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
        setTimeout(function () { window.location.reload(); }, 3000);
      });
    }
  }

  // ng2-ckeditor
  name = 'ng2-ckeditor';
  ckeConfig: CKEDITOR.config;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: CKEditorComponent;

  InitCkeditor() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
    this.mycontent = `<p>My html content</p>`;
  }

  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
    console.log('this.mycontent', this.mycontent)
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }

  DataInit() {
    // https://blog.kevinyang.net/2018/04/30/angular-firebase/
  }

}
