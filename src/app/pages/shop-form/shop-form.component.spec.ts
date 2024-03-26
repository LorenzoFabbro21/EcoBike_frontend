import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFormComponent } from './shop-form.component';

describe('ShopFormComponent', () => {
  let component: ShopFormComponent;
  let fixture: ComponentFixture<ShopFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopFormComponent]
    });
    fixture = TestBed.createComponent(ShopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
