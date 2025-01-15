import {
  SearchService
} from "./chunk-7QQBCKL5.js";
import {
  PanelItemsComponent,
  SharedComponentsModule
} from "./chunk-FLF2A32M.js";
import {
  ActivatedRoute,
  Router,
  RouterModule,
  inject,
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

// src/app/search/components/search.component.ts
var SearchComponent = class _SearchComponent {
  constructor(currentRoute, router2) {
    this.currentRoute = currentRoute;
    this.router = router2;
    this._search = inject(SearchService);
  }
  ngOnInit() {
    this.currentRoute.queryParams.subscribe((params) => {
      const { query } = params;
      if (!query)
        this.router.navigate(["../"], { relativeTo: this.currentRoute });
      this.movies$ = this._search.getItemsByQuery(query, 1, 1);
    });
  }
  Selected(obj) {
    if (obj.type === "movie") {
      this.router.navigate(["../", "movie", obj.id], { relativeTo: this.currentRoute });
      return;
    }
    this.router.navigate(["../", "serie", obj.id], { relativeTo: this.currentRoute });
  }
  static {
    this.\u0275fac = function SearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchComponent, selectors: [["app-search"]], decls: 1, vars: 1, consts: [["title", "Search", 3, "getIdAndType", "items"]], template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-panel-items", 0);
        \u0275\u0275listener("getIdAndType", function SearchComponent_Template_app_panel_items_getIdAndType_0_listener($event) {
          return ctx.Selected($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("items", ctx.movies$);
      }
    }, dependencies: [PanelItemsComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchComponent, { className: "SearchComponent", filePath: "src\\app\\search\\components\\search.component.ts", lineNumber: 11 });
})();

// src/app/search/search-routing.module.ts
var router = [
  { path: "", component: SearchComponent }
];
var SearchMoviesRoutingModule = class _SearchMoviesRoutingModule {
  static {
    this.\u0275fac = function SearchMoviesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchMoviesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SearchMoviesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(router), RouterModule] });
  }
};

// src/app/search/search.module.ts
var SearchMoviesModule = class _SearchMoviesModule {
  static {
    this.\u0275fac = function SearchMoviesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchMoviesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SearchMoviesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [SearchService], imports: [
      SearchMoviesRoutingModule,
      SharedComponentsModule
    ] });
  }
};
export {
  SearchMoviesModule
};
//# sourceMappingURL=search.module-XSDV5BBQ.js.map
