import { Component, OnInit } from '@angular/core';
import { DashbordMainService } from '../dashbord-main.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor(private dashBoardService: DashbordMainService) { }

  graphData: any[][];
  formattedData: SensorData[] = [];
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'timestamp';
  showYAxisLabel = true;
  yAxisLabel = 'value';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnInit() {

    this.dashBoardService.getGraphData().subscribe(
      (data) => {
        this.graphData = data.results[0].series[0].values;

        this.graphData.forEach(element => {
          this.formattedData.push({
            name: element[0],
            value: element[element.length - 1]
          });
        });

        console.log(this.formattedData);
        this.single = [{
          name: "Sensor 1",
          series: this.formattedData
        }];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSelect(event) {
    console.log(event);
  }

}

interface SensorData {
  name: Date;
  value: number;
}
