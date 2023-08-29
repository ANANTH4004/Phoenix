import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoubleDropdownComponent } from './double-dropdown/double-dropdown.component';
import { DynamicAddingComponent } from './dynamic-adding/dynamic-adding.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { MobileNumberComponent } from './mobile-number/mobile-number.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { MobileNumberInputMatComponent } from './mobile-number-input-mat/mobile-number-input-mat.component';

const routes: Routes = [
  {path: "" , component: MobileNumberInputMatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
