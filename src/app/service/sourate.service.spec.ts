import { TestBed } from '@angular/core/testing';

import { SourateService } from './sourate.service';

describe('SourateService', () => {
  let service: SourateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
