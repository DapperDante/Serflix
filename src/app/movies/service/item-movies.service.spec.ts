import { TestBed } from '@angular/core/testing';
import { ItemMoviesService } from './item-movies.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { MoviesWithDate, OriginalLanguage } from '../api/movies.api';
import { environment } from 'src/environments/environment';
describe('ItemMoviesService', () => {
  let service: ItemMoviesService;
  let httpTesting: HttpTestingController;
  //This object is only example for testing and can use for all request
  let demoReq: MoviesWithDate = {
    dates: {
      maximum: new Date(),
      minimum: new Date()
    },
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
        genre_ids: [
            27,
            35,
            18
        ],
        id: 933260,
        original_language: OriginalLanguage.CN,
        original_title: "The Substance",
        overview: "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
        popularity: 1556.96,
        poster_path: "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
        release_date: new Date(),
        title: "The Substance",
        video: false,
        vote_average: 7.285,
        vote_count: 247
      },
    ],
    total_pages: 1,
    total_results: 1
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemMoviesService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]});
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ItemMoviesService);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('requests', () => {

    it('one request', () => {
      service.getMoviesNowPlaying().subscribe((data) => {
        expect(data).toEqual(demoReq);
      });
      const req = httpTesting.expectOne((req) => req.url.startsWith(environment._BaseUrlMovie));
      req.flush(demoReq);
    });

    it('all request at once', () => {
      service.getMoviesPopular().subscribe((data) => {
        expect(data).toEqual(demoReq);
      });
      service.getMoviesTopReated().subscribe((data) => {
        expect(data).toEqual(demoReq);
      });
      service.getMoviesUpcoming().subscribe((data) => {
        expect(data).toEqual(demoReq);
      });
      service.getMoviesNowPlaying().subscribe((data) => {
        expect(data).toEqual(demoReq);
      })
      //Only testing request with the base url of API
      const allReq = httpTesting.match((req) => req.url.startsWith(environment._BaseUrlMovie));
      allReq.forEach((req) => {
        req.flush(demoReq);
      })
      expect(allReq.length).toBe(4);
    })
  });
});
