import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
