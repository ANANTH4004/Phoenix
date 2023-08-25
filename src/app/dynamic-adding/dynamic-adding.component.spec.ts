import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAddingComponent } from './dynamic-adding.component';

describe('DynamicAddingComponent', () => {
  let component: DynamicAddingComponent;
  let fixture: ComponentFixture<DynamicAddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicAddingComponent]
    });
    fixture = TestBed.createComponent(DynamicAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
