import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.scss']
})
export class SensorTableComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  applyFilter(value : string){

  }

  InitializeClick(value: number){
    this.buttonClicked.emit(value);
  }
}
