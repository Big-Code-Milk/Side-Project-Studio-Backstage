// 參考
// https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
// https://blog.kevinyang.net/2018/04/30/angular-firebase/
// https://ithelp.ithome.com.tw/articles/10194424
// 權限管理 https://ithelp.ithome.com.tw/articles/10206354

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireAuthHelperService {

  SignInState: Observable<firebase.User | null>;

  constructor(
    private _AngularFireAuth: AngularFireAuth,
  ) {
    this.SignInState = this._AngularFireAuth.authState;

    // 初始化登入資訊到 window.sessionStorage 頁面沒被關閉
    this.SignInState.subscribe(UserInfo => {

    });

    // window.localStorage 永久保存直到被刪除

  }

  // 使用 Google 登入
  SignInWithGoogle() {
    return this._AngularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // 登出
  SignOut() {
    this._AngularFireAuth.signOut();
  }

  GetSignInState() {
    return this.SignInState;
  }

  // 使用匿名登入
  //  signInAnonymously() {
  //   return this.afAuth.auth.signInAnonymously()
  //       .then(this.redirectToPopup());
  // }

  // 使用 GitHub 登入
  // signInWithGithub() {
  //   return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
  //       .then(this.redirectToPopup());
  // }

}
