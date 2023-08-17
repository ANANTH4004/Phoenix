import { Component ,ViewChild,AfterViewInit, OnInit } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { User } from 'src/Classes & Interface/User';
import { TableService } from '../Services/table.service';
import { MatSort } from '@angular/material/sort';
import { filter } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit{

  nameSearch !:string;

  displayedColumns: string[] = ['userId', 'firstName', 'lastName', 'phoneNumber', 'emailAddress'];
  dataSource = new MatTableDataSource<User>();
  //paginator declaration
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  //adding MatSort
  @ViewChild(MatSort) matsort !: MatSort;

  clickedRow = new Set<User>();
  constructor(private table : TableService){

  }
  ngOnInit(): void {
    this.table.getAllEmployee().subscribe(data =>{
      this.dataSource.data = data;
      this.dataSource.sort = this.matsort;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
   
    console.log(this.clickedRow);
  }
  //adding rows won't work either
  addRows(event:any) {
    this.clickedRow.add(event.target.value);
  }

  //Search Code
  searchByName(){
    this.dataSource.filterPredicate = (data,filter)=>{
      const firstName = data.firstName.toLowerCase();
      const filterValue = filter.toLowerCase();
      return firstName.startsWith(filterValue);
    }
    this.dataSource.filter = this.nameSearch.trim();
    //this.dataSource.sort = this.matsort;
  }
}
