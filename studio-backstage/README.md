# Front-end

## 參考

[Angular Firebase 入門與實做](https://ithelp.ithome.com.tw/m/users/20104952/ironman/1554) => 結合 firebase

[Angular 深入淺出三十天](https://ithelp.ithome.com.tw/articles/10208267?sc=rss.qu) => 基礎有實作可參考

[Angular Material完全攻略](https://ithelp.ithome.com.tw/articles/10193505) => 別人做的元件應用

[用30天深入Angular 5的世界](https://ithelp.ithome.com.tw/users/20107113/ironman/1240)

[Angular 大師之路](https://ithelp.ithome.com.tw/users/20020617/ironman/1630) => 更細節的內容

[打通 RxJS 任督二脈](https://ithelp.ithome.com.tw/users/20020617/ironman/2959) => 更更細節的內容

[高效 Coding 術：Angular Schematics 實戰三十天](https://ithelp.ithome.com.tw/users/20090728/ironman/2149) => 更更更細節的內容

[material.io](https://material.io/resources/icons/) => 參考

---

* 說明：有 ctrl 為快捷鍵 / 無則是指令

## 終端機指令&快捷鍵

`ctrl + ~` 開啟終端機

`ctrl + c` 終止程序

`cls` 清除屏幕上的所有显示

`cd 位址` 移動終端機至該位址執行

## Node 相關應用

[開發環境安裝](https://ithelp.ithome.com.tw/articles/10238321) 待補 Dock 方式搞定開發環境

[NPM、NVM 簡介](https://ithelp.ithome.com.tw/articles/10230877)

安裝 [nvm for windows](https://github.com/coreybutler/nvm-windows/releases) 或用其他方法安裝

`nvm` 查詢 nvm 版本與相關指令

~~`nvm ls-remote` 察看可用的 node 版本~~

1.1.7 window nvm 版本沒提供這個指令，所以需要到官網去找最新的 [lts (Long-term support)](https://zh.wikipedia.org/wiki/%E9%95%B7%E6%9C%9F%E6%94%AF%E6%8F%B4) 版本...

`nvm install 版本號` 安裝指定版本的 nodejs

`nvm ls` 查詢當前安裝了哪些 nodejs 版本

`nvm use 版本號` 使用該 nodejs 版本

`node -v` 查詢當前使用的 nodejs 版本

`npm install npm -g` 更新 npm

[npm 更新錯誤處理](https://dotblogs.com.tw/explooosion/2018/04/25/035943)

[npm 指令](https://dca.gitbooks.io/nodejs-tw-wiki-book/content/book/node_npm/node_npm.html)

[npm 常用指令](http://dreamerslab.com/blog/tw/npm-basic-commands/)

[Node 詳解](https://titangene.github.io/article/nvm.html)

## Angular 相關指令

1. 安裝 [Will 保哥的 VSCode AG 延伸模組](https://marketplace.visualstudio.com/items?itemName=doggy8088.angular-extension-pack)，開發上會比較舒服，
   安裝保哥套件後不一定要用 cli 指令，也可以右鍵新增 Component

2. `npm install -g @angular/cli` 安裝全域 AG cli

3. `ng new 專案名稱 --routing` 新增一個包含前端 router 的專案

   [新增專案基礎](https://www.cnblogs.com/fz17/p/14065521.html)

4. 新增 `.gitignore` 排除不需要版控的檔案 搜尋 `angular gitignore`

5. 待補 eslint github 星星比較多但改過去太麻煩了，日後再研究一下差異

6. 參考 PrimeNG 專案的架構與 [TrilonIO](https://github.com/TrilonIO/aspnetcore-angular-universal) ，開資料夾備用

7. 前端 Router 設定，參考 [AG 深入淺出](https://ithelp.ithome.com.tw/users/20090728/ironman/1600)，感覺這蠻好的，最後還拿六腳電商網來用 AG 套版，感覺可以給劉愷熟悉下。

   設定半天想把 Components 統一到 Module 再匯入到 Router 內使用，但好像不能這樣用似乎是要用 RouterChird 來管控，

8. 新增登入頁與儀表板 Component，[命名規則參考](https://www.zhihu.com/question/20330840)

## Angular Firebase

9. Auth 新增完後，先接續 firebase 套件，設定部分就不詳紀錄了，需要回看在參考[Firebase Side Project](https://github.com/johch3n611u/Side-Project-Firebase-to-WebDatabase)

10. `npm i -g npm-check-updates` 這個套件不太確定需不需要，先記錄著

11. 將 firebase config 加到 environment 變數中

11. `npm i @angular/fire` 安裝 firebase AG2 套件

12. 開發測試需求先記錄改為全部權限

```json
  {
  "rules": {
    ".read": "true",
    ".write": "auth != null"
  }
}
```

13. firebase module 跟 真正使用要 import 的類別是不同的

14. tsconfig.json 加入 BasePath ts compiler build 會更方便，但此處不想太複雜不取用

15. 建立 firebasehelper 共用 Service 涉及到一些 rxjs

16. `npm install angular2-prettyjson` 利用 angular2-prettyjson 讓 json 在畫面上更值觀

## Angular Material

[AG Material 完全攻略](https://ithelp.ithome.com.tw/articles/10192517)

1. `npm install --save @angular/material @angular/cdk` 在此目錄安裝 AG material

2. `npm install --save @angular/animations` 安裝 Angular Material 動畫套件 ( 需要 import )

3. `npm install --save web-animations-js` 支援其他瀏覽器的轉譯套件

   src/pollyills.ts 取消 import 'web-animations-js' 註解

4. 建立 Material 的 SharedModule 方便取用 Component

5. `npm install --save hammerjs` 安裝手勢支援套件

6. index.html 增加 Material Icons `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

---

<br><br><br><br><br><br><br><br><br><br>

## 原始 AG cli 產生的 Mackdown

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.