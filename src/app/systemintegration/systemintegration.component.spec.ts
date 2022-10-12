import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemintegrationComponent } from './systemintegration.component';

describe('SystemintegrationComponent', () => {
  let component: SystemintegrationComponent;
  let fixture: ComponentFixture<SystemintegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemintegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
