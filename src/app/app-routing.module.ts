
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MosqueComponent } from './mosque/mosque.component';
import { DetailsComponent } from './component/details/details.component';
import { SourateComponent } from './component/sourate/sourate.component';

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
    path: 'mosque', component:MosqueComponent
  },
  {
    path: 'sourate',
    loadChildren: () => import('./page/sourate/sourate.module').then( m => m.SouratePageModule)
  },
  {
    path: 'liste-lecture',
    loadChildren: () => import('./page/liste-lecture/liste-lecture.module').then( m => m.ListeLecturePageModule)
  },
  {
    path: 'noms',
    loadChildren: () => import('./page/noms/noms.module').then( m => m.NomsPageModule)

  },
  {
    path: 'liste-mosque',
    loadChildren: () => import('./page/liste-mosque/liste-mosque.module').then( m => m.ListeMosquePageModule)
  },
  {
    path: 'mosque-aproximite',
    loadChildren: () => import('./page/mosque-aproximite/mosque-aproximite.module').then( m => m.MosqueAproximitePageModule)
  },
  // {
  //   path: 'detail-sourate/:number',
  //   loadChildren: () => import('./page/detail-sourate/detail-sourate.module').then( m => m.DetailSouratePageModule)
  // },
{ path: 'details/:id', component: DetailsComponent},
{ path: 'sourate', component: SourateComponent },
  
   ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
