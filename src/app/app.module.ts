import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModifierutilisateurComponent } from './PageSuperAdmin/modifierutilisateur/modifierutilisateur.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailutilisateurComponent } from './PageSuperAdmin/detailutilisateur/detailutilisateur.component'; 
import { ListutilisateurComponent } from './PageSuperAdmin/listutilisateur/listutilisateur.component';
import { PageutiletadminComponent } from './PageSuperAdmin/pageutiletadmin/pageutiletadmin.component';
import { HomeSuperAdminComponent } from './PageSuperAdmin/home-super-admin/home-super-admin.component';


@NgModule({
  declarations: [AppComponent,ModifierutilisateurComponent, DetailutilisateurComponent,InscriptionComponent, HomeSuperAdminComponent, PageutiletadminComponent, ListutilisateurComponent, ConnexionComponent],

  imports: [BrowserModule,FormsModule ,MatDialogModule,MatButtonModule,  ReactiveFormsModule,IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
