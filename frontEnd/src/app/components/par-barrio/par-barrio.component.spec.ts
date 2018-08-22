import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParBarrioComponent } from './par-barrio.component';

describe('ParBarrioComponent', () => {
  let component: ParBarrioComponent;
  let fixture: ComponentFixture<ParBarrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParBarrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParBarrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
