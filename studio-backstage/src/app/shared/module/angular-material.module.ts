import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatRippleModule,
    MatExpansionModule
  ]
})
export class SharedAngularMaterialModule { }
