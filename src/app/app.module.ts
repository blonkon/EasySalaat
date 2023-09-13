import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Media } from '@ionic-native/media/ngx';

import {  MatDialogModule } from '@angular/material/dialog'

import { SourateComponent } from './component/sourate/sourate.component';
import { ListeLectureComponent } from './component/liste-lecture/liste-lecture.component';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AjoutMosqueeComponent } from './PageSuperAdmin/ajout-mosquee/ajout-mosquee.component';
import { ModificationMosqueeComponent } from './PageSuperAdmin/modification-mosquee/modification-mosquee.component';
import { AppComponent } from './app.component';
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

import { DetailMosqueeComponent } from './PageSuperAdmin/detail-mosquee/detail-mosquee.component';
import { MosqueeComponent } from './PageSuperAdmin/mosquee/mosquee.component';
import { ModifierFrequenceRadioComponent } from './PageSuperAdmin/modifier-frequence-radio/modifier-frequence-radio.component';
import { ListeFrequenceRadioComponent } from './PageSuperAdmin/liste-frequence-radio/liste-frequence-radio.component';
import { ModifierutilisateurComponent } from './PageSuperAdmin/modifierutilisateur/modifierutilisateur.component';


import { AddListeComponent } from './component/add-liste/add-liste.component';
import { DetailSourateComponent } from './component/detail-sourate/detail-sourate.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { InscriptionComponent } from './inscription/inscription.component';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
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
import { DetailadminMosqueComponent } from './PageSuperAdmin/detailadmin-mosque/detailadmin-mosque.component';
import { TabsPage } from './tabs/tabs.page';
import { SuperadminPage } from './PageSuperAdmin/superadmin/superadmin.page';
import { AdmosquePage } from './Admin-Mosque/admosque/admosque.page';
@NgModule({
  declarations: [AppComponent,AppComponent, AdmosquePage,AccueilAdminSimpleComponent, ProgrammeListeComponent,ProgrammeAjouterComponent, DetailsAnnonceComponent,DetailsDocumentComponent,
    HoraireComponent, HoraireModifierComponent, AnnonceComponent, AnnonceUpdateComponent, AnnonceListeComponent,
    DetailsDocVideoComponent, ProgrammeUpdateComponent, DetailsDocRecitationComponent,
   DocumentListeComponent,DocumentAjouterComponent, DocumentUpdateComponent,ProfileUpdateComponent, DetailsProgrammeComponent,TabsPage,SuperadminPage,SourateComponent, ListeLectureComponent,AddListeComponent,DetailSourateComponent, InscriptionComponent,DetailadminMosqueComponent,DetailadminComponent,ModifieradminMosqueComponent,ModifieradminComponent,ListeadminComponent,ListeadminMosqueComponent,ListeFrequenceRadioComponent,DetailMosqueeComponent,ModifierFrequenceRadioComponent,MosqueeComponent,AjoutMosqueeComponent,ModifierutilisateurComponent, ModificationMosqueeComponent, DetailutilisateurComponent,InscriptionComponent, HomeSuperAdminComponent, PageutiletadminComponent, ListutilisateurComponent, ConnexionComponent],

  imports: [BrowserModule,FormsModule, AppRoutingModule,HttpClientModule,MatDialogModule,NgxPaginationModule, ReactiveFormsModule,IonicModule.forRoot(), 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Media],
  bootstrap: [AppComponent],
})
export class AppModule {}
