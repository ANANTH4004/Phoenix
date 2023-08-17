import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleDropdownComponent } from './double-dropdown.component';

describe('DoubleDropdownComponent', () => {
  let component: DoubleDropdownComponent;
  let fixture: ComponentFixture<DoubleDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleDropdownComponent]
    });
    fixture = TestBed.createComponent(DoubleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
