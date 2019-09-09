import { TestBed } from '@angular/core/testing';

import { ApiservService } from './apiserv.service';

describe('ApiservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiservService = TestBed.get(ApiservService);
    expect(service).toBeTruthy();
  });
});
