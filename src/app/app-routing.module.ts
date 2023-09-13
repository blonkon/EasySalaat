import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccueilAdminSimpleComponent } from './Admin-Mosque/accueil-admin-simple/accueil-admin-simple.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-admin-mosque',
    loadChildren: () => import('./Admin-Mosque/profile-admin-mosque/profile-admin-mosque.module').then( m => m.ProfileAdminMosquePageModule)
  },
  // {
  //   path: 'page-accueil-admin-mosque',
  //   loadChildren: () => import('./Admin-Mosque/page-accueil-admin-mosque/page-accueil-admin-mosque.module').then( m => m.PageAccueilAdminMosquePageModule)
  // },
  {
    path: 'admosque',
    loadChildren: () => import('./Admin-Mosque/admosque/admosque.module').then( m => m.AdmosquePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
