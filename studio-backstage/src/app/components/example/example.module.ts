import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { BaseSharedModule } from '../../shared/module/base-shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    BaseSharedModule
  ],
  exports: [

  ]
})
export class ExampleModule { }
