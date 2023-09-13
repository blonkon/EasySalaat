import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmosquePage } from './admosque.page';

const routes: Routes = [
  {
    path: '',
    component: AdmosquePage,
    children: [
      {
        path: 'page-accueil-admin-mosque',
        loadChildren: () => import('../page-accueil-admin-mosque/page-accueil-admin-mosque.module').then(m => m.PageAccueilAdminMosquePageModule)
      },
      {
        path: 'profile-admin-mosque',
        loadChildren: () => import('../profile-admin-mosque/profile-admin-mosque.module').then(m => m.ProfileAdminMosquePageModule)
      },
      {
        path: '',
        redirectTo: '/admosque/page-accueil-admin-mosque',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmosquePageRoutingModule {}
