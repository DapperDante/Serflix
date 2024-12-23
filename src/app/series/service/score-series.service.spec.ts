import { TestBed } from '@angular/core/testing';

import { ScoreSeriesService } from './score-series.service';

describe('ScoreSeriesService', () => {
  let service: ScoreSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
