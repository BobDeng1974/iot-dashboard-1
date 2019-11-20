import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { sensor } from 'src/app/modules/admin-panel/model/gateway';
import { interval, Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DashbordMainService } from '../../dashbord-main.service';
import { sensorData } from '../../model/customerDashboard';
import { MatRipple } from '@angular/material';
import { id } from '@swimlane/ngx-charts/release/utils';

@Component({
  selector: 'app-sensor-mobile',
  templateUrl: './sensor-mobile.component.html',
  styleUrls: ['./sensor-mobile.component.scss']
})
export class SensorMobileComponent implements OnInit {
  @Input() sensor : sensor;
  @Input() nodeUid : string;
  @Input() autoRefresh: boolean;
  sensorType:any;
  payload : any[] = [];
  formatedData : any;
  currentReading : sensorData;
  currentTime: any;
  @ViewChild(MatRipple, {static: false}) ripple : MatRipple;
  constructor(private dashboardService : DashbordMainService) { }

  ngOnInit() {
    this.sensorType=this.sensor.sensor_type;
    console.log(this.sensorType);
    let data1 = this.payloadFormater(this.nodeUid); 
    let data2 = this.payloadFormater(String(this.sensor.sensor_type));
    this.payload[0] = data1;
    this.payload[1] = data2
    console.log(this.payload);
    
    interval(20000).pipe(
      startWith(0),
      untilDestroyed(this),
      switchMap(() => {
        if(this.autoRefresh){
          return this.dashboardService.getNodeData(this.payload)
        }
        else {
          return new Observable<any>();
        }
      })
    ).subscribe(
      (data) => {
        if(data) {
          this.formatedData = data.results[0].series[0].values[0];
          this.currentReading = this.formatedData[1];
          this.currentTime = new Date(this.formatedData[0]);
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  
  ngOnDestroy(){

  }
  payloadFormater(value){
    return "'"+value+"'"
  }
}
