import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as formLogin from '../../../../state/app.reducer'
@Component({
  selector: 'app-mobile-contact',
  templateUrl: './mobile-contact.component.html',
  styleUrls: ['./mobile-contact.component.scss']
})
export class MobileContactComponent implements OnInit {
  contactForm:FormGroup;
  customerId : number;

  constructor(private fb: FormBuilder, private store : Store<formLogin.State>) {  }

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
          
          
        }
      }
    );
    
  }

}
