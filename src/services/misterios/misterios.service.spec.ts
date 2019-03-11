import { TestBed } from '@angular/core/testing';

import { MisteriosService } from './misterios.service';

describe('MisteriosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MisteriosService = TestBed.get(MisteriosService);
    expect(service).toBeTruthy();
  });
});
