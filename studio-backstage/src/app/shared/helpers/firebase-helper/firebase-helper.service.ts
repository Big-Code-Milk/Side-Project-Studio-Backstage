import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseHelperService {
  // 實作類 Flux https://medium.com/4cats-io/%E6%B7%B1%E5%85%A5%E6%B7%BA%E5%87%BA-flux-44a48c320e11
  // Interfase = Action
  // Observable = Dispatcher
  // Store = Service
  // View = View

  // 方法可參考 angularfire 套件官網 https://github.com/angular/angularfire

  // 建構子( 注入此類別參數 ){ 建構子執行之方法 }
  constructor(
    private _RealtimeDatabase: AngularFireDatabase
  ) { }
  // 免費額度 https://firebase.google.com/pricing/

  // 方法名稱< 型別 >( 參數:型別 ) : 回傳值型別 { 方法實作 return 回傳值; }
  GetObject<T>(url: string): Observable<T> | Observable<any> {
    const _data = this._RealtimeDatabase.object(url);
    return _data.valueChanges(); // 資料本身不包含key
  }

  GetList<T>(url: string): Observable<T> | Observable<any> {
    const _data = this._RealtimeDatabase.list(url);
    return _data.valueChanges();
  }

  // 詳細可參考 https://ithelp.ithome.com.tw/m/articles/10193310

  GetObjectByKey<T>(url: string): Observable<T> | Observable<any> {
    const _data = this._RealtimeDatabase.object(url);
    return _data.snapshotChanges(); // 資料本身(payload)、key、prevKey、type
  }

  GetListByKey<T>(url: string): Observable<T> | Observable<any> {
    const _data = this._RealtimeDatabase.list(url);
    return _data.snapshotChanges();
  }
}
