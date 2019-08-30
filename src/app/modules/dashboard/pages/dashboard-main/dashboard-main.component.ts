import { Component, OnInit } from '@angular/core';
import { DashbordMainService } from '../../dashbord-main.service';
import { CustomerDashBoard } from '../../model/customerDashboard';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  currentReading: SensorData;

  customerAssignData : CustomerDashBoard[];

  sensorValue : any[];

  deviceName : string;

  deviceData : CustomerDashBoard;

  //deviceType and MAC from output
  sensorType: string;
  deviceMac: string;

  constructor(private dashbordmainService : DashbordMainService) { }

  ngOnInit() {
    this.dashbordmainService.getCustomerAssignData(15).subscribe(
      (data) => {
        console.log(data);
        this.customerAssignData = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ShowReading(data: SensorData) {
    this.currentReading =  data;
  }

  getDeviceId(id : number) {
    this.dashbordmainService.getSensorData(id).subscribe(
      (data) => {
        console.log(data[0].sensors);
        this.sensorValue = data[0].sensors;
        this.deviceName = data[0].device_name;

        //console.log("sensor value form main:  "+this.sensorValue);
      },
      (error) => {
        console.error(error);
      }
    );
    // console.log('from dashboard main ' + id)
  }

  getDeviceData(value : CustomerDashBoard) {
    this.deviceData = value;
  }

  getType(value){
    this.sensorType = value;
    this.sensorType = this.sensorType.toLowerCase();
    console.log(this.sensorType)
  }
  getMac(value){
    console.log(value)
    this.deviceMac = value
  }
}

export interface SensorData {
  name: Date;
  value: number;
}

