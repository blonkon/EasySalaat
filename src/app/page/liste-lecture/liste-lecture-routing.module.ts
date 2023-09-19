import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeLecturePage } from './liste-lecture.page';

const routes: Routes = [
  {
    path: '',
    component: ListeLecturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeLecturePageRoutingModule {}
