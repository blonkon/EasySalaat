import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilsuperadminPageRoutingModule } from './accueilsuperadmin-routing.module';

import { AccueilsuperadminPage } from './accueilsuperadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilsuperadminPageRoutingModule
  ],
  declarations: [AccueilsuperadminPage]
})
export class AccueilsuperadminPageModule {}
