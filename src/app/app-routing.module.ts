
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';



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
    path:'connexion',component:ConnexionComponent
  },
  {path: 'inscription',component:InscriptionComponent},
  {
  path: 'noms',
  loadChildren: () => import('./page/noms/noms.module').then( m => m.NomsPageModule)
},
  {
    path: 'preche',
    loadChildren: () => import('./page/preche/preche.module').then( m => m.PrechePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

