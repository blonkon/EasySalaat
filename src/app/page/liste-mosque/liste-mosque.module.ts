import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeMosquePageRoutingModule } from './liste-mosque-routing.module';

import { ListeMosquePage } from './liste-mosque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeMosquePageRoutingModule
  ],
  declarations: [ListeMosquePage]
})
export class ListeMosquePageModule {}
