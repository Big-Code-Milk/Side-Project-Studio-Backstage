import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AppleTemplateComponent } from './apple-template/apple-template.component';
import { SharedAngularMaterialModule } from 'src/app/shared/module/angular-material.module';
import { BaseSharedModule } from 'src/app/shared/module/base-shared.module';
import { FireStorageHelperService } from 'src/app/shared/common/fire-storage-helper/fire-storage-helper.service';
import { FooterComponent } from './apple-template/footer/footer.component';
import { HeaderComponent } from './apple-template/header/header.component';

@NgModule({
  declarations: [
    AppleTemplateComponent,
    FooterComponent,
    HeaderComponent,
  ],
  providers: [
    FireStorageHelperService,
  ],
  imports: [
    CommonModule,
    SharedAngularMaterialModule,
    BaseSharedModule,
    LayoutRoutingModule,
  ],
  exports: [
    AppleTemplateComponent,
  ]
})
export class OnStageLayoutModule { }
