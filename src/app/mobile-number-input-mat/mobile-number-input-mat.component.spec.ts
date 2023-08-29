import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNumberInputMatComponent } from './mobile-number-input-mat.component';

describe('MobileNumberInputMatComponent', () => {
  let component: MobileNumberInputMatComponent;
  let fixture: ComponentFixture<MobileNumberInputMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNumberInputMatComponent]
    });
    fixture = TestBed.createComponent(MobileNumberInputMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
