import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddVendorFormComponent } from '../../components/add-vendor-form/add-vendor-form.component';
import { AddCustomerFormComponent } from '../../components/add-customer-form/add-customer-form.component';
import { AddCustomerAddressComponent } from '../../components/add-customer-address/add-customer-address.component';
import { AddCustomerLegalinfoComponent } from '../../components/add-customer-legalinfo/add-customer-legalinfo.component';
import { AddCustomerPhoneComponent } from '../../components/add-customer-phone/add-customer-phone.component';
import { AddCustomerEmailComponent } from '../../components/add-customer-email/add-customer-email.component';
import { AddCustomerAdditionalinfoComponent } from '../../components/add-customer-additionalinfo/add-customer-additionalinfo.component';

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

  // Open legal info for customer in popup
  customerlegalinfodialog  : MatDialogRef<AddCustomerLegalinfoComponent>;

  // Open phone for customer in popup
  customerphonedialog : MatDialogRef<AddCustomerPhoneComponent>;

  // Open email for customer in popup
  customeremaildialog : MatDialogRef<AddCustomerEmailComponent>;

  // Open additional information in popup
  custoeraddinfodialog : MatDialogRef<AddCustomerAdditionalinfoComponent>;

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

      // Open customer legal info dialog
      case 5: 
        this.customerlegalinfodialog = this.dialog.open(AddCustomerLegalinfoComponent);
      break;

      // Open customer phone dialog
      case 6:
        this.customerphonedialog = this.dialog.open(AddCustomerPhoneComponent);
      break;

      // Open customer email dialog
      case 7:
        this.customeremaildialog = this.dialog.open(AddCustomerEmailComponent);
      break;

      // Open customer additoional information  dialog
      case 8:
        this.custoeraddinfodialog = this.dialog.open(AddCustomerAdditionalinfoComponent);
      break;
    }
  }
}
