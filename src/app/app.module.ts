import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { NopageComponent } from './nopage/nopage.component';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
@NgModule({
  declarations: [
    AppComponent,
    NopageComponent,
    LoginComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
