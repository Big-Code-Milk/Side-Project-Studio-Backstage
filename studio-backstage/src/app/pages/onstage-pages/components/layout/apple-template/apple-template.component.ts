import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple-template',
  templateUrl: './apple-template.component.html',
  styleUrls: ['./apple-template.component.css']
})
export class AppleTemplateComponent implements OnInit {

  RandomColor: string;

  constructor() { }

  ngOnInit(): void {
    this.RandomColor = this.getRandomColor();
  }

  // 隨機取 rgb 字串
  getRandomColor() {
    var rgb = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',0.9)';
    // console.log(rgb);
    return rgb;
  }
}
