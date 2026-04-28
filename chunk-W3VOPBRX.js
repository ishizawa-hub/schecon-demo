import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-3YYMYGX4.js";

// src/app/shared/services/schedule-modal.service.ts
var ScheduleModalService = class _ScheduleModalService {
  constructor() {
    this._isOpen$ = new BehaviorSubject(false);
    this.isOpen$ = this._isOpen$.asObservable();
  }
  /** 現在の開閉状態 (同期取得) */
  get isOpen() {
    return this._isOpen$.value;
  }
  /** モーダルを開く */
  open() {
    if (!this._isOpen$.value) {
      this._isOpen$.next(true);
    }
  }
  /** モーダルを閉じる */
  close() {
    if (this._isOpen$.value) {
      this._isOpen$.next(false);
    }
  }
  /** 開閉トグル */
  toggle() {
    this._isOpen$.next(!this._isOpen$.value);
  }
  static {
    this.\u0275fac = function ScheduleModalService_Factory(t) {
      return new (t || _ScheduleModalService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleModalService, factory: _ScheduleModalService.\u0275fac, providedIn: "root" });
  }
};

export {
  ScheduleModalService
};
//# sourceMappingURL=chunk-W3VOPBRX.js.map
