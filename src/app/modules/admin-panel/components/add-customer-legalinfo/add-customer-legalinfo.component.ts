import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LegalInfo } from '../../model/customermodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-customer-legalinfo',
  templateUrl: './add-customer-legalinfo.component.html',
  styleUrls: ['./add-customer-legalinfo.component.scss']
})
export class AddCustomerLegalinfoComponent implements OnInit {

  LegalInfoForm:FormGroup;

  formData : LegalInfo;

  constructor(private fb: FormBuilder, public dialogRef : MatDialogRef<AddCustomerLegalinfoComponent>) { }

  ngOnInit() {
    this.LegalInfoForm=this.fb.group({
      legalinfo_type:'',
      legalinfo_value:['', [Validators.required]],
    });
  }

  CancelOperation() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.formData = {
      legalinfo_type : form.controls.legalinfo_type.value,
      legalinfo_value : form.controls.legalinfo_value.value,
    }
    this.dialogRef.close(this.formData);
  }

}
