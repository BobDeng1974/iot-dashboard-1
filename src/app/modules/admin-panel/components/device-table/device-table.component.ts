import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer, Device } from '../../model/customermodel';
import { EventManager } from '@angular/platform-browser';


const ELEMENT_DATA: Device[] = [
  {device_id:1, device_name : "device1", device_mac: "00123"},
  {device_id:2, device_name : "device1", device_mac: "00123"},
  {device_id:3, device_name : "device1", device_mac: "00123"},
  {device_id:4, device_name : "device1", device_mac: "00123"},
  {device_id:5, device_name : "device1", device_mac: "00123"},
  {device_id:6, device_name : "device1", device_mac: "00123"},
  {device_id:7, device_name : "device1", device_mac: "00123"}
];

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.scss']
})
export class DeviceTableComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<number>();
  @Output() deviceDetails = new EventEmitter<Device>();
  @Output() deviceName = new EventEmitter<string>();
  @Output() deviceName2 = new EventEmitter<string>();
  @Output() deviceId = new EventEmitter<number>();
  @Output() deviceId2 = new EventEmitter<number>();
  @Output() deviceAssign = new EventEmitter<number>();

  displayedColumns: string[] =['select', 'device_name', 'device_mac', 'device_monitor', 'device_assignment'];
  dataSource = ELEMENT_DATA;
  selectedDevice: Device = {
    device_id: 1
  }
  constructor() { }

  ngOnInit() {
  }

  InitializeClick(value:number){
    this.buttonClicked.emit(value)
  }

  gotoDeviceMonitor(rowId: number, name: string){
    this.deviceName2.emit(name)
    this.deviceId2.emit(rowId);
    console.log(rowId)
  }

  gotoDeviceAssignment(rowId: number, name: string){
    this.deviceName.emit(name)
    this.deviceAssign.emit(rowId)
  }

  viewDetails(value: Device){
    this.deviceDetails.emit(value)
  }
}
