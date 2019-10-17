import { Component, OnInit, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { node } from '../../model/gateway';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { SuccessSnackberComponent } from 'src/app/modules/shared/components/success-snackber/success-snackber.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.scss']
})
export class AddNodeComponent implements OnInit {
  nodeForm: FormGroup;
  node : node;
  constructor(private fb: FormBuilder, private dialogref : MatDialogRef<AddNodeComponent>, private adminPanelService : AdminPanelMainService, private _snackBar : MatSnackBar, private spinner : NgxSpinnerService, @Inject(MAT_DIALOG_DATA) public data : node ) {
    this.node = data
   }

  ngOnInit() {
    this.nodeForm = this.fb.group({
      uid:['', [Validators.required]],
      data_collection_frequency:'',
      data_sending_frequency:''
    })
    if (this.node && this.node.node_id > 0) {
      this.nodeForm.patchValue(this.node);
    }
  }

  closeDialog(){
    this.dialogref.close()
  }

  saveNode(form) {
    this.node = {
      uid:form.controls.uid.value,
      data_collection_frequency : form.controls.data_collection_frequency.value,
      data_sending_frequency : form.controls.data_sending_frequency.value,
      sensors : []
    }
    console.log(this.node)
    this.spinner.show();
    this.adminPanelService.createNode(this.node).subscribe(
      (data)=> {
        this.dialogref.close('success');
        this.spinner.hide();
        if (data === "001") {
          this._snackBar.openFromComponent(SuccessSnackberComponent, {data:'Successfully saved node', duration:3000})
        }else{
          this.adminPanelService.getError(data);
        }
      },
      (error) => {
        console.error(error);
        this.spinner.hide()
      }
    );
  }
}
