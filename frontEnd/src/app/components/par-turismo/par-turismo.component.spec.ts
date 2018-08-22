import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParTurismoComponent } from './par-turismo.component';

describe('ParTurismoComponent', () => {
  let component: ParTurismoComponent;
  let fixture: ComponentFixture<ParTurismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParTurismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
