import { Component,Input,NgZone  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
interface ContinentData {
  countries: {
    [key: string]: string[];
  };
}
@Component({
  selector: 'app-dynamic-adding',
  templateUrl: './dynamic-adding.component.html',
  styleUrls: ['./dynamic-adding.component.scss']
})
export class DynamicAddingComponent {
  // constructor(private ngZone: NgZone) {}
  // componentName: string = '';
  // subcomponentName: string = '';
  // componentList: { name: string, subcomponents: string[] }[] = [];

  // addComponent() {
  //   this.componentList.push({ name: this.componentName, subcomponents: [] });
  //   this.componentName = ''; // Clear the input
  // }

  // addSubcomponent() {
  //   if (this.componentList.length > 0) {
  //     this.componentList[this.componentList.length - 1].subcomponents.push(this.subcomponentName);

  //     this.subcomponentName = ''; // Clear the input

  //   }
  //   console.log(this.componentList[0])
  // }
  data = [
    { name: 'nithya', subcomponents: ['kamala', 'kannan', 'jamal'] },
    { name: 'john', subcomponents: ['emma', 'michael', 'olivia'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}




















