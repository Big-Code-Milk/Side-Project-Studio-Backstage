# Side-Project-Studio-Backstage

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

4. 新增 `.gitignore` 排除不需要版控的檔案 搜尋 `angular gitignore`

5. [將 tslint 改為 eslint](https://www.jianshu.com/p/cfe2d8d41e00) eslint github [星星比較多](https://stackshare.io/stackups/eslint-vs-tslint)...

## Angular Material

[AG Material 完全攻略](https://ithelp.ithome.com.tw/articles/10192517)

`npm install --save @angular/material @angular/cdk` 在此目錄安裝 AG material

[新增專案基礎](https://www.cnblogs.com/fz17/p/14065521.html)

`npm install --save @angular/animations` 安裝 Angular Material 動畫套件 ( 需要 import )

`npm install --save web-animations-js` 支援其他瀏覽器的轉譯套件

src/pollyills.ts 取消 import 'web-animations-js' 註解

建立 Material 的 SharedModule