import { TestBed } from '@angular/core/testing';
import { ItemSeriesService } from './item-series.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Series } from '../api/series';
import { environment } from 'src/environments/environment';
describe('ItemSeriesService', () => {
  let service: ItemSeriesService;
  let httpTesting: HttpTestingController;
  let demoReq: Series = {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: "/ookJ1LS8Uc0ji7cSDuJfV7Qh6Lb.jpg",
        genre_ids: [
            10764
        ],
        id: 18770,
        origin_country: [
            "ES"
        ],
        original_language: "es",
        original_name: "Gran hermano",
        overview: "Gran Hermano is a reality television series broadcast in Spain on Telecinco and La Siete produced by Endemol. It is part of the Big Brother franchise first developed in the Netherlands. As of February 2012, 19 editions of the show have aired.",
        popularity: 2561.803,
        poster_path: "/gQ0Emh2LT047Fip2HWye3NkrkQB.jpg",
        first_air_date: new Date(),
        name: "Gran hermano",
        vote_average: 4.3,
        vote_count: 2
      },
    ],
    total_pages: 1,
    total_results: 1
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemSeriesService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ItemSeriesService);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('requests', () => {
    
    it('one request', () => {
      service.getSeriesAiringToday().subscribe((data) => {
        expect(data).toEqual(demoReq);
      })
      const req = httpTesting.expectOne((req) => req.url.startsWith(environment._BaseUrlSerie));
      req.flush(demoReq);
    });
    
    it('all request at once', () => {
      service.getSeriesAiringToday().subscribe((data) => {
        expect(data).toEqual(demoReq);
      });
      service.getSeriesOnTheAir().subscribe((data) => {
        expect(data).toEqual(demoReq);
      });
      service.getSeriesTopRated().subscribe((data) => {
        expect(data).toEqual(demoReq);
      });
      service.getSeriesPopular().subscribe((data) => {
        expect(data).toEqual(demoReq);
      });
      const allReq = httpTesting.match((req) => req.url.startsWith(environment._BaseUrlSerie));
      allReq.forEach((req) => {
        req.flush(demoReq);
      });
      expect(allReq.length).toBe(4);
    });
  })
});
