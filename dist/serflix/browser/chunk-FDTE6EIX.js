import {
  Paginator,
  PaginatorModule
} from "./chunk-FLF2A32M.js";
import {
  AutoFocus,
  AutoFocusModule,
  BaseIcon,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  DomHandler,
  ElementRef,
  EventEmitter,
  FilterService,
  Footer,
  Header,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControl,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  ObjectUtils,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  SlicePipe,
  SpinnerIcon,
  Subject,
  TranslationKeys,
  UniqueComponentId,
  ViewChild,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  forwardRef,
  fromEventPattern,
  inject,
  isPlatformBrowser,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
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
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RIN3RA4U.js";

// node_modules/@angular/youtube-player/fesm2022/youtube-player.mjs
var _c0 = ["youtubeContainer"];
function YouTubePlayer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "youtube-player-placeholder", 2);
    \u0275\u0275listener("click", function YouTubePlayer_Conditional_0_Template_youtube_player_placeholder_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._load(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("videoId", ctx_r1.videoId)("width", ctx_r1.width)("height", ctx_r1.height)("isLoading", ctx_r1._isLoading)("buttonLabel", ctx_r1.placeholderButtonLabel)("quality", ctx_r1.placeholderImageQuality);
  }
}
var YouTubePlayerPlaceholder = class _YouTubePlayerPlaceholder {
  /** Gets the background image showing the placeholder. */
  _getBackgroundImage() {
    let url;
    if (this.quality === "low") {
      url = `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`;
    } else if (this.quality === "high") {
      url = `https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg`;
    } else {
      url = `https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`;
    }
    return `url(${url})`;
  }
  static {
    this.\u0275fac = function YouTubePlayerPlaceholder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _YouTubePlayerPlaceholder)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _YouTubePlayerPlaceholder,
      selectors: [["youtube-player-placeholder"]],
      hostAttrs: [1, "youtube-player-placeholder"],
      hostVars: 8,
      hostBindings: function YouTubePlayerPlaceholder_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275styleProp("background-image", ctx._getBackgroundImage())("width", ctx.width, "px")("height", ctx.height, "px");
          \u0275\u0275classProp("youtube-player-placeholder-loading", ctx.isLoading);
        }
      },
      inputs: {
        videoId: "videoId",
        width: "width",
        height: "height",
        isLoading: "isLoading",
        buttonLabel: "buttonLabel",
        quality: "quality"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 4,
      vars: 1,
      consts: [["type", "button", 1, "youtube-player-placeholder-button"], ["height", "100%", "version", "1.1", "viewBox", "0 0 68 48", "focusable", "false", "aria-hidden", "true"], ["d", "M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z", "fill", "#f00"], ["d", "M 45,24 27,14 27,34", "fill", "#fff"]],
      template: function YouTubePlayerPlaceholder_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "button", 0);
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(1, "svg", 1);
          \u0275\u0275element(2, "path", 2)(3, "path", 3);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-label", ctx.buttonLabel);
        }
      },
      styles: [".youtube-player-placeholder{display:flex;align-items:center;justify-content:center;width:100%;overflow:hidden;cursor:pointer;background-color:#000;background-position:center center;background-size:cover;transition:box-shadow 300ms ease;box-shadow:inset 0 120px 90px -90px rgba(0,0,0,.8)}.youtube-player-placeholder-button{transition:opacity 300ms ease;-moz-appearance:none;-webkit-appearance:none;background:none;border:none;padding:0;display:flex}.youtube-player-placeholder-button svg{width:68px;height:48px}.youtube-player-placeholder-loading{box-shadow:none}.youtube-player-placeholder-loading .youtube-player-placeholder-button{opacity:0}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YouTubePlayerPlaceholder, [{
    type: Component,
    args: [{
      selector: "youtube-player-placeholder",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <button type="button" class="youtube-player-placeholder-button" [attr.aria-label]="buttonLabel">
      <svg
        height="100%"
        version="1.1"
        viewBox="0 0 68 48"
        focusable="false"
        aria-hidden="true">
        <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
        <path d="M 45,24 27,14 27,34" fill="#fff"></path>
      </svg>
    </button>
  `,
      standalone: true,
      host: {
        "class": "youtube-player-placeholder",
        "[class.youtube-player-placeholder-loading]": "isLoading",
        "[style.background-image]": "_getBackgroundImage()",
        "[style.width.px]": "width",
        "[style.height.px]": "height"
      },
      styles: [".youtube-player-placeholder{display:flex;align-items:center;justify-content:center;width:100%;overflow:hidden;cursor:pointer;background-color:#000;background-position:center center;background-size:cover;transition:box-shadow 300ms ease;box-shadow:inset 0 120px 90px -90px rgba(0,0,0,.8)}.youtube-player-placeholder-button{transition:opacity 300ms ease;-moz-appearance:none;-webkit-appearance:none;background:none;border:none;padding:0;display:flex}.youtube-player-placeholder-button svg{width:68px;height:48px}.youtube-player-placeholder-loading{box-shadow:none}.youtube-player-placeholder-loading .youtube-player-placeholder-button{opacity:0}"]
    }]
  }], null, {
    videoId: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    isLoading: [{
      type: Input
    }],
    buttonLabel: [{
      type: Input
    }],
    quality: [{
      type: Input
    }]
  });
})();
var YOUTUBE_PLAYER_CONFIG = new InjectionToken("YOUTUBE_PLAYER_CONFIG");
var DEFAULT_PLAYER_WIDTH = 640;
var DEFAULT_PLAYER_HEIGHT = 390;
function coerceTime(value) {
  return value == null ? value : numberAttribute(value, 0);
}
var YouTubePlayer = class _YouTubePlayer {
  /** Height of video player */
  get height() {
    return this._height;
  }
  set height(height) {
    this._height = height == null || isNaN(height) ? DEFAULT_PLAYER_HEIGHT : height;
  }
  /** Width of video player */
  get width() {
    return this._width;
  }
  set width(width) {
    this._width = width == null || isNaN(width) ? DEFAULT_PLAYER_WIDTH : width;
  }
  constructor(_ngZone, platformId) {
    this._ngZone = _ngZone;
    this._destroyed = new Subject();
    this._playerChanges = new BehaviorSubject(void 0);
    this._nonce = inject(CSP_NONCE, {
      optional: true
    });
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._isLoading = false;
    this._hasPlaceholder = true;
    this._height = DEFAULT_PLAYER_HEIGHT;
    this._width = DEFAULT_PLAYER_WIDTH;
    this.disableCookies = false;
    this.disablePlaceholder = false;
    this.showBeforeIframeApiLoads = false;
    this.ready = this._getLazyEmitter("onReady");
    this.stateChange = this._getLazyEmitter("onStateChange");
    this.error = this._getLazyEmitter("onError");
    this.apiChange = this._getLazyEmitter("onApiChange");
    this.playbackQualityChange = this._getLazyEmitter("onPlaybackQualityChange");
    this.playbackRateChange = this._getLazyEmitter("onPlaybackRateChange");
    const config = inject(YOUTUBE_PLAYER_CONFIG, {
      optional: true
    });
    this.loadApi = config?.loadApi ?? true;
    this.disablePlaceholder = !!config?.disablePlaceholder;
    this.placeholderButtonLabel = config?.placeholderButtonLabel || "Play video";
    this.placeholderImageQuality = config?.placeholderImageQuality || "standard";
    this._isBrowser = isPlatformBrowser(platformId);
  }
  ngAfterViewInit() {
    this._conditionallyLoad();
  }
  ngOnChanges(changes) {
    if (this._shouldRecreatePlayer(changes)) {
      this._conditionallyLoad();
    } else if (this._player) {
      if (changes["width"] || changes["height"]) {
        this._setSize();
      }
      if (changes["suggestedQuality"]) {
        this._setQuality();
      }
      if (changes["startSeconds"] || changes["endSeconds"] || changes["suggestedQuality"]) {
        this._cuePlayer();
      }
    }
  }
  ngOnDestroy() {
    this._pendingPlayer?.destroy();
    if (this._player) {
      this._player.destroy();
      window.onYouTubeIframeAPIReady = this._existingApiReadyCallback;
    }
    this._playerChanges.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#playVideo */
  playVideo() {
    if (this._player) {
      this._player.playVideo();
    } else {
      this._getPendingState().playbackState = YT.PlayerState.PLAYING;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#pauseVideo */
  pauseVideo() {
    if (this._player) {
      this._player.pauseVideo();
    } else {
      this._getPendingState().playbackState = YT.PlayerState.PAUSED;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#stopVideo */
  stopVideo() {
    if (this._player) {
      this._player.stopVideo();
    } else {
      this._getPendingState().playbackState = YT.PlayerState.CUED;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#seekTo */
  seekTo(seconds, allowSeekAhead) {
    if (this._player) {
      this._player.seekTo(seconds, allowSeekAhead);
    } else {
      this._getPendingState().seek = {
        seconds,
        allowSeekAhead
      };
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#mute */
  mute() {
    if (this._player) {
      this._player.mute();
    } else {
      this._getPendingState().muted = true;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#unMute */
  unMute() {
    if (this._player) {
      this._player.unMute();
    } else {
      this._getPendingState().muted = false;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#isMuted */
  isMuted() {
    if (this._player) {
      return this._player.isMuted();
    }
    if (this._pendingPlayerState) {
      return !!this._pendingPlayerState.muted;
    }
    return false;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#setVolume */
  setVolume(volume) {
    if (this._player) {
      this._player.setVolume(volume);
    } else {
      this._getPendingState().volume = volume;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVolume */
  getVolume() {
    if (this._player) {
      return this._player.getVolume();
    }
    if (this._pendingPlayerState && this._pendingPlayerState.volume != null) {
      return this._pendingPlayerState.volume;
    }
    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate */
  setPlaybackRate(playbackRate) {
    if (this._player) {
      return this._player.setPlaybackRate(playbackRate);
    } else {
      this._getPendingState().playbackRate = playbackRate;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlaybackRate */
  getPlaybackRate() {
    if (this._player) {
      return this._player.getPlaybackRate();
    }
    if (this._pendingPlayerState && this._pendingPlayerState.playbackRate != null) {
      return this._pendingPlayerState.playbackRate;
    }
    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getAvailablePlaybackRates */
  getAvailablePlaybackRates() {
    return this._player ? this._player.getAvailablePlaybackRates() : [];
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoLoadedFraction */
  getVideoLoadedFraction() {
    return this._player ? this._player.getVideoLoadedFraction() : 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlayerState */
  getPlayerState() {
    if (!this._isBrowser || !window.YT) {
      return void 0;
    }
    if (this._player) {
      return this._player.getPlayerState();
    }
    if (this._pendingPlayerState && this._pendingPlayerState.playbackState != null) {
      return this._pendingPlayerState.playbackState;
    }
    return YT.PlayerState.UNSTARTED;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getCurrentTime */
  getCurrentTime() {
    if (this._player) {
      return this._player.getCurrentTime();
    }
    if (this._pendingPlayerState && this._pendingPlayerState.seek) {
      return this._pendingPlayerState.seek.seconds;
    }
    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlaybackQuality */
  getPlaybackQuality() {
    return this._player ? this._player.getPlaybackQuality() : "default";
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getAvailableQualityLevels */
  getAvailableQualityLevels() {
    return this._player ? this._player.getAvailableQualityLevels() : [];
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getDuration */
  getDuration() {
    return this._player ? this._player.getDuration() : 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoUrl */
  getVideoUrl() {
    return this._player ? this._player.getVideoUrl() : "";
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoEmbedCode */
  getVideoEmbedCode() {
    return this._player ? this._player.getVideoEmbedCode() : "";
  }
  /**
   * Loads the YouTube API and sets up the player.
   * @param playVideo Whether to automatically play the video once the player is loaded.
   */
  _load(playVideo) {
    if (!this._isBrowser) {
      return;
    }
    if (!window.YT || !window.YT.Player) {
      if (this.loadApi) {
        this._isLoading = true;
        loadApi(this._nonce);
      } else if (this.showBeforeIframeApiLoads && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw new Error("Namespace YT not found, cannot construct embedded youtube player. Please install the YouTube Player API Reference for iframe Embeds: https://developers.google.com/youtube/iframe_api_reference");
      }
      this._existingApiReadyCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        this._existingApiReadyCallback?.();
        this._ngZone.run(() => this._createPlayer(playVideo));
      };
    } else {
      this._createPlayer(playVideo);
    }
  }
  /** Loads the player depending on the internal state of the component. */
  _conditionallyLoad() {
    if (!this._shouldShowPlaceholder()) {
      this._load(false);
    } else if (this.playerVars?.autoplay === 1) {
      this._load(true);
    }
  }
  /** Whether to show the placeholder element. */
  _shouldShowPlaceholder() {
    if (this.disablePlaceholder) {
      return false;
    }
    if (!this._isBrowser) {
      return true;
    }
    return this._hasPlaceholder && !!this.videoId && !this._player;
  }
  /** Gets an object that should be used to store the temporary API state. */
  _getPendingState() {
    if (!this._pendingPlayerState) {
      this._pendingPlayerState = {};
    }
    return this._pendingPlayerState;
  }
  /**
   * Determines whether a change in the component state
   * requires the YouTube player to be recreated.
   */
  _shouldRecreatePlayer(changes) {
    const change = changes["videoId"] || changes["playerVars"] || changes["disableCookies"] || changes["disablePlaceholder"];
    return !!change && !change.isFirstChange();
  }
  /**
   * Creates a new YouTube player and destroys the existing one.
   * @param playVideo Whether to play the video once it loads.
   */
  _createPlayer(playVideo) {
    this._player?.destroy();
    this._pendingPlayer?.destroy();
    if (typeof YT === "undefined" || !this.videoId && !this.playerVars?.list) {
      return;
    }
    const player = this._ngZone.runOutsideAngular(() => new YT.Player(this.youtubeContainer.nativeElement, {
      videoId: this.videoId,
      host: this.disableCookies ? "https://www.youtube-nocookie.com" : void 0,
      width: this.width,
      height: this.height,
      // Calling `playVideo` on load doesn't appear to actually play
      // the video so we need to trigger it through `playerVars` instead.
      playerVars: playVideo ? __spreadProps(__spreadValues({}, this.playerVars || {}), {
        autoplay: 1
      }) : this.playerVars
    }));
    const whenReady = () => {
      this._ngZone.run(() => {
        this._isLoading = false;
        this._hasPlaceholder = false;
        this._player = player;
        this._pendingPlayer = void 0;
        player.removeEventListener("onReady", whenReady);
        this._playerChanges.next(player);
        this._setSize();
        this._setQuality();
        if (this._pendingPlayerState) {
          this._applyPendingPlayerState(player, this._pendingPlayerState);
          this._pendingPlayerState = void 0;
        }
        const state = player.getPlayerState();
        if (state === YT.PlayerState.UNSTARTED || state === YT.PlayerState.CUED || state == null) {
          this._cuePlayer();
        }
        this._changeDetectorRef.markForCheck();
      });
    };
    this._pendingPlayer = player;
    player.addEventListener("onReady", whenReady);
  }
  /** Applies any state that changed before the player was initialized. */
  _applyPendingPlayerState(player, pendingState) {
    const {
      playbackState,
      playbackRate,
      volume,
      muted,
      seek
    } = pendingState;
    switch (playbackState) {
      case YT.PlayerState.PLAYING:
        player.playVideo();
        break;
      case YT.PlayerState.PAUSED:
        player.pauseVideo();
        break;
      case YT.PlayerState.CUED:
        player.stopVideo();
        break;
    }
    if (playbackRate != null) {
      player.setPlaybackRate(playbackRate);
    }
    if (volume != null) {
      player.setVolume(volume);
    }
    if (muted != null) {
      muted ? player.mute() : player.unMute();
    }
    if (seek != null) {
      player.seekTo(seek.seconds, seek.allowSeekAhead);
    }
  }
  /** Cues the player based on the current component state. */
  _cuePlayer() {
    if (this._player && this.videoId) {
      this._player.cueVideoById({
        videoId: this.videoId,
        startSeconds: this.startSeconds,
        endSeconds: this.endSeconds,
        suggestedQuality: this.suggestedQuality
      });
    }
  }
  /** Sets the player's size based on the current input values. */
  _setSize() {
    this._player?.setSize(this.width, this.height);
  }
  /** Sets the player's quality based on the current input values. */
  _setQuality() {
    if (this._player && this.suggestedQuality) {
      this._player.setPlaybackQuality(this.suggestedQuality);
    }
  }
  /** Gets an observable that adds an event listener to the player when a user subscribes to it. */
  _getLazyEmitter(name) {
    return this._playerChanges.pipe(
      // Switch to the bound event. `switchMap` ensures that the old event is removed when the
      // player is changed. If there's no player, return an observable that never emits.
      switchMap((player) => {
        return player ? fromEventPattern((listener) => {
          player.addEventListener(name, listener);
        }, (listener) => {
          try {
            player?.removeEventListener?.(name, listener);
          } catch {
          }
        }) : of();
      }),
      // By default we run all the API interactions outside the zone
      // so we have to bring the events back in manually when they emit.
      (source) => new Observable((observer) => source.subscribe({
        next: (value) => this._ngZone.run(() => observer.next(value)),
        error: (error) => observer.error(error),
        complete: () => observer.complete()
      })),
      // Ensures that everything is cleared out on destroy.
      takeUntil(this._destroyed)
    );
  }
  static {
    this.\u0275fac = function YouTubePlayer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _YouTubePlayer)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _YouTubePlayer,
      selectors: [["youtube-player"]],
      viewQuery: function YouTubePlayer_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.youtubeContainer = _t.first);
        }
      },
      inputs: {
        videoId: "videoId",
        height: [2, "height", "height", numberAttribute],
        width: [2, "width", "width", numberAttribute],
        startSeconds: [2, "startSeconds", "startSeconds", coerceTime],
        endSeconds: [2, "endSeconds", "endSeconds", coerceTime],
        suggestedQuality: "suggestedQuality",
        playerVars: "playerVars",
        disableCookies: [2, "disableCookies", "disableCookies", booleanAttribute],
        loadApi: [2, "loadApi", "loadApi", booleanAttribute],
        disablePlaceholder: [2, "disablePlaceholder", "disablePlaceholder", booleanAttribute],
        showBeforeIframeApiLoads: [2, "showBeforeIframeApiLoads", "showBeforeIframeApiLoads", booleanAttribute],
        placeholderButtonLabel: "placeholderButtonLabel",
        placeholderImageQuality: "placeholderImageQuality"
      },
      outputs: {
        ready: "ready",
        stateChange: "stateChange",
        error: "error",
        apiChange: "apiChange",
        playbackQualityChange: "playbackQualityChange",
        playbackRateChange: "playbackRateChange"
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 4,
      vars: 3,
      consts: [["youtubeContainer", ""], [3, "videoId", "width", "height", "isLoading", "buttonLabel", "quality"], [3, "click", "videoId", "width", "height", "isLoading", "buttonLabel", "quality"]],
      template: function YouTubePlayer_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, YouTubePlayer_Conditional_0_Template, 1, 6, "youtube-player-placeholder", 1);
          \u0275\u0275elementStart(1, "div");
          \u0275\u0275element(2, "div", null, 0);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx._shouldShowPlaceholder() ? 0 : -1);
          \u0275\u0275advance();
          \u0275\u0275styleProp("display", ctx._shouldShowPlaceholder() ? "none" : "");
        }
      },
      dependencies: [YouTubePlayerPlaceholder],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YouTubePlayer, [{
    type: Component,
    args: [{
      selector: "youtube-player",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [YouTubePlayerPlaceholder],
      template: `
    @if (_shouldShowPlaceholder()) {
      <youtube-player-placeholder
        [videoId]="videoId!"
        [width]="width"
        [height]="height"
        [isLoading]="_isLoading"
        [buttonLabel]="placeholderButtonLabel"
        [quality]="placeholderImageQuality"
        (click)="_load(true)"/>
    }
    <div [style.display]="_shouldShowPlaceholder() ? 'none' : ''">
      <div #youtubeContainer></div>
    </div>
  `
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], {
    videoId: [{
      type: Input
    }],
    height: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    width: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    startSeconds: [{
      type: Input,
      args: [{
        transform: coerceTime
      }]
    }],
    endSeconds: [{
      type: Input,
      args: [{
        transform: coerceTime
      }]
    }],
    suggestedQuality: [{
      type: Input
    }],
    playerVars: [{
      type: Input
    }],
    disableCookies: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadApi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disablePlaceholder: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showBeforeIframeApiLoads: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholderButtonLabel: [{
      type: Input
    }],
    placeholderImageQuality: [{
      type: Input
    }],
    ready: [{
      type: Output
    }],
    stateChange: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    apiChange: [{
      type: Output
    }],
    playbackQualityChange: [{
      type: Output
    }],
    playbackRateChange: [{
      type: Output
    }],
    youtubeContainer: [{
      type: ViewChild,
      args: ["youtubeContainer", {
        static: true
      }]
    }]
  });
})();
var apiLoaded = false;
function loadApi(nonce) {
  if (apiLoaded) {
    return;
  }
  const url = "https://www.youtube.com/iframe_api";
  const script = document.createElement("script");
  const callback = (event) => {
    script.removeEventListener("load", callback);
    script.removeEventListener("error", callback);
    if (event.type === "error") {
      apiLoaded = false;
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        console.error(`Failed to load YouTube API from ${url}`);
      }
    }
  };
  script.addEventListener("load", callback);
  script.addEventListener("error", callback);
  script.src = url;
  script.async = true;
  if (nonce) {
    script.setAttribute("nonce", nonce);
  }
  apiLoaded = true;
  document.body.appendChild(script);
}
var YouTubePlayerModule = class _YouTubePlayerModule {
  static {
    this.\u0275fac = function YouTubePlayerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _YouTubePlayerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _YouTubePlayerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YouTubePlayerModule, [{
    type: NgModule,
    args: [{
      imports: [YouTubePlayer],
      exports: [YouTubePlayer]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-ban.mjs
var BanIcon = class _BanIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BanIcon_BaseFactory;
    return function BanIcon_Factory(__ngFactoryType__) {
      return (\u0275BanIcon_BaseFactory || (\u0275BanIcon_BaseFactory = \u0275\u0275getInheritedFactory(_BanIcon)))(__ngFactoryType__ || _BanIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BanIcon,
    selectors: [["BanIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303296 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM1.16667 7C1.16549 5.65478 1.63303 4.35118 2.48889 3.31333L10.6867 11.5111C9.83309 12.2112 8.79816 12.6544 7.70243 12.789C6.60669 12.9236 5.49527 12.744 4.49764 12.2713C3.50001 11.7986 2.65724 11.0521 2.06751 10.1188C1.47778 9.18558 1.16537 8.10397 1.16667 7ZM11.5111 10.6867L3.31334 2.48889C4.43144 1.57388 5.84966 1.10701 7.29265 1.1789C8.73565 1.2508 10.1004 1.85633 11.1221 2.87795C12.1437 3.89956 12.7492 5.26435 12.8211 6.70735C12.893 8.15034 12.4261 9.56856 11.5111 10.6867Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function BanIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BanIcon, [{
    type: Component,
    args: [{
      selector: "BanIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303296 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM1.16667 7C1.16549 5.65478 1.63303 4.35118 2.48889 3.31333L10.6867 11.5111C9.83309 12.2112 8.79816 12.6544 7.70243 12.789C6.60669 12.9236 5.49527 12.744 4.49764 12.2713C3.50001 11.7986 2.65724 11.0521 2.06751 10.1188C1.47778 9.18558 1.16537 8.10397 1.16667 7ZM11.5111 10.6867L3.31334 2.48889C4.43144 1.57388 5.84966 1.10701 7.29265 1.1789C8.73565 1.2508 10.1004 1.85633 11.1221 2.87795C12.1437 3.89956 12.7492 5.26435 12.8211 6.70735C12.893 8.15034 12.4261 9.56856 11.5111 10.6867Z"
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

// node_modules/primeng/fesm2022/primeng-icons-star.mjs
var StarIcon = class _StarIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StarIcon_BaseFactory;
    return function StarIcon_Factory(__ngFactoryType__) {
      return (\u0275StarIcon_BaseFactory || (\u0275StarIcon_BaseFactory = \u0275\u0275getInheritedFactory(_StarIcon)))(__ngFactoryType__ || _StarIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StarIcon,
    selectors: [["StarIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function StarIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarIcon, [{
    type: Component,
    args: [{
      selector: "StarIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z"
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

// node_modules/primeng/fesm2022/primeng-icons-starfill.mjs
var StarFillIcon = class _StarFillIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StarFillIcon_BaseFactory;
    return function StarFillIcon_Factory(__ngFactoryType__) {
      return (\u0275StarFillIcon_BaseFactory || (\u0275StarFillIcon_BaseFactory = \u0275\u0275getInheritedFactory(_StarFillIcon)))(__ngFactoryType__ || _StarFillIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StarFillIcon,
    selectors: [["StarFillIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function StarFillIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarFillIcon, [{
    type: Component,
    args: [{
      selector: "StarFillIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
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

// node_modules/primeng/fesm2022/primeng-rating.mjs
var _c02 = (a0, a1) => ({
  "p-readonly": a0,
  "p-disabled": a1
});
var _c1 = (a0) => ({
  "p-focus": a0
});
var _c2 = (a0, a1) => ({
  "p-rating-item-active": a0,
  "p-focus": a1
});
function Rating_ng_container_1_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.iconCancelClass)("ngStyle", ctx_r1.iconCancelStyle);
  }
}
function Rating_ng_container_1_div_1_BanIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "BanIcon", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("styleClass", "p-rating-icon p-rating-cancel")("ngStyle", ctx_r1.iconCancelStyle);
    \u0275\u0275attribute("data-pc-section", "cancelIcon");
  }
}
function Rating_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("click", function Rating_ng_container_1_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionClick($event, 0));
    });
    \u0275\u0275elementStart(1, "span", 6)(2, "input", 7);
    \u0275\u0275listener("focus", function Rating_ng_container_1_div_1_Template_input_focus_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onInputFocus($event, 0));
    })("blur", function Rating_ng_container_1_div_1_Template_input_blur_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onInputBlur($event));
    })("change", function Rating_ng_container_1_div_1_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onChange($event, 0));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, Rating_ng_container_1_div_1_span_3_Template, 1, 2, "span", 8)(4, Rating_ng_container_1_div_1_BanIcon_4_Template, 1, 3, "BanIcon", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c1, ctx_r1.focusedOptionIndex() === 0 && ctx_r1.isFocusVisibleItem));
    \u0275\u0275attribute("data-pc-section", "cancelItem");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-p-hidden-accessible", true);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.name)("checked", ctx_r1.value === 0)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("autofocus", ctx_r1.autofocus);
    \u0275\u0275attribute("aria-label", ctx_r1.cancelAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.iconCancelClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.iconCancelClass);
  }
}
function Rating_ng_container_1_ng_template_2_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngStyle", ctx_r1.iconOffStyle)("ngClass", ctx_r1.iconOffClass);
    \u0275\u0275attribute("data-pc-section", "offIcon");
  }
}
function Rating_ng_container_1_ng_template_2_ng_container_3_StarIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "StarIcon", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngStyle", ctx_r1.iconOffStyle)("styleClass", "p-rating-icon");
    \u0275\u0275attribute("data-pc-section", "offIcon");
  }
}
function Rating_ng_container_1_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Rating_ng_container_1_ng_template_2_ng_container_3_span_1_Template, 1, 3, "span", 14)(2, Rating_ng_container_1_ng_template_2_ng_container_3_StarIcon_2_Template, 1, 3, "StarIcon", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.iconOffClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.iconOffClass);
  }
}
function Rating_ng_container_1_ng_template_2_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngStyle", ctx_r1.iconOnStyle)("ngClass", ctx_r1.iconOnClass);
    \u0275\u0275attribute("data-pc-section", "onIcon");
  }
}
function Rating_ng_container_1_ng_template_2_ng_container_4_StarFillIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "StarFillIcon", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngStyle", ctx_r1.iconOnStyle)("styleClass", "p-rating-icon p-rating-icon-active");
    \u0275\u0275attribute("data-pc-section", "onIcon");
  }
}
function Rating_ng_container_1_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Rating_ng_container_1_ng_template_2_ng_container_4_span_1_Template, 1, 3, "span", 18)(2, Rating_ng_container_1_ng_template_2_ng_container_4_StarFillIcon_2_Template, 1, 3, "StarFillIcon", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.iconOnClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.iconOnClass);
  }
}
function Rating_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function Rating_ng_container_1_ng_template_2_Template_div_click_0_listener($event) {
      const star_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionClick($event, star_r4 + 1));
    });
    \u0275\u0275elementStart(1, "span", 6)(2, "input", 7);
    \u0275\u0275listener("focus", function Rating_ng_container_1_ng_template_2_Template_input_focus_2_listener($event) {
      const star_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onInputFocus($event, star_r4 + 1));
    })("blur", function Rating_ng_container_1_ng_template_2_Template_input_blur_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onInputBlur($event));
    })("change", function Rating_ng_container_1_ng_template_2_Template_input_change_2_listener($event) {
      const star_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onChange($event, star_r4 + 1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, Rating_ng_container_1_ng_template_2_ng_container_3_Template, 3, 2, "ng-container", 13)(4, Rating_ng_container_1_ng_template_2_ng_container_4_Template, 3, 2, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c2, star_r4 + 1 <= ctx_r1.value, star_r4 + 1 === ctx_r1.focusedOptionIndex() && ctx_r1.isFocusVisibleItem));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-p-hidden-accessible", true);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.name)("checked", ctx_r1.value === 0)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("autofocus", ctx_r1.autofocus);
    \u0275\u0275attribute("aria-label", ctx_r1.starAriaLabel(star_r4 + 1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.value || i_r5 >= ctx_r1.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.value && i_r5 < ctx_r1.value);
  }
}
function Rating_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Rating_ng_container_1_div_1_Template, 5, 13, "div", 3)(2, Rating_ng_container_1_ng_template_2_Template, 5, 13, "ng-template", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cancel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.starsArray);
  }
}
function Rating_ng_template_2_span_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Rating_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275listener("click", function Rating_ng_template_2_span_0_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionClick($event, 0));
    });
    \u0275\u0275template(1, Rating_ng_template_2_span_0_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", ctx_r1.iconCancelStyle);
    \u0275\u0275attribute("data-pc-section", "cancelIcon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cancelIconTemplate);
  }
}
function Rating_ng_template_2_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Rating_ng_template_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275listener("click", function Rating_ng_template_2_span_1_Template_span_click_0_listener($event) {
      const star_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionClick($event, star_r8 + 1));
    });
    \u0275\u0275template(1, Rating_ng_template_2_span_1_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "onIcon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.getIconTemplate(i_r9));
  }
}
function Rating_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Rating_ng_template_2_span_0_Template, 2, 3, "span", 20)(1, Rating_ng_template_2_span_1_Template, 2, 2, "span", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.cancel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.starsArray);
  }
}
var RATING_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Rating),
  multi: true
};
var Rating = class _Rating {
  cd;
  config;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * When present, changing the value is not possible.
   * @group Props
   */
  readonly;
  /**
   * Number of stars.
   * @group Props
   */
  stars = 5;
  /**
   * When specified a cancel icon is displayed to allow removing the value.
   * @group Props
   */
  cancel = true;
  /**
   * Style class of the on icon.
   * @group Props
   */
  iconOnClass;
  /**
   * Inline style of the on icon.
   * @group Props
   */
  iconOnStyle;
  /**
   * Style class of the off icon.
   * @group Props
   */
  iconOffClass;
  /**
   * Inline style of the off icon.
   * @group Props
   */
  iconOffStyle;
  /**
   * Style class of the cancel icon.
   * @group Props
   */
  iconCancelClass;
  /**
   * Inline style of the cancel icon.
   * @group Props
   */
  iconCancelStyle;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Emitted on value change.
   * @param {RatingRateEvent} value - Custom rate event.
   * @group Emits
   */
  onRate = new EventEmitter();
  /**
   * Emitted when the rating is cancelled.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onCancel = new EventEmitter();
  /**
   * Emitted when the rating receives focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Emitted when the rating loses focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  templates;
  onIconTemplate;
  offIconTemplate;
  cancelIconTemplate;
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  starsArray;
  isFocusVisibleItem = true;
  focusedOptionIndex = signal(-1);
  name;
  constructor(cd, config) {
    this.cd = cd;
    this.config = config;
  }
  ngOnInit() {
    this.name = this.name || UniqueComponentId();
    this.starsArray = [];
    for (let i = 0; i < this.stars; i++) {
      this.starsArray[i] = i;
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "onicon":
          this.onIconTemplate = item.template;
          break;
        case "officon":
          this.offIconTemplate = item.template;
          break;
        case "cancelicon":
          this.cancelIconTemplate = item.template;
          break;
      }
    });
  }
  onOptionClick(event, value) {
    if (!this.readonly && !this.disabled) {
      this.onOptionSelect(event, value);
      this.isFocusVisibleItem = false;
      const firstFocusableEl = DomHandler.getFirstFocusableElement(event.currentTarget, "");
      firstFocusableEl && DomHandler.focus(firstFocusableEl);
    }
  }
  onOptionSelect(event, value) {
    this.focusedOptionIndex.set(value);
    this.updateModel(event, value || null);
  }
  onChange(event, value) {
    this.onOptionSelect(event, value);
    this.isFocusVisibleItem = true;
  }
  onInputBlur(event) {
    this.focusedOptionIndex.set(-1);
    this.onBlur.emit(event);
  }
  onInputFocus(event, value) {
    this.focusedOptionIndex.set(value);
    this.onFocus.emit(event);
  }
  updateModel(event, value) {
    this.value = value;
    this.onModelChange(this.value);
    this.onModelTouched();
    if (!value) {
      this.onCancel.emit();
    } else {
      this.onRate.emit({
        originalEvent: event,
        value
      });
    }
  }
  cancelAriaLabel() {
    return this.config.translation.clear;
  }
  starAriaLabel(value) {
    return value === 1 ? this.config.translation.aria.star : this.config.translation.aria.stars.replace(/{star}/g, value);
  }
  getIconTemplate(i) {
    return !this.value || i >= this.value ? this.offIconTemplate : this.onIconTemplate;
  }
  writeValue(value) {
    this.value = value;
    this.cd.detectChanges();
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
  get isCustomIcon() {
    return this.templates && this.templates.length > 0;
  }
  static \u0275fac = function Rating_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Rating)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Rating,
    selectors: [["p-rating"]],
    contentQueries: function Rating_ContentQueries(rf, ctx, dirIndex) {
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
      disabled: [2, "disabled", "disabled", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      stars: [2, "stars", "stars", numberAttribute],
      cancel: [2, "cancel", "cancel", booleanAttribute],
      iconOnClass: "iconOnClass",
      iconOnStyle: "iconOnStyle",
      iconOffClass: "iconOffClass",
      iconOffStyle: "iconOffStyle",
      iconCancelClass: "iconCancelClass",
      iconCancelStyle: "iconCancelStyle",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onRate: "onRate",
      onCancel: "onCancel",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RATING_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    decls: 4,
    vars: 8,
    consts: [["customTemplate", ""], [1, "p-rating", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["class", "p-rating-item p-rating-cancel-item", 3, "ngClass", "click", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "p-rating-item", "p-rating-cancel-item", 3, "click", "ngClass"], [1, "p-hidden-accessible"], ["type", "radio", "value", "0", "pAutoFocus", "", 3, "focus", "blur", "change", "name", "checked", "disabled", "readonly", "autofocus"], ["class", "p-rating-icon p-rating-cancel", 3, "ngClass", "ngStyle", 4, "ngIf"], [3, "styleClass", "ngStyle", 4, "ngIf"], [1, "p-rating-icon", "p-rating-cancel", 3, "ngClass", "ngStyle"], [3, "styleClass", "ngStyle"], [1, "p-rating-item", 3, "click", "ngClass"], [4, "ngIf"], ["class", "p-rating-icon", 3, "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "styleClass", 4, "ngIf"], [1, "p-rating-icon", 3, "ngStyle", "ngClass"], [3, "ngStyle", "styleClass"], ["class", "p-rating-icon p-rating-icon-active", 3, "ngStyle", "ngClass", 4, "ngIf"], [1, "p-rating-icon", "p-rating-icon-active", 3, "ngStyle", "ngClass"], ["class", "p-rating-icon p-rating-cancel", 3, "ngStyle", "click", 4, "ngIf"], ["class", "p-rating-icon", 3, "click", 4, "ngFor", "ngForOf"], [1, "p-rating-icon", "p-rating-cancel", 3, "click", "ngStyle"], [4, "ngTemplateOutlet"], [1, "p-rating-icon", 3, "click"]],
    template: function Rating_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, Rating_ng_container_1_Template, 3, 2, "ng-container", 2)(2, Rating_ng_template_2_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const customTemplate_r10 = \u0275\u0275reference(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c02, ctx.readonly, ctx.disabled));
        \u0275\u0275attribute("data-pc-name", "rating")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isCustomIcon)("ngIfElse", customTemplate_r10);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, AutoFocus, StarFillIcon, StarIcon, BanIcon],
    styles: ["@layer primeng{.p-rating{display:inline-flex;position:relative;align-items:center}.p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Rating, [{
    type: Component,
    args: [{
      selector: "p-rating",
      template: `
        <div class="p-rating" [ngClass]="{ 'p-readonly': readonly, 'p-disabled': disabled }" [attr.data-pc-name]="'rating'" [attr.data-pc-section]="'root'">
            <ng-container *ngIf="!isCustomIcon; else customTemplate">
                <div *ngIf="cancel" [attr.data-pc-section]="'cancelItem'" (click)="onOptionClick($event, 0)" [ngClass]="{ 'p-focus': focusedOptionIndex() === 0 && isFocusVisibleItem }" class="p-rating-item p-rating-cancel-item">
                    <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        <input
                            type="radio"
                            value="0"
                            [name]="name"
                            [checked]="value === 0"
                            [disabled]="disabled"
                            [readonly]="readonly"
                            [attr.aria-label]="cancelAriaLabel()"
                            (focus)="onInputFocus($event, 0)"
                            (blur)="onInputBlur($event)"
                            (change)="onChange($event, 0)"
                            pAutoFocus
                            [autofocus]="autofocus"
                        />
                    </span>
                    <span *ngIf="iconCancelClass" class="p-rating-icon p-rating-cancel" [ngClass]="iconCancelClass" [ngStyle]="iconCancelStyle"></span>
                    <BanIcon *ngIf="!iconCancelClass" [styleClass]="'p-rating-icon p-rating-cancel'" [ngStyle]="iconCancelStyle" [attr.data-pc-section]="'cancelIcon'" />
                </div>
                <ng-template ngFor [ngForOf]="starsArray" let-star let-i="index">
                    <div class="p-rating-item" [ngClass]="{ 'p-rating-item-active': star + 1 <= value, 'p-focus': star + 1 === focusedOptionIndex() && isFocusVisibleItem }" (click)="onOptionClick($event, star + 1)">
                        <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                            <input
                                type="radio"
                                value="0"
                                [name]="name"
                                [checked]="value === 0"
                                [disabled]="disabled"
                                [readonly]="readonly"
                                [attr.aria-label]="starAriaLabel(star + 1)"
                                (focus)="onInputFocus($event, star + 1)"
                                (blur)="onInputBlur($event)"
                                (change)="onChange($event, star + 1)"
                                pAutoFocus
                                [autofocus]="autofocus"
                            />
                        </span>
                        <ng-container *ngIf="!value || i >= value">
                            <span class="p-rating-icon" *ngIf="iconOffClass" [ngStyle]="iconOffStyle" [ngClass]="iconOffClass" [attr.data-pc-section]="'offIcon'"></span>
                            <StarIcon *ngIf="!iconOffClass" [ngStyle]="iconOffStyle" [styleClass]="'p-rating-icon'" [attr.data-pc-section]="'offIcon'" />
                        </ng-container>
                        <ng-container *ngIf="value && i < value">
                            <span class="p-rating-icon p-rating-icon-active" *ngIf="iconOnClass" [ngStyle]="iconOnStyle" [ngClass]="iconOnClass" [attr.data-pc-section]="'onIcon'"></span>
                            <StarFillIcon *ngIf="!iconOnClass" [ngStyle]="iconOnStyle" [styleClass]="'p-rating-icon p-rating-icon-active'" [attr.data-pc-section]="'onIcon'" />
                        </ng-container>
                    </div>
                </ng-template>
            </ng-container>
            <ng-template #customTemplate>
                <span *ngIf="cancel" (click)="onOptionClick($event, 0)" class="p-rating-icon p-rating-cancel" [ngStyle]="iconCancelStyle" [attr.data-pc-section]="'cancelIcon'">
                    <ng-container *ngTemplateOutlet="cancelIconTemplate"></ng-container>
                </span>
                <span *ngFor="let star of starsArray; let i = index" class="p-rating-icon" (click)="onOptionClick($event, star + 1)" [attr.data-pc-section]="'onIcon'">
                    <ng-container *ngTemplateOutlet="getIconTemplate(i)"></ng-container>
                </span>
            </ng-template>
        </div>
    `,
      providers: [RATING_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-rating{display:inline-flex;position:relative;align-items:center}.p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
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
    stars: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    cancel: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconOnClass: [{
      type: Input
    }],
    iconOnStyle: [{
      type: Input
    }],
    iconOffClass: [{
      type: Input
    }],
    iconOffStyle: [{
      type: Input
    }],
    iconCancelClass: [{
      type: Input
    }],
    iconCancelStyle: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onRate: [{
      type: Output
    }],
    onCancel: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var RatingModule = class _RatingModule {
  static \u0275fac = function RatingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RatingModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, AutoFocusModule, StarFillIcon, StarIcon, BanIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AutoFocusModule, StarFillIcon, StarIcon, BanIcon],
      exports: [Rating, SharedModule],
      declarations: [Rating]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputtextarea.mjs
var InputTextarea = class _InputTextarea {
  el;
  ngModel;
  control;
  cd;
  config;
  /**
   * When present, textarea size changes as being typed.
   * @group Props
   */
  autoResize;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Callback to invoke on textarea resize.
   * @param {(Event | {})} event - Custom resize event.
   * @group Emits
   */
  onResize = new EventEmitter();
  filled;
  cachedScrollHeight;
  ngModelSubscription;
  ngControlSubscription;
  constructor(el, ngModel, control, cd, config) {
    this.el = el;
    this.ngModel = ngModel;
    this.control = control;
    this.cd = cd;
    this.config = config;
  }
  ngOnInit() {
    if (this.ngModel) {
      this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
    if (this.control) {
      this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  ngAfterViewInit() {
    if (this.autoResize) this.resize();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  onInput(e) {
    this.updateState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  resize(event) {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = "scroll";
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = "hidden";
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    this.updateFilledState();
    if (this.autoResize) {
      this.resize();
    }
  }
  ngOnDestroy() {
    if (this.ngModelSubscription) {
      this.ngModelSubscription.unsubscribe();
    }
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
  }
  static \u0275fac = function InputTextarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputTextarea)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgModel, 8), \u0275\u0275directiveInject(NgControl, 8), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InputTextarea,
    selectors: [["", "pInputTextarea", ""]],
    hostAttrs: [1, "p-inputtextarea", "p-inputtext", "p-component", "p-element"],
    hostVars: 6,
    hostBindings: function InputTextarea_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function InputTextarea_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled");
      }
    },
    inputs: {
      autoResize: [2, "autoResize", "autoResize", booleanAttribute],
      variant: "variant"
    },
    outputs: {
      onResize: "onResize"
    },
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextarea, [{
    type: Directive,
    args: [{
      selector: "[pInputTextarea]",
      host: {
        class: "p-inputtextarea p-inputtext p-component p-element",
        "[class.p-filled]": "filled",
        "[class.p-inputtextarea-resizable]": "autoResize",
        "[class.p-variant-filled]": 'variant === "filled" || config.inputStyle() === "filled"'
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgModel,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgControl,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    autoResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    onResize: [{
      type: Output
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var InputTextareaModule = class _InputTextareaModule {
  static \u0275fac = function InputTextareaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputTextareaModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputTextareaModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextareaModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputTextarea],
      declarations: [InputTextarea]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-thlarge.mjs
var ThLargeIcon = class _ThLargeIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ThLargeIcon_BaseFactory;
    return function ThLargeIcon_Factory(__ngFactoryType__) {
      return (\u0275ThLargeIcon_BaseFactory || (\u0275ThLargeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ThLargeIcon)))(__ngFactoryType__ || _ThLargeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ThLargeIcon,
    selectors: [["ThLargeIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ThLargeIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThLargeIcon, [{
    type: Component,
    args: [{
      selector: "ThLargeIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z"
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

// node_modules/primeng/fesm2022/primeng-icons-bars.mjs
var BarsIcon = class _BarsIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BarsIcon_BaseFactory;
    return function BarsIcon_Factory(__ngFactoryType__) {
      return (\u0275BarsIcon_BaseFactory || (\u0275BarsIcon_BaseFactory = \u0275\u0275getInheritedFactory(_BarsIcon)))(__ngFactoryType__ || _BarsIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BarsIcon,
    selectors: [["BarsIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z", "fill", "currentColor"]],
    template: function BarsIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarsIcon, [{
    type: Component,
    args: [{
      selector: "BarsIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dataview.mjs
var _c03 = [[["p-header"]], [["p-footer"]]];
var _c12 = ["p-header", "p-footer"];
var _c22 = (a0, a1) => ({
  "p-dataview p-component": true,
  "p-dataview-list": a0,
  "p-dataview-grid": a1
});
var _c3 = (a0) => ({
  $implicit: a0
});
function DataView_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("p-dataview-loading-icon pi-spin " + ctx_r0.loadingIcon);
  }
}
function DataView_div_1_ng_container_3_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SpinnerIcon", 15);
  }
  if (rf & 2) {
    \u0275\u0275property("spin", true)("styleClass", "p-dataview-loading-icon");
  }
}
function DataView_div_1_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function DataView_div_1_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataView_div_1_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DataView_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DataView_div_1_ng_container_3_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 13)(2, DataView_div_1_ng_container_3_2_Template, 1, 0, null, 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingIconTemplate);
  }
}
function DataView_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275template(2, DataView_div_1_i_2_Template, 1, 2, "i", 12)(3, DataView_div_1_ng_container_3_Template, 3, 2, "ng-container", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIcon);
  }
}
function DataView_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, DataView_div_2_ng_container_2_Template, 1, 0, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function DataView_p_paginator_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 17);
    \u0275\u0275listener("onPageChange", function DataView_p_paginator_3_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.paginate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.paginatorStyleClass);
  }
}
function DataView_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyMessageLabel, " ");
  }
}
function DataView_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 0);
  }
}
function DataView_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18);
    \u0275\u0275template(2, DataView_div_7_ng_container_2_Template, 2, 1, "ng-container", 19)(3, DataView_div_7_ng_container_3_Template, 2, 0, "ng-container", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.emptyMessageTemplate)("ngIfElse", ctx_r0.empty);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.emptyMessageTemplate);
  }
}
function DataView_p_paginator_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 20);
    \u0275\u0275listener("onPageChange", function DataView_p_paginator_8_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.paginate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.paginatorStyleClass);
  }
}
function DataView_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, DataView_div_9_ng_container_2_Template, 1, 0, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
var _c4 = (a0) => ({
  "p-highlight": a0
});
function DataViewLayoutOptions_BarsIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "BarsIcon");
  }
}
function DataViewLayoutOptions_3_ng_template_0_Template(rf, ctx) {
}
function DataViewLayoutOptions_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataViewLayoutOptions_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DataViewLayoutOptions_ThLargeIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ThLargeIcon");
  }
}
function DataViewLayoutOptions_6_ng_template_0_Template(rf, ctx) {
}
function DataViewLayoutOptions_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataViewLayoutOptions_6_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var DataView = class _DataView {
  el;
  cd;
  filterService;
  config;
  /**
   * When specified as true, enables the pagination.
   * @group Props
   */
  paginator;
  /**
   * Number of rows to display per page.
   * @group Props
   */
  rows;
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  totalRecords;
  /**
   * Number of page links to display in paginator.
   * @group Props
   */
  pageLinks = 5;
  /**
   * Array of integer/object values to display inside rows per page dropdown of paginator
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Position of the paginator.
   * @group Props
   */
  paginatorPosition = "bottom";
  /**
   * Custom style class for paginator
   * @group Props
   */
  paginatorStyleClass;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShowPaginator = true;
  /**
   * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  paginatorDropdownAppendTo;
  /**
   * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  paginatorDropdownScrollHeight = "200px";
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
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy;
  /**
   * Whether to call lazy loading on initialization.
   * @group Props
   */
  lazyLoadOnInit = true;
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
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
   * Style class of the grid.
   * @group Props
   */
  gridStyleClass = "";
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Comma separated list of fields in the object graph to search against.
   * @group Props
   */
  filterBy;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Index of the first row to be displayed.
   * @group Props
   */
  first = 0;
  /**
   * Property name of data to use in sorting by default.
   * @group Props
   */
  sortField;
  /**
   * Order to sort the data by default.
   * @group Props
   */
  sortOrder;
  /**
   * An array of objects to display.
   * @group Props
   */
  value;
  /**
   * Defines the layout mode.
   * @group Props
   */
  get layout() {
    return this._layout;
  }
  set layout(layout) {
    this._layout = layout;
    if (this.initialized) {
      this.changeLayout(layout);
    }
  }
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   * @param {DataViewLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke when pagination occurs.
   * @param {DataViewPageEvent} event - Custom page event.
   * @group Emits
   */
  onPage = new EventEmitter();
  /**
   * Callback to invoke when sorting occurs.
   * @param {DataViewSortEvent} event - Custom sort event.
   * @group Emits
   */
  onSort = new EventEmitter();
  /**
   * Callback to invoke when changing layout.
   * @param {DataViewLayoutChangeEvent} event - Custom layout change event.
   * @group Emits
   */
  onChangeLayout = new EventEmitter();
  header;
  footer;
  templates;
  _value;
  listTemplate;
  gridTemplate;
  itemTemplate;
  headerTemplate;
  emptyMessageTemplate;
  footerTemplate;
  paginatorLeftTemplate;
  paginatorRightTemplate;
  paginatorDropdownItemTemplate;
  loadingIconTemplate;
  listIconTemplate;
  gridIconTemplate;
  filteredValue;
  filterValue;
  initialized;
  _layout = "list";
  translationSubscription;
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  constructor(el, cd, filterService, config) {
    this.el = el;
    this.cd = cd;
    this.filterService = filterService;
    this.config = config;
  }
  ngOnInit() {
    if (this.lazy && this.lazyLoadOnInit) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  ngOnChanges(simpleChanges) {
    if (simpleChanges.value) {
      this._value = simpleChanges.value.currentValue;
      this.updateTotalRecords();
      if (!this.lazy && this.hasFilter()) {
        this.filter(this.filterValue);
      }
    }
    if (simpleChanges.sortField || simpleChanges.sortOrder) {
      if (!this.lazy || this.initialized) {
        this.sort();
      }
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "listItem":
        case "list":
          this.listTemplate = item.template;
          break;
        case "gridItem":
        case "grid":
          this.gridTemplate = item.template;
          break;
        case "paginatorleft":
          this.paginatorLeftTemplate = item.template;
          break;
        case "paginatorright":
          this.paginatorRightTemplate = item.template;
          break;
        case "paginatordropdownitem":
          this.paginatorDropdownItemTemplate = item.template;
          break;
        case "empty":
          this.emptyMessageTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "listicon":
          this.listIconTemplate = item.template;
          break;
        case "gridicon":
          this.gridIconTemplate = item.template;
          break;
      }
    });
    this.updateItemTemplate();
  }
  updateItemTemplate() {
    switch (this.layout) {
      case "list":
        this.itemTemplate = this.listTemplate;
        break;
      case "grid":
        this.itemTemplate = this.gridTemplate;
        break;
    }
  }
  changeLayout(layout) {
    this._layout = layout;
    this.onChangeLayout.emit({
      layout: this.layout
    });
    this.updateItemTemplate();
    this.cd.markForCheck();
  }
  updateTotalRecords() {
    this.totalRecords = this.lazy ? this.totalRecords : this._value ? this._value.length : 0;
  }
  paginate(event) {
    this.first = event.first;
    this.rows = event.rows;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
  }
  sort() {
    this.first = 0;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else if (this.value) {
      this.value.sort((data1, data2) => {
        let value1 = ObjectUtils.resolveFieldData(data1, this.sortField);
        let value2 = ObjectUtils.resolveFieldData(data2, this.sortField);
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2);
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return this.sortOrder * result;
      });
      if (this.hasFilter()) {
        this.filter(this.filterValue);
      }
    }
    this.onSort.emit({
      sortField: this.sortField,
      sortOrder: this.sortOrder
    });
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder
    };
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  filter(filter, filterMatchMode = "contains") {
    this.filterValue = filter;
    if (this.value && this.value.length) {
      let searchFields = this.filterBy.split(",");
      this.filteredValue = this.filterService.filter(this.value, searchFields, filter, filterMatchMode, this.filterLocale);
      if (this.filteredValue.length === this.value.length) {
        this.filteredValue = null;
      }
      if (this.paginator) {
        this.first = 0;
        this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
      }
      this.cd.markForCheck();
    }
  }
  hasFilter() {
    return this.filterValue && this.filterValue.trim().length > 0;
  }
  ngOnDestroy() {
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
  static \u0275fac = function DataView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataView)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FilterService), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DataView,
    selectors: [["p-dataView"]],
    contentQueries: function DataView_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.header = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      paginator: [2, "paginator", "paginator", booleanAttribute],
      rows: [2, "rows", "rows", numberAttribute],
      totalRecords: [2, "totalRecords", "totalRecords", numberAttribute],
      pageLinks: [2, "pageLinks", "pageLinks", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      paginatorPosition: "paginatorPosition",
      paginatorStyleClass: "paginatorStyleClass",
      alwaysShowPaginator: [2, "alwaysShowPaginator", "alwaysShowPaginator", booleanAttribute],
      paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
      paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      lazy: [2, "lazy", "lazy", booleanAttribute],
      lazyLoadOnInit: [2, "lazyLoadOnInit", "lazyLoadOnInit", booleanAttribute],
      emptyMessage: "emptyMessage",
      style: "style",
      styleClass: "styleClass",
      gridStyleClass: "gridStyleClass",
      trackBy: "trackBy",
      filterBy: "filterBy",
      filterLocale: "filterLocale",
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      first: [2, "first", "first", numberAttribute],
      sortField: "sortField",
      sortOrder: [2, "sortOrder", "sortOrder", numberAttribute],
      value: "value",
      layout: "layout"
    },
    outputs: {
      onLazyLoad: "onLazyLoad",
      onPage: "onPage",
      onSort: "onSort",
      onChangeLayout: "onChangeLayout"
    },
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c12,
    decls: 10,
    vars: 21,
    consts: [["empty", ""], [3, "ngClass", "ngStyle"], ["class", "p-dataview-loading", 4, "ngIf"], ["class", "p-dataview-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "onPageChange", 4, "ngIf"], [1, "p-dataview-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "onPageChange", 4, "ngIf"], ["class", "p-dataview-footer", 4, "ngIf"], [1, "p-dataview-loading"], [1, "p-dataview-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "spin", "styleClass"], [1, "p-dataview-header"], ["styleClass", "p-paginator-top", 3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass"], [1, "p-dataview-emptymessage"], [4, "ngIf", "ngIfElse"], ["styleClass", "p-paginator-bottom", 3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass"], [1, "p-dataview-footer"]],
    template: function DataView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c03);
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, DataView_div_1_Template, 4, 2, "div", 2)(2, DataView_div_2_Template, 3, 1, "div", 3)(3, DataView_p_paginator_3_Template, 1, 17, "p-paginator", 4);
        \u0275\u0275elementStart(4, "div", 5);
        \u0275\u0275template(5, DataView_ng_container_5_Template, 1, 0, "ng-container", 6);
        \u0275\u0275pipe(6, "slice");
        \u0275\u0275template(7, DataView_div_7_Template, 4, 3, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, DataView_p_paginator_8_Template, 1, 17, "p-paginator", 8)(9, DataView_div_9_Template, 3, 1, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c22, ctx.layout === "list", ctx.layout === "grid"))("ngStyle", ctx.style);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.header || ctx.headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(19, _c3, ctx.paginator ? \u0275\u0275pipeBind3(6, 12, ctx.filteredValue || ctx.value, ctx.lazy ? 0 : ctx.first, (ctx.lazy ? 0 : ctx.first) + ctx.rows) : ctx.filteredValue || ctx.value));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isEmpty() && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footer || ctx.footerTemplate);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Paginator, SpinnerIcon, SlicePipe],
    styles: ["@layer primeng{.p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataView, [{
    type: Component,
    args: [{
      selector: "p-dataView",
      template: `
        <div [ngClass]="{ 'p-dataview p-component': true, 'p-dataview-list': layout === 'list', 'p-dataview-grid': layout === 'grid' }" [ngStyle]="style" [class]="styleClass">
            <div class="p-dataview-loading" *ngIf="loading">
                <div class="p-dataview-loading-overlay p-component-overlay">
                    <i *ngIf="loadingIcon" [class]="'p-dataview-loading-icon pi-spin ' + loadingIcon"></i>
                    <ng-container *ngIf="!loadingIcon">
                        <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-dataview-loading-icon'" />
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </ng-container>
                </div>
            </div>
            <div class="p-dataview-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-top"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>

            <div class="p-dataview-content">
                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: paginator ? (filteredValue || value | slice: (lazy ? 0 : first) : (lazy ? 0 : first) + rows) : filteredValue || value }"></ng-container>

                <div *ngIf="isEmpty() && !loading">
                    <div class="p-dataview-emptymessage">
                        <ng-container *ngIf="!emptyMessageTemplate; else empty">
                            {{ emptyMessageLabel }}
                        </ng-container>
                        <ng-container #empty *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
                    </div>
                </div>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-bottom"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>
            <div class="p-dataview-footer" *ngIf="footer || footerTemplate">
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
      styles: ["@layer primeng{.p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FilterService
  }, {
    type: PrimeNGConfig
  }], {
    paginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    totalRecords: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageLinks: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    paginatorPosition: [{
      type: Input
    }],
    paginatorStyleClass: [{
      type: Input
    }],
    alwaysShowPaginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginatorDropdownAppendTo: [{
      type: Input
    }],
    paginatorDropdownScrollHeight: [{
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
    showJumpToPageDropdown: [{
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
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazyLoadOnInit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyMessage: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    gridStyleClass: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    first: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortField: [{
      type: Input
    }],
    sortOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    onLazyLoad: [{
      type: Output
    }],
    onPage: [{
      type: Output
    }],
    onSort: [{
      type: Output
    }],
    onChangeLayout: [{
      type: Output
    }],
    header: [{
      type: ContentChild,
      args: [Header]
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DataViewLayoutOptions = class _DataViewLayoutOptions {
  dv;
  style;
  styleClass;
  constructor(dv) {
    this.dv = dv;
  }
  changeLayout(event, layout) {
    this.dv.changeLayout(layout);
    event.preventDefault();
  }
  static \u0275fac = function DataViewLayoutOptions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataViewLayoutOptions)(\u0275\u0275directiveInject(DataView));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DataViewLayoutOptions,
    selectors: [["p-dataViewLayoutOptions"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    decls: 7,
    vars: 14,
    consts: [[3, "ngClass", "ngStyle"], ["type", "button", 1, "p-button", "p-button-icon-only", 3, "click", "keydown.enter", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function DataViewLayoutOptions_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function DataViewLayoutOptions_Template_button_click_1_listener($event) {
          return ctx.changeLayout($event, "list");
        })("keydown.enter", function DataViewLayoutOptions_Template_button_keydown_enter_1_listener($event) {
          return ctx.changeLayout($event, "list");
        });
        \u0275\u0275template(2, DataViewLayoutOptions_BarsIcon_2_Template, 1, 0, "BarsIcon", 2)(3, DataViewLayoutOptions_3_Template, 1, 0, null, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 1);
        \u0275\u0275listener("click", function DataViewLayoutOptions_Template_button_click_4_listener($event) {
          return ctx.changeLayout($event, "grid");
        })("keydown.enter", function DataViewLayoutOptions_Template_button_keydown_enter_4_listener($event) {
          return ctx.changeLayout($event, "grid");
        });
        \u0275\u0275template(5, DataViewLayoutOptions_ThLargeIcon_5_Template, 1, 0, "ThLargeIcon", 2)(6, DataViewLayoutOptions_6_Template, 1, 0, null, 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", "p-dataview-layout-options p-selectbutton p-buttonset")("ngStyle", ctx.style);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c4, ctx.dv.layout === "list"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.dv.listIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.dv.listIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c4, ctx.dv.layout === "grid"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.dv.gridIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.dv.gridIconTemplate);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, BarsIcon, ThLargeIcon],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataViewLayoutOptions, [{
    type: Component,
    args: [{
      selector: "p-dataViewLayoutOptions",
      template: `
        <div [ngClass]="'p-dataview-layout-options p-selectbutton p-buttonset'" [ngStyle]="style" [class]="styleClass">
            <button type="button" class="p-button p-button-icon-only" [ngClass]="{ 'p-highlight': dv.layout === 'list' }" (click)="changeLayout($event, 'list')" (keydown.enter)="changeLayout($event, 'list')">
                <BarsIcon *ngIf="!dv.listIconTemplate" />
                <ng-template *ngTemplateOutlet="dv.listIconTemplate"></ng-template></button
            ><button type="button" class="p-button p-button-icon-only" [ngClass]="{ 'p-highlight': dv.layout === 'grid' }" (click)="changeLayout($event, 'grid')" (keydown.enter)="changeLayout($event, 'grid')">
                <ThLargeIcon *ngIf="!dv.gridIconTemplate" />
                <ng-template *ngTemplateOutlet="dv.gridIconTemplate"></ng-template>
            </button>
        </div>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: DataView
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var DataViewModule = class _DataViewModule {
  static \u0275fac = function DataViewModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataViewModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DataViewModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule, PaginatorModule, SpinnerIcon, BarsIcon, ThLargeIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataViewModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, PaginatorModule, SpinnerIcon, BarsIcon, ThLargeIcon],
      exports: [DataView, SharedModule, DataViewLayoutOptions],
      declarations: [DataView, DataViewLayoutOptions]
    }]
  }], null, null);
})();

export {
  YouTubePlayer,
  YouTubePlayerModule,
  Rating,
  RatingModule,
  InputTextarea,
  InputTextareaModule,
  DataView,
  DataViewModule
};
//# sourceMappingURL=chunk-FDTE6EIX.js.map
