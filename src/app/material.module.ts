import {NgModule} from '@angular/core';

import {  MatInputModule } from "@angular/material/input";
import {  MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {  MatSortModule } from "@angular/material/sort";
import {  MatIconModule } from "@angular/material/icon";
import {  MatButtonModule } from "@angular/material/button";
import {  MatFormFieldModule } from "@angular/material/form-field";
import {  MatTableModule } from "@angular/material/table";

@NgModule({
  imports: [    
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule],
  exports: [MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule]
})
export class MaterialModule {}