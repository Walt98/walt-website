import { TestBed } from '@angular/core/testing';

import { Payload } from './payload.service';

describe('Payload', () => {
  let service: Payload;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Payload);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
