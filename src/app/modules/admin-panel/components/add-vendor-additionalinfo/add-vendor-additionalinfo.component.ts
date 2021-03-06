import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdditionalAttributes } from '../../model/vendormodel';
import { MatDialogRef } from '@angular/material';
import { Validation } from 'src/app/modules/shared/validators/validation';

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
      addinfo_attr:['', [Validators.required, Validation.nonleadingspace]],
      addinfo_value:['', [Validators.required, Validation.nonleadingspace]],
    });
  }

  CancelOperation() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.formData = {
      addinfo_attr : form.controls.addinfo_attr.value,
      addinfo_value : form.controls.addinfo_value.value,
    }
    this.dialogRef.close(this.formData);
  }

}
