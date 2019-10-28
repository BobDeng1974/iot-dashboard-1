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
import { LoginComponent } from './login/login.component';
import { VendorPanelModule } from './modules/vendor-panel/vendor-panel.module';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MobileTopNavBarComponent } from './common/mobile-top-nav-bar/mobile-top-nav-bar.component';
import { MobileBottomNavBarComponent } from './common/mobile-bottom-nav-bar/mobile-bottom-nav-bar.component';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';
import { reducer } from './state/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './state/app.effects';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    MobileBottomNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AdminPanelModule,
    DashboardModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    VendorPanelModule,
    DeviceDetectorModule.forRoot(),
    StoreModule.forRoot({'user' : reducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: environment.production,
      name:"QubeMatics"
    }),
    EffectsModule.forRoot([LoginEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
