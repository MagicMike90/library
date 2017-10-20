import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LayoutModule } from './layout/layout.module';

import { ComponentModule } from "./components/component.module";
import { ServiceModule } from "./services/service.module";
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

// import order matters for NgModules.
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
