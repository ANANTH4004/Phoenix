import { Component, OnInit } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { Color } from 'src/Classes & Interface/color';
import { ColorService } from '../service/color.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-input-autocomplete',
  templateUrl: './dropdown-input-autocomplete.component.html',
  styleUrls: ['./dropdown-input-autocomplete.component.scss']
})
export class DropdownInputAutocompleteComponent implements OnInit{
  ///
  colorarray = ['Red', 'Green', 'Yellow']
  filteroptions!: Observable<string[]>
  ///
  formcontrol = new FormControl('');
  colorarraylist!: Color[];
  filteroptionslist!: Observable<Color[]>;
  constructor(private colorService : ColorService){
    this.colorarraylist = colorService.getColors();
  }
  ngOnInit(): void {
///
    this.filteroptions = this.formcontrol.valueChanges.pipe(
      startWith(''), map(value => this._FILTER(value || ''))
    )

///

    // this.filteroptionslist = this.formcontrol.valueChanges.pipe(
    //   startWith(''), map(value => this._LISTFILTER(value || ''))
    // )
  }
  private _FILTER(value: string): string[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarray.filter(option => option.toLocaleLowerCase().includes(searchvalue));
  }
  private _LISTFILTER(value: string): Color[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarraylist.filter(option => option.name.toLocaleLowerCase().includes(searchvalue) ||
    option.code.toLocaleLowerCase().includes(searchvalue));
  }

}
