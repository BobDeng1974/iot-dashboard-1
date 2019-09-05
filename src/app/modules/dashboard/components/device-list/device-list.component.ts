import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CustomerDashBoard } from '../../model/customerDashboard';
import { DashbordMainService } from '../../dashbord-main.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Output() Buttonclick = new EventEmitter<number>();
  @Output() EmitMac = new EventEmitter<string>();

  @Input() customerAssignData: CustomerDashBoard[];

  displayedColumns: string[] = ['select', 'device_name', 'device_last_heartbeat', 'device_health',];
  dataSource = new MatTableDataSource<CustomerDashBoard>();
  sensorValue: any[];
  SelectedDevice: CustomerDashBoard = {
    device_id : 0
  };

  constructor(private dashbordmainService : DashbordMainService,  private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.dataSource.data = this.customerAssignData;
    console.log(this.customerAssignData);
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  SelectDevice(value: any, id: number) {
    this.SelectedDevice = value;
    this.EmitMac.emit(value.device_mac);
    this.Buttonclick.emit(id);
  }

}
