import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MosqueAproximitePageRoutingModule } from './mosque-aproximite-routing.module';

import { MosqueAproximitePage } from './mosque-aproximite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MosqueAproximitePageRoutingModule
  ],
  declarations: [MosqueAproximitePage]
})
export class MosqueAproximitePageModule {}
