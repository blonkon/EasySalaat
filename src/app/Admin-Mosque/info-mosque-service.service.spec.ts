import { TestBed } from '@angular/core/testing';

import { InfoMosqueServiceService } from './info-mosque-service.service';

describe('InfoMosqueServiceService', () => {
  let service: InfoMosqueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoMosqueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
