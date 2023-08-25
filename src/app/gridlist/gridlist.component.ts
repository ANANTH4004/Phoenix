import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.scss']
})
export class GridlistComponent {
  constructor(private cdr: ChangeDetectorRef) { }
  newName: string = '';
  newValue: string = '';
  showInput1: boolean = true;
  showInput2: boolean = false;

  tempValues: string[] = []; // Temporary array for values
  collections: { name: string, values: string[] }[] = [
    {
      name: 'Collection 1',
      values: ['Value 1', 'Value 2', 'Value 3']
    },
    {
      name: 'Collection 2',
      values: ['Value A', 'Value B' , 'value c','Value A', 'Value B' , 'value c','Value A', 'Value B' , 'value c']
    },
    {
      name: 'Collection 1',
      values: ['Value 1', 'Value 2', 'Value 3']
    },
    {
      name: 'Collection 2',
      values: ['Value A', 'Value B' , 'value c']
    },
    {
      name: 'Collection 2',
      values: ['Value A', 'Value B' , 'value c']
    },
    // ... more collections
  ];

  onButton1Click() {
    this.showInput1 = false;
    this.showInput2 = true;
  }

  onAddValueClick() {
    if (this.newValue.trim() !== '') {
      const collection = this.collections.find(c => c.name === this.newName);
      if (collection) {
        collection.values.push(this.newValue);
        collection.values = [...collection.values];
        this.newValue = '';
        this.cdr.detectChanges();
      } else {
        this.collections.push({ name: this.newName, values: [this.newValue] });
      }

      console.log(this.collections);
      this.newValue = '';
      
    }
  }
}
