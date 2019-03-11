import { TestBed } from '@angular/core/testing';

import { OracoesService } from './oracoes.service';

describe('OracoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OracoesService = TestBed.get(OracoesService);
    expect(service).toBeTruthy();
  });
});
