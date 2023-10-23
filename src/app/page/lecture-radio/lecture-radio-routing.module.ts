import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LectureRadioPage } from './lecture-radio.page';

const routes: Routes = [
  {
    path: '',
    component: LectureRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LectureRadioPageRoutingModule {}
