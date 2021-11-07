import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
import { FieldTemplate } from 'src/app/models/FieldTemplate';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormTemplate implements OnInit {

  fb: FormBuilder;
  fields: FieldTemplate[];
  form: FormArray;

  constructor(regex: RegExp) {
      this.fb = new FormBuilder();
      this.fields = ValidationService.fields.filter(
          field => field.name.match(regex)
      );
      this.form = this.fb.array([],
        {
          updateOn: 'blur'
        }
      );
  }

  ngOnInit(): void {
      this.fields.forEach(
          field => this.form.push(new FormControl(null, field.validators))
      );
  }

  iterate(f: Function): void {
      this.fields.forEach((template: FieldTemplate) => f(template));
  }

  getControl(i: number): FormControl {
      return <FormControl>this.form.controls[i];
  }

  getControls(): FormControl[] {
      return <FormControl[]>this.form.controls;
  }

  validate(control: AbstractControl, valid: string, invalid: string, extra?: string): string {
      return (control.valid ? valid : invalid) + (extra ? ' ' + extra : ''); 
  }

  formMap() {
    const form: Map<string, any> = new Map();
   
    this.fields.forEach((field, i) => form.set(field.name, this.form.value[i]));

    console.log(form);
    return form;
  }
}
