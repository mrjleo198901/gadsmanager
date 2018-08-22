import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParAutoridadComponent } from './par-autoridad.component';

describe('ParAutoridadComponent', () => {
  let component: ParAutoridadComponent;
  let fixture: ComponentFixture<ParAutoridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParAutoridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParAutoridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
