import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Phone } from '../../model/vendormodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-vendor-phone',
  templateUrl: './add-vendor-phone.component.html',
  styleUrls: ['./add-vendor-phone.component.scss']
})
export class AddVendorPhoneComponent implements OnInit {

  PhoneForm : FormGroup;
  formData : Phone;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddVendorPhoneComponent>) { }

  ngOnInit() {
    this.PhoneForm = this.fb.group({
      ph_isd_code:['', [Validators.required]],
      ph_no:['', [Validators.required]],
    });
  }

  CancelOperation() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.formData = {
      ph_isd_code : form.controls.ph_isd_code.value,
      ph_no : form.controls.ph_no.value,
    }
    this.dialogRef.close(this.formData);
  }
}
