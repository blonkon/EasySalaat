import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component'; 
import { HomeSuperAdminComponent } from './PageSuperAdmin/home-super-admin/home-super-admin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppComponent } from './app.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';

const routes: Routes = [
  {
    path: '', component: ConnexionComponent
  },
  {
    path: 'inscription', component: InscriptionComponent
  },
  {
    path: 'login', component: ConnexionComponent
  },
  {
    path: 'accueilsuperadmin',
    loadChildren: () => import('./PageSuperAdmin/accueilsuperadmin/accueilsuperadmin.module').then( m => m.AccueilsuperadminPageModule)
   }
  // {
  //   path: '',
  //   loadChildren: () => import('./PageSuperAdmin/superadmin/superadmin.module').then( m => m.SuperadminPageModule)
  // },
  // {
  //   path: 'profilesuperadmin',
  //   loadChildren: () => import('./PageSuperAdmin/profilesuperadmin/profilesuperadmin.module').then( m => m.ProfilesuperadminPageModule)
  // },
  // {
  //   path: 'pageutilisateur',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
