import { TestBed } from '@angular/core/testing';

import { OracaoResolverService } from './oracao-resolver.service';

describe('OracaoResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OracaoResolverService = TestBed.get(OracaoResolverService);
    expect(service).toBeTruthy();
  });
});
