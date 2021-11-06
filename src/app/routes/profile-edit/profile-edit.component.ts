import { Component } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { ProfileEditForm } from 'src/app/models/UserForm';
import { Router } from '@angular/router';
import { FormTemplate } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent extends FormTemplate {

  constructor(private router: Router) {
    super(/(username)|(name)|(adress)|(email)|(birthday)|(bio)|(password)|(passconf)/);
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

    console.log(new ProfileEditForm(form));
    ValidationService.updateProfile(new ProfileEditForm(form)).subscribe(
      {
        next: data => {
          this.router.navigateByUrl('/profile');
          console.log(data);
          window.localStorage.setItem('getserv', JSON.stringify(data));
        },

        error: err => console.log(err),
        complete: () => console.log("Requisição terminada"),
      }
    )

  }


}
