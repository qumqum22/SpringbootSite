import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent],
  imports: [ 
    CommonModule,
    AuthenticationRoutingModule
  ],

  exports: [
    LoginComponent,
    RegisterComponent],
})
export class AuthenticationModule { }
