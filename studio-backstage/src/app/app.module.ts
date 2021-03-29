// 參考
// window 物件 https://stackoverflow.com/questions/34177221/how-to-inject-window-into-a-service

import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 啟用動畫
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // 關閉動畫

import 'hammerjs'; // 手勢套件

import { LayoutModule } from './shared/components/layout/layout.module';
import { PagesModule } from './backstage-pages/pages.module';

import { AngularFireModule } from '@angular/fire'; // Firebase 套件
import { SharedAngularFireModule } from './shared/module/angular-fire.module';

import { BaseSharedModule } from './shared/module/base-shared.module';
import { ExampleModule } from './backstage-pages/example/example.module';

import { ErrorLogHandler } from '../app/shared/common/error-log-handler/error-log-hanler';
import { SharedService } from './shared/services/shared.service';
import { TemplateModule } from './backstage-pages/template/template.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BaseSharedModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    SharedAngularFireModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    PagesModule,
    ExampleModule,
    TemplateModule,
    HttpClientModule,
  ],
  providers: [
    { provide: ErrorLogHandler, useFactory: ErrorLogHandler },
    SharedService,
    HttpClientModule,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
