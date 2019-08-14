import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Email } from '../../model/customermodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-customer-email',
  templateUrl: './add-customer-email.component.html',
  styleUrls: ['./add-customer-email.component.scss']
})
export class AddCustomerEmailComponent implements OnInit {

  EmailForm : FormGroup;
  formData : Email;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerEmailComponent>) { }

  ngOnInit() {
    this.EmailForm=this.fb.group({
      eml_address:['', [Validators.required]],
    })
  }

  CancelOperation() {
    this.dialogRef.close();
  }

}