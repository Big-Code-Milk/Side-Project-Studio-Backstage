import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-hosting-tab',
  templateUrl: './image-hosting-tab.component.html',
  styleUrls: ['./image-hosting-tab.component.css']
})
export class ImageHostingTabComponent implements OnInit {

  @Input() Title: string;
  DisplayMode: string = 'Close';
  EditorMode: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  EditorModeChange() {
    // console.log('EditorMode', this.EditorMode);
    switch (this.EditorMode) {
      case 'Imgur':
        break;
      case 'GoogleCloud':
        break;
      case 'FirebaseStorage':
        break;
      default:
        console.log(`this.EditorMode`, this.EditorMode);
    }
  }
}
