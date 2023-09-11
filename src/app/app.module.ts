import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Media } from '@ionic-native/media/ngx';

import {  MatDialogModule } from '@angular/material/dialog'

import { SourateComponent } from './component/sourate/sourate.component';
import { ListeLectureComponent } from './component/liste-lecture/liste-lecture.component';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddListeComponent } from './component/add-liste/add-liste.component';
import { FormsModule } from '@angular/forms';
import { DetailSourateComponent } from './component/detail-sourate/detail-sourate.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [AppComponent,SourateComponent, ListeLectureComponent,AddListeComponent,DetailSourateComponent, InscriptionComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,MatDialogModule,FormsModule,NgxPaginationModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Media],
  bootstrap: [AppComponent],
})
export class AppModule {}
