import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pin-view-sensor-card',
  templateUrl: './pin-view-sensor-card.component.html',
  styleUrls: ['./pin-view-sensor-card.component.scss']
})
export class PinViewSensorCardComponent implements OnInit {

  @Input() sensor: string;
  constructor() { }

  ngOnInit() {
    //console.log(this.sensor);
  }

}
