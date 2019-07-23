import { TestBed } from '@angular/core/testing';

import { PreloadSelectModuleService } from './preload-select-module.service';

describe('PreloadSelectModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreloadSelectModuleService = TestBed.get(PreloadSelectModuleService);
    expect(service).toBeTruthy();
  });
});
