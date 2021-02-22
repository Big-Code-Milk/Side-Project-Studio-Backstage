import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirebaseComponent } from './angular-fire-base/angular-firebase.component';


import { BaseSharedModule } from '../../shared/module/base-shared.module';

@NgModule({
  declarations: [
    AngularFirebaseComponent
  ],
  imports: [
    CommonModule,

    BaseSharedModule
  ],
  exports: [
    AngularFirebaseComponent
  ]
})
export class DemoModule { }
