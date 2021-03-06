import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(): boolean | UrlTree {
    return (AuthService.isSignedIn$.value)
              ? this.router.parseUrl('')
              : true;
  }
}