import { Component, OnInit, INJECTOR, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Device, DeviceAssignment } from '../../model/customermodel';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-device-customer-assign',
  templateUrl: './device-customer-assign.component.html',
  styleUrls: ['./device-customer-assign.component.scss']
})
export class DeviceCustomerAssignComponent implements OnInit {

  device: Device;
  customerAssignForm: FormGroup;
  customerData: any[] = []
  customerId: number;
  branchData: any[] = []
  title : string;
  formData: DeviceAssignment;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DeviceCustomerAssignComponent>, @Inject(MAT_DIALOG_DATA) public data: Device, private adminMainService: AdminPanelMainService, private spinner: NgxSpinnerService) {
    this.device = data;
  }

  ngOnInit() {
    this.title = "Assign Gateway to customer"
    this.customerAssignForm = this.fb.group({
      customer_id:'',
      device_name: '',
      customer_name: '',
      branch_unit:'',
      customer_branch_name: '',
      device_assign_effective_from: '',
      device_assign_effective_to: ''
    });


    this.adminMainService.getCustomerNameandId().subscribe(
      (data) => {
        this.customerData = data
        if (this.device && this.device.device_id > 0) {
          console.log("hi");
          this.customerAssignForm.patchValue(this.device);

        }
        else {
          this.customerAssignForm.patchValue(this.device);
        }
      },
      (error) => {
        console.log(error)
      }
    );

  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.formData = {
      device_id: this.device.device_id,
      device_name: form.controls.device_name.value,
      branch_unit: form.controls.branch_unit.value,
      customer_id: form.controls.customer_name.value.customer_id,
      customer_name: form.controls.customer_name.value.customer_name,
      customer_branch_name: form.controls.customer_branch_name.value,
      device_assign_effective_from: form.controls.device_assign_effective_from.value,
      device_assign_effective_to: form.controls.device_assign_effective_to.value
    };
    this.dialogRef.close(this.formData)
  }

  onSelectionChange(value) {
    console.log(value)
    this.customerId = value.value.customer_id;
    this.spinner.show()
    this.adminMainService.getCustomerBranch(this.customerId).subscribe(
      (data) => {
        this.branchData = data
        this.spinner.hide()
      },
      (error) => {
        console.log(error);
        this.spinner.hide()
      }
    );
  }
}
