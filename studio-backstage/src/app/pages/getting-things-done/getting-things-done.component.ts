import { Component, OnInit } from '@angular/core';
import { EnumComponentType } from '../../shared/enum/enum-component-type';

@Component({
  selector: 'app-getting-things-done',
  templateUrl: './getting-things-done.component.html',
  styleUrls: ['./getting-things-done.component.css']
})
export class GettingThingsDoneComponent implements OnInit {

  _EnumComponentType = EnumComponentType;

  constructor(

  ) {

  }

  ngOnInit(): void {

  }

}
