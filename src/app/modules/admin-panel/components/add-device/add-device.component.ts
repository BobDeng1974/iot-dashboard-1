import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Device } from '../../model/customermodel';
import { AdminPanelMainService } from '../../admin-panel-main.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  adddeviceForm : FormGroup;
  device: Device;
  constructor(private fb : FormBuilder, public dialogRef : MatDialogRef<AddDeviceComponent>, @Inject(MAT_DIALOG_DATA) public data: Device, private adminService: AdminPanelMainService) { 
    this.device = data;
  }

  ngOnInit() {
    this.adddeviceForm = this.fb.group({
      device_name : ['',[Validators.required]],
      device_mac : ['',[Validators.required]],
      // sensor_name: ['', Validators.required],
      // sensor_type: ['', Validators.required],
      // sensor_threshold_max: ['', Validators.required],
      // sensor_threshold_min: ['', Validators.required],
    });

    if (this.device && this.device.device_id > 0) {
      this.adddeviceForm.patchValue(this.device);
    }
  }

  closeDialog(){
    this.dialogRef.close()
  }

  onSubmit(form){
    if (this.device && this.device.device_id > 0) {
      this.device.device_name = form.controls.device_name.value,
      this.device.device_mac = form.controls.device_mac.value
      this.adminService.updateDevice(this.device).subscribe(
        (data) => {
          this.dialogRef.close("success");
          if (data == "001") {
            alert('update successfull')
          }
        },
        (error) => {
          console.log(error)
          this.dialogRef.close()
        }
      );
    } else {
      this.device = {
        device_name : form.controls.device_name.value,
        device_mac: form.controls.device_mac.value,
        sensors: []
      }
      this.adminService.createDevice(this.device).subscribe(
        (data) => {
          this.dialogRef.close("success");
          if (data == "001") {
            alert('post successful')
          }
        },
        (error) => {
          console.log(error)
        }
      );
    }
  }
}
