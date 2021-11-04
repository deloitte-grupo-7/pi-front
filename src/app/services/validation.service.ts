import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldTemplate } from '../models/FieldTemplate';
import { SignInForm, SignUpForm } from '../models/UserForm';

const fields: FieldTemplate[] = [
  {
    title: 'Nome de usuário', 
    name: 'username',
    type: 'text',
    validators: [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern(/[a-zA-Z\d]+/)
    ],
  },
  {
    title: 'Nome completo',
    name: 'name',
    type: 'text',
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(64),
      Validators.pattern(/[a-zA-Z\d]+/),
    ],
  },
  {
    title: 'CPF',
    name: 'cpf',
    type: 'text',
    validators: [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
      Validators.pattern(/\d+/),
    ],
  },
  {
    title: 'Email',
    name: 'email',
    type: 'email',
    validators: [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(64),
      Validators.email,
    ],
  },
  {
    title: 'Data de nascimento',
    name: 'birthday',
    type: 'date',
    validators: [
      Validators.required,
    ],
  },
  {
    title: 'Senha',
    name: 'password',
    type: 'password',
    validators: [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
    ]
  },
  {
    title: 'Confirmação de senha',
    name: 'passconf',
    type: 'password',
    validators: [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
    ]
  },
];


@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static readonly fields: FieldTemplate[] = fields;
  private static readonly apiURL: string = 'https://pi-back7.herokuapp.com';
  static http: HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));

  static signUpRequest(form: SignUpForm) {
    return this.http.post(`${this.apiURL}/signup`, form);
  }

  static signInRequest(form: SignInForm){
    const params = new URLSearchParams()
    params.set('username', form.username);
    params.set('password', form.password);
    const body = params.toString();
    const options = {
      headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('Access-Control-Allow-Origin', '*')
    }
    console.log(body);
    console.log(options);
    return this.http.post(`${this.apiURL}/signin`, body, options);
  }
}
