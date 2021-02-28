import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedAngularMaterialModule } from '../shared/module/angular-material.module';
import { SignInComponent } from './account/sign-in/sign-in.component'

import { FormsModule } from '@angular/forms';
import { GettingThingsDoneComponent } from './getting-things-done/getting-things-done.component';
import { MatTableModule } from '@angular/material/table';
import { CollectComponent } from './getting-things-done/collect/collect.component';
import { ProcessComponent } from './getting-things-done/process/process.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    GettingThingsDoneComponent,
    CollectComponent,
    ProcessComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedAngularMaterialModule,
    FormsModule,
    MatTableModule,
  ]
})
export class PagesModule { }
