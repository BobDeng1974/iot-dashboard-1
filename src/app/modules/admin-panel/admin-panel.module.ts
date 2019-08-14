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
import { AddCustomerAddressComponent } from './components/add-customer-address/add-customer-address.component';
import { AddCustomerLegalinfoComponent } from './components/add-customer-legalinfo/add-customer-legalinfo.component';
import { AddCustomerPhoneComponent } from './components/add-customer-phone/add-customer-phone.component';
import { AddCustomerEmailComponent } from './components/add-customer-email/add-customer-email.component';
import { AddCustomerAdditionalinfoComponent } from './components/add-customer-additionalinfo/add-customer-additionalinfo.component';
import { AddCustomerBranchComponent } from './components/add-customer-branch/add-customer-branch.component';



@NgModule({
  declarations: [AdminMainComponent, AdminViewComponent, VendorTableComponent, VendorDetailsComponent, AddVendorFormComponent, CustomerTableComponent, CustomerDetailsComponent, AddCustomerFormComponent, AddCustomerAddressComponent, AddCustomerLegalinfoComponent, AddCustomerPhoneComponent, AddCustomerEmailComponent, AddCustomerAdditionalinfoComponent, AddCustomerBranchComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    AgGridModule.withComponents([])
  ],
  entryComponents : [ AddVendorFormComponent, AddCustomerFormComponent, AddCustomerAddressComponent, AddCustomerLegalinfoComponent, AddCustomerPhoneComponent, AddCustomerEmailComponent, AddCustomerAdditionalinfoComponent, AddCustomerBranchComponent ]
})
export class AdminPanelModule { }
