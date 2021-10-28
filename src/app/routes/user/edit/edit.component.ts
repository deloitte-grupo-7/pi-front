import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  submitted = false;

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
        title: 'Nome completo', name: 'name', type: 'text',
      },
      {
        title: 'Email', name: 'email', type: 'text',
      },
      {
        title: 'Senha', name: 'password', type: 'password',
      },
    ]
    this.form = this.fb.group({
    
    username: ['', Validators.required, Validators.minLength(2), Validators.maxLength(20)],
    name: ['', Validators.required, Validators.minLength(3), Validators.maxLength(64)],
    email: ['', Validators.required, Validators.minLength(6), Validators.maxLength(64)],
    password: ['', Validators.required, Validators.minLength(8), Validators.maxLength(168)],
    description:['', Validators.maxLength(500)],
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

    // this.submitted = true;
    // if (this.form.invalid){
    //   return;
    // } console.log(JSON.stringify(this.form.value, null, 2));
    

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
