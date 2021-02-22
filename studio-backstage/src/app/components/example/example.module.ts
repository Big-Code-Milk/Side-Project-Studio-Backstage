import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { BaseSharedModule } from '../../shared/module/base-shared.module';

import { AngularFirebaseComponent } from './angular-fire-base/angular-firebase.component';

@NgModule({
  declarations: [
    AngularFirebaseComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    BaseSharedModule
  ],
  exports: [
    AngularFirebaseComponent
  ]
})
export class ExampleModule { }
