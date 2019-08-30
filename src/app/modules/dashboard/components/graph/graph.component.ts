import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { DashbordMainService } from '../../dashbord-main.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { SensorData } from './../../pages/dashboard-main/dashboard-main.component';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnChanges {

  @Output() NewReading = new EventEmitter<SensorData>();
  @Input() sensorType: string;
  constructor(private dashBoardService: DashbordMainService) { }

  graphData: any[][];
  formattedData: SensorData[] = [];
  single: any[];
  multi: any[];
  view: any[] = [900, 200];
  minDate = new Date(2019, 7, 27, 20);
  maxDate = new Date(2019, 7, 27, 21);
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
  yScaleMin = 14;
  yScaleMax = 28;
  referenceLines = [
    {
      name: "minimum",
      value: 15
    },
    {
      name: "maximum",
      value: 25
    }
  ]
  showRefLines = true;
  showRefLabels = true;

  colorScheme = {
    domain: ['#EC6D9F', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnChanges() {

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

  onSelect(event) {
    console.log(event);

  }

}

