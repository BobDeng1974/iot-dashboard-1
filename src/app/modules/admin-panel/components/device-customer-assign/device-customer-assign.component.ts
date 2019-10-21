import { Component, OnInit, INJECTOR, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Device, DeviceAssignment } from '../../model/customermodel';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { gateway, node, assignmentinfo } from '../../model/gateway';
import { SuccessSnackberComponent } from 'src/app/modules/shared/components/success-snackber/success-snackber.component';

@Component({
  selector: 'app-device-customer-assign',
  templateUrl: './device-customer-assign.component.html',
  styleUrls: ['./device-customer-assign.component.scss']
})
export class DeviceCustomerAssignComponent implements OnInit {

  device: Device;
  customerAssignForm: FormGroup;
  customerData: any[] = []
  customerId: number;
  branchData: any[] = []
  title : string;
  formData: DeviceAssignment;
  gateways: gateway[] = []
  selectedGateway : gateway ;
  gatewayNodes : node[] = []
  selectedNode : node;
  assignInfo : assignmentinfo;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DeviceCustomerAssignComponent>, @Inject(MAT_DIALOG_DATA) public data: assignmentinfo, private adminMainService: AdminPanelMainService, private spinner: NgxSpinnerService, private _snackBar : MatSnackBar) {
    this.assignInfo = data;
  }

  ngOnInit() {
    console.log(this.assignInfo);
    this.gatewayNodes = [];
    this.title = "Assign Gateway to customer"
    this.customerAssignForm = this.fb.group({
      gateway: '',
      customer: '',
      branch_unit:'',
      branch: '',
      gateway_assign_effective_from: ['', [Validators.required]],
      gateway_assign_effective_to: ''
    });


    this.adminMainService.getCustomerNameandId().subscribe(
      (data) => {
        console.log(data);
        
        this.customerData = data
        if (this.assignInfo && this.assignInfo.gateway_assign_id > 0) {
          this.customerAssignForm.patchValue(this.assignInfo);

        }
        else {
          
        }
      },
      (error) => {
        console.log(error)
      }
    );
    this.adminMainService.getGatewayByStatus().subscribe(
      (data) => {
        console.log(data);
        this.gateways = data
      },
      (error) => {
        console.error(error);
      }
    );

  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.assignInfo = {
      customer_id : form.controls.customer.value.customer_id,
      customer_name :form.controls.customer.value.customer_name,
      gateway_id : form.controls.gateway.value.gateway_id,
      gateway_name : form.controls.gateway.value.gateway_name,
      branch_unit : form.controls.location.value,
      customer_branch_id : form.controls.branch.value.branch_id,
      customer_branch_name : form.controls.branch.value.branch_name,
      gateway_assign_effective_from : form.controls.device_assign_effective_from.value,
      gateway_assign_effective_to : form.controls.device_assign_effective_to.value
    }
    console.log(this.assignInfo);
    this.adminMainService.assignGateway(this.assignInfo).subscribe(
      (data) => {
        if (data === "001") {
          this._snackBar.openFromComponent(SuccessSnackberComponent, {data : 'Successfully assigned gateway to customer', duration : 3000});
          this.dialogRef.close()
        }else{
          this.adminMainService.getError(data)
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSelectionChange(value) {
    console.log(value)
    this.customerId = value.value.customer_id;
    this.spinner.show()
    this.adminMainService.getCustomerBranch(this.customerId).subscribe(
      (data) => {
        console.log(data);
        this.branchData = data
        this.spinner.hide()
      },
      (error) => {
        console.log(error);
        this.spinner.hide()
      }
    );
  }

  onGatewaySelectionChange(value){
    console.log(value);
    this.selectedGateway = value.value
    this.gatewayNodes = value.value.nodes
  }

  getSelectedNode(value){
    console.log(value);
    this.selectedNode = value;
  }
}
