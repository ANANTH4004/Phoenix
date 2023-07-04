import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/Classes & Interface/User';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http : HttpClient) { }
  getAllEmployee(){
    return this.http.get<User[]>('/assets/Json/user.json');
  }
}
