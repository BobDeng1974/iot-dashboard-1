import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../model/customermodel';

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
  selector: 'app-device-assignment',
  templateUrl: './device-assignment.component.html',
  styleUrls: ['./device-assignment.component.scss']
})
export class DeviceAssignmentComponent implements OnInit {
  @Input()deviceName;
  @Input() deviceId;
  displayedColumns: string[] =['select', 'device_name', 'device_mac', 'device_monitor', 'device_assignment'];
  constructor() { }

  ngOnInit() {
  }

}
