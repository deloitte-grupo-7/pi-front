import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalContent } from '../models/Classes';

const STORAGE_KEY = 'GETSERV';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static localContent$: BehaviorSubject<LocalContent> = new BehaviorSubject<LocalContent>(AuthService.load());
  static isSignedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(AuthService.init());

  static isSignedIn(): Observable<boolean> {
    return this.isSignedIn$.asObservable();
  }

  static getLocalContent(): Observable<LocalContent> {
    return this.localContent$.asObservable();
  }

  static signIn(res: LocalContent, staySignedIn: boolean): void {
    this.localContent$.next(res);
    this.isSignedIn$.next(true);
    console.log(this.isSignedIn$.value);
    if (staySignedIn) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(res));
    } else {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(res));
    }
  }

  static signOut(): void {
    this.isSignedIn$.next(false);
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  static load(): LocalContent {
    const ss = window.sessionStorage.getItem(STORAGE_KEY);
    const ls = window.localStorage.getItem(STORAGE_KEY);
    if (ss) return JSON.parse(ss);
    else if (ls) return JSON.parse(ls);
    return { username: '', imgUrl: '', acc_token: '', ref_token: ''};
  }
  
  static init(): boolean { 
    const ss = window.sessionStorage.getItem(STORAGE_KEY);
    const ls = window.localStorage.getItem(STORAGE_KEY);

    if (ss || ls) return true;
    else return false;
  }
}
