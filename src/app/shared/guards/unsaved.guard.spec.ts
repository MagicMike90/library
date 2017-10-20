import { TestBed, async, inject } from '@angular/core/testing';

import { UnsavedGuard } from './unsaved.guard';

describe('UnsavedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedGuard]
    });
  });

  it('should ...', inject([UnsavedGuard], (guard: UnsavedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
