import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TreeDates {
  NickName: string;
  Url: string;
  Children: Array<TreeDates>;
}

declare var $: any;

@Component({
  selector: 'app-directorytree-mgmt',
  templateUrl: './directorytree-mgmt.component.html',
  styleUrls: ['./directorytree-mgmt.component.css']
})
export class DirectorytreeMgmtComponent implements OnInit {

  @Input() ArticleDirectory: string;
  @Input() Title: string;
  DisplayMode: string = 'Close';

  constructor() { }

  NickName: string = "";
  Url: string = "";
  IsEdited: boolean = false;
  TreeDate: Array<TreeDates> = [];

  ngOnInit(): void {

    (this.Title == "" || this.Title == undefined) ? this.Title = "目錄管理" : this.Title = this.Title;
  }

  Create(Index: any) {
    // console.log('Index', typeof (Index));
    // console.log('Index', Index);

    if (this.NickName == "") {
      alert('NickName 必填');
      return;
    }

    let WaitParseString: any;
    if (Index != '' && typeof (Index) != 'number') {

      let IndexArray: Array<string> = Index.split('.');
      // console.log('IndexArray', IndexArray.length);
      // "0", "1", "0", "0" this.TreeDate[0].Children[1].Children[0].push()

      IndexArray.forEach((value: string, index: number, array: string[]) => {
        // console.log('ForEach Index', index);
        if (index == 0) {
          WaitParseString = `this.TreeDate[${value}]`;
        }
        else if (index == IndexArray.length - 1) {
          WaitParseString += `.Children[${value}].Children`;
        } else {
          WaitParseString += `.Children[${value}]`;
        }
      });

    } else {
      if (typeof (Index) != 'number') {
        WaitParseString = `this.TreeDate`;
      } else {
        WaitParseString = `this.TreeDate[${Index}].Children`;
      }
    }

    // console.log('WaitParseString', WaitParseString);
    // console.log(eval(WaitParseString));

    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
    let ParsedArray = eval(WaitParseString);

    ParsedArray.push({
      NickName: this.NickName, Url: this.Url, Children: []
    });

    this.NickName = "";
    this.Url = "";
  }

  Delete(Index: any) {
    if (!confirm(`確定要刪除 ${Index} ?`)) {
      return;
    }

    // console.log('Index', Index);
    // console.log(typeof (Index));

    let WaitParseString: any;
    let DeleteIndex: any;

    if (typeof (Index) == 'string') {

      // console.log('Index', Index);
      // console.log(typeof (Index));

      let IndexArray: Array<string> = Index.split('.');
      // console.log('IndexArray', IndexArray.length);
      // "0", "1", "0", "0" this.TreeDate[0].Children[1].Children[0].push()

      IndexArray.forEach((value: string, index: number, array: string[]) => {
        // console.log('ForEach Index', index);
        if (index == 0) {
          WaitParseString = `this.TreeDate[${value}]`;
        }
        else if (index == IndexArray.length - 1) {
          WaitParseString += `.Children`;
          DeleteIndex = value;
        } else {
          WaitParseString += `.Children[${value}]`;
        }
      });

    } else {
      WaitParseString = `this.TreeDate`;
      DeleteIndex = Index;
    }

    // console.log('WaitParseString', WaitParseString);
    // console.log(eval(WaitParseString));

    let ParsedString = eval(WaitParseString);
    // console.log('DeleteIndex', DeleteIndex);
    ParsedString.splice(DeleteIndex);
  }

  Update(Index: any) {
    if (!confirm(`確定要改為 NickName = ${this.NickName} ,Url = ${this.Url} ?`)) {
      return;
    }
    // console.log(Index);
    // console.log(typeof (Index));

    let WaitParseString: any;
    if (Index != '' && typeof (Index) != 'number') {
      // console.log('1');

      let IndexArray: Array<string> = Index.split('.');
      // console.log('IndexArray', IndexArray.length);
      // "0", "1", "0", "0" this.TreeDate[0].Children[1].Children[0].push()

      IndexArray.forEach((value: string, index: number, array: string[]) => {
        // console.log('ForEach Index', index);
        if (index == 0) {
          WaitParseString = `this.TreeDate[${value}]`;
        }
        else {
          WaitParseString += `.Children[${value}]`;
        }
      });

    } else {
      // console.log('2');
      // console.log(typeof (Index))
      WaitParseString = `this.TreeDate[${Index}]`;
    }

    // console.log('WaitParseString', WaitParseString);
    // console.log(eval(WaitParseString));

    let ParsedString = eval(WaitParseString);
    ParsedString.NickName = this.NickName;
    ParsedString.Url = this.Url;
  }

  ArticleDirectoryChange() {
    // console.log($('#ArticleDirectory').html());
    // console.log('this.TreeDate', this.TreeDate);
    this.ContentEmitter()
  }

  @Output() onDirectorytreeChange: EventEmitter<any> = new EventEmitter<any>(); // 发射器
  ContentEmitter() {
    this.onDirectorytreeChange.emit(this.TreeDate);
  }

}
