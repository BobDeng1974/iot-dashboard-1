import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styleUrls: ['./sensor-card.component.scss']
})
export class SensorCardComponent implements OnInit {

  @Input() sensor : any;
  @Input() deviceMac: string;
  sensorType: string;
  sensorTypes: string[] = [
    "Temperature",
    "pH",
    "Humidity",
    "Alcohol"
  ];
  graphPopup: MatDialogRef<GraphComponent>;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  getSensorId(value: string) {
    console.log(value);
    this.sensorType = value;
    this.graphPopup = this.dialog.open(GraphComponent,{data: value.toLowerCase(),
    });
  }

}
