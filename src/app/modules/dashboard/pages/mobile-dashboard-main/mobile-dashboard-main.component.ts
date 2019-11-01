import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-dashboard-main',
  templateUrl: './mobile-dashboard-main.component.html',
  styleUrls: ['./mobile-dashboard-main.component.scss']
})
export class MobileDashboardMainComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  branch(){
    this.router.navigate(['/mobile-locations']);
  }
  device(){
    this.router.navigate(['/mobile-devices']);
  }
  notification(){
    this.router.navigate(['/mobile-notifications']);
  }
  contactUs(){
    this.router.navigate(['/mobile-contact']);
  }
  profile(){
    this.router.navigate(['/mobile-profile']);
  }

}
