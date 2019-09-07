import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SensorData } from '../../pages/dashboard-main/dashboard-main.component';
import { CustomerDashBoard } from '../../model/customerDashboard';

@Component({
  selector: 'app-customer-branch-device-details',
  templateUrl: './customer-branch-device-details.component.html',
  styleUrls: ['./customer-branch-device-details.component.scss']
})
export class CustomerBranchDeviceDetailsComponent implements OnInit {

  @Input() CurrentReading: SensorData;

  @Input() sensordata : any[];
  @Input() deviceName : string;
  @Input() deviceData : CustomerDashBoard;
  @Input() deviceMac: string;
  @Output() videoClicked = new EventEmitter<number>();
  listOfPinValue: string[] = [];
  selectable = true;
  removable = true;
  // @Output() sensorType = new EventEmitter<string>();
  // @Output() deviceMac = new EventEmitter<string>();
  // temp: string = "";
  // humidity: string = "";
  // alcohol: string = "";
  // time: Date = null;
  // time2: Date = null;
  // time3: Date = null;
  // color= 'accent';
  
  //sensor type
  type: string = "";
  reading1: string = "";
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log(this.type)
    // if (this.CurrentReading) {
    //   if (this.type == 'temperature') {
    //     this.temp = this.CurrentReading.value.toString();
    //     this.time = this.CurrentReading.name;
    //   } else if (this.type == 'humidity'){
    //     this.humidity = this.CurrentReading.value.toString();
    //     this.time = this.CurrentReading.name;
    //   }else{
    //     this.alcohol = this.CurrentReading.value.toString();
    //     this.time = this.CurrentReading.name;
    //   }
    // }
    console.log("this is form customer branch device details");
    console.log(this.sensordata);
    console.log("List of pin value:  ");
    console.log(this.listOfPinValue);
  }

  getSensorId(value, sensorType : string) {
    // console.log(value)
    // if (value.checked) {
    //   this.type = sensorType;
    //   this.type = this.type.toLowerCase();
    //   this.sensorType.emit(sensorType);
    //   this.deviceMac.emit(this.deviceData.device_mac);
    // } else {
    //   this.sensorType.emit(null);
    //   this.temp =  "";
    //   this.time = null;
    // }
    
  }
  change(value){
    console.log(value)
  }
  openVideo(){
    this.videoClicked.emit(1);
  }

  pinValue(value){
    this.listOfPinValue.push(value);
    console.log(this.listOfPinValue);
  }

  remove(value)  {
    const index = this.listOfPinValue.indexOf(value);
    if (index >= 0) {
      this.listOfPinValue.splice(index, 1);
    }
    //console.log(this.listOfPinValue);
  }
}
