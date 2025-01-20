import {
  AppConfigModule
} from "./chunk-SFWASUY2.js";
import {
  FloatLabel,
  FloatLabelModule
} from "./chunk-UXA3NZEY.js";
import {
  AuthService
} from "./chunk-MWAZQMYL.js";
import {
  SuccessHandlingService
} from "./chunk-QSCOQFII.js";
import {
  AutoFocus,
  AutoFocusModule,
  BaseIcon,
  Button,
  ButtonDirective,
  ButtonModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ConnectedOverlayScrollHandler,
  ContentChildren,
  DOCUMENT,
  DefaultValueAccessor,
  Directive,
  DomHandler,
  ElementRef,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  HostListener,
  Inject,
  Input,
  InputText,
  InputTextModule,
  MaxLengthValidator,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  NgModule,
  NgOptimizedImage,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  OverlayService,
  PLATFORM_ID,
  Pipe,
  PrimeNGConfig,
  PrimeTemplate,
  ReactiveFormsModule,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  SharedModule,
  TimesIcon,
  TranslationKeys,
  UniqueComponentId,
  Validators,
  ViewChild,
  ViewEncapsulation$1,
  animate,
  booleanAttribute,
  forwardRef,
  inject,
  isPlatformBrowser,
  numberAttribute,
  setClassMetadata,
  style,
  transition,
  trigger,
  zindexutils,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-RIN3RA4U.js";

// src/app/home/components/landing/landing.component.ts
var _c0 = () => ({ "background": "linear-gradient(transparent 55%, black)" });
var _c1 = () => ({ "font-size": "18vw", "letter-spacing": "-5px", "z-index": "-1" });
var _c2 = () => ({ height: "40vh" });
var _c3 = () => ({ objectFit: "contain" });
var _c4 = (a0) => ({ "transform": a0 });
var _c5 = () => ({ "transform": "translate(-50%, -50%)" });
var _c6 = () => ({ "text-wrap": "nowrap", "font-size": "5rem" });
var _c7 = () => ({ "font-size": "5rem" });
var LandingComponent = class _LandingComponent {
  constructor() {
    this.dataScrollY = 0;
  }
  ScrollEvent() {
    this.dataScrollY = window.scrollY;
  }
  scrollToElement($element) {
    setTimeout(() => {
      $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 200);
  }
  static {
    this.\u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], hostBindings: function LandingComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function LandingComponent_scroll_HostBindingHandler($event) {
          return ctx.ScrollEvent($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 114, vars: 50, consts: [["features", ""], ["events", ""], ["pricing", ""], [1, "relative", "h-screen"], [1, "w-full", "h-full", "relative", "flex", "flex-column"], [1, "flex", "flex-column", "gap-5", "lg:flex-row", "justify-content-between", "p-4"], [1, "flex", "justify-content-center", "lg:justify-content-start", "align-items-center", "gap-4"], [1, "list-none", "flex", "gap-6", "p-0", "m-0"], [1, "text-white", "cursor-pointer", "transition-duration-200", "hover:text-primary-100"], [1, "text-white", "cursor-pointer", "transition-duration-200", "hover:text-primary-100", 3, "click"], [1, "flex", "justify-content-center", "lg:justify-content-end", "align-items-center", "gap-3"], ["pButton", "", "pRipple", "", "label", "Login", "title", "login", "routerLink", "login", 1, "w-8rem", "p-button-outlined", "text-white", "hover:text-white", "transition-duration-200", "hover:bg-red-500"], ["pButton", "", "pRipple", "", "label", "Register", "title", "Register", "routerLink", "register", 1, "w-8rem", "p-button-outlined", "text-white", "hover:text-white", "transition-duration-200", "hover:bg-red-500"], [1, "mt-6", "pt-0", "box", "relative", "flex-grow-1"], [1, "text-red-500", "font-bold", "text-center", "sticky", "top-0"], [1, "absolute", "bottom-0", "w-full"], ["ngSrc", "assets/landing/chairs.png", "alt", "chairs", "priority", "", "fill", "", 1, "chairs"], ["id", "features", 1, "flex", "justify-content-between", "py-6", "px-3", "lg:px-6", "w-full"], [1, "grid", "justify-content-around", "w-full"], [1, "col-12", "md:col-6", "lg:col-3"], [1, "relative", "h-4rem"], ["ngSrc", "assets/landing/movie.png", "alt", "", "fill", "", 1, "h-full"], [1, "text-2xl", "font-medium"], [1, "text-base", "m-0", "mt-2", "text-color"], ["ngSrc", "assets/landing/popcorn.png", "alt", "", "fill", "", 1, "h-full"], [1, "grid", "grid-nested", "grid-nogutter", "h-screen", "relative", "overflow-hidden"], [1, "col-12"], [1, "grid", "grid-nogutter", "h-full"], [1, "col", "relative", "posters"], ["ngSrc", "assets/landing/Movie-poster/Bad-boys-ride.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Movie-poster/Beetlejuice.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Movie-poster/Borderlands.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Movie-poster/Deadpool.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Movie-poster/Despicable-4.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Movie-poster/Inside-out-2.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Serie-poster/Anne-with-an-e.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Serie-poster/Breaking-bad.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Serie-poster/Chronicles-of-the-sun.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Serie-poster/Real-time-with-bill-maher.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Serie-poster/Rick-and-morty.jpg", "alt", "", "fill", "", 1, "w-full"], ["ngSrc", "assets/landing/Serie-poster/Salatut-elamat.jpg", "alt", "", "fill", "", 1, "w-full"], [1, "absolute", "top-50", "left-50", "text-backdrop"], ["id", "events", 1, "flex", "justify-content-around", "surface-card", "w-full", "bg-cover", "bg-no-repeat", "bg-bottom", "px-3", "lg:px-6", "relative", "h-7rem"], [1, "h-full", "w-5rem", "relative"], ["ngSrc", "assets/landing/Providers/apple-tv.jpg", "alt", "", "fill", "", "priority", "false", 1, "posters", "providers-image"], ["ngSrc", "assets/landing/Providers/prime-video.jpg", "alt", "", "fill", "", "priority", "false", 1, "h-full", "mx-1", "posters", "providers-image"], ["ngSrc", "assets/landing/Providers/hulu.jpg", "alt", "", "fill", "", "priority", "false", 1, "h-full", "mx-1", "posters", "providers-image"], ["ngSrc", "assets/landing/Providers/google-play.jpg", "alt", "", "fill", "", "priority", "false", 1, "h-full", "mx-1", "posters", "providers-image"], ["ngSrc", "assets/landing/Providers/sky.jpg", "alt", "", "fill", "", "priority", "false", 1, "h-full", "mx-1", "posters", "providers-image"], ["ngSrc", "assets/landing/Providers/play-suisse.jpg", "alt", "", "fill", "", "priority", "false", 1, "h-full", "mx-1", "posters", "providers-image"], ["id", "pricing", 1, "flex", "justify-content-center", "py-6", "w-full", "px-3", "lg:px-6"], [1, "grid", "justify-content-center", "w-full", 2, "max-width", "1200px"], [1, "col-12", "lg:col-4"], [1, "border-1", "surface-border", "surface-card", "h-full", "text-color", "border-round"], [1, "p-5", "border-bottom-1", "surface-border"], [1, "text-xl", "m-0", "mb-1", "text-800"], [1, "text-600"], [1, "text-color-secondary", "mt-2", "font-medium"], [1, "p-0", "mt-0", 2, "min-height", "175px"], [1, "list-none", "px-5", "py-2", "border-bottom-1", "surface-border"], [1, "text-color-secondary"], [1, "py-5", "px-5"], ["pButton", "", "pRipple", "", "routerLink", "register", 1, "flex", "justify-content-center", "w-full"], [1, "flex", "align-items-center", "justify-content-center", "py-5", 2, "background-color", "#292b2c"], [1, "grid", "w-full", 2, "max-width", "1200px"], [1, "col-12", "lg:col-6"], [1, "font-bold"]], template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div")(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "ul", 7)(6, "a", 8)(7, "li");
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "a", 9);
        \u0275\u0275listener("click", function LandingComponent_Template_a_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          const features_r2 = \u0275\u0275reference(24);
          return \u0275\u0275resetView(ctx.scrollToElement(features_r2));
        });
        \u0275\u0275elementStart(10, "li");
        \u0275\u0275text(11, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "a", 9);
        \u0275\u0275listener("click", function LandingComponent_Template_a_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          const pricing_r3 = \u0275\u0275reference(87);
          return \u0275\u0275resetView(ctx.scrollToElement(pricing_r3));
        });
        \u0275\u0275elementStart(13, "li");
        \u0275\u0275text(14, "Pricing");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275element(16, "button", 11)(17, "button", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 13)(19, "h1", 14);
        \u0275\u0275text(20, "SERFLIX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 15);
        \u0275\u0275element(22, "img", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 17, 0)(25, "div", 18)(26, "div", 19)(27, "div", 20);
        \u0275\u0275element(28, "img", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h3", 22);
        \u0275\u0275text(30, "Movies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 23);
        \u0275\u0275text(32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor magna aliqua.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 19)(34, "div", 20);
        \u0275\u0275element(35, "img", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h3", 22);
        \u0275\u0275text(37, "Series");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p", 23);
        \u0275\u0275text(39, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "div", 25)(41, "div", 26)(42, "div", 27)(43, "div", 28);
        \u0275\u0275element(44, "img", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 28);
        \u0275\u0275element(46, "img", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 28);
        \u0275\u0275element(48, "img", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 28);
        \u0275\u0275element(50, "img", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 28);
        \u0275\u0275element(52, "img", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 28);
        \u0275\u0275element(54, "img", 34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 26)(56, "div", 27)(57, "div", 28);
        \u0275\u0275element(58, "img", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 28);
        \u0275\u0275element(60, "img", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 28);
        \u0275\u0275element(62, "img", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 28);
        \u0275\u0275element(64, "img", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 28);
        \u0275\u0275element(66, "img", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 28);
        \u0275\u0275element(68, "img", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "div", 41)(70, "h2");
        \u0275\u0275text(71, "THE BEST PLATFORM");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 42, 1)(74, "div", 43);
        \u0275\u0275element(75, "img", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 43);
        \u0275\u0275element(77, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 43);
        \u0275\u0275element(79, "img", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 43);
        \u0275\u0275element(81, "img", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 43);
        \u0275\u0275element(83, "img", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 43);
        \u0275\u0275element(85, "img", 49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 50, 2)(88, "div", 51)(89, "div", 52)(90, "div", 53)(91, "div", 54)(92, "h3", 55);
        \u0275\u0275text(93, "Free");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "span", 56);
        \u0275\u0275text(95, "Know your favorites movies and series and create until five profiles in your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "p", 57);
        \u0275\u0275text(97, "$0");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "div")(99, "ul", 58)(100, "li", 59)(101, "span", 60);
        \u0275\u0275text(102, "Add 5 profiles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "li", 59)(104, "span", 60);
        \u0275\u0275text(105, "Visit any device");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(106, "div", 61)(107, "button", 62);
        \u0275\u0275text(108, "Get Started");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(109, "div", 63)(110, "div", 64)(111, "div", 65)(112, "h5", 66);
        \u0275\u0275text(113, "SERFLIX");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c0));
        \u0275\u0275advance(17);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c2));
        \u0275\u0275advance(7);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c3));
        \u0275\u0275advance(7);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c3));
        \u0275\u0275advance(7);
        \u0275\u0275styleMap(\u0275\u0275pureFunction1(37, _c4, "translateX(" + (ctx.dataScrollY - 1e3) + "px) rotateX(-4deg) rotateY(-10deg) rotateZ(7deg)"));
        \u0275\u0275advance(14);
        \u0275\u0275styleMap(\u0275\u0275pureFunction1(39, _c4, "translateX(" + (-ctx.dataScrollY + 800) + "px) rotateX(-4deg) rotateY(-10deg) rotateZ(7deg)"));
        \u0275\u0275advance(13);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c5));
        \u0275\u0275advance();
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c6));
        \u0275\u0275advance(5);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(45, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(46, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(47, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(48, _c3));
        \u0275\u0275advance(27);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(49, _c7));
      }
    }, dependencies: [RouterLink, ButtonDirective, NgOptimizedImage], styles: ["\n\n.posters[_ngcontent-%COMP%] {\n  filter: brightness(40%);\n  transition-duration: 50ms;\n}\n.posters[_ngcontent-%COMP%]:hover {\n  filter: brightness(1);\n}\n.text-backdrop[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(1.5rem);\n  backdrop-filter: blur(1.5rem);\n  padding: 1rem;\n}\n.providers-image[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.chairs[_ngcontent-%COMP%] {\n  object-fit: cover;\n  object-position: center 82%;\n  mask-image: linear-gradient(black 95%, transparent);\n  background-repeat: repeat-x;\n}\n@media (max-width: 768px) {\n  .chairs[_ngcontent-%COMP%] {\n    object-position: bottom;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src\\app\\home\\components\\landing\\landing.component.ts", lineNumber: 34 });
})();

