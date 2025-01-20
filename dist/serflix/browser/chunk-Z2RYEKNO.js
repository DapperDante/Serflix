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

// src/app/series/service/favorite-series.service.ts
var PATH = environment.ApiDbSeries;
var FavoriteSeriesService = class _FavoriteSeriesService {
  constructor() {
    this._http = inject(HttpClient);
    this._error = inject(ErrorHandlingService);
    console.log(`Service ${this.constructor.name} is ready`);
  }
  getSeriesProfile() {
    return this._http.get(`${PATH}/get`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  addSerie(idSerie) {
    const serie = { idSerie };
    return this._http.post(`${PATH}/add`, serie).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getSerieProfile(idSerie) {
    return this._http.get(`${PATH}/get/${idSerie}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  deleteSerie(idDoc) {
    return this._http.delete(`${PATH}/delete/${idDoc}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
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
    return throwError(() => new Error(message));
  }
  static {
    this.\u0275fac = function FavoriteSeriesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoriteSeriesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FavoriteSeriesService, factory: _FavoriteSeriesService.\u0275fac, providedIn: "platform" });
  }
};
function FavoriteSeriesInterceptor(req, next) {
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
  FavoriteSeriesService,
  FavoriteSeriesInterceptor
};
//# sourceMappingURL=chunk-Z2RYEKNO.js.map
