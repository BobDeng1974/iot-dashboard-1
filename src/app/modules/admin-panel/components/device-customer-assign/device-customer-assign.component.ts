import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-device-customer-assign',
  templateUrl: './device-customer-assign.component.html',
  styleUrls: ['./device-customer-assign.component.scss']
})
export class DeviceCustomerAssignComponent implements OnInit {

  customerAssignForm: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DeviceCustomerAssignComponent>) { }

  ngOnInit() {
    this.customerAssignForm = this.fb.group({
      device_name:['', [Validators.required]],
      customer_name: '',
      device_assign_effective_from:[''],
      device_assign_effective_to: ''
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  onSubmit(form){
    console.log(form)
  }
}
