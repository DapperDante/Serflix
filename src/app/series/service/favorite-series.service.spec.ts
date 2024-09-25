import { TestBed } from '@angular/core/testing';

import { FavoriteSeriesService } from './favorite-series.service';

describe('FavoriteSeriesService', () => {
  let service: FavoriteSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
