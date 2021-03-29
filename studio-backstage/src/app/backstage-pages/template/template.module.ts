import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedAngularMaterialModule } from '../../shared/module/angular-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedAngularMaterialModule,
  ]
})
export class TemplateModule { }
