import { Component, Input, OnInit } from '@angular/core';
import { FireStorageHelperService } from 'src/app/shared/common/fire-storage-helper/fire-storage-helper.service';

@Component({
  selector: 'app-image-hosting-tab',
  templateUrl: './image-hosting-tab.component.html',
  styleUrls: ['./image-hosting-tab.component.css']
})
export class ImageHostingTabComponent implements OnInit {

  @Input() Title: string;
  DisplayMode: string = 'Close';
  EditorMode: string = "ImgSource";

  constructor(
    private _FireStorageHelper: FireStorageHelperService
  ) { }

  ngOnInit(): void {
    // console.log('Title', this.Title);
    if (this.Title == undefined) {
      this.Title = '請注入此 Component Title';
    }
    this.InitGallery();
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

  NowOnlineGallery: any;

  InitGallery() {

    let ResponseTags = this._FireStorageHelper.GetFireObject('Gallery');

    let _Subscribe: any = ResponseTags.valueChanges().subscribe((elements: any) => {
      _Subscribe.unsubscribe();
      console.log('elements', elements);
      this.NowOnlineGallery = JSON.parse(elements) || [];
    })
  }
}
