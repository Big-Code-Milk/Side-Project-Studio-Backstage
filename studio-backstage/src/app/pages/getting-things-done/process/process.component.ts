import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import GtdTask from '../../../shared/models/gtd-task';
import { FireStorageHelperService } from '../../../shared/common/fire-storage-helper/fire-storage-helper.service';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { map, startWith } from 'rxjs/operators';

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements AfterViewInit, OnInit {

  GtdTasks = [] as GtdTask[];

  displayedColumns: string[] = ['Name', 'Content', 'StartDate', 'EndDate', 'Tags', 'tool'];
  dataSource: MatTableDataSource<GtdTask>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _FireStorageHelper: FireStorageHelperService
  ) {

    let _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Task');
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

    Data.subscribe(ReturnData => {
      this.GtdTasks = ReturnData;
      // init datatable
      this.dataSource = new MatTableDataSource(this.GtdTasks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.GtdTasks);
    });

  }

  ngAfterViewInit() {
    // demo 在此生命週期設定 datatable 轉到資料取回時
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  Process(Id: string) {
    alert(Id);
  }
  Delete(Id: string) {
    alert(Id);
  }
}
