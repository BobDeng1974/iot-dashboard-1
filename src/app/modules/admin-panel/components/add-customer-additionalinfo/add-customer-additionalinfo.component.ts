import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdditionalAttributes } from '../../model/customermodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-customer-additionalinfo',
  templateUrl: './add-customer-additionalinfo.component.html',
  styleUrls: ['./add-customer-additionalinfo.component.scss']
})
export class AddCustomerAdditionalinfoComponent implements OnInit {

  Additionalinfoform : FormGroup;
  formData : AdditionalAttributes;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerAdditionalinfoComponent>) { }

  ngOnInit() {
    this.Additionalinfoform = this.fb.group({
      addinfo_attr:['', [Validators.required]],
      addinfo_value:['', [Validators.required]],
    });
  }

  CancelOperation() {
    this.dialogRef.close();
  }

}