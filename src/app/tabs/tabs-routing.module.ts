import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },{
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },{
        path: 'noms',
        loadChildren: () => import('../page/noms/noms.module').then( m => m.NomsPageModule)

      },
      {
        path: 'mosque',
        loadChildren: () => import('../page/liste-mosque/liste-mosque.module').then(m => m.ListeMosquePageModule)
      },
      {
        path: 'mosqueaproximite',
        loadChildren: () => import('../page/mosque-aproximite/mosque-aproximite.module').then(m => m.MosqueAproximitePageModule)

      },
      {
        path: 'calendar',
        loadChildren: () => import('../page/calendar/calendar.module').then( m => m.CalendarPageModule)
      },
     
      {
        path: 'preche',
        loadChildren: () => import('../page/preche/preche.module').then( m => m.PrechePageModule)
      },
      {
        path: 'info-page',
        loadChildren: () => import('../page/info-page/info-page.module').then( m => m.InfoPagePageModule)
      },
      {
        path: 'sourate',
        loadChildren: () => import('../page/sourate/sourate.module').then( m => m.SouratePageModule)
      },
      {
        path: 'radio',
        loadChildren: () => import('../page/radio/radio.module').then( m => m.RadioPageModule)
      },
      {

        path: 'info-page',
        loadChildren: () => import('../page/info-page/info-page.module').then( m => m.InfoPagePageModule)
    },
      {
        path: 'radio',
        loadChildren: () => import('../page/radio/radio.module').then( m => m.RadioPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
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
})
export class TabsPageRoutingModule {}
