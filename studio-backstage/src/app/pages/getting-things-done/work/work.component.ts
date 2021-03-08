import { Component, OnInit, Input } from '@angular/core';
import { EnumComponentType } from '../../../shared/enum/enum-component-type';
import { Router, ActivatedRoute } from '@angular/router';

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
  ) {
  }

  ngOnInit(): void {
  }

}
