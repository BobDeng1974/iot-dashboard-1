import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface PeriodicElement {
  customer_code: string;
  customer_name: string;
  customer_type: string;
  customer_tag: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { customer_code: "001", customer_name : "Qubematics", customer_type : "Private", customer_tag : "ven001" },
  { customer_code: "001", customer_name : "Qubematics", customer_type : "Private", customer_tag : "ven001" },
  { customer_code: "001", customer_name : "Qubematics", customer_type : "Private", customer_tag : "ven001" },
  { customer_code: "001", customer_name : "Qubematics", customer_type : "Private", customer_tag : "ven001" },
  { customer_code: "001", customer_name : "Qubematics", customer_type : "Private", customer_tag : "ven001" },
  { customer_code: "001", customer_name : "Qubematics", customer_type : "Private", customer_tag : "ven001" }
];
@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  @Output() ButtonClick = new EventEmitter<number>();

  displayedColumns: string[] = ['select', 'customer_code', 'customer_name', 'customer_type', 'customer_tag'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

  InitializeClick(value : number) {
    this.ButtonClick.emit(value);
  }

}
