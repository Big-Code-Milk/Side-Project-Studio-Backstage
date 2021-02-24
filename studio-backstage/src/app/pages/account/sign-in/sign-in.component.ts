// 參考
// mat input ngModel https://stackoverflow.com/questions/49671478/ngmodel-is-not-working-when-an-input-field-is-repeated-with-the-property-inside
// formModule https://stackoverflow.com/questions/38892771/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input
// FormControl https://angular.tw/api/forms/FormControlName
// Router https://angular.tw/guide/router#accessing-query-parameters-and-fragments

import { Component, OnInit } from '@angular/core';
import { FireAuthHelperService } from '../../../shared/common/fire-auth-helper/fire-auth-helper.service';
import { DialogHelperService } from '../../../shared/common/dialog-helper/dialog-helper.service';
import { MatDialogConfig } from '@angular/material/dialog';
import SignIn from '../../../shared/models/sign-in';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(
    private _FireAuthHelper: FireAuthHelperService,
    private _DialogHelperService: DialogHelperService,
    private router: Router
  ) {


  }

  ngOnInit(): void {

    this.RandomColor = this.getRandomColor();

  }

  // 帳號密碼登錄
  CommonSignIn() {
    this._FireAuthHelper.CommonSignIn(this.SignInForm)
      .then(value => {
        console.log('Success!', value);
        this.SignInForm.Verification = 'Success!' + value;
        // this.router.navigate(['/heroes', { id: heroId }]);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        this.SignInForm.Verification = 'Something went wrong:' + err.message;
      });
  }

  // 隨機取 rgb 字串
  getRandomColor() {
    var rgb = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',0.4)';
    console.log(rgb);
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
