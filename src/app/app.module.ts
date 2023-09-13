import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
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
import { FormsModule } from '@angular/forms';
import { DetailsAnnonceComponent } from './Admin-Mosque/details-annonce/details-annonce.component';
import { DetailsProgrammeComponent } from './Admin-Mosque/details-programme/details-programme.component';
import { DetailsDocumentComponent } from './Admin-Mosque/details-document/details-document.component';
import { DetailsDocVideoComponent } from './Admin-Mosque/details-doc-video/details-doc-video.component';
import { DetailsDocRecitationComponent } from './Admin-Mosque/details-doc-recitation/details-doc-recitation.component';

@NgModule({
  declarations: [AppComponent, AccueilAdminSimpleComponent, ProgrammeListeComponent,ProgrammeAjouterComponent, DetailsAnnonceComponent,DetailsDocumentComponent,
     HoraireComponent, HoraireModifierComponent, AnnonceComponent, AnnonceUpdateComponent, AnnonceListeComponent,
     DetailsDocVideoComponent, ProgrammeUpdateComponent, DetailsDocRecitationComponent,
    DocumentListeComponent,DocumentAjouterComponent, DocumentUpdateComponent,ProfileUpdateComponent, DetailsProgrammeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
