// 參考
// https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
// https://blog.kevinyang.net/2018/04/30/angular-firebase/
// https://ithelp.ithome.com.tw/articles/10194424
// 權限管理 https://ithelp.ithome.com.tw/articles/10206354
// 一般登入 https://alligator.io/angular/firebase-authentication-angularfire2/
// IndexedDB https://developer.mozilla.org/zh-TW/docs/Web/API/IndexedDB_API/Using_IndexedDB

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import SignIn from '../../../shared/models/sign-in';

@Injectable({
  providedIn: 'root'
})
export class FireAuthHelperService {

  SignInState: Observable<firebase.User | null>;
  SignInForm: SignIn = { Email: "", Password: "" };

  constructor(
    private _AngularFireAuth: AngularFireAuth,
  ) {
    this.SignInState = this._AngularFireAuth.authState;

    // window.localStorage 永久保存直到被刪除
    // window.sessionStorage 頁面沒被關閉
    // FireAuth 會加一包 IndexedDB 在 local
  }

  // 一般登入
  CommonSignIn(SignInForm: SignIn) {
    return this._AngularFireAuth.signInWithEmailAndPassword(SignInForm.Email, SignInForm.Password);
  }

  // 登出
  SignOut() {
    this._AngularFireAuth.signOut();
  }

  // 取得使用者資訊
  GetSignInState() {
    return this.SignInState;
  }

  // 註冊
  // signup(email: string, password: string) {
  //   this.firebaseAuth
  //     .auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(value => {
  //       console.log('Success!', value);
  //     })
  //     .catch(err => {
  //       console.log('Something went wrong:',err.message);
  //     });
  // }

  // 使用 Google 登入
  // SignInWithGoogle() {
  //   return this._AngularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }

  // 使用匿名登入
  //  SignInAnonymously() {
  //   return this.afAuth.auth.signInAnonymously()
  //       .then(this.redirectToPopup());
  // }

  // 使用 GitHub 登入
  // SignInWithGithub() {
  //   return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
  //       .then(this.redirectToPopup());
  // }

}
