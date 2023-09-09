import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SourateComponent } from './component/sourate/sourate.component';
import { ListeLectureComponent } from './component/liste-lecture/liste-lecture.component';
import { Media } from '@ionic-native/media/ngx';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [AppComponent, InscriptionComponent,SourateComponent, ListeLectureComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Media],
  bootstrap: [AppComponent],
})
export class AppModule {}
