import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//import {HomeComponent} from './home.component'
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '', redirectTo: '/profile', pathMatch: 'full'},
    //{path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
