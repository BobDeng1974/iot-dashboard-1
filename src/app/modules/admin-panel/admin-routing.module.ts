import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminGuardService } from 'src/app/service/admin-guard.service';

const routes: Routes = [
  { path:"admin-panel", component:AdminMainComponent, canActivate: [AdminGuardService] },
  { path:'', redirectTo:'/login', pathMatch: "full" },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
