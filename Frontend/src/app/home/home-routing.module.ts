import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import {AuthenticationModule} from './../authentication/authentication.module'
import { ProfilesGridComponent } from './profiles-grid/profiles-grid.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';
import { ForeignProfileComponent } from './foreign-profile/foreign-profile.component';
import { BuildingComponent } from './building/building.component';
const routes: Routes = [
  {path: 'login', loadChildren: () => AuthenticationModule},
  {
    path: '', component: HomeComponent, 
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'profiles', component: ProfilesGridComponent},
      {path: 'profile/:id', component: ForeignProfileComponent},
      {path: 'building/:id', component: BuildingComponent},
      //{path: '**', component: ErrorPageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
