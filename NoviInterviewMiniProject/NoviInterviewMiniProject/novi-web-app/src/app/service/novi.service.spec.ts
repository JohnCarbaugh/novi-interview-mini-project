import { TestBed } from '@angular/core/testing';

import { NoviService } from './novi.service';

describe('NoviService', () => {
  let service: NoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
