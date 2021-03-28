import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit {

  HTMLContent: string;
  MarkdownContent: string;

  constructor() { }

  ngOnInit(): void {
  }

  SyncModel(Value: any) {
    console.log('最外層 Value', Value);
    this.HTMLContent = Value.HTMLContent;
    this.MarkdownContent = Value.MarkdownContent;
  }
}
