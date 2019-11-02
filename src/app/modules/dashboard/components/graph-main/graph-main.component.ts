import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashbordMainService } from '../../dashbord-main.service';
import { sensor } from 'src/app/modules/admin-panel/model/gateway';

@Component({
  selector: 'app-graph-main',
  templateUrl: './graph-main.component.html',
  styleUrls: ['./graph-main.component.scss']
})
export class GraphMainComponent implements OnInit {
  node_uid ;
  sensors : sensor[] = []
  constructor(private router : Router, private route : ActivatedRoute, private dashboardService : DashbordMainService) { }

  ngOnInit() {
    this.node_uid = this.route.snapshot.queryParamMap.get('node_id');
    this.dashboardService.getSensorsByUID(this.node_uid).subscribe(
      (data) => {
        console.log(data);
        this.sensors = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  goBack(){
    this.router.navigate(['/'])
  }
}
