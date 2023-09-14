import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { SourateComponent } from './component/sourate/sourate.component';
import { ListeLectureComponent } from './component/liste-lecture/liste-lecture.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AjoutMosqueeComponent } from './PageSuperAdmin/ajout-mosquee/ajout-mosquee.component';
import { ModificationMosqueeComponent } from './PageSuperAdmin/modification-mosquee/modification-mosquee.component';
import { AppComponent } from './app.component';


import { CoranComponent } from './PageSuperAdmin/coran/coran.component';
import { AjoutcoranComponent } from './PageSuperAdmin/ajoutcoran/ajoutcoran.component';
import { DetailcoranComponent } from './PageSuperAdmin/detailcoran/detailcoran.component';
import { ModificationcoranComponent } from './PageSuperAdmin/modificationcoran/modificationcoran.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import { DateLocaleKeys, MOMENT_HIJRI_DATE_FORMATS } from 'ngx-angular-material-hijri-adaptern';
import { LecteurComponent } from './PageSuperAdmin/lecteur/lecteur.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CalendrierComponent } from './PageSuperAdmin/calendrier/calendrier.component';


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
import { ModifierProfileComponent } from './PageSuperAdmin/modifier-profile/modifier-profile.component';
import { Tab3Page } from './tab3/tab3.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab1Page } from './tab1/tab1.page';
@NgModule({
  declarations: [AppComponent,CoranComponent,ModificationcoranComponent,CalendrierComponent,LecteurComponent,DetailcoranComponent,AjoutcoranComponent,ModifierProfileComponent, AdmosquePage,AccueilAdminSimpleComponent, ProgrammeListeComponent,ProgrammeAjouterComponent, DetailsAnnonceComponent,DetailsDocumentComponent,
    HoraireComponent, HoraireModifierComponent, AnnonceComponent, AnnonceUpdateComponent, AnnonceListeComponent,
    DetailsDocVideoComponent, ProgrammeUpdateComponent, DetailsDocRecitationComponent,
   DocumentListeComponent,DocumentAjouterComponent, DocumentUpdateComponent,ProfileUpdateComponent, DetailsProgrammeComponent,TabsPage,SuperadminPage,SourateComponent, ListeLectureComponent,AddListeComponent,DetailSourateComponent, InscriptionComponent,DetailadminMosqueComponent,DetailadminComponent,ModifieradminMosqueComponent,ModifieradminComponent,ListeadminComponent,ListeadminMosqueComponent,ListeFrequenceRadioComponent,DetailMosqueeComponent,ModifierFrequenceRadioComponent,MosqueeComponent,AjoutMosqueeComponent,ModifierutilisateurComponent, ModificationMosqueeComponent, DetailutilisateurComponent,InscriptionComponent, HomeSuperAdminComponent, PageutiletadminComponent, ListutilisateurComponent, ConnexionComponent],

  imports: [BrowserModule,FormsModule, AppRoutingModule,HttpClientModule,MatDialogModule,NgxPaginationModule, ReactiveFormsModule,IonicModule.forRoot(), 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: DateAdapter,
    //   useClass: NgxAngularMaterialHijriAdapterModule,
    // },
    // // Change the format by using `MOMENT_HIJRI_DATE_FORMATS` for Dates and `MOMENT_HIJRI_DATE_TIME_FORMATS` for date/time.
    // { provide: MAT_DATE_FORMATS, useValue: MOMENT_HIJRI_DATE_FORMATS },
    // // Change the localization to arabic by using `AR_SA` not `AR` only and `EN_US` not `EN` only.
    // { provide: MAT_DATE_LOCALE, useValue: DateLocaleKeys.AR_SA },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
