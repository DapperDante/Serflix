import { TestBed } from '@angular/core/testing';

import { ScoreMoviesService } from './score-movies.service';

describe('ScoreMoviesService', () => {
  let service: ScoreMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
