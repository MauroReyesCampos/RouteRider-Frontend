import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPageTwoComponent } from './pages/routes-page-two/routes-page-two.component';
import { HomePageOneComponent } from  './pages/home-page-one/home-page-one.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page/contact-page.component'

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'}, {path:'home', component: HomePageOneComponent},
  {path:'routes',component: RoutesPageTwoComponent},
  {path:'login',component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'profile', component: ProfilePageComponent},
  {path:'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
