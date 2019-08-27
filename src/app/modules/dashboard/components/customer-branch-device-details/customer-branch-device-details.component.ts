import { Component, OnInit, Input } from '@angular/core';
import { SensorData } from '../../pages/dashboard-main/dashboard-main.component';

@Component({
  selector: 'app-customer-branch-device-details',
  templateUrl: './customer-branch-device-details.component.html',
  styleUrls: ['./customer-branch-device-details.component.scss']
})
export class CustomerBranchDeviceDetailsComponent implements OnInit {

  @Input() CurrentReading: SensorData;
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
  }

}
