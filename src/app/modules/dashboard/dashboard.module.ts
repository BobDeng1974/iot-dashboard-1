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


@NgModule({
  declarations: [DashboardMainComponent, GraphComponent, CustomerBranchDetailsComponent, CustomerBranchDeviceDetailsComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class DashboardModule { }
