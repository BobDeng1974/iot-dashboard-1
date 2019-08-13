import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddVendorFormComponent } from '../../components/add-vendor-form/add-vendor-form.component';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  //open add custoner in opoup
  addvendordialog :  MatDialogRef<AddVendorFormComponent>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openPopup(value : number) {
    switch (value) {
      // Open add vendor dialog
      case 0:
          this.addvendordialog = this.dialog.open(AddVendorFormComponent);
      break;
    }
  }
}
