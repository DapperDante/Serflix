import {
  AutoFocus,
  AutoFocusModule,
  Button,
  ButtonDirective,
  ButtonModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DOCUMENT,
  DomHandler,
  ElementRef,
  EventEmitter,
  FormsModule,
  Inject,
  Injectable,
  Injector,
  Input,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControl,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  Output,
  PrimeNGConfig,
  PrimeTemplate,
  Renderer2,
  Ripple,
  RippleModule,
  SharedModule,
  Subject,
  TimesIcon,
  Tooltip,
  TooltipModule,
  ViewChild,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  animate,
  animation,
  booleanAttribute,
  effect,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  signal,
  style,
  transition,
  trigger,
  useAnimation,
  zindexutils,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-RIN3RA4U.js";

// node_modules/primeng/fesm2022/primeng-sidebar.mjs
var _c0 = ["*"];
var _c1 = (a0, a1, a2, a3, a4, a5) => ({
  "p-sidebar": true,
  "p-sidebar-active": a0,
  "p-sidebar-left": a1,
  "p-sidebar-right": a2,
  "p-sidebar-top": a3,
  "p-sidebar-bottom": a4,
  "p-sidebar-full": a5
});
var _c2 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c3 = (a0) => ({
  value: "visible",
  params: a0
});
function Sidebar_div_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Sidebar_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Sidebar_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Sidebar_div_0_ng_template_3_button_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-sidebar-close-icon");
    \u0275\u0275attribute("data-pc-section", "closeicon");
  }
}
function Sidebar_div_0_ng_template_3_button_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Sidebar_div_0_ng_template_3_button_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Sidebar_div_0_ng_template_3_button_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Sidebar_div_0_ng_template_3_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275template(1, Sidebar_div_0_ng_template_3_button_2_span_2_1_Template, 1, 0, null, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("data-pc-section", "closeicon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function Sidebar_div_0_ng_template_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function Sidebar_div_0_ng_template_3_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown.enter", function Sidebar_div_0_ng_template_3_button_2_Template_button_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    });
    \u0275\u0275template(1, Sidebar_div_0_ng_template_3_button_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 11)(2, Sidebar_div_0_ng_template_3_button_2_span_2_Template, 2, 2, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaCloseLabel)("data-pc-section", "closebutton")("data-pc-group-section", "iconcontainer");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.closeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closeIconTemplate);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275template(2, Sidebar_div_0_ng_template_3_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "footer");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
