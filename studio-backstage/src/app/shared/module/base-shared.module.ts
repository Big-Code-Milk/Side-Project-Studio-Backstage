// 參考
// dayjs 中文 https://day.js.org/docs/en/installation/typescript

import { CommonModule, JsonPipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PrettyJsonModule } from 'angular2-prettyjson';

import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/zh-tw' // import locale

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    PrettyJsonModule
  ]
})
export class BaseSharedModule {

  constructor(
  ) {
    dayjs.extend(isLeapYear) // use plugin
    dayjs.locale('zh-tw') // use locale
  }

  // 加入forRoot，這裡未來會放一些只會在app.module建立的service
  // 因為我們這個module會多次注入，如果你直接在上面寫providers(注入service)，
  // 會產生多個service實體，這不是我們要的，因此我們會把service包裝在forRoot方法中
  // 用30天深入Angular 5的世界 https://ithelp.ithome.com.tw/articles/10195338

  static forRoot(): ModuleWithProviders<BaseSharedModule> {
    return {
      ngModule: BaseSharedModule,
      providers: [
        // 放service
      ]
    };
  }

}