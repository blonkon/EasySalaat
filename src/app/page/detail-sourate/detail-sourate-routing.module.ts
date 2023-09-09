import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSouratePage } from './detail-sourate.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSouratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSouratePageRoutingModule {}
