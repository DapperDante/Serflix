import {
  ItemMoviesService
} from "./chunk-U3YFL5IT.js";
import {
  ItemSeriesService
} from "./chunk-BEYZ6NBE.js";
import {
  PanelItemsComponent,
  SharedComponentsModule
} from "./chunk-FLF2A32M.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterModule,
  forkJoin,
  inject,
  map,
  tap,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-RIN3RA4U.js";

// src/app/categories/home-categories/home-categories.component.ts
var HomeCategoriesComponent = class _HomeCategoriesComponent {
  constructor(_router, _activeRoute) {
    this._router = _router;
    this._activeRoute = _activeRoute;
    this.dataValid = [
      {
        name: "Adventure",
        id: 1,
        idSeries: 10759,
        idMovies: 12
      },
      {
        name: "Comedy",
        id: 2,
        idSeries: 16,
        idMovies: 35
      },
      {
        name: "Horror",
        id: 3,
        idSeries: void 0,
        idMovies: 27
      },
      {
        name: "Animation",
        id: 4,
        idSeries: 16,
        idMovies: 16
      }
    ];
    this._movies = inject(ItemMoviesService);
    this._series = inject(ItemSeriesService);
    this.totalItemsToPaginator = 0;
    this.itemsForShowToPaginator = 20;
    this.controlStatePaginator = 0;
    this.indexPage = 1;
  }
  ngOnInit() {
    this._activeRoute.params.subscribe((params) => {
      this.categoryCurrent = this.dataValid.find((data) => data.id == params["id"]);
      if (!this.categoryCurrent)
        this._router.navigate(["/home"]);
      this.UpdateRequest(1);
    });
  }
  ChangePage(event) {
    this.indexPage = event.page + 1;
    this.controlStatePaginator = event.first;
    this.UpdateRequest(this.indexPage);
  }
  UpdateRequest(page) {
    this.items$ = forkJoin([
      this._movies.getMoviesByGenre(this.categoryCurrent?.idMovies + "", page),
      this._series.getSeriesByGenre(this.categoryCurrent?.idSeries + "", page)
    ]).pipe(map(([movies, series]) => {
      return {
        results: [...movies.results, ...series.results],
        total_pages: Math.max(movies.total_pages, series.total_pages),
        total_results: movies.total_results + series.total_results
      };
    }), tap((data) => {
      if (data.total_pages > 500)
        this.totalItemsToPaginator = 500 * 20;
      else
        this.totalItemsToPaginator = data.total_pages * 20;
    }));
  }
  static {
    this.\u0275fac = function HomeCategoriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeCategoriesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeCategoriesComponent, selectors: [["app-home-categories"]], decls: 1, vars: 6, consts: [[3, "getIndexPaginator", "title", "items", "showPaginator", "totalItemsToPaginator", "itemsForShowToPaginator", "controlStatePaginator"]], template: function HomeCategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-panel-items", 0);
        \u0275\u0275listener("getIndexPaginator", function HomeCategoriesComponent_Template_app_panel_items_getIndexPaginator_0_listener($event) {
          return ctx.ChangePage($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("title", ctx.categoryCurrent.name)("items", ctx.items$)("showPaginator", true)("totalItemsToPaginator", ctx.totalItemsToPaginator)("itemsForShowToPaginator", ctx.itemsForShowToPaginator)("controlStatePaginator", ctx.controlStatePaginator);
      }
    }, dependencies: [PanelItemsComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeCategoriesComponent, { className: "HomeCategoriesComponent", filePath: "src\\app\\categories\\home-categories\\home-categories.component.ts", lineNumber: 19 });
})();

// src/app/categories/categories-routing.module.ts
var routes = [
  {
    path: ":id",
    component: HomeCategoriesComponent
  }
];
var CategoriesRoutingModule = class _CategoriesRoutingModule {
  static {
    this.\u0275fac = function CategoriesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoriesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CategoriesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/categories/categories.module.ts
var CategoriesModule = class _CategoriesModule {
  static {
    this.\u0275fac = function CategoriesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoriesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CategoriesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, CategoriesRoutingModule, SharedComponentsModule] });
  }
};
export {
  CategoriesModule
};
//# sourceMappingURL=categories.module-AROVV4GA.js.map
