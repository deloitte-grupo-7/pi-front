import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldTemplate } from 'src/app/models/FieldTemplate';
import { ValidationService } from 'src/app/services/validation.service';
import { SignUpForm } from 'src/app/models/UserForm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpPage implements OnInit {

  fields: FieldTemplate[];
  form: FormArray;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private validate: ValidationService,
    private router: Router
  ) {
    this.fields = validate.fields;
    this.form = fb.array([], {updateOn: 'blur'});
  }

  ngOnInit(): void {
    this.fields.forEach(field => this.form.push(new FormControl(null, field.validators)));
    console.log(this.form);
  }

  onFormSubmit(ev: Event): void {
    ev.preventDefault();
    console.log('form submitted');

    this.validate.signUpRequest(new SignUpForm(this.form.value)).subscribe(
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

  getValues(): string {
    let values: string = '';
    this.getControls().forEach(control => values += control.value + '\n');
    return values;
  }

  getValue(i: number): string {
    return this.getControl(i).value;
  }

  getControl(i: number): FormControl {
    return <FormControl>this.form.controls[i];
  }

  getControls(): FormControl[] {
    return <FormControl[]>this.form.controls;
  }

  log() {
    console.log(this.form);
  }

  isInvalid(control: AbstractControl): boolean {
    return control.status == 'INVALID';
  }

  validateSymbol(control: AbstractControl): string {
    return this.isInvalid(control) ? '⚠' : '✔'; 
  }

  validateClass(control: AbstractControl): string {
    return this.isInvalid(control) ? 'invalid' : 'valid';
  }
}
