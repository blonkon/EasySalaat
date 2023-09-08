import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomsPage } from './noms.page';

const routes: Routes = [
  {
    path: '',
    component: NomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomsPageRoutingModule {}
