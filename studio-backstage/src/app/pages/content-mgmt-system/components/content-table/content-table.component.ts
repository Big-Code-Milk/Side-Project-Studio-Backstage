import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import GtdTask from 'src/app/shared/models/gtd-task';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {

  dataSource: MatTableDataSource<GtdTask>;
  displayedColumns: string[] = ['Status', 'Price', 'Name', 'Content', 'StartDate', 'EndDate', 'Tags', 'Tool'];

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
