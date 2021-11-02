import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './components/produto/produto.component';
import { AboutPage } from './routes/about/about.component';
import { ContactPage } from './routes/contact/contact.component';
import { HomePage } from './routes/home/home.component';
import { SignInPage } from './routes/signin/signin.component';
import { SignUpPage } from './routes/signup/signup.component';
import { EditPage } from './routes/user/edit/edit.component';

const routes: Routes = [
  { path: ''          , component: HomePage },
  { path: 'signin'    , component: SignInPage },
  { path: 'signup'    , component: SignUpPage },
  { path: 'about'     , component: AboutPage },
  { path: 'contact'   , component: ContactPage },
  { path: 'edit'      , component: EditPage },
  { path: 'produto'      , component: ProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
