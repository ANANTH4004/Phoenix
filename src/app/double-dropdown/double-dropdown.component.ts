import { Component } from '@angular/core';

@Component({
  selector: 'app-double-dropdown',
  templateUrl: './double-dropdown.component.html',
  styleUrls: ['./double-dropdown.component.scss']
})
export class DoubleDropdownComponent {
  continents = ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Australia'];
  countriesByContinent = new Map<string, string[]>([
    ['Asia', ['India', 'China', 'Japan', 'South Korea']],
    ['Europe', ['Germany', 'France', 'United Kingdom', 'Italy']],
    ['North America', ['USA', 'Canada', 'Mexico']],
    ['South America', ['Brazil', 'Argentina', 'Colombia']],
    ['Africa', ['Nigeria', 'Egypt', 'South Africa']],
    ['Australia', ['Australia', 'New Zealand']]
  ]);

  selectedContinent: string = '';
  secondDropdownOptions: string[] = [];

  updateCountryOptions(continent: string) {
    this.selectedContinent = continent;
    this.secondDropdownOptions = this.countriesByContinent.get(continent) || [];
    console.log(continent);
  }
  onCountryChange(country : String){
    console.log(country);
  }
}
