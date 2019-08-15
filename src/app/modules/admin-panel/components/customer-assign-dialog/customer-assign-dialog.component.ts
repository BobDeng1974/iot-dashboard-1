import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-customer-assign-dialog',
  templateUrl: './customer-assign-dialog.component.html',
  styleUrls: ['./customer-assign-dialog.component.scss']
})
export class CustomerAssignDialogComponent implements OnInit {
  
  customerassignForm  : FormGroup;
  constructor(private fb : FormBuilder, public dialogRef : MatDialogRef<CustomerAssignDialogComponent>) { }

  ngOnInit() {
    this.customerassignForm = this.fb.group({
      assign_customer : ['',[Validators.required]],
    });
  }

}
