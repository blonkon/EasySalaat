import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeSuperAdminComponent } from './home-super-admin/home-super-admin.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';

const routes: Routes = [
  {
    path: 'login', component: ExploreContainerComponent,
  },
  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path:'homesupera', component: HomeSuperAdminComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
