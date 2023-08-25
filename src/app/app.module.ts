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


@NgModule({
  declarations: [
    AppComponent,
    DataStoreComponent,
    TableComponent,
    DoubleDropdownComponent,
    DynamicAddingComponent
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
