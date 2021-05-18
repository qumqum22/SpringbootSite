import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module'; 
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'; 
import { ProfilesGridComponent } from './profiles-grid/profiles-grid.component';
import { ProfileComponent } from './profile/profile.component'; 
import { SettingsComponent } from './settings/settings.component';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavigationBarComponent, 
    ProfilesGridComponent, 
    ProfileComponent, 
    SettingsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: []
})
export class HomeModule { }
