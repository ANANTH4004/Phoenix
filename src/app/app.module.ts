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


@NgModule({
  declarations: [
    AppComponent,
    DataStoreComponent,
    TableComponent,
    DoubleDropdownComponent,
    DynamicAddingComponent,
    GridlistComponent,
    MobileNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
