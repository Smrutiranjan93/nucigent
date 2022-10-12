import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetdevloperComponent } from './netdevloper.component';

describe('NetdevloperComponent', () => {
  let component: NetdevloperComponent;
  let fixture: ComponentFixture<NetdevloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetdevloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetdevloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
