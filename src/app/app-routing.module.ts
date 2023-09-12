
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component'; 
import { HomeSuperAdminComponent } from './PageSuperAdmin/home-super-admin/home-super-admin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppComponent } from './app.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { RoleGuard } from './role.guards';
import { TabsPage } from './tabs/tabs.page';
import { SuperadminPage } from './PageSuperAdmin/superadmin/superadmin.page';

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
    path: 'tabs',
    component: TabsPage,
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
      },],
      canActivate: [RoleGuard]
    },
    {
        path: 'Admin',
        component: SuperadminPage,
        children: [
          {
            path: 'accueilsuperadmin',
            loadChildren: () => import('./PageSuperAdmin/accueilsuperadmin/accueilsuperadmin.module').then(m => m.AccueilsuperadminPageModule)
          },
          {
            path: 'profilesuperadmin',
          loadChildren: () => import('./PageSuperAdmin/profilesuperadmin/profilesuperadmin.module').then(m => m.ProfilesuperadminPageModule)
          }
        ],
        canActivate: [RoleGuard]
   },
  // {
  //   path: 'accueilsuperadmin',
  //   loadChildren: () => import('./PageSuperAdmin/accueilsuperadmin/accueilsuperadmin.module').then( m => m.AccueilsuperadminPageModule),
    
  //  }
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
