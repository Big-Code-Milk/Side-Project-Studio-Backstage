// 參考
// https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
// https://blog.kevinyang.net/2018/04/30/angular-firebase/
// https://ithelp.ithome.com.tw/articles/10194424

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FireAuthHelperService {

  SignInState: Observable<firebase.User | null> = this._AngularFireAuth.authState;

  constructor(
    private _AngularFireAuth: AngularFireAuth,
    private _Router: Router
  ) { }

  // 使用 Google 登入
  SignInWithGoogle() {
    return this._AngularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


}
