import { HttpClient } from '@angular/common/http';
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
  fields: FieldTemplate[] = fields;
  private readonly apiURL: string;

  config = {
    required: 'Obrigatório',
    invalidUsername: 'O nome de usuário deve ter somente letras e números',
    invalidName: 'O nome não pode ter caracteres especiais',
    invalidCpf: 'CPF inválido',
    invalidEmail: 'Email inválido',
    invalidPassword: 'A senha deve ter pelo menos 8 caracteres e incluir uma letra maiúcula, uma minúscula, um número, e um caractere especial.',
  }

  constructor(private http:HttpClient){
    this.apiURL = 'https://pi-back7.herokuapp.com';
  }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
  }

  signUpRequest(form: SignUpForm) {
    return this.http.post(`${this.apiURL}/register`, form)
  }

  signInRequest(form: SignInForm){
    return this.http.post(`${this.apiURL}/login`, form)
  }

  // update(form: EditForm){
  //   return this.http.put(`${this.apiURL}/edit`, form)
  // }

}
