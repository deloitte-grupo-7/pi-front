import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavToggleService {

  public static isNavActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public static isNavActive(): Observable<boolean> {
    return this.isNavActive$.asObservable();
  }
  public static toggleNav(): void {
    this.isNavActive$.next(!this.isNavActive$.value);
  }
}
