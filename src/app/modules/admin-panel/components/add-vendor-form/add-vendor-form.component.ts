import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Vendor } from '../../model/vendormodel';

@Component({
  selector: 'app-add-vendor-form',
  templateUrl: './add-vendor-form.component.html',
  styleUrls: ['./add-vendor-form.component.scss']
})
export class AddVendorFormComponent implements OnInit {

  // vendor form
  vendorForm : FormGroup;

  formData : Vendor;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddVendorFormComponent>) { }

  ngOnInit() {
    this.vendorForm = this.fb.group({
      vendor_name : ['',[Validators.required]],
      vendor_code : ['',[Validators.required]],
      vendor_type : ['',[Validators.required]],
      vendor_tag : '',
    });
  }

  onSubmit(form) {
    this.formData = {
      vendor_name : form.controls.vendor_name.value,
      vendor_code : form.controls.vendor_code.value,
      vendor_type : form.controls.vendor_type.value,
      vendor_tag : form.controls.vendor_tag.value,
      additional_attributes : [],
      legal_info : [],
      phone : [],
      email : [],
      address : []
    }
    this.dialogRef.close(this.formData);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
