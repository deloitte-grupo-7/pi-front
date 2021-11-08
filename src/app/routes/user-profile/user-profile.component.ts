import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Classes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user!: User;
  isAuthor!: boolean;

  constructor(private router: Router) {
    const username: string = this.router.url.substring(3);
    AuthService.getLocalContent().subscribe({
      next: data => this.isAuthor = data.username == username
    });
  }

  ngOnInit(): void {
  }
}
