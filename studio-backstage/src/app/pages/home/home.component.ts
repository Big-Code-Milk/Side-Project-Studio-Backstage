import { Component, OnInit } from '@angular/core';
import { EnumComponentType } from '../../shared/enum/enum-component-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  number: number[];

  _EnumComponentType = EnumComponentType;

  constructor() {
    this.number = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {
  }

}
