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

  // 參考
  // https://www.letswrite.tw/imgur-api-upload-load/

  ImgObject: any = {};

  ImgFileChange(Event: any) {
    console.log(Event);
    this.ImgObject.ImgFile = Event.target.files[0]; // input type="file" 的值
    this.ImgObject.ImgFile.name; // input的圖檔名稱
    this.ImgObject.ImgFileSize = Math.floor(this.ImgObject.ImgFile.size * 0.001) + 'KB'; // input的圖片大小
    this.ImgObject.ImgFileThumbnail = window.URL.createObjectURL(this.ImgObject.ImgFile); // input的圖片縮圖
    console.log(this.ImgObject);
  }

  GetImgurHostingList() {

  }

  protected _HttpOptions: any;

  SetHeader() {

    const ClientId = '2320545a1d64607';
    const Token = 'c06ba04a68118964490e0f88d54c118de5dfed9c';
    const Album = 'XXXX'; // 相簿 ID
    const Url = "https://api.imgur.com/3/album/" + Album + "/images";
    const Headers = { "Authorization": 'Bearer ' + Token };

    this._HttpOptions = {
      headers: new HttpHeaders(
        {
          "authorization": 'Bearer ' + Token
        }
      )
    };
  }

  UploadImgur() {

    this.SetHeader();

    console.log('this.ImgObject', this.ImgObject);
    if (this.ImgObject.ImgFile != undefined) {

      const Url = "https://api.imgur.com/3/image";
      let Form = new FormData();
      Form.append('image', this.ImgObject.ImgFile, this.ImgObject.ImgFile.name);
      // Form.append('title', this.ImgObject.ImgFile.name);
      // Form.append('description', this.des);
      // Form.append('album', album); // 指定相簿
      // https://apidocs.imgur.com/
      var _Observable = this._HttpClient.post<any>(
        Url,
        Form,
        this._HttpOptions,
      );
      _Observable.subscribe(res => {
        console.log('_Observable', res)
      }
      )
    }
  }

  // Update(formDate: any): Observable<any> {
  //   const url = `${this.baseUrl}/Update`;
  //   return this.http.
  //     post<any>(
  //       url,
  //       formDate,
  //       this.httpOptions);
  // }

}
