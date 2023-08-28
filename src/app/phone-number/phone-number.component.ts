import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { Subscription } from 'rxjs';
import { CountryService } from '../Services/country.service';


export interface ICountry {
	name?: string;
	code?: string;
}
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent {

  selectedCountry: any = 'US';
  selectedPhoneNumber: any;
  countries!: ICountry[];
	register!: FormGroup;
  subscription!: Subscription;

  constructor(private fb: FormBuilder, private appService: CountryService){}

  ngOnInit(): void {
    this.fetchCountryList();
    this.initForm();
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  private fetchCountryList(): void {
    this.subscription = this.appService.getCountries().subscribe((res : any) => {
			this.countries = res;
		}, error => error);
  }

  private initForm(): void{
    this.register = this.fb.group({
			phone: ['', [Validators.required, this._validatePhoneNumberInput.bind(this)]]
		});
  }

  _validatePhoneNumberInput(c: AbstractControl){
    let inputValue: string = c.value.toString();
    let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
    if(phoneNumber){
      if(phoneNumber.isValid()){
        return null;
      } else {
        return {
          phoneNumber: {
            valid: false
          }
        }
      }
    } else {
      return {
        phoneNumber: {
          valid: false
        }
      }
    }
	}

  resetPhoneNumber(event: any): void {
		this.register.controls['phone'].setValue('');
	}

  formatPhoneNumber(event: any): void {
		let inputValue: any = this.register.controls['phone'].value;
		let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
		if(phoneNumber){
			this.selectedPhoneNumber = phoneNumber.number;
			this.register.controls['phone'].setValue(phoneNumber.formatInternational());
      console.log(this.register.controls['phone'].setValue(phoneNumber.formatInternational()))
		}
	}
}
