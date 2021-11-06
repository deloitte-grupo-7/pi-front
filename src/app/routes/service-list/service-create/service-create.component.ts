import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss']
})
export class ServiceCreateComponent implements OnInit {

  cancelService:EventEmitter<null> = new EventEmitter();
  
  newService:Post;

  constructor(
    private ps:PostService,
    private router: Router,
    ) {
      this.newService = new Post()
     }

  postService(p: Post){
    console.log('tentando salvar')
    this.ps.postService(this.newService).subscribe(
      {
        next: data => {
          console.log(data)
        },
        error: err => console.error(err)  
      }
    );
  }

  cancel(){
    console.log('tentando cancelar')
    this.cancelService.emit();
    this.router.navigateByUrl('/')
  }

  ngOnInit(): void {
  }
}
