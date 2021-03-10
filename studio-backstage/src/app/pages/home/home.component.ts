import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  number: number[];

  constructor() {

    super();

    this.number = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {
  }

}
