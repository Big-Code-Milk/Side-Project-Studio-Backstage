// 參考
// https://stackoverflow.com/questions/39446203/how-to-add-plugins-to-ng2-ckeditor-using-typescript-and-angular-2

import { Component, OnInit, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

declare var CKEDITOR: any;
console.log('CKEDITOR', CKEDITOR);

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
    console.log('InitCkeditor');
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'markdown',
      forcePasteAsPlainText: true,
      height: '45vh',
      removeButtons: 'Underline,Subscript,Superscript',
      format_tags: 'p;h1;h2;h3;pre',
      removeDialogTabs: 'image:advanced;link:advanced',
      toolbarGroups: [
        { name: 'tools' },
        { name: 'links' },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
        { name: 'styles' },
        { name: 'others' }
      ]
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
}
