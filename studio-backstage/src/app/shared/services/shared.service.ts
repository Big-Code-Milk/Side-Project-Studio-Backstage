//參考
// 觀察者模式 https://limeii.github.io/2019/07/rxjs-subject/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _Data: any[] = [];
  private _BehaviorSubject = new BehaviorSubject(this._Data);
  SharedData = this._BehaviorSubject.asObservable();

  constructor(
  ) { }

  SeAccounts<T>(Data: T[]) {
    this._BehaviorSubject.next(Data);
  }

}
