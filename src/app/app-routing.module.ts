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
  },
  {
    path: 'noms',
    loadChildren: () => import('./page/noms/noms.module').then( m => m.NomsPageModule)
  },
  {
    path: 'mosque',
    loadChildren: () => import('./page/liste-mosque/liste-mosque.module').then( m => m.ListeMosquePageModule)
  },
  {
    path: 'mosque-aproximite',
    loadChildren: () => import('./page/mosque-aproximite/mosque-aproximite.module').then( m => m.MosqueAproximitePageModule)
  },  {
    path: 'calendar',
    loadChildren: () => import('./page/calendar/calendar.module').then( m => m.CalendarPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
