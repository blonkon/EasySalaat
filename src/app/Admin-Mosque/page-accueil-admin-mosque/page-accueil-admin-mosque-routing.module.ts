import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilAdminSimpleComponent } from '../accueil-admin-simple/accueil-admin-simple.component';
import { HoraireComponent } from '../horaire-liste/horaire.component';
import { HoraireModifierComponent } from '../horaire-modifier/horaire-modifier.component';
import { AnnonceComponent } from '../annonce-ajouter/annonce.component';
import { AnnonceListeComponent } from '../annonce-liste/annonce-liste.component';
import { AnnonceUpdateComponent } from '../annonce-update/annonce-update.component';
import { DocumentAjouterComponent } from '../document-ajouter/document-ajouter.component';
import { DocumentListeComponent } from '../document-liste/document-liste.component';
import { DocumentUpdateComponent } from '../document-update/document-update.component';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import { ProgrammeAjouterComponent } from '../programme-ajouter/programme-ajouter.component';
import { ProgrammeListeComponent } from '../programme-liste/programme-liste.component';
import { ProgrammeUpdateComponent } from '../programme-update/programme-update.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilAdminSimpleComponent,
  },
  {
    path: 'accueil-admin-simple', component: AccueilAdminSimpleComponent
  },
  {
    path: 'horaire', component: HoraireComponent
  },
  {
    path: 'horaire-modifier', component: HoraireModifierComponent
  },
  {
    path: 'annonce', component: AnnonceComponent
  },
  {
    path: 'annonce-update', component: AnnonceUpdateComponent
  },
  {
    path: 'annonce-liste', component: AnnonceListeComponent
  },
  {
    path: 'programme-liste', component: ProgrammeListeComponent
  },
  {
    path:'programme-ajouter', component: ProgrammeAjouterComponent
  },
  {
    path: 'programme-update', component: ProgrammeUpdateComponent
  },
  {
    path: 'document-liste', component: DocumentListeComponent
  },
  {
    path: 'document-ajouter', component: DocumentAjouterComponent
  },
  {
    path: 'document-update', component: DocumentUpdateComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAccueilAdminMosquePageRoutingModule {}
