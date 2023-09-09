import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSouratePageRoutingModule } from './detail-sourate-routing.module';

import { DetailSouratePage } from './detail-sourate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSouratePageRoutingModule
  ],
  declarations: [DetailSouratePage]
})
export class DetailSouratePageModule {}
