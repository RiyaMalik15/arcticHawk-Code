import { TestBed, inject } from '@angular/core/testing';

import { FCropServiceService } from './fcrop-service.service';

describe('FCropServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FCropServiceService]
    });
  });

  it('should be created', inject([FCropServiceService], (service: FCropServiceService) => {
    expect(service).toBeTruthy();
  }));
});
