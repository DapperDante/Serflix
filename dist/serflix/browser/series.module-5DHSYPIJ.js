import {
  FavoriteSeriesService
} from "./chunk-Z2RYEKNO.js";
import {
  DataView,
  DataViewModule,
  InputTextarea,
  InputTextareaModule,
  Rating,
  RatingModule,
  YouTubePlayer,
  YouTubePlayerModule
} from "./chunk-FDTE6EIX.js";
import {
  ItemSeriesService
} from "./chunk-BEYZ6NBE.js";
import {
  ListItemsComponent,
  PanelItemsComponent,
  SharedComponentsModule,
  Skeleton,
  SkeletonModule
} from "./chunk-FLF2A32M.js";
import {
  SuccessHandlingService
} from "./chunk-QSCOQFII.js";
import {
  ActivatedRoute,
  AsyncPipe,
  Button,
  ButtonModule,
  CommonModule,
  DefaultValueAccessor,
  ErrorHandlingService,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  HttpClient,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgOptimizedImage,
  Observable,
  PrimeTemplate,
  ReactiveFormsModule,
  Router,
  RouterModule,
  Validators,
  catchError,
  environment,
  inject,
  map,
  tap,
  throwError,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefer,
  ɵɵdeferOnViewport,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RIN3RA4U.js";

// src/app/series/components/home-series/home-series.component.ts
var HomeSeriesComponent = class _HomeSeriesComponent {
  constructor(router, currentRouter) {
    this.router = router;
    this.currentRouter = currentRouter;
    this._series = inject(ItemSeriesService);
    this.items = [
      { label: "Popular", command: () => this.ChangeSection(1) },
      { label: "Airing today", command: () => this.ChangeSection(2) },
      { label: "On the air", command: () => this.ChangeSection(3) },
      { label: "Top reated", command: () => this.ChangeSection(4) }
    ];
    this.activeItem = this.items[0];
    this.indexSection = 1;
    this.indexPage = 1;
    this.numberOfSeriesForShow = 20;
    this.controlStatePaginator = 0;
  }
  ngOnInit() {
    this.series$ = this._series.getSeriesPopular().pipe(map((series) => {
      if (series.total_pages > 500)
        this.totalSeries = 500 * 20;
      else
        this.totalSeries = series.total_results;
      this.numberOfSeriesForShow = 20;
      return series;
    }));
  }
  ChangeSection(index) {
    if (this.indexSection == index)
      return;
    this.UpdateRequest(index);
    this.controlStatePaginator = 0;
    this.indexSection = index;
  }
  ChangePage(event) {
    this.indexPage = event.page + 1;
    this.controlStatePaginator = event.first;
    this.UpdateRequest(this.indexSection, this.indexPage);
  }
  SelectedSerie(idSerie) {
    this.router.navigate([idSerie], { relativeTo: this.currentRouter });
  }
  //For give control of when update data of request
  UpdateRequest(index, page = 1) {
    switch (index) {
      case 1:
        this.series$ = this._series.getSeriesPopular(page).pipe(map((series) => {
          if (series.total_pages > 500)
            this.totalSeries = 500 * 20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
      case 2:
        this.series$ = this._series.getSeriesAiringToday(page).pipe(map((series) => {
          if (series.total_pages > 500)
            this.totalSeries = 500 * 20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
      case 3:
        this.series$ = this._series.getSeriesOnTheAir(page).pipe(map((series) => {
          if (series.total_pages > 500)
            this.totalSeries = 500 * 20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
      case 4:
        this.series$ = this._series.getSeriesTopRated(page).pipe(map((series) => {
          if (series.total_pages > 500)
            this.totalSeries = 500 * 20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
    }
  }
  static {
    this.\u0275fac = function HomeSeriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeSeriesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeSeriesComponent, selectors: [["app-home-series"]], decls: 1, vars: 7, consts: [["title", "series", 3, "getId", "getIndexPaginator", "items", "menuItems", "activeItem", "showPaginator", "totalItemsToPaginator", "controlStatePaginator", "itemsForShowToPaginator"]], template: function HomeSeriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-panel-items", 0);
        \u0275\u0275listener("getId", function HomeSeriesComponent_Template_app_panel_items_getId_0_listener($event) {
          return ctx.SelectedSerie($event);
        })("getIndexPaginator", function HomeSeriesComponent_Template_app_panel_items_getIndexPaginator_0_listener($event) {
          return ctx.ChangePage($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("items", ctx.series$)("menuItems", ctx.items)("activeItem", ctx.activeItem)("showPaginator", true)("totalItemsToPaginator", ctx.totalSeries)("controlStatePaginator", ctx.controlStatePaginator)("itemsForShowToPaginator", ctx.numberOfSeriesForShow);
      }
    }, dependencies: [PanelItemsComponent], styles: ["\n\n  .p-card-title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.select-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=home-series.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeSeriesComponent, { className: "HomeSeriesComponent", filePath: "src\\app\\series\\components\\home-series\\home-series.component.ts", lineNumber: 23 });
})();

// src/app/series/service/score-series.service.ts
var PATH = `${environment.ApiDbScore}/serie`;
var ScoreSeriesService = class _ScoreSeriesService {
  constructor() {
    this._http = inject(HttpClient);
    this._error = inject(ErrorHandlingService);
    console.log(`Service ${this.constructor.name} is ready`);
  }
  addNewReview(idSerie, score, review) {
    const resp = {
      idSerie,
      score,
      review
    };
    return this._http.post(`${PATH}/add`, resp).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  getReviewsOfSerie(idSerie) {
    return this._http.get(`${PATH}/get/${idSerie}`).pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
  }
  ShowError(error) {
    this._error.ShowError(error.message);
  }
  ErrorHandler(error) {
    let message = "";
    switch (error.status) {
      default:
        message = "Server disconnected";
    }
    return throwError(() => new Error(message));
  }
  static {
    this.\u0275fac = function ScoreSeriesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScoreSeriesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScoreSeriesService, factory: _ScoreSeriesService.\u0275fac, providedIn: "platform" });
  }
};

// src/app/series/components/serie-info/serie-info.component.ts
var SerieInfoComponent_Conditional_1_Defer_27_DepsFn = () => [ListItemsComponent];
var _c0 = () => ({ boxShadow: "0 0 30px black", height: "92%" });
var _c1 = () => ({ "object-fit": "contain" });
var _c2 = () => ({ fontSize: "1.8rem" });
var _c3 = (a0) => ({ "border-top-1 surface-border": a0 });
function SerieInfoComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "youtube-player", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const serie_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("videoId", serie_r2.videos.results[0].key);
  }
}
function SerieInfoComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "There isn't trailer");
    \u0275\u0275elementEnd();
  }
}
function SerieInfoComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 21);
    \u0275\u0275listener("onClick", function SerieInfoComponent_Conditional_1_Conditional_11_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteFavoriteSerie());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rounded", true)("loading", ctx_r3.loadingFavorite);
  }
}
function SerieInfoComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 22);
    \u0275\u0275listener("onClick", function SerieInfoComponent_Conditional_1_Conditional_12_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addFavoriteSerie());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rounded", true)("loading", ctx_r3.loadingFavorite);
  }
}
function SerieInfoComponent_Conditional_1_Conditional_21_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "div")(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "div", 31)(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 34)(13, "span", 35);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const first_r7 = ctx.first;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c3, !first_r7));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r6.review);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r6.score);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r6.name);
  }
}
function SerieInfoComponent_Conditional_1_Conditional_21_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, SerieInfoComponent_Conditional_1_Conditional_21_ng_template_2_div_1_Template, 15, 6, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reviews_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", reviews_r8);
  }
}
function SerieInfoComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-dataView", 18, 0);
    \u0275\u0275template(2, SerieInfoComponent_Conditional_1_Conditional_21_ng_template_2_Template, 2, 1, "ng-template", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", ctx);
  }
}
function SerieInfoComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 19);
  }
}
function SerieInfoComponent_Conditional_1_Defer_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-list-items", 36);
    \u0275\u0275listener("getId", function SerieInfoComponent_Conditional_1_Defer_25_Template_app_list_items_getId_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.ChangeSerie($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("items", ctx_r3.similar$);
  }
}
function SerieInfoComponent_Conditional_1_DeferPlaceholder_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "similar series");
    \u0275\u0275elementEnd();
  }
}
function SerieInfoComponent_Conditional_1_Defer_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-list-items", 37);
    \u0275\u0275listener("getId", function SerieInfoComponent_Conditional_1_Defer_30_Template_app_list_items_getId_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.ChangeSerie($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("items", ctx_r3.recommendation$);
  }
}
function SerieInfoComponent_Conditional_1_DeferPlaceholder_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "recommendation series");
    \u0275\u0275elementEnd();
  }
}
function SerieInfoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275element(4, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275template(6, SerieInfoComponent_Conditional_1_Conditional_6_Template, 2, 1, "div", 8)(7, SerieInfoComponent_Conditional_1_Conditional_7_Template, 2, 0, "p");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 9)(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SerieInfoComponent_Conditional_1_Conditional_11_Template, 1, 2, "p-button", 10)(12, SerieInfoComponent_Conditional_1_Conditional_12_Template, 1, 2, "p-button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 12);
    \u0275\u0275element(14, "p-rating", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 2)(16, "form", 14);
    \u0275\u0275element(17, "p-rating", 15)(18, "textarea", 16);
    \u0275\u0275elementStart(19, "p-button", 17);
    \u0275\u0275listener("onClick", function SerieInfoComponent_Conditional_1_Template_p_button_onClick_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.SendReview());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 2);
    \u0275\u0275template(21, SerieInfoComponent_Conditional_1_Conditional_21_Template, 3, 1, "p-dataView", 18);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275template(23, SerieInfoComponent_Conditional_1_Conditional_23_Template, 1, 0, "p-skeleton", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 2);
    \u0275\u0275template(25, SerieInfoComponent_Conditional_1_Defer_25_Template, 1, 1)(26, SerieInfoComponent_Conditional_1_DeferPlaceholder_26_Template, 2, 0);
    \u0275\u0275defer(27, 25, SerieInfoComponent_Conditional_1_Defer_27_DepsFn, null, 26);
    \u0275\u0275deferOnViewport(0, -1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 2);
    \u0275\u0275template(30, SerieInfoComponent_Conditional_1_Defer_30_Template, 1, 1)(31, SerieInfoComponent_Conditional_1_DeferPlaceholder_31_Template, 2, 0);
    \u0275\u0275defer(32, 30, SerieInfoComponent_Conditional_1_Defer_27_DepsFn, null, 31);
    \u0275\u0275deferOnViewport(0, -1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const serie_r2 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", serie_r2.backdrop_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c0));
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c1));
    \u0275\u0275property("ngSrc", serie_r2.poster_path);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((serie_r2.videos == null ? null : serie_r2.videos.results == null ? null : serie_r2.videos.results.length) ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(serie_r2.overview);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isFavorite ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275property("readonly", true)("cancel", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r3.ratingForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("autoResize", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r3.loadingReview);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_15_0 = \u0275\u0275pipeBind1(22, 17, ctx_r3.review$)) ? 21 : 23, tmp_15_0);
  }
}
function SerieInfoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 38)(1, "p-skeleton", 39)(2, "p-skeleton", 40)(3, "p-skeleton", 40);
  }
}
var SerieInfoComponent = class _SerieInfoComponent {
  constructor(routerCurrent, router) {
    this.routerCurrent = routerCurrent;
    this.router = router;
    this._series = inject(ItemSeriesService);
    this._reviews = inject(ScoreSeriesService);
    this._favoriteSeries = inject(FavoriteSeriesService);
    this._success = inject(SuccessHandlingService);
    this._error = inject(ErrorHandlingService);
    this.ratingForm = new FormGroup({
      rating: new FormControl(0, Validators.required),
      review: new FormControl("", [Validators.required, Validators.minLength(15)])
    });
    this.loadingReview = false;
    this.loadingFavorite = false;
  }
  ngOnInit() {
    this.routerCurrent.paramMap.subscribe((routerCurrent) => {
      this.idSerie = Number(routerCurrent.get("id"));
      this.serie$ = this._series.getSerieById(this.idSerie).pipe(map((serie) => {
        this.similar$ = new Observable((suscriber) => {
          suscriber.next(serie.similar);
        });
        this.recommendation$ = new Observable((suscriber) => {
          suscriber.next(serie.recommendations);
        });
        this.review$ = this._reviews.getReviewsOfSerie(serie.id);
        this._favoriteSeries.getSerieProfile(this.idSerie).subscribe((value) => {
          if (Object.keys(value).length === 0) {
            this.idDoc = value.id;
            this.isFavorite = false;
          }
        });
        return serie;
      }));
    });
  }
  ChangeSerie(idSerie) {
    this.router.navigate(["../", idSerie], {
      relativeTo: this.routerCurrent,
      replaceUrl: true
    });
  }
  SendReview() {
    if (this.ratingForm.invalid) {
      this._error.ShowError("Invalid form");
      return;
    }
    this.loadingReview = true;
    console.log(this.ratingForm.value);
    this._reviews.addNewReview(this.idSerie, this.ratingForm.value.rating, this.ratingForm.value.review).subscribe({
      error: () => {
        this.loadingReview = false;
      },
      complete: () => {
        this.loadingReview = false;
        this._success.showSuccessMessage("Review added");
        this.review$ = this._reviews.getReviewsOfSerie(this.idSerie);
      }
    });
  }
  addFavoriteSerie() {
    this.loadingFavorite = true;
    this._favoriteSeries.addSerie(this.idSerie).subscribe({
      next: (value) => {
        this.idDoc = value.id;
      },
      complete: () => {
        this.loadingFavorite = false;
        this.isFavorite = true;
        this._success.showSuccessMessage("Serie added to favorites");
      },
      error: () => {
        this.loadingFavorite = false;
      }
    });
  }
  deleteFavoriteSerie() {
    this.loadingFavorite = true;
    this._favoriteSeries.deleteSerie(this.idDoc).subscribe({
      complete: () => {
        this.loadingFavorite = false;
        this.isFavorite = false;
        this._success.showSuccessMessage("Serie delete to favorites");
      },
      error: () => {
        this.loadingFavorite = false;
      }
    });
  }
  static {
    this.\u0275fac = function SerieInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SerieInfoComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SerieInfoComponent, selectors: [["app-serie-info"]], decls: 4, vars: 3, consts: [["dv", ""], [1, "grid", "nested-grid", "min-h-screen"], [1, "col-12"], [1, "grid", "relative", "overflow-hidden", "border-round-top", "background", 2, "height", "60vh"], ["alt", "background", 1, "absolute", "w-full", "opacity-7", 3, "src"], [1, "col-3", "relative", "my-auto", "mx-6"], ["alt", "poster", "fill", "", "priority", "", 3, "ngSrc"], [1, "col-8"], [1, "flex", "justify-content-center"], [1, "col-6", "text-justify"], ["icon", "pi pi-heart-fill", "size", "large", 3, "rounded", "loading"], ["icon", "pi pi-heart", "size", "large", 3, "rounded", "loading"], [1, "col-6", "flex", "justify-content-center", "align-items-center"], [1, "stars-main", 3, "readonly", "cancel"], [1, "flex", "justify-content-center", "flex-column", "align-items-center", 3, "formGroup"], ["formControlName", "rating", 1, "stars-review"], ["rows", "3", "cols", "30", "pInputTextarea", "", "title", "review", "placeholder", "Write your review about it", "formControlName", "review", 1, "my-4", 3, "autoResize"], ["label", "submit", "icon", "pi pi-send", 3, "onClick", "loading"], [3, "value"], [1, "h-full"], [3, "videoId"], ["icon", "pi pi-heart-fill", "size", "large", 3, "onClick", "rounded", "loading"], ["icon", "pi pi-heart", "size", "large", 3, "onClick", "rounded", "loading"], ["pTemplate", "list"], [1, "grid", "grid-nogutter"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "flex", "flex-column", "sm:flex-row", "sm:align-items-center", "p-4", "gap-3", 3, "ngClass"], [1, "flex", "flex-column", "md:flex-row", "justify-content-between", "md:align-items-center", "flex-1", "gap-4"], [1, "flex", "flex-row", "md:flex-column", "justify-content-between", "align-items-start", "gap-2"], [1, "text-lg", "font-medium", "text-900", "mt-2"], [1, "surface-100", "p-1", 2, "border-radius", "30px"], [1, "surface-0", "flex", "align-items-center", "gap-2", "justify-content-center", "py-1", "px-2", 2, "border-radius", "30px", "box-shadow", "0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"], [1, "text-900", "font-medium", "text-sm"], [1, "pi", "pi-star-fill", "text-yellow-500"], [1, "flex", "flex-column", "md:align-items-end", "gap-5"], [1, "text-xl", "font-semibold", "text-900"], ["title", "Similar", 3, "getId", "items"], ["title", "Recommendation", 3, "getId", "items"], ["height", "100%", 1, "col-3"], ["height", "100%", 1, "col-9"], ["height", "100%", 1, "col-6"]], template: function SerieInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, SerieInfoComponent_Conditional_1_Template, 34, 22);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275template(3, SerieInfoComponent_Conditional_3_Template, 4, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(2, 1, ctx.serie$)) ? 1 : 3, tmp_0_0);
      }
    }, dependencies: [NgClass, NgForOf, Skeleton, Rating, PrimeTemplate, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, InputTextarea, YouTubePlayer, NgOptimizedImage, Button, DataView, AsyncPipe], styles: ["\n\n  .stars-review .p-rating .p-rating-item .p-rating-icon.p-icon {\n  height: 3rem !important;\n  width: 3rem !important;\n}\n  .stars-main .p-rating .p-rating-item .p-rating-icon.p-icon {\n  height: 5rem !important;\n  width: 5rem !important;\n  color: yellow;\n}\n  .stars-review .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {\n  color: yellow;\n}\n.background[_ngcontent-%COMP%] {\n  mask-image: linear-gradient(black 80%, transparent);\n}\n.background[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  filter: brightness(0.4);\n  z-index: -1;\n}\n/*# sourceMappingURL=serie-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SerieInfoComponent, { className: "SerieInfoComponent", filePath: "src\\app\\series\\components\\serie-info\\serie-info.component.ts", lineNumber: 38 });
})();

// src/app/series/series-routing.module.ts
var routes = [
  {
    path: "",
    component: HomeSeriesComponent,
    title: "Series"
  },
  {
    path: ":id",
    component: SerieInfoComponent
  }
];
var SeriesRoutingModule = class _SeriesRoutingModule {
  static {
    this.\u0275fac = function SeriesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeriesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SeriesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/series/series.module.ts
var SeriesModule = class _SeriesModule {
  static {
    this.\u0275fac = function SeriesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeriesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SeriesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [FavoriteSeriesService, ScoreSeriesService], imports: [
      CommonModule,
      SeriesRoutingModule,
      SharedComponentsModule,
      SkeletonModule,
      RatingModule,
      ReactiveFormsModule,
      InputTextareaModule,
      YouTubePlayerModule,
      ButtonModule,
      DataViewModule
    ] });
  }
};
export {
  SeriesModule
};
//# sourceMappingURL=series.module-5DHSYPIJ.js.map
