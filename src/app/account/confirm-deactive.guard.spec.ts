import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmDeactiveGuard } from './confirm-deactive.guard';

describe('ConfirmDeactiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmDeactiveGuard]
    });
  });

  it('should ...', inject([ConfirmDeactiveGuard], (guard: ConfirmDeactiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
