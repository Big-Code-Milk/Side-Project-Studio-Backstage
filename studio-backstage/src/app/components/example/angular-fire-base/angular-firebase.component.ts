import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FireStorageHelperService } from '../../../shared/helpers/fire-storage-helper/fire-storage-helper.service';
import { DialogHelperService } from '../../../shared/helpers/dialog-helper/dialog-helper.service';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: './app-demo-angular-fire-base',
  templateUrl: './angular-firebase.component.html',
  styleUrls: ['./angular-firebase.component.css']
})
export class AngularFirebaseComponent implements OnInit {

  items$: Observable<any[]>;
  // item$: Observable<any>;
  // ServiceItems: Observable<any[]>;

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  _DialogConfig: MatDialogConfig<any> = {};

  constructor(
    private _FireStorageHelper: FireStorageHelperService,
    private _db: AngularFireDatabase,
    private _DialogHelper: DialogHelperService
  ) {

    this.items = _FireStorageHelper.GetKeys('items');
    console.log('this.items', this.items);
    this.itemsRef = _db.list('items');

    // console.log('this._db', this._db);
    // 訂閱觀察者物件後，雲 db 資料改動，同時也會影響此處資料改動
    // snapshotChanges() 資料本身(payload)、key、prevKey、type
    this.items$ = this._db.list("items").valueChanges();

    // 直接使用 fireAG 方法操作 valueChanges() 資料本身不包含key
    // this.item$ = this._db.object('item').valueChanges();

    // 利用共用 Service 取得觀察者物件
    // this.ServiceItems = this._FireStorageHelper.GetKeys("item");
    // console.log('this.ServiceItems', this.ServiceItems);
    // 觀察者物件在訂閱回傳時 console.log
    // this.item$.subscribe(x => { console.log('subscribe:' + x); });
  }

  ngOnInit(): void {
  }

  addItem(newName: string) {
    this.itemsRef.push({ text: newName })
      .then(_ => {
        console.log('success');
        this._DialogHelper.ShowMessage(this._DialogConfig);
      })
      .catch(err => {
        this._DialogConfig.data = err;
        console.log(err, 'You do not have access!');
        this._DialogHelper.ShowMessage(this._DialogConfig);
      });
  }

  updateItem(key: string, newText: string) {
    console.log('key:', key, 'newText:', newText);
    this.itemsRef.update(key, { text: newText })
      .then(_ => console.log('success'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

  deleteItem(key: string) {
    this.itemsRef.remove(key)
      .then(_ => console.log('success'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

  deleteEverything() {
    this.itemsRef.remove()
      .then(_ => console.log('success'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

}
