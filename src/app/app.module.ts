import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WastesComponent } from './wastes/wastes.component';
import { WasteDetailComponent } from './waste-detail/waste-detail.component';
import { WasteAddComponent } from './waste-add/waste-add.component';
import { WasteEditComponent } from './waste-edit/waste-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatInputModule } from "@angular/material/input";
import {  MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {  MatSortModule } from "@angular/material/sort";
import {  MatIconModule } from "@angular/material/icon";
import {  MatButtonModule } from "@angular/material/button";
import {  MatFormFieldModule } from "@angular/material/form-field";
 



@NgModule({
  declarations: [
    AppComponent,
    WastesComponent,
    WasteDetailComponent,
    WasteDetailComponent,
    WasteAddComponent,
    WasteEditComponent,
    FormsModule,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }