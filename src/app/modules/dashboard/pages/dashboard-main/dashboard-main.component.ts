import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  currentReading: SensorData;

  constructor() { }

  ngOnInit() {
  }

  ShowReading(data: SensorData) {
    this.currentReading =  data;
  }
}

export interface SensorData {
  name: Date;
  value: number;
}

