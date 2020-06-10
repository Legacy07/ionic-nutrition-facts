import { TestBed } from '@angular/core/testing';

import { FoodsRepositoryService } from './foods-repository.service';

describe('FoodsRepositoryService', () => {
  let service: FoodsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
