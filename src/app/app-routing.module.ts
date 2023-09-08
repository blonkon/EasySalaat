import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminSimpleConnexionComponent } from './Admin-Mosque/admin-simple-connexion/admin-simple-connexion.component';
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

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
  path: 'admin-simple-connexion', component: AdminSimpleConnexionComponent
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
  {
     path:'profile-update', component: ProfileUpdateComponent
  },
  {
    path: 'profile-admin-mosque',
    loadChildren: () => import('./Admin-Mosque/profile-admin-mosque/profile-admin-mosque.module').then( m => m.ProfileAdminMosquePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
