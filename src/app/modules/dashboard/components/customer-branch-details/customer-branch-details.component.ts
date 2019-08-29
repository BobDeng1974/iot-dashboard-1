import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CustomerDashBoard } from '../../model/customerDashboard';

@Component({
  selector: 'app-customer-branch-details',
  templateUrl: './customer-branch-details.component.html',
  styleUrls: ['./customer-branch-details.component.scss']
})
export class CustomerBranchDetailsComponent implements OnInit {

  @Input() customerAssignData : CustomerDashBoard[]; 

  @Output() ButtonClick = new EventEmitter<number>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  
  displayedColumns: string[] = ['select', 'customer_branch_name', 'device_name', 'device_health', 'device_last_heartbeat'];
  dataSource = new MatTableDataSource<CustomerDashBoard>();
  SelectedBranch: CustomerDashBoard = {
    device_id : 0
  };

  constructor() { }

  ngOnInit() {
    // this.dataSource.data = this.customerAssignData;
    // console.log("this is form branches:  "+this.customerAssignData);
  }

  ngOnChanges() {
    this.dataSource.data =  this.customerAssignData;
    console.log("this is form branches:  "+ this.customerAssignData[0]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  SelectBranch(value: any, id:number) {
    this.SelectedBranch = value;
    console.log("thisis form click on branch:  "+id);
    this.ButtonClick.emit(id);
  }
}
