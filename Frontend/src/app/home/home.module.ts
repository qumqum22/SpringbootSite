import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module'; 
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'; 
import { ProfilesGridComponent } from './profiles-grid/profiles-grid.component';
import { ProfileComponent } from './profile/profile.component'; 
import { SettingsComponent } from './settings/settings.component';
import {HomeComponent} from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForeignProfileComponent } from './foreign-profile/foreign-profile.component';
import { BuildingComponent } from './building/building.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationBarComponent, 
    ProfilesGridComponent, 
    ProfileComponent, 
    SettingsComponent, 
    ForeignProfileComponent, 
    BuildingComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: []
})
export class HomeModule { }
