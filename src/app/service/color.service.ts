import { Injectable } from '@angular/core';
import { Color } from 'src/Classes & Interface/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  getColors() : Color[]{
    return [
    {code:"C1" , name :"Black"},
    {code:"C2" , name :"Red"},
    {code:"C3" , name :"Blue"},
    {code:"C4" , name :"Purple"},
    {code:"C5" , name :"Pink"},
    ]
  }
}
