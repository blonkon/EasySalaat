import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { PageutiletadminComponent } from '../pageutiletadmin/pageutiletadmin.component';
import { HomeSuperAdminComponent } from '../home-super-admin/home-super-admin.component';
import { MosqueeComponent } from '../mosquee/mosquee.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeSuperAdminComponent,
  },
  {
    path: 'mosquee',
    component: MosqueeComponent,
  },
  {
    path: 'pageutiletadmin',
    component: PageutiletadminComponent,
  }
,
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
