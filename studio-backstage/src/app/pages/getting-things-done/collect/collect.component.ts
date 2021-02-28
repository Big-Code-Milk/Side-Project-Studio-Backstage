import { Component, OnInit } from '@angular/core';
import GtdTask from '../../../shared/models/gtd-task'

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.css']
})
export class CollectComponent implements OnInit {

  GtdTasks: GtdTask = new GtdTask();


  constructor() { }

  ngOnInit(): void {
  }

}
