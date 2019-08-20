import { Component, OnInit, Input } from '@angular/core';
import { Device, DeviceMonitor } from '../../model/customermodel';
import { NgxSpinnerService } from 'ngx-spinner';
import { DeviceActiveRendererComponent } from 'src/app/modules/shared/components/device-active-renderer/device-active-renderer.component';
import { DeviceHealthRendererComponent } from 'src/app/modules/shared/components/device-health-renderer/device-health-renderer.component';


@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.scss']
})
export class DeviceManagementComponent implements OnInit {
  @Input()deviceName:string;
  @Input()deviceId:number;
  @Input()deviceHealth: DeviceMonitor[] = []

  private deviceMonitorGridApi;
  private deviceMonitorColumnApi;
  constructor(private spinner: NgxSpinnerService) { }

  columnDefs = [
    { headerName: 'Device Name', field:'device_name', sortable:true },
    { headerName: 'Device MAC Address', field: 'device_mac' },
    { headerName: 'Active', field:'device_activated', sortable:true, cellRenderer:'activeRenderer'},
    { headerName: 'Health', field:'device_health', cellRenderer:'healthRenderer'},
    { headerName: 'Last Heart Beat', field:'device_last_heartbeat'},
    { headerName: 'Data Colletion Frequency', field:'data_collection_frequency', editable:true},
    { headerName: 'Data Sending Frequency', field:'data_sending_frequency', editable:true, resizable:true}
  ];
  
  rowData = [
    { device_name:'dvc_001', device_mac:'00:e0:4a:0a:ae:e3', device_activated:true, device_health:'ok', device_last_heartbeat:'20/08/2019' },
    { device_name:'dvc_002', device_mac:'00:e0:4a:0a:ae:e3', device_activated:true, device_health:'ok', device_last_heartbeat:'20/08/2019' },
    { device_name:'dvc_003', device_mac:'00:e0:4a:0a:ae:e3', device_activated:false, device_health:'', device_last_heartbeat:'' },
    { device_name:'dvc_004', device_mac:'00:e0:4a:0a:ae:e3', device_activated:false, device_health:'', device_last_heartbeat:'' },
    { device_name:'dvc_005', device_mac:'00:e0:4a:0a:ae:e3', device_activated:false, device_health:'', device_last_heartbeat:'' },
    { device_name:'dvc_006', device_mac:'00:e0:4a:0a:ae:e3', device_activated:true, device_health:'ok', device_last_heartbeat:'20/08/2019' },
  ]

  frameworkComponents = {
    activeRenderer: DeviceActiveRendererComponent,
    healthRenderer: DeviceHealthRendererComponent
  }

  ngOnInit() {
  }

  onDeviceGridReady(params){
    this.deviceMonitorGridApi = params.api;
    this.deviceMonitorColumnApi = params.columnApi;
  }
}
