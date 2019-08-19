import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Phone, Domaindata } from '../../model/customermodel';
import { MatDialogRef } from '@angular/material';
import { AdminPanelMainService } from '../../admin-panel-main.service';

@Component({
  selector: 'app-add-customer-phone',
  templateUrl: './add-customer-phone.component.html',
  styleUrls: ['./add-customer-phone.component.scss']
})
export class AddCustomerPhoneComponent implements OnInit {

  PhoneForm : FormGroup;
  formData : Phone;
  phoneisdcode : Domaindata[];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerPhoneComponent>, private adminpnalService : AdminPanelMainService) { }

  ngOnInit() {
    this.PhoneForm = this.fb.group({
      ph_isd_code:'',
      ph_no:['', [Validators.required]],
    });

    this.adminpnalService.getCountryCode().subscribe(
      (data) => {
        this.phoneisdcode = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  CancelOperation() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.formData = {
      ph_isd_code : form.controls.ph_isd_code.value,
      ph_no : form.controls.ph_no.value,
    }
    this.dialogRef.close(this.formData);
  }

}
