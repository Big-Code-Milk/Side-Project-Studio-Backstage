import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedAngularMaterialModule } from '../shared/module/angular-material.module';
import { SignInComponent } from './account/sign-in/sign-in.component'

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedAngularMaterialModule,
    FormsModule
  ]
})
export class PagesModule { }
