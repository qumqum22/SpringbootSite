import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';

import {HomeModule } from './home/home.module';
import {AuthenticationModule} from './authentication/authentication.module';
export const routes: Routes = [
{path: '', component:ProfileComponent},
{path: 'profile', component: ProfileComponent},
{path: 'settings', component: SettingsComponent},
{path: 'login', loadChildren: () => AuthenticationModule},
{path: 'home', loadChildren: () => HomeModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
