import { TestBed } from '@angular/core/testing';

import { ItemMoviesService } from './item-movies.service';

describe('ItemMoviesService', () => {
  let service: ItemMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
