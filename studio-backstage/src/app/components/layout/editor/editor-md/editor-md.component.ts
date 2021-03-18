import { Component, OnInit } from '@angular/core';
import { EditorConfig } from '../../../../shared/directive/editor-md/editor-md-config';

declare var editormd: any;
declare var $: any;

@Component({
  selector: 'app-editor-md',
  templateUrl: './editor-md.component.html',
  styleUrls: ['./editor-md.component.css']
})
export class EditorMdComponent implements OnInit {

  _EditorConfig = new EditorConfig;
  _EditorMd: any;

  constructor() { }

  ngOnInit(): void {
    this._EditorMd = editormd('EditorMd', this._EditorConfig);
  }

}
