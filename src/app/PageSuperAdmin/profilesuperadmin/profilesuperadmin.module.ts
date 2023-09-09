import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilesuperadminPageRoutingModule } from './profilesuperadmin-routing.module';

import { ProfilesuperadminPage } from './profilesuperadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesuperadminPageRoutingModule
  ],
  declarations: [ProfilesuperadminPage]
})
export class ProfilesuperadminPageModule {}
