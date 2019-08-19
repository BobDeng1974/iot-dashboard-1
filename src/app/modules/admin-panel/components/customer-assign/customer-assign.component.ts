import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface PeriodicElement {
  vendor_name: string;
  customer_name: string;
  customer_address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { vendor_name : "Qubematics", customer_name : "Private", customer_address : "kolkata,79A/1,Kolkata,Wb,700005,India"},
  { vendor_name : "Qubematics", customer_name : "Private", customer_address : "kolkata,79A/1,Kolkata,Wb,700005,India"},
  { vendor_name : "Qubematics", customer_name : "Private", customer_address : "kolkata,79A/1,Kolkata,Wb,700005,India"},
  { vendor_name : "Qubematics", customer_name : "Private", customer_address : "kolkata,79A/1,Kolkata,Wb,700005,India"},
  { vendor_name : "Qubematics", customer_name : "public", customer_address : "kolkata,79A/1,Kolkata,Wb,700005,India"}
];

@Component({
  selector: 'app-customer-assign',
  templateUrl: './customer-assign.component.html',
  styleUrls: ['./customer-assign.component.scss']
})
export class CustomerAssignComponent implements OnInit {

  @Output() ButtonClicked = new EventEmitter<number>();

  displayedColumns: string[] = ['select', 'vendor_name', 'customer_name', 'customer_address'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  InitializeClick(value : number) {
    this.ButtonClicked.emit(value);
  }

}
