import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeLecturePageRoutingModule } from './liste-lecture-routing.module';

import { ListeLecturePage } from './liste-lecture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeLecturePageRoutingModule
  ],
  declarations: [ListeLecturePage]
})
export class ListeLecturePageModule {}
