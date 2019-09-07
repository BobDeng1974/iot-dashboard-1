import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './pages/dashboard-main/dashboard-main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GraphComponent } from './components/graph/graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomerBranchDetailsComponent } from './components/customer-branch-details/customer-branch-details.component';
import { CustomerBranchDeviceDetailsComponent } from './components/customer-branch-device-details/customer-branch-device-details.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { VideoWindowComponent } from './components/video-window/video-window.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { SensorCardComponent } from './components/sensor-card/sensor-card.component';
import { ViewPinGraphComponent } from './components/view-pin-graph/view-pin-graph.component';
import { PinViewSensorCardComponent } from './components/pin-view-sensor-card/pin-view-sensor-card.component';
import { AllPinGraphComponent } from './components/all-pin-graph/all-pin-graph.component';


@NgModule({
  declarations: [DashboardMainComponent, GraphComponent, CustomerBranchDetailsComponent, CustomerBranchDeviceDetailsComponent, VideoWindowComponent, DeviceListComponent, SensorCardComponent, ViewPinGraphComponent, PinViewSensorCardComponent, AllPinGraphComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [VideoWindowComponent, GraphComponent]
})
export class DashboardModule { }
