import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormTemplate } from 'src/app/components/form/form.component';
import { SignInForm } from 'src/app/models/UserForm';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInPage extends FormTemplate {
  
  showError: boolean = false;

  constructor(private router: Router) { super(/(username)|(password)/); }

  onFormSubmit(ev: Event): void {
    ev.preventDefault();
    const signInForm: SignInForm = new SignInForm(this.form.value);

     ValidationService.signInRequest(signInForm).subscribe(
      {
        next: data => {
          window.sessionStorage.setItem('token', (<{token:string}>data).token);
          this.router.navigateByUrl('/home')
        },
   
        error: err => {
          this.showError = true;
        }
      }
    )
    // console.log(this.staysignedin.value);
  }

  staysignedin(){
    console.log("Permanecendo logado");
  }

}
