import {
  ErrorHandlingService,
  HttpClient,
  catchError,
  environment,
  inject,
  map,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-RIN3RA4U.js";

// src/app/movies/service/item-movies.service.ts
var PATH = `${environment.ApiTmdb}/movie`;
var PATH_DISCOVER = `${environment.ApiTmdb}/discover/movie`;
var ItemMoviesService = class _ItemMoviesService {
  constructor() {
    this._http = inject(HttpClient);
    this._error = inject(ErrorHandlingService);
    console.log(`Service ${this.constructor.name} is ready`);
  }
  getMoviesNowPlaying(page = 1) {
    return this._http.get(`${PATH}/now_playing?language=en-US&page=${page}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getMoviesPopular(page = 1) {
    return this._http.get(`${PATH}/popular?language=en-US&page=${page}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getMoviesTopReated(page = 1) {
    return this._http.get(`${PATH}/top_rated?language=en-US&page=${page}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getMoviesUpcoming(page = 1) {
    return this._http.get(`${PATH}/upcoming?language=en-US&page=${page}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getMovieById(id) {
    return this._http.get(`${PATH}/${id}?append_to_response=videos%2Cimages%2Ccredits%2Csimilar%2Crecommendations&language=en-US`).pipe(map((data) => {
      if (data.videos)
        data.videos.results = [data.videos.results.find((video) => video.type = "Trailer")];
      return data;
    }), catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getMoviesByGenre(idGenre, page = 1) {
    return this._http.get(`${PATH_DISCOVER}?with_genres=${idGenre}&page=${page}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  ShowError(error) {
    this._error.ShowError(error.message);
  }
  ErrorHandler(error) {
    let message = "";
    switch (error.status) {
      default:
        message = "Server disconnected";
        break;
    }
    ;
    return throwError(() => new Error(message));
  }
  static {
    this.\u0275fac = function ItemMoviesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemMoviesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ItemMoviesService, factory: _ItemMoviesService.\u0275fac, providedIn: "platform" });
  }
};
function ItemMoviesInterceptor(req, next) {
  if (!(req.url.includes(PATH) || req.url.includes(PATH_DISCOVER)))
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
  ItemMoviesService,
  ItemMoviesInterceptor
};
//# sourceMappingURL=chunk-U3YFL5IT.js.map
