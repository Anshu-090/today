import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:"", redirectTo:"registration",pathMatch:"full"},
  {path:"login",component:LoginComponent,canActivate:[AuthGuard]},
  {path:"registration",component:RegistrationComponent},
  {path:"contact",component:ContactComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
