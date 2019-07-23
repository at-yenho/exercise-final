import { TestBed } from '@angular/core/testing';

import { LocalerService } from './localer.service';

describe('LocalerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalerService = TestBed.get(LocalerService);
    expect(service).toBeTruthy();
  });
});
