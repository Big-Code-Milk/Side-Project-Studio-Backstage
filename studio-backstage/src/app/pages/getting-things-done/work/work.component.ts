import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

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
