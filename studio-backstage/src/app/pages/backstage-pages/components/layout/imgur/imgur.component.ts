import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

    if (this.ImgObject.ImgFile != undefined) {

      const Url = "https://api.imgur.com/3/image?withCredentials=false";
      let _FormData = new FormData();
      _FormData.append('image', this.ImgObject.ImgFile);

      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Client-ID da1c8b3de4e1e95',
          'accept': '*/*'
        }),
      };

      var Subscribe = this._HttpClient.post(Url, _FormData, httpOptions).subscribe(observer => { console.log('observer', observer); });

    }
  }



}
