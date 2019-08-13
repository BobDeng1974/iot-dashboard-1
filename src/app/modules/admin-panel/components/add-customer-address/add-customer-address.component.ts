import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address } from '../../model/customermodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-customer-address',
  templateUrl: './add-customer-address.component.html',
  styleUrls: ['./add-customer-address.component.scss']
})
export class AddCustomerAddressComponent implements OnInit {

  title: string = "Add New Address";
  formData : Address;
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerAddressComponent>) { }

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
