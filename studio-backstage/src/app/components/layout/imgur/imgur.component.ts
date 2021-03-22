import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgur',
  templateUrl: './imgur.component.html',
  styleUrls: ['./imgur.component.css']
})
export class ImgurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ImgFile: any;
  ImgFileChange(e: any) {
    console.log(e);
  }
}
