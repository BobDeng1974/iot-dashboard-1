import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import{DashbordMainService} from '../../dashbord-main.service'
import * as formLogin from '../../../../state/app.reducer'
import { customerSupport } from '../../model/customerDashboard';
@Component({
  selector: 'app-mobile-contact',
  templateUrl: './mobile-contact.component.html',
  styleUrls: ['./mobile-contact.component.scss']
})
export class MobileContactComponent implements OnInit {
  contactForm:FormGroup;
  customerId : number;
  CustomerNode: any
  newSupport : customerSupport;
  constructor(private fb: FormBuilder, private store : Store<formLogin.State>, private dashbordMainService: DashbordMainService) {  }

  ngOnInit() {
    this.contactForm=this.fb.group({
      Name:[''],
      Email:[''],
      Message:[''],
      Node:['']
    })
    this.store.pipe(select(formLogin.getUserDetail)).subscribe(
      userDetail => {
        if (userDetail) {
          console.log(userDetail);
          this.customerId = userDetail.customer_id;
          this.dashbordMainService.getCustomerNode(this.customerId).subscribe(
            (data)=>{
              this.CustomerNode=data;
            },
            (error)=>{
              console.log(error);
            }
          )
          
        }
      }
    );
    
  }
  OnSubmit(form){
    this.newSupport = {
      customer_id : this.customerId,
      node_id : form.controls.Node.value,
      details : form.controls.Message.value
    }
    
    
  }

}
