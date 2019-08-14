import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddVendorFormComponent } from '../../components/add-vendor-form/add-vendor-form.component';
import { AddCustomerFormComponent } from '../../components/add-customer-form/add-customer-form.component';
import { AddCustomerAddressComponent } from '../../components/add-customer-address/add-customer-address.component';
import { AddCustomerLegalinfoComponent } from '../../components/add-customer-legalinfo/add-customer-legalinfo.component';
import { AddCustomerPhoneComponent } from '../../components/add-customer-phone/add-customer-phone.component';
import { AddCustomerEmailComponent } from '../../components/add-customer-email/add-customer-email.component';
import { AddCustomerAdditionalinfoComponent } from '../../components/add-customer-additionalinfo/add-customer-additionalinfo.component';
import { AddCustomerBranchComponent } from '../../components/add-customer-branch/add-customer-branch.component';
import { AddVendorAddressComponent } from '../../components/add-vendor-address/add-vendor-address.component';
import { AddVendorLegalinfoComponent } from '../../components/add-vendor-legalinfo/add-vendor-legalinfo.component';
import { AddVendorPhoneComponent } from '../../components/add-vendor-phone/add-vendor-phone.component';
import { AddVendorEmailComponent } from '../../components/add-vendor-email/add-vendor-email.component';
import { AddVendorAdditionalinfoComponent } from '../../components/add-vendor-additionalinfo/add-vendor-additionalinfo.component';

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

  // Open branch in popup
  customerbranchdialog : MatDialogRef<AddCustomerBranchComponent>;

  // Open vendor address in popup
  vendoraddressdilog : MatDialogRef<AddVendorAddressComponent>;

  // Open vendor legalinfo in popup
  vendorlegalinfodialog : MatDialogRef<AddVendorLegalinfoComponent>;

  // Open vendor phone in popup
  vendorphonedialog : MatDialogRef<AddVendorPhoneComponent>;

  // Open vendor email in popup
  vendoremaildialog : MatDialogRef<AddVendorEmailComponent>;

  // Open vendor additional info popup
  vendoraddinfodialog : MatDialogRef<AddVendorAdditionalinfoComponent>;

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

      // Open customer branch dialog
      case 9:
        this.customerbranchdialog = this.dialog.open(AddCustomerBranchComponent);
      break;

      // Open vendor address dialog
      case 10:
        this.vendoraddressdilog = this.dialog.open(AddVendorAddressComponent);
      break;

      // Open vendor legal info dialog
      case 11: 
        this.vendorlegalinfodialog = this.dialog.open(AddVendorLegalinfoComponent);
      break;

      // Open vendor phone dialog
      case 12:
        this.vendorphonedialog = this.dialog.open(AddVendorPhoneComponent);
      break;

      // Open vendor email dialog
      case 13:
        this.vendoremaildialog = this.dialog.open(AddVendorEmailComponent);
      break;

      // Open vendor additoional information  dialog
      case 14:
        this.vendoraddinfodialog = this.dialog.open(AddVendorAdditionalinfoComponent);
      break;
    }
  }
}
