import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AddVendorFormComponent } from '../../components/add-vendor-form/add-vendor-form.component';
import { AddCustomerFormComponent } from '../../components/add-customer-form/add-customer-form.component';
import { AddCustomerAddressComponent } from '../../components/add-customer-address/add-customer-address.component';
import { AddCustomerLegalinfoComponent } from '../../components/add-customer-legalinfo/add-customer-legalinfo.component';
import { AddCustomerPhoneComponent } from '../../components/add-customer-phone/add-customer-phone.component';
import { AddCustomerEmailComponent } from '../../components/add-customer-email/add-customer-email.component';
import { AddCustomerAdditionalinfoComponent } from '../../components/add-customer-additionalinfo/add-customer-additionalinfo.component';
import { AddCustomerBranchComponent } from '../../components/add-customer-branch/add-customer-branch.component';
import { AddVendorAddressComponent } from '../../components/add-vendor-address/add-vendor-address.component';
import { AddVendorLegalinfoComponent } from '../../components/add-vendor-legalinfo/add-vendor-legalinfo.component';
import { AddVendorPhoneComponent } from '../../components/add-vendor-phone/add-vendor-phone.component';
import { AddVendorEmailComponent } from '../../components/add-vendor-email/add-vendor-email.component';
import { AddVendorAdditionalinfoComponent } from '../../components/add-vendor-additionalinfo/add-vendor-additionalinfo.component';
import { CustomerAssignDialogComponent } from '../../components/customer-assign-dialog/customer-assign-dialog.component';
import { AddDeviceComponent } from '../../components/add-device/add-device.component';
import { Device, Address, Customer, Domaindata } from '../../model/customermodel';
import { AdminPanelMainService } from '../../admin-panel-main.service';
import { SuccessSnackberComponent } from 'src/app/modules/shared/components/success-snackber/success-snackber.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AddSensorFormComponent } from '../../components/add-sensor-form/add-sensor-form.component';
import { Vendor } from '../../model/vendormodel';
import { from } from 'rxjs';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  //open add vendor in popup
  addvendordialog :  MatDialogRef<AddVendorFormComponent>;

  // Open add customer in popup
  addcustomerdialog : MatDialogRef<AddCustomerFormComponent>;

  // Open address in popup
  customeraddressdialog : MatDialogRef<AddCustomerAddressComponent>;

  // Open legal info for customer in popup
  customerlegalinfodialog  : MatDialogRef<AddCustomerLegalinfoComponent>;

  // Open phone for customer in popup
  customerphonedialog : MatDialogRef<AddCustomerPhoneComponent>;

  // Open email for customer in popup
  customeremaildialog : MatDialogRef<AddCustomerEmailComponent>;

  // Open additional information in popup
  custoeraddinfodialog : MatDialogRef<AddCustomerAdditionalinfoComponent>;

  // Open branch in popup
  customerbranchdialog : MatDialogRef<AddCustomerBranchComponent>;

  // Open vendor address in popup
  vendoraddressdilog : MatDialogRef<AddVendorAddressComponent>;

  // Open vendor legalinfo in popup
  vendorlegalinfodialog : MatDialogRef<AddVendorLegalinfoComponent>;

  // Open vendor phone in popup
  vendorphonedialog : MatDialogRef<AddVendorPhoneComponent>;

  // Open vendor email in popup
  vendoremaildialog : MatDialogRef<AddVendorEmailComponent>;

  // Open vendor additional info popup
  vendoraddinfodialog : MatDialogRef<AddVendorAdditionalinfoComponent>;

  // Open customer assignment popup
  customerassigndialog : MatDialogRef<CustomerAssignDialogComponent>;

  //device assign dialog
  deviceAssignDialog : MatDialogRef<AddDeviceComponent>

  //sensor assign dialog
  sensorAssignDialog: MatDialogRef<AddSensorFormComponent>

  selectedTab = 0;

  deviceName: string;
  deviceId: number;
  deviceDetail: Device;
  // Hold All customer Data
  customerData : Customer[];

  // Hold all vendor data
  vendorData : Vendor[];

  //Hold all the devices 
  deviceData : Device[];

  addresstype : Domaindata[];
  cuntrycode : Domaindata[];
  LegalinfoType : Domaindata[];
  customerType : Domaindata[];

  // value to customer details components
  customer : Customer;

  // value to vendor details components
  vendor : Vendor;

  //assignment table rowId
  rowId : number;
  constructor(public dialog: MatDialog, private adminpanelService: AdminPanelMainService, private _snackBar: MatSnackBar, private spinner : NgxSpinnerService) { }

  ngOnInit() {
    this.customer = {
      customer_id : 0
    };

    this.vendor = {
      vendor_id : 0
    };

    this.spinner.show();
    this.adminpanelService.getAllCustomer().subscribe(
      (data) => {
        console.log(data);
        this.customerData = data.reverse();
        this.adminpanelService.getAddressType().subscribe(
          (data) => {
            this.addresstype = data;
            // this.adminpanelService.getCountryCode().subscribe(
            //   (data) => {
            //     this.cuntrycode = data;
            //     this.adminpanelService.getLegalInfoType().subscribe(
            //       (data) => {
            //         this.LegalinfoType = data;
            //         console.log("legal info for grid  "+data);
            //         this.adminpanelService.getCustomerType().subscribe(
            //           (data) => {
            //             this.customerType = data;
            //             console.log("customer type form main  "+data);
            //           },
            //           (error) => {
            //             console.error(error);
            //             this.spinner.hide();
            //           }
            //         );
            //       },
            //       (error) => {
            //         console.log(error);
            //         this.spinner.hide();
            //       }
            //     );
            //   },
            //   (error) => {
            //     console.log(error);
            //     this.spinner.hide();
            //   }
            // );
            this.adminpanelService.getLegalInfoType().subscribe(
              (data) => {
                this.LegalinfoType = data;
                console.log("legal info for grid  "+data);
                this.adminpanelService.getCustomerType().subscribe(
                  (data) => {
                    this.customerType = data;
                    console.log("customer type form main  "+data);
                  },
                  (error) => {
                    console.error(error);
                    this.spinner.hide();
                  }
                );
              },
              (error) => {
                console.log(error);
                this.spinner.hide();
              }
            );
          },
          (error) => {
            console.log(error);
            this.spinner.hide();
          }
        );
      },
      (error) => {
        console.log(error);
        this.spinner.hide();
      }
    );

    this.adminpanelService.getAllDevice().subscribe(
      (data) => {
        console.log(data)
        this.deviceData = data.reverse()
      },
      (error) => {
        console.log(error)
      }
    );

    this.adminpanelService.getAllVendor().subscribe(
      (data) => {
        this.vendorData = data.reverse();
        console.log(data);
        
        this.spinner.hide();
      },
      (error) => {
        console.error(error);
        this.spinner.hide();
      }
    );
  }

  openPopup(value : number) {
    switch (value) {
      // Open add vendor dialog
      case 0:
        this.addvendordialog = this.dialog.open(AddVendorFormComponent);
        this.addvendordialog.afterClosed().subscribe(result => {
          if(result) {
            this.spinner.show();
            this.adminpanelService.getAllVendor().subscribe(
              (data) => {
                this.vendorData = data.reverse();
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open edit vengor dialog
      case 1 :
        if(this.vendor.vendor_id > 0) {
          this.addvendordialog = this.dialog.open(AddVendorFormComponent, { data : this.vendor} );
          this.addvendordialog.afterClosed().subscribe(result => {
            if(result) {
              this.spinner.show();
              this.adminpanelService.getAllVendor().subscribe(
                (data) => {
                  this.vendorData = data.reverse();
                  this.spinner.hide();
                },
                (error) => {
                  console.error(error);
                  this.spinner.hide();
                }
              );
            }
          });
        }
      break;
      
      // Open add customer dialog
      case 2:
        this.addcustomerdialog = this.dialog.open(AddCustomerFormComponent);

        this.addcustomerdialog.afterClosed().subscribe(result => {
          if(result) {
            this.spinner.show();
            this.adminpanelService.getAllCustomer().subscribe(
              (data) => {
                this.customerData = data.reverse();
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Edit customer dialog
      case 3 :
        if(this.customer.customer_id > 0) {
          this.addcustomerdialog = this.dialog.open(AddCustomerFormComponent, {data : this.customer});
          this.addcustomerdialog.afterClosed().subscribe(result => {
            if(result) {
              this.spinner.show();
              this.adminpanelService.getAllCustomer().subscribe(
                (data) => {
                  this.customerData = data.reverse();
                  this.spinner.hide();
                },
                (error) => {
                  console.error(error);
                  this.spinner.hide();
                }
              );
            }
          });
        }
      break;

      // Open customer address dialog
      case 4:
        this.customeraddressdialog = this.dialog.open(AddCustomerAddressComponent);
        this.customeraddressdialog.afterClosed().subscribe(result => {
          if(result) {
            this.customer.addresses.push(result);
            this.spinner.show();
            this.adminpanelService.updateCustomer(this.customer).subscribe(
              (data) => {
                //console.log(data);
                if (data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,
                    { data: "Address Added Successfully.", duration: 3000});
                } 
                else {
                  this.adminpanelService.getACustomer(this.customer.customer_id).subscribe(
                    (data) => {
                      this.customer = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );  
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open customer legal info dialog
      case 5: 
        this.customerlegalinfodialog = this.dialog.open(AddCustomerLegalinfoComponent);
        this.customerlegalinfodialog.afterClosed().subscribe(result=> {
          if(result) {
            this.customer.infos.push(result);
            this.spinner.show();
            this.adminpanelService.updateCustomer(this.customer).subscribe(
              (data) => {
                //console.log(data);
                if (data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,{ data: "Legal Info Added Successfully",duration: 3000 }); 
                }
                else {
                  this.adminpanelService.getACustomer(this.customer.customer_id).subscribe(
                    (data) => {
                      this.customer = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open customer phone dialog
      case 6:
        this.customerphonedialog = this.dialog.open(AddCustomerPhoneComponent);
        this.customerphonedialog.afterClosed().subscribe(result => {
          if(result) {
            this.customer.phones.push(result);
            this.spinner.show();
            this.adminpanelService.updateCustomer(this.customer).subscribe(
              (data)=> {
                if (data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,{data : " Phone Added Successfully",duration: 3000 }); 
                }
                else {
                  this.adminpanelService.getACustomer(this.customer.customer_id).subscribe(
                    (data) => {
                      this.customer = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open customer email dialog
      case 7:
        this.customeremaildialog = this.dialog.open(AddCustomerEmailComponent);
        this.customeremaildialog.afterClosed().subscribe(result => {
          if(result) {
            this.customer.emails.push(result);
            this.spinner.show();
            this.adminpanelService.updateCustomer(this.customer).subscribe(
              (data) => {
                if(data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,{data : "Email Added Successfully",duration: 3000 }); 
                }
                else {
                  this.adminpanelService.getACustomer(this.customer.customer_id).subscribe(
                    (data) => {
                      this.customer = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open customer additoional information  dialog
      case 8:
        this.custoeraddinfodialog = this.dialog.open(AddCustomerAdditionalinfoComponent);
        this.custoeraddinfodialog.afterClosed().subscribe(result => {
          if(result) {
            this.customer.attributes.push(result);
            this.spinner.show();
            this.adminpanelService.updateCustomer(this.customer).subscribe(
              (data) => {
                if(data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,{data : "Email Added Successfully",duration: 3000 }); 
                }
                else {
                  this.adminpanelService.getACustomer(this.customer.customer_id).subscribe(
                    (data) => {
                      this.customer = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open customer branch dialog
      case 9:
        this.customerbranchdialog = this.dialog.open(AddCustomerBranchComponent);
        this.customerbranchdialog.afterClosed().subscribe( result => {
          if(result) {
            this.customer.branches.push(result);
            this.spinner.show();
            this.adminpanelService.updateCustomer(this.customer).subscribe(
              (data) => {
                if(data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,{data : "Branch Added Successfully",duration: 3000 }); 
                }
                else {
                  this.adminpanelService.getACustomer(this.customer.customer_id).subscribe(
                    (data) => {
                      this.customer = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open vendor address dialog
      case 10:
        this.vendoraddressdilog = this.dialog.open(AddVendorAddressComponent);
        this.vendoraddressdilog.afterClosed().subscribe(result => {
          if(result) {
            this.vendor.addresses.push(result);
            this.spinner.show();
            this.adminpanelService.updateVendor(this.vendor).subscribe(
              (data) => {
                //console.log(data);
                if (data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,
                    { data: "Address Added Successfully.", duration: 3000});
                } 
                else {
                  this.adminpanelService.getAVendorDetails(this.vendor.vendor_id).subscribe(
                    (data) => {
                      this.vendor = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );  
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open vendor legal info dialog
      case 11: 
        this.vendorlegalinfodialog = this.dialog.open(AddVendorLegalinfoComponent);
        this.vendorlegalinfodialog.afterClosed().subscribe(result=> {
          if(result) {
            this.vendor.legal_infos.push(result);
            this.spinner.show();
            this.adminpanelService.updateVendor(this.vendor).subscribe(
              (data) => {
                //console.log(data);
                if (data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,{ data: "Legal Info Added Successfully",duration: 3000 }); 
                }
                else {
                  this.adminpanelService.getAVendorDetails(this.vendor.vendor_id).subscribe(
                    (data) => {
                      this.vendor = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open vendor phone dialog
      case 12:
        this.vendorphonedialog = this.dialog.open(AddVendorPhoneComponent);
        this.vendorphonedialog.afterClosed().subscribe(result => {
          if(result) {
            this.vendor.phones.push(result);
            this.spinner.show();
            this.adminpanelService.updateVendor(this.vendor).subscribe(
              (data)=> {
                if (data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,{data : " Phone Added Successfully",duration: 3000 }); 
                }
                else {
                  this.adminpanelService.getAVendorDetails(this.vendor.vendor_id).subscribe(
                    (data) => {
                      this.vendor = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open vendor email dialog
      case 13:
        this.vendoremaildialog = this.dialog.open(AddVendorEmailComponent);
        this.vendoremaildialog.afterClosed().subscribe(result => {
          if(result) {
            this.vendor.emails.push(result);
            this.spinner.show();
            this.adminpanelService.updateVendor(this.vendor).subscribe(
              (data) => {
                if(data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,{data : "Email Added Successfully",duration: 3000 }); 
                }
                else {
                  this.adminpanelService.getAVendorDetails(this.vendor.vendor_id).subscribe(
                    (data) => {
                      this.vendor = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open vendor additoional information  dialog
      case 14:
        this.vendoraddinfodialog = this.dialog.open(AddVendorAdditionalinfoComponent);
        this.vendoraddinfodialog.afterClosed().subscribe(result => {
          if(result) {
            this.vendor.additional_attributes.push(result);
            this.spinner.show();
            this.adminpanelService.updateVendor(this.vendor).subscribe(
              (data) => {
                if(data == "001") {
                  this._snackBar.openFromComponent(SuccessSnackberComponent,{data : "Email Added Successfully",duration: 3000 }); 
                }
                else {
                  this.adminpanelService.getAVendorDetails(this.vendor.vendor_id).subscribe(
                    (data) => {
                      this.vendor = data[0];
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }
                this.spinner.hide();
              },
              (error) => {
                console.error(error);
                this.spinner.hide();
              }
            );
          }
        });
      break;

      // Open customer assign dialog
      case 15:
        this.customerassigndialog = this.dialog.open(CustomerAssignDialogComponent);
      break;

      //open add device dialog 
      case 16:
        this.deviceAssignDialog = this.dialog.open(AddDeviceComponent)
        this.deviceAssignDialog.afterClosed().subscribe(result => {
          if (result) {
            this.spinner.show()
            this.adminpanelService.getAllDevice().subscribe(
              (data) => {
                this.deviceData = data.reverse();
                this.spinner.hide()
              },
              (error) => {
                console.log(error);
                this.spinner.hide()
              }
            );
          }
        });
      break;

      //open edit device form
      case 17:
        this.deviceAssignDialog = this.dialog.open(AddDeviceComponent, {
          data: this.deviceDetail
        })
      break;

      //open sensor form
      case 18:
        this.sensorAssignDialog = this.dialog.open(AddSensorFormComponent)
        this.sensorAssignDialog.afterClosed().subscribe(result => {
          if (result) {
            this.deviceDetail.sensors.push(result);
            this.spinner.show()
            this.adminpanelService.updateDevice(this.deviceDetail).subscribe(
              (data) => {
                if (data == "001") {
                  alert('updated successfully')
                }else{
                  console.log('error occured')
                }
                this.spinner.hide()
              },
              (error) => {
                console.log(error)
                this.spinner.hide()
              }
            );
          }
        });
      break;
    }
  }

  getDeviceID(value){
    this.selectedTab = 5;
    console.log(value)
    this.deviceId = value
  }

  getDeviceName(value){
    console.log(value)
    this.deviceName = value
  }

  toDeviceAssign(value){
    this.selectedTab = 4
    this.deviceId = value
  }

  getDeviceDetails(value){
    this.deviceDetail = value
    console.log(value)
  }
  getCustomerDetails(value : Customer) {
    this.customer = value;
  }

  openAddressEditPopup(address : Address) {
    this.customeraddressdialog = this.dialog.open(AddCustomerAddressComponent,{ data : address});
  }

  openVendorAdddressEditPopup(address : Address) {
    this.vendoraddressdilog = this.dialog.open(AddVendorAddressComponent,{ data: address});
  }

  getVendorDetails(value : Vendor) {
    this.vendor = value;
  }

  getRowId(value){
    this.rowId = value;
  }

  getAssignmentInfo(){
    
  }
}
