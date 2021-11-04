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

  staySignedIn: boolean = false;
  showError: boolean = false;

  constructor(private router: Router) {
    super(/(username)|(password)/);
  }

  onFormSubmit(ev: Event): void {
    ev.preventDefault()
    console.log(this.staySignedIn);
    this.signInRequest(this.formMap());
  }

  staysignedin() {
    console.log("Permanecendo logado");
  }

  signInRequest(form: Map<string, any>): void {
    ValidationService.signInRequest(new SignInForm(form)).subscribe(
      {
        next: data => {
          console.log(data);
          const acctoken = (<{access_token: string}>data).access_token;
          const reftoken = (<{refresh_token: string}>data).refresh_token;
          const PARTIAL_STORAGE_KEY = 'GETSERV'

          if (this.staySignedIn) {
            window.localStorage.setItem(PARTIAL_STORAGE_KEY + '_REF', reftoken);
          } else {
            window.sessionStorage.setItem(PARTIAL_STORAGE_KEY + '_REF', reftoken);
          }
          window.sessionStorage.setItem(PARTIAL_STORAGE_KEY + '_ACC', acctoken);
          this.router.navigateByUrl('');
        },
        error: err => {
          console.log(err);
        },
      }
    )
  }

}
