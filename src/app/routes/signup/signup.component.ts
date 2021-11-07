import { Component } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { SignUpForm } from 'src/app/models/Classes';
import { Router } from '@angular/router';
import { FormTemplate } from 'src/app/components/form/form.component';
import { AbstractControl } from '@angular/forms';
import { CustomValidator } from 'src/app/models/CustomValidator';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpPage extends FormTemplate {

  hover: boolean[];

  constructor(private router: Router) {
    super(/(username)|(name)|(cpf)|(email)|(birthday)|(password)|(passconf)/);
    this.form.setValidators(CustomValidator.checkPasswords);
    this.hover = new Array(this.fields.length);
  }

  onFormSubmit(ev: Event): void {
    ev.preventDefault();
    console.log(this.form);

    this.signUpRequest(this.formMap());
  }

  signUpRequest(form: Map<string, any>): void {
    HttpService.signUpRequest(new SignUpForm(form)).subscribe(
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

  showErrors(n: number, yn: boolean) {
    this.hover[n] = yn;
    console.log(this.hover);
  }

  errorText(control: AbstractControl): string {
    let msg: string = '';
    for (const err in control.errors) {
      msg += ValidationService.msg.get(err);
    }
    return msg
  }
}
