import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedAngularMaterialModule } from '../../shared/module/angular-material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SharedAngularMaterialModule,
    LayoutRoutingModule
  ],
  exports: [
    DashboardComponent,
    SideNavComponent
  ]
})
export class LayoutModule { }
