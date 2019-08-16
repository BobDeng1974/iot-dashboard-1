import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../model/customermodel';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  @Input() device: Device;
  constructor() { }

  ngOnInit() {
  }

}
