import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FieldTemplate } from 'src/app/models/FieldTemplate';
import { ValidationService } from 'src/app/services/validation.service';
import { SignInForm } from 'src/app/models/UserForm';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInPage implements OnInit {
  fields: FieldTemplate[];
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private validate: ValidationService,
  ) { 
    this.fields= [
      {
        title: 'Nome de usuário',
        name: 'username',
        type: 'text',
        validators: []
      },
      {
        title: 'Senha',
        name: 'password',
        type: 'password',
        validators: []
      }
    ]
    this.form=fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    },
    {
      updateOn: 'blur',
    })
  }

  ngOnInit(): void {
  }

  onFormSubmit(ev: Event): void {
    ev.preventDefault();
    // const signInForm: SignInForm = {
    //   username: this.get('username'),
    //   password: this.get('password'),
    //  }

    //  this.validate.signInRequest(signInForm).subscribe(
    //   {
    //     next: data => {
    //       this.router.navigateByUrl('');
    //       console.log(data)
    //     },

    //     error: err => console.log(err),
    //     complete: () => console.log("Requisição terminada")
    //   }
    // )
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
}
