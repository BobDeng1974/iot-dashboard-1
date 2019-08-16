import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  adddeviceForm : FormGroup;

  constructor(private fb : FormBuilder, public dialogRef : MatDialogRef<AddDeviceComponent>) { }

  ngOnInit() {
    this.adddeviceForm = this.fb.group({
      add_device_name : ['',[Validators.required]],
      add_device_mac_address : ['',[Validators.required]],
    });
  }

}
