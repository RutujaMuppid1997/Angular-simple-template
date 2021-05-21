import { TestBed } from '@angular/core/testing';

import { HttpGenricService } from './http-genric.service';

describe('HttpGenricService', () => {
  let service: HttpGenricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGenricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
