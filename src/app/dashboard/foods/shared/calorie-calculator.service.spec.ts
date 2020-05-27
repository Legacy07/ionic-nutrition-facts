import { TestBed } from '@angular/core/testing';

import { CalorieCalculatorService } from './calorie-calculator.service';

describe('CalorieCalculatorService', () => {
  let service: CalorieCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalorieCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
