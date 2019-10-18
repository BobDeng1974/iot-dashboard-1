import { Component, OnInit } from '@angular/core';
import { NullValueComponent } from 'src/app/modules/shared/components/null-value/null-value.component';
import { sensor } from '../../model/gateway';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.scss']
})
export class NodeDetailsComponent implements OnInit {

  sensorColumns;
  nullvalueFrameworkComponents: any;
  rowData : sensor[] = [];
  nodeDetailGridApi;
  nodeDetailColumnApi; 
  constructor() { }

  ngOnInit() {
    this.nullvalueFrameworkComponents = {
      nullvalueEditor : NullValueComponent
    };
    this.sensorColumns = [
      {headerName : 'Model', field:'sensor_model'},
      {headerName : 'Maximum', field:'sensor_threshold_max', editable:true, sortable:true, cellEditor:'nullvalueEditor'},
      {headerName : 'Minimum', field:'sensor_threshold_min', editable:true, sortable:true, cellEditor:'nullvalueEditor'},
    ]
  }
  onNodeDetailGridReady(params) {
    this.nodeDetailGridApi = params.api;
    this.nodeDetailColumnApi = params.columnApi
    this.nodeDetailGridApi.sizeColumnsToFit();
  }

}
