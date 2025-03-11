import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsMultiplicationComponent } from './tjs-multiplication.component';

describe('TjsMultiplicationComponent', () => {
  let component: TjsMultiplicationComponent;
  let fixture: ComponentFixture<TjsMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TjsMultiplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TjsMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
