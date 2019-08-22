import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Device, DeviceAssignment } from '../../model/customermodel';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DateTimeRendererComponent } from 'src/app/modules/shared/components/date-time-renderer/date-time-renderer.component';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.scss']
})
export class AssignmentDetailsComponent implements OnInit {
  @Output() editClicked = new EventEmitter<DeviceAssignment>();
  @Output() buttonClick = new EventEmitter<number>();
  @Input() device:Device;
  @Input() assignInfo: DeviceAssignment[] = [];
  private rowSelection: string;
  private columnDefs;
  private selectedRow: DeviceAssignment;
  private assignmentGridApi;
  private assignmentGridColumnApi;

  constructor(private adminService: AdminPanelMainService, private spinner: NgxSpinnerService) { }

  frameworkComponents = {
    dateRenderer: DateTimeRendererComponent
  }
  ngOnInit() {
    this.columnDefs = [
      { headerName:'Customer Name', field:'customer_name'},
      { headerName:'Branch Name', field:'customer_branch_name'},
      { headerName: 'Start Date', field:'device_assign_effective_from', sortable:true, cellRenderer:'dateRenderer'},
      { headerName: 'End Date', field:'device_assign_effective_to', sortable:true, cellRenderer:'dateRenderer'},
    ];
    this.rowSelection = 'single';
  }
  ngOnChanges(){
    if (this.device && this.device.device_id > 0) {
      this.spinner.show();
      this.adminService.getAssignInfo(this.device.device_id).subscribe(
        (data) => {
          this.assignInfo = data
          console.log(data)
          this.spinner.hide();
        },
        (error) => {
          console.log(error);
          this.spinner.hide()
        }
      ); 
    }
  }
  InitializeClick(value){
    this.buttonClick.emit(value)
  }
  onAssignmentGridReady(params){
    this.assignmentGridApi = params.api;
    this.assignmentGridColumnApi = params.columnApi;
  }
  onSelectionChanged(value){
    this.selectedRow = this.assignmentGridApi.getSelectedRows()[0];
    console.log(this.selectedRow);
  }

  InitializeEdit(){
    this.editClicked.emit(this.selectedRow)
  }
}
