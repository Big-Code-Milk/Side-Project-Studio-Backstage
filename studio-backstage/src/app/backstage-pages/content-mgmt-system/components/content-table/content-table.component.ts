import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogHelperService } from 'src/app/shared/common/dialog-helper/dialog-helper.service';
import { FireStorageHelperService } from 'src/app/shared/common/fire-storage-helper/fire-storage-helper.service';
import { SnackBarHelperService } from 'src/app/shared/common/snack-bar-helper/snack-bar-helper.service';
import GtdTask from 'src/app/shared/models/gtd-task';
import { map, startWith } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialogConfig } from '@angular/material/dialog';
import { EnumComponentType } from 'src/app/shared/enum/enum-component-type';

@Component({
  selector: 'app-content-table [ComponentType]',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {

  dataSource: MatTableDataSource<GtdTask>;
  GtdTasks = [] as GtdTask[];
  displayedColumns: string[] = ['Status', 'Name', 'Tags', 'SubTitle', 'StartDate', 'StartDate', 'Templet', 'Summary', 'Tool'];
  _EnumComponentType = EnumComponentType;

  constructor(
    private _FireStorageHelper: FireStorageHelperService,
    private _DialogHelper: DialogHelperService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _SnackBarHelper: SnackBarHelperService,
  ) { }

  ngOnInit(): void {
    this.DataInit();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() ComponentType: EnumComponentType;

  DataInit() {
    // console.log('InitData');

    let Query: any = [];

    switch (this.ComponentType) {
      case this._EnumComponentType.Draft:
        Query = ['草稿'];
        break;
      case this._EnumComponentType.Publish:
        Query = ['發佈'];
        break;
      default:
        console.log(`沒有此 Tag 的表單 ${this.ComponentType}.`);
    }

    var _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Article', ['Status', 'in', Query, 'EndDate']);

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

  _MatDialogConfig: MatDialogConfig = {} as MatDialogConfig;

  Delete(TaskId: string) {

    if (!confirm('確定要刪除此 Article ?')) {
      return;
    }

    let _Document = this._FireStorageHelper.GetFireDocument<GtdTask>('Article/' + TaskId);
    _Document.delete().catch(error => {
      this._MatDialogConfig.data = error;
      this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
    }).then(success => {
      // this._MatDialogConfig.data = "success";
      // this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
      this._SnackBarHelper.OpenSnackBar('操作成功!');
    });
  }

  Publish(TaskId: string, GtdTask: any) {
    if (!confirm('確定要發佈此 Article ' + TaskId + '?')) {
      return;
    }
    // https://cythilya.github.io/2017/05/08/javascript-find-item-in-an-array/
    // tag = this.Tags.filter(function (Tag) { return Tag != "未處理" });
    var _Document = this._FireStorageHelper.GetFireDocument('Article/' + TaskId);
    GtdTask.Status = '發佈';
    let JSONString = JSON.stringify(GtdTask);
    let Obj = JSON.parse(JSONString);
    _Document.update(Obj).catch(error => {
      this._MatDialogConfig.data = error;
      this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
    }).then(success => {
      // this._MatDialogConfig.data = "success";
      // this._DialogHelper.ShowMessage<string>(this._MatDialogConfig);
      this._SnackBarHelper.OpenSnackBar('操作成功!');
    });
  }

  Edit(TaskId: string) {
    this._Router.navigate(['dashboard/pages/editcontent', { key: TaskId }]);
  }
}