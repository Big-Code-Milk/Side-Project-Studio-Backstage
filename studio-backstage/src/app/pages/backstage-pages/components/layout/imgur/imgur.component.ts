import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-imgur',
  templateUrl: './imgur.component.html',
  styleUrls: ['./imgur.component.css']
})
export class ImgurComponent implements OnInit {

  constructor(
    protected _HttpClient: HttpClient, // https://stackoverflow.com/questions/47236963/no-provider-for-httpclient
  ) { }

  ngOnInit(): void {
  }

  ImgObject: any = {};

  ImgFileChange(Event: any) {
    // console.log(Event);
    this.ImgObject.ImgFile = Event.target.files[0]; // input type="file" 的值
    this.ImgObject.ImgFile.name; // input的圖檔名稱
    this.ImgObject.ImgFileSize = Math.floor(this.ImgObject.ImgFile.size * 0.001) + 'KB'; // input的圖片大小
    this.ImgObject.ImgFileThumbnail = window.URL.createObjectURL(this.ImgObject.ImgFile); // input的圖片縮圖
    // console.log(this.ImgObject);
  }

  async UploadImgur() {

    console.log('this.ImgObject', this.ImgObject);
    if (this.ImgObject.ImgFile != undefined) {

      const ClientId = 'da1c8b3de4e1e95';
      const Token = '68adce9c1589772d2c8f4a2159011f5f8794e230';
      const ClientSecret = '5ecc60434bdca9118fff6a200a0e5bc039fc9ee9';
      const Url = "https://api.imgur.com/3/image";
      let _FormData = new FormData();
      _FormData.append('image', this.ImgObject.ImgFile);
      let FormDataImg = _FormData.get('image'); // https://stackoverflow.com/questions/62303002/angular-9-formdata-appendkey-null-actually-appends-null-string

      console.log('FormDataImg', FormDataImg);

      let header = new HttpHeaders({
        "authorization": 'Bearer ' + Token,
      });

      this._HttpClient.post(Url, _FormData, { headers: header });
    }
  }



}
