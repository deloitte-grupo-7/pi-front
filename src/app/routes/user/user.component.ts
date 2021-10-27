import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpValidationService } from 'src/app/services/signup-validation.service';
import { Router } from '@angular/router';
import { FieldTemplate } from 'src/app/models/FieldTemplate';
import { UserForm } from 'src/app/models/UserForm';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserPage implements OnInit {
  fields: FieldTemplate[];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validate: SignUpValidationService,
    private router: Router
  ) { 
    this.fields = [
      {
        title: 'Nome', name: 'name', type: 'text',
      },
      {
        title: 'CPF', name: 'cpf', type: 'text',
      },
      {
        title: 'Email', name: 'email', type: 'text',
      },
      {
        title: 'Data de nascimento', name: 'birthday', type: 'text',
      },
      {
        title: 'Senha', name: 'password', type: 'password',
      },
      {
        title: 'Descrição', name: 'description', type: 'text',
      },
    ]
    this.form = this.fb.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required],
    email: ['', Validators.required],
    birthday: ['', Validators.required],
    password: ['', Validators.required] 
  },
  {
    updateOn: 'blur',
  });
  }

  ngOnInit(): void {
  }

  onFormSubmit(ev: Event): void{
    ev.preventDefault();
    const userForm: UserForm = {
      name: this.put('name'),
      cpf: this.put('cpf'),
      email: this.put('email'),
      birthday: this.put('birthday'),
      password: this.put('password'),
      description: this.put('description')
    }
  }

  put(field: string): string {
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

}
