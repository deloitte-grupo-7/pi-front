import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpValidationService {

  config = {
    required: 'Obrigatório',
    invalidUsername: 'O nome de usuário deve ter somente letras e números',
    invalidName: 'O nome não pode ter caracteres especiais',
    invalidCpf: 'CPF inválido',
    invalidEmail: 'Email inválido',
    invalidPassword: 'A senha deve ter pelo menos 8 caracteres e incluir uma letra maiúcula, uma minúscula, um número, e um caractere especial.',

  }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
  }
}
