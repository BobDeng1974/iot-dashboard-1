import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromLogin from '../../../../state/app.reducer';
import { DashbordMainService } from '../../dashbord-main.service';
import { payload } from '../../model/customerDashboard';
@Component({
  selector: 'app-branch-devices',
  templateUrl: './branch-devices.component.html',
  styleUrls: ['./branch-devices.component.scss']
})
export class BranchDevicesComponent implements OnInit {

  branch_id;
  customer_id : number;
  payload : payload;
  constructor(private route : ActivatedRoute, private store : Store<fromLogin.State>, private dashboardService : DashbordMainService) { }

  ngOnInit() {
    this.branch_id = this.route.snapshot.queryParamMap.get('branch_id');
    this.branch_id = +this.branch_id;
    this.store.pipe(select(fromLogin.getUserDetail)).subscribe(
      userDetails => {
        this.customer_id = userDetails.customer_id;
        this.payload = {
          customer_branch_id : this.branch_id,
          customer_id : this.customer_id
        }
      }
    )

    this.dashboardService.getAllNodesByBranch(this.payload).subscribe(
      (data) => {
        console.log(data);
        
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

}


