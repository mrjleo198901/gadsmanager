import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParActividadComponent } from './par-actividad.component';

describe('ParActividadComponent', () => {
  let component: ParActividadComponent;
  let fixture: ComponentFixture<ParActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
