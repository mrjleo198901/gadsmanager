import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParroquiaDesignComponent } from './parroquia-design.component';

describe('ParroquiaDesignComponent', () => {
  let component: ParroquiaDesignComponent;
  let fixture: ComponentFixture<ParroquiaDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParroquiaDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParroquiaDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
