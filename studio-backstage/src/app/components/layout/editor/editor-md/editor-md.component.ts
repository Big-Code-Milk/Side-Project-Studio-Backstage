import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EditorConfig } from '../../../../shared/directive/editor-md/editor-md-config';

declare var editormd: any;
declare var $: any;

@Component({
  selector: 'app-editor-md',
  templateUrl: './editor-md.component.html',
  styleUrls: ['./editor-md.component.css']
})
export class EditorMdComponent implements OnInit {

  @Output() onEditorMdChange: EventEmitter<string> = new EventEmitter<string>(); // 发射器
  _EditorConfig = new EditorConfig;
  _EditorMd: any;
  Markdown: any;

  constructor() { }

  ngOnInit(): void {
    // 初始化
    this._EditorMd = editormd('EditorMd', this._EditorConfig);
    // 当编辑器内容改变时，触发textarea的change事件
    let ChangeEvent = this.onEditorMdChange;
    let ChangeValue = this.Markdown;
    this._EditorMd.on('change', function () {
      console.log('debug', ChangeValue);
      ChangeEvent.emit(ChangeValue);
    });
  }


}