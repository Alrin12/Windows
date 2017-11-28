import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { HomeComponent } from './container/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { EditprofileComponent } from './container/editprofile/editprofile.component';
import { HostingComponent } from './container/hosting/hosting.component';
import { RepresentationComponent } from './container/hosting/representation/representation.component';
import { HouseComponent } from './container/hosting/house/house.component';
import { AddressComponent } from './container/hosting/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EditprofileComponent,
    HostingComponent,
    RepresentationComponent,
    HouseComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MaterialModule, ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
