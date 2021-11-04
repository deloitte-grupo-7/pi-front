import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldTemplate } from '../models/FieldTemplate';
import { ProfileEditForm, SignInForm, SignUpForm } from '../models/UserForm';

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
    title: 'Endereço',
    name: 'adress',
    type: 'text',
    validators: [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(90),
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
    title: 'Bio',
    name: 'bio',
    type: 'text',
    validators: [
      Validators.required,
      Validators.maxLength(150)
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
    return this.http.post(`${this.apiURL}/register`, form)
  }

  static signInRequest(form: SignInForm){
    return this.http.post(`${this.apiURL}/login`, form)
  }
  static updateProfile(form: ProfileEditForm){
    return this.http.put(`${this.apiURL}/editp`, form)
  }
}
