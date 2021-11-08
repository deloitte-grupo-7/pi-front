import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormTemplate } from 'src/app/components/form/form.component';
import { HttpService } from 'src/app/services/http.service';
import { Post } from 'src/app/models/Classes';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent extends FormTemplate {

  constructor(private router: Router) {
    super(/(title)|(description)/);
   }


  onFormSubmit(ev: Event): void {
    ev.preventDefault();
    console.log(this.form);

    const form: Map<string, any> = new Map();

    this.fields.forEach((field, i) => form.set(field.name, this.form.value[i]));

    console.log(new Post(form));
    HttpService.postPost(new Post(form)).subscribe(
      {
        next: data => {
          console.log(data);
          PostsService.load(this.router.url.substring(3));
        },

        error: err => console.log(err),
        complete: () => {
          console.log("Requisição terminada");
        },
      }
    )
  }
}
