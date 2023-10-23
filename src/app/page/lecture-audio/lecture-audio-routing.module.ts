import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LectureAudioPage } from './lecture-audio.page';

const routes: Routes = [
  {
    path: '',
    component: LectureAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LectureAudioPageRoutingModule {}
