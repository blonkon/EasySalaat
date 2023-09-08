import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { SouratePageModule } from '../page/sourate/sourate.module';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'sourate',
    loadChildren: () => import('../page/sourate/sourate.module').then(m => m.SouratePageModule)
  },
  {
    path: 'liste',
    loadChildren: () => import('../page/liste-lecture/liste-lecture.module').then(m => m.ListeLecturePageModule)
  },
  {
    path: '',
    redirectTo: '/page/sourate/sourate',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
