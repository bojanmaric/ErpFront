import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';

import { AutomobilService } from './servisi/automobil.service';
import { KupacService } from './servisi/kupac.service';
import { KupovinaService } from './servisi/kupovina.service';
import { OsiguranjeService } from './servisi/osiguranje.service';
import { OpremaService } from './servisi/oprema.service';
import { ModelService } from './servisi/model.service';
import { MarkaService } from './servisi/marka.service';
import { TipAutomobilaService } from './servisi/tip-automobila.service';
import { ZaposleniService } from './servisi/zaposleni.service';
import {MaterialModule}from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
   
  ],
  providers: [AutomobilService, KupacService, KupovinaService,
    MarkaService, ModelService, OpremaService, OsiguranjeService,
    TipAutomobilaService, ZaposleniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
