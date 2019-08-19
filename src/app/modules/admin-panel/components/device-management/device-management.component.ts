import { Component, OnInit, Input } from '@angular/core';
import { Device, DeviceMonitor } from '../../model/customermodel';


@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.scss']
})
export class DeviceManagementComponent implements OnInit {
  @Input()deviceName:string;
  @Input()deviceId:number;
  @Input()deviceHealth: DeviceMonitor[] = []

  ELEMENT_DATA: DeviceMonitor[] = [
    {device_id:1, device_mac: "00123", device_activated:true, device_last_heartbeat:"19/08/2019"},
    {device_id:2, device_mac: "00123", device_activated:true, device_last_heartbeat:"19/08/2019"},
    {device_id:3, device_mac: "00123", device_activated:false, device_last_heartbeat:""},
    {device_id:4, device_mac: "00123", device_activated:false, device_last_heartbeat:""},
    {device_id:5, device_mac: "00123", device_activated:false, device_last_heartbeat:""},
    {device_id:6, device_mac: "00123", device_activated:true, device_last_heartbeat:"19/08/2019"},
    {device_id:7, device_mac: "00123", device_activated:true, device_last_heartbeat:"19/08/2019"}
  ];

  displayedColumns: string[] =['select', 'device_mac', 'device_activated', 'device_last_heartbeat'];
  selectedDevice: Device = {
    device_id: 0
  }
  constructor() { }

  ngOnInit() {
    console.log(this.ELEMENT_DATA)
  }

}
