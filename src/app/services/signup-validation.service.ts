import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldTemplate } from '../models/FieldTemplate';
import { SignUpForm } from '../models/SignUpForm';

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


@Injectable({
  providedIn: 'root'
})
export class SignUpValidationService {
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
    this.apiURL = 'http://localhost:8080';
  }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
  }

  postRequest(form: SignUpForm) {
    return this.http.post(`${this.apiURL}/register`, form)
  }

}
