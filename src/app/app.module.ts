import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {ButtonsModule} from "@progress/kendo-angular-buttons";
import { BooksComponent } from './books/books.component';
import { BookItemModalComponent } from './books/book-item-modal/book-item-modal.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import {ReactiveFormsModule} from "@angular/forms";

const config = {
    apiKey: "AIzaSyB9bQJuVSd9nXWtloEO54igKV6fqIP_SRU",
    authDomain: "angular-kendo.firebaseapp.com",
    databaseURL: "https://angular-kendo.firebaseio.com/",
    projectId: "angular-kendo",
    storageBucket: "api-project-400013235268.appspot.com",
    messagingSenderId: "116845072435"
};

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookItemModalComponent
  ],
  imports: [
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonsModule,
    DialogsModule,
    DropDownsModule,
    DateInputsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
