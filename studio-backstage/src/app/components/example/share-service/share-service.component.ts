import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-share-service',
  templateUrl: './share-service.component.html',
  styleUrls: ['./share-service.component.css']
})
export class ShareServiceComponent implements OnInit {

  _TestData: any = "";
  _ShareDate: any;

  constructor(
    private _SharedService: SharedService
  ) {
    this._SharedService.SharedData.subscribe(x => {
      console.log('x', x);
      this._ShareDate = x;
    });
  }

  ngOnInit(): void {
  }

  bbtt() {
    this._SharedService.SetShareData(this._TestData);
  }
}
