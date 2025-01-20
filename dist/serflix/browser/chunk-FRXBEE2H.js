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

// src/app/movies/service/favorite-movies.service.ts
var PATH = environment.ApiDbMovies;
var FavoriteMoviesService = class _FavoriteMoviesService {
  constructor() {
    this._http = inject(HttpClient);
    this._error = inject(ErrorHandlingService);
    console.log(`Service ${this.constructor.name} is ready`);
  }
  getMoviesProfile() {
    return this._http.get(`${PATH}/get`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  addMovie(idMovie) {
    const movie = { idMovie };
    return this._http.post(`${PATH}/add`, movie).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getMovieProfile(idMovie) {
    return this._http.get(`${PATH}/get/${idMovie}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  deteleMovie(idDoc) {
    return this._http.delete(`${PATH}/delete/${idDoc}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  ShowError(error) {
    this._error.ShowError(error.message);
  }
  ErrorHandler(error) {
    let message = "";
    switch (error.status) {
      case 404:
        message = "Movie not found";
        break;
      case 500:
        message = "Server error";
        break;
      default:
        message = "Server disconnected";
    }
    return throwError(() => new Error(message));
  }
  static {
    this.\u0275fac = function FavoriteMoviesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoriteMoviesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FavoriteMoviesService, factory: _FavoriteMoviesService.\u0275fac, providedIn: "platform" });
  }
};
function FavoriteMoviesInterceptor(req, next) {
  if (!req.url.includes(PATH))
    return next(req);
  const BASE_IMG = environment.ApiTmdbImage;
  const newReq = req.clone();
  return next(newReq).pipe(map((data) => {
    const { body } = data;
    if (body) {
      if ("results" in body && Array.isArray(body.results)) {
        body.results = body.results.filter((item) => item.poster_path).map((item) => {
          item.poster_path = `${BASE_IMG}${item.poster_path}`;
          return item;
        });
      }
    }
    return data;
  }));
}

export {
  FavoriteMoviesService,
  FavoriteMoviesInterceptor
};
//# sourceMappingURL=chunk-FRXBEE2H.js.map
