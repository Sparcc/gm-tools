import { TestBed } from '@angular/core/testing';

import { MonsterGeneratorService } from './monster-generator.service';

describe('MonsterGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonsterGeneratorService = TestBed.get(MonsterGeneratorService);
    expect(service).toBeTruthy();
  });
});
