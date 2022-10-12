import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularrequirementComponent } from './angularrequirement.component';

describe('AngularrequirementComponent', () => {
  let component: AngularrequirementComponent;
  let fixture: ComponentFixture<AngularrequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularrequirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularrequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
