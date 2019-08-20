import { Component, OnInit, Input } from '@angular/core';
import { Device, DeviceMonitor } from '../../model/customermodel';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.scss']
})
export class DeviceManagementComponent implements OnInit {
  @Input()deviceName:string;
  @Input()deviceId:number;
  @Input()deviceHealth: DeviceMonitor[] = []

  private columnDefs;
  private deviceMonitorGridApi;
  private deviceMonitorColumnApi;
  private rowData: DeviceMonitor[] = [];
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.columnDefs = [
      { headerName: 'Device Name', field:'device_name', sortable:true },
      { headerName: 'Device MAC Address', field: 'device_mac' },
      { headerName: 'Active', field:'device_activated', sortable:true},
      { headerName: 'Health', field:'device_health'},
      { headerName: 'Last Heart Beat', field:'device_last_heartbeat'},
      { headerName: 'Data Colletion Frequency', field:'data_collection_frequency', editable:true},
      { headerName: 'Data Sending Frequency', field:'data_sending_frequency', editable:true, resizable:true}
    ];
    
    this.rowData = [
      { device_name:'dvc_001', device_mac:'00:e0:4a:0a:ae:e3', device_activated:true, device_health:'ok', device_last_heartbeat:'20/08/2019' },
      { device_name:'dvc_002', device_mac:'00:e0:4a:0a:ae:e3', device_activated:true, device_health:'ok', device_last_heartbeat:'20/08/2019' },
      { device_name:'dvc_003', device_mac:'00:e0:4a:0a:ae:e3', device_activated:false, device_health:'', device_last_heartbeat:'' },
      { device_name:'dvc_004', device_mac:'00:e0:4a:0a:ae:e3', device_activated:false, device_health:'', device_last_heartbeat:'' },
      { device_name:'dvc_005', device_mac:'00:e0:4a:0a:ae:e3', device_activated:false, device_health:'', device_last_heartbeat:'' },
      { device_name:'dvc_006', device_mac:'00:e0:4a:0a:ae:e3', device_activated:true, device_health:'ok', device_last_heartbeat:'20/08/2019' },
    ]
  }

  onDeviceGridReady(params){
    this.deviceMonitorGridApi = params.api;
    this.deviceMonitorColumnApi = params.columnApi;
  }
}
