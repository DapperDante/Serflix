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

// src/app/search/search.service.ts
var PATH = environment.ApiDbSearch;
var SearchService = class _SearchService {
  constructor() {
    this._http = inject(HttpClient);
    this._error = inject(ErrorHandlingService);
    console.log(`Service ${this.constructor.name} is ready`);
  }
  getItemsByQuery(query, times, manyItemsRelation) {
    return this._http.get(`${PATH}?query=${query}&times=${times}&manyItemsRelation=${manyItemsRelation}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  ShowError(error) {
    this._error.ShowError(error.message);
  }
  ErrorHandler(error) {
    let message = "";
    switch (error.status) {
      case 404: {
        message = "Not found results";
        break;
      }
      default: {
        message = "Server disconnected";
      }
    }
    return throwError(() => new Error(message));
  }
  static {
    this.\u0275fac = function SearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchService, factory: _SearchService.\u0275fac, providedIn: "platform" });
  }
};
function SearchMoviesInterceptor(req, next) {
  if (!req.url.includes(PATH))
    return next(req);
  const BASE_IMG = environment.ApiTmdbImage;
  const newReq = req.clone();
  return next(newReq).pipe(map((data) => {
    if (data.body) {
      if ("results" in data.body) {
        data.body.results.map((value) => {
          value.poster_path = `${BASE_IMG}/${value.poster_path}`;
          value.backdrop_path = `${BASE_IMG}/${value.backdrop_path}`;
          return value;
        });
      }
    }
    return data;
  }));
}

export {
  SearchService,
  SearchMoviesInterceptor
};
//# sourceMappingURL=chunk-7QQBCKL5.js.map
