import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit {

  Content: string;

  constructor() { }

  ngOnInit(): void {
  }

  SyncModel(Event: any) {
    console.log('Event', Event);
  }
}
