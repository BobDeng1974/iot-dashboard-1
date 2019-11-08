import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MatRipple } from '@angular/material';
import { GraphComponent } from '../graph/graph.component';
import { DashbordMainService } from '../../dashbord-main.service';
import { SensorData } from '../../pages/dashboard-main/dashboard-main.component';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ApplicationStateService } from 'src/app/service/application-state.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { sensor } from 'src/app/modules/admin-panel/model/gateway';
import { sensorData } from '../../model/customerDashboard';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styleUrls: ['./sensor-card.component.scss']
})
export class SensorCardComponent implements OnInit {

  @Input() sensor: sensor;
  @Input() nodeUid: string;
  @Input() cardNo: number;
  sensorType: number;
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
  payload : any[] = [];
  formatedData : sensorData[] = [];
  currentReading : sensorData;
  @Output() PinValue = new EventEmitter<string>();
  @ViewChild(MatRipple, {static: false})ripple:MatRipple;
  constructor(private dialog: MatDialog, private dashBoardService: DashbordMainService, private appState: ApplicationStateService) { }

  ngOnInit() {
    console.log(this.sensor);
  }
  ngOnChanges(){
    this.sensorType=this.sensor.sensor_type;
    console.log(this.sensorType);
    let data1 = this.payloadFormater(this.nodeUid); 
    let data2 = this.payloadFormater(String(this.sensor.sensor_type));
    this.payload[0] = data1;
    this.payload[1] = data2
    console.log(this.payload);
    interval(20000).pipe(
      startWith(0),
      untilDestroyed(this),
      switchMap( () => this.dashBoardService.getNodeData(this.payload))
    ).subscribe(
      (data) => {
        console.log(data);
        this.formatedData = [];
        this.graphData = data.results[0].series[0].values;
        this.graphData.forEach( element => {
          this.formatedData.push({
            name: new Date(element[0]),
            value : element[element.length - 3]
          })
        })
        console.log(this.formatedData.length);
        this.currentReading = this.formatedData[this.formatedData.length - 1]
        console.log("current reading",this.currentReading);
      },
      (error) => {
        console.log(error);
      }
    )

  }
  getSensorId(toggle: boolean, value) {
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
  payloadFormater(value){
    return "'"+value+"'"
  }
}
