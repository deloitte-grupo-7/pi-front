import { Component } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { SignUpForm } from 'src/app/models/UserForm';
import { Router } from '@angular/router';
import { FormTemplate } from 'src/app/components/form/form.component';
import { AbstractControl, FormArray, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CpfPipe } from './cpf.pipe';
import { CustomValidator } from 'src/app/models/CustomValidator';

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

  isCPF(name: string) {
    if (name === 'cpf') return CpfPipe;
    return null;
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
