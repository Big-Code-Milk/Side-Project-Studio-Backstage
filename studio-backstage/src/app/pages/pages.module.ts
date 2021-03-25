import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedAngularMaterialModule } from '../shared/module/angular-material.module';
import { SignInComponent } from './account/sign-in/sign-in.component'
import { GettingThingsDoneComponent } from './getting-things-done/getting-things-done.component';

import { CollectComponent } from './getting-things-done/collect/collect.component';
import { ProcessComponent } from './getting-things-done/process/process.component';

import { BaseSharedModule } from '../shared/module/base-shared.module';
import { OrganizeComponent } from './getting-things-done/organize/organize.component'

import { InnerHtmlPipe } from '../shared/pipe/inner-html.pipe';
import { WorkComponent } from './getting-things-done/work/work.component';
import { ContentMgmtSystemComponent } from './content-mgmt-system/content-mgmt-system.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    GettingThingsDoneComponent,
    CollectComponent,
    ProcessComponent,
    OrganizeComponent,
    InnerHtmlPipe,
    WorkComponent,
    ContentMgmtSystemComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedAngularMaterialModule,
    BaseSharedModule,
  ]
})
export class PagesModule { }
