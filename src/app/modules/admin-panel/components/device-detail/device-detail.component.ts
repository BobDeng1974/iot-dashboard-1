import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device, Sensor } from '../../model/customermodel';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<number>();

  @Input() device: Device;
  private sensors: Sensor[] = [];
  private sensorColumnDefs;
  private sensorGridApi;
  private sensorGridColumnApi;
  constructor(private adminService: AdminPanelMainService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.sensorColumnDefs = [
      {headerName:'Sensor Name', field:'sensor_name'},
      {headerName:'Sensor Type', field:'sensor_type', resizable:true},
      {headerName:'Sensor Threshold Max', field:'sensor_threshold_max', editable:true, sortable:true},
      {headerName:'Sensor Threshold Min', field:'sensor_threshold_min', editable:true, sortable:true},
    ]
  }
  ngOnChanges(){
    if (this.device && this.device.device_id != 0) {
      this.sensors = this.device.sensors
    }
  }
  onSensorGridReady(params){
    this.sensorGridApi = params.api;
    this.sensorGridColumnApi = params.columnApi
  }

  onCellValueChange(params){
    this.spinner.show()
    this.adminService.updateDevice(this.device).subscribe(
      (data) => {
        console.log(data)
        setTimeout(() => {
          this.spinner.hide()
        }, 1000)
      },
      (error) => {
        console.log(error)
        setTimeout(() => {
          this.spinner.hide()
        }, 1000);
      }
    );
  }

  InitializeClick(value){
    this.buttonClicked.emit(value);
  }
}
