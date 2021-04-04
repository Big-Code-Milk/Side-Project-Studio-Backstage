import { FireStorageHelperService } from 'src/app/shared/common/fire-storage-helper/fire-storage-helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-img-sticker-helper',
  templateUrl: './sign-in-img-sticker-helper.component.html',
  styleUrls: ['./sign-in-img-sticker-helper.component.css']
})
export class SignInImgStickerHelperComponent implements OnInit {

  constructor(
    private _FireStorageHelper: FireStorageHelperService,
  ) { }

  OnlineUsers: any;

  ngOnInit(): void {
    let Subscribe = this._FireStorageHelper.GetFireObject('SystemInfo').valueChanges().subscribe((x: any) => {
      this.OnlineUsers = JSON.parse(x);
      console.log('this.OnlineUsers', this.OnlineUsers);
      Subscribe.unsubscribe();
    });
  }

}
