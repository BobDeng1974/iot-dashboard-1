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

  
  ngOnInit() {
    setTimeout(() => {this.spinner.show()}, 100);
    this.adminService.getAllAssignedInfo().subscribe(
      (data) =>{
        console.log(data);
        this.spinner.hide();
      },
      (error) => {
        console.error(error);
        this.spinner.hide();
      }
    );  
  }
  ngOnChanges(){
    
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
