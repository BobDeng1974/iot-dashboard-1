import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph-main',
  templateUrl: './graph-main.component.html',
  styleUrls: ['./graph-main.component.scss']
})
export class GraphMainComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/'])
  }
}
