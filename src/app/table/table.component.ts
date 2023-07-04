import { Component ,ViewChild,AfterViewInit, OnInit } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { User } from 'src/Classes & Interface/User';
import { TableService } from '../Services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit{
addRows(event:any) {
  this.clickedRow.add(event.target.value);
}
  displayedColumns: string[] = ['userId', 'firstName', 'lastName', 'phoneNumber', 'emailAddress'];
  dataSource = new MatTableDataSource<User>();
  //paginator declaration
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  clickedRow = new Set<User>();
  constructor(private table : TableService){

  }
  ngOnInit(): void {
    this.table.getAllEmployee().subscribe(data =>{
      this.dataSource.data = data;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log(this.clickedRow);
  }

}
