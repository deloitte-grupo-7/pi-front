import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { AboutPage } from './routes/about/about.component';
import { ContactPage } from './routes/contact/contact.component';
import { CreatePostComponent } from './routes/create-post/create-post.component';
import { HomePage } from './routes/home/home.component';
import { PostPage } from './routes/postPage/post-page.component';
import { ServiceCreateComponent } from './routes/service-list/service-create/service-create.component';
import { ServiceList } from './routes/service-list/service-list.component';
import { SignInPage } from './routes/signin/signin.component';
import { SignUpPage } from './routes/signup/signup.component';
import { UserProfileComponent } from './routes/user-profile/user-profile.component';


const routes: Routes = [
  { path: ''          , component: HomePage },
  { path: 'signin'    , component: SignInPage },
  { path: 'signup'    , component: SignUpPage },
  { path: 'about'     , component: AboutPage },
  { path: 'contact'   , component: ContactPage },
  { path: 'post'      , component: PostComponent },
  { path: 'service'   , component: ServiceList},
  { path: 'screate'   , component: ServiceCreateComponent},
  { path: 'user'      , component: UserProfileComponent},
  { path: 'p'         , component: PostPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
