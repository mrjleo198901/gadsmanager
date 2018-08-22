import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParHistoriaComponent } from './par-historia.component';

describe('ParHistoriaComponent', () => {
  let component: ParHistoriaComponent;
  let fixture: ComponentFixture<ParHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
