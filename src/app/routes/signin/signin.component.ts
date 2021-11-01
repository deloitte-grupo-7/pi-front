import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FieldTemplate } from 'src/app/models/FieldTemplate';
import { SignInForm } from 'src/app/models/UserForm';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInPage implements OnInit {
  fields: FieldTemplate[];
  form: FormArray;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private validate: ValidationService,
  ) { 
    this.fields = validate.fields.filter(field =>
      field.name.match(/(username)|(password)/)
    );
    this.form = fb.array([], { updateOn: 'blur' });
  }

  ngOnInit(): void {
    this.fields.forEach(field => this.form.push(new FormControl()));
    console.log (this.form);
  }

  onFormSubmit(ev: Event): void {
    ev.preventDefault();
    const signInForm: SignInForm = new SignInForm(this.form.value);

     this.validate.signInRequest(signInForm).subscribe(
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

  getControl(i: number): FormControl {
    return <FormControl>this.form.controls[i];
  }
}
