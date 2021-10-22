import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

import { SignInPage } from './routes/signin/signin.component';
import { SignUpPage } from './routes/signup/signup.component';
import { HomePage } from './routes/home/home.component';
import { ContactPage } from './routes/contact/contact.component';
import { AboutPage } from './routes/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SignInPage,
    SignUpPage,
    HomePage,
    ContactPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
