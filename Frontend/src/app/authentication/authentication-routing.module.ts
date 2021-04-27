import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import {HomeModule } from './../home/home.module';
export const routes: Routes = [
    { path: '', component: LoginComponent }, // default route of the module
    { path: 'register', component: RegisterComponent },
    { path: 'home', loadChildren: () => HomeModule}

  ]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule ]
  })

  export class AuthenticationRoutingModule { }