import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-onstage-home',
  templateUrl: './onstage-home.component.html',
  styleUrls: ['./onstage-home.component.css']
})
export class OnstageHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("Desktop") private _Desktop: ElementRef;


  ngAfterViewInit(): void {
    console.log(this._Desktop);
  }
}
