import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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

import {MaterialModule} from './material.module';

 
@NgModule({
  declarations: [
    AppComponent,
    WastesComponent,
    WasteDetailComponent,
    WasteDetailComponent,
    WasteAddComponent,
    WasteEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
