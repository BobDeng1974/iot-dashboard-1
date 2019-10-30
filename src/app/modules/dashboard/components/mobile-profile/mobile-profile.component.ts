import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as formLogin from '../../../../state/app.reducer';
import{DashbordMainService} from '../../dashbord-main.service';
import { Customer } from 'src/app/modules/admin-panel/model/customermodel';


@Component({
  selector: 'app-mobile-profile',
  templateUrl: './mobile-profile.component.html',
  styleUrls: ['./mobile-profile.component.scss']
})
export class MobileProfileComponent implements OnInit {
  customerId : number;
  customerData: Customer
  constructor(private store : Store<formLogin.State>,private dashbordMainService: DashbordMainService) { }

  ngOnInit() {
    this.store.pipe(select(formLogin.getUserDetail)).subscribe(
      userDetail => {
        if (userDetail) {
          console.log(userDetail);
          this.customerId = userDetail.customer_id;
          console.log(this.customerId); 
          this.dashbordMainService.getACustomer(this.customerId).subscribe(
            (data)=>{
              console.log(data);
              this.customerData=data;
            },
            (error)=>{
              console.error(error);
            }
          )
        }
      }
    );
  }

}
