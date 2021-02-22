import { CommonModule, JsonPipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PrettyJsonModule } from 'angular2-prettyjson';



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
