import { Component } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { SignUpForm } from 'src/app/models/UserForm';
import { Router } from '@angular/router';
import { FormTemplate } from 'src/app/components/form/form.component';
import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CpfPipe } from './cpf.pipe';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpPage extends FormTemplate {

  constructor(private router: Router) {
    super(/(username)|(name)|(cpf)|(email)|(birthday)|(password)|(passconf)/);
    this.form.setValidators(this.checkPasswords);
  }

  checkPasswords: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const form: FormArray = <FormArray>control;
    const password = form.value[form.length - 2];
    const passconf = form.value[form.length - 1];
    const err: ValidationErrors | null = (password === passconf) ? null : { passwordsDontMatch: true };
    form.controls[form.length - 1].setErrors(err);
    console.log(this.form);
    return null;
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
}
