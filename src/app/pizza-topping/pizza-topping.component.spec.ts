import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaToppingComponent } from './pizza-topping.component';

describe('PizzaToppingComponent', () => {
  let component: PizzaToppingComponent;
  let fixture: ComponentFixture<PizzaToppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaToppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaToppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
