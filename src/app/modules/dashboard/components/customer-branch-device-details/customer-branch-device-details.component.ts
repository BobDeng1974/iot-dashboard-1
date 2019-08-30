import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SensorData } from '../../pages/dashboard-main/dashboard-main.component';
import { CustomerDashBoard } from '../../model/customerDashboard';

@Component({
  selector: 'app-customer-branch-device-details',
  templateUrl: './customer-branch-device-details.component.html',
  styleUrls: ['./customer-branch-device-details.component.scss']
})
export class CustomerBranchDeviceDetailsComponent implements OnInit {

  @Input() CurrentReading: SensorData;

  @Input() sensordata : any[];
  @Input() deviceName : string;
  @Input() deviceData : CustomerDashBoard;
  @Output() sensorType = new EventEmitter<string>();
  @Output() deviceMac = new EventEmitter<string>();
  temp: string = "6";
  time: Date = null;
  color= 'red';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.CurrentReading) {
      this.temp = this.CurrentReading.value.toString();
      this.time = this.CurrentReading.name;
    }

    console.log("this is form customer branch device component:  "+this.sensordata+"  Device Name:  "+this.deviceName+"  DeviceData  "+this.deviceData);
  }

  getSensorId(sensorType : string) {
    this.sensorType.emit(sensorType);
    this.deviceMac.emit(this.deviceData.device_mac);
  }
  change(value){
    console.log(value)
  }
}
