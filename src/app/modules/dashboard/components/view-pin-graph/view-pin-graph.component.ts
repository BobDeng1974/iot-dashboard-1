import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationStateService } from 'src/app/service/application-state.service';

@Component({
  selector: 'app-view-pin-graph',
  templateUrl: './view-pin-graph.component.html',
  styleUrls: ['./view-pin-graph.component.scss']
})
export class ViewPinGraphComponent implements OnInit {

  constructor(private router: Router, private appSate: ApplicationStateService) { }

  ngOnInit() {
    console.log(this.appSate.pinnedSensors);
  }
}
