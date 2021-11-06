import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { SignInPage } from './routes/signin/signin.component';
import { SignUpPage } from './routes/signup/signup.component';
import { HomePage } from './routes/home/home.component';
import { ContactPage } from './routes/contact/contact.component';
import { AboutPage } from './routes/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { PostPage } from './routes/postPage/post-page.component';
import {IvyCarouselModule} from './components/carousel/carousel.module';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './routes/create-post/create-post.component';

import { FormTemplate } from './components/form/form.component';
import { UserProfileComponent } from './routes/user-profile/user-profile.component';
import { ServiceList } from './routes/service-list/service-list.component';
import { ServiceCreateComponent } from './routes/service-list/service-create/service-create.component';
import { UserComponent } from './components/user/user.component';
import { UserServicesComponent } from './components/user-services/user-services.component';

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
    PostPage,
    CarouselHomeComponent,
    PostComponent,
    FormTemplate,
    CreatePostComponent,
    ServiceCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IvyCarouselModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
