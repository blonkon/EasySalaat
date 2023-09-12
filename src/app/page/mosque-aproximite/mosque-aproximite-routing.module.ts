import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MosqueAproximitePage } from './mosque-aproximite.page';

const routes: Routes = [
  {
    path: '',
    component: MosqueAproximitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MosqueAproximitePageRoutingModule {}
