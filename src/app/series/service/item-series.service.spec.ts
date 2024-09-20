import { TestBed } from '@angular/core/testing';

import { ItemSeriesService } from './item-series.service';

describe('ItemSeriesService', () => {
  let service: ItemSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
