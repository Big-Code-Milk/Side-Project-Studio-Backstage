import { Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {

  dataSource: MatTableDataSource<GtdTask>;
  GtdTasks = [] as GtdTask[];
  displayedColumns: string[] = ['Status', 'Name', 'Tags', 'SubTitle', 'StartDate', 'StartDate', 'Templet', 'Summary', 'Tool'];

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

  DataInit() {
    // console.log('InitData');

    let Query: any = [];

    // switch (this.ComponentType) {
    //   case this._EnumComponentType.Untreated:
    //     Query = ['草稿'];
    //     break;
    //   case this._EnumComponentType.Processed:
    //     Query = ['發佈'];
    //     break;
    //   default:
    //     console.log(`沒有此 Tag 的表單 ${this.ComponentType}.`);
    // }

    var _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Article', ['Status', 'in', ['草稿'], 'EndDate']);

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
}
