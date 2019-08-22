import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSnackberComponent } from './components/error-snackber/error-snackber.component';
import { SuccessSnackberComponent } from './components/success-snackber/success-snackber.component';
import { NumericEditorComponent } from './components/numeric-editor/numeric-editor.component';
import { NullValueComponent } from './components/null-value/null-value.component';
import { EmailEditorComponent } from './components/email-editor/email-editor.component';
import { FormsModule } from '@angular/forms';
import { DeviceActiveRendererComponent } from './components/device-active-renderer/device-active-renderer.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DeviceHealthRendererComponent } from './components/device-health-renderer/device-health-renderer.component';
import { MatErrorComponent } from './components/mat-error/mat-error.component';
import { ErrorDirective } from './directives/error/error.directive';




@NgModule({
  declarations: [ErrorSnackberComponent, SuccessSnackberComponent, NumericEditorComponent, NullValueComponent, EmailEditorComponent, DeviceActiveRendererComponent, DeviceHealthRendererComponent, MatErrorComponent, ErrorDirective],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [ErrorSnackberComponent, SuccessSnackberComponent, NumericEditorComponent, NullValueComponent, EmailEditorComponent, ErrorDirective, MatErrorComponent ]
})
export class SharedModule { }
