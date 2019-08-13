import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  // selected tab value
  private currentTab = 0;
  @Output() ButtonClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  resizeGrid(value : any) {
    this.currentTab = value.index;
  }

  InitializeClick() {
    this.ButtonClicked.emit(this.currentTab + 4);
  }

}
