import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LocalContent } from 'src/app/models/Classes';
import { AuthService } from 'src/app/services/auth.service';
import { NavToggleService } from 'src/app/services/nav-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: LocalContent;
  isSignedIn!: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    AuthService.isSignedIn().subscribe((bool) => this.isSignedIn = bool);
    AuthService.getLocalContent().subscribe((lc) => this.user = lc);
  }
  
  toggleNav(): void {
    NavToggleService.toggleNav();
  }
  
  navigateToUserProfile(userslug: string): void {
    this.router.navigate(['u', userslug]);
  }

  signOut(): void {
    AuthService.signOut();
  }
}
