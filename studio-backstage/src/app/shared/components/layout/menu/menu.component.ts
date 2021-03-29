import { Component, OnInit } from '@angular/core';
import { FireAuthHelperService } from '../../../common/fire-auth-helper/fire-auth-helper.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(
    public _FireAuthHelper: FireAuthHelperService
  ) {
  }

  ngOnInit(): void {
  }

  Checking() {
    let SignInState = this._FireAuthHelper.GetSignInState();
    SignInState.subscribe(x => {
      console.log('SignInState', x);
    })
  }
}
