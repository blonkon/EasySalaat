import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeMosquePage } from './liste-mosque.page';

const routes: Routes = [
  {
    path: '',
    component: ListeMosquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeMosquePageRoutingModule {}
