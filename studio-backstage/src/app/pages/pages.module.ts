import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedAngularMaterialModule } from '../shared/module/angular-material.module';
import { SignInComponent } from './account/pages/sign-in/sign-in.component'

import { CollectComponent } from './getting-things-done/components/collect/collect.component';
import { ProcessComponent } from './getting-things-done/components/process/process.component';

import { BaseSharedModule } from '../shared/module/base-shared.module';
import { OrganizeComponent } from './getting-things-done/components/organize/organize.component'

import { InnerHtmlPipe } from '../shared/pipe/inner-html.pipe';
import { WorkComponent } from './getting-things-done/components/work/work.component';
import { CollectThenOrganizeComponent } from './getting-things-done/pages/collect-then-organize/collect-then-organize.component';
import { ProcessThenWorkComponent } from './getting-things-done/pages/process-then-work/process-then-work.component';
import { ContentMgmtComponent } from './content-mgmt-system/pages/content-mgmt/content-mgmt.component';
import { LayoutModule } from '../components/layout/layout.module';
import { EditContentComponent } from './content-mgmt-system/pages/edit-content/edit-content.component';
import { GoalTextComponent } from './content-mgmt-system/components/goal-text/goal-text.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    CollectComponent,
    ProcessComponent,
    OrganizeComponent,
    InnerHtmlPipe,
    WorkComponent,
    CollectThenOrganizeComponent,
    ProcessThenWorkComponent,
    ContentMgmtComponent,
    EditContentComponent,
    GoalTextComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedAngularMaterialModule,
    BaseSharedModule,
    LayoutModule,
  ]
})
export class PagesModule { }
