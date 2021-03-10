import { Component, OnInit, Input } from '@angular/core';
import { EnumComponentType } from '../../../shared/enum/enum-component-type';
import { Router, ActivatedRoute } from '@angular/router';
import { FireStorageHelperService } from 'src/app/shared/common/fire-storage-helper/fire-storage-helper.service';
import GtdTask from 'src/app/shared/models/gtd-task';

@Component({
  selector: 'app-work [ComponentType]',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  @Input() ComponentType: EnumComponentType;
  @Input() Key: string;

  number: number[] = [1, 2, 3, 4, 5];

  Versions: string[] = [
    'v1 Getting Things Done',
    'v2 GTD-TodoList',
  ];

  constructor(
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _FireStorageHelper: FireStorageHelperService,
  ) {
  }

  ngOnInit(): void {
    console.log('ComponentType', this.ComponentType);
    console.log('Key', this.Key);

    var _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Task', ['MainTaskId', '=', this.Key, 'EndDate']);
    console.log(_Collection)
    // _Collection.valueChanges().subscribe(x => { console.log(x) })
  }

}
