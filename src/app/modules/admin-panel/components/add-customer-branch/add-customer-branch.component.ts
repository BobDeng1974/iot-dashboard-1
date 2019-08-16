import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Branch } from '../../model/customermodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-customer-branch',
  templateUrl: './add-customer-branch.component.html',
  styleUrls: ['./add-customer-branch.component.scss']
})
export class AddCustomerBranchComponent implements OnInit {

  branchForm: FormGroup;
  formData: Branch;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerBranchComponent>) { }

  ngOnInit() {
    this.branchForm = this.fb.group({
      branch_name : ['',[Validators.required]],
      branch_add_address_line1 : ['',[Validators.required, Validators.maxLength(40)]],
      branch_add_address_line2 : ['',[Validators.required, Validators.maxLength(40)]],
      branch_add_city : '',
      branch_add_state : '',
      branch_add_pin : ['',[Validators.required]],
      branch_add_country : ['',[Validators.required]]
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.formData = {
      branch_name : form.controls.branch_name.value,
      branch_add_line1 : form.controls.branch_add_address_line1.value,
      branch_add_line2 : form.controls.branch_add_address_line2.value,
      branch_add_city : form.controls.branch_add_city.value,
      branch_add_state : form.controls.branch_add_state.value,
      branch_add_country : form.controls.branch_add_country.value,
      branch_add_pin : form.controls.branch_add_pin.value,
    }
    this.dialogRef.close(this.formData);
  }

}
