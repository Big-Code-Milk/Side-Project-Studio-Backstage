import { Component, Input, OnInit } from '@angular/core';

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

  @Input() Title: string;
  DisplayMode: string = 'Close';

  constructor() { }

  NickName: string = "";
  Url: string = "";
  IsEdited: boolean = false;
  TreeDate: Array<TreeDates> = [];

  ngOnInit(): void {
    console.log($('.markdown-body').html());
  }

  Create(Index: any) {
    // console.log('Index', typeof (Index));
    // console.log('Index', Index);

    if (this.NickName == "") {
      alert('NickName 必填');
      return;
    }

    let WaitParseString: any;
    if (Index != '') {

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

  Update() {

  }

  Delete() {

  }
}
