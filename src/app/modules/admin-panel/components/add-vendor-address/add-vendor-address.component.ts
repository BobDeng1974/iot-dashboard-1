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
      add_type: '',
      add_address_line1: ['',[Validators.required, Validators.maxLength(40)]],
      add_address_line2: ['', [Validators.maxLength(40)]],
      add_city: '',
      add_state: '',
      add_country: '',
      add_pin: ['',[Validators.required]],
      default_value: '',
    });

    if (this.formData) {
      this.title = "Edit Address";
      this.addressForm.patchValue(this.formData);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.formData = {
      add_type : form.controls.add_type.value,
      add_address_line1 : form.controls.add_address_line1.value,
      add_address_line2 : form.controls.add_address_line2.value,
      add_city : form.controls.add_city.value,
      add_state : form.controls.add_state.value,
      add_country : form.controls.add_country.value,
      add_pin : form.controls.add_pin.value,
    }
    this.dialogRef.close(this.formData);
  }
}
