import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavarequireComponent } from './javarequire.component';

describe('JavarequireComponent', () => {
  let component: JavarequireComponent;
  let fixture: ComponentFixture<JavarequireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavarequireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavarequireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
