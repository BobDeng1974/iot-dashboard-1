import { Component, OnInit, Output, EventEmitter, Input, OnChanges, Inject } from '@angular/core';
import { DashbordMainService } from '../../dashbord-main.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { SensorData } from './../../pages/dashboard-main/dashboard-main.component';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Output() NewReading = new EventEmitter<SensorData>();
  sensorType: string;
  constructor(private dashBoardService: DashbordMainService, @Inject(MAT_DIALOG_DATA) public data: string) { 
    this.sensorType = data;
    console.log(this.sensorType)
  }

  graphData: any[][];
  formattedData: SensorData[] = [];
  single: any[];
  multi: any[];
  view: any[] = [900, 200];
  minDate = new Date(); //2019, 7, 27, 20
  maxDate = new Date(); //2019, 7, 27, 21
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'timestamp';
  showYAxisLabel = true;
  yAxisLabel = 'value';
  maxXAxisTickLength = 16;
  trimXAxisTicks = true;
  autoScale = true;
  roundDomains = true;
  xScaleMax = this.maxDate;
  xScaleMin = this.minDate;
  //temperature y scale
  yScaleMin = null;
  // yScaleMax = 28;
  // //humidity y scale
  yScaleMinHumidity = null;
  // yScaleMaxHumidity = 100;

  //alcohol y scale
  yScaleMinAlcohol = null;
  // yScaleMaxAlcohol = 5;

  referenceLines = [
    {
      name: "minimum",
      value: -5
    },
    {
      name: "maximum",
      value: 10
    }
  ]
  //reference lines
  referenceLinesHumidity = [
    {
      name: "minimum",
      value: 40
    },
    {
      name: "maximum",
      value: 80
    }
  ]
  //reference line
  referenceLinesAlcohol = [
    {
      name: "minimum",
      value: 1
    },
    {
      name: "maximun",
      value: 2
    }
  ]
  showRefLines = true;
  showRefLabels = true;

  colorScheme = {
    domain: ['#EC6D9F', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  //colorScheme for humidity
  colorScheme2 = {
    domain: ['#5203fc']
  } 
  //colorScheme for humidity
  colorScheme3 = {
    domain: ['#2fe01f']
  }
  ngOnInit() {

    if (this.sensorType) {
      interval(20000)
      .pipe(
        startWith(0),
        switchMap(() => this.dashBoardService.getGraphData(this.sensorType))
      ).subscribe(
        (data) => {
          console.log(data);
          this.formattedData = [];
          this.graphData = data.results[0].series[0].values;
          this.graphData.forEach(element => {
            this.formattedData.push({
              name: new Date(element[0]),
              value: element[element.length - 2]
            });
            console.log(this.formattedData)
          });

          this.single = [{
            name: "QM_DNM_004_01",
            series: this.formattedData
          }];

          this.NewReading.emit(this.formattedData[this.formattedData.length - 1]);
        },
        (error) => {
          console.log(error);
        }
      ) 
    }
  }

  onSelect(event) {
    console.log(event);

  }

  setYMinTemperature(){
    this.yScaleMin = -5;
  }
  setYMinAlcohol(){
    this.yScaleMinAlcohol = 1;
  }
  setYMinHumid(){
    this.yScaleMinHumidity = 30;
  }
}

