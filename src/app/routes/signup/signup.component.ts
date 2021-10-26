import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FieldTemplate {
  title: string,
  name: string,
  type: string,
  regex?: RegExp,
}

const fields: FieldTemplate[] = [
  {
    title: 'Nome de usuário', 
    name: 'username',
    type: 'text',
    regex: /[a-zA-Z\d]+/,
  },
  {
    title: 'Nome completo',
    name: 'name',
    type: 'text',
    regex: /[a-zA-ZÀ-ú\s]+/,
  },
  {
    title: 'CPF',
    name: 'cpf',
    type: 'text',
    regex: /\d+/,
  },
  {
    title: 'Email',
    name: 'email',
    type: 'email',
    regex: /^[^\_\.\-][\w\d\.\-]{4,}(?<![\.\_\-])\@\w{2,}(\.{1}[a-zA-Z]{2,})(?!\.)$/,
  },
  {
    title: 'Data de nascimento',
    name: 'birthday',
    type: 'date',
  },
  {
    title: 'Senha',
    name: 'password',
    type: 'password',
  },
  {
    title: 'Confirmação de senha',
    name: 'passconf',
    type: 'password',
  }];

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpPage implements OnInit {

  readonly apiURL: string;
  fields: FieldTemplate[];
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.apiURL = 'http://localhost:8080';
    this.fields = fields;
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
    this.iterate(() => {
      this.http
          .post(`${this.apiURL}/produtos`, this.form)
          .subscribe(res => console.log(res));
    });
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
    fields.forEach((template: FieldTemplate) => f(template));
  }

  validator(field: string): void {

  }

}
