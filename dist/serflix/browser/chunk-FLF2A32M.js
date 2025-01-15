import {
  ActivatedRoute,
  AsyncPipe,
  AutoFocus,
  AutoFocusModule,
  BaseIcon,
  ButtonDirective,
  ButtonModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ConnectedOverlayScrollHandler,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  DomHandler,
  ElementRef,
  EventEmitter,
  FilterService,
  Footer,
  FormsModule,
  Header,
  Inject,
  Injector,
  Input,
  InputText,
  InputTextModule,
  NG_VALUE_ACCESSOR,
  NavigationEnd,
  NgClass,
  NgControl,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgOptimizedImage,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  ObjectUtils,
  Output,
  OverlayService,
  PLATFORM_ID,
  PrimeNGConfig,
  PrimeTemplate,
  Renderer2,
  Ripple,
  RippleModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  SharedModule,
  SpinnerIcon,
  TimesIcon,
  Tooltip,
  TooltipModule,
  TranslationKeys,
  UniqueComponentId,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  animate,
  animation,
  booleanAttribute,
  computed,
  effect,
  filter,
  forwardRef,
  inject,
  input,
  isPlatformBrowser,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  style,
  transition,
  trigger,
  useAnimation,
  zindexutils,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-RIN3RA4U.js";

// node_modules/primeng/fesm2022/primeng-skeleton.mjs
var Skeleton = class _Skeleton {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Shape of the element.
   * @group Props
   */
  shape = "rectangle";
  /**
   * Type of the animation.
   * @gruop Props
   */
  animation = "wave";
  /**
   * Border radius of the element, defaults to value from theme.
   * @group Props
   */
  borderRadius;
  /**
   * Size of the skeleton.
   * @group Props
   */
  size;
  /**
   * Width of the element.
   * @group Props
   */
  width = "100%";
  /**
   * Height of the element.
   * @group Props
   */
  height = "1rem";
  containerClass() {
    return {
      "p-skeleton p-component": true,
      "p-skeleton-circle": this.shape === "circle",
      "p-skeleton-none": this.animation === "none"
    };
  }
  get containerStyle() {
    if (this.size) return __spreadProps(__spreadValues({}, this.style), {
      width: this.size,
      height: this.size,
      borderRadius: this.borderRadius
    });
    else return __spreadValues({
      width: this.width,
      height: this.height,
      borderRadius: this.borderRadius
    }, this.style);
  }
  static \u0275fac = function Skeleton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Skeleton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Skeleton,
    selectors: [["p-skeleton"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      shape: "shape",
      animation: "animation",
      borderRadius: "borderRadius",
      size: "size",
      width: "width",
      height: "height"
    },
    decls: 1,
    vars: 7,
    consts: [[3, "ngClass", "ngStyle"]],
    template: function Skeleton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle);
        \u0275\u0275attribute("data-pc-name", "skeleton")("aria-hidden", true)("data-pc-section", "root");
      }
    },
    dependencies: [NgClass, NgStyle],
    styles: ['@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Skeleton, [{
    type: Component,
    args: [{
      selector: "p-skeleton",
      template: ` <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="containerStyle" [attr.data-pc-name]="'skeleton'" [attr.aria-hidden]="true" [attr.data-pc-section]="'root'"></div> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n']
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    borderRadius: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
var SkeletonModule = class _SkeletonModule {
  static \u0275fac = function SkeletonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkeletonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SkeletonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Skeleton],
      declarations: [Skeleton]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var FocusTrap = class _FocusTrap {
  /**
   * When set as true, focus wouldn't be managed.
   * @group Props
   */
  pFocusTrapDisabled = false;
  platformId = inject(PLATFORM_ID);
  host = inject(ElementRef);
  document = inject(DOCUMENT);
  firstHiddenFocusableElement;
  lastHiddenFocusableElement;
  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled) {
      !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements();
    }
  }
  ngOnChanges(changes) {
    if (changes.pFocusTrapDisabled && isPlatformBrowser(this.platformId)) {
      if (changes.pFocusTrapDisabled.currentValue) {
        this.removeHiddenFocusableElements();
      } else {
        this.createHiddenFocusableElements();
      }
    }
  }
  removeHiddenFocusableElements() {
    if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) {
      this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
    }
    if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) {
      this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
    }
  }
  getComputedSelector(selector) {
    return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`;
  }
  createHiddenFocusableElements() {
    const tabindex = "0";
    const createFocusableElement = (onFocus) => {
      return DomHandler.createElement("span", {
        class: "p-hidden-accessible p-hidden-focusable",
        tabindex,
        role: "presentation",
        "data-p-hidden-accessible": true,
        "data-p-hidden-focusable": true,
        onFocus: onFocus?.bind(this)
      });
    };
    this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
    this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
    this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
    this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
    this.host.nativeElement.prepend(this.firstHiddenFocusableElement);
    this.host.nativeElement.append(this.lastHiddenFocusableElement);
  }
  onFirstHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !this.host.nativeElement?.contains(relatedTarget) ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
    DomHandler.focus(focusableElement);
  }
  onLastHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !this.host.nativeElement?.contains(relatedTarget) ? DomHandler.getLastFocusableElement(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
    DomHandler.focus(focusableElement);
  }
  static \u0275fac = function FocusTrap_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrap)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FocusTrap,
    selectors: [["", "pFocusTrap", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      pFocusTrapDisabled: [2, "pFocusTrapDisabled", "pFocusTrapDisabled", booleanAttribute]
    },
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
    type: Directive,
    args: [{
      selector: "[pFocusTrap]",
      host: {
        class: "p-element"
      }
    }]
  }], null, {
    pFocusTrapDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var FocusTrapModule = class _FocusTrapModule {
  static \u0275fac = function FocusTrapModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FocusTrapModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [FocusTrap],
      declarations: [FocusTrap]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs
var WindowMaximizeIcon = class _WindowMaximizeIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WindowMaximizeIcon_BaseFactory;
    return function WindowMaximizeIcon_Factory(__ngFactoryType__) {
      return (\u0275WindowMaximizeIcon_BaseFactory || (\u0275WindowMaximizeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_WindowMaximizeIcon)))(__ngFactoryType__ || _WindowMaximizeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WindowMaximizeIcon,
    selectors: [["WindowMaximizeIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function WindowMaximizeIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMaximizeIcon, [{
    type: Component,
    args: [{
      selector: "WindowMaximizeIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z"
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

// node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs
var WindowMinimizeIcon = class _WindowMinimizeIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WindowMinimizeIcon_BaseFactory;
    return function WindowMinimizeIcon_Factory(__ngFactoryType__) {
      return (\u0275WindowMinimizeIcon_BaseFactory || (\u0275WindowMinimizeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_WindowMinimizeIcon)))(__ngFactoryType__ || _WindowMinimizeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WindowMinimizeIcon,
    selectors: [["WindowMinimizeIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function WindowMinimizeIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMinimizeIcon, [{
    type: Component,
    args: [{
      selector: "WindowMinimizeIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z"
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

// node_modules/primeng/fesm2022/primeng-dialog.mjs
var _c0 = ["titlebar"];
var _c1 = ["content"];
var _c2 = ["footer"];
var _c3 = ["*", [["p-header"]], [["p-footer"]]];
var _c4 = ["*", "p-header", "p-footer"];
var _c5 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({
  "p-dialog-mask": true,
  "p-component-overlay p-component-overlay-enter": a0,
  "p-dialog-mask-scrollblocker": a1,
  "p-dialog-left": a2,
  "p-dialog-right": a3,
  "p-dialog-top": a4,
  "p-dialog-top-left": a5,
  "p-dialog-top-right": a6,
  "p-dialog-bottom": a7,
  "p-dialog-bottom-left": a8,
  "p-dialog-bottom-right": a9
});
var _c6 = (a0, a1, a2, a3) => ({
  "p-dialog p-component": true,
  "p-dialog-rtl": a0,
  "p-dialog-draggable": a1,
  "p-dialog-resizable": a2,
  "p-dialog-maximized": a3
});
var _c7 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c8 = (a0) => ({
  value: "visible",
  params: a0
});
var _c9 = () => ({
  "p-dialog-header-icon p-dialog-header-maximize p-link": true
});
var _c10 = () => ({
  "p-dialog-header-icon p-dialog-header-close p-link": true
});
var _c11 = () => ({
  "min-width": 0
});
function Dialog_div_0_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("mousedown", function Dialog_div_0_div_1_ng_template_3_div_0_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.initResize($event));
    });
    \u0275\u0275elementEnd();
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("id", ctx_r1.ariaLabelledBy);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.header);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("id", ctx_r1.ariaLabelledBy);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngClass", ctx_r1.maximized ? ctx_r1.minimizeIcon : ctx_r1.maximizeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "WindowMaximizeIcon", 27);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "WindowMinimizeIcon", 27);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template, 1, 1, "WindowMaximizeIcon", 26)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template, 1, 1, "WindowMinimizeIcon", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximized && !ctx_r1.maximizeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximized && !ctx_r1.minimizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template, 1, 0, null, 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.maximizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template, 1, 0, null, 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.minimizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.maximize());
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.maximize());
    });
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template, 1, 1, "span", 23)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template, 3, 2, "ng-container", 24)(3, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template, 2, 1, "ng-container", 24)(4, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template, 2, 1, "ng-container", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(7, _c9));
    \u0275\u0275attribute("tabindex", ctx_r1.maximizable ? "0" : "-1")("aria-label", ctx_r1.maximizeLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximizeIcon && !ctx_r1.maximizeIconTemplate && !ctx_r1.minimizeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximizeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximized);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximized);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("ngClass", ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon", 27);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-dialog-header-close-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template, 1, 1, "span", 29)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template, 1, 1, "TimesIcon", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template, 1, 0, null, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.close($event));
    });
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template, 3, 2, "ng-container", 24)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(6, _c10))("ngStyle", \u0275\u0275pureFunction0(7, _c11));
    \u0275\u0275attribute("aria-label", ctx_r1.closeAriaLabel)("tabindex", ctx_r1.closeTabindex);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.closeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16, 3);
    \u0275\u0275listener("mousedown", function Dialog_div_0_div_1_ng_template_3_div_1_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.initDrag($event));
    });
    \u0275\u0275template(2, Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template, 2, 2, "span", 17)(3, Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template, 2, 1, "span", 17)(4, Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275template(6, Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template, 5, 8, "button", 19)(7, Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template, 3, 8, "button", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.headerFacet && !ctx_r1.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerFacet);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.maximizable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closable);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31, 4);
    \u0275\u0275projection(2, 2);
    \u0275\u0275template(3, Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_0_Template, 1, 0, "div", 11)(1, Dialog_div_0_div_1_ng_template_3_div_1_Template, 8, 5, "div", 12);
    \u0275\u0275elementStart(2, "div", 13, 2);
    \u0275\u0275projection(4);
    \u0275\u0275template(5, Dialog_div_0_div_1_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Dialog_div_0_div_1_ng_template_3_div_6_Template, 4, 1, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.resizable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showHeader);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.contentStyleClass);
    \u0275\u0275property("ngClass", "p-dialog-content")("ngStyle", ctx_r1.contentStyle);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
  }
}
function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8, 0);
    \u0275\u0275listener("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275template(2, Dialog_div_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 9)(3, Dialog_div_0_div_1_ng_template_3_Template, 7, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notHeadless_r7 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(10, _c6, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", \u0275\u0275pureFunction1(18, _c8, \u0275\u0275pureFunction2(15, _c7, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    \u0275\u0275attribute("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.headlessTemplate)("ngIfElse", notHeadless_r7);
  }
}
function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, Dialog_div_0_div_1_Template, 5, 20, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.maskStyleClass);
    \u0275\u0275property("ngStyle", ctx_r1.maskStyle)("ngClass", \u0275\u0275pureFunctionV(5, _c5, [ctx_r1.modal, ctx_r1.modal || ctx_r1.blockScroll, ctx_r1.position === "left", ctx_r1.position === "right", ctx_r1.position === "top", ctx_r1.position === "topleft" || ctx_r1.position === "top-left", ctx_r1.position === "topright" || ctx_r1.position === "top-right", ctx_r1.position === "bottom", ctx_r1.position === "bottomleft" || ctx_r1.position === "bottom-left", ctx_r1.position === "bottomright" || ctx_r1.position === "bottom-right"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.visible);
  }
}
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}")]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Dialog = class _Dialog {
  document;
  platformId;
  el;
  renderer;
  zone;
  cd;
  config;
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = true;
  /**
   * Enables resizing of the content.
   * @group Props
   */
  resizable = true;
  /**
   * Defines the left offset of dialog.
   * @group Props
   * @deprecated positionLeft property is deprecated.
   */
  get positionLeft() {
    return 0;
  }
  set positionLeft(_positionLeft) {
    console.log("positionLeft property is deprecated.");
  }
  /**
   * Defines the top offset of dialog.
   * @group Props
   * @deprecated positionTop property is deprecated.
   */
  get positionTop() {
    return 0;
  }
  set positionTop(_positionTop) {
    console.log("positionTop property is deprecated.");
  }
  /**
   * Style of the content section.
   * @group Props
   */
  contentStyle;
  /**
   * Style class of the content.
   * @group Props
   */
  contentStyleClass;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal = false;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask = false;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   * Defines if the component is responsive.
   * @group Props
   * @deprecated Responsive property is deprecated.
   */
  get responsive() {
    return false;
  }
  set responsive(_responsive) {
    console.log("Responsive property is deprecated.");
  }
  /**
   * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the mask.
   * @group Props
   */
  maskStyleClass;
  /**
   * Style of the mask.
   * @group Props
   */
  maskStyle;
  /**
   * Whether to show the header or not.
   * @group Props
   */
  showHeader = true;
  /**
   * Defines the breakpoint of the component responsive.
   * @group Props
   * @deprecated Breakpoint property is not utilized and deprecated. Use breakpoints or CSS media queries instead.
   */
  get breakpoint() {
    return 649;
  }
  set breakpoint(_breakpoint) {
    console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.");
  }
  /**
   * Whether background scroll should be blocked when dialog is visible.
   * @group Props
   */
  blockScroll = false;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Minimum value for the left coordinate of dialog in dragging.
   * @group Props
   */
  minX = 0;
  /**
   * Minimum value for the top coordinate of dialog in dragging.
   * @group Props
   */
  minY = 0;
  /**
   * When enabled, first focusable element receives focus on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Whether the dialog can be displayed full screen.
   * @group Props
   */
  maximizable = false;
  /**
   * Keeps dialog in the viewport.
   * @group Props
   */
  keepInViewport = true;
  /**
   * When enabled, can only focus on elements inside the dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Name of the close icon.
   * @group Props
   */
  closeIcon;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Index of the close button in tabbing order.
   * @group Props
   */
  closeTabindex = "0";
  /**
   * Name of the minimize icon.
   * @group Props
   */
  minimizeIcon;
  /**
   * Name of the maximize icon.
   * @group Props
   */
  maximizeIcon;
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    if (value) {
      this._style = __spreadValues({}, value);
      this.originalStyle = value;
    }
  }
  /**
   * Position of the dialog.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "topleft":
      case "bottomleft":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "topright":
      case "bottomright":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  /**
   * Callback to invoke when dialog is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dialog is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {boolean} value - New value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Callback to invoke when dialog resizing is initiated.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeInit = new EventEmitter();
  /**
   * Callback to invoke when dialog resizing is completed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeEnd = new EventEmitter();
  /**
   * Callback to invoke when dialog dragging is completed.
   * @param {DragEvent} event - Drag event.
   * @group Emits
   */
  onDragEnd = new EventEmitter();
  /**
   * Callback to invoke when dialog maximized or unmaximized.
   * @group Emits
   */
  onMaximize = new EventEmitter();
  headerFacet;
  footerFacet;
  templates;
  headerViewChild;
  contentViewChild;
  footerViewChild;
  headerTemplate;
  contentTemplate;
  footerTemplate;
  maximizeIconTemplate;
  closeIconTemplate;
  minimizeIconTemplate;
  headlessTemplate;
  _visible = false;
  maskVisible;
  container;
  wrapper;
  dragging;
  ariaLabelledBy = this.getAriaLabelledBy();
  documentDragListener;
  documentDragEndListener;
  resizing;
  documentResizeListener;
  documentResizeEndListener;
  documentEscapeListener;
  maskClickListener;
  lastPageX;
  lastPageY;
  preventVisibleChangePropagation;
  maximized;
  preMaximizeContentHeight;
  preMaximizeContainerWidth;
  preMaximizeContainerHeight;
  preMaximizePageX;
  preMaximizePageY;
  id = UniqueComponentId();
  _style = {};
  _position = "center";
  originalStyle;
  transformOptions = "scale(0.7)";
  styleElement;
  window;
  get maximizeLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["maximizeLabel"];
  }
  constructor(document2, platformId, el, renderer, zone, cd, config) {
    this.document = document2;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.zone = zone;
    this.cd = cd;
    this.config = config;
    this.window = this.document.defaultView;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        case "maximizeicon":
          this.maximizeIconTemplate = item.template;
          break;
        case "minimizeicon":
          this.minimizeIconTemplate = item.template;
          break;
        case "headless":
          this.headlessTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  ngOnInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  getAriaLabelledBy() {
    return this.header !== null ? UniqueComponentId() + "_header" : null;
  }
  parseDurationToMilliseconds(durationString) {
    const transitionTimeRegex = /([\d\.]+)(ms|s)\b/g;
    let totalMilliseconds = 0;
    let match;
    while ((match = transitionTimeRegex.exec(durationString)) !== null) {
      const value = parseFloat(match[1]);
      const unit = match[2];
      if (unit === "ms") {
        totalMilliseconds += value;
      } else if (unit === "s") {
        totalMilliseconds += value * 1e3;
      }
    }
    if (totalMilliseconds === 0) {
      return void 0;
    }
    return totalMilliseconds;
  }
  focus(focusParentElement = this.contentViewChild?.nativeElement) {
    const timeoutDuration = this.parseDurationToMilliseconds(this.transitionOptions);
    let focusable = DomHandler.getFocusableElement(focusParentElement, "[autofocus]");
    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), timeoutDuration || 5);
      });
      return;
    }
    const focusableElement = DomHandler.getFocusableElement(focusParentElement);
    if (focusableElement) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusableElement.focus(), timeoutDuration || 5);
      });
    } else if (this.footerViewChild && focusParentElement !== this.footerViewChild.nativeElement) {
      this.focus(this.footerViewChild.nativeElement);
    }
  }
  close(event) {
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  enableModality() {
    if (this.closable && this.dismissableMask) {
      this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
        if (this.wrapper && this.wrapper.isSameNode(event.target)) {
          this.close(event);
        }
      });
    }
    if (this.modal) {
      DomHandler.blockBodyScroll();
    }
  }
  disableModality() {
    if (this.wrapper) {
      if (this.dismissableMask) {
        this.unbindMaskClickListener();
      }
      const scrollBlockers = document.querySelectorAll(".p-dialog-mask-scrollblocker");
      if (this.modal && scrollBlockers && scrollBlockers.length == 1) {
        DomHandler.unblockBodyScroll();
      }
      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
  }
  maximize() {
    this.maximized = !this.maximized;
    if (!this.modal && !this.blockScroll) {
      if (this.maximized) {
        DomHandler.blockBodyScroll();
      } else {
        DomHandler.unblockBodyScroll();
      }
    }
    this.onMaximize.emit({
      maximized: this.maximized
    });
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex + this.config.zIndex.modal);
      this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
    }
  }
  createStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement) {
        this.styleElement = this.renderer.createElement("style");
        this.styleElement.type = "text/css";
        DomHandler.setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = "";
        for (let breakpoint in this.breakpoints) {
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
        }
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      }
    }
  }
  initDrag(event) {
    if (DomHandler.hasClass(event.target, "p-dialog-header-icon") || DomHandler.hasClass(event.target, "p-dialog-header-close-icon") || DomHandler.hasClass(event.target.parentElement, "p-dialog-header-icon")) {
      return;
    }
    if (this.draggable) {
      this.dragging = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.container.style.margin = "0";
      DomHandler.addClass(this.document.body, "p-unselectable-text");
    }
  }
  onDrag(event) {
    if (this.dragging) {
      const containerWidth = DomHandler.getOuterWidth(this.container);
      const containerHeight = DomHandler.getOuterHeight(this.container);
      const deltaX = event.pageX - this.lastPageX;
      const deltaY = event.pageY - this.lastPageY;
      const offset = this.container.getBoundingClientRect();
      const containerComputedStyle = getComputedStyle(this.container);
      const leftMargin = parseFloat(containerComputedStyle.marginLeft);
      const topMargin = parseFloat(containerComputedStyle.marginTop);
      const leftPos = offset.left + deltaX - leftMargin;
      const topPos = offset.top + deltaY - topMargin;
      const viewport = DomHandler.getViewport();
      this.container.style.position = "fixed";
      if (this.keepInViewport) {
        if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
          this._style.left = `${leftPos}px`;
          this.lastPageX = event.pageX;
          this.container.style.left = `${leftPos}px`;
        }
        if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
          this._style.top = `${topPos}px`;
          this.lastPageY = event.pageY;
          this.container.style.top = `${topPos}px`;
        }
      } else {
        this.lastPageX = event.pageX;
        this.container.style.left = `${leftPos}px`;
        this.lastPageY = event.pageY;
        this.container.style.top = `${topPos}px`;
      }
    }
  }
  endDrag(event) {
    if (this.dragging) {
      this.dragging = false;
      DomHandler.removeClass(this.document.body, "p-unselectable-text");
      this.cd.detectChanges();
      this.onDragEnd.emit(event);
    }
  }
  resetPosition() {
    this.container.style.position = "";
    this.container.style.left = "";
    this.container.style.top = "";
    this.container.style.margin = "";
  }
  //backward compatibility
  center() {
    this.resetPosition();
  }
  initResize(event) {
    if (this.resizable) {
      this.resizing = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      DomHandler.addClass(this.document.body, "p-unselectable-text");
      this.onResizeInit.emit(event);
    }
  }
  onResize(event) {
    if (this.resizing) {
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let containerWidth = DomHandler.getOuterWidth(this.container);
      let containerHeight = DomHandler.getOuterHeight(this.container);
      let contentHeight = DomHandler.getOuterHeight(this.contentViewChild?.nativeElement);
      let newWidth = containerWidth + deltaX;
      let newHeight = containerHeight + deltaY;
      let minWidth = this.container.style.minWidth;
      let minHeight = this.container.style.minHeight;
      let offset = this.container.getBoundingClientRect();
      let viewport = DomHandler.getViewport();
      let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }
      if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
        this._style.width = newWidth + "px";
        this.container.style.width = this._style.width;
      }
      if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
        this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + "px";
        if (this._style.height) {
          this._style.height = newHeight + "px";
          this.container.style.height = this._style.height;
        }
      }
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }
  resizeEnd(event) {
    if (this.resizing) {
      this.resizing = false;
      DomHandler.removeClass(this.document.body, "p-unselectable-text");
      this.onResizeEnd.emit(event);
    }
  }
  bindGlobalListeners() {
    if (this.draggable) {
      this.bindDocumentDragListener();
      this.bindDocumentDragEndListener();
    }
    if (this.resizable) {
      this.bindDocumentResizeListeners();
    }
    if (this.closeOnEscape && this.closable) {
      this.bindDocumentEscapeListener();
    }
  }
  unbindGlobalListeners() {
    this.unbindDocumentDragListener();
    this.unbindDocumentDragEndListener();
    this.unbindDocumentResizeListeners();
    this.unbindDocumentEscapeListener();
  }
  bindDocumentDragListener() {
    if (!this.documentDragListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragListener = this.renderer.listen(this.window, "mousemove", this.onDrag.bind(this));
      });
    }
  }
  unbindDocumentDragListener() {
    if (this.documentDragListener) {
      this.documentDragListener();
      this.documentDragListener = null;
    }
  }
  bindDocumentDragEndListener() {
    if (!this.documentDragEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragEndListener = this.renderer.listen(this.window, "mouseup", this.endDrag.bind(this));
      });
    }
  }
  unbindDocumentDragEndListener() {
    if (this.documentDragEndListener) {
      this.documentDragEndListener();
      this.documentDragEndListener = null;
    }
  }
  bindDocumentResizeListeners() {
    if (!this.documentResizeListener && !this.documentResizeEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentResizeListener = this.renderer.listen(this.window, "mousemove", this.onResize.bind(this));
        this.documentResizeEndListener = this.renderer.listen(this.window, "mouseup", this.resizeEnd.bind(this));
      });
    }
  }
  unbindDocumentResizeListeners() {
    if (this.documentResizeListener && this.documentResizeEndListener) {
      this.documentResizeListener();
      this.documentResizeEndListener();
      this.documentResizeListener = null;
      this.documentResizeEndListener = null;
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.key == "Escape") {
        this.close(event);
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.wrapper);
      else DomHandler.appendChild(this.wrapper, this.appendTo);
    }
  }
  restoreAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.wrapper);
    }
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.wrapper = this.container?.parentElement;
        this.moveOnTop();
        this.appendContainer();
        this.bindGlobalListeners();
        this.container?.setAttribute(this.id, "");
        if (this.modal) {
          this.enableModality();
        }
        if (!this.modal && this.blockScroll) {
          DomHandler.addClass(this.document.body, "p-overflow-hidden");
        }
        if (this.focusOnShow) {
          this.focus();
        }
        break;
      case "void":
        if (this.wrapper && this.modal) {
          DomHandler.addClass(this.wrapper, "p-component-overlay-leave");
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onContainerDestroy();
        this.onHide.emit({});
        this.cd.markForCheck();
        break;
      case "visible":
        this.onShow.emit({});
        break;
    }
  }
  onContainerDestroy() {
    this.unbindGlobalListeners();
    this.dragging = false;
    this.maskVisible = false;
    if (this.maximized) {
      DomHandler.removeClass(this.document.body, "p-overflow-hidden");
      this.document.body.style.removeProperty("--scrollbar-width");
      this.maximized = false;
    }
    if (this.modal) {
      this.disableModality();
    }
    if (this.blockScroll) {
      DomHandler.removeClass(this.document.body, "p-overflow-hidden");
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
    this.wrapper = null;
    this._style = this.originalStyle ? __spreadValues({}, this.originalStyle) : {};
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    this.destroyStyle();
  }
  static \u0275fac = function Dialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dialog)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Dialog,
    selectors: [["p-dialog"]],
    contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dialog_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      header: "header",
      draggable: [2, "draggable", "draggable", booleanAttribute],
      resizable: [2, "resizable", "resizable", booleanAttribute],
      positionLeft: "positionLeft",
      positionTop: "positionTop",
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      modal: [2, "modal", "modal", booleanAttribute],
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      responsive: "responsive",
      appendTo: "appendTo",
      breakpoints: "breakpoints",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      maskStyle: "maskStyle",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      breakpoint: "breakpoint",
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      minX: [2, "minX", "minX", numberAttribute],
      minY: [2, "minY", "minY", numberAttribute],
      focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
      maximizable: [2, "maximizable", "maximizable", booleanAttribute],
      keepInViewport: [2, "keepInViewport", "keepInViewport", booleanAttribute],
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      transitionOptions: "transitionOptions",
      closeIcon: "closeIcon",
      closeAriaLabel: "closeAriaLabel",
      closeTabindex: "closeTabindex",
      minimizeIcon: "minimizeIcon",
      maximizeIcon: "maximizeIcon",
      visible: "visible",
      style: "style",
      position: "position"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      visibleChange: "visibleChange",
      onResizeInit: "onResizeInit",
      onResizeEnd: "onResizeEnd",
      onDragEnd: "onDragEnd",
      onMaximize: "onMaximize"
    },
    features: [\u0275\u0275InputTransformsFeature],
    ngContentSelectors: _c4,
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["notHeadless", ""], ["content", ""], ["titlebar", ""], ["footer", ""], [3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["class", "p-resizable-handle", 3, "mousedown", 4, "ngIf"], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-resizable-handle", 3, "mousedown"], [1, "p-dialog-header", 3, "mousedown"], ["class", "p-dialog-title", 3, "id", 4, "ngIf"], [1, "p-dialog-header-icons"], ["role", "button", "type", "button", "pRipple", "", "pButton", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "pRipple", "", "pButton", "", 3, "ngClass", "ngStyle", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title", 3, "id"], ["role", "button", "type", "button", "pRipple", "", "pButton", "", 3, "click", "keydown.enter", "ngClass"], ["class", "p-dialog-header-maximize-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], ["type", "button", "pRipple", "", "pButton", "", 3, "click", "keydown.enter", "ngClass", "ngStyle"], ["class", "p-dialog-header-close-icon", 3, "ngClass", 4, "ngIf"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"]],
    template: function Dialog_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c3);
        \u0275\u0275template(0, Dialog_div_0_Template, 2, 16, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.maskVisible);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, FocusTrap, ButtonDirective, Ripple, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon],
    styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Component,
    args: [{
      selector: "p-dialog",
      template: `
        <div
            *ngIf="maskVisible"
            [class]="maskStyleClass"
            [ngStyle]="maskStyle"
            [ngClass]="{
                'p-dialog-mask': true,
                'p-component-overlay p-component-overlay-enter': this.modal,
                'p-dialog-mask-scrollblocker': this.modal || this.blockScroll,
                'p-dialog-left': position === 'left',
                'p-dialog-right': position === 'right',
                'p-dialog-top': position === 'top',
                'p-dialog-top-left': position === 'topleft' || position === 'top-left',
                'p-dialog-top-right': position === 'topright' || position === 'top-right',
                'p-dialog-bottom': position === 'bottom',
                'p-dialog-bottom-left': position === 'bottomleft' || position === 'bottom-left',
                'p-dialog-bottom-right': position === 'bottomright' || position === 'bottom-right'
            }"
        >
            <div
                #container
                [ngClass]="{ 'p-dialog p-component': true, 'p-dialog-rtl': rtl, 'p-dialog-draggable': draggable, 'p-dialog-resizable': resizable, 'p-dialog-maximized': maximized }"
                [ngStyle]="style"
                [class]="styleClass"
                *ngIf="visible"
                pFocusTrap
                [pFocusTrapDisabled]="focusTrap === false"
                [@animation]="{ value: 'visible', params: { transform: transformOptions, transition: transitionOptions } }"
                (@animation.start)="onAnimationStart($event)"
                (@animation.done)="onAnimationEnd($event)"
                role="dialog"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-modal]="true"
            >
                <ng-container *ngIf="headlessTemplate; else notHeadless">
                    <ng-container *ngTemplateOutlet="headlessTemplate"></ng-container>
                </ng-container>

                <ng-template #notHeadless>
                    <div *ngIf="resizable" class="p-resizable-handle" (mousedown)="initResize($event)"></div>
                    <div #titlebar class="p-dialog-header" (mousedown)="initDrag($event)" *ngIf="showHeader">
                        <span [id]="ariaLabelledBy" class="p-dialog-title" *ngIf="!headerFacet && !headerTemplate">{{ header }}</span>
                        <span [id]="ariaLabelledBy" class="p-dialog-title" *ngIf="headerFacet">
                            <ng-content select="p-header"></ng-content>
                        </span>
                        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                        <div class="p-dialog-header-icons">
                            <button
                                *ngIf="maximizable"
                                role="button"
                                type="button"
                                [ngClass]="{ 'p-dialog-header-icon p-dialog-header-maximize p-link': true }"
                                (click)="maximize()"
                                (keydown.enter)="maximize()"
                                [attr.tabindex]="maximizable ? '0' : '-1'"
                                [attr.aria-label]="maximizeLabel"
                                pRipple
                                pButton
                            >
                                <span *ngIf="maximizeIcon && !maximizeIconTemplate && !minimizeIconTemplate" class="p-dialog-header-maximize-icon" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                                <ng-container *ngIf="!maximizeIcon">
                                    <WindowMaximizeIcon *ngIf="!maximized && !maximizeIconTemplate" [styleClass]="'p-dialog-header-maximize-icon'" />
                                    <WindowMinimizeIcon *ngIf="maximized && !minimizeIconTemplate" [styleClass]="'p-dialog-header-maximize-icon'" />
                                </ng-container>
                                <ng-container *ngIf="!maximized">
                                    <ng-template *ngTemplateOutlet="maximizeIconTemplate"></ng-template>
                                </ng-container>
                                <ng-container *ngIf="maximized">
                                    <ng-template *ngTemplateOutlet="minimizeIconTemplate"></ng-template>
                                </ng-container>
                            </button>
                            <button
                                *ngIf="closable"
                                type="button"
                                [ngClass]="{ 'p-dialog-header-icon p-dialog-header-close p-link': true }"
                                [attr.aria-label]="closeAriaLabel"
                                (click)="close($event)"
                                (keydown.enter)="close($event)"
                                pRipple
                                pButton
                                [attr.tabindex]="closeTabindex"
                                [ngStyle]="{ 'min-width': 0 }"
                            >
                                <ng-container *ngIf="!closeIconTemplate">
                                    <span *ngIf="closeIcon" class="p-dialog-header-close-icon" [ngClass]="closeIcon"></span>
                                    <TimesIcon *ngIf="!closeIcon" [styleClass]="'p-dialog-header-close-icon'" />
                                </ng-container>
                                <span *ngIf="closeIconTemplate">
                                    <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div #content [ngClass]="'p-dialog-content'" [ngStyle]="contentStyle" [class]="contentStyleClass">
                        <ng-content></ng-content>
                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                    </div>
                    <div #footer class="p-dialog-footer" *ngIf="footerFacet || footerTemplate">
                        <ng-content select="p-footer"></ng-content>
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                    </div>
                </ng-template>
            </div>
        </div>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"]
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
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    header: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    positionLeft: [{
      type: Input
    }],
    positionTop: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    responsive: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    maskStyle: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    breakpoint: [{
      type: Input
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minX: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minY: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maximizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    keepInViewport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    closeTabindex: [{
      type: Input
    }],
    minimizeIcon: [{
      type: Input
    }],
    maximizeIcon: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    onResizeInit: [{
      type: Output
    }],
    onResizeEnd: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }],
    onMaximize: [{
      type: Output
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    headerViewChild: [{
      type: ViewChild,
      args: ["titlebar"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    footerViewChild: [{
      type: ViewChild,
      args: ["footer"]
    }]
  });
})();
var DialogModule = class _DialogModule {
  static \u0275fac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DialogModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, FocusTrapModule, ButtonModule, RippleModule, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FocusTrapModule, ButtonModule, RippleModule, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon],
      exports: [Dialog, SharedModule],
      declarations: [Dialog]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-card.mjs
var _c02 = ["*", [["p-header"]], [["p-footer"]]];
var _c12 = ["*", "p-header", "p-footer"];
function Card_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, Card_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275template(2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.titleTemplate);
  }
}
function Card_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275template(2, Card_div_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.subheader, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.subtitleTemplate);
  }
}
function Card_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275projection(1, 2);
    \u0275\u0275template(2, Card_div_8_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
var Card = class _Card {
  el;
  /**
   * Header of the card.
   * @group Props
   */
  header;
  /**
   * Subheader of the card.
   * @group Props
   */
  subheader;
  /**
   * Inline style of the element.
   * @group Props
   */
  set style(value) {
    if (!ObjectUtils.equals(this._style(), value)) {
      this._style.set(value);
    }
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  headerFacet;
  footerFacet;
  templates;
  headerTemplate;
  titleTemplate;
  subtitleTemplate;
  contentTemplate;
  footerTemplate;
  _style = signal(null);
  constructor(el) {
    this.el = el;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "title":
          this.titleTemplate = item.template;
          break;
        case "subtitle":
          this.subtitleTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  static \u0275fac = function Card_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Card)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Card,
    selectors: [["p-card"]],
    contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      header: "header",
      subheader: "subheader",
      style: "style",
      styleClass: "styleClass"
    },
    ngContentSelectors: _c12,
    decls: 9,
    vars: 10,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-card-header", 4, "ngIf"], [1, "p-card-body"], ["class", "p-card-title", 4, "ngIf"], ["class", "p-card-subtitle", 4, "ngIf"], [1, "p-card-content"], [4, "ngTemplateOutlet"], ["class", "p-card-footer", 4, "ngIf"], [1, "p-card-header"], [1, "p-card-title"], [1, "p-card-subtitle"], [1, "p-card-footer"]],
    template: function Card_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, Card_div_1_Template, 3, 1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275template(3, Card_div_3_Template, 3, 2, "div", 3)(4, Card_div_4_Template, 3, 2, "div", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275projection(6);
        \u0275\u0275template(7, Card_ng_container_7_Template, 1, 0, "ng-container", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, Card_div_8_Template, 3, 1, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", "p-card p-component")("ngStyle", ctx._style());
        \u0275\u0275attribute("data-pc-name", "card");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.headerFacet || ctx.headerTemplate);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.header || ctx.titleTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subheader || ctx.subtitleTemplate);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
    styles: ["@layer primeng{.p-card-header img{width:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Card, [{
    type: Component,
    args: [{
      selector: "p-card",
      template: `
        <div [ngClass]="'p-card p-component'" [ngStyle]="_style()" [class]="styleClass" [attr.data-pc-name]="'card'">
            <div class="p-card-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div class="p-card-body">
                <div class="p-card-title" *ngIf="header || titleTemplate">
                    {{ header }}
                    <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
                </div>
                <div class="p-card-subtitle" *ngIf="subheader || subtitleTemplate">
                    {{ subheader }}
                    <ng-container *ngTemplateOutlet="subtitleTemplate"></ng-container>
                </div>
                <div class="p-card-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <div class="p-card-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-card-header img{width:100%}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    header: [{
      type: Input
    }],
    subheader: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CardModule = class _CardModule {
  static \u0275fac = function CardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CardModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Card, SharedModule],
      declarations: [Card]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs
var ChevronLeftIcon = class _ChevronLeftIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronLeftIcon_BaseFactory;
    return function ChevronLeftIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronLeftIcon_BaseFactory || (\u0275ChevronLeftIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronLeftIcon)))(__ngFactoryType__ || _ChevronLeftIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronLeftIcon,
    selectors: [["ChevronLeftIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z", "fill", "currentColor"]],
    template: function ChevronLeftIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronLeftIcon, [{
    type: Component,
    args: [{
      selector: "ChevronLeftIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs
var ChevronRightIcon = class _ChevronRightIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronRightIcon_BaseFactory;
    return function ChevronRightIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronRightIcon_BaseFactory || (\u0275ChevronRightIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronRightIcon)))(__ngFactoryType__ || _ChevronRightIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronRightIcon,
    selectors: [["ChevronRightIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
    template: function ChevronRightIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronRightIcon, [{
    type: Component,
    args: [{
      selector: "ChevronRightIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tabmenu.mjs
var _c03 = ["content"];
var _c13 = ["navbar"];
var _c22 = ["inkbar"];
var _c32 = ["prevBtn"];
var _c42 = ["nextBtn"];
var _c52 = ["tabLink"];
var _c62 = ["tab"];
var _c72 = (a0) => ({
  "p-tabmenu p-component": true,
  "p-tabmenu-scrollable": a0
});
var _c82 = (a0, a1, a2) => ({
  "p-tabmenuitem": true,
  "p-disabled": a0,
  "p-highlight": a1,
  "p-hidden": a2
});
var _c92 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
var _c102 = () => ({
  exact: false
});
function TabMenu_button_2_ChevronLeftIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronLeftIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function TabMenu_button_2_3_ng_template_0_Template(rf, ctx) {
}
function TabMenu_button_2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabMenu_button_2_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabMenu_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17, 3);
    \u0275\u0275listener("click", function TabMenu_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navBackward());
    });
    \u0275\u0275template(2, TabMenu_button_2_ChevronLeftIcon_2_Template, 1, 1, "ChevronLeftIcon", 18)(3, TabMenu_button_2_3_Template, 1, 0, null, 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.previousIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.previousIconTemplate);
  }
}
function TabMenu_li_7_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", item_r5.icon)("ngStyle", item_r5.iconStyle);
  }
}
function TabMenu_li_7_a_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getItemProp(item_r5, "label"));
  }
}
function TabMenu_li_7_a_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r2.getItemProp(item_r5, "label"), \u0275\u0275sanitizeHtml);
  }
}
function TabMenu_li_7_a_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", item_r5.badgeStyleClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getItemProp(item_r5, "badge"));
  }
}
function TabMenu_li_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24, 5);
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275template(3, TabMenu_li_7_a_2_span_3_Template, 1, 2, "span", 25)(4, TabMenu_li_7_a_2_span_4_Template, 2, 1, "span", 26)(5, TabMenu_li_7_a_2_ng_template_5_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(7, TabMenu_li_7_a_2_span_7_Template, 2, 2, "span", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r8 = \u0275\u0275reference(6);
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("target", ctx_r2.getItemProp(item_r5, "target"));
    \u0275\u0275attribute("href", ctx_r2.getItemProp(item_r5, "url"), \u0275\u0275sanitizeUrl)("id", ctx_r2.getItemProp(item_r5, "id"))("aria-disabled", ctx_r2.disabled(item_r5))("aria-label", ctx_r2.getItemProp(item_r5, "label"))("tabindex", ctx_r2.disabled(item_r5) ? -1 : 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.escape !== false)("ngIfElse", htmlLabel_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r5.badge);
  }
}
function TabMenu_li_7_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", item_r5.icon)("ngStyle", item_r5.iconStyle);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function TabMenu_li_7_a_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getItemProp(item_r5, "label"));
  }
}
function TabMenu_li_7_a_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r2.getItemProp(item_r5, "label"), \u0275\u0275sanitizeHtml);
  }
}
function TabMenu_li_7_a_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", item_r5.badgeStyleClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getItemProp(item_r5, "badge"));
  }
}
function TabMenu_li_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32, 5);
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275template(3, TabMenu_li_7_a_3_span_3_Template, 1, 3, "span", 25)(4, TabMenu_li_7_a_3_span_4_Template, 2, 1, "span", 26)(5, TabMenu_li_7_a_3_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(7, TabMenu_li_7_a_3_span_7_Template, 2, 2, "span", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r9 = \u0275\u0275reference(6);
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r5.routerLink)("queryParams", item_r5.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r5.routerLinkActiveOptions || \u0275\u0275pureFunction0(19, _c102))("target", item_r5.target)("fragment", item_r5.fragment)("queryParamsHandling", item_r5.queryParamsHandling)("preserveFragment", item_r5.preserveFragment)("skipLocationChange", item_r5.skipLocationChange)("replaceUrl", item_r5.replaceUrl)("state", item_r5.state);
    \u0275\u0275attribute("id", ctx_r2.getItemProp(item_r5, "id"))("aria-disabled", ctx_r2.disabled(item_r5))("aria-label", ctx_r2.getItemProp(item_r5, "label"))("tabindex", ctx_r2.disabled(item_r5) ? -1 : 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.escape !== false)("ngIfElse", htmlRouteLabel_r9);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r5.badge);
  }
}
function TabMenu_li_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TabMenu_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20, 4);
    \u0275\u0275listener("click", function TabMenu_li_7_Template_li_click_0_listener($event) {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.itemClick($event, item_r5));
    })("keydown", function TabMenu_li_7_Template_li_keydown_0_listener($event) {
      const ctx_r5 = \u0275\u0275restoreView(_r4);
      const item_r5 = ctx_r5.$implicit;
      const i_r7 = ctx_r5.index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeydownItem($event, i_r7, item_r5));
    })("focus", function TabMenu_li_7_Template_li_focus_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMenuItemFocus(item_r5));
    });
    \u0275\u0275template(2, TabMenu_li_7_a_2_Template, 8, 10, "a", 21)(3, TabMenu_li_7_a_3_Template, 8, 20, "a", 22)(4, TabMenu_li_7_ng_container_4_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(item_r5.styleClass);
    \u0275\u0275property("ngStyle", item_r5.style)("ngClass", \u0275\u0275pureFunction3(11, _c82, ctx_r2.getItemProp(item_r5, "disabled"), ctx_r2.isActive(item_r5), item_r5.visible === false))("tooltipOptions", item_r5.tooltipOptions);
    \u0275\u0275attribute("data-p-disabled", ctx_r2.disabled(item_r5))("data-p-highlight", ctx_r2.focusedItemInfo() === item_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !item_r5.routerLink && !ctx_r2.itemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.routerLink && !ctx_r2.itemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(15, _c92, item_r5, i_r7));
  }
}
function TabMenu_button_10_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronRightIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function TabMenu_button_10_3_ng_template_0_Template(rf, ctx) {
}
function TabMenu_button_10_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabMenu_button_10_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabMenu_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33, 8);
    \u0275\u0275listener("click", function TabMenu_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navForward());
    });
    \u0275\u0275template(2, TabMenu_button_10_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 18)(3, TabMenu_button_10_3_Template, 1, 0, null, 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.previousIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.nextIconTemplate);
  }
}
var TabMenu = class _TabMenu {
  platformId;
  router;
  route;
  cd;
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._focusableItems = (this._model || []).reduce((result, item) => {
      result.push(item);
      return result;
    }, []);
  }
  get model() {
    return this._model;
  }
  /**
   * Defines the default active menuitem
   * @group Props
   */
  set activeItem(value) {
    this._activeItem = value;
    this.activeItemChange.emit(value);
    this.tabChanged = true;
  }
  get activeItem() {
    return this._activeItem;
  }
  /**
   * When enabled displays buttons at each side of the tab headers to scroll the tab list.
   * @group Props
   */
  scrollable;
  /**
   * Defines if popup mode enabled.
   */
  popup;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Event fired when a tab is selected.
   * @param {MenuItem} item - Menu item.
   * @group Emits
   */
  activeItemChange = new EventEmitter();
  content;
  navbar;
  inkbar;
  prevBtn;
  nextBtn;
  tabLink;
  tab;
  templates;
  itemTemplate;
  previousIconTemplate;
  nextIconTemplate;
  tabChanged;
  backwardIsDisabled = true;
  forwardIsDisabled = false;
  timerIdForAutoScroll = null;
  _focusableItems;
  _model;
  _activeItem;
  focusedItemInfo = signal(null);
  get focusableItems() {
    if (!this._focusableItems || !this._focusableItems.length) {
      this._focusableItems = (this.model || []).reduce((result, item) => {
        result.push(item);
        return result;
      }, []);
    }
    return this._focusableItems;
  }
  constructor(platformId, router, route, cd) {
    this.platformId = platformId;
    this.router = router;
    this.route = route;
    this.cd = cd;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.cd.markForCheck();
    });
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.activeItem) {
      this.autoScrollForActiveItem();
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "nexticon":
          this.nextIconTemplate = item.template;
          break;
        case "previousicon":
          this.previousIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateInkBar();
      this.autoScrollForActiveItem();
      this.initButtonState();
    }
  }
  ngAfterViewChecked() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateInkBar();
      this.tabChanged = false;
    }
  }
  ngOnDestroy() {
    this.clearAutoScrollHandler();
  }
  isActive(item) {
    if (item.routerLink) {
      const routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
      return this.router.isActive(this.router.createUrlTree(routerLink, {
        relativeTo: this.route
      }).toString(), item.routerLinkActiveOptions?.exact ?? item.routerLinkActiveOptions ?? false);
    }
    return item === this.activeItem;
  }
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  visible(item) {
    return typeof item.visible === "function" ? item.visible() : item.visible !== false;
  }
  disabled(item) {
    return typeof item.disabled === "function" ? item.disabled() : item.disabled;
  }
  onMenuItemFocus(item) {
    this.focusedItemInfo.set(item);
  }
  itemClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    this.activeItem = item;
    this.tabChanged = true;
    this.cd.markForCheck();
  }
  onKeydownItem(event, index, item) {
    let i = index;
    let foundElement = {};
    const tabLinks = this.tabLink.toArray();
    const tabs = this.tab.toArray();
    switch (event.code) {
      case "ArrowRight":
        foundElement = this.findNextItem(tabs, i);
        i = foundElement["i"];
        break;
      case "ArrowLeft":
        foundElement = this.findPrevItem(tabs, i);
        i = foundElement["i"];
        break;
      case "End":
        foundElement = this.findPrevItem(tabs, this.model.length);
        i = foundElement["i"];
        event.preventDefault();
        break;
      case "Home":
        foundElement = this.findNextItem(tabs, -1);
        i = foundElement["i"];
        event.preventDefault();
        break;
      case "Space":
      case "Enter":
        this.itemClick(event, item);
        break;
      case "Tab":
        this.onTabKeyDown(tabLinks);
        break;
      default:
        break;
    }
    if (tabLinks[i] && tabLinks[index]) {
      tabLinks[index].nativeElement.tabIndex = "-1";
      tabLinks[i].nativeElement.tabIndex = "0";
      tabLinks[i].nativeElement.focus();
    }
    this.cd.markForCheck();
  }
  onTabKeyDown(tabLinks) {
    tabLinks.forEach((item) => {
      item.nativeElement.tabIndex = DomHandler.getAttribute(item.nativeElement.parentElement, "data-p-highlight") ? "0" : "-1";
    });
  }
  findNextItem(items, index) {
    let i = index + 1;
    if (i >= items.length) {
      return {
        nextItem: items[items.length],
        i: items.length
      };
    }
    let nextItem = items[i];
    if (nextItem) return DomHandler.getAttribute(nextItem.nativeElement, "data-p-disabled") ? this.findNextItem(items, i) : {
      nextItem: nextItem.nativeElement,
      i
    };
    else return null;
  }
  findPrevItem(items, index) {
    let i = index - 1;
    if (i < 0) {
      return {
        prevItem: items[0],
        i: 0
      };
    }
    let prevItem = items[i];
    if (prevItem) return DomHandler.getAttribute(prevItem.nativeElement, "data-p-disabled") ? this.findPrevItem(items, i) : {
      prevItem: prevItem.nativeElement,
      i
    };
    else return null;
  }
  updateInkBar() {
    const tabHeader = DomHandler.findSingle(this.navbar?.nativeElement, "li.p-highlight");
    if (tabHeader) {
      this.inkbar.nativeElement.style.width = DomHandler.getWidth(tabHeader) + "px";
      this.inkbar.nativeElement.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.navbar?.nativeElement).left + "px";
    }
  }
  getVisibleButtonWidths() {
    return [this.prevBtn?.nativeElement, this.nextBtn?.nativeElement].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0);
  }
  updateButtonState() {
    const content = this.content?.nativeElement;
    const {
      scrollLeft,
      scrollWidth
    } = content;
    const width = DomHandler.getWidth(content);
    this.backwardIsDisabled = scrollLeft === 0;
    this.forwardIsDisabled = parseInt(scrollLeft) === scrollWidth - width;
  }
  updateScrollBar(index) {
    const tabHeader = this.navbar?.nativeElement.children[index];
    if (!tabHeader) {
      return;
    }
    if (tabHeader && typeof tabHeader.scrollIntoView === "function") {
      tabHeader.scrollIntoView({
        block: "nearest",
        inline: "center"
      });
    }
  }
  onScroll(event) {
    this.scrollable && this.updateButtonState();
    event.preventDefault();
  }
  navBackward() {
    const content = this.content?.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft - width;
    content.scrollLeft = pos <= 0 ? 0 : pos;
  }
  navForward() {
    const content = this.content?.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft + width;
    const lastPos = content.scrollWidth - width;
    content.scrollLeft = pos >= lastPos ? lastPos : pos;
  }
  autoScrollForActiveItem() {
    if (!this.scrollable) {
      return;
    }
    this.clearAutoScrollHandler();
    this.timerIdForAutoScroll = setTimeout(() => {
      const activeItem = this.model.findIndex((menuItem) => this.isActive(menuItem));
      if (activeItem !== -1) {
        this.updateScrollBar(activeItem);
      }
    });
  }
  clearAutoScrollHandler() {
    if (this.timerIdForAutoScroll) {
      clearTimeout(this.timerIdForAutoScroll);
      this.timerIdForAutoScroll = null;
    }
  }
  initButtonState() {
    if (this.scrollable) {
      Promise.resolve().then(() => {
        this.updateButtonState();
        this.cd.markForCheck();
      });
    }
  }
  static \u0275fac = function TabMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabMenu)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabMenu,
    selectors: [["p-tabMenu"]],
    contentQueries: function TabMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TabMenu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
        \u0275\u0275viewQuery(_c13, 5);
        \u0275\u0275viewQuery(_c22, 5);
        \u0275\u0275viewQuery(_c32, 5);
        \u0275\u0275viewQuery(_c42, 5);
        \u0275\u0275viewQuery(_c52, 5);
        \u0275\u0275viewQuery(_c62, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.navbar = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inkbar = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.prevBtn = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nextBtn = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabLink = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tab = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      activeItem: "activeItem",
      scrollable: [2, "scrollable", "scrollable", booleanAttribute],
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      activeItemChange: "activeItemChange"
    },
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature],
    decls: 11,
    vars: 11,
    consts: [["content", ""], ["navbar", ""], ["inkbar", ""], ["prevBtn", ""], ["tab", ""], ["tabLink", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], ["nextBtn", ""], [3, "ngClass", "ngStyle"], [1, "p-tabmenu-nav-container"], ["class", "p-tabmenu-nav-prev p-tabmenu-nav-btn p-link", "type", "button", "role", "navigation", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabmenu-nav-content", 3, "scroll"], ["role", "menubar", 1, "p-tabmenu-nav", "p-reset"], ["role", "presentation", "pTooltip", "", 3, "ngStyle", "class", "ngClass", "tooltipOptions", "click", "keydown", "focus", 4, "ngFor", "ngForOf"], ["role", "none", 1, "p-tabmenu-ink-bar"], ["class", "p-tabmenu-nav-next p-tabmenu-nav-btn p-link", "type", "button", "role", "navigation", "pRipple", "", 3, "click", 4, "ngIf"], ["type", "button", "role", "navigation", "pRipple", "", 1, "p-tabmenu-nav-prev", "p-tabmenu-nav-btn", "p-link", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "presentation", "pTooltip", "", 3, "click", "keydown", "focus", "ngStyle", "ngClass", "tooltipOptions"], ["class", "p-menuitem-link", "role", "menuitem", "pRipple", "", 3, "target", 4, "ngIf"], ["role", "menuitem", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["type", "button", "role", "navigation", "pRipple", "", 1, "p-tabmenu-nav-next", "p-tabmenu-nav-btn", "p-link", 3, "click"]],
    template: function TabMenu_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
        \u0275\u0275template(2, TabMenu_button_2_Template, 4, 2, "button", 11);
        \u0275\u0275elementStart(3, "div", 12, 0);
        \u0275\u0275listener("scroll", function TabMenu_Template_div_scroll_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onScroll($event));
        });
        \u0275\u0275elementStart(5, "ul", 13, 1);
        \u0275\u0275template(7, TabMenu_li_7_Template, 5, 18, "li", 14);
        \u0275\u0275element(8, "li", 15, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, TabMenu_button_10_Template, 4, 2, "button", 16);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c72, ctx.scrollable))("ngStyle", ctx.style);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.scrollable && !ctx.backwardIsDisabled);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.focusableItems);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.scrollable && !ctx.forwardIsDisabled);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, Tooltip, ChevronLeftIcon, ChevronRightIcon],
    styles: ["@layer primeng{.p-tabmenu-nav-container{position:relative}.p-tabmenu-scrollable .p-tabmenu-nav-container{overflow:hidden}.p-tabmenu-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabmenu-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabmenu-nav-prev{left:0}.p-tabmenu-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabmenu-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:nowrap}.p-tabmenu-nav a{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1;white-space:nowrap}.p-tabmenu-ink-bar{display:none;z-index:1}.p-tabmenu-nav-content::-webkit-scrollbar{display:none}.p-tabmenuitem:not(.p-hidden){display:flex}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabMenu, [{
    type: Component,
    args: [{
      selector: "p-tabMenu",
      template: `
        <div [ngClass]="{ 'p-tabmenu p-component': true, 'p-tabmenu-scrollable': scrollable }" [ngStyle]="style" [class]="styleClass">
            <div class="p-tabmenu-nav-container">
                <button *ngIf="scrollable && !backwardIsDisabled" #prevBtn class="p-tabmenu-nav-prev p-tabmenu-nav-btn p-link" (click)="navBackward()" type="button" role="navigation" pRipple>
                    <ChevronLeftIcon *ngIf="!previousIconTemplate" [attr.aria-hidden]="true" />
                    <ng-template *ngTemplateOutlet="previousIconTemplate"></ng-template>
                </button>
                <div #content class="p-tabmenu-nav-content" (scroll)="onScroll($event)">
                    <ul #navbar class="p-tabmenu-nav p-reset" role="menubar" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-label]="ariaLabel">
                        <li
                            #tab
                            *ngFor="let item of focusableItems; let i = index"
                            role="presentation"
                            [ngStyle]="item.style"
                            [class]="item.styleClass"
                            [attr.data-p-disabled]="disabled(item)"
                            [attr.data-p-highlight]="focusedItemInfo() === item"
                            (click)="itemClick($event, item)"
                            (keydown)="onKeydownItem($event, i, item)"
                            (focus)="onMenuItemFocus(item)"
                            [ngClass]="{ 'p-tabmenuitem': true, 'p-disabled': getItemProp(item, 'disabled'), 'p-highlight': isActive(item), 'p-hidden': item.visible === false }"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                        >
                            <a
                                #tabLink
                                *ngIf="!item.routerLink && !itemTemplate"
                                class="p-menuitem-link"
                                role="menuitem"
                                [attr.href]="getItemProp(item, 'url')"
                                [attr.id]="getItemProp(item, 'id')"
                                [attr.aria-disabled]="disabled(item)"
                                [attr.aria-label]="getItemProp(item, 'label')"
                                [attr.tabindex]="disabled(item) ? -1 : 0"
                                [target]="getItemProp(item, 'target')"
                                pRipple
                            >
                                <ng-container>
                                    <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="item.iconStyle"></span>
                                    <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{ getItemProp(item, 'label') }}</span>
                                    <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                    <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ getItemProp(item, 'badge') }}</span>
                                </ng-container>
                            </a>
                            <a
                                #tabLink
                                *ngIf="item.routerLink && !itemTemplate"
                                [routerLink]="item.routerLink"
                                [queryParams]="item.queryParams"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                                role="menuitem"
                                class="p-menuitem-link"
                                [target]="item.target"
                                [attr.id]="getItemProp(item, 'id')"
                                [attr.aria-disabled]="disabled(item)"
                                [attr.aria-label]="getItemProp(item, 'label')"
                                [attr.tabindex]="disabled(item) ? -1 : 0"
                                [fragment]="item.fragment"
                                [queryParamsHandling]="item.queryParamsHandling"
                                [preserveFragment]="item.preserveFragment"
                                [skipLocationChange]="item.skipLocationChange"
                                [replaceUrl]="item.replaceUrl"
                                [state]="item.state"
                                pRipple
                            >
                                <ng-container>
                                    <span class="p-menuitem-icon" [attr.aria-hidden]="true" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="item.iconStyle"></span>
                                    <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{ getItemProp(item, 'label') }}</span>
                                    <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                    <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ getItemProp(item, 'badge') }}</span>
                                </ng-container>
                            </a>
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
                        </li>
                        <li #inkbar class="p-tabmenu-ink-bar" role="none"></li>
                    </ul>
                </div>
                <button *ngIf="scrollable && !forwardIsDisabled" #nextBtn class="p-tabmenu-nav-next p-tabmenu-nav-btn p-link" (click)="navForward()" type="button" role="navigation" pRipple>
                    <ChevronRightIcon *ngIf="!previousIconTemplate" [attr.aria-hidden]="true" />
                    <ng-template *ngTemplateOutlet="nextIconTemplate"></ng-template>
                </button>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-tabmenu-nav-container{position:relative}.p-tabmenu-scrollable .p-tabmenu-nav-container{overflow:hidden}.p-tabmenu-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabmenu-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabmenu-nav-prev{left:0}.p-tabmenu-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabmenu-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:nowrap}.p-tabmenu-nav a{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1;white-space:nowrap}.p-tabmenu-ink-bar{display:none;z-index:1}.p-tabmenu-nav-content::-webkit-scrollbar{display:none}.p-tabmenuitem:not(.p-hidden){display:flex}}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: ChangeDetectorRef
  }], {
    model: [{
      type: Input
    }],
    activeItem: [{
      type: Input
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    activeItemChange: [{
      type: Output
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    navbar: [{
      type: ViewChild,
      args: ["navbar"]
    }],
    inkbar: [{
      type: ViewChild,
      args: ["inkbar"]
    }],
    prevBtn: [{
      type: ViewChild,
      args: ["prevBtn"]
    }],
    nextBtn: [{
      type: ViewChild,
      args: ["nextBtn"]
    }],
    tabLink: [{
      type: ViewChildren,
      args: ["tabLink"]
    }],
    tab: [{
      type: ViewChildren,
      args: ["tab"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TabMenuModule = class _TabMenuModule {
  static \u0275fac = function TabMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabMenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TabMenuModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, RouterModule, SharedModule, RippleModule, TooltipModule, ChevronLeftIcon, ChevronRightIcon, RouterModule, SharedModule, TooltipModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, SharedModule, RippleModule, TooltipModule, ChevronLeftIcon, ChevronRightIcon],
      exports: [TabMenu, RouterModule, SharedModule, TooltipModule],
      declarations: [TabMenu]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-overlay.mjs
var _c04 = ["overlay"];
var _c14 = ["content"];
var _c23 = ["*"];
var _c33 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => ({
  "p-overlay p-component": true,
  "p-overlay-modal p-component-overlay p-component-overlay-enter": a0,
  "p-overlay-center": a1,
  "p-overlay-top": a2,
  "p-overlay-top-start": a3,
  "p-overlay-top-end": a4,
  "p-overlay-bottom": a5,
  "p-overlay-bottom-start": a6,
  "p-overlay-bottom-end": a7,
  "p-overlay-left": a8,
  "p-overlay-left-start": a9,
  "p-overlay-left-end": a10,
  "p-overlay-right": a11,
  "p-overlay-right-start": a12,
  "p-overlay-right-end": a13
});
var _c43 = (a0, a1, a2) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1,
  transform: a2
});
var _c53 = (a0) => ({
  value: "visible",
  params: a0
});
var _c63 = (a0) => ({
  mode: a0
});
var _c73 = (a0) => ({
  $implicit: a0
});
function Overlay_div_0_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Overlay_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3, 1);
    \u0275\u0275listener("click", function Overlay_div_0_div_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOverlayContentClick($event));
    })("@overlayContentAnimation.start", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOverlayContentAnimationStart($event));
    })("@overlayContentAnimation.done", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOverlayContentAnimationDone($event));
    });
    \u0275\u0275projection(2);
    \u0275\u0275template(3, Overlay_div_0_div_2_ng_container_3_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.contentStyleClass);
    \u0275\u0275property("ngStyle", ctx_r1.contentStyle)("ngClass", "p-overlay-content")("@overlayContentAnimation", \u0275\u0275pureFunction1(11, _c53, \u0275\u0275pureFunction3(7, _c43, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions, ctx_r1.transformOptions[ctx_r1.modal ? ctx_r1.overlayResponsiveDirection : "default"])));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(15, _c73, \u0275\u0275pureFunction1(13, _c63, ctx_r1.overlayMode)));
  }
}
function Overlay_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3, 0);
    \u0275\u0275listener("click", function Overlay_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick());
    });
    \u0275\u0275template(2, Overlay_div_0_div_2_Template, 4, 17, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngStyle", ctx_r1.style)("ngClass", \u0275\u0275pureFunctionV(5, _c33, [ctx_r1.modal, ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "center", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right-end"]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.visible);
  }
}
var OVERLAY_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Overlay),
  multi: true
};
var showOverlayContentAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{showTransitionParams}}")]);
var hideOverlayContentAnimation = animation([animate("{{hideTransitionParams}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Overlay = class _Overlay {
  document;
  platformId;
  el;
  renderer;
  config;
  overlayService;
  cd;
  zone;
  /**
   * The visible property is an input that determines the visibility of the component.
   * @defaultValue false
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.modalVisible) {
      this.modalVisible = true;
    }
  }
  /**
   * The mode property is an input that determines the overlay mode type or string.
   * @defaultValue null
   * @group Props
   */
  get mode() {
    return this._mode || this.overlayOptions?.mode;
  }
  set mode(value) {
    this._mode = value;
  }
  /**
   * The style property is an input that determines the style object for the component.
   * @defaultValue null
   * @group Props
   */
  get style() {
    return ObjectUtils.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style);
  }
  set style(value) {
    this._style = value;
  }
  /**
   * The styleClass property is an input that determines the CSS class(es) for the component.
   * @defaultValue null
   * @group Props
   */
  get styleClass() {
    return ObjectUtils.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass);
  }
  set styleClass(value) {
    this._styleClass = value;
  }
  /**
   * The contentStyle property is an input that determines the style object for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyle() {
    return ObjectUtils.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle);
  }
  set contentStyle(value) {
    this._contentStyle = value;
  }
  /**
   * The contentStyleClass property is an input that determines the CSS class(es) for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyleClass() {
    return ObjectUtils.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass);
  }
  set contentStyleClass(value) {
    this._contentStyleClass = value;
  }
  /**
   * The target property is an input that specifies the target element or selector for the component.
   * @defaultValue null
   * @group Props
   */
  get target() {
    const value = this._target || this.overlayOptions?.target;
    return value === void 0 ? "@prev" : value;
  }
  set target(value) {
    this._target = value;
  }
  /**
   * Overlay can be mounted into its location, body or DOM element instance using this option.
   * @defaultValue null
   * @group Props
   */
  get appendTo() {
    return this._appendTo || this.overlayOptions?.appendTo;
  }
  set appendTo(value) {
    this._appendTo = value;
  }
  /**
   * The autoZIndex determines whether to automatically manage layering. Its default value is 'false'.
   * @defaultValue false
   * @group Props
   */
  get autoZIndex() {
    const value = this._autoZIndex || this.overlayOptions?.autoZIndex;
    return value === void 0 ? true : value;
  }
  set autoZIndex(value) {
    this._autoZIndex = value;
  }
  /**
   * The baseZIndex is base zIndex value to use in layering.
   * @defaultValue null
   * @group Props
   */
  get baseZIndex() {
    const value = this._baseZIndex || this.overlayOptions?.baseZIndex;
    return value === void 0 ? 0 : value;
  }
  set baseZIndex(value) {
    this._baseZIndex = value;
  }
  /**
   * Transition options of the show or hide animation.
   * @defaultValue .12s cubic-bezier(0, 0, 0.2, 1)
   * @group Props
   */
  get showTransitionOptions() {
    const value = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions;
    return value === void 0 ? ".12s cubic-bezier(0, 0, 0.2, 1)" : value;
  }
  set showTransitionOptions(value) {
    this._showTransitionOptions = value;
  }
  /**
   * The hideTransitionOptions property is an input that determines the CSS transition options for hiding the component.
   * @defaultValue .1s linear
   * @group Props
   */
  get hideTransitionOptions() {
    const value = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions;
    return value === void 0 ? ".1s linear" : value;
  }
  set hideTransitionOptions(value) {
    this._hideTransitionOptions = value;
  }
  /**
   * The listener property is an input that specifies the listener object for the component.
   * @defaultValue null
   * @group Props
   */
  get listener() {
    return this._listener || this.overlayOptions?.listener;
  }
  set listener(value) {
    this._listener = value;
  }
  /**
   * It is the option used to determine in which mode it should appear according to the given media or breakpoint.
   * @defaultValue null
   * @group Props
   */
  get responsive() {
    return this._responsive || this.overlayOptions?.responsive;
  }
  set responsive(val) {
    this._responsive = val;
  }
  /**
   * The options property is an input that specifies the overlay options for the component.
   * @defaultValue null
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
  }
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {Boolean} boolean - Value of visibility as boolean.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Callback to invoke before the overlay is shown.
   * @param {OverlayOnBeforeShowEvent} event - Custom overlay before show event.
   * @group Emits
   */
  onBeforeShow = new EventEmitter();
  /**
   * Callback to invoke when the overlay is shown.
   * @param {OverlayOnShowEvent} event - Custom overlay show event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke before the overlay is hidden.
   * @param {OverlayOnBeforeHideEvent} event - Custom overlay before hide event.
   * @group Emits
   */
  onBeforeHide = new EventEmitter();
  /**
   * Callback to invoke when the overlay is hidden
   * @param {OverlayOnHideEvent} event - Custom hide event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the animation is started.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onAnimationStart = new EventEmitter();
  /**
   * Callback to invoke when the animation is done.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onAnimationDone = new EventEmitter();
  templates;
  overlayViewChild;
  contentViewChild;
  contentTemplate;
  _visible = false;
  _mode;
  _style;
  _styleClass;
  _contentStyle;
  _contentStyleClass;
  _target;
  _appendTo;
  _autoZIndex;
  _baseZIndex;
  _showTransitionOptions;
  _hideTransitionOptions;
  _listener;
  _responsive;
  _options;
  modalVisible = false;
  isOverlayClicked = false;
  isOverlayContentClicked = false;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  documentKeyboardListener;
  window;
  transformOptions = {
    default: "scaleY(0.8)",
    center: "scale(0.7)",
    top: "translate3d(0px, -100%, 0px)",
    "top-start": "translate3d(0px, -100%, 0px)",
    "top-end": "translate3d(0px, -100%, 0px)",
    bottom: "translate3d(0px, 100%, 0px)",
    "bottom-start": "translate3d(0px, 100%, 0px)",
    "bottom-end": "translate3d(0px, 100%, 0px)",
    left: "translate3d(-100%, 0px, 0px)",
    "left-start": "translate3d(-100%, 0px, 0px)",
    "left-end": "translate3d(-100%, 0px, 0px)",
    right: "translate3d(100%, 0px, 0px)",
    "right-start": "translate3d(100%, 0px, 0px)",
    "right-end": "translate3d(100%, 0px, 0px)"
  };
  get modal() {
    if (isPlatformBrowser(this.platformId)) {
      return this.mode === "modal" || this.overlayResponsiveOptions && this.window?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media", "") || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches;
    }
  }
  get overlayMode() {
    return this.mode || (this.modal ? "modal" : "overlay");
  }
  get overlayOptions() {
    return __spreadValues(__spreadValues({}, this.config?.overlayOptions), this.options);
  }
  get overlayResponsiveOptions() {
    return __spreadValues(__spreadValues({}, this.overlayOptions?.responsive), this.responsive);
  }
  get overlayResponsiveDirection() {
    return this.overlayResponsiveOptions?.direction || "center";
  }
  get overlayEl() {
    return this.overlayViewChild?.nativeElement;
  }
  get contentEl() {
    return this.contentViewChild?.nativeElement;
  }
  get targetEl() {
    return DomHandler.getTargetElement(this.target, this.el?.nativeElement);
  }
  constructor(document2, platformId, el, renderer, config, overlayService, cd, zone) {
    this.document = document2;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.config = config;
    this.overlayService = overlayService;
    this.cd = cd;
    this.zone = zone;
    this.window = this.document.defaultView;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  show(overlay, isFocus = false) {
    this.onVisibleChange(true);
    this.handleEvents("onShow", {
      overlay: overlay || this.overlayEl,
      target: this.targetEl,
      mode: this.overlayMode
    });
    isFocus && DomHandler.focus(this.targetEl);
    this.modal && DomHandler.addClass(this.document?.body, "p-overflow-hidden");
  }
  hide(overlay, isFocus = false) {
    if (!this.visible) {
      return;
    } else {
      this.onVisibleChange(false);
      this.handleEvents("onHide", {
        overlay: overlay || this.overlayEl,
        target: this.targetEl,
        mode: this.overlayMode
      });
      isFocus && DomHandler.focus(this.targetEl);
      this.modal && DomHandler.removeClass(this.document?.body, "p-overflow-hidden");
    }
  }
  alignOverlay() {
    !this.modal && DomHandler.alignOverlay(this.overlayEl, this.targetEl, this.appendTo);
  }
  onVisibleChange(visible) {
    this._visible = visible;
    this.visibleChange.emit(visible);
  }
  onOverlayClick() {
    this.isOverlayClicked = true;
  }
  onOverlayContentClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.targetEl
    });
    this.isOverlayContentClicked = true;
  }
  onOverlayContentAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.handleEvents("onBeforeShow", {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        if (this.autoZIndex) {
          zindexutils.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]);
        }
        DomHandler.appendOverlay(this.overlayEl, this.appendTo === "body" ? this.document.body : this.appendTo, this.appendTo);
        this.alignOverlay();
        break;
      case "void":
        this.handleEvents("onBeforeHide", {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        this.modal && DomHandler.addClass(this.overlayEl, "p-component-overlay-leave");
        break;
    }
    this.handleEvents("onAnimationStart", event);
  }
  onOverlayContentAnimationDone(event) {
    const container = this.overlayEl || event.element.parentElement;
    switch (event.toState) {
      case "visible":
        if (this.visible) {
          this.show(container, true);
        }
        this.bindListeners();
        break;
      case "void":
        if (!this.visible) {
          this.hide(container, true);
          this.modalVisible = false;
          this.unbindListeners();
          DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
          zindexutils.clear(container);
          this.cd.markForCheck();
          break;
        }
    }
    this.handleEvents("onAnimationDone", event);
  }
  handleEvents(name, params) {
    this[name].emit(params);
    this.options && this.options[name] && this.options[name](params);
    this.config?.overlayOptions && (this.config?.overlayOptions)[name] && (this.config?.overlayOptions)[name](params);
  }
  bindListeners() {
    this.unbindListeners();
    this.bindScrollListener();
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindDocumentKeyboardListener();
  }
  unbindListeners() {
    this.unbindScrollListener();
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentKeyboardListener();
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.targetEl, (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "scroll",
          mode: this.overlayMode,
          valid: true
        }) : true;
        valid && this.hide(event, true);
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
        const isTargetClicked = this.targetEl && (this.targetEl.isSameNode(event.target) || !this.isOverlayClicked && this.targetEl.contains(event.target));
        const isOutsideClicked = !isTargetClicked && !this.isOverlayContentClicked;
        const valid = this.listener ? this.listener(event, {
          type: "outside",
          mode: this.overlayMode,
          valid: event.which !== 3 && isOutsideClicked
        }) : isOutsideClicked;
        valid && this.hide(event);
        this.isOverlayClicked = this.isOverlayContentClicked = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "resize",
          mode: this.overlayMode,
          valid: !DomHandler.isTouchDevice()
        }) : !DomHandler.isTouchDevice();
        valid && this.hide(event, true);
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.documentKeyboardListener = this.renderer.listen(this.window, "keydown", (event) => {
        if (this.overlayOptions.hideOnEscape === false || event.code !== "Escape") {
          return;
        }
        const valid = this.listener ? this.listener(event, {
          type: "keydown",
          mode: this.overlayMode,
          valid: !DomHandler.isTouchDevice()
        }) : !DomHandler.isTouchDevice();
        if (valid) {
          this.zone.run(() => {
            this.hide(event, true);
          });
        }
      });
    });
  }
  unbindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      this.documentKeyboardListener();
      this.documentKeyboardListener = null;
    }
  }
  ngOnDestroy() {
    this.hide(this.overlayEl, true);
    if (this.overlayEl) {
      DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
      zindexutils.clear(this.overlayEl);
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindListeners();
  }
  static \u0275fac = function Overlay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Overlay)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(PrimeNGConfig), \u0275\u0275directiveInject(OverlayService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Overlay,
    selectors: [["p-overlay"]],
    contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Overlay_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
        \u0275\u0275viewQuery(_c14, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      visible: "visible",
      mode: "mode",
      style: "style",
      styleClass: "styleClass",
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      target: "target",
      appendTo: "appendTo",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      listener: "listener",
      responsive: "responsive",
      options: "options"
    },
    outputs: {
      visibleChange: "visibleChange",
      onBeforeShow: "onBeforeShow",
      onShow: "onShow",
      onBeforeHide: "onBeforeHide",
      onHide: "onHide",
      onAnimationStart: "onAnimationStart",
      onAnimationDone: "onAnimationDone"
    },
    features: [\u0275\u0275ProvidersFeature([OVERLAY_VALUE_ACCESSOR])],
    ngContentSelectors: _c23,
    decls: 1,
    vars: 1,
    consts: [["overlay", ""], ["content", ""], [3, "ngStyle", "class", "ngClass", "click", 4, "ngIf"], [3, "click", "ngStyle", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Overlay_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, Overlay_div_0_Template, 3, 20, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.modalVisible);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
    styles: ["@layer primeng{.p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Component,
    args: [{
      selector: "p-overlay",
      template: `
        <div
            *ngIf="modalVisible"
            #overlay
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{
                'p-overlay p-component': true,
                'p-overlay-modal p-component-overlay p-component-overlay-enter': modal,
                'p-overlay-center': modal && overlayResponsiveDirection === 'center',
                'p-overlay-top': modal && overlayResponsiveDirection === 'top',
                'p-overlay-top-start': modal && overlayResponsiveDirection === 'top-start',
                'p-overlay-top-end': modal && overlayResponsiveDirection === 'top-end',
                'p-overlay-bottom': modal && overlayResponsiveDirection === 'bottom',
                'p-overlay-bottom-start': modal && overlayResponsiveDirection === 'bottom-start',
                'p-overlay-bottom-end': modal && overlayResponsiveDirection === 'bottom-end',
                'p-overlay-left': modal && overlayResponsiveDirection === 'left',
                'p-overlay-left-start': modal && overlayResponsiveDirection === 'left-start',
                'p-overlay-left-end': modal && overlayResponsiveDirection === 'left-end',
                'p-overlay-right': modal && overlayResponsiveDirection === 'right',
                'p-overlay-right-start': modal && overlayResponsiveDirection === 'right-start',
                'p-overlay-right-end': modal && overlayResponsiveDirection === 'right-end'
            }"
            (click)="onOverlayClick()"
        >
            <div
                *ngIf="visible"
                #content
                [ngStyle]="contentStyle"
                [class]="contentStyleClass"
                [ngClass]="'p-overlay-content'"
                (click)="onOverlayContentClick($event)"
                [@overlayContentAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions, transform: transformOptions[modal ? overlayResponsiveDirection : 'default'] } }"
                (@overlayContentAnimation.start)="onOverlayContentAnimationStart($event)"
                (@overlayContentAnimation.done)="onOverlayContentAnimationDone($event)"
            >
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: { mode: overlayMode } }"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [OVERLAY_VALUE_ACCESSOR],
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}}\n"]
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
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }], {
    visible: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    listener: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }],
    onBeforeShow: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onBeforeHide: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onAnimationStart: [{
      type: Output
    }],
    onAnimationDone: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
