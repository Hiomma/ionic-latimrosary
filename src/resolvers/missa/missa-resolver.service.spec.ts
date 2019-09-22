import { TestBed } from '@angular/core/testing';

import { MissaResolverService } from './missa-resolver.service';

describe('MissaResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissaResolverService = TestBed.get(MissaResolverService);
    expect(service).toBeTruthy();
  });
});
