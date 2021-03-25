import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

declare var $: any;

@Component({
  selector: 'app-editor-tab',
  templateUrl: './editor-tab.component.html',
  styleUrls: ['./editor-tab.component.css']
})
export class EditorTabComponent implements OnInit {

  @Input() Title: string;
  DisplayMode: string = 'Close';


  EditorMode: string = "";
  ContentHTML: string = "";
  ContentText: string = "";

  constructor(
    private _ChangeDetectorRef: ChangeDetectorRef // 當有cd發生時觸發
  ) {
    this.ContentHTML = `<p>My html content</p>`;
    this.ContentText = `My html content`;
  }

  ngOnInit(): void {
    // console.log('Title', this.Title);
    if (this.Title == undefined) {
      this.Title = '請注入此 Component Title';
    }
  }

  EditorModeChange() {
    // console.log('EditorMode', this.EditorMode);
    switch (this.EditorMode) {
      case 'Ckeditor':
        this.InitCkeditor();
        break;
      case 'Editor.md':
        break;
      case 'Medium':
        break;
      default:
        console.log(`this.EditorMode`, this.EditorMode);
    }
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

      this._ChangeDetectorRef.detectChanges(); // 觸發 AG 變更檢測
    // console.log('ckeditor', this.ckeditor);
  }

  onChange($event: any): void {
    // console.log("onChange");
    //this.log += new Date() + "<br />" ,
    // console.log('this.mycontent', this.ContentHTML)
    let CkText = $('.cke_wysiwyg_div').text();
    // console.log('CkText', CkText);
    this.ContentText = CkText;
  }

  onPaste($event: any): void {
    // console.log("onPaste");
    //this.log += new Date() + "<br />" ;
  }

  // editor.md
  SyncModel(Value: any): void {
    // console.log('Value', Value);
    this.ContentHTML = Value;
  }

  // 真的使用時
  @Input() Content: string;
  @Output() onCotentChange: EventEmitter<string> = new EventEmitter<string>(); // 发射器
  ContentEmitter() {
    this.onCotentChange.emit(this.ContentHTML);
  }
}
