import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AjoutMosqueeComponent } from './PageSuperAdmin/ajout-mosquee/ajout-mosquee.component';
import { ModificationMosqueeComponent } from './PageSuperAdmin/modification-mosquee/modification-mosquee.component';
import { AppComponent } from './app.component';
import { DetailMosqueeComponent } from './PageSuperAdmin/detail-mosquee/detail-mosquee.component';
import { MosqueeComponent } from './PageSuperAdmin/mosquee/mosquee.component';
import { ModifierFrequenceRadioComponent } from './PageSuperAdmin/modifier-frequence-radio/modifier-frequence-radio.component';
import { ListeFrequenceRadioComponent } from './PageSuperAdmin/liste-frequence-radio/liste-frequence-radio.component';
import { ModifierutilisateurComponent } from './PageSuperAdmin/modifierutilisateur/modifierutilisateur.component';
import { InscriptionComponent } from './inscription/inscription.component';
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

@NgModule({
  declarations: [AppComponent,ModificationMosqueeComponent, AjoutMosqueeComponent, DetailMosqueeComponent, MosqueeComponent,ModifierFrequenceRadioComponent,ListeFrequenceRadioComponent,DetailadminComponent,ModifieradminMosqueComponent, ModifieradminComponent,ListeadminComponent, ListeadminMosqueComponent,ModifierutilisateurComponent, DetailutilisateurComponent,InscriptionComponent, HomeSuperAdminComponent, PageutiletadminComponent, ListutilisateurComponent, ConnexionComponent, CoranComponent, AjoutcoranComponent, DetailcoranComponent, ModificationcoranComponent,CalendrierComponent, LecteurComponent],
  imports: [BrowserModule,FormsModule ,MatDialogModule,MatButtonModule,  ReactiveFormsModule,IonicModule.forRoot(), AppRoutingModule,  MatDatepickerModule,NgxAngularMaterialHijriAdapterModule, MatFormFieldModule,MatInputModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   { provide: DateAdapter,
    useClass: NgxAngularMaterialHijriAdapterModule,
  },
  // Change the format by using `MOMENT_HIJRI_DATE_FORMATS` for Dates and `MOMENT_HIJRI_DATE_TIME_FORMATS` for date/time.
  { provide: MAT_DATE_FORMATS, useValue: MOMENT_HIJRI_DATE_FORMATS },
  // Change the localization to arabic by using `AR_SA` not `AR` only and `EN_US` not `EN` only.
  { provide: MAT_DATE_LOCALE, useValue: DateLocaleKeys.AR_SA },
],
  bootstrap: [AppComponent],
})
export class AppModule {}
