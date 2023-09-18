import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { Media } from '@ionic-native/media/ngx';

import { SourateComponent } from './component/sourate/sourate.component';
import { ListeLectureComponent } from './component/liste-lecture/liste-lecture.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { ModificationMosqueeComponent } from './PageSuperAdmin/modification-mosquee/modification-mosquee.component';
import { AppComponent } from './app.component';


import { AddListeComponent } from './component/add-liste/add-liste.component';
import { DetailSourateComponent } from './component/detail-sourate/detail-sourate.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { DetailMosqueeComponent } from './PageSuperAdmin/detail-mosquee/detail-mosquee.component';
import { MosqueeComponent } from './PageSuperAdmin/mosquee/mosquee.component';
import { ModifierFrequenceRadioComponent } from './PageSuperAdmin/modifier-frequence-radio/modifier-frequence-radio.component';
import { ListeFrequenceRadioComponent } from './PageSuperAdmin/liste-frequence-radio/liste-frequence-radio.component';
import { ModifierutilisateurComponent } from './PageSuperAdmin/modifierutilisateur/modifierutilisateur.component';

import { InscriptionComponent } from './inscription/inscription.component';
import { DetailadminMosqueComponent } from './PageSuperAdmin/detailadmin-mosque/detailadmin-mosque.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailutilisateurComponent } from './PageSuperAdmin/detailutilisateur/detailutilisateur.component';
import { ListutilisateurComponent } from './PageSuperAdmin/listutilisateur/listutilisateur.component';
import { PageutiletadminComponent } from './PageSuperAdmin/pageutiletadmin/pageutiletadmin.component';
import { HomeSuperAdminComponent } from './PageSuperAdmin/home-super-admin/home-super-admin.component';
import { ListeadminMosqueComponent } from './PageSuperAdmin/listeadmin-mosque/listeadmin-mosque.component';
import { ListeadminComponent } from './PageSuperAdmin/listeadmin/listeadmin.component';
import { ModifieradminComponent } from './PageSuperAdmin/modifieradmin/modifieradmin.component';
import { ModifieradminMosqueComponent } from './PageSuperAdmin/modifieradmin-mosque/modifieradmin-mosque.component';
import { DetailadminComponent } from './PageSuperAdmin/detailadmin/detailadmin.component';
import { CoranComponent } from './PageSuperAdmin/coran/coran.component';
import { AjoutcoranComponent } from './PageSuperAdmin/ajoutcoran/ajoutcoran.component';
import { DetailcoranComponent } from './PageSuperAdmin/detailcoran/detailcoran.component';
import { ModificationcoranComponent } from './PageSuperAdmin/modificationcoran/modificationcoran.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxAngularMaterialHijriAdapterModule } from 'ngx-angular-material-hijri-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateLocaleKeys, MOMENT_HIJRI_DATE_FORMATS } from 'ngx-angular-material-hijri-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CalendrierComponent } from './PageSuperAdmin/calendrier/calendrier.component';
import { LecteurComponent } from './PageSuperAdmin/lecteur/lecteur.component';

