import { EditorMdComponent } from './editor-md/editor-md.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedAngularMaterialModule } from '../../module/angular-material.module';

import { FireStorageHelperService } from '../../common/fire-storage-helper/fire-storage-helper.service';
import { DialogComponent } from './dialog/dialog.component';

import { BaseSharedModule } from '../../module/base-shared.module';
import { MenuComponent } from './menu/menu.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { EditorComponent } from '../../../backstage-pages/example/editor-fail/editor.component';
import { EditorMdDirective } from '../../../backstage-pages/example/editor-md-directive-fail/editor-md.directive';
import { EditorTabComponent } from './editor-tab/editor-tab.component';
import { ImageHostingTabComponent } from './image-hosting-tab/image-hosting-tab.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ImgurComponent } from './imgur/imgur.component';
import { UsefulLinksTreeComponent } from './useful-links-tree/useful-links-tree.component';
import { LinktreeMgmtComponent } from './linktree-mgmt/linktree-mgmt.component';

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
    EditorTabComponent,
    ImageHostingTabComponent,
    GetStartedComponent,
    ImgurComponent,
    UsefulLinksTreeComponent,
    LinktreeMgmtComponent,
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
    SideNavComponent,
    DialogComponent,
    MenuComponent,
    SnackBarComponent,
    EditorComponent,
    EditorMdDirective,
    EditorMdComponent,
    EditorTabComponent,
    ImageHostingTabComponent,
    GetStartedComponent,
    ImgurComponent,
    UsefulLinksTreeComponent,
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
