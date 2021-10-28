import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { SignInPage } from './routes/signin/signin.component';
import { SignUpPage } from './routes/signup/signup.component';
import { HomePage } from './routes/home/home.component';
import { ContactPage } from './routes/contact/contact.component';
import { AboutPage } from './routes/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { EditPage } from './routes/user/edit/edit.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInPage,
    SignUpPage,
    HomePage,
    ContactPage,
    AboutPage,
    NavComponent,
    EditPage,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
