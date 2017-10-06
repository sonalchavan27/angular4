import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingHistoryModalComponent } from './shipping-history-modal.component';

describe('ShippingHistoryModalComponent', () => {
  let component: ShippingHistoryModalComponent;
  let fixture: ComponentFixture<ShippingHistoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingHistoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingHistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
