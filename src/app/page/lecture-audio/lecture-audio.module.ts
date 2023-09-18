import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectureAudioPageRoutingModule } from './lecture-audio-routing.module';

import { LectureAudioPage } from './lecture-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectureAudioPageRoutingModule
  ],
  declarations: [LectureAudioPage]
})
export class LectureAudioPageModule {}
