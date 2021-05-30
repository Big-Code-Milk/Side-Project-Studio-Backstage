import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TweenMax, gsap } from "gsap";

@Component({
  selector: 'app-onstage-home',
  templateUrl: './onstage-home.component.html',
  styleUrls: ['./onstage-home.component.css']
})
export class OnstageHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("Img1") private _Img1: ElementRef;
  @ViewChild("Img2") private _Img2: ElementRef;
  @ViewChild("Img3") private _Img3: ElementRef;
  @ViewChild("Img4") private _Img4: ElementRef;


  ngAfterViewInit(): void {
    console.log(this._Img1);
    console.log('gsap', gsap);
    gsap.to(this._Img1.nativeElement, { duration: 2, x: 300 });
  }
}
