import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { DialogHelperService } from 'src/app/shared/common/dialog-helper/dialog-helper.service';
import { FireStorageHelperService } from 'src/app/shared/common/fire-storage-helper/fire-storage-helper.service';
import { SnackBarHelperService } from 'src/app/shared/common/snack-bar-helper/snack-bar-helper.service';
import GtdTask from 'src/app/shared/models/gtd-task';

@Component({
  selector: 'app-article-catalog',
  templateUrl: './article-catalog.component.html',
  styleUrls: ['./article-catalog.component.css']
})
export class ArticleCatalogComponent implements OnInit {

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

  GtdTasks = [] as GtdTask[];

  DataInit() {
    var _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Article', ['Status', 'in', ['發佈'], 'StartDate']);

    let Data = _Collection.snapshotChanges().pipe(map((actions: DocumentChangeAction<GtdTask>[]) => {
      return actions.map(a => {
        const data = a.payload.doc.data() as GtdTask;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
    );

    var _Subscribe = Data.subscribe(ReturnData => {
      _Subscribe.unsubscribe();
      this.GtdTasks = ReturnData;
      // init datatable
      let dataSource = new MatTableDataSource(this.GtdTasks);
      // https://stackoverflow.com/questions/54367152/how-to-add-mat-paginator-for-mat-cards
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      // 目前這個都會幾筆資料就跑幾次... 效能異常...
      console.log(this.GtdTasks);
    });
  }
}
