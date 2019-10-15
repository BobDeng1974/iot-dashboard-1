import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { node } from '../../model/gateway';

@Component({
  selector: 'app-node-table',
  templateUrl: './node-table.component.html',
  styleUrls: ['./node-table.component.scss']
})
export class NodeTableComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<number>();
  displayedColumns : string[] = ['select', 'uid', 'data_collection_frequency', 'data_sending_frequency'];
  selectedNode : node = {
    node_id : 0
  }
  constructor() { }

  ngOnInit() {
  }

  applyFilter(value : string){

  }
  InitializeClick(value: number){
    this.buttonClicked.emit(value);
  }
}