var OverlayModule = class _OverlayModule {
  static \u0275fac = function OverlayModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _OverlayModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule],
      exports: [Overlay, SharedModule],
      declarations: [Overlay]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-scroller.mjs
var _c05 = ["element"];
var _c15 = ["content"];
var _c24 = ["*"];
var _c34 = (a0, a1, a2) => ({
  "p-scroller": true,
  "p-scroller-inline": a0,
  "p-both-scroll": a1,
  "p-horizontal-scroll": a2
});
var _c44 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c54 = (a0) => ({
  "p-scroller-loading": a0
});
var _c64 = (a0) => ({
  "p-component-overlay": a0
});
var _c74 = (a0) => ({
  numCols: a0
});
var _c83 = (a0) => ({
  options: a0
});
var _c93 = () => ({
  styleClass: "p-scroller-loading-icon"
});
var _c103 = (a0, a1) => ({
  rows: a0,
  columns: a1
});
function Scroller_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Scroller_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_container_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c44, ctx_r1.loadedItems, ctx_r1.getContentOptions()));
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c44, item_r3, ctx_r1.getOptions(index_r4)));
  }
}
function Scroller_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11, 3);
    \u0275\u0275template(2, Scroller_ng_container_0_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c54, ctx_r1.d_loading))("ngStyle", ctx_r1.contentStyle);
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.loadedItems)("ngForTrackBy", ctx_r1._trackBy || ctx_r1.index);
  }
}
function Scroller_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", ctx_r1.spacerStyle);
    \u0275\u0275attribute("data-pc-section", "spacer");
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const index_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c83, ctx_r1.getLoaderOptions(index_r5, ctx_r1.both && \u0275\u0275pureFunction1(2, _c74, ctx_r1._numItemsInViewport.cols))));
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template, 2, 6, "ng-container", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.loaderArr);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c83, \u0275\u0275pureFunction0(2, _c93)));
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SpinnerIcon", 16);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-scroller-loading-icon pi-spin");
    \u0275\u0275attribute("data-pc-section", "loadingIcon");
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template, 2, 5, "ng-container", 6)(1, Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template, 1, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const buildInLoaderIcon_r6 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.loaderIconTemplate)("ngIfElse", buildInLoaderIcon_r6);
  }
}
function Scroller_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, Scroller_ng_container_0_div_7_ng_container_1_Template, 2, 1, "ng-container", 6)(2, Scroller_ng_container_0_div_7_ng_template_2_Template, 3, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const buildInLoader_r7 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c64, !ctx_r1.loaderTemplate));
    \u0275\u0275attribute("data-pc-section", "loader");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loaderTemplate)("ngIfElse", buildInLoader_r7);
  }
}
function Scroller_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7, 1);
    \u0275\u0275listener("scroll", function Scroller_ng_container_0_Template_div_scroll_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContainerScroll($event));
    });
    \u0275\u0275template(3, Scroller_ng_container_0_ng_container_3_Template, 2, 5, "ng-container", 6)(4, Scroller_ng_container_0_ng_template_4_Template, 3, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, Scroller_ng_container_0_div_6_Template, 1, 2, "div", 8)(7, Scroller_ng_container_0_div_7_Template, 4, 6, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const buildInContent_r8 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1._styleClass);
    \u0275\u0275property("ngStyle", ctx_r1._style)("ngClass", \u0275\u0275pureFunction3(12, _c34, ctx_r1.inline, ctx_r1.both, ctx_r1.horizontal));
    \u0275\u0275attribute("id", ctx_r1._id)("tabindex", ctx_r1.tabindex)("data-pc-name", "scroller")("data-pc-section", "root");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.contentTemplate)("ngIfElse", buildInContent_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1._showSpacer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loaderDisabled && ctx_r1._showLoader && ctx_r1.d_loading);
  }
}
function Scroller_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Scroller_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c44, ctx_r1.items, \u0275\u0275pureFunction2(2, _c103, ctx_r1._items, ctx_r1.loadedColumns)));
  }
}
function Scroller_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, Scroller_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.contentTemplate);
  }
}
var Scroller = class _Scroller {
  document;
  platformId;
  renderer;
  cd;
  zone;
  /**
   * Unique identifier of the element.
   * @group Props
   */
  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val;
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(val) {
    this._style = val;
  }
  /**
   * Style class of the element.
   * @group Props
   */
  get styleClass() {
    return this._styleClass;
  }
  set styleClass(val) {
    this._styleClass = val;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  get tabindex() {
    return this._tabindex;
  }
  set tabindex(val) {
    this._tabindex = val;
  }
  /**
   * An array of objects to display.
   * @group Props
   */
  get items() {
    return this._items;
  }
  set items(val) {
    this._items = val;
  }
  /**
   * The height/width of item according to orientation.
   * @group Props
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
  }
  /**
   * Height of the scroll viewport.
   * @group Props
   */
  get scrollHeight() {
    return this._scrollHeight;
  }
  set scrollHeight(val) {
    this._scrollHeight = val;
  }
  /**
   * Width of the scroll viewport.
   * @group Props
   */
  get scrollWidth() {
    return this._scrollWidth;
  }
  set scrollWidth(val) {
    this._scrollWidth = val;
  }
  /**
   * The orientation of scrollbar.
   * @group Props
   */
  get orientation() {
    return this._orientation;
  }
  set orientation(val) {
    this._orientation = val;
  }
  /**
   * Used to specify how many items to load in each load method in lazy mode.
   * @group Props
   */
  get step() {
    return this._step;
  }
  set step(val) {
    this._step = val;
  }
  /**
   * Delay in scroll before new data is loaded.
   * @group Props
   */
  get delay() {
    return this._delay;
  }
  set delay(val) {
    this._delay = val;
  }
  /**
   * Delay after window's resize finishes.
   * @group Props
   */
  get resizeDelay() {
    return this._resizeDelay;
  }
  set resizeDelay(val) {
    this._resizeDelay = val;
  }
  /**
   * Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash.
   * @group Props
   */
  get appendOnly() {
    return this._appendOnly;
  }
  set appendOnly(val) {
    this._appendOnly = val;
  }
  /**
   * Specifies whether the scroller should be displayed inline or not.
   * @group Props
   */
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = val;
  }
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  get lazy() {
    return this._lazy;
  }
  set lazy(val) {
    this._lazy = val;
  }
  /**
   * If disabled, the scroller feature is eliminated and the content is displayed directly.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
  }
  /**
   * Used to implement a custom loader instead of using the loader feature in the scroller.
   * @group Props
   */
  get loaderDisabled() {
    return this._loaderDisabled;
  }
  set loaderDisabled(val) {
    this._loaderDisabled = val;
  }
  /**
   * Columns to display.
   * @group Props
   */
  get columns() {
    return this._columns;
  }
  set columns(val) {
    this._columns = val;
  }
  /**
   * Used to implement a custom spacer instead of using the spacer feature in the scroller.
   * @group Props
   */
  get showSpacer() {
    return this._showSpacer;
  }
  set showSpacer(val) {
    this._showSpacer = val;
  }
  /**
   * Defines whether to show loader.
   * @group Props
   */
  get showLoader() {
    return this._showLoader;
  }
  set showLoader(val) {
    this._showLoader = val;
  }
  /**
   * Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view.
   * @group Props
   */
  get numToleratedItems() {
    return this._numToleratedItems;
  }
  set numToleratedItems(val) {
    this._numToleratedItems = val;
  }
  /**
   * Defines whether the data is loaded.
   * @group Props
   */
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
  }
  /**
   * Defines whether to dynamically change the height or width of scrollable container.
   * @group Props
   */
  get autoSize() {
    return this._autoSize;
  }
  set autoSize(val) {
    this._autoSize = val;
  }
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.
   * @group Props
   */
  get trackBy() {
    return this._trackBy;
  }
  set trackBy(val) {
    this._trackBy = val;
  }
  /**
   * Defines whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {ScrollerLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke when scroll position changes.
   * @param {ScrollerScrollEvent} event - Custom scroll event.
   * @group Emits
   */
  onScroll = new EventEmitter();
  /**
   * Callback to invoke when scroll position and item's range in view changes.
   * @param {ScrollerScrollEvent} event - Custom scroll index change event.
   * @group Emits
   */
  onScrollIndexChange = new EventEmitter();
  elementViewChild;
  contentViewChild;
  templates;
  _id;
  _style;
  _styleClass;
  _tabindex = 0;
  _items;
  _itemSize = 0;
  _scrollHeight;
  _scrollWidth;
  _orientation = "vertical";
  _step = 0;
  _delay = 0;
  _resizeDelay = 10;
  _appendOnly = false;
  _inline = false;
  _lazy = false;
  _disabled = false;
  _loaderDisabled = false;
  _columns;
  _showSpacer = true;
  _showLoader = false;
  _numToleratedItems;
  _loading;
  _autoSize = false;
  _trackBy;
  _options;
  d_loading = false;
  d_numToleratedItems;
  contentEl;
  contentTemplate;
  itemTemplate;
  loaderTemplate;
  loaderIconTemplate;
  first = 0;
  last = 0;
  page = 0;
  isRangeChanged = false;
  numItemsInViewport = 0;
  lastScrollPos = 0;
  lazyLoadState = {};
  loaderArr = [];
  spacerStyle = {};
  contentStyle = {};
  scrollTimeout;
  resizeTimeout;
  initialized = false;
  resizeObserver;
  defaultWidth;
  defaultHeight;
  defaultContentWidth;
  defaultContentHeight;
  get vertical() {
    return this._orientation === "vertical";
  }
  get horizontal() {
    return this._orientation === "horizontal";
  }
  get both() {
    return this._orientation === "both";
  }
  get loadedItems() {
    if (this._items && !this.d_loading) {
      if (this.both) return this._items.slice(this._appendOnly ? 0 : this.first.rows, this.last.rows).map((item) => this._columns ? item : item.slice(this._appendOnly ? 0 : this.first.cols, this.last.cols));
      else if (this.horizontal && this._columns) return this._items;
      else return this._items.slice(this._appendOnly ? 0 : this.first, this.last);
    }
    return [];
  }
  get loadedRows() {
    return this.d_loading ? this._loaderDisabled ? this.loaderArr : [] : this.loadedItems;
  }
  get loadedColumns() {
    if (this._columns && (this.both || this.horizontal)) {
      return this.d_loading && this._loaderDisabled ? this.both ? this.loaderArr[0] : this.loaderArr : this._columns.slice(this.both ? this.first.cols : this.first, this.both ? this.last.cols : this.last);
    }
    return this._columns;
  }
  constructor(document2, platformId, renderer, cd, zone) {
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
  }
  ngOnInit() {
    this.setInitialState();
  }
  ngOnChanges(simpleChanges) {
    let isLoadingChanged = false;
    if (simpleChanges.loading) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.loading;
      if (this.lazy && previousValue !== currentValue && currentValue !== this.d_loading) {
        this.d_loading = currentValue;
        isLoadingChanged = true;
      }
    }
    if (simpleChanges.orientation) {
      this.lastScrollPos = this.both ? {
        top: 0,
        left: 0
      } : 0;
    }
    if (simpleChanges.numToleratedItems) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.numToleratedItems;
      if (previousValue !== currentValue && currentValue !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue;
      }
    }
    if (simpleChanges.options) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.options;
      if (this.lazy && previousValue?.loading !== currentValue?.loading && currentValue?.loading !== this.d_loading) {
        this.d_loading = currentValue.loading;
        isLoadingChanged = true;
      }
      if (previousValue?.numToleratedItems !== currentValue?.numToleratedItems && currentValue?.numToleratedItems !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue.numToleratedItems;
      }
    }
    if (simpleChanges.items) {
      this.setSpacerSize();
      this.setSize();
      this.cd.detectChanges();
    }
    if (this.initialized) {
      const isChanged = !isLoadingChanged && (simpleChanges.items?.previousValue?.length !== simpleChanges.items?.currentValue?.length || simpleChanges.itemSize || simpleChanges.scrollHeight || simpleChanges.scrollWidth);
      if (isChanged) {
        this.init();
        this.calculateAutoSize();
      }
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "loadericon":
          this.loaderIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.viewInit();
    });
  }
  ngAfterViewChecked() {
    if (!this.initialized) {
      this.viewInit();
    }
  }
  ngOnDestroy() {
    this.unbindResizeListener();
    this.contentEl = null;
    this.initialized = false;
  }
  viewInit() {
    if (isPlatformBrowser(this.platformId) && !this.initialized) {
      if (DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
        this.setInitialState();
        this.setContentEl(this.contentEl);
        this.init();
        this.calculateAutoSize();
        this.defaultWidth = DomHandler.getWidth(this.elementViewChild?.nativeElement);
        this.defaultHeight = DomHandler.getHeight(this.elementViewChild?.nativeElement);
        this.defaultContentWidth = DomHandler.getWidth(this.contentEl);
        this.defaultContentHeight = DomHandler.getHeight(this.contentEl);
        this.resizeObserver = new ResizeObserver(() => this.onResize());
        this.resizeObserver.observe(this.elementViewChild?.nativeElement);
        this.initialized = true;
      }
    }
  }
  init() {
    if (!this._disabled) {
      this.setSize();
      this.calculateOptions();
      this.setSpacerSize();
      this.cd.detectChanges();
    }
  }
  setContentEl(el) {
    this.contentEl = el || this.contentViewChild?.nativeElement || DomHandler.findSingle(this.elementViewChild?.nativeElement, ".p-scroller-content");
  }
  setInitialState() {
    this.first = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.last = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.numItemsInViewport = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.lastScrollPos = this.both ? {
      top: 0,
      left: 0
    } : 0;
    this.d_loading = this._loading || false;
    this.d_numToleratedItems = this._numToleratedItems;
    this.loaderArr = [];
    this.spacerStyle = {};
    this.contentStyle = {};
  }
  getElementRef() {
    return this.elementViewChild;
  }
  getPageByFirst(first) {
    return Math.floor(((first ?? this.first) + this.d_numToleratedItems * 4) / (this._step || 1));
  }
  isPageChanged(first) {
    return this._step ? this.page !== this.getPageByFirst(first ?? this.first) : true;
  }
  scrollTo(options) {
    this.elementViewChild?.nativeElement?.scrollTo(options);
  }
  scrollToIndex(index, behavior = "auto") {
    const valid = this.both ? index.every((i) => i > -1) : index > -1;
    if (valid) {
      const first = this.first;
      const {
        scrollTop = 0,
        scrollLeft = 0
      } = this.elementViewChild?.nativeElement;
      const {
        numToleratedItems
      } = this.calculateNumItems();
      const contentPos = this.getContentPosition();
      const itemSize = this.itemSize;
      const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
      const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      let newFirst = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      let isRangeChanged = false, isScrollChanged = false;
      if (this.both) {
        newFirst = {
          rows: calculateFirst(index[0], numToleratedItems[0]),
          cols: calculateFirst(index[1], numToleratedItems[1])
        };
        scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
        isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
        isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
      } else {
        newFirst = calculateFirst(index, numToleratedItems);
        this.horizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), scrollTop) : scrollTo(scrollLeft, calculateCoord(newFirst, itemSize, contentPos.top));
        isScrollChanged = this.lastScrollPos !== (this.horizontal ? scrollLeft : scrollTop);
        isRangeChanged = newFirst !== first;
      }
      this.isRangeChanged = isRangeChanged;
      isScrollChanged && (this.first = newFirst);
    }
  }
  scrollInView(index, to, behavior = "auto") {
    if (to) {
      const {
        first,
        viewport
      } = this.getRenderedRange();
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      const isToStart = to === "to-start";
      const isToEnd = to === "to-end";
      if (isToStart) {
        if (this.both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows - 1) * this._itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollTo((viewport.first.cols - 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.first - first > index) {
            const pos = (viewport.first - 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      } else if (isToEnd) {
        if (this.both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows + 1) * this._itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollTo((viewport.first.cols + 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.last - first <= index + 1) {
            const pos = (viewport.first + 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      }
    } else {
      this.scrollToIndex(index, behavior);
    }
  }
  getRenderedRange() {
    const calculateFirstInViewport = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
    let firstInViewport = this.first;
    let lastInViewport = 0;
    if (this.elementViewChild?.nativeElement) {
      const {
        scrollTop,
        scrollLeft
      } = this.elementViewChild.nativeElement;
      if (this.both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, this._itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, this._itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + this.numItemsInViewport.rows,
          cols: firstInViewport.cols + this.numItemsInViewport.cols
        };
      } else {
        const scrollPos = this.horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, this._itemSize);
        lastInViewport = firstInViewport + this.numItemsInViewport;
      }
    }
    return {
      first: this.first,
      last: this.last,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  }
  calculateNumItems() {
    const contentPos = this.getContentPosition();
    const contentWidth = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetWidth - contentPos.left : 0) || 0;
    const contentHeight = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetHeight - contentPos.top : 0) || 0;
    const calculateNumItemsInViewport = (_contentSize, _itemSize) => _itemSize || _contentSize ? Math.ceil(_contentSize / (_itemSize || _contentSize)) : 0;
    const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
    const numItemsInViewport = this.both ? {
      rows: calculateNumItemsInViewport(contentHeight, this._itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, this._itemSize[1])
    } : calculateNumItemsInViewport(this.horizontal ? contentWidth : contentHeight, this._itemSize);
    const numToleratedItems = this.d_numToleratedItems || (this.both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport,
      numToleratedItems
    };
  }
  calculateOptions() {
    const {
      numItemsInViewport,
      numToleratedItems
    } = this.calculateNumItems();
    const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    const first = this.first;
    const last = this.both ? {
      rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(this.first, numItemsInViewport, numToleratedItems);
    this.last = last;
    this.numItemsInViewport = numItemsInViewport;
    this.d_numToleratedItems = numToleratedItems;
    if (this.showLoader) {
      this.loaderArr = this.both ? Array.from({
        length: numItemsInViewport.rows
      }).map(() => Array.from({
        length: numItemsInViewport.cols
      })) : Array.from({
        length: numItemsInViewport
      });
    }
    if (this._lazy) {
      Promise.resolve().then(() => {
        this.lazyLoadState = {
          first: this._step ? this.both ? {
            rows: 0,
            cols: first.cols
          } : 0 : first,
          last: Math.min(this._step ? this._step : this.last, this.items.length)
        };
        this.handleEvents("onLazyLoad", this.lazyLoadState);
      });
    }
  }
  calculateAutoSize() {
    if (this._autoSize && !this.d_loading) {
      Promise.resolve().then(() => {
        if (this.contentEl) {
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = "auto";
          this.contentEl.style.position = "relative";
          this.elementViewChild.nativeElement.style.contain = "none";
          const [contentWidth, contentHeight] = [DomHandler.getWidth(this.contentEl), DomHandler.getHeight(this.contentEl)];
          contentWidth !== this.defaultContentWidth && (this.elementViewChild.nativeElement.style.width = "");
          contentHeight !== this.defaultContentHeight && (this.elementViewChild.nativeElement.style.height = "");
          const [width, height] = [DomHandler.getWidth(this.elementViewChild.nativeElement), DomHandler.getHeight(this.elementViewChild.nativeElement)];
          (this.both || this.horizontal) && (this.elementViewChild.nativeElement.style.width = width < this.defaultWidth ? width + "px" : this._scrollWidth || this.defaultWidth + "px");
          (this.both || this.vertical) && (this.elementViewChild.nativeElement.style.height = height < this.defaultHeight ? height + "px" : this._scrollHeight || this.defaultHeight + "px");
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = "";
          this.contentEl.style.position = "";
          this.elementViewChild.nativeElement.style.contain = "";
          this.defaultWidth = width;
          this.defaultHeight = height;
          this.defaultContentWidth = contentWidth;
          this.defaultContentHeight = contentHeight;
        }
      });
    }
  }
  getLast(last = 0, isCols = false) {
    return this._items ? Math.min(isCols ? (this._columns || this._items[0]).length : this._items.length, last) : 0;
  }
  getContentPosition() {
    if (this.contentEl) {
      const style2 = getComputedStyle(this.contentEl);
      const left = parseFloat(style2.paddingLeft) + Math.max(parseFloat(style2.left) || 0, 0);
      const right = parseFloat(style2.paddingRight) + Math.max(parseFloat(style2.right) || 0, 0);
      const top = parseFloat(style2.paddingTop) + Math.max(parseFloat(style2.top) || 0, 0);
      const bottom = parseFloat(style2.paddingBottom) + Math.max(parseFloat(style2.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  }
  setSize() {
    if (this.elementViewChild?.nativeElement) {
      const parentElement = this.elementViewChild.nativeElement.parentElement.parentElement;
      const width = this._scrollWidth || `${this.elementViewChild.nativeElement.offsetWidth || parentElement.offsetWidth}px`;
      const height = this._scrollHeight || `${this.elementViewChild.nativeElement.offsetHeight || parentElement.offsetHeight}px`;
      const setProp = (_name, _value) => this.elementViewChild.nativeElement.style[_name] = _value;
      if (this.both || this.horizontal) {
        setProp("height", height);
        setProp("width", width);
      } else {
        setProp("height", height);
      }
    }
  }
  setSpacerSize() {
    if (this._items) {
      const setProp = (_name, _count, _size) => this.spacerStyle = __spreadValues(__spreadValues({}, this.spacerStyle), {
        [`${_name}`]: _count * _size + "px"
      });
      const numItems = this._items.length;
      if (this.both) {
        setProp("height", numItems, this._itemSize[0]);
        setProp("width", this._columns?.length || this._items[1]?.length, this._itemSize[1]);
      } else {
        this.horizontal ? setProp("width", this._columns?.length || this._items.length, this._itemSize) : setProp("height", numItems, this._itemSize);
      }
    }
  }
  setContentPosition(pos) {
    if (this.contentEl && !this._appendOnly) {
      const first = pos ? pos.first : this.first;
      const calculateTranslateVal = (_first, _size) => _first * _size;
      const setTransform = (_x = 0, _y = 0) => this.contentStyle = __spreadValues(__spreadValues({}, this.contentStyle), {
        transform: `translate3d(${_x}px, ${_y}px, 0)`
      });
      if (this.both) {
        setTransform(calculateTranslateVal(first.cols, this._itemSize[1]), calculateTranslateVal(first.rows, this._itemSize[0]));
      } else {
        const translateVal = calculateTranslateVal(first, this._itemSize);
        this.horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  }
  onScrollPositionChange(event) {
    const target = event.target;
    const contentPos = this.getContentPosition();
    const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    const calculateCurrentIndex = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
    const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      if (_currentIndex <= _numT) return 0;
      else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
      let lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue += _numT + 1;
      }
      return this.getLast(lastValue, _isCols);
    };
    const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    let newFirst = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    let newLast = this.last;
    let isRangeChanged = false;
    let newScrollPos = this.lastScrollPos;
    if (this.both) {
      const isScrollDown = this.lastScrollPos.top <= scrollTop;
      const isScrollRight = this.lastScrollPos.left <= scrollLeft;
      if (!this._appendOnly || this._appendOnly && (isScrollDown || isScrollRight)) {
        const currentIndex = {
          rows: calculateCurrentIndex(scrollTop, this._itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, this._itemSize[1])
        };
        const triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
        };
        isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      const scrollPos = this.horizontal ? scrollLeft : scrollTop;
      const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
      if (!this._appendOnly || this._appendOnly && isScrollDownOrRight) {
        const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize);
        const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
        isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  }
  onScrollChange(event) {
    const {
      first,
      last,
      isRangeChanged,
      scrollPos
    } = this.onScrollPositionChange(event);
    if (isRangeChanged) {
      const newState = {
        first,
        last
      };
      this.setContentPosition(newState);
      this.first = first;
      this.last = last;
      this.lastScrollPos = scrollPos;
      this.handleEvents("onScrollIndexChange", newState);
      if (this._lazy && this.isPageChanged(first)) {
        const lazyLoadState = {
          first: this._step ? Math.min(this.getPageByFirst(first) * this._step, this.items.length - this._step) : first,
          last: Math.min(this._step ? (this.getPageByFirst(first) + 1) * this._step : last, this.items.length)
        };
        const isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
        isLazyStateChanged && this.handleEvents("onLazyLoad", lazyLoadState);
        this.lazyLoadState = lazyLoadState;
      }
    }
  }
  onContainerScroll(event) {
    this.handleEvents("onScroll", {
      originalEvent: event
    });
    if (this._delay && this.isPageChanged()) {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      if (!this.d_loading && this.showLoader) {
        const {
          isRangeChanged
        } = this.onScrollPositionChange(event);
        const changed = isRangeChanged || (this._step ? this.isPageChanged() : false);
        if (changed) {
          this.d_loading = true;
          this.cd.detectChanges();
        }
      }
      this.scrollTimeout = setTimeout(() => {
        this.onScrollChange(event);
        if (this.d_loading && this.showLoader && (!this._lazy || this._loading === void 0)) {
          this.d_loading = false;
          this.page = this.getPageByFirst();
          this.cd.detectChanges();
        }
      }, this._delay);
    } else {
      !this.d_loading && this.onScrollChange(event);
    }
  }
  unbindResizeListener() {
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.elementViewChild?.nativeElement);
      this.resizeObserver = null;
    }
  }
  onResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      if (DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
        const [width, height] = [DomHandler.getWidth(this.elementViewChild?.nativeElement), DomHandler.getHeight(this.elementViewChild?.nativeElement)];
        const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
        const reinit = this.both ? isDiffWidth || isDiffHeight : this.horizontal ? isDiffWidth : this.vertical ? isDiffHeight : false;
        reinit && this.zone.run(() => {
          this.d_numToleratedItems = this._numToleratedItems;
          this.init();
          this.calculateAutoSize();
        });
      }
    }, this._resizeDelay);
  }
  handleEvents(name, params) {
    return this.options && this.options[name] ? this.options[name](params) : this[name].emit(params);
  }
  getContentOptions() {
    return {
      contentStyleClass: `p-scroller-content ${this.d_loading ? "p-scroller-loading" : ""}`,
      items: this.loadedItems,
      getItemOptions: (index) => this.getOptions(index),
      loading: this.d_loading,
      getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
      itemSize: this._itemSize,
      rows: this.loadedRows,
      columns: this.loadedColumns,
      spacerStyle: this.spacerStyle,
      contentStyle: this.contentStyle,
      vertical: this.vertical,
      horizontal: this.horizontal,
      both: this.both
    };
  }
  getOptions(renderedIndex) {
    const count = (this._items || []).length;
    const index = this.both ? this.first.rows + renderedIndex : this.first + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    };
  }
  getLoaderOptions(index, extOptions) {
    const count = this.loaderArr.length;
    return __spreadValues({
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    }, extOptions);
  }
  static \u0275fac = function Scroller_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Scroller)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Scroller,
    selectors: [["p-scroller"]],
    contentQueries: function Scroller_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Scroller_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
        \u0275\u0275viewQuery(_c15, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elementViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-scroller-viewport", "p-element"],
    inputs: {
      id: "id",
      style: "style",
      styleClass: "styleClass",
      tabindex: "tabindex",
      items: "items",
      itemSize: "itemSize",
      scrollHeight: "scrollHeight",
      scrollWidth: "scrollWidth",
      orientation: "orientation",
      step: "step",
      delay: "delay",
      resizeDelay: "resizeDelay",
      appendOnly: "appendOnly",
      inline: "inline",
      lazy: "lazy",
      disabled: "disabled",
      loaderDisabled: "loaderDisabled",
      columns: "columns",
      showSpacer: "showSpacer",
      showLoader: "showLoader",
      numToleratedItems: "numToleratedItems",
      loading: "loading",
      autoSize: "autoSize",
      trackBy: "trackBy",
      options: "options"
    },
    outputs: {
      onLazyLoad: "onLazyLoad",
      onScroll: "onScroll",
      onScrollIndexChange: "onScrollIndexChange"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c24,
    decls: 3,
    vars: 2,
    consts: [["disabledContainer", ""], ["element", ""], ["buildInContent", ""], ["content", ""], ["buildInLoader", ""], ["buildInLoaderIcon", ""], [4, "ngIf", "ngIfElse"], [3, "scroll", "ngStyle", "ngClass"], ["class", "p-scroller-spacer", 3, "ngStyle", 4, "ngIf"], ["class", "p-scroller-loader", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-scroller-content", 3, "ngClass", "ngStyle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-scroller-spacer", 3, "ngStyle"], [1, "p-scroller-loader", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "styleClass"], [4, "ngIf"]],
    template: function Scroller_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, Scroller_ng_container_0_Template, 8, 16, "ng-container", 6)(1, Scroller_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const disabledContainer_r9 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx._disabled)("ngIfElse", disabledContainer_r9);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, SpinnerIcon],
    styles: ["@layer primeng{p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scroller, [{
    type: Component,
    args: [{
      selector: "p-scroller",
      template: `
        <ng-container *ngIf="!_disabled; else disabledContainer">
            <div
                #element
                [attr.id]="_id"
                [attr.tabindex]="tabindex"
                [ngStyle]="_style"
                [class]="_styleClass"
                [ngClass]="{ 'p-scroller': true, 'p-scroller-inline': inline, 'p-both-scroll': both, 'p-horizontal-scroll': horizontal }"
                (scroll)="onContainerScroll($event)"
                [attr.data-pc-name]="'scroller'"
                [attr.data-pc-section]="'root'"
            >
                <ng-container *ngIf="contentTemplate; else buildInContent">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: loadedItems, options: getContentOptions() }"></ng-container>
                </ng-container>
                <ng-template #buildInContent>
                    <div #content class="p-scroller-content" [ngClass]="{ 'p-scroller-loading': d_loading }" [ngStyle]="contentStyle" [attr.data-pc-section]="'content'">
                        <ng-container *ngFor="let item of loadedItems; let index = index; trackBy: _trackBy || index">
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, options: getOptions(index) }"></ng-container>
                        </ng-container>
                    </div>
                </ng-template>
                <div *ngIf="_showSpacer" class="p-scroller-spacer" [ngStyle]="spacerStyle" [attr.data-pc-section]="'spacer'"></div>
                <div *ngIf="!loaderDisabled && _showLoader && d_loading" class="p-scroller-loader" [ngClass]="{ 'p-component-overlay': !loaderTemplate }" [attr.data-pc-section]="'loader'">
                    <ng-container *ngIf="loaderTemplate; else buildInLoader">
                        <ng-container *ngFor="let item of loaderArr; let index = index">
                            <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: getLoaderOptions(index, both && { numCols: _numItemsInViewport.cols }) }"></ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-template #buildInLoader>
                        <ng-container *ngIf="loaderIconTemplate; else buildInLoaderIcon">
                            <ng-container *ngTemplateOutlet="loaderIconTemplate; context: { options: { styleClass: 'p-scroller-loading-icon' } }"></ng-container>
                        </ng-container>
                        <ng-template #buildInLoaderIcon>
                            <SpinnerIcon [styleClass]="'p-scroller-loading-icon pi-spin'" [attr.data-pc-section]="'loadingIcon'" />
                        </ng-template>
                    </ng-template>
                </div>
            </div>
        </ng-container>
        <ng-template #disabledContainer>
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate">
                <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: items, options: { rows: _items, columns: loadedColumns } }"></ng-container>
            </ng-container>
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-scroller-viewport p-element"
      },
      styles: ["@layer primeng{p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}}\n"]
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
    type: NgZone
  }], {
    id: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    scrollWidth: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    resizeDelay: [{
      type: Input
    }],
    appendOnly: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    lazy: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    loaderDisabled: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    showSpacer: [{
      type: Input
    }],
    showLoader: [{
      type: Input
    }],
    numToleratedItems: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    autoSize: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onLazyLoad: [{
      type: Output
    }],
    onScroll: [{
      type: Output
    }],
    onScrollIndexChange: [{
      type: Output
    }],
    elementViewChild: [{
      type: ViewChild,
      args: ["element"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ScrollerModule = class _ScrollerModule {
  static \u0275fac = function ScrollerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule, SpinnerIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, SpinnerIcon],
      exports: [Scroller, SharedModule],
      declarations: [Scroller]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-check.mjs
var CheckIcon = class _CheckIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckIcon_BaseFactory;
    return function CheckIcon_Factory(__ngFactoryType__) {
      return (\u0275CheckIcon_BaseFactory || (\u0275CheckIcon_BaseFactory = \u0275\u0275getInheritedFactory(_CheckIcon)))(__ngFactoryType__ || _CheckIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CheckIcon,
    selectors: [["CheckIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z", "fill", "currentColor"]],
    template: function CheckIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckIcon, [{
    type: Component,
    args: [{
      selector: "CheckIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-blank.mjs
var BlankIcon = class _BlankIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BlankIcon_BaseFactory;
    return function BlankIcon_Factory(__ngFactoryType__) {
      return (\u0275BlankIcon_BaseFactory || (\u0275BlankIcon_BaseFactory = \u0275\u0275getInheritedFactory(_BlankIcon)))(__ngFactoryType__ || _BlankIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BlankIcon,
    selectors: [["BlankIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "v-bind", "pti()"], ["width", "1", "height", "1", "fill", "currentColor", "fill-opacity", "0"]],
    template: function BlankIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "rect", 1);
        \u0275\u0275elementEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlankIcon, [{
    type: Component,
    args: [{
      selector: "BlankIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="pti()">
            <rect width="1" height="1" fill="currentColor" fill-opacity="0" />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs
var ChevronDownIcon = class _ChevronDownIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronDownIcon_BaseFactory;
    return function ChevronDownIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronDownIcon_BaseFactory || (\u0275ChevronDownIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronDownIcon)))(__ngFactoryType__ || _ChevronDownIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronDownIcon,
    selectors: [["ChevronDownIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z", "fill", "currentColor"]],
    template: function ChevronDownIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronDownIcon, [{
    type: Component,
    args: [{
      selector: "ChevronDownIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-search.mjs
var SearchIcon = class _SearchIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SearchIcon_BaseFactory;
    return function SearchIcon_Factory(__ngFactoryType__) {
      return (\u0275SearchIcon_BaseFactory || (\u0275SearchIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SearchIcon)))(__ngFactoryType__ || _SearchIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SearchIcon,
    selectors: [["SearchIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchIcon, [{
    type: Component,
    args: [{
      selector: "SearchIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z"
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

// node_modules/primeng/fesm2022/primeng-dropdown.mjs
var _c06 = (a0) => ({
  height: a0
});
var _c16 = (a0, a1, a2) => ({
  "p-dropdown-item": true,
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c25 = (a0) => ({
  $implicit: a0
});
function DropdownItem_ng_container_1_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-dropdown-check-icon");
  }
}
function DropdownItem_ng_container_1_BlankIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "BlankIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-dropdown-blank-icon");
  }
}
function DropdownItem_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DropdownItem_ng_container_1_CheckIcon_1_Template, 1, 1, "CheckIcon", 3)(2, DropdownItem_ng_container_1_BlankIcon_2_Template, 1, 1, "BlankIcon", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selected);
  }
}
function DropdownItem_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.label) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "empty");
  }
}
function DropdownItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var _c35 = ["container"];
var _c45 = ["filter"];
var _c55 = ["focusInput"];
var _c65 = ["editableInput"];
var _c75 = ["items"];
var _c84 = ["scroller"];
var _c94 = ["overlay"];
var _c104 = ["firstHiddenFocusableEl"];
var _c112 = ["lastHiddenFocusableEl"];
var _c122 = (a0) => ({
  "max-height": a0
});
var _c132 = (a0) => ({
  options: a0
});
var _c142 = (a0) => ({
  "p-variant-filled": a0
});
var _c152 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c162 = () => ({});
function Dropdown_span_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Dropdown_span_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 25);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c25, ctx_r2.selectedOption));
  }
}
function Dropdown_span_2_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Dropdown_span_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_span_2_ng_template_4_span_0_Template, 2, 1, "span", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.isSelectedOptionEmpty());
  }
}
function Dropdown_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 23, 3);
    \u0275\u0275listener("focus", function Dropdown_span_2_Template_span_focus_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_span_2_Template_span_blur_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("keydown", function Dropdown_span_2_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275template(2, Dropdown_span_2_ng_container_2_Template, 2, 1, "ng-container", 20)(3, Dropdown_span_2_ng_container_3_Template, 1, 4, "ng-container", 24)(4, Dropdown_span_2_ng_template_4_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const defaultPlaceholder_r4 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.inputClass)("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass)("autofocus", ctx_r2.autofocus);
    \u0275\u0275attribute("aria-disabled", ctx_r2.disabled)("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_17_0 = ctx_r2.overlayVisible) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0)("aria-required", ctx_r2.required)("required", ctx_r2.required);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.selectedItemTemplate)("ngIfElse", defaultPlaceholder_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedItemTemplate && !ctx_r2.isSelectedOptionEmpty());
  }
}
function Dropdown_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 26, 5);
    \u0275\u0275listener("input", function Dropdown_input_3_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditableInput($event));
    })("keydown", function Dropdown_input_3_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    })("focus", function Dropdown_input_3_Template_input_focus_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_input_3_Template_input_blur_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.inputClass)("disabled", ctx_r2.disabled)("autofocus", ctx_r2.autofocus);
    \u0275\u0275attribute("id", ctx_r2.inputId)("maxlength", ctx_r2.maxlength)("placeholder", ctx_r2.modelValue() === void 0 || ctx_r2.modelValue() === null ? ctx_r2.placeholder() : void 0)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0);
  }
}
function Dropdown_ng_container_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 29);
    \u0275\u0275listener("click", function Dropdown_ng_container_4_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-dropdown-clear-icon");
    \u0275\u0275attribute("data-pc-section", "clearicon");
  }
}
function Dropdown_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275listener("click", function Dropdown_ng_container_4_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear($event));
    });
    \u0275\u0275template(1, Dropdown_ng_container_4_span_2_1_Template, 1, 0, null, 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "clearicon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_4_TimesIcon_1_Template, 1, 2, "TimesIcon", 27)(2, Dropdown_ng_container_4_span_2_Template, 2, 2, "span", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_6_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loadingIconTemplate);
  }
}
function Dropdown_ng_container_6_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", "p-dropdown-trigger-icon pi-spin " + ctx_r2.loadingIcon);
  }
}
function Dropdown_ng_container_6_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
  }
  if (rf & 2) {
    \u0275\u0275classMap("p-dropdown-trigger-icon pi pi-spinner pi-spin");
  }
}
function Dropdown_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_6_ng_container_2_span_1_Template, 1, 1, "span", 32)(2, Dropdown_ng_container_6_ng_container_2_span_2_Template, 1, 2, "span", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingIcon);
  }
}
function Dropdown_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 18)(2, Dropdown_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingIconTemplate);
  }
}
function Dropdown_ng_template_7_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 39);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_template_7_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon", 40);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-dropdown-trigger-icon");
  }
}
function Dropdown_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_7_ng_container_0_span_1_Template, 1, 1, "span", 37)(2, Dropdown_ng_template_7_ng_container_0_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_template_7_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_template_7_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_7_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275template(1, Dropdown_ng_template_7_span_1_1_Template, 1, 0, null, 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 18)(1, Dropdown_ng_template_7_span_1_Template, 2, 1, "span", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_11_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_11_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_11_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c132, ctx_r2.filterOptions));
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SearchIcon", 40);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-dropdown-filter-icon");
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275template(1, Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_Template, 1, 0, null, 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "input", 50, 10);
    \u0275\u0275listener("input", function Dropdown_ng_template_11_div_4_ng_template_2_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterInputChange($event));
    })("keydown", function Dropdown_ng_template_11_div_4_ng_template_2_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterKeyDown($event));
    })("blur", function Dropdown_ng_template_11_div_4_ng_template_2_Template_input_blur_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Dropdown_ng_template_11_div_4_ng_template_2_SearchIcon_3_Template, 1, 1, "SearchIcon", 38)(4, Dropdown_ng_template_11_div_4_ng_template_2_span_4_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2._filterValue() || "")("ngClass", \u0275\u0275pureFunction1(8, _c142, ctx_r2.variant === "filled" || ctx_r2.config.inputStyle() === "filled"));
    \u0275\u0275attribute("placeholder", ctx_r2.filterPlaceholder)("aria-owns", ctx_r2.id + "_list")("aria-label", ctx_r2.ariaFilterLabel)("aria-activedescendant", ctx_r2.focusedOptionId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function Dropdown_ng_template_11_div_4_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, Dropdown_ng_template_11_div_4_ng_container_1_Template, 2, 4, "ng-container", 20)(2, Dropdown_ng_template_11_div_4_ng_template_2_Template, 5, 10, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r11 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterTemplate)("ngIfElse", builtInFilterElement_r11);
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_11_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 48);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r15 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c152, items_r13, scrollerOptions_r14));
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 48);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c132, scrollerOptions_r16));
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 54);
    \u0275\u0275elementContainerEnd();
  }
}
function Dropdown_ng_template_11_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 53, 11);
    \u0275\u0275listener("onLazyLoad", function Dropdown_ng_template_11_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, Dropdown_ng_template_11_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", 22)(3, Dropdown_ng_template_11_p_scroller_6_ng_container_3_Template, 2, 0, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(8, _c06, ctx_r2.scrollHeight));
    \u0275\u0275property("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.loaderTemplate);
  }
}
function Dropdown_ng_template_11_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_11_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_11_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r15 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c152, ctx_r2.visibleOptions(), \u0275\u0275pureFunction0(2, _c162)));
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 58);
    \u0275\u0275template(2, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 18)(3, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c06, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.groupTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c25, option_r17.optionGroup));
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p-dropdownItem", 59);
    \u0275\u0275listener("onClick", function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const option_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onOptionSelect($event, option_r17));
    })("onMouseEnter", function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onMouseEnter_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const i_r19 = \u0275\u0275nextContext().index;
      const scrollerOptions_r20 = \u0275\u0275nextContext().options;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("option", option_r17)("checkmark", ctx_r2.checkmark)("selected", ctx_r2.isSelected(option_r17))("label", ctx_r2.getOptionLabel(option_r17))("disabled", ctx_r2.isOptionDisabled(option_r17))("template", ctx_r2.itemTemplate)("focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("ariaPosInset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)))("ariaSetSize", ctx_r2.ariaSetSize);
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 18)(1, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template, 2, 10, "ng-container", 18);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.isOptionGroup(option_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function Dropdown_ng_template_11_ng_template_8_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.emptyFilterMessageLabel, " ");
  }
}
function Dropdown_ng_template_11_ng_template_8_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 13);
  }
}
function Dropdown_ng_template_11_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 60);
    \u0275\u0275template(1, Dropdown_ng_template_11_ng_template_8_li_3_ng_container_1_Template, 2, 1, "ng-container", 20)(2, Dropdown_ng_template_11_ng_template_8_li_3_ng_container_2_Template, 2, 0, "ng-container", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c06, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.emptyFilterTemplate && !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.emptyFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.emptyFilterTemplate || ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_11_ng_template_8_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.emptyMessageLabel, " ");
  }
}
function Dropdown_ng_template_11_ng_template_8_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 14);
  }
}
function Dropdown_ng_template_11_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 60);
    \u0275\u0275template(1, Dropdown_ng_template_11_ng_template_8_li_4_ng_container_1_Template, 2, 1, "ng-container", 20)(2, Dropdown_ng_template_11_ng_template_8_li_4_ng_container_2_Template, 2, 0, "ng-container", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c06, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.empty);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_11_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 55, 12);
    \u0275\u0275template(2, Dropdown_ng_template_11_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 56)(3, Dropdown_ng_template_11_ng_template_8_li_3_Template, 3, 6, "li", 57)(4, Dropdown_ng_template_11_ng_template_8_li_4_Template, 3, 6, "li", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", scrollerOptions_r20.contentStyleClass)("ngStyle", scrollerOptions_r20.contentStyle);
    \u0275\u0275attribute("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r22);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterValue && ctx_r2.isEmpty());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.filterValue && ctx_r2.isEmpty());
  }
}
function Dropdown_ng_template_11_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43, 6);
    \u0275\u0275listener("focus", function Dropdown_ng_template_11_Template_span_focus_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFirstHiddenFocus($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Dropdown_ng_template_11_ng_container_3_Template, 1, 0, "ng-container", 31)(4, Dropdown_ng_template_11_div_4_Template, 4, 2, "div", 44);
    \u0275\u0275elementStart(5, "div", 45);
    \u0275\u0275template(6, Dropdown_ng_template_11_p_scroller_6_Template, 4, 10, "p-scroller", 46)(7, Dropdown_ng_template_11_ng_container_7_Template, 2, 6, "ng-container", 18)(8, Dropdown_ng_template_11_ng_template_8_Template, 5, 7, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, Dropdown_ng_template_11_ng_container_10_Template, 1, 0, "ng-container", 31);
    \u0275\u0275elementStart(11, "span", 43, 8);
    \u0275\u0275listener("focus", function Dropdown_ng_template_11_Template_span_focus_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLastHiddenFocus($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.panelStyleClass);
    \u0275\u0275property("ngClass", "p-dropdown-panel p-component")("ngStyle", ctx_r2.panelStyle);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filter);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(16, _c122, ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight || "auto"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.footerTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var DROPDOWN_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Dropdown),
  multi: true
};
var DropdownItem = class _DropdownItem {
  id;
  option;
  selected;
  focused;
  label;
  disabled;
  visible;
  itemSize;
  ariaPosInset;
  ariaSetSize;
  template;
  checkmark;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  ngOnInit() {
  }
  onOptionClick(event) {
    this.onClick.emit(event);
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit(event);
  }
  static \u0275fac = function DropdownItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DropdownItem,
    selectors: [["p-dropdownItem"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      option: "option",
      selected: [2, "selected", "selected", booleanAttribute],
      focused: [2, "focused", "focused", booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      visible: [2, "visible", "visible", booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template",
      checkmark: [2, "checkmark", "checkmark", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    features: [\u0275\u0275InputTransformsFeature],
    decls: 4,
    vars: 22,
    consts: [["role", "option", "pRipple", "", 3, "click", "mouseenter", "id", "ngStyle", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"]],
    template: function DropdownItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "li", 0);
        \u0275\u0275listener("click", function DropdownItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function DropdownItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        \u0275\u0275template(1, DropdownItem_ng_container_1_Template, 3, 2, "ng-container", 1)(2, DropdownItem_span_2_Template, 2, 1, "span", 1)(3, DropdownItem_ng_container_3_Template, 1, 0, "ng-container", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("id", ctx.id)("ngStyle", \u0275\u0275pureFunction1(14, _c06, ctx.itemSize + "px"))("ngClass", \u0275\u0275pureFunction3(16, _c16, ctx.selected, ctx.disabled, ctx.focused));
        \u0275\u0275attribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.checkmark);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.template);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(20, _c25, ctx.option));
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, BlankIcon, CheckIcon],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItem, [{
    type: Component,
    args: [{
      selector: "p-dropdownItem",
      template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{ 'p-dropdown-item': true, 'p-highlight': selected, 'p-disabled': disabled, 'p-focus': focused }"
        >
            <ng-container *ngIf="checkmark">
                <CheckIcon *ngIf="selected" [styleClass]="'p-dropdown-check-icon'" />
                <BlankIcon *ngIf="!selected" [styleClass]="'p-dropdown-blank-icon'" />
            </ng-container>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      host: {
        class: "p-element"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focused: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
var Dropdown = class _Dropdown {
  el;
  renderer;
  cd;
  zone;
  filterService;
  config;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * When present, custom value instead of predefined options can be entered using the editable input field.
   * @group Props
   */
  editable;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Default text to display when no option is selected.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Whether the selected option will be shown with a check mark.
   * @group Props
   */
  checkmark = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Whether the dropdown is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to display the first item as the label if no placeholder is defined and value is null.
   * @deprecated since v17.3.0, set initial value by model instead.
   * @group Props
   */
  autoDisplayFirst = true;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Maximum number of character allows in the editable input field.
   * @group Props
   */
  maxlength;
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = false;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = true;
  /**
   * Determines if the panel will be shown when the input is focused and receives a character key down event.
   * @group Props
   */
  autoShowPanelOnPrintableCharacterKeyDown = true;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(_disabled) {
    if (_disabled) {
      this.focused = false;
      if (this.overlayVisible) this.hide();
    }
    this._disabled = _disabled;
    if (!this.cd.destroyed) {
      this.cd.detectChanges();
    }
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  _itemSize;
  /**
   * Whether to automatically manage layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.warn("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _autoZIndex;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.warn("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _baseZIndex;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.warn("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _showTransitionOptions;
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.warn("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _hideTransitionOptions;
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    setTimeout(() => {
      this._filterValue.set(val);
    });
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!ObjectUtils.deepEquals(val, this._options())) {
      this._options.set(val);
    }
  }
  /**
   * Callback to invoke when value of dropdown changes.
   * @param {DropdownChangeEvent} event - custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {DropdownFilterEvent} event - custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when dropdown gets focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when dropdown loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when dropdown clears the value.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {DropdownLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  containerViewChild;
  filterViewChild;
  focusInputViewChild;
  editableInputViewChild;
  itemsViewChild;
  scroller;
  overlayViewChild;
  firstHiddenFocusableElementOnOverlay;
  lastHiddenFocusableElementOnOverlay;
  templates;
  _disabled;
  itemsWrapper;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  selectedItemTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  dropdownIconTemplate;
  loadingIconTemplate;
  clearIconTemplate;
  filterIconTemplate;
  filterOptions;
  _options = signal(null);
  _placeholder = signal(void 0);
  modelValue = signal(null);
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  hover;
  focused;
  overlayVisible;
  optionsChanged;
  panel;
  dimensionsUpdated;
  hoveredItem;
  selectedOptionUpdated;
  _filterValue = signal(null);
  searchValue;
  searchIndex;
  searchTimeout;
  previousSearchChar;
  currentSearchChar;
  preventModelTouched;
  focusedOptionIndex = signal(-1);
  labelId;
  listId;
  clicked = signal(false);
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.disabled;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get containerClass() {
    return {
      "p-dropdown p-component p-inputwrapper": true,
      "p-disabled": this.disabled,
      "p-dropdown-clearable": this.showClear && !this.disabled,
      "p-focus": this.focused,
      "p-inputwrapper-filled": this.modelValue() !== void 0 && this.modelValue() !== null && !this.modelValue().length,
      "p-inputwrapper-focus": this.focused || this.overlayVisible,
      "p-variant-filled": this.variant === "filled" || this.config.inputStyle() === "filled",
      "p-dropdown-open": this.overlayVisible
    };
  }
  get inputClass() {
    const label = this.label();
    return {
      "p-dropdown-label p-inputtext": true,
      "p-placeholder": this.placeholder() && label === this.placeholder(),
      "p-dropdown-label-empty": !this.editable && !this.selectedItemTemplate && (label === void 0 || label === null || label === "p-emptylabel" || label.length === 0)
    };
  }
  get panelClass() {
    return {
      "p-dropdown-panel p-component": true,
      "p-input-filled": this.config.inputStyle() === "filled",
      "p-ripple-disabled": this.config.ripple === false
    };
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    if (this._filterValue()) {
      const _filterBy = this.filterBy || this.optionLabel;
      const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue ? this.options.filter((option) => {
        if (option.label) {
          return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
        }
        return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
      }) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push(__spreadProps(__spreadValues({}, group), {
            [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
          }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const selectedOptionIndex = options.findIndex((option) => this.isOptionValueEqualsModelValue(option));
    return selectedOptionIndex !== -1 ? this.getOptionLabel(options[selectedOptionIndex]) : this.placeholder() || "p-emptylabel";
  });
  filled = computed(() => {
    if (typeof this.modelValue() === "string") return !!this.modelValue();
    const options = this.getAllVisibleAndNonVisibleOptions();
    const isOptionSelected = options.findIndex((option) => this.isOptionValueEqualsModelValue(option)) !== -1;
    return this.label() !== "p-emptylabel" && isOptionSelected;
  });
  selectedOption;
  editableInputValue = computed(() => this.getOptionLabel(this.selectedOption) || this.modelValue() || "");
  constructor(el, renderer, cd, zone, filterService, config) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.filterService = filterService;
    this.config = config;
    effect(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && ObjectUtils.isNotEmpty(visibleOptions)) {
        const selectedOptionIndex = this.findSelectedOptionIndex();
        if (selectedOptionIndex !== -1 || modelValue === void 0 || typeof modelValue === "string" && modelValue.length === 0 || this.isModelValueNotSet() || this.editable) {
          this.selectedOption = visibleOptions[selectedOptionIndex];
        }
      }
      if (ObjectUtils.isEmpty(visibleOptions) && (modelValue === void 0 || this.isModelValueNotSet()) && ObjectUtils.isNotEmpty(this.selectedOption)) {
        this.selectedOption = null;
      }
      if (modelValue !== void 0 && this.editable) {
        this.updateEditableLabel();
      }
      this.cd.markForCheck();
    });
  }
  isModelValueNotSet() {
    return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterViewChecked() {
    if (this.optionsChanged && this.overlayVisible) {
      this.optionsChanged = false;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
      });
    }
    if (this.selectedOptionUpdated && this.itemsWrapper) {
      let selectedItem = DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, "li.p-highlight");
      if (selectedItem) {
        DomHandler.scrollInView(this.itemsWrapper, selectedItem);
      }
      this.selectedOptionUpdated = false;
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "selectedItem":
          this.selectedItemTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "emptyfilter":
          this.emptyFilterTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        case "group":
          this.groupTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
    if (this.autoDisplayFirst && (this.modelValue() === null || this.modelValue() === void 0)) {
      if (!this.placeholder()) {
        const ind = this.findFirstOptionIndex();
        this.onOptionSelect(null, this.visibleOptions()[ind], false, true);
      }
    }
  }
  onOptionSelect(event, option, isHide = true, preventChange = false) {
    if (!this.isSelected(option)) {
      const value = this.getOptionValue(option);
      this.updateModel(value, event);
      this.focusedOptionIndex.set(this.findSelectedOptionIndex());
      preventChange === false && this.onChange.emit({
        originalEvent: event,
        value
      });
    }
    if (isHide) {
      this.hide(true);
    }
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
    this.selectedOptionUpdated = true;
  }
  writeValue(value, emitEvent = true) {
    if (this.filter) {
      this.resetFilter();
    }
    this.value = value;
    if (emitEvent && this.allowModelChange()) {
      this.onModelChange(value);
    }
    this.modelValue.set(this.value);
    this.updateEditableLabel();
    this.cd.markForCheck();
  }
  allowModelChange() {
    return this.autoDisplayFirst && !this.placeholder() && (this.modelValue() === void 0 || this.modelValue() === null) && !this.editable && this.options && this.options.length;
  }
  isSelectedOptionEmpty() {
    return ObjectUtils.isEmpty(this.selectedOption);
  }
  isSelected(option) {
    return this.isValidOption(option) && this.isOptionValueEqualsModelValue(option);
  }
  isOptionValueEqualsModelValue(option) {
    return ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  ngAfterViewInit() {
    if (this.editable) {
      this.updateEditableLabel();
    }
    this.updatePlaceHolderForFloatingLabel();
  }
  updatePlaceHolderForFloatingLabel() {
    if (this._placeholder() !== null && this._placeholder() !== void 0) {
      return;
    }
    const parentElement = this.el.nativeElement.parentElement;
    const isInFloatingLabel = parentElement?.classList.contains("p-float-label");
    if (parentElement && isInFloatingLabel && !this.selectedOption) {
      const label = parentElement.querySelector("label");
      if (label) {
        this._placeholder.set(label.textContent);
      }
    }
  }
  updateEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || "";
    }
  }
  clearEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = "";
    }
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionLabel(option) {
    return this.optionLabel !== void 0 && this.optionLabel !== null ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label !== void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue && this.optionValue !== null ? ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  isOptionDisabled(option) {
    if (this.getOptionValue(this.modelValue()) === this.getOptionValue(option) || this.getOptionLabel(this.modelValue() === this.getOptionLabel(option)) && option.disabled === false) {
      return false;
    } else {
      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
    }
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren !== void 0 && this.optionGroupChildren !== null ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this._filterValue.set(null);
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
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
  onContainerClick(event) {
    if (this.disabled || this.readonly || this.loading) {
      return;
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
      return;
    } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.onClick.emit(event);
    this.clicked.set(true);
    this.cd.detectChanges();
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  onEditableInput(event) {
    const value = event.target.value;
    this.searchValue = "";
    const matched = this.searchOptions(event, value);
    !matched && this.focusedOptionIndex.set(-1);
    this.onModelChange(value);
    this.updateModel(value, event);
    setTimeout(() => {
      this.onChange.emit({
        originalEvent: event,
        value
      });
    }, 1);
    !this.overlayVisible && ObjectUtils.isNotEmpty(value) && this.show();
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      DomHandler.focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-dropdown-items-wrapper");
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = DomHandler.findSingle(this.itemsWrapper, ".p-dropdown-item.p-highlight");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      }
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter && !this.editable) {
          this.filterViewChild.nativeElement.focus();
        }
      }
      this.onShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onHide.emit(event);
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    this.clicked.set(false);
    this.searchValue = "";
    if (this.overlayOptions?.mode === "modal") {
      DomHandler.unblockBodyScroll();
    }
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (isFocus) {
      if (this.focusInputViewChild) {
        setTimeout(() => {
          DomHandler.focus(this.focusInputViewChild?.nativeElement);
        });
      }
      if (this.editable && this.editableInputViewChild) {
        setTimeout(() => {
          DomHandler.focus(this.editableInputViewChild?.nativeElement);
        });
      }
    }
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    if (this.disabled) {
      return;
    }
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onMouseDown(event) {
    event.preventDefault();
  }
  onKeyDown(event, search) {
    if (this.disabled || this.readonly || this.loading) {
      return;
    }
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, this.editable);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, this.editable);
        break;
      case "Delete":
        this.onDeleteKey(event);
        break;
      case "Home":
        this.onHomeKey(event, this.editable);
        break;
      case "End":
        this.onEndKey(event, this.editable);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Space":
        this.onSpaceKey(event, search);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Backspace":
        this.onBackspaceKey(event, this.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!event.metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.autoShowPanelOnPrintableCharacterKeyDown && this.show();
          !this.editable && this.searchOptions(event, event.key);
        }
        break;
    }
    this.clicked.set(false);
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event, true);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      this.show();
      this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
    event.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        const option = this.visibleOptions()[index];
        this.onOptionSelect(event, option, false);
      }
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  hasSelectedOption() {
    return this.modelValue() !== void 0;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastOptionIndex() {
    return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  isValidOption(option) {
    return option !== void 0 && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionGroup(option) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null && option.optionGroup !== void 0 && option.optionGroup !== null && option.group;
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      this.overlayVisible && this.hide();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onHomeKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        target.setSelectionRange(0, 0);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onSpaceKey(event, pressedInInputText = false) {
    !this.editable && !pressedInInputText && this.onEnterKey(event);
  }
  onEnterKey(event, pressedInInput = false) {
    if (!this.overlayVisible) {
      this.focusedOptionIndex.set(-1);
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      !pressedInInput && this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
    event.stopPropagation();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? DomHandler.getFirstFocusableElement(this.overlayViewChild.el?.nativeElement, ":not(.p-hidden-focusable)") : this.focusInputViewChild?.nativeElement;
    DomHandler.focus(focusableEl);
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    DomHandler.focus(focusableEl);
  }
  hasFocusableElements() {
    return DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"]):not([class="p-dropdown-items-wrapper"])').length > 0;
  }
  onBackspaceKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      !this.overlayVisible && this.show();
    }
  }
  searchFields() {
    return this.filterBy?.split(",") || this.filterFields || [this.optionLabel];
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
    this.cd.markForCheck();
  }
  applyFocus() {
    if (this.editable) DomHandler.findSingle(this.el.nativeElement, ".p-dropdown-label.p-inputtext").focus();
    else DomHandler.focus(this.focusInputViewChild?.nativeElement);
  }
  /**
   * Applies focus.
   * @group Method
   */
  focus() {
    this.applyFocus();
  }
  /**
   * Clears the model.
   * @group Method
   */
  clear(event) {
    this.updateModel(null, event);
    this.clearEditableLabel();
    this.onModelTouched();
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onClear.emit(event);
    this.resetFilter();
  }
  static \u0275fac = function Dropdown_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dropdown)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FilterService), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Dropdown,
    selectors: [["p-dropdown"]],
    contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dropdown_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c35, 5);
        \u0275\u0275viewQuery(_c45, 5);
        \u0275\u0275viewQuery(_c55, 5);
        \u0275\u0275viewQuery(_c65, 5);
        \u0275\u0275viewQuery(_c75, 5);
        \u0275\u0275viewQuery(_c84, 5);
        \u0275\u0275viewQuery(_c94, 5);
        \u0275\u0275viewQuery(_c104, 5);
        \u0275\u0275viewQuery(_c112, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.focusInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editableInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 4,
    hostBindings: function Dropdown_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-inputwrapper-filled", ctx.filled())("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
      }
    },
    inputs: {
      id: "id",
      scrollHeight: "scrollHeight",
      filter: [2, "filter", "filter", booleanAttribute],
      name: "name",
      style: "style",
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      editable: [2, "editable", "editable", booleanAttribute],
      appendTo: "appendTo",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      placeholder: "placeholder",
      loadingIcon: "loadingIcon",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      variant: "variant",
      inputId: "inputId",
      dataKey: "dataKey",
      filterBy: "filterBy",
      filterFields: "filterFields",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      checkmark: [2, "checkmark", "checkmark", booleanAttribute],
      dropdownIcon: "dropdownIcon",
      loading: [2, "loading", "loading", booleanAttribute],
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      autoDisplayFirst: [2, "autoDisplayFirst", "autoDisplayFirst", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      showClear: [2, "showClear", "showClear", booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      filterMatchMode: "filterMatchMode",
      maxlength: [2, "maxlength", "maxlength", numberAttribute],
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", booleanAttribute],
      autoShowPanelOnPrintableCharacterKeyDown: [2, "autoShowPanelOnPrintableCharacterKeyDown", "autoShowPanelOnPrintableCharacterKeyDown", booleanAttribute],
      disabled: "disabled",
      itemSize: "itemSize",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      filterValue: "filterValue",
      options: "options"
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide",
      onClear: "onClear",
      onLazyLoad: "onLazyLoad"
    },
    features: [\u0275\u0275ProvidersFeature([DROPDOWN_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    decls: 12,
    vars: 20,
    consts: [["container", ""], ["elseBlock", ""], ["overlay", ""], ["focusInput", ""], ["defaultPlaceholder", ""], ["editableInput", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["filter", ""], ["scroller", ""], ["items", ""], ["emptyFilter", ""], ["empty", ""], [3, "click", "ngClass", "ngStyle"], ["role", "combobox", "pAutoFocus", "", 3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", "aria-haspopup", "listbox", "pAutoFocus", "", 3, "ngClass", "disabled", "autofocus", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-dropdown-trigger", 3, "mousedown"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["pTemplate", "content"], ["role", "combobox", "pAutoFocus", "", 3, "focus", "blur", "keydown", "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "aria-haspopup", "listbox", "pAutoFocus", "", 3, "input", "keydown", "focus", "blur", "ngClass", "disabled", "autofocus"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-dropdown-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-dropdown-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["aria-hidden", "true"], ["class", "p-dropdown-trigger-icon", 4, "ngIf"], ["class", "p-dropdown-trigger-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-dropdown-trigger-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-dropdown-header", 3, "click", 4, "ngIf"], ["tabindex", "0", 1, "p-dropdown-items-wrapper", 3, "ngStyle"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [1, "p-dropdown-header", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-dropdown-filter-container"], ["type", "text", "role", "searchbox", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "input", "keydown", "blur", "value", "ngClass"], ["class", "p-dropdown-filter-icon", 4, "ngIf"], [1, "p-dropdown-filter-icon"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass", "ngStyle"], ["ngFor", "", 3, "ngForOf"], ["class", "p-dropdown-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-dropdown-item-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "checkmark", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize"], ["role", "option", 1, "p-dropdown-empty-message", 3, "ngStyle"]],
    template: function Dropdown_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 15, 0);
        \u0275\u0275listener("click", function Dropdown_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onContainerClick($event));
        });
        \u0275\u0275template(2, Dropdown_span_2_Template, 6, 20, "span", 16)(3, Dropdown_input_3_Template, 2, 8, "input", 17)(4, Dropdown_ng_container_4_Template, 3, 2, "ng-container", 18);
        \u0275\u0275elementStart(5, "div", 19);
        \u0275\u0275listener("mousedown", function Dropdown_Template_div_mousedown_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseDown($event));
        });
        \u0275\u0275template(6, Dropdown_ng_container_6_Template, 3, 2, "ng-container", 20)(7, Dropdown_ng_template_7_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p-overlay", 21, 2);
        \u0275\u0275twoWayListener("visibleChange", function Dropdown_Template_p_overlay_visibleChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onAnimationStart", function Dropdown_Template_p_overlay_onAnimationStart_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function Dropdown_Template_p_overlay_onHide_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.hide());
        });
        \u0275\u0275template(11, Dropdown_ng_template_11_Template, 13, 18, "ng-template", 22);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_10_0;
        const elseBlock_r23 = \u0275\u0275reference(8);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.editable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.editable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isVisibleClearIcon);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-expanded", (tmp_10_0 = ctx.overlayVisible) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : false)("data-pc-section", "trigger");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading)("ngIfElse", elseBlock_r23);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, PrimeTemplate, Tooltip, Scroller, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, DropdownItem],
    styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}.p-float-label .p-dropdown .p-placeholder{opacity:0}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dropdown, [{
    type: Component,
    args: [{
      selector: "p-dropdown",
      template: `
        <div #container [attr.id]="id" [ngClass]="containerClass" (click)="onContainerClick($event)" [ngStyle]="style" [class]="styleClass">
            <span
                #focusInput
                [ngClass]="inputClass"
                *ngIf="!editable"
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
                [attr.aria-disabled]="disabled"
                [attr.id]="inputId"
                role="combobox"
                [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.tabindex]="!disabled ? tabindex : -1"
                pAutoFocus
                [autofocus]="autofocus"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [attr.aria-required]="required"
                [attr.required]="required"
            >
                <ng-container *ngIf="!selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
                <ng-container *ngIf="selectedItemTemplate && !isSelectedOptionEmpty()" [ngTemplateOutlet]="selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
                <ng-template #defaultPlaceholder>
                    <span *ngIf="isSelectedOptionEmpty()">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</span>
                </ng-template>
            </span>
            <input
                *ngIf="editable"
                #editableInput
                type="text"
                [attr.id]="inputId"
                [attr.maxlength]="maxlength"
                [ngClass]="inputClass"
                [disabled]="disabled"
                aria-haspopup="listbox"
                [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
                [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
                (input)="onEditableInput($event)"
                (keydown)="onKeyDown($event)"
                pAutoFocus
                [autofocus]="autofocus"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
            />
            <ng-container *ngIf="isVisibleClearIcon">
                <TimesIcon [styleClass]="'p-dropdown-clear-icon'" (click)="clear($event)" *ngIf="!clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
                <span class="p-dropdown-clear-icon" (click)="clear($event)" *ngIf="clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <div class="p-dropdown-trigger" role="button" aria-label="dropdown trigger" (mousedown)="onMouseDown($event)" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
                <ng-container *ngIf="loading; else elseBlock">
                    <ng-container *ngIf="loadingIconTemplate">
                        <ng-container *ngTemplateOutlet="loadingIconTemplate"></ng-container>
                    </ng-container>
                    <ng-container *ngIf="!loadingIconTemplate">
                        <span *ngIf="loadingIcon" [ngClass]="'p-dropdown-trigger-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                        <span *ngIf="!loadingIcon" [class]="'p-dropdown-trigger-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                    </ng-container>
                </ng-container>

                <ng-template #elseBlock>
                    <ng-container *ngIf="!dropdownIconTemplate">
                        <span class="p-dropdown-trigger-icon" *ngIf="dropdownIcon" [ngClass]="dropdownIcon"></span>
                        <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-dropdown-trigger-icon'" />
                    </ng-container>
                    <span *ngIf="dropdownIconTemplate" class="p-dropdown-trigger-icon">
                        <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                    </span>
                </ng-template>
            </div>

            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [autoZIndex]="autoZIndex"
                [baseZIndex]="baseZIndex"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template pTemplate="content">
                    <div [ngClass]="'p-dropdown-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <span
                            #firstHiddenFocusableEl
                            role="presentation"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onFirstHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        >
                        </span>
                        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                        <div class="p-dropdown-header" *ngIf="filter" (click)="$event.stopPropagation()">
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div class="p-dropdown-filter-container">
                                    <input
                                        #filter
                                        type="text"
                                        role="searchbox"
                                        autocomplete="off"
                                        [value]="_filterValue() || ''"
                                        class="p-dropdown-filter p-inputtext p-component"
                                        [ngClass]="{ 'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled' }"
                                        [attr.placeholder]="filterPlaceholder"
                                        [attr.aria-owns]="id + '_list'"
                                        (input)="onFilterInputChange($event)"
                                        [attr.aria-label]="ariaFilterLabel"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        (keydown)="onFilterKeyDown($event)"
                                        (blur)="onFilterBlur($event)"
                                    />
                                    <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-dropdown-filter-icon'" />
                                    <span *ngIf="filterIconTemplate" class="p-dropdown-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>
                            </ng-template>
                        </div>
                        <div
                            class="p-dropdown-items-wrapper"
                            [ngStyle]="{
                                'max-height': virtualScroll ? 'auto' : scrollHeight || 'auto'
                            }"
                            tabindex="0"
                        >
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate">
                                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                            </ng-container>

                            <ng-template #buildInItems let-items let-scrollerOptions="options">
                                <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" class="p-dropdown-items" [ngClass]="scrollerOptions.contentStyleClass" [ngStyle]="scrollerOptions.contentStyle" role="listbox">
                                    <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                        <ng-container *ngIf="isOptionGroup(option)">
                                            <li class="p-dropdown-item-group" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                            </li>
                                        </ng-container>
                                        <ng-container *ngIf="!isOptionGroup(option)">
                                            <p-dropdownItem
                                                [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                                [option]="option"
                                                [checkmark]="checkmark"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                [template]="itemTemplate"
                                                [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                                [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                                [ariaSetSize]="ariaSetSize"
                                                (onClick)="onOptionSelect($event, option)"
                                                (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            ></p-dropdownItem>
                                        </ng-container>
                                    </ng-template>
                                    <li *ngIf="filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                        <span
                            #lastHiddenFocusableEl
                            role="presentation"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onLastHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        ></span>
                    </div>
                </ng-template>
            </p-overlay>
        </div>
    `,
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled()",
        "[class.p-inputwrapper-focus]": "focused || overlayVisible"
      },
      providers: [DROPDOWN_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}.p-float-label .p-dropdown .p-placeholder{opacity:0}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: FilterService
  }, {
    type: PrimeNGConfig
  }], {
    id: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    name: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    editable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterFields: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    autoDisplayFirst: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocusFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoShowPanelOnPrintableCharacterKeyDown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    editableInputViewChild: [{
      type: ViewChild,
      args: ["editableInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DropdownModule = class _DropdownModule {
  static \u0275fac = function DropdownModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DropdownModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, BlankIcon, CheckIcon, OverlayModule, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, BlankIcon, CheckIcon],
      exports: [Dropdown, OverlayModule, SharedModule, ScrollerModule],
      declarations: [Dropdown, DropdownItem]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angledoubleleft.mjs
var AngleDoubleLeftIcon = class _AngleDoubleLeftIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleDoubleLeftIcon_BaseFactory;
    return function AngleDoubleLeftIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleDoubleLeftIcon_BaseFactory || (\u0275AngleDoubleLeftIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleDoubleLeftIcon)))(__ngFactoryType__ || _AngleDoubleLeftIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleDoubleLeftIcon,
    selectors: [["AngleDoubleLeftIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z", "fill", "currentColor"]],
    template: function AngleDoubleLeftIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDoubleLeftIcon, [{
    type: Component,
    args: [{
      selector: "AngleDoubleLeftIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angledoubleright.mjs
var AngleDoubleRightIcon = class _AngleDoubleRightIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleDoubleRightIcon_BaseFactory;
    return function AngleDoubleRightIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleDoubleRightIcon_BaseFactory || (\u0275AngleDoubleRightIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleDoubleRightIcon)))(__ngFactoryType__ || _AngleDoubleRightIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleDoubleRightIcon,
    selectors: [["AngleDoubleRightIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z", "fill", "currentColor"]],
    template: function AngleDoubleRightIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDoubleRightIcon, [{
    type: Component,
    args: [{
      selector: "AngleDoubleRightIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angleleft.mjs
var AngleLeftIcon = class _AngleLeftIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleLeftIcon_BaseFactory;
    return function AngleLeftIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleLeftIcon_BaseFactory || (\u0275AngleLeftIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleLeftIcon)))(__ngFactoryType__ || _AngleLeftIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleLeftIcon,
    selectors: [["AngleLeftIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z", "fill", "currentColor"]],
    template: function AngleLeftIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleLeftIcon, [{
    type: Component,
    args: [{
      selector: "AngleLeftIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angleright.mjs
var AngleRightIcon = class _AngleRightIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleRightIcon_BaseFactory;
    return function AngleRightIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleRightIcon_BaseFactory || (\u0275AngleRightIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleRightIcon)))(__ngFactoryType__ || _AngleRightIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleRightIcon,
    selectors: [["AngleRightIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z", "fill", "currentColor"]],
    template: function AngleRightIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleRightIcon, [{
    type: Component,
    args: [{
      selector: "AngleRightIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angledown.mjs
var AngleDownIcon = class _AngleDownIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleDownIcon_BaseFactory;
    return function AngleDownIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleDownIcon_BaseFactory || (\u0275AngleDownIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleDownIcon)))(__ngFactoryType__ || _AngleDownIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleDownIcon,
    selectors: [["AngleDownIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z", "fill", "currentColor"]],
    template: function AngleDownIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDownIcon, [{
    type: Component,
    args: [{
      selector: "AngleDownIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angleup.mjs
var AngleUpIcon = class _AngleUpIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleUpIcon_BaseFactory;
    return function AngleUpIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleUpIcon_BaseFactory || (\u0275AngleUpIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleUpIcon)))(__ngFactoryType__ || _AngleUpIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleUpIcon,
    selectors: [["AngleUpIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z", "fill", "currentColor"]],
    template: function AngleUpIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleUpIcon, [{
    type: Component,
    args: [{
      selector: "AngleUpIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputnumber.mjs
var _c07 = ["input"];
var _c17 = (a0, a1, a2) => ({
  "p-inputnumber p-component": true,
  "p-inputnumber-buttons-stacked": a0,
  "p-inputnumber-buttons-horizontal": a1,
  "p-inputnumber-buttons-vertical": a2
});
var _c26 = () => ({
  "p-inputnumber-button p-inputnumber-button-up": true
});
var _c36 = () => ({
  "p-inputnumber-button p-inputnumber-button-down": true
});
function InputNumber_ng_container_3_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 8);
    \u0275\u0275listener("click", function InputNumber_ng_container_3_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngClass", "p-inputnumber-clear-icon");
    \u0275\u0275attribute("data-pc-section", "clearIcon");
  }
}
function InputNumber_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function InputNumber_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275listener("click", function InputNumber_ng_container_3_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275template(1, InputNumber_ng_container_3_span_2_1_Template, 1, 0, null, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "clearIcon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function InputNumber_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_ng_container_3_TimesIcon_1_Template, 1, 2, "TimesIcon", 6)(2, InputNumber_ng_container_3_span_2_Template, 2, 2, "span", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clearIconTemplate);
  }
}
function InputNumber_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.incrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_3_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleUpIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_span_4_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_span_4_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_span_4_ng_container_3_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 3)(2, InputNumber_span_4_ng_container_3_2_Template, 1, 0, null, 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate);
  }
}
function InputNumber_span_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.decrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_6_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleDownIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_span_4_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_span_4_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_span_4_ng_container_6_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 3)(2, InputNumber_span_4_ng_container_6_2_Template, 1, 0, null, 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate);
  }
}
function InputNumber_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11)(1, "button", 12);
    \u0275\u0275listener("mousedown", function InputNumber_span_4_Template_button_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_span_4_Template_button_mouseup_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_span_4_Template_button_mouseleave_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_span_4_Template_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_span_4_Template_button_keyup_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyUp());
    });
    \u0275\u0275template(2, InputNumber_span_4_span_2_Template, 1, 2, "span", 13)(3, InputNumber_span_4_ng_container_3_Template, 3, 2, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("mousedown", function InputNumber_span_4_Template_button_mousedown_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_span_4_Template_button_mouseup_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_span_4_Template_button_mouseleave_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_span_4_Template_button_keydown_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_span_4_Template_button_keyup_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyUp());
    });
    \u0275\u0275template(5, InputNumber_span_4_span_5_Template, 1, 2, "span", 13)(6, InputNumber_span_4_ng_container_6_Template, 3, 2, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "buttonGroup");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.incrementButtonClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(17, _c26))("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "incrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.decrementButtonClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(18, _c36))("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", ctx_r2.decrementbutton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.decrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_button_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.incrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleUpIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_button_5_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_button_5_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_button_5_ng_container_2_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 3)(2, InputNumber_button_5_ng_container_2_2_Template, 1, 0, null, 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate);
  }
}
function InputNumber_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("mousedown", function InputNumber_button_5_Template_button_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_button_5_Template_button_mouseup_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_button_5_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_button_5_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_button_5_Template_button_keyup_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyUp());
    });
    \u0275\u0275template(1, InputNumber_button_5_span_1_Template, 1, 2, "span", 13)(2, InputNumber_button_5_ng_container_2_Template, 3, 2, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.incrementButtonClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(8, _c26))("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "incrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.decrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_6_ng_container_2_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleDownIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_6_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_button_6_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_button_6_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_button_6_ng_container_2_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 3)(2, InputNumber_button_6_ng_container_2_2_Template, 1, 0, null, 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate);
  }
}
function InputNumber_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("mousedown", function InputNumber_button_6_Template_button_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_button_6_Template_button_mouseup_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_button_6_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_button_6_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_button_6_Template_button_keyup_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyUp());
    });
    \u0275\u0275template(1, InputNumber_button_6_span_1_Template, 1, 2, "span", 13)(2, InputNumber_button_6_ng_container_2_Template, 3, 2, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.decrementButtonClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(8, _c36))("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "decrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.decrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
var INPUTNUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputNumber),
  multi: true
};
var InputNumber = class _InputNumber {
  document;
  el;
  cd;
  injector;
  config;
  /**
   * Displays spinner buttons.
   * @group Props
   */
  showButtons = false;
  /**
   * Whether to format the value.
   * @group Props
   */
  format = true;
  /**
   * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
   * @group Props
   */
  buttonLayout = "stacked";
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * Size of the input field.
   * @group Props
   */
  size;
  /**
   * Maximum number of character allows in the input field.
   * @group Props
   */
  maxlength;
  /**
   * Specifies tab order of the element.
   * @group Props
   */
  tabindex;
  /**
   * Title text of the input text.
   * @group Props
   */
  title;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Used to indicate that user input is required on an element before a form can be submitted.
   * @group Props
   */
  ariaRequired;
  /**
   * Name of the input field.
   * @group Props
   */
  name;
  /**
   * Indicates that whether the input field is required.
   * @group Props
   */
  required;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  autocomplete;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonClass;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonClass;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonIcon;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonIcon;
  /**
   * When present, it specifies that an input field is read-only.
   * @group Props
   */
  readonly = false;
  /**
   * Step factor to increment/decrement the value.
   * @group Props
   */
  step = 1;
  /**
   * Determines whether the input field is empty.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details.
   * @group Props
   */
  localeMatcher;
  /**
   * Defines the behavior of the component, valid values are "decimal" and "currency".
   * @group Props
   */
  mode = "decimal";
  /**
   * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
   * @group Props
   */
  currency;
  /**
   * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
   * @group Props
   */
  currencyDisplay;
  /**
   * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
   * @group Props
   */
  useGrouping = true;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  minFractionDigits;
  /**
   * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  maxFractionDigits;
  /**
   * Text to display before the value.
   * @group Props
   */
  prefix;
  /**
   * Text to display after the value.
   * @group Props
   */
  suffix;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
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
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    if (disabled) this.focused = false;
    this._disabled = disabled;
    if (this.timer) this.clearTimer();
  }
  /**
   * Callback to invoke on input.
   * @param {InputNumberInputEvent} event - Custom input event.
   * @group Emits
   */
  onInput = new EventEmitter();
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
   * Callback to invoke on input key press.
   * @param {KeyboardEvent} event - Keyboard event.
   * @group Emits
   */
  onKeyDown = new EventEmitter();
  /**
   * Callback to invoke when clear token is clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  input;
  templates;
  clearIconTemplate;
  incrementButtonIconTemplate;
  decrementButtonIconTemplate;
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  focused;
  initialized;
  groupChar = "";
  prefixChar = "";
  suffixChar = "";
  isSpecialChar;
  timer;
  lastValue;
  _numeral;
  numberFormat;
  _decimal;
  _decimalChar;
  _group;
  _minusSign;
  _currency;
  _prefix;
  _suffix;
  _index;
  _disabled;
  ngControl = null;
  constructor(document2, el, cd, injector, config) {
    this.document = document2;
    this.el = el;
    this.cd = cd;
    this.injector = injector;
    this.config = config;
  }
  ngOnChanges(simpleChange) {
    const props = ["locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "minFractionDigits", "maxFractionDigits", "prefix", "suffix"];
    if (props.some((p) => !!simpleChange[p])) {
      this.updateConstructParser();
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "incrementbuttonicon":
          this.incrementButtonIconTemplate = item.template;
          break;
        case "decrementbuttonicon":
          this.decrementButtonIconTemplate = item.template;
          break;
      }
    });
  }
  ngOnInit() {
    this.ngControl = this.injector.get(NgControl, null, {
      optional: true
    });
    this.constructParser();
    this.initialized = true;
  }
  getOptions() {
    return {
      localeMatcher: this.localeMatcher,
      style: this.mode,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: this.useGrouping,
      minimumFractionDigits: this.minFractionDigits ?? void 0,
      maximumFractionDigits: this.maxFractionDigits ?? void 0
    };
  }
  constructParser() {
    this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [d, i]));
    this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
    this._group = this.getGroupingExpression();
    this._minusSign = this.getMinusSignExpression();
    this._currency = this.getCurrencyExpression();
    this._decimal = this.getDecimalExpression();
    this._decimalChar = this.getDecimalChar();
    this._suffix = this.getSuffixExpression();
    this._prefix = this.getPrefixExpression();
    this._index = (d) => index.get(d);
  }
  updateConstructParser() {
    if (this.initialized) {
      this.constructParser();
    }
  }
  escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  getDecimalExpression() {
    const decimalChar = this.getDecimalChar();
    return new RegExp(`[${decimalChar}]`, "g");
  }
  getDecimalChar() {
    const formatter = new Intl.NumberFormat(this.locale, __spreadProps(__spreadValues({}, this.getOptions()), {
      useGrouping: false
    }));
    return formatter.format(1.1).replace(this._currency, "").trim().replace(this._numeral, "");
  }
  getGroupingExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: true
    });
    this.groupChar = formatter.format(1e6).trim().replace(this._numeral, "").charAt(0);
    return new RegExp(`[${this.groupChar}]`, "g");
  }
  getMinusSignExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: false
    });
    return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, "")}]`, "g");
  }
  getCurrencyExpression() {
    if (this.currency) {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: "currency",
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return new RegExp(`[${formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, "")}]`, "g");
    }
    return new RegExp(`[]`, "g");
  }
  getPrefixExpression() {
    if (this.prefix) {
      this.prefixChar = this.prefix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay
      });
      this.prefixChar = formatter.format(1).split("1")[0];
    }
    return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
  }
  getSuffixExpression() {
    if (this.suffix) {
      this.suffixChar = this.suffix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      this.suffixChar = formatter.format(1).split("1")[1];
    }
    return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
  }
  get isBlurUpdateOnMode() {
    return this.ngControl?.control?.updateOn === "blur";
  }
  formatValue(value) {
    if (value != null) {
      if (value === "-") {
        return value;
      }
      if (this.format) {
        let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
        let formattedValue = formatter.format(value);
        if (this.prefix && value != this.prefix) {
          formattedValue = this.prefix + formattedValue;
        }
        if (this.suffix && value != this.suffix) {
          formattedValue = formattedValue + this.suffix;
        }
        return formattedValue;
      }
      return value.toString();
    }
    return "";
  }
  parseValue(text) {
    const suffixRegex = new RegExp(this._suffix, "");
    const prefixRegex = new RegExp(this._prefix, "");
    const currencyRegex = new RegExp(this._currency, "");
    let filteredText = text.replace(suffixRegex, "").replace(prefixRegex, "").trim().replace(/\s/g, "").replace(currencyRegex, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
    if (filteredText) {
      if (filteredText === "-")
        return filteredText;
      let parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }
    return null;
  }
  repeat(event, interval, dir) {
    if (this.readonly) {
      return;
    }
    let i = interval || 500;
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event, 40, dir);
    }, i);
    this.spin(event, dir);
  }
  spin(event, dir) {
    let step = this.step * dir;
    let currentValue = this.parseValue(this.input?.nativeElement.value) || 0;
    let newValue = this.validateValue(currentValue + step);
    if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
      return;
    }
    this.updateInput(newValue, null, "spin", null);
    this.updateModel(event, newValue);
    this.handleOnInput(event, currentValue, newValue);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
  onUpButtonMouseDown(event) {
    if (event.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.disabled) {
      this.input?.nativeElement.focus();
      this.repeat(event, null, 1);
      event.preventDefault();
    }
  }
  onUpButtonMouseUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onUpButtonMouseLeave() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onUpButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, 1);
    }
  }
  onUpButtonKeyUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonMouseDown(event) {
    if (event.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.disabled) {
      this.input?.nativeElement.focus();
      this.repeat(event, null, -1);
      event.preventDefault();
    }
  }
  onDownButtonMouseUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonMouseLeave() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonKeyUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, -1);
    }
  }
  onUserInput(event) {
    if (this.readonly) {
      return;
    }
    if (this.isSpecialChar) {
      event.target.value = this.lastValue;
    }
    this.isSpecialChar = false;
  }
  onInputKeyDown(event) {
    if (this.readonly) {
      return;
    }
    this.lastValue = event.target.value;
    if (event.shiftKey || event.altKey || event.key === "Dead") {
      this.isSpecialChar = true;
      return;
    }
    let selectionStart = event.target.selectionStart;
    let selectionEnd = event.target.selectionEnd;
    let inputValue = event.target.value;
    let newValueStr = null;
    if (event.altKey) {
      event.preventDefault();
    }
    switch (event.key) {
      case "ArrowUp":
        this.spin(event, 1);
        event.preventDefault();
        break;
      case "ArrowDown":
        this.spin(event, -1);
        event.preventDefault();
        break;
      case "ArrowLeft":
        for (let index = selectionStart; index <= inputValue.length; index++) {
          const previousCharIndex = index === 0 ? 0 : index - 1;
          if (this.isNumeralChar(inputValue.charAt(previousCharIndex))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case "ArrowRight":
        for (let index = selectionEnd; index >= 0; index--) {
          if (this.isNumeralChar(inputValue.charAt(index))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case "Tab":
      case "Enter":
        newValueStr = this.validateValue(this.parseValue(this.input.nativeElement.value));
        this.input.nativeElement.value = this.formatValue(newValueStr);
        this.input.nativeElement.setAttribute("aria-valuenow", newValueStr);
        this.updateModel(event, newValueStr);
        break;
      case "Backspace": {
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 1 && this.prefix || selectionStart == inputValue.length && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart - 1);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
            }
          } else if (this.mode === "currency" && deleteChar.search(this._currency) != -1) {
            newValueStr = inputValue.slice(1);
          }
          this.updateValue(event, newValueStr, null, "delete-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, null, "delete-range");
        }
        break;
      }
      case "Delete":
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 0 && this.prefix || selectionStart == inputValue.length - 1 && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
            }
          }
          this.updateValue(event, newValueStr, null, "delete-back-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, null, "delete-range");
        }
        break;
      case "Home":
        if (this.min) {
          this.updateModel(event, this.min);
          event.preventDefault();
        }
        break;
      case "End":
        if (this.max) {
          this.updateModel(event, this.max);
          event.preventDefault();
        }
        break;
      default:
        break;
    }
    this.onKeyDown.emit(event);
  }
  onInputKeyPress(event) {
    if (this.readonly) {
      return;
    }
    let code = event.which || event.keyCode;
    let char = String.fromCharCode(code);
    let isDecimalSign = this.isDecimalSign(char);
    const isMinusSign = this.isMinusSign(char);
    if (code != 13) {
      event.preventDefault();
    }
    if (!isDecimalSign && event.code === "NumpadDecimal") {
      isDecimalSign = true;
      char = this._decimalChar;
      code = char.charCodeAt(0);
    }
    const {
      value,
      selectionStart,
      selectionEnd
    } = this.input.nativeElement;
    const newValue = this.parseValue(value + char);
    const newValueStr = newValue != null ? newValue.toString() : "";
    const selectedValue = value.substring(selectionStart, selectionEnd);
    const selectedValueParsed = this.parseValue(selectedValue);
    const selectedValueStr = selectedValueParsed != null ? selectedValueParsed.toString() : "";
    if (selectionStart !== selectionEnd && selectedValueStr.length > 0) {
      this.insert(event, char, {
        isDecimalSign,
        isMinusSign
      });
      return;
    }
    if (this.maxlength && newValueStr.length > this.maxlength) {
      return;
    }
    if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
      this.insert(event, char, {
        isDecimalSign,
        isMinusSign
      });
    }
  }
  onPaste(event) {
    if (!this.disabled && !this.readonly) {
      event.preventDefault();
      let data = (event.clipboardData || this.document.defaultView["clipboardData"]).getData("Text");
      if (data) {
        if (this.maxlength) {
          data = data.toString().substring(0, this.maxlength);
        }
        let filteredData = this.parseValue(data);
        if (filteredData != null) {
          this.insert(event, filteredData.toString());
        }
      }
    }
  }
  allowMinusSign() {
    return this.min == null || this.min < 0;
  }
  isMinusSign(char) {
    if (this._minusSign.test(char) || char === "-") {
      this._minusSign.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalSign(char) {
    if (this._decimal.test(char)) {
      this._decimal.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalMode() {
    return this.mode === "decimal";
  }
  getDecimalCharIndexes(val) {
    let decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const filteredVal = val.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "");
    const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
    this._decimal.lastIndex = 0;
    return {
      decimalCharIndex,
      decimalCharIndexWithoutPrefix
    };
  }
  getCharIndexes(val) {
    const decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const minusCharIndex = val.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    const suffixCharIndex = val.search(this._suffix);
    this._suffix.lastIndex = 0;
    const currencyCharIndex = val.search(this._currency);
    this._currency.lastIndex = 0;
    return {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    };
  }
  insert(event, text, sign = {
    isDecimalSign: false,
    isMinusSign: false
  }) {
    const minusCharIndexOnText = text.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
      return;
    }
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value.trim();
    const {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    } = this.getCharIndexes(inputValue);
    let newValueStr;
    if (sign.isMinusSign) {
      if (selectionStart === 0) {
        newValueStr = inputValue;
        if (minusCharIndex === -1 || selectionEnd !== 0) {
          newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
        }
        this.updateValue(event, newValueStr, text, "insert");
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        this.updateValue(event, inputValue, text, "insert");
      } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, "insert");
      } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, "insert");
      }
    } else {
      const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
      const operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
          const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
          this.updateValue(event, newValueStr, text, operation);
        }
      } else {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, operation);
      }
    }
  }
  insertText(value, text, start, end) {
    let textSplit = text === "." ? text : text.split(".");
    if (textSplit.length === 2) {
      const decimalCharIndex = value.slice(start, end).search(this._decimal);
      this._decimal.lastIndex = 0;
      return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
    } else if (end - start === value.length) {
      return this.formatValue(text);
    } else if (start === 0) {
      return text + value.slice(end);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    } else {
      return value.slice(0, start) + text + value.slice(end);
    }
  }
  deleteRange(value, start, end) {
    let newValueStr;
    if (end - start === value.length) newValueStr = "";
    else if (start === 0) newValueStr = value.slice(end);
    else if (end === value.length) newValueStr = value.slice(0, start);
    else newValueStr = value.slice(0, start) + value.slice(end);
    return newValueStr;
  }
  initCursor() {
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value;
    let valueLength = inputValue.length;
    let index = null;
    let prefixLength = (this.prefixChar || "").length;
    inputValue = inputValue.replace(this._prefix, "");
    if (selectionStart === selectionEnd || selectionStart !== 0 || selectionEnd < prefixLength) {
      selectionStart -= prefixLength;
    }
    let char = inputValue.charAt(selectionStart);
    if (this.isNumeralChar(char)) {
      return selectionStart + prefixLength;
    }
    let i = selectionStart - 1;
    while (i >= 0) {
      char = inputValue.charAt(i);
      if (this.isNumeralChar(char)) {
        index = i + prefixLength;
        break;
      } else {
        i--;
      }
    }
    if (index !== null) {
      this.input?.nativeElement.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart;
      while (i < valueLength) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i++;
        }
      }
      if (index !== null) {
        this.input?.nativeElement.setSelectionRange(index, index);
      }
    }
    return index || 0;
  }
  onInputClick() {
    const currentValue = this.input?.nativeElement.value;
    if (!this.readonly && currentValue !== DomHandler.getSelection()) {
      this.initCursor();
    }
  }
  isNumeralChar(char) {
    if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
      this.resetRegex();
      return true;
    }
    return false;
  }
  resetRegex() {
    this._numeral.lastIndex = 0;
    this._decimal.lastIndex = 0;
    this._group.lastIndex = 0;
    this._minusSign.lastIndex = 0;
  }
  updateValue(event, valueStr, insertedValueStr, operation) {
    let currentValue = this.input?.nativeElement.value;
    let newValue = null;
    if (valueStr != null) {
      newValue = this.parseValue(valueStr);
      newValue = !newValue && !this.allowEmpty ? 0 : newValue;
      this.updateInput(newValue, insertedValueStr, operation, valueStr);
      this.handleOnInput(event, currentValue, newValue);
    }
  }
  handleOnInput(event, currentValue, newValue) {
    if (this.isValueChanged(currentValue, newValue)) {
      this.input.nativeElement.value = this.formatValue(newValue);
      this.input?.nativeElement.setAttribute("aria-valuenow", newValue);
      !this.isBlurUpdateOnMode && this.updateModel(event, newValue);
      this.onInput.emit({
        originalEvent: event,
        value: newValue,
        formattedValue: currentValue
      });
    }
  }
  isValueChanged(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }
    if (newValue != null) {
      let parsedCurrentValue = typeof currentValue === "string" ? this.parseValue(currentValue) : currentValue;
      return newValue !== parsedCurrentValue;
    }
    return false;
  }
  validateValue(value) {
    if (value === "-" || value == null) {
      return null;
    }
    if (this.min != null && value < this.min) {
      return this.min;
    }
    if (this.max != null && value > this.max) {
      return this.max;
    }
    return value;
  }
  updateInput(value, insertedValueStr, operation, valueStr) {
    insertedValueStr = insertedValueStr || "";
    let inputValue = this.input?.nativeElement.value;
    let newValue = this.formatValue(value);
    let currentLength = inputValue.length;
    if (newValue !== valueStr) {
      newValue = this.concatValues(newValue, valueStr);
    }
    if (currentLength === 0) {
      this.input.nativeElement.value = newValue;
      this.input.nativeElement.setSelectionRange(0, 0);
      const index = this.initCursor();
      const selectionEnd = index + insertedValueStr.length;
      this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      let selectionStart = this.input.nativeElement.selectionStart;
      let selectionEnd = this.input.nativeElement.selectionEnd;
      if (this.maxlength && newValue.length > this.maxlength) {
        newValue = newValue.slice(0, this.maxlength);
        selectionStart = Math.min(selectionStart, this.maxlength);
        selectionEnd = Math.min(selectionEnd, this.maxlength);
      }
      if (this.maxlength && this.maxlength < newValue.length) {
        return;
      }
      this.input.nativeElement.value = newValue;
      let newLength = newValue.length;
      if (operation === "range-insert") {
        const startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
        const startValueStr = startValue !== null ? startValue.toString() : "";
        const startExpr = startValueStr.split("").join(`(${this.groupChar})?`);
        const sRegex = new RegExp(startExpr, "g");
        sRegex.test(newValue);
        const tExpr = insertedValueStr.split("").join(`(${this.groupChar})?`);
        const tRegex = new RegExp(tExpr, "g");
        tRegex.test(newValue.slice(sRegex.lastIndex));
        selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === "insert" || operation === "delete-back-single") this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
        else if (operation === "delete-single") this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
        else if (operation === "delete-range" || operation === "spin") this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (operation === "delete-back-single") {
        let prevChar = inputValue.charAt(selectionEnd - 1);
        let nextChar = inputValue.charAt(selectionEnd);
        let diff = currentLength - newLength;
        let isGroupChar = this._group.test(nextChar);
        if (isGroupChar && diff === 1) {
          selectionEnd += 1;
        } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
          selectionEnd += -1 * diff + 1;
        }
        this._group.lastIndex = 0;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (inputValue === "-" && operation === "insert") {
        this.input.nativeElement.setSelectionRange(0, 0);
        const index = this.initCursor();
        const selectionEnd2 = index + insertedValueStr.length + 1;
        this.input.nativeElement.setSelectionRange(selectionEnd2, selectionEnd2);
      } else {
        selectionEnd = selectionEnd + (newLength - currentLength);
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      }
    }
    this.input.nativeElement.setAttribute("aria-valuenow", value);
  }
  concatValues(val1, val2) {
    if (val1 && val2) {
      let decimalCharIndex = val2.search(this._decimal);
      this._decimal.lastIndex = 0;
      if (this.suffixChar) {
        return decimalCharIndex !== -1 ? val1 : val1.replace(this.suffixChar, "").split(this._decimal)[0] + val2.replace(this.suffixChar, "").slice(decimalCharIndex) + this.suffixChar;
      } else {
        return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
      }
    }
    return val1;
  }
  getDecimalLength(value) {
    if (value) {
      const valueSplit = value.split(this._decimal);
      if (valueSplit.length === 2) {
        return valueSplit[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
      }
    }
    return 0;
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    const newValueNumber = this.validateValue(this.parseValue(this.input.nativeElement.value));
    const newValueString = newValueNumber?.toString();
    this.input.nativeElement.value = this.formatValue(newValueString);
    this.input.nativeElement.setAttribute("aria-valuenow", newValueString);
    this.updateModel(event, newValueNumber);
    this.onBlur.emit(event);
  }
  formattedValue() {
    const val = !this.value && !this.allowEmpty ? 0 : this.value;
    return this.formatValue(val);
  }
  updateModel(event, value) {
    if (this.value !== value) {
      this.value = value;
      if (!(this.isBlurUpdateOnMode && this.focused)) {
        this.onModelChange(value);
      } else if (this.isBlurUpdateOnMode) {
        this.onModelChange(value);
      }
    }
    this.onModelTouched();
  }
  writeValue(value) {
    this.value = value;
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
  get filled() {
    return this.value != null && this.value.toString().length > 0;
  }
  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  static \u0275fac = function InputNumber_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputNumber)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputNumber,
    selectors: [["p-inputNumber"]],
    contentQueries: function InputNumber_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function InputNumber_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c07, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 6,
    hostBindings: function InputNumber_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused)("p-inputnumber-clearable", ctx.showClear && ctx.buttonLayout != "vertical");
      }
    },
    inputs: {
      showButtons: [2, "showButtons", "showButtons", booleanAttribute],
      format: [2, "format", "format", booleanAttribute],
      buttonLayout: "buttonLayout",
      inputId: "inputId",
      styleClass: "styleClass",
      style: "style",
      placeholder: "placeholder",
      size: [2, "size", "size", numberAttribute],
      maxlength: [2, "maxlength", "maxlength", numberAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      title: "title",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      ariaRequired: [2, "ariaRequired", "ariaRequired", booleanAttribute],
      name: "name",
      required: [2, "required", "required", booleanAttribute],
      autocomplete: "autocomplete",
      min: [2, "min", "min", numberAttribute],
      max: [2, "max", "max", numberAttribute],
      incrementButtonClass: "incrementButtonClass",
      decrementButtonClass: "decrementButtonClass",
      incrementButtonIcon: "incrementButtonIcon",
      decrementButtonIcon: "decrementButtonIcon",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      step: [2, "step", "step", numberAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      locale: "locale",
      localeMatcher: "localeMatcher",
      mode: "mode",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      variant: "variant",
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, null)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, null)],
      prefix: "prefix",
      suffix: "suffix",
      inputStyle: "inputStyle",
      inputStyleClass: "inputStyleClass",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      disabled: "disabled"
    },
    outputs: {
      onInput: "onInput",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onKeyDown: "onKeyDown",
      onClear: "onClear"
    },
    features: [\u0275\u0275ProvidersFeature([INPUTNUMBER_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature],
    decls: 7,
    vars: 43,
    consts: [["input", ""], [3, "ngClass", "ngStyle"], ["pInputText", "", "role", "spinbutton", "inputmode", "decimal", "pAutoFocus", "", 3, "input", "keydown", "keypress", "paste", "click", "focus", "blur", "ngClass", "ngStyle", "value", "disabled", "readonly", "autofocus"], [4, "ngIf"], ["class", "p-inputnumber-button-group", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-button-icon-only", "tabindex", "0", 3, "ngClass", "class", "disabled", "mousedown", "mouseup", "mouseleave", "keydown", "keyup", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["class", "p-inputnumber-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "ngClass"], [1, "p-inputnumber-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [1, "p-inputnumber-button-group"], ["type", "button", "pButton", "", "tabindex", "0", 1, "p-button-icon-only", 3, "mousedown", "mouseup", "mouseleave", "keydown", "keyup", "ngClass", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
    template: function InputNumber_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "span", 1)(1, "input", 2, 0);
        \u0275\u0275listener("input", function InputNumber_Template_input_input_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onUserInput($event));
        })("keydown", function InputNumber_Template_input_keydown_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputKeyDown($event));
        })("keypress", function InputNumber_Template_input_keypress_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputKeyPress($event));
        })("paste", function InputNumber_Template_input_paste_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPaste($event));
        })("click", function InputNumber_Template_input_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputClick());
        })("focus", function InputNumber_Template_input_focus_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function InputNumber_Template_input_blur_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, InputNumber_ng_container_3_Template, 3, 2, "ng-container", 3)(4, InputNumber_span_4_Template, 7, 19, "span", 4)(5, InputNumber_button_5_Template, 3, 9, "button", 5)(6, InputNumber_button_6_Template, 3, 9, "button", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(39, _c17, ctx.showButtons && ctx.buttonLayout === "stacked", ctx.showButtons && ctx.buttonLayout === "horizontal", ctx.showButtons && ctx.buttonLayout === "vertical"))("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "inputnumber")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.inputStyleClass);
        \u0275\u0275classProp("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled");
        \u0275\u0275property("ngClass", "p-inputnumber-input")("ngStyle", ctx.inputStyle)("value", ctx.formattedValue())("disabled", ctx.disabled)("readonly", ctx.readonly)("autofocus", ctx.autofocus);
        \u0275\u0275attribute("id", ctx.inputId)("variant", ctx.variant)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("placeholder", ctx.placeholder)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("title", ctx.title)("size", ctx.size)("name", ctx.name)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-required", ctx.ariaRequired)("required", ctx.required)("min", ctx.min)("max", ctx.max)("data-pc-section", "input");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.buttonLayout != "vertical" && ctx.showClear && ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout === "stacked");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, ButtonDirective, AutoFocus, TimesIcon, AngleUpIcon, AngleDownIcon],
    styles: ["@layer primeng{p-inputnumber,.p-inputnumber{display:inline-flex}.p-inputnumber-button{display:flex;align-items:center;justify-content:center;flex:0 0 auto}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{order:3;border-top-left-radius:0;border-bottom-left-radius:0}.p-inputnumber-buttons-horizontal .p-inputnumber-input{order:2;border-radius:0}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{order:1;border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-vertical{flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{order:1;border-bottom-left-radius:0;border-bottom-right-radius:0;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{order:2;border-radius:0;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{order:3;border-top-left-radius:0;border-top-right-radius:0;width:100%}.p-inputnumber-input{flex:1 1 auto}.p-fluid p-inputnumber,.p-fluid .p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}.p-inputnumber-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputnumber-clearable{position:relative}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumber, [{
    type: Component,
    args: [{
      selector: "p-inputNumber",
      template: `
        <span
            [ngClass]="{
                'p-inputnumber p-component': true,
                'p-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked',
                'p-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal',
                'p-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'
            }"
            [ngStyle]="style"
            [class]="styleClass"
            [attr.data-pc-name]="'inputnumber'"
            [attr.data-pc-section]="'root'"
        >
            <input
                pInputText
                #input
                [attr.id]="inputId"
                role="spinbutton"
                [ngClass]="'p-inputnumber-input'"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [value]="formattedValue()"
                [attr.variant]="variant"
                [attr.aria-valuemin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="value"
                [disabled]="disabled"
                [readonly]="readonly"
                [attr.placeholder]="placeholder"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.title]="title"
                [attr.size]="size"
                [attr.name]="name"
                [attr.autocomplete]="autocomplete"
                [attr.maxlength]="maxlength"
                [attr.tabindex]="tabindex"
                [attr.aria-required]="ariaRequired"
                [attr.required]="required"
                [attr.min]="min"
                [attr.max]="max"
                inputmode="decimal"
                (input)="onUserInput($event)"
                (keydown)="onInputKeyDown($event)"
                (keypress)="onInputKeyPress($event)"
                (paste)="onPaste($event)"
                (click)="onInputClick()"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                [attr.data-pc-section]="'input'"
                pAutoFocus
                [autofocus]="autofocus"
                [class.p-variant-filled]="variant === 'filled' || config.inputStyle() === 'filled'"
            />
            <ng-container *ngIf="buttonLayout != 'vertical' && showClear && value">
                <TimesIcon *ngIf="!clearIconTemplate" [ngClass]="'p-inputnumber-clear-icon'" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
                <span *ngIf="clearIconTemplate" (click)="clear()" class="p-inputnumber-clear-icon" [attr.data-pc-section]="'clearIcon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>
            <span class="p-inputnumber-button-group" *ngIf="showButtons && buttonLayout === 'stacked'" [attr.data-pc-section]="'buttonGroup'">
                <button
                    type="button"
                    pButton
                    [ngClass]="{ 'p-inputnumber-button p-inputnumber-button-up': true }"
                    class="p-button-icon-only"
                    [class]="incrementButtonClass"
                    [disabled]="disabled"
                    tabindex="0"
                    (mousedown)="onUpButtonMouseDown($event)"
                    (mouseup)="onUpButtonMouseUp()"
                    (mouseleave)="onUpButtonMouseLeave()"
                    (keydown)="onUpButtonKeyDown($event)"
                    (keyup)="onUpButtonKeyUp()"
                    [attr.aria-hidden]="true"
                    [attr.data-pc-section]="'incrementbutton'"
                >
                    <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
                    <ng-container *ngIf="!incrementButtonIcon">
                        <AngleUpIcon *ngIf="!incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                        <ng-template *ngTemplateOutlet="incrementButtonIconTemplate"></ng-template>
                    </ng-container>
                </button>
                <button
                    type="button"
                    pButton
                    [ngClass]="{ 'p-inputnumber-button p-inputnumber-button-down': true }"
                    class="p-button-icon-only"
                    [class]="decrementButtonClass"
                    [disabled]="disabled"
                    tabindex="0"
                    [attr.aria-hidden]="true"
                    (mousedown)="onDownButtonMouseDown($event)"
                    (mouseup)="onDownButtonMouseUp()"
                    (mouseleave)="onDownButtonMouseLeave()"
                    (keydown)="onDownButtonKeyDown($event)"
                    (keyup)="onDownButtonKeyUp()"
                    [attr.data-pc-section]="decrementbutton"
                >
                    <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
                    <ng-container *ngIf="!decrementButtonIcon">
                        <AngleDownIcon *ngIf="!decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                        <ng-template *ngTemplateOutlet="decrementButtonIconTemplate"></ng-template>
                    </ng-container>
                </button>
            </span>
            <button
                *ngIf="showButtons && buttonLayout !== 'stacked'"
                type="button"
                pButton
                [ngClass]="{ 'p-inputnumber-button p-inputnumber-button-up': true }"
                [class]="incrementButtonClass"
                class="p-button-icon-only"
                [disabled]="disabled"
                tabindex="0"
                [attr.aria-hidden]="true"
                (mousedown)="onUpButtonMouseDown($event)"
                (mouseup)="onUpButtonMouseUp()"
                (mouseleave)="onUpButtonMouseLeave()"
                (keydown)="onUpButtonKeyDown($event)"
                (keyup)="onUpButtonKeyUp()"
                [attr.data-pc-section]="'incrementbutton'"
            >
                <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
                <ng-container *ngIf="!incrementButtonIcon">
                    <AngleUpIcon *ngIf="!incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="incrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>
            <button
                *ngIf="showButtons && buttonLayout !== 'stacked'"
                type="button"
                pButton
                [ngClass]="{ 'p-inputnumber-button p-inputnumber-button-down': true }"
                class="p-button-icon-only"
                [class]="decrementButtonClass"
                [disabled]="disabled"
                tabindex="0"
                [attr.aria-hidden]="true"
                (mousedown)="onDownButtonMouseDown($event)"
                (mouseup)="onDownButtonMouseUp()"
                (mouseleave)="onDownButtonMouseLeave()"
                (keydown)="onDownButtonKeyDown($event)"
                (keyup)="onDownButtonKeyUp()"
                [attr.data-pc-section]="'decrementbutton'"
            >
                <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
                <ng-container *ngIf="!decrementButtonIcon">
                    <AngleDownIcon *ngIf="!decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="decrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>
        </span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [INPUTNUMBER_VALUE_ACCESSOR],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled",
        "[class.p-inputwrapper-focus]": "focused",
        "[class.p-inputnumber-clearable]": 'showClear && buttonLayout != "vertical"'
      },
      styles: ["@layer primeng{p-inputnumber,.p-inputnumber{display:inline-flex}.p-inputnumber-button{display:flex;align-items:center;justify-content:center;flex:0 0 auto}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{order:3;border-top-left-radius:0;border-bottom-left-radius:0}.p-inputnumber-buttons-horizontal .p-inputnumber-input{order:2;border-radius:0}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{order:1;border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-vertical{flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{order:1;border-bottom-left-radius:0;border-bottom-right-radius:0;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{order:2;border-radius:0;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{order:3;border-top-left-radius:0;border-top-right-radius:0;width:100%}.p-inputnumber-input{flex:1 1 auto}.p-fluid p-inputnumber,.p-fluid .p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}.p-inputnumber-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputnumber-clearable{position:relative}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: PrimeNGConfig
  }], {
    showButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    buttonLayout: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    size: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    title: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaRequired: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autocomplete: [{
      type: Input
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    incrementButtonClass: [{
      type: Input
    }],
    decrementButtonClass: [{
      type: Input
    }],
    incrementButtonIcon: [{
      type: Input
    }],
    decrementButtonIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputStyleClass: [{
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
    disabled: [{
      type: Input
    }],
    onInput: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onKeyDown: [{
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
var InputNumberModule = class _InputNumberModule {
  static \u0275fac = function InputNumberModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputNumberModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputNumberModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, InputTextModule, ButtonModule, AutoFocusModule, TimesIcon, AngleUpIcon, AngleDownIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, InputTextModule, ButtonModule, AutoFocusModule, TimesIcon, AngleUpIcon, AngleDownIcon],
      exports: [InputNumber, SharedModule],
      declarations: [InputNumber]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-paginator.mjs
var _c08 = (a0) => ({
  "p-disabled": a0
});
var _c18 = (a0) => ({
  $implicit: a0
});
var _c27 = (a0) => ({
  "p-highlight": a0
});
function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "start");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c18, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleDoubleLeftIcon", 19);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_button_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_button_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_button_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275template(1, Paginator_div_0_button_3_span_2_1_Template, 1, 0, null, 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function Paginator_div_0_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePageToFirst($event));
    });
    \u0275\u0275template(1, Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template, 1, 1, "AngleDoubleLeftIcon", 6)(2, Paginator_div_0_button_3_span_2_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", \u0275\u0275pureFunction1(5, _c08, ctx_r1.isFirstPage() || ctx_r1.empty()));
    \u0275\u0275attribute("aria-label", ctx_r1.getAriaLabel("firstPageLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.firstPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_AngleLeftIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleLeftIcon", 19);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_span_6_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275template(1, Paginator_div_0_span_6_1_Template, 1, 0, null, 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.previousPageLinkIconTemplate);
  }
}
function Paginator_div_0_span_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function Paginator_div_0_span_7_button_1_Template_button_click_0_listener($event) {
      const pageLink_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageLinkClick($event, pageLink_r5 - 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageLink_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c27, pageLink_r5 - 1 == ctx_r1.getPage()));
    \u0275\u0275attribute("aria-label", ctx_r1.getPageAriaLabel(pageLink_r5))("aria-current", pageLink_r5 - 1 == ctx_r1.getPage() ? "page" : void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLocalization(pageLink_r5), " ");
  }
}
function Paginator_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275template(1, Paginator_div_0_span_7_button_1_Template, 2, 6, "button", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageLinks);
  }
}
function Paginator_div_0_p_dropdown_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.jumpToPageItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c18, item_r7));
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_Template, 1, 4, "ng-template", 28);
    \u0275\u0275elementContainerEnd();
  }
}
function Paginator_div_0_p_dropdown_8_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_p_dropdown_8_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_dropdown_8_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_p_dropdown_8_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_dropdown_8_3_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Paginator_div_0_p_dropdown_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 25);
    \u0275\u0275listener("onChange", function Paginator_div_0_p_dropdown_8_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageDropdownChange($event));
    });
    \u0275\u0275template(1, Paginator_div_0_p_dropdown_8_ng_template_1_Template, 1, 1, "ng-template", 26)(2, Paginator_div_0_p_dropdown_8_ng_container_2_Template, 2, 0, "ng-container", 27)(3, Paginator_div_0_p_dropdown_8_3_Template, 1, 0, null, 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.pageItems)("ngModel", ctx_r1.getPage())("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight);
    \u0275\u0275attribute("aria-label", ctx_r1.getAriaLabel("jumpToPageDropdownLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.jumpToPageItemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_AngleRightIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleRightIcon", 19);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_span_11_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275template(1, Paginator_div_0_span_11_1_Template, 1, 0, null, 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nextPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleDoubleRightIcon", 19);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_button_12_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_button_12_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_button_12_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275template(1, Paginator_div_0_button_12_span_2_1_Template, 1, 0, null, 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function Paginator_div_0_button_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePageToLast($event));
    });
    \u0275\u0275template(1, Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template, 1, 1, "AngleDoubleRightIcon", 6)(2, Paginator_div_0_button_12_span_2_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", \u0275\u0275pureFunction1(5, _c08, ctx_r1.isLastPage() || ctx_r1.empty()));
    \u0275\u0275attribute("aria-label", ctx_r1.getAriaLabel("lastPageLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.lastPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_p_inputNumber_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputNumber", 31);
    \u0275\u0275listener("ngModelChange", function Paginator_div_0_p_inputNumber_13_Template_p_inputNumber_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage($event - 1));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.currentPage())("disabled", ctx_r1.empty());
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c18, item_r11));
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 28);
    \u0275\u0275elementContainerEnd();
  }
}
function Paginator_div_0_p_dropdown_14_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_p_dropdown_14_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_dropdown_14_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_p_dropdown_14_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_dropdown_14_2_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Paginator_div_0_p_dropdown_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 32);
    \u0275\u0275twoWayListener("ngModelChange", function Paginator_div_0_p_dropdown_14_Template_p_dropdown_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.rows, $event) || (ctx_r1.rows = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function Paginator_div_0_p_dropdown_14_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRppChange($event));
    });
    \u0275\u0275template(1, Paginator_div_0_p_dropdown_14_ng_container_1_Template, 2, 0, "ng-container", 27)(2, Paginator_div_0_p_dropdown_14_2_Template, 1, 0, null, 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.rowsPerPageItems);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rows);
    \u0275\u0275property("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight)("ariaLabel", ctx_r1.getAriaLabel("rowsPerPageLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownItemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, Paginator_div_0_div_15_ng_container_1_Template, 1, 0, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "end");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.templateRight)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c18, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, Paginator_div_0_div_1_Template, 2, 5, "div", 2)(2, Paginator_div_0_span_2_Template, 2, 1, "span", 3)(3, Paginator_div_0_button_3_Template, 3, 7, "button", 4);
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function Paginator_div_0_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePageToPrev($event));
    });
    \u0275\u0275template(5, Paginator_div_0_AngleLeftIcon_5_Template, 1, 1, "AngleLeftIcon", 6)(6, Paginator_div_0_span_6_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Paginator_div_0_span_7_Template, 2, 1, "span", 8)(8, Paginator_div_0_p_dropdown_8_Template, 4, 8, "p-dropdown", 9);
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function Paginator_div_0_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePageToNext($event));
    });
    \u0275\u0275template(10, Paginator_div_0_AngleRightIcon_10_Template, 1, 1, "AngleRightIcon", 6)(11, Paginator_div_0_span_11_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, Paginator_div_0_button_12_Template, 3, 7, "button", 11)(13, Paginator_div_0_p_inputNumber_13_Template, 1, 2, "p-inputNumber", 12)(14, Paginator_div_0_p_dropdown_14_Template, 3, 8, "p-dropdown", 13)(15, Paginator_div_0_div_15_Template, 2, 5, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngStyle", ctx_r1.style)("ngClass", "p-paginator p-component");
    \u0275\u0275attribute("data-pc-section", "paginator")("data-pc-section", "root");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.templateLeft);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCurrentPageReport);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showFirstLastIcon);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", \u0275\u0275pureFunction1(25, _c08, ctx_r1.isFirstPage() || ctx_r1.empty()));
    \u0275\u0275attribute("aria-label", ctx_r1.getAriaLabel("prevPageLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.previousPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previousPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPageLinks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showJumpToPageDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", \u0275\u0275pureFunction1(27, _c08, ctx_r1.isLastPage() || ctx_r1.empty()));
    \u0275\u0275attribute("aria-label", ctx_r1.getAriaLabel("nextPageLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.nextPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nextPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showFirstLastIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showJumpToPageInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rowsPerPageOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.templateRight);
  }
}
var Paginator = class _Paginator {
  cd;
  config;
  /**
   * Number of page links to display.
   * @group Props
   */
  pageLinkSize = 5;
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
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShow = true;
  /**
   * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  dropdownAppendTo;
  /**
   * Template instance to inject into the left side of the paginator.
   * @param {PaginatorState} context - Paginator state.
   * @group Props
   */
  templateLeft;
  /**
   * Template instance to inject into the right side of the paginator.
   * @param {PaginatorState} context - Paginator state.
   * @group Props
   */
  templateRight;
  /**
   * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  dropdownScrollHeight = "200px";
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = "{currentPage} of {totalPages}";
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Number of total records.
   * @group Props
   */
  totalRecords = 0;
  /**
   * Data count to display per page.
   * @group Props
   */
  rows = 0;
  /**
   * Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * Whether to display a input to navigate to any page.
   * @group Props
   */
  showJumpToPageInput;
  /**
   * Template instance to inject into the jump to page dropdown item inside in the paginator.
   * @param {Object} context - item instance.
   * @group Props
   */
  jumpToPageItemTemplate;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * Template instance to inject into the rows per page dropdown item inside in the paginator.
   * @param {Object} context - item instance.
   * @group Props
   */
  dropdownItemTemplate;
  /**
   * Zero-relative number of the first row to be displayed.
   * @group Props
   */
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
  }
  /**
   * Callback to invoke when page changes, the event object contains information about the new state.
   * @param {PaginatorState} event - Paginator state.
   * @group Emits
   */
  onPageChange = new EventEmitter();
  templates;
  dropdownIconTemplate;
  firstPageLinkIconTemplate;
  previousPageLinkIconTemplate;
  lastPageLinkIconTemplate;
  nextPageLinkIconTemplate;
  pageLinks;
  pageItems;
  rowsPerPageItems;
  paginatorState;
  _first = 0;
  _page = 0;
  constructor(cd, config) {
    this.cd = cd;
    this.config = config;
  }
  ngOnInit() {
    this.updatePaginatorState();
  }
  getAriaLabel(labelType) {
    return this.config.translation.aria ? this.config.translation.aria[labelType] : void 0;
  }
  getPageAriaLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, `${value}`) : void 0;
  }
  getLocalization(digit) {
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [i, d]));
    if (digit > 9) {
      const numbers = String(digit).split("");
      return numbers.map((number) => index.get(Number(number))).join("");
    } else {
      return index.get(digit);
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        case "firstpagelinkicon":
          this.firstPageLinkIconTemplate = item.template;
          break;
        case "previouspagelinkicon":
          this.previousPageLinkIconTemplate = item.template;
          break;
        case "lastpagelinkicon":
          this.lastPageLinkIconTemplate = item.template;
          break;
        case "nextpagelinkicon":
          this.nextPageLinkIconTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.totalRecords) {
      this.updatePageLinks();
      this.updatePaginatorState();
      this.updateFirst();
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.first) {
      this._first = simpleChange.first.currentValue;
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rows) {
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rowsPerPageOptions) {
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.pageLinkSize) {
      this.updatePageLinks();
    }
  }
  updateRowsPerPageOptions() {
    if (this.rowsPerPageOptions) {
      this.rowsPerPageItems = [];
      for (let opt of this.rowsPerPageOptions) {
        if (typeof opt == "object" && opt["showAll"]) {
          this.rowsPerPageItems.unshift({
            label: opt["showAll"],
            value: this.totalRecords
          });
        } else {
          this.rowsPerPageItems.push({
            label: String(this.getLocalization(opt)),
            value: opt
          });
        }
      }
    }
  }
  isFirstPage() {
    return this.getPage() === 0;
  }
  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }
  getPageCount() {
    return Math.ceil(this.totalRecords / this.rows);
  }
  calculatePageLinkBoundaries() {
    let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
    let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
    var delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);
    return [start, end];
  }
  updatePageLinks() {
    this.pageLinks = [];
    let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }
    if (this.showJumpToPageDropdown) {
      this.pageItems = [];
      for (let i = 0; i < this.getPageCount(); i++) {
        this.pageItems.push({
          label: String(i + 1),
          value: i
        });
      }
    }
  }
  changePage(p) {
    var pc = this.getPageCount();
    if (p >= 0 && p < pc) {
      this._first = this.rows * p;
      var state = {
        page: p,
        first: this.first,
        rows: this.rows,
        pageCount: pc
      };
      this.updatePageLinks();
      this.onPageChange.emit(state);
      this.updatePaginatorState();
    }
  }
  updateFirst() {
    const page = this.getPage();
    if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
      Promise.resolve(null).then(() => this.changePage(page - 1));
    }
  }
  getPage() {
    return Math.floor(this.first / this.rows);
  }
  changePageToFirst(event) {
    if (!this.isFirstPage()) {
      this.changePage(0);
    }
    event.preventDefault();
  }
  changePageToPrev(event) {
    this.changePage(this.getPage() - 1);
    event.preventDefault();
  }
  changePageToNext(event) {
    this.changePage(this.getPage() + 1);
    event.preventDefault();
  }
  changePageToLast(event) {
    if (!this.isLastPage()) {
      this.changePage(this.getPageCount() - 1);
    }
    event.preventDefault();
  }
  onPageLinkClick(event, page) {
    this.changePage(page);
    event.preventDefault();
  }
  onRppChange(event) {
    this.changePage(this.getPage());
  }
  onPageDropdownChange(event) {
    this.changePage(event.value);
  }
  updatePaginatorState() {
    this.paginatorState = {
      page: this.getPage(),
      pageCount: this.getPageCount(),
      rows: this.rows,
      first: this.first,
      totalRecords: this.totalRecords
    };
  }
  empty() {
    return this.getPageCount() === 0;
  }
  currentPage() {
    return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
  }
  get currentPageReport() {
    return this.currentPageReportTemplate.replace("{currentPage}", String(this.currentPage())).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this.totalRecords > 0 ? this._first + 1 : 0)).replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords))).replace("{rows}", String(this.rows)).replace("{totalRecords}", String(this.totalRecords));
  }
  static \u0275fac = function Paginator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Paginator)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Paginator,
    selectors: [["p-paginator"]],
    contentQueries: function Paginator_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      pageLinkSize: [2, "pageLinkSize", "pageLinkSize", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      alwaysShow: [2, "alwaysShow", "alwaysShow", booleanAttribute],
      dropdownAppendTo: "dropdownAppendTo",
      templateLeft: "templateLeft",
      templateRight: "templateRight",
      appendTo: "appendTo",
      dropdownScrollHeight: "dropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      totalRecords: [2, "totalRecords", "totalRecords", numberAttribute],
      rows: [2, "rows", "rows", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showJumpToPageInput: [2, "showJumpToPageInput", "showJumpToPageInput", booleanAttribute],
      jumpToPageItemTemplate: "jumpToPageItemTemplate",
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      locale: "locale",
      dropdownItemTemplate: "dropdownItemTemplate",
      first: "first"
    },
    outputs: {
      onPageChange: "onPageChange"
    },
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "p-paginator-left-content", 4, "ngIf"], ["class", "p-paginator-current", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-first p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-prev", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-paginator-icon", 4, "ngIf"], ["class", "p-paginator-pages", 4, "ngIf"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "onChange", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-next", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], ["type", "button", "pRipple", "", "class", "p-paginator-last p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "p-paginator-page-input", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel", "ngModelChange", "onChange", 4, "ngIf"], ["class", "p-paginator-right-content", 4, "ngIf"], [1, "p-paginator-left-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-paginator-current"], ["type", "button", "pRipple", "", 1, "p-paginator-first", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [3, "styleClass"], [1, "p-paginator-icon"], [4, "ngTemplateOutlet"], [1, "p-paginator-pages"], ["type", "button", "class", "p-paginator-page p-paginator-element p-link", "pRipple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 1, "p-paginator-page", "p-paginator-element", "p-link", 3, "click", "ngClass"], ["styleClass", "p-paginator-page-options", 3, "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight"], ["pTemplate", "selectedItem"], [4, "ngIf"], ["pTemplate", "item"], ["pTemplate", "dropdownicon"], ["type", "button", "pRipple", "", 1, "p-paginator-last", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [1, "p-paginator-page-input", 3, "ngModelChange", "ngModel", "disabled"], ["styleClass", "p-paginator-rpp-options", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel"], [1, "p-paginator-right-content"]],
    template: function Paginator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Paginator_div_0_Template, 16, 29, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Dropdown, PrimeTemplate, InputNumber, NgControlStatus, NgModel, Ripple, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon],
    styles: ["@layer primeng{.p-paginator{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-page,.p-paginator-next,.p-paginator-last,.p-paginator-first,.p-paginator-prev,.p-paginator-current{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;line-height:1;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-paginator-element:focus{z-index:1;position:relative}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Paginator, [{
    type: Component,
    args: [{
      selector: "p-paginator",
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-paginator p-component'" *ngIf="alwaysShow ? true : pageLinks && pageLinks.length > 1" [attr.data-pc-section]="'paginator'" [attr.data-pc-section]="'root'">
            <div class="p-paginator-left-content" *ngIf="templateLeft" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="templateLeft; context: { $implicit: paginatorState }"></ng-container>
            </div>
            <span class="p-paginator-current" *ngIf="showCurrentPageReport">{{ currentPageReport }}</span>
            <button
                *ngIf="showFirstLastIcon"
                type="button"
                [disabled]="isFirstPage() || empty()"
                (click)="changePageToFirst($event)"
                pRipple
                class="p-paginator-first p-paginator-element p-link"
                [ngClass]="{ 'p-disabled': isFirstPage() || empty() }"
                [attr.aria-label]="getAriaLabel('firstPageLabel')"
            >
                <AngleDoubleLeftIcon *ngIf="!firstPageLinkIconTemplate" [styleClass]="'p-paginator-icon'" />
                <span class="p-paginator-icon" *ngIf="firstPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="firstPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <button
                type="button"
                [disabled]="isFirstPage() || empty()"
                (click)="changePageToPrev($event)"
                pRipple
                class="p-paginator-prev p-paginator-element p-link"
                [ngClass]="{ 'p-disabled': isFirstPage() || empty() }"
                [attr.aria-label]="getAriaLabel('prevPageLabel')"
            >
                <AngleLeftIcon *ngIf="!previousPageLinkIconTemplate" [styleClass]="'p-paginator-icon'" />
                <span class="p-paginator-icon" *ngIf="previousPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="previousPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <span class="p-paginator-pages" *ngIf="showPageLinks">
                <button
                    type="button"
                    *ngFor="let pageLink of pageLinks"
                    class="p-paginator-page p-paginator-element p-link"
                    [ngClass]="{ 'p-highlight': pageLink - 1 == getPage() }"
                    [attr.aria-label]="getPageAriaLabel(pageLink)"
                    [attr.aria-current]="pageLink - 1 == getPage() ? 'page' : undefined"
                    (click)="onPageLinkClick($event, pageLink - 1)"
                    pRipple
                >
                    {{ getLocalization(pageLink) }}
                </button>
            </span>
            <p-dropdown
                [options]="pageItems"
                [ngModel]="getPage()"
                *ngIf="showJumpToPageDropdown"
                [disabled]="empty()"
                [attr.aria-label]="getAriaLabel('jumpToPageDropdownLabel')"
                styleClass="p-paginator-page-options"
                (onChange)="onPageDropdownChange($event)"
                [appendTo]="dropdownAppendTo"
                [scrollHeight]="dropdownScrollHeight"
            >
                <ng-template pTemplate="selectedItem">{{ currentPageReport }}</ng-template>
                <ng-container *ngIf="jumpToPageItemTemplate">
                    <ng-template let-item pTemplate="item">
                        <ng-container *ngTemplateOutlet="jumpToPageItemTemplate; context: { $implicit: item }"> </ng-container>
                    </ng-template>
                </ng-container>
                <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="dropdownIconTemplate"></ng-container>
                </ng-template>
            </p-dropdown>
            <button
                type="button"
                [disabled]="isLastPage() || empty()"
                (click)="changePageToNext($event)"
                pRipple
                class="p-paginator-next p-paginator-element p-link"
                [ngClass]="{ 'p-disabled': isLastPage() || empty() }"
                [attr.aria-label]="getAriaLabel('nextPageLabel')"
            >
                <AngleRightIcon *ngIf="!nextPageLinkIconTemplate" [styleClass]="'p-paginator-icon'" />
                <span class="p-paginator-icon" *ngIf="nextPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="nextPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <button
                *ngIf="showFirstLastIcon"
                type="button"
                [disabled]="isLastPage() || empty()"
                (click)="changePageToLast($event)"
                pRipple
                class="p-paginator-last p-paginator-element p-link"
                [ngClass]="{ 'p-disabled': isLastPage() || empty() }"
                [attr.aria-label]="getAriaLabel('lastPageLabel')"
            >
                <AngleDoubleRightIcon *ngIf="!lastPageLinkIconTemplate" [styleClass]="'p-paginator-icon'" />
                <span class="p-paginator-icon" *ngIf="lastPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="lastPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <p-inputNumber *ngIf="showJumpToPageInput" [ngModel]="currentPage()" class="p-paginator-page-input" [disabled]="empty()" (ngModelChange)="changePage($event - 1)"></p-inputNumber>
            <p-dropdown
                [options]="rowsPerPageItems"
                [(ngModel)]="rows"
                *ngIf="rowsPerPageOptions"
                styleClass="p-paginator-rpp-options"
                [disabled]="empty()"
                (onChange)="onRppChange($event)"
                [appendTo]="dropdownAppendTo"
                [scrollHeight]="dropdownScrollHeight"
                [ariaLabel]="getAriaLabel('rowsPerPageLabel')"
            >
                <ng-container *ngIf="dropdownItemTemplate">
                    <ng-template let-item pTemplate="item">
                        <ng-container *ngTemplateOutlet="dropdownItemTemplate; context: { $implicit: item }"> </ng-container>
                    </ng-template>
                </ng-container>
                <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="dropdownIconTemplate"></ng-container>
                </ng-template>
            </p-dropdown>
            <div class="p-paginator-right-content" *ngIf="templateRight" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="templateRight; context: { $implicit: paginatorState }"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-paginator{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-page,.p-paginator-next,.p-paginator-last,.p-paginator-first,.p-paginator-prev,.p-paginator-current{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;line-height:1;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-paginator-element:focus{z-index:1;position:relative}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    pageLinkSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    alwaysShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownAppendTo: [{
      type: Input
    }],
    templateLeft: [{
      type: Input
    }],
    templateRight: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    dropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    totalRecords: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    jumpToPageItemTemplate: [{
      type: Input
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    dropdownItemTemplate: [{
      type: Input
    }],
    first: [{
      type: Input
    }],
    onPageChange: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PaginatorModule = class _PaginatorModule {
  static \u0275fac = function PaginatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginatorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PaginatorModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, DropdownModule, InputNumberModule, FormsModule, SharedModule, RippleModule, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon, DropdownModule, InputNumberModule, FormsModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DropdownModule, InputNumberModule, FormsModule, SharedModule, RippleModule, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon],
      exports: [Paginator, DropdownModule, InputNumberModule, FormsModule, SharedModule],
      declarations: [Paginator]
    }]
  }], null, null);
})();

// src/app/shared-components/panel-items/panel-items.component.ts
var _c09 = () => ({ objectFit: "cover" });
function PanelItemsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tabMenu", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("model", ctx_r0.menuItems())("activeItem", ctx_r0.activeItem());
  }
}
function PanelItemsComponent_Conditional_4_For_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "img", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(3, _c09));
    \u0275\u0275property("ngSrc", item_r3.poster_path);
  }
}
function PanelItemsComponent_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function PanelItemsComponent_Conditional_4_For_1_Template_div_click_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.EmitId(item_r3.id, item_r3.type));
    });
    \u0275\u0275elementStart(1, "p-card", 5);
    \u0275\u0275template(2, PanelItemsComponent_Conditional_4_For_1_ng_template_2_Template, 2, 4, "ng-template", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("@fadeIn", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("header", item_r3.original_title || item_r3.original_name);
  }
}
function PanelItemsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PanelItemsComponent_Conditional_4_For_1_Template, 3, 2, "div", 3, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx.results);
  }
}
function PanelItemsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 9)(1, "p-skeleton", 9)(2, "p-skeleton", 9)(3, "p-skeleton", 9)(4, "p-skeleton", 9)(5, "p-skeleton", 9)(6, "p-skeleton", 9)(7, "p-skeleton", 9)(8, "p-skeleton", 9)(9, "p-skeleton", 9)(10, "p-skeleton", 9)(11, "p-skeleton", 9)(12, "p-skeleton", 9)(13, "p-skeleton", 9);
  }
}
function PanelItemsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 10);
    \u0275\u0275listener("onPageChange", function PanelItemsComponent_Conditional_7_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.getIndexPaginator.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("totalRecords", ctx_r0.totalItemsToPaginator())("first", ctx_r0.controlStatePaginator())("rows", ctx_r0.itemsForShowToPaginator())("alwaysShow", false);
  }
}
var PanelItemsComponent = class _PanelItemsComponent {
  constructor() {
    this.menuItems = input();
    this.activeItem = input();
    this.items = input.required();
    this.title = input.required();
    this.getId = output();
    this.getIdAndType = output();
    this.showPaginator = input();
    this.totalItemsToPaginator = input();
    this.controlStatePaginator = input();
    this.itemsForShowToPaginator = input();
    this.getIndexPaginator = output();
  }
  EmitId(id, type) {
    if (type) {
      this.getIdAndType.emit({ id, type });
      return;
    }
    this.getId.emit(id);
  }
  static {
    this.\u0275fac = function PanelItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PanelItemsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelItemsComponent, selectors: [["app-panel-items"]], inputs: { menuItems: [1, "menuItems"], activeItem: [1, "activeItem"], items: [1, "items"], title: [1, "title"], showPaginator: [1, "showPaginator"], totalItemsToPaginator: [1, "totalItemsToPaginator"], controlStatePaginator: [1, "controlStatePaginator"], itemsForShowToPaginator: [1, "itemsForShowToPaginator"] }, outputs: { getId: "getId", getIdAndType: "getIdAndType", getIndexPaginator: "getIndexPaginator" }, decls: 8, vars: 6, consts: [[3, "model", "activeItem"], [1, "grid", "my-3"], [3, "totalRecords", "first", "rows", "alwaysShow"], [1, "select-item", "col-1", "w-14rem", "cursor-pointer", "hover:shadow-7", "transition-duration-200", "m-1"], [1, "select-item", "col-1", "w-14rem", "cursor-pointer", "hover:shadow-7", "transition-duration-200", "m-1", 3, "click"], [1, "card-custom", 3, "header"], ["pTemplate", "header"], [1, "relative", "h-16rem", "w-12rem"], ["alt", "Not found", "fill", "", "priority", "", 3, "ngSrc"], ["height", "16rem", "width", "12rem", 1, "col"], [3, "onPageChange", "totalRecords", "first", "rows", "alwaysShow"]], template: function PanelItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PanelItemsComponent_Conditional_0_Template, 1, 2, "p-tabMenu", 0);
        \u0275\u0275elementStart(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275template(4, PanelItemsComponent_Conditional_4_Template, 2, 0);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275template(6, PanelItemsComponent_Conditional_6_Template, 14, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, PanelItemsComponent_Conditional_7_Template, 1, 4, "p-paginator", 2);
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275conditional(ctx.menuItems() ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(5, 4, ctx.items())) ? 4 : 6, tmp_2_0);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showPaginator() ? 7 : -1);
      }
    }, dependencies: [Card, PrimeTemplate, Skeleton, NgOptimizedImage, TabMenu, Paginator, AsyncPipe], styles: ["\n\n  .card-custom .p-card-title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.select-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=panel-items.component.css.map */"], data: { animation: [
      trigger("fadeIn", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-20px)" }),
          animate("1s", style({ opacity: 1, transform: "translateY(0)" }))
        ])
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelItemsComponent, { className: "PanelItemsComponent", filePath: "src\\app\\shared-components\\panel-items\\panel-items.component.ts", lineNumber: 31 });
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs
var ChevronUpIcon = class _ChevronUpIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronUpIcon_BaseFactory;
    return function ChevronUpIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronUpIcon_BaseFactory || (\u0275ChevronUpIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronUpIcon)))(__ngFactoryType__ || _ChevronUpIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronUpIcon,
    selectors: [["ChevronUpIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z", "fill", "currentColor"]],
    template: function ChevronUpIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronUpIcon, [{
    type: Component,
    args: [{
      selector: "ChevronUpIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-carousel.mjs
var _c010 = ["itemsContainer"];
var _c19 = ["indicatorContent"];
var _c28 = [[["p-header"]], [["p-footer"]]];
var _c37 = ["p-header", "p-footer"];
var _c46 = (a0, a1) => ({
  "p-carousel p-component": true,
  "p-carousel-vertical": a0,
  "p-carousel-horizontal": a1
});
var _c56 = (a0) => ({
  height: a0
});
var _c66 = (a0) => ({
  "p-carousel-prev p-link": true,
  "p-disabled": a0
});
var _c76 = (a0, a1, a2) => ({
  "p-carousel-item p-carousel-item-cloned": true,
  "p-carousel-item-active": a0,
  "p-carousel-item-start": a1,
  "p-carousel-item-end": a2
});
var _c85 = (a0) => ({
  $implicit: a0
});
var _c95 = (a0, a1, a2) => ({
  "p-carousel-item": true,
  "p-carousel-item-active": a0,
  "p-carousel-item-start": a1,
  "p-carousel-item-end": a2
});
var _c105 = (a0) => ({
  "p-carousel-next p-link": true,
  "p-disabled": a0
});
var _c113 = (a0) => ({
  "p-carousel-indicator": true,
  "p-highlight": a0
});
function Carousel_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, Carousel_div_1_ng_container_2_Template, 1, 0, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function Carousel_button_4_ng_container_1_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronLeftIcon", 18);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_4_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronUpIcon", 18);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Carousel_button_4_ng_container_1_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 17)(2, Carousel_button_4_ng_container_1_ChevronUpIcon_2_Template, 1, 1, "ChevronUpIcon", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isVertical());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVertical());
  }
}
function Carousel_button_4_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Carousel_button_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Carousel_button_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_button_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275template(1, Carousel_button_4_span_2_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.previousIconTemplate);
  }
}
function Carousel_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function Carousel_button_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navBackward($event));
    });
    \u0275\u0275template(1, Carousel_button_4_ng_container_1_Template, 3, 2, "ng-container", 15)(2, Carousel_button_4_span_2_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c66, ctx_r1.isBackwardNavDisabled()))("disabled", ctx_r1.isBackwardNavDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.ariaPrevButtonLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.previousIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previousIconTemplate);
  }
}
function Carousel_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, Carousel_div_8_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c76, ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length, 0 === index_r5, ctx_r1.clonedItemsForStarting.length - 1 === index_r5));
    \u0275\u0275attribute("aria-hidden", !(ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length))("aria-label", ctx_r1.ariaSlideNumber(index_r5))("aria-roledescription", ctx_r1.ariaSlideLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c85, item_r4));
  }
}
function Carousel_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, Carousel_div_9_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c95, ctx_r1.firstIndex() <= index_r7 && ctx_r1.lastIndex() >= index_r7, ctx_r1.firstIndex() === index_r7, ctx_r1.lastIndex() === index_r7));
    \u0275\u0275attribute("aria-hidden", !(ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length))("aria-label", ctx_r1.ariaSlideNumber(index_r7))("aria-roledescription", ctx_r1.ariaSlideLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c85, item_r6));
  }
}
function Carousel_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, Carousel_div_10_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(3, _c76, ctx_r1.totalShiftedItems * -1 === ctx_r1.numVisible, 0 === index_r9, ctx_r1.clonedItemsForFinishing.length - 1 === index_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c85, item_r8));
  }
}
function Carousel_button_11_ng_container_1_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronRightIcon", 18);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_11_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon", 18);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Carousel_button_11_ng_container_1_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 17)(2, Carousel_button_11_ng_container_1_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isVertical());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVertical());
  }
}
function Carousel_button_11_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Carousel_button_11_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Carousel_button_11_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_button_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275template(1, Carousel_button_11_span_2_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nextIconTemplate);
  }
}
function Carousel_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function Carousel_button_11_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navForward($event));
    });
    \u0275\u0275template(1, Carousel_button_11_ng_container_1_Template, 3, 2, "ng-container", 15)(2, Carousel_button_11_span_2_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c105, ctx_r1.isForwardNavDisabled()))("disabled", ctx_r1.isForwardNavDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.ariaNextButtonLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.nextIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nextIconTemplate);
  }
}
function Carousel_ul_12_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 4)(1, "button", 22);
    \u0275\u0275listener("click", function Carousel_ul_12_li_2_Template_button_click_1_listener($event) {
      const i_r13 = \u0275\u0275restoreView(_r12).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDotClick($event, i_r13));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c113, ctx_r1._page === i_r13));
    \u0275\u0275attribute("data-pc-section", "indicator");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.indicatorStyleClass);
    \u0275\u0275property("ngClass", "p-link")("ngStyle", ctx_r1.indicatorStyle)("tabindex", ctx_r1._page === i_r13 ? 0 : -1);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaPageLabel(i_r13 + 1))("aria-current", ctx_r1._page === i_r13 ? "page" : void 0);
  }
}
function Carousel_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 21, 1);
    \u0275\u0275listener("keydown", function Carousel_ul_12_Template_ul_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onIndicatorKeydown($event));
    });
    \u0275\u0275template(2, Carousel_ul_12_li_2_Template, 2, 11, "li", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.indicatorsContentClass);
    \u0275\u0275property("ngClass", "p-carousel-indicators p-reset")("ngStyle", ctx_r1.indicatorsContentStyle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.totalDotsArray());
  }
}
function Carousel_div_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, Carousel_div_13_ng_container_2_Template, 1, 0, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
var Carousel = class _Carousel {
  el;
  zone;
  cd;
  renderer;
  document;
  platformId;
  config;
  updateSlideAccessibility(slide, isActive) {
    const focusableElements = slide.querySelectorAll("a, button, input, select, textarea, [tabindex]");
    focusableElements.forEach((element) => {
      element.tabIndex = isActive ? 0 : -1;
    });
  }
  updateCarouselItemsAccessibility() {
    const slides = this.el.nativeElement.querySelectorAll(".p-carousel-item");
    slides.forEach((slide, index) => {
      const isActive = index === this._page;
      slide.setAttribute("aria-hidden", !isActive ? "true" : "false");
      this.updateSlideAccessibility(slide, isActive);
    });
  }
  /**
   * Index of the first item.
   * @defaultValue 0
   * @group Props
   */
  get page() {
    return this._page;
  }
  set page(val) {
    if (this.isCreated && val !== this._page) {
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (val > this._page && val <= this.totalDots() - 1) {
        this.step(-1, val);
      } else if (val < this._page) {
        this.step(1, val);
      }
    }
    this._page = val;
  }
  /**
   * Number of items per page.
   * @defaultValue 1
   * @group Props
   */
  get numVisible() {
    return this._numVisible;
  }
  set numVisible(val) {
    this._numVisible = val;
  }
  /**
   * Number of items to scroll.
   * @defaultValue 1
   * @group Props
   */
  get numScroll() {
    return this._numVisible;
  }
  set numScroll(val) {
    this._numScroll = val;
  }
  /**
   * An array of options for responsive design.
   * @see {CarouselResponsiveOptions}
   * @group Props
   */
  responsiveOptions;
  /**
   * Specifies the layout of the component.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Height of the viewport in vertical layout.
   * @group Props
   */
  verticalViewPortHeight = "300px";
  /**
   * Style class of main content.
   * @group Props
   */
  contentClass = "";
  /**
   * Style class of the indicator items.
   * @group Props
   */
  indicatorsContentClass = "";
  /**
   * Inline style of the indicator items.
   * @group Props
   */
  indicatorsContentStyle;
  /**
   * Style class of the indicators.
   * @group Props
   */
  indicatorStyleClass = "";
  /**
   * Style of the indicators.
   * @group Props
   */
  indicatorStyle;
  /**
   * An array of objects to display.
   * @defaultValue null
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  /**
   * Defines if scrolling would be infinite.
   * @group Props
   */
  circular = false;
  /**
   * Whether to display indicator container.
   * @group Props
   */
  showIndicators = true;
  /**
   * Whether to display navigation buttons in container.
   * @group Props
   */
  showNavigators = true;
  /**
   * Time in milliseconds to scroll items automatically.
   * @group Props
   */
  autoplayInterval = 0;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the viewport container.
   * @group Props
   */
  styleClass;
  /**
   * Callback to invoke after scroll.
   * @param {CarouselPageEvent} event - Custom page event.
   * @group Emits
   */
  onPage = new EventEmitter();
  itemsContainer;
  indicatorContent;
  headerFacet;
  footerFacet;
  templates;
  _numVisible = 1;
  _numScroll = 1;
  _oldNumScroll = 0;
  prevState = {
    numScroll: 0,
    numVisible: 0,
    value: []
  };
  defaultNumScroll = 1;
  defaultNumVisible = 1;
  _page = 0;
  _value;
  carouselStyle;
  id;
  totalShiftedItems;
  isRemainingItemsAdded = false;
  animationTimeout;
  translateTimeout;
  remainingItems = 0;
  _items;
  startPos;
  documentResizeListener;
  clonedItemsForStarting;
  clonedItemsForFinishing;
  allowAutoplay;
  interval;
  isCreated;
  swipeThreshold = 20;
  itemTemplate;
  headerTemplate;
  footerTemplate;
  previousIconTemplate;
  nextIconTemplate;
  window;
  constructor(el, zone, cd, renderer, document2, platformId, config) {
    this.el = el;
    this.zone = zone;
    this.cd = cd;
    this.renderer = renderer;
    this.document = document2;
    this.platformId = platformId;
    this.config = config;
    this.totalShiftedItems = this.page * this.numScroll * -1;
    this.window = this.document.defaultView;
  }
  ngOnChanges(simpleChange) {
    if (isPlatformBrowser(this.platformId)) {
      if (simpleChange.value) {
        if (this.circular && this._value) {
          this.setCloneItems();
        }
      }
      if (this.isCreated) {
        if (simpleChange.numVisible) {
          if (this.responsiveOptions) {
            this.defaultNumVisible = this.numVisible;
          }
          if (this.isCircular()) {
            this.setCloneItems();
          }
          this.createStyle();
          this.calculatePosition();
        }
        if (simpleChange.numScroll) {
          if (this.responsiveOptions) {
            this.defaultNumScroll = this.numScroll;
          }
        }
      }
    }
    this.cd.markForCheck();
  }
  ngAfterContentInit() {
    this.id = UniqueComponentId();
    if (isPlatformBrowser(this.platformId)) {
      this.allowAutoplay = !!this.autoplayInterval;
      if (this.circular) {
        this.setCloneItems();
      }
      if (this.responsiveOptions) {
        this.defaultNumScroll = this._numScroll;
        this.defaultNumVisible = this._numVisible;
      }
      this.createStyle();
      this.calculatePosition();
      if (this.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "previousicon":
          this.previousIconTemplate = item.template;
          break;
        case "nexticon":
          this.nextIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
    this.cd.detectChanges();
  }
  ngAfterContentChecked() {
    if (isPlatformBrowser(this.platformId)) {
      const isCircular = this.isCircular();
      let totalShiftedItems = this.totalShiftedItems;
      if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
        if (this.autoplayInterval) {
          this.stopAutoplay(false);
        }
        this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
        let page = this._page;
        if (this.totalDots() !== 0 && page >= this.totalDots()) {
          page = this.totalDots() - 1;
          this._page = page;
          this.onPage.emit({
            page: this.page
          });
        }
        totalShiftedItems = page * this._numScroll * -1;
        if (isCircular) {
          totalShiftedItems -= this._numVisible;
        }
        if (page === this.totalDots() - 1 && this.remainingItems > 0) {
          totalShiftedItems += -1 * this.remainingItems + this._numScroll;
          this.isRemainingItemsAdded = true;
        } else {
          this.isRemainingItemsAdded = false;
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }
        this._oldNumScroll = this._numScroll;
        this.prevState.numScroll = this._numScroll;
        this.prevState.numVisible = this._numVisible;
        this.prevState.value = [...this._value];
        if (this.totalDots() > 0 && this.itemsContainer.nativeElement) {
          this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
        }
        this.isCreated = true;
        if (this.autoplayInterval && this.isAutoplay()) {
          this.startAutoplay();
        }
      }
      if (isCircular) {
        if (this.page === 0) {
          totalShiftedItems = -1 * this._numVisible;
        } else if (totalShiftedItems === 0) {
          totalShiftedItems = -1 * this.value.length;
          if (this.remainingItems > 0) {
            this.isRemainingItemsAdded = true;
          }
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }
      }
    }
  }
  createStyle() {
    if (!this.carouselStyle) {
      this.carouselStyle = this.renderer.createElement("style");
      this.carouselStyle.type = "text/css";
      DomHandler.setAttribute(this.carouselStyle, "nonce", this.config?.csp()?.nonce);
      this.renderer.appendChild(this.document.head, this.carouselStyle);
    }
    let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100 / this.numVisible}%
			}
        `;
    if (this.responsiveOptions) {
      this.responsiveOptions.sort((data1, data2) => {
        const value1 = data1.breakpoint;
        const value2 = data2.breakpoint;
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, void 0, {
          numeric: true
        });
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });
      for (let i = 0; i < this.responsiveOptions.length; i++) {
        let res = this.responsiveOptions[i];
        innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
      }
    }
    this.carouselStyle.innerHTML = innerHTML;
  }
  calculatePosition() {
    if (this.responsiveOptions) {
      let matchedResponsiveData = {
        numVisible: this.defaultNumVisible,
        numScroll: this.defaultNumScroll
      };
      if (typeof window !== "undefined") {
        let windowWidth = window.innerWidth;
        for (let i = 0; i < this.responsiveOptions.length; i++) {
          let res = this.responsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
      }
      if (this._numScroll !== matchedResponsiveData.numScroll) {
        let page = this._page;
        page = Math.floor(page * this._numScroll / matchedResponsiveData.numScroll);
        let totalShiftedItems = matchedResponsiveData.numScroll * this.page * -1;
        if (this.isCircular()) {
          totalShiftedItems -= matchedResponsiveData.numVisible;
        }
        this.totalShiftedItems = totalShiftedItems;
        this._numScroll = matchedResponsiveData.numScroll;
        this._page = page;
        this.onPage.emit({
          page: this.page
        });
      }
      if (this._numVisible !== matchedResponsiveData.numVisible) {
        this._numVisible = matchedResponsiveData.numVisible;
        this.setCloneItems();
      }
      this.cd.markForCheck();
    }
  }
  setCloneItems() {
    this.clonedItemsForStarting = [];
    this.clonedItemsForFinishing = [];
    if (this.isCircular()) {
      this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
      this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
    }
  }
  firstIndex() {
    return this.isCircular() ? -1 * (this.totalShiftedItems + this.numVisible) : this.totalShiftedItems * -1;
  }
  lastIndex() {
    return this.firstIndex() + this.numVisible - 1;
  }
  totalDots() {
    return this.value?.length ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
  }
  totalDotsArray() {
    const totalDots = this.totalDots();
    return totalDots <= 0 ? [] : Array(totalDots).fill(0);
  }
  isVertical() {
    return this.orientation === "vertical";
  }
  isCircular() {
    return this.circular && this.value && this.value.length >= this.numVisible;
  }
  isAutoplay() {
    return this.autoplayInterval && this.allowAutoplay;
  }
  isForwardNavDisabled() {
    return this.isEmpty() || this._page >= this.totalDots() - 1 && !this.isCircular();
  }
  isBackwardNavDisabled() {
    return this.isEmpty() || this._page <= 0 && !this.isCircular();
  }
  isEmpty() {
    return !this.value || this.value.length === 0;
  }
  navForward(e, index) {
    if (this.isCircular() || this._page < this.totalDots() - 1) {
      this.step(-1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e, index) {
    if (this.isCircular() || this._page !== 0) {
      this.step(1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  onDotClick(e, index) {
    let page = this._page;
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (index > page) {
      this.navForward(e, index);
    } else if (index < page) {
      this.navBackward(e, index);
    }
  }
  onIndicatorKeydown(event) {
    switch (event.code) {
      case "ArrowRight":
        this.onRightKey();
        break;
      case "ArrowLeft":
        this.onLeftKey();
        break;
    }
  }
  onRightKey() {
    const indicators = [...DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
  }
  onLeftKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
  }
  onHomeKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, 0);
  }
  onEndKey() {
    const indicators = [...DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]r')];
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, indicators.length - 1);
  }
  onTabKey() {
    const indicators = [...DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
    const highlightedIndex = indicators.findIndex((ind) => DomHandler.getAttribute(ind, "data-p-highlight") === true);
    const activeIndicator = DomHandler.findSingle(this.indicatorContent.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
    const activeIndex = indicators.findIndex((ind) => ind === activeIndicator.parentElement);
    indicators[activeIndex].children[0].tabIndex = "-1";
    indicators[highlightedIndex].children[0].tabIndex = "0";
  }
  findFocusedIndicatorIndex() {
    const indicators = [...DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
    const activeIndicator = DomHandler.findSingle(this.indicatorContent.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
    return indicators.findIndex((ind) => ind === activeIndicator.parentElement);
  }
  changedFocusedIndicator(prevInd, nextInd) {
    const indicators = [...DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
    indicators[prevInd].children[0].tabIndex = "-1";
    indicators[nextInd].children[0].tabIndex = "0";
    indicators[nextInd].children[0].focus();
  }
  step(dir, page) {
    let totalShiftedItems = this.totalShiftedItems;
    const isCircular = this.isCircular();
    if (page != null) {
      totalShiftedItems = this._numScroll * page * -1;
      if (isCircular) {
        totalShiftedItems -= this._numVisible;
      }
      this.isRemainingItemsAdded = false;
    } else {
      totalShiftedItems += this._numScroll * dir;
      if (this.isRemainingItemsAdded) {
        totalShiftedItems += this.remainingItems - this._numScroll * dir;
        this.isRemainingItemsAdded = false;
      }
      let originalShiftedItems = isCircular ? totalShiftedItems + this._numVisible : totalShiftedItems;
      page = Math.abs(Math.floor(originalShiftedItems / this._numScroll));
    }
    if (isCircular && this.page === this.totalDots() - 1 && dir === -1) {
      totalShiftedItems = -1 * (this.value.length + this._numVisible);
      page = 0;
    } else if (isCircular && this.page === 0 && dir === 1) {
      totalShiftedItems = 0;
      page = this.totalDots() - 1;
    } else if (page === this.totalDots() - 1 && this.remainingItems > 0) {
      totalShiftedItems += this.remainingItems * -1 - this._numScroll * dir;
      this.isRemainingItemsAdded = true;
    }
    if (this.itemsContainer) {
      this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s";
    }
    this.totalShiftedItems = totalShiftedItems;
    this._page = page;
    this.onPage.emit({
      page: this.page
    });
    this.cd.markForCheck();
    this.updateCarouselItemsAccessibility();
  }
  startAutoplay() {
    this.interval = setInterval(() => {
      if (this.totalDots() > 0) {
        if (this.page === this.totalDots() - 1) {
          this.step(-1, 0);
        } else {
          this.step(-1, this.page + 1);
        }
      }
    }, this.autoplayInterval);
    this.allowAutoplay = true;
    this.cd.markForCheck();
  }
  stopAutoplay(changeAllow = true) {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = void 0;
      if (changeAllow) {
        this.allowAutoplay = false;
      }
    }
    this.cd.markForCheck();
  }
  isPlaying() {
    return !!this.interval;
  }
  onTransitionEnd() {
    if (this.itemsContainer) {
      this.itemsContainer.nativeElement.style.transition = "";
      if ((this.page === 0 || this.page === this.totalDots() - 1) && this.isCircular()) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      }
    }
  }
  onTouchStart(e) {
    let touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }
  onTouchMove(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onTouchEnd(e) {
    let touchobj = e.changedTouches[0];
    if (this.isVertical()) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  }
  changePageOnTouch(e, diff) {
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff < 0) {
        this.navForward(e);
      } else {
        this.navBackward(e);
      }
    }
  }
  ariaPrevButtonLabel() {
    return this.config.translation.aria ? this.config.translation.aria.prevPageLabel : void 0;
  }
  ariaSlideLabel() {
    return this.config.translation.aria ? this.config.translation.aria.slide : void 0;
  }
  ariaNextButtonLabel() {
    return this.config.translation.aria ? this.config.translation.aria.nextPageLabel : void 0;
  }
  ariaSlideNumber(value) {
    return this.config.translation.aria ? this.config.translation.aria.slideNumber.replace(/{slideNumber}/g, value) : void 0;
  }
  ariaPageLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, value) : void 0;
  }
  bindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        this.documentResizeListener = this.renderer.listen(this.window, "resize", (event) => {
          this.calculatePosition();
        });
      }
    }
  }
  unbindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
  }
  ngOnDestroy() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
  }
  static \u0275fac = function Carousel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Carousel)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Carousel,
    selectors: [["p-carousel"]],
    contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Carousel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c010, 5);
        \u0275\u0275viewQuery(_c19, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.indicatorContent = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      page: "page",
      numVisible: "numVisible",
      numScroll: "numScroll",
      responsiveOptions: "responsiveOptions",
      orientation: "orientation",
      verticalViewPortHeight: "verticalViewPortHeight",
      contentClass: "contentClass",
      indicatorsContentClass: "indicatorsContentClass",
      indicatorsContentStyle: "indicatorsContentStyle",
      indicatorStyleClass: "indicatorStyleClass",
      indicatorStyle: "indicatorStyle",
      value: "value",
      circular: [2, "circular", "circular", booleanAttribute],
      showIndicators: [2, "showIndicators", "showIndicators", booleanAttribute],
      showNavigators: [2, "showNavigators", "showNavigators", booleanAttribute],
      autoplayInterval: [2, "autoplayInterval", "autoplayInterval", numberAttribute],
      style: "style",
      styleClass: "styleClass"
    },
    outputs: {
      onPage: "onPage"
    },
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c37,
    decls: 14,
    vars: 23,
    consts: [["itemsContainer", ""], ["indicatorContent", ""], ["role", "region", 3, "ngClass", "ngStyle"], ["class", "p-carousel-header", 4, "ngIf"], [3, "ngClass"], [1, "p-carousel-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-carousel-items-content", 3, "touchend", "touchstart", "touchmove", "ngStyle"], [1, "p-carousel-items-container", 3, "transitionend"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass", "class", "ngStyle", "keydown", 4, "ngIf"], ["class", "p-carousel-footer", 4, "ngIf"], [1, "p-carousel-header"], [4, "ngTemplateOutlet"], ["type", "button", "pRipple", "", 3, "click", "ngClass", "disabled"], [4, "ngIf"], ["class", "p-carousel-prev-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-carousel-prev-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "keydown", "ngClass", "ngStyle"], ["type", "button", 3, "click", "ngClass", "ngStyle", "tabindex"], [1, "p-carousel-footer"]],
    template: function Carousel_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c28);
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, Carousel_div_1_Template, 3, 1, "div", 3);
        \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
        \u0275\u0275template(4, Carousel_button_4_Template, 3, 7, "button", 6);
        \u0275\u0275elementStart(5, "div", 7);
        \u0275\u0275listener("touchend", function Carousel_Template_div_touchend_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTouchEnd($event));
        })("touchstart", function Carousel_Template_div_touchstart_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTouchStart($event));
        })("touchmove", function Carousel_Template_div_touchmove_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTouchMove($event));
        });
        \u0275\u0275elementStart(6, "div", 8, 0);
        \u0275\u0275listener("transitionend", function Carousel_Template_div_transitionend_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTransitionEnd());
        });
        \u0275\u0275template(8, Carousel_div_8_Template, 2, 12, "div", 9)(9, Carousel_div_9_Template, 2, 12, "div", 9)(10, Carousel_div_10_Template, 2, 9, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, Carousel_button_11_Template, 3, 7, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, Carousel_ul_12_Template, 3, 5, "ul", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, Carousel_div_13_Template, 3, 1, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(18, _c46, ctx.isVertical(), !ctx.isVertical()))("ngStyle", ctx.style);
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.headerFacet || ctx.headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.contentClass);
        \u0275\u0275property("ngClass", "p-carousel-content");
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-live", ctx.allowAutoplay ? "polite" : "off");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNavigators);
        \u0275\u0275advance();
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(21, _c56, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.clonedItemsForStarting);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.clonedItemsForFinishing);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNavigators);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showIndicators);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon],
    styles: ["@layer primeng{.p-carousel{display:flex;flex-direction:column}.p-carousel-content{display:flex;flex-direction:column;overflow:auto}.p-carousel-prev,.p-carousel-next{align-self:center;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.p-carousel-indicator>button{display:flex;align-items:center;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Carousel, [{
    type: Component,
    args: [{
      selector: "p-carousel",
      template: `
        <div [attr.id]="id" [ngClass]="{ 'p-carousel p-component': true, 'p-carousel-vertical': isVertical(), 'p-carousel-horizontal': !isVertical() }" [ngStyle]="style" [class]="styleClass" role="region">
            <div class="p-carousel-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div [class]="contentClass" [ngClass]="'p-carousel-content'">
                <div class="p-carousel-container" [attr.aria-live]="allowAutoplay ? 'polite' : 'off'">
                    <button
                        type="button"
                        *ngIf="showNavigators"
                        [ngClass]="{ 'p-carousel-prev p-link': true, 'p-disabled': isBackwardNavDisabled() }"
                        [disabled]="isBackwardNavDisabled()"
                        [attr.aria-label]="ariaPrevButtonLabel()"
                        (click)="navBackward($event)"
                        pRipple
                    >
                        <ng-container *ngIf="!previousIconTemplate">
                            <ChevronLeftIcon *ngIf="!isVertical()" [styleClass]="'carousel-prev-icon'" />
                            <ChevronUpIcon *ngIf="isVertical()" [styleClass]="'carousel-prev-icon'" />
                        </ng-container>
                        <span *ngIf="previousIconTemplate" class="p-carousel-prev-icon">
                            <ng-template *ngTemplateOutlet="previousIconTemplate"></ng-template>
                        </span>
                    </button>
                    <div class="p-carousel-items-content" [ngStyle]="{ height: isVertical() ? verticalViewPortHeight : 'auto' }" (touchend)="onTouchEnd($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)">
                        <div #itemsContainer class="p-carousel-items-container" (transitionend)="onTransitionEnd()">
                            <div
                                *ngFor="let item of clonedItemsForStarting; let index = index"
                                [ngClass]="{
                                    'p-carousel-item p-carousel-item-cloned': true,
                                    'p-carousel-item-active': totalShiftedItems * -1 === value.length,
                                    'p-carousel-item-start': 0 === index,
                                    'p-carousel-item-end': clonedItemsForStarting.length - 1 === index
                                }"
                                [attr.aria-hidden]="!(totalShiftedItems * -1 === value.length)"
                                [attr.aria-label]="ariaSlideNumber(index)"
                                [attr.aria-roledescription]="ariaSlideLabel()"
                            >
                                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                            </div>
                            <div
                                *ngFor="let item of value; let index = index"
                                [ngClass]="{ 'p-carousel-item': true, 'p-carousel-item-active': firstIndex() <= index && lastIndex() >= index, 'p-carousel-item-start': firstIndex() === index, 'p-carousel-item-end': lastIndex() === index }"
                                [attr.aria-hidden]="!(totalShiftedItems * -1 === value.length)"
                                [attr.aria-label]="ariaSlideNumber(index)"
                                [attr.aria-roledescription]="ariaSlideLabel()"
                            >
                                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                            </div>
                            <div
                                *ngFor="let item of clonedItemsForFinishing; let index = index"
                                [ngClass]="{
                                    'p-carousel-item p-carousel-item-cloned': true,
                                    'p-carousel-item-active': totalShiftedItems * -1 === numVisible,
                                    'p-carousel-item-start': 0 === index,
                                    'p-carousel-item-end': clonedItemsForFinishing.length - 1 === index
                                }"
                            >
                                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        *ngIf="showNavigators"
                        [ngClass]="{ 'p-carousel-next p-link': true, 'p-disabled': isForwardNavDisabled() }"
                        [disabled]="isForwardNavDisabled()"
                        (click)="navForward($event)"
                        pRipple
                        [attr.aria-label]="ariaNextButtonLabel()"
                    >
                        <ng-container *ngIf="!nextIconTemplate">
                            <ChevronRightIcon *ngIf="!isVertical()" [styleClass]="'carousel-prev-icon'" />
                            <ChevronDownIcon *ngIf="isVertical()" [styleClass]="'carousel-prev-icon'" />
                        </ng-container>
                        <span *ngIf="nextIconTemplate" class="p-carousel-prev-icon">
                            <ng-template *ngTemplateOutlet="nextIconTemplate"></ng-template>
                        </span>
                    </button>
                </div>
                <ul #indicatorContent [ngClass]="'p-carousel-indicators p-reset'" [class]="indicatorsContentClass" [ngStyle]="indicatorsContentStyle" *ngIf="showIndicators" (keydown)="onIndicatorKeydown($event)">
                    <li *ngFor="let totalDot of totalDotsArray(); let i = index" [ngClass]="{ 'p-carousel-indicator': true, 'p-highlight': _page === i }" [attr.data-pc-section]="'indicator'">
                        <button
                            type="button"
                            [ngClass]="'p-link'"
                            (click)="onDotClick($event, i)"
                            [class]="indicatorStyleClass"
                            [ngStyle]="indicatorStyle"
                            [attr.aria-label]="ariaPageLabel(i + 1)"
                            [attr.aria-current]="_page === i ? 'page' : undefined"
                            [tabindex]="_page === i ? 0 : -1"
                        ></button>
                    </li>
                </ul>
            </div>
            <div class="p-carousel-footer" *ngIf="footerFacet || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-carousel{display:flex;flex-direction:column}.p-carousel-content{display:flex;flex-direction:column;overflow:auto}.p-carousel-prev,.p-carousel-next{align-self:center;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.p-carousel-indicator>button{display:flex;align-items:center;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
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
    type: PrimeNGConfig
  }], {
    page: [{
      type: Input
    }],
    numVisible: [{
      type: Input
    }],
    numScroll: [{
      type: Input
    }],
    responsiveOptions: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    verticalViewPortHeight: [{
      type: Input
    }],
    contentClass: [{
      type: Input
    }],
    indicatorsContentClass: [{
      type: Input
    }],
    indicatorsContentStyle: [{
      type: Input
    }],
    indicatorStyleClass: [{
      type: Input
    }],
    indicatorStyle: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIndicators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoplayInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    onPage: [{
      type: Output
    }],
    itemsContainer: [{
      type: ViewChild,
      args: ["itemsContainer"]
    }],
    indicatorContent: [{
      type: ViewChild,
      args: ["indicatorContent"]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CarouselModule = class _CarouselModule {
  static \u0275fac = function CarouselModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CarouselModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule, RippleModule, ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon, CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, RippleModule, ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon],
      exports: [CommonModule, Carousel, SharedModule],
      declarations: [Carousel]
    }]
  }], null, null);
})();

// src/app/shared-components/list-items/list-items.component.ts
var _c011 = () => ({ objectFit: "contain" });
function ListItemsComponent_Conditional_1_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title());
  }
}
function ListItemsComponent_Conditional_1_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function ListItemsComponent_Conditional_1_Conditional_0_ng_template_2_Template_div_click_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.EmitId(item_r3.id, item_r3.type));
    });
    \u0275\u0275element(1, "img", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("@fadeIn", void 0);
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c011));
    \u0275\u0275property("title", item_r3.original_title || item_r3.original_name || item_r3.title)("ngSrc", item_r3.poster_path);
  }
}
function ListItemsComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-carousel", 1);
    \u0275\u0275template(1, ListItemsComponent_Conditional_1_Conditional_0_ng_template_1_Template, 2, 1, "ng-template", 2)(2, ListItemsComponent_Conditional_1_Conditional_0_ng_template_2_Template, 2, 6, "ng-template", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("value", items_r4.results)("numVisible", 8)("numScroll", 1)("showIndicators", false)("circular", false);
  }
}
function ListItemsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ListItemsComponent_Conditional_1_Conditional_0_Template, 3, 5, "p-carousel", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.results.length ? 0 : -1);
  }
}
function ListItemsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 6);
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275element(2, "p-skeleton", 8)(3, "p-skeleton", 8)(4, "p-skeleton", 8)(5, "p-skeleton", 8)(6, "p-skeleton", 8)(7, "p-skeleton", 8)(8, "p-skeleton", 8)(9, "p-skeleton", 8);
    \u0275\u0275elementEnd();
  }
}
var ListItemsComponent = class _ListItemsComponent {
  constructor() {
    this.items = input.required();
    this.title = input.required();
    this.getId = output();
    this.getIdAndType = output();
  }
  EmitId(id, type) {
    if (type) {
      return this.getIdAndType.emit({ id, type });
    }
    this.getId.emit(id);
  }
  static {
    this.\u0275fac = function ListItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListItemsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListItemsComponent, selectors: [["app-list-items"]], inputs: { items: [1, "items"], title: [1, "title"] }, outputs: { getId: "getId", getIdAndType: "getIdAndType" }, decls: 4, vars: 3, consts: [[1, "my-4"], [3, "value", "numVisible", "numScroll", "showIndicators", "circular"], ["pTemplate", "header"], ["pTemplate", "item"], [1, "relative", "h-20rem", "cursor-pointer", "custom", "mr-2", 3, "click"], ["fill", "", "loading", "lazy", "alt", "poster", 3, "title", "ngSrc"], ["width", "7rem"], [1, "flex", "flex-row", "mt-3", "overflow-hidden", "h-22rem"], ["width", "12rem", "height", "100%", 1, "mr-2"]], template: function ListItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ListItemsComponent_Conditional_1_Template, 1, 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275template(3, ListItemsComponent_Conditional_3_Template, 10, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(2, 1, ctx.items())) ? 1 : 3, tmp_0_0);
      }
    }, dependencies: [PrimeTemplate, Skeleton, Carousel, NgOptimizedImage, AsyncPipe], styles: ["\n\n[_nghost-%COMP%]     .p-carousel-items-content .p-carousel-item {\n  flex: 0 0 12.5% !important;\n}\n/*# sourceMappingURL=list-items.component.css.map */"], data: { animation: [
      trigger("fadeIn", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-20px)" }),
          animate("1s", style({ opacity: 1, transform: "translateY(0)" }))
        ])
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListItemsComponent, { className: "ListItemsComponent", filePath: "src\\app\\shared-components\\list-items\\list-items.component.ts", lineNumber: 27 });
})();

// src/app/shared-components/show-images/show-images.component.ts
var _c012 = () => ({ "width": "100%", "height": "100%" });
function ShowImagesComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "img", 2);
    \u0275\u0275listener("click", function ShowImagesComponent_Conditional_1_For_1_Template_img_click_1_listener() {
      const photo_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.getImage.emit(photo_r2.image));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", photo_r2.image, \u0275\u0275sanitizeUrl);
  }
}
function ShowImagesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ShowImagesComponent_Conditional_1_For_1_Template, 2, 1, "div", 1, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx.results);
  }
}
function ShowImagesComponent_Conditional_3_Template(rf, ctx) {
}
var ShowImagesComponent = class _ShowImagesComponent {
  constructor() {
    this.title = input.required();
    this.isActive = false;
    this.isActiveChange = new EventEmitter();
    this.images$ = input.required();
    this.getImage = output();
  }
  onValueChange(newValue) {
    this.isActiveChange.emit(newValue);
  }
  static {
    this.\u0275fac = function ShowImagesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowImagesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowImagesComponent, selectors: [["app-show-images"]], inputs: { title: [1, "title"], isActive: "isActive", images$: [1, "images$"] }, outputs: { isActiveChange: "isActiveChange", getImage: "getImage" }, decls: 4, vars: 7, consts: [["header", "Select photo", 3, "visibleChange", "visible"], [1, "h-10rem", "inline-block", "m-3", "cursor-pointer", "hover:shadow-8"], ["alt", "Not found", 1, "h-full", "border-round", "select-profile", 3, "click", "src"]], template: function ShowImagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-dialog", 0);
        \u0275\u0275listener("visibleChange", function ShowImagesComponent_Template_p_dialog_visibleChange_0_listener($event) {
          return ctx.isActiveChange.emit($event);
        });
        \u0275\u0275template(1, ShowImagesComponent_Conditional_1_Template, 2, 0);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275template(3, ShowImagesComponent_Conditional_3_Template, 0, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c012));
        \u0275\u0275property("visible", ctx.isActive);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(2, 4, ctx.images$())) ? 1 : 3, tmp_2_0);
      }
    }, dependencies: [Dialog, AsyncPipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowImagesComponent, { className: "ShowImagesComponent", filePath: "src\\app\\shared-components\\show-images\\show-images.component.ts", lineNumber: 10 });
})();

// src/app/shared-components/shared-components.module.ts
var SharedComponentsModule = class _SharedComponentsModule {
  static {
    this.\u0275fac = function SharedComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedComponentsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedComponentsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      CardModule,
      ButtonModule,
      SkeletonModule,
      CarouselModule,
      DialogModule,
      TabMenuModule,
      PaginatorModule
    ] });
  }
};

export {
  Skeleton,
  SkeletonModule,
  Dialog,
  DialogModule,
  ShowImagesComponent,
  CheckIcon,
  Carousel,
  CarouselModule,
  ListItemsComponent,
  AngleRightIcon,
  AngleDownIcon,
  Paginator,
  PaginatorModule,
  PanelItemsComponent,
  SharedComponentsModule
};
//# sourceMappingURL=chunk-FLF2A32M.js.map
