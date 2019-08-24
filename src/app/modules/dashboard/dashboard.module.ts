import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './pages/dashboard-main/dashboard-main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GraphComponent } from './graph/graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [DashboardMainComponent, GraphComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
