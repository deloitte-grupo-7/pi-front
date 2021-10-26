import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldTemplate } from 'src/app/models/FieldTemplate';
import { SignUpValidationService } from 'src/app/services/signup-validation.service';
import { SignUpForm } from 'src/app/models/SignUpForm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpPage implements OnInit {

  fields: FieldTemplate[];
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private validate: SignUpValidationService,
    private router: Router) {
   
    this.fields = validate.fields;
    this.form = fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      password: ['', Validators.required],
      passconf: ['', Validators.required],
    }, {
      updateOn: 'blur',
    });
  }
  
  ngOnInit(): void {}

  onFormSubmit(ev: Event): void {
    ev.preventDefault();
    this.iterate((field:FieldTemplate) => {

    })
    const userForm: SignUpForm = {
      username: this.get('username'),
      name: this.get('name'),
      cpf: this.get('cpf'),
      email: this.get('email'),
      birthday: this.get('birthday'),
      password: this.get('password'),
      passconf: this.get('passconf')
    }

    this.validate.postRequest(userForm).subscribe(
      {
        next: data => {
        this.router.navigateByUrl('');
          console.log(data)
        }
      }
    )
  }

  get(field: string): string {
    return this.form.get(field)?.value;
  }

  getAll(): string {
    let str: string = '';
    this.iterate((template: FieldTemplate) => {
      str += this.form.get(template.name)?.value + '\n';
    })
    return str;
  }

  iterate(f: Function): void {
   this.validate.fields.forEach((template: FieldTemplate) => f(template));
  }

  validator(field: string): void {

  }

}
