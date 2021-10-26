import { TestBed } from '@angular/core/testing';

import { SignUpValidationService } from './signup-validation.service';

describe('SignUpValidationService', () => {
  let service: SignUpValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
