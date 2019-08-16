import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  device_name : string;
  device_mac_address : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {device_name : "device1", device_mac_address : "00123"},
  {device_name : "device1", device_mac_address : "00123"},
  {device_name : "device1", device_mac_address : "00123"},
  {device_name : "device1", device_mac_address : "00123"},
  {device_name : "device1", device_mac_address : "00123"},
  {device_name : "device1", device_mac_address : "00123"},
  {device_name : "device1", device_mac_address : "00123"}
];

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.scss']
})
export class DeviceTableComponent implements OnInit {

  displayedColumns: string[] =['select', 'device_name', 'device_mac_address'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
