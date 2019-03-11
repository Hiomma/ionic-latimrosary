import { TestBed } from '@angular/core/testing';

import { TercosService } from './tercos.service';

describe('TercosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TercosService = TestBed.get(TercosService);
    expect(service).toBeTruthy();
  });
});
