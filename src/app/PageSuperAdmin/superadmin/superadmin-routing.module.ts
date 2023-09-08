import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperadminPage } from './superadmin.page';

const routes: Routes = [
  {
    path: 'superadmin',
    component: SuperadminPage
  ,
  children: [
    {
      path: 'accueilsuperadmin',
      loadChildren: () => import('../accueilsuperadmin/accueilsuperadmin.module').then(m => m.AccueilsuperadminPageModule)
    },
    {
      path: 'profilesuperadmin',
      loadChildren: () => import('../profilesuperadmin/profilesuperadmin.module').then(m => m.ProfilesuperadminPageModule)
    },
    
  ] },
    {
      path: '',
      redirectTo: '/superadmin/accueilsuperadmin',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperadminPageRoutingModule {}
