
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeSuperAdminComponent } from './PageSuperAdmin/home-super-admin/home-super-admin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppComponent } from './app.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';

import { SuperadminPage } from './PageSuperAdmin/superadmin/superadmin.page';
import { AccueilAdminSimpleComponent } from './Admin-Mosque/accueil-admin-simple/accueil-admin-simple.component';
import { SuperadminPageModule } from './PageSuperAdmin/superadmin/superadmin.module';
import { SuperadminPageRoutingModule } from './PageSuperAdmin/superadmin/superadmin-routing.module';

import { JouerAudioComponent } from './component/jouer-audio/jouer-audio.component';

const routes: Routes = [
  {
    path: ''
   ,
    children: [

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },

  {
    path: 'superadmin',
    loadChildren: () => import('./PageSuperAdmin/superadmin/superadmin.module').then( m => m.SuperadminPageModule)
  },
  {
    path: 'accueilsuperadmin',
    loadChildren: () => import('./PageSuperAdmin/accueilsuperadmin/accueilsuperadmin.module').then( m => m.AccueilsuperadminPageModule)
  },
  {
    path: 'profilesuperadmin',
    loadChildren: () => import('./PageSuperAdmin/profilesuperadmin/profilesuperadmin.module').then( m => m.ProfilesuperadminPageModule)
  },
  {path: 'inscription',component:InscriptionComponent},
  {
  path: 'noms',
  loadChildren: () => import('./page/noms/noms.module').then( m => m.NomsPageModule)
},
  {
    path: 'preche',
    loadChildren: () => import('./page/preche/preche.module').then( m => m.PrechePageModule)
  },
  {
    path: 'pageutilisateur',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }, 
  // {
  //   path:'',component:ConnexionComponent
  // },
  {
    path:'connexion',component:ConnexionComponent
  },
 
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-admin-mosque',
    loadChildren: () => import('./Admin-Mosque/profile-admin-mosque/profile-admin-mosque.module').then( m => m.ProfileAdminMosquePageModule)
  },
  {
    path: 'admosque',
    loadChildren: () => import('./Admin-Mosque/admosque/admosque.module').then( m => m.AdmosquePageModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./PageSuperAdmin/superadmin/superadmin.module').then( m => m.SuperadminPageModule)
  // }
  {
    path: 'jouerAudio/:audioUrl', component: JouerAudioComponent, pathMatch: 'full'
  },
  {
    path:'homesupera', component: HomeSuperAdminComponent
  },
]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}