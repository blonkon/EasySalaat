import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageutiletadminComponent } from './pageutiletadmin/pageutiletadmin.component';
import { HomeSuperAdminComponent } from './home-super-admin/home-super-admin.component';

@NgModule({
  declarations: [AppComponent, HomeSuperAdminComponent, PageutiletadminComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
