import { TestBed } from '@angular/core/testing';

import { AdminMosqueService } from './admin-mosque.service';

describe('AdminMosqueService', () => {
  let service: AdminMosqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMosqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