function Sidebar_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, Sidebar_div_0_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 5)(2, Sidebar_div_0_ng_template_3_button_2_Template, 3, 5, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275projection(4);
    \u0275\u0275template(5, Sidebar_div_0_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Sidebar_div_0_ng_template_3_ng_container_6_Template, 3, 2, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "header");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCloseIcon);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.footerTemplate);
  }
}
function Sidebar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3, 0);
    \u0275\u0275listener("@panelState.start", function Sidebar_div_0_Template_div_animation_panelState_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@panelState.done", function Sidebar_div_0_Template_div_animation_panelState_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    })("keydown", function Sidebar_div_0_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event));
    });
    \u0275\u0275template(2, Sidebar_div_0_ng_container_2_Template, 2, 1, "ng-container", 4)(3, Sidebar_div_0_ng_template_3_Template, 7, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notHeadless_r4 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(9, _c1, ctx_r1.visible, ctx_r1.position === "left" && !ctx_r1.fullScreen, ctx_r1.position === "right" && !ctx_r1.fullScreen, ctx_r1.position === "top" && !ctx_r1.fullScreen, ctx_r1.position === "bottom" && !ctx_r1.fullScreen, ctx_r1.fullScreen))("@panelState", \u0275\u0275pureFunction1(19, _c3, \u0275\u0275pureFunction2(16, _c2, ctx_r1.transformOptions, ctx_r1.transitionOptions)))("ngStyle", ctx_r1.style);
    \u0275\u0275attribute("data-pc-name", "sidebar")("data-pc-section", "root");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.headlessTemplate)("ngIfElse", notHeadless_r4);
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
var Sidebar = class _Sidebar {
  document;
  el;
  renderer;
  cd;
  config;
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Whether to block scrolling of the document when sidebar is active.
   * @group Props
   */
  blockScroll = false;
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
   * Aria label of the close icon.
   * @group Props
   */
  ariaCloseLabel;
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
   * Whether an overlay mask is displayed behind the sidebar.
   * @group Props
   */
  modal = true;
  /**
   * Whether to dismiss sidebar on click of the mask.
   * @group Props
   */
  dismissible = true;
  /**
   * Whether to display the close icon.
   * @group Props
   */
  showCloseIcon = true;
  /**
   * Specifies if pressing escape key should hide the sidebar.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(val) {
    this._visible = val;
  }
  /**
   * Specifies the position of the sidebar, valid values are "left", "right", "bottom" and "top".
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
    }
  }
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  get fullScreen() {
    return this._fullScreen;
  }
  set fullScreen(value) {
    this._fullScreen = value;
    if (value) this.transformOptions = "none";
  }
  templates;
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
   * Callback to invoke when dialog visibility is changed.
   * @param {boolean} value - Visible value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  initialized;
  _visible;
  _position = "left";
  _fullScreen = false;
  container;
  transformOptions = "translate3d(-100%, 0px, 0px)";
  mask;
  maskClickListener;
  documentEscapeListener;
  animationEndListener;
  contentTemplate;
  headerTemplate;
  footerTemplate;
  closeIconTemplate;
  headlessTemplate;
  constructor(document2, el, renderer, cd, config) {
    this.document = document2;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
  }
  ngAfterViewInit() {
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
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
        case "closeicon":
          this.closeIconTemplate = item.template;
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
  onKeyDown(event) {
    if (event.code === "Escape") {
      this.hide(false);
    }
  }
  show() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex || this.config.zIndex.modal);
    }
    if (this.modal) {
      this.enableModality();
    }
    this.onShow.emit({});
    this.visibleChange.emit(true);
  }
  hide(emit = true) {
    if (emit) {
      this.onHide.emit({});
    }
    if (this.modal) {
      this.disableModality();
    }
  }
  close(event) {
    this.hide(false);
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  enableModality() {
    const activeDrawers = this.document.querySelectorAll(".p-sidebar-active");
    const activeDrawersLength = activeDrawers.length;
    const zIndex = activeDrawersLength == 1 ? String(parseInt(this.container.style.zIndex) - 1) : String(parseInt(activeDrawers[0].style.zIndex) - 1);
    if (!this.mask) {
      this.mask = this.renderer.createElement("div");
      this.renderer.setStyle(this.mask, "zIndex", zIndex);
      DomHandler.addMultipleClasses(this.mask, "p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter");
      if (this.dismissible) {
        this.maskClickListener = this.renderer.listen(this.mask, "click", (event) => {
          if (this.dismissible) {
            this.close(event);
          }
        });
      }
      this.renderer.appendChild(this.document.body, this.mask);
      if (this.blockScroll) {
        DomHandler.blockBodyScroll();
      }
    }
  }
  disableModality() {
    if (this.mask) {
      DomHandler.addClass(this.mask, "p-component-overlay-leave");
      this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyModal.bind(this));
    }
  }
  destroyModal() {
    this.unbindMaskClickListener();
    if (this.mask) {
      this.renderer.removeChild(this.document.body, this.mask);
    }
    if (this.blockScroll) {
      DomHandler.unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.mask = null;
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.appendContainer();
        this.show();
        if (this.closeOnEscape) {
          this.bindDocumentEscapeListener();
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.hide(true);
        zindexutils.clear(this.container);
        this.unbindGlobalListeners();
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.container);
      else DomHandler.appendChild(this.container, this.appendTo);
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.which == 27) {
        if (parseInt(this.container.style.zIndex) === zindexutils.get(this.container)) {
          this.close(event);
        }
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindGlobalListeners() {
    this.unbindMaskClickListener();
    this.unbindDocumentEscapeListener();
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  ngOnDestroy() {
    this.initialized = false;
    if (this.visible && this.modal) {
      this.destroyModal();
    }
    if (this.appendTo && this.container) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
    this.unbindGlobalListeners();
    this.unbindAnimationEndListener();
  }
  static \u0275fac = function Sidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Sidebar)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Sidebar,
    selectors: [["p-sidebar"]],
    contentQueries: function Sidebar_ContentQueries(rf, ctx, dirIndex) {
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
      appendTo: "appendTo",
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaCloseLabel: "ariaCloseLabel",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      modal: [2, "modal", "modal", booleanAttribute],
      dismissible: [2, "dismissible", "dismissible", booleanAttribute],
      showCloseIcon: [2, "showCloseIcon", "showCloseIcon", booleanAttribute],
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      transitionOptions: "transitionOptions",
      visible: "visible",
      position: "position",
      fullScreen: "fullScreen"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      visibleChange: "visibleChange"
    },
    features: [\u0275\u0275InputTransformsFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["notHeadless", ""], ["role", "complementary", 3, "ngClass", "ngStyle", "class", "keydown", 4, "ngIf"], ["role", "complementary", 3, "keydown", "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], [1, "p-sidebar-header"], ["type", "button", "class", "p-sidebar-close p-sidebar-icon p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], [1, "p-sidebar-content"], [4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-sidebar-close", "p-sidebar-icon", "p-link", 3, "click", "keydown.enter"], [3, "styleClass", 4, "ngIf"], ["class", "p-sidebar-close-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-sidebar-close-icon"], [1, "p-sidebar-footer"]],
    template: function Sidebar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, Sidebar_div_0_Template, 5, 21, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.visible);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, TimesIcon],
    styles: ["@layer primeng{.p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;-webkit-transition:none;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("panelState", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{
      selector: "p-sidebar",
      template: `
        <div
            #container
            [ngClass]="{
                'p-sidebar': true,
                'p-sidebar-active': visible,
                'p-sidebar-left': position === 'left' && !fullScreen,
                'p-sidebar-right': position === 'right' && !fullScreen,
                'p-sidebar-top': position === 'top' && !fullScreen,
                'p-sidebar-bottom': position === 'bottom' && !fullScreen,
                'p-sidebar-full': fullScreen
            }"
            *ngIf="visible"
            [@panelState]="{ value: 'visible', params: { transform: transformOptions, transition: transitionOptions } }"
            (@panelState.start)="onAnimationStart($event)"
            (@panelState.done)="onAnimationEnd($event)"
            [ngStyle]="style"
            [class]="styleClass"
            role="complementary"
            [attr.data-pc-name]="'sidebar'"
            [attr.data-pc-section]="'root'"
            (keydown)="onKeyDown($event)"
        >
            <ng-container *ngIf="headlessTemplate; else notHeadless">
                <ng-container *ngTemplateOutlet="headlessTemplate"></ng-container>
            </ng-container>
            <ng-template #notHeadless>
                <div class="p-sidebar-header" [attr.data-pc-section]="'header'">
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <button
                        type="button"
                        class="p-sidebar-close p-sidebar-icon p-link"
                        (click)="close($event)"
                        (keydown.enter)="close($event)"
                        [attr.aria-label]="ariaCloseLabel"
                        *ngIf="showCloseIcon"
                        pRipple
                        [attr.data-pc-section]="'closebutton'"
                        [attr.data-pc-group-section]="'iconcontainer'"
                    >
                        <TimesIcon *ngIf="!closeIconTemplate" [styleClass]="'p-sidebar-close-icon'" [attr.data-pc-section]="'closeicon'" />
                        <span *ngIf="closeIconTemplate" class="p-sidebar-close-icon" [attr.data-pc-section]="'closeicon'">
                            <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                        </span>
                    </button>
                </div>
                <div class="p-sidebar-content" [attr.data-pc-section]="'content'">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <ng-container *ngIf="footerTemplate">
                    <div class="p-sidebar-footer" [attr.data-pc-section]="'footer'">
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                    </div>
                </ng-container>
            </ng-template>
        </div>
    `,
      animations: [trigger("panelState", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;-webkit-transition:none;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}}\n"]
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
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    appendTo: [{
      type: Input
    }],
    blockScroll: [{
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
    ariaCloseLabel: [{
      type: Input
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
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showCloseIcon: [{
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
    transitionOptions: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    fullScreen: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }]
  });
})();
var SidebarModule = class _SidebarModule {
  static \u0275fac = function SidebarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SidebarModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, RippleModule, SharedModule, TimesIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, SharedModule, TimesIcon],
      exports: [Sidebar, SharedModule],
      declarations: [Sidebar]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
var _c02 = ["input"];
var _c12 = (a0, a1, a2, a3) => ({
  "p-radiobutton p-component": true,
  "p-radiobutton-checked": a0,
  "p-radiobutton-disabled": a1,
  "p-radiobutton-focused": a2,
  "p-variant-filled": a3
});
var _c22 = (a0, a1, a2) => ({
  "p-radiobutton-box": true,
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c32 = (a0, a1, a2) => ({
  "p-radiobutton-label": true,
  "p-radiobutton-label-active": a0,
  "p-disabled": a1,
  "p-radiobutton-label-focus": a2
});
function RadioButton_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 7);
    \u0275\u0275listener("click", function RadioButton_label_6_Template_label_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.select($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const input_r2 = \u0275\u0275reference(3);
    \u0275\u0275classMap(ctx_r3.labelStyleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c32, input_r2.checked, ctx_r3.disabled, ctx_r3.focused));
    \u0275\u0275attribute("for", ctx_r3.inputId)("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.label);
  }
}
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class _RadioControlRegistry {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => {
      return c[1] !== accessor;
    });
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].writeValue(accessor.value);
      }
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) {
      return false;
    }
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioButton = class _RadioButton {
  cd;
  injector;
  registry;
  config;
  /**
   * Value of the radiobutton.
   * @group Props
   */
  value;
  /**
   * The name of the form control.
   * @group Props
   */
  formControlName;
  /**
   * Name of the radiobutton group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Label of the radiobutton.
   * @group Props
   */
  label;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
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
   * Style class of the label.
   * @group Props
   */
  labelStyleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on radio button click.
   * @param {RadioButtonClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  checked;
  focused;
  control;
  constructor(cd, injector, registry, config) {
    this.cd = cd;
    this.injector = injector;
    this.registry = registry;
    this.config = config;
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl);
    this.checkName();
    this.registry.add(this.control, this);
  }
  handleClick(event, radioButton, focus) {
    if (this.disabled) {
      return;
    }
    this.select(event);
    if (focus) {
      radioButton.focus();
    }
  }
  select(event) {
    if (!this.disabled) {
      this.inputViewChild.nativeElement.checked = true;
      this.checked = true;
      this.onModelChange(this.value);
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  writeValue(value) {
    this.checked = value == this.value;
    if (this.inputViewChild && this.inputViewChild.nativeElement) {
      this.inputViewChild.nativeElement.checked = this.checked;
    }
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
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  /**
   * Applies focus to input field.
   * @group Method
   */
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  ngOnDestroy() {
    this.registry.remove(this);
  }
  checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      this.throwNameError();
    }
    if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }
  throwNameError() {
    throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `);
  }
  static \u0275fac = function RadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButton)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RadioButton,
    selectors: [["p-radioButton"]],
    viewQuery: function RadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      formControlName: "formControlName",
      name: "name",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      label: "label",
      variant: "variant",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      labelStyleClass: "labelStyleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    decls: 7,
    vars: 30,
    consts: [["input", ""], [3, "click", "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "radio", "pAutoFocus", "", 3, "focus", "blur", "checked", "disabled", "value", "autofocus"], [3, "ngClass"], [1, "p-radiobutton-icon"], [3, "class", "ngClass", "click", 4, "ngIf"], [3, "click", "ngClass"]],
    template: function RadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("click", function RadioButton_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          const input_r2 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(ctx.handleClick($event, input_r2, true));
        });
        \u0275\u0275elementStart(1, "div", 2)(2, "input", 3, 0);
        \u0275\u0275listener("focus", function RadioButton_Template_input_focus_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function RadioButton_Template_input_blur_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "span", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, RadioButton_label_6_Template, 2, 10, "label", 6);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction4(21, _c12, ctx.checked, ctx.disabled, ctx.focused, ctx.variant === "filled" || ctx.config.inputStyle() === "filled"));
        \u0275\u0275attribute("data-pc-name", "radiobutton")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "hiddenInputWrapper");
        \u0275\u0275advance();
        \u0275\u0275property("checked", ctx.checked)("disabled", ctx.disabled)("value", ctx.value)("autofocus", ctx.autofocus);
        \u0275\u0275attribute("id", ctx.inputId)("name", ctx.name)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("tabindex", ctx.tabindex)("data-pc-section", "hiddenInput");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(26, _c22, ctx.checked, ctx.disabled, ctx.focused));
        \u0275\u0275attribute("data-pc-section", "input");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "icon");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.label);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle, AutoFocus],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radioButton",
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{
                'p-radiobutton p-component': true,
                'p-radiobutton-checked': checked,
                'p-radiobutton-disabled': disabled,
                'p-radiobutton-focused': focused,
                'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled'
            }"
            [class]="styleClass"
            [attr.data-pc-name]="'radiobutton'"
            [attr.data-pc-section]="'root'"
            (click)="handleClick($event, input, true)"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'">
                <input
                    #input
                    [attr.id]="inputId"
                    type="radio"
                    [attr.name]="name"
                    [checked]="checked"
                    [disabled]="disabled"
                    [value]="value"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.tabindex]="tabindex"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div [ngClass]="{ 'p-radiobutton-box': true, 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused }" [attr.data-pc-section]="'input'">
                <span class="p-radiobutton-icon" [attr.data-pc-section]="'icon'"></span>
            </div>
        </div>
        <label
            (click)="select($event)"
            [class]="labelStyleClass"
            [ngClass]="{ 'p-radiobutton-label': true, 'p-radiobutton-label-active': input.checked, 'p-disabled': disabled, 'p-radiobutton-label-focus': focused }"
            *ngIf="label"
            [attr.for]="inputId"
            [attr.data-pc-section]="'label'"
            >{{ label }}</label
        >
    `,
      providers: [RADIO_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: RadioControlRegistry
  }, {
    type: PrimeNGConfig
  }], {
    value: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    labelStyleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var RadioButtonModule = class _RadioButtonModule {
  static \u0275fac = function RadioButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RadioButtonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, AutoFocusModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AutoFocusModule],
      exports: [RadioButton],
      declarations: [RadioButton]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputswitch.mjs
var _c03 = ["input"];
var _c13 = (a0, a1, a2) => ({
  "p-inputswitch p-component": true,
  "p-inputswitch-checked": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var INPUTSWITCH_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputSwitch),
  multi: true
};
var InputSwitch = class _InputSwitch {
  cd;
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
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the input element.
   * @group Props
   */
  inputId;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke when the on value change.
   * @param {InputSwitchChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  input;
  modelValue = false;
  focused = false;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  constructor(cd) {
    this.cd = cd;
  }
  onClick(event) {
    if (!this.disabled && !this.readonly) {
      this.modelValue = this.checked() ? this.falseValue : this.trueValue;
      this.onModelChange(this.modelValue);
      this.onChange.emit({
        originalEvent: event,
        checked: this.modelValue
      });
      this.input.nativeElement.focus();
    }
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  writeValue(value) {
    this.modelValue = value;
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
  checked() {
    return this.modelValue === this.trueValue;
  }
  static \u0275fac = function InputSwitch_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputSwitch)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputSwitch,
    selectors: [["p-inputSwitch"]],
    viewQuery: function InputSwitch_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      name: "name",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([INPUTSWITCH_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    decls: 5,
    vars: 23,
    consts: [["input", ""], [3, "click", "ngClass", "ngStyle"], [1, "p-hidden-accessible"], ["type", "checkbox", "role", "switch", "pAutoFocus", "", 3, "focus", "blur", "checked", "disabled", "autofocus"], [1, "p-inputswitch-slider"]],
    template: function InputSwitch_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("click", function InputSwitch_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClick($event));
        });
        \u0275\u0275elementStart(1, "div", 2)(2, "input", 3, 0);
        \u0275\u0275listener("focus", function InputSwitch_Template_input_focus_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus());
        })("blur", function InputSwitch_Template_input_blur_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBlur());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(4, "span", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(19, _c13, ctx.checked(), ctx.disabled, ctx.focused))("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "inputswitch")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "hiddenInputWrapper")("data-p-hidden-accessible", true);
        \u0275\u0275advance();
        \u0275\u0275property("checked", ctx.checked())("disabled", ctx.disabled)("autofocus", ctx.autofocus);
        \u0275\u0275attribute("id", ctx.inputId)("aria-checked", ctx.checked())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("name", ctx.name)("tabindex", ctx.tabindex)("data-pc-section", "hiddenInput");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("data-pc-section", "slider");
      }
    },
    dependencies: [NgClass, NgStyle, AutoFocus],
    styles: ['@layer primeng{.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;inset:0;border:1px solid transparent}.p-inputswitch-slider:before{position:absolute;content:"";top:50%}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputSwitch, [{
    type: Component,
    args: [{
      selector: "p-inputSwitch",
      template: `
        <div
            [ngClass]="{ 'p-inputswitch p-component': true, 'p-inputswitch-checked': checked(), 'p-disabled': disabled, 'p-focus': focused }"
            [ngStyle]="style"
            [class]="styleClass"
            (click)="onClick($event)"
            [attr.data-pc-name]="'inputswitch'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'" [attr.data-p-hidden-accessible]="true">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    role="switch"
                    [checked]="checked()"
                    [disabled]="disabled"
                    [attr.aria-checked]="checked()"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.name]="name"
                    [attr.tabindex]="tabindex"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <span class="p-inputswitch-slider" [attr.data-pc-section]="'slider'"></span>
        </div>
    `,
      providers: [INPUTSWITCH_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;inset:0;border:1px solid transparent}.p-inputswitch-slider:before{position:absolute;content:"";top:50%}}\n']
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var InputSwitchModule = class _InputSwitchModule {
  static \u0275fac = function InputSwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputSwitchModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputSwitchModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, AutoFocusModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AutoFocusModule],
      exports: [InputSwitch],
      declarations: [InputSwitch]
    }]
  }], null, null);
})();