import { AccueilAdminSimpleComponent } from './Admin-Mosque/accueil-admin-simple/accueil-admin-simple.component'; 
import { HoraireComponent } from './Admin-Mosque/horaire-liste/horaire.component';
import { HoraireModifierComponent } from './Admin-Mosque/horaire-modifier/horaire-modifier.component';
import { AnnonceComponent } from './Admin-Mosque/annonce-ajouter/annonce.component';
import { AnnonceUpdateComponent } from './Admin-Mosque/annonce-update/annonce-update.component';
import { AnnonceListeComponent } from './Admin-Mosque/annonce-liste/annonce-liste.component';
import { ProgrammeListeComponent } from './Admin-Mosque/programme-liste/programme-liste.component';
import { ProgrammeAjouterComponent } from './Admin-Mosque/programme-ajouter/programme-ajouter.component';
import { ProgrammeUpdateComponent } from './Admin-Mosque/programme-update/programme-update.component';
import { DocumentListeComponent } from './Admin-Mosque/document-liste/document-liste.component';
import { DocumentAjouterComponent } from './Admin-Mosque/document-ajouter/document-ajouter.component';
import { DocumentUpdateComponent } from './Admin-Mosque/document-update/document-update.component';
import { ProfileUpdateComponent } from './Admin-Mosque/profile-update/profile-update.component';
import { DetailsAnnonceComponent } from './Admin-Mosque/details-annonce/details-annonce.component';
import { DetailsProgrammeComponent } from './Admin-Mosque/details-programme/details-programme.component';
import { DetailsDocumentComponent } from './Admin-Mosque/details-document/details-document.component';
import { DetailsDocVideoComponent } from './Admin-Mosque/details-doc-video/details-doc-video.component';
import { DetailsDocRecitationComponent } from './Admin-Mosque/details-doc-recitation/details-doc-recitation.component';
import { ModifierProfileComponent } from './PageSuperAdmin/modifier-profile/modifier-profile.component';
@NgModule({
  declarations: [AppComponent,CalendrierComponent, LecteurComponent, ModifierutilisateurComponent,
    AjoutcoranComponent ,DetailcoranComponent ,ModificationcoranComponent, CoranComponent,DetailadminMosqueComponent,
    ModificationMosqueeComponent, DetailMosqueeComponent, MosqueeComponent,
    ModifierFrequenceRadioComponent,ListeFrequenceRadioComponent,DetailadminComponent,ModifieradminMosqueComponent,
     ModifieradminComponent,ListeadminComponent, ListeadminMosqueComponent,ModifierutilisateurComponent, 
     DetailutilisateurComponent,InscriptionComponent, HomeSuperAdminComponent, PageutiletadminComponent, 
     ListutilisateurComponent, ConnexionComponent, AccueilAdminSimpleComponent, ProgrammeListeComponent,ProgrammeAjouterComponent,
      DetailsAnnonceComponent,DetailsDocumentComponent,
     HoraireComponent, HoraireModifierComponent, AnnonceComponent, AnnonceUpdateComponent, AnnonceListeComponent,
     DetailsDocVideoComponent, ProgrammeUpdateComponent, DetailsDocRecitationComponent,
     SourateComponent, ListeLectureComponent,AddListeComponent,DetailSourateComponent, InscriptionComponent,
     DetailadminMosqueComponent,ModificationMosqueeComponent, DetailMosqueeComponent,
      MosqueeComponent,ModifierFrequenceRadioComponent,ListeFrequenceRadioComponent,DetailadminComponent,
      ModifieradminMosqueComponent, ModifieradminComponent,ListeadminComponent, ListeadminMosqueComponent,ModifierutilisateurComponent, 
      DetailutilisateurComponent,InscriptionComponent, HomeSuperAdminComponent, PageutiletadminComponent, ListutilisateurComponent,
       ConnexionComponent, ModifierProfileComponent,
    DocumentListeComponent,DocumentAjouterComponent, DocumentUpdateComponent,ProfileUpdateComponent, DetailsProgrammeComponent ],
  imports: [BrowserModule,FormsModule, HttpClientModule ,MatDialogModule,MatButtonModule,  ReactiveFormsModule,IonicModule.forRoot(), AppRoutingModule, NgxPaginationModule, MatDatepickerModule,NgxAngularMaterialHijriAdapterModule, MatFormFieldModule,MatInputModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

   { provide: DateAdapter,
    useClass: NgxAngularMaterialHijriAdapterModule,
  },
  // Change the format by using `MOMENT_HIJRI_DATE_FORMATS` for Dates and `MOMENT_HIJRI_DATE_TIME_FORMATS` for date/time.
  { provide: MAT_DATE_FORMATS, useValue: MOMENT_HIJRI_DATE_FORMATS },
  // Change the localization to arabic by using `AR_SA` not `AR` only and `EN_US` not `EN` only.
  { provide: MAT_DATE_LOCALE, useValue: DateLocaleKeys.AR_SA },Media
],
  bootstrap: [AppComponent],
})
export class AppModule {}
