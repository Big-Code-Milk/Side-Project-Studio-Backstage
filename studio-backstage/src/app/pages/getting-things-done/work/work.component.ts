import { Component, OnInit, Input } from '@angular/core';
import { EnumComponentType } from '../../../shared/enum/enum-component-type';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  @Input() ComponentType: EnumComponentType;

  number: number[];

  Versions: string[] = [
    'v1 Getting Things Done',
    'v2 GTD-TodoList',
  ];

  constructor() {
    this.number = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {
  }

}
