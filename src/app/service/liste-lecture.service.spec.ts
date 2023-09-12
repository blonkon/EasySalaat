import { TestBed } from '@angular/core/testing';

import { ListeLectureService } from './liste-lecture.service';

describe('ListeLectureService', () => {
  let service: ListeLectureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeLectureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
