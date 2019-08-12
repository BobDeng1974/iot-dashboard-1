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
  {vendor_code: "001", vendor_name : "Qubematics", vendor_type : "Private", vendor_tag : "ven001"}
];

@Component({
  selector: 'app-vendor-table',
  templateUrl: './vendor-table.component.html',
  styleUrls: ['./vendor-table.component.scss']
})
export class VendorTableComponent implements OnInit {

  // output the event value
  @Output() ButtonClicked = new EventEmitter<number>();

  displayedColumns: string[] = ['select', 'vendor_code', 'vendor_name', 'vendor_type', 'vendor_tag'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  InitializeClick(value : number) {
    //console.log(value);
    this.ButtonClicked.emit(value);
  }
}
