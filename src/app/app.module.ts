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
import { AjoutMosqueeComponent } from './PageSuperAdmin/ajout-mosquee/ajout-mosquee.component';
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

@NgModule({

  declarations: [AppComponent,SourateComponent, ListeLectureComponent,AddListeComponent,DetailSourateComponent, InscriptionComponent,DetailadminMosqueComponent,ModificationMosqueeComponent, AjoutMosqueeComponent, DetailMosqueeComponent, MosqueeComponent,ModifierFrequenceRadioComponent,ListeFrequenceRadioComponent,DetailadminComponent,ModifieradminMosqueComponent, ModifieradminComponent,ListeadminComponent, ListeadminMosqueComponent,ModifierutilisateurComponent, DetailutilisateurComponent,InscriptionComponent, HomeSuperAdminComponent, PageutiletadminComponent, ListutilisateurComponent, ConnexionComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,MatDialogModule,FormsModule,NgxPaginationModule,MatButtonModule,  ReactiveFormsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Media],

  bootstrap: [AppComponent],
})
export class AppModule {}
