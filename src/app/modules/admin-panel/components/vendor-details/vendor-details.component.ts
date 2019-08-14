import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {

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
    this.ButtonClicked.emit(this.currentTab + 10);
  }
}
