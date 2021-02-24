// 參考
// 實作類似 Flux https://medium.com/4cats-io/%E6%B7%B1%E5%85%A5%E6%B7%BA%E5%87%BA-flux-44a48c320e11
// angularfire 套件官網 https://github.com/angular/angularfire
// [Angular Firebase 入門與實做] https://ithelp.ithome.com.tw/m/articles/10193310
// [Angular] 與 Firebase 共舞 https://blog.kevinyang.net/2018/04/30/angular-firebase/
// 免費額度 https://firebase.google.com/pricing/

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireStorageHelperService {


  // 建構子( 注入此類別參數 ){ 建構子執行之方法 }
  constructor(
    private _RealtimeDatabase: AngularFireDatabase,
    private _CloudFirestore: AngularFirestore
  ) {
    // 建構此 service 時就會執行

  }

  // 方法名稱< 型別 >( 參數:型別 ) : 回傳值型別 { 方法實作 return 回傳值; }
  // GetObservableList<T>(ValuePath: string): Observable<T> | Observable<any> {
  //   const _data = this._RealtimeDatabase.list(ValuePath);
  //   return _data.valueChanges();
  // }

  // T 泛型 傳啥進來就啥型別

  GetAngularFireObject<T>(QueryPath: any): AngularFireObject<T> {
    return this._RealtimeDatabase.object(QueryPath);
  }

  GetAngularFireList<T>(QueryPath: any): AngularFireList<T> {
    return this._RealtimeDatabase.list(QueryPath);
  }

  GetKeys(QueryPath: string) {
    let _Responce: AngularFireList<any> = this._RealtimeDatabase.list(QueryPath)
    return _Responce.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
}
