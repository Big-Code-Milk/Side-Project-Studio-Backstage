// 參考
// https://stackoverflow.com/questions/39446203/how-to-add-plugins-to-ng2-ckeditor-using-typescript-and-angular-2

import { Component, OnInit, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';
import { EditorConfig } from '../../../shared/directive/editor-md/editor-md-config';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  Content: string = "";

  constructor() { }

  ngOnInit(): void {
    this.InitCkeditor();
  }

  // ng2-ckeditor
  name = 'ng2-ckeditor';
  ckeConfig: CKEDITOR.config;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: CKEditorComponent;

  InitCkeditor() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      height: '45vh',
    };
    this.Content = `<p>My html content</p>`;
  }

  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
    console.log('this.mycontent', this.Content)
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }

  conf = new EditorConfig();
  markdown = '测试语句';

  // 同步属性内容
  syncModel(str: string): void {
    this.markdown = str;
  }
}
