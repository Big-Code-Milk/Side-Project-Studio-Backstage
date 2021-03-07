import { Component, OnInit } from '@angular/core';
import { EnumTableType } from '../../shared/enum/enum-table-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _EnumTableType = EnumTableType;

  constructor() {

  }

  ngOnInit(): void {
  }

}
