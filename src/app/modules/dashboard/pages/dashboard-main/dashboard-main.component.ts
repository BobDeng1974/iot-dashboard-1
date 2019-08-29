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
}

export interface SensorData {
  name: Date;
  value: number;
}

