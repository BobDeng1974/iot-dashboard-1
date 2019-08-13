import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, MatTableModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatExpansionModule, MatRadioButton, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
  ]

})
export class MaterialModule { }
