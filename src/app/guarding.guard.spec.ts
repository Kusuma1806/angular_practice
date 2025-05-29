import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardingGuard } from './guarding.guard';

describe('guardingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
