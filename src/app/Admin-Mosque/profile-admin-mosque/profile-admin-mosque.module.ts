import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileAdminMosquePageRoutingModule } from './profile-admin-mosque-routing.module';

import { ProfileAdminMosquePage } from './profile-admin-mosque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileAdminMosquePageRoutingModule
  ],
  declarations: [ProfileAdminMosquePage]
})
export class ProfileAdminMosquePageModule {}
