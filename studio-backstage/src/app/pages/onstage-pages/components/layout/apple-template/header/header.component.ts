import { Component, Input, OnInit } from '@angular/core';
import { TagsHelperService } from 'src/app/shared/common/tags-helper/tags-helper.service';

@Component({
  selector: 'app-header [RandomColor]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() RandomColor: string;

  constructor(
    private _TagsHelper: TagsHelperService,
  ) { }

  ngOnInit(): void {
    this.TagsInit();
  }

  allTags: any;

  TagsInit() {
    var Subscribe = this._TagsHelper.GetTagsSubscribe().subscribe((x: any) => {
      this.allTags = JSON.parse(x);
      Subscribe.unsubscribe();
    });
  }

  IsSearchOpend: boolean = false;
}
