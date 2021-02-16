import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatRippleModule,
    MatExpansionModule,
    MatToolbarModule
  ]
})
export class SharedAngularMaterialModule { }
