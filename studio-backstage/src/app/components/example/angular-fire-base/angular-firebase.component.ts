import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { FireStorageHelperService } from '../../../shared/helpers/fire-storage-helper/fire-storage-helper.service';

@Component({
  selector: './app-demo-angular-fire-base',
  templateUrl: './angular-firebase.component.html',
  styleUrls: ['./angular-firebase.component.css']
})
export class AngularFirebaseComponent implements OnInit {

  items$: Observable<any[]>;
  item$: Observable<any>;
  ServiceItems: Observable<any[]>;

  constructor(
    private _FireStorageHelper: FireStorageHelperService,
    private _db: AngularFireDatabase
  ) {
    console.log('this._db', this._db);
    // 訂閱觀察者物件後，雲 db 資料改動，同時也會影響此處資料改動
    this.items$ = this._db.list("item").valueChanges();

    // 直接使用 fireAG 方法操作
    this.item$ = this._db.object('item').valueChanges();

    // 利用共用 Service 取得觀察者物件
    this.ServiceItems = this._FireStorageHelper.GetList("item");

    // 觀察者物件在訂閱回傳時 console.log
    this.item$.subscribe(x => { console.log(x); });
  }

  ngOnInit(): void {
  }

}
