import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PothiComponent } from './pothi.component';

describe('PothiComponent', () => {
  let component: PothiComponent;
  let fixture: ComponentFixture<PothiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PothiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PothiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
