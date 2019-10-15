import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-add-sensor',
  templateUrl: './add-sensor.component.html',
  styleUrls: ['./add-sensor.component.scss']
})
export class AddSensorComponent implements OnInit {

  sensorForm : FormGroup;
  sensorType;
  constructor(private fb : FormBuilder, private dialogref : MatDialogRef<AddSensorComponent>, private adminPanelService: AdminPanelMainService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.sensorForm = this.fb.group({
      sensor_type:['', [Validators.required]],
      sensor_model: ['', [Validators.required]],
      sensor_make:['', [Validators.required]],
      sensor_desc:[''],
      sensor_threshold_max:[''],
      sensor_threshold_min:['']
    })
    this.spinner.show()
    this.adminPanelService.getSensorType().subscribe(
      (data) => {
        this.sensorType = data;
        console.log(this.sensorType)
        this.spinner.hide();
      },
      (error) => {
        console.error(error);
        this.spinner.hide()
      }
    );
  }
  closeDialog(){
    this.dialogref.close()
  }

  onSubmit(form){
    
  }
}
