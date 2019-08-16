import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface PeriodicElement {
  vendor_code: string;
  vendor_name: string;
  vendor_type: string;
  vendor_tag: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {vendor_code: "001", vendor_name : "Qubematics", vendor_type : "Private", vendor_tag : "ven001"},
  {vendor_code: "001", vendor_name : "Qubematics", vendor_type : "Private", vendor_tag : "ven001"},
  {vendor_code: "001", vendor_name : "Qubematics", vendor_type : "Private", vendor_tag : "ven001"},
  {vendor_code: "001", vendor_name : "Qubematics", vendor_type : "Private", vendor_tag : "ven001"},
  {vendor_code: "002", vendor_name : "Qubematics", vendor_type : "public", vendor_tag : "ven0002"}
];

@Component({
  selector: 'app-customer-assign',
  templateUrl: './customer-assign.component.html',
  styleUrls: ['./customer-assign.component.scss']
})
export class CustomerAssignComponent implements OnInit {

  @Output() ButtonClicked = new EventEmitter<number>();

  displayedColumns: string[] = ['select', 'vendor_code', 'vendor_name', 'vendor_type', 'vendor_tag'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  InitializeClick(value : number) {
    this.ButtonClicked.emit(value);
  }

}
