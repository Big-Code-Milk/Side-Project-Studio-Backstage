import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  _Email: string | null = "";
  NowSideNavState: string = "SideNavActived";

  constructor() {

  }

  ngOnInit(): void {
    this._Email = sessionStorage.getItem('Email');
  }

  GetNowSideNavState() {
    if (this.NowSideNavState === "SideNavActived") {
      this.NowSideNavState = "SideNavInactive";
    } else {
      this.NowSideNavState = "SideNavActived";
    }
  }

}
