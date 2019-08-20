import { Component, OnInit, INJECTOR, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Device } from '../../model/customermodel';

@Component({
  selector: 'app-device-customer-assign',
  templateUrl: './device-customer-assign.component.html',
  styleUrls: ['./device-customer-assign.component.scss']
})
export class DeviceCustomerAssignComponent implements OnInit {

  device: Device;
  customerAssignForm: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DeviceCustomerAssignComponent>, @Inject(MAT_DIALOG_DATA) public data: Device) {
    this.device = data;  
  }

  ngOnInit() {
    this.customerAssignForm = this.fb.group({
      device_name:'',
      customer_name: '',
      branch_name:'',
      device_assign_effective_from:'',
      device_assign_effective_to: ''
    });
    if (this.device && this.device.device_id > 0) {
      this.customerAssignForm.patchValue(this.device);

    }
  }

  closeDialog(){
    this.dialogRef.close();
  }

  onSubmit(form){
    console.log(form)
  }
}
