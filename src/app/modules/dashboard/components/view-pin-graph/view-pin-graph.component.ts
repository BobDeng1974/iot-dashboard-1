import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-pin-graph',
  templateUrl: './view-pin-graph.component.html',
  styleUrls: ['./view-pin-graph.component.scss']
})
export class ViewPinGraphComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation  = this.router.getCurrentNavigation(); 
    console.log(navigation.extras.state);
  }
}
