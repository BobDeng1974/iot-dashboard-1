import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-sensor',
  templateUrl: './add-sensor.component.html',
  styleUrls: ['./add-sensor.component.scss']
})
export class AddSensorComponent implements OnInit {

  sensorForm : FormGroup;
  sensorType;
  constructor(private fb : FormBuilder, private dialogref : MatDialogRef<AddSensorComponent>) { }

  ngOnInit() {
    this.sensorForm = this.fb.group({
      sensor_type:['', [Validators.required]],
      sensor_model:'',
      sensor_make:'',
      sensor_desc:'',
      sensor_threshold_max:'',
      sensor_threshold_min:''
    })
  }
  closeDialog(){
    this.dialogref.close()
  }
}
