import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  number: number[];

  typesOfShoes: string[] = [
    '搜集 : 把任何你需要跟蹤或者記住或者做的事情記在Allen稱之為『水桶』的地方：一個收件箱，電子郵箱，磁帶，筆記本，PDA，或者它們的組合。把你腦子裡的任何東西都拿出來放到你的搜集設備里，準備好做下一步的處理。每星期所有的水桶都應該被至少清空一次。',
    '處理 : 從最上面開始，一次處理一項，不把任何東西放回收件箱，如果任何一項需要做（如果花的時間少於兩分鐘），委託別人完成，或者將它組織到代辦事項並給予 Deadline ',
    '組織 : 定義 專案(Projects) 擬定 下一步行動 ( Next actions )，等待處理 ( Waiting for )，永遠只有 Top 5 優先',
    '檢查 : 隨時保持 Top 5 減少時隨時檢查，如果你傾向於拖延，你可能會老是做最容易的事情，避免那些難的。為了解決這個問題，你可以一個接一個地做列表上的事情，按照它們的順序，就象你處理你的收件箱一樣。',
    '做 : 依照 Top 5 做就對了'
  ];

  constructor() {
    this.number = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {
  }

}
