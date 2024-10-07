import { TestBed } from '@angular/core/testing';

import { ItemSeriesService } from './item-series.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ItemSeriesService', () => {
  let service: ItemSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(ItemSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
