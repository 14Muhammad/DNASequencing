import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from "@angular/material";

import { AppComponent } from './app.component';
import {SimpleNotificationsModule} from "angular2-notifications";
import { UpperCaseInputDirective } from './shared/directives/upper-case-input.directive';
import {AppService} from "./app.service";
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    UpperCaseInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    SimpleNotificationsModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
