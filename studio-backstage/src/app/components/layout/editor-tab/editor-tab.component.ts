import { Component, OnInit, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

@Component({
  selector: 'app-editor-tab',
  templateUrl: './editor-tab.component.html',
  styleUrls: ['./editor-tab.component.css']
})
export class EditorTabComponent implements OnInit {

  EditorMode: string = "";
  Content: string = "";

  constructor() { }

  ngOnInit(): void {
    this.InitCkeditor();
  }

  EditorModeChange() {
    console.log('EditorMode', this.EditorMode);
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
    },
      this.Content = `<p>My html content</p>`;
  }

  onChange($event: any): void {
    console.log("onChange"),
      //this.log += new Date() + "<br />" ,
      console.log('this.mycontent', this.Content)
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />" ;
  }

  // editor.md
  SyncModel(Value: any): void {
    console.log('Value', Value);
    this.Content = Value;
  }
}
