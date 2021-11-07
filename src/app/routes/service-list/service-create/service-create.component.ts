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
  
  newService!:Post;

  constructor(private router: Router) {}

  postService(){
    HttpService.postPost(this.newService).subscribe(
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
