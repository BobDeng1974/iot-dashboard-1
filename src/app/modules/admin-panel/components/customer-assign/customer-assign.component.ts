import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-assign',
  templateUrl: './customer-assign.component.html',
  styleUrls: ['./customer-assign.component.scss']
})
export class CustomerAssignComponent implements OnInit {

  private customerColumnDefs;

  private customerGridApi;
  private customerGridColumnApi;

  constructor() { }

  ngOnInit() {
    this.customerColumnDefs =  [
      { headerName: 'Customer Name',  sortable: true, filter: true, width:200, editable: false, resizable:true },
      { headerName: 'Customer Address', sortable: true, filter: true, width:200, editable: false, resizable:true },
      { headerName: 'Vendor Name', sortable: true, filter: true, width:200, editable: false, resizable:true },
    ];
  }

  onAssignCustomerGridReady(params) {
    this.customerGridApi = params.api;
    this.customerGridColumnApi = params.columnApi;
    this.customerGridApi.sizeColumnsToFit();
  }

}
