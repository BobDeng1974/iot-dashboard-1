import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { sensor } from 'src/app/modules/admin-panel/model/gateway';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DashbordMainService } from '../../dashbord-main.service';
import { sensorData } from '../../model/customerDashboard';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-sensor-mobile',
  templateUrl: './sensor-mobile.component.html',
  styleUrls: ['./sensor-mobile.component.scss']
})
export class SensorMobileComponent implements OnInit {
  @Input() sensor : sensor;
  @Input() nodeUid : string;
  sensorType:any;
  payload : any[] = [];
  formatedData : sensorData[] = [];
  graphData : any[][];
  currentReading : sensorData;
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
      switchMap( () => this.dashboardService.getNodeData(this.payload))
    ).subscribe(
      (data) => {
        // console.log(data);
        this.formatedData = [];
        this.graphData = data.results[0].series[0].values;
        this.graphData.forEach( element => {
          this.formatedData.push({
            name: new Date(element[0]),
            value : element[element.length - 3]
          })
        })
        console.log(this.formatedData.length);
        this.currentReading = this.formatedData[this.formatedData.length - 1]
        console.log("current reading",this.currentReading);
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
