import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-assign-form',
  templateUrl: './customer-assign-form.component.html',
  styleUrls: ['./customer-assign-form.component.scss']
})
export class CustomerAssignFormComponent implements OnInit {

  private customerColumnDefs;

  private customerGridApi;
  private customerGridColumnApi;

  constructor() { }

  ngOnInit() {
    this.customerColumnDefs = [
      { headerName: 'Customer Name', sortable: true, filter: true, width:200, editable: false, resizable:true },
      { headerName: 'Vendor Name', sortable: true, filter: true, width:200, editable: false, resizable:true },
    ];
  }

  onAssignCustomerGridReady(params) {
    this.customerGridApi = params.api;
    this.customerGridColumnApi = params.columnApi;
    this.customerGridApi.sizeColumnsToFit();
  }

}
