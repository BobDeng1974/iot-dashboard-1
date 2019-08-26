import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  branch_id: string;
  device_id: string;
  status: string;
  recorded_at: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {branch_id: 'KBL_NT_001', device_id: 'QM_DNM_001', status: '', recorded_at: ''},
  {branch_id: 'KBL_NT_002', device_id: 'QM_DNM_003', status: '', recorded_at: ''},
  {branch_id: 'KBL_NT_001', device_id: 'QM_DNM_004', status: '', recorded_at: ''},
  {branch_id: 'KBL_GA_001', device_id: 'QM_DNM_007', status: '', recorded_at: ''},
  {branch_id: 'KBL_GA_002', device_id: 'QM_DNM_009', status: '', recorded_at: ''},
];

@Component({
  selector: 'app-customer-branch-details',
  templateUrl: './customer-branch-details.component.html',
  styleUrls: ['./customer-branch-details.component.scss']
})
export class CustomerBranchDetailsComponent implements OnInit {

  displayedColumns: string[] = ['branch_id', 'device_id', 'status', 'recorded_at', 'follow' ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
