import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static handleTokenResponse(data: Object, staySignedIn: boolean) {
    const acctoken = (<{access_token: string}>data).access_token;
    const reftoken = (<{refresh_token: string}>data).refresh_token;
    const STORAGE_KEY = 'GETSERV';

    if (staySignedIn) {
      window.localStorage.setItem(STORAGE_KEY, reftoken);
    } else {
      window.sessionStorage.setItem(STORAGE_KEY, reftoken);
    }
    window.sessionStorage.setItem(STORAGE_KEY, acctoken);
  }
}
