import {
  AuthService
} from "./chunk-MWAZQMYL.js";
import {
  BehaviorSubject,
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

// src/app/service/profile.service.ts
var PATH = environment.ApiDbProfiles;
var PATH_IMG = environment.ApiPhotos;
var ProfileService = class _ProfileService {
  constructor() {
    this._http = inject(HttpClient);
    this._auth = inject(AuthService);
    this._error = inject(ErrorHandlingService);
    console.log(`Service ${this.constructor.name} is ready`);
    this.profile$ = new BehaviorSubject(void 0);
  }
  addProfile(img, name) {
    const profile = { name, img };
    return this._http.post(`${PATH}/add`, profile).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  //First, you must use accessProfile when you want to access a profile, after that you can use getProfile$ to get the profile
  LogInProfile(idProfile) {
    console.log(idProfile);
    return this._http.post(`${PATH}/log-in`, { idProfile }).pipe(catchError(this.ErrorHandler), tap({ next: (access) => this._auth.setToken(access.token), error: (error) => this.ShowError(error) }));
  }
  LogOutProfile() {
    return this._http.get(`${PATH}/log-out`).pipe(catchError(this.ErrorHandler), tap({
      next: (access) => this._auth.setToken(access.token),
      error: (error) => this.ShowError(error)
    }));
  }
  getProfiles() {
    return this._http.get(`${PATH}/get-all`).pipe(catchError(this.ErrorHandler), tap({
      error: (error) => this.ShowError(error)
    }));
  }
  // if you work with constant changes in the profile, you can use this method to get the update profile, after use getProfile$ to get the update profile
  refreshProfile() {
    this._http.get(`${PATH}/get`).pipe(map((profile) => {
      const BASE_IMG = environment.ApiTmdbImage;
      profile.results.map((result) => {
        result.poster_path = `${BASE_IMG}${result.poster_path}`;
        return result;
      });
      return profile;
    }), catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) })).subscribe((profile) => this.profile$?.next(profile));
  }
  getProfile() {
    return this.profile$;
  }
  getPhotos() {
    return this._http.get(`${PATH_IMG}/character`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  updateProfile(name, img) {
    const profile = { name, img };
    return this._http.put(`${PATH}/put`, profile).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  isSelectedProfile() {
    return sessionStorage.getItem("isSelectedProfile") ? true : false;
  }
  setSelectedProfile(value) {
    if (!value) {
      console.log("remove");
      sessionStorage.removeItem("isSelectedProfile");
      return;
    }
    sessionStorage.setItem("isSelectedProfile", "true");
  }
  ShowError(error) {
    this._error.ShowError(error.message);
  }
  ErrorHandler(error) {
    let message = "";
    switch (error.status) {
      case 401:
        message = "Unauthorized";
        break;
      default:
        message = "Server disconnected";
    }
    return throwError(() => new Error(message));
  }
  static {
    this.\u0275fac = function ProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProfileService
};
//# sourceMappingURL=chunk-SD5WOYXA.js.map