// src/app/layout/service/app.layout.service.ts
var LayoutService = class _LayoutService {
  constructor() {
    this._config = {
      ripple: true,
      inputStyle: "outlined",
      menuMode: "static",
      colorScheme: "light",
      componentTheme: "purple",
      scale: 14,
      menuTheme: "light",
      topbarTheme: "purple",
      menuProfilePosition: "start"
    };
    this.state = {
      staticMenuDesktopInactive: false,
      overlayMenuActive: false,
      configSidebarVisible: false,
      staticMenuMobileActive: false,
      menuHoverActive: false,
      rightMenuActive: false,
      topbarMenuActive: false,
      menuProfileActive: false,
      sidebarActive: false,
      anchored: false
    };
    this.config = signal(this._config);
    this.configUpdate = new Subject();
    this.overlayOpen = new Subject();
    this.topbarMenuOpen = new Subject();
    this.menuProfileOpen = new Subject();
    this.configUpdate$ = this.configUpdate.asObservable();
    this.overlayOpen$ = this.overlayOpen.asObservable();
    this.topbarMenuOpen$ = this.topbarMenuOpen.asObservable();
    this.menuProfileOpen$ = this.menuProfileOpen.asObservable();
    effect(() => {
      const config = this.config();
      if (this.updateStyle(config)) {
        this.changeTheme();
      }
      this.changeScale(config.scale);
      this.onConfigUpdate();
    });
  }
  updateStyle(config) {
    return config.componentTheme !== this._config.componentTheme || config.colorScheme !== this._config.colorScheme;
  }
  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }
  onTopbarMenuToggle() {
    this.state.topbarMenuActive = !this.state.topbarMenuActive;
    if (this.state.topbarMenuActive) {
      this.topbarMenuOpen.next(null);
    }
  }
  onOverlaySubmenuOpen() {
    this.overlayOpen.next(null);
  }
  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }
  isOverlay() {
    return this.config().menuMode === "overlay";
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  isSlim() {
    return this.config().menuMode === "slim";
  }
  isSlimPlus() {
    return this.config().menuMode === "slim-plus";
  }
  isHorizontal() {
    return this.config().menuMode === "horizontal";
  }
  isMobile() {
    return !this.isDesktop();
  }
  onConfigUpdate() {
    this._config = __spreadValues({}, this.config());
    this.configUpdate.next(this.config());
  }
  isRightMenuActive() {
    return this.state.rightMenuActive;
  }
  openRightSidebar() {
    this.state.rightMenuActive = true;
  }
  onMenuProfileToggle() {
    this.state.menuProfileActive = !this.state.menuProfileActive;
    if (this.state.menuProfileActive && this.isHorizontal() && this.isDesktop()) {
      this.menuProfileOpen.next(null);
    }
  }
  changeTheme() {
    let { colorScheme, componentTheme } = this.config();
    const themeLink = document.getElementById("theme-link");
    const themeLinkHref = themeLink.getAttribute("href");
    const newHref = themeLinkHref.split("/").map((el) => el == this._config.componentTheme ? el = componentTheme : el == `theme-${this._config.colorScheme}` ? el = `theme-${colorScheme}` : el).join("/");
    this.replaceThemeLink(newHref);
  }
  replaceThemeLink(href) {
    const id = "theme-link";
    let themeLink = document.getElementById(id);
    const cloneLinkElement = themeLink.cloneNode(true);
    cloneLinkElement.setAttribute("href", href);
    cloneLinkElement.setAttribute("id", id + "-clone");
    themeLink.parentNode.insertBefore(cloneLinkElement, themeLink.nextSibling);
    cloneLinkElement.addEventListener("load", () => {
      themeLink.remove();
      cloneLinkElement.setAttribute("id", id);
    });
  }
  changeScale(value) {
    document.documentElement.style.fontSize = `${value}px`;
  }
  static {
    this.\u0275fac = function LayoutService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LayoutService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
  }
};

