import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';
import { sensor } from '../../model/gateway';
import { SuccessSnackberComponent } from 'src/app/modules/shared/components/success-snackber/success-snackber.component';

@Component({
  selector: 'app-add-sensor',
  templateUrl: './add-sensor.component.html',
  styleUrls: ['./add-sensor.component.scss']
})
export class AddSensorComponent implements OnInit {

  sensorForm : FormGroup;
  sensorType;
  sensor: sensor;
  constructor(private fb : FormBuilder, private dialogref : MatDialogRef<AddSensorComponent>, private adminPanelService: AdminPanelMainService, private spinner: NgxSpinnerService, private _snackBar : MatSnackBar) { }

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
    this.sensor = {
      sensor_type : form.controls.sensor_type.value,
      sensor_make : form.controls.sensor_make.value,
      sensor_model : form.controls.sensor_model.value,
      sensor_desc : form.controls.sensor_desc.value,
      sensor_threshold_max : form.controls.sensor_threshold_max.value,
      sensor_threshold_min : form.controls.sensor_threshold_min.value,
    }
    this.adminPanelService.createSensor(this.sensor).subscribe(
      (data) => {
        this.dialogref.close('success')
        if (data === "001") {
          this._snackBar.openFromComponent(SuccessSnackberComponent, {data:'Sensor stored successfully', duration:3000})
        }else{
          this.adminPanelService.getError(data);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
