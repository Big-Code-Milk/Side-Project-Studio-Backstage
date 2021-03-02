import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _BehaviorSubject = new BehaviorSubject([]);
  SharedData = this._BehaviorSubject.asObservable();

  constructor(
  ) { }

  SeAccounts<T>(Data: T) {
    this._BehaviorSubject.next([]);
  }

}
