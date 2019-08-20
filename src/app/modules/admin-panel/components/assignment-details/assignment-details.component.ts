import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Device } from '../../model/customermodel';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.scss']
})
export class AssignmentDetailsComponent implements OnInit {

  @Output() buttonClick = new EventEmitter<number>();
  @Input() device:Device;
  private columnDefs;
  private rowData: any[] = []
  constructor() { }

  ngOnInit() {
    this.columnDefs = [
      { headerName:'Customer Name', field:'customer_name'},
      { headerName:'Customer Name', field:'customer_branch'},
      { headerName: 'Start Date', field:'start_date', sortable:true},
      { headerName: 'End Date', field:'end_date', sortable:true},
    ];
    this.rowData = [
      {customer_name:'Arsalan', customer_branch:'Chinar park', start_date:'20/08/2019', end_date:'20/08/2020'},
    ];
  }

  InitializeClick(value){
    this.buttonClick.emit(value)
  }
}
