import { TestBed } from '@angular/core/testing';

import { ResponseResourceService } from './response-resource.service';

describe('ResponseResourceService', () => {
  let service: ResponseResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
