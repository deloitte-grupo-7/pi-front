import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Classes';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss']
})
export class ServiceCreateComponent implements OnInit {

  cancelService:EventEmitter<null> = new EventEmitter();
  
  newPost!:Post;

  constructor(
    private router: Router,
    private hs: HttpService,
    ) {}

  postService(){
    HttpService.postPost(this.newPost).subscribe(
      {
        next: data => {
          console.log(data)
        },
        error: err => console.error(err)  
      }
    );
  }

  getImg(){
    HttpService.getImg().subscribe(
      {
        next: data => {
          this.hs=data;
        },
        error: err =>{
          console.log(err)
        }
      }
    )
  }

  postImg(){
    HttpService.postImg(this.newPost).subscribe(
      {
        next: data => {
          console.log(data);
        },
        error: err =>{
          console.log(err)
        }
      }
    )
  }

  cancel(){
    console.log('tentando cancelar')
    this.cancelService.emit();
    this.router.navigateByUrl('/')
  }
 

  ngOnInit(): void {
  }
}
