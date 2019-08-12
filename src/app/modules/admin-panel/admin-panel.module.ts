import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { MaterialModule } from 'src/app/material/material.module';
import { VendorTableComponent } from './components/vendor-table/vendor-table.component';



@NgModule({
  declarations: [AdminMainComponent, AdminViewComponent, VendorTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminPanelModule { }
