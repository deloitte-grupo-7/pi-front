import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() navToggle = new EventEmitter();

  isNavActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    this.isNavActive = !this.isNavActive;
    this.navToggle.emit();
  }

}
