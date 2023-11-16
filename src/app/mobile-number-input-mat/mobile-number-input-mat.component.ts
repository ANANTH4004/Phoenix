import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from '@le2xx/ngx-intl-tel-input';

@Component({
  selector: 'app-mobile-number-input-mat',
  templateUrl: './mobile-number-input-mat.component.html',
  styleUrls: ['./mobile-number-input-mat.component.scss']
})
export class MobileNumberInputMatComponent {
separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}
}
