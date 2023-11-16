import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownInputAutocompleteComponent } from './dropdown-input-autocomplete.component';

describe('DropdownInputAutocompleteComponent', () => {
  let component: DropdownInputAutocompleteComponent;
  let fixture: ComponentFixture<DropdownInputAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownInputAutocompleteComponent]
    });
    fixture = TestBed.createComponent(DropdownInputAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
