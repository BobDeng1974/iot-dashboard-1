import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMainComponent } from './pages/dashboard-main/dashboard-main.component';
import { MobileDashboardMainComponent } from './pages/mobile-dashboard-main/mobile-dashboard-main.component';

const routes:Routes = [
  { path:"dashboard", component:DashboardMainComponent},
  { path:"mobile-dashboard", component:MobileDashboardMainComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
