import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const fields: Object = {
  'username': '[a-zA-Z\d]+',
  'name': '[a-zA-ZÀ-ú\s]+',
  'cpf': '\d+',
  'email': '^[^\_\.\-][\w\d\.\-]{4,}(?<![\.\_\-])\@\w{2,}(\.{1}[a-zA-Z]{2,})(?!\.)$',
  'birthday': '',
  'password': '',
  'passconf': ''
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpPage implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required ],
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
    for (const field in fields) {
      if (Object.prototype
                .hasOwnProperty
                .call(fields, field)) {
        console.log(`${field}: ${this.get(field)}`);
      }
    }
  }

  get(field: string): string {
    return this.form.get(field)?.value;
  }

  getAll(): string {
    let str: string = '';
    for (const field in fields ) {
      if (Object.prototype
                .hasOwnProperty
                .call(fields, field)) {
        str += this.get(field) + ' ';
      }
    }
    return str;
  }

  iterate(fields: Object, f: Function) {
    for (const field in fields) {
      if (Object.prototype
                .hasOwnProperty
                .call(fields, field)) {
        console.log(`${field}: ${this.get(field)}`);
      }
    }
  }

}
