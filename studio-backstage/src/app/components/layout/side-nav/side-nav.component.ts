import { Component, OnInit } from '@angular/core';
import { FireStorageHelperService } from '../../../shared/common/fire-storage-helper/fire-storage-helper.service'
import UserInfoLog from '../../../shared/models/user-info-log'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  _Email: string | null = "";
  _UserInfoLog = [] as UserInfoLog[];

  constructor(
    private _FireStorageHelper: FireStorageHelperService
  ) {

    // valueChanges 取出來是過濾掉 key 的 View 可以直接用
    this._FireStorageHelper.GetAngularFireList('UserInfoLog').valueChanges().subscribe((Data: any) => {
      this._UserInfoLog = Data.reverse();
      //console.log('this._UserInfoLog', this._UserInfoLog);
    });

    //console.log('SideNavComponent');
  }

  ngOnInit(): void {
    this._Email = sessionStorage.getItem('Email');
  }

}
