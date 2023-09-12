import { TestBed } from '@angular/core/testing';

import { FrequenceRadioService } from './frequence-radio.service';

describe('FrequenceRadioService', () => {
  let service: FrequenceRadioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrequenceRadioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
