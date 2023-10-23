import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdmosquePageRoutingModule } from './admosque-routing.module';

import { AdmosquePage } from './admosque.page';
import { PrechePageRoutingModule } from 'src/app/page/preche/preche-routing.module';
import { PrechePage } from 'src/app/page/preche/preche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmosquePageRoutingModule
  ],
  declarations: [AdmosquePage]
})
export class AdmosquePageModule {}
