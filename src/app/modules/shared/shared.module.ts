import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSnackberComponent } from './components/error-snackber/error-snackber.component';
import { SuccessSnackberComponent } from './components/success-snackber/success-snackber.component';
import { NumericEditorComponent } from './components/numeric-editor/numeric-editor.component';
import { NullValueComponent } from './components/null-value/null-value.component';
import { EmailEditorComponent } from './components/email-editor/email-editor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ErrorSnackberComponent, SuccessSnackberComponent, NumericEditorComponent, NullValueComponent, EmailEditorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ErrorSnackberComponent, SuccessSnackberComponent, NumericEditorComponent, NullValueComponent, EmailEditorComponent]
})
export class SharedModule { }
