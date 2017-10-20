import { TestBed, async, inject } from '@angular/core/testing';

import { TermsGuard } from './terms.guard';

describe('TermsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermsGuard]
    });
  });

  it('should ...', inject([TermsGuard], (guard: TermsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
