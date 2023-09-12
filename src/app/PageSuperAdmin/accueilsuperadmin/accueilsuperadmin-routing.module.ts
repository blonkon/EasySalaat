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
import { ListeadminComponent } from '../listeadmin/listeadmin.component';
import { ModifieradminComponent } from '../modifieradmin/modifieradmin.component';
import { DetailadminComponent } from '../detailadmin/detailadmin.component';
import { ListeadminMosqueComponent } from '../listeadmin-mosque/listeadmin-mosque.component';
import { DetailadminMosqueComponent } from '../detailadmin-mosque/detailadmin-mosque.component';
import { ModifieradminMosqueComponent } from '../modifieradmin-mosque/modifieradmin-mosque.component';
import { ListeFrequenceRadioComponent } from '../liste-frequence-radio/liste-frequence-radio.component';
import { ModifierFrequenceRadioComponent } from '../modifier-frequence-radio/modifier-frequence-radio.component';

import { AjoutMosqueeComponent } from '../ajout-mosquee/ajout-mosquee.component';
import { DetailMosqueeComponent } from '../detail-mosquee/detail-mosquee.component';
import { ModificationMosqueeComponent } from '../modification-mosquee/modification-mosquee.component';


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
    path: 'modifierutilisateur',
    component: ModifierutilisateurComponent,
  },
  {
    path: 'listadmin',component: ListeadminComponent,

  },
  {
    path: 'detailadmin',component: DetailadminComponent,

  },
  {
    path: 'modifieradmin',component: ModifieradminComponent,

  },
  {
    path: 'listadminmos',component: ListeadminMosqueComponent,

  },
  
  
  {
    path: 'detailadminmos',component: DetailadminMosqueComponent,

  },
  
  
  {
    path: 'modifieradminmos',component: ModifieradminMosqueComponent,

  },
  {
    path: 'listradio',component: ListeFrequenceRadioComponent,

  },
  
  
  
  
  
  {
    path: 'modifierradio',component: ModifierFrequenceRadioComponent,

  },
  {
    path: 'coran', component: CoranComponent,
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
