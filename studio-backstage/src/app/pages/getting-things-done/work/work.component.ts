import { Component, OnInit, Input } from '@angular/core';
import { EnumComponentType } from '../../../shared/enum/enum-component-type';
import { Router, ActivatedRoute } from '@angular/router';
import { FireStorageHelperService } from 'src/app/shared/common/fire-storage-helper/fire-storage-helper.service';
import GtdTask from 'src/app/shared/models/gtd-task';
import { BaseComponent } from 'src/app/components/base/base.component';

@Component({
  selector: 'app-work [ComponentType]',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent extends BaseComponent implements OnInit {

  @Input() ComponentType: EnumComponentType;
  @Input() Key: string;

  _GtdTask: GtdTask[] = [];

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
        this.UntreatedInit();
        break;
      case this._EnumComponentType.Processed:
        break;
      case this._EnumComponentType.Top5:
        break;
    }

  }

  UntreatedInit() {
    var _Collection = this._FireStorageHelper.GetFireCollection<GtdTask>('Task', ['MainTaskId', '==', this.Key, 'EndDate']);
    _Collection.valueChanges().subscribe(parameter => { this._GtdTask = parameter; })
  }

}
