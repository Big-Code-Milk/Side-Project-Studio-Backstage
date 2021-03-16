import { AfterViewInit, Attribute, Directive, EventEmitter, Input, Output } from '@angular/core';
import { EditorConfig } from './editor-md-config';

declare var editormd: any;
declare var $: any;

@Directive({
  selector: '[appEditorMd]'
})
export class EditorMdDirective implements AfterViewInit {

  @Input() editormdConfig: EditorConfig; // 配置选项
  @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>(); // 发射器
  editor: any; // editormd编辑器

  constructor(
    @Attribute('id') private id: string
  ) {
    console.log('EditorMdDirective');
  }

  ngAfterViewInit(): void {

    // https://gitee.com/imlxp/ngx-editor.md-markdown/issues/IHX59
    // https://github.com/pandao/editor.md/issues/553
    //   if ($('#' + this.id).length > 0) {
    //     var editor = editormd("editormd", {});
    // }

    console.log('editormd', editormd);

    this.editor = editormd($('#' + this.id), this.editormdConfig); // 创建编辑器
    const out = this.onEditorChange;
    const textarea = $('#' + this.id + ' :first'); // 获取textarea元素

    console.log('textarea', textarea.length);


    // 当编辑器内容改变时，触发textarea的change事件
    this.editor.on('change', function () {
      if (textarea.length > 0) {
        out.emit(textarea.val());
      }
    });
  }
}
