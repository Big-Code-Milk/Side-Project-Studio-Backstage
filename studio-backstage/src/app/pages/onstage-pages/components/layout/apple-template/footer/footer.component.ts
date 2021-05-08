import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  NowDate = new Date();
  StudioName = "66 IT Studio";

  constructor() { }

  ngOnInit(): void {
  }

}
