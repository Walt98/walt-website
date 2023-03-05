import { TestBed } from '@angular/core/testing';

import { ShOptions } from './sh-options.service';

describe('ShOptions', () => {
  let service: ShOptions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShOptions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
