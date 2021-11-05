import { Component, OnInit } from '@angular/core';
import { ProfileEditForm } from 'src/app/models/UserForm';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: ProfileEditForm[] = [];

  constructor(private us: UserService ) { 
    this.us.getUser().subscribe(
      {
        next: user => {
          this.user = user;
        },
        error: err => console.error(err)
      }
    );
  }

  ngOnInit(): void {
  }
}
