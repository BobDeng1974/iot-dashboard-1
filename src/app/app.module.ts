import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { FooterComponent } from './common/footer/footer.component';
import { AdminPanelModule } from './modules/admin-panel/admin-panel.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AdminPanelModule,
    DashboardModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
