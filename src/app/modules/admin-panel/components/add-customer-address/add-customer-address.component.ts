import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address, Domaindata } from '../../model/customermodel';
import { MatDialogRef } from '@angular/material';
import { AdminPanelMainService } from '../../admin-panel-main.service';

@Component({
  selector: 'app-add-customer-address',
  templateUrl: './add-customer-address.component.html',
  styleUrls: ['./add-customer-address.component.scss']
})
export class AddCustomerAddressComponent implements OnInit {

  title: string = "Add New Address";
  formData : Address;
  addressForm: FormGroup;
  getAddressType : Domaindata[];
  countryCode : Domaindata[];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerAddressComponent>, private adminpnalService : AdminPanelMainService) { }

  ngOnInit() {
    this.addressForm = this.fb.group({
      add_type: '',
      add_address_line1: ['',[Validators.required, Validators.maxLength(40)]],
      add_address_line2: ['', [Validators.maxLength(40)]],
      add_city: '',
      add_state: '',
      add_country: '',
      add_pin: ['',[Validators.required]],
      default_value: '',
    });

    if (this.formData) {
      this.title = "Edit Address";
      this.addressForm.patchValue(this.formData);
    }

    this.adminpnalService.getAddressType().subscribe(
      (data) => {
        this.getAddressType = data;
        //console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );

    this.adminpnalService.getCountryCode().subscribe(
      (data) => {
        this.countryCode = data;
        //console.log("Cuntry Code form customer address   "+data);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.formData = {
      add_type : form.controls.add_type.value,
      add_address_line1 : form.controls.add_address_line1.value,
      add_address_line2 : form.controls.add_address_line2.value,
      add_city : form.controls.add_city.value,
      add_state : form.controls.add_state.value,
      add_country : form.controls.add_country.value,
      add_pin : form.controls.add_pin.value,
    }
    this.dialogRef.close(this.formData);
  }

}
