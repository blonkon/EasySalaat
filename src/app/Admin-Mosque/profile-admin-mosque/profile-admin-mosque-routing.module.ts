import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileAdminMosquePage } from './profile-admin-mosque.page';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileAdminMosquePage
  },
  {
    path:'profile-update', component: ProfileUpdateComponent
 },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileAdminMosquePageRoutingModule {}
