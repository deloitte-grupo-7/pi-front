import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


const mockUser = {
  img:"https://i1.sndcdn.com/artworks-000223684427-ygy1zd-t500x500.jpg",
  name:"Sprindovaldo",
  prof:"Catador de coquinho",
  bio:"Recolho coquinhos pra contribuir com o mundo"
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  // user: ProfileEditForm[] = [];

  constructor(private us: UserService ) { 
    this.user = mockUser;

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
