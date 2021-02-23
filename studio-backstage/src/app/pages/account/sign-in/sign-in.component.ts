import { Component, OnInit } from '@angular/core';
import { FireAuthHelperService } from '../../../shared/common/fire-auth-helper/fire-auth-helper.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private _FireAuthHelper: FireAuthHelperService
  ) { }

  ngOnInit(): void { }

  SignInWithGoogle() {
    this._FireAuthHelper.SignInWithGoogle();
  }

}
