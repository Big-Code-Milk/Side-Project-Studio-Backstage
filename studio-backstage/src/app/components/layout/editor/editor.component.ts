import { Component, OnInit, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  Content: string = "";

  constructor() { }

  ngOnInit(): void {
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
}
