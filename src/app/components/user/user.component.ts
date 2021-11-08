import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Classes';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user!: User;

  constructor(private router: Router) { 
    const username: string = this.router.url.substring(3);

    HttpService.getUser(username).subscribe(
      {
        next: (data: User)=> {
          console.log(data);
          this.user = data;
        },
        error: (err: Error) => console.error(err)
      }
    );
  }

  ngOnInit(): void {
  }

  getAltText(): string {
    return `foto de ${this.user.name}`;
  }
}
