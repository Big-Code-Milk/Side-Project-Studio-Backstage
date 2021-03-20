import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

declare var $: any;

@Component({
  selector: 'app-editor-tab',
  templateUrl: './editor-tab.component.html',
  styleUrls: ['./editor-tab.component.css']
})
export class EditorTabComponent implements OnInit {

  EditorMode: string = "";
  ContentHTML: string = "";
  ContentText: string = "";

  constructor(
    private _ChangeDetectorRef: ChangeDetectorRef // 當有cd發生時觸發
  ) {
    this.ContentHTML = `<p>My html content</p>`;
    this.ContentText = `My html content    `;
  }

  ngOnInit(): void {
  }

  EditorModeChange() {
    console.log('EditorMode', this.EditorMode);
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
    console.log("onChange");
    //this.log += new Date() + "<br />" ,
    // console.log('this.mycontent', this.ContentHTML)
    let CkText = $('.cke_wysiwyg_div').text();
    console.log('CkText', CkText);
    this.ContentText = CkText;
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />" ;
  }

  // editor.md
  SyncModel(Value: any): void {
    console.log('Value', Value);
    this.ContentHTML = Value;
  }
}
