import { TestBed } from '@angular/core/testing';

import { TipAutomobilaService } from './tip-automobila.service';

describe('TipAutomobilaService', () => {
  let service: TipAutomobilaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipAutomobilaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
