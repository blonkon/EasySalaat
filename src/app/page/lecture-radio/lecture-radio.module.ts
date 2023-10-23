import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectureRadioPageRoutingModule } from './lecture-radio-routing.module';

import { LectureRadioPage } from './lecture-radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectureRadioPageRoutingModule
  ],
  declarations: [LectureRadioPage]
})
export class LectureRadioPageModule {}
