import { Component, OnInit } from '@angular/core';
import { FireAuthHelperService } from '../../../shared/common/fire-auth-helper/fire-auth-helper.service';
import { DialogHelperService } from '../../../shared/common/dialog-helper/dialog-helper.service';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  DialogConfig: MatDialogConfig<any> = {};
  SignInState: any | null;

  constructor(
    private _FireAuthHelper: FireAuthHelperService,
    private _DialogHelperService: DialogHelperService
  ) { }

  ngOnInit(): void { }

  SignInWithGoogle() {
    this._FireAuthHelper.SignInWithGoogle().then(
      x => {
        console.log('SignInWithGoogle', x);
        this._FireAuthHelper.GetSignInState().subscribe(y => {
          console.log('GetSignInState', y);
          this.SignInState = y;
          this.DialogConfig.data = JSON.stringify(this.SignInState);
          this._DialogHelperService.ShowMessage(this.DialogConfig);
        });
      }
    );


  }

}
