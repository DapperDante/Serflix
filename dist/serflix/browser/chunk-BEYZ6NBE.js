import {
  ErrorHandlingService,
  HttpClient,
  Observable,
  catchError,
  environment,
  inject,
  map,
  tap,
  ɵɵdefineInjectable
} from "./chunk-RIN3RA4U.js";

// src/app/series/service/item-series.service.ts
var PATH = `${environment.ApiTmdb}/tv`;
var PATH_DISCOVER = `${environment.ApiTmdb}/discover/tv`;
var ItemSeriesService = class _ItemSeriesService {
  constructor() {
    this._http = inject(HttpClient);
    this._error = inject(ErrorHandlingService);
    console.log(`Service ${this.constructor.name} running`);
  }
  getSeriesAiringToday(page = 1) {
    return this._http.get(`${PATH}/airing_today?language=US&page=${page}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getSeriesOnTheAir(page = 1) {
    return this._http.get(`${PATH}/on_the_air?language=US&page=${page}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getSeriesPopular(page = 1) {
    return this._http.get(`${PATH}/popular?language=US&page=${page}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getSeriesTopRated(page = 1) {
    return this._http.get(`${PATH}/top_rated?language=US&page=${page}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getSerieById(id) {
    return this._http.get(`${PATH}/${id}?append_to_response=videos%2Cimages%2Ccredits%2Csimilar%2Crecommendations&language=US`).pipe(map((data) => {
      if (data.videos)
        data.videos.results = [data.videos.results.find((video) => video.type = "Trailer")];
      return data;
    }), catchError(this.ErrorHandler), tap({
      error: (error) => this.ShowError(error)
    }));
  }
  getSeriesByGenre(idGenre, page = 1) {
    return this._http.get(`${PATH_DISCOVER}?with_genres=${idGenre}&page=${page}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  ShowError(error) {
    this._error.ShowError(error.message);
  }
  ErrorHandler(error) {
    let message = "";
    switch (error.status) {
      case 404:
        message = "Not find serie";
        break;
      case 500:
        message = "Internal server error";
        break;
      default:
        message = "Server disconnected";
        break;
    }
    return new Observable((observer) => observer.error(new Error(message)));
  }
  static {
    this.\u0275fac = function ItemSeriesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemSeriesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ItemSeriesService, factory: _ItemSeriesService.\u0275fac, providedIn: "platform" });
  }
};
function ItemSeriesInterceptor(req, next) {
  if (!req.url.includes(PATH) && !req.url.includes(PATH_DISCOVER))
    return next(req);
  const BASE_IMG = environment.ApiTmdbImage;
  const newReq = req.clone();
  return next(newReq).pipe(map((data) => {
    const { body } = data;
    if (body) {
      if ("results" in body && Array.isArray(body.results)) {
        body.results = body.results.filter((item) => item.poster_path).map((item) => {
          item.poster_path = `${BASE_IMG}${item.poster_path}`;
          item.backdrop_path = `${BASE_IMG}${item.backdrop_path}`;
          return item;
        });
      } else {
        body.poster_path = `${BASE_IMG}${body.poster_path}`;
        body.backdrop_path = `${BASE_IMG}${body.backdrop_path}`;
        if ("similar" in body && Array.isArray(body.similar.results)) {
          body.similar.results = body.similar.results.filter((item) => item.poster_path).map((item) => {
            item.poster_path = `${BASE_IMG}${item.poster_path}`;
            return item;
          });
        }
        if ("recommendations" in body && Array.isArray(body.recommendations.results)) {
          body.recommendations.results = body.recommendations.results.filter((item) => item.poster_path).map((item) => {
            BASE_IMG;
            item.poster_path = `${BASE_IMG}${item.poster_path}`;
            return item;
          });
        }
      }
    }
    return data;
  }));
}

export {
  ItemSeriesService,
  ItemSeriesInterceptor
};
//# sourceMappingURL=chunk-BEYZ6NBE.js.map
