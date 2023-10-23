import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomsPageRoutingModule } from './noms-routing.module';

import { NomsPage } from './noms.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    NomsPageRoutingModule,
   
  
  ],
  declarations: [NomsPage]

})
export class NomsPageModule {}
