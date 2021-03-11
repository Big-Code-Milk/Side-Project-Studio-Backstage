import { Component, OnInit, Input } from '@angular/core';
import { EnumComponentType } from '../../../shared/enum/enum-component-type';
import { Router, ActivatedRoute } from '@angular/router';
import { FireStorageHelperService } from 'src/app/shared/common/fire-storage-helper/fire-storage-helper.service';
import GtdTask from 'src/app/shared/models/gtd-task';
import { BaseComponent } from 'src/app/components/base/base.component';
import { AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-work [ComponentType]',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent extends BaseComponent implements OnInit {

  @Input() ComponentType: EnumComponentType;
  @Input() Key: string;

  _GtdTask: any[] = [];
  IsWork: boolean = false;

  constructor(
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _FireStorageHelper: FireStorageHelperService,
  ) {
    super();
  }

  ngOnInit(): void {
    // console.log('ComponentType', this.ComponentType);
    // console.log('Key', this.Key);

    switch (this.ComponentType) {
      case this._EnumComponentType.Untreated:
      case this._EnumComponentType.Processed:
        this.UntreatedInit();
        break;
      case this._EnumComponentType.Top5:
        this.Top5Init();
        break;
    }

  }

  UntreatedInit() {
    var _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Task', ['MainTaskId', '==', this.Key, 'EndDate']);
    // _Collection.valueChanges().subscribe(parameter => { this._GtdTask = parameter; });
    this.DataInin(_Collection);
  }

  Top5Init() {
    console.log('Top5Init');
    var _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Task', ['Status', 'in', ['Top1', 'Top2', 'Top3', 'Top4', 'Top5'], 'EndDate']);
    // _Collection.valueChanges().subscribe(parameter => { this._GtdTask = parameter; });
    this.DataInin(_Collection);
    this.IsWork = true;
  }

  Forwarding(TaskId: string) {
    alert('TaskId: ' + TaskId);
    this._Router.navigate(['dashboard/pages/organize', { key: TaskId, ComponentType: this._EnumComponentType.Processed }]);
  }

  DataInin(_Collection: AngularFirestoreCollection<GtdTask>) {
    // console.log('DataInin');
    var Data = _Collection.snapshotChanges().pipe(map((actions: DocumentChangeAction<GtdTask>[]) => {
      return actions.map(a => {
        const data = a.payload.doc.data() as GtdTask;
        const id = a.payload.doc.id;
        console.log('id', id, 'data', data);
        return { id, ...data };
      });
    })
    );
    // console.log('Data', Data);
    Data.subscribe(parameter => {
      console.log('parameter', parameter);
      this._GtdTask = parameter;
    });
  }
}
