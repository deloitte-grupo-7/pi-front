import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NavToggleService } from 'src/app/services/nav-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  
  toggleNav(): void {
    NavToggleService.toggleNav();
    console.log(NavToggleService.isNavActive$.value)
  }
}
