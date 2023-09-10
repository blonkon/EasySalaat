import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  MatDialogModule } from '@angular/material/dialog'


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeLectureComponent } from './component/liste-lecture/liste-lecture.component';
import { SourateComponent } from './component/sourate/sourate.component';
import { AddListeComponent } from './component/add-liste/add-liste.component';
import { FormsModule } from '@angular/forms';
import { DetailSourateComponent } from './component/detail-sourate/detail-sourate.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent,SourateComponent, ListeLectureComponent,AddListeComponent,DetailSourateComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,MatDialogModule,FormsModule,NgxPaginationModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
