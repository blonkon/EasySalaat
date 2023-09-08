import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileAdminMosquePage } from './profile-admin-mosque.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileAdminMosquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileAdminMosquePageRoutingModule {}
