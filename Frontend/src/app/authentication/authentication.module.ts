import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent],
  imports: [ 
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule
  ],

  exports: [
    LoginComponent,
    RegisterComponent],
})
export class AuthenticationModule { }
