import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './components/produto/produto.component';
import { AboutPage } from './routes/about/about.component';
import { ContactPage } from './routes/contact/contact.component';
import { HomePage } from './routes/home/home.component';
import { ServiceCreateComponent } from './routes/service-list/service-create/service-create.component';
import { ServiceList } from './routes/service-list/service-list.component';
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
  { path: 'produto'   , component: ProdutoComponent },
  { path: 'service'   , component: ServiceList},
  { path: 'screate'   , component: ServiceCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
