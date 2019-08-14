import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Phone } from '../../model/customermodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-customer-phone',
  templateUrl: './add-customer-phone.component.html',
  styleUrls: ['./add-customer-phone.component.scss']
})
export class AddCustomerPhoneComponent implements OnInit {

  PhoneForm : FormGroup;
  formData : Phone;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerPhoneComponent>) { }

  ngOnInit() {
    this.PhoneForm = this.fb.group({
      ph_isd_code:['', [Validators.required]],
      ph_no:['', [Validators.required]],
    });
  }

  CancelOperation() {
    this.dialogRef.close();
  }

}
