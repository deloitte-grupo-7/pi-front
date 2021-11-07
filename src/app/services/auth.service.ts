import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static accToken: string;
  static refToken: string;

  static handleTokenResponse(data: Object, staySignedIn: boolean) {
    this.accToken = (<{access_token: string}>data).access_token;
    this.refToken = (<{refresh_token: string}>data).refresh_token;
    const STORAGE_KEY = 'GETSERV';

    if (staySignedIn) {
      window.localStorage.setItem(STORAGE_KEY, this.refToken);
    } else {
      window.sessionStorage.setItem(STORAGE_KEY, this.refToken);
    }
    window.sessionStorage.setItem(STORAGE_KEY, this.accToken);
  }
}
