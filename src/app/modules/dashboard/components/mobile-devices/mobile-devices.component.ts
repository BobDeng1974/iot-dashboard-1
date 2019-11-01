import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as formLogin from '../../../../state/app.reducer';
import { DashbordMainService } from '../../dashbord-main.service';
import { node } from 'src/app/modules/admin-panel/model/gateway';

@Component({
  selector: 'app-mobile-devices',
  templateUrl: './mobile-devices.component.html',
  styleUrls: ['./mobile-devices.component.scss']
})
export class MobileDevicesComponent implements OnInit {
  customerId : number;
  allDatas: any;
  constructor(private store : Store<formLogin.State>,private dashbordMainService: DashbordMainService) { }

  ngOnInit() {
    this.store.pipe(select(formLogin.getUserDetail)).subscribe(
      userDetail => {
        if (userDetail) {
          this.customerId = userDetail.customer_id;
          console.log(this.customerId);
          this.dashbordMainService.getAllNodeSensorGateway(this.customerId).subscribe(
            (data)=>{
              this.allDatas=data;
              console.log(this.allDatas);
            },
            (error)=>{
              console.error(error);
            }
          ) 
        }
      }
    );
  }
  goToGraph(node : node){
    
  }
}
