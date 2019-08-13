import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { MaterialModule } from 'src/app/material/material.module';
import { VendorTableComponent } from './components/vendor-table/vendor-table.component';
import { VendorDetailsComponent } from './components/vendor-details/vendor-details.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddVendorFormComponent } from './components/add-vendor-form/add-vendor-form.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AddCustomerFormComponent } from './components/add-customer-form/add-customer-form.component';



@NgModule({
  declarations: [AdminMainComponent, AdminViewComponent, VendorTableComponent, VendorDetailsComponent, AddVendorFormComponent, CustomerTableComponent, CustomerDetailsComponent, AddCustomerFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    AgGridModule.withComponents([])
  ],
  entryComponents : [ AddVendorFormComponent, AddCustomerFormComponent ]
})
export class AdminPanelModule { }
