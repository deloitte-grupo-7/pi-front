import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.user = mockUser;
   }

  ngOnInit(): void {
  }
}
