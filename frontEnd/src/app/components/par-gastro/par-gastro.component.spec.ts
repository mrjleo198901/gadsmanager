import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParGastroComponent } from './par-gastro.component';

describe('ParGastroComponent', () => {
  let component: ParGastroComponent;
  let fixture: ComponentFixture<ParGastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParGastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParGastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
