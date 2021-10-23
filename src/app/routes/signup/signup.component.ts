import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpPage implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(),
    name: new FormControl(),    
    cpf: new FormControl(),    
    email: new FormControl(),    
    birthday: new FormControl(),    
    password: new FormControl(),    
    passconf: new FormControl(),    
  });

  constructor() { }

  ngOnInit(): void {
  }

  usernameValidation(): void {
  }

  cpfValidation(): void {

  }

  onFormSubmit(): void {

  }

}
