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

  @ViewChild("Img1") private _Img1: ElementRef;
  @ViewChild("Img2") private _Img2: ElementRef;
  @ViewChild("Img3") private _Img3: ElementRef;
  @ViewChild("Img4") private _Img4: ElementRef;

  // https://greensock.com/get-started/
  // 中文文檔 https://www.tweenmax.com.cn/
  // 技巧：最快的方式應該是先把圖的初始幀的屬性搞定，然後再確定結束或是動畫中間會停滯的幀的屬性，然後再用 google dev 模式調整
  // 原理：每一條 timeline 都是各自獨立的，所以如果不同物件想在同個 timeline 做動就需要兩條 timeline。
  ngAfterViewInit(): void {
    console.log(this._Img1);
    console.log('gsap', gsap);
    // repeatDelay: 1
    var tl = gsap.timeline();
    var tl2 = gsap.timeline();
    var tl3 = gsap.timeline();
    var tl4 = gsap.timeline();
    tl.to(this._Img2.nativeElement, { duration: 2, x: 576, y: 40, opacity: 1, ease: "bounce" });
    tl.to(this._Img3.nativeElement, { duration: 2, x: 172, y: 210, opacity: 1, ease: "bounce" });
    tl.to(this._Img4.nativeElement, { duration: 2, x: 114, y: 42, opacity: 1, ease: "bounce" });
    tl2.to(this._Img2.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl3.to(this._Img3.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl4.to(this._Img4.nativeElement, { duration: 2, opacity: 0.2, delay: 7 });
    tl.to(this._Img1.nativeElement, { duration: 2, x: 364, y: 205, opacity: 1, scale: 1.7, ease: "bounce", delay: 2 });
  }
}
