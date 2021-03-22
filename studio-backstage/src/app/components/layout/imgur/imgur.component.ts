import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imgur',
  templateUrl: './imgur.component.html',
  styleUrls: ['./imgur.component.css']
})
export class ImgurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // 參考
  // https://www.letswrite.tw/imgur-api-upload-load/

  ImgFileChange(Event: any) {
    console.log(Event);
    let ImgFile = Event.target.files[0]; // input type="file" 的值
    let ImgFileName = ImgFile.name // input的圖檔名稱
    let ImgFileSize = Math.floor(ImgFile.size * 0.001) + 'KB'; // input的圖片大小
    let ImgFileThumbnail = window.URL.createObjectURL(ImgFile); // input的圖片縮圖
  }

  GetImgurHostingList() {
    const Id = '04cb77bd45f2a98'; // 填入 App 的 Client ID
    const Token = '34a5425de4479346cdd5eefa7ec1b69c203fcbcb'; // 填入 token
    const Album = 'XXXX'; // 相簿的 ID
    const Url = "https://api.imgur.com/3/album/" + Album + "/images";
    const Headers = { "Authorization": 'Bearer ' + Token }
  }

  UploadImgur() {
    const Url = "https://api.imgur.com/3/image";
    let Form = new FormData();
    // Form.append('image', this.file);
    // Form.append('title', this.title);
    // Form.append('description', this.des);
    // Form.append('album', album); // 有要指定的相簿就加這行
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
