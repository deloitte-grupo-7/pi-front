import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpValidationService } from 'src/app/services/signup-validation.service';
import { Router } from '@angular/router';
import { FieldTemplate } from 'src/app/models/FieldTemplate';
import { EditForm } from 'src/app/models/UserForm';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditPage implements OnInit {
  fields: FieldTemplate[];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validate: SignUpValidationService,
    private router: Router
  ) { 
    this.fields = [
      {
        title: 'Nome de usuário', name: 'username', type: 'text',
      },
      {
        title: 'Nome', name: 'name', type: 'text',
      },
      {
        title: 'Email', name: 'email', type: 'text',
      },
      {
        title: 'Senha', name: 'password', type: 'password',
      },
    ]
    this.form = this.fb.group({
    
    username: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    description:[''],
  },
  {
    updateOn: 'blur',
  });
  }

  ngOnInit(): void {
  }

  onFormSubmit(ev: Event): void{
    ev.preventDefault();
    const editForm: EditForm = {
      username: this.get('username'),
      name: this.get('name'),
      email: this.get('email'),
      password: this.get('password'),
      description: this.get('description')
    }

    this.validate.update(editForm).subscribe(
      {
        next: data => {
          this.router.navigateByUrl('');
          console.log(data)
        },

        error: err => console.log(err),
        complete: () => console.log("Requisição terminada")
      }
    )
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
