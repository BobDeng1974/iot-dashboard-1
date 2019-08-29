import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  code: string;
  name?: string;
  type?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {code: 'KBL_NT_001', name: 'QM_DNM_001', type: 'Private', },
  {code: 'KBL_NT_002', name: 'QM_DNM_003', type: 'restaurant', },
  {code: 'KBL_NT_003', name: 'QM_DNM_004', type: 'Government', },
  {code: 'KBL_GA_001', name: 'QM_DNM_007', type: 'Private', },
  {code: 'KBL_GA_002', name: 'QM_DNM_009', type: 'Private', },
];

@Component({
  selector: 'app-show-vendor-customer',
  templateUrl: './show-vendor-customer.component.html',
  styleUrls: ['./show-vendor-customer.component.scss']
})
export class ShowVendorCustomerComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['select', 'code', 'name', 'type', 'view'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  SelectedCustomer: PeriodicElement;
  constructor() { }

  ngOnInit() {
    this.dataSource.data = ELEMENT_DATA;

    this.SelectedCustomer = {
      code: "0"
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
    this.SelectedCustomer = value;
  }

}
