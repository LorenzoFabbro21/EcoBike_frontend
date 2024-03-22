import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSoldDetailsComponent } from './bike-sold-details.component';

describe('BikeSoldDetailsComponent', () => {
  let component: BikeSoldDetailsComponent;
  let fixture: ComponentFixture<BikeSoldDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikeSoldDetailsComponent]
    });
    fixture = TestBed.createComponent(BikeSoldDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
