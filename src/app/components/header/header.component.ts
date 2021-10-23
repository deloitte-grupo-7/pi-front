import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavToggleService } from 'src/app/services/nav-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // NavToggleService.getIsNavActive().subscribe(e => this.isNavActive);
  }

}
