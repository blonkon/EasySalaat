import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },  {
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
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
