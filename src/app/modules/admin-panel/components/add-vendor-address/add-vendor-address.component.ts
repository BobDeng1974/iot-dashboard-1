import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address } from '../../model/vendormodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-vendor-address',
  templateUrl: './add-vendor-address.component.html',
  styleUrls: ['./add-vendor-address.component.scss']
})
export class AddVendorAddressComponent implements OnInit {

  title: string = "Add New Address";
  addressForm: FormGroup;
  formData : Address;
  
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddVendorAddressComponent>) { }

  ngOnInit() {
    this.addressForm = this.fb.group({
      add_type: ['',[Validators.required]],
      add_address_line1: ['',[Validators.required, Validators.maxLength(40)]],
      add_address_line2: ['', [Validators.maxLength(40)]],
      add_city: '',
      add_state: '',
      add_country: ['',[Validators.required]],
      add_pin: ['',[Validators.required]],
      default_value: '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
