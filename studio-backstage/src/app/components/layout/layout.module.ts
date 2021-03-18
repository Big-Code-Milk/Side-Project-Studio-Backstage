import { EditorMdComponent } from './editor-md/editor-md.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedAngularMaterialModule } from '../../shared/module/angular-material.module';

import { FireStorageHelperService } from '../../shared/common/fire-storage-helper/fire-storage-helper.service';
import { DialogComponent } from './dialog/dialog.component';

import { BaseSharedModule } from '../../shared/module/base-shared.module';
import { MenuComponent } from './menu/menu.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { EditorComponent } from '../example/editor-fail/editor.component';
import { EditorMdDirective } from '../example/editor-md-directive-fail/editor-md.directive';

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent,
    DialogComponent,
    MenuComponent,
    SnackBarComponent,
    EditorComponent,
    EditorMdDirective,
    EditorMdComponent,
  ],
  providers: [
    FireStorageHelperService
  ],
  imports: [
    CommonModule,
    SharedAngularMaterialModule,
    BaseSharedModule,
    LayoutRoutingModule,
  ],
  exports: [
    DashboardComponent,
    SideNavComponent
  ]
})
export class LayoutModule {
  constructor(
    @Optional() @SkipSelf() parentModule: LayoutModule
  ) {
    // 可將這段拉出去建立一個ts檔案，未來需要指注入一次的module都可以使用
    if (parentModule) {
      throw new Error(`LayoutModule 已加載 FirebaseHelperService. 確保單向資料流, 請勿再重複加載避免資料汙染.`);
    }
  }
}
