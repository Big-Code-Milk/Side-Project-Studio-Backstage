// 參考
// 路由帶參數 https://ithelp.ithome.com.tw/articles/10209035
// typescript 可選參數 https://ithelp.ithome.com.tw/articles/10220016

import { BaseComponent } from '../../../components/base/base.component';
import { Component, OnInit, Input } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import GtdTask from '../../../shared/models/gtd-task';
import { FireStorageHelperService } from '../../../shared/common/fire-storage-helper/fire-storage-helper.service';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { map, startWith } from 'rxjs/operators';
import { DialogHelperService } from '../../../shared/common/dialog-helper/dialog-helper.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { EnumComponentType } from '../../../shared/enum/enum-component-type';
import { SnackBarHelperService } from 'src/app/shared/common/snack-bar-helper/snack-bar-helper.service';

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }

@Component({
  selector: 'app-process [ComponentType]',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent extends BaseComponent implements AfterViewInit, OnInit {

  number: string[] = ['one', 'two', '3', '4', '5'];

  _EnumComponentType = EnumComponentType;
  @Input() ComponentType: EnumComponentType;

  GtdTasks = [] as GtdTask[];

  displayedColumns: string[] = ['Name', 'Content', 'StartDate', 'EndDate', 'Tags', 'Status', 'Tool'];
  dataSource: MatTableDataSource<GtdTask>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _FireStorageHelper: FireStorageHelperService,
    private _DialogHelper: DialogHelperService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _SnackBarHelper: SnackBarHelperService,
  ) {

    super(); // 繼承基底 BaseComponent 方便可以寫一些共用內容 import

  }

  ngAfterViewInit() {
    // demo 在此生命週期設定 datatable 轉到資料取回時
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    // @Input 必須在這個生命週期才會傳入
    // console.log('ComponentType', this.ComponentType);

    this.InitTitle();
    this.InitData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  Process(TaskId: string) {
    this._Router.navigate(['dashboard/pages/organize', { key: TaskId, ComponentType: this.ComponentType }]);
  }

  _MatDialogConfig: MatDialogConfig = {} as MatDialogConfig;

  Delete(TaskId: string) {

    if (!confirm('確定要刪除此 Task ?')) {
      return;
    }

    let _Document = this._FireStorageHelper.GetFireDocument<GtdTask>('Task/' + TaskId);
    _Document.delete().catch(error => {
      this._MatDialogConfig.data = error;
      this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
    }).then(success => {
      // this._MatDialogConfig.data = "success";
      // this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
      this._SnackBarHelper.OpenSnackBar('Success');
    });
  }

  InitData() {

    console.log('InitData');

    let Query: any = [];

    switch (this.ComponentType) {
      case this._EnumComponentType.Untreated:
        Query = ['未處理'];
        break;
      case this._EnumComponentType.Processed:
        Query = ['已處理'];
        break;
      default:
        console.log(`沒有此 Tag 的表單 ${this.ComponentType}.`);
    }

    var _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Task', ['Tags', 'array-contains-any', Query, 'EndDate']);

    // 涉及 Rxjs 到時再研究，這段主要是由 snapshotChanges 這個服務取得 key 與 資料
    let Data = _Collection.snapshotChanges().pipe(map((actions: DocumentChangeAction<GtdTask>[]) => {
      return actions.map(a => {
        const data = a.payload.doc.data() as GtdTask;
        const id = a.payload.doc.id;
        // 值得注意的是底下 ... es6 語法只能複製一層 obj ，無法複製 obj 內的 obj，可能到時要改
        return { id, ...data };
      });
    })
    );

    // order by firebase https://stackoverflow.com/questions/45357920/sorting-in-descending-order-in-firebase-database
    // https://firebase.google.com/docs/firestore/query-data/order-limit-data

    Data.subscribe(ReturnData => {
      this.GtdTasks = ReturnData;
      // init datatable
      this.dataSource = new MatTableDataSource(this.GtdTasks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // 目前這個都會幾筆資料就跑幾次... 效能異常...
      // console.log(this.GtdTasks);
    });
  }

  MainTitle: string;
  SubTitle: string;
  ProcessBtn: string;

  InitTitle() {
    switch (this.ComponentType) {
      case this._EnumComponentType.Untreated:
        this.MainTitle = '處理';
        this.SubTitle = '從最上面開始，一次處理一項，不把任何東西放回收件箱，如果任何一項需要做（如果花的時間少於兩分鐘），委託別人完成，或者將它組織到代辦事項並給予 Deadline。';
        this.ProcessBtn = '處理';
        break;
      case this._EnumComponentType.Processed:
        this.MainTitle = '檢查';
        this.SubTitle = '隨時保持 Top 5 減少時隨時補上，避免拖延與只做容易的，請按照順序地做列表上的事情。';
        this.ProcessBtn = '詳細';
        break;
      default:
        console.log(`沒有此 Tag 的表單 ${this.ComponentType}.`);
    }
  }

  // 搞半天程式碼超醜，必須要研讀 Rxjs 來大改一番 https://yuugou727.github.io/blog/2019/06/22/when-to-unsubscribe/
  // https://blog.bitsrc.io/6-ways-to-unsubscribe-from-observables-in-angular-ab912819a78f
  async Kanban(TopNum: string, NewTopId: string) {

    if (TopNum == "one") {
      TopNum = "1"
    } else if (TopNum == "two") {
      TopNum = "2"
    }
    TopNum = "Top" + TopNum;
    // console.log('TopNum', TopNum);
    // 將原本狀態為5的拿掉

    var _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Task', ['Status', '==', TopNum, 'EndDate']);
    // console.log(_Collection);
    // 取 id 的方式非常奇怪，改天再研究
    var Data = _Collection.snapshotChanges().pipe(map((actions: DocumentChangeAction<GtdTask>[]) => {
      return actions.map(a => {
        const data = a.payload.doc.data() as GtdTask;
        const id = a.payload.doc.id;
        // console.log('a', a);
        return { id, ...data };
      });
    })
    );
    var Subscriber = Data.subscribe(parameter => {
      // console.log('parameter', parameter);
      parameter.forEach((element: any) => {
        var _Document = this._FireStorageHelper.GetFireDocument('Task/' + element.id);
        _Document.update({ Status: "" }).finally(() => {
          // console.log('finall',);
          this.Wait(Subscriber, TopNum, NewTopId);
        });
      });
      this.Wait(Subscriber, TopNum, NewTopId);
    });

  }

  Wait(Subscriber: any, TopNum: string, NewTopId: string) {
    Subscriber.unsubscribe();
    console.log('unsubscribe');
    var _NewTopDoc = this._FireStorageHelper.GetFireDocument('Task/' + NewTopId);
    _NewTopDoc.update({ Status: TopNum });
  }

  Archive(TaskId: string, GtdTask: any) {
    if (!confirm('確定要封存此 Task ' + TaskId + '?')) {
      return;
    }
    // https://cythilya.github.io/2017/05/08/javascript-find-item-in-an-array/
    // tag = this.Tags.filter(function (Tag) { return Tag != "未處理" });
    var _Document = this._FireStorageHelper.GetFireDocument('Task/' + TaskId);
    GtdTask.Tags = GtdTask.Tags.filter(function (Tag: any) { return (Tag != "已處理") && (Tag != "未處理") });
    GtdTask.Tags.push('已封存');
    let JSONString = JSON.stringify(GtdTask);
    let Obj = JSON.parse(JSONString);
    _Document.update(Obj).catch(error => {
      this._MatDialogConfig.data = error;
      this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
    }).then(success => {
      // this._MatDialogConfig.data = "success";
      // this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
      this._SnackBarHelper.OpenSnackBar('Success');
    });
  }
}
