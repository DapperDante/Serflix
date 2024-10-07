import { TestBed } from '@angular/core/testing';
import { ItemMoviesService } from './item-movies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ItemMoviesService', () => {
  let service: ItemMoviesService;
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(ItemMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
