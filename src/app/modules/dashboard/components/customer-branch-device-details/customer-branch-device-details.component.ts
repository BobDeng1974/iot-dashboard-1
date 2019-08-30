import { Component, OnInit, Input } from '@angular/core';
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
  temp: string = "6";
  time: Date = null;
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

  getSensorId(sensorType : string, mac : string) {
    console.log("sensor id after click button:  "+sensorType+"  mac address:  "+mac);
  }

}
