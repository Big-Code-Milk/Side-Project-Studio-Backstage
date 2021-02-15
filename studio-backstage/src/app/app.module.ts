import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 啟用動畫
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // 關閉動畫

import { SharedAngularMaterialModule } from './shared-angular-material/shared-angular-material.module';

import 'hammerjs'; // 手勢套件

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedAngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
