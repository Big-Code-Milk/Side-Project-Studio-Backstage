import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TweenMax, gsap } from "gsap";
import { NipponColorHelperService } from 'src/app/shared/common/nippon-color-helper/nippon-color-helper.service';

@Component({
  selector: 'app-onstage-home',
  templateUrl: './onstage-home.component.html',
  styleUrls: ['./onstage-home.component.css']
})
export class OnstageHomeComponent implements OnInit {

  RandomColor: any;

  constructor(
    private NipponColorHelper: NipponColorHelperService,
  ) { }

  ngOnInit(): void {
    this.NipponColorHelper.SharedNipponColors.subscribe(res => this.RandomColor = res[0]);
  }



  // https://greensock.com/get-started/
  // 中文文檔 https://www.tweenmax.com.cn/
  // 技巧：最快的方式應該是先把圖的初始幀的屬性搞定，然後再確定結束或是動畫中間會停滯的幀的屬性，然後再用 google dev 模式調整
  // 原理：每一條 timeline 都是各自獨立的，所以如果不同物件想在同個 timeline 做動就需要兩條 timeline。
  ngAfterViewInit(): void {
    console.log('gsap', gsap);
    this.Part1Animation();
    this.Part2Animation();
  }

  @ViewChild("Img1") private _Img1: ElementRef;
  @ViewChild("Img2") private _Img2: ElementRef;
  @ViewChild("Img3") private _Img3: ElementRef;
  @ViewChild("Img4") private _Img4: ElementRef;

  Part1Animation() {
    // {repeat:2, repeatDelay: 1}
    var tl = gsap.timeline();
    var tl2 = gsap.timeline();
    var tl3 = gsap.timeline();
    var tl4 = gsap.timeline();
    tl.to(this._Img2.nativeElement, { duration: 2, x: 434, y: -19, opacity: 1, ease: "bounce" });
    tl.to(this._Img3.nativeElement, { duration: 2, x: 76, y: 210, opacity: 1, ease: "bounce" });
    tl.to(this._Img4.nativeElement, { duration: 2, x: -22, y: -3, opacity: 1, ease: "bounce" });
    tl2.to(this._Img2.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl3.to(this._Img3.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl4.to(this._Img4.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl.to(this._Img1.nativeElement, { duration: 2, x: 230, y: 205, opacity: 1, scale: 1.7, ease: "bounce", delay: 2 });
  }

  @ViewChild("Img5") private _Img5: ElementRef;
  @ViewChild("Img6") private _Img6: ElementRef;
  @ViewChild("Img7") private _Img7: ElementRef;
  @ViewChild("Img8") private _Img8: ElementRef;
  @ViewChild("Img9") private _Img9: ElementRef;
  @ViewChild("Img10") private _Img10: ElementRef;
  @ViewChild("Img11") private _Img11: ElementRef;

  Part2Animation() {
    var tl = gsap.timeline();
    var tl8 = gsap.timeline();
    var tl2 = gsap.timeline();
    var tl3 = gsap.timeline();
    var tl4 = gsap.timeline();
    var tl5 = gsap.timeline();
    var tl6 = gsap.timeline();
    var tl7 = gsap.timeline();
    tl.to(this._Img5.nativeElement, { duration: 2, x: -170, y: -20, opacity: 1, ease: "bounce" });
    tl.to(this._Img6.nativeElement, { duration: 2, x: -204, y: -34, opacity: 1, ease: "bounce" });
    tl.to(this._Img8.nativeElement, { duration: 2, x: -164, y: -21, opacity: 1, ease: "bounce" });
    tl8.to(this._Img7.nativeElement, { duration: 2, x: -22, y: -3, opacity: 1, ease: "bounce" });
    tl8.to(this._Img9.nativeElement, { duration: 2, x: -128, y: -3, opacity: 1, ease: "bounce" });
    tl8.to(this._Img10.nativeElement, { duration: 2, x: -144, y: 33, opacity: 1, ease: "bounce" });
    tl2.to(this._Img5.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl3.to(this._Img6.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl4.to(this._Img7.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl5.to(this._Img8.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl6.to(this._Img9.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl7.to(this._Img10.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl.to(this._Img11.nativeElement, { duration: 2, x: 81, y: 131, opacity: 1, scale: 1, ease: "bounce", delay: 2 });
  }
}
