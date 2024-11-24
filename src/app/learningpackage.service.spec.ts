import { TestBed } from '@angular/core/testing';

import { LearningPackageService } from './learningpackage.service';

describe('LearningpackageService', () => {
  let service: LearningPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
