import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import {AuthenticationModule} from './../authentication/authentication.module'
import { ProfilesGridComponent } from './profiles-grid/profiles-grid.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent, 
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'profiles', component: ProfilesGridComponent},
    ]
  },
  {path: 'login', loadChildren: () => AuthenticationModule},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
