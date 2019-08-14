import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSnackberComponent } from './components/error-snackber/error-snackber.component';
import { SuccessSnackberComponent } from './components/success-snackber/success-snackber.component';



@NgModule({
  declarations: [ErrorSnackberComponent, SuccessSnackberComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
