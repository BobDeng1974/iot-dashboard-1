import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { CustomerAssignment } from '../../model/customermodel';

@Component({
  selector: 'app-customer-assign-form',
  templateUrl: './customer-assign-form.component.html',
  styleUrls: ['./customer-assign-form.component.scss']
})
export class CustomerAssignFormComponent implements OnInit {

  private customerColumnDefs;

  private customerGridApi;
  private customerGridColumnApi;
  rowData: CustomerAssignment[] = []
  @Input() customer: any;
  constructor(private spinner: NgxSpinnerService, private adminService: AdminPanelMainService) { }

  ngOnInit() {
    this.customerColumnDefs = [
      { headerName: 'Vendor Name', field:'vendor_name', sortable: true, filter: true, width:200, editable: false, resizable:true },
      { headerName: 'Assigned From', field:'assign_effective_from', sortable: true, filter: true, width:200, editable: false, resizable:true },
      { headerName: 'Assigned To', field:'assign_effective_to', sortable: true, filter: true, width:200, editable: false, resizable:true },
    ];
  }

  ngOnChanges(){
    console.log(this.customer)
    if (this.customer && this.customer.customer_id > 0) {
      this.spinner.show()
      this.adminService.getAssignmentHistory(this.customer.customer_id).subscribe(
        (data) => {
          console.log(data);
          console.log(data.length);
          if (data.length > 0) {
            this.rowData = data
          }else{
            console.log('no rows to show')
          }
          this.spinner.hide();
        },
        (error) => {
        console.log(error)
        this.spinner.hide()
        }
      )
    }
    
  }
  onAssignCustomerGridReady(params) {
    this.customerGridApi = params.api;
    this.customerGridColumnApi = params.columnApi;
    this.customerGridApi.sizeColumnsToFit();
  }

}
