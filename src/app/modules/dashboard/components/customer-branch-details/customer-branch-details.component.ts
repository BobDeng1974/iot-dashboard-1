import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


export interface PeriodicElement {
  branch_id: string;
  device_id?: string;
  status?: string;
  recorded_at?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {branch_id: 'KBL_NT_001', device_id: 'QM_DNM_001', status: '♥', recorded_at: 'Today'},
  {branch_id: 'KBL_NT_002', device_id: 'QM_DNM_003', status: '♥', recorded_at: 'Today'},
  {branch_id: 'KBL_NT_003', device_id: 'QM_DNM_004', status: '♥', recorded_at: 'Today'},
  {branch_id: 'KBL_GA_001', device_id: 'QM_DNM_007', status: '', recorded_at: 'Yesterday'},
  {branch_id: 'KBL_GA_002', device_id: 'QM_DNM_009', status: '', recorded_at: 'Yesterday'},
];

@Component({
  selector: 'app-customer-branch-details',
  templateUrl: './customer-branch-details.component.html',
  styleUrls: ['./customer-branch-details.component.scss']
})
export class CustomerBranchDetailsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  
  displayedColumns: string[] = ['select', 'branch_id', 'device_id', 'status', 'recorded_at'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  SelectedBranch: PeriodicElement;

  constructor() { }

  ngOnInit() {
    this.dataSource.data = ELEMENT_DATA;
    this.SelectedBranch = {
      branch_id: "0"
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  SelectBranch(value: any) {
    this.SelectedBranch = value;
  }
}
