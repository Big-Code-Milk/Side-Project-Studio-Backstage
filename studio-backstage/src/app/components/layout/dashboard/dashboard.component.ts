import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  NowSideNavState: string = "SideNavActived";

  constructor() { }

  ngOnInit(): void {
  }

  GetNowSideNavState() {
    if (this.NowSideNavState === "SideNavActived") {
      this.NowSideNavState = "SideNavInactive";
    } else {
      this.NowSideNavState = "SideNavActived";
    }
  }

}
