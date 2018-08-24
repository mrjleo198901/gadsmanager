import { TestBed, inject } from '@angular/core/testing';

import { PassData1Service } from './pass-data1.service';

describe('PassData1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassData1Service]
    });
  });

  it('should be created', inject([PassData1Service], (service: PassData1Service) => {
    expect(service).toBeTruthy();
  }));
});
