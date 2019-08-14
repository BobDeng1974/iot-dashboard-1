import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdditionalAttributes } from '../../model/vendormodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-vendor-additionalinfo',
  templateUrl: './add-vendor-additionalinfo.component.html',
  styleUrls: ['./add-vendor-additionalinfo.component.scss']
})
export class AddVendorAdditionalinfoComponent implements OnInit {

  Additionalinfoform : FormGroup;
  formData : AdditionalAttributes;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddVendorAdditionalinfoComponent>) { }

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
