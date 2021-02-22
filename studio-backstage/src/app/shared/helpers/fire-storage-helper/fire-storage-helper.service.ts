import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireStorageHelperService {
  // 參考
  // 實作類似 Flux https://medium.com/4cats-io/%E6%B7%B1%E5%85%A5%E6%B7%BA%E5%87%BA-flux-44a48c320e11
  // angularfire 套件官網 https://github.com/angular/angularfire
  // [Angular Firebase 入門與實做] https://ithelp.ithome.com.tw/m/articles/10193310
  // [Angular] 與 Firebase 共舞 https://blog.kevinyang.net/2018/04/30/angular-firebase/
  // 免費額度 https://firebase.google.com/pricing/

  // 建構子( 注入此類別參數 ){ 建構子執行之方法 }
  constructor(
    private _RealtimeDatabase: AngularFireDatabase,
    private _CloudFirestore: AngularFirestore
  ) { }

  // 方法名稱< 型別 >( 參數:型別 ) : 回傳值型別 { 方法實作 return 回傳值; }
  GetObject<T>(url: string): Observable<T> | Observable<any> {
    const _data = this._RealtimeDatabase.object(url);
    return _data.valueChanges(); // 資料本身不包含key
  }

  GetList<T>(url: string): Observable<T> | Observable<any> {
    const _data = this._RealtimeDatabase.list(url);
    return _data.valueChanges();
  }

  GetObjectByKey<T>(url: string): Observable<T> | Observable<any> {
    const _data = this._RealtimeDatabase.object(url);
    return _data.snapshotChanges(); // 資料本身(payload)、key、prevKey、type
  }

  GetListByKey<T>(url: string): Observable<T> | Observable<any> {
    const _data = this._RealtimeDatabase.list(url);
    return _data.snapshotChanges();
  }
}
