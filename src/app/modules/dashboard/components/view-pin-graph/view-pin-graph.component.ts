import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationStateService } from 'src/app/service/application-state.service';

@Component({
  selector: 'app-view-pin-graph',
  templateUrl: './view-pin-graph.component.html',
  styleUrls: ['./view-pin-graph.component.scss']
})
export class ViewPinGraphComponent implements OnInit {

  sensorType: any;
  sensor_type: string;
  constructor(private router: Router, private appSate: ApplicationStateService) { }

  ngOnInit() {
    console.log(this.appSate.pinnedSensors);
    this.sensorType = this.appSate.pinnedSensors;
    // this.sensorType.forEach(element => {
    //   console.log(element.toLowerCase());
    //   this.sensor_type = element.toLowerCase();
    // });
    //console.log(this.sensor_type);
  }
}
