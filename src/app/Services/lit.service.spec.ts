import { TestBed } from '@angular/core/testing';

import { LitService } from './lit.service';

describe('LitService', () => {
  let service: LitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
