import { TestBed } from '@angular/core/testing';

import { CalculateDiaryService } from './calculate-diary.service';

describe('CalculateDiaryService', () => {
  let service: CalculateDiaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateDiaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
