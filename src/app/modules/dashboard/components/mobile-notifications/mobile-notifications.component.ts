import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as formLogin from '../../../../state/app.reducer';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-mobile-notifications',
  templateUrl: './mobile-notifications.component.html',
  styleUrls: ['./mobile-notifications.component.scss']
})
export class MobileNotificationsComponent implements OnInit {
  customerId : number;
  constructor(private store : Store<formLogin.State>,private router : Router, private spinner : NgxSpinnerService) { }

  ngOnInit() {
    this.store.pipe(select(formLogin.getUserDetail)).subscribe(
      userDetails=>{
        if(userDetails){
          this.customerId=userDetails.customer_id;
          console.log(this.customerId);
        }
      }
    );
  }
  getNotificationDetails(){
    this.router.navigate(['/mobile-devices-notification']);
  }

}
