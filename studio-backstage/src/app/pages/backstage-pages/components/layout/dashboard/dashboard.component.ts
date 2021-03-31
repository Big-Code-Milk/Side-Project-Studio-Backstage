import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DialogHelperService } from 'src/app/shared/common/dialog-helper/dialog-helper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  _Email: string | null = "";
  NowSideNavState: string = "SideNavActived";
  NotMobile: boolean = true;
  @ViewChild('sideNav') _MatSidenav: MatSidenav;

  constructor(
    // ViewChild 生命週期問題導致抓不到 https://dotblogs.com.tw/Leo_CodeSpace/2019/05/08/145634
    // https://ithelp.ithome.com.tw/articles/10213494
    private _ChangeDetectorRef: ChangeDetectorRef, // 當有cd發生時觸發
    // ChangeDetectionStrategy.Default @Input值有變就觸發
    // by value: 文字、數字
    // by reference: Object // OnPush時，同Object視為沒異動
    public _DialogHelper: DialogHelperService,
  ) {
    // console.log('_MatSidenav', this._MatSidenav);
  }

  ngOnInit(): void {

    this._ChangeDetectorRef.detectChanges(); // 觸發 AG 變更檢測

    this._Email = sessionStorage.getItem('Email');
    // 手機板 Init
    // 取畫面大小 https://dotblogs.com.tw/jenny_ming/2013/06/06/105333
    // console.log('document.body.clientWidth', document.body.clientWidth);
    if (document.body.clientWidth < 767) {
      this.NotMobile = false;
      this._MatSidenav.close();
    }
    // console.log('this.NotMobile', this.NotMobile);

    // localstage 紀錄 dashboard side nav 開關
  }

  GetNowSideNavState() {
    if (this.NowSideNavState === "SideNavActived") {
      this.NowSideNavState = "SideNavInactive";
    } else {
      this.NowSideNavState = "SideNavActived";
    }
  }
  GetSideNavObject(sideNav: MatSidenav) {
    // console.log(sideNav);
  }

  fold() {
    this._MatSidenav.close();
    this.GetNowSideNavState();
  }
}
