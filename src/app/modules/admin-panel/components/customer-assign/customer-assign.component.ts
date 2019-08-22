import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { Customer } from '../../model/customermodel';

@Component({
  selector: 'app-customer-assign',
  templateUrl: './customer-assign.component.html',
  styleUrls: ['./customer-assign.component.scss']
})
export class CustomerAssignComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<number>();
  @Output() customer = new EventEmitter<Customer>();
  customerData: any [] = []
  displayedColumns: string[] =['select', 'customer_name'];
  selectedCustomer = {
    customer_id: 0
  }
  constructor(private adminService: AdminPanelMainService) { }

  ngOnInit() {
    this.adminService.getCustomerNameandId().subscribe(
      (data) => {
        console.log(data);
        this.customerData = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  InitializeClick(value){
    this.buttonClicked.emit(value)
  }

  viewDetails(value){
    this.customer.emit(value);
    console.log(value)
  }
}
