import { Component } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { Router } from '@angular/router';
import { FormTemplate } from 'src/app/components/form/form.component';
import { NewService } from 'src/app/models/NewService';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent extends FormTemplate {

  constructor(private router: Router) {
    super(/(titulo)|(descricao)/);
   }


  onFormSubmit(ev: Event): void {
    ev.preventDefault();
    console.log(this.form);

    const form: Map<string, any> = new Map();

    let i = 0;
    this.fields.forEach(field => {
      form.set(field.name, this.form.value[i]);
      i++;
    });

    console.log(new NewService(form));
    ValidationService.createServicePost(new NewService(form)).subscribe(
      {
        next: data => {
          this.router.navigateByUrl('');
          console.log(data);
          window.localStorage.setItem('getserv', JSON.stringify(data));
        },

        error: err => console.log(err),
        complete: () => console.log("Requisição terminada"),
      }
    )

  }

}
