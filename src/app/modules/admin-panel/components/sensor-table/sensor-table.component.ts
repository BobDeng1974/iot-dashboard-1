import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminPanelMainService } from '../../admin-panel-main.service';

@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.scss']
})
export class SensorTableComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<number>();
  displayedCloumns : string[] = ['select', 'sensor_type', 'sensor_model', 'sensor_make', 'sensor_status', 'sensor_threshold_max', 'sensor_threshold_min']
  constructor(private adminPanelService: AdminPanelMainService) { }

  ngOnInit() {
    
  }

  applyFilter(value : string){

  }

  InitializeClick(value: number){
    this.buttonClicked.emit(value);
  }
}