// src/app/layout/app.menu.service.ts
var MenuService = class _MenuService {
  constructor() {
    this.menuSource = new Subject();
    this.resetSource = new Subject();
    this.menuSource$ = this.menuSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }
  onMenuStateChange(event) {
    this.menuSource.next(event);
  }
  reset() {
    this.resetSource.next(true);
  }
  static {
    this.\u0275fac = function MenuService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MenuService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuService, factory: _MenuService.\u0275fac, providedIn: "root" });
  }
};

// src/app/layout/config/app.config.component.ts
var _c04 = (a0) => ({ "text-primary-500": a0 });
var _c14 = (a0) => ({ "background-color": a0 });
var _c23 = (a0) => ({ "text-white": a0 });
function AppConfigComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 21);
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c04, s_r1 === ctx_r1.scale));
  }
}
function AppConfigComponent_button_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 37);
    \u0275\u0275element(2, "rect", 38);
    \u0275\u0275elementStart(3, "g", 39);
    \u0275\u0275element(4, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "defs")(6, "clipPath", 41);
    \u0275\u0275element(7, "rect", 42);
    \u0275\u0275elementEnd()()()();
  }
}
function AppConfigComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function AppConfigComponent_button_13_Template_button_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeScene(item_r4));
    });
    \u0275\u0275template(1, AppConfigComponent_button_13_div_1_Template, 8, 0, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 24)(3, "g", 25);
    \u0275\u0275element(4, "rect", 26)(5, "rect", 27)(6, "rect", 28)(7, "rect", 29)(8, "rect", 30)(9, "rect", 31)(10, "rect", 32)(11, "rect", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "defs")(13, "clipPath", 34);
    \u0275\u0275element(14, "rect", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", item_r4.sceneName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedScene() === item_r4.sceneName);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("fill", item_r4.colorSchemeColor);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", item_r4.topbarThemeColor);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", item_r4.menuThemeColor);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", item_r4.componentThemeColor);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", item_r4.componentThemeColor);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", item_r4.componentThemeColor);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", item_r4.cardColor);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", item_r4.componentThemeColor);
  }
}
function AppConfigComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5");
    \u0275\u0275text(2, "Menu Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 43)(5, "p-radioButton", 44);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_25_Template_p_radioButton_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 45);
    \u0275\u0275text(7, "Static");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 43)(9, "p-radioButton", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_25_Template_p_radioButton_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 47);
    \u0275\u0275text(11, "Overlay");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 43)(13, "p-radioButton", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_25_Template_p_radioButton_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 49);
    \u0275\u0275text(15, "Slim");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 43)(17, "p-radioButton", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_25_Template_p_radioButton_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 49);
    \u0275\u0275text(19, "Slim +");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 43)(21, "p-radioButton", 51);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_25_Template_p_radioButton_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 52);
    \u0275\u0275text(23, "Reveal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 43)(25, "p-radioButton", 53);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_25_Template_p_radioButton_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 54);
    \u0275\u0275text(27, "Drawer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 43)(29, "p-radioButton", 55);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_25_Template_p_radioButton_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 56);
    \u0275\u0275text(31, "Horizontal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "h5");
    \u0275\u0275text(33, "Menu Profile Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 11)(35, "div", 12)(36, "p-radioButton", 57);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_25_Template_p_radioButton_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuProfilePosition, $event) || (ctx_r1.menuProfilePosition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "label", 58);
    \u0275\u0275text(38, "Start");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 12)(40, "p-radioButton", 59);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_25_Template_p_radioButton_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuProfilePosition, $event) || (ctx_r1.menuProfilePosition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "label", 60);
    \u0275\u0275text(42, "End");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuMode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuMode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuMode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuMode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuMode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuMode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuMode);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuProfilePosition);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuProfilePosition);
  }
}
function AppConfigComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5");
    \u0275\u0275text(2, "Input Style");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12)(5, "p-radioButton", 61);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_26_Template_p_radioButton_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inputStyle, $event) || (ctx_r1.inputStyle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 62);
    \u0275\u0275text(7, "Outlined");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 12)(9, "p-radioButton", 63);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_26_Template_p_radioButton_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inputStyle, $event) || (ctx_r1.inputStyle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 64);
    \u0275\u0275text(11, "Filled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inputStyle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inputStyle);
  }
}
function AppConfigComponent_ng_container_30_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode.");
    \u0275\u0275elementEnd();
  }
}
function AppConfigComponent_ng_container_30_ng_template_4_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 70);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c23, ctx_r1.menuTheme !== "light"));
  }
}
function AppConfigComponent_ng_container_30_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "button", 68);
    \u0275\u0275listener("click", function AppConfigComponent_ng_container_30_ng_template_4_div_1_Template_button_click_1_listener() {
      const theme_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeMenuTheme(theme_r8.name));
    });
    \u0275\u0275template(2, AppConfigComponent_ng_container_30_ng_template_4_div_1_i_2_Template, 1, 3, "i", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const theme_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c14, theme_r8.color));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.menuTheme === theme_r8.name);
  }
}
function AppConfigComponent_ng_container_30_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AppConfigComponent_ng_container_30_ng_template_4_div_1_Template, 3, 4, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.menuThemes);
  }
}
function AppConfigComponent_ng_container_30_div_9_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 70);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c23, ctx_r1.topbarTheme !== "light"));
  }
}
function AppConfigComponent_ng_container_30_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "button", 68);
    \u0275\u0275listener("click", function AppConfigComponent_ng_container_30_div_9_Template_button_click_1_listener() {
      const theme_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeTopbarTheme(theme_r10.name));
    });
    \u0275\u0275template(2, AppConfigComponent_ng_container_30_div_9_i_2_Template, 1, 3, "i", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const theme_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c14, theme_r10.color));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.topbarTheme === theme_r10.name);
  }
}
function AppConfigComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5");
    \u0275\u0275text(2, "Menu Themes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AppConfigComponent_ng_container_30_p_3_Template, 2, 0, "p", 65)(4, AppConfigComponent_ng_container_30_ng_template_4_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "h5");
    \u0275\u0275text(7, "Topbar Themes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 66);
    \u0275\u0275template(9, AppConfigComponent_ng_container_30_div_9_Template, 3, 4, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const menu_theme_selector_r11 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.colorScheme === "dark")("ngIfElse", menu_theme_selector_r11);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.topbarThemes);
  }
}
function AppConfigComponent_div_34_button_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const theme_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(theme_r13.name == "white" ? "pi pi-check text-gray-900 " : "pi pi-check text-white");
  }
}
function AppConfigComponent_div_34_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function AppConfigComponent_div_34_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const theme_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeTheme(theme_r13.name));
    });
    \u0275\u0275template(1, AppConfigComponent_div_34_button_1_i_1_Template, 1, 2, "i", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c14, theme_r13.color));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.componentTheme === theme_r13.name);
  }
}
function AppConfigComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, AppConfigComponent_div_34_button_1_Template, 2, 4, "button", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.layoutService.config().colorScheme === "dark" && theme_r13.name === "black") === false);
  }
}
var AppConfigComponent = class _AppConfigComponent {
  constructor(layoutService, menuService) {
    this.layoutService = layoutService;
    this.menuService = menuService;
    this.minimal = false;
    this.componentThemes = [];
    this.menuThemes = [];
    this.topbarThemes = [];
    this.scenes = [];
    this.scales = [12, 13, 14, 15, 16];
    this.selectedScene = signal("");
  }
  get visible() {
    return this.layoutService.state.configSidebarVisible;
  }
  set visible(_val) {
    this.layoutService.state.configSidebarVisible = _val;
  }
  get scale() {
    return this.layoutService.config().scale;
  }
  set scale(_val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      scale: _val
    }));
  }
  get menuMode() {
    return this.layoutService.config().menuMode;
  }
  set menuMode(_val) {
    this.layoutService.config().menuMode = _val;
    if (this.layoutService.isSlimPlus() || this.layoutService.isSlim() || this.layoutService.isHorizontal()) {
      this.menuService.reset();
    }
  }
  get menuProfilePosition() {
    return this.layoutService.config().menuProfilePosition;
  }
  set menuProfilePosition(_val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      menuProfilePosition: _val
    }));
    if (this.layoutService.isSlim() || this.layoutService.isHorizontal()) {
      this.menuService.reset();
    }
  }
  get colorScheme() {
    return this.layoutService.config().colorScheme;
  }
  set colorScheme(_val) {
    if (_val !== this.layoutService.config().colorScheme) {
      this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
        menuTheme: _val === "dark" ? "dark" : "light",
        colorScheme: _val
      }));
      setTimeout(() => {
        if (_val === "dark") {
          this.componentTheme = this.componentTheme === "black" ? "purple" : this.componentTheme;
        }
      }, 10);
    }
  }
  get inputStyle() {
    return this.layoutService.config().inputStyle;
  }
  set inputStyle(_val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      inputStyle: _val
    }));
  }
  get ripple() {
    return this.layoutService.config().ripple;
  }
  set ripple(_val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      ripple: _val
    }));
  }
  get menuTheme() {
    return this.layoutService.config().menuTheme;
  }
  set menuTheme(_val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      menuTheme: _val
    }));
  }
  get topbarTheme() {
    return this.layoutService.config().topbarTheme;
  }
  set topbarTheme(_val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      topbarTheme: _val
    }));
  }
  get componentTheme() {
    return this.layoutService.config().componentTheme;
  }
  set componentTheme(_val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      componentTheme: _val
    }));
  }
  ngOnInit() {
    this.componentThemes = [
      { name: "purple", color: "#6f42c1" },
      { name: "indigo", color: "#6610f2" },
      { name: "pink", color: "#d63384" },
      { name: "blue", color: "#0d6efd" },
      { name: "cyan", color: "#0dcaf0" },
      { name: "teal", color: "#20c997" },
      { name: "green", color: "#198754" },
      { name: "yellow", color: "#ffc107" },
      { name: "orange", color: "#fd7e14" },
      { name: "black", color: "#000000" }
    ];
    this.menuThemes = [
      { name: "light", color: "#ffffff" },
      { name: "dark", color: "#212529" }
    ];
    this.topbarThemes = [
      { name: "light", color: "#FFFFFF" },
      { name: "dark", color: "#212529" },
      { name: "blue", color: "#1565C0" },
      { name: "purple", color: "#6A1B9A" },
      { name: "pink", color: "#AD1457" },
      { name: "cyan", color: "#0097A7" },
      { name: "teal", color: "#00796B" },
      { name: "green", color: "#43A047" },
      { name: "yellow", color: "#FBC02D" },
      { name: "orange", color: "#FB8C00" },
      { name: "indigo", color: "#3F51B5" }
    ];
    this.scenes = [
      {
        sceneName: "Green Light",
        colorScheme: "light",
        colorSchemeColor: "#EFEFEF",
        menuTheme: "light",
        menuThemeColor: "#ffffff",
        componentTheme: "green",
        componentThemeColor: "#198754",
        topbarTheme: "green",
        topbarThemeColor: "#43A047",
        menuMode: "static",
        cardColor: "#ffffff"
      },
      {
        sceneName: "Dark Sea",
        colorScheme: "dark",
        colorSchemeColor: "#20262e",
        menuTheme: "dark",
        menuThemeColor: "#2a323d",
        componentTheme: "cyan",
        componentThemeColor: "#0dcaf0",
        topbarTheme: "cyan",
        topbarThemeColor: "#0097A7",
        menuMode: "static",
        cardColor: "#2a323d"
      },
      {
        sceneName: "Blue Marble",
        colorScheme: "light",
        colorSchemeColor: "#EFEFEF",
        menuTheme: "light",
        menuThemeColor: "#ffffff",
        componentTheme: "blue",
        componentThemeColor: "#0d6efd",
        topbarTheme: "blue",
        topbarThemeColor: "#1565C0",
        menuMode: "static",
        cardColor: "#ffffff"
      },
      {
        sceneName: "Emerald",
        colorScheme: "dark",
        colorSchemeColor: "#20262e",
        menuTheme: "dark",
        menuThemeColor: "#2a323d",
        componentTheme: "teal",
        componentThemeColor: "#20c997",
        topbarTheme: "teal",
        topbarThemeColor: "#00796B",
        menuMode: "static",
        cardColor: "#2a323d"
      },
      {
        sceneName: "Piano Black",
        colorScheme: "light",
        colorSchemeColor: "#EFEFEF",
        menuTheme: "light",
        menuThemeColor: "#ffffff",
        componentTheme: "black",
        componentThemeColor: "#000000",
        topbarTheme: "light",
        topbarThemeColor: "#FFFFFF",
        menuMode: "static",
        cardColor: "#ffffff"
      },
      {
        sceneName: "Bolt",
        colorScheme: "dark",
        colorSchemeColor: "#20262e",
        menuTheme: "dark",
        menuThemeColor: "#2a323d",
        componentTheme: "yellow",
        componentThemeColor: "#ffc107",
        topbarTheme: "yellow",
        topbarThemeColor: "#FBC02D",
        menuMode: "static",
        cardColor: "#2a323d"
      },
      {
        sceneName: "Amber",
        colorScheme: "light",
        colorSchemeColor: "#EFEFEF",
        menuTheme: "dark",
        menuThemeColor: "#212529",
        componentTheme: "yellow",
        componentThemeColor: "#ffc107",
        topbarTheme: "yellow",
        topbarThemeColor: "#FBC02D",
        menuMode: "horizontal",
        cardColor: "#ffffff"
      },
      {
        sceneName: "Kingdom",
        colorScheme: "dark",
        colorSchemeColor: "#20262e",
        menuTheme: "dark",
        menuThemeColor: "#2a323d",
        componentTheme: "indigo",
        componentThemeColor: "#6610f2",
        topbarTheme: "purple",
        topbarThemeColor: "#6A1B9A",
        menuMode: "reveal",
        cardColor: "#2a323d"
      }
    ];
  }
  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
  changeTheme(theme) {
    this.componentTheme = theme;
  }
  changeTopbarTheme(theme) {
    this.topbarTheme = theme;
  }
  changeMenuTheme(theme) {
    this.menuTheme = theme;
  }
  decrementScale() {
    this.scale--;
  }
  incrementScale() {
    this.scale++;
  }
  changeScene(item) {
    const { colorScheme, componentTheme, menuTheme, topbarTheme, menuMode, sceneName } = item;
    this.selectedScene.set(sceneName);
    this.colorScheme = colorScheme;
    this.componentTheme = componentTheme;
    this.menuTheme = menuTheme;
    this.topbarTheme = topbarTheme;
    this.menuMode = menuMode;
  }
  static {
    this.\u0275fac = function AppConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppConfigComponent)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(MenuService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppConfigComponent, selectors: [["app-config"]], inputs: { minimal: "minimal" }, decls: 35, vars: 13, consts: [["menu_theme_selector", ""], ["type", "button", "icon", "pi pi-cog", "styleClass", "layout-config-button", 3, "click"], ["position", "right", 3, "visibleChange", "visible", "transitionOptions"], [1, "p-3"], [1, "flex", "align-items-center"], ["icon", "pi pi-minus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "mr-2", 3, "click", "disabled"], [1, "flex", "gap-2", "align-items-center"], ["class", "pi pi-circle-fill text-300", 3, "ngClass", 4, "ngFor", "ngForOf"], ["icon", "pi pi-plus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "ml-2", 3, "click", "disabled"], [1, "flex", "flex-wrap", "p-2", "surface-100", "gap-2", "border-round-lg"], ["pButton", "", "class", "bg-transparent border-none relative p-0", "style", "flex: 0 0 48%;", "tooltipPosition", "top", 3, "pTooltip", "click", 4, "ngFor", "ngForOf"], [1, "flex", "gap-4"], [1, "field-radiobutton", "flex-1"], ["name", "colorScheme", "value", "light", "inputId", "light", 3, "ngModelChange", "ngModel"], ["for", "light"], ["name", "colorScheme", "value", "dark", "inputId", "dark", 3, "ngModelChange", "ngModel"], ["for", "dark"], [4, "ngIf"], ["styleClass", "mb-3", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-wrap", "row-gap-3"], ["class", "w-3", 4, "ngFor", "ngForOf"], [1, "pi", "pi-circle-fill", "text-300", 3, "ngClass"], ["pButton", "", "tooltipPosition", "top", 1, "bg-transparent", "border-none", "relative", "p-0", 2, "flex", "0 0 48%", 3, "click", "pTooltip"], ["class", "absolute w-full h-full flex justify-content-center align-items-center", "style", "background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(3.56688px)", 4, "ngIf"], ["width", "110", "height", "44.5", "viewBox", "0 0 110 56", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_1_23714)"], ["x", "0.5", "width", "109.5", "height", "56", "rx", "6"], ["width", "109.5", "height", "10.5", "transform", "translate(0.5)"], ["width", "42", "height", "45.5", "transform", "translate(0.5 10.5)"], ["x", "11", "y", "24.5", "width", "21", "height", "3.5", "rx", "1.75"], ["x", "11", "y", "31.5", "width", "21", "height", "3.5", "rx", "1.75"], ["x", "11", "y", "38.5", "width", "21", "height", "3.5", "rx", "1.75"], ["x", "53", "y", "21", "width", "46.5", "height", "24.5", "rx", "3"], ["x", "60", "y", "28", "width", "32.5", "height", "10.5", "rx", "3"], ["id", "clip0_1_23714"], ["x", "0.5", "width", "109.5", "height", "56", "rx", "6", "fill", "white"], [1, "absolute", "w-full", "h-full", "flex", "justify-content-center", "align-items-center", 2, "background", "rgba(255, 255, 255, 0.85)", "backdrop-filter", "blur(3.56688px)"], ["width", "25", "height", "26", "viewBox", "0 0 25 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "0.520691", "y", "0.770691", "width", "24.4586", "height", "24.4586", "rx", "12.2293", "fill", "var(--primary-color)"], ["clip-path", "url(#clip0_1_16289)"], ["d", "M11.1158 16.5119C11.0587 16.51 11.0025 16.4964 10.9507 16.472C10.899 16.4476 10.8528 16.4129 10.8149 16.37L7.97597 13.531C7.92185 13.4959 7.8764 13.449 7.84306 13.3938C7.80973 13.3385 7.78938 13.2765 7.78354 13.2122C7.77771 13.148 7.78655 13.0832 7.8094 13.0229C7.83224 12.9626 7.8685 12.9082 7.91542 12.864C7.96234 12.8197 8.01871 12.7867 8.08027 12.7674C8.14183 12.7481 8.20696 12.743 8.27076 12.7526C8.33456 12.7621 8.39535 12.7861 8.44854 12.8226C8.50174 12.8591 8.54595 12.9072 8.57783 12.9632L11.1158 15.4842L17.0606 9.55651C17.1406 9.50462 17.2358 9.4811 17.3308 9.48972C17.4258 9.49834 17.5151 9.53861 17.5845 9.60406C17.6539 9.66952 17.6993 9.75637 17.7134 9.8507C17.7275 9.94503 17.7096 10.0414 17.6625 10.1243L11.4168 16.37C11.3789 16.4129 11.3327 16.4476 11.281 16.472C11.2292 16.4964 11.173 16.51 11.1158 16.5119Z", "fill", "white"], ["id", "clip0_1_16289"], ["width", "10.7006", "height", "10.7006", "fill", "white", "transform", "translate(7.39966 7.64966)"], [1, "flex", "align-items-center", "gap-2", "w-6"], ["name", "menuMode", "value", "static", "inputId", "mode1", 3, "ngModelChange", "ngModel"], ["for", "mode1"], ["name", "menuMode", "value", "overlay", "inputId", "mode2", 3, "ngModelChange", "ngModel"], ["for", "mode2"], ["name", "menuMode", "value", "slim", "inputId", "mode3", 3, "ngModelChange", "ngModel"], ["for", "mode3"], ["name", "menuMode", "value", "slim-plus", "inputId", "mode4", 3, "ngModelChange", "ngModel"], ["name", "menuMode", "value", "reveal", "inputId", "mode6", 3, "ngModelChange", "ngModel"], ["for", "mode5"], ["name", "menuMode", "value", "drawer", "inputId", "mode7", 3, "ngModelChange", "ngModel"], ["for", "mode6"], ["name", "menuMode", "value", "horizontal", "inputId", "mode5", 3, "ngModelChange", "ngModel"], ["for", "mode4"], ["name", "position", "value", "start", "inputId", "start", 3, "ngModelChange", "ngModel"], ["for", "star"], ["name", "position", "value", "end", "inputId", "end", 3, "ngModelChange", "ngModel"], ["for", "end"], ["name", "inputStyle", "value", "outlined", "inputId", "outlined_input", 3, "ngModelChange", "ngModel"], ["for", "outlined_input"], ["name", "inputStyle", "value", "filled", "inputId", "filled_input", 3, "ngModelChange", "ngModel"], ["for", "filled_input"], [4, "ngIf", "ngIfElse"], [1, "flex", "flex-wrap", "row-gap-3", "pb-3"], [1, "w-3"], ["type", "button", 1, "cursor-pointer", "p-link", "w-2rem", "h-2rem", "border-round", "shadow-2", "flex-shrink-0", "flex", "justify-content-center", "align-items-center", "border-circle", 3, "click", "ngStyle"], ["class", "pi pi-check text-lg", 3, "ngClass", 4, "ngIf"], [1, "pi", "pi-check", "text-lg", 3, "ngClass"], ["type", "button", "class", "cursor-pointer p-link w-2rem h-2rem border-round shadow-2 flex-shrink-0 flex justify-content-center align-items-center border-circle", 3, "ngStyle", "click", 4, "ngIf"], [3, "class", 4, "ngIf"]], template: function AppConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-button", 1);
        \u0275\u0275listener("click", function AppConfigComponent_Template_p_button_click_0_listener() {
          return ctx.onConfigButtonClick();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "p-sidebar", 2);
        \u0275\u0275twoWayListener("visibleChange", function AppConfigComponent_Template_p_sidebar_visibleChange_1_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
          return $event;
        });
        \u0275\u0275elementStart(2, "div", 3)(3, "h5");
        \u0275\u0275text(4, "Layout/Theme Scale");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_6_listener() {
          return ctx.decrementScale();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275template(8, AppConfigComponent_i_8_Template, 1, 3, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 8);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_9_listener() {
          return ctx.incrementScale();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "h5");
        \u0275\u0275text(11, "Scenes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275template(13, AppConfigComponent_button_13_Template, 15, 10, "button", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "h5");
        \u0275\u0275text(15, "Color Scheme");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "p-radioButton", 13);
        \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colorScheme, $event) || (ctx.colorScheme = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "label", 14);
        \u0275\u0275text(20, "Light");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "p-radioButton", 15);
        \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colorScheme, $event) || (ctx.colorScheme = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "label", 16);
        \u0275\u0275text(24, "Dark");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(25, AppConfigComponent_ng_container_25_Template, 43, 9, "ng-container", 17)(26, AppConfigComponent_ng_container_26_Template, 12, 2, "ng-container", 17);
        \u0275\u0275elementStart(27, "h5");
        \u0275\u0275text(28, "Ripple Effect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p-inputSwitch", 18);
        \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_Template_p_inputSwitch_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.ripple, $event) || (ctx.ripple = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, AppConfigComponent_ng_container_30_Template, 10, 3, "ng-container", 17);
        \u0275\u0275elementStart(31, "h5");
        \u0275\u0275text(32, "Component Themes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 19);
        \u0275\u0275template(34, AppConfigComponent_div_34_Template, 2, 1, "div", 20);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("visible", ctx.visible);
        \u0275\u0275property("transitionOptions", ".3s cubic-bezier(0, 0, 0.2, 1)");
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.scale === ctx.scales[0]);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.scales);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.scale === ctx.scales[ctx.scales.length - 1]);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.scenes);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.colorScheme);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.colorScheme);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.minimal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.minimal);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.ripple);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.minimal);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.componentThemes);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgStyle, NgControlStatus, NgModel, Sidebar, RadioButton, ButtonDirective, Button, InputSwitch, Tooltip], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppConfigComponent, { className: "AppConfigComponent", filePath: "src\\app\\layout\\config\\app.config.component.ts", lineNumber: 13 });
})();

// src/app/layout/config/app.config.module.ts
var AppConfigModule = class _AppConfigModule {
  static {
    this.\u0275fac = function AppConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppConfigModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppConfigModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      SidebarModule,
      RadioButtonModule,
      ButtonModule,
      InputSwitchModule,
      TooltipModule
    ] });
  }
};

export {
  LayoutService,
  MenuService,
  Sidebar,
  SidebarModule,
  RadioButtonModule,
  InputSwitchModule,
  AppConfigModule
};
//# sourceMappingURL=chunk-SFWASUY2.js.map
