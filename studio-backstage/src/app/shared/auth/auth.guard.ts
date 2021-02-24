import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let responce: boolean = false;

    let AuthToken = sessionStorage.getItem('AuthToken');

    if (AuthToken !== undefined && AuthToken !== null && AuthToken !== "") {
      responce = true;
    }

    // console.log('canActivate', responce);

    return responce;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    let responce: boolean = false;

    let AuthToken = sessionStorage.getItem('AuthToken');

    if (AuthToken !== undefined && AuthToken !== null && AuthToken !== "") {
      responce = true;
    }

    // console.log('canActivateChild', responce);

    return responce;
  }
}
