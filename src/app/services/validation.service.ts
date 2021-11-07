import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomValidator } from '../models/CustomValidator';
import { FieldTemplate } from '../models/FieldTemplate';

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
      CustomValidator.validateCPF
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
      CustomValidator.validateBirthday
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
  {
    title: 'Título do anuncio',
    name: 'titulo',
    type: 'text',
    validators: [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
    ]
  },
  {
    title: 'Descrição',
    name: 'descricao',
    type: 'text',
    validators: [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(150),
    ]
  },

];


@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static fields: FieldTemplate[] = fields;

  static msg: Map<string, string> = new Map ([
    ['required', 'Campo obrigatório'],
    ['minlength', 'Não há caracteres suficientes'],
    ['maxlength', 'Caracteres máximos excedidos'],
    ['pattern', 'Caracteres inválidos'],
    ['invalidCPF', 'CPF inválido'],
    ['minor', 'Você deve ter pelo menos 18 anos para se cadastrar'],
    ['passwordsDontMatch', 'As senhas não são iguais'],
  ])
}
