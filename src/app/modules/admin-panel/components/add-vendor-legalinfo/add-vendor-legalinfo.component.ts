import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LegalInfo } from '../../model/vendormodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-vendor-legalinfo',
  templateUrl: './add-vendor-legalinfo.component.html',
  styleUrls: ['./add-vendor-legalinfo.component.scss']
})
export class AddVendorLegalinfoComponent implements OnInit {

  LegalInfoForm:FormGroup;
  formData : LegalInfo;

  constructor(private fb: FormBuilder, public dialogRef : MatDialogRef<AddVendorLegalinfoComponent>) { }

  ngOnInit() {
    this.LegalInfoForm=this.fb.group({
      legalinfo_type:['', [Validators.required]],
      legalinfo_value:['', [Validators.required]],
    });
  }

  CancelOperation() {
    this.dialogRef.close();
  }

}
