import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.scss']
})
export class AddCustomerFormComponent implements OnInit {

  // Customer form
  customerForm : FormGroup

  constructor(private fb : FormBuilder, public dialogRef : MatDialogRef<AddCustomerFormComponent>) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      customer_name : ['',[Validators.required]],
      customer_code : ['',[Validators.required]],
      customer_type : ['',[Validators.required]],
      customer_tag : '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
