import { TestBed } from '@angular/core/testing';

import { NomsService } from './noms.service';

describe('NomsService', () => {
  let service: NomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
