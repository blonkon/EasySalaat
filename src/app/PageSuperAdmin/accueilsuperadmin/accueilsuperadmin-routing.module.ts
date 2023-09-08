import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoranComponent } from '../coran/coran.component';

import { AccueilsuperadminPage } from './accueilsuperadmin.page';
import { MosqueeComponent } from '../mosquee/mosquee.component';
import { PageutiletadminComponent } from '../pageutiletadmin/pageutiletadmin.component';
import { ListutilisateurComponent } from '../listutilisateur/listutilisateur.component';
import { HomeSuperAdminComponent } from '../home-super-admin/home-super-admin.component';
import { DetailutilisateurComponent } from '../detailutilisateur/detailutilisateur.component';
import { ModifierutilisateurComponent } from '../modifierutilisateur/modifierutilisateur.component';
import { AjoutMosqueeComponent } from '../ajout-mosquee/ajout-mosquee.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSuperAdminComponent
  },
  {
    path: 'listutil', component: ListutilisateurComponent,
  },
  {
    path: 'ajoutmosquee',
    component: AjoutMosqueeComponent
  },
  {
    path: 'detailutilisateur',
    component: DetailutilisateurComponent,
  },
  {
    path: 'coran', component: CoranComponent,
  },
  {
    path: 'modifierutilisateur',
    component: ModifierutilisateurComponent,
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
    component: AccueilsuperadminPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilsuperadminPageRoutingModule {}
