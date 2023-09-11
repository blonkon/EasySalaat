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
import { DetailMosqueeComponent } from '../detail-mosquee/detail-mosquee.component';
import { ModificationMosqueeComponent } from '../modification-mosquee/modification-mosquee.component';
import { CalendarComponent } from '../calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSuperAdminComponent
  },
  {
    path:'calendar', component: CalendarComponent
  },
  {
    path: 'listutil', component: ListutilisateurComponent,
  },
  {
    path: 'ajoutmosquee',
    component: AjoutMosqueeComponent
  },
  {
    path: 'detailmosquee',
    component: DetailMosqueeComponent
  },
  {
    path: 'modificationmosquee',
    component: ModificationMosqueeComponent
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