import { Injectable } from '@angular/core';
import { FireStorageHelperService } from '../fire-storage-helper/fire-storage-helper.service';
import { SnackBarHelperService } from '../snack-bar-helper/snack-bar-helper.service';

@Injectable({
  providedIn: 'root'
})
export class TagsHelperService {

  constructor(
    private _FireStorageHelper: FireStorageHelperService,
    private _SnackBarHelper: SnackBarHelperService,
  ) { }

  ReSetTags(NewAddTags: string[]) {
    if (NewAddTags.length > 0) {
      let NewTags;
      let ResponseTags = this._FireStorageHelper.GetFireObject('SystemInfo');
      let _Subscribe: any = ResponseTags.valueChanges().subscribe((elements: any) => {
        // console.log('elements', elements);
        let JSONParse = JSON.parse(elements);
        NewTags = JSONParse.filter((element: any) => { return (NewAddTags.indexOf(element) == -1) });
        NewTags = [...NewTags, ...NewAddTags];
        console.log('NewTags', NewTags);
        _Subscribe.unsubscribe();
        ResponseTags.set(JSON.stringify(NewTags));
        this._SnackBarHelper.OpenSnackBar('操作成功!');
      });
    }
  }

  // 需要自己 JSON.parse(element)
  GetTagsSubscribe() {
    return this._FireStorageHelper.GetFireObject('SystemInfo').valueChanges();
  }
}
