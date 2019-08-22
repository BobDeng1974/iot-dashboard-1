import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Branch, Domaindata } from '../../model/customermodel';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { Validation } from 'src/app/modules/shared/validators/validation';

@Component({
  selector: 'app-add-customer-branch',
  templateUrl: './add-customer-branch.component.html',
  styleUrls: ['./add-customer-branch.component.scss']
})
export class AddCustomerBranchComponent implements OnInit {

  branchForm: FormGroup;
  formData: Branch;
  countryCode : Domaindata[];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerBranchComponent>, private adminpnalService : AdminPanelMainService, @Inject(MAT_DIALOG_DATA) public data: Branch) {
    this.formData = data;
  }

  ngOnInit() {
    this.branchForm = this.fb.group({
      branch_name : ['',[Validators.required]],
      branch_add_line1 : ['',[Validators.required, Validators.maxLength(40)]],
      branch_add_line2 : ['',[Validators.required, Validators.maxLength(40)]],
      branch_add_city : ['',[Validators.required]],
      branch_add_state : ['',[Validators.required]],
      branch_add_pin : ['',[Validators.required]],
      branch_add_country : ['',[Validators.required, Validation.pincode]],
    });

    this.adminpnalService.getCountryCode().subscribe(
      (data) => {
        this.countryCode = data;
      },
      (error) => {
        console.error(error);
      }
    );

    if(this.formData) {
      this.branchForm.patchValue(this.formData);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    if (this.formData) {
      this.formData.branch_name = form.controls.branch_name.value,
      this.formData.branch_add_line1 = form.controls.branch_add_line1.value,
      this.formData.branch_add_line2 = form.controls.branch_add_line2.value,
      this.formData.branch_add_city = form.controls.branch_add_city.value,
      this.formData.branch_add_state = form.controls.branch_add_state.value,
      this.formData.branch_add_country = form.controls.branch_add_country.value,
      this.formData.branch_add_pin = form.controls.branch_add_pin.value
    } 
    
    else {
      this.formData = {
        branch_name : form.controls.branch_name.value,
        branch_add_line1 : form.controls.branch_add_line1.value,
        branch_add_line2 : form.controls.branch_add_line2.value,
        branch_add_city : form.controls.branch_add_city.value,
        branch_add_state : form.controls.branch_add_state.value,
        branch_add_country : form.controls.branch_add_country.value,
        branch_add_pin : form.controls.branch_add_pin.value,
      }  
    }
    this.dialogRef.close(this.formData);
  }

}
