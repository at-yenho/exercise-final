import { TestBed } from '@angular/core/testing';

import { DeactiveDialogService } from './deactive-dialog.service';

describe('DeactiveDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeactiveDialogService = TestBed.get(DeactiveDialogService);
    expect(service).toBeTruthy();
  });
});
