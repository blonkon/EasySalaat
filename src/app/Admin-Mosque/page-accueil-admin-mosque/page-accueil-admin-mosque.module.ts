import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAccueilAdminMosquePageRoutingModule } from './page-accueil-admin-mosque-routing.module';

import { PageAccueilAdminMosquePage } from './page-accueil-admin-mosque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAccueilAdminMosquePageRoutingModule
  ],
  declarations: [PageAccueilAdminMosquePage]
})
export class PageAccueilAdminMosquePageModule {}
