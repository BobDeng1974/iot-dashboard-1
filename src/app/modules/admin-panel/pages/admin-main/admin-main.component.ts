import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddVendorFormComponent } from '../../components/add-vendor-form/add-vendor-form.component';
import { AddCustomerFormComponent } from '../../components/add-customer-form/add-customer-form.component';
import { AddCustomerAddressComponent } from '../../components/add-customer-address/add-customer-address.component';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  //open add vendor in popup
  addvendordialog :  MatDialogRef<AddVendorFormComponent>;

  // Open add customer in popup
  addcustomerdialog : MatDialogRef<AddCustomerFormComponent>;

  // Open address in popup
  customeraddressdialog : MatDialogRef<AddCustomerAddressComponent>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openPopup(value : number) {
    switch (value) {
      // Open add vendor dialog
      case 0:
        this.addvendordialog = this.dialog.open(AddVendorFormComponent);
      break;
      
      // Open add customer dialog
      case 2:
        this.addcustomerdialog = this.dialog.open(AddCustomerFormComponent);
      break;

      // Open customer address dialog
      case 4:
        this.customeraddressdialog = this.dialog.open(AddCustomerAddressComponent);
      break;

    }
  }
}
