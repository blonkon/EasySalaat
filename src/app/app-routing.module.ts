
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeSuperAdminComponent } from './PageSuperAdmin/home-super-admin/home-super-admin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppComponent } from './app.component';
import { RoleGuard } from './role.guards';
import { TabsPage } from './tabs/tabs.page';
import { SuperadminPage } from './PageSuperAdmin/superadmin/superadmin.page';
import { RoleGuard1 } from './role1.guards';
import { RoleGuard2 } from './role2.guards';
import { AccueilAdminSimpleComponent } from './Admin-Mosque/accueil-admin-simple/accueil-admin-simple.component';
import { AdmosquePage } from './Admin-Mosque/admosque/admosque.page';
import { RoleGuard3 } from './role3.guards';
import { AjoutMosqueeComponent } from './PageSuperAdmin/ajout-mosquee/ajout-mosquee.component';
import { JouerAudioComponent } from './component/jouer-audio/jouer-audio.component';
import { RoleGuard4 } from './role4.guards';


const routes: Routes = [
  {
    path: '', component: ConnexionComponent,
    canActivate: [RoleGuard3]
  },
  {path: 'inscription',component:InscriptionComponent},
  {
    path: 'inscription', component: InscriptionComponent
  },
  {
    path: 'admosque',
    component: AdmosquePage,
    canActivate: [RoleGuard2],
    children: [
      {
        path: 'page-accueil-admin-mosque',
        loadChildren: () => import('./Admin-Mosque/page-accueil-admin-mosque/page-accueil-admin-mosque.module').then(m => m.PageAccueilAdminMosquePageModule)
      },
      {
        path: 'profile-admin-mosque',
        loadChildren: () => import('./Admin-Mosque/profile-admin-mosque/profile-admin-mosque.module').then(m => m.ProfileAdminMosquePageModule)
      },]
  },
  // {
  //   path: 'login', component: ConnexionComponent
  // },
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [RoleGuard1],
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
      },{
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },{
        path: 'noms',
        loadChildren: () => import('./page/noms/noms.module').then( m => m.NomsPageModule)

      },
      {
        path: 'mosque',
        loadChildren: () => import('./page/liste-mosque/liste-mosque.module').then(m => m.ListeMosquePageModule)
      },
      {
        path: 'mosqueaproximite',
        loadChildren: () => import('./page/mosque-aproximite/mosque-aproximite.module').then(m => m.MosqueAproximitePageModule)

      },
      {
        path: 'calendar',
        loadChildren: () => import('./page/calendar/calendar.module').then( m => m.CalendarPageModule)
      },
      {
        path: 'noms',
        loadChildren: () => import('./page/noms/noms.module').then( m => m.NomsPageModule)
      },
       {
         path: 'preche',
         loadChildren: () => import('./page/preche/preche.module').then( m => m.PrechePageModule)
       },
      {
        path: 'sourate',
        loadChildren: () => import('./page/sourate/sourate.module').then( m => m.SouratePageModule)
      },]
    },
    {
        path: 'admin',
        component: SuperadminPage,
         canActivate: [RoleGuard],
        children: [
          {
            path: 'accueilsuperadmin',
            loadChildren: () => import('./PageSuperAdmin/accueilsuperadmin/accueilsuperadmin.module').then(m => m.AccueilsuperadminPageModule)
          },
          {
            path: 'profilesuperadmin',
          loadChildren: () => import('./PageSuperAdmin/profilesuperadmin/profilesuperadmin.module').then(m => m.ProfilesuperadminPageModule)
          }
        ]
   },
      {
        path: 'jouerAudio/:audioUrl', component: JouerAudioComponent, pathMatch: 'full',
        canActivate: [RoleGuard4]
      },
   {
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
