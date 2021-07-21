import { TestBed } from '@angular/core/testing';

import { ElecdomstService } from './elecdomst.service';

describe('ElecdomstService', () => {
  let service: ElecdomstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElecdomstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
