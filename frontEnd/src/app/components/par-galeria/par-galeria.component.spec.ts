import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParGaleriaComponent } from './par-galeria.component';

describe('ParGaleriaComponent', () => {
  let component: ParGaleriaComponent;
  let fixture: ComponentFixture<ParGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
