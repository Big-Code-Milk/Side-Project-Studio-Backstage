import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  NowDate = new Date();
  StudioName = "育愷新天地";

  constructor() { }

  ngOnInit(): void {
  }

}
