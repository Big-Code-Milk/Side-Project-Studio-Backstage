import { Component, OnInit } from '@angular/core';
import { EnumTableType } from '../../shared/enum/enum-table-type';

@Component({
  selector: 'app-getting-things-done',
  templateUrl: './getting-things-done.component.html',
  styleUrls: ['./getting-things-done.component.css']
})
export class GettingThingsDoneComponent implements OnInit {

  _EnumTableType = EnumTableType;

  constructor(

  ) {

  }

  ngOnInit(): void {

  }

}
