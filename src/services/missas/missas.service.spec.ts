import { TestBed } from '@angular/core/testing';

import { MissasService } from './missas.service';

describe('MissasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissasService = TestBed.get(MissasService);
    expect(service).toBeTruthy();
  });
});
