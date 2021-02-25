import { Component, OnInit } from '@angular/core';
import { FireStorageHelperService } from '../../../shared/common/fire-storage-helper/fire-storage-helper.service'
import UserInfoLog from '../../../shared/models/user-info-log'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  _UserInfoLog = [] as UserInfoLog[];

  constructor(
    private _FireStorageHelper: FireStorageHelperService
  ) {

  }

  ngOnInit(): void {
    this._FireStorageHelper.GetAngularFireList('UserInfoLog').valueChanges().subscribe((Data: any) => {
      console.log('Data', Data)
    });
  }

}
