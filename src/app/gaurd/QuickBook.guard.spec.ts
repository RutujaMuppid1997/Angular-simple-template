import { TestBed } from '@angular/core/testing';

import { QuickBookGuard } from './QuickBook.guard';

describe('QuickBook', () => {
  let guard: QuickBookGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuickBookGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
