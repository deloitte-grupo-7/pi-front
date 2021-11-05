import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceList implements OnInit {
    // private services!: Produto[];
  services: Post[] = [];

  constructor( private ps: PostService) { 
     this.ps.getService().subscribe(
      {
        next: services => {
          this.services = services;
        },
        error: err => console.error(err)  
      }
    );
  }

  ngOnInit(): void {
  }
}
