import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavToggleService } from 'src/app/services/nav-toggle.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    NavToggleService.toggleNav();
  }

}
