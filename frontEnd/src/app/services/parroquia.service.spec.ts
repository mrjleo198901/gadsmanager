import { TestBed, inject } from '@angular/core/testing';

import { ParroquiaService } from './parroquia.service';

describe('ParroquiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParroquiaService]
    });
  });

  it('should be created', inject([ParroquiaService], (service: ParroquiaService) => {
    expect(service).toBeTruthy();
  }));
});
