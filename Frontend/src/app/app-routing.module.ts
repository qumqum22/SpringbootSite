import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeModule } from './home/home.module';
import {AuthenticationModule} from './authentication/authentication.module';

export const routes: Routes = [
{path: '', loadChildren: () => HomeModule},
{path: 'login', loadChildren: () => AuthenticationModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HomeModule]
})
export class AppRoutingModule { }
