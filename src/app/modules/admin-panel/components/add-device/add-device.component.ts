import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Device } from '../../model/customermodel';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { SuccessSnackberComponent } from 'src/app/modules/shared/components/success-snackber/success-snackber.component';
import { gateway } from '../../model/gateway';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  adddeviceForm : FormGroup;
  gateway : gateway;
  constructor(private fb : FormBuilder, public dialogRef : MatDialogRef<AddDeviceComponent>, @Inject(MAT_DIALOG_DATA) public data: Device, private adminService: AdminPanelMainService, private _snackBar : MatSnackBar, private spinner : NgxSpinnerService) { 
    // this.device = data;
  }

  ngOnInit() {
    this.adddeviceForm = this.fb.group({
      gateway_name : ['',[Validators.required]],
      uid : ['',[Validators.required]],
      // sensor_name: ['', Validators.required],
      // sensor_type: ['', Validators.required],
      // sensor_threshold_max: ['', Validators.required],
      // sensor_threshold_min: ['', Validators.required],
    });

    // if (this.device && this.device.device_id > 0) {
    //   this.adddeviceForm.patchValue(this.device);
    // }
  }

  closeDialog(){
    this.dialogRef.close()
  }

  onSubmit(form){
    // if (this.gateway && this.gateway.gateway_id > 0) {
    //   this.gateway.gateway_name = form.controls.gateway_name.value,
    //   this.gateway.uid = form.controls.uid.value
    //   // this.adminService.updateDevice(this.gateway).subscribe(
    //   //   (data) => {
    //   //     this.dialogRef.close("success");
    //   //     if (data == "001") {
    //   //       //alert('update successfull')
    //   //       this._snackBar.openFromComponent(SuccessSnackberComponent,{data: "Device Update Successfully", duration: 3000 });
    //   //     }
    //   //     else {
    //   //       this.adminService.getError(data);
    //   //     }
    //   //   },
    //   //   (error) => {
    //   //     console.log(error)
    //   //     this.dialogRef.close()
    //   //   }
    //   // );
    // } else {
    //   this.gateway = {
    //     gateway_name : form.controls.gateway_name.value,
    //     uid: form.controls.uid.value,

    //   }
    this.gateway = {
      gateway_name : form.controls.gateway_name.value,
      uid : form.controls.uid.value,
      nodes : []
    }
    console.log(this.gateway)
    this.spinner.show();
    this.adminService.createGateway(this.gateway).subscribe(
      (data) => {
        this.dialogRef.close('success')
        this.spinner.hide()
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
