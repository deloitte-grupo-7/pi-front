import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Classes';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceList implements OnInit {
   
  services: Post[] = [];

  constructor() { 
    const username: string = "sprindovaldo"
     HttpService.getPosts(username).subscribe(
      {
        next: data => {
          this.services = data;
        },
        error: err => console.error(err)  
      }
    );
  }

  ngOnInit(): void {
  }
}
