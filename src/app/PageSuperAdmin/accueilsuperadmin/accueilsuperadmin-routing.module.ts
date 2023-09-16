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
import { RoleGuard2 } from 'src/app/role2.guards';
import { RoleGuard5 } from 'src/app/role5.guards';
import { AjoutcoranComponent } from '../ajoutcoran/ajoutcoran.component';
import { DetailcoranComponent } from '../detailcoran/detailcoran.component';
import { ModificationcoranComponent } from '../modificationcoran/modificationcoran.component';
import { CalendrierComponent } from '../calendrier/calendrier.component';
// import { NgxAngularMaterialHijriAdapterModule } from 'ngx-angular-material-hijri-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

// import { NgxAngularMaterialHijriAdapterService, DateLocaleKeys, MOMENT_HIJRI_DATE_FORMATS } from 'ngx-angular-material-hijri-adapter';
import { LecteurComponent } from '../lecteur/lecteur.component';

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
    path: 'calendrier', component: CalendrierComponent
  },
  {
    path: 'detailmosquee',
    component: DetailMosqueeComponent
  },
  {
    path: 'detailcoran',
    component: DetailcoranComponent
  },
  {
    path: 'modificationcoran',
    component: ModificationcoranComponent
  },
  {
    path: 'ajoutcoran',
    component: AjoutcoranComponent
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
    canActivate : [RoleGuard5]
  },
  {
    path: 'detailadmin',component: DetailadminComponent,
    canActivate : [RoleGuard5]

  },
  {
    path: 'modifieradmin',component: ModifieradminComponent,
    canActivate : [RoleGuard5]
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
  },
  {
    path: 'lecteur',
    component: LecteurComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    //  NgxAngularMaterialHijriAdapterModule
    ],
  exports: [RouterModule],
  providers: [
    // {
    //   provide: DateAdapter,
    //   useClass: NgxAngularMaterialHijriAdapterService,
    // },
    // // Change the format by using `MOMENT_HIJRI_DATE_FORMATS` for Dates and `MOMENT_HIJRI_DATE_TIME_FORMATS` for date/time.
    // { provide: MAT_DATE_FORMATS, useValue: MOMENT_HIJRI_DATE_FORMATS },
    // // Change the localization to arabic by using `AR_SA` not `AR` only and `EN_US` not `EN` only.
    // { provide: MAT_DATE_LOCALE, useValue: "fr"},
]
})
export class AccueilsuperadminPageRoutingModule {}
