import { Component, OnInit, Input } from '@angular/core';
import { sensor } from 'src/app/modules/admin-panel/model/gateway';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DashbordMainService } from '../../dashbord-main.service';
import { sensorData } from '../../model/customerDashboard';

@Component({
  selector: 'app-graph-mobile',
  templateUrl: './graph-mobile.component.html',
  styleUrls: ['./graph-mobile.component.scss']
})
export class GraphMobileComponent implements OnInit {
  @Input() sensor : sensor;
  @Input() node_uid;
  payload : any[] = [];
  formatedData : sensorData[] = [];
  graphData : any[][];
  constructor(private dashboardService : DashbordMainService) { }
  single: any[];
  multi: any[];
  view: any[] = [900, 200];
  minDate = new Date('2019-11-03'); 
  maxDate = new Date(); 
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  legendPosition = "below"
  xAxisLabel = 'timestamp';
  showYAxisLabel = true;
  yAxisLabel = 'value';
  maxXAxisTickLength = 16;
  trimXAxisTicks = true;
  autoScale = true;
  roundDomains = true;
  xScaleMax = this.maxDate;
  xScaleMin = this.minDate;
  colorScheme = {
    domain: ['#F6A74B', '#A10A28', '#C7B42C', '#AAAAAA']
  };
    ngOnInit() {
    let data1 = this.payloadFormater(this.node_uid); 
    let data2 = this.payloadFormater(String(this.sensor.sensor_type));
    this.payload[0] = data1;
    this.payload[1] = data2
    console.log(this.payload);
    interval(20000).pipe(
      startWith(0),
      untilDestroyed(this),
      switchMap( () => this.dashboardService.getNodeDatas(this.payload))
    ).subscribe(
      (data) => {
        this.formatedData = [];
        this.graphData = data.results[0].series[0].values;
        this.graphData.forEach( element => {
          this.formatedData.push({
            name: new Date(element[0]),
            value : element[element.length - 3]
          })
        });
        this.single = [{
          name: this.sensor.sensor_model,
          series: this.formatedData
        }];
        console.log(this.single);
        console.log(this.formatedData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnDestroy(){

  }
  payloadFormater(value){
    return "'"+value+"'"
  }
}
