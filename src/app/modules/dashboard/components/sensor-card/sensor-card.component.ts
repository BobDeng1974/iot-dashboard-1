import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MatRipple } from '@angular/material';
import { GraphComponent } from '../graph/graph.component';
import { DashbordMainService } from '../../dashbord-main.service';
import { SensorData } from '../../pages/dashboard-main/dashboard-main.component';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ApplicationStateService } from 'src/app/service/application-state.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

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
  @ViewChild(MatRipple, {static: false})ripple:MatRipple;
  constructor(private dialog: MatDialog, private dashBoardService: DashbordMainService, private appState: ApplicationStateService) { }

  ngOnInit() {
    console.log(this.sensor);
  }
  ngOnChanges(){
    
    interval(20000).pipe(
      startWith(0),
      untilDestroyed(this),
      switchMap(()=> this.dashBoardService.getGraphData(this.sensor.sensor_type.toLowerCase()))
    ).subscribe(
      (data) => {
        this.formattedData = [];
        this.graphData = data.results[0].series[0].values;
        this.graphData.forEach(element => {
          this.formattedData.push({
            name: new Date(element[0]),
            value: element[element.length - 2]
          });
        });
        
        this.newReadding = this.formattedData[this.formattedData.length - 3];
      },
      (error) => {
        console.log(error)
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
          width: "90%",
          disableClose: true
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
  ngOnDestroy() {

  }
}
