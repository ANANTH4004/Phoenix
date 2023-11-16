import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataStoreComponent } from './data-store/data-store.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './Material/material.module';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DoubleDropdownComponent } from './double-dropdown/double-dropdown.component';
import { DynamicAddingComponent } from './dynamic-adding/dynamic-adding.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { MobileNumberComponent } from './mobile-number/mobile-number.component';

import {  ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IntlInputPhoneModule } from 'intl-input-phone';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { MobileNumberInputMatComponent } from './mobile-number-input-mat/mobile-number-input-mat.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxIntlTelInputModule } from '@le2xx/ngx-intl-tel-input';
//import { NgxMaskModule} from 'ngx-mask/lib/ngx-mask.module';


@NgModule({
  declarations: [
    AppComponent,
    DataStoreComponent,
    TableComponent,
    DoubleDropdownComponent,
    DynamicAddingComponent,
    GridlistComponent,
    MobileNumberComponent,
    PhoneNumberComponent,
    MobileNumberInputMatComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    IntlInputPhoneModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxIntlTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
