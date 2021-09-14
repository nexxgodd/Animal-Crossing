import { TestBed } from '@angular/core/testing';

import { AcDBService } from './ac-db.service';

describe('AcDBService', () => {
  let service: AcDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
