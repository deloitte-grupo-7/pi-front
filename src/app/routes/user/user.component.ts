import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpValidationService } from 'src/app/services/signup-validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserPage implements OnInit {
  
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validate: SignUpValidationService,
    private router: Router
  ) { 
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
}
