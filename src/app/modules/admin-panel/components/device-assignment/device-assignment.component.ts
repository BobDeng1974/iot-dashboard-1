import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device-assignment',
  templateUrl: './device-assignment.component.html',
  styleUrls: ['./device-assignment.component.scss']
})
export class DeviceAssignmentComponent implements OnInit {
  @Input()deviceName;
  @Input() deviceId;
  constructor() { }

  ngOnInit() {
  }

}