// node_modules/primeng/fesm2022/primeng-icons-eye.mjs
var EyeIcon = class _EyeIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EyeIcon_BaseFactory;
    return function EyeIcon_Factory(__ngFactoryType__) {
      return (\u0275EyeIcon_BaseFactory || (\u0275EyeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_EyeIcon)))(__ngFactoryType__ || _EyeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _EyeIcon,
    selectors: [["EyeIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z", "fill", "currentColor"]],
    template: function EyeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeIcon, [{
    type: Component,
    args: [{
      selector: "EyeIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-eyeslash.mjs
var EyeSlashIcon = class _EyeSlashIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EyeSlashIcon_BaseFactory;
    return function EyeSlashIcon_Factory(__ngFactoryType__) {
      return (\u0275EyeSlashIcon_BaseFactory || (\u0275EyeSlashIcon_BaseFactory = \u0275\u0275getInheritedFactory(_EyeSlashIcon)))(__ngFactoryType__ || _EyeSlashIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _EyeSlashIcon,
    selectors: [["EyeSlashIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function EyeSlashIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeSlashIcon, [{
    type: Component,
    args: [{
      selector: "EyeSlashIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-password.mjs
var _c02 = ["input"];
var _c12 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c22 = (a0) => ({
  value: "visible",
  params: a0
});
var _c32 = (a0) => ({
  width: a0
});
function Password_ng_container_6_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 10);
    \u0275\u0275listener("click", function Password_ng_container_6_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-password-clear-icon");
    \u0275\u0275attribute("data-pc-section", "clearIcon");
  }
}
function Password_ng_container_6_3_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_6_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Password_ng_container_6_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_6_TimesIcon_1_Template, 1, 2, "TimesIcon", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275listener("click", function Password_ng_container_6_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clear());
    });
    \u0275\u0275template(3, Password_ng_container_6_3_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "clearIcon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.clearIconTemplate);
  }
}
function Password_ng_container_7_ng_container_1_EyeSlashIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "EyeSlashIcon", 13);
    \u0275\u0275listener("keypress", function Password_ng_container_7_ng_container_1_EyeSlashIcon_1_Template_EyeSlashIcon_keypress_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onEyeIconPress($event));
    })("click", function Password_ng_container_7_ng_container_1_EyeSlashIcon_1_Template_EyeSlashIcon_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "hideIcon");
  }
}
function Password_ng_container_7_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_7_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Password_ng_container_7_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_7_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275listener("click", function Password_ng_container_7_ng_container_1_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275template(1, Password_ng_container_7_ng_container_1_span_2_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.hideIconTemplate);
  }
}
function Password_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_7_ng_container_1_EyeSlashIcon_1_Template, 1, 1, "EyeSlashIcon", 11)(2, Password_ng_container_7_ng_container_1_span_2_Template, 2, 1, "span", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.hideIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hideIconTemplate);
  }
}
function Password_ng_container_7_ng_container_2_EyeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "EyeIcon", 13);
    \u0275\u0275listener("keypress", function Password_ng_container_7_ng_container_2_EyeIcon_1_Template_EyeIcon_keypress_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onEyeIconPress($event));
    })("click", function Password_ng_container_7_ng_container_2_EyeIcon_1_Template_EyeIcon_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "showIcon");
  }
}
function Password_ng_container_7_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_7_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Password_ng_container_7_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_7_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275listener("click", function Password_ng_container_7_ng_container_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275template(1, Password_ng_container_7_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.showIconTemplate);
  }
}
function Password_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_7_ng_container_2_EyeIcon_1_Template, 1, 1, "EyeIcon", 11)(2, Password_ng_container_7_ng_container_2_span_2_Template, 2, 1, "span", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.showIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showIconTemplate);
  }
}
function Password_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_7_ng_container_1_Template, 3, 2, "ng-container", 5)(2, Password_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.unmasked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.unmasked);
  }
}
function Password_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Password_div_8_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Password_div_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_div_8_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.contentTemplate);
  }
}
function Password_div_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275pipe(2, "mapper");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "meter");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pipeBind2(2, 6, ctx_r3.meter, ctx_r3.strengthClass))("ngStyle", \u0275\u0275pureFunction1(9, _c32, ctx_r3.meter ? ctx_r3.meter.width : ""));
    \u0275\u0275attribute("data-pc-section", "meterLabel");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-pc-section", "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.infoText);
  }
}
function Password_div_8_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Password_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15, 1);
    \u0275\u0275listener("click", function Password_div_8_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onOverlayClick($event));
    })("@overlayAnimation.start", function Password_div_8_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onAnimationStart($event));
    })("@overlayAnimation.done", function Password_div_8_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onAnimationEnd($event));
    });
    \u0275\u0275template(2, Password_div_8_ng_container_2_Template, 1, 0, "ng-container", 9)(3, Password_div_8_ng_container_3_Template, 2, 1, "ng-container", 16)(4, Password_div_8_ng_template_4_Template, 5, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, Password_div_8_ng_container_6_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r10 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "p-password-panel p-component")("@overlayAnimation", \u0275\u0275pureFunction1(10, _c22, \u0275\u0275pureFunction2(7, _c12, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    \u0275\u0275attribute("data-pc-section", "panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.contentTemplate)("ngIfElse", content_r10);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.footerTemplate);
  }
}
var PasswordDirective = class _PasswordDirective {
  document;
  platformId;
  renderer;
  el;
  zone;
  config;
  /**
   * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  promptLabel = "Enter a password";
  /**
   * Text for a weak password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  weakLabel = "Weak";
  /**
   * Text for a medium password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  mediumLabel = "Medium";
  /**
   * Text for a strong password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  strongLabel = "Strong";
  /**
   * Whether to show the strength indicator or not.
   * @group Props
   */
  feedback = true;
  /**
   * Sets the visibility of the password field.
   * @group Props
   */
  set showPassword(show) {
    this.el.nativeElement.type = show ? "text" : "password";
  }
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  panel;
  meter;
  info;
  filled;
  scrollHandler;
  documentResizeListener;
  constructor(document2, platformId, renderer, el, zone, config) {
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.zone = zone;
    this.config = config;
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput(e) {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  createPanel() {
    if (isPlatformBrowser(this.platformId)) {
      this.panel = this.renderer.createElement("div");
      this.renderer.addClass(this.panel, "p-password-panel");
      this.renderer.addClass(this.panel, "p-component");
      this.renderer.addClass(this.panel, "p-password-panel-overlay");
      this.renderer.addClass(this.panel, "p-connected-overlay");
      this.meter = this.renderer.createElement("div");
      this.renderer.addClass(this.meter, "p-password-meter");
      this.renderer.appendChild(this.panel, this.meter);
      this.info = this.renderer.createElement("div");
      this.renderer.addClass(this.info, "p-password-info");
      this.renderer.setProperty(this.info, "textContent", this.promptLabel);
      this.renderer.appendChild(this.panel, this.info);
      this.renderer.setStyle(this.panel, "minWidth", `${this.el.nativeElement.offsetWidth}px`);
      this.renderer.appendChild(document.body, this.panel);
    }
  }
  showOverlay() {
    if (this.feedback) {
      if (!this.panel) {
        this.createPanel();
      }
      this.renderer.setStyle(this.panel, "zIndex", String(++DomHandler.zindex));
      this.renderer.setStyle(this.panel, "display", "block");
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          DomHandler.addClass(this.panel, "p-connected-overlay-visible");
          this.bindScrollListener();
          this.bindDocumentResizeListener();
        }, 1);
      });
      DomHandler.absolutePosition(this.panel, this.el.nativeElement);
    }
  }
  hideOverlay() {
    if (this.feedback && this.panel) {
      DomHandler.addClass(this.panel, "p-connected-overlay-hidden");
      DomHandler.removeClass(this.panel, "p-connected-overlay-visible");
      this.unbindScrollListener();
      this.unbindDocumentResizeListener();
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.ngOnDestroy();
        }, 150);
      });
    }
  }
  onFocus() {
    this.showOverlay();
  }
  onBlur() {
    this.hideOverlay();
  }
  onKeyup(e) {
    if (this.feedback) {
      let value = e.target.value, label = null, meterPos = null;
      if (value.length === 0) {
        label = this.promptLabel;
        meterPos = "0px 0px";
      } else {
        var score = this.testStrength(value);
        if (score < 30) {
          label = this.weakLabel;
          meterPos = "0px -10px";
        } else if (score >= 30 && score < 80) {
          label = this.mediumLabel;
          meterPos = "0px -20px";
        } else if (score >= 80) {
          label = this.strongLabel;
          meterPos = "0px -30px";
        }
      }
      if (!this.panel || !DomHandler.hasClass(this.panel, "p-connected-overlay-visible")) {
        this.showOverlay();
      }
      this.renderer.setStyle(this.meter, "backgroundPosition", meterPos);
      this.info.textContent = label;
    }
  }
  testStrength(str) {
    let grade = 0;
    let val;
    val = str.match("[0-9]");
    grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
    val = str.match("[a-zA-Z]");
    grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
    val = str.match("[!@#$%^&*?_~.,;=]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
    val = str.match("[A-Z]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
    grade *= str.length / 8;
    return grade > 100 ? 100 : grade;
  }
  normalize(x, y) {
    let diff = x - y;
    if (diff <= 0) return x / y;
    else return 1 + 0.5 * (x / (x + y / 4));
  }
  get disabled() {
    return this.el.nativeElement.disabled;
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (DomHandler.hasClass(this.panel, "p-connected-overlay-visible")) {
          this.hideOverlay();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window2 = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window2, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (!DomHandler.isTouchDevice()) {
      this.hideOverlay();
    }
  }
  ngOnDestroy() {
    if (this.panel) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.unbindDocumentResizeListener();
      this.renderer.removeChild(this.document.body, this.panel);
      this.panel = null;
      this.meter = null;
      this.info = null;
    }
  }
  static \u0275fac = function PasswordDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordDirective)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PasswordDirective,
    selectors: [["", "pPassword", ""]],
    hostAttrs: [1, "p-inputtext", "p-component", "p-element"],
    hostVars: 4,
    hostBindings: function PasswordDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function PasswordDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        })("focus", function PasswordDirective_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function PasswordDirective_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("keyup", function PasswordDirective_keyup_HostBindingHandler($event) {
          return ctx.onKeyup($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("p-filled", ctx.filled)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled");
      }
    },
    inputs: {
      promptLabel: "promptLabel",
      weakLabel: "weakLabel",
      mediumLabel: "mediumLabel",
      strongLabel: "strongLabel",
      feedback: [2, "feedback", "feedback", booleanAttribute],
      showPassword: "showPassword",
      variant: "variant"
    },
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordDirective, [{
    type: Directive,
    args: [{
      selector: "[pPassword]",
      host: {
        class: "p-inputtext p-component p-element",
        "[class.p-filled]": "filled",
        "[class.p-variant-filled]": 'variant === "filled" || config.inputStyle() === "filled"'
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }], {
    promptLabel: [{
      type: Input
    }],
    weakLabel: [{
      type: Input
    }],
    mediumLabel: [{
      type: Input
    }],
    strongLabel: [{
      type: Input
    }],
    feedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPassword: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onKeyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var MapperPipe = class _MapperPipe {
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static \u0275fac = function MapperPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MapperPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "mapper",
    type: _MapperPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapperPipe, [{
    type: Pipe,
    args: [{
      name: "mapper",
      pure: true
    }]
  }], null, null);
})();
var Password_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Password),
  multi: true
};
var Password = class _Password {
  document;
  platformId;
  renderer;
  cd;
  config;
  el;
  overlayService;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Label of the input for accessibility.
   * @group Props
   */
  label;
  /**
   * Indicates whether the component is disabled or not.
   * @group Props
   */
  disabled;
  /**
   * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  promptLabel;
  /**
   * Regex value for medium regex.
   * @group Props
   */
  mediumRegex = "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";
  /**
   * Regex value for strong regex.
   * @group Props
   */
  strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";
  /**
   * Text for a weak password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  weakLabel;
  /**
   * Text for a medium password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  mediumLabel;
  /**
   * specifies the maximum number of characters allowed in the input element.
   * @group Props
   */
  maxLength;
  /**
   * Text for a strong password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  strongLabel;
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * Whether to show the strength indicator or not.
   * @group Props
   */
  feedback = true;
  /**
   * Id of the element or "body" for document where the overlay should be appended to.
   * @group Props
   */
  appendTo;
  /**
   * Whether to show an icon to display the password as plain text.
   * @group Props
   */
  toggleMask;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Specify automated assistance in filling out password by browser.
   * @group Props
   */
  autocomplete;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  input;
  contentTemplate;
  footerTemplate;
  headerTemplate;
  clearIconTemplate;
  hideIconTemplate;
  showIconTemplate;
  templates;
  overlayVisible = false;
  meter;
  infoText;
  focused = false;
  unmasked = false;
  mediumCheckRegExp;
  strongCheckRegExp;
  resizeListener;
  scrollHandler;
  overlay;
  value = null;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  translationSubscription;
  constructor(document2, platformId, renderer, cd, config, el, overlayService) {
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.el = el;
    this.overlayService = overlayService;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "hideicon":
          this.hideIconTemplate = item.template;
          break;
        case "showicon":
          this.showIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  ngOnInit() {
    this.infoText = this.promptText();
    this.mediumCheckRegExp = new RegExp(this.mediumRegex);
    this.strongCheckRegExp = new RegExp(this.strongRegex);
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.updateUI(this.value || "");
    });
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.overlay = event.element;
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        this.appendContainer();
        this.alignOverlay();
        this.bindScrollListener();
        this.bindResizeListener();
        break;
      case "void":
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.overlay = null;
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.overlay);
      else this.document.getElementById(this.appendTo).appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.appendTo) {
      this.overlay.style.minWidth = DomHandler.getOuterWidth(this.input.nativeElement) + "px";
      DomHandler.absolutePosition(this.overlay, this.input.nativeElement);
    } else {
      DomHandler.relativePosition(this.overlay, this.input.nativeElement);
    }
  }
  onInput(event) {
    this.value = event.target.value;
    this.onModelChange(this.value);
  }
  onInputFocus(event) {
    this.focused = true;
    if (this.feedback) {
      this.overlayVisible = true;
    }
    this.onFocus.emit(event);
  }
  onEyeIconPress(event) {
    switch (event.code) {
      case "Enter":
        this.onMaskToggle();
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  onInputBlur(event) {
    this.focused = false;
    if (this.feedback) {
      this.overlayVisible = false;
    }
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  onKeyUp(event) {
    if (this.feedback) {
      let value = event.target.value;
      this.updateUI(value);
      if (event.code === "Escape") {
        this.overlayVisible && (this.overlayVisible = false);
        return;
      }
      if (!this.overlayVisible) {
        this.overlayVisible = true;
      }
    }
  }
  updateUI(value) {
    let label = null;
    let meter = null;
    switch (this.testStrength(value)) {
      case 1:
        label = this.weakText();
        meter = {
          strength: "weak",
          width: "33.33%"
        };
        break;
      case 2:
        label = this.mediumText();
        meter = {
          strength: "medium",
          width: "66.66%"
        };
        break;
      case 3:
        label = this.strongText();
        meter = {
          strength: "strong",
          width: "100%"
        };
        break;
      default:
        label = this.promptText();
        meter = null;
        break;
    }
    this.meter = meter;
    this.infoText = label;
  }
  onMaskToggle() {
    this.unmasked = !this.unmasked;
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  testStrength(str) {
    let level = 0;
    if (this.strongCheckRegExp.test(str)) level = 3;
    else if (this.mediumCheckRegExp.test(str)) level = 2;
    else if (str.length) level = 1;
    return level;
  }
  writeValue(value) {
    if (value === void 0) this.value = null;
    else this.value = value;
    if (this.feedback) this.updateUI(this.value || "");
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  bindScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.input.nativeElement, () => {
          if (this.overlayVisible) {
            this.overlayVisible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        const window2 = this.document.defaultView;
        this.resizeListener = this.renderer.listen(window2, "resize", () => {
          if (this.overlayVisible && !DomHandler.isTouchDevice()) {
            this.overlayVisible = false;
          }
        });
      }
    }
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  containerClass(toggleMask) {
    return {
      "p-password p-component p-inputwrapper": true,
      "p-input-icon-right": toggleMask
    };
  }
  inputFieldClass(disabled) {
    return {
      "p-password-input": true,
      "p-disabled": disabled
    };
  }
  strengthClass(meter) {
    return `p-password-strength ${meter ? meter.strength : ""}`;
  }
  filled() {
    return this.value != null && this.value.toString().length > 0;
  }
  promptText() {
    return this.promptLabel || this.getTranslation(TranslationKeys.PASSWORD_PROMPT);
  }
  weakText() {
    return this.weakLabel || this.getTranslation(TranslationKeys.WEAK);
  }
  mediumText() {
    return this.mediumLabel || this.getTranslation(TranslationKeys.MEDIUM);
  }
  strongText() {
    return this.strongLabel || this.getTranslation(TranslationKeys.STRONG);
  }
  restoreAppend() {
    if (this.overlay && this.appendTo) {
      if (this.appendTo === "body") this.renderer.removeChild(this.document.body, this.overlay);
      else this.document.getElementById(this.appendTo).removeChild(this.overlay);
    }
  }
  inputType(unmasked) {
    return unmasked ? "text" : "password";
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.writeValue(this.value);
    this.onClear.emit();
  }
  ngOnDestroy() {
    if (this.overlay) {
      zindexutils.clear(this.overlay);
      this.overlay = null;
    }
    this.restoreAppend();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
  static \u0275fac = function Password_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Password)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PrimeNGConfig), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Password,
    selectors: [["p-password"]],
    contentQueries: function Password_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Password_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 8,
    hostBindings: function Password_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-inputwrapper-filled", ctx.filled())("p-inputwrapper-focus", ctx.focused)("p-password-clearable", ctx.showClear)("p-password-mask", ctx.toggleMask);
      }
    },
    inputs: {
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      promptLabel: "promptLabel",
      mediumRegex: "mediumRegex",
      strongRegex: "strongRegex",
      weakLabel: "weakLabel",
      mediumLabel: "mediumLabel",
      maxLength: [2, "maxLength", "maxLength", numberAttribute],
      strongLabel: "strongLabel",
      inputId: "inputId",
      feedback: [2, "feedback", "feedback", booleanAttribute],
      appendTo: "appendTo",
      toggleMask: [2, "toggleMask", "toggleMask", booleanAttribute],
      inputStyleClass: "inputStyleClass",
      styleClass: "styleClass",
      style: "style",
      inputStyle: "inputStyle",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autocomplete: "autocomplete",
      placeholder: "placeholder",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      variant: "variant"
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClear: "onClear"
    },
    features: [\u0275\u0275ProvidersFeature([Password_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    decls: 9,
    vars: 35,
    consts: [["input", ""], ["overlay", ""], ["content", ""], [3, "ngClass", "ngStyle"], ["pInputText", "", "pAutoFocus", "", 3, "input", "focus", "blur", "keyup", "ngClass", "disabled", "ngStyle", "value", "variant", "autofocus"], [4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], [3, "styleClass", "click", 4, "ngIf"], [1, "p-password-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [3, "click", "styleClass"], ["tabIndex", "0", 3, "keypress", "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["tabIndex", "0", 3, "keypress", "click"], [3, "click"], [3, "click", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "p-password-meter"], [1, "p-password-info"]],
    template: function Password_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275pipe(1, "mapper");
        \u0275\u0275elementStart(2, "input", 4, 0);
        \u0275\u0275pipe(4, "mapper");
        \u0275\u0275pipe(5, "mapper");
        \u0275\u0275listener("input", function Password_Template_input_input_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInput($event));
        })("focus", function Password_Template_input_focus_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function Password_Template_input_blur_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("keyup", function Password_Template_input_keyup_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyUp($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, Password_ng_container_6_Template, 4, 3, "ng-container", 5)(7, Password_ng_container_7_Template, 3, 2, "ng-container", 5)(8, Password_div_8_Template, 7, 12, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pipeBind2(1, 26, ctx.toggleMask, ctx.containerClass))("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "password")("data-pc-section", "root");
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.inputStyleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pipeBind2(4, 29, ctx.disabled, ctx.inputFieldClass))("disabled", ctx.disabled)("ngStyle", ctx.inputStyle)("value", ctx.value)("variant", ctx.variant)("autofocus", ctx.autofocus);
        \u0275\u0275attribute("label", ctx.label)("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("id", ctx.inputId)("type", \u0275\u0275pipeBind2(5, 32, ctx.unmasked, ctx.inputType))("placeholder", ctx.placeholder)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxLength)("data-pc-section", "input");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.showClear && ctx.value != null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.toggleMask);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.overlayVisible);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon, EyeSlashIcon, EyeIcon, MapperPipe],
    styles: ["@layer primeng{.p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-input::-ms-reveal,.p-password-input::-ms-clear{display:none}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password .p-icon{cursor:pointer}.p-password-clearable.p-password-mask .p-password-clear-icon{margin-top:unset}.p-password-clearable{position:relative}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Password, [{
    type: Component,
    args: [{
      selector: "p-password",
      template: `
        <div [ngClass]="toggleMask | mapper: containerClass" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'password'" [attr.data-pc-section]="'root'">
            <input
                #input
                [attr.label]="label"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [attr.id]="inputId"
                pInputText
                [ngClass]="disabled | mapper: inputFieldClass"
                [disabled]="disabled"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [attr.type]="unmasked | mapper: inputType"
                [attr.placeholder]="placeholder"
                [attr.autocomplete]="autocomplete"
                [value]="value"
                [variant]="variant"
                (input)="onInput($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keyup)="onKeyUp($event)"
                [attr.maxlength]="maxLength"
                [attr.data-pc-section]="'input'"
                pAutoFocus
                [autofocus]="autofocus"
            />
            <ng-container *ngIf="showClear && value != null">
                <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-password-clear-icon'" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
                <span (click)="clear()" class="p-password-clear-icon" [attr.data-pc-section]="'clearIcon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ng-container *ngIf="toggleMask">
                <ng-container *ngIf="unmasked">
                    <EyeSlashIcon *ngIf="!hideIconTemplate" tabIndex="0" (keypress)="onEyeIconPress($event)" (click)="onMaskToggle()" [attr.data-pc-section]="'hideIcon'" />
                    <span *ngIf="hideIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="hideIconTemplate"></ng-template>
                    </span>
                </ng-container>
                <ng-container *ngIf="!unmasked">
                    <EyeIcon *ngIf="!showIconTemplate" tabIndex="0" (keypress)="onEyeIconPress($event)" (click)="onMaskToggle()" [attr.data-pc-section]="'showIcon'" />
                    <span *ngIf="showIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="showIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </ng-container>

            <div
                #overlay
                *ngIf="overlayVisible"
                [ngClass]="'p-password-panel p-component'"
                (click)="onOverlayClick($event)"
                [@overlayAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
                (@overlayAnimation.start)="onAnimationStart($event)"
                (@overlayAnimation.done)="onAnimationEnd($event)"
                [attr.data-pc-section]="'panel'"
            >
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <ng-container *ngIf="contentTemplate; else content">
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </ng-container>
                <ng-template #content>
                    <div class="p-password-meter" [attr.data-pc-section]="'meter'">
                        <div [ngClass]="meter | mapper: strengthClass" [ngStyle]="{ width: meter ? meter.width : '' }" [attr.data-pc-section]="'meterLabel'"></div>
                    </div>
                    <div class="p-password-info" [attr.data-pc-section]="'info'">{{ infoText }}</div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled()",
        "[class.p-inputwrapper-focus]": "focused",
        "[class.p-password-clearable]": "showClear",
        "[class.p-password-mask]": "toggleMask"
      },
      providers: [Password_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-input::-ms-reveal,.p-password-input::-ms-clear{display:none}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password .p-icon{cursor:pointer}.p-password-clearable.p-password-mask .p-password-clear-icon{margin-top:unset}.p-password-clearable{position:relative}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: ElementRef
  }, {
    type: OverlayService
  }], {
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    promptLabel: [{
      type: Input
    }],
    mediumRegex: [{
      type: Input
    }],
    strongRegex: [{
      type: Input
    }],
    weakLabel: [{
      type: Input
    }],
    mediumLabel: [{
      type: Input
    }],
    maxLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strongLabel: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    feedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    toggleMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    inputStyleClass: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PasswordModule = class _PasswordModule {
  static \u0275fac = function PasswordModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PasswordModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, InputTextModule, AutoFocusModule, TimesIcon, EyeSlashIcon, EyeIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, InputTextModule, AutoFocusModule, TimesIcon, EyeSlashIcon, EyeIcon],
      exports: [PasswordDirective, Password, SharedModule],
      declarations: [PasswordDirective, Password, MapperPipe]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-divider.mjs
var _c03 = ["*"];
var Divider = class _Divider {
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Specifies the orientation.
   * @group Props
   */
  layout = "horizontal";
  /**
   * Border style type.
   * @group Props
   */
  type = "solid";
  /**
   * Alignment of the content.
   * @group Props
   */
  align;
  containerClass() {
    return {
      "p-divider p-component": true,
      "p-divider-horizontal": this.layout === "horizontal",
      "p-divider-vertical": this.layout === "vertical",
      "p-divider-solid": this.type === "solid",
      "p-divider-dashed": this.type === "dashed",
      "p-divider-dotted": this.type === "dotted",
      "p-divider-left": this.layout === "horizontal" && (!this.align || this.align === "left"),
      "p-divider-center": this.layout === "horizontal" && this.align === "center" || this.layout === "vertical" && (!this.align || this.align === "center"),
      "p-divider-right": this.layout === "horizontal" && this.align === "right",
      "p-divider-top": this.layout === "vertical" && this.align === "top",
      "p-divider-bottom": this.layout === "vertical" && this.align === "bottom"
    };
  }
  static \u0275fac = function Divider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Divider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Divider,
    selectors: [["p-divider"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      layout: "layout",
      type: "type",
      align: "align"
    },
    ngContentSelectors: _c03,
    decls: 3,
    vars: 6,
    consts: [["role", "separator", 3, "ngClass", "ngStyle"], [1, "p-divider-content"]],
    template: function Divider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        \u0275\u0275attribute("aria-orientation", ctx.layout)("data-pc-name", "divider");
      }
    },
    dependencies: [NgClass, NgStyle],
    styles: ['@layer primeng{.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-vertical:before{border-left-style:dotted}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Divider, [{
    type: Component,
    args: [{
      selector: "p-divider",
      template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" role="separator" [attr.aria-orientation]="layout" [attr.data-pc-name]="'divider'">
            <div class="p-divider-content">
                <ng-content></ng-content>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-vertical:before{border-left-style:dotted}}\n']
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var DividerModule = class _DividerModule {
  static \u0275fac = function DividerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DividerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DividerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Divider],
      declarations: [Divider]
    }]
  }], null, null);
})();

// src/app/home/components/login/login.component.ts
function LoginComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275text(1, "Pick a password");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
    \u0275\u0275elementStart(1, "p", 16);
    \u0275\u0275text(2, "Suggestions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 17)(4, "li");
    \u0275\u0275text(5, "At least one lowercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, "At least one uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, "At least one numeric");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Minimum 8 characters");
    \u0275\u0275elementEnd()();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(router) {
    this.router = router;
    this._auth = inject(AuthService);
    this._success = inject(SuccessHandlingService);
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(9)])
    });
    this.loading = false;
  }
  Login() {
    if (this.loginForm.invalid) {
      this._auth.ShowError(new Error("Invalid form"));
      return false;
    }
    const { username, password } = this.loginForm.value;
    this.loading = true;
    this._auth.Login(username, password).subscribe({
      next: () => {
        this._success.showSuccessMessage("Login successful");
        this.router.navigate(["/profile"]);
      },
      error: () => {
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
    return true;
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 28, vars: 3, consts: [[1, "w-full", "h-screen", "p-8"], [3, "formGroup"], [1, "m-auto", "w-25rem", "h-30rem", "bg-red-600", "m-auto", "flex", "flex-column", "justify-content-between", "align-items-center", "p-4", "border-round", "shadow-3"], ["pInputText", "", "id", "username", "formControlName", "username", 1, "w-15rem"], ["for", "username"], ["id", "password", "formControlName", "password", "placeholder", "Password", 3, "toggleMask"], ["pTemplate", "header"], ["pTemplate", "footer"], ["for", "password"], ["label", "Login", "icon", "pi pi-sign-in", 1, "my-2", 3, "onClick", "loading"], ["routerLink", "/register"], [1, "my-3"], ["icon", "pi pi-google", 1, "mr-2"], ["icon", "pi pi-facebook", 1, "mr-2"], ["icon", "pi pi-github", 1, "mr-2"], ["icon", "pi pi-microsoft", 1, "mr-2"], [1, "mt-2"], [1, "pl-2", "ml-2", "mt-0", 2, "line-height", "1.5"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div");
        \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "h1");
        \u0275\u0275text(5, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p-floatLabel");
        \u0275\u0275element(7, "input", 3);
        \u0275\u0275elementStart(8, "label", 4);
        \u0275\u0275text(9, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "br");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p-floatLabel")(12, "p-password", 5);
        \u0275\u0275template(13, LoginComponent_ng_template_13_Template, 2, 0, "ng-template", 6)(14, LoginComponent_ng_template_14_Template, 12, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "label", 8);
        \u0275\u0275text(16, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "br");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p-button", 9);
        \u0275\u0275listener("onClick", function LoginComponent_Template_p_button_onClick_18_listener() {
          return ctx.Login();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "small");
        \u0275\u0275text(20, "If you don't have account, ");
        \u0275\u0275elementStart(21, "a", 10);
        \u0275\u0275text(22, "Register");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 11);
        \u0275\u0275element(24, "p-button", 12)(25, "p-button", 13)(26, "p-button", 14)(27, "p-button", 15);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(10);
        \u0275\u0275property("toggleMask", true);
        \u0275\u0275advance(6);
        \u0275\u0275property("loading", ctx.loading);
      }
    }, dependencies: [RouterLink, Button, PrimeTemplate, InputText, Password, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FloatLabel, Divider], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\home\\components\\login\\login.component.ts", lineNumber: 10 });
})();

// src/app/home/components/register/register.component.ts
var _c04 = () => ({ height: "34rem" });
function RegisterComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275text(1, "Pick a password");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
    \u0275\u0275elementStart(1, "p", 18);
    \u0275\u0275text(2, "Suggestions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 19)(4, "li");
    \u0275\u0275text(5, "At least one lowercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, "At least one uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, "At least one numeric");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Minimum 8 characters");
    \u0275\u0275elementEnd()();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(router) {
    this.router = router;
    this._auth = inject(AuthService);
    this._success = inject(SuccessHandlingService);
    this.loading = false;
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(10)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(9)])
    });
  }
  Register() {
    if (this.registerForm.invalid) {
      this._auth.ShowError(new Error("Invalid form"));
      return false;
    }
    const { name, email, password } = this.registerForm.value;
    this.loading = true;
    this._auth.Register(name, email, password).subscribe({
      next: () => {
        this._success.showSuccessMessage("User registered successfully");
        this.router.navigate(["/profile"]);
      },
      error: () => {
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
    return true;
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 32, vars: 7, consts: [[1, "w-full", "h-screen", "p-8"], [3, "formGroup"], [1, "m-auto", "w-25rem", "bg-red-600", "m-auto", "flex", "flex-column", "justify-content-between", "align-items-center", "p-4", "border-round", "shadow-3"], ["pInputText", "", "id", "new-user", "formControlName", "name", 1, "w-15rem", 3, "maxlength"], ["for", "new-user"], ["pInputText", "", "id", "new-email", "formControlName", "email", 1, "w-15rem"], ["for", "new-email"], ["id", "password", "formControlName", "password", 1, "w-15rem", 3, "toggleMask"], ["pTemplate", "header"], ["pTemplate", "footer"], ["for", "password"], ["label", "Register", "icon", "pi pi-sign-in", 1, "my-2", 3, "onClick", "loading"], ["routerLink", "/login"], [1, "my-3"], ["icon", "pi pi-google", 1, "mr-2"], ["icon", "pi pi-facebook", 1, "mr-2"], ["icon", "pi pi-github", 1, "mr-2"], ["icon", "pi pi-microsoft", 1, "mr-2"], [1, "mt-2"], [1, "pl-2", "ml-2", "mt-0", 2, "line-height", "1.5"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Register");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p-floatLabel");
        \u0275\u0275element(6, "input", 3);
        \u0275\u0275elementStart(7, "label", 4);
        \u0275\u0275text(8, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "br");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p-floatLabel");
        \u0275\u0275element(11, "input", 5);
        \u0275\u0275elementStart(12, "label", 6);
        \u0275\u0275text(13, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "br");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p-floatLabel")(16, "p-password", 7);
        \u0275\u0275template(17, RegisterComponent_ng_template_17_Template, 2, 0, "ng-template", 8)(18, RegisterComponent_ng_template_18_Template, 12, 0, "ng-template", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "label", 10);
        \u0275\u0275text(20, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "br");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p-button", 11);
        \u0275\u0275listener("onClick", function RegisterComponent_Template_p_button_onClick_22_listener() {
          return ctx.Register();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "small");
        \u0275\u0275text(24, "If you have account, ");
        \u0275\u0275elementStart(25, "a", 12);
        \u0275\u0275text(26, "Login");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 13);
        \u0275\u0275element(28, "p-button", 14)(29, "p-button", 15)(30, "p-button", 16)(31, "p-button", 17);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.registerForm);
        \u0275\u0275advance();
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c04));
        \u0275\u0275advance(4);
        \u0275\u0275property("maxlength", 40);
        \u0275\u0275advance(10);
        \u0275\u0275property("toggleMask", true);
        \u0275\u0275advance(6);
        \u0275\u0275property("loading", ctx.loading);
      }
    }, dependencies: [RouterLink, Button, PrimeTemplate, InputText, Password, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, FloatLabel, Divider], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\home\\components\\register\\register.component.ts", lineNumber: 11 });
})();

// src/app/home/home-routing.module.ts
var routes = [
  {
    path: "",
    component: LandingComponent,
    title: "Serflix"
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Login"
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Register"
  }
];
var HomeRoutingModule = class _HomeRoutingModule {
  static {
    this.\u0275fac = function HomeRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/home/home.module.ts
var HomeModule = class _HomeModule {
  static {
    this.\u0275fac = function HomeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      HomeRoutingModule,
      ButtonModule,
      InputTextModule,
      AppConfigModule,
      RouterModule,
      PasswordModule,
      ReactiveFormsModule,
      FloatLabelModule,
      DividerModule
    ] });
  }
};
export {
  HomeModule
};
//# sourceMappingURL=home.module-RIDVWJ5Z.js.map
