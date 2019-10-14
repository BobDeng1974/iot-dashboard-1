import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-node-table',
  templateUrl: './node-table.component.html',
  styleUrls: ['./node-table.component.scss']
})
export class NodeTableComponent implements OnInit {
  @Output() buttonClicker = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }

  applyFilter(value : string){

  }
  InitializeClick(value: number){
    this.buttonClicker.emit(value);
  }
}
