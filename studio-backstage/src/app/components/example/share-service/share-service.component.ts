import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

// 參考
// 參數 @Input required https://stackoverflow.com/questions/35528395/make-directive-input-required

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
    // 取得參數
    // this._ActivatedRoute.queryParams.subscribe((queryParams: any) => {
    //   console.log('a', queryParams);
    // });

    // let b = this._ActivatedRoute.snapshot.queryParams['key'];
    // console.log('b', b);

    // let c = this._Router.params['key'];
    // console.log('c', b);

    // let d = this._ActivatedRoute.snapshot.params['key']; // 結果只有這種方法有撈到 ...
    // console.log('d', d);
  }

  bbtt() {
    this._SharedService.SetShareData(this._TestData);
  }
}
