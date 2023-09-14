import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesuperadminPage } from './profilesuperadmin.page';
import { ModifierProfileComponent } from '../modifier-profile/modifier-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesuperadminPage
  },
  {
    path: 'modifier-profileadmin', component: ModifierProfileComponent
  },
  {
    path: 'admin-profile', component: ProfilesuperadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesuperadminPageRoutingModule {}
