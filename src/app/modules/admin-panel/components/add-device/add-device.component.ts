import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Device } from '../../model/customermodel';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  adddeviceForm : FormGroup;
  device: Device;
  constructor(private fb : FormBuilder, public dialogRef : MatDialogRef<AddDeviceComponent>, @Inject(MAT_DIALOG_DATA) public data: Device) { 
    this.device = data;
  }

  ngOnInit() {
    this.adddeviceForm = this.fb.group({
      device_name : ['',[Validators.required]],
      device_mac : ['',[Validators.required]],
      sensor_name: ['', Validators.required],
      sensor_type: ['', Validators.required],
      sensor_threshold_max: ['', Validators.required],
      sensor_threshold_min: ['', Validators.required],
    });

    if (this.device && this.device.device_id > 0) {
      this.adddeviceForm.patchValue(this.device);
    }
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
