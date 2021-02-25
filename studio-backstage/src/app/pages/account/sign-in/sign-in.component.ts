// 參考
// mat input ngModel https://stackoverflow.com/questions/49671478/ngmodel-is-not-working-when-an-input-field-is-repeated-with-the-property-inside
// formModule https://stackoverflow.com/questions/38892771/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input
// FormControl https://angular.tw/api/forms/FormControlName
// Router https://angular.tw/guide/router#accessing-query-parameters-and-fragments
// sessionStorage https://developer.mozilla.org/zh-TW/docs/Web/API/Window/sessionStorage
// momentjs https://stackoverflow.com/questions/35166168/how-to-use-moment-js-library-in-angular-2-typescript-app
// npm uninstall xx --save https://hsiangfeng.github.io/nodejs/20190626/1317979814/
// dayjs https://www.npmjs.com/package/dayjs
// dayjs 中文 https://www.mdeditor.tw/pl/2Mf3/zh-tw
// 按鈕觸發 https://www.itread01.com/content/1549474753.html

import { Component, OnInit } from '@angular/core';
import { FireAuthHelperService } from '../../../shared/common/fire-auth-helper/fire-auth-helper.service';
import { DialogHelperService } from '../../../shared/common/dialog-helper/dialog-helper.service';
import { MatDialogConfig } from '@angular/material/dialog';
import SignIn from '../../../shared/models/sign-in';
import { Router } from '@angular/router';
import { FireStorageHelperService } from '../../../shared/common/fire-storage-helper/fire-storage-helper.service'
import UserInfoLog from '../../../shared/models/user-info-log';
import { EnumSignInInfoState } from '../../../shared/enum/enum-user-info-log-state';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  DialogConfig: MatDialogConfig<any> = {};
  SignInState: any | null;
  SignInForm: SignIn = { Email: "", Password: "" };
  RandomColor: string = "";
  _UserInfoLog: UserInfoLog = { State: "", Time: "", Token: "", Email: "" };
  _EnumSignInInfoState = EnumSignInInfoState;

  constructor(
    private _FireAuthHelper: FireAuthHelperService,
    private _DialogHelperService: DialogHelperService,
    private _router: Router,
    private _FireStorageHelper: FireStorageHelperService
  ) {

  }

  ngOnInit(): void {

    this.RandomColor = this.getRandomColor();
    this._FireAuthHelper.CheckStorage();

  }

  // 帳號密碼登錄
  CommonSignIn() {
    this._FireAuthHelper.CommonSignIn(this.SignInForm)
      .then((value: any) => {
        console.log('Success!', value);
        this.SignInForm.Verification = 'Success!' + value;

        // 將上線資訊新增到 _RealtimeDatabase 用於 Auth Guard 認證
        this._UserInfoLog.Email = value.user.email;
        this._UserInfoLog.Time = dayjs().format('dddd, MMMM D, YYYY h:mm A');
        this._UserInfoLog.Token = value.user.a.c;
        this._UserInfoLog.State = this._EnumSignInInfoState.SignIn;
        let Reference: any = this._FireStorageHelper.GetAngularFireList('UserInfoLog').push(this._UserInfoLog);
        // console.log('Reference', Reference);

        // 將資料存到sessionStorage
        sessionStorage.setItem('Email', value.user.email);
        sessionStorage.setItem('AuthToken', value.user.a.c);
        sessionStorage.setItem('AuthTokenId', Reference.path.pieces_[1]);

        // 轉移網址
        this._router.navigate(['/dashboard/']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        this.SignInForm.Verification = 'Something went wrong:' + err.message;
      });
  }

  // 隨機取 rgb 字串
  getRandomColor() {
    var rgb = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',0.4)';
    // console.log(rgb);
    return rgb;
  }

  // SignInWithGoogle() {
  //   this._FireAuthHelper.SignInWithGoogle().then(
  //     GoogleInfo => {
  //       //console.log('GoogleInfo', GoogleInfo);
  //       this._FireAuthHelper.GetSignInState().subscribe(UserInfo => {
  //         //console.log('UserInfo', UserInfo);
  //         this.SignInState = UserInfo;
  //         //console.log('this.SignInState', this.SignInState);
  //         //this.DialogConfig.data = JSON.stringify(this.SignInState);
  //         this.DialogConfig.data = this.SignInState;
  //         //console.log('this.DialogConfig.data', this.DialogConfig.data);
  //         this._DialogHelperService.ShowMessage(this.DialogConfig);
  //       });
  //     }
  //   );
  // }

}