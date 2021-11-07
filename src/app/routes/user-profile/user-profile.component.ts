import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Classes';
import { HttpService } from 'src/app/services/http.service';

const mockUser: User = {
  id: "1",
  username: "sprindovaldo",
  name: "Sprindovaldo",
  email: "sprindo@valdo.com",
  tagline:"Catador de coquinho",
  description:"Recolho coquinhos pra contribuir com o mundo",
  imgURL:"https://i1.sndcdn.com/artworks-000223684427-ygy1zd-t500x500.jpg",
  ratings: [ { author: "valdosprindo", score: 5, text: "excelente" }],
}


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(private router: Router) { 
    this.user = mockUser;
    console.log(this.router.url);

    HttpService.getUser(this.router.url).subscribe(
      {
        next: (data: { user: User })=> {
          this.user = data.user;
        },
        error: (err: Error) => console.error(err)
      }
    );

    
  }

  ngOnInit(): void {
  }
}
