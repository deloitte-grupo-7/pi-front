import { Component } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { SignUpForm } from 'src/app/models/UserForm';
import { Router } from '@angular/router';
import { FormTemplate } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpPage extends FormTemplate {

  constructor(private router: Router) {
    super(/(username)|(name)|(cpf)|(email)|(birthday)|(password)|(passconf)/);
  }

  onFormSubmit(ev: Event): void {
    ev.preventDefault();
    console.log(this.form);

    this.signUpRequest(this.formMap());
  }

  signUpRequest(form: Map<string, any>): void {
    ValidationService.signUpRequest(new SignUpForm(form)).subscribe(
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
