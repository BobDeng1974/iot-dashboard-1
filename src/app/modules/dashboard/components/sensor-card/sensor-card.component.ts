import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { GraphComponent } from '../graph/graph.component';
import { DashbordMainService } from '../../dashbord-main.service';
import { SensorData } from '../../pages/dashboard-main/dashboard-main.component';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styleUrls: ['./sensor-card.component.scss']
})
export class SensorCardComponent implements OnInit {

  @Input() sensor: any;
  @Input() deviceMac: string;
  @Input() cardNo: number;
  sensorType: string;
  sensorTypes: string[] = [
    "Temperature",
    "pH",
    "Humidity",
    "Alcohol"
  ];
  graphPopup: MatDialogRef<GraphComponent>;
  formattedData: SensorData[] = [];
  graphData: any[][];
  checked: boolean = false;
  newReadding: SensorData;
  @Output() PinValue = new EventEmitter<string>();
  constructor(private dialog: MatDialog, private dashBoardService: DashbordMainService) { }

  ngOnInit() {
    console.log(this.sensor);
    //console.log("this is form on init of graph component");
    this.dashBoardService.getGraphData(this.sensor.sensor_type.toLowerCase()).subscribe(
      (data) => {
        //console.log("This data form on init of graph component");
        //console.log(data);
        this.formattedData = [];
        this.graphData = data.results[0].series[0].values;
        this.graphData.forEach(element => {
          this.formattedData.push({
            name: new Date(element[0]),
            value: element[element.length - 2]
          });
        });

        //console.log(this.formattedData[this.formattedData.length - 1]);
        this.newReadding = this.formattedData[this.formattedData.length - 3];
        console.log("this is form .......");
        console.log(this.newReadding.value);
        console.log(this.cardNo);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getSensorId(toggle: boolean, value: string) {
    //console.log(value);
    if (toggle == true) {
      this.sensorType = value;
      this.checked=true;
      this.graphPopup = this.dialog.open(GraphComponent,
        {
          //data: value.toLowerCase(),
          data:this.sensor,
          width: "90%"
        }
      );
      this.graphPopup.afterClosed().subscribe(result => {
        if (result) {
          this.checked = false;
        }     
      });
    }
  }

  pinSensorType(value: string) {
    console.log("sensor value form pin");
    console.log(value);
    this.PinValue.emit(value);
  }

}
