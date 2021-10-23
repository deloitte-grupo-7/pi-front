import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavToggleService {

  private static isNavActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public static getIsNavActive(): Observable<boolean> {
    return this.isNavActive$.asObservable();
  }
  public static toggleNav(isActive: boolean) {
    this.isNavActive$.next(isActive);
  }
}
