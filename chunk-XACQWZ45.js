import {
  BehaviorSubject,
  NgZone,
  distinctUntilChanged,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-3YYMYGX4.js";

// src/app/shared/services/keyboard-manager.service.ts
var KeyboardManagerService = class _KeyboardManagerService {
  /** 現在のキーボード高さ (同期取得) */
  get keyboardHeight() {
    return this._keyboardHeight$.value;
  }
  get isKeyboardOpen() {
    return this._keyboardHeight$.value > 50;
  }
  get viewportHeight() {
    return this._viewportHeight$.value;
  }
  constructor(ngZone) {
    this.ngZone = ngZone;
    this._keyboardHeight$ = new BehaviorSubject(0);
    this._viewportHeight$ = new BehaviorSubject(typeof window !== "undefined" ? window.innerHeight : 0);
    this.keyboardHeight$ = this._keyboardHeight$.asObservable().pipe(distinctUntilChanged());
    this.isKeyboardOpen$ = this._keyboardHeight$.pipe(map((h) => h > 50), distinctUntilChanged());
    this.viewportHeight$ = this._viewportHeight$.asObservable().pipe(distinctUntilChanged());
    if (typeof window === "undefined")
      return;
    this.attach();
  }
  attach() {
    const vv = window.visualViewport;
    if (vv) {
      this.vvHandler = () => {
        const kbh = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
        const vph = vv.height;
        this.ngZone.run(() => {
          this._keyboardHeight$.next(kbh);
          this._viewportHeight$.next(vph);
        });
      };
      vv.addEventListener("resize", this.vvHandler);
      vv.addEventListener("scroll", this.vvHandler);
      this.vvHandler();
    } else {
      this.resizeHandler = () => {
        this.ngZone.run(() => this._viewportHeight$.next(window.innerHeight));
      };
      window.addEventListener("resize", this.resizeHandler);
    }
  }
  ngOnDestroy() {
    const vv = window.visualViewport;
    if (vv && this.vvHandler) {
      vv.removeEventListener("resize", this.vvHandler);
      vv.removeEventListener("scroll", this.vvHandler);
    }
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
    }
  }
  static {
    this.\u0275fac = function KeyboardManagerService_Factory(t) {
      return new (t || _KeyboardManagerService)(\u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KeyboardManagerService, factory: _KeyboardManagerService.\u0275fac, providedIn: "root" });
  }
};

export {
  KeyboardManagerService
};
//# sourceMappingURL=chunk-XACQWZ45.js.map
