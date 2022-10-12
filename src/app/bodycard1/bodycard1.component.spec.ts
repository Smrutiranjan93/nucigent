import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodycard1Component } from './bodycard1.component';

describe('Bodycard1Component', () => {
  let component: Bodycard1Component;
  let fixture: ComponentFixture<Bodycard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bodycard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bodycard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
