import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Device } from '../../model/customermodel';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { SuccessSnackberComponent } from 'src/app/modules/shared/components/success-snackber/success-snackber.component';
import { gateway, node } from '../../model/gateway';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  adddeviceForm : FormGroup;
  gateway : gateway;
  nodeList : node[] = [];
  nodeOptions : node[] = [];
  removable = true;
  selectable = true;
  separatorKeysCodes : number[] = [];
  constructor(private fb : FormBuilder, public dialogRef : MatDialogRef<AddDeviceComponent>, @Inject(MAT_DIALOG_DATA) public data: gateway, private adminService: AdminPanelMainService, private _snackBar : MatSnackBar, private spinner : NgxSpinnerService) { 
    this.gateway = data;
  }

  ngOnInit() {
    this.adddeviceForm = this.fb.group({
      gateway_name : ['',[Validators.required]],
      uid : ['',[Validators.required]],
    });

    if (this.gateway && this.gateway.gateway_id > 0) {
      this.adddeviceForm.patchValue(this.gateway);
    }
    this.adminService.getNodeByStatus().subscribe(
      (data) => {
        this.nodeOptions = data;
        console.log(data);
        
      }
    );
  }

  closeDialog(){
    this.dialogRef.close()
  }

  onSubmit(form){
    if (this.gateway && this.gateway.gateway_id > 0) {
      this.gateway.gateway_name = form.controls.gateway_name.value,
      this.gateway.uid = form.controls.uid.value
      this.adminService.updateGateway(this.gateway).subscribe(
        (data) => {
          this.dialogRef.close('success');
          if (data === "001") {
            this._snackBar.openFromComponent(SuccessSnackberComponent, {data:'Successfully updated gateway', duration:3000})
          } else {
            this.adminService.getError(data)
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.gateway = {
        gateway_name : form.controls.gateway_name.value,
        uid : form.controls.uid.value,
        nodes : []
      }
      console.log(this.gateway)
      this.adminService.createGateway(this.gateway).subscribe(
        (data) => {
          this.dialogRef.close('success')
          if (data === "001") {
            this._snackBar.openFromComponent(SuccessSnackberComponent, {data:'Successfully created gateway', duration:3000})
          }else{
            this.adminService.getError(data)
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  select(value) {

  }

  remove(value) {

  }
}
