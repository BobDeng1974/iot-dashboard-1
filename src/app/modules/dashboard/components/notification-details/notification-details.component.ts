import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/mobile-notifications']);
  }

}
