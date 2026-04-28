import {
  ChatStateService
} from "./chunk-JXBPGVLI.js";
import {
  ScheduleModalService
} from "./chunk-W3VOPBRX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-36EVFMHL.js";
import {
  ConfirmDialogService
} from "./chunk-3K5GTNE6.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-NWSZROQH.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RangeValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-YF2NDTP4.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-VOAOX4DE.js";
import {
  MatIcon,
  MatIconModule,
  Title
} from "./chunk-MPKYFQD7.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  Subject,
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-3YYMYGX4.js";

// src/app/features/chat/components/schedule-send-modal/schedule-send-modal.component.ts
function ScheduleSendModalComponent_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
var ScheduleSendModalComponent = class _ScheduleSendModalComponent {
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.dateValue = "";
    this.timeValue = "";
    this.errorMessage = "";
  }
  ngOnInit() {
    const initial = this.data?.initialScheduledAt ? new Date(this.data.initialScheduledAt) : this.defaultDateTime();
    this.dateValue = this.toDateInput(initial);
    this.timeValue = this.toTimeInput(initial);
  }
  get isEdit() {
    return this.data?.mode === "edit";
  }
  get title() {
    return "\u4E88\u7D04\u6295\u7A3F";
  }
  get confirmText() {
    return this.isEdit ? "\u66F4\u65B0\u3059\u308B" : "\u4E88\u7D04\u3059\u308B";
  }
  get previewText() {
    return (this.data?.messageText || "").trim() || "(\u672C\u6587\u306A\u3057)";
  }
  /** デフォルト = 現在時刻 + 1 時間 */
  defaultDateTime() {
    const d = /* @__PURE__ */ new Date();
    d.setHours(d.getHours() + 1);
    d.setSeconds(0, 0);
    return d;
  }
  toDateInput(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  toTimeInput(d) {
    const h = String(d.getHours()).padStart(2, "0");
    const mi = String(d.getMinutes()).padStart(2, "0");
    return `${h}:${mi}`;
  }
  applyPreset(preset) {
    const d = /* @__PURE__ */ new Date();
    if (preset === "in1h") {
      d.setHours(d.getHours() + 1);
      d.setSeconds(0, 0);
    } else if (preset === "tomorrow9") {
      d.setDate(d.getDate() + 1);
      d.setHours(9, 0, 0, 0);
    } else if (preset === "nextMon9") {
      const day = d.getDay();
      let add = (1 - day + 7) % 7;
      if (add === 0)
        add = 7;
      d.setDate(d.getDate() + add);
      d.setHours(9, 0, 0, 0);
    }
    this.dateValue = this.toDateInput(d);
    this.timeValue = this.toTimeInput(d);
    this.errorMessage = "";
  }
  parseScheduledAt() {
    if (!this.dateValue || !this.timeValue)
      return null;
    const [y, m, day] = this.dateValue.split("-").map(Number);
    const [h, mi] = this.timeValue.split(":").map(Number);
    if (!Number.isFinite(y) || !Number.isFinite(m) || !Number.isFinite(day) || !Number.isFinite(h) || !Number.isFinite(mi)) {
      return null;
    }
    const d = new Date(y, m - 1, day, h, mi, 0, 0);
    return d.getTime();
  }
  onDateTimeChange() {
    this.errorMessage = "";
  }
  onConfirm() {
    const t = this.parseScheduledAt();
    if (t == null) {
      this.errorMessage = "\u65E5\u4ED8\u3068\u6642\u523B\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044";
      return;
    }
    if (t - Date.now() < 60 * 1e3) {
      this.errorMessage = "\u73FE\u5728\u3088\u308A1\u5206\u4EE5\u4E0A\u3042\u3068\u306E\u65E5\u6642\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
      return;
    }
    this.dialogRef.close({ scheduledAt: t });
  }
  onCancel() {
    this.dialogRef.close(null);
  }
  onEscape() {
    this.onCancel();
  }
  static {
    this.\u0275fac = function ScheduleSendModalComponent_Factory(t) {
      return new (t || _ScheduleSendModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleSendModalComponent, selectors: [["app-schedule-send-modal"]], hostBindings: function ScheduleSendModalComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function ScheduleSendModalComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 6, consts: [["role", "dialog", "aria-labelledby", "scheduleModalTitle", 1, "schedule-modal"], [1, "schedule-modal__header"], ["id", "scheduleModalTitle", 1, "schedule-modal__title"], ["type", "button", "aria-label", "\u9589\u3058\u308B", 1, "schedule-modal__close", 3, "click"], [1, "schedule-modal__body"], [1, "schedule-modal__field-row"], [1, "schedule-modal__field"], [1, "schedule-modal__label"], ["type", "date", "aria-label", "\u9001\u4FE1\u65E5", 1, "schedule-modal__input", 3, "ngModelChange", "ngModel"], ["type", "time", "aria-label", "\u9001\u4FE1\u6642\u523B", 1, "schedule-modal__input", 3, "ngModelChange", "ngModel"], ["role", "group", "aria-label", "\u30AF\u30A4\u30C3\u30AF\u30D7\u30EA\u30BB\u30C3\u30C8", 1, "schedule-modal__presets"], ["type", "button", 1, "schedule-modal__preset", 3, "click"], [1, "schedule-modal__preview"], [1, "schedule-modal__preview-label"], [1, "schedule-modal__preview-body"], ["class", "schedule-modal__error", "role", "alert", 4, "ngIf"], [1, "schedule-modal__actions"], ["type", "button", 1, "schedule-modal__btn", "schedule-modal__btn--cancel", 3, "click"], ["type", "button", "cdkFocusInitial", "", 1, "schedule-modal__btn", "schedule-modal__btn--primary", 3, "click"], ["role", "alert", 1, "schedule-modal__error"]], template: function ScheduleSendModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function ScheduleSendModalComponent_Template_button_click_4_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(5, " \xD7 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label", 6)(9, "span", 7);
        \u0275\u0275text(10, "\u65E5\u4ED8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ScheduleSendModalComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateValue, $event) || (ctx.dateValue = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ScheduleSendModalComponent_Template_input_ngModelChange_11_listener() {
          return ctx.onDateTimeChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "label", 6)(13, "span", 7);
        \u0275\u0275text(14, "\u6642\u523B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ScheduleSendModalComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.timeValue, $event) || (ctx.timeValue = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ScheduleSendModalComponent_Template_input_ngModelChange_15_listener() {
          return ctx.onDateTimeChange();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 10)(17, "button", 11);
        \u0275\u0275listener("click", function ScheduleSendModalComponent_Template_button_click_17_listener() {
          return ctx.applyPreset("in1h");
        });
        \u0275\u0275text(18, " 1\u6642\u9593\u5F8C ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275listener("click", function ScheduleSendModalComponent_Template_button_click_19_listener() {
          return ctx.applyPreset("tomorrow9");
        });
        \u0275\u0275text(20, " \u660E\u65E5\u306E\u671D 9:00 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 11);
        \u0275\u0275listener("click", function ScheduleSendModalComponent_Template_button_click_21_listener() {
          return ctx.applyPreset("nextMon9");
        });
        \u0275\u0275text(22, " \u6765\u9031\u6708\u66DC 9:00 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 12)(24, "div", 13);
        \u0275\u0275text(25, "\u30D7\u30EC\u30D3\u30E5\u30FC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 14);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, ScheduleSendModalComponent_p_28_Template, 2, 1, "p", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 16)(30, "button", 17);
        \u0275\u0275listener("click", function ScheduleSendModalComponent_Template_button_click_30_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(31, " \u30AD\u30E3\u30F3\u30BB\u30EB ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 18);
        \u0275\u0275listener("click", function ScheduleSendModalComponent_Template_button_click_32_listener() {
          return ctx.onConfirm();
        });
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateValue);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.timeValue);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.previewText);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.confirmText, " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.schedule-modal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  width: min(480px, 92vw);\n  padding: 20px 22px 16px;\n  box-shadow: 0 18px 56px rgba(60, 40, 20, 0.18);\n  animation: _ngcontent-%COMP%_schedule-fade-in 0.18s ease-out;\n  font-family: inherit;\n  color: #3d2f24;\n}\n.schedule-modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.schedule-modal__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: #3d2f24;\n  letter-spacing: 0.02em;\n}\n.schedule-modal__close[_ngcontent-%COMP%] {\n  appearance: none;\n  border: none;\n  background: transparent;\n  color: #81766e;\n  font-size: 22px;\n  line-height: 1;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 999px;\n}\n.schedule-modal__close[_ngcontent-%COMP%]:hover {\n  background: #f1ece5;\n  color: #3d2f24;\n}\n.schedule-modal__close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #ff6b1a;\n  outline-offset: 2px;\n}\n.schedule-modal__body[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.schedule-modal__field-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.schedule-modal__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n  min-width: 0;\n}\n.schedule-modal__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #81766e;\n  font-weight: 600;\n}\n.schedule-modal__input[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 1px solid #e5ddd4;\n  background: #fafaf8;\n  border-radius: 10px;\n  padding: 8px 12px;\n  font-size: 14px;\n  color: #3d2f24;\n  font-family: inherit;\n  min-width: 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n.schedule-modal__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ff6b1a;\n  box-shadow: 0 0 0 3px rgba(255, 107, 26, 0.15);\n  background: #ffffff;\n}\n.schedule-modal__presets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.schedule-modal__preset[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 1px solid #e5ddd4;\n  background: #fafaf8;\n  color: #3d2f24;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.schedule-modal__preset[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ffb980;\n  color: #ff6b1a;\n}\n.schedule-modal__preset[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #ff6b1a;\n  outline-offset: 2px;\n}\n.schedule-modal__preview[_ngcontent-%COMP%] {\n  background: #fafaf8;\n  border: 1px solid #e5ddd4;\n  border-radius: 12px;\n  padding: 10px 12px;\n}\n.schedule-modal__preview-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #81766e;\n  font-weight: 600;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.schedule-modal__preview-body[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #3d2f24;\n  white-space: pre-wrap;\n  word-break: break-word;\n  max-height: 120px;\n  overflow-y: auto;\n  line-height: 1.55;\n}\n.schedule-modal__error[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 13px;\n  color: #c62828;\n  font-weight: 600;\n}\n.schedule-modal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.schedule-modal__btn[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 1px solid transparent;\n  background: transparent;\n  padding: 8px 20px;\n  min-width: 100px;\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 999px;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n  font-family: inherit;\n  line-height: 1.4;\n}\n.schedule-modal__btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #ff6b1a;\n  outline-offset: 2px;\n}\n.schedule-modal__btn--cancel[_ngcontent-%COMP%] {\n  background: #fafaf8;\n  color: #81766e;\n  border-color: #e5ddd4;\n}\n.schedule-modal__btn--cancel[_ngcontent-%COMP%]:hover {\n  background: #f1ece5;\n  color: #3d2f24;\n}\n.schedule-modal__btn--primary[_ngcontent-%COMP%] {\n  background: #ff6b1a;\n  color: #ffffff;\n  border-color: #ff6b1a;\n  box-shadow: 0 4px 12px rgba(255, 107, 26, 0.25);\n}\n.schedule-modal__btn--primary[_ngcontent-%COMP%]:hover {\n  background: #e85d0f;\n  border-color: #e85d0f;\n}\n@keyframes _ngcontent-%COMP%_schedule-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 420px) {\n  .schedule-modal__field-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n}\n  .schedule-send-modal-panel .mat-mdc-dialog-surface,   .schedule-send-modal-panel .mdc-dialog__surface {\n  background: transparent !important;\n  box-shadow: none !important;\n  overflow: visible !important;\n  padding: 0 !important;\n  border-radius: 16px !important;\n}\n  .schedule-send-modal-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n  .cdk-overlay-pane.schedule-send-modal-panel {\n  z-index: 1600 !important;\n  pointer-events: auto !important;\n}\n  .cdk-overlay-pane.schedule-send-modal-panel .mat-mdc-dialog-container,   .cdk-overlay-pane.schedule-send-modal-panel .mdc-dialog__surface,   .cdk-overlay-pane.schedule-send-modal-panel .mat-mdc-dialog-surface {\n  pointer-events: auto !important;\n}\n  .cdk-overlay-backdrop.confirm-dialog-backdrop.cdk-overlay-backdrop-showing {\n  z-index: 1500 !important;\n}\n@media (max-width: 767px) {\n  .schedule-modal[_ngcontent-%COMP%] {\n    width: 100vw;\n    max-width: 100vw;\n    max-height: 100dvh;\n    max-height: 100svh;\n    max-height: 100vh;\n    border-radius: 16px 16px 0 0;\n    padding: 16px 16px calc(16px + env(safe-area-inset-bottom, 0));\n    box-sizing: border-box;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .schedule-modal__input[_ngcontent-%COMP%], .schedule-modal__preset[_ngcontent-%COMP%] {\n    min-height: 44px;\n    font-size: 16px;\n  }\n  .schedule-modal__btn[_ngcontent-%COMP%] {\n    min-height: 44px;\n  }\n    .cdk-overlay-pane.schedule-send-modal-panel {\n    width: 100vw !important;\n    max-width: 100vw !important;\n    max-height: 100dvh !important;\n    height: auto !important;\n    position: fixed !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    top: auto !important;\n    transform: none !important;\n  }\n}\n/*# sourceMappingURL=schedule-send-modal.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleSendModalComponent, { className: "ScheduleSendModalComponent", filePath: "src\\app\\features\\chat\\components\\schedule-send-modal\\schedule-send-modal.component.ts", lineNumber: 36 });
})();

// src/app/features/chat/components/scheduled-list/scheduled-list.component.ts
function ScheduledListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, " \u4E88\u7D04\u6295\u7A3F\u306F\u3042\u308A\u307E\u305B\u3093 ");
    \u0275\u0275elementEnd();
  }
}
function ScheduledListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "span", 11);
    \u0275\u0275text(4, "\u{1F552}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "button", 14);
    \u0275\u0275listener("click", function ScheduledListComponent_div_8_Template_button_click_9_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEdit(item_r2, $event));
    });
    \u0275\u0275text(10, " \u7DE8\u96C6 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function ScheduledListComponent_div_8_Template_button_click_11_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDelete(item_r2, $event));
    });
    \u0275\u0275text(12, " \u524A\u9664 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatTime(item_r2.scheduledAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.preview(item_r2.text));
  }
}
var ScheduledListComponent = class _ScheduledListComponent {
  constructor() {
    this.items = [];
    this.edit = new EventEmitter();
    this.delete = new EventEmitter();
    this.close = new EventEmitter();
  }
  trackById(_i, item) {
    return item.id;
  }
  formatTime(ts) {
    const d = new Date(ts);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${y}/${m}/${day} ${hh}:${mm}`;
  }
  preview(text) {
    const t = (text || "").trim();
    if (t.length <= 80)
      return t;
    return t.slice(0, 80) + "\u2026";
  }
  onEdit(item, ev) {
    ev.stopPropagation();
    this.edit.emit(item);
  }
  onDelete(item, ev) {
    ev.stopPropagation();
    this.delete.emit(item);
  }
  onClose() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function ScheduledListComponent_Factory(t) {
      return new (t || _ScheduledListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduledListComponent, selectors: [["app-scheduled-list"]], inputs: { items: "items" }, outputs: { edit: "edit", delete: "delete", close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [["role", "dialog", "aria-label", "\u4E88\u7D04\u6295\u7A3F\u4E00\u89A7", 1, "scheduled-list"], [1, "scheduled-list__header"], [1, "scheduled-list__title"], ["type", "button", "aria-label", "\u9589\u3058\u308B", 1, "scheduled-list__close", 3, "click"], [1, "scheduled-list__body"], ["class", "scheduled-list__empty", 4, "ngIf"], ["class", "scheduled-list__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "scheduled-list__empty"], [1, "scheduled-list__item"], [1, "scheduled-list__item-main"], [1, "scheduled-list__item-time"], [1, "scheduled-list__clock"], [1, "scheduled-list__item-text"], [1, "scheduled-list__item-actions"], ["type", "button", "aria-label", "\u4E88\u7D04\u3092\u7DE8\u96C6", 1, "scheduled-list__icon-btn", 3, "click"], ["type", "button", "aria-label", "\u4E88\u7D04\u3092\u524A\u9664", 1, "scheduled-list__icon-btn", "scheduled-list__icon-btn--danger", 3, "click"]], template: function ScheduledListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function ScheduledListComponent_Template_button_click_4_listener() {
          return ctx.onClose();
        });
        \u0275\u0275text(5, " \xD7 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275template(7, ScheduledListComponent_div_7_Template, 2, 0, "div", 5)(8, ScheduledListComponent_div_8_Template, 13, 2, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\u4E88\u7D04\u6295\u7A3F (", ctx.items.length, "\u4EF6)");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.items.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.items)("ngForTrackBy", ctx.trackById);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.scheduled-list[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5ddd4;\n  border-radius: 14px;\n  box-shadow: 0 12px 32px rgba(60, 40, 20, 0.15);\n  max-height: 320px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  font-family: inherit;\n  color: #3d2f24;\n}\n.scheduled-list__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f1ece5;\n  background: #fafaf8;\n}\n.scheduled-list__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #3d2f24;\n}\n.scheduled-list__close[_ngcontent-%COMP%] {\n  appearance: none;\n  border: none;\n  background: transparent;\n  color: #81766e;\n  font-size: 18px;\n  line-height: 1;\n  cursor: pointer;\n  padding: 2px 8px;\n  border-radius: 999px;\n}\n.scheduled-list__close[_ngcontent-%COMP%]:hover {\n  background: #f1ece5;\n  color: #3d2f24;\n}\n.scheduled-list__body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n  padding: 4px 0;\n}\n.scheduled-list__empty[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  color: #81766e;\n  font-size: 13px;\n}\n.scheduled-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f7f3ee;\n}\n.scheduled-list__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.scheduled-list__item[_ngcontent-%COMP%]:hover {\n  background: #fffaf3;\n}\n.scheduled-list__item-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.scheduled-list__item-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ff6b1a;\n  font-weight: 700;\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.scheduled-list__clock[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.scheduled-list__item-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #3d2f24;\n  line-height: 1.5;\n  word-break: break-word;\n  white-space: pre-wrap;\n}\n.scheduled-list__item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.scheduled-list__icon-btn[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 1px solid #e5ddd4;\n  background: #fafaf8;\n  color: #3d2f24;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 999px;\n  cursor: pointer;\n  font-family: inherit;\n  transition:\n    background-color 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease;\n}\n.scheduled-list__icon-btn[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ffb980;\n  color: #ff6b1a;\n}\n.scheduled-list__icon-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #ff6b1a;\n  outline-offset: 2px;\n}\n.scheduled-list__icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #ffebee;\n  border-color: #ef9a9a;\n  color: #c62828;\n}\n/*# sourceMappingURL=scheduled-list.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduledListComponent, { className: "ScheduledListComponent", filePath: "src\\app\\features\\chat\\components\\scheduled-list\\scheduled-list.component.ts", lineNumber: 21 });
})();

// src/app/shared/services/scheduled-messages.service.ts
var STORAGE_KEY = "schecon.scheduledMessages.v1";
var TICK_INTERVAL_MS = 30 * 1e3;
var ScheduledMessagesService = class _ScheduledMessagesService {
  constructor() {
    this.scheduled$ = new BehaviorSubject(this.load());
    this.due$ = new Subject();
    this.intervalId = null;
    this.catchUpCount = 0;
    this.catchUpEmitted$ = new Subject();
    this.catchUpOverdue();
    if (typeof window !== "undefined") {
      this.intervalId = setInterval(() => this.tick(), TICK_INTERVAL_MS);
    }
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  // ========== Public API ==========
  /** すべての予約投稿 */
  getAll() {
    return this.scheduled$.value;
  }
  /** 指定ルームの予約投稿 (同期) */
  getForRoom(roomId) {
    return this.scheduled$.value.filter((m) => m.roomId === roomId).sort((a, b) => a.scheduledAt - b.scheduledAt);
  }
  /** 指定ルームの予約投稿 (Observable) */
  getForRoom$(roomId) {
    return this.scheduled$.asObservable().pipe(map((list) => list.filter((m) => m.roomId === roomId).sort((a, b) => a.scheduledAt - b.scheduledAt)));
  }
  /** 期限到達メッセージ (ChatPage が購読して実送信) */
  dueMessage$() {
    return this.due$.asObservable();
  }
  /** 起動時キャッチアップで送信された合計件数を通知 */
  catchUpCount$() {
    return this.catchUpEmitted$.asObservable();
  }
  /** 予約投稿を追加 */
  schedule(msg) {
    const entry = __spreadProps(__spreadValues({}, msg), {
      id: "sched-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7),
      createdAt: Date.now()
    });
    const next = [...this.scheduled$.value, entry];
    this.scheduled$.next(next);
    this.save(next);
    return entry;
  }
  /** 予約投稿を部分更新 (編集時) */
  update(id, patch) {
    const next = this.scheduled$.value.map((m) => m.id === id ? __spreadValues(__spreadValues({}, m), patch) : m);
    this.scheduled$.next(next);
    this.save(next);
  }
  /** 予約投稿をキャンセル (削除) */
  cancel(id) {
    const next = this.scheduled$.value.filter((m) => m.id !== id);
    this.scheduled$.next(next);
    this.save(next);
  }
  // ========== Internal ==========
  /** 起動時に期限切れの予約投稿をまとめて due として発火 */
  catchUpOverdue() {
    const now = Date.now();
    const due = this.scheduled$.value.filter((m) => m.scheduledAt <= now);
    if (due.length === 0)
      return;
    const remaining = this.scheduled$.value.filter((m) => m.scheduledAt > now);
    this.scheduled$.next(remaining);
    this.save(remaining);
    setTimeout(() => {
      due.forEach((m) => this.due$.next(m));
      this.catchUpCount = due.length;
      this.catchUpEmitted$.next(due.length);
    }, 0);
  }
  /** 定期的に期限チェック */
  tick() {
    const now = Date.now();
    const list = this.scheduled$.value;
    const due = list.filter((m) => m.scheduledAt <= now);
    if (due.length === 0)
      return;
    const remaining = list.filter((m) => m.scheduledAt > now);
    this.scheduled$.next(remaining);
    this.save(remaining);
    due.forEach((m) => this.due$.next(m));
  }
  // ========== localStorage ==========
  load() {
    if (typeof window === "undefined" || !window.localStorage)
      return [];
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw)
        return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }
  save(list) {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
    }
  }
  static {
    this.\u0275fac = function ScheduledMessagesService_Factory(t) {
      return new (t || _ScheduledMessagesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduledMessagesService, factory: _ScheduledMessagesService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/chat/pages/chat-page/chat-page.component.ts
var _c0 = ["messagesScrollRef"];
var _c1 = ["msgInputRef"];
var _c2 = ["avatarFileInput"];
var _c3 = (a0) => ({ $implicit: a0, depth: 0 });
var _c4 = (a0, a1) => ({ $implicit: a0, depth: a1 });
var _c5 = () => [];
var _c6 = () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function ChatPageComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ChatPageComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reopenSelectedRoom());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47)(4, "span", 48);
    \u0275\u0275text(5, "\u6700\u5F8C\u306E\u30C1\u30E3\u30C3\u30C8\u30EB\u30FC\u30E0\u306B\u623B\u308B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", "\u6700\u5F8C\u306E\u30C1\u30E3\u30C3\u30C8\u30EB\u30FC\u30E0\u306B\u623B\u308B: " + ctx_r2.selectedRoom.name);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedRoom.name);
  }
}
function ChatPageComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.filteredRooms.length === 0 ? "\u8A72\u5F53\u306A\u3057" : ctx_r2.filteredRooms.length + " \u4EF6", " ");
  }
}
function ChatPageComponent_ng_container_29_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ChatPageComponent_ng_container_29_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_ng_container_29_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const folderNode_r6 = \u0275\u0275reference(31);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", folderNode_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, f_r5));
  }
}
function ChatPageComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 51);
    \u0275\u0275template(2, ChatPageComponent_ng_container_29_ng_container_2_Template, 2, 4, "ng-container", 52);
    \u0275\u0275elementStart(3, "button", 53);
    \u0275\u0275listener("click", function ChatPageComponent_ng_container_29_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openFolderCreateModal());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "create_new_folder");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u65B0\u898F\u4F5C\u6210 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.rootFolders);
  }
}
function ChatPageComponent_ng_template_30_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isFolderExpanded(f_r8.id) ? "expand_more" : "chevron_right", " ");
  }
}
function ChatPageComponent_ng_template_30_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
  if (rf & 2) {
    const f_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r2.folderUnreadCount(f_r8.id) + "\u4EF6\u306E\u672A\u8AAD");
  }
}
function ChatPageComponent_ng_template_30_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "button", 66);
    \u0275\u0275listener("click", function ChatPageComponent_ng_template_30_div_10_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const f_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.openFolderBulkManageModal(f_r8, $event);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "playlist_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 67);
    \u0275\u0275listener("click", function ChatPageComponent_ng_template_30_div_10_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const f_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.renameFolder(f_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 68);
    \u0275\u0275listener("click", function ChatPageComponent_ng_template_30_div_10_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const f_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.deleteFolder(f_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
}
function ChatPageComponent_ng_template_30_div_11_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ChatPageComponent_ng_template_30_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_ng_template_30_div_11_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const child_r10 = ctx.$implicit;
    const depth_r11 = \u0275\u0275nextContext(2).depth;
    \u0275\u0275nextContext();
    const folderNode_r6 = \u0275\u0275reference(31);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", folderNode_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c4, child_r10, depth_r11 + 1));
  }
}
function ChatPageComponent_ng_template_30_div_11_button_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 78);
  }
}
function ChatPageComponent_ng_template_30_div_11_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("dragstart", function ChatPageComponent_ng_template_30_div_11_button_3_Template_button_dragstart_0_listener($event) {
      const room_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onRoomDragStart($event, room_r13.id));
    })("click", function ChatPageComponent_ng_template_30_div_11_button_3_Template_button_click_0_listener() {
      const room_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectRoom(room_r13.id));
    });
    \u0275\u0275elementStart(1, "div", 74)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 75);
    \u0275\u0275template(5, ChatPageComponent_ng_template_30_div_11_button_3_span_5_Template, 1, 0, "span", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 77);
    \u0275\u0275listener("click", function ChatPageComponent_ng_template_30_div_11_button_3_Template_button_click_7_listener($event) {
      const room_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeRoomFromFolder(room_r13.id, $event));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const room_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("room-item--selected", room_r13.id === ctx_r2.selectedRoomId)("room-item--unread", (room_r13.unreadCount || 0) > 0);
    \u0275\u0275attribute("draggable", room_r13.type !== "my" ? true : null);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", room_r13.avatarColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(room_r13.initial);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (room_r13.unreadCount || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r13.name, " ");
  }
}
function ChatPageComponent_ng_template_30_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1, "\uFF08\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u30C1\u30E3\u30C3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093\uFF09");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_ng_template_30_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275template(1, ChatPageComponent_ng_template_30_div_11_ng_container_1_Template, 2, 5, "ng-container", 52);
    \u0275\u0275elementStart(2, "div", 70);
    \u0275\u0275template(3, ChatPageComponent_ng_template_30_div_11_button_3_Template, 10, 10, "button", 71)(4, ChatPageComponent_ng_template_30_div_11_div_4_Template, 2, 0, "div", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getChildFolders(f_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getRoomsInFolder(f_r8.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getRoomsInFolder(f_r8.id).length === 0 && ctx_r2.getChildFolders(f_r8.id).length === 0);
  }
}
function ChatPageComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("dragstart", function ChatPageComponent_ng_template_30_Template_div_dragstart_0_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFolderDragStart($event, f_r8.id));
    })("dragover", function ChatPageComponent_ng_template_30_Template_div_dragover_0_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFolderDragOver($event, f_r8.id));
    })("dragleave", function ChatPageComponent_ng_template_30_Template_div_dragleave_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFolderDragLeave());
    })("drop", function ChatPageComponent_ng_template_30_Template_div_drop_0_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFolderDrop($event, f_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 56);
    \u0275\u0275listener("click", function ChatPageComponent_ng_template_30_Template_div_click_1_listener() {
      const f_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFolder(f_r8.id));
    });
    \u0275\u0275template(2, ChatPageComponent_ng_template_30_mat_icon_2_Template, 2, 1, "mat-icon", 57);
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 58);
    \u0275\u0275template(6, ChatPageComponent_ng_template_30_span_6_Template, 1, 1, "span", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ChatPageComponent_ng_template_30_div_10_Template, 10, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ChatPageComponent_ng_template_30_div_11_Template, 5, 3, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    const depth_r11 = ctx.depth;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("padding-left", depth_r11 * 12, "px");
    \u0275\u0275classProp("folder-view__item--nested", depth_r11 > 0)("folder-view__item--drop", ctx_r2.dropIndicatorFolderId === f_r8.id);
    \u0275\u0275attribute("draggable", !f_r8.system ? true : null);
    \u0275\u0275advance();
    \u0275\u0275classProp("folder-view__head--unread", ctx_r2.hasFolderUnread(f_r8.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getChildFolders(f_r8.id).length > 0 || ctx_r2.getRoomsInFolder(f_r8.id).length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("folder-view__icon--fav", f_r8.id === "favorites")("folder-view__icon--blocked", f_r8.id === "blocked");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r8.icon);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.hasFolderUnread(f_r8.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r8.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getRoomsInFolder(f_r8.id).length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !f_r8.system);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFolderExpanded(f_r8.id));
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 99);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r2.myAvatarImage, \u0275\u0275sanitizeUrl);
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 100);
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 101);
  }
  if (rf & 2) {
    const room_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", room_r15.avatarImage, \u0275\u0275sanitizeUrl)("alt", room_r15.name);
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const room_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", room_r15.avatarColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(room_r15.initial);
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", room_r15.extraMembers, "");
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 103);
    \u0275\u0275text(1, "group");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 104);
    \u0275\u0275text(1, "folder");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
  if (rf & 2) {
    const room_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", room_r15.unreadCount + "\u4EF6\u306E\u672A\u8AAD");
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 105)(1, "mat-icon", 106);
    \u0275\u0275text(2, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", room_r15.lastMessage, " ");
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1, " \u3042\u306A\u305F\u306E\u4E88\u5B9A\u3084\u30BF\u30B9\u30AF\u3001\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u304C\u78BA\u8A8D\u3067\u304D\u307E\u3059 ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_mat_icon_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 108);
    \u0275\u0275text(1, "warning_amber");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function ChatPageComponent_ng_template_32_ng_container_0_button_1_button_21_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const room_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openAddToFolderModal(room_r15, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const room_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r2.getRoomFolderIds(room_r15).length ? "\u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0\u30FB\u5909\u66F4" : "\u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0");
    \u0275\u0275advance();
    \u0275\u0275classProp("room-item__star--active", ctx_r2.getRoomFolderIds(room_r15).length > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getRoomFolderIds(room_r15).length ? "folder" : "folder_open");
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("dragstart", function ChatPageComponent_ng_template_32_ng_container_0_button_1_Template_button_dragstart_0_listener($event) {
      const room_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onRoomDragStart($event, room_r15.id));
    })("dragover", function ChatPageComponent_ng_template_32_ng_container_0_button_1_Template_button_dragover_0_listener($event) {
      const room_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onRoomDragOver($event, room_r15.id));
    })("dragleave", function ChatPageComponent_ng_template_32_ng_container_0_button_1_Template_button_dragleave_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onRoomDragLeave());
    })("drop", function ChatPageComponent_ng_template_32_ng_container_0_button_1_Template_button_drop_0_listener($event) {
      const room_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onRoomDrop($event, room_r15.id));
    })("click", function ChatPageComponent_ng_template_32_ng_container_0_button_1_Template_button_click_0_listener() {
      const room_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectRoom(room_r15.id));
    });
    \u0275\u0275elementStart(1, "div", 82);
    \u0275\u0275template(2, ChatPageComponent_ng_template_32_ng_container_0_button_1_img_2_Template, 1, 1, "img", 83)(3, ChatPageComponent_ng_template_32_ng_container_0_button_1_img_3_Template, 1, 0, "img", 84)(4, ChatPageComponent_ng_template_32_ng_container_0_button_1_img_4_Template, 1, 2, "img", 85)(5, ChatPageComponent_ng_template_32_ng_container_0_button_1_div_5_Template, 3, 3, "div", 86)(6, ChatPageComponent_ng_template_32_ng_container_0_button_1_span_6_Template, 2, 1, "span", 87)(7, ChatPageComponent_ng_template_32_ng_container_0_button_1_mat_icon_7_Template, 2, 0, "mat-icon", 88)(8, ChatPageComponent_ng_template_32_ng_container_0_button_1_mat_icon_8_Template, 2, 0, "mat-icon", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 90)(10, "div", 91)(11, "span", 75);
    \u0275\u0275template(12, ChatPageComponent_ng_template_32_ng_container_0_button_1_span_12_Template, 1, 1, "span", 59);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 92);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 93);
    \u0275\u0275template(17, ChatPageComponent_ng_template_32_ng_container_0_button_1_span_17_Template, 4, 1, "span", 94)(18, ChatPageComponent_ng_template_32_ng_container_0_button_1_span_18_Template, 2, 0, "span", 95);
    \u0275\u0275elementStart(19, "div", 96);
    \u0275\u0275template(20, ChatPageComponent_ng_template_32_ng_container_0_button_1_mat_icon_20_Template, 2, 0, "mat-icon", 97)(21, ChatPageComponent_ng_template_32_ng_container_0_button_1_button_21_Template, 3, 4, "button", 98);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const room_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("room-item--selected", room_r15.id === ctx_r2.selectedRoomId)("room-item--mychat", room_r15.type === "my")("room-item--drop", ctx_r2.dropIndicatorRoomId === room_r15.id)("room-item--unread", (room_r15.unreadCount || 0) > 0);
    \u0275\u0275attribute("draggable", room_r15.type !== "my" ? true : null)("data-testid", "room-item-" + room_r15.id)("data-room-type", room_r15.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", room_r15.type === "my" && ctx_r2.myAvatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r15.type === "my" && !ctx_r2.myAvatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r15.type !== "my" && room_r15.avatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r15.type !== "my" && !room_r15.avatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r15.extraMembers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r15.type === "group");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r15.type === "my");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (room_r15.unreadCount || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r15.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(room_r15.timestamp);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", room_r15.type !== "my");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r15.type === "my");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", room_r15.hasWarning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r15.type !== "my");
  }
}
function ChatPageComponent_ng_template_32_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_ng_template_32_ng_container_0_button_1_Template, 22, 25, "button", 80);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredRooms);
  }
}
function ChatPageComponent_ng_template_32_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "mat-icon");
    \u0275\u0275text(2, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u8868\u793A\u3059\u308B\u30C1\u30E3\u30C3\u30C8\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatPageComponent_ng_template_32_ng_container_0_Template, 2, 1, "ng-container", 31)(1, ChatPageComponent_ng_template_32_ng_template_1_Template, 5, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const emptyRooms_r17 = \u0275\u0275reference(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.filteredRooms.length > 0)("ngIfElse", emptyRooms_r17);
  }
}
function ChatPageComponent_section_39_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162)(1, "span");
    \u0275\u0275text(2, "\u77F3");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedRoom.initial);
  }
}
function ChatPageComponent_section_39_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 163);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openMemberListModal());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 164);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyInviteLink());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 165);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openBookmarksModal());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "bookmark_border");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 166);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTagsModal());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 167);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTaskListModal());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "task_alt");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showMobileHeaderMenu = false);
    });
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_27_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_27_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openMemberListModal();
      return \u0275\u0275resetView(ctx_r2.showMobileHeaderMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30E1\u30F3\u30D0\u30FC");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_27_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_27_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.copyInviteLink();
      return \u0275\u0275resetView(ctx_r2.showMobileHeaderMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u62DB\u5F85\u30EA\u30F3\u30AF");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_27_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_27_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openBookmarksModal();
      return \u0275\u0275resetView(ctx_r2.showMobileHeaderMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "bookmark_border");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_27_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_27_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openTagsModal();
      return \u0275\u0275resetView(ctx_r2.showMobileHeaderMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30BF\u30B0");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_27_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_27_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openTaskListModal();
      return \u0275\u0275resetView(ctx_r2.showMobileHeaderMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30DE\u30A4\u30BF\u30B9\u30AF");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_27_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, ChatPageComponent_section_39_div_27_button_1_Template, 4, 0, "button", 170)(2, ChatPageComponent_section_39_div_27_button_2_Template, 4, 0, "button", 170)(3, ChatPageComponent_section_39_div_27_button_3_Template, 4, 0, "button", 170)(4, ChatPageComponent_section_39_div_27_button_4_Template, 4, 0, "button", 170)(5, ChatPageComponent_section_39_div_27_button_5_Template, 4, 0, "button", 170);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMyChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isMyChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMyChat);
  }
}
function ChatPageComponent_section_39_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 172);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showMobileInfoMenu = false);
    });
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_33_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_33_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openMemberListModal();
      return \u0275\u0275resetView(ctx_r2.showMobileInfoMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30E1\u30F3\u30D0\u30FC ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_33_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_33_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.copyInviteLink();
      return \u0275\u0275resetView(ctx_r2.showMobileInfoMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u62DB\u5F85\u30EA\u30F3\u30AF ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_33_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_33_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openTagsModal();
      return \u0275\u0275resetView(ctx_r2.showMobileInfoMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30BF\u30B0 ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_33_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_33_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openPinnedListPanel();
      return \u0275\u0275resetView(ctx_r2.showMobileInfoMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "push_pin");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30D4\u30F3\u7559\u3081\u4E00\u89A7 ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_33_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_33_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openBookmarksModal();
      return \u0275\u0275resetView(ctx_r2.showMobileInfoMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "bookmark_border");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_33_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_33_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openTaskListModal();
      return \u0275\u0275resetView(ctx_r2.showMobileInfoMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30DE\u30A4\u30BF\u30B9\u30AF ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_33_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r32);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_33_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.toggleDetailPanel();
      return \u0275\u0275resetView(ctx_r2.showMobileInfoMenu = false);
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\u8A73\u7D30\u60C5\u5831 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ChatPageComponent_section_39_div_33_button_5_Template, 4, 0, "button", 170)(6, ChatPageComponent_section_39_div_33_button_6_Template, 4, 0, "button", 170)(7, ChatPageComponent_section_39_div_33_button_7_Template, 4, 0, "button", 170)(8, ChatPageComponent_section_39_div_33_button_8_Template, 4, 0, "button", 170)(9, ChatPageComponent_section_39_div_33_button_9_Template, 4, 0, "button", 170)(10, ChatPageComponent_section_39_div_33_button_10_Template, 4, 0, "button", 170);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isMyChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isMyChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMyChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMyChat);
  }
}
function ChatPageComponent_section_39_div_34_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.roomMessages.length, " \u4EF6");
  }
}
function ChatPageComponent_section_39_div_34_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_34_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearMessageSearch());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 174)(1, "mat-icon");
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_section_39_div_34_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.messageSearchQuery, $event) || (ctx_r2.messageSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ChatPageComponent_section_39_div_34_Template_input_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMessageSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ChatPageComponent_section_39_div_34_span_4_Template, 2, 1, "span", 176)(5, ChatPageComponent_section_39_div_34_button_5_Template, 3, 0, "button", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.messageSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.messageSearchQuery.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.messageSearchQuery);
  }
}
function ChatPageComponent_section_39_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 180)(1, "mat-icon");
    \u0275\u0275text(2, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 181);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 182);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTaskListModal());
    });
    \u0275\u0275text(6, "\u4E00\u89A7\u3092\u898B\u308B");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u30DE\u30A4\u30BF\u30B9\u30AF: ", ctx_r2.roomTasks.length, "\u4EF6");
  }
}
function ChatPageComponent_section_39_div_36_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.pinnedMessage.text);
  }
}
function ChatPageComponent_section_39_div_36_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191)(1, "mat-icon");
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.pinnedMessage.urlPreview.url);
  }
}
function ChatPageComponent_section_39_div_36_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 192);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_36_button_8_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openPinnedListPanel();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "push_pin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u30D4\u30F3\u7559\u3081 ", ctx_r2.pinnedMessages.length, "\u4EF6");
  }
}
function ChatPageComponent_section_39_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 183);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.scrollToMessage(ctx_r2.pinnedMessage.id));
    });
    \u0275\u0275elementStart(1, "mat-icon", 184);
    \u0275\u0275text(2, "push_pin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 185)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ChatPageComponent_section_39_div_36_div_6_Template, 2, 1, "div", 186)(7, ChatPageComponent_section_39_div_36_div_7_Template, 5, 1, "div", 187)(8, ChatPageComponent_section_39_div_36_button_8_Template, 5, 1, "button", 188);
    \u0275\u0275elementStart(9, "button", 189);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_36_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.pinMessage(ctx_r2.pinnedMessage);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r2.pinnedMessage.senderColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.pinnedMessage.senderInitial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.pinnedMessage.urlPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pinnedMessage.urlPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pinnedMessages.length > 1);
  }
}
function ChatPageComponent_section_39_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 193)(1, "mat-icon", 194);
    \u0275\u0275text(2, "filter_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 195);
    \u0275\u0275element(4, "span", 196);
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \u3067\u7D5E\u308A\u8FBC\u307F\u4E2D ");
    \u0275\u0275elementStart(8, "span", 197);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 198);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_37_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearTagFilter());
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r2.getTagColor(ctx_r2.activeTagFilter));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", ctx_r2.activeTagFilter, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.roomMessages.length, "\u4EF6");
  }
}
function ChatPageComponent_section_39_ng_container_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r45.dateLabel);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 203);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r45.text);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 210);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openProfile());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275styleProp("background", msg_r45.senderColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r45.senderInitial);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 211);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_img_2_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r47);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openProfile());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", msg_r45.senderAvatar, \u0275\u0275sanitizeUrl)("alt", msg_r45.senderName);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 214)(2, "mat-icon");
    \u0275\u0275text(3, "reply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 215);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const replyTarget_r48 = ctx.ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", replyTarget_r48.senderName, "\u3055\u3093\u306B\u8FD4\u4FE1\u3057\u307E\u3057\u305F");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(replyTarget_r48.text);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 216)(1, "mat-icon");
    \u0275\u0275text(2, "reply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u8FD4\u4FE1");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_div_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 212);
    \u0275\u0275template(1, ChatPageComponent_section_39_ng_container_40_div_3_div_4_ng_container_1_Template, 8, 2, "ng-container", 31)(2, ChatPageComponent_section_39_ng_container_40_div_3_div_4_ng_template_2_Template, 5, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(4, ChatPageComponent_section_39_ng_container_40_div_3_div_4_ng_container_4_Template, 1, 0, "ng-container", 213);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const replyFallback_r49 = \u0275\u0275reference(3);
    \u0275\u0275nextContext();
    const bubbleTpl_r50 = \u0275\u0275reference(8);
    const msg_r45 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getReplyTarget(msg_r45.replyTo))("ngIfElse", replyFallback_r49);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", bubbleTpl_r50);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 218)(1, "mat-icon");
    \u0275\u0275text(2, "forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u8EE2\u9001");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_5_div_0_Template, 5, 0, "div", 217)(1, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 213);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const bubbleTpl_r50 = \u0275\u0275reference(8);
    const msg_r45 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.isForwardedMessage(msg_r45));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", bubbleTpl_r50);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 219)(2, "textarea", 220);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_container_0_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r2 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r2.editingText, $event) || (ctx_r2.editingText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 221)(4, "button", 222);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.cancelEditMessage());
    });
    \u0275\u0275text(5, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 223);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.saveEditMessage());
    });
    \u0275\u0275text(7, "\u4FDD\u5B58");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingText);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228)(1, "mat-icon");
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", msg_r45.isMe ? "\u3042\u306A\u305F\u304C" : msg_r45.senderName + "\u304C", "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D6\u308A\u6D88\u3057\u307E\u3057\u305F");
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 247);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r54);
      const msg_r45 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startEditMessage(msg_r45));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 248);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r55);
      const msg_r45 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.withdrawMessage(msg_r45));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_mat_icon_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 249);
    \u0275\u0275text(1, "push_pin");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_mat_icon_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 250);
    \u0275\u0275text(1, "bookmark");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_mat_icon_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 251);
    \u0275\u0275text(1, "task_alt");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const msg_r45 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("msg-bubble__task--done", (tmp_15_0 = ctx_r2.getMessageTask(msg_r45)) == null ? null : tmp_15_0.done);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 252);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_div_31_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r56);
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.onBubbleTextClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r2.highlightText(msg_r45.text), \u0275\u0275sanitizeHtml);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 253);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_div_32_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r2 = \u0275\u0275nextContext(7);
      ctx_r2.openTaskListModal();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 254);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r58 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275classProp("msg-bubble__task-chip--overdue", ctx_r2.isTaskOverdue(t_r58))("msg-bubble__task-chip--soon", ctx_r2.isTaskDueSoon(t_r58));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", t_r58.dueDate, "", t_r58.dueTime ? " " + t_r58.dueTime : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r58.done ? "\u5B8C\u4E86" : ctx_r2.isTaskOverdue(t_r58) ? "\u671F\u9650\u5207\u308C" : ctx_r2.isTaskDueSoon(t_r58) ? "\u307E\u3082\u306A\u304F" : "\u4E88\u5B9A");
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_a_33_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 264);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r45.urlPreview.description);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_a_33_div_11_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "image");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_a_33_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 265);
    \u0275\u0275template(1, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_a_33_div_11_mat_icon_1_Template, 2, 0, "mat-icon", 226);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275styleProp("background", msg_r45.urlPreview.image ? "url(" + msg_r45.urlPreview.image + ") center/cover" : msg_r45.urlPreview.imageColor || "#eceff1");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !msg_r45.urlPreview.image);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_a_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 255);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_a_33_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r59);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "div", 256);
    \u0275\u0275elementStart(2, "div", 257)(3, "div", 258)(4, "mat-icon", 259);
    \u0275\u0275text(5, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 260);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 261);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_a_33_div_10_Template, 2, 1, "div", 262)(11, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_a_33_div_11_Template, 2, 3, "div", 263);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275styleProp("--accent", msg_r45.urlPreview.accentColor || "#5865f2");
    \u0275\u0275property("href", msg_r45.urlPreview.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(msg_r45.urlPreview.siteName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r45.urlPreview.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.urlPreview.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.urlPreview.image || msg_r45.urlPreview.imageColor);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 275)(1, "mat-icon");
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 276);
  }
  if (rf & 2) {
    const att_r61 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", att_r61.dataUrl, \u0275\u0275sanitizeUrl)("alt", att_r61.name);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 277);
    \u0275\u0275element(1, "div", 278);
    \u0275\u0275elementStart(2, "div", 279);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const att_r61 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", att_r61.progress || 0, "%");
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(8).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r2.getMessageImages(msg_r45).length - 4, " ");
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 270);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_Template_div_click_0_listener($event) {
      const att_r61 = \u0275\u0275restoreView(_r60).$implicit;
      const msg_r45 = \u0275\u0275nextContext(7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      !att_r61.uploading && ctx_r2.openLightbox(att_r61, msg_r45);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_div_1_Template, 3, 0, "div", 271)(2, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_img_2_Template, 1, 2, "img", 272)(3, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_div_3_Template, 4, 1, "div", 273)(4, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_div_4_Template, 2, 1, "div", 274);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const att_r61 = ctx.$implicit;
    const i_r62 = ctx.index;
    const msg_r45 = \u0275\u0275nextContext(7).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("msg-image-grid__cell--uploading", att_r61.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !att_r61.dataUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", att_r61.dataUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", att_r61.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r62 === 3 && ctx_r2.getMessageImages(msg_r45).length > 4);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 268);
    \u0275\u0275template(1, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_div_1_Template, 5, 6, "div", 269);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const imgCount_r63 = ctx.ngIf;
    const msg_r45 = \u0275\u0275nextContext(6).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-count", imgCount_r63 > 4 ? 4 : imgCount_r63);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getMessageImages(msg_r45).slice(0, 4))("ngForTrackBy", ctx_r2.trackByAttName);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const att_r64 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(att_r64.size);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const att_r64 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D\u2026 ", att_r64.progress || 0, "%");
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 289);
    \u0275\u0275element(1, "div", 290);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const att_r64 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", att_r64.progress || 0, "%");
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_button_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 291)(1, "mat-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 292);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 282)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 283)(4, "div", 284);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 285);
    \u0275\u0275template(7, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_ng_container_7_Template, 2, 1, "ng-container", 226)(8, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_ng_container_8_Template, 2, 1, "ng-container", 226);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_div_9_Template, 2, 2, "div", 286);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_button_10_Template, 3, 0, "button", 287)(11, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_div_11_Template, 1, 0, "div", 288);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const att_r64 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(att_r64.type === "video" ? "movie" : "description");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(att_r64.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !att_r64.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", att_r64.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", att_r64.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !att_r64.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", att_r64.uploading);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_div_1_Template, 12, 7, "div", 281);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const att_r64 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", att_r64.type !== "image");
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_div_1_Template, 2, 3, "div", 266);
    \u0275\u0275elementStart(2, "div", 267);
    \u0275\u0275template(3, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_ng_container_3_Template, 2, 1, "ng-container", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getMessageImages(msg_r45).length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", msg_r45.attachments)("ngForTrackBy", ctx_r2.trackByAttName);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 293);
    \u0275\u0275text(1, "(\u7DE8\u96C6\u6E08\u307F)");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 229);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r53);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_button_2_Template, 3, 0, "button", 230)(3, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_button_3_Template, 3, 0, "button", 231);
    \u0275\u0275elementStart(4, "button", 232);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r53);
      const msg_r45 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEmojiPicker(msg_r45));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "add_reaction");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 233);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r53);
      const msg_r45 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.replyMessage(msg_r45));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "reply");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 234);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r53);
      const msg_r45 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.quoteMessage(msg_r45));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "format_quote");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 235);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r53);
      const msg_r45 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.forwardMessage(msg_r45));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 236);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r53);
      const msg_r45 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleBookmark(msg_r45));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 237);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r53);
      const msg_r45 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.pinMessage(msg_r45));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "push_pin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 238);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r53);
      const msg_r45 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTaskCreateModal(msg_r45));
    });
    \u0275\u0275elementStart(23, "mat-icon");
    \u0275\u0275text(24, "task_alt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 239);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r53);
      const msg_r45 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyMessage(msg_r45));
    });
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "content_copy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_mat_icon_28_Template, 2, 0, "mat-icon", 240)(29, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_mat_icon_29_Template, 2, 0, "mat-icon", 241)(30, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_mat_icon_30_Template, 2, 2, "mat-icon", 242)(31, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_div_31_Template, 1, 1, "div", 243)(32, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_div_32_Template, 7, 7, "div", 244)(33, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_a_33_Template, 12, 7, "a", 245)(34, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_ng_container_34_Template, 4, 3, "ng-container", 226)(35, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_span_35_Template, 2, 0, "span", 246);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", msg_r45.isMe);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.isMe);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(msg_r45.bookmarked ? "bookmark" : "bookmark_border");
    \u0275\u0275advance();
    \u0275\u0275classProp("msg-hover-actions__btn--on", msg_r45.isPinned);
    \u0275\u0275property("matTooltip", msg_r45.isPinned ? "\u30D4\u30F3\u7559\u3081\u3092\u89E3\u9664" : "\u30D4\u30F3\u7559\u3081");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", msg_r45.isPinned);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.bookmarked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.taskId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getMessageTask(msg_r45));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.urlPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.attachments == null ? null : msg_r45.attachments.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.edited);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_div_3_button_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 299);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r67 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r67.count);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 296);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_div_3_button_1_Template_button_click_0_listener($event) {
      const r_r67 = \u0275\u0275restoreView(_r66).$implicit;
      const msg_r45 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.toggleReactionOnMessage(msg_r45, r_r67.emoji);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 297);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_div_3_button_1_span_3_Template, 2, 1, "span", 298);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r67 = ctx.$implicit;
    \u0275\u0275classProp("msg-reaction--mine", r_r67.mine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r67.emoji);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r67.count > 1);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 294);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r65);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_div_3_button_1_Template, 4, 4, "button", 295);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", msg_r45.reactions);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 224);
    \u0275\u0275listener("contextmenu", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_Template_div_contextmenu_0_listener($event) {
      \u0275\u0275restoreView(_r52);
      const msg_r45 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!msg_r45.withdrawn && ctx_r2.openMessageMenu($event, msg_r45));
    })("touchstart", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_Template_div_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r52);
      const msg_r45 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!msg_r45.withdrawn && ctx_r2.onBubbleTouchStart($event, msg_r45));
    })("touchend", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_Template_div_touchend_0_listener() {
      \u0275\u0275restoreView(_r52);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onBubbleTouchEnd());
    })("touchcancel", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_Template_div_touchcancel_0_listener() {
      \u0275\u0275restoreView(_r52);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onBubbleTouchEnd());
    })("touchmove", function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_Template_div_touchmove_0_listener($event) {
      \u0275\u0275restoreView(_r52);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onBubbleTouchMove($event));
    });
    \u0275\u0275template(1, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_div_1_Template, 5, 1, "div", 225)(2, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_ng_container_2_Template, 36, 14, "ng-container", 226)(3, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_div_3_Template, 2, 1, "div", 227);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r45 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("msg-bubble--me", msg_r45.isMe)("msg-bubble--pinned", msg_r45.isPinned)("msg-bubble--withdrawn", msg_r45.withdrawn)("msg-bubble--forwarded", ctx_r2.isForwardedMessage(msg_r45))("msg-bubble--quoted", ctx_r2.isQuotedMessage(msg_r45))("msg-bubble--reply", !!msg_r45.replyTo)("msg-bubble--stamp", ctx_r2.isStampMessage(msg_r45));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.withdrawn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !msg_r45.withdrawn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.reactions == null ? null : msg_r45.reactions.length);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_container_0_Template, 8, 1, "ng-container", 31)(1, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_ng_template_1_Template, 4, 17, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const normalBubble_r68 = \u0275\u0275reference(2);
    const msg_r45 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.editingMessageId === msg_r45.id)("ngIfElse", normalBubble_r68);
  }
}
function ChatPageComponent_section_39_ng_container_40_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 204);
    \u0275\u0275template(1, ChatPageComponent_section_39_ng_container_40_div_3_div_1_Template, 3, 3, "div", 205)(2, ChatPageComponent_section_39_ng_container_40_div_3_img_2_Template, 1, 2, "img", 206);
    \u0275\u0275elementStart(3, "div", 207);
    \u0275\u0275template(4, ChatPageComponent_section_39_ng_container_40_div_3_div_4_Template, 5, 3, "div", 208)(5, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_5_Template, 2, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(7, ChatPageComponent_section_39_ng_container_40_div_3_ng_template_7_Template, 3, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(9, "div", 209);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const nonReplyBlock_r69 = \u0275\u0275reference(6);
    const msg_r45 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("msg-row--me", msg_r45.isMe);
    \u0275\u0275property("id", "msg-" + msg_r45.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !msg_r45.isMe && !msg_r45.senderAvatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !msg_r45.isMe && msg_r45.senderAvatar);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", msg_r45.replyTo)("ngIfElse", nonReplyBlock_r69);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.getMsgFullTimestamp(msg_r45));
  }
}
function ChatPageComponent_section_39_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_section_39_ng_container_40_div_1_Template, 3, 1, "div", 199)(2, ChatPageComponent_section_39_ng_container_40_div_2_Template, 2, 1, "div", 200)(3, ChatPageComponent_section_39_ng_container_40_div_3_Template, 11, 8, "div", 201);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const msg_r45 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.dateLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r45.isSystem);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !msg_r45.isSystem);
  }
}
function ChatPageComponent_section_39_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 300)(1, "div", 301)(2, "div", 302);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 303);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 304);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_41_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r70);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelReply());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.replyToMessage.senderName, "\u3055\u3093\u306B\u8FD4\u4FE1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.replyToMessage.text);
  }
}
function ChatPageComponent_section_39_div_42_app_scheduled_list_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-scheduled-list", 311);
    \u0275\u0275listener("edit", function ChatPageComponent_section_39_div_42_app_scheduled_list_8_Template_app_scheduled_list_edit_0_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editScheduled($event));
    })("delete", function ChatPageComponent_section_39_div_42_app_scheduled_list_8_Template_app_scheduled_list_delete_0_listener($event) {
      \u0275\u0275restoreView(_r72);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteScheduled($event));
    })("close", function ChatPageComponent_section_39_div_42_app_scheduled_list_8_Template_app_scheduled_list_close_0_listener() {
      \u0275\u0275restoreView(_r72);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.closeScheduledList());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("items", ctx_r2.scheduledMessagesForRoom);
  }
}
function ChatPageComponent_section_39_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 305)(1, "button", 306);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_42_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r71);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleScheduledList());
    });
    \u0275\u0275elementStart(2, "span", 307);
    \u0275\u0275text(3, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 308);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 309);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ChatPageComponent_section_39_div_42_app_scheduled_list_8_Template, 1, 1, "app-scheduled-list", 310);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("scheduled-banner--open", ctx_r2.showScheduledList);
    \u0275\u0275attribute("aria-expanded", ctx_r2.showScheduledList);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.scheduledBannerText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.showScheduledList ? "\u25B2" : "\u25BC", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showScheduledList);
  }
}
function ChatPageComponent_section_39_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 312);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_button_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r73);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openMentionPopup());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "alternate_email");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 313);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_61_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r74);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.showInputMenu = false;
      return \u0275\u0275resetView($event.stopPropagation());
    })("touchstart", function ChatPageComponent_section_39_div_61_Template_div_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r74);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.showInputMenu = false;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_62_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 318);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_62_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r76);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openMentionPopup();
      return \u0275\u0275resetView(ctx_r2.showInputMenu = false);
    });
    \u0275\u0275elementStart(1, "mat-icon", 319);
    \u0275\u0275text(2, "alternate_email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u30E1\u30F3\u30B7\u30E7\u30F3\u633F\u5165");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 314);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_62_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r75);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 315);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_62_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openScheduleModal();
      return \u0275\u0275resetView(ctx_r2.showInputMenu = false);
    });
    \u0275\u0275elementStart(2, "span", 316);
    \u0275\u0275element(3, "img", 317);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 318);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_62_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openAttachModal();
      return \u0275\u0275resetView(ctx_r2.showInputMenu = false);
    });
    \u0275\u0275elementStart(7, "mat-icon", 319);
    \u0275\u0275text(8, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "\u30D5\u30A1\u30A4\u30EB\u30FB\u753B\u50CF\u3092\u6DFB\u4ED8");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ChatPageComponent_section_39_div_62_button_11_Template, 5, 0, "button", 320);
    \u0275\u0275elementStart(12, "button", 318);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_62_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openTagPopup();
      return \u0275\u0275resetView(ctx_r2.showInputMenu = false);
    });
    \u0275\u0275elementStart(13, "mat-icon", 319);
    \u0275\u0275text(14, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "\u30BF\u30B0\u633F\u5165");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 318);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_62_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openAiModal();
      return \u0275\u0275resetView(ctx_r2.showInputMenu = false);
    });
    \u0275\u0275elementStart(18, "mat-icon", 319);
    \u0275\u0275text(19, "auto_fix_high");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "AI\u3067\u4F5C\u6210");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.isGroup || ctx_r2.isMyChat);
  }
}
function ChatPageComponent_section_39_div_64_div_1_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 330);
  }
  if (rf & 2) {
    const a_r79 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", a_r79.dataUrl, \u0275\u0275sanitizeUrl)("alt", a_r79.name);
  }
}
function ChatPageComponent_section_39_div_64_div_1_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 331)(1, "mat-icon");
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_div_64_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_section_39_div_64_div_1_ng_container_1_img_1_Template, 1, 2, "img", 328)(2, ChatPageComponent_section_39_div_64_div_1_ng_container_1_div_2_Template, 3, 0, "div", 329);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const a_r79 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r79.dataUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !a_r79.dataUrl);
  }
}
function ChatPageComponent_section_39_div_64_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 332)(1, "mat-icon");
    \u0275\u0275text(2, "play_circle");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_div_64_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 333)(1, "mat-icon");
    \u0275\u0275text(2, "insert_drive_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 334);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r79 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r79.name);
  }
}
function ChatPageComponent_section_39_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 324);
    \u0275\u0275template(1, ChatPageComponent_section_39_div_64_div_1_ng_container_1_Template, 3, 2, "ng-container", 226)(2, ChatPageComponent_section_39_div_64_div_1_div_2_Template, 3, 0, "div", 325)(3, ChatPageComponent_section_39_div_64_div_1_div_3_Template, 5, 1, "div", 326);
    \u0275\u0275elementStart(4, "button", 327);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_64_div_1_Template_button_click_4_listener() {
      const i_r80 = \u0275\u0275restoreView(_r78).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removePendingAttachment(i_r80));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r79 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r79.type === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r79.type === "video");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r79.type === "file");
  }
}
function ChatPageComponent_section_39_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 321);
    \u0275\u0275template(1, ChatPageComponent_section_39_div_64_div_1_Template, 7, 3, "div", 322);
    \u0275\u0275elementStart(2, "button", 323);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_64_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r77);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openAttachModal());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pendingAttachments);
  }
}
function ChatPageComponent_section_39_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 335);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_67_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r81);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.showMentionPopup = false;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_68_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 340, 9);
    \u0275\u0275listener("mouseenter", function ChatPageComponent_section_39_div_68_button_3_Template_button_mouseenter_0_listener() {
      const i_r84 = \u0275\u0275restoreView(_r83).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.mentionActiveIndex = i_r84);
    })("click", function ChatPageComponent_section_39_div_68_button_3_Template_button_click_0_listener() {
      const m_r85 = \u0275\u0275restoreView(_r83).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.insertMention(m_r85));
    });
    \u0275\u0275elementStart(2, "div", 341);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r85 = ctx.$implicit;
    const i_r84 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("popup__item--active", i_r84 === ctx_r2.mentionActiveIndex);
    \u0275\u0275attribute("data-mention-index", i_r84);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", m_r85.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r85.initial);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r85.name);
  }
}
function ChatPageComponent_section_39_div_68_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 342);
    \u0275\u0275text(1, "\u5019\u88DC\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 336);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_68_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r82);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 337);
    \u0275\u0275text(2, "\u30E1\u30F3\u30D0\u30FC\u3092\u9078\u629E\uFF08\u2191\u2193\u3067\u9078\u629E\u30FBEnter\u3067\u78BA\u5B9A\uFF09");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ChatPageComponent_section_39_div_68_button_3_Template, 6, 7, "button", 338)(4, ChatPageComponent_section_39_div_68_div_4_Template, 2, 0, "div", 339);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.mentionCandidates);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.mentionCandidates.length);
  }
}
function ChatPageComponent_section_39_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 335);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_69_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r86);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.showTagPopup = false;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_70_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 346);
  }
}
function ChatPageComponent_section_39_div_70_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 347);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_70_button_9_Template_button_click_0_listener() {
      const t_r89 = \u0275\u0275restoreView(_r88).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.insertTag(t_r89));
    });
    \u0275\u0275element(1, "span", 196);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r89 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", t_r89.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", t_r89.label, "");
  }
}
function ChatPageComponent_section_39_div_70_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 342);
    \u0275\u0275text(1, "\u8A72\u5F53\u3059\u308B\u30BF\u30B0\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_section_39_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 336);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_70_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r87);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 337);
    \u0275\u0275text(2, "\u30BF\u30B0\u3092\u9078\u629E \u307E\u305F\u306F \u65B0\u898F\u4F5C\u6210");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 343);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_70_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r87);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTagCreateFromPopup());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u65B0\u3057\u3044\u30BF\u30B0\u3092\u4F5C\u6210");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ChatPageComponent_section_39_div_70_div_8_Template, 1, 0, "div", 344)(9, ChatPageComponent_section_39_div_70_button_9_Template, 4, 3, "button", 345)(10, ChatPageComponent_section_39_div_70_div_10_Template, 2, 0, "div", 339);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.tagCandidates.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.tagCandidates);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.tagCandidates.length);
  }
}
function ChatPageComponent_section_39_div_71_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 352);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r90 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r90, "");
  }
}
function ChatPageComponent_section_39_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 348)(1, "mat-icon", 349);
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 350);
    \u0275\u0275text(4, "\u6295\u7A3F\u3055\u308C\u308B\u30BF\u30B0:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ChatPageComponent_section_39_div_71_span_5_Template, 2, 1, "span", 351);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.liveHashtags);
  }
}
function ChatPageComponent_section_39_div_72_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 356);
    \u0275\u0275element(1, "div", 292);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u30EA\u30F3\u30AF\u30D7\u30EC\u30D3\u30E5\u30FC\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_section_39_div_72_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 365);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.inputOgpPreview.description);
  }
}
function ChatPageComponent_section_39_div_72_div_2_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 366);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r2.inputOgpPreview.image, \u0275\u0275sanitizeUrl);
  }
}
function ChatPageComponent_section_39_div_72_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 357);
    \u0275\u0275element(1, "div", 358);
    \u0275\u0275elementStart(2, "div", 359)(3, "div", 360);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 361);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ChatPageComponent_section_39_div_72_div_2_div_7_Template, 2, 1, "div", 362);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ChatPageComponent_section_39_div_72_div_2_img_8_Template, 1, 1, "img", 363);
    \u0275\u0275elementStart(9, "button", 364);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_div_72_div_2_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r91);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.inputOgpPreview = null;
      ctx_r2.inputOgpLastUrl = "";
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--accent", ctx_r2.inputOgpPreview.accentColor || "#5865f2");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.inputOgpPreview.siteName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.inputOgpPreview.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.inputOgpPreview.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.inputOgpPreview.image);
  }
}
function ChatPageComponent_section_39_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 353);
    \u0275\u0275template(1, ChatPageComponent_section_39_div_72_div_1_Template, 4, 0, "div", 354)(2, ChatPageComponent_section_39_div_72_div_2_Template, 12, 6, "div", 355);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.inputOgpLoading && !ctx_r2.inputOgpPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.inputOgpPreview);
  }
}
function ChatPageComponent_section_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 111)(1, "header", 112)(2, "div", 113)(3, "button", 114);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showList());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ChatPageComponent_section_39_div_6_Template, 3, 0, "div", 115)(7, ChatPageComponent_section_39_div_7_Template, 3, 1, "div", 115);
    \u0275\u0275elementStart(8, "h2", 116);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 117)(11, "button", 118);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openSearchPanel());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ChatPageComponent_section_39_button_14_Template, 3, 0, "button", 119)(15, ChatPageComponent_section_39_button_15_Template, 3, 0, "button", 120)(16, ChatPageComponent_section_39_button_16_Template, 3, 0, "button", 121)(17, ChatPageComponent_section_39_button_17_Template, 3, 0, "button", 122)(18, ChatPageComponent_section_39_button_18_Template, 3, 0, "button", 123);
    \u0275\u0275elementStart(19, "button", 124);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDetailPanel());
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "info_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 125)(23, "button", 126);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_23_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMobileHeaderMenu($event));
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, ChatPageComponent_section_39_div_26_Template, 1, 0, "div", 127)(27, ChatPageComponent_section_39_div_27_Template, 6, 5, "div", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 129)(29, "button", 130);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_29_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMobileInfoMenu($event));
    });
    \u0275\u0275elementStart(30, "mat-icon");
    \u0275\u0275text(31, "info_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, ChatPageComponent_section_39_div_32_Template, 1, 0, "div", 131)(33, ChatPageComponent_section_39_div_33_Template, 11, 6, "div", 132);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, ChatPageComponent_section_39_div_34_Template, 6, 3, "div", 133)(35, ChatPageComponent_section_39_div_35_Template, 7, 1, "div", 134)(36, ChatPageComponent_section_39_div_36_Template, 12, 6, "div", 135)(37, ChatPageComponent_section_39_div_37_Template, 13, 4, "div", 136);
    \u0275\u0275elementStart(38, "div", 137, 3);
    \u0275\u0275template(40, ChatPageComponent_section_39_ng_container_40_Template, 4, 3, "ng-container", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, ChatPageComponent_section_39_div_41_Template, 9, 2, "div", 139)(42, ChatPageComponent_section_39_div_42_Template, 9, 6, "div", 140);
    \u0275\u0275elementStart(43, "div", 141)(44, "div", 142)(45, "button", 143);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openScheduleModal());
    });
    \u0275\u0275element(46, "img", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 145);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAttachModal());
    });
    \u0275\u0275elementStart(48, "mat-icon");
    \u0275\u0275text(49, "attach_file");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, ChatPageComponent_section_39_button_50_Template, 3, 0, "button", 146);
    \u0275\u0275elementStart(51, "button", 147);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTagPopup());
    });
    \u0275\u0275elementStart(52, "mat-icon");
    \u0275\u0275text(53, "tag");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "button", 148);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAiModal());
    });
    \u0275\u0275elementStart(55, "mat-icon");
    \u0275\u0275text(56, "auto_fix_high");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 149)(58, "button", 150);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_58_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleInputMenu($event));
    });
    \u0275\u0275elementStart(59, "mat-icon");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, ChatPageComponent_section_39_div_61_Template, 1, 0, "div", 151)(62, ChatPageComponent_section_39_div_62_Template, 22, 1, "div", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 153);
    \u0275\u0275template(64, ChatPageComponent_section_39_div_64_Template, 5, 1, "div", 154);
    \u0275\u0275elementStart(65, "textarea", 155, 4);
    \u0275\u0275listener("ngModelChange", function ChatPageComponent_section_39_Template_textarea_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMessageInputChange($event));
    })("focus", function ChatPageComponent_section_39_Template_textarea_focus_65_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus());
    })("blur", function ChatPageComponent_section_39_Template_textarea_blur_65_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur());
    })("keydown", function ChatPageComponent_section_39_Template_textarea_keydown_65_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputKey($event));
    })("input", function ChatPageComponent_section_39_Template_textarea_input_65_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.autoResizeInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, ChatPageComponent_section_39_div_67_Template, 1, 0, "div", 156)(68, ChatPageComponent_section_39_div_68_Template, 5, 2, "div", 157)(69, ChatPageComponent_section_39_div_69_Template, 1, 0, "div", 156)(70, ChatPageComponent_section_39_div_70_Template, 11, 3, "div", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, ChatPageComponent_section_39_div_71_Template, 6, 1, "div", 158)(72, ChatPageComponent_section_39_div_72_Template, 3, 2, "div", 159);
    \u0275\u0275elementStart(73, "button", 160);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openScheduleSendModal());
    });
    \u0275\u0275elementStart(74, "mat-icon");
    \u0275\u0275text(75, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "button", 161);
    \u0275\u0275listener("click", function ChatPageComponent_section_39_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275elementStart(77, "mat-icon");
    \u0275\u0275text(78, "send");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("chat-room--transitioning", ctx_r2.roomTransitioning);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.isMyChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isMyChat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedRoom.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("icon-btn--active", ctx_r2.rightPanelView === "search");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMyChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isMyChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMyChat);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.showMobileHeaderMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showMobileHeaderMenu);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.showMobileInfoMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showMobileInfoMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showMessageSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.roomTasks.length && (ctx_r2.selectedRoom == null ? null : ctx_r2.selectedRoom.type) === "my");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pinnedMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTagFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.roomMessages)("ngForTrackBy", ctx_r2.trackByMsgId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.replyToMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.scheduledMessagesForRoom.length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("chat-room__input--focused", ctx_r2.inputFocused)("chat-room__input--typing", ctx_r2.isMobile || ctx_r2.messageInput.length > 0 || ctx_r2.pendingAttachments.length > 0)("chat-room__input--has-pending", ctx_r2.pendingAttachments.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.isGroup || ctx_r2.isMyChat);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("icon-btn--plus-open", ctx_r2.showInputMenu);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.showInputMenu ? "close" : "add");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showInputMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showInputMenu);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.pendingAttachments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r2.isMobile ? "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5165\u529B" : "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5165\u529B...\uFF08Shift+Enter\u3067\u6539\u884C\uFF09")("ngModel", ctx_r2.messageInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.showMentionPopup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showMentionPopup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showTagPopup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showTagPopup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.liveHashtags.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.inputOgpPreview || ctx_r2.inputOgpLoading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canSend);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.canSend);
  }
}
function ChatPageComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 367);
    \u0275\u0275listener("click", function ChatPageComponent_div_40_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r92);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeRightPanel());
    });
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 375)(1, "button", 376);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_div_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r93);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeRightPanel());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 377);
    \u0275\u0275text(5, "\u8A73\u7D30\u60C5\u5831");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 378)(1, "button", 379);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r94);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSubviewBack());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 377);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.rightPanelTitle);
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 391);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("background-image", "url(" + ctx_r2.selectedRoom.avatarImage + ")");
    \u0275\u0275classProp("chat-detail__avatar--has-image", true);
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_2_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 394);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r95 = ctx.$implicit;
    \u0275\u0275styleProp("background", m_r95.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r95.initial, " ");
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 392);
    \u0275\u0275template(1, ChatPageComponent_aside_41_ng_container_3_ng_container_2_div_2_div_1_Template, 2, 3, "div", 393);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (ctx_r2.selectedRoom.members || \u0275\u0275pureFunction0(1, _c5)).slice(0, 4));
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_aside_41_ng_container_3_ng_container_2_div_1_Template, 1, 4, "div", 389)(2, ChatPageComponent_aside_41_ng_container_3_ng_container_2_div_2_Template, 2, 2, "div", 390);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedRoom.avatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedRoom.avatarImage);
  }
}
function ChatPageComponent_aside_41_ng_container_3_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedRoom.initial);
  }
}
function ChatPageComponent_aside_41_ng_container_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 395);
    \u0275\u0275template(1, ChatPageComponent_aside_41_ng_container_3_div_3_span_1_Template, 2, 1, "span", 226);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", ctx_r2.selectedRoom.avatarImage ? "#fff" : ctx_r2.selectedRoom.avatarColor)("background-image", ctx_r2.selectedRoom.avatarImage ? "url(" + ctx_r2.selectedRoom.avatarImage + ")" : null);
    \u0275\u0275classProp("chat-detail__avatar--has-image", !!ctx_r2.selectedRoom.avatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedRoom.avatarImage);
  }
}
function ChatPageComponent_aside_41_ng_container_3_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 396)(1, "mat-icon");
    \u0275\u0275text(2, "photo_camera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u5909\u66F4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 397, 10);
    \u0275\u0275listener("change", function ChatPageComponent_aside_41_ng_container_3_label_4_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r96);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onAvatarFileSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_ng_container_3_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 398);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r97);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openRenameGroup());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_ng_container_3_div_9_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 406);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_div_9_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r99);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMemberListModal());
    });
    \u0275\u0275elementStart(1, "span", 401)(2, "mat-icon");
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 402);
    \u0275\u0275text(5, "\u30E1\u30F3\u30D0\u30FC");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_ng_container_3_div_9_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 407);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_div_9_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r100);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openProfile());
    });
    \u0275\u0275elementStart(1, "span", 401)(2, "mat-icon");
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 402);
    \u0275\u0275text(5, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_ng_container_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 399)(1, "button", 400);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r98);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openSearchPanel());
    });
    \u0275\u0275elementStart(2, "span", 401)(3, "mat-icon");
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 402);
    \u0275\u0275text(6, "\u691C\u7D22");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ChatPageComponent_aside_41_ng_container_3_div_9_button_7_Template, 6, 0, "button", 403)(8, ChatPageComponent_aside_41_ng_container_3_div_9_button_8_Template, 6, 0, "button", 404);
    \u0275\u0275elementStart(9, "button", 405);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_div_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r98);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openNotificationSettings());
    });
    \u0275\u0275elementStart(10, "span", 401)(11, "mat-icon");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 402);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isGroup);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.roomNotificationMode === "mute" ? "notifications_off" : "notifications");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.roomNotificationMode === "mute" ? "\u30DF\u30E5\u30FC\u30C8\u4E2D" : "\u30DF\u30E5\u30FC\u30C8");
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 409);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.allTasksSorted.length);
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_11_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 409);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.bookmarkedMessages.length);
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_11_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r101);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openTasksPanel());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u30DE\u30A4\u30BF\u30B9\u30AF");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChatPageComponent_aside_41_ng_container_3_ng_container_11_span_6_Template, 2, 1, "span", 408);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_11_Template_li_click_7_listener() {
      \u0275\u0275restoreView(_r101);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openBookmarksModal());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "bookmark_border");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\u30DE\u30A4\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ChatPageComponent_aside_41_ng_container_3_ng_container_11_span_12_Template, 2, 1, "span", 408);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_11_Template_li_click_13_listener() {
      \u0275\u0275restoreView(_r101);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openMediaModal());
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "perm_media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\u30E1\u30C7\u30A3\u30A2\u3068\u30D5\u30A1\u30A4\u30EB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.allTasksSorted.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.bookmarkedMessages.length);
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_12_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 409);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.pinnedMessages.length);
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_12_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r102);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openProfile());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u8868\u793A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_12_Template_li_click_6_listener() {
      \u0275\u0275restoreView(_r102);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openSearchPanel());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u691C\u7D22");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_12_Template_li_click_11_listener() {
      \u0275\u0275restoreView(_r102);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openPinnedListPanel());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "push_pin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "\u30D4\u30F3\u7559\u3081\u4E00\u89A7");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ChatPageComponent_aside_41_ng_container_3_ng_container_12_span_16_Template, 2, 1, "span", 408);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_12_Template_li_click_17_listener() {
      \u0275\u0275restoreView(_r102);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openTagsModal());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "\u30BF\u30B0\u4E00\u89A7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_12_Template_li_click_22_listener() {
      \u0275\u0275restoreView(_r102);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openMediaModal());
    });
    \u0275\u0275elementStart(23, "mat-icon");
    \u0275\u0275text(24, "perm_media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "\u30E1\u30C7\u30A3\u30A2\u3068\u30D5\u30A1\u30A4\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 409);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_12_Template_li_click_29_listener() {
      \u0275\u0275restoreView(_r102);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openNotificationSettings());
    });
    \u0275\u0275elementStart(30, "mat-icon");
    \u0275\u0275text(31, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "\u901A\u77E5\u8A2D\u5B9A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "li", 410);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_12_Template_li_click_34_listener() {
      \u0275\u0275restoreView(_r102);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openBlockConfirm());
    });
    \u0275\u0275elementStart(35, "mat-icon");
    \u0275\u0275text(36, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u3092\u30D6\u30ED\u30C3\u30AF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx_r2.pinnedMessages.length);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.mediaItems.length);
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_13_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 409);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.pinnedMessages.length);
  }
}
function ChatPageComponent_aside_41_ng_container_3_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_13_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r103);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openMemberListModal());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u53C2\u52A0\u30E1\u30F3\u30D0\u30FC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 409);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_13_Template_li_click_8_listener() {
      \u0275\u0275restoreView(_r103);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openSearchPanel());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u691C\u7D22");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_13_Template_li_click_13_listener() {
      \u0275\u0275restoreView(_r103);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openPinnedListPanel());
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "push_pin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\u30D4\u30F3\u7559\u3081\u4E00\u89A7");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ChatPageComponent_aside_41_ng_container_3_ng_container_13_span_18_Template, 2, 1, "span", 408);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_13_Template_li_click_19_listener() {
      \u0275\u0275restoreView(_r103);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openTagsModal());
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "\u30BF\u30B0\u4E00\u89A7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_13_Template_li_click_24_listener() {
      \u0275\u0275restoreView(_r103);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openMediaModal());
    });
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "perm_media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "\u30E1\u30C7\u30A3\u30A2\u3068\u30D5\u30A1\u30A4\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 409);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_13_Template_li_click_31_listener() {
      \u0275\u0275restoreView(_r103);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openNotificationSettings());
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "\u901A\u77E5\u8A2D\u5B9A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "li", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_13_Template_li_click_36_listener() {
      \u0275\u0275restoreView(_r103);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.copyInviteLink());
    });
    \u0275\u0275elementStart(37, "mat-icon");
    \u0275\u0275text(38, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "\u62DB\u5F85\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "li", 410);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_ng_container_13_Template_li_click_41_listener() {
      \u0275\u0275restoreView(_r103);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openLeaveConfirm());
    });
    \u0275\u0275elementStart(42, "mat-icon");
    \u0275\u0275text(43, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "\u30C1\u30E3\u30C3\u30C8\u3092\u9000\u51FA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedRoom.members == null ? null : ctx_r2.selectedRoom.members.length);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.pinnedMessages.length);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.mediaItems.length);
  }
}
function ChatPageComponent_aside_41_ng_container_3_section_14_button_13_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 429);
    \u0275\u0275text(1, "\u671F\u9650\u5207\u308C");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_ng_container_3_section_14_button_13_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 430);
    \u0275\u0275text(1, "24h\u4EE5\u5185");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_ng_container_3_section_14_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 418);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_section_14_button_13_Template_button_click_0_listener($event) {
      const t_r106 = \u0275\u0275restoreView(_r105).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.jumpToTaskFromPanel(t_r106, $event));
    });
    \u0275\u0275elementStart(1, "div", 419);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_section_14_button_13_Template_div_click_1_listener($event) {
      const t_r106 = \u0275\u0275restoreView(_r105).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.toggleTaskDone(t_r106);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "radio_button_unchecked");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 420)(5, "div", 421);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 422)(8, "mat-icon", 423);
    \u0275\u0275text(9, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 424);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ChatPageComponent_aside_41_ng_container_3_section_14_button_13_span_12_Template, 2, 0, "span", 425)(13, ChatPageComponent_aside_41_ng_container_3_section_14_button_13_span_13_Template, 2, 0, "span", 426);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 427)(15, "mat-icon");
    \u0275\u0275text(16, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "mat-icon", 428);
    \u0275\u0275text(20, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r106 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("inline-task--overdue", ctx_r2.isTaskOverdue(t_r106))("inline-task--soon", !ctx_r2.isTaskOverdue(t_r106) && ctx_r2.isTaskDueSoon(t_r106));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r106.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("\u7DE0\u5207: ", t_r106.dueDate, "", t_r106.dueTime ? " " + t_r106.dueTime : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTaskOverdue(t_r106));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isTaskOverdue(t_r106) && ctx_r2.isTaskDueSoon(t_r106));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getRoomName(t_r106.roomId));
  }
}
function ChatPageComponent_aside_41_ng_container_3_section_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 411)(1, "header", 412)(2, "mat-icon");
    \u0275\u0275text(3, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "\u76F4\u8FD1\u306E\u30BF\u30B9\u30AF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 413);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 414);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_ng_container_3_section_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r104);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openTasksPanel());
    });
    \u0275\u0275text(9, "\u3059\u3079\u3066\u8868\u793A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 415);
    \u0275\u0275text(11, " \u7DE0\u52071\u9031\u9593\u4EE5\u5185\u306E\u30BF\u30B9\u30AF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 416);
    \u0275\u0275template(13, ChatPageComponent_aside_41_ng_container_3_section_14_button_13_Template, 21, 10, "button", 417);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.upcomingTasks.length, "\u4EF6");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.upcomingTasks);
  }
}
function ChatPageComponent_aside_41_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 380);
    \u0275\u0275template(2, ChatPageComponent_aside_41_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 226)(3, ChatPageComponent_aside_41_ng_container_3_div_3_Template, 2, 7, "div", 381)(4, ChatPageComponent_aside_41_ng_container_3_label_4_Template, 7, 0, "label", 382);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 383)(6, "h3", 384);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ChatPageComponent_aside_41_ng_container_3_button_8_Template, 3, 0, "button", 385);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ChatPageComponent_aside_41_ng_container_3_div_9_Template, 15, 4, "div", 386);
    \u0275\u0275elementStart(10, "ul", 387);
    \u0275\u0275template(11, ChatPageComponent_aside_41_ng_container_3_ng_container_11_Template, 18, 2, "ng-container", 226)(12, ChatPageComponent_aside_41_ng_container_3_ng_container_12_Template, 39, 2, "ng-container", 226)(13, ChatPageComponent_aside_41_ng_container_3_ng_container_13_Template, 46, 3, "ng-container", 226);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ChatPageComponent_aside_41_ng_container_3_section_14_Template, 14, 2, "section", 388);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isGroup || ctx_r2.isMyChat);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isMyChat ? ctx_r2.loggedInUserName : ctx_r2.selectedRoom.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isMyChat);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isMyChat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedRoom.type === "direct");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMyChat && ctx_r2.upcomingTasks.length);
  }
}
function ChatPageComponent_aside_41_section_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 435);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.activeTasksSorted.length);
  }
}
function ChatPageComponent_aside_41_section_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 435);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.doneTasksSorted.length);
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 438)(1, "mat-icon");
    \u0275\u0275text(2, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u8AB2\u984C\u306E\u30BF\u30B9\u30AF\u306F\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u30DB\u30D0\u30FC\u3057\u3066\u300C\u30DE\u30A4\u30BF\u30B9\u30AF\u306B\u8FFD\u52A0\u300D\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_8_div_2_button_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 430);
    \u0275\u0275text(1, "24h\u4EE5\u5185");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_8_div_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 418);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_4_ng_container_8_div_2_button_1_Template_button_click_0_listener($event) {
      const t_r109 = \u0275\u0275restoreView(_r108).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.jumpToTaskFromPanel(t_r109, $event));
    });
    \u0275\u0275elementStart(1, "div", 419);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_4_ng_container_8_div_2_button_1_Template_div_click_1_listener($event) {
      const t_r109 = \u0275\u0275restoreView(_r108).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      ctx_r2.toggleTaskDone(t_r109);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 420)(5, "div", 421);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 422)(8, "mat-icon", 423);
    \u0275\u0275text(9, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 424);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ChatPageComponent_aside_41_section_4_ng_container_8_div_2_button_1_span_12_Template, 2, 0, "span", 426);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 427)(14, "mat-icon");
    \u0275\u0275text(15, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "mat-icon", 428);
    \u0275\u0275text(19, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r109 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("inline-task--done", t_r109.done)("inline-task--soon", ctx_r2.isTaskDueSoon(t_r109));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r109.done ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r109.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("\u7DE0\u5207: ", t_r109.dueDate, "", t_r109.dueTime ? " " + t_r109.dueTime : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTaskDueSoon(t_r109));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getRoomName(t_r109.roomId));
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 416);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_4_ng_container_8_div_2_button_1_Template, 20, 10, "button", 439);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.activeTasksSorted);
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_4_ng_container_8_div_1_Template, 7, 0, "div", 436)(2, ChatPageComponent_aside_41_section_4_ng_container_8_div_2_Template, 2, 1, "div", 437);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.activeTasksSorted.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTasksSorted.length);
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 438)(1, "mat-icon");
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u7D42\u4E86\u3057\u305F\u30BF\u30B9\u30AF\u306F\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "\u5B8C\u4E86\u6E08\u307F\u30FB\u671F\u9650\u5207\u308C\u30BF\u30B9\u30AF\u304C\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_9_div_2_button_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 442);
    \u0275\u0275text(1, "\u5B8C\u4E86");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_9_div_2_button_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 429);
    \u0275\u0275text(1, "\u671F\u9650\u5207\u308C");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_9_div_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 418);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_4_ng_container_9_div_2_button_1_Template_button_click_0_listener($event) {
      const t_r111 = \u0275\u0275restoreView(_r110).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.jumpToTaskFromPanel(t_r111, $event));
    });
    \u0275\u0275elementStart(1, "div", 419);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_4_ng_container_9_div_2_button_1_Template_div_click_1_listener($event) {
      const t_r111 = \u0275\u0275restoreView(_r110).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      ctx_r2.toggleTaskDone(t_r111);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 420)(5, "div", 421);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 422)(8, "mat-icon", 423);
    \u0275\u0275text(9, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 424);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ChatPageComponent_aside_41_section_4_ng_container_9_div_2_button_1_span_12_Template, 2, 0, "span", 441)(13, ChatPageComponent_aside_41_section_4_ng_container_9_div_2_button_1_span_13_Template, 2, 0, "span", 425);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 427)(15, "mat-icon");
    \u0275\u0275text(16, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "mat-icon", 428);
    \u0275\u0275text(20, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r111 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("inline-task--done", t_r111.done)("inline-task--overdue", !t_r111.done && ctx_r2.isTaskOverdue(t_r111));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r111.done ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r111.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("\u7DE0\u5207: ", t_r111.dueDate, "", t_r111.dueTime ? " " + t_r111.dueTime : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r111.done);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !t_r111.done && ctx_r2.isTaskOverdue(t_r111));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getRoomName(t_r111.roomId));
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 416);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_4_ng_container_9_div_2_button_1_Template, 21, 11, "button", 440);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.doneTasksSorted);
  }
}
function ChatPageComponent_aside_41_section_4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_4_ng_container_9_div_1_Template, 7, 0, "div", 436)(2, ChatPageComponent_aside_41_section_4_ng_container_9_div_2_Template, 2, 1, "div", 437);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.doneTasksSorted.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.doneTasksSorted.length);
  }
}
function ChatPageComponent_aside_41_section_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 431)(1, "div", 432)(2, "button", 433);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r107);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTaskTab("active"));
    });
    \u0275\u0275text(3, " \u8AB2\u984C ");
    \u0275\u0275template(4, ChatPageComponent_aside_41_section_4_span_4_Template, 2, 1, "span", 434);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 433);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r107);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTaskTab("done"));
    });
    \u0275\u0275text(6, " \u7D42\u4E86 ");
    \u0275\u0275template(7, ChatPageComponent_aside_41_section_4_span_7_Template, 2, 1, "span", 434);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ChatPageComponent_aside_41_section_4_ng_container_8_Template, 3, 2, "ng-container", 226)(9, ChatPageComponent_aside_41_section_4_ng_container_9_Template, 3, 2, "ng-container", 226);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("task-tabs__tab--active", ctx_r2.taskActiveTab === "active");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.activeTasksSorted.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("task-tabs__tab--active", ctx_r2.taskActiveTab === "done");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.doneTasksSorted.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.taskActiveTab === "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.taskActiveTab === "done");
  }
}
function ChatPageComponent_aside_41_section_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 438)(1, "mat-icon");
    \u0275\u0275text(2, "bookmark_border");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3055\u308C\u305F\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u30DB\u30D0\u30FC\u3057\u3066\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u30A2\u30A4\u30B3\u30F3\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_section_5_div_2_button_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 454)(1, "mat-icon");
    \u0275\u0275text(2, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r113 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getRoomName(b_r113.roomId));
  }
}
function ChatPageComponent_aside_41_section_5_div_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 446);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_5_div_2_button_1_Template_button_click_0_listener() {
      const b_r113 = \u0275\u0275restoreView(_r112).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.jumpToBookmark(b_r113));
    });
    \u0275\u0275elementStart(1, "div", 341);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 447)(4, "div", 448)(5, "span", 449);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 450);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 451);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ChatPageComponent_aside_41_section_5_div_2_button_1_div_11_Template, 5, 1, "div", 452);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 453);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_5_div_2_button_1_Template_button_click_12_listener($event) {
      const b_r113 = \u0275\u0275restoreView(_r112).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.toggleBookmark(b_r113);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "bookmark_remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r113 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", b_r113.senderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r113.senderInitial);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r113.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r113.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r113.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMyChat && b_r113.roomId !== ctx_r2.selectedRoomId);
  }
}
function ChatPageComponent_aside_41_section_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 444);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_5_div_2_button_1_Template, 15, 7, "button", 445);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.bookmarkedMessages);
  }
}
function ChatPageComponent_aside_41_section_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 431);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_5_div_1_Template, 7, 0, "div", 436)(2, ChatPageComponent_aside_41_section_5_div_2_Template, 2, 1, "div", 443);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.bookmarkedMessages.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.bookmarkedMessages.length);
  }
}
function ChatPageComponent_aside_41_section_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 438)(1, "mat-icon");
    \u0275\u0275text(2, "push_pin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u30D4\u30F3\u7559\u3081\u3055\u308C\u305F\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u300C\u30D4\u30F3\u7559\u3081\u300D\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_section_6_div_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 446);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_6_div_2_button_1_Template_button_click_0_listener() {
      const p_r115 = \u0275\u0275restoreView(_r114).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.scrollToMessage(p_r115.id);
      return \u0275\u0275resetView(ctx_r2.backToRightPanelMenu());
    });
    \u0275\u0275elementStart(1, "div", 341);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 447)(4, "div", 448)(5, "span", 449);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 450);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 451);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 455);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_6_div_2_button_1_Template_button_click_11_listener($event) {
      const p_r115 = \u0275\u0275restoreView(_r114).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.pinMessage(p_r115);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r115 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", p_r115.senderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r115.senderInitial);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r115.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r115.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r115.text);
  }
}
function ChatPageComponent_aside_41_section_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 444);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_6_div_2_button_1_Template, 14, 6, "button", 445);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pinnedMessages);
  }
}
function ChatPageComponent_aside_41_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 431);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_6_div_1_Template, 7, 0, "div", 436)(2, ChatPageComponent_aside_41_section_6_div_2_Template, 2, 1, "div", 443);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.pinnedMessages.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pinnedMessages.length);
  }
}
function ChatPageComponent_aside_41_section_7_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 461);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_7_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r116);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openTagCreateForm());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u65B0\u3057\u3044\u30BF\u30B0\u3092\u4F5C\u6210 ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_7_div_4_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 469);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_7_div_4_button_3_Template_button_click_0_listener() {
      const c_r119 = \u0275\u0275restoreView(_r118).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.newTagColor = c_r119);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r119 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("background", c_r119);
    \u0275\u0275classProp("tag-create__color--active", ctx_r2.newTagColor === c_r119);
  }
}
function ChatPageComponent_aside_41_section_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 462)(1, "input", 463);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_aside_41_section_7_div_4_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r117);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newTagLabel, $event) || (ctx_r2.newTagLabel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ChatPageComponent_aside_41_section_7_div_4_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r117);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.createNewTag());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 464);
    \u0275\u0275template(3, ChatPageComponent_aside_41_section_7_div_4_button_3_Template, 1, 4, "button", 465);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 466)(5, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_7_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r117);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelCreateTag());
    });
    \u0275\u0275text(6, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 468);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_7_div_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r117);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.createNewTag());
    });
    \u0275\u0275text(8, "\u8FFD\u52A0");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTagLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.tagColorPalette);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.newTagLabel.trim());
  }
}
function ChatPageComponent_aside_41_section_7_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 470);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_7_button_6_Template_button_click_0_listener($event) {
      const t_r121 = \u0275\u0275restoreView(_r120).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.filterByTag(t_r121.label, $event);
      return \u0275\u0275resetView(ctx_r2.backToRightPanelMenu());
    });
    \u0275\u0275element(1, "span", 196);
    \u0275\u0275elementStart(2, "span", 471);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 472);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-icon", 473);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r121 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--tag-color", t_r121.color);
    \u0275\u0275classProp("tag-item--active", ctx_r2.activeTagFilter === t_r121.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", t_r121.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", t_r121.label, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.getTagCount(t_r121.label), "\u4EF6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.activeTagFilter === t_r121.label ? "check" : "chevron_right");
  }
}
function ChatPageComponent_aside_41_section_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 431)(1, "p", 456);
    \u0275\u0275text(2, "\u30BF\u30B0\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u305D\u306E\u30BF\u30B0\u304C\u4ED8\u3044\u305F\u30E1\u30C3\u30BB\u30FC\u30B8\u3060\u3051\u3092\u8868\u793A\u3057\u307E\u3059\u3002");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ChatPageComponent_aside_41_section_7_button_3_Template, 4, 0, "button", 457)(4, ChatPageComponent_aside_41_section_7_div_4_Template, 9, 3, "div", 458);
    \u0275\u0275elementStart(5, "div", 459);
    \u0275\u0275template(6, ChatPageComponent_aside_41_section_7_button_6_Template, 8, 9, "button", 460);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.showTagCreateForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showTagCreateForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.availableTags);
  }
}
function ChatPageComponent_aside_41_section_8_div_14_button_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.mediaTab === "image" ? "image" : "play_circle");
  }
}
function ChatPageComponent_aside_41_section_8_div_14_button_1_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 485);
    \u0275\u0275text(1, "play_circle");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_8_div_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 480);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_8_div_14_button_1_Template_button_click_0_listener($event) {
      const m_r124 = \u0275\u0275restoreView(_r123).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.openMediaCarousel(m_r124);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 481);
    \u0275\u0275template(2, ChatPageComponent_aside_41_section_8_div_14_button_1_mat_icon_2_Template, 2, 1, "mat-icon", 226)(3, ChatPageComponent_aside_41_section_8_div_14_button_1_mat_icon_3_Template, 2, 0, "mat-icon", 482);
    \u0275\u0275elementStart(4, "span", 483);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 484)(7, "mat-icon");
    \u0275\u0275text(8, "zoom_in");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const m_r124 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.isRealMediaUrl(m_r124.thumbnail) ? "url(" + m_r124.thumbnail + ") center/cover no-repeat" : m_r124.thumbnail);
    \u0275\u0275classProp("media-tile__thumb--has-image", ctx_r2.isRealMediaUrl(m_r124.thumbnail));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isRealMediaUrl(m_r124.thumbnail));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isRealMediaUrl(m_r124.thumbnail) && m_r124.type === "video");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatMediaMonth(m_r124.date));
  }
}
function ChatPageComponent_aside_41_section_8_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 438)(1, "mat-icon");
    \u0275\u0275text(2, "image_not_supported");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u8A72\u5F53\u3059\u308B\u30E1\u30C7\u30A3\u30A2\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_section_8_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 478);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_8_div_14_button_1_Template, 9, 7, "button", 479)(2, ChatPageComponent_aside_41_section_8_div_14_div_2_Template, 5, 0, "div", 436);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.roomMedia);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.roomMedia.length);
  }
}
function ChatPageComponent_aside_41_section_8_div_15_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r125 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 488);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_8_div_15_button_1_Template_button_click_0_listener() {
      const f_r126 = \u0275\u0275restoreView(_r125).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.downloadMediaItem(f_r126));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 489)(4, "div", 490);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 491);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 492)(9, "mat-icon");
    \u0275\u0275text(10, "download");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r126 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(f_r126.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", f_r126.size, " \xB7 ", f_r126.date, "");
  }
}
function ChatPageComponent_aside_41_section_8_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 438)(1, "mat-icon");
    \u0275\u0275text(2, "folder_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u30D5\u30A1\u30A4\u30EB\u306F\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_section_8_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 486);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_8_div_15_button_1_Template, 11, 3, "button", 487)(2, ChatPageComponent_aside_41_section_8_div_15_div_2_Template, 5, 0, "div", 436);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.roomMedia);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.roomMedia.length);
  }
}
function ChatPageComponent_aside_41_section_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 474)(1, "div", 475)(2, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r122);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.mediaTab = "image");
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u753B\u50CF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r122);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.mediaTab = "video");
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "movie");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " \u52D5\u753B ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_8_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r122);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.mediaTab = "file");
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " \u30D5\u30A1\u30A4\u30EB ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ChatPageComponent_aside_41_section_8_div_14_Template, 3, 2, "div", 476)(15, ChatPageComponent_aside_41_section_8_div_15_Template, 3, 2, "div", 477);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("chat-detail__panel-tab--active", ctx_r2.mediaTab === "image");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("chat-detail__panel-tab--active", ctx_r2.mediaTab === "video");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("chat-detail__panel-tab--active", ctx_r2.mediaTab === "file");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.mediaTab !== "file");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.mediaTab === "file");
  }
}
function ChatPageComponent_aside_41_section_9_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_9_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r128);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.memberSearchTerm = "");
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_section_9_div_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 505);
    \u0275\u0275text(1, "\u30AA\u30FC\u30CA\u30FC");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 501)(1, "div", 341);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 502)(4, "div", 503);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChatPageComponent_aside_41_section_9_div_12_div_6_Template, 2, 0, "div", 504);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_9_div_12_Template_button_click_7_listener($event) {
      const m_r130 = \u0275\u0275restoreView(_r129).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openMemberListMenu($event, m_r130));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "more_vert");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r130 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", m_r130.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r130.initial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r130.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r130.role === "owner");
  }
}
function ChatPageComponent_aside_41_section_9_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 438)(1, "mat-icon");
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u8A72\u5F53\u3059\u308B\u30E1\u30F3\u30D0\u30FC\u304C\u3044\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_section_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 431)(1, "div", 493)(2, "button", 494);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r127);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openAddMemberModal());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u30E1\u30F3\u30D0\u30FC\u3092\u8FFD\u52A0\u3059\u308B ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 495)(7, "mat-icon");
    \u0275\u0275text(8, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 496);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_aside_41_section_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r127);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.memberSearchTerm, $event) || (ctx_r2.memberSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ChatPageComponent_aside_41_section_9_button_10_Template, 3, 0, "button", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 497);
    \u0275\u0275template(12, ChatPageComponent_aside_41_section_9_div_12_Template, 10, 5, "div", 498)(13, ChatPageComponent_aside_41_section_9_div_13_Template, 5, 0, "div", 436);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 499)(15, "button", 53);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_9_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r127);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyInviteLink());
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " \u30C1\u30E3\u30C3\u30C8\u62DB\u5F85\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 500);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_9_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r127);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openLeaveConfirm());
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " \u30C1\u30E3\u30C3\u30C8\u3092\u9000\u51FA ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.memberSearchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.memberSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.sortedFilteredMembers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.sortedFilteredMembers.length);
  }
}
function ChatPageComponent_aside_41_section_10_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 516);
  }
}
function ChatPageComponent_aside_41_section_10_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 517);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.profileTarget.role === "owner" ? "\u30AA\u30FC\u30CA\u30FC" : "\u30E1\u30F3\u30D0\u30FC");
  }
}
function ChatPageComponent_aside_41_section_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 518)(1, "mat-icon");
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 519);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 520);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_10_div_9_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r132);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.copyProfileEmail(ctx_r2.profileTarget.email, $event));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.profileTarget.email);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", ctx_r2.copiedEmailAddress === ctx_r2.profileTarget.email ? "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F" : "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u30B3\u30D4\u30FC");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.copiedEmailAddress === ctx_r2.profileTarget.email ? "check" : "content_copy");
  }
}
function ChatPageComponent_aside_41_section_10_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 521)(1, "mat-icon");
    \u0275\u0275text(2, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.profileTarget.company);
  }
}
function ChatPageComponent_aside_41_section_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 506)(1, "div", 507)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ChatPageComponent_aside_41_section_10_span_4_Template, 1, 0, "span", 508);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 509);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ChatPageComponent_aside_41_section_10_div_7_Template, 2, 1, "div", 510);
    \u0275\u0275elementStart(8, "div", 511);
    \u0275\u0275template(9, ChatPageComponent_aside_41_section_10_div_9_Template, 8, 3, "div", 512)(10, ChatPageComponent_aside_41_section_10_div_10_Template, 5, 1, "div", 513);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 514)(12, "button", 515);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_10_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r131);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.composeMailToProfile(ctx_r2.profileTarget, $event));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " \u30E1\u30FC\u30EB\u9001\u4FE1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 53);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_10_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r131);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToFullProfile(ctx_r2.profileTarget));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " \u3082\u3063\u3068\u898B\u308B ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.profileTarget.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.profileTarget.initial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.profileTarget.online);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.profileTarget.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.profileTarget.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.profileTarget.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.profileTarget.company);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.profileTarget.email);
  }
}
function ChatPageComponent_aside_41_section_11_label_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r134 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 524)(1, "input", 533);
    \u0275\u0275listener("change", function ChatPageComponent_aside_41_section_11_label_14_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r134);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setRoomNotificationMode("mention"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 526);
    \u0275\u0275elementStart(3, "div", 527)(4, "strong");
    \u0275\u0275text(5, "\u30E1\u30F3\u30B7\u30E7\u30F3\u6642\u306E\u307F\u901A\u77E5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "@\u30E1\u30F3\u30B7\u30E7\u30F3\u3084\u8FD4\u4FE1\u306E\u6642\u306E\u307F\u901A\u77E5\u3057\u307E\u3059");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-icon", 528);
    \u0275\u0275text(9, "alternate_email");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("notif-panel__radio--active", ctx_r2.roomNotificationMode === "mention");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.roomNotificationMode === "mention");
  }
}
function ChatPageComponent_aside_41_section_11_small_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "\u901A\u77E5\u3092\u5B8C\u5168\u306B\u30AA\u30D5\u306B\u3057\u307E\u3059");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_11_small_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.roomMuteRemainingLabel, "\u30DF\u30E5\u30FC\u30C8\u4E2D");
  }
}
function ChatPageComponent_aside_41_section_11_div_25_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 540);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_11_div_25_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 540);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_11_div_25_mat_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 540);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_11_div_25_mat_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 540);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_11_div_25_mat_icon_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 540);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_aside_41_section_11_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r135 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 534)(1, "p", 535);
    \u0275\u0275text(2, "\u671F\u9593\u6307\u5B9A\u30DF\u30E5\u30FC\u30C8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 536)(4, "button", 537);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_11_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r135);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setRoomNotificationMode("mute", 1));
    });
    \u0275\u0275template(5, ChatPageComponent_aside_41_section_11_div_25_mat_icon_5_Template, 2, 0, "mat-icon", 538);
    \u0275\u0275text(6, " 1\u6642\u9593 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 537);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_11_div_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r135);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setRoomNotificationMode("mute", 8));
    });
    \u0275\u0275template(8, ChatPageComponent_aside_41_section_11_div_25_mat_icon_8_Template, 2, 0, "mat-icon", 538);
    \u0275\u0275text(9, " 8\u6642\u9593 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 537);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_11_div_25_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r135);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setRoomNotificationMode("mute", 24));
    });
    \u0275\u0275template(11, ChatPageComponent_aside_41_section_11_div_25_mat_icon_11_Template, 2, 0, "mat-icon", 538);
    \u0275\u0275text(12, " 1\u65E5 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 537);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_11_div_25_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r135);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setRoomNotificationMode("mute", 168));
    });
    \u0275\u0275template(14, ChatPageComponent_aside_41_section_11_div_25_mat_icon_14_Template, 2, 0, "mat-icon", 538);
    \u0275\u0275text(15, " 1\u9031\u9593 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 539);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_11_div_25_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r135);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setRoomNotificationMode("mute"));
    });
    \u0275\u0275template(17, ChatPageComponent_aside_41_section_11_div_25_mat_icon_17_Template, 2, 0, "mat-icon", 538);
    \u0275\u0275text(18, " \u7121\u671F\u9650 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("notif-panel__mute-btn--active", ctx_r2.isMuteDurationActive(1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMuteDurationActive(1));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("notif-panel__mute-btn--active", ctx_r2.isMuteDurationActive(8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMuteDurationActive(8));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("notif-panel__mute-btn--active", ctx_r2.isMuteDurationActive(24));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMuteDurationActive(24));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("notif-panel__mute-btn--active", ctx_r2.isMuteDurationActive(168));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMuteDurationActive(168));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("notif-panel__mute-btn--active", !ctx_r2.roomMuteUntilMs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.roomMuteUntilMs);
  }
}
function ChatPageComponent_aside_41_section_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 431)(1, "div", 522)(2, "p", 523);
    \u0275\u0275text(3, "\u901A\u77E5\u8A2D\u5B9A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 524)(5, "input", 525);
    \u0275\u0275listener("change", function ChatPageComponent_aside_41_section_11_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r133);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setRoomNotificationMode("all"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 526);
    \u0275\u0275elementStart(7, "div", 527)(8, "strong");
    \u0275\u0275text(9, "\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u306E\u3059\u3079\u3066\u3092\u901A\u77E5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11, "\u65B0\u7740\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5168\u3066\u901A\u77E5\u3057\u307E\u3059");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-icon", 528);
    \u0275\u0275text(13, "notifications_active");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ChatPageComponent_aside_41_section_11_label_14_Template, 10, 3, "label", 529);
    \u0275\u0275elementStart(15, "label", 524)(16, "input", 530);
    \u0275\u0275listener("change", function ChatPageComponent_aside_41_section_11_Template_input_change_16_listener() {
      \u0275\u0275restoreView(_r133);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setRoomNotificationMode("mute"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "span", 526);
    \u0275\u0275elementStart(18, "div", 527)(19, "strong");
    \u0275\u0275text(20, "\u30DF\u30E5\u30FC\u30C8");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ChatPageComponent_aside_41_section_11_small_21_Template, 2, 0, "small", 226)(22, ChatPageComponent_aside_41_section_11_small_22_Template, 2, 1, "small", 226);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-icon", 528);
    \u0275\u0275text(24, "notifications_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ChatPageComponent_aside_41_section_11_div_25_Template, 19, 15, "div", 531);
    \u0275\u0275elementStart(26, "p", 532);
    \u0275\u0275text(27, "\u5909\u66F4\u306F\u5373\u5EA7\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("notif-panel__radio--active", ctx_r2.roomNotificationMode === "all");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.roomNotificationMode === "all");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.isGroup || ctx_r2.isMyChat);
    \u0275\u0275advance();
    \u0275\u0275classProp("notif-panel__radio--active", ctx_r2.roomNotificationMode === "mute");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.roomNotificationMode === "mute");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r2.roomMuteUntilMs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.roomMuteUntilMs);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.roomNotificationMode === "mute");
  }
}
function ChatPageComponent_aside_41_section_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 431)(1, "div", 541)(2, "label", 542);
    \u0275\u0275text(3, "\u30B0\u30EB\u30FC\u30D7\u540D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 543);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_aside_41_section_12_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r136);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.renameGroupInput, $event) || (ctx_r2.renameGroupInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 544)(6, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r136);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.backToRightPanelMenu());
    });
    \u0275\u0275text(7, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 468);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r136);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveRenameGroup());
    });
    \u0275\u0275text(9, "\u4FDD\u5B58");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.renameGroupInput);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.renameGroupInput.trim());
  }
}
function ChatPageComponent_aside_41_section_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 431)(1, "div", 545)(2, "mat-icon", 546);
    \u0275\u0275text(3, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 547);
    \u0275\u0275text(5, "\u30C1\u30E3\u30C3\u30C8\u3092\u30D6\u30ED\u30C3\u30AF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 548)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " \u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3059\u304B\uFF1F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 549);
    \u0275\u0275text(11, "\u30D6\u30ED\u30C3\u30AF\u3059\u308B\u3068\u3001\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u304B\u3089\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D7\u4FE1\u3067\u304D\u306A\u304F\u306A\u308A\u3001\u30C1\u30E3\u30C3\u30C8\u4E00\u89A7\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3059\u3002");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 550)(13, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_13_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r137);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setRightPanelView("members"));
    });
    \u0275\u0275text(14, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 551);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_13_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r137);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmBlock());
    });
    \u0275\u0275text(16, "\u30D6\u30ED\u30C3\u30AF\u3059\u308B");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.selectedRoom.name);
  }
}
function ChatPageComponent_aside_41_section_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 431)(1, "div", 545)(2, "mat-icon", 546);
    \u0275\u0275text(3, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 547);
    \u0275\u0275text(5, "\u30C1\u30E3\u30C3\u30C8\u3092\u9000\u51FA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 548)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " \u304B\u3089\u9000\u51FA\u3057\u307E\u3059\u304B\uFF1F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 549);
    \u0275\u0275text(11, "\u9000\u51FA\u3059\u308B\u3068\u3001\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u95B2\u89A7\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059\u3002");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 550)(13, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_14_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r138);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setRightPanelView("members"));
    });
    \u0275\u0275text(14, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 551);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_14_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r138);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmLeave());
    });
    \u0275\u0275text(16, "\u9000\u51FA\u3059\u308B");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.selectedRoom.name);
  }
}
function ChatPageComponent_aside_41_section_15_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r140 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 560);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_15_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r140);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.threadSearchQuery = "";
      return \u0275\u0275resetView(ctx_r2.onThreadSearchChange());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_section_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 561);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.threadSearchResults.length, " \u4EF6\u306E\u7D50\u679C ");
  }
}
function ChatPageComponent_aside_41_section_15_div_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r141 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 564);
    \u0275\u0275listener("click", function ChatPageComponent_aside_41_section_15_div_8_button_1_Template_button_click_0_listener() {
      const r_r142 = \u0275\u0275restoreView(_r141).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.jumpToSearchResult(r_r142));
    });
    \u0275\u0275elementStart(1, "div", 565)(2, "span", 341);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 566);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 567);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r142 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", r_r142.senderColor || "#999");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r142.senderInitial || r_r142.senderName[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r142.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r142.time);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.highlightSearchText(r_r142.text), \u0275\u0275sanitizeHtml);
  }
}
function ChatPageComponent_aside_41_section_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 562);
    \u0275\u0275template(1, ChatPageComponent_aside_41_section_15_div_8_button_1_Template, 9, 6, "button", 563);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.threadSearchResults);
  }
}
function ChatPageComponent_aside_41_section_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 568)(1, "mat-icon");
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u4E00\u81F4\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_aside_41_section_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 552)(1, "div", 553)(2, "div", 554)(3, "mat-icon");
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 555);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_aside_41_section_15_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r139);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.threadSearchQuery, $event) || (ctx_r2.threadSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ChatPageComponent_aside_41_section_15_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r139);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onThreadSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChatPageComponent_aside_41_section_15_button_6_Template, 3, 0, "button", 556);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ChatPageComponent_aside_41_section_15_div_7_Template, 2, 1, "div", 557)(8, ChatPageComponent_aside_41_section_15_div_8_Template, 2, 1, "div", 558)(9, ChatPageComponent_aside_41_section_15_div_9_Template, 5, 0, "div", 559);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.threadSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.threadSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.threadSearchQuery.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.threadSearchResults.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.threadSearchQuery.trim() && ctx_r2.threadSearchResults.length === 0);
  }
}
function ChatPageComponent_aside_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 368);
    \u0275\u0275template(1, ChatPageComponent_aside_41_div_1_Template, 6, 0, "div", 369)(2, ChatPageComponent_aside_41_div_2_Template, 6, 1, "div", 370)(3, ChatPageComponent_aside_41_ng_container_3_Template, 15, 10, "ng-container", 226)(4, ChatPageComponent_aside_41_section_4_Template, 10, 8, "section", 371)(5, ChatPageComponent_aside_41_section_5_Template, 3, 2, "section", 371)(6, ChatPageComponent_aside_41_section_6_Template, 3, 2, "section", 371)(7, ChatPageComponent_aside_41_section_7_Template, 7, 3, "section", 371)(8, ChatPageComponent_aside_41_section_8_Template, 16, 8, "section", 372)(9, ChatPageComponent_aside_41_section_9_Template, 23, 4, "section", 371)(10, ChatPageComponent_aside_41_section_10_Template, 20, 9, "section", 373)(11, ChatPageComponent_aside_41_section_11_Template, 28, 10, "section", 371)(12, ChatPageComponent_aside_41_section_12_Template, 10, 2, "section", 371)(13, ChatPageComponent_aside_41_section_13_Template, 17, 1, "section", 371)(14, ChatPageComponent_aside_41_section_14_Template, 17, 1, "section", 371)(15, ChatPageComponent_aside_41_section_15_Template, 10, 5, "section", 374);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("chat-detail--subview", ctx_r2.rightPanelView !== "menu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "menu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView !== "menu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "menu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "tasks");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "bookmarks");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "pinned");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "tags");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "media");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "members" && ctx_r2.selectedRoom.members);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "profile" && ctx_r2.profileTarget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "notifications");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "rename-group");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "block-confirm");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "leave-confirm");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rightPanelView === "search");
  }
}
function ChatPageComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r143 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 569);
    \u0275\u0275listener("click", function ChatPageComponent_div_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r143);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showMessageMenu = false);
    });
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_43_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 571);
    \u0275\u0275listener("click", function ChatPageComponent_div_43_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r145);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startEditMessage(ctx_r2.messageMenuTarget));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u7DE8\u96C6");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_43_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r146 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 575);
    \u0275\u0275listener("click", function ChatPageComponent_div_43_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r146);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.withdrawMessage(ctx_r2.messageMenuTarget));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u53D6\u308A\u6D88\u3057");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r144 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 570);
    \u0275\u0275listener("click", function ChatPageComponent_div_43_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r144);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 571);
    \u0275\u0275listener("click", function ChatPageComponent_div_43_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r144);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEmojiPicker(ctx_r2.messageMenuTarget));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "add_reaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 571);
    \u0275\u0275listener("click", function ChatPageComponent_div_43_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r144);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.replyMessage(ctx_r2.messageMenuTarget));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "reply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "\u8FD4\u4FE1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 571);
    \u0275\u0275listener("click", function ChatPageComponent_div_43_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r144);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleBookmark(ctx_r2.messageMenuTarget));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 571);
    \u0275\u0275listener("click", function ChatPageComponent_div_43_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r144);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pinMessage(ctx_r2.messageMenuTarget));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "push_pin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 571);
    \u0275\u0275listener("click", function ChatPageComponent_div_43_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r144);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskCreateModal(ctx_r2.messageMenuTarget));
    });
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "\u30DE\u30A4\u30BF\u30B9\u30AF\u306B\u8FFD\u52A0\uFF08\u7DE0\u520724h\u524D\u306B\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9\u3067\u901A\u77E5\uFF09");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 571);
    \u0275\u0275listener("click", function ChatPageComponent_div_43_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r144);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyMessage(ctx_r2.messageMenuTarget));
    });
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "\u30B3\u30D4\u30FC");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "div", 572);
    \u0275\u0275template(32, ChatPageComponent_div_43_button_32_Template, 5, 0, "button", 573)(33, ChatPageComponent_div_43_button_33_Template, 5, 0, "button", 574);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r2.messageMenuPos.x, "px")("top", ctx_r2.messageMenuPos.y, "px");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r2.messageMenuTarget.bookmarked ? "bookmark" : "bookmark_border");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.messageMenuTarget.bookmarked ? "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u89E3\u9664" : "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.messageMenuTarget.isPinned ? "\u30D4\u30F3\u7559\u3081\u3092\u89E3\u9664" : "\u30D4\u30F3\u7559\u3081");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r2.messageMenuTarget.isMe);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.messageMenuTarget.isMe && !ctx_r2.messageMenuTarget.withdrawn);
  }
}
function ChatPageComponent_div_44_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 581);
    \u0275\u0275listener("click", function ChatPageComponent_div_44_button_5_Template_button_click_0_listener() {
      const e_r149 = \u0275\u0275restoreView(_r148).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addReaction(e_r149));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r149 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r149);
  }
}
function ChatPageComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r147);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(1, "div", 577);
    \u0275\u0275listener("click", function ChatPageComponent_div_44_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r147);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 578);
    \u0275\u0275text(3, "\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u9078\u629E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 579);
    \u0275\u0275template(5, ChatPageComponent_div_44_button_5_Template, 2, 1, "button", 580);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.emojis);
  }
}
function ChatPageComponent_div_45_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r151 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 608)(1, "label", 595);
    \u0275\u0275text(2, " \u30B0\u30EB\u30FC\u30D7\u30C1\u30E3\u30C3\u30C8\u540D ");
    \u0275\u0275elementStart(3, "span", 609);
    \u0275\u0275text(4, "\uFF08\u4EFB\u610F\uFF09");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 596)(6, "mat-icon");
    \u0275\u0275text(7, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 610);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_45_div_12_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r151);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newChatName, $event) || (ctx_r2.newChatName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newChatName);
  }
}
function ChatPageComponent_div_45_span_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r152 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 611)(1, "span", 612);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 613);
    \u0275\u0275listener("click", function ChatPageComponent_div_45_span_17_Template_button_click_3_listener() {
      const c_r153 = \u0275\u0275restoreView(_r152).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeChip(c_r153.id));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r153 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r153.name);
  }
}
function ChatPageComponent_div_45_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 614);
    \u0275\u0275listener("click", function ChatPageComponent_div_45_button_34_Template_button_click_0_listener() {
      const c_r155 = \u0275\u0275restoreView(_r154).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectContact(c_r155));
    });
    \u0275\u0275elementStart(1, "div", 341);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 615)(4, "div", 616);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 617);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r155 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "contact-item-" + c_r155.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", c_r155.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r155.initial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r155.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r155.email);
  }
}
function ChatPageComponent_div_45_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 618);
    \u0275\u0275text(1, "\u8A72\u5F53\u3059\u308B\u9023\u7D61\u5148\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_45_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 619);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u3055\u3089\u306B ", ctx_r2.filteredContacts.length - ctx_r2.visibleContacts.length, " \u4EF6 ");
  }
}
function ChatPageComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r150 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 582);
    \u0275\u0275listener("click", function ChatPageComponent_div_45_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(1, "div", 583);
    \u0275\u0275listener("click", function ChatPageComponent_div_45_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r150);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 584)(3, "button", 585);
    \u0275\u0275listener("click", function ChatPageComponent_div_45_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "\u30C1\u30E3\u30C3\u30C8\u53C2\u52A0\u8005\u3092\u9078\u629E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 586);
    \u0275\u0275listener("click", function ChatPageComponent_div_45_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 587);
    \u0275\u0275template(12, ChatPageComponent_div_45_div_12_Template, 9, 1, "div", 588);
    \u0275\u0275elementStart(13, "div", 589)(14, "label", 590);
    \u0275\u0275text(15, "\u9078\u629E\u3055\u308C\u305F\u53C2\u52A0\u8005");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 591);
    \u0275\u0275template(17, ChatPageComponent_div_45_span_17_Template, 6, 1, "span", 592);
    \u0275\u0275elementStart(18, "input", 593);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_45_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newChatChipEmail, $event) || (ctx_r2.newChatChipEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function ChatPageComponent_div_45_Template_input_keydown_18_listener($event) {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChipInputKey($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 594)(20, "label", 595);
    \u0275\u0275text(21, "\u5019\u88DC\u3092\u7D5E\u308A\u8FBC\u3080");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 596)(23, "mat-icon");
    \u0275\u0275text(24, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 597);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_45_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newChatSearchTerm, $event) || (ctx_r2.newChatSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ChatPageComponent_div_45_Template_input_ngModelChange_25_listener() {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.contactPage = 1);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "label", 598)(27, "span", 599);
    \u0275\u0275listener("click", function ChatPageComponent_div_45_Template_span_click_27_listener() {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showGoogleContacts = !ctx_r2.showGoogleContacts);
    });
    \u0275\u0275element(28, "span", 600);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-icon", 601);
    \u0275\u0275text(30, "contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Google\u9023\u7D61\u5148\u3092\u4E00\u89A7\u306B\u8868\u793A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 602);
    \u0275\u0275listener("scroll", function ChatPageComponent_div_45_Template_div_scroll_33_listener($event) {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onContactsScroll($event));
    });
    \u0275\u0275template(34, ChatPageComponent_div_45_button_34_Template, 8, 6, "button", 603)(35, ChatPageComponent_div_45_div_35_Template, 2, 0, "div", 604)(36, ChatPageComponent_div_45_div_36_Template, 2, 1, "div", 605);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "footer", 606)(38, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_div_45_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275text(39, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 607);
    \u0275\u0275listener("click", function ChatPageComponent_div_45_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r150);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createNewChat());
    });
    \u0275\u0275text(41, " \u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r2.newChatSelectedMembers.length >= 2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.getSelectedChips());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newChatChipEmail);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newChatSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("toggle--on", ctx_r2.showGoogleContacts);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.visibleContacts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.visibleContacts.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.visibleContacts.length < ctx_r2.filteredContacts.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.newChatSelectedMembers.length);
  }
}
function ChatPageComponent_div_46_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 505);
    \u0275\u0275text(1, "\u30AA\u30FC\u30CA\u30FC");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_46_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r157 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 501)(1, "div", 341);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 502)(4, "div", 503);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChatPageComponent_div_46_div_10_div_6_Template, 2, 0, "div", 504);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_46_div_10_Template_button_click_7_listener($event) {
      const m_r158 = \u0275\u0275restoreView(_r157).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openMemberListMenu($event, m_r158));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "more_vert");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r158 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", m_r158.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r158.initial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r158.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r158.role === "owner");
  }
}
function ChatPageComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r156 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_46_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r156);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(1, "div", 620);
    \u0275\u0275listener("click", function ChatPageComponent_div_46_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r156);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 621)(3, "h3");
    \u0275\u0275text(4, "\u53C2\u52A0\u30E1\u30F3\u30D0\u30FC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 622);
    \u0275\u0275listener("click", function ChatPageComponent_div_46_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r156);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 587)(9, "div", 623);
    \u0275\u0275template(10, ChatPageComponent_div_46_div_10_Template, 10, 5, "div", 498);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 499)(12, "button", 53);
    \u0275\u0275listener("click", function ChatPageComponent_div_46_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r156);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAddMemberModal());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " \u30E1\u30F3\u30D0\u30FC\u3092\u8FFD\u52A0\u3059\u308B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 494);
    \u0275\u0275listener("click", function ChatPageComponent_div_46_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r156);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyInviteLink());
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " \u30C1\u30E3\u30C3\u30C8\u62DB\u5F85\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.selectedRoom.members);
  }
}
function ChatPageComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r159 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 569);
    \u0275\u0275listener("click", function ChatPageComponent_div_47_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r159);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.memberListMenuTarget = null);
    });
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 570);
    \u0275\u0275listener("click", function ChatPageComponent_div_48_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r160);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 571);
    \u0275\u0275listener("click", function ChatPageComponent_div_48_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r160);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToFullProfile(ctx_r2.memberListMenuTarget));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u8868\u793A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 571);
    \u0275\u0275listener("click", function ChatPageComponent_div_48_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r160);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.memberStartChat(ctx_r2.memberListMenuTarget));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB\u3059\u308B");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 572);
    \u0275\u0275elementStart(12, "button", 575);
    \u0275\u0275listener("click", function ChatPageComponent_div_48_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r160);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeMember(ctx_r2.memberListMenuTarget));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "\u9000\u51FA\u3055\u305B\u308B");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r2.memberListMenuPos.x, "px")("top", ctx_r2.memberListMenuPos.y, "px");
  }
}
function ChatPageComponent_div_49_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 629);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r162 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", l_r162, "");
  }
}
function ChatPageComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r161 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r161);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelNewTagConfirm());
    });
    \u0275\u0275elementStart(1, "div", 620);
    \u0275\u0275listener("click", function ChatPageComponent_div_49_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r161);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "mat-icon");
    \u0275\u0275text(4, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "\u65B0\u3057\u3044\u30BF\u30B0\u3092\u8FFD\u52A0\u3057\u307E\u3059\u304B\uFF1F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 587)(8, "p", 625);
    \u0275\u0275text(9, "\u4EE5\u4E0B\u306E\u30BF\u30B0\u306F\u307E\u3060\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u8FFD\u52A0\u3057\u307E\u3059\u304B\uFF1F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 626);
    \u0275\u0275template(11, ChatPageComponent_div_49_span_11_Template, 2, 1, "span", 627);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "footer", 606)(13, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_div_49_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r161);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmNewTagsNo());
    });
    \u0275\u0275text(14, "\u3044\u3044\u3048");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 628);
    \u0275\u0275listener("click", function ChatPageComponent_div_49_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r161);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmNewTagsYes());
    });
    \u0275\u0275text(16, "\u306F\u3044");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r2.pendingNewTagConfirm == null ? null : ctx_r2.pendingNewTagConfirm.labels);
  }
}
function ChatPageComponent_div_50_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r164 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 640);
    \u0275\u0275listener("click", function ChatPageComponent_div_50_div_9_div_1_Template_div_click_0_listener() {
      const id_r165 = \u0275\u0275restoreView(_r164).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleAddMemberPick(id_r165));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r165 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getContactName(id_r165));
  }
}
function ChatPageComponent_div_50_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 638);
    \u0275\u0275template(1, ChatPageComponent_div_50_div_9_div_1_Template, 5, 1, "div", 639);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.addMemberSelectedIds);
  }
}
function ChatPageComponent_div_50_label_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 647);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r167 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r167.email);
  }
}
function ChatPageComponent_div_50_label_15_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 648);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_50_label_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r166 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 641)(1, "input", 642);
    \u0275\u0275listener("change", function ChatPageComponent_div_50_label_15_Template_input_change_1_listener() {
      const c_r167 = \u0275\u0275restoreView(_r166).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleAddMemberPick(c_r167.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 341);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 643)(5, "div", 644);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ChatPageComponent_div_50_label_15_div_7_Template, 2, 1, "div", 645);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ChatPageComponent_div_50_label_15_mat_icon_8_Template, 2, 0, "mat-icon", 646);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r167 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("add-member__item--selected", ctx_r2.addMemberSelectedIds.includes(c_r167.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.addMemberSelectedIds.includes(c_r167.id));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", c_r167.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r167.initial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r167.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r167.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.addMemberSelectedIds.includes(c_r167.id));
  }
}
function ChatPageComponent_div_50_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 649);
    \u0275\u0275text(1, "\u5019\u88DC\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r163 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 630);
    \u0275\u0275listener("click", function ChatPageComponent_div_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r163);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddMemberModal = false);
    });
    \u0275\u0275elementStart(1, "div", 631);
    \u0275\u0275listener("click", function ChatPageComponent_div_50_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r163);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3");
    \u0275\u0275text(4, "\u30E1\u30F3\u30D0\u30FC\u3092\u8FFD\u52A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_50_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r163);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddMemberModal = false);
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 587);
    \u0275\u0275template(9, ChatPageComponent_div_50_div_9_Template, 2, 1, "div", 632);
    \u0275\u0275elementStart(10, "div", 633)(11, "mat-icon");
    \u0275\u0275text(12, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 634);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_50_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r163);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.addMemberSearchTerm, $event) || (ctx_r2.addMemberSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 635);
    \u0275\u0275template(15, ChatPageComponent_div_50_label_15_Template, 9, 9, "label", 636)(16, ChatPageComponent_div_50_div_16_Template, 2, 0, "div", 637);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "footer", 606)(18, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_div_50_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r163);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddMemberModal = false);
    });
    \u0275\u0275text(19, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 468);
    \u0275\u0275listener("click", function ChatPageComponent_div_50_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r163);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmAddMembers());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.addMemberSelectedIds.length);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.addMemberSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.addMemberCandidates);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.addMemberCandidates.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.addMemberSelectedIds.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.addMemberSelectedIds.length, "\u540D\u3092\u8FFD\u52A0 ");
  }
}
function ChatPageComponent_div_51_div_20_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 656);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r170 = ctx.$implicit;
    \u0275\u0275property("ngValue", f_r170.id)("disabled", f_r170.system);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r170.name);
  }
}
function ChatPageComponent_div_51_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r169 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 650)(1, "label");
    \u0275\u0275text(2, "\u89AA\u30D5\u30A9\u30EB\u30C0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 653);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_51_div_20_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r169);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newFolderParentId, $event) || (ctx_r2.newFolderParentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 654);
    \u0275\u0275text(5, "\uFF08\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\uFF09");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChatPageComponent_div_51_div_20_option_6_Template, 2, 3, "option", 655);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newFolderParentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.folders);
  }
}
function ChatPageComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r168 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_51_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r168);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(1, "div", 620);
    \u0275\u0275listener("click", function ChatPageComponent_div_51_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r168);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "create_new_folder");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u65B0\u898F\u4F5C\u6210");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_51_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r168);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 587)(11, "div", 650)(12, "label");
    \u0275\u0275text(13, "\u30D5\u30A9\u30EB\u30C0\u540D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 651);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_51_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r168);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newFolderName, $event) || (ctx_r2.newFolderName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "label", 598)(16, "span", 599);
    \u0275\u0275listener("click", function ChatPageComponent_div_51_Template_span_click_16_listener() {
      \u0275\u0275restoreView(_r168);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newFolderUseParent = !ctx_r2.newFolderUseParent);
    });
    \u0275\u0275element(17, "span", 600);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\u89AA\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ChatPageComponent_div_51_div_20_Template, 7, 3, "div", 652);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "footer", 606)(22, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_div_51_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r168);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275text(23, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 468);
    \u0275\u0275listener("click", function ChatPageComponent_div_51_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r168);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createFolder());
    });
    \u0275\u0275text(25, "\u4F5C\u6210");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newFolderName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("toggle--on", ctx_r2.newFolderUseParent);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.newFolderUseParent);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.newFolderName.trim());
  }
}
function ChatPageComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r171 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_52_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r171);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(1, "div", 620);
    \u0275\u0275listener("click", function ChatPageComponent_div_52_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r171);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u30D5\u30A9\u30EB\u30C0\u540D\u3092\u5909\u66F4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_52_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r171);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 587)(11, "div", 650)(12, "label");
    \u0275\u0275text(13, "\u30D5\u30A9\u30EB\u30C0\u540D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 657);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_52_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r171);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.folderRenameInput, $event) || (ctx_r2.folderRenameInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ChatPageComponent_div_52_Template_input_keydown_enter_14_listener() {
      \u0275\u0275restoreView(_r171);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmRenameFolder());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "footer", 606)(16, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_div_52_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r171);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275text(17, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 468);
    \u0275\u0275listener("click", function ChatPageComponent_div_52_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r171);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmRenameFolder());
    });
    \u0275\u0275text(19, "\u4FDD\u5B58");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.folderRenameInput);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.folderRenameInput.trim());
  }
}
function ChatPageComponent_div_53_ng_container_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ChatPageComponent_div_53_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_div_53_ng_container_14_ng_container_1_Template, 1, 0, "ng-container", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const parent_r173 = ctx.$implicit;
    \u0275\u0275nextContext();
    const folderPickNode_r174 = \u0275\u0275reference(16);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", folderPickNode_r174)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, parent_r173));
  }
}
function ChatPageComponent_div_53_ng_template_15_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r176 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 671);
    \u0275\u0275listener("click", function ChatPageComponent_div_53_ng_template_15_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r176);
      const folder_r177 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.togglePickerFolderExpanded(folder_r177.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const folder_r177 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-expanded", ctx_r2.isPickerFolderExpanded(folder_r177.id))("aria-label", ctx_r2.isPickerFolderExpanded(folder_r177.id) ? "\u9589\u3058\u308B" : "\u5C55\u958B");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isPickerFolderExpanded(folder_r177.id) ? "expand_more" : "chevron_right");
  }
}
function ChatPageComponent_div_53_ng_template_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 672);
  }
}
function ChatPageComponent_div_53_ng_template_15_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 673);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_53_ng_template_15_ng_container_11_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ChatPageComponent_div_53_ng_template_15_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_div_53_ng_template_15_ng_container_11_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const child_r178 = ctx.$implicit;
    const depth_r179 = \u0275\u0275nextContext(2).depth;
    \u0275\u0275nextContext();
    const folderPickNode_r174 = \u0275\u0275reference(16);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", folderPickNode_r174)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c4, child_r178, depth_r179 + 1));
  }
}
function ChatPageComponent_div_53_ng_template_15_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_div_53_ng_template_15_ng_container_11_ng_container_1_Template, 2, 5, "ng-container", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const folder_r177 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getChildFolders(folder_r177.id));
  }
}
function ChatPageComponent_div_53_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r175 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 665);
    \u0275\u0275template(1, ChatPageComponent_div_53_ng_template_15_button_1_Template, 3, 3, "button", 666)(2, ChatPageComponent_div_53_ng_template_15_ng_template_2_Template, 1, 0, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "label", 667)(5, "input", 642);
    \u0275\u0275listener("change", function ChatPageComponent_div_53_ng_template_15_Template_input_change_5_listener() {
      const folder_r177 = \u0275\u0275restoreView(_r175).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleRoomFolder(folder_r177.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-icon", 668);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 669);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ChatPageComponent_div_53_ng_template_15_mat_icon_10_Template, 2, 0, "mat-icon", 670);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ChatPageComponent_div_53_ng_template_15_ng_container_11_Template, 2, 1, "ng-container", 226);
  }
  if (rf & 2) {
    const folder_r177 = ctx.$implicit;
    const depth_r179 = ctx.depth;
    const noToggleSpacer_r180 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-left", 8 + depth_r179 * 16, "px");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getChildFolders(folder_r177.id).length > 0)("ngIfElse", noToggleSpacer_r180);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("folder-pick-item--active", ctx_r2.isRoomInFolder(ctx_r2.folderAddToTarget, folder_r177.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isRoomInFolder(ctx_r2.folderAddToTarget, folder_r177.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(folder_r177.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(folder_r177.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isRoomInFolder(ctx_r2.folderAddToTarget, folder_r177.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isPickerFolderExpanded(folder_r177.id));
  }
}
function ChatPageComponent_div_53_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r181 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 674);
    \u0275\u0275listener("click", function ChatPageComponent_div_53_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r181);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleInlineNewFolderInput());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "create_new_folder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u65B0\u3057\u3044\u30D5\u30A9\u30EB\u30C0\u3092\u4F5C\u6210");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_53_div_19_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 656);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r183 = ctx.$implicit;
    \u0275\u0275property("ngValue", f_r183.id)("disabled", f_r183.system);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r183.name);
  }
}
function ChatPageComponent_div_53_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r182 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 675)(1, "div", 650)(2, "label");
    \u0275\u0275text(3, "\u30D5\u30A9\u30EB\u30C0\u540D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 676);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_53_div_19_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r182);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.inlineNewFolderName, $event) || (ctx_r2.inlineNewFolderName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ChatPageComponent_div_53_div_19_Template_input_keydown_enter_4_listener() {
      \u0275\u0275restoreView(_r182);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitInlineNewFolder());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 650)(6, "label");
    \u0275\u0275text(7, "\u89AA\u30D5\u30A9\u30EB\u30C0\uFF08\u4EFB\u610F\u30FB\u30D5\u30A9\u30EB\u30C0\u306E\u4E2D\u306B\u30D5\u30A9\u30EB\u30C0\u3092\u4F5C\u6210\uFF09");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 653);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_53_div_19_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r182);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.inlineNewFolderParentId, $event) || (ctx_r2.inlineNewFolderParentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 654);
    \u0275\u0275text(10, "\uFF08\u30EB\u30FC\u30C8\u306B\u4F5C\u6210\uFF09");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ChatPageComponent_div_53_div_19_option_11_Template, 2, 3, "option", 655);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 677)(13, "button", 222);
    \u0275\u0275listener("click", function ChatPageComponent_div_53_div_19_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r182);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleInlineNewFolderInput());
    });
    \u0275\u0275text(14, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 678);
    \u0275\u0275listener("click", function ChatPageComponent_div_53_div_19_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r182);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitInlineNewFolder());
    });
    \u0275\u0275text(16, "\u4F5C\u6210\u3057\u3066\u8FFD\u52A0");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.inlineNewFolderName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.inlineNewFolderParentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.folders);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.inlineNewFolderName.trim());
  }
}
function ChatPageComponent_div_53_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r184 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_div_53_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r184);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearRoomFolders());
    });
    \u0275\u0275text(1, "\u3059\u3079\u3066\u5916\u3059");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r172 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_53_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r172);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeFolderAddToModal());
    });
    \u0275\u0275elementStart(1, "div", 658);
    \u0275\u0275listener("click", function ChatPageComponent_div_53_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r172);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "folder");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_53_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r172);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeFolderAddToModal());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 587)(11, "p", 659);
    \u0275\u0275text(12, "\u8907\u6570\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u540C\u6642\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u89AA\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u30BF\u30C3\u30D7\u3059\u308B\u3068\u4E0B\u5C64\u3092\u5C55\u958B\u3057\u307E\u3059\u3002");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 660);
    \u0275\u0275template(14, ChatPageComponent_div_53_ng_container_14_Template, 2, 4, "ng-container", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ChatPageComponent_div_53_ng_template_15_Template, 12, 11, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(17, "div", 661);
    \u0275\u0275template(18, ChatPageComponent_div_53_button_18_Template, 5, 0, "button", 662)(19, ChatPageComponent_div_53_div_19_Template, 17, 5, "div", 663);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "footer", 606);
    \u0275\u0275template(21, ChatPageComponent_div_53_button_21_Template, 2, 0, "button", 664);
    \u0275\u0275elementStart(22, "button", 628);
    \u0275\u0275listener("click", function ChatPageComponent_div_53_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r172);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeFolderAddToModal());
    });
    \u0275\u0275text(23, "\u5B8C\u4E86");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.pickerRootFolders);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r2.showInlineNewFolderInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showInlineNewFolderInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.getRoomFolderIds(ctx_r2.folderAddToTarget).length);
  }
}
function ChatPageComponent_div_54_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 695);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.forwardingMessage.text);
  }
}
function ChatPageComponent_div_54_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 696)(1, "mat-icon");
    \u0275\u0275text(2, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.forwardingMessage.attachments.length, "\u4EF6\u306E\u6DFB\u4ED8");
  }
}
function ChatPageComponent_div_54_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r186 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 697);
    \u0275\u0275listener("click", function ChatPageComponent_div_54_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r186);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.forwardSearchQuery = "");
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_54_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 698);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.forwardTargetRoomIds.size, "\u4EF6 \u9078\u629E\u4E2D ");
  }
}
function ChatPageComponent_div_54_label_28_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 707);
  }
  if (rf & 2) {
    const room_r188 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", room_r188.avatarImage, \u0275\u0275sanitizeUrl)("alt", room_r188.name);
  }
}
function ChatPageComponent_div_54_label_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 708)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const room_r188 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", room_r188.avatarColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(room_r188.initial);
  }
}
function ChatPageComponent_div_54_label_28_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30B0\u30EB\u30FC\u30D7");
    \u0275\u0275elementContainerEnd();
  }
}
function ChatPageComponent_div_54_label_28_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "1\u5BFE1");
    \u0275\u0275elementContainerEnd();
  }
}
function ChatPageComponent_div_54_label_28_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 709);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_54_label_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r187 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 699)(1, "input", 700);
    \u0275\u0275listener("change", function ChatPageComponent_div_54_label_28_Template_input_change_1_listener() {
      const room_r188 = \u0275\u0275restoreView(_r187).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleForwardTarget(room_r188.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ChatPageComponent_div_54_label_28_img_2_Template, 1, 2, "img", 701)(3, ChatPageComponent_div_54_label_28_div_3_Template, 3, 3, "div", 702);
    \u0275\u0275elementStart(4, "div", 703)(5, "span", 704);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 705);
    \u0275\u0275template(8, ChatPageComponent_div_54_label_28_ng_container_8_Template, 4, 0, "ng-container", 226)(9, ChatPageComponent_div_54_label_28_ng_container_9_Template, 4, 0, "ng-container", 226);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ChatPageComponent_div_54_label_28_mat_icon_10_Template, 2, 0, "mat-icon", 706);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r188 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("forward-list__item--checked", ctx_r2.isForwardTarget(room_r188.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isForwardTarget(room_r188.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r188.avatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !room_r188.avatarImage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(room_r188.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", room_r188.type === "group");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r188.type === "direct");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isForwardTarget(room_r188.id));
  }
}
function ChatPageComponent_div_54_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 710)(1, "mat-icon");
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u8A72\u5F53\u3059\u308B\u30C1\u30E3\u30C3\u30C8\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r185 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_54_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r185);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForwardModal());
    });
    \u0275\u0275elementStart(1, "div", 679);
    \u0275\u0275listener("click", function ChatPageComponent_div_54_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r185);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8EE2\u9001");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_54_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r185);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForwardModal());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 680)(11, "div", 681)(12, "div", 682);
    \u0275\u0275text(13, "\u8EE2\u9001\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 683)(15, "div", 684);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ChatPageComponent_div_54_div_17_Template, 2, 1, "div", 685)(18, ChatPageComponent_div_54_div_18_Template, 5, 1, "div", 686);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 687)(20, "mat-icon");
    \u0275\u0275text(21, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 688);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_54_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r185);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.forwardSearchQuery, $event) || (ctx_r2.forwardSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ChatPageComponent_div_54_button_23_Template, 3, 0, "button", 689);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 690);
    \u0275\u0275text(25, " \u8907\u6570\u306E\u30C1\u30E3\u30C3\u30C8\u3092\u9078\u629E\u3067\u304D\u307E\u3059 ");
    \u0275\u0275template(26, ChatPageComponent_div_54_span_26_Template, 2, 1, "span", 691);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 692);
    \u0275\u0275template(28, ChatPageComponent_div_54_label_28_Template, 11, 9, "label", 693)(29, ChatPageComponent_div_54_div_29_Template, 5, 0, "div", 694);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "footer", 606)(31, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_div_54_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r185);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForwardModal());
    });
    \u0275\u0275text(32, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 468);
    \u0275\u0275listener("click", function ChatPageComponent_div_54_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r185);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmForward());
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r2.forwardingMessage.senderName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.forwardingMessage.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.forwardingMessage.attachments && ctx_r2.forwardingMessage.attachments.length);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.forwardSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.forwardSearchQuery);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.forwardTargetRoomIds.size > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.forwardTargetRooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.forwardTargetRooms.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.forwardTargetRoomIds.size === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.forwardTargetRoomIds.size > 0 ? ctx_r2.forwardTargetRoomIds.size + "\u4EF6\u306B\u8EE2\u9001" : "\u8EE2\u9001", " ");
  }
}
function ChatPageComponent_div_55_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r190 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 722);
    \u0275\u0275listener("click", function ChatPageComponent_div_55_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r190);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.folderBulkSearchQuery = "");
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_55_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r191 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 723)(1, "button", 222);
    \u0275\u0275listener("click", function ChatPageComponent_div_55_div_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r191);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.bulkAddAllFiltered());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 222);
    \u0275\u0275listener("click", function ChatPageComponent_div_55_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r191);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.bulkRemoveAllFiltered());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "remove_done");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " \u8868\u793A\u4E2D\u3092\u3059\u3079\u3066\u5916\u3059 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u8868\u793A\u4E2D\u306E ", ctx_r2.bulkFilteredRooms.length, "\u4EF6\u3059\u3079\u3066\u8FFD\u52A0 ");
  }
}
function ChatPageComponent_div_55_label_23_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 732);
  }
  if (rf & 2) {
    const room_r193 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", room_r193.avatarImage, \u0275\u0275sanitizeUrl)("alt", room_r193.name);
  }
}
function ChatPageComponent_div_55_label_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 733)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const room_r193 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", room_r193.avatarColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(room_r193.initial);
  }
}
function ChatPageComponent_div_55_label_23_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 734)(1, "mat-icon");
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\u30B0\u30EB\u30FC\u30D7 ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_55_label_23_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 734)(1, "mat-icon");
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "1\u5BFE1 ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_55_label_23_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 735);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_55_label_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r192 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 724)(1, "input", 725);
    \u0275\u0275listener("change", function ChatPageComponent_div_55_label_23_Template_input_change_1_listener() {
      const room_r193 = \u0275\u0275restoreView(_r192).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleRoomInBulkFolder(room_r193.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ChatPageComponent_div_55_label_23_img_2_Template, 1, 2, "img", 726)(3, ChatPageComponent_div_55_label_23_div_3_Template, 3, 3, "div", 727);
    \u0275\u0275elementStart(4, "div", 728)(5, "span", 729);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ChatPageComponent_div_55_label_23_span_7_Template, 4, 0, "span", 730)(8, ChatPageComponent_div_55_label_23_span_8_Template, 4, 0, "span", 730);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ChatPageComponent_div_55_label_23_mat_icon_9_Template, 2, 0, "mat-icon", 731);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r193 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("folder-bulk__item--checked", ctx_r2.isRoomInBulkFolder(room_r193));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isRoomInBulkFolder(room_r193));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r193.avatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !room_r193.avatarImage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(room_r193.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r193.type === "group");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", room_r193.type === "direct");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isRoomInBulkFolder(room_r193));
  }
}
function ChatPageComponent_div_55_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 736)(1, "mat-icon");
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u8A72\u5F53\u3059\u308B\u30C1\u30E3\u30C3\u30C8\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r189 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_55_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r189);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeFolderBulkManageModal());
    });
    \u0275\u0275elementStart(1, "div", 711);
    \u0275\u0275listener("click", function ChatPageComponent_div_55_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r189);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_55_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r189);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeFolderBulkManageModal());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 712)(12, "p", 713);
    \u0275\u0275text(13, " \u30C1\u30A7\u30C3\u30AF\u3067\u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0\u3001\u5916\u3059\u3068\u524A\u9664\u3055\u308C\u307E\u3059\u3002\u8907\u6570\u306E\u30C1\u30E3\u30C3\u30C8\u3092\u540C\u6642\u306B\u64CD\u4F5C\u3067\u304D\u307E\u3059\u3002 ");
    \u0275\u0275elementStart(14, "span", 714);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 715)(17, "mat-icon");
    \u0275\u0275text(18, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 716);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_55_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r189);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.folderBulkSearchQuery, $event) || (ctx_r2.folderBulkSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ChatPageComponent_div_55_button_20_Template, 3, 0, "button", 717);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ChatPageComponent_div_55_div_21_Template, 9, 1, "div", 718);
    \u0275\u0275elementStart(22, "div", 719);
    \u0275\u0275template(23, ChatPageComponent_div_55_label_23_Template, 10, 9, "label", 720)(24, ChatPageComponent_div_55_div_24_Template, 5, 0, "div", 721);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "footer", 606)(26, "button", 494);
    \u0275\u0275listener("click", function ChatPageComponent_div_55_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r189);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeFolderBulkManageModal());
    });
    \u0275\u0275text(27, "\u5B8C\u4E86");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.folderBulkManageTarget.icon || "folder");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u300C", ctx_r2.folderBulkManageTarget.name, "\u300D\u306E\u30C1\u30E3\u30C3\u30C8\u3092\u7BA1\u7406");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u73FE\u5728 ", ctx_r2.bulkCurrentCount, "\u4EF6");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.folderBulkSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.folderBulkSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.bulkFilteredRooms.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.bulkFilteredRooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.bulkFilteredRooms.length === 0);
  }
}
function ChatPageComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 737)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.toastMessage);
  }
}
function ChatPageComponent_div_57_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 741)(1, "mat-icon");
    \u0275\u0275text(2, "bookmark_border");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3055\u308C\u305F\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_57_div_13_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 747);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r197 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", t_r197, "");
  }
}
function ChatPageComponent_div_57_div_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 745);
    \u0275\u0275template(1, ChatPageComponent_div_57_div_13_div_11_span_1_Template, 2, 1, "span", 746);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r196 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", b_r196.tags);
  }
}
function ChatPageComponent_div_57_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r195 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 742);
    \u0275\u0275listener("click", function ChatPageComponent_div_57_div_13_Template_div_click_0_listener() {
      const b_r196 = \u0275\u0275restoreView(_r195).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.scrollToMessage(b_r196.id));
    });
    \u0275\u0275elementStart(1, "div", 341);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 447)(4, "div", 448)(5, "span", 449);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 450);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 451);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ChatPageComponent_div_57_div_13_div_11_Template, 2, 1, "div", 743);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 744);
    \u0275\u0275listener("click", function ChatPageComponent_div_57_div_13_Template_button_click_12_listener($event) {
      const b_r196 = \u0275\u0275restoreView(_r195).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.toggleBookmark(b_r196);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "bookmark_remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r196 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", b_r196.senderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r196.senderInitial);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r196.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r196.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r196.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r196.tags == null ? null : b_r196.tags.length);
  }
}
function ChatPageComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r194 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_57_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r194);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(1, "div", 631);
    \u0275\u0275listener("click", function ChatPageComponent_div_57_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r194);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "bookmark");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u4E00\u89A7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_57_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r194);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 587);
    \u0275\u0275template(11, ChatPageComponent_div_57_div_11_Template, 5, 0, "div", 738);
    \u0275\u0275elementStart(12, "div", 739);
    \u0275\u0275template(13, ChatPageComponent_div_57_div_13_Template, 15, 7, "div", 740);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !ctx_r2.bookmarkedMessages.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.bookmarkedMessages);
  }
}
function ChatPageComponent_div_58_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r199 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 470);
    \u0275\u0275listener("click", function ChatPageComponent_div_58_button_18_Template_button_click_0_listener($event) {
      const t_r200 = \u0275\u0275restoreView(_r199).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.filterByTag(t_r200.label, $event));
    });
    \u0275\u0275element(1, "span", 196);
    \u0275\u0275elementStart(2, "span", 471);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 472);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-icon", 473);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r200 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--tag-color", t_r200.color);
    \u0275\u0275classProp("tag-item--active", ctx_r2.activeTagFilter === t_r200.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", t_r200.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", t_r200.label, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r200.count, "\u4EF6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.activeTagFilter === t_r200.label ? "check" : "chevron_right");
  }
}
function ChatPageComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r198 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_58_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r198);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(1, "div", 631);
    \u0275\u0275listener("click", function ChatPageComponent_div_58_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r198);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u30BF\u30B0\u4E00\u89A7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_58_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r198);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 587)(11, "p", 748);
    \u0275\u0275text(12, "\u30BF\u30B0\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u305D\u306E\u30BF\u30B0\u304C\u4ED8\u3044\u305F\u30E1\u30C3\u30BB\u30FC\u30B8\u3060\u3051\u3092\u8868\u793A\u3057\u307E\u3059\u3002");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 749);
    \u0275\u0275listener("click", function ChatPageComponent_div_58_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r198);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTagCreateForm());
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " \u65B0\u3057\u3044\u30BF\u30B0\u3092\u4F5C\u6210");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 750);
    \u0275\u0275template(18, ChatPageComponent_div_58_button_18_Template, 8, 9, "button", 460);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.availableTags);
  }
}
function ChatPageComponent_div_59_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r202 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 763);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_button_17_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r202);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.mediaCarouselPrev();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_59_ng_container_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r203 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "img", 764);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_ng_container_19_ng_container_1_Template_img_click_1_listener($event) {
      \u0275\u0275restoreView(_r203);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.currentCarouselItem.sourceUrl || ctx_r2.currentCarouselItem.thumbnail || "", \u0275\u0275sanitizeUrl)("alt", ctx_r2.currentCarouselItem.name);
  }
}
function ChatPageComponent_div_59_ng_container_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r204 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 765);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_ng_container_19_ng_template_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r204);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 766);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r2.currentCarouselItem.thumbnail || "#37474f");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.currentCarouselItem.name);
  }
}
function ChatPageComponent_div_59_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_div_59_ng_container_19_ng_container_1_Template, 2, 2, "ng-container", 31)(2, ChatPageComponent_div_59_ng_container_19_ng_template_2_Template, 5, 3, "ng-template", null, 13, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const imgPlaceholder_r205 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isRealMediaUrl(ctx_r2.currentCarouselItem.sourceUrl || ctx_r2.currentCarouselItem.thumbnail))("ngIfElse", imgPlaceholder_r205);
  }
}
function ChatPageComponent_div_59_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r206 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "video", 767);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_ng_container_20_ng_container_1_Template_video_click_1_listener($event) {
      \u0275\u0275restoreView(_r206);
      return \u0275\u0275resetView($event.stopPropagation());
    })("error", function ChatPageComponent_div_59_ng_container_20_ng_container_1_Template_video_error_1_listener($event) {
      \u0275\u0275restoreView(_r206);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onVideoLoadError($event, ctx_r2.currentCarouselItem));
    })("loadedmetadata", function ChatPageComponent_div_59_ng_container_20_ng_container_1_Template_video_loadedmetadata_1_listener($event) {
      \u0275\u0275restoreView(_r206);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onVideoLoaded($event, ctx_r2.currentCarouselItem));
    });
    \u0275\u0275element(2, "source", 768);
    \u0275\u0275text(3, " \u304A\u4F7F\u3044\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u52D5\u753B\u518D\u751F\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("poster", ctx_r2.isRealMediaUrl(ctx_r2.currentCarouselItem.thumbnail) ? ctx_r2.currentCarouselItem.thumbnail : null, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.currentCarouselItem.sourceUrl, \u0275\u0275sanitizeUrl);
  }
}
function ChatPageComponent_div_59_ng_container_20_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r207 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 765);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_ng_container_20_ng_template_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r207);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "movie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 766);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r2.currentCarouselItem.thumbnail || "#263238");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.currentCarouselItem.name);
  }
}
function ChatPageComponent_div_59_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatPageComponent_div_59_ng_container_20_ng_container_1_Template, 4, 2, "ng-container", 31)(2, ChatPageComponent_div_59_ng_container_20_ng_template_2_Template, 5, 3, "ng-template", null, 14, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const videoPlaceholder_r208 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isRealMediaUrl(ctx_r2.currentCarouselItem.sourceUrl))("ngIfElse", videoPlaceholder_r208);
  }
}
function ChatPageComponent_div_59_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r209 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 769);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_button_21_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r209);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.mediaCarouselNext();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_59_div_22_button_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r213 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r213.type === "video" ? "play_circle" : "image");
  }
}
function ChatPageComponent_div_59_div_22_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r211 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 772);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_div_22_button_1_Template_button_click_0_listener($event) {
      const i_r212 = \u0275\u0275restoreView(_r211).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.mediaCarouselIndex = i_r212;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 773);
    \u0275\u0275template(2, ChatPageComponent_div_59_div_22_button_1_mat_icon_2_Template, 2, 1, "mat-icon", 226);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const it_r213 = ctx.$implicit;
    const i_r212 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("media-carousel__thumb--active", i_r212 === ctx_r2.mediaCarouselIndex);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.isRealMediaUrl(it_r213.thumbnail) ? "url(" + it_r213.thumbnail + ") center/cover no-repeat" : it_r213.thumbnail || "#37474f");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isRealMediaUrl(it_r213.thumbnail) || it_r213.type === "video");
  }
}
function ChatPageComponent_div_59_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r210 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 770);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_div_22_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r210);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, ChatPageComponent_div_59_div_22_button_1_Template, 3, 5, "button", 771);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.mediaCarouselItems);
  }
}
function ChatPageComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r201 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 751);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r201);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMediaCarousel());
    });
    \u0275\u0275elementStart(1, "header", 752);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_Template_header_click_1_listener($event) {
      \u0275\u0275restoreView(_r201);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 753)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 754);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 755);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 756)(11, "button", 757);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_Template_button_click_11_listener($event) {
      \u0275\u0275restoreView(_r201);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadMediaItem(ctx_r2.currentCarouselItem, $event));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 758);
    \u0275\u0275listener("click", function ChatPageComponent_div_59_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r201);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMediaCarousel());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(17, ChatPageComponent_div_59_button_17_Template, 3, 0, "button", 759);
    \u0275\u0275elementStart(18, "div", 760);
    \u0275\u0275listener("touchstart", function ChatPageComponent_div_59_Template_div_touchstart_18_listener($event) {
      \u0275\u0275restoreView(_r201);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCarouselTouchStart($event));
    })("touchend", function ChatPageComponent_div_59_Template_div_touchend_18_listener($event) {
      \u0275\u0275restoreView(_r201);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCarouselTouchEnd($event));
    });
    \u0275\u0275template(19, ChatPageComponent_div_59_ng_container_19_Template, 4, 2, "ng-container", 226)(20, ChatPageComponent_div_59_ng_container_20_Template, 4, 2, "ng-container", 226);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ChatPageComponent_div_59_button_21_Template, 3, 0, "button", 761)(22, ChatPageComponent_div_59_div_22_Template, 2, 1, "div", 762);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.currentCarouselItem.type === "video" ? "movie" : "image");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.currentCarouselItem.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", ctx_r2.currentCarouselItem.size, " \xB7 ", ctx_r2.currentCarouselItem.date, " \xB7 ", ctx_r2.mediaCarouselIndex + 1, " / ", ctx_r2.mediaCarouselItems.length, "");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.mediaCarouselItems.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.currentCarouselItem.type === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentCarouselItem.type === "video");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.mediaCarouselItems.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.mediaCarouselItems.length > 1);
  }
}
function ChatPageComponent_div_60_div_24_button_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.mediaTab === "image" ? "image" : "play_circle");
  }
}
function ChatPageComponent_div_60_div_24_button_1_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 485);
    \u0275\u0275text(1, "play_circle");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_60_div_24_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r215 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 480);
    \u0275\u0275listener("click", function ChatPageComponent_div_60_div_24_button_1_Template_button_click_0_listener($event) {
      const m_r216 = \u0275\u0275restoreView(_r215).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openMediaCarousel(m_r216);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 481);
    \u0275\u0275template(2, ChatPageComponent_div_60_div_24_button_1_mat_icon_2_Template, 2, 1, "mat-icon", 226)(3, ChatPageComponent_div_60_div_24_button_1_mat_icon_3_Template, 2, 0, "mat-icon", 482);
    \u0275\u0275elementStart(4, "span", 484)(5, "mat-icon");
    \u0275\u0275text(6, "zoom_in");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 779);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 780);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r216 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.isRealMediaUrl(m_r216.thumbnail) ? "url(" + m_r216.thumbnail + ") center/cover no-repeat" : m_r216.thumbnail);
    \u0275\u0275classProp("media-tile__thumb--has-image", ctx_r2.isRealMediaUrl(m_r216.thumbnail));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isRealMediaUrl(m_r216.thumbnail));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isRealMediaUrl(m_r216.thumbnail) && m_r216.type === "video");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r216.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r216.size, " \xB7 ", m_r216.date, "");
  }
}
function ChatPageComponent_div_60_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 741)(1, "p");
    \u0275\u0275text(2, "\u8A72\u5F53\u3059\u308B\u30E1\u30C7\u30A3\u30A2\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_60_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 778);
    \u0275\u0275template(1, ChatPageComponent_div_60_div_24_button_1_Template, 11, 9, "button", 479)(2, ChatPageComponent_div_60_div_24_div_2_Template, 3, 0, "div", 738);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.roomMedia);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.roomMedia.length);
  }
}
function ChatPageComponent_div_60_div_25_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r217 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 488);
    \u0275\u0275listener("click", function ChatPageComponent_div_60_div_25_button_1_Template_button_click_0_listener() {
      const f_r218 = \u0275\u0275restoreView(_r217).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.downloadMediaItem(f_r218));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 489)(4, "div", 490);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 491);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 492)(9, "mat-icon");
    \u0275\u0275text(10, "download");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r218 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(f_r218.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", f_r218.size, " \xB7 ", f_r218.date, "");
  }
}
function ChatPageComponent_div_60_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 781);
    \u0275\u0275template(1, ChatPageComponent_div_60_div_25_button_1_Template, 11, 3, "button", 487);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.roomMedia);
  }
}
function ChatPageComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r214 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_60_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r214);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(1, "div", 774);
    \u0275\u0275listener("click", function ChatPageComponent_div_60_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r214);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "perm_media");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u30E1\u30C7\u30A3\u30A2\u3068\u30D5\u30A1\u30A4\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_60_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r214);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 775)(11, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_div_60_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r214);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mediaTab = "image");
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " \u753B\u50CF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_div_60_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r214);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mediaTab = "video");
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "movie");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " \u52D5\u753B ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 171);
    \u0275\u0275listener("click", function ChatPageComponent_div_60_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r214);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mediaTab = "file");
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " \u30D5\u30A1\u30A4\u30EB ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 587);
    \u0275\u0275template(24, ChatPageComponent_div_60_div_24_Template, 3, 2, "div", 776)(25, ChatPageComponent_div_60_div_25_Template, 2, 1, "div", 777);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275classProp("modal__tab--active", ctx_r2.mediaTab === "image");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("modal__tab--active", ctx_r2.mediaTab === "video");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("modal__tab--active", ctx_r2.mediaTab === "file");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.mediaTab !== "file");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.mediaTab === "file");
  }
}
function ChatPageComponent_div_61_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 787)(1, "div", 788)(2, "mat-icon");
    \u0275\u0275text(3, "reply");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u8FD4\u4FE1\u5148\u30E1\u30C3\u30BB\u30FC\u30B8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 789);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.replyToMessage.text);
  }
}
function ChatPageComponent_div_61_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 787)(1, "div", 788)(2, "mat-icon");
    \u0275\u0275text(3, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u5165\u529B\u4E2D\u306E\u30C6\u30AD\u30B9\u30C8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 789);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.aiPrompt);
  }
}
function ChatPageComponent_div_61_div_13_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r220 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 792);
    \u0275\u0275listener("click", function ChatPageComponent_div_61_div_13_button_4_Template_button_click_0_listener() {
      const t_r221 = \u0275\u0275restoreView(_r220).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectAiTemplate(t_r221.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r221 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("chip--active", ctx_r2.aiTemplate === t_r221.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r221.label, " ");
  }
}
function ChatPageComponent_div_61_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 650)(1, "label");
    \u0275\u0275text(2, "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 790);
    \u0275\u0275template(4, ChatPageComponent_div_61_div_13_button_4_Template, 2, 3, "button", 791);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.quickAiTemplates);
  }
}
function ChatPageComponent_div_61_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r222 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 650)(1, "label");
    \u0275\u0275text(2, "\u30D7\u30ED\u30F3\u30D7\u30C8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 793);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_61_div_14_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r222);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aiPrompt, $event) || (ctx_r2.aiPrompt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aiPrompt);
  }
}
function ChatPageComponent_div_61_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r223 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 794);
    \u0275\u0275listener("click", function ChatPageComponent_div_61_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r223);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.generateAi());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.aiLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.aiLoading ? "hourglass_empty" : "auto_fix_high");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.aiLoading ? "AI\u751F\u6210\u4E2D..." : ctx_r2.aiMode === "reply" ? "\u8FD4\u4FE1\u5019\u88DC\u3092\u751F\u6210" : ctx_r2.aiMode === "improve" ? "\u6539\u5584\u6848\u3092\u751F\u6210" : "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u751F\u6210", " ");
  }
}
function ChatPageComponent_div_61_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 795);
    \u0275\u0275element(1, "div", 796);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Gemini AI\u304C\u5019\u88DC\u3092\u751F\u6210\u3057\u3066\u3044\u307E\u3059...");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_61_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r224 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 799);
    \u0275\u0275listener("click", function ChatPageComponent_div_61_div_17_div_3_Template_div_click_0_listener() {
      const s_r225 = \u0275\u0275restoreView(_r224).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectAiSuggestion(s_r225));
    });
    \u0275\u0275elementStart(1, "div", 800);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 801);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-icon", 802);
    \u0275\u0275text(6, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r225 = ctx.$implicit;
    const i_r226 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r226 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r225);
  }
}
function ChatPageComponent_div_61_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 797)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ChatPageComponent_div_61_div_17_div_3_Template, 7, 2, "div", 798);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.aiMode === "reply" ? "\u8FD4\u4FE1\u5019\u88DC" : ctx_r2.aiMode === "improve" ? "\u6539\u5584\u6848" : "\u751F\u6210\u7D50\u679C", " (", ctx_r2.aiSuggestions.length, "\u4EF6) - \u30BF\u30C3\u30D7\u3067\u9078\u629E");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.aiSuggestions);
  }
}
function ChatPageComponent_div_61_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r227 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function ChatPageComponent_div_61_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r227);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.generateAi());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u5225\u306E\u5019\u88DC\u3092\u751F\u6210 ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r219 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_61_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r219);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(1, "div", 631);
    \u0275\u0275listener("click", function ChatPageComponent_div_61_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r219);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "auto_fix_high");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_61_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r219);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 587);
    \u0275\u0275template(11, ChatPageComponent_div_61_div_11_Template, 7, 1, "div", 782)(12, ChatPageComponent_div_61_div_12_Template, 7, 1, "div", 782)(13, ChatPageComponent_div_61_div_13_Template, 5, 1, "div", 652)(14, ChatPageComponent_div_61_div_14_Template, 4, 1, "div", 652)(15, ChatPageComponent_div_61_button_15_Template, 4, 3, "button", 783)(16, ChatPageComponent_div_61_div_16_Template, 4, 0, "div", 784)(17, ChatPageComponent_div_61_div_17_Template, 4, 3, "div", 785)(18, ChatPageComponent_div_61_button_18_Template, 4, 0, "button", 786);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.aiMode === "reply" ? "AI\u8FD4\u4FE1\u5019\u88DC" : ctx_r2.aiMode === "improve" ? "AI\u6587\u7AE0\u6539\u5584" : "AI\u3067\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u4F5C\u6210", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.aiMode === "reply" && ctx_r2.replyToMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aiMode === "improve");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aiMode === "template");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aiMode === "template");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aiMode === "template" || ctx_r2.aiSuggestions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aiLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aiSuggestions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aiSuggestions.length > 0 && !ctx_r2.aiLoading);
  }
}
function ChatPageComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r228 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 576);
    \u0275\u0275listener("click", function ChatPageComponent_div_62_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r228);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(1, "div", 803);
    \u0275\u0275listener("click", function ChatPageComponent_div_62_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r228);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3");
    \u0275\u0275text(4, "\u30D5\u30A1\u30A4\u30EB\u3092\u6DFB\u4ED8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_62_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r228);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllModals());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 587)(9, "div", 804);
    \u0275\u0275listener("dragover", function ChatPageComponent_div_62_Template_div_dragover_9_listener($event) {
      \u0275\u0275restoreView(_r228);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAttachDragOver($event));
    })("drop", function ChatPageComponent_div_62_Template_div_drop_9_listener($event) {
      \u0275\u0275restoreView(_r228);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAttachDrop($event));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, "\u30D5\u30A1\u30A4\u30EB\u3092\u3053\u3053\u306B\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7");
    \u0275\u0275element(14, "br");
    \u0275\u0275text(15, "\u307E\u305F\u306F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 628);
    \u0275\u0275listener("click", function ChatPageComponent_div_62_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r228);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerFilePicker("*/*"));
    });
    \u0275\u0275text(17, "\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 805)(19, "button", 806);
    \u0275\u0275listener("click", function ChatPageComponent_div_62_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r228);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerFilePicker("image/*"));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "\u753B\u50CF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 806);
    \u0275\u0275listener("click", function ChatPageComponent_div_62_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r228);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerFilePicker(".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"));
    });
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 806);
    \u0275\u0275listener("click", function ChatPageComponent_div_62_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r228);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerFilePicker("video/*"));
    });
    \u0275\u0275elementStart(30, "mat-icon");
    \u0275\u0275text(31, "movie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "\u52D5\u753B");
    \u0275\u0275elementEnd()()()()()();
  }
}
function ChatPageComponent_div_63_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 823)(1, "mat-icon");
    \u0275\u0275text(2, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 824);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.taskCreateTarget.text || "\uFF08\u6DFB\u4ED8\u30E1\u30C3\u30BB\u30FC\u30B8\uFF09");
  }
}
function ChatPageComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r229 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 807);
    \u0275\u0275listener("click", function ChatPageComponent_div_63_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showTaskCreateModal = false);
    });
    \u0275\u0275elementStart(1, "div", 808);
    \u0275\u0275listener("click", function ChatPageComponent_div_63_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    });
    \u0275\u0275elementStart(2, "header", 621)(3, "mat-icon");
    \u0275\u0275text(4, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "\u30DE\u30A4\u30BF\u30B9\u30AF\u306B\u8FFD\u52A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function ChatPageComponent_div_63_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showTaskCreateModal = false);
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 587);
    \u0275\u0275template(11, ChatPageComponent_div_63_div_11_Template, 5, 1, "div", 809);
    \u0275\u0275elementStart(12, "div", 810)(13, "mat-icon");
    \u0275\u0275text(14, "notifications_active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "\u7DE0\u5207\u306E ");
    \u0275\u0275elementStart(17, "b");
    \u0275\u0275text(18, "3\u65E5\u524D");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " \u3068 ");
    \u0275\u0275elementStart(20, "b");
    \u0275\u0275text(21, "24\u6642\u9593\u524D");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " \u306B ");
    \u0275\u0275elementStart(23, "b");
    \u0275\u0275text(24, "\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " \u3078\u30B9\u30B1\u30B3\u30F3AI\u304C\u81EA\u52D5\u3067\u30EA\u30DE\u30A4\u30F3\u30C9\u3092\u901A\u77E5\u3057\u307E\u3059\u3002");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label", 811);
    \u0275\u0275text(27, "\u7DE0\u5207\u65E5\u6642");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 812)(29, "div", 813)(30, "input", 814);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_63_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskDraftDate, $event) || (ctx_r2.taskDraftDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 813)(32, "input", 815);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_63_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskDraftTime, $event) || (ctx_r2.taskDraftTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 816)(34, "button", 817);
    \u0275\u0275listener("click", function ChatPageComponent_div_63_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTaskPreset("tomorrow"));
    });
    \u0275\u0275text(35, "\u660E\u65E5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 817);
    \u0275\u0275listener("click", function ChatPageComponent_div_63_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTaskPreset("nextweek"));
    });
    \u0275\u0275text(37, "1\u9031\u9593\u5F8C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "label", 811);
    \u0275\u0275text(39, "\u30BF\u30B9\u30AF\u540D\uFF08\u4EFB\u610F\uFF09");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 818);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_63_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskDraftTitle, $event) || (ctx_r2.taskDraftTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "label", 811);
    \u0275\u0275text(42, "\u30E1\u30E2\uFF08\u4EFB\u610F\u30FB\u6700\u5927600\u6587\u5B57\uFF09");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "textarea", 819);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_63_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskDraftMemo, $event) || (ctx_r2.taskDraftMemo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 820);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "label", 821)(47, "input", 822);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_63_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskDraftRemind, $event) || (ctx_r2.taskDraftRemind = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "\u7DE0\u52073\u65E5\u524D\u306824\u6642\u9593\u524D\u306B\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9\u3078\u30EA\u30DE\u30A4\u30F3\u30C9\u3092\u9001\u308B");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "footer", 606)(51, "button", 467);
    \u0275\u0275listener("click", function ChatPageComponent_div_63_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showTaskCreateModal = false);
    });
    \u0275\u0275text(52, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 468);
    \u0275\u0275listener("click", function ChatPageComponent_div_63_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r229);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createTask());
    });
    \u0275\u0275text(54, "\u30DE\u30A4\u30BF\u30B9\u30AF\u306B\u8FFD\u52A0");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.taskCreateTarget);
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskDraftDate);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskDraftTime);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskDraftTitle);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskDraftMemo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.taskDraftMemo || "").length, " / 600 ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskDraftRemind);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r2.taskDraftDate);
  }
}
function ChatPageComponent_div_64_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r231 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 837);
    \u0275\u0275listener("click", function ChatPageComponent_div_64_button_8_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r231);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.lightboxPrev();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_64_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r232 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 838);
    \u0275\u0275listener("click", function ChatPageComponent_div_64_button_16_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r232);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.lightboxNext();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_64_div_17_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r234 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 841);
    \u0275\u0275listener("click", function ChatPageComponent_div_64_div_17_button_1_Template_button_click_0_listener() {
      const i_r235 = \u0275\u0275restoreView(_r234).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.lightboxIndex = i_r235);
    });
    \u0275\u0275element(1, "img", 831);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r236 = ctx.$implicit;
    const i_r235 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("lightbox__thumb--active", i_r235 === ctx_r2.lightboxIndex);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r236.dataUrl, \u0275\u0275sanitizeUrl)("alt", img_r236.name);
  }
}
function ChatPageComponent_div_64_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r233 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 839);
    \u0275\u0275listener("click", function ChatPageComponent_div_64_div_17_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r233);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, ChatPageComponent_div_64_div_17_button_1_Template, 2, 4, "button", 840);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.lightboxImages);
  }
}
function ChatPageComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r230 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 825);
    \u0275\u0275listener("click", function ChatPageComponent_div_64_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r230);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275elementStart(1, "div", 826);
    \u0275\u0275listener("click", function ChatPageComponent_div_64_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r230);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 827);
    \u0275\u0275listener("click", function ChatPageComponent_div_64_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r230);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadLightboxImage());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 828);
    \u0275\u0275listener("click", function ChatPageComponent_div_64_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r230);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, ChatPageComponent_div_64_button_8_Template, 3, 0, "button", 829);
    \u0275\u0275elementStart(9, "div", 830);
    \u0275\u0275listener("click", function ChatPageComponent_div_64_Template_div_click_9_listener($event) {
      \u0275\u0275restoreView(_r230);
      return \u0275\u0275resetView($event.stopPropagation());
    })("touchstart", function ChatPageComponent_div_64_Template_div_touchstart_9_listener($event) {
      \u0275\u0275restoreView(_r230);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLightboxTouchStart($event));
    })("touchend", function ChatPageComponent_div_64_Template_div_touchend_9_listener($event) {
      \u0275\u0275restoreView(_r230);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLightboxTouchEnd($event));
    });
    \u0275\u0275element(10, "img", 831);
    \u0275\u0275elementStart(11, "div", 832)(12, "span", 833);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 834);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, ChatPageComponent_div_64_button_16_Template, 3, 0, "button", 835)(17, ChatPageComponent_div_64_div_17_Template, 2, 1, "div", 836);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.lightboxImages.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.currentLightboxImage.dataUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r2.currentLightboxImage.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.currentLightboxImage.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r2.currentLightboxImage.size, " \u30FB ", ctx_r2.lightboxIndex + 1, " / ", ctx_r2.lightboxImages.length, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.lightboxImages.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.lightboxImages.length > 1);
  }
}
function ChatPageComponent_div_65_img_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 863);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("transform", "translate(" + ctx_r2.avatarCropX + "px," + ctx_r2.avatarCropY + "px) scale(" + ctx_r2.avatarCropZoom + ")");
    \u0275\u0275property("src", ctx_r2.avatarCropSrc, \u0275\u0275sanitizeUrl);
  }
}
function ChatPageComponent_div_65_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 864);
    \u0275\u0275element(1, "div", 865);
    \u0275\u0275elementStart(2, "div", 866);
    \u0275\u0275text(3, "\u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ChatPageComponent_div_65_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 867);
  }
}
function ChatPageComponent_div_65_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 868);
    \u0275\u0275element(1, "span", 869);
    \u0275\u0275text(2, " \u51E6\u7406\u4E2D\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_65_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u6C7A\u5B9A");
    \u0275\u0275elementEnd();
  }
}
function ChatPageComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r237 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 842);
    \u0275\u0275listener("click", function ChatPageComponent_div_65_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelAvatarCrop());
    });
    \u0275\u0275elementStart(1, "div", 843);
    \u0275\u0275listener("click", function ChatPageComponent_div_65_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r237);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 624)(3, "h3");
    \u0275\u0275text(4, "\u30A2\u30A4\u30B3\u30F3\u3092\u8ABF\u6574");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 844);
    \u0275\u0275listener("click", function ChatPageComponent_div_65_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelAvatarCrop());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 845)(9, "div", 846);
    \u0275\u0275listener("mousedown", function ChatPageComponent_div_65_Template_div_mousedown_9_listener($event) {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCropDragStart($event));
    })("touchstart", function ChatPageComponent_div_65_Template_div_touchstart_9_listener($event) {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCropDragStart($event));
    })("touchmove", function ChatPageComponent_div_65_Template_div_touchmove_9_listener($event) {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCropDragMove($event));
    })("touchend", function ChatPageComponent_div_65_Template_div_touchend_9_listener() {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCropDragEnd());
    })("wheel", function ChatPageComponent_div_65_Template_div_wheel_9_listener($event) {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCropWheel($event));
    });
    \u0275\u0275elementStart(10, "div", 847);
    \u0275\u0275template(11, ChatPageComponent_div_65_img_11_Template, 1, 3, "img", 848)(12, ChatPageComponent_div_65_div_12_Template, 4, 0, "div", 849);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "div", 850);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 851)(15, "div", 852)(16, "mat-icon", 853);
    \u0275\u0275listener("click", function ChatPageComponent_div_65_Template_mat_icon_click_16_listener() {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adjustCropZoom(-0.1));
    });
    \u0275\u0275text(17, "zoom_out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 854)(19, "input", 855);
    \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_div_65_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.avatarCropZoom, $event) || (ctx_r2.avatarCropZoom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 856);
    \u0275\u0275template(21, ChatPageComponent_div_65_span_21_Template, 1, 0, "span", 857);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-icon", 853);
    \u0275\u0275listener("click", function ChatPageComponent_div_65_Template_mat_icon_click_22_listener() {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adjustCropZoom(0.1));
    });
    \u0275\u0275text(23, "zoom_in");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 858)(25, "button", 859);
    \u0275\u0275listener("click", function ChatPageComponent_div_65_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetAvatarCrop());
    });
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " \u30EA\u30BB\u30C3\u30C8 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "p", 860);
    \u0275\u0275text(30, "\u753B\u50CF\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u4F4D\u7F6E\u8ABF\u6574\u3001\u30B9\u30E9\u30A4\u30C0\u30FC\u307E\u305F\u306F\u30DB\u30A4\u30FC\u30EB\u3067\u30BA\u30FC\u30E0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "footer", 606)(32, "button", 861);
    \u0275\u0275listener("click", function ChatPageComponent_div_65_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelAvatarCrop());
    });
    \u0275\u0275text(33, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 468);
    \u0275\u0275listener("click", function ChatPageComponent_div_65_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r237);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveAvatarCrop());
    });
    \u0275\u0275template(35, ChatPageComponent_div_65_span_35_Template, 3, 0, "span", 862)(36, ChatPageComponent_div_65_span_36_Template, 2, 0, "span", 226);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275classProp("avatar-crop__stage--dragging", ctx_r2.avatarCropDragging);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.avatarCropSrc && !ctx_r2.avatarCropLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.avatarCropLoading);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.avatarCropZoom);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c6));
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r2.avatarCropSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.avatarCropLoading || ctx_r2.avatarCropSaving || !ctx_r2.avatarCropSrc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.avatarCropSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.avatarCropSaving);
  }
}
var ChatPageComponent = class _ChatPageComponent {
  static {
    this._seq = 0;
  }
  nextMsgId(prefix = "m") {
    return prefix + Date.now() + "-" + (++_ChatPageComponent._seq).toString(36);
  }
  /* 修正 No.50 (2026-04-24): 投稿時の日付ラベルを実クロックに合わせる
     (以前は seed messages が "2026年X月Y日" にハードコードされていたため、
      新規投稿が「時刻だけ・日付なし」で表示されて「日付がズレている」と見えていた) */
  todayDateLabel(d = /* @__PURE__ */ new Date()) {
    return `${d.getFullYear()}\u5E74${d.getMonth() + 1}\u6708${d.getDate()}\u65E5`;
  }
  /** 指定ルーム内の最後のメッセージの dateLabel を算出 (無ければ空文字) */
  lastDateLabelForRoom(roomId) {
    const roomMsgs = this.messages.filter((m) => m.roomId === roomId);
    for (let i = roomMsgs.length - 1; i >= 0; i--) {
      if (roomMsgs[i].dateLabel)
        return roomMsgs[i].dateLabel;
    }
    return "";
  }
  ngAfterViewChecked() {
    if (this.pendingScrollToBottom) {
      const isMobileView = typeof window !== "undefined" && window.innerWidth <= 768;
      this.suppressScrollUntilMs = Date.now() + 400;
      if (isMobileView) {
        try {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            left: 0,
            behavior: "auto"
          });
        } catch {
        }
      } else if (this.messagesScrollRef) {
        const el = this.messagesScrollRef.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
      this.pendingScrollToBottom = false;
      document.querySelector(".chat-room__input")?.classList.remove("chat-room__input--hidden");
      document.querySelector(".header")?.classList.remove("header--hidden");
      document.querySelector(".chat-room")?.classList.remove("chat-room--scroll-collapsed");
      document.querySelector(".nav-bottom")?.classList.remove("nav-bottom--hidden");
      this.headerHidden = false;
    }
  }
  scheduleScrollToBottom() {
    this.pendingScrollToBottom = true;
  }
  /**
   * 投稿直後などに、確実に最新メッセージを画面下に表示させるための強制スクロール。
   * 複数フレーム待ってから scrollHeight を計測し直し、画像/添付などのレイアウト
   * 確定後の位置まで追従する。
   * (ユーザー指示 2026-04-21: 投稿しても最新ポストが一番下に表示されない対策)
   */
  forceScrollToBottom(attempts = 5) {
    const isMobileView = typeof window !== "undefined" && window.innerWidth <= 768;
    this.suppressScrollUntilMs = Date.now() + 800;
    const doScroll = () => {
      if (isMobileView) {
        try {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            left: 0,
            behavior: "auto"
          });
          const msgs = document.querySelectorAll(".msg-bubble");
          const last = msgs[msgs.length - 1];
          if (last && typeof last.scrollIntoView === "function") {
            last.scrollIntoView({ block: "end", behavior: "auto" });
          }
        } catch {
        }
      } else if (this.messagesScrollRef) {
        const el = this.messagesScrollRef.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
      document.querySelector(".chat-room__input")?.classList.remove("chat-room__input--hidden");
      document.querySelector(".header")?.classList.remove("header--hidden");
      document.querySelector(".chat-room")?.classList.remove("chat-room--scroll-collapsed");
      document.querySelector(".nav-bottom")?.classList.remove("nav-bottom--hidden");
      this.headerHidden = false;
    };
    const run = (remaining) => {
      doScroll();
      if (remaining > 0 && typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => run(remaining - 1));
      }
    };
    if (typeof requestAnimationFrame !== "undefined") {
      requestAnimationFrame(() => run(attempts));
    } else {
      setTimeout(() => run(attempts), 0);
    }
    setTimeout(doScroll, 100);
    setTimeout(doScroll, 300);
  }
  setRoomNotificationMode(mode, muteDurationHours) {
    this.roomNotificationMode = mode;
    this.roomNotificationEnabled = mode !== "mute";
    this.roomNotificationMentionOnly = mode === "mention";
    if (mode === "mute" && muteDurationHours) {
      this.roomMuteUntilMs = Date.now() + muteDurationHours * 3600 * 1e3;
      this.selectedMuteDurationHours = muteDurationHours;
    } else if (mode === "mute") {
      this.roomMuteUntilMs = null;
      this.selectedMuteDurationHours = null;
    } else {
      this.roomMuteUntilMs = null;
      this.selectedMuteDurationHours = null;
    }
    this.cdr.markForCheck();
  }
  /** ミュート期間ボタンが現在アクティブか判定 (ユーザー指示 2026-04-21) */
  isMuteDurationActive(hours) {
    if (this.roomNotificationMode !== "mute")
      return false;
    return this.selectedMuteDurationHours === hours;
  }
  /** ミュート解除予定の表示用ラベル */
  get roomMuteRemainingLabel() {
    if (!this.roomMuteUntilMs)
      return "";
    const diff = this.roomMuteUntilMs - Date.now();
    if (diff <= 0)
      return "";
    const hours = Math.floor(diff / 3600 / 1e3);
    if (hours >= 24)
      return `\u3042\u3068 ${Math.round(hours / 24)} \u65E5`;
    if (hours >= 1)
      return `\u3042\u3068 ${hours} \u6642\u9593`;
    const mins = Math.floor(diff / 60 / 1e3);
    return `\u3042\u3068 ${Math.max(mins, 1)} \u5206`;
  }
  toggleMobileHeaderMenu(e) {
    e.stopPropagation();
    this.showMobileHeaderMenu = !this.showMobileHeaderMenu;
  }
  toggleMobileInfoMenu(e) {
    e.stopPropagation();
    this.showMobileInfoMenu = !this.showMobileInfoMenu;
  }
  toggleInputMenu(e) {
    e.stopPropagation();
    this.showInputMenu = !this.showInputMenu;
  }
  /** 下書きを保持しているルーム ID 一覧 (修正 #14) */
  get draftRoomIds() {
    try {
      const raw = localStorage.getItem(this.DRAFT_STORAGE_KEY);
      if (!raw)
        return /* @__PURE__ */ new Set();
      const map2 = JSON.parse(raw);
      return new Set(Object.keys(map2).filter((k) => (map2[k] || "").trim().length > 0));
    } catch {
      return /* @__PURE__ */ new Set();
    }
  }
  /** Generate 100 realistic group chat messages across 6 members over ~5 days. */
  static generateProductSquadMessages() {
    const senders = [
      { name: "\u81EA\u5206", initial: "\u77F3", color: "#ff9800", isMe: true },
      { name: "\u5150\u7389 \u6709\u4E8B", initial: "\u5150", color: "#26a69a" },
      { name: "\u4F50\u85E4 \u7F8E\u54B2", initial: "\u4F50", color: "#ef5350" },
      { name: "\u7530\u4E2D \u5065\u592A", initial: "\u7530", color: "#42a5f5" },
      { name: "\u5C71\u672C \u8AA0", initial: "\u5C71", color: "#66bb6a" },
      { name: "\u9234\u6728 \u76F4\u7F8E", initial: "\u9234", color: "#ab47bc" }
    ];
    const texts = [
      "\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\uFF01\u4ECA\u65E5\u306E\u30B9\u30BF\u30F3\u30C9\u30A2\u30C3\u30D7\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059 \u2600\uFE0F",
      "\u30B9\u30D7\u30EA\u30F3\u30C8\u30EC\u30D3\u30E5\u30FC\u300114\u6642\u304B\u3089\u4F1A\u8B70\u5BA4B\u3067\u884C\u3044\u307E\u3059",
      "PR #1247 \u30EC\u30D3\u30E5\u30FC\u304A\u9858\u3044\u3057\u307E\u3059 \u{1F64F} https://github.com/schecon/app/pull/1247",
      "LGTM! \u30DE\u30FC\u30B8\u3057\u3061\u3083\u3063\u3066\u5927\u4E08\u592B\u3067\u3059",
      "\u3042\u306E\u753B\u9762\u306E\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u3001\u4F53\u611F1.5\u79D2\u304F\u3089\u3044\u306B\u306A\u308A\u307E\u3057\u305F \u{1F44F}",
      "QA \u30C1\u30FC\u30E0\u304B\u3089\u30D0\u30B0\u5831\u544A\u304C3\u4EF6\u4E0A\u304C\u3063\u3066\u307E\u3059\u3001#bug \u30BF\u30B0\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044",
      "\u30C7\u30B6\u30A4\u30F3\u6700\u7D42\u7248\u3092Figma\u306B\u30A2\u30C3\u30D7\u3057\u307E\u3057\u305F",
      "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8MTG\u3001\u8B70\u4E8B\u9332\u5171\u6709\u3057\u307E\u3059",
      "@\u5C71\u672C \u8AA0 \u3053\u3053\u306E\u5B9F\u88C5\u65B9\u91DD\u76F8\u8AC7\u3067\u304D\u307E\u3059\u304B\uFF1F",
      "\u3082\u3061\u308D\u3093\uFF01\u4ECA\u7A7A\u3044\u3066\u308B\u306E\u3067\u30CF\u30C9\u30EB\u98DB\u3073\u307E\u3059",
      "\u30B9\u30C6\u30FC\u30B8\u30F3\u30B0\u74B0\u5883\u306B\u30C7\u30D7\u30ED\u30A4\u5B8C\u4E86\u3057\u307E\u3057\u305F \u2705",
      "E2E\u30C6\u30B9\u30C8\u5168\u90E8\u30D1\u30B9\u3057\u3066\u307E\u3059",
      "\u3042\u3001\u30C6\u30B9\u30C8\u30B1\u30FC\u30B91\u3064\u5931\u6557\u3057\u3066\u308B\u2026\u8ABF\u67FB\u3057\u307E\u3059",
      "\u539F\u56E0\u308F\u304B\u308A\u307E\u3057\u305F\u3001\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u5468\u308A\u306E\u30D0\u30B0\u3067\u3059",
      "\u4FEE\u6B63PR\u4E0A\u3052\u307E\u3057\u305F #1251",
      "\u30D7\u30ED\u30C0\u30AF\u30C8\u30D0\u30C3\u30AF\u30ED\u30B0\u306E\u512A\u5148\u5EA6\u898B\u76F4\u3057\u305F\u3044\u3067\u3059",
      "\u6B21\u30B9\u30D7\u30EA\u30F3\u30C8\u306E\u30DD\u30A4\u30F3\u30C8\u898B\u7A4D\u3082\u308A\u3001\u660E\u65E5\u306E10\u6642\u304B\u3089\u3084\u308A\u307E\u3057\u3087\u3046",
      "\u30AB\u30EC\u30F3\u30C0\u30FC\u62DB\u5F85\u9001\u3063\u3066\u304A\u304D\u307E\u3059\u306D",
      "\u6628\u6669\u306E\u30EA\u30EA\u30FC\u30B9\u3001\u7121\u4E8B\u30E6\u30FC\u30B6\u30FC\u306B\u5C4A\u3044\u3066\u307E\u3059 \u{1F389}",
      "Slack\u3067\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u597D\u53CD\u5FDC\u306E\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u6765\u3066\u307E\u3059",
      "\u6A5F\u80FDA\u306E\u6539\u5584\u6848\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u307E\u3068\u3081\u307E\u3057\u305F",
      "\u30A4\u30F3\u30D5\u30E9\u30B3\u30B9\u30C8\u3001\u4ECA\u670815%\u524A\u6E1B\u3067\u304D\u305D\u3046\u3067\u3059",
      "\u30ED\u30B0\u76E3\u8996\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u65B0\u3057\u304F\u3057\u307E\u3057\u305F",
      "@\u4F50\u85E4 \u7F8E\u54B2 \u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC\u3001\u3044\u3064\u304C\u3044\u3044\u3067\u3059\u304B\uFF1F",
      "\u660E\u65E514\u6642\u4EE5\u964D\u306A\u3089\u3044\u3064\u3067\u3082\u5927\u4E08\u592B\u3067\u3059",
      "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u8A08\u6E2C\u7D50\u679C\u3001LCP 2.1s \u2192 1.4s \u306B\u6539\u5584 \u{1F4C9}",
      "\u7D20\u6674\u3089\u3057\u3044\uFF01\u672C\u756A\u306B\u53CD\u6620\u3057\u305F\u3089\u6570\u5024\u898B\u307E\u3057\u3087\u3046",
      "\u30B3\u30FC\u30C9\u30EC\u30D3\u30E5\u30FC\u3001\u4ECA\u9031\u4E2D\u306B\u5168\u90E8\u7D42\u308F\u3089\u305B\u307E\u3059",
      "\u30EA\u30D5\u30A1\u30AF\u30BF\u30EA\u30F3\u30B0\u30D6\u30E9\u30F3\u30C1\u3001\u30B3\u30F3\u30D5\u30EA\u30AF\u30C8\u89E3\u6D88\u3057\u307E\u3057\u305F",
      "\u30E6\u30CB\u30C3\u30C8\u30C6\u30B9\u30C8\u30AB\u30D0\u30EC\u30C3\u30B8 82% \u307E\u3067\u4E0A\u304C\u308A\u307E\u3057\u305F",
      "\u6B8B\u308A\u3042\u3068\u3072\u3068\u606F\u3067\u3059\u306D",
      "a11y\u76E3\u67FB\u30EC\u30DD\u30FC\u30C8\u3001\u4ECA\u65E5\u4E2D\u306B\u5171\u6709\u3057\u307E\u3059",
      "\u30D5\u30A9\u30FC\u30AB\u30B9\u30EA\u30F3\u30B0\u5468\u308A\u304C\u6570\u30AB\u6240\u8DB3\u308A\u3066\u306A\u304B\u3063\u305F\u3067\u3059",
      "WCAG AAA\u76EE\u6307\u3057\u3066\u6539\u5584\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046",
      "\u30D0\u30C3\u30AF\u30ED\u30B0\u306B #a11y \u30BF\u30B0\u3067\u7A4D\u307F\u307E\u3057\u305F",
      "\u30B9\u30C6\u30FC\u30AF\u30DB\u30EB\u30C0\u30FCMTG\u300130\u5206\u5EF6\u9577\u3067",
      "\u4E86\u89E3\u3067\u3059\uFF01\u8CC7\u6599\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3057\u3066\u304A\u304D\u307E\u3059",
      "@\u7530\u4E2D \u5065\u592A \u5148\u9031\u306E\u4ED5\u69D8\u5909\u66F4\u3001\u5F71\u97FF\u7BC4\u56F2\u307E\u3068\u3081\u3066\u3082\u3089\u3048\u307E\u3059\u304B\uFF1F",
      "\u4E86\u89E3\u3001\u5348\u5F8C\u307E\u3067\u306B\u51FA\u3057\u307E\u3059",
      "CI\u306E\u30D3\u30EB\u30C9\u6642\u9593\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u6700\u9069\u5316\u3067\u534A\u5206\u306B\u306A\u308A\u307E\u3057\u305F",
      "\u305D\u308C\u306F\u3067\u304B\u3044\uFF01\u30ED\u30FC\u30AB\u30EB\u958B\u767A\u3082\u901F\u304F\u306A\u308A\u307E\u3059\u306D",
      "TypeScript 5.4 \u306B\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3057\u307E\u3057\u305F",
      "\u578B\u30A8\u30E9\u30FC\u6570\u4EF6\u3042\u3063\u305F\u306E\u3067\u76F4\u3057\u307E\u3057\u305F",
      "Angular 18 RC\u3001\u6B21\u56DE\u691C\u8A3C\u3057\u307E\u3057\u3087\u3046",
      "\u30CE\u30FC\u30C8\u30D6\u30C3\u30AF\u306B\u30EA\u30EA\u30FC\u30B9\u30CE\u30FC\u30C8\u4E0B\u66F8\u304D\u7F6E\u3044\u3066\u307E\u3059",
      "\u30B3\u30D4\u30FC\u6821\u6B63\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u8868\u8A18\u3086\u308C2\u7B87\u6240\u4FEE\u6B63\u3057\u307E\u3057\u305F",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01",
      "\u4ECA\u9031\u306EKPI\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u66F4\u65B0\u3057\u307E\u3057\u305F",
      "DAU\u304C\u524D\u9031\u6BD4+8%\u3067\u3059 \u{1F4C8}",
      "\u3059\u3054\u3044\uFF01\u6A5F\u80FDB\u306E\u52B9\u679C\u304C\u51FA\u3066\u307E\u3059\u306D",
      "\u30AB\u30B9\u30BF\u30DE\u30FC\u30B5\u30DD\u30FC\u30C8\u3001\u554F\u3044\u5408\u308F\u305B\u5BFE\u5FDC\u6642\u959330%\u77ED\u7E2E\u9054\u6210",
      "\u30AA\u30F3\u30DC\u30FC\u30C7\u30A3\u30F3\u30B0\u30D5\u30ED\u30FC\u3001A/B\u30C6\u30B9\u30C8\u7D50\u679C\u304C\u51FA\u307E\u3057\u305F",
      "\u30D1\u30BF\u30FC\u30F3B\u304C\u6709\u610F\u306B\u826F\u3044\u3067\u3059\u3001\u3053\u3061\u3089\u63A1\u7528\u3067",
      "\u4E86\u89E3\u3001\u30ED\u30FC\u30EB\u30A2\u30A6\u30C8\u30D7\u30E9\u30F3\u8003\u3048\u307E\u3059",
      "\u969C\u5BB3\u5BFE\u5FDC\u306E\u632F\u308A\u8FD4\u308A\u3001\u91D1\u66DC\u306E15\u6642\u3067\u3069\u3046\u3067\u3059\u304B\uFF1F",
      "@\u5168\u54E1 \u6765\u9031\u6708\u66DC\u3001\u5168\u793E\u4F1A\u8B70\u3042\u308A\u3067\u3059",
      "Zoom\u30EA\u30F3\u30AF\u306F\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044",
      "\u30D7\u30ED\u30C0\u30AF\u30C8\u30ED\u30FC\u30C9\u30DE\u30C3\u30D7\u3001Q2\u7248\u66F4\u65B0\u3057\u307E\u3057\u305F",
      "AI\u6A5F\u80FD\u306EPoC\u3001\u60F3\u50CF\u4EE5\u4E0A\u306B\u826F\u3044\u7D50\u679C\u51FA\u307E\u3057\u305F",
      "\u30C7\u30E2\u52D5\u753B\u53D6\u3063\u305F\u306E\u3067\u5171\u6709\u3057\u307E\u3059",
      "\u9031\u6B21\u30EC\u30DD\u30FC\u30C8\u3001\u30C9\u30E9\u30A4\u30D6\u306B\u7F6E\u304D\u307E\u3057\u305F",
      "\u30E1\u30F3\u30D0\u30FC\u52DF\u96C6\u3001\u30A8\u30F3\u30B8\u30CB\u30A22\u540D\u8FFD\u52A0\u4E88\u5B9A\u3067\u3059",
      "\u63A1\u7528\u9762\u63A5\u306E\u65E5\u7A0B\u8ABF\u6574\u3001\u304A\u9858\u3044\u3057\u305F\u3044\u3067\u3059",
      "\u79C1\u3001\u706B\u66DC\u3068\u6728\u66DC\u306E\u5348\u5F8C\u306A\u3089\u53C2\u52A0\u53EF\u80FD\u3067\u3059",
      "GitHub Actions\u306E\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u6574\u7406\u3057\u307E\u3057\u305F",
      "\u30C7\u30D7\u30ED\u30A4\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3082\u30B7\u30F3\u30D7\u30EB\u306B\u306A\u308A\u307E\u3057\u305F",
      "\u672C\u756A\u30C7\u30D7\u30ED\u30A4\u3001\u554F\u984C\u306A\u304F\u5B8C\u4E86 \u2705",
      "\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u3082\u7DD1\u3067\u3059",
      "\u65B0\u3057\u3044\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30E9\u30A4\u30D6\u30E9\u30EA\u5C0E\u5165\u691C\u8A0E\u4E2D\u3067\u3059",
      "Storybook \u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3057\u3066\u307F\u307E\u3059",
      "\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30DD\u30FC\u30BF\u30EB\u306E\u30C7\u30B6\u30A4\u30F3\u6848\u3001\u5171\u6709\u3057\u307E\u3059",
      "\u60C5\u5831\u8A2D\u8A08\u306E\u89B3\u70B9\u304B\u3089\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3042\u308A\u307E\u3059",
      "\u4ECA\u65E5\u306E\u30B9\u30BF\u30F3\u30C9\u30A2\u30C3\u30D7\u30015\u5206\u9045\u523B\u3057\u307E\u3059 \u{1F64F}",
      "\u627F\u77E5\u3057\u307E\u3057\u305F\u3001\u9032\u3081\u3066\u307E\u3059",
      "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3001\u30B9\u30C6\u30FC\u30B8\u30F3\u30B0\u3067\u6210\u529F",
      "\u672C\u756A\u306F\u571F\u66DC\u306E\u6DF1\u591C\u306B\u5B9F\u65BD\u3057\u307E\u3059",
      "\u30C0\u30A6\u30F3\u30BF\u30A4\u30E0\u60F3\u5B9A\u306F15\u5206\u4EE5\u5185",
      "\u30A2\u30CA\u30A6\u30F3\u30B9\u6587\u9762\u3001\u4E0B\u66F8\u304D\u3057\u307E\u3057\u305F",
      "\u30E6\u30FC\u30B6\u30FC\u5411\u3051\u30E1\u30FC\u30EB\u3001\u660E\u65E5\u9001\u4FE1\u4E88\u5B9A",
      "\u30D6\u30ED\u30B0\u8A18\u4E8B\u516C\u958B\u3057\u307E\u3057\u305F \u{1F38A}",
      "PR\u306Etwitter\u62C5\u5F53\u3001\u8AB0\u304B\u5DFB\u304D\u53D6\u3063\u3066\u3082\u3089\u3048\u307E\u3059\u304B\uFF1F",
      "\u79C1\u3084\u308A\u307E\u3059\uFF01\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u6848\u3082\u3089\u3048\u307E\u3059\u304B",
      "\u30B5\u30F3\u30AF\u30B9\uFF01#schecon #\u30EA\u30EA\u30FC\u30B9 \u3067\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u4E86\u89E3\u3001\u6295\u7A3F\u3057\u3068\u304D\u307E\u3059",
      "\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F\uFF01\u4ECA\u65E5\u306F\u3053\u3053\u307E\u3067\u306B\u3057\u307E\u3057\u3087\u3046",
      "\u3044\u30441\u65E5\u3067\u3057\u305F\u3001\u307E\u305F\u660E\u65E5 \u{1F44B}",
      "\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u4ECA\u65E5\u3082\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u671D\u30A4\u30C1\u3067\u30E1\u30C8\u30EA\u30AF\u30B9\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3057\u305F\u3001\u554F\u984C\u306A\u3057\u3067\u3059",
      "\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u30EC\u30D3\u30E5\u30FC\u8CC7\u6599\u3001\u307E\u3068\u3081\u307E\u3057\u305F",
      "\u56F3\u304C\u308F\u304B\u308A\u3084\u3059\u3044\u3067\u3059\uFF01",
      "\u30D0\u30B0\u30EC\u30DD\u30FC\u30C8 #BUG-482 \u5BFE\u5FDC\u5B8C\u4E86\u3057\u307E\u3057\u305F",
      "\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u611F\u8B1D\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u9802\u304D\u307E\u3057\u305F \u263A\uFE0F",
      "UX\u6539\u5584\u3001\u5C0F\u3055\u306A\u4E00\u6B69\u304C\u5927\u304D\u306A\u5DEE\u306B\u306A\u308A\u307E\u3059\u306D",
      "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u3001\u7121\u4E8B\u901A\u904E\u3057\u307E\u3057\u305F \u{1F512}",
      "\u8106\u5F31\u6027\u30B9\u30AD\u30E3\u30F3\u3001\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB0\u4EF6",
      "\u7D99\u7D9A\u7684\u306B\u6539\u5584\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046",
      "\u30C1\u30FC\u30E0\u5168\u54E1\u304A\u75B2\u308C\u69D8\u3067\u3059\uFF01",
      "\u4ECA\u9031\u306EMVP\u6295\u7968\u3001\u958B\u59CB\u3057\u307E\u3057\u305F",
      "\u79C1\u3001@\u5150\u7389 \u6709\u4E8B \u3055\u3093\u306B1\u7968\u3067\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059 \u{1F647}\u200D\u2642\uFE0F \u6765\u9031\u3082\u9811\u5F35\u308A\u307E\u3059",
      "\u30EA\u30EA\u30FC\u30B9\u5019\u88DC\u30D3\u30EB\u30C9\u3092\u30C7\u30D7\u30ED\u30A4\u3057\u307E\u3057\u305F \u{1F680}"
    ];
    const messages = [];
    const now = /* @__PURE__ */ new Date("2026-04-10T10:00:00");
    const startTime = now.getTime() - 5 * 24 * 60 * 60 * 1e3;
    let lastDateLabel = "";
    for (let i = 0; i < 100; i++) {
      const t = startTime + i / 100 * (5 * 24 * 60 * 60 * 1e3) + Math.random() * 4e5;
      const d = new Date(t);
      const hh = d.getHours().toString().padStart(2, "0");
      const mm = d.getMinutes().toString().padStart(2, "0");
      const dateLabel = `${d.getFullYear()}\u5E74${d.getMonth() + 1}\u6708${d.getDate()}\u65E5`;
      const senderIdx = Math.floor(Math.random() * senders.length);
      const sender = senders[senderIdx];
      const text = texts[i % texts.length];
      const msg = {
        id: `ps-${Math.floor(t)}-${i + 1}`,
        roomId: "product-squad",
        senderName: sender.name,
        senderInitial: sender.initial,
        senderColor: sender.color,
        text,
        time: `${hh}:${mm}`,
        isMe: !!sender.isMe
      };
      if (dateLabel !== lastDateLabel) {
        msg.dateLabel = dateLabel;
        lastDateLabel = dateLabel;
      }
      if (i === 18 || i === 66) {
        msg.reactions = [{ emoji: "\u{1F389}", count: 5, mine: false }, { emoji: "\u{1F680}", count: 3, mine: true }];
      } else if (i % 13 === 0) {
        msg.reactions = [{ emoji: "\u{1F44D}", count: 1 + i % 4, mine: i % 2 === 0 }];
      }
      if (i === 4) {
        msg.isPinned = true;
        msg.tags = ["\u91CD\u8981"];
      }
      if (i === 2) {
        msg.urlPreview = { url: "https://github.com/schecon/app/pull/1247", title: "Pull Request #1247 \xB7 schecon/app", siteName: "github.com", imageColor: "#24292e" };
      }
      if (i === 32) {
        msg.tags = ["a11y"];
      }
      if (i === 88) {
        msg.tags = ["\u30EA\u30EA\u30FC\u30B9"];
      }
      messages.push(msg);
    }
    return messages;
  }
  static {
    this.DIRECT_BUSINESS_TEXTS = [
      "\u304A\u4E16\u8A71\u306B\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3001\u77F3\u6FA4\u3067\u3059",
      "\u3044\u3064\u3082\u304A\u4E16\u8A71\u306B\u306A\u3063\u3066\u304A\u308A\u307E\u3059",
      "\u5148\u65E5\u306F\u304A\u6642\u9593\u3044\u305F\u3060\u304D\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F",
      "\u8CC7\u6599\u304A\u9001\u308A\u3044\u305F\u3057\u307E\u3059\u3001\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044",
      "\u62DD\u898B\u3057\u307E\u3057\u305F\u3001\u3068\u3066\u3082\u5206\u304B\u308A\u3084\u3059\u304B\u3063\u305F\u3067\u3059",
      "\u6765\u9031\u306E\u304A\u6253\u3061\u5408\u308F\u305B\u300115\u6642\u304B\u3089\u3067\u5927\u4E08\u592B\u3067\u3057\u3087\u3046\u304B",
      "\u304B\u3057\u3053\u307E\u308A\u307E\u3057\u305F\u3001Zoom\u306E\u30EA\u30F3\u30AF\u9001\u308A\u307E\u3059",
      "\u672C\u4EF6\u3001\u793E\u5185\u3067\u5171\u6709\u3057\u3066\u304A\u304D\u307E\u3059",
      "\u9032\u6357\u3044\u304B\u304C\u3067\u3057\u3087\u3046\u304B\uFF1F",
      "\u92ED\u610F\u5BFE\u5FDC\u4E2D\u3067\u3059\u3001\u660E\u65E5\u307E\u3067\u306B\u306F\u76EE\u51E6\u304C\u7ACB\u3061\u307E\u3059",
      "\u304A\u5F85\u305F\u305B\u3057\u307E\u3057\u305F\u3001\u6700\u65B0\u7248\u3092\u304A\u9001\u308A\u3057\u307E\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u78BA\u8A8D\u3057\u307E\u3057\u305F",
      "1\u70B9\u3060\u3051\u4FEE\u6B63\u304A\u9858\u3044\u3067\u304D\u307E\u3059\u304B",
      "\u627F\u77E5\u3057\u307E\u3057\u305F\u3001\u3059\u3050\u5BFE\u5FDC\u3057\u307E\u3059",
      "\u3068\u3066\u3082\u826F\u3044\u4ED5\u4E0A\u304C\u308A\u3067\u3059\u306D\uFF01",
      "\u3054\u63D0\u6848\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u524D\u5411\u304D\u306B\u691C\u8A0E\u3057\u307E\u3059",
      "\u91D1\u984D\u306B\u3064\u3044\u3066\u3082\u3054\u76F8\u8AC7\u3055\u305B\u3066\u304F\u3060\u3055\u3044",
      "\u3082\u3061\u308D\u3093\u3067\u3059\u3001\u304A\u898B\u7A4D\u3082\u308A\u304A\u9001\u308A\u3057\u307E\u3059",
      "\u3054\u5951\u7D04\u306E\u4EF6\u3001\u9032\u3081\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059",
      "\u3053\u3061\u3089\u3053\u305D\u3001\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059 \u{1F647}\u200D\u2642\uFE0F",
      "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306E\u4EF6\u3001\u78BA\u8A8D\u3057\u307E\u3057\u305F",
      "\u554F\u984C\u306A\u3055\u305D\u3046\u3067\u3059\u3001\u305D\u306E\u307E\u307E\u9032\u3081\u3066\u304F\u3060\u3055\u3044",
      "\u7D30\u304B\u3044\u8ABF\u6574\u3001\u30E1\u30FC\u30EB\u3067\u3082\u5171\u6709\u3055\u305B\u3066\u304F\u3060\u3055\u3044",
      "\u4E86\u89E3\u3057\u307E\u3057\u305F",
      "\u5148\u65B9\u306B\u3082\u4F1D\u3048\u3066\u304A\u304D\u307E\u3059",
      "\u3068\u3053\u308D\u3067\u304A\u4F53\u306E\u8ABF\u5B50\u306F\u3044\u304B\u304C\u3067\u3059\u304B",
      "\u304A\u304B\u3052\u3055\u307E\u3067\u5143\u6C17\u3067\u3059\uFF01\u304A\u6C17\u9063\u3044\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "\u4ECA\u9031\u672B\u306E\u304A\u5929\u6C17\u306F\u3069\u3046\u3067\u3057\u3087\u3046\u306D",
      "\u96E8\u4E88\u5831\u3067\u3059\u306D\u3001\u51FA\u5F35\u304A\u6C17\u3092\u3064\u3051\u3066",
      "\u8CC7\u6599\u306E3\u30DA\u30FC\u30B8\u76EE\u3001\u6570\u5B57\u306B\u8AA4\u308A\u304C\u3042\u308B\u3088\u3046\u3067\u3059",
      "\u3054\u6307\u6458\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01\u4FEE\u6B63\u3057\u307E\u3059",
      "\u4FEE\u6B63\u7248\u30A2\u30C3\u30D7\u3057\u307E\u3057\u305F\u3001\u3054\u78BA\u8A8D\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u78BA\u8A8D\u3057\u307E\u3057\u305F\u3001\u554F\u984C\u306A\u3044\u3067\u3059",
      "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u9032\u3081\u65B9\u3001\u5C11\u3057\u3054\u76F8\u8AC7\u3057\u305F\u304F",
      "\u3082\u3061\u308D\u3093\u3067\u3059\u3001\u3044\u3064\u304C\u826F\u3044\u3067\u3057\u3087\u3046\u304B",
      "\u660E\u65E5\u306E\u5348\u5F8C\u300130\u5206\u307B\u3069\u3044\u305F\u3060\u3051\u308C\u3070",
      "OK\u3067\u3059\u300115\u6642\u306B\u304A\u96FB\u8A71\u3057\u307E\u3059",
      "\u8B70\u4E8B\u9332\u5171\u6709\u3057\u307E\u3059\u306D",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u4FDD\u7BA1\u3057\u3066\u304A\u304D\u307E\u3059",
      "\u6765\u6708\u306E\u8A2A\u554F\u65E5\u7A0B\u3001\u5019\u88DC\u3092\u3044\u305F\u3060\u3051\u307E\u3059\u304B",
      "10\u65E5\u300112\u65E5\u300115\u65E5\u3042\u305F\u308A\u306F\u5982\u4F55\u3067\u3057\u3087\u3046",
      "12\u65E5\u306E14\u6642\u3067\u304A\u9858\u3044\u3067\u304D\u307E\u3059\u304B",
      "\u304B\u3057\u3053\u307E\u308A\u307E\u3057\u305F\u3001\u4E88\u5B9A\u62BC\u3055\u3048\u307E\u3057\u305F",
      "\u5E74\u672B\u306E\u3054\u6328\u62F6\u3001\u3044\u3064\u9803\u304A\u4F3A\u3044\u3059\u308C\u3070\u3088\u308D\u3057\u3044\u3067\u3057\u3087\u3046\u304B",
      "25\u65E5\u4EE5\u964D\u3067\u3057\u305F\u3089\u3044\u3064\u3067\u3082\u5927\u4E08\u592B\u3067\u3059",
      "26\u65E5\u306E\u5348\u5F8C\u304A\u4F3A\u3044\u3057\u307E\u3059",
      "\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059",
      "\u5E74\u59CB\u306E\u6328\u62F6\u56DE\u308A\u3001\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F",
      "\u3053\u3061\u3089\u3053\u305D\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F",
      "\u4ECA\u5E74\u3082\u3069\u3046\u305E\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059 \u{1F38D}",
      "\u5F15\u304D\u7D9A\u304D\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059",
      "\u65B0\u6A5F\u80FD\u3001\u4F7F\u3063\u3066\u307F\u305F\u611F\u60F3\u3092\u304A\u4F1D\u3048\u3057\u307E\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01\u611F\u60F3\u304A\u5F85\u3061\u3057\u3066\u307E\u3059",
      "\u76F4\u611F\u7684\u3067\u4F7F\u3044\u3084\u3059\u3044\u3067\u3059\u3001\u7279\u306B\u691C\u7D22\u6A5F\u80FD\u304C\u826F\u3044\u3067\u3059\u306D",
      "\u30C1\u30FC\u30E0\u3067\u3082\u597D\u8A55\u3067\u5C0E\u5165\u3092\u691C\u8A0E\u4E2D\u3067\u3059",
      "\u7D20\u6674\u3089\u3057\u3044\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059 \u{1F64F}",
      "\u30AA\u30F3\u30DC\u30FC\u30C7\u30A3\u30F3\u30B0\u8CC7\u6599\u3082\u304A\u9001\u308A\u3057\u307E\u3059\u306D",
      "\u305C\u3072\u3001\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u5C0E\u5165\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3001\u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u5BFE\u5FDC\u53EF\u80FD\u3067\u3059",
      "\u305D\u308C\u306F\u52A9\u304B\u308A\u307E\u3059\u3001\u65E5\u7A0B\u8ABF\u6574\u3055\u305B\u3066\u304F\u3060\u3055\u3044",
      "\u30AB\u30EC\u30F3\u30C0\u30FC\u5171\u6709\u3057\u3066\u304A\u304D\u307E\u3059",
      "\u9031\u672B\u306E\u30BB\u30DF\u30CA\u30FC\u3001\u3054\u53C2\u52A0\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F",
      "\u3068\u3066\u3082\u52C9\u5F37\u306B\u306A\u308A\u307E\u3057\u305F",
      "\u307E\u305F\u6A5F\u4F1A\u304C\u3042\u308C\u3070\u305C\u3072",
      "\u6B21\u56DE\u306F\u4E8B\u4F8B\u7D39\u4ECB\u3092\u4E2D\u5FC3\u306B\u3057\u305F\u3044\u3068\u8003\u3048\u3066\u3044\u307E\u3059",
      "\u697D\u3057\u307F\u306B\u3057\u3066\u3044\u307E\u3059",
      "\u8ACB\u6C42\u66F8\u3001\u672C\u65E5\u4ED8\u3067\u767A\u884C\u3057\u307E\u3057\u305F",
      "\u78BA\u8A8D\u3044\u305F\u3057\u307E\u3057\u305F\u3001\u5165\u91D1\u624B\u7D9A\u304D\u3057\u307E\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "\u4ECA\u671F\u306E\u632F\u308A\u8FD4\u308A\u3001\u4E00\u5EA6\u304A\u8A71\u3057\u3067\u304D\u308C\u3070\u3068",
      "\u559C\u3093\u3067\u3001\u6765\u9031\u306E\u3069\u3053\u304B\u306730\u5206\u3044\u304B\u304C\u3067\u3057\u3087\u3046",
      "\u706B\u66DC\u306E10\u6642\u306F\u3044\u304B\u304C\u3067\u3059\u304B",
      "OK\u3067\u3059\u3001\u4F1A\u8B70\u5BA4\u3092\u62BC\u3055\u3048\u3066\u304A\u304D\u307E\u3059",
      "\u8CC7\u6599\u306E\u5370\u5237\u3001\u4F55\u90E8\u5FC5\u8981\u3067\u3059\u304B",
      "5\u90E8\u3067\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u627F\u77E5\u3057\u307E\u3057\u305F\u3001\u6E96\u5099\u3057\u3066\u304A\u304D\u307E\u3059",
      "\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u30A2\u30D7\u30EA\u306E\u4EF6\u3001\u9032\u6357\u3069\u3046\u3067\u3059\u304B",
      "\u30C6\u30B9\u30C8\u7248\u304C\u5B8C\u6210\u3057\u307E\u3057\u305F\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EBURL\u304A\u9001\u308A\u3057\u307E\u3059",
      "\u65E9\u901F\u8A66\u3057\u3066\u307F\u307E\u3059\uFF01",
      "\u30D0\u30B0\u767A\u898B\u3057\u305F\u3089\u6559\u3048\u3066\u304F\u3060\u3055\u3044",
      "UI\u3001\u60F3\u50CF\u4EE5\u4E0A\u306B\u4F7F\u3044\u3084\u3059\u3044\u3067\u3059\u306D",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01\u30C7\u30B6\u30A4\u30CA\u30FC\u306B\u4F1D\u3048\u307E\u3059",
      "\u901A\u77E5\u8A2D\u5B9A\u3001\u7D30\u304B\u304F\u3067\u304D\u308B\u306E\u304C\u5B09\u3057\u3044\u3067\u3059",
      "\u305D\u306E\u3042\u305F\u308A\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u58F0\u3092\u53CD\u6620\u3057\u307E\u3057\u305F",
      "\u6B63\u5F0F\u7248\u30EA\u30EA\u30FC\u30B9\u306F\u3044\u3064\u9803\u306E\u4E88\u5B9A\u3067\u3059\u304B",
      "\u6765\u6708\u672B\u3092\u4E88\u5B9A\u3057\u3066\u3044\u307E\u3059",
      "\u3042\u3068\u3072\u3068\u606F\u3067\u3059\u306D\uFF01",
      "\u6700\u7D42\u30C1\u30A7\u30C3\u30AF\u9811\u5F35\u308A\u307E\u3059 \u{1F4AA}",
      "\u30B3\u30FC\u30D2\u30FC1\u676F\u3054\u3061\u305D\u3046\u3055\u305B\u3066\u304F\u3060\u3055\u3044 \u2615",
      "\u304A\u8A00\u8449\u306B\u7518\u3048\u307E\u3059 \u{1F64F}",
      "\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F\u3001\u4ECA\u65E5\u306F\u3053\u3053\u307E\u3067\u306B\u3057\u307E\u3057\u3087\u3046",
      "\u660E\u65E5\u3082\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u4ECA\u65E5\u3082\u4E00\u65E5\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059 \u2600\uFE0F",
      "\u3088\u3044\u4E00\u65E5\u306B\u306A\u308A\u307E\u3059\u3088\u3046\u306B",
      "\u30E9\u30F3\u30C1\u3069\u3053\u304B\u884C\u304D\u307E\u3059\u304B",
      "\u8FD1\u304F\u306E\u30AB\u30D5\u30A7\u306F\u3044\u304B\u304C\u3067\u3059\u304B",
      "\u3044\u3044\u3067\u3059\u306D\u300112\u6642\u3067",
      "\u4E86\u89E3\u3067\u3059",
      "\u30B3\u30FC\u30D2\u30FC\u306E\u304A\u304B\u308F\u308A\u3069\u3046\u305E",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01",
      "\u307E\u305F\u9023\u7D61\u3057\u307E\u3059",
      "\u304A\u5F85\u3061\u3057\u3066\u3044\u307E\u3059 \u{1F642}"
    ];
  }
  static {
    this.DIRECT_CREATIVE_TEXTS = [
      "\u30B3\u30F3\u30BB\u30D7\u30C8\u30B7\u30FC\u30C8\u62DD\u898B\u3057\u307E\u3057\u305F\u3001\u3068\u3066\u3082\u9B45\u529B\u7684\u3067\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01\u30E9\u30D5\u6848\u3082\u30463\u30D1\u30BF\u30FC\u30F3\u4F5C\u308A\u307E\u3059\u306D",
      "\u697D\u3057\u307F\u306B\u3057\u3066\u3044\u307E\u3059",
      "Figma\u306B\u5171\u6709\u3057\u307E\u3057\u305F\u3001\u30B3\u30E1\u30F3\u30C8\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u62DD\u898B\u3057\u307E\u3057\u305F\u3001B\u6848\u304C\u597D\u304D\u3067\u3059",
      "B\u6848\u306E\u307B\u3046\u304C\u4F59\u767D\u306E\u30D0\u30E9\u30F3\u30B9\u826F\u3044\u3067\u3059\u3088\u306D",
      "\u30ED\u30B4\u3001\u8272\u306E\u30D0\u30EA\u30A8\u30FC\u30B7\u30E7\u30F3\u8A66\u3057\u3066\u307F\u307E\u3057\u305F",
      "\u30AA\u30EC\u30F3\u30B8\u306E\u6E29\u304B\u307F\u304C\u826F\u3044\u3067\u3059\u306D",
      "\u30D6\u30E9\u30F3\u30C9\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u3001\u4E0B\u66F8\u304D\u3067\u304D\u307E\u3057\u305F",
      "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3001\u7279\u306B\u826F\u3044\u3067\u3059",
      "\u30D5\u30A9\u30F3\u30C8\u306FNoto\u3068Play Fair\u3067\u63C3\u3048\u307E\u3057\u305F",
      "\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u6BD4\u3082AA\u30AF\u30EA\u30A2\u3067\u3059\u306D",
      "Web\u30B5\u30A4\u30C8\u306E\u30EF\u30A4\u30E4\u30FC\u30D5\u30EC\u30FC\u30E0\u3001\u3069\u3046\u3067\u3057\u3087\u3046",
      "\u30E2\u30D0\u30A4\u30EB\u306E\u30CF\u30F3\u30D0\u30FC\u30AC\u30FC\u30E1\u30CB\u30E5\u30FC\u4F4D\u7F6E\u304C\u7D76\u5999\u3067\u3059",
      "\u30E6\u30FC\u30B6\u30D3\u30EA\u30C6\u30A3\u30C6\u30B9\u30C8\u3001\u52D5\u753B\u9001\u308A\u307E\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u5B66\u3073\u304C\u591A\u3044\u3067\u3059",
      "\u30D2\u30FC\u30ED\u30FC\u30A8\u30EA\u30A2\u306E\u52D5\u753B\u3001\u5DEE\u3057\u66FF\u3048\u307E\u3057\u305F",
      "\u52D5\u304D\u304C\u6C17\u6301\u3061\u3044\u3044\u3067\u3059\u306D \u{1F3A5}",
      "\u30B9\u30AF\u30ED\u30FC\u30EB\u9023\u52D5\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3082\u8FFD\u52A0\u3057\u307E\u3057\u305F",
      "\u76EE\u3092\u5F15\u304D\u307E\u3059\u306D\u3001\u3044\u3044\u611F\u3058",
      "\u30A4\u30E9\u30B9\u30C8\u306E\u30C8\u30FC\u30F3\u3001\u3082\u3046\u5C11\u3057\u660E\u308B\u304F\u3067\u304D\u307E\u3059\u304B",
      "\u30C8\u30E9\u30A4\u3057\u3066\u307F\u307E\u3059\u3001\u660E\u65E5\u5171\u6709\u3057\u307E\u3059",
      "\u30A4\u30E9\u30B9\u30C8\u5DEE\u3057\u66FF\u3048\u307E\u3057\u305F",
      "\u5B8C\u74A7\u3067\u3059\u3001\u63A1\u7528\u3067",
      "\u30A2\u30A4\u30B3\u30F3\u30BB\u30C3\u30C8\u300148\u500B\u5B8C\u6210\u3057\u307E\u3057\u305F",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u629C\u3051\u6F0F\u308C\u306A\u3044\u304B\u78BA\u8A8D\u3057\u307E\u3059",
      "1\u3064\u3060\u3051\u300C\u5171\u6709\u300D\u306E\u30A2\u30A4\u30B3\u30F3\u5DEE\u3057\u66FF\u3048\u305F\u3044\u3067\u3059",
      "\u4E86\u89E3\u3001\u660E\u65E5\u307E\u3067\u306B",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "\u5370\u5237\u7269\u306E\u30C1\u30A7\u30C3\u30AF\u3001\u6700\u5F8C\u306B\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u78BA\u8A8D\u3057\u307E\u3057\u305F\u3001\u554F\u984C\u306A\u3057\u3067\u3059",
      "\u5165\u7A3F\u30C7\u30FC\u30BF\u307E\u3068\u3081\u307E\u3057\u305F\u3001\u30EA\u30F3\u30AF\u304A\u9001\u308A\u3057\u307E\u3059",
      "\u53D7\u3051\u53D6\u308A\u307E\u3057\u305F\u3001\u5370\u5237\u6240\u306B\u307E\u308F\u3057\u307E\u3059",
      "\u6821\u4E86\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059 \u{1F389}",
      "\u304A\u75B2\u308C\u3055\u307E\u3067\u3057\u305F",
      "\u6B21\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u8A71\u3001\u5C11\u3057\u3067\u304D\u307E\u3059\u304B",
      "\u3082\u3061\u308D\u3093\u3067\u3059\u3001\u660E\u65E5\u30CF\u30C9\u30EB\u98DB\u3073\u307E\u3057\u3087\u3046",
      "11\u6642\u306F\u3069\u3046\u3067\u3057\u3087\u3046",
      "OK\u3067\u3059",
      "\u65B0\u3057\u3044\u6848\u4EF6\u3001\u30C6\u30FC\u30DE\u306F\u300C\u9759\u304B\u306A\u60C5\u71B1\u300D\u3060\u305D\u3046\u3067\u3059",
      "\u62BD\u8C61\u7684\u3067\u9762\u767D\u3044\u30C6\u30FC\u30DE\u3067\u3059\u306D",
      "\u30E0\u30FC\u30C9\u30DC\u30FC\u30C9\u4F5C\u3063\u3066\u307F\u307E\u3057\u305F",
      "\u8272\u306E\u30C8\u30FC\u30F3\u304C\u63C3\u3063\u3066\u3044\u3066\u6C17\u6301\u3061\u3044\u3044\u3067\u3059",
      "\u30BF\u30A4\u30DD\u3001\u3082\u3046\u5C11\u3057\u7D30\u3081\u306E\u3082\u306E\u3082\u8A66\u3057\u3066\u307F\u307E\u3059",
      "\u7D30\u5B57\u3001\u826F\u3044\u3067\u3059\u306D",
      "\u5199\u771F\u306E\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3\u3082\u304A\u9858\u3044\u3057\u305F\u3044\u3067\u3059",
      "\u5149\u306E\u4F7F\u3044\u65B9\u3001\u30A4\u30E1\u30FC\u30B8\u3042\u308A\u307E\u3059",
      "\u30ED\u30B1\u30CF\u30F3\u884C\u304D\u307E\u3057\u3087\u3046\u304B",
      "\u305C\u3072\u3001\u6765\u9031\u3069\u3053\u304B\u3067",
      "\u30AB\u30E1\u30E9\u30DE\u30F3\u306E\u5019\u88DC\u3082\u76F8\u8AC7\u3055\u305B\u3066\u304F\u3060\u3055\u3044",
      "\u4E2D\u91CE\u3055\u3093\u304B\u3001\u4F50\u3005\u6728\u3055\u3093\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059",
      "\u4E21\u540D\u306B\u304A\u58F0\u304C\u3051\u3057\u3066\u307F\u307E\u3059",
      "\u64AE\u5F71\u5F53\u65E5\u3001\u79C1\u3082\u7ACB\u3061\u4F1A\u3044\u307E\u3059",
      "\u52A9\u304B\u308A\u307E\u3059 \u{1F64F}",
      "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3068\u306E\u6253\u3061\u5408\u308F\u305B\u3001\u540C\u5E2D\u304A\u9858\u3044\u3067\u304D\u307E\u3059\u304B",
      "\u3082\u3061\u308D\u3093\u3067\u3059\u3001\u65E5\u7A0B\u6559\u3048\u3066\u304F\u3060\u3055\u3044",
      "\u6765\u9031\u706B\u66DC\u306E14\u6642\u3067\u3059",
      "\u4E88\u5B9A\u306B\u5165\u308C\u307E\u3057\u305F",
      "\u4F01\u753B\u66F8\u306E\u30C9\u30E9\u30D5\u30C8\u3001\u4ECA\u65E5\u4E2D\u306B\u9001\u308A\u307E\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "\u8868\u7D19\u306E\u30D3\u30B8\u30E5\u30A2\u30EB\u30013\u6848\u3064\u304F\u308A\u307E\u3057\u305F",
      "\u3069\u308C\u3082\u826F\u3044\u96F0\u56F2\u6C17\u3067\u3059\u306D",
      "\u672C\u547D\u306F\u771F\u3093\u4E2D\u306E\u3082\u306E\u3067\u3059",
      "\u540C\u611F\u3067\u3059\u3001\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u304C\u52B9\u3044\u3066\u308B",
      "\u30AB\u30E9\u30FC\u30D1\u30EC\u30C3\u30C8\u3001\u5C11\u3057\u8ABF\u6574\u3057\u307E\u3057\u305F",
      "\u3053\u3061\u3089\u306E\u65B9\u304C\u4E0A\u54C1\u3067\u3059\u306D",
      "\u30D7\u30EC\u30BC\u30F3\u306E\u6D41\u308C\u3001\u6574\u7406\u3057\u3066\u304D\u307E\u3057\u305F",
      "\u8AD6\u7406\u306E\u904B\u3073\u3001\u30B9\u30E0\u30FC\u30BA\u3067\u826F\u3044\u3067\u3059",
      "\u5192\u982D\u306B\u5F15\u7528\u3092\u5165\u308C\u308B\u3068\u7DE0\u307E\u308A\u305D\u3046",
      "\u306A\u308B\u307B\u3069\u3001\u8A66\u3057\u3066\u307F\u307E\u3059",
      "\u30D5\u30A9\u30F3\u30C8\u3001\u8EFD\u3081\u306B\u5909\u3048\u305F\u3089\u5370\u8C61\u826F\u304F\u306A\u308A\u307E\u3057\u305F",
      "\u305D\u306E\u65B9\u5411\u3067\u3044\u304D\u307E\u3057\u3087\u3046",
      "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u53CD\u5FDC\u3001\u3059\u3054\u304F\u826F\u304B\u3063\u305F\u3067\u3059 \u{1F389}",
      "\u826F\u304B\u3063\u305F\uFF01\u30C1\u30FC\u30E0\u307F\u3093\u306A\u5B09\u3057\u3044\u3067\u3059\u306D",
      "\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u3082\u4EFB\u305B\u305F\u3044\u3068\u306E\u3053\u3068",
      "\u3042\u308A\u304C\u305F\u3044\u8A71\u3067\u3059",
      "\u30B9\u30B3\u30FC\u30D7\u3092\u6574\u7406\u3057\u3066\u9001\u308A\u307E\u3059",
      "\u898B\u7A4D\u3082\u308A\u3082\u6E96\u5099\u3057\u307E\u3059\u306D",
      "\u52A9\u304B\u308A\u307E\u3059",
      "\u7D0D\u54C1\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3001\u5C11\u3057\u30BF\u30A4\u30C8\u3067\u3059\u306D",
      "\u512A\u5148\u5EA6\u3092\u8ABF\u6574\u3057\u3066\u5BFE\u5FDC\u3057\u307E\u3057\u3087\u3046",
      "\u4E86\u89E3\u3001\u30BF\u30B9\u30AF\u30D6\u30EC\u30FC\u30AF\u30C0\u30A6\u30F3\u3057\u307E\u3059",
      "Notion\u306B\u5171\u6709\u3057\u307E\u3057\u305F",
      "\u78BA\u8A8D\u3057\u307E\u3057\u305F\u3001\u9032\u3081\u3066\u304F\u3060\u3055\u3044",
      "\u51FA\u6765\u4E0A\u304C\u308A\u304C\u697D\u3057\u307F\u3067\u3059",
      "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3001\u4ECA\u65E5\u3082\u826F\u3044\u4E00\u65E5\u3067\u3057\u305F",
      "\u307E\u305F\u660E\u65E5 \u{1F44B}",
      "\u7D20\u6674\u3089\u3057\u3044\u30C1\u30FC\u30E0\u3067\u611F\u8B1D\u3057\u3066\u307E\u3059",
      "\u3053\u3061\u3089\u3053\u305D\u3001\u6700\u9AD8\u306E\u30E1\u30F3\u30D0\u30FC\u3067\u3059",
      "\u9031\u672B\u3001\u5C11\u3057\u4F11\u3093\u3067\u304F\u3060\u3055\u3044\u306D",
      "\u306F\u3044\u3001\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u3057\u3066\u304D\u307E\u3059 \u{1F33F}",
      "\u304A\u75B2\u308C\u3055\u307E",
      "\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u4ECA\u9031\u3082\u3088\u308D\u3057\u304F\u3067\u3059",
      "\u30A2\u30A4\u30C7\u30A2\u304C\u6E67\u3044\u3066\u304F\u308B\u671D\u3067\u3059\u306D",
      "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u524D\u306B\u30B3\u30FC\u30D2\u30FC\u98F2\u307F\u307E\u3057\u3087\u3046",
      "\u8CDB\u6210 \u2615",
      "\u304A\u6C17\u306B\u5165\u308A\u306E\u8C46\u304C\u3042\u3063\u3066",
      "\u305C\u3072\u5171\u6709\u3057\u3066\u304F\u3060\u3055\u3044",
      "\u6B21\u56DE\u6301\u3063\u3066\u3044\u304D\u307E\u3059\u306D",
      "\u697D\u3057\u307F\u306B\u3057\u3066\u307E\u3059",
      "\u3067\u306F\u4ECA\u65E5\u3082\u304C\u3093\u3070\u308A\u307E\u3057\u3087\u3046",
      "\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\uFF01"
    ];
  }
  static {
    this.DIRECT_CASUAL_TEXTS = [
      "\u304A\u3064\u304B\u308C\u30FC\u3001\u5143\u6C17\uFF1F",
      "\u5143\u6C17\u3060\u3088\u3001\u305D\u3063\u3061\u306F\uFF1F",
      "\u307C\u3061\u307C\u3061\u3001\u6700\u8FD1\u5FD9\u3057\u304F\u3066\u306D",
      "\u7121\u7406\u3057\u306A\u3044\u3067\u306D\u301C",
      "\u3042\u308A\u304C\u3068\u3046 \u{1F64F}",
      "\u9031\u672B\u306A\u306B\u3057\u3066\u305F\uFF1F",
      "\u53CB\u9054\u3068\u6620\u753B\u898B\u3066\u304D\u305F",
      "\u3044\u3044\u306D\u3001\u306A\u306B\u898B\u305F\u306E\uFF1F",
      "\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u6700\u65B0\u4F5C",
      "\u304A\u3082\u3057\u308D\u304B\u3063\u305F\uFF1F",
      "\u671F\u5F85\u4EE5\u4E0A\u3067\u3057\u305F",
      "\u4FFA\u3082\u898B\u306B\u884C\u3053\u3046\u304B\u306A",
      "\u304A\u3059\u3059\u3081",
      "\u4ECA\u591C\u3054\u98EF\u3069\u3046\u3059\u308B\uFF1F",
      "\u5916\u98DF\u3057\u305F\u3044\u6C17\u5206",
      "\u99C5\u524D\u306E\u65B0\u3057\u3044\u304A\u5E97\u884C\u3063\u3066\u307F\u308B\uFF1F",
      "\u3044\u3044\u306D\u300119\u6642\u306B\u96C6\u5408",
      "\u4E86\u89E3",
      "\u96E8\u964D\u3063\u3066\u304D\u305F\u306D",
      "\u5098\u6301\u3063\u3066\u304D\u3066\u3088\u304B\u3063\u305F",
      "\u3042\u305F\u308A\u3060\u306D",
      "\u6765\u6708\u306E\u65C5\u884C\u3001\u8A08\u753B\u9032\u3081\u3066\u308B\uFF1F",
      "\u5BBF\u307E\u3060\u53D6\u3063\u3066\u306A\u3044 \u{1F605}",
      "\u4EBA\u6C17\u306E\u3068\u3053\u308D\u306F\u65E9\u3081\u304C\u3044\u3044\u3088",
      "\u78BA\u304B\u306B\u3001\u9031\u672B\u4E88\u7D04\u3059\u308B",
      "\u4EAC\u90FD\u3001\u3069\u306E\u3042\u305F\u308A\u884C\u304F\uFF1F",
      "\u5D50\u5C71\u3068\u6771\u5C71\u3092\u56DE\u308D\u3046\u304B\u306A\u3068",
      "\u5B9A\u756A\u3060\u3051\u3069\u826F\u3044\u3088\u306D",
      "\u591C\u306E\u30E9\u30A4\u30C8\u30A2\u30C3\u30D7\u3082\u898B\u305F\u3044",
      "\u3044\u3044\u601D\u3044\u51FA\u306B\u306A\u308A\u305D\u3046",
      "\u5199\u771F\u305F\u304F\u3055\u3093\u64AE\u3063\u3066\u304D\u3066",
      "\u3082\u3061\u308D\u3093\u3001\u5171\u6709\u3059\u308B\u306D",
      "\u697D\u3057\u307F\u306B\u3057\u3066\u308B \u{1F4F8}",
      "\u6700\u8FD1\u30CF\u30DE\u3063\u3066\u308B\u97F3\u697D\u3042\u308B\uFF1F",
      "\u30A4\u30F3\u30C7\u30A3\u30FC\u7CFB\u306E\u30D0\u30F3\u30C9\u3088\u304F\u8074\u3044\u3066\u308B",
      "\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u9001\u308B\u3088",
      "\u3042\u308A\u304C\u3068\u3046",
      "\u3053\u306E\u30D0\u30F3\u30C9\u3001\u3081\u3063\u3061\u3083\u3044\u3044\u3058\u3083\u3093",
      "\u3067\u3057\u3087\uFF01\u30E9\u30A4\u30D6\u3082\u826F\u3055\u305D\u3046\u3060\u3088\u306D",
      "\u6B21\u306E\u30E9\u30A4\u30D6\u3044\u3064\uFF1F",
      "\u6765\u6708\u306E15\u65E5",
      "\u30C1\u30B1\u30C3\u30C8\u53D6\u308D\u3046\u304B\u306A",
      "\u3058\u3083\u3042\u4E00\u7DD2\u306B\u884C\u304F\uFF1F",
      "\u884C\u304F\u884C\u304F",
      "\u697D\u3057\u307F \u{1F3B8}",
      "\u305D\u3046\u3044\u3048\u3070\u3001\u5F15\u3063\u8D8A\u3057\u3057\u305F\u3093\u3060\u3088\u306D",
      "\u3046\u3093\u3001\u5148\u9031",
      "\u65B0\u5C45\u3069\u3046\uFF1F",
      "\u5E83\u304F\u3066\u5FEB\u9069",
      "\u3044\u3044\u306A\u3042",
      "\u904A\u3073\u306B\u6765\u3066\u3088",
      "\u305C\u3072\u3001\u843D\u3061\u7740\u3044\u305F\u3089",
      "\u6765\u9031\u306E\u91D1\u66DC\u591C\u3069\u3046\uFF1F",
      "OK\u3001\u6642\u9593\u306F\uFF1F",
      "19\u6642\u304B\u3089\u3067",
      "\u308F\u304B\u3063\u305F\u3001\u624B\u571F\u7523\u306A\u306B\u304C\u3044\u3044\uFF1F",
      "\u306A\u3093\u3067\u3082\u5B09\u3057\u3044 \u{1F604}",
      "\u3058\u3083\u3042\u30EF\u30A4\u30F3\u8CB7\u3063\u3066\u304F",
      "\u3042\u308A\u304C\u3068\u3046",
      "\u6599\u7406\u4F5C\u3063\u3066\u304A\u304F\u3088",
      "\u697D\u3057\u307F\u306B\u3057\u3066\u308B",
      "\u304A\u3064\u304B\u308C\u3055\u307E\u3067\u3057\u305F",
      "\u307E\u305F\u6765\u9031\u301C",
      "\u304A\u306F\u3088\u3046\u3001\u4ECA\u65E5\u5929\u6C17\u3044\u3044\u306D",
      "\u6563\u6B69\u65E5\u548C\u3060\u306D \u{1F31E}",
      "\u30E9\u30F3\u30C1\u306F\u5916\u3067\u98DF\u3079\u305F\u3044\u6C17\u5206",
      "\u30C6\u30E9\u30B9\u5E2D\u306E\u30AB\u30D5\u30A7\u3042\u308B\u3088",
      "\u305D\u3053\u306B\u3057\u3088\u3046",
      "\u4E86\u89E3\u300112\u6642\u306B\u73FE\u5730\u3067",
      "\u30AB\u30D5\u30A7\u3001\u3081\u3063\u3061\u3083\u7F8E\u5473\u3057\u304B\u3063\u305F",
      "\u6B21\u306F\u30B9\u30A4\u30FC\u30C4\u3082\u98DF\u3079\u305F\u3044\u306D",
      "\u307E\u305F\u884C\u3053\u3046",
      "\u6700\u8FD1\u904B\u52D5\u3057\u3066\u308B\uFF1F",
      "\u90312\u3067\u30E9\u30F3\u30CB\u30F3\u30B0",
      "\u3048\u3089\u3044",
      "\u30DE\u30E9\u30BD\u30F3\u5927\u4F1A\u51FA\u308B\u3093\u3060",
      "\u5FDC\u63F4\u884C\u304F\u3088\uFF01",
      "\u3042\u308A\u304C\u3068\u3046\u3001\u304C\u3093\u3070\u308B \u{1F3C3}",
      "\u672C\u756A\u306E\u30BF\u30A4\u30E0\u306F\u3069\u3046\u3060\u3063\u305F\uFF1F",
      "\u81EA\u5DF1\u30D9\u30B9\u30C8\u66F4\u65B0\u3057\u305F\uFF01",
      "\u3059\u3054\u3044\u3001\u304A\u3081\u3067\u3068\u3046 \u{1F389}",
      "\u304A\u795D\u3044\u3057\u306A\u304D\u3083\u3060\u306D",
      "\u3054\u98EF\u884C\u3053\u3046",
      "\u6765\u9031\u306E\u65E5\u66DC\u7A7A\u3044\u3066\u308B\uFF1F",
      "\u7A7A\u3044\u3066\u308B",
      "18\u6642\u306B\u99C5\u524D\u3067",
      "OK",
      "\u304A\u75B2\u308C\u3055\u307E\u3001\u304A\u3084\u3059\u307F",
      "\u304A\u3084\u3059\u307F \u{1F319}",
      "\u3088\u3044\u5922\u3092",
      "\u3042\u308A\u304C\u3068\u3046",
      "\u307E\u305F\u660E\u65E5 \u{1F44B}",
      "\u307E\u305F\u660E\u65E5",
      "\u3044\u3064\u3082\u3042\u308A\u304C\u3068\u3046\u306D",
      "\u3053\u3061\u3089\u3053\u305D",
      "\u3053\u308C\u304B\u3089\u3082\u3088\u308D\u3057\u304F",
      "\u3082\u3061\u308D\u3093",
      "\u6700\u9AD8\u306E\u53CB\u9054\u306B\u611F\u8B1D",
      "\u540C\u3058\u304F \u{1F499}"
    ];
  }
  static {
    this.GROUP_INTERNAL_TEXTS = [
      "\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\u3001\u30B9\u30D7\u30EA\u30F3\u30C8\u958B\u59CB\u3067\u3059",
      "\u672C\u65E5\u306E\u30BF\u30B9\u30AF\u3001Notion\u306B\u66F8\u304D\u307E\u3057\u305F",
      "\u79C1\u306ETODO\u3001\u78BA\u8A8D\u3057\u307E\u3057\u305F",
      "\u30D0\u30C3\u30AF\u30ED\u30B0\u306E\u30B0\u30EB\u30FC\u30DF\u30F3\u30B0\u3001\u5348\u5F8C\u3084\u308A\u307E\u3057\u3087\u3046",
      "14\u6642\u304B\u3089\u3067OK\u3067\u3059\u304B",
      "\u5927\u4E08\u592B\u3067\u3059",
      "\u79C1\u306F15\u5206\u9045\u308C\u307E\u3059 \u{1F64F}",
      "\u4E86\u89E3\u3067\u3059",
      "\u4F1A\u8B70\u5BA4A\u3067",
      "\u627F\u77E5\u3057\u307E\u3057\u305F",
      "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304B\u3089\u306E\u8981\u671B\u3001\u5171\u6709\u3057\u307E\u3059",
      "URL\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "\u512A\u5148\u5EA6\u9AD8\u3081\u3067\u3059\u306D",
      "\u6B21\u30B9\u30D7\u30EA\u30F3\u30C8\u306B\u5165\u308C\u307E\u3057\u3087\u3046",
      "PO\u306B\u76F8\u8AC7\u3057\u307E\u3059",
      "\u627F\u8A8D\u3082\u3089\u3044\u307E\u3057\u305F",
      "\u30C7\u30B6\u30A4\u30F3\u3082\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3057\u307E\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "PR\u4E0A\u3052\u307E\u3057\u305F\u3001\u30EC\u30D3\u30E5\u30FC\u304A\u9858\u3044\u3057\u307E\u3059",
      "LGTM\u3067\u3059",
      "\u30DE\u30FC\u30B8\u3057\u307E\u3057\u305F \u{1F680}",
      "\u30B9\u30C6\u30FC\u30B8\u30F3\u30B0\u3067\u52D5\u4F5C\u78BA\u8A8D\u3057\u307E\u3059",
      "\u554F\u984C\u306A\u3055\u305D\u3046\u3067\u3059",
      "\u672C\u756A\u30C7\u30D7\u30ED\u30A4\u3001\u91D1\u66DC\u591C\u3067\u3044\u3044\u3067\u3059\u304B",
      "\u5927\u4E08\u592B\u3067\u3059",
      "\u30A2\u30CA\u30A6\u30F3\u30B9\u6587\u6848\u3001\u30C9\u30E9\u30D5\u30C8\u66F8\u304D\u307E\u3059",
      "\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u6821\u6B63\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "\u30EA\u30EA\u30FC\u30B9\u30CE\u30FC\u30C8\u3082\u66F4\u65B0\u3057\u307E\u3057\u305F",
      "\u78BA\u8A8D\u3057\u307E\u3057\u305F \u{1F44D}",
      "\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3001\u6700\u65B0\u306B\u3057\u3066\u304A\u304D\u307E\u3057\u305F",
      "\u52A9\u304B\u308A\u307E\u3059",
      "\u304A\u5BA2\u69D8\u304B\u3089\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u5C4A\u304D\u307E\u3057\u305F",
      "\u30DD\u30B8\u30C6\u30A3\u30D6\u306A\u5185\u5BB9\u3067\u3059\u306D",
      "\u30C1\u30FC\u30E0\u5168\u54E1\u306B\u5171\u6709\u3057\u307E\u3057\u3087\u3046",
      "\u671D\u4F1A\u3067\u7D39\u4ECB\u3057\u307E\u3059",
      "\u3044\u3044\u30A2\u30A4\u30C7\u30A2\u3067\u3059",
      "\u30C7\u30E2\u52D5\u753B\u3001\u3069\u3046\u3057\u3088\u3046",
      "1\u5206\u304F\u3089\u3044\u306B\u7DE8\u96C6\u3057\u307E\u3059\u306D",
      "\u52A9\u304B\u308A\u307E\u3059\u3001\u30B7\u30A7\u30A2\u3057\u3084\u3059\u304F\u306A\u308B",
      "YouTube\u306B\u30A2\u30C3\u30D7\u3057\u307E\u3057\u305F",
      "\u30EA\u30F3\u30AF\u304F\u3060\u3055\u3044",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u9332\u753B\u3001Drive\u306B\u7F6E\u304D\u307E\u3057\u305F",
      "\u5F8C\u3067\u78BA\u8A8D\u3057\u307E\u3059",
      "\u8B70\u4E8B\u9332\u3082\u307E\u3068\u3081\u307E\u3057\u305F",
      "\u3059\u3070\u3089\u3057\u3044\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "\u6765\u9031\u306E\u5168\u793E\u4F1A\u3001\u6E96\u5099\u9032\u3081\u307E\u3057\u3087\u3046",
      "\u30B9\u30E9\u30A4\u30C9\u3001\u5171\u540C\u7DE8\u96C6\u3057\u307E\u3059",
      "\u660E\u65E5\u306E\u5915\u65B9\u307E\u3067\u306B\u30C9\u30E9\u30D5\u30C8\u4F5C\u308A\u307E\u3059",
      "\u5B8C\u74A7\u3067\u3059",
      "\u8A71\u3059\u9806\u756A\u3001\u6C7A\u3081\u307E\u3057\u3087\u3046\u304B",
      "\u5C0E\u5165\u3092\u79C1\u3001\u672C\u7DE8\u3092\u7530\u4E2D\u3055\u3093\u3067",
      "\u3044\u3044\u3067\u3059\u306D",
      "\u7DF4\u7FD2\u3001\u6C34\u66DC\u306E\u591C\u306B",
      "\u53C2\u52A0\u3057\u307E\u3059",
      "Zoom\u30EA\u30F3\u30AF\u9001\u308A\u307E\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "\u8CEA\u7591\u5FDC\u7B54\u306E\u60F3\u5B9A\u554F\u7B54\u3001\u307E\u3068\u3081\u307E\u3057\u305F",
      "\u629C\u304B\u308A\u306A\u3044\u3067\u3059\u306D",
      "\u672C\u756A\u304C\u3093\u3070\u308A\u307E\u3057\u3087\u3046 \u{1F4AA}",
      "\u30B9\u30E9\u30A4\u30C9\u3001\u6700\u5F8C\u306B\u898B\u76F4\u3057\u307E\u3059",
      "\u30D5\u30A9\u30F3\u30C8\u7D71\u4E00\u3057\u307E\u3059",
      "\u3042\u308A\u304C\u3068\u3046\uFF01",
      "\u7121\u4E8B\u7D42\u308F\u308A\u307E\u3057\u305F \u{1F389}",
      "\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F",
      "\u6253\u3061\u4E0A\u3052\u3057\u307E\u3057\u3087\u3046",
      "\u91D1\u66DC\u306E\u591C\u3069\u3046\u3067\u3059\u304B",
      "OK\u3067\u3059",
      "\u4F1A\u5834\u306F\u8FD1\u304F\u306E\u5C45\u9152\u5C4B\u3067",
      "\u79C1\u3001\u4E88\u7D04\u5165\u308C\u307E\u3059",
      "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
      "\u4F55\u540D\u3067\u3059\u304B",
      "\u4ECA\u306E\u3068\u3053\u308D8\u540D\u3067\u3059",
      "\u5927\u4E08\u592B\u305D\u3046\u3067\u3059\u306D",
      "\u30C9\u30BF\u30AD\u30E3\u30F3OK\u3067",
      "\u627F\u77E5\u3057\u307E\u3057\u305F",
      "\u6599\u7406\u306F\u30B3\u30FC\u30B9\u3067",
      "\u98F2\u307F\u653E\u984C\u3064\u304D\u3067",
      "\u697D\u3057\u307F\u3067\u3059 \u{1F37B}",
      "\u30E1\u30F3\u30D0\u30FC\u52DF\u96C6\u3001\u30A8\u30F3\u30B8\u30CB\u30A22\u540D\u8FFD\u52A0\u3067\u3059",
      "\u63A1\u7528\u9762\u63A5\u306E\u65E5\u7A0B\u8ABF\u6574\u3001\u304A\u9858\u3044\u3057\u305F\u3044\u3067\u3059",
      "\u79C1\u3001\u706B\u66DC\u3068\u6728\u66DC\u306E\u5348\u5F8C\u306A\u3089\u53C2\u52A0\u53EF\u80FD\u3067\u3059",
      "\u5019\u88DC\u8005\u60C5\u5831\u3001Notion\u306B\u7F6E\u304D\u307E\u3057\u305F",
      "\u30B9\u30AB\u30A6\u30C8\u6587\u9762\u3001\u30EC\u30D3\u30E5\u30FC\u304A\u9858\u3044\u3057\u307E\u3059",
      "\u4FEE\u6B63\u3057\u307E\u3057\u305F\u3001\u78BA\u8A8D\u304F\u3060\u3055\u3044",
      "\u826F\u3044\u611F\u3058\u3067\u3059",
      "\u9001\u4FE1\u3057\u307E\u3057\u305F",
      "\u8FD4\u4FE1\u304D\u307E\u3057\u305F\uFF01",
      "\u826F\u3044\u30CB\u30E5\u30FC\u30B9\u3067\u3059\u306D",
      "\u4E00\u6B21\u9762\u63A5\u306E\u8ABF\u6574\u306B\u9032\u307F\u307E\u3059",
      "\u30AB\u30EC\u30F3\u30C0\u30FC\u62BC\u3055\u3048\u3066\u304A\u304D\u307E\u3059",
      "\u6E96\u5099\u3001\u9811\u5F35\u308A\u307E\u3059",
      "\u30CA\u30EC\u30C3\u30B8\u30D9\u30FC\u30B9\u3001\u62E1\u5145\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046",
      "\u30CF\u30F3\u30C9\u30D6\u30C3\u30AF\u4F5C\u308A\u305F\u3044\u3067\u3059",
      "\u30AA\u30F3\u30DC\u30FC\u30C7\u30A3\u30F3\u30B0\u8CC7\u6599\u3068\u7D71\u5408\u3057\u307E\u3057\u3087\u3046",
      "\u4E86\u89E3\u3001\u9032\u3081\u307E\u3059",
      "\u65B0\u30E1\u30F3\u30D0\u30FC\u6B53\u8FCE\u4F1A\u3001\u6765\u6708\u3067\u3059\u306D",
      "\u5834\u6240\u3001\u62BC\u3055\u3048\u3066\u304A\u304D\u307E\u3059",
      "\u697D\u3057\u307F\u3067\u3059",
      "\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F\u3001\u307E\u305F\u660E\u65E5",
      "\u307E\u305F\u660E\u65E5 \u{1F44B}"
    ];
  }
  /** 汎用スレッド生成: 任意のroomIdに対して100件の双方向会話を生成 */
  static generateThreadMessages(roomId, idPrefix, senders, texts, dayOffset) {
    const messages = [];
    const now = /* @__PURE__ */ new Date("2026-04-10T10:00:00");
    const startTime = now.getTime() - (7 + dayOffset) * 24 * 60 * 60 * 1e3;
    let lastDateLabel = "";
    let seed = 0;
    for (let i = 0; i < roomId.length; i++)
      seed = seed * 31 + roomId.charCodeAt(i) >>> 0;
    const rand = () => {
      seed = seed + 1831565813 >>> 0;
      let t = seed;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
    for (let i = 0; i < 100; i++) {
      const t = startTime + i / 100 * (7 * 24 * 60 * 60 * 1e3) + rand() * 6e5;
      const d = new Date(t);
      const hh = d.getHours().toString().padStart(2, "0");
      const mm = d.getMinutes().toString().padStart(2, "0");
      const dateLabel = `${d.getFullYear()}\u5E74${d.getMonth() + 1}\u6708${d.getDate()}\u65E5`;
      const senderIdx = senders.length === 2 ? i % 2 === 0 ? 1 : 0 : rand() < 0.3 ? 0 : 1 + Math.floor(rand() * (senders.length - 1));
      const sender = senders[senderIdx];
      const text = texts[i % texts.length];
      const msg = {
        id: `${idPrefix}-${Math.floor(t)}-${i + 1}`,
        roomId,
        senderName: sender.name,
        senderInitial: sender.initial,
        senderColor: sender.color,
        text,
        time: `${hh}:${mm}`,
        isMe: !!sender.isMe
      };
      if (dateLabel !== lastDateLabel) {
        msg.dateLabel = dateLabel;
        lastDateLabel = dateLabel;
      }
      if (i % 17 === 0) {
        msg.reactions = [{ emoji: "\u{1F44D}", count: 1 + i % 3, mine: i % 2 === 0 }];
      }
      messages.push(msg);
    }
    return messages;
  }
  generateMockContacts() {
    const firstJa = ["\u672C\u884C", "\u672C\u7530", "\u4E95\u4E0A", "\u5965\u539F", "\u5927\u91CE", "\u77F3\u5DDD", "\u7530\u4E2D", "\u4F50\u3005\u6728", "\u677E\u672C", "\u4F0A\u85E4", "\u6E21\u8FBA", "\u4E2D\u6751", "\u5C0F\u6797", "\u52A0\u85E4", "\u5409\u7530", "\u5C71\u7530", "\u658E\u85E4", "\u6E05\u6C34", "\u5C71\u5D0E", "\u6C60\u7530", "\u6A4B\u672C", "\u5CA1\u7530", "\u9577\u8C37\u5DDD", "\u77F3\u4E95", "\u524D\u7530", "\u85E4\u7530", "\u8FD1\u85E4", "\u9752\u6728", "\u5742\u672C", "\u9060\u85E4", "\u85E4\u4E95", "\u897F\u6751", "\u798F\u7530", "\u592A\u7530", "\u4E09\u6D66", "\u85E4\u539F", "\u5CA1\u672C", "\u677E\u7530", "\u4E2D\u5CF6", "\u4E2D\u5DDD"];
    const lastJa = ["\u5145\u660E", "\u5E78\u5F66", "\u96C4\u4E00\u90CE", "\u5065\u592A", "\u7F8E\u54B2", "\u5927\u8F14", "\u82B1\u5B50", "\u592A\u90CE", "\u6B21\u90CE", "\u4E09\u90CE", "\u6075\u5B50", "\u88D5\u5B50", "\u6D0B\u5B50", "\u660E", "\u8AA0", "\u8C4A", "\u8302", "\u5065", "\u5B5D", "\u535A", "\u4FEE", "\u52C7", "\u6B66", "\u6E05", "\u5FB9"];
    const colors = ["#5c6bc0", "#26a69a", "#ff7043", "#ab47bc", "#ef5350", "#66bb6a", "#42a5f5", "#8d6e63", "#ffa726", "#78909c"];
    const list = [];
    list.push({ id: "c0", name: "\u672C\u884C\u5145\u660E", email: "hongyo.company@gmail.com", initial: "\u5145\u660E", color: "#5c6bc0", source: "google" });
    list.push({ id: "c1", name: "\u672C\u7530\u5E78\u5F66", email: "y.honda@bitstar.tokyo", initial: "\u672C", color: "#9e9e9e", source: "google" });
    list.push({ id: "c2", name: "\u4E95\u4E0A\u96C4\u4E00\u90CE", email: "inoue@ryden.co.jp", initial: "\u4E95", color: "#424242", source: "google" });
    list.push({ id: "c3", name: "kensuke okuhara", email: "okuharakensuke@gmail.com", initial: "K", color: "#424242", source: "google" });
    for (let i = 4; i < 200; i++) {
      const fn = firstJa[i % firstJa.length];
      const ln = lastJa[i * 3 % lastJa.length];
      list.push({
        id: "c" + i,
        name: fn + " " + ln,
        email: `user${i}@example.com`,
        initial: fn.charAt(0),
        color: colors[i % colors.length],
        source: i % 3 === 0 ? "schecon" : "google"
      });
    }
    return list;
  }
  get selectedRoom() {
    return this.rooms.find((r) => r.id === this.selectedRoomId);
  }
  get roomMessages() {
    let list = this.messages.filter((m) => m.roomId === this.selectedRoomId);
    const miniMsgs = this.chatState.getMessages(this.selectedRoomId);
    if (miniMsgs.length) {
      const existing = new Set(list.map((m) => m.id));
      const miniAsChat = miniMsgs.filter((mm) => !existing.has(mm.id)).map((mm) => ({
        id: mm.id,
        roomId: mm.roomId,
        senderName: mm.senderName || (mm.isMe ? "\u81EA\u5206" : "\u76F8\u624B"),
        text: mm.text,
        time: mm.time,
        isMe: mm.isMe,
        replyTo: mm.replyTo,
        attachments: mm.attachments,
        tags: mm.tags,
        dateLabel: mm.dateLabel
      }));
      list = [...list, ...miniAsChat];
    }
    const q = this.messageSearchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter((m) => (m.text || "").toLowerCase().includes(q));
    }
    if (this.activeTagFilter) {
      list = list.filter((m) => m.tags?.includes(this.activeTagFilter));
    }
    list = [...list].sort((a, b) => {
      const ta = this.getMessageSortKey(a);
      const tb = this.getMessageSortKey(b);
      return ta - tb;
    });
    return list;
  }
  /** メッセージの並べ替えキー (古い順 → 新しい順) */
  getMessageSortKey(m) {
    if (m.id) {
      const match = String(m.id).match(/(\d{10,})/);
      if (match)
        return Number(match[1]);
    }
    const dateLabel = m.dateLabel || "";
    const dMatch = dateLabel.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (dMatch) {
      const d = new Date(+dMatch[1], +dMatch[2] - 1, +dMatch[3]);
      const tMatch2 = (m.time || "").match(/(\d{1,2}):(\d{2})/);
      if (tMatch2)
        d.setHours(+tMatch2[1], +tMatch2[2], 0, 0);
      return d.getTime();
    }
    const tMatch = (m.time || "").match(/(\d{1,2}):(\d{2})/);
    if (tMatch) {
      return +tMatch[1] * 36e5 + +tMatch[2] * 6e4;
    }
    return 0;
  }
  /* 修正 No.44 (2026-04-24): 投稿・転送・引用・返信・スタンプの全種類の表示を確認
     - 投稿 (通常): msg.text + attachments で描画
     - 転送: 本文先頭に "[転送: 送信者名]" プレフィックス + msg-bubble--forwarded
     - 引用: 行頭に "> " を含む本文 (quoteMessage() が付与) → msg-bubble--quoted
     - 返信: msg.replyTo が設定され、msg-reply-preview を表示
     - スタンプ: 本文が絵文字のみ (短い) → msg-bubble--stamp で大きく吹き出しなしで描画 */
  /** 修正 No.44: メッセージが「転送投稿」か判定 (本文先頭の転送プレフィックス)
   *  修正 No.47 (2026-04-24): 転送を通常投稿と同じ表示にするため、常に false を返す。
   *  (どこかのルームのメッセージを転送したと分からせない仕様) */
  isForwardedMessage(msg) {
    return false;
  }
  /** 返信元メッセージを ID から取得 (Messenger 風の引用表示用)。
   *  fix (2026-04-27): msg.replyTo が設定されている投稿でも、本文の上に
   *  返信元の 2 行プレビューを表示するためのヘルパー。 */
  getReplyTarget(replyId) {
    if (!replyId)
      return null;
    return this.messages.find((m) => m.id === replyId) || null;
  }
  /** 修正 No.44: メッセージが「引用を含む投稿」か判定 (行頭の "> ") */
  isQuotedMessage(msg) {
    return !!msg && !!msg.text && /(^|\n)>\s/.test(msg.text);
  }
  /** 修正 No.44: メッセージが「スタンプ」か判定
   *  - 本文が空白を除き 1〜3 個程度の絵文字のみで構成される
   *  - 添付なし / 返信/転送/引用でないこと */
  isStampMessage(msg) {
    if (!msg || !msg.text)
      return false;
    if (msg.attachments && msg.attachments.length)
      return false;
    if (msg.replyTo)
      return false;
    if (this.isForwardedMessage(msg) || this.isQuotedMessage(msg))
      return false;
    const stripped = msg.text.replace(/\s+/g, "");
    if (!stripped)
      return false;
    if (stripped.length > 12)
      return false;
    try {
      const re = new RegExp("^(?:\\p{Extended_Pictographic}(?:\\uFE0F|\\u200D\\p{Extended_Pictographic})?){1,3}$", "u");
      return re.test(stripped);
    } catch {
      return false;
    }
  }
  /** メッセージのタイムスタンプを MM/DD HH:MM 形式で表示 (例: 04/20 22:30)
   *  各 msg に dateLabel が無い場合は、近傍の dateLabel から日付を推定。
   *  無ければ Today。 */
  getMsgFullTimestamp(msg) {
    if (!msg)
      return "";
    const time = msg.time || "";
    const list = this.roomMessages;
    let dateLabel = msg.dateLabel;
    if (!dateLabel) {
      const idx = list.findIndex((m) => m.id === msg.id);
      if (idx >= 0) {
        for (let i = idx; i >= 0; i--) {
          if (list[i].dateLabel) {
            dateLabel = list[i].dateLabel;
            break;
          }
        }
      }
    }
    let datePart = "";
    if (dateLabel) {
      const m = dateLabel.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
      if (m) {
        const mm = m[2].padStart(2, "0");
        const dd = m[3].padStart(2, "0");
        datePart = `${mm}/${dd}`;
      }
    }
    if (!datePart) {
      const d = /* @__PURE__ */ new Date();
      datePart = `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
    }
    return time ? `${datePart} ${time}` : datePart;
  }
  filterByTag(tag, event) {
    event?.stopPropagation();
    this.activeTagFilter = this.activeTagFilter === tag ? null : tag;
    this.showTagsModal = false;
    this.showTagPopup = false;
    this.scheduleScrollToBottom();
  }
  clearTagFilter() {
    this.activeTagFilter = null;
  }
  getTagColor(label) {
    const t = this.availableTags.find((tg) => tg.label === label);
    return t?.color || "#ed9630";
  }
  getTagCount(label) {
    return this.messages.filter((m) => m.roomId === this.selectedRoomId && m.tags?.includes(label)).length;
  }
  get roomTasks() {
    return this.tasks.filter((t) => t.roomId === this.selectedRoomId);
  }
  get allPendingTasks() {
    return this.tasks.filter((t) => !t.done).sort((a, b) => (a.dueDate + (a.dueTime || "")).localeCompare(b.dueDate + (b.dueTime || "")));
  }
  /** Get task attached to a message (if any) */
  getMessageTask(msg) {
    if (!msg.taskId)
      return void 0;
    return this.tasks.find((t) => t.id === msg.taskId);
  }
  /** Render text with <mark> highlighting for message search matches. */
  highlightText(text) {
    if (!text)
      return "";
    const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
    let safe = esc(text);
    safe = safe.replace(/(https?:\/\/[^\s<>&"']+)/g, (url) => `<a href="${url}" target="_blank" rel="noopener" class="msg-link">${url}</a>`);
    const memberNames = (this.selectedRoom?.members || []).map((m) => m.name.replace(/（自分）$/, "").replace(/\(自分\)$/, "")).filter((n) => n && n.length > 0).sort((a, b) => b.length - a.length);
    if (memberNames.length > 0) {
      const esc2 = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const alternation = memberNames.map(esc2).join("|");
      const mentionByMember = new RegExp(`@(${alternation})(?![\\w\u4E00-\u9FAF\u3041-\u3093\u30A1-\u30F6\u30FC])`, "g");
      safe = safe.replace(mentionByMember, (_, name) => `<span class="msg-mention">@${name}</span>`);
    }
    safe = safe.replace(/@([^\s\u3000@#、。,.!?！？<]+)/g, (m, name) => {
      if (m.includes("<span"))
        return m;
      return `<span class="msg-mention">@${name}</span>`;
    });
    safe = safe.replace(/#([^\s#、。,.!?！？「」『』【】\[\]()（）&lt;&gt;]+)/g, (_, tag) => `<span class="msg-hashtag" data-tag="${tag}">#${tag}</span>`);
    const q = this.messageSearchQuery.trim();
    if (!q)
      return safe.replace(/\n/g, "<br>");
    const qEsc = esc(q).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp(qEsc, "gi"), (m) => `<mark class="hl">${m}</mark>`).replace(/\n/g, "<br>");
  }
  /** メッセージ本文内のメンション/ハッシュタグクリック処理 */
  onBubbleTextClick(event) {
    const target = event.target;
    if (target.classList.contains("msg-hashtag")) {
      event.stopPropagation();
      const tag = target.getAttribute("data-tag");
      if (tag) {
        this.filterByTag(tag, event);
        this.showToast(`#${tag} \u3067\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u4E2D`);
      }
    }
    if (target.classList.contains("msg-mention")) {
      event.stopPropagation();
      const name = target.textContent?.replace(/^@/, "").trim();
      if (name) {
        const member = this.selectedRoom?.members?.find((m) => m.name === name);
        if (member) {
          this.profileTarget = member;
          this.showDetailPanel = true;
          this.rightPanelView = "profile";
          this.cdr.markForCheck();
        }
      }
    }
  }
  toggleMessageSearch() {
    this.showMessageSearch = !this.showMessageSearch;
    if (!this.showMessageSearch)
      this.messageSearchQuery = "";
    this.syncUrl();
    this.cdr.markForCheck();
    if (this.showMessageSearch) {
      setTimeout(() => {
        const el = document.querySelector(".chat-room__msg-search input");
        el?.focus();
      }, 50);
    }
  }
  clearMessageSearch() {
    this.messageSearchQuery = "";
    this.syncUrl();
  }
  get pinnedMessages() {
    return this.roomMessages.filter((m) => m.isPinned).slice().sort((a, b) => (b.pinnedAt || 0) - (a.pinnedAt || 0));
  }
  get pinnedMessage() {
    return this.pinnedMessages[0];
  }
  get bookmarkedMessages() {
    const filtered = this.isMyChat ? this.messages.filter((m) => m.bookmarked) : this.messages.filter((m) => m.roomId === this.selectedRoomId && m.bookmarked);
    return filtered.sort((a, b) => (b.bookmarkedAt || 0) - (a.bookmarkedAt || 0));
  }
  get roomMedia() {
    const fromMessages = [];
    for (const msg of this.messages) {
      if (msg.roomId !== this.selectedRoomId || !msg.attachments)
        continue;
      for (const a of msg.attachments) {
        const isImage = (a.type || "").startsWith("image") || /\.(png|jpe?g|gif|webp|bmp)$/i.test(a.name || "");
        const isVideo = (a.type || "").startsWith("video") || /\.(mp4|mov|webm|avi|mkv)$/i.test(a.name || "");
        if (!isImage && !isVideo)
          continue;
        fromMessages.push({
          id: "att-" + msg.id + "-" + a.name,
          type: isVideo ? "video" : "image",
          name: a.name || "attachment",
          size: a.size || "",
          thumbnail: a.dataUrl || "#eceff1",
          date: this.todayDateString()
        });
      }
    }
    const merged = [...fromMessages, ...this.mediaItems];
    return merged.filter((m) => m.type === this.mediaTab).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  }
  /** YYYY/MM/DD の今日日付 */
  todayDateString() {
    const d = /* @__PURE__ */ new Date();
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
  }
  /** "2026/03/09" -> "2026年3月" */
  formatMediaMonth(date) {
    const m = /^(\d{4})\/(\d{1,2})/.exec(date || "");
    if (!m)
      return date || "";
    return `${m[1]}\u5E74${parseInt(m[2], 10)}\u6708`;
  }
  get filteredRooms() {
    let list = this.rooms;
    if (this.activeFilter === "direct")
      list = list.filter((r) => r.type === "direct" || r.type === "my");
    if (this.activeFilter === "group")
      list = list.filter((r) => r.type === "group");
    if (this.activeFilter === "unread")
      list = list.filter((r) => (r.unreadCount || 0) > 0);
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.trim().toLowerCase();
      list = list.filter((r) => {
        if (r.name.toLowerCase().includes(q))
          return true;
        return this.messages.some((m) => m.roomId === r.id && (m.text || "").toLowerCase().includes(q));
      });
    }
    return [...list].sort((a, b) => {
      if (a.type === "my" && b.type !== "my")
        return -1;
      if (b.type === "my" && a.type !== "my")
        return 1;
      if (a.pinned && !b.pinned)
        return -1;
      if (b.pinned && !a.pinned)
        return 1;
      const au = a.updatedAt || 0;
      const bu = b.updatedAt || 0;
      return bu - au;
    });
  }
  /** グループ判定: 参加者 3 名以上 (自分 + 2 名以上の他者) なら group。
   *  参加者 2 名 (自分 + 相手 1 名) は個人チャット (direct)。 */
  get isGroup() {
    if (!this.selectedRoom)
      return false;
    const memberCount = this.selectedRoom.members?.length || this.selectedRoom.extraMembers != null ? (this.selectedRoom.members?.length || 0) + (this.selectedRoom.extraMembers || 0) : 0;
    if (memberCount >= 3)
      return true;
    if (this.selectedRoom.type === "direct" || this.selectedRoom.type === "my")
      return false;
    return this.selectedRoom.type === "group" && memberCount >= 3;
  }
  get isMyChat() {
    return this.selectedRoom?.type === "my";
  }
  /** ログインユーザーの名前（meメンバーから取得） */
  get loggedInUserName() {
    const myRoom = this.rooms.find((r) => r.type === "my");
    const me = myRoom?.members?.find((m) => m.id === "me");
    return me ? me.name.replace("\uFF08\u81EA\u5206\uFF09", "") : "\u77F3\u6FA4";
  }
  // Folder helpers
  getFolderById(id) {
    return this.folders.find((f) => f.id === id);
  }
  /** ルームが所属するフォルダ ID 一覧（folderIds 優先、無ければ folderId を fallback）。
   *  マイスペース (type: 'my') はフォルダ振り分け対象外 (ユーザー指示 2026-04-21)。 */
  getRoomFolderIds(room) {
    if (room.type === "my")
      return [];
    if (room.folderIds && room.folderIds.length)
      return room.folderIds;
    if (room.folderId)
      return [room.folderId];
    return [];
  }
  isRoomInFolder(room, folderId) {
    if (room.type === "my")
      return false;
    return this.getRoomFolderIds(room).includes(folderId);
  }
  getRoomsInFolder(folderId) {
    if (folderId === "drafts") {
      const ids = this.draftRoomIds;
      return this.rooms.filter((r) => ids.has(r.id));
    }
    return this.rooms.filter((r) => r.type !== "my" && this.isRoomInFolder(r, folderId));
  }
  get rootFolders() {
    return this.folders.filter((f) => !f.parentId);
  }
  getChildFolders(parentId) {
    return this.folders.filter((f) => f.parentId === parentId);
  }
  /** フォルダをツリー順 (親→子) にフラット化し depth を付与。
   *  フォルダ追加先選択モーダルで階層付きに表示するためのヘルパー。
   *  (ユーザー指示 2026-04-21: 下層フォルダが親の子とわかるレイアウトに)
   *  修正 #14: 'drafts' フォルダは自動管理のため追加先選択に含めない */
  getFoldersFlatWithDepth() {
    const result = [];
    const walk = (parentId, depth) => {
      this.folders.filter((f) => (f.parentId || void 0) === parentId && f.id !== "drafts").forEach((f) => {
        result.push({ folder: f, depth });
        walk(f.id, depth + 1);
      });
    };
    walk(void 0, 0);
    return result;
  }
  /** ピッカー画面のルートフォルダー (drafts は除外) */
  get pickerRootFolders() {
    return this.folders.filter((f) => !f.parentId && f.id !== "drafts");
  }
  isPickerFolderExpanded(folderId) {
    return this.pickerExpandedFolders.has(folderId);
  }
  togglePickerFolderExpanded(folderId) {
    if (this.pickerExpandedFolders.has(folderId)) {
      this.pickerExpandedFolders.delete(folderId);
    } else {
      this.pickerExpandedFolders.add(folderId);
    }
  }
  // Filtered contacts (handles 20k via pagination)
  get filteredContacts() {
    let list = this.contacts;
    if (!this.showGoogleContacts)
      list = list.filter((c) => c.source !== "google");
    const q = this.newChatSearchTerm.trim().toLowerCase();
    if (q) {
      list = list.filter((c) => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q));
    }
    list = list.filter((c) => !this.newChatSelectedMembers.includes(c.id));
    return list;
  }
  get visibleContacts() {
    return this.filteredContacts.slice(0, this.contactPage * this.contactPageSize);
  }
  loadMoreContacts() {
    this.contactPage += 1;
  }
  onContactsScroll(event) {
    const el = event.target;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 40) {
      if (this.visibleContacts.length < this.filteredContacts.length) {
        this.loadMoreContacts();
        this.cdr.markForCheck();
      }
    }
  }
  getSelectedChips() {
    return this.newChatSelectedMembers.map((id) => this.contacts.find((c) => c.id === id)).filter((c) => !!c);
  }
  removeChip(id) {
    this.newChatSelectedMembers = this.newChatSelectedMembers.filter((m) => m !== id);
  }
  addChipByEmail() {
    const email = this.newChatChipEmail.trim();
    if (!email)
      return;
    const existing = this.contacts.find((c) => c.email === email);
    if (existing) {
      if (!this.newChatSelectedMembers.includes(existing.id)) {
        this.newChatSelectedMembers = [...this.newChatSelectedMembers, existing.id];
      }
    } else {
      const id = "adhoc-" + Date.now();
      this.contacts = [
        { id, name: email, email, initial: email.charAt(0).toUpperCase(), color: "#9e9e9e", source: "schecon" },
        ...this.contacts
      ];
      this.newChatSelectedMembers = [...this.newChatSelectedMembers, id];
    }
    this.newChatChipEmail = "";
  }
  onChipInputKey(event) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      this.addChipByEmail();
    }
  }
  // Legacy accessor used by old member-list view (kept for compat)
  get availableMembers() {
    const map2 = /* @__PURE__ */ new Map();
    this.rooms.forEach((r) => r.members?.forEach((m) => {
      if (m.id !== "me")
        map2.set(m.id, m);
    }));
    return Array.from(map2.values());
  }
  constructor(titleService, cdr, route, router, chatState, scheduleModal, confirmDialog, scheduledMessages, dialog) {
    this.titleService = titleService;
    this.cdr = cdr;
    this.route = route;
    this.router = router;
    this.chatState = chatState;
    this.scheduleModal = scheduleModal;
    this.confirmDialog = confirmDialog;
    this.scheduledMessages = scheduledMessages;
    this.dialog = dialog;
    this.pendingScrollToBottom = false;
    this.lastScrolledRoomId = "";
    this.suppressScrollUntilMs = 0;
    this.activeFilter = "all";
    this.searchQuery = "";
    this.messageSearchQuery = "";
    this.showMessageSearch = false;
    this.messageInput = "";
    this.showDetailPanel = typeof window !== "undefined" && window.innerWidth > 1200;
    this.inputFocused = false;
    this.mobilePane = "list";
    this.roomTransitioning = false;
    this.expandedFolders = /* @__PURE__ */ new Set();
    this.showNewChatModal = false;
    this.showBookmarksModal = false;
    this.showTagsModal = false;
    this.showMediaModal = false;
    this.showProfileModal = false;
    this.showBlockConfirmModal = false;
    this.showAiModal = false;
    this.aiSuggestions = [];
    this.aiMode = "template";
    this.showAttachModal = false;
    this.roomNotificationEnabled = true;
    this.roomNotificationMentionOnly = true;
    this.roomNotificationMode = "mention";
    this.roomMuteUntilMs = null;
    this.selectedMuteDurationHours = null;
    this.showAvatarCropModal = false;
    this.avatarCropSrc = null;
    this.avatarCropX = 0;
    this.avatarCropY = 0;
    this.avatarCropZoom = 1;
    this.avatarCropDragging = false;
    this.avatarCropLoading = false;
    this.avatarCropSaving = false;
    this.avatarDragStartX = 0;
    this.avatarDragStartY = 0;
    this.avatarDragOriginX = 0;
    this.avatarDragOriginY = 0;
    this.AVATAR_STORAGE_KEY = "schecon.avatarImages.v1";
    this.FOLDERS_STORAGE_KEY = "schecon.chat.folders.v1";
    this.ROOM_FOLDERS_STORAGE_KEY = "schecon.chat.roomFolders.v1";
    this.BLOCKS_STORAGE_KEY = "schecon.chat.blocks.v1";
    this.REACTIONS_STORAGE_KEY = "schecon.chat.reactions.v1";
    this.READS_STORAGE_KEY = "schecon.chat.reads.v1";
    this.myAvatarImage = null;
    this.pendingAttachments = [];
    this.pendingFiles = [];
    this.showFolderModal = false;
    this.showFolderCreateModal = false;
    this.showFolderRenameModal = false;
    this.folderRenameTarget = null;
    this.folderRenameInput = "";
    this.showFolderAddToModal = false;
    this.folderAddToTarget = null;
    this.inlineNewFolderName = "";
    this.showInlineNewFolderInput = false;
    this.inlineNewFolderParentId = null;
    this.showFolderBulkManageModal = false;
    this.folderBulkManageTarget = null;
    this.folderBulkSearchQuery = "";
    this.showMemberListModal = false;
    this.showLeaveConfirmModal = false;
    this.showRenameGroupModal = false;
    this.renameGroupInput = "";
    this.memberListMenuTarget = null;
    this.memberListMenuPos = { x: 0, y: 0 };
    this.showMessageMenu = false;
    this.messageMenuTarget = null;
    this.messageMenuPos = { x: 0, y: 0 };
    this.showMentionPopup = false;
    this.showTagPopup = false;
    this.showEmojiPopup = false;
    this.emojiTarget = null;
    this.newChatType = "direct";
    this.newChatName = "";
    this.newChatSelectedMembers = [];
    this.newChatSearchTerm = "";
    this.newChatChipEmail = "";
    this.showGoogleContacts = true;
    this.contactPageSize = 50;
    this.contactPage = 1;
    this.newFolderName = "";
    this.newFolderParentId = null;
    this.newFolderUseParent = false;
    this.toastMessage = "";
    this.toastVisible = false;
    this.aiTemplate = "greeting";
    this.aiPrompt = "";
    this.aiResult = "";
    this.aiLoading = false;
    this.mediaTab = "image";
    this.showLightbox = false;
    this.showMobileHeaderMenu = false;
    this.showMobileInfoMenu = false;
    this.showInputMenu = false;
    this.lightboxImages = [];
    this.lightboxIndex = 0;
    this.profileTarget = null;
    this.editingMessageId = null;
    this.editingText = "";
    this.replyToMessage = null;
    this.showTaskCreateModal = false;
    this.showTaskListModal = false;
    this.taskCreateTarget = null;
    this.taskDraftTitle = "";
    this.taskDraftDate = "";
    this.taskDraftTime = "";
    this.taskDraftRemind = true;
    this.taskDraftMemo = "";
    this.taskActiveTab = "active";
    this.tasks = [
      {
        id: "task-demo-1",
        roomId: "timemachine",
        messageId: "m1",
        title: "TIMEMACHINE\u3055\u3093\u3078\u306E\u898B\u7A4D\u63D0\u51FA",
        dueDate: "2026-04-15",
        dueTime: "18:00",
        remindInChat: true,
        done: false,
        createdAt: "2026-04-09"
      }
    ];
    this.folders = [
      { id: "favorites", name: "\u304A\u6C17\u306B\u5165\u308A", icon: "star", system: true },
      /* 修正 #14: 下書きフォルダを system folder として追加。
         localStorage に下書きテキストを持つルームが自動で所属する */
      { id: "drafts", name: "\u4E0B\u66F8\u304D", icon: "drafts", system: true },
      { id: "customers", name: "\u304A\u5BA2\u69D8", icon: "folder" },
      { id: "internal", name: "\u793E\u5185", icon: "folder" },
      { id: "prospects", name: "\u898B\u8FBC\u307F\u5BA2", icon: "folder", parentId: "customers" },
      { id: "blocked", name: "\u30D6\u30ED\u30C3\u30AF\u3057\u305F\u30E6\u30FC\u30B6\u30FC", icon: "block", system: true }
    ];
    this.rooms = [
      {
        id: "my-chat",
        name: "\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9",
        lastMessage: "\u30C6\u30B9\u30C8\u3067\u3059\u3002",
        timestamp: "1\u304B\u6708",
        initial: "\u{1F4DD}",
        avatarColor: "#ffb74d",
        type: "my",
        starred: true,
        description: "\u81EA\u5206\u5C02\u7528\u306E\u30E1\u30E2\u30C1\u30E3\u30C3\u30C8\u3002\u30EA\u30DE\u30A4\u30F3\u30C0\u30FC\u3084\u4E0B\u66F8\u304D\u306B\u4FBF\u5229\u3067\u3059\u3002",
        // マイスペースはフォルダ振り分け対象外 (ユーザー指示 2026-04-21)
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", role: "owner", email: "ishizawa@schecon.com", online: true }
        ]
      },
      {
        id: "timemachine",
        name: "TIMEMACHINE\u77F3\u6FA4 \u79C0\u6B21\u90CE",
        lastMessage: "\u30C6\u30B9\u30C8",
        timestamp: "12\u6642\u9593",
        initial: "T",
        avatarColor: "#ff9800",
        type: "direct",
        starred: true,
        tags: ["\u91CD\u8981", "\u55B6\u696D"],
        description: "\u30BF\u30A4\u30E0\u30DE\u30B7\u30F3\u682A\u5F0F\u4F1A\u793E\u306E\u77F3\u6FA4\u3055\u3093\u3068\u306E\u30C0\u30A4\u30EC\u30AF\u30C8\u30C1\u30E3\u30C3\u30C8",
        folderId: "customers",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", role: "member", email: "ishizawa@schecon.com", online: true },
          { id: "hideo", name: "\u77F3\u6FA4 \u79C0\u6B21\u90CE", initial: "S", color: "#ff9800", role: "owner", email: "hideo@timemachine.co.jp", company: "\u682A\u5F0F\u4F1A\u793ETIMEMACHINE", online: true }
        ]
      },
      {
        id: "epoch",
        name: "EPOCH",
        lastMessage: "\u3053\u306E\u77ED\u671F\u6C7A\u6226\u3068\u3044\u3046\u72B6\u6CC1\u304C\u3001",
        timestamp: "12\u6642\u9593",
        initial: "E",
        avatarColor: "#9e9e9e",
        type: "direct",
        unreadCount: 1,
        description: "EPOCH\u793E\u3068\u306E\u5546\u8AC7\u30C1\u30E3\u30C3\u30C8",
        folderId: "customers",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", role: "member", online: true },
          { id: "epoch-rep", name: "EPOCH \u62C5\u5F53\u8005", initial: "E", color: "#9e9e9e", role: "owner", email: "rep@epoch.jp", company: "EPOCH\u682A\u5F0F\u4F1A\u793E" }
        ]
      },
      {
        id: "test-1",
        name: "\u30C6\u30B9\u30C8",
        lastMessage: "\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059",
        timestamp: "12\u6642\u9593",
        initial: "K",
        avatarColor: "#5c6bc0",
        type: "direct",
        unreadCount: 2,
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "k", name: "K. \u30B5\u30C8\u30A6", initial: "K", color: "#5c6bc0" }
        ]
      },
      {
        id: "test-2",
        name: "\u30B9\u30B1\u30B3\u30F3\u30C1\u30E3\u30C3\u30C8\u30C6\u30B9\u30C8\u30B0\u30EB\u30FC\u30D7",
        lastMessage: "\u753B\u50CF\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F",
        timestamp: "1\u304B\u6708",
        initial: "\u30B9",
        avatarColor: "#26a69a",
        type: "group",
        extraMembers: 2,
        description: "\u30B9\u30B1\u30B3\u30F3\u6A5F\u80FD\u306E\u30C6\u30B9\u30C8\u7528\u30B0\u30EB\u30FC\u30D7\u30C1\u30E3\u30C3\u30C8",
        folderId: "internal",
        inviteLink: "https://stg.schecon.com/chat/invite/test-2-abc123",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", role: "owner", online: true, email: "ishizawa@schecon.com" },
          { id: "u2", name: "\u5150\u7389 \u6709\u4E8B", initial: "\u5150", color: "#26a69a", email: "kodama@schecon.com" },
          { id: "u3", name: "EPOCH", initial: "E", color: "#9e9e9e", email: "epoch@epoch-inc.jp" },
          { id: "u4", name: "\u9234\u6728 \u6B21\u90CE", initial: "\u9234", color: "#ef5350" }
        ]
      },
      {
        id: "takefuji",
        name: "takefuji@increment-i.co.jp",
        lastMessage: "\u7530\u4E2D",
        timestamp: "1\u304B\u6708",
        initial: "t",
        avatarColor: "#9e9e9e",
        type: "direct",
        hasWarning: true,
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "tf", name: "takefuji", initial: "t", color: "#9e9e9e", email: "takefuji@increment-i.co.jp", company: "increment-i" }
        ]
      },
      // (旧 'ishizawa-chat' グループは参加者 2 名の「プロジェクト名」グループだったため削除。
      //  ユーザー指示 2026-04-21: グループは参加メンバー 3 名以上を徹底)
      {
        id: "tanaka",
        name: "\u7530\u4E2D\u592A\u90CE",
        lastMessage: "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB\u3057\u307E\u3057\u305F",
        timestamp: "1\u304B\u6708",
        initial: "\u7530",
        avatarColor: "#ffa726",
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "tn", name: "\u7530\u4E2D \u592A\u90CE", initial: "\u7530", color: "#ffa726", email: "tanaka@example.com" }
        ]
      },
      {
        id: "kosaka",
        name: "\u5C0F\u5742\u5927\u8F14",
        lastMessage: "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB\u3057\u307E\u3057\u305F",
        timestamp: "1\u304B\u6708",
        initial: "\u5C0F",
        avatarColor: "#8d6e63",
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "ks", name: "\u5C0F\u5742 \u5927\u8F14", initial: "\u5C0F", color: "#8d6e63", email: "kosaka@example.com" }
        ]
      },
      {
        id: "product-squad",
        name: "\u30D7\u30ED\u30C0\u30AF\u30C8\u958B\u767A\u30B9\u30AF\u30E9\u30E0",
        lastMessage: "\u30EA\u30EA\u30FC\u30B9\u5019\u88DC\u30D3\u30EB\u30C9\u3092\u30C7\u30D7\u30ED\u30A4\u3057\u307E\u3057\u305F \u{1F680}",
        timestamp: "5\u5206",
        initial: "\u30D7",
        avatarColor: "#5c6bc0",
        type: "group",
        unreadCount: 7,
        extraMembers: 5,
        description: "\u9031\u6B21\u30B9\u30D7\u30EA\u30F3\u30C8 + \u65E5\u6B21\u30B9\u30BF\u30F3\u30C9\u30A2\u30C3\u30D7\u3002\u30EA\u30EA\u30FC\u30B9\u95A2\u9023\u306F\u3053\u3061\u3089\u3002",
        folderId: "internal",
        inviteLink: "https://stg.schecon.com/chat/invite/product-squad-x",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", role: "owner", online: true, email: "ishizawa@schecon.com" },
          { id: "pm1", name: "\u5150\u7389 \u6709\u4E8B", initial: "\u5150", color: "#26a69a", online: true, email: "kodama@schecon.com" },
          { id: "pm2", name: "\u4F50\u85E4 \u7F8E\u54B2", initial: "\u4F50", color: "#ef5350", online: true, email: "sato@schecon.com" },
          { id: "pm3", name: "\u7530\u4E2D \u5065\u592A", initial: "\u7530", color: "#42a5f5", email: "tanaka.k@schecon.com" },
          { id: "pm4", name: "\u5C71\u672C \u8AA0", initial: "\u5C71", color: "#66bb6a", online: true, email: "yamamoto@schecon.com" },
          { id: "pm5", name: "\u9234\u6728 \u76F4\u7F8E", initial: "\u9234", color: "#ab47bc", email: "suzuki.n@schecon.com" }
        ]
      },
      // === 追加チャットルーム (20件) ===
      {
        id: "sales-team",
        name: "\u55B6\u696D\u90E8",
        lastMessage: "\u4ECA\u6708\u306E\u76EE\u6A19\u9054\u6210\u3057\u307E\u3057\u305F\uFF01",
        timestamp: "10\u5206",
        initial: "\u55B6",
        avatarColor: "#f06292",
        type: "group",
        unreadCount: 3,
        extraMembers: 8,
        description: "\u55B6\u696D\u90E8\u5168\u4F53\u306E\u30C1\u30E3\u30C3\u30C8",
        folderId: "internal",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", role: "member", online: true },
          { id: "s1", name: "\u5C71\u7530 \u592A\u90CE", initial: "\u5C71", color: "#f06292", role: "owner", email: "yamada@schecon.com" },
          { id: "s2", name: "\u4F50\u85E4 \u82B1\u5B50", initial: "\u4F50", color: "#5c6bc0" }
        ]
      },
      {
        id: "client-abc",
        name: "\u682A\u5F0F\u4F1A\u793EABC \u7530\u4E2D\u69D8",
        lastMessage: "\u5951\u7D04\u66F8\u306E\u4EF6\u3001\u78BA\u8A8D\u3057\u307E\u3057\u305F",
        timestamp: "30\u5206",
        initial: "A",
        avatarColor: "#42a5f5",
        type: "direct",
        tags: ["\u91CD\u8981"],
        folderId: "customers",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "abc1", name: "\u7530\u4E2D \u8AA0", initial: "\u7530", color: "#42a5f5", email: "tanaka@abc.co.jp", company: "\u682A\u5F0F\u4F1A\u793EABC" }
        ]
      },
      {
        id: "design-team",
        name: "\u30C7\u30B6\u30A4\u30F3\u30C1\u30FC\u30E0",
        lastMessage: "\u65B0\u30C7\u30B6\u30A4\u30F3\u6848\u3092\u30A2\u30C3\u30D7\u3057\u307E\u3057\u305F",
        timestamp: "1\u6642\u9593",
        initial: "\u30C7",
        avatarColor: "#ec407a",
        type: "group",
        extraMembers: 4,
        folderId: "internal",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "d1", name: "\u9AD8\u6A4B \u7F8E\u512A", initial: "\u9AD8", color: "#ec407a", role: "owner", email: "takahashi@schecon.com" },
          { id: "d2", name: "\u4E2D\u6751 \u907C", initial: "\u4E2D", color: "#7e57c2" }
        ]
      },
      {
        id: "kimura",
        name: "\u6728\u6751 \u5065\u4E00",
        lastMessage: "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F",
        timestamp: "2\u6642\u9593",
        initial: "\u6728",
        avatarColor: "#66bb6a",
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "km", name: "\u6728\u6751 \u5065\u4E00", initial: "\u6728", color: "#66bb6a", email: "kimura@example.com" }
        ]
      },
      {
        id: "marketing",
        name: "\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u90E8",
        lastMessage: "\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u6848\u3092\u5171\u6709\u3057\u307E\u3059",
        timestamp: "3\u6642\u9593",
        initial: "\u30DE",
        avatarColor: "#ffa726",
        type: "group",
        unreadCount: 2,
        extraMembers: 5,
        folderId: "internal",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "mk1", name: "\u4F0A\u85E4 \u7D75\u7F8E", initial: "\u4F0A", color: "#ffa726", role: "owner" },
          { id: "mk2", name: "\u7530\u6751 \u7F8E\u54B2", initial: "\u7530", color: "#ec407a" },
          { id: "mk3", name: "\u9577\u8C37\u5DDD \u62D3\u4E5F", initial: "\u9577", color: "#5c6bc0" }
        ]
      },
      {
        id: "watanabe",
        name: "\u6E21\u8FBA \u826F\u5B50",
        lastMessage: "\u8CC7\u6599\u9001\u4ED8\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
        timestamp: "5\u6642\u9593",
        initial: "\u6E21",
        avatarColor: "#26c6da",
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "wt", name: "\u6E21\u8FBA \u826F\u5B50", initial: "\u6E21", color: "#26c6da", email: "watanabe@example.com" }
        ]
      },
      {
        id: "dev-backend",
        name: "\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u958B\u767A",
        lastMessage: "API\u4ED5\u69D8\u66F8\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F",
        timestamp: "\u6628\u65E5",
        initial: "B",
        avatarColor: "#7e57c2",
        type: "group",
        extraMembers: 2,
        folderId: "internal",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "be1", name: "\u677E\u672C \u5065\u592A", initial: "\u677E", color: "#7e57c2", role: "owner" },
          { id: "be2", name: "\u798F\u7530 \u614E\u4E00", initial: "\u798F", color: "#26a69a" },
          { id: "be3", name: "\u77F3\u4E95 \u7950\u6A39", initial: "\u77F3", color: "#42a5f5" }
        ]
      },
      {
        id: "nakamura",
        name: "\u4E2D\u6751 \u62D3\u6D77",
        lastMessage: "\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F",
        timestamp: "\u6628\u65E5",
        initial: "\u4E2D",
        avatarColor: "#ef5350",
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "nk", name: "\u4E2D\u6751 \u62D3\u6D77", initial: "\u4E2D", color: "#ef5350" }
        ]
      },
      {
        id: "client-xyz",
        name: "XYZ\u5546\u4E8B \u55B6\u696D\u90E8",
        lastMessage: "\u898B\u7A4D\u3082\u308A\u78BA\u8A8D\u4E2D\u3067\u3059",
        timestamp: "\u6628\u65E5",
        initial: "X",
        avatarColor: "#26a69a",
        type: "group",
        extraMembers: 1,
        folderId: "customers",
        tags: ["\u91CD\u8981"],
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "xyz1", name: "\u91D1\u7530 \u660C\u5F66", initial: "\u91D1", color: "#26a69a", role: "owner", company: "XYZ\u5546\u4E8B" },
          { id: "xyz2", name: "\u6C60\u7530 \u9EBB\u8863", initial: "\u6C60", color: "#ff9800", company: "XYZ\u5546\u4E8B" },
          { id: "xyz3", name: "\u4E09\u6D66 \u4EAE", initial: "\u4E09", color: "#26c6da", company: "XYZ\u5546\u4E8B" }
        ]
      },
      {
        id: "accounting",
        name: "\u7D4C\u7406\u90E8",
        lastMessage: "\u7D4C\u8CBB\u7CBE\u7B97\u306E\u7DE0\u5207\u306F15\u65E5\u3067\u3059",
        timestamp: "2\u65E5\u524D",
        initial: "\u7D4C",
        avatarColor: "#8d6e63",
        type: "group",
        extraMembers: 3,
        folderId: "internal",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "ac1", name: "\u5CA1\u7530 \u7D14\u5B50", initial: "\u5CA1", color: "#8d6e63", role: "owner" },
          { id: "ac2", name: "\u6749\u5C71 \u6D0B\u4ECB", initial: "\u6749", color: "#a1887f" },
          { id: "ac3", name: "\u9752\u6728 \u4F73\u5948", initial: "\u9752", color: "#bcaaa4" }
        ]
      },
      {
        id: "hayashi",
        name: "\u6797 \u5927\u8F14",
        lastMessage: "\u4E86\u89E3\u3057\u307E\u3057\u305F",
        timestamp: "2\u65E5\u524D",
        initial: "\u6797",
        avatarColor: "#5c6bc0",
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "hy", name: "\u6797 \u5927\u8F14", initial: "\u6797", color: "#5c6bc0" }
        ]
      },
      {
        id: "kyoto-branch",
        name: "\u4EAC\u90FD\u652F\u793E",
        lastMessage: "\u6765\u9031\u306E\u4F1A\u8B70\u306B\u3064\u3044\u3066",
        timestamp: "3\u65E5\u524D",
        initial: "\u4EAC",
        avatarColor: "#ab47bc",
        type: "group",
        extraMembers: 6,
        folderId: "internal",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "kt1", name: "\u897F\u5C71 \u5065\u4E8C", initial: "\u897F", color: "#ab47bc", role: "owner" },
          { id: "kt2", name: "\u5317\u5DDD \u5F69", initial: "\u5317", color: "#ef5350" },
          { id: "kt3", name: "\u658E\u85E4 \u614E", initial: "\u658E", color: "#7e57c2" }
        ]
      },
      {
        id: "ogawa",
        name: "\u5C0F\u5DDD \u5343\u6625",
        lastMessage: "\u4ECA\u5EA6\u98F2\u307F\u306B\u884C\u304D\u307E\u3057\u3087\u3046",
        timestamp: "3\u65E5\u524D",
        initial: "\u5C0F",
        avatarColor: "#ff7043",
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "og", name: "\u5C0F\u5DDD \u5343\u6625", initial: "\u5C0F", color: "#ff7043" }
        ]
      },
      {
        id: "partner-demo",
        name: "DEMO\u793E \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
        lastMessage: "\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u30C7\u30E2\u3057\u307E\u3057\u305F",
        timestamp: "4\u65E5\u524D",
        initial: "D",
        avatarColor: "#29b6f6",
        type: "group",
        extraMembers: 2,
        folderId: "customers",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "dm1", name: "\u30B8\u30E7\u30F3 \u30B9\u30DF\u30B9", initial: "J", color: "#29b6f6", role: "owner", email: "john@demo.com", company: "DEMO Inc." },
          { id: "dm2", name: "\u30A8\u30DF\u30EA\u30FC \u30EF\u30F3", initial: "E", color: "#26c6da", email: "emily@demo.com", company: "DEMO Inc." },
          { id: "dm3", name: "\u5DDD\u53E3 \u667A", initial: "\u5DDD", color: "#ff7043" }
        ]
      },
      {
        id: "ando",
        name: "\u5B89\u85E4 \u91CC\u7F8E",
        lastMessage: "\u30AB\u30EC\u30F3\u30C0\u30FC\u78BA\u8A8D\u3057\u307E\u3059",
        timestamp: "4\u65E5\u524D",
        initial: "\u5B89",
        avatarColor: "#9ccc65",
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "ad", name: "\u5B89\u85E4 \u91CC\u7F8E", initial: "\u5B89", color: "#9ccc65" }
        ]
      },
      {
        id: "hr-team",
        name: "\u4EBA\u4E8B\u90E8",
        lastMessage: "\u63A1\u7528\u9762\u63A5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB",
        timestamp: "5\u65E5\u524D",
        initial: "\u4EBA",
        avatarColor: "#ffca28",
        type: "group",
        extraMembers: 4,
        folderId: "internal",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "hr1", name: "\u85E4\u672C \u9686", initial: "\u85E4", color: "#ffca28", role: "owner" },
          { id: "hr2", name: "\u6885\u7530 \u5F69", initial: "\u6885", color: "#ec407a" },
          { id: "hr3", name: "\u5927\u5CF6 \u7FD4\u592A", initial: "\u5927", color: "#5c6bc0" }
        ]
      },
      {
        id: "mori",
        name: "\u68EE \u7D50\u8863",
        lastMessage: "\u30C7\u30FC\u30BF\u5171\u6709\u3042\u308A\u304C\u3068\u3046",
        timestamp: "1\u9031\u9593",
        initial: "\u68EE",
        avatarColor: "#ba68c8",
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "mr", name: "\u68EE \u7D50\u8863", initial: "\u68EE", color: "#ba68c8" }
        ]
      },
      {
        id: "startup-q4",
        name: "Q4 \u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7PJ",
        lastMessage: "\u30AD\u30C3\u30AF\u30AA\u30D5\u5B8C\u4E86\u3057\u307E\u3057\u305F",
        timestamp: "1\u9031\u9593",
        initial: "Q",
        avatarColor: "#4db6ac",
        type: "group",
        extraMembers: 8,
        folderId: "internal",
        tags: ["\u91CD\u8981"],
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "st1", name: "\u6E05\u6C34 \u76F4\u6A39", initial: "\u6E05", color: "#4db6ac", role: "owner" },
          { id: "st2", name: "\u6A2A\u7530 \u7F8E\u6C99", initial: "\u6A2A", color: "#ef5350" },
          { id: "st3", name: "\u5DE5\u85E4 \u54F2\u5E73", initial: "\u5DE5", color: "#42a5f5" }
        ]
      },
      {
        id: "takahashi-client",
        name: "\u9AD8\u6A4B \u6B63\u592B\u69D8 (\u682A\u5F0F\u4F1A\u793E\u30BF\u30AB\u30CF\u30B7)",
        lastMessage: "\u3054\u63D0\u6848\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
        timestamp: "2\u9031\u9593",
        initial: "\u9AD8",
        avatarColor: "#f48fb1",
        type: "direct",
        folderId: "customers",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "tkh", name: "\u9AD8\u6A4B \u6B63\u592B", initial: "\u9AD8", color: "#f48fb1", email: "takahashi@takahashi.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30BF\u30AB\u30CF\u30B7" }
        ]
      },
      {
        id: "schecon-official",
        name: "\u30B9\u30B1\u30B3\u30F3\u516C\u5F0F\u30B5\u30DD\u30FC\u30C8",
        lastMessage: "\u3054\u8CEA\u554F\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
        timestamp: "2\u9031\u9593",
        initial: "\u30B9",
        avatarColor: "#ff9800",
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          { id: "sp", name: "\u30B9\u30B1\u30B3\u30F3\u30B5\u30DD\u30FC\u30C8", initial: "\u30B9", color: "#ff9800", email: "support@schecon.com" }
        ]
      }
    ];
    this.messages = [
      {
        id: "m1",
        roomId: "timemachine",
        senderName: "\u77F3\u6FA4 \u79C0\u6B21\u90CE",
        senderInitial: "S",
        senderColor: "#ff9800",
        text: "\u300C\u3010\u30C6\u30B9\u30C8\u3055\u3093\u301160\u5206MTG\u300D\u306E\u958B\u50AC\u65E5\u304C\u6C7A\u5B9A\u3057\u307E\u3057\u305F\u3002\n\u6C7A\u5B9A\u65E5\u6642: 2026/03/09 18:00 - 19:00",
        time: "02:17",
        isMe: false,
        isPinned: true,
        pinnedAt: 17096e8,
        bookmarked: true,
        tags: ["\u91CD\u8981"],
        dateLabel: "2026\u5E743\u67085\u65E5"
      },
      {
        id: "m2",
        roomId: "timemachine",
        senderName: "\u30B7\u30B9\u30C6\u30E0",
        text: "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB\u3057\u307E\u3057\u305F",
        time: "",
        isMe: false,
        isSystem: true
      },
      {
        id: "m3",
        roomId: "timemachine",
        senderName: "\u81EA\u5206",
        text: "\u30C6\u30B9\u30C8",
        time: "14:31",
        isMe: true,
        dateLabel: "2026\u5E744\u67089\u65E5",
        reactions: [{ emoji: "\u{1F44D}", count: 1, mine: true }]
      },
      // 修正 No.44 (2026-04-24): スタンプ投稿のサンプル (絵文字のみの本文)
      {
        id: "m4-stamp",
        roomId: "timemachine",
        senderName: "\u77F3\u6FA4 \u79C0\u6B21\u90CE",
        senderInitial: "S",
        senderColor: "#ff9800",
        text: "\u{1F389}",
        time: "14:32",
        isMe: false
      },
      // 修正 No.44 (2026-04-24): 引用投稿のサンプル
      {
        id: "m5-quote",
        roomId: "timemachine",
        senderName: "\u81EA\u5206",
        text: "> \u30C6\u30B9\u30C8\n\u78BA\u8A8D\u3057\u307E\u3057\u305F\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01",
        time: "14:33",
        isMe: true
      },
      // 修正 No.44 (2026-04-24): 転送投稿のサンプル
      {
        id: "m6-forward",
        roomId: "timemachine",
        senderName: "\u77F3\u6FA4 \u79C0\u6B21\u90CE",
        senderInitial: "S",
        senderColor: "#ff9800",
        /* 修正 No.47 (2026-04-24): 転送メッセージも通常投稿と同じ表示にするためプレフィックスを除去 */
        text: "\u6765\u9031\u306EMTG\u3001\u706B\u66DC15\u6642\u304B\u3089\u3067\u8ABF\u6574\u304A\u9858\u3044\u3057\u307E\u3059\u3002",
        time: "14:34",
        isMe: false
      },
      // 修正 No.44 (2026-04-24): 返信投稿のサンプル (replyTo 付き)
      {
        id: "m7-reply",
        roomId: "timemachine",
        senderName: "\u81EA\u5206",
        text: "\u4E86\u89E3\u3057\u307E\u3057\u305F\u3001\u706B\u66DC15\u6642\u3067\u5927\u4E08\u592B\u3067\u3059 \u{1F44D}",
        time: "14:35",
        isMe: true,
        replyTo: "m6-forward"
      },
      // マイチャット 初期メッセージ（スケコンアカウントからの案内） 修正指示書 05:09
      {
        id: "mc1",
        roomId: "my-chat",
        senderName: "\u30B9\u30B1\u30B3\u30F3",
        senderInitial: "S",
        senderColor: "#ff9800",
        senderAvatar: "assets/imgs/common/schecon-favicon.png",
        text: "\u30DE\u30A4\u30C1\u30E3\u30C3\u30C8\u306B\u306F\u6700\u521D\u306B\u3084\u308C\u308B\u3053\u3068\u3092\u30C1\u30E3\u30C3\u30C8\u3067\u30B9\u30B1\u30B3\u30F3\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u304B\u3089\u3069\u3046\u305E\u3046\u3055\u308C\u3066\u307B\u3057\u3044\u3067\u3059\u3002\n\n@\u30B9\u30B1\u30B3\u30F3\n\u660E\u65E5\u306E\u4E88\u5B9A\u3092\u6559\u3048\u3066\u3068\u66F8\u3051\u3070\u3042\u306A\u305F\u306E\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u4E88\u5B9A\u3092\u6559\u3048\u3066\u304F\u308C\u307E\u3059\u3002\n\n\u3068\u3044\u3046\u306E\u3092\u6295\u7A3F\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        time: "10:00",
        isMe: false,
        isPinned: true,
        pinnedAt: 171e10,
        dateLabel: "2026\u5E743\u670810\u65E5"
      },
      {
        id: "mc2",
        roomId: "my-chat",
        senderName: "\u81EA\u5206",
        text: "@\u30B9\u30B1\u30B3\u30F3 \u660E\u65E5\u306E\u4E88\u5B9A\u3092\u6559\u3048\u3066",
        time: "10:02",
        isMe: true
      },
      {
        id: "mc3",
        roomId: "my-chat",
        senderName: "\u30B9\u30B1\u30B3\u30F3",
        senderInitial: "S",
        senderColor: "#ff9800",
        senderAvatar: "assets/imgs/common/schecon-favicon.png",
        text: "\u{1F4C5} \u660E\u65E5\uFF082026/03/11\uFF09\u306E\u4E88\u5B9A\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\uFF1A\n\u30FB09:00-10:00 \u671D\u4F1A\n\u30FB11:00-12:00 \u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC\n\u30FB14:00-15:00 \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8MTG\uFF08\u30AA\u30F3\u30E9\u30A4\u30F3\uFF09\n\u30FB16:30-17:30 1on1",
        time: "10:02",
        isMe: false
      },
      // ===== グループチャット（スケコンチャットテストグループ） =====
      {
        id: "g1",
        roomId: "test-2",
        senderName: "EPOCH",
        senderInitial: "E",
        senderColor: "#9e9e9e",
        text: "\u3086\u308B\u9818\u57DF\u306E\u591A\u69D8\u306A\u8868\u73FE\u306E\u4E2D\u304B\u3089\u6700\u9069\u89E3\u3092\u8FFD\u53CA\u3057\u3001\u9078\u629E\u3057\u3001\u5177\u73FE\u5316\u3059\u308B",
        time: "12:22",
        isMe: false,
        isPinned: true,
        pinnedAt: 1707e9,
        dateLabel: "2026\u5E742\u670810\u65E5",
        urlPreview: {
          url: "https://www.epoch-inc.jp/",
          title: "EPOCH COMPANY - \u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u96C6\u56E3",
          siteName: "epoch-inc.jp",
          imageColor: "#eceff1",
          description: "\u30D6\u30E9\u30F3\u30C9\u6226\u7565\u30FB\u30C7\u30B6\u30A4\u30F3\u30FB\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u6A2A\u65AD\u3059\u308B\u72EC\u7ACB\u7CFB\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u30B9\u30BF\u30B8\u30AA\u3002\u3086\u308B\u9818\u57DF\u306E\u591A\u69D8\u306A\u8868\u73FE\u304B\u3089\u6700\u9069\u89E3\u3092\u8FFD\u6C42\u3057\u307E\u3059\u3002",
          accentColor: "#5865f2"
        }
      },
      {
        id: "g2",
        roomId: "test-2",
        senderName: "\u81EA\u5206",
        text: "#\u30C6\u30B9\u30C8",
        time: "12:07",
        isMe: true,
        dateLabel: "2026\u5E742\u670819\u65E5",
        tags: ["\u30C6\u30B9\u30C8"]
      },
      {
        id: "g3",
        roomId: "test-2",
        senderName: "\u81EA\u5206",
        text: "#\u30C6\u30B9\u30C8\n\u7AF9\u85E4\u3055\u3093\u3044\u3044\u611F\u3058\uFF1F",
        time: "12:07",
        isMe: true,
        tags: ["\u30C6\u30B9\u30C8"]
      },
      {
        id: "g4",
        roomId: "test-2",
        senderName: "\u81EA\u5206",
        text: "",
        time: "12:08",
        isMe: true,
        attachments: [
          { name: "workflow-diagram.png", size: "1.2 MB", type: "image" },
          { name: "brand-creative.png", size: "2.8 MB", type: "image" },
          { name: "screenshot.png", size: "512 KB", type: "image" }
        ]
      },
      // ===== 100件のグループチャット会話 (プロダクト開発スクラム) =====
      ..._ChatPageComponent.generateProductSquadMessages(),
      // ===== 各ルーム ~100件の追加会話 (グループ & ダイレクト) =====
      ..._ChatPageComponent.generateThreadMessages("timemachine", "tm", [
        { name: "\u81EA\u5206", initial: "\u77F3", color: "#ff9800", isMe: true },
        { name: "\u77F3\u6FA4 \u79C0\u6B21\u90CE", initial: "S", color: "#ff9800" }
      ], _ChatPageComponent.DIRECT_BUSINESS_TEXTS, 0),
      ..._ChatPageComponent.generateThreadMessages("epoch", "ep", [
        { name: "\u81EA\u5206", initial: "\u77F3", color: "#ff9800", isMe: true },
        { name: "EPOCH \u62C5\u5F53\u8005", initial: "E", color: "#9e9e9e" }
      ], _ChatPageComponent.DIRECT_CREATIVE_TEXTS, 2),
      ..._ChatPageComponent.generateThreadMessages("test-1", "t1", [
        { name: "\u81EA\u5206", initial: "\u77F3", color: "#ff9800", isMe: true },
        { name: "K. \u30B5\u30C8\u30A6", initial: "K", color: "#5c6bc0" }
      ], _ChatPageComponent.DIRECT_CASUAL_TEXTS, 4),
      ..._ChatPageComponent.generateThreadMessages("test-2", "tg", [
        { name: "\u81EA\u5206", initial: "\u77F3", color: "#ff9800", isMe: true },
        { name: "\u5150\u7389 \u6709\u4E8B", initial: "\u5150", color: "#26a69a" },
        { name: "EPOCH", initial: "E", color: "#9e9e9e" },
        { name: "\u9234\u6728 \u6B21\u90CE", initial: "\u9234", color: "#ef5350" }
      ], _ChatPageComponent.GROUP_INTERNAL_TEXTS, 1),
      ..._ChatPageComponent.generateThreadMessages("ishizawa-chat", "ig", [
        { name: "\u81EA\u5206", initial: "\u77F3", color: "#ff9800", isMe: true },
        { name: "\u77F3\u6FA4 \u4E8C\u90CE", initial: "\u77F3", color: "#ff7043" }
      ], _ChatPageComponent.GROUP_INTERNAL_TEXTS, 3)
    ];
    this.contacts = this.generateMockContacts();
    this.mediaItems = [
      // --- ダミー画像 (local SVG thumbnail + Lorem Picsum full) ---
      {
        id: "md-img-1",
        type: "image",
        name: "sample-landscape-01.jpg",
        size: "420 KB",
        date: "2026/04/26",
        thumbnail: "assets/dummy/photo-1.svg",
        sourceUrl: "assets/dummy/photo-1.svg"
      },
      {
        id: "md-img-2",
        type: "image",
        name: "sample-cityscape-02.jpg",
        size: "358 KB",
        date: "2026/04/25",
        thumbnail: "assets/dummy/photo-2.svg",
        sourceUrl: "assets/dummy/photo-2.svg"
      },
      {
        id: "md-img-3",
        type: "image",
        name: "sample-portrait-03.jpg",
        size: "512 KB",
        date: "2026/04/24",
        thumbnail: "assets/dummy/photo-3.svg",
        sourceUrl: "assets/dummy/photo-3.svg"
      },
      // --- ダミー動画 (local poster + 信頼性の高い公開 CDN sample) ---
      /* fix (2026-04-29): 動画再生不具合の修正。
         旧: Google commondatastorage URLs (CORS / 帯域不安定で iOS Safari/Android Chrome
              から再生失敗するケースがあった)
         新: W3.org 公式 + Mux / Pexels の小サイズ MP4 (10秒〜1分) に切替.
              すべて public domain, CORS 許可, mp4/h264 で iOS Safari 互換. */
      {
        id: "md-vid-1",
        type: "video",
        name: "BigBuckBunny.mp4",
        size: "1.2 MB",
        date: "2026/04/23",
        thumbnail: "assets/dummy/video-1-poster.svg",
        sourceUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
      },
      {
        id: "md-vid-2",
        type: "video",
        name: "SintelTrailer.mp4",
        size: "5.2 MB",
        date: "2026/04/22",
        thumbnail: "assets/dummy/video-2-poster.svg",
        sourceUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4"
      },
      {
        id: "md-vid-3",
        type: "video",
        name: "BBBTrailer.mp4",
        size: "1.5 MB",
        date: "2026/04/21",
        thumbnail: "assets/dummy/video-3-poster.svg",
        sourceUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4"
      },
      // --- 既存ダミー (互換) ---
      { id: "md1", type: "image", name: "meeting-notes.png", size: "234 KB", date: "2026/03/09", thumbnail: "#ffecb3" },
      { id: "md2", type: "image", name: "calendar-screenshot.jpg", size: "512 KB", date: "2026/03/08", thumbnail: "#c8e6c9" },
      { id: "md3", type: "image", name: "whiteboard.png", size: "1.2 MB", date: "2026/03/05", thumbnail: "#bbdefb" },
      { id: "md4", type: "video", name: "demo.mp4", size: "18.4 MB", date: "2026/03/04", thumbnail: "#f8bbd0" },
      { id: "md5", type: "file", name: "\u8B70\u4E8B\u9332_20260309.pdf", size: "89 KB", date: "2026/03/09" },
      { id: "md6", type: "file", name: "\u898B\u7A4D\u66F8.xlsx", size: "45 KB", date: "2026/03/07" },
      { id: "md7", type: "file", name: "\u5951\u7D04\u66F8.docx", size: "128 KB", date: "2026/03/01" }
    ];
    this.availableTags = [
      { id: "t1", label: "\u91CD\u8981", color: "#e53935", count: 12 },
      { id: "t2", label: "\u55B6\u696D", color: "#1e88e5", count: 8 },
      { id: "t3", label: "\u30D5\u30A9\u30ED\u30FC", color: "#43a047", count: 5 },
      { id: "t4", label: "\u672A\u5B8C\u4E86", color: "#fb8c00", count: 3 },
      { id: "t5", label: "\u6C7A\u5B9A\u4E8B\u9805", color: "#8e24aa", count: 7 }
    ];
    this.emojis = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F602}", "\u{1F62E}", "\u{1F622}", "\u{1F64F}", "\u{1F389}", "\u{1F525}", "\u2705", "\u274C"];
    this.quickReactionEmojis = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F602}", "\u{1F62E}", "\u{1F389}", "\u{1F64F}"];
    this.quickAiTemplates = [
      { id: "greeting", label: "\u3042\u3044\u3055\u3064", prompt: "\u30D3\u30B8\u30CD\u30B9\u5411\u3051\u306E\u4E01\u5BE7\u306A\u3042\u3044\u3055\u3064\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044" },
      { id: "schedule", label: "\u65E5\u7A0B\u8ABF\u6574", prompt: "\u6253\u3061\u5408\u308F\u305B\u306E\u65E5\u7A0B\u8ABF\u6574\u3092\u4F9D\u983C\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044" },
      { id: "followup", label: "\u30D5\u30A9\u30ED\u30FC\u30A2\u30C3\u30D7", prompt: "\u524D\u56DE\u306E\u5546\u8AC7\u306E\u30D5\u30A9\u30ED\u30FC\u30A2\u30C3\u30D7\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044" },
      { id: "thanks", label: "\u304A\u793C", prompt: "\u304A\u6642\u9593\u3092\u3044\u305F\u3060\u3044\u305F\u3053\u3068\u3078\u306E\u304A\u793C\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044" },
      { id: "apology", label: "\u304A\u8A6B\u3073", prompt: "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u5909\u66F4\u306E\u304A\u8A6B\u3073\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044" }
    ];
    this.mentionCandidates = [];
    this.mentionActiveIndex = 0;
    this.tagCandidates = [];
    this.selectedRoomId = "timemachine";
    this.activeTagFilter = null;
    this.pickerExpandedFolders = /* @__PURE__ */ new Set();
    this.scheduledMessagesForRoom = [];
    this.showScheduledList = false;
    this.scheduledSubs = [];
    this.syncUrlTimer = null;
    this.searchToastTimer = null;
    this.dragFolderId = null;
    this.dragRoomId = null;
    this.dropIndicatorFolderId = null;
    this.dropIndicatorRoomId = null;
    this.memberSearchTerm = "";
    this.showAddMemberModal = false;
    this.addMemberSearchTerm = "";
    this.addMemberSelectedIds = [];
    this.inputOgpPreview = null;
    this.inputOgpLastUrl = "";
    this.inputOgpTimer = null;
    this.inputOgpLoading = false;
    this.showForwardModal = false;
    this.forwardingMessage = null;
    this.forwardTargetRoomIds = /* @__PURE__ */ new Set();
    this.forwardSearchQuery = "";
    this.showTagCreateForm = false;
    this.newTagLabel = "";
    this.newTagColor = "#e53935";
    this.tagColorPalette = ["#e53935", "#1e88e5", "#43a047", "#fb8c00", "#8e24aa", "#00897b", "#6d4c41", "#d81b60"];
    this.showNewTagConfirmModal = false;
    this.pendingNewTagConfirm = null;
    this.rightPanelView = "menu";
    this.threadSearchQuery = "";
    this.threadSearchResults = [];
    this.lastHighlightedEl = null;
    this.showMediaCarousel = false;
    this.mediaCarouselItems = [];
    this.mediaCarouselIndex = 0;
    this.carouselTouchStartX = null;
    this.carouselTouchStartY = null;
    this.pinchStartDist = 0;
    this.pinchStartZoom = 1;
    this.vvHandler = null;
    this.inputFocusHandler = null;
    this.headerHidden = false;
    this.pinnedHidden = false;
    this.lastScrollTop = 0;
    this.scrollThreshold = 4;
    this.scrollListenerBound = null;
    this.listScrollListener = null;
    this.lastListScrollTop = 0;
    this.listCollapsed = false;
    this.blockedRoomIds = /* @__PURE__ */ new Set();
    this.readRoomIds = /* @__PURE__ */ new Set();
    this.DRAFT_STORAGE_KEY = "schecon_chat_drafts_v1";
    this.draftSaveTimer = null;
    this.copiedEmailAddress = null;
    this.showScheduleModal = false;
    this.lightboxSource = null;
    this.lightboxTouchStartX = 0;
    this.lightboxTouchStartY = 0;
    this.lightboxIsPinching = false;
    this.bubbleLongPressTimer = null;
    this.bubbleTouchStartY = null;
    this.reminderTimerStarted = false;
  }
  ngOnInit() {
    this.titleService.setTitle('\u30C1\u30E3\u30C3\u30C8 | \u65E5\u7A0B\u8ABF\u6574\u30C4\u30FC\u30EB"\u30B9\u30B1\u30B3\u30F3"');
    setTimeout(() => {
      document.querySelectorAll(".chat-room__input--hidden").forEach((el) => {
        el.classList.remove("chat-room__input--hidden");
      });
    }, 0);
    this.rooms = this.rooms.map((r) => {
      if (r.type !== "group")
        return r;
      const realMembers = r.members?.length || 0;
      if (realMembers < 3) {
        const _a = r, { extraMembers, inviteLink, description } = _a, rest = __objRest(_a, ["extraMembers", "inviteLink", "description"]);
        return __spreadProps(__spreadValues({}, rest), { type: "direct" });
      }
      return r;
    });
    this.loadPersistedAvatars();
    this.loadPersistedBlocks();
    this.loadPersistedReads();
    this.loadPersistedFolders();
    this.loadPersistedRoomFolders();
    this.loadPersistedDraft();
    this.hydratePersistedMessagesIntoSeed();
    this.mergeSharedUserRooms();
    this.ensureAllRoomsHaveUpdatedAt();
    this.chatState.getAllMessages$().subscribe(() => {
      this.cdr.markForCheck();
      this.scheduleScrollToBottom();
      this.forceScrollToBottom(6);
    });
    this.chatState.getUserRooms().subscribe(() => {
      this.cdr.markForCheck();
    });
    this.chatState.getGateway().on("thread.created").subscribe(({ room }) => {
      if (this.rooms.some((r) => r.id === room.id))
        return;
      const newRoom = {
        id: room.id,
        name: room.name,
        lastMessage: room.lastMessage || "",
        timestamp: room.timestamp || "",
        initial: room.initial,
        avatarColor: room.avatarColor,
        avatarImage: room.avatarImage,
        type: room.type,
        unreadCount: room.unreadCount || 0,
        updatedAt: room.updatedAt || Date.now()
      };
      this.rooms = [newRoom, ...this.rooms];
      this.cdr.markForCheck();
    });
    this.chatState.getGateway().on("thread.updated").subscribe(({ roomId, patch }) => {
      if (!this.rooms.some((r) => r.id === roomId))
        return;
      this.rooms = this.rooms.map((r) => r.id === roomId ? __spreadValues(__spreadValues({}, r), patch) : r);
      this.cdr.markForCheck();
    });
    this.chatState.getGateway().on("message.created").subscribe(({ roomId, message }) => {
      if (this.messages.some((m) => m.id === message.id))
        return;
      this.messages = [
        ...this.messages,
        {
          id: message.id,
          roomId,
          senderName: message.senderName || (message.isMe ? "\u81EA\u5206" : "\u76F8\u624B"),
          text: message.text,
          time: message.time,
          isMe: message.isMe
        }
      ];
      const snippet = (message.text || "").replace(/\s+/g, " ").slice(0, 60);
      this.rooms = this.rooms.map((r) => r.id === roomId ? __spreadProps(__spreadValues({}, r), { lastMessage: snippet, timestamp: message.time, updatedAt: Date.now() }) : r);
      if (roomId === this.selectedRoomId) {
        this.scheduleScrollToBottom();
        this.forceScrollToBottom(6);
      }
      this.cdr.markForCheck();
    });
    this.chatState.getGateway().on("unread.updated").subscribe(({ roomId, unreadCount }) => {
      if (!this.rooms.some((r) => r.id === roomId))
        return;
      this.rooms = this.rooms.map((r) => r.id === roomId ? __spreadProps(__spreadValues({}, r), { unreadCount }) : r);
      this.cdr.markForCheck();
    });
    this.updateMobilePane();
    this.scheduleScrollToBottom();
    this.startReminderTimer();
    this.checkDueReminders();
    this.setupVisualViewportHandler();
    setTimeout(() => this.setupScrollHandler(), 500);
    this.route.paramMap.subscribe((params) => {
      const roomId = params.get("roomId");
      if (roomId && this.rooms.some((r) => r.id === roomId)) {
        this.selectedRoomId = roomId;
        if (this.isMobile)
          this.mobilePane = "room";
        this.loadDraftForRoom(roomId);
        this.markRoomAsRead(roomId);
        this.refreshScheduledForCurrentRoom();
        this.showScheduledList = false;
        this.scheduleScrollToBottom();
        const hash = window.location.hash;
        if (hash && hash.startsWith("#msg-")) {
          const msgId = hash.slice(5);
          setTimeout(() => this.scrollToMessage(msgId), 300);
        }
      }
      this.cdr.markForCheck();
    });
    this.route.queryParamMap.subscribe((q) => {
      const f = q.get("filter");
      if (f && ["all", "folder", "direct", "group", "unread"].includes(f)) {
        this.activeFilter = f;
      }
      const search = q.get("q");
      if (search !== null)
        this.searchQuery = search;
      const mq = q.get("mq");
      if (mq !== null) {
        this.messageSearchQuery = mq;
        if (mq && !this.showMessageSearch) {
          this.showMessageSearch = true;
        }
      }
      this.cdr.markForCheck();
    });
    this.wireScheduledMessages();
  }
  /* 修正 No.55 (2026-04-24): 予約投稿機能 - サービス購読の配線 */
  wireScheduledMessages() {
    this.scheduledSubs.push(this.scheduledMessages.getForRoom$(this.selectedRoomId).subscribe((list) => {
      this.scheduledMessagesForRoom = list;
      this.cdr.markForCheck();
    }));
    this.scheduledSubs.push(this.scheduledMessages.dueMessage$().subscribe((msg) => {
      this.dispatchScheduledMessage(msg);
    }));
    this.scheduledSubs.push(this.scheduledMessages.catchUpCount$().subscribe((count) => {
      if (count > 0) {
        this.showToast(`${count} \u4EF6\u306E\u4E88\u7D04\u6295\u7A3F\u3092\u307E\u3068\u3081\u3066\u9001\u4FE1\u3057\u307E\u3057\u305F`);
      }
    }));
  }
  /* 修正 No.55 (2026-04-24): 予約投稿機能 - ルーム切替時に一覧を更新 */
  refreshScheduledForCurrentRoom() {
    this.scheduledMessagesForRoom = this.scheduledMessages.getForRoom(this.selectedRoomId);
    this.cdr.markForCheck();
  }
  onResize() {
    this.updateMobilePane();
  }
  updateMobilePane() {
    if (window.innerWidth > 768) {
      this.mobilePane = "list";
    }
  }
  syncUrl(debounce = 0) {
    if (this.syncUrlTimer)
      clearTimeout(this.syncUrlTimer);
    const run = () => {
      const includeRoomId = this.selectedRoomId && (!this.isMobile || this.mobilePane === "room");
      const commands = includeRoomId ? ["/chat", this.selectedRoomId] : ["/chat"];
      const queryParams = {
        filter: this.activeFilter !== "all" ? this.activeFilter : null,
        q: this.searchQuery || null,
        mq: this.messageSearchQuery || null
      };
      this.router.navigate(commands, { queryParams, queryParamsHandling: "merge", replaceUrl: true });
    };
    if (debounce > 0)
      this.syncUrlTimer = setTimeout(run, debounce);
    else
      run();
  }
  onSearchQueryChange() {
    this.syncUrl(250);
    if (this.searchToastTimer)
      clearTimeout(this.searchToastTimer);
    this.searchToastTimer = setTimeout(() => {
      const q = this.searchQuery.trim();
      if (!q)
        return;
      const count = this.filteredRooms.length;
      this.showToast(count > 0 ? `${count} \u4EF6\u306E\u30C1\u30E3\u30C3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u3057\u305F` : "\u8A72\u5F53\u3059\u308B\u30C1\u30E3\u30C3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093");
    }, 600);
  }
  onMessageSearchChange() {
    this.syncUrl(250);
  }
  // Folder accordion
  toggleFolder(folderId) {
    if (this.expandedFolders.has(folderId))
      this.expandedFolders.delete(folderId);
    else
      this.expandedFolders.add(folderId);
    this.expandedFolders = new Set(this.expandedFolders);
  }
  isFolderExpanded(folderId) {
    return this.expandedFolders.has(folderId);
  }
  // Mobile navigation
  showList() {
    this.mobilePane = "list";
    this.syncUrl();
  }
  /** 保持した selectedRoomId のルームに再入室 (モバイル専用) */
  reopenSelectedRoom() {
    if (this.selectedRoomId && this.rooms.some((r) => r.id === this.selectedRoomId)) {
      this.mobilePane = "room";
      this.cdr.markForCheck();
    }
  }
  /** モバイルかどうか */
  get isMobile() {
    return typeof window !== "undefined" && window.innerWidth <= 768;
  }
  /** ブラウザバック対応: popstate で戻る動作を制御 */
  onPopState() {
    if (!this.isMobile)
      return;
    if (this.showMessageMenu) {
      this.showMessageMenu = false;
      this.cdr.markForCheck();
      return;
    }
    if (this.showAvatarCropModal) {
      this.showAvatarCropModal = false;
      this.cdr.markForCheck();
      return;
    }
    if (this.showNewChatModal || this.showMemberListModal || this.showAddMemberModal || this.showBookmarksModal || this.showTagsModal || this.showMediaModal || this.showAiModal || this.showAttachModal || this.showTaskCreateModal || this.showTaskListModal || this.showLightbox || this.showMediaCarousel || this.showScheduleModal || this.showFolderCreateModal || this.showFolderRenameModal || this.showFolderAddToModal || this.showEmojiPopup) {
      this.closeAllModals();
      this.cdr.markForCheck();
      return;
    }
    if (this.showDetailPanel && this.rightPanelView !== "menu") {
      if (this.rightPanelView === "leave-confirm" || this.rightPanelView === "block-confirm") {
        this.rightPanelView = "members";
      } else {
        this.rightPanelView = "menu";
      }
      this.cdr.markForCheck();
      return;
    }
    if (this.showDetailPanel) {
      this.showDetailPanel = false;
      this.cdr.markForCheck();
      return;
    }
    if (this.mobilePane === "room") {
      this.mobilePane = "list";
      this.selectedRoomId = "";
      this.cdr.markForCheck();
      return;
    }
  }
  onEscape() {
    this.closeAllModals();
  }
  onArrowLeft() {
    if (this.showLightbox)
      this.lightboxPrev();
  }
  onArrowRight() {
    if (this.showLightbox)
      this.lightboxNext();
  }
  onDocumentClick() {
    if (this.showMessageMenu) {
      this.showMessageMenu = false;
      this.cdr.markForCheck();
    }
    if (this.showMobileHeaderMenu) {
      this.showMobileHeaderMenu = false;
      this.cdr.markForCheck();
    }
    if (this.showMobileInfoMenu) {
      this.showMobileInfoMenu = false;
      this.cdr.markForCheck();
    }
    if (this.showInputMenu) {
      this.showInputMenu = false;
      this.cdr.markForCheck();
    }
  }
  onDocumentDragMove(event) {
    if (this.avatarCropDragging)
      this.onCropDragMove(event);
  }
  onDocumentDragEnd() {
    if (this.avatarCropDragging)
      this.onCropDragEnd();
  }
  closeAllModals() {
    this.showNewChatModal = false;
    this.showBookmarksModal = false;
    this.showTagsModal = false;
    this.showMediaModal = false;
    this.showProfileModal = false;
    this.showBlockConfirmModal = false;
    this.showAiModal = false;
    this.showAttachModal = false;
    this.showFolderModal = false;
    this.showFolderCreateModal = false;
    this.showFolderRenameModal = false;
    this.showFolderAddToModal = false;
    this.folderAddToTarget = null;
    this.showInlineNewFolderInput = false;
    this.inlineNewFolderName = "";
    this.inlineNewFolderParentId = null;
    this.showMemberListModal = false;
    this.showLeaveConfirmModal = false;
    this.showRenameGroupModal = false;
    this.showTaskCreateModal = false;
    this.showTaskListModal = false;
    this.showLightbox = false;
    this.showMediaCarousel = false;
    this.memberListMenuTarget = null;
    this.showMessageMenu = false;
    this.showMentionPopup = false;
    this.showTagPopup = false;
    this.showEmojiPopup = false;
    this.cdr.markForCheck();
  }
  setFilter(filter) {
    this.activeFilter = filter;
    this.syncUrl();
  }
  // ====== Toast ======
  showToast(message) {
    this.toastMessage = message;
    this.toastVisible = true;
    setTimeout(() => {
      this.toastVisible = false;
      this.cdr.markForCheck();
    }, 2400);
  }
  // ====== Folders ======
  openFolderCreateModal() {
    this.newFolderName = "";
    this.newFolderParentId = null;
    this.newFolderUseParent = false;
    this.showFolderCreateModal = true;
  }
  createFolder() {
    const name = this.newFolderName.trim();
    if (!name)
      return;
    const id = "folder-" + Date.now();
    this.folders = [
      ...this.folders,
      { id, name, icon: "folder", parentId: this.newFolderUseParent ? this.newFolderParentId || void 0 : void 0 }
    ];
    this.showFolderCreateModal = false;
    this.persistFolders();
    this.showToast(`\u30D5\u30A9\u30EB\u30C0\u300C${name}\u300D\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F`);
  }
  renameFolder(folder) {
    this.folderRenameTarget = folder;
    this.folderRenameInput = folder.name;
    this.showFolderRenameModal = true;
  }
  confirmRenameFolder() {
    const next = this.folderRenameInput.trim();
    if (!next || !this.folderRenameTarget)
      return;
    const id = this.folderRenameTarget.id;
    this.folders = this.folders.map((f) => f.id === id ? __spreadProps(__spreadValues({}, f), { name: next }) : f);
    this.showFolderRenameModal = false;
    this.folderRenameTarget = null;
    this.folderRenameInput = "";
    this.persistFolders();
    this.showToast("\u30D5\u30A9\u30EB\u30C0\u540D\u3092\u5909\u66F4\u3057\u307E\u3057\u305F");
  }
  /* 修正 No.53 (2026-04-24): 独自 confirm モーダル化 */
  deleteFolder(folder) {
    return __async(this, null, function* () {
      if (folder.system) {
        this.showToast("\u30B7\u30B9\u30C6\u30E0\u30D5\u30A9\u30EB\u30C0\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093");
        return;
      }
      const count = this.getRoomsInFolder(folder.id).length;
      if (count > 0) {
        this.showToast("\u7A7A\u306E\u30D5\u30A9\u30EB\u30C0\u306E\u307F\u524A\u9664\u3067\u304D\u307E\u3059");
        return;
      }
      const ok = yield this.confirmDialog.confirm({
        title: "\u30D5\u30A9\u30EB\u30C0\u306E\u524A\u9664",
        message: `\u30D5\u30A9\u30EB\u30C0\u300C${folder.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`,
        confirmText: "\u524A\u9664",
        danger: true
      });
      if (!ok)
        return;
      this.folders = this.folders.filter((f) => f.id !== folder.id);
      this.persistFolders();
      this.showToast("\u30D5\u30A9\u30EB\u30C0\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
    });
  }
  openAddToFolderModal(room, event) {
    event?.stopPropagation();
    if (room.type === "my")
      return;
    this.folderAddToTarget = room;
    this.showFolderAddToModal = true;
    this.showInlineNewFolderInput = false;
    this.inlineNewFolderName = "";
    this.inlineNewFolderParentId = null;
  }
  toggleInlineNewFolderInput() {
    this.showInlineNewFolderInput = !this.showInlineNewFolderInput;
    if (!this.showInlineNewFolderInput) {
      this.inlineNewFolderName = "";
      this.inlineNewFolderParentId = null;
    }
  }
  submitInlineNewFolder() {
    if (!this.inlineNewFolderName.trim())
      return;
    this.createFolderFromAddModal(this.inlineNewFolderName, this.inlineNewFolderParentId);
    this.inlineNewFolderName = "";
    this.inlineNewFolderParentId = null;
    this.showInlineNewFolderInput = false;
  }
  /** モーダルを完全に閉じる (完了ボタン用) */
  closeFolderAddToModal() {
    this.showFolderAddToModal = false;
    this.folderAddToTarget = null;
    this.showInlineNewFolderInput = false;
    this.inlineNewFolderName = "";
    this.inlineNewFolderParentId = null;
  }
  /**
   * フォルダ選択モーダルでフォルダをトグル（複数フォルダ対応）
   * folderId === null の場合は全フォルダから外す
   */
  toggleRoomFolder(folderId) {
    if (!this.folderAddToTarget)
      return;
    if (folderId === "favorites" && this.folderAddToTarget.type === "my") {
      this.showToast("\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9\u306F\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0\u3067\u304D\u307E\u305B\u3093");
      return;
    }
    const id = this.folderAddToTarget.id;
    const cur = this.getRoomFolderIds(this.folderAddToTarget);
    const isInFolder = cur.includes(folderId);
    const next = isInFolder ? cur.filter((fid) => fid !== folderId) : [...cur, folderId];
    this.rooms = this.rooms.map((r) => {
      if (r.id !== id)
        return r;
      const updated = __spreadProps(__spreadValues({}, r), {
        folderIds: next,
        // legacy folderId は先頭値で同期
        folderId: next[0] || void 0
      });
      if (folderId === "favorites") {
        updated.starred = !isInFolder ? true : next.includes("favorites") || r.starred === true;
        if (isInFolder)
          updated.starred = false;
      }
      return updated;
    });
    const updatedTarget = this.rooms.find((r) => r.id === id);
    if (updatedTarget)
      this.folderAddToTarget = updatedTarget;
    this.persistRoomFolders();
    this.showToast(isInFolder ? "\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u5916\u3057\u307E\u3057\u305F" : "\u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F");
  }
  /** 全フォルダから外す */
  clearRoomFolders() {
    if (!this.folderAddToTarget)
      return;
    const id = this.folderAddToTarget.id;
    this.rooms = this.rooms.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { folderIds: [], folderId: void 0, starred: false }) : r);
    const updatedTarget = this.rooms.find((r) => r.id === id);
    if (updatedTarget)
      this.folderAddToTarget = updatedTarget;
    this.persistRoomFolders();
    this.showToast("\u3059\u3079\u3066\u306E\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u5916\u3057\u307E\u3057\u305F");
  }
  /** フォルダ選択モーダル内から新規フォルダを作成して即時その配下に追加 */
  createFolderFromAddModal(name, parentId) {
    const trimmed = name.trim();
    if (!trimmed)
      return;
    const id = "folder-" + Date.now();
    this.folders = [
      ...this.folders,
      { id, name: trimmed, icon: "folder", parentId: parentId || void 0 }
    ];
    if (parentId)
      this.expandedFolders.add(parentId);
    if (this.folderAddToTarget) {
      const roomId = this.folderAddToTarget.id;
      this.rooms = this.rooms.map((r) => {
        if (r.id !== roomId)
          return r;
        const cur = this.getRoomFolderIds(r);
        const next = [...cur, id];
        return __spreadProps(__spreadValues({}, r), { folderIds: next, folderId: next[0] });
      });
      const updatedTarget = this.rooms.find((r) => r.id === roomId);
      if (updatedTarget)
        this.folderAddToTarget = updatedTarget;
    }
    this.persistFolders();
    this.persistRoomFolders();
    this.showToast(`\u30D5\u30A9\u30EB\u30C0\u300C${trimmed}\u300D\u3092\u4F5C\u6210\u3057\u3001\u8FFD\u52A0\u3057\u307E\u3057\u305F`);
  }
  // ==================================================================
  // フォルダ一括管理 (ユーザー指示 2026-04-21): 1つのフォルダに複数のチャット
  // ルームを同時に追加/削除できるモーダル
  // ==================================================================
  openFolderBulkManageModal(folder, event) {
    event?.stopPropagation();
    if (folder.system)
      return;
    this.folderBulkManageTarget = folder;
    this.folderBulkSearchQuery = "";
    this.showFolderBulkManageModal = true;
  }
  closeFolderBulkManageModal() {
    this.showFolderBulkManageModal = false;
    this.folderBulkManageTarget = null;
    this.folderBulkSearchQuery = "";
  }
  /** このフォルダへの所属状態をトグル。チェックで追加、外すで削除 */
  toggleRoomInBulkFolder(roomId) {
    if (!this.folderBulkManageTarget)
      return;
    const folderId = this.folderBulkManageTarget.id;
    this.rooms = this.rooms.map((r) => {
      if (r.id !== roomId)
        return r;
      const cur = this.getRoomFolderIds(r);
      const isIn = cur.includes(folderId);
      const next = isIn ? cur.filter((fid) => fid !== folderId) : [...cur, folderId];
      const updated = __spreadProps(__spreadValues({}, r), {
        folderIds: next,
        folderId: next[0] || void 0
      });
      return updated;
    });
  }
  /** 選択可能な (マイチャットと system 除外の) ルーム一覧をフィルタ適用で返す */
  get bulkFilteredRooms() {
    const q = this.folderBulkSearchQuery.trim().toLowerCase();
    return this.rooms.filter((r) => {
      if (r.type === "my")
        return false;
      if (!q)
        return true;
      return (r.name || "").toLowerCase().includes(q);
    });
  }
  /** このフォルダに所属している件数 */
  get bulkCurrentCount() {
    if (!this.folderBulkManageTarget)
      return 0;
    const fid = this.folderBulkManageTarget.id;
    return this.rooms.filter((r) => this.getRoomFolderIds(r).includes(fid)).length;
  }
  isRoomInBulkFolder(room) {
    if (!this.folderBulkManageTarget)
      return false;
    return this.getRoomFolderIds(room).includes(this.folderBulkManageTarget.id);
  }
  /** 一括操作: 検索条件に一致する全ルームを追加 or 一括で外す */
  bulkAddAllFiltered() {
    if (!this.folderBulkManageTarget)
      return;
    const folderId = this.folderBulkManageTarget.id;
    const targetIds = new Set(this.bulkFilteredRooms.map((r) => r.id));
    this.rooms = this.rooms.map((r) => {
      if (!targetIds.has(r.id))
        return r;
      const cur = this.getRoomFolderIds(r);
      if (cur.includes(folderId))
        return r;
      const next = [...cur, folderId];
      return __spreadProps(__spreadValues({}, r), { folderIds: next, folderId: next[0] });
    });
    this.showToast(`${targetIds.size}\u4EF6\u3092\u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`);
  }
  bulkRemoveAllFiltered() {
    if (!this.folderBulkManageTarget)
      return;
    const folderId = this.folderBulkManageTarget.id;
    const targetIds = new Set(this.bulkFilteredRooms.map((r) => r.id));
    let count = 0;
    this.rooms = this.rooms.map((r) => {
      if (!targetIds.has(r.id))
        return r;
      const cur = this.getRoomFolderIds(r);
      if (!cur.includes(folderId))
        return r;
      count++;
      const next = cur.filter((fid) => fid !== folderId);
      return __spreadProps(__spreadValues({}, r), { folderIds: next, folderId: next[0] });
    });
    if (count > 0)
      this.showToast(`${count}\u4EF6\u3092\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u5916\u3057\u307E\u3057\u305F`);
  }
  removeRoomFromFolder(roomId, event) {
    event.stopPropagation();
    const room = this.rooms.find((r) => r.id === roomId);
    if (!room)
      return;
    const cur = this.getRoomFolderIds(room);
    if (!cur.length)
      return;
    this.rooms = this.rooms.map((r) => r.id === roomId ? __spreadProps(__spreadValues({}, r), { folderIds: [], folderId: void 0, starred: cur.includes("favorites") ? false : r.starred }) : r);
    this.showToast("\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u5916\u3057\u307E\u3057\u305F");
  }
  onFolderDragStart(event, folderId) {
    this.dragFolderId = folderId;
    event.dataTransfer?.setData("text/plain", folderId);
    if (event.dataTransfer)
      event.dataTransfer.effectAllowed = "move";
  }
  onFolderDragOver(event, targetId) {
    event.preventDefault();
    if (event.dataTransfer)
      event.dataTransfer.dropEffect = "move";
    if (targetId)
      this.dropIndicatorFolderId = targetId;
  }
  onFolderDragLeave() {
    this.dropIndicatorFolderId = null;
  }
  onFolderDrop(event, targetId) {
    event.preventDefault();
    event.stopPropagation();
    const draggedRoomId = this.dragRoomId;
    const draggedFolderId = this.dragFolderId;
    this.dragFolderId = null;
    this.dragRoomId = null;
    this.dropIndicatorFolderId = null;
    const tgtFolder = this.folders.find((f) => f.id === targetId);
    if (!tgtFolder)
      return;
    if (draggedRoomId) {
      const room = this.rooms.find((r) => r.id === draggedRoomId);
      if (!room || room.type === "my")
        return;
      if (this.isRoomInFolder(room, targetId))
        return;
      this.rooms = this.rooms.map((r) => {
        if (r.id !== draggedRoomId)
          return r;
        const cur = this.getRoomFolderIds(r);
        const next = [...cur, targetId];
        return __spreadProps(__spreadValues({}, r), {
          folderIds: next,
          folderId: next[0],
          starred: targetId === "favorites" ? true : r.starred
        });
      });
      this.expandedFolders.add(targetId);
      this.showToast(`\u300C${tgtFolder.name}\u300D\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`);
      return;
    }
    if (!draggedFolderId || draggedFolderId === targetId)
      return;
    const srcFolder = this.folders.find((f) => f.id === draggedFolderId);
    if (!srcFolder || srcFolder.system || tgtFolder.system)
      return;
    if (this.isDescendantFolder(targetId, draggedFolderId)) {
      this.showToast("\u5FAA\u74B0\u53C2\u7167\u306B\u306A\u308B\u305F\u3081\u79FB\u52D5\u3067\u304D\u307E\u305B\u3093");
      return;
    }
    if (srcFolder.parentId !== targetId) {
      this.folders = this.folders.map((f) => f.id === draggedFolderId ? __spreadProps(__spreadValues({}, f), { parentId: targetId }) : f);
      this.expandedFolders.add(targetId);
      this.showToast(`\u300C${tgtFolder.name}\u300D\u306E\u4E2D\u306B\u79FB\u52D5\u3057\u307E\u3057\u305F`);
      return;
    }
    const list = [...this.folders];
    const srcIdx = list.findIndex((f) => f.id === draggedFolderId);
    const tgtIdx = list.findIndex((f) => f.id === targetId);
    if (srcIdx < 0 || tgtIdx < 0)
      return;
    const [moved] = list.splice(srcIdx, 1);
    list.splice(tgtIdx, 0, moved);
    this.folders = list;
    this.showToast("\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u9806\u756A\u3092\u5909\u66F4\u3057\u307E\u3057\u305F");
  }
  /** folderId が ancestorId の子孫かを判定（循環参照防止用） */
  isDescendantFolder(folderId, ancestorId) {
    let cur = this.folders.find((f) => f.id === folderId);
    while (cur?.parentId) {
      if (cur.parentId === ancestorId)
        return true;
      cur = this.folders.find((f) => f.id === cur.parentId);
    }
    return false;
  }
  onRoomDragStart(event, roomId) {
    this.dragRoomId = roomId;
    event.dataTransfer?.setData("text/plain", roomId);
    if (event.dataTransfer)
      event.dataTransfer.effectAllowed = "move";
    event.stopPropagation();
  }
  onRoomDragOver(event, targetRoomId) {
    event.preventDefault();
    event.stopPropagation();
    if (targetRoomId)
      this.dropIndicatorRoomId = targetRoomId;
  }
  onRoomDragLeave() {
    this.dropIndicatorRoomId = null;
  }
  onRoomDrop(event, targetRoomId) {
    event.preventDefault();
    event.stopPropagation();
    const src = this.dragRoomId;
    this.dragRoomId = null;
    this.dropIndicatorRoomId = null;
    if (!src || src === targetRoomId)
      return;
    const list = [...this.rooms];
    const srcIdx = list.findIndex((r) => r.id === src);
    const tgtIdx = list.findIndex((r) => r.id === targetRoomId);
    if (srcIdx < 0 || tgtIdx < 0)
      return;
    const [moved] = list.splice(srcIdx, 1);
    list.splice(tgtIdx, 0, moved);
    this.rooms = list;
    this.showToast("\u4E26\u3073\u9806\u3092\u5909\u66F4\u3057\u307E\u3057\u305F");
  }
  // ====== Group: member list / invite / leave / rename ======
  openMemberListModal() {
    this.showDetailPanel = true;
    this.rightPanelView = "members";
    this.cdr.markForCheck();
  }
  openMemberListMenu(event, member) {
    event.preventDefault();
    event.stopPropagation();
    this.memberListMenuTarget = member;
    const btn = event.currentTarget || event.target;
    const rect = btn?.getBoundingClientRect?.();
    const menuWidth = 220;
    if (rect) {
      const left = Math.max(8, rect.right - menuWidth);
      const top = rect.bottom + 4;
      const maxTop = window.innerHeight - 200;
      this.memberListMenuPos = { x: left, y: Math.min(top, maxTop) };
    } else {
      this.memberListMenuPos = { x: Math.max(8, event.clientX - menuWidth), y: event.clientY };
    }
  }
  get sortedFilteredMembers() {
    const list = this.selectedRoom?.members || [];
    const q = this.memberSearchTerm.trim().toLowerCase();
    const filtered = q ? list.filter((m) => m.name.toLowerCase().includes(q) || (m.email || "").toLowerCase().includes(q)) : list.slice();
    return filtered.sort((a, b) => a.name.localeCompare(b.name, "ja"));
  }
  openAddMemberModal() {
    this.addMemberSearchTerm = "";
    this.addMemberSelectedIds = [];
    this.showAddMemberModal = true;
    if (typeof history !== "undefined") {
      try {
        history.pushState({ addMemberModal: true }, "", window.location.href);
      } catch {
      }
    }
  }
  get addMemberCandidates() {
    const existingIds = new Set((this.selectedRoom?.members || []).map((m) => m.id));
    const q = this.addMemberSearchTerm.trim().toLowerCase();
    return this.contacts.filter((c) => {
      if (existingIds.has(c.id))
        return false;
      if (!q)
        return true;
      return c.name.toLowerCase().includes(q) || (c.email || "").toLowerCase().includes(q);
    }).slice(0, 100);
  }
  toggleAddMemberPick(id) {
    const idx = this.addMemberSelectedIds.indexOf(id);
    if (idx >= 0)
      this.addMemberSelectedIds = this.addMemberSelectedIds.filter((x) => x !== id);
    else
      this.addMemberSelectedIds = [...this.addMemberSelectedIds, id];
  }
  getContactName(id) {
    return this.contacts.find((c) => c.id === id)?.name || id;
  }
  confirmAddMembers() {
    if (!this.selectedRoom || !this.addMemberSelectedIds.length)
      return;
    const toAdd = this.contacts.filter((c) => this.addMemberSelectedIds.includes(c.id));
    const newMembers = toAdd.map((c) => ({
      id: c.id,
      name: c.name,
      initial: c.initial || c.name.charAt(0),
      color: c.color,
      email: c.email
    }));
    const id = this.selectedRoomId;
    this.rooms = this.rooms.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { members: [...r.members || [], ...newMembers] }) : r);
    this.showAddMemberModal = false;
    this.showToast(`${newMembers.length}\u540D\u3092\u30B0\u30EB\u30FC\u30D7\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F`);
  }
  memberStartChat(member) {
    this.memberListMenuTarget = null;
    this.showMemberListModal = false;
    const existing = this.rooms.find((r) => r.type === "direct" && r.members?.some((m) => m.id === member.id));
    if (existing) {
      this.selectedRoomId = existing.id;
    } else {
      const id = "dm-" + Date.now();
      this.rooms = [{
        id,
        name: member.name,
        lastMessage: "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB\u3057\u307E\u3057\u305F",
        timestamp: "\u4ECA",
        initial: member.initial,
        avatarColor: member.color,
        type: "direct",
        members: [
          { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", online: true },
          member
        ]
      }, ...this.rooms];
      this.selectedRoomId = id;
    }
    this.showToast(`${member.name} \u3068\u306E\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB\u3057\u307E\u3057\u305F`);
  }
  /* 修正 No.53 (2026-04-24): 独自 confirm モーダル化 */
  removeMember(member) {
    return __async(this, null, function* () {
      if (!this.selectedRoom)
        return;
      const ok = yield this.confirmDialog.confirm({
        title: "\u30E1\u30F3\u30D0\u30FC\u306E\u9000\u51FA",
        message: `${member.name} \u3092\u30B0\u30EB\u30FC\u30D7\u304B\u3089\u9000\u51FA\u3055\u305B\u307E\u3059\u304B\uFF1F`,
        confirmText: "\u9000\u51FA\u3055\u305B\u308B",
        danger: true
      });
      if (!ok)
        return;
      const id = this.selectedRoomId;
      this.rooms = this.rooms.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { members: (r.members || []).filter((m) => m.id !== member.id) }) : r);
      this.memberListMenuTarget = null;
      this.showToast("\u30E1\u30F3\u30D0\u30FC\u3092\u9000\u51FA\u3055\u305B\u307E\u3057\u305F");
    });
  }
  /** fix #11 (2026-04-27): 旧仕様: link が空だと無音でリターン → ユーザー混乱
   *  新: 必要なら自動でリンク生成 + clipboard 失敗時も execCommand fallback で確実にコピー
   *      + 結果は必ずトーストで通知 */
  copyInviteLink() {
    if (!this.selectedRoom) {
      this.showToast("\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
      return;
    }
    let link = this.selectedRoom.inviteLink || "";
    if (!link) {
      if (!this.isGroup) {
        this.showToast("\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u306B\u306F\u62DB\u5F85\u30EA\u30F3\u30AF\u304C\u3042\u308A\u307E\u305B\u3093");
        return;
      }
      link = `https://stg.schecon.com/chat/invite/${this.selectedRoom.id}`;
      this.selectedRoom.inviteLink = link;
    }
    const onSuccess = () => this.showToast("\u62DB\u5F85\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
    const onFail = () => {
      try {
        const ta = document.createElement("textarea");
        ta.value = link;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        if (ok)
          onSuccess();
        else
          this.showToast("\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
      } catch {
        this.showToast("\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
      }
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(link).then(onSuccess, onFail);
    } else {
      onFail();
    }
  }
  openLeaveConfirm() {
    this.rightPanelView = "leave-confirm";
  }
  /** fix #15 (2026-04-27): 退出後に詳細パネルを閉じてチャット一覧へ戻す。
   *  旧: rightPanelView='menu' (= 退出済みルームの詳細を見せ続ける) で混乱
   *  新: 詳細パネル閉 + selectedRoomId クリア + SP は mobilePane='list' で一覧表示 */
  confirmLeave() {
    const id = this.selectedRoomId;
    this.rooms = this.rooms.filter((r) => r.id !== id);
    this.messages = this.messages.filter((m) => m.roomId !== id);
    this.selectedRoomId = "";
    this.showDetailPanel = false;
    this.rightPanelView = "menu";
    this.mobilePane = "list";
    try {
      this.router.navigate(["/chat"]);
    } catch {
    }
    this.showToast("\u30C1\u30E3\u30C3\u30C8\u3092\u9000\u51FA\u3057\u307E\u3057\u305F");
  }
  openRenameGroup() {
    this.renameGroupInput = this.selectedRoom?.name || "";
    this.rightPanelView = "rename-group";
  }
  saveRenameGroup() {
    const name = this.renameGroupInput.trim();
    if (!name)
      return;
    const id = this.selectedRoomId;
    this.rooms = this.rooms.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { name }) : r);
    this.rightPanelView = "menu";
    this.showToast("\u30B0\u30EB\u30FC\u30D7\u540D\u3092\u5909\u66F4\u3057\u307E\u3057\u305F");
  }
  selectRoom(id) {
    if (id === this.selectedRoomId && this.mobilePane === "room") {
      return;
    }
    const isRoomChange = id !== this.selectedRoomId;
    if (isRoomChange) {
      this.roomTransitioning = true;
    }
    this.selectedRoomId = id;
    this.messageSearchQuery = "";
    this.showMessageSearch = false;
    this.rightPanelView = "menu";
    if (this.isMobile) {
      this.mobilePane = "room";
      history.pushState({ chatRoom: id }, "", window.location.href);
    }
    this.markRoomAsRead(id);
    this.refreshScheduledForCurrentRoom();
    this.showScheduledList = false;
    this.suppressScrollUntilMs = Date.now() + 500;
    if (typeof requestAnimationFrame !== "undefined") {
      requestAnimationFrame(() => {
        document.querySelector(".chat-room__input")?.classList.remove("chat-room__input--hidden");
        document.querySelector(".header")?.classList.remove("header--hidden");
        document.querySelector(".chat-room")?.classList.remove("chat-room--scroll-collapsed");
        document.querySelector(".chat-list")?.classList.remove("chat-list--scroll-collapsed");
        document.querySelector(".nav-bottom")?.classList.remove("nav-bottom--hidden");
        this.headerHidden = false;
        this.pinnedHidden = false;
        if (isRoomChange) {
          requestAnimationFrame(() => {
            this.roomTransitioning = false;
            this.cdr.markForCheck();
          });
        }
      });
    } else if (isRoomChange) {
      this.roomTransitioning = false;
    }
    this.scheduleScrollToBottom();
    this.forceScrollToBottom(6);
    this.syncUrl();
    this.cdr.markForCheck();
  }
  /** ルームを開いたら未読件数を 0 に (全画面+共有サービス両方) */
  markRoomAsRead(roomId) {
    const room = this.rooms.find((r) => r.id === roomId);
    if (room) {
      this.rooms = this.rooms.map((r) => r.id === roomId ? __spreadProps(__spreadValues({}, r), { unreadCount: 0 }) : r);
    }
    this.chatState.markRoomAsRead(roomId);
    this.readRoomIds.add(roomId);
    this.persistReads();
    this.cdr.markForCheck();
  }
  /** フォルダ内に未読のあるルームがあるか (再帰的) */
  hasFolderUnread(folderId) {
    const rooms = this.getRoomsInFolder(folderId);
    if (rooms.some((r) => (r.unreadCount || 0) > 0))
      return true;
    const childFolders = this.getChildFolders(folderId);
    return childFolders.some((cf) => this.hasFolderUnread(cf.id));
  }
  /** フォルダ内の未読件数合計 */
  folderUnreadCount(folderId) {
    const rooms = this.getRoomsInFolder(folderId);
    let total = rooms.reduce((s, r) => s + (r.unreadCount || 0), 0);
    const childFolders = this.getChildFolders(folderId);
    for (const cf of childFolders) {
      total += this.folderUnreadCount(cf.id);
    }
    return total;
  }
  // ====== Send message ======
  sendMessage() {
    const taValue = this.msgInputRef?.nativeElement?.value;
    if (typeof taValue === "string" && taValue !== this.messageInput) {
      this.messageInput = taValue;
    }
    const text = this.messageInput.trim();
    const hasAttachments = this.pendingAttachments.length > 0;
    if (!text && !hasAttachments)
      return;
    const extractedTags = this.extractHashtags(text);
    const unknown = extractedTags.filter((l) => !this.availableTags.some((t) => t.label === l));
    if (unknown.length > 0 && !this.pendingNewTagConfirm) {
      this.pendingNewTagConfirm = { labels: unknown };
      this.showNewTagConfirmModal = true;
      return;
    }
    this.pendingNewTagConfirm = null;
    if (extractedTags.length > 0) {
      this.registerTags(extractedTags);
    }
    const now = /* @__PURE__ */ new Date();
    const hh = now.getHours().toString().padStart(2, "0");
    const mm = now.getMinutes().toString().padStart(2, "0");
    const messageId = this.nextMsgId("m");
    const todayLabel = this.todayDateLabel(now);
    const lastLabel = this.lastDateLabelForRoom(this.selectedRoomId);
    const newDateLabel = todayLabel !== lastLabel ? todayLabel : void 0;
    const attachments = hasAttachments ? this.pendingAttachments.map((a) => __spreadProps(__spreadValues({}, a), { uploading: true, progress: 0 })) : void 0;
    const pendingFilesSnapshot = hasAttachments ? [...this.pendingFiles] : [];
    const prefetchedOgp = this.inputOgpPreview ? __spreadValues({}, this.inputOgpPreview) : void 0;
    this.messages = [
      ...this.messages,
      {
        id: messageId,
        roomId: this.selectedRoomId,
        senderName: "\u81EA\u5206",
        text,
        time: `${hh}:${mm}`,
        isMe: true,
        replyTo: this.replyToMessage?.id,
        attachments,
        tags: extractedTags.length > 0 ? extractedTags : void 0,
        urlPreview: prefetchedOgp,
        dateLabel: newDateLabel
      }
    ];
    const snippet = text || (hasAttachments ? "[\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB]" : "");
    this.touchRoomAfterSend(this.selectedRoomId, snippet);
    this.chatState.registerExternalMessage({
      id: messageId,
      roomId: this.selectedRoomId,
      text,
      time: `${hh}:${mm}`,
      isMe: true,
      senderName: this.loggedInUserName,
      replyTo: this.replyToMessage?.id,
      attachments: attachments ? attachments.map((a) => __spreadValues({}, a)) : void 0,
      tags: extractedTags.length > 0 ? extractedTags : void 0,
      /* 修正 No.50 (2026-04-24): 投稿の日付を永続化 (ルーム遷移→戻りでも日付区切りが保持される) */
      dateLabel: newDateLabel
    });
    this.chatState.updateUserRoom(this.selectedRoomId, {
      lastMessage: snippet.slice(0, 60),
      timestamp: `${hh}:${mm}`,
      updatedAt: Date.now()
    });
    this.messageInput = "";
    if (this.selectedRoomId) {
      this.clearDraftForRoom(this.selectedRoomId);
    }
    this.pendingAttachments = [];
    this.pendingFiles = [];
    this.replyToMessage = null;
    this.inputOgpPreview = null;
    this.inputOgpLastUrl = "";
    this.inputOgpLoading = false;
    this.showMessageMenu = false;
    this.showMentionPopup = false;
    this.showTagPopup = false;
    this.editingMessageId = null;
    this.editingText = "";
    this.resetInputHeight();
    this.keepFocusOnInput();
    this.cdr.markForCheck();
    this.cdr.detectChanges();
    this.scheduleScrollToBottom();
    this.forceScrollToBottom(6);
    const scrollToNewMsg = () => {
      const el = document.getElementById("msg-" + messageId) || document.querySelector(`[data-msg-id="${messageId}"]`);
      if (el && typeof el.scrollIntoView === "function") {
        el.scrollIntoView({ block: "end", behavior: "auto" });
      }
    };
    requestAnimationFrame(() => requestAnimationFrame(scrollToNewMsg));
    setTimeout(scrollToNewMsg, 150);
    setTimeout(scrollToNewMsg, 400);
    if (hasAttachments) {
      pendingFilesSnapshot.forEach((_, idx) => this.simulateUpload(messageId, idx));
    }
    if (text && !prefetchedOgp) {
      this.fetchOgpForMessage(messageId, text);
    }
  }
  /* 修正 No.55 (2026-04-24): 予約投稿機能 - スケジュール指定モーダルを開く */
  openScheduleSendModal() {
    const text = (this.messageInput || "").trim();
    if (!text) {
      this.showToast("\u4E88\u7D04\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    const ref = this.dialog.open(ScheduleSendModalComponent, {
      data: { messageText: text, mode: "create" },
      panelClass: "schedule-send-modal-panel",
      backdropClass: "confirm-dialog-backdrop",
      width: "auto",
      maxWidth: "92vw",
      autoFocus: true,
      restoreFocus: true
    });
    ref.afterClosed().subscribe((result) => {
      if (!result || !result.scheduledAt)
        return;
      this.scheduleCurrentMessage(result.scheduledAt);
    });
  }
  /* 修正 No.55 (2026-04-24): 予約投稿機能 - 現在の入力をスケジュール登録 */
  scheduleCurrentMessage(scheduledAt) {
    const text = (this.messageInput || "").trim();
    if (!text)
      return;
    const extractedTags = this.extractHashtags(text);
    this.scheduledMessages.schedule({
      roomId: this.selectedRoomId,
      text,
      scheduledAt,
      senderName: this.loggedInUserName,
      replyTo: this.replyToMessage?.id,
      tags: extractedTags.length > 0 ? extractedTags : void 0
    });
    this.messageInput = "";
    if (this.selectedRoomId) {
      this.clearDraftForRoom(this.selectedRoomId);
    }
    this.replyToMessage = null;
    this.inputOgpPreview = null;
    this.inputOgpLastUrl = "";
    this.resetInputHeight();
    this.showToast(`${this.formatScheduledAt(scheduledAt)} \u306B\u9001\u4FE1\u4E88\u5B9A`);
    this.refreshScheduledForCurrentRoom();
    this.cdr.markForCheck();
  }
  /* 修正 No.55 (2026-04-24): 予約投稿機能 - 期限到達メッセージを通常送信ルートへ流す */
  dispatchScheduledMessage(sched) {
    const now = /* @__PURE__ */ new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const messageId = this.nextMsgId("m");
    const todayLabel = this.todayDateLabel(now);
    const lastLabel = this.lastDateLabelForRoom(sched.roomId);
    const newDateLabel = todayLabel !== lastLabel ? todayLabel : void 0;
    this.messages = [
      ...this.messages,
      {
        id: messageId,
        roomId: sched.roomId,
        senderName: "\u81EA\u5206",
        text: sched.text,
        time: `${hh}:${mm}`,
        isMe: true,
        replyTo: sched.replyTo,
        attachments: sched.attachments,
        tags: sched.tags,
        dateLabel: newDateLabel
      }
    ];
    this.chatState.registerExternalMessage({
      id: messageId,
      roomId: sched.roomId,
      text: sched.text,
      time: `${hh}:${mm}`,
      isMe: true,
      senderName: sched.senderName || this.loggedInUserName,
      replyTo: sched.replyTo,
      attachments: sched.attachments,
      tags: sched.tags,
      dateLabel: newDateLabel
    });
    const snippet = sched.text;
    this.chatState.updateUserRoom(sched.roomId, {
      lastMessage: snippet.slice(0, 60),
      timestamp: `${hh}:${mm}`,
      updatedAt: Date.now()
    });
    this.touchRoomAfterSend(sched.roomId, snippet);
    this.showToast("\u4E88\u7D04\u6295\u7A3F\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F");
    this.cdr.markForCheck();
    if (sched.roomId === this.selectedRoomId) {
      this.scheduleScrollToBottom();
      this.forceScrollToBottom(4);
    }
    this.refreshScheduledForCurrentRoom();
  }
  /* 修正 No.55 (2026-04-24): 予約投稿機能 - バナー表示用 */
  get scheduledBannerText() {
    const list = this.scheduledMessagesForRoom;
    if (!list || list.length === 0)
      return "";
    const next = list[0];
    return `${this.formatScheduledAt(next.scheduledAt)} \u306B\u4E88\u7D04\u6295\u7A3F\u304C ${list.length} \u4EF6\u3042\u308A\u307E\u3059`;
  }
  /** yyyy/MM/dd HH:mm */
  formatScheduledAt(ts) {
    const d = new Date(ts);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${y}/${m}/${day} ${hh}:${mm}`;
  }
  /* 修正 No.55 (2026-04-24): 予約投稿機能 - 一覧パネル開閉 */
  toggleScheduledList() {
    this.showScheduledList = !this.showScheduledList;
  }
  closeScheduledList() {
    this.showScheduledList = false;
  }
  /* 修正 No.55 (2026-04-24): 予約投稿機能 - 予約を編集 (日時を変更) */
  editScheduled(item) {
    const ref = this.dialog.open(ScheduleSendModalComponent, {
      data: {
        messageText: item.text,
        initialScheduledAt: item.scheduledAt,
        mode: "edit"
      },
      panelClass: "schedule-send-modal-panel",
      backdropClass: "confirm-dialog-backdrop",
      width: "auto",
      maxWidth: "92vw",
      autoFocus: true,
      restoreFocus: true
    });
    ref.afterClosed().subscribe((result) => {
      if (!result || !result.scheduledAt)
        return;
      this.scheduledMessages.update(item.id, { scheduledAt: result.scheduledAt });
      this.showToast(`${this.formatScheduledAt(result.scheduledAt)} \u306B\u66F4\u65B0\u3057\u307E\u3057\u305F`);
      this.refreshScheduledForCurrentRoom();
    });
  }
  /* 修正 No.55 (2026-04-24): 予約投稿機能 - 予約を削除 (ConfirmDialog 経由) */
  deleteScheduled(item) {
    this.confirmDialog.confirm({
      title: "\u4E88\u7D04\u6295\u7A3F\u3092\u524A\u9664",
      message: `${this.formatScheduledAt(item.scheduledAt)} \u306B\u9001\u4FE1\u4E88\u5B9A\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u524A\u9664\u3057\u307E\u3059\u3002
\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F`,
      confirmText: "\u524A\u9664",
      cancelText: "\u30AD\u30E3\u30F3\u30BB\u30EB",
      danger: true
    }).then((ok) => {
      if (!ok)
        return;
      this.scheduledMessages.cancel(item.id);
      this.showToast("\u4E88\u7D04\u6295\u7A3F\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
      this.refreshScheduledForCurrentRoom();
      if (this.scheduledMessagesForRoom.length === 0) {
        this.showScheduledList = false;
      }
    });
  }
  /** URLを抽出 */
  extractUrls(text) {
    const urlRegex = /https?:\/\/[^\s<>"{}|\\^`\[\]]+/g;
    return text.match(urlRegex) || [];
  }
  /** 複数プロキシをレースしてHTML取得（最速を採用） */
  fetchViaProxy(targetUrl) {
    return __async(this, null, function* () {
      const encoded = encodeURIComponent(targetUrl);
      const proxies = [
        fetch(`https://api.codetabs.com/v1/proxy?quest=${encoded}`, { signal: AbortSignal.timeout(6e3) }).then((r) => r.ok ? r.text() : Promise.reject("fail")),
        fetch(`https://api.allorigins.win/raw?url=${encoded}`, { signal: AbortSignal.timeout(6e3) }).then((r) => r.ok ? r.text() : Promise.reject("fail")),
        fetch(`https://corsproxy.io/?${encoded}`, { signal: AbortSignal.timeout(6e3) }).then((r) => r.ok ? r.text() : Promise.reject("fail"))
      ];
      try {
        return yield Promise.any(proxies);
      } catch {
        return null;
      }
    });
  }
  /** メッセージ内のURLからOGPメタデータをフェッチ */
  fetchOgpForMessage(messageId, text) {
    return __async(this, null, function* () {
      const urls = this.extractUrls(text);
      if (urls.length === 0)
        return;
      const targetUrl = urls[0];
      try {
        const html = yield this.fetchViaProxy(targetUrl);
        if (!html)
          return;
        const preview = this.parseOgpFromHtml(html, targetUrl);
        if (!preview)
          return;
        this.messages = this.messages.map((m) => m.id === messageId ? __spreadProps(__spreadValues({}, m), { urlPreview: preview }) : m);
        this.cdr.markForCheck();
      } catch {
      }
    });
  }
  /** HTMLからOGPメタタグをパース */
  parseOgpFromHtml(html, url) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const getMeta = (property) => {
      const el = doc.querySelector(`meta[property="${property}"]`) || doc.querySelector(`meta[name="${property}"]`);
      return el?.getAttribute("content") || null;
    };
    const title = getMeta("og:title") || doc.querySelector("title")?.textContent || null;
    if (!title)
      return null;
    const siteName = getMeta("og:site_name") || new URL(url).hostname;
    const description = getMeta("og:description") || getMeta("description") || void 0;
    const image = getMeta("og:image") || void 0;
    const themeColor = getMeta("theme-color") || void 0;
    const faviconEl = doc.querySelector('link[rel="icon"]') || doc.querySelector('link[rel="shortcut icon"]');
    let favicon = faviconEl?.getAttribute("href") || void 0;
    if (favicon && !favicon.startsWith("http")) {
      try {
        favicon = new URL(favicon, url).href;
      } catch {
        favicon = void 0;
      }
    }
    let absoluteImage = image;
    if (absoluteImage && !absoluteImage.startsWith("http")) {
      try {
        absoluteImage = new URL(absoluteImage, url).href;
      } catch {
        absoluteImage = void 0;
      }
    }
    return {
      url,
      title,
      siteName,
      description,
      image: absoluteImage,
      accentColor: themeColor || "#5865f2",
      favicon
    };
  }
  onInputKey(event) {
    if (this.showMentionPopup && this.mentionCandidates.length > 0) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        this.mentionActiveIndex = (this.mentionActiveIndex + 1) % this.mentionCandidates.length;
        this.scrollMentionIntoView();
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        this.mentionActiveIndex = (this.mentionActiveIndex - 1 + this.mentionCandidates.length) % this.mentionCandidates.length;
        this.scrollMentionIntoView();
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        const picked = this.mentionCandidates[this.mentionActiveIndex];
        if (picked)
          this.insertMention(picked);
        return;
      }
      if (event.key === "Tab") {
        event.preventDefault();
        this.showMentionPopup = false;
        return;
      }
      if (event.key === "Escape") {
        event.preventDefault();
        this.showMentionPopup = false;
        return;
      }
    }
    if (this.showTagPopup) {
      if (event.key === "Escape" || event.key === "Tab") {
        event.preventDefault();
        this.showTagPopup = false;
        return;
      }
    }
    if (event.key === "Enter" && !event.shiftKey && !event.ctrlKey && !this.isMobile) {
      event.preventDefault();
      this.sendMessage();
      return;
    }
    if (event.key === "@") {
      this.showMentionPopup = true;
      this.mentionCandidates = this.selectedRoom?.members?.filter((m) => m.id !== "me") || [];
      this.mentionActiveIndex = 0;
    }
    if (event.key === "#") {
      this.showTagPopup = true;
      this.tagCandidates = this.availableTags;
    }
    if (event.key === "Escape") {
      this.showMentionPopup = false;
      this.showTagPopup = false;
    }
  }
  autoResizeInput(event) {
    const el = event.target;
    el.style.height = "auto";
    const maxH = 192;
    const h = Math.min(el.scrollHeight, maxH);
    el.style.height = h + "px";
    el.style.overflowY = el.scrollHeight > maxH ? "auto" : "hidden";
    this.detectAndFetchInputOgp(this.messageInput);
  }
  detectAndFetchInputOgp(text) {
    const urls = this.extractUrls(text);
    const url = urls[0] || "";
    if (!url) {
      this.inputOgpPreview = null;
      this.inputOgpLastUrl = "";
      this.inputOgpLoading = false;
      if (this.inputOgpTimer) {
        clearTimeout(this.inputOgpTimer);
        this.inputOgpTimer = null;
      }
      return;
    }
    if (url === this.inputOgpLastUrl)
      return;
    this.inputOgpLastUrl = url;
    this.inputOgpPreview = null;
    if (this.inputOgpTimer)
      clearTimeout(this.inputOgpTimer);
    this.inputOgpTimer = setTimeout(() => this.fetchInputOgp(url), 300);
  }
  fetchInputOgp(url) {
    return __async(this, null, function* () {
      this.inputOgpLoading = true;
      this.cdr.markForCheck();
      try {
        const html = yield this.fetchViaProxy(url);
        if (!html || url !== this.inputOgpLastUrl) {
          this.inputOgpLoading = false;
          this.cdr.markForCheck();
          return;
        }
        const preview = this.parseOgpFromHtml(html, url);
        if (preview && url === this.inputOgpLastUrl) {
          this.inputOgpPreview = preview;
        }
      } catch {
      }
      this.inputOgpLoading = false;
      this.cdr.markForCheck();
    });
  }
  quoteMessage(msg) {
    const quoted = (msg.text || "").split("\n").map((l) => "> " + l).join("\n");
    this.messageInput = (this.messageInput ? this.messageInput + "\n" : "") + quoted + "\n";
    this.showMessageMenu = false;
    setTimeout(() => {
      const el = document.querySelector("textarea.msg-input");
      if (el) {
        el.focus();
        el.style.height = "auto";
        el.style.height = Math.min(el.scrollHeight, 192) + "px";
      }
    }, 0);
  }
  forwardMessage(msg) {
    this.openForwardModal(msg);
  }
  openForwardModal(msg) {
    this.forwardingMessage = msg;
    this.forwardTargetRoomIds = /* @__PURE__ */ new Set();
    this.forwardSearchQuery = "";
    this.showForwardModal = true;
    this.showMessageMenu = false;
  }
  closeForwardModal() {
    this.showForwardModal = false;
    this.forwardingMessage = null;
    this.forwardTargetRoomIds = /* @__PURE__ */ new Set();
    this.forwardSearchQuery = "";
  }
  toggleForwardTarget(roomId) {
    if (this.forwardTargetRoomIds.has(roomId)) {
      this.forwardTargetRoomIds.delete(roomId);
    } else {
      this.forwardTargetRoomIds.add(roomId);
    }
    this.forwardTargetRoomIds = new Set(this.forwardTargetRoomIds);
  }
  isForwardTarget(roomId) {
    return this.forwardTargetRoomIds.has(roomId);
  }
  /** 検索文字で絞り込んだ転送先候補 (自分のチャット除外) */
  get forwardTargetRooms() {
    const q = this.forwardSearchQuery.trim().toLowerCase();
    return this.rooms.filter((r) => {
      if (r.type === "my")
        return false;
      if (!q)
        return true;
      return (r.name || "").toLowerCase().includes(q);
    });
  }
  /** 転送を確定: 選択済みルームに転送メッセージを投稿してモーダルを閉じる */
  confirmForward() {
    if (!this.forwardingMessage) {
      this.closeForwardModal();
      return;
    }
    const targets = Array.from(this.forwardTargetRoomIds);
    if (targets.length === 0) {
      this.showToast("\u8EE2\u9001\u5148\u30921\u3064\u4EE5\u4E0A\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    const src = this.forwardingMessage;
    const now = /* @__PURE__ */ new Date();
    const hh = now.getHours().toString().padStart(2, "0");
    const mm = now.getMinutes().toString().padStart(2, "0");
    const body = src.text || "";
    const lastMessageSnippet = src.text && src.text.slice(0, 60) || "[\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB]";
    const todayLabel = this.todayDateLabel(now);
    targets.forEach((roomId) => {
      const id = this.nextMsgId("m");
      const forwardedAttachments = src.attachments ? src.attachments.map((a) => __spreadValues({}, a)) : void 0;
      const lastLabel = this.lastDateLabelForRoom(roomId);
      const fwdDateLabel = todayLabel !== lastLabel ? todayLabel : void 0;
      this.messages = [
        ...this.messages,
        {
          id,
          roomId,
          senderName: "\u81EA\u5206",
          text: body,
          time: `${hh}:${mm}`,
          isMe: true,
          attachments: forwardedAttachments,
          dateLabel: fwdDateLabel
        }
      ];
      this.touchRoomAfterSend(roomId, lastMessageSnippet);
      this.chatState.registerExternalMessage({
        id,
        roomId,
        text: body,
        time: `${hh}:${mm}`,
        isMe: true,
        senderName: this.loggedInUserName,
        attachments: forwardedAttachments,
        /* 修正 No.50 (2026-04-24): 日付ラベルを永続化 */
        dateLabel: fwdDateLabel
      });
      this.chatState.updateUserRoom(roomId, {
        lastMessage: lastMessageSnippet,
        timestamp: `${hh}:${mm}`,
        updatedAt: Date.now()
      });
    });
    const count = targets.length;
    this.closeForwardModal();
    this.showToast(`${count}\u4EF6\u306E\u30C1\u30E3\u30C3\u30C8\u306B\u8EE2\u9001\u3057\u307E\u3057\u305F`);
    this.cdr.markForCheck();
  }
  translateMessage(msg) {
    this.showToast("\u7FFB\u8A33\u6A5F\u80FD\u306F\u6E96\u5099\u4E2D\u3067\u3059");
    this.showMessageMenu = false;
  }
  resetInputHeight() {
    const resetOne = (el) => {
      if (!el)
        return;
      try {
        el.value = "";
        const ev = new Event("input", { bubbles: true });
        el.dispatchEvent(ev);
      } catch {
      }
      el.style.height = "auto";
      el.style.height = "";
      el.rows = 1;
    };
    if (this.msgInputRef?.nativeElement) {
      resetOne(this.msgInputRef.nativeElement);
    }
    const els = document.querySelectorAll("textarea.msg-input, textarea.msg-input--textarea");
    els.forEach(resetOne);
    requestAnimationFrame(() => {
      if (this.msgInputRef?.nativeElement)
        resetOne(this.msgInputRef.nativeElement);
      document.querySelectorAll("textarea.msg-input, textarea.msg-input--textarea").forEach(resetOne);
    });
    setTimeout(() => {
      if (this.msgInputRef?.nativeElement)
        resetOne(this.msgInputRef.nativeElement);
    }, 50);
  }
  /** 送信後にモバイルでキーボードを閉じずに入力欄を再フォーカス (ユーザー指示 2026-04-21) */
  keepFocusOnInput() {
    if (!this.msgInputRef?.nativeElement)
      return;
    const el = this.msgInputRef.nativeElement;
    const shouldKeep = this.isMobile || window.matchMedia?.("(pointer:coarse)").matches;
    if (!shouldKeep)
      return;
    requestAnimationFrame(() => {
      try {
        el.focus({ preventScroll: true });
      } catch {
        el.focus();
      }
    });
  }
  insertMention(member) {
    this.messageInput += (this.messageInput.endsWith("@") ? "" : "@") + member.name + " ";
    this.showMentionPopup = false;
    this.mentionActiveIndex = 0;
  }
  confirmNewTagsYes() {
    if (this.pendingNewTagConfirm) {
      this.registerTags(this.pendingNewTagConfirm.labels);
      this.showToast(`${this.pendingNewTagConfirm.labels.length}\u500B\u306E\u30BF\u30B0\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F`);
    }
    this.showNewTagConfirmModal = false;
    this.pendingNewTagConfirm = null;
    this.sendMessage();
  }
  confirmNewTagsNo() {
    if (this.pendingNewTagConfirm) {
      for (const label of this.pendingNewTagConfirm.labels) {
        const re = new RegExp("#" + label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
        this.messageInput = this.messageInput.replace(re, label);
      }
    }
    this.showNewTagConfirmModal = false;
    this.pendingNewTagConfirm = null;
    this.sendMessage();
  }
  cancelNewTagConfirm() {
    this.showNewTagConfirmModal = false;
    this.pendingNewTagConfirm = null;
  }
  /** タグポップアップから新規作成フォームを開く (右パネルを開いて tags ビューへ遷移) */
  openTagCreateFromPopup() {
    this.showTagPopup = false;
    this.showDetailPanel = true;
    this.rightPanelView = "tags";
    this.openTagCreateForm();
    this.cdr.markForCheck();
  }
  openTagCreateForm() {
    this.showTagCreateForm = true;
    this.newTagLabel = "";
    this.newTagColor = this.tagColorPalette[this.availableTags.length % this.tagColorPalette.length];
  }
  cancelCreateTag() {
    this.showTagCreateForm = false;
    this.newTagLabel = "";
  }
  createNewTag() {
    const label = this.newTagLabel.trim().replace(/^#/, "");
    if (!label)
      return;
    if (this.availableTags.some((t) => t.label === label)) {
      this.showToast(`#${label} \u306F\u65E2\u306B\u5B58\u5728\u3057\u307E\u3059`);
      return;
    }
    this.availableTags = [
      { id: "t" + (this.availableTags.length + 1) + "-" + Date.now(), label, color: this.newTagColor, count: 0 },
      ...this.availableTags
    ];
    this.showToast(`#${label} \u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F`);
    this.cancelCreateTag();
  }
  insertTag(tag) {
    this.messageInput += (this.messageInput.endsWith("#") ? "" : "#") + tag.label + " ";
    this.showTagPopup = false;
  }
  /** メッセージ本文から #タグ を抽出する。重複は除去。
   *  ユーザー指示 (2026-04-21): 入力中のライブプレビュー用にも使うため public 化 */
  extractHashtags(text) {
    if (!text)
      return [];
    const re = /#([^\s#、。,.!?！？「」『』【】\[\]()（）<>]+)/g;
    const found = /* @__PURE__ */ new Set();
    let m;
    while ((m = re.exec(text)) !== null) {
      const label = m[1].trim();
      if (label)
        found.add(label);
    }
    return Array.from(found);
  }
  /** 入力中メッセージから抽出されたハッシュタグ (テンプレート用 getter) */
  get liveHashtags() {
    return this.extractHashtags(this.messageInput || "");
  }
  /** 抽出したタグを availableTags に未登録なら追加し、count を更新 */
  registerTags(labels) {
    const palette = ["#e53935", "#1e88e5", "#43a047", "#fb8c00", "#8e24aa", "#00897b", "#6d4c41", "#d81b60"];
    let nextIdNum = this.availableTags.length + 1;
    for (const label of labels) {
      const existing = this.availableTags.find((t) => t.label === label);
      if (existing) {
        existing.count = (existing.count || 0) + 1;
      } else {
        const color = palette[this.availableTags.length % palette.length];
        this.availableTags = [
          { id: "t" + nextIdNum++, label, color, count: 1 },
          ...this.availableTags
        ];
      }
    }
  }
  openMentionPopup() {
    this.showMentionPopup = true;
    this.mentionCandidates = this.selectedRoom?.members?.filter((m) => m.id !== "me") || [];
  }
  openTagPopup() {
    this.showTagPopup = true;
    this.tagCandidates = this.availableTags;
  }
  toggleDetailPanel() {
    this.showDetailPanel = !this.showDetailPanel;
    if (this.isMobile && this.showDetailPanel) {
      history.pushState({ detailPanel: true }, "", window.location.href);
    }
  }
  // ====== New chat modal (staging chip-input) ======
  openNewChatModal() {
    this.newChatType = "direct";
    this.newChatName = "";
    this.newChatSelectedMembers = [];
    this.newChatSearchTerm = "";
    this.newChatChipEmail = "";
    this.showGoogleContacts = true;
    this.contactPage = 1;
    this.showNewChatModal = true;
  }
  toggleNewChatMember(id) {
    if (this.newChatSelectedMembers.includes(id)) {
      this.newChatSelectedMembers = this.newChatSelectedMembers.filter((m) => m !== id);
    } else {
      this.newChatSelectedMembers = [...this.newChatSelectedMembers, id];
    }
  }
  selectContact(contact) {
    if (!this.newChatSelectedMembers.includes(contact.id)) {
      this.newChatSelectedMembers = [...this.newChatSelectedMembers, contact.id];
    }
  }
  createNewChat() {
    if (!this.newChatSelectedMembers.length)
      return;
    const ids = this.newChatSelectedMembers;
    const selected = this.contacts.filter((c) => ids.includes(c.id));
    const members = [
      { id: "me", name: "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09", initial: "\u77F3", color: "#ff9800", role: "owner", online: true },
      ...selected.map((c) => ({ id: c.id, name: c.name, initial: c.initial, color: c.color, email: c.email, role: "member" }))
    ];
    const type = selected.length >= 2 ? "group" : "direct";
    const name = this.newChatName.trim() || (type === "direct" ? selected[0]?.name || "\u65B0\u898F\u30C1\u30E3\u30C3\u30C8" : `\u30B0\u30EB\u30FC\u30D7 (${members.length - 1}\u540D)`);
    const nowMs = Date.now();
    const newRoom = {
      id: "room-" + nowMs,
      name,
      lastMessage: "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB\u3057\u307E\u3057\u305F",
      timestamp: "\u4ECA",
      initial: name.charAt(0),
      avatarColor: type === "group" ? "#26a69a" : "#5c6bc0",
      type,
      members,
      extraMembers: type === "group" ? Math.max(0, members.length - 2) : void 0,
      inviteLink: type === "group" ? `https://stg.schecon.com/chat/invite/${nowMs}` : void 0,
      unreadCount: 0,
      updatedAt: nowMs
    };
    this.rooms = [newRoom, ...this.rooms];
    this.messages = [
      ...this.messages,
      {
        id: "sys-" + nowMs,
        roomId: newRoom.id,
        senderName: "\u30B7\u30B9\u30C6\u30E0",
        text: "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB\u3057\u307E\u3057\u305F",
        time: "",
        isMe: false,
        isSystem: true,
        dateLabel: (/* @__PURE__ */ new Date()).toLocaleDateString("ja-JP")
      }
    ];
    this.activeFilter = "all";
    this.searchQuery = "";
    this.showNewChatModal = false;
    this.chatState.addUserRoom({
      id: newRoom.id,
      name: newRoom.name,
      initial: newRoom.initial || name.charAt(0),
      avatarColor: newRoom.avatarColor || "#26a69a",
      type: newRoom.type,
      lastMessage: newRoom.lastMessage,
      timestamp: newRoom.timestamp,
      unreadCount: 0,
      raw: newRoom
    });
    this.selectRoom(newRoom.id);
    this.showToast(type === "group" ? "\u30B0\u30EB\u30FC\u30D7\u30C1\u30E3\u30C3\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F" : "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB\u3057\u307E\u3057\u305F");
    this.cdr.markForCheck();
  }
  /**
   * メッセージ送信後に対象ルームを「最新」に昇格させる。
   * - lastMessage 更新 (最大 60 文字)
   * - timestamp を今に
   * - updatedAt を Date.now() に (一覧の recency ソートが反応)
   */
  touchRoomAfterSend(roomId, text) {
    if (!roomId)
      return;
    const now = /* @__PURE__ */ new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const snippet = (text || "").replace(/\s+/g, " ").slice(0, 60);
    this.rooms = this.rooms.map((r) => r.id === roomId ? __spreadProps(__spreadValues({}, r), { lastMessage: snippet, timestamp: `${hh}:${mm}`, updatedAt: Date.now() }) : r);
    try {
      this.chatState.updateUserRoom(roomId, {
        lastMessage: snippet,
        timestamp: `${hh}:${mm}`,
        updatedAt: Date.now()
      });
    } catch {
    }
    this.cdr.markForCheck();
  }
  /** 既存ルームにも updatedAt を初期付与する (配列順を仮の recency とする) */
  ensureAllRoomsHaveUpdatedAt() {
    const base = Date.now();
    let changed = false;
    this.rooms = this.rooms.map((r, idx) => {
      if (r.updatedAt)
        return r;
      changed = true;
      return __spreadProps(__spreadValues({}, r), { updatedAt: base - idx * 1e3 });
    });
    if (changed)
      this.cdr.markForCheck();
  }
  /* 修正 No.53 (2026-04-24): 永続化されたユーザー投稿を this.messages に直接復元する。
     ChatPageComponent が破棄→再生成 (ルート遷移・リロード・転送操作) されるたびに
     this.messages は seed 配列で初期化されるため、従来は roomMessages getter の
     マージだけでは「this.messages が先に読まれるパス」で投稿が失われて見える
     ケースがあった。ここで先に同期マージしておくことで、
     (1) どの経路で描画されても投稿が欠けない
     (2) getter 側の重複排除 (existing Set) が引き続き効く
     という二重安全の状態にする。 */
  hydratePersistedMessagesIntoSeed() {
    const allPersisted = this.chatState.getAllMessagesSnapshot();
    if (!allPersisted)
      return;
    const existingIds = new Set(this.messages.map((m) => m.id));
    const toAdd = [];
    Object.entries(allPersisted).forEach(([roomId, msgs]) => {
      if (!Array.isArray(msgs))
        return;
      msgs.forEach((mm) => {
        if (!mm || !mm.id)
          return;
        if (existingIds.has(mm.id))
          return;
        existingIds.add(mm.id);
        toAdd.push({
          id: mm.id,
          roomId,
          senderName: mm.senderName || (mm.isMe ? "\u81EA\u5206" : "\u76F8\u624B"),
          text: mm.text || "",
          time: mm.time || "",
          isMe: !!mm.isMe,
          replyTo: mm.replyTo,
          attachments: mm.attachments,
          tags: mm.tags,
          dateLabel: mm.dateLabel
        });
      });
    });
    if (toAdd.length) {
      this.messages = [...this.messages, ...toAdd];
    }
    this.loadPersistedReactions();
    try {
      const latestByRoom = {};
      this.messages.forEach((m) => {
        if (!m || !m.roomId)
          return;
        const cur = latestByRoom[m.roomId];
        if (!cur || m.id && cur.id && m.id > cur.id) {
          latestByRoom[m.roomId] = m;
        }
      });
      let changed = false;
      this.rooms = this.rooms.map((r) => {
        const last = latestByRoom[r.id];
        if (!last)
          return r;
        const text = (last.text || "").replace(/\s+/g, " ").slice(0, 60);
        if (!text)
          return r;
        if (r.lastMessage === text)
          return r;
        changed = true;
        return __spreadProps(__spreadValues({}, r), { lastMessage: text, timestamp: last.time || r.timestamp });
      });
      if (changed)
        this.cdr.markForCheck();
    } catch (err) {
      console.warn("[ChatPage] failed to sync lastMessage from persisted:", err);
    }
  }
  /** ChatStateService に保存されている「ユーザーが作成したルーム」を現在の rooms に取り込む */
  mergeSharedUserRooms() {
    const shared = this.chatState.snapshotUserRooms();
    if (!shared.length)
      return;
    const existingIds = new Set(this.rooms.map((r) => r.id));
    const toAdd = shared.filter((s) => !existingIds.has(s.id)).map((s) => {
      if (s.raw && typeof s.raw === "object")
        return s.raw;
      return {
        id: s.id,
        name: s.name,
        lastMessage: s.lastMessage || "",
        timestamp: s.timestamp || "",
        initial: s.initial,
        avatarColor: s.avatarColor,
        type: s.type
      };
    });
    if (toAdd.length) {
      this.rooms = [...toAdd, ...this.rooms];
    }
  }
  setRightPanelView(view) {
    this.rightPanelView = view;
  }
  backToRightPanelMenu() {
    this.rightPanelView = "menu";
    this.threadSearchQuery = "";
    this.threadSearchResults = [];
  }
  /** fix #5 (2026-04-27): サブビューの戻るボタン処理。
   *  SP ではチャットルームまで戻す (パネル全閉)、PC ではメニュービューへ戻る。
   *  fix B6 (2026-04-28): leave-confirm / block-confirm は「参加メンバー」起点の
   *  サブサブ画面なので、戻るで members 一覧に戻す (旧: SP で一気に閉じてしまい
   *  退出/ブロックを取りやめても元の参加メンバー一覧に戻れなかった) */
  onSubviewBack() {
    if (this.rightPanelView === "leave-confirm" || this.rightPanelView === "block-confirm") {
      this.rightPanelView = "members";
      this.cdr.markForCheck();
      return;
    }
    if (this.isMobile) {
      this.closeRightPanel();
    } else {
      this.backToRightPanelMenu();
    }
  }
  /** パネルを閉じてメニュービューにリセット */
  closeRightPanel() {
    this.showDetailPanel = false;
    this.rightPanelView = "menu";
    this.threadSearchQuery = "";
    this.threadSearchResults = [];
    this.cdr.markForCheck();
  }
  get rightPanelTitle() {
    switch (this.rightPanelView) {
      case "tasks":
        return "\u30DE\u30A4\u30BF\u30B9\u30AF";
      case "bookmarks":
        return this.isMyChat ? "\u30DE\u30A4\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF" : "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u4E00\u89A7";
      case "pinned":
        return "\u30D4\u30F3\u7559\u3081\u4E00\u89A7";
      case "tags":
        return "\u30BF\u30B0\u4E00\u89A7";
      case "media":
        return "\u30E1\u30C7\u30A3\u30A2\u3068\u30D5\u30A1\u30A4\u30EB";
      case "members":
        return "\u53C2\u52A0\u30E1\u30F3\u30D0\u30FC";
      case "profile":
        return "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB";
      case "notifications":
        return "\u901A\u77E5\u8A2D\u5B9A";
      case "search":
        return "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u691C\u7D22";
      case "rename-group":
        return "\u30B0\u30EB\u30FC\u30D7\u540D\u5909\u66F4";
      case "block-confirm":
        return "\u30D6\u30ED\u30C3\u30AF\u78BA\u8A8D";
      case "leave-confirm":
        return "\u9000\u51FA\u78BA\u8A8D";
      default:
        return "";
    }
  }
  openSearchPanel() {
    this.showDetailPanel = true;
    this.rightPanelView = "search";
    this.threadSearchQuery = "";
    this.threadSearchResults = [];
    this.cdr.markForCheck();
  }
  onThreadSearchChange() {
    const q = this.threadSearchQuery.trim().toLowerCase();
    if (!q) {
      this.threadSearchResults = [];
      return;
    }
    this.threadSearchResults = this.roomMessages.filter((m) => !m.isSystem && !m.withdrawn && m.text && m.text.toLowerCase().includes(q));
  }
  jumpToSearchResult(msg) {
    if (this.isMobile) {
      this.showDetailPanel = false;
    }
    const hadFilter = !!this.messageSearchQuery.trim();
    if (hadFilter) {
      this.messageSearchQuery = "";
    }
    if (this.lastHighlightedEl) {
      this.lastHighlightedEl.classList.remove("msg-highlight");
      this.lastHighlightedEl = null;
    }
    setTimeout(() => {
      const el = document.getElementById("msg-" + msg.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.remove("msg-highlight");
        void el.offsetWidth;
        el.classList.add("msg-highlight");
        this.lastHighlightedEl = el;
        setTimeout(() => {
          if (this.lastHighlightedEl === el) {
            el.classList.remove("msg-highlight");
            this.lastHighlightedEl = null;
          }
        }, 3e3);
      }
    }, hadFilter || this.isMobile ? 200 : 50);
  }
  highlightSearchText(text) {
    if (!text)
      return "";
    const q = this.threadSearchQuery.trim();
    if (!q)
      return text;
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
    const lines = text.split("\n");
    const re = new RegExp(escaped, "gi");
    const matchLineIndices = /* @__PURE__ */ new Set();
    lines.forEach((line, i) => {
      if (re.test(line))
        matchLineIndices.add(i);
    });
    if (matchLineIndices.size === 0) {
      const snippet2 = text.length > 80 ? text.slice(0, 80) + "\u2026" : text;
      return esc(snippet2).replace(new RegExp(escaped, "gi"), (m) => `<strong class="search-highlight">${m}</strong>`);
    }
    const contextLines = 2;
    const includeLines = /* @__PURE__ */ new Set();
    matchLineIndices.forEach((i) => {
      for (let j = Math.max(0, i - contextLines); j <= Math.min(lines.length - 1, i + contextLines); j++) {
        includeLines.add(j);
      }
    });
    const sortedIndices = [...includeLines].sort((a, b) => a - b);
    const snippetParts = [];
    let prevIdx = -2;
    for (const idx of sortedIndices) {
      if (idx > prevIdx + 1 && prevIdx >= 0)
        snippetParts.push("\u2026");
      snippetParts.push(lines[idx]);
      prevIdx = idx;
    }
    if (sortedIndices[0] > 0)
      snippetParts.unshift("\u2026");
    if (sortedIndices[sortedIndices.length - 1] < lines.length - 1)
      snippetParts.push("\u2026");
    const snippet = snippetParts.join("\n");
    const safeSnippet = esc(snippet);
    return safeSnippet.replace(new RegExp(escaped, "gi"), (m) => `<strong class="search-highlight">${m}</strong>`).replace(/\n/g, "<br>");
  }
  // ====== Bookmark / Pinned / Tag / Media ======
  openBookmarksModal() {
    this.showDetailPanel = true;
    this.rightPanelView = "bookmarks";
    this.cdr.markForCheck();
  }
  openTasksPanel() {
    this.showDetailPanel = true;
    this.rightPanelView = "tasks";
    this.cdr.markForCheck();
  }
  openPinnedListPanel() {
    this.showDetailPanel = true;
    this.rightPanelView = "pinned";
    this.cdr.markForCheck();
  }
  openTagsModal() {
    this.showDetailPanel = true;
    this.rightPanelView = "tags";
    this.cdr.markForCheck();
  }
  openMediaModal() {
    this.showDetailPanel = true;
    this.mediaTab = "image";
    this.rightPanelView = "media";
    this.cdr.markForCheck();
  }
  /** 右ナビのメディア一覧から画像タイルをクリックしたときにモーダルカルーセルを開く
   *  fix #13 (2026-04-27):
   *   - mediaItems からだけでなく、メッセージ添付由来の roomMedia アイテム (id: 'att-...') も
   *     開けるよう、まず roomMedia(現在の mediaTab フィルタ済) を、見つからなければ全 mediaItems を
   *     探索してインデックスを決める。
   *   - showMediaCarousel = true と同時に cdr.markForCheck() を即座に走らせ、
   *     OnPush でも 1 タップで開くようにする (戻るボタン後にしか開かないバグ修正)。 */
  openMediaCarousel(item) {
    let pool = this.roomMedia.filter((m) => m.type === "image" || m.type === "video");
    let idx = pool.findIndex((m) => m.id === item.id);
    if (idx < 0) {
      pool = this.mediaItems.filter((m) => m.type === "image" || m.type === "video");
      idx = pool.findIndex((m) => m.id === item.id);
    }
    if (idx < 0) {
      pool = [item];
      idx = 0;
    }
    this.mediaCarouselItems = pool;
    this.mediaCarouselIndex = idx;
    this.showMediaCarousel = true;
    this.cdr.markForCheck();
  }
  closeMediaCarousel() {
    this.showMediaCarousel = false;
    this.cdr.markForCheck();
  }
  mediaCarouselPrev() {
    if (!this.mediaCarouselItems.length)
      return;
    this.mediaCarouselIndex = (this.mediaCarouselIndex - 1 + this.mediaCarouselItems.length) % this.mediaCarouselItems.length;
  }
  mediaCarouselNext() {
    if (!this.mediaCarouselItems.length)
      return;
    this.mediaCarouselIndex = (this.mediaCarouselIndex + 1) % this.mediaCarouselItems.length;
  }
  onCarouselTouchStart(e) {
    if (e.touches.length !== 1) {
      this.carouselTouchStartX = null;
      return;
    }
    this.carouselTouchStartX = e.touches[0].clientX;
    this.carouselTouchStartY = e.touches[0].clientY;
  }
  onCarouselTouchEnd(e) {
    if (this.carouselTouchStartX == null || this.carouselTouchStartY == null)
      return;
    const t = e.changedTouches[0];
    const dx = t.clientX - this.carouselTouchStartX;
    const dy = t.clientY - this.carouselTouchStartY;
    this.carouselTouchStartX = null;
    this.carouselTouchStartY = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      e.stopPropagation();
      if (dx < 0)
        this.mediaCarouselNext();
      else
        this.mediaCarouselPrev();
    }
  }
  get currentCarouselItem() {
    return this.mediaCarouselItems[this.mediaCarouselIndex] ?? null;
  }
  /** fix #14 (2026-04-27): "#ffecb3" のような単色フォールバックではなく、
   *  実際に <img> / <video> の src として描画可能な URL かどうか判定する */
  isRealMediaUrl(url) {
    if (!url)
      return false;
    return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:") || url.startsWith("blob:");
  }
  /* fix (2026-04-29): 動画再生失敗時のフォールバック
     <video> の error / loadedmetadata イベントから呼ばれる. error 時は console に
     診断ログを出し、ユーザーには toast で通知. loadedmetadata は成功確認用. */
  onVideoLoadError(ev, item) {
    const v = ev.target;
    const errCode = v.error?.code;
    const errMsg = v.error?.message;
    const networkState = v.networkState;
    const readyState = v.readyState;
    console.warn("[Video load error]", {
      name: item.name,
      url: item.sourceUrl,
      errCode,
      // 1=ABORTED 2=NETWORK 3=DECODE 4=SRC_NOT_SUPPORTED
      errMsg,
      networkState,
      // 0=EMPTY 1=IDLE 2=LOADING 3=NO_SOURCE
      readyState
    });
    this.showToast(`\u300C${item.name}\u300D\u304C\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F (${errCode === 4 ? "\u5F62\u5F0F\u975E\u5BFE\u5FDC" : "\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF"})`);
  }
  onVideoLoaded(ev, item) {
    const v = ev.target;
    console.log("[Video loaded]", { name: item.name, duration: v.duration, w: v.videoWidth, h: v.videoHeight });
  }
  /** メディアアイテム(画像/動画/ファイル)をダウンロードする。モックデータのため Blob を生成。 */
  downloadMediaItem(item, event) {
    event?.stopPropagation();
    if (item.thumbnail && item.thumbnail.startsWith("data:")) {
      this.downloadDataUrl(item.thumbnail, item.name);
      this.showToast(`\u300C${item.name}\u300D\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3057\u305F`);
      return;
    }
    const content = `# ${item.name}

Type: ${item.type}
Size: ${item.size}
Date: ${item.date}

(This is a mock file generated for demo purposes.)
`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = item.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
    this.showToast(`\u300C${item.name}\u300D\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3057\u305F`);
  }
  toggleBookmark(msg) {
    const next = !msg.bookmarked;
    this.messages = this.messages.map((m) => m.id === msg.id ? __spreadProps(__spreadValues({}, m), { bookmarked: next, bookmarkedAt: next ? Date.now() : void 0 }) : m);
    this.showMessageMenu = false;
    this.showToast(next ? "\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9\u306E\u30DE\u30A4\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F" : "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u89E3\u9664\u3057\u307E\u3057\u305F");
  }
  /** ブックマーク一覧からクリックでルーム遷移＋スクロール */
  jumpToBookmark(msg) {
    if (this.selectedRoomId !== msg.roomId) {
      this.selectedRoomId = msg.roomId;
      this.syncUrl();
      this.rightPanelView = "menu";
    } else {
      this.backToRightPanelMenu();
    }
    this.cdr.markForCheck();
    setTimeout(() => this.scrollToMessage(msg.id), 150);
  }
  // ====== Profile: 右ナビ内インラインパネル (stg.schecon.com 風) ======
  openProfile(member) {
    if (member) {
      this.profileTarget = member;
    } else {
      const other = this.selectedRoom?.members?.find((m) => m.id !== "me") || this.selectedRoom?.members?.[0] || null;
      this.profileTarget = other;
    }
    this.showDetailPanel = true;
    this.rightPanelView = "profile";
    this.cdr.markForCheck();
  }
  /** 通知設定を右ナビ内で開く */
  openNotificationSettings() {
    this.showDetailPanel = true;
    this.rightPanelView = "notifications";
    this.cdr.markForCheck();
  }
  /** ルームのミュート状態を切り替え */
  toggleRoomMute(room) {
    const next = !room.muted;
    this.rooms = this.rooms.map((r) => r.id === room.id ? __spreadProps(__spreadValues({}, r), { muted: next }) : r);
    this.showToast(next ? "\u3053\u306E\u30C1\u30E3\u30C3\u30C8\u3092\u30DF\u30E5\u30FC\u30C8\u3057\u307E\u3057\u305F" : "\u30DF\u30E5\u30FC\u30C8\u3092\u89E3\u9664\u3057\u307E\u3057\u305F");
    this.cdr.markForCheck();
  }
  // ====== アバター画像 変更フロー ======
  /** 右ナビのアバターの「変更」ボタンから、ファイル選択ダイアログを開く */
  triggerAvatarUpload() {
    const input = this.avatarFileInputRef?.nativeElement;
    if (input) {
      input.value = "";
      input.click();
    }
  }
  /** ファイルが選択されたら dataURL に変換してクロップモーダルを開く
   *  - 大きい画像は即時クロップ UI に出すのではなく、縮小済みの preview を生成してから開く
   *  - その間スピナー表示で「固まった?」感を防ぐ
   */
  onAvatarFileSelected(event) {
    const input = event.target;
    const file = input.files && input.files[0];
    if (!file)
      return;
    if (!file.type.startsWith("image/")) {
      this.showToast("\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      this.showToast("8MB \u4EE5\u4E0B\u306E\u753B\u50CF\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    this.avatarCropLoading = true;
    this.avatarCropSrc = null;
    this.avatarCropX = 0;
    this.avatarCropY = 0;
    this.avatarCropZoom = 1;
    this.showAvatarCropModal = true;
    this.cdr.detectChanges();
    const kick = () => {
      this.prepareAvatarPreview(file).then((dataUrl) => {
        this.avatarCropSrc = dataUrl;
        this.avatarCropLoading = false;
        this.cdr.markForCheck();
      }).catch(() => {
        this.avatarCropLoading = false;
        this.showAvatarCropModal = false;
        this.avatarCropSrc = null;
        this.showToast("\u753B\u50CF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F");
        this.cdr.markForCheck();
      });
    };
    if (typeof requestAnimationFrame !== "undefined") {
      requestAnimationFrame(() => requestAnimationFrame(kick));
    } else {
      setTimeout(kick, 0);
    }
  }
  /**
   * 大きい画像はプレビュー用に縮小してからクロップ UI に渡す。
   * - 1024px (long edge) に収まる小さい画像ならそのまま dataURL
   * - それより大きいものは createImageBitmap + OffscreenCanvas で縮小
   *   → クロップ UI 上の描画負荷を大幅削減し、ドラッグ / ズームが軽快に
   */
  prepareAvatarPreview(file) {
    return __async(this, null, function* () {
      const PREVIEW_MAX = 1024;
      if (file.size < 500 * 1024) {
        return this.readFileAsDataUrl(file);
      }
      if (typeof createImageBitmap === "function") {
        try {
          const bitmap = yield createImageBitmap(file);
          const longEdge = Math.max(bitmap.width, bitmap.height);
          if (longEdge <= PREVIEW_MAX) {
            bitmap.close?.();
            return this.readFileAsDataUrl(file);
          }
          const scale = PREVIEW_MAX / longEdge;
          const tw = Math.round(bitmap.width * scale);
          const th = Math.round(bitmap.height * scale);
          const useOffscreen = typeof OffscreenCanvas !== "undefined";
          if (useOffscreen) {
            const off = new OffscreenCanvas(tw, th);
            const octx = off.getContext("2d");
            if (!octx)
              throw new Error("no ctx");
            octx.drawImage(bitmap, 0, 0, tw, th);
            bitmap.close?.();
            const blob = yield off.convertToBlob({ type: "image/jpeg", quality: 0.9 });
            return yield this.readBlobAsDataUrl(blob);
          }
          const canvas = document.createElement("canvas");
          canvas.width = tw;
          canvas.height = th;
          const ctx = canvas.getContext("2d");
          if (!ctx)
            throw new Error("no ctx");
          ctx.drawImage(bitmap, 0, 0, tw, th);
          bitmap.close?.();
          return canvas.toDataURL("image/jpeg", 0.9);
        } catch {
        }
      }
      return this.readFileAsDataUrl(file);
    });
  }
  readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }
  readBlobAsDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }
  onCropDragStart(event) {
    event.preventDefault();
    if ("touches" in event && event.touches.length >= 2) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      this.pinchStartDist = Math.hypot(dx, dy);
      this.pinchStartZoom = this.avatarCropZoom;
      this.avatarCropDragging = false;
      return;
    }
    this.avatarCropDragging = true;
    const pt = this.getPointerXY(event);
    this.avatarDragStartX = pt.x;
    this.avatarDragStartY = pt.y;
    this.avatarDragOriginX = this.avatarCropX;
    this.avatarDragOriginY = this.avatarCropY;
  }
  /** ドラッグ中 — host listener から呼ばれる */
  onCropDragMove(event) {
    if ("touches" in event && event.touches.length >= 2 && this.pinchStartDist > 0) {
      event.preventDefault?.();
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const scale = dist / this.pinchStartDist;
      this.avatarCropZoom = Math.max(1, Math.min(3, this.pinchStartZoom * scale));
      this.cdr.markForCheck();
      return;
    }
    if (!this.avatarCropDragging)
      return;
    const pt = this.getPointerXY(event);
    this.avatarCropX = this.avatarDragOriginX + (pt.x - this.avatarDragStartX);
    this.avatarCropY = this.avatarDragOriginY + (pt.y - this.avatarDragStartY);
    this.cdr.markForCheck();
  }
  /** ドラッグ終了 */
  onCropDragEnd() {
    this.avatarCropDragging = false;
    this.pinchStartDist = 0;
  }
  /** ポインタ座標取得 (mouse/touch 両対応) */
  getPointerXY(event) {
    if ("touches" in event && event.touches.length) {
      return { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
    if ("changedTouches" in event && event.changedTouches.length) {
      return { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
    }
    const me = event;
    return { x: me.clientX, y: me.clientY };
  }
  /** ホイールでズーム (stage 上) */
  onCropWheel(event) {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 0.08 : -0.08;
    this.avatarCropZoom = Math.max(1, Math.min(3, this.avatarCropZoom + delta));
    this.cdr.markForCheck();
  }
  /** 位置とズームをリセット */
  resetAvatarCrop() {
    this.avatarCropX = 0;
    this.avatarCropY = 0;
    this.avatarCropZoom = 1;
  }
  /** 虫眼鏡アイコンクリックでズーム調整 */
  adjustCropZoom(delta) {
    this.avatarCropZoom = Math.max(1, Math.min(3, this.avatarCropZoom + delta));
    this.cdr.markForCheck();
  }
  /** キャンセル: モーダルを閉じて状態クリア */
  cancelAvatarCrop() {
    this.showAvatarCropModal = false;
    this.avatarCropSrc = null;
    this.avatarCropLoading = false;
    this.avatarCropSaving = false;
  }
  setupVisualViewportHandler() {
    if (typeof window === "undefined" || !window.visualViewport)
      return;
    const apply = () => {
      const vv = window.visualViewport;
      const inputEl = document.querySelector(".chat-room__input");
      const bottomOffset = Math.max(0, window.innerHeight - (vv.offsetTop + vv.height));
      try {
        document.documentElement.style.setProperty("--kb-h", bottomOffset + "px");
      } catch {
      }
      try {
        if (bottomOffset > 20) {
          document.body.classList.add("keyboard-open");
          document.querySelector(".chat-room__input")?.classList.remove("chat-room__input--hidden");
        } else {
          document.body.classList.remove("keyboard-open");
        }
      } catch {
      }
      if (!inputEl)
        return;
      if (bottomOffset > 20) {
        inputEl.style.bottom = bottomOffset + "px";
        inputEl.style.transform = "none";
        inputEl.style.opacity = "1";
        inputEl.style.pointerEvents = "auto";
        inputEl.style.visibility = "visible";
      } else {
        inputEl.style.bottom = "";
        inputEl.style.transform = "";
        inputEl.style.opacity = "";
        inputEl.style.pointerEvents = "";
        inputEl.style.visibility = "";
      }
    };
    this.vvHandler = () => {
      apply();
      requestAnimationFrame(apply);
      setTimeout(apply, 60);
      setTimeout(apply, 200);
      setTimeout(apply, 500);
    };
    window.visualViewport.addEventListener("resize", this.vvHandler);
    window.visualViewport.addEventListener("scroll", this.vvHandler);
    this.inputFocusHandler = (e) => {
      const t = e.target;
      if (!t)
        return;
      const tag = (t.tagName || "").toLowerCase();
      if (tag === "textarea" || tag === "input" || t.isContentEditable) {
        try {
          document.body.classList.add("keyboard-open");
          if (!document.documentElement.style.getPropertyValue("--kb-h")) {
            document.documentElement.style.setProperty("--kb-h", "316px");
          }
        } catch {
        }
        this.vvHandler();
        setTimeout(() => {
          try {
            t.scrollIntoView({ block: "nearest", behavior: "auto" });
          } catch {
          }
          apply();
        }, 350);
      }
    };
    document.addEventListener("focusin", this.inputFocusHandler, true);
    document.addEventListener("focusout", () => setTimeout(apply, 200), true);
  }
  setupScrollHandler() {
    let lastY = 0;
    let rafId = null;
    const showAll = () => {
      if (!this.headerHidden)
        return;
      this.headerHidden = false;
      this.pinnedHidden = false;
      document.querySelector(".header")?.classList.remove("header--hidden");
      document.querySelector(".chat-room")?.classList.remove("chat-room--scroll-collapsed");
      document.querySelector(".chat-list")?.classList.remove("chat-list--scroll-collapsed");
      document.querySelector(".chat-room__input")?.classList.remove("chat-room__input--hidden");
      document.querySelector(".nav-bottom")?.classList.remove("nav-bottom--hidden");
      this.cdr.markForCheck();
    };
    const hideAll = () => {
      if (this.headerHidden)
        return;
      if (this.inputFocused) {
        return;
      }
      if (typeof document !== "undefined" && document.body.classList.contains("keyboard-open")) {
        return;
      }
      this.headerHidden = true;
      this.pinnedHidden = true;
      document.querySelector(".header")?.classList.add("header--hidden");
      document.querySelector(".chat-room")?.classList.add("chat-room--scroll-collapsed");
      document.querySelector(".chat-list")?.classList.add("chat-list--scroll-collapsed");
      document.querySelector(".chat-room__input")?.classList.remove("chat-room__input--hidden");
      document.querySelector(".nav-bottom")?.classList.add("nav-bottom--hidden");
      this.cdr.markForCheck();
    };
    const onScroll = () => {
      if (rafId)
        return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (Date.now() < this.suppressScrollUntilMs) {
          lastY = window.scrollY || 0;
          return;
        }
        const y = window.scrollY || 0;
        const delta = y - lastY;
        if (y <= 10) {
          showAll();
          lastY = y;
          return;
        }
        if (delta < 0) {
          showAll();
          lastY = y;
          return;
        }
        if (delta > 6 && y > 30) {
          hideAll();
        }
        lastY = y;
      });
    };
    this.scrollListenerBound = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchend", () => {
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        if (y <= 10)
          showAll();
      });
    }, { passive: true });
  }
  /**
   * クロップ結果を canvas に合成して dataURL にし、現在のルームの avatarImage にセット。
   *
   * 方式: CSS の描画を Canvas で直接再現する。
   * ブラウザが画面に描画するのと同じ手順で canvas に描画するため、
   * ユーザーがモーダルで見た結果と完全に一致する。
   *
   * CSS の描画手順:
   * 1. ステージ (240x240) 内に画像要素が flex center で配置される
   * 2. img に max-width/max-height: 100% が効いて fit される（ベースサイズ bw×bh）
   * 3. CSS transform: translate(Tx,Ty) scale(S) が transform-origin(center) で適用される
   * → canvas でこの手順を再現し、ステージ領域を出力サイズにスケーリングする。
   */
  saveAvatarCrop() {
    if (!this.avatarCropSrc || !this.selectedRoom)
      return;
    if (this.avatarCropSaving)
      return;
    this.avatarCropSaving = true;
    this.cdr.markForCheck();
    const outputSize = 256;
    const roomId = this.selectedRoomId;
    const isMyChat = this.isMyChat;
    const Tx = this.avatarCropX;
    const Ty = this.avatarCropY;
    const S = this.avatarCropZoom;
    const cropSrc = this.avatarCropSrc;
    const stageEl = document.querySelector(".avatar-crop__stage");
    const stageSize = stageEl ? stageEl.clientWidth : 240;
    const tempImg = new Image();
    tempImg.onload = () => {
      requestAnimationFrame(() => this.processAvatarCanvas(tempImg, cropSrc, Tx, Ty, S, stageSize, outputSize, roomId, isMyChat));
    };
    tempImg.onerror = () => {
      this.avatarCropSaving = false;
      this.showToast("\u753B\u50CF\u306E\u51E6\u7406\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F");
      this.cdr.markForCheck();
    };
    tempImg.src = cropSrc;
  }
  /** Canvas 処理本体 (saveAvatarCrop から呼ばれる) - requestAnimationFrame 後に実行してスピナー表示を保証 */
  processAvatarCanvas(tempImg, _cropSrc, Tx, Ty, S, stageSize, outputSize, roomId, isMyChat) {
    try {
      const nw = tempImg.naturalWidth;
      const nh = tempImg.naturalHeight;
      if (nw === 0 || nh === 0) {
        this.avatarCropSaving = false;
        this.cdr.detectChanges();
        return;
      }
      const baseScale = Math.min(1, stageSize / nw, stageSize / nh);
      const bw = nw * baseScale;
      const bh = nh * baseScale;
      const canvas = document.createElement("canvas");
      canvas.width = outputSize;
      canvas.height = outputSize;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        this.avatarCropSaving = false;
        this.cdr.detectChanges();
        return;
      }
      const outScale = outputSize / stageSize;
      ctx.save();
      ctx.beginPath();
      ctx.arc(outputSize / 2, outputSize / 2, outputSize / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.fillStyle = "#222";
      ctx.fillRect(0, 0, outputSize, outputSize);
      ctx.scale(outScale, outScale);
      const elemLeft = (stageSize - bw) / 2;
      const elemTop = (stageSize - bh) / 2;
      ctx.translate(elemLeft, elemTop);
      ctx.translate(bw / 2, bh / 2);
      ctx.translate(Tx, Ty);
      ctx.scale(S, S);
      ctx.translate(-bw / 2, -bh / 2);
      ctx.drawImage(tempImg, 0, 0, bw, bh);
      ctx.restore();
      const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
      if (isMyChat) {
        this.myAvatarImage = dataUrl;
        this.rooms = this.rooms.map((r) => r.id === roomId ? __spreadProps(__spreadValues({}, r), { avatarImage: dataUrl }) : r);
        this.persistAvatarImage("__my_avatar__", dataUrl);
        this.showToast("\u81EA\u5206\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
      } else {
        this.rooms = this.rooms.map((r) => r.id === roomId ? __spreadProps(__spreadValues({}, r), { avatarImage: dataUrl }) : r);
        this.persistAvatarImage(roomId, dataUrl);
        this.showToast("\u30B0\u30EB\u30FC\u30D7\u30A2\u30A4\u30B3\u30F3\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
      }
      this.showAvatarCropModal = false;
      this.avatarCropSrc = null;
      this.avatarCropSaving = false;
      this.cdr.detectChanges();
    } catch (e) {
      console.error("[avatar] crop error", e);
      this.avatarCropSaving = false;
      this.showToast("\u753B\u50CF\u306E\u51E6\u7406\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F");
      this.cdr.detectChanges();
    }
  }
  /** localStorage にアバター画像を保存 */
  persistAvatarImage(roomId, dataUrl) {
    try {
      const raw = localStorage.getItem(this.AVATAR_STORAGE_KEY);
      const map2 = raw ? JSON.parse(raw) : {};
      map2[roomId] = dataUrl;
      localStorage.setItem(this.AVATAR_STORAGE_KEY, JSON.stringify(map2));
    } catch (e) {
      console.warn("[avatar] localStorage \u4FDD\u5B58\u5931\u6557", e);
    }
  }
  /** 起動時に localStorage から復元 */
  loadPersistedAvatars() {
    try {
      const raw = localStorage.getItem(this.AVATAR_STORAGE_KEY);
      if (!raw)
        return;
      const map2 = JSON.parse(raw);
      this.rooms = this.rooms.map((r) => map2[r.id] ? __spreadProps(__spreadValues({}, r), { avatarImage: map2[r.id] }) : r);
      if (map2["__my_avatar__"]) {
        this.myAvatarImage = map2["__my_avatar__"];
      }
    } catch (e) {
      console.warn("[avatar] localStorage \u8AAD\u8FBC\u5931\u6557", e);
    }
  }
  /* fix Sheet#57/#60 (2026-04-27): フォルダ全体 (ID/name/parent/icon) を永続化。
     新規フォルダや rename/delete 後に他ページから戻っても保持される */
  persistFolders() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const data = this.folders.map((f) => ({
        id: f.id,
        name: f.name,
        icon: f.icon,
        parentId: f.parentId,
        system: f.system
      }));
      localStorage.setItem(this.FOLDERS_STORAGE_KEY, JSON.stringify(data));
    } catch {
    }
  }
  loadPersistedFolders() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const raw = localStorage.getItem(this.FOLDERS_STORAGE_KEY);
      if (!raw)
        return;
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr))
        return;
      const sysIds = new Set(this.folders.filter((f) => f.system).map((f) => f.id));
      const userOnly = arr.filter((f) => f && f.id && !sysIds.has(f.id));
      const seedSystem = this.folders.filter((f) => f.system);
      const seedUser = this.folders.filter((f) => !f.system);
      const merged = [...seedSystem, ...userOnly];
      const mergedIds = new Set(merged.map((f) => f.id));
      seedUser.forEach((f) => {
        if (!mergedIds.has(f.id))
          merged.push(f);
      });
      this.folders = merged;
    } catch {
    }
  }
  /* fix Sheet#56 (2026-04-27): 各ルームの folderIds / starred 情報を永続化 */
  persistRoomFolders() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const map2 = {};
      this.rooms.forEach((r) => {
        if (r.folderIds?.length || r.folderId || r.starred) {
          map2[r.id] = {
            folderIds: r.folderIds,
            folderId: r.folderId,
            starred: r.starred
          };
        }
      });
      localStorage.setItem(this.ROOM_FOLDERS_STORAGE_KEY, JSON.stringify(map2));
    } catch {
    }
  }
  loadPersistedRoomFolders() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const raw = localStorage.getItem(this.ROOM_FOLDERS_STORAGE_KEY);
      if (!raw)
        return;
      const map2 = JSON.parse(raw);
      if (!map2 || typeof map2 !== "object")
        return;
      this.rooms = this.rooms.map((r) => {
        const saved = map2[r.id];
        if (!saved)
          return r;
        return __spreadProps(__spreadValues({}, r), {
          folderIds: saved.folderIds ?? r.folderIds,
          folderId: saved.folderId ?? r.folderId,
          starred: saved.starred ?? r.starred
        });
      });
    } catch {
    }
  }
  persistBlocks() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      localStorage.setItem(this.BLOCKS_STORAGE_KEY, JSON.stringify(Array.from(this.blockedRoomIds)));
    } catch {
    }
  }
  loadPersistedBlocks() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const raw = localStorage.getItem(this.BLOCKS_STORAGE_KEY);
      if (!raw)
        return;
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr))
        return;
      this.blockedRoomIds = new Set(arr);
      if (this.blockedRoomIds.size) {
        this.rooms = this.rooms.filter((r) => !this.blockedRoomIds.has(r.id));
      }
    } catch {
    }
  }
  /* fix Sheet#53 (2026-04-27): リアクションを永続化 (msgId -> reactions[])。
     toggle 後すぐに保存し、起動時に this.messages にマージ */
  persistReactions() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const map2 = {};
      this.messages.forEach((m) => {
        if (m.reactions && m.reactions.length) {
          map2[m.id] = m.reactions.map((r) => __spreadValues({}, r));
        }
      });
      localStorage.setItem(this.REACTIONS_STORAGE_KEY, JSON.stringify(map2));
    } catch {
    }
  }
  loadPersistedReactions() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const raw = localStorage.getItem(this.REACTIONS_STORAGE_KEY);
      if (!raw)
        return;
      const map2 = JSON.parse(raw);
      if (!map2 || typeof map2 !== "object")
        return;
      this.messages = this.messages.map((m) => map2[m.id] ? __spreadProps(__spreadValues({}, m), { reactions: map2[m.id] }) : m);
    } catch {
    }
  }
  persistReads() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      localStorage.setItem(this.READS_STORAGE_KEY, JSON.stringify(Array.from(this.readRoomIds)));
    } catch {
    }
  }
  loadPersistedReads() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const raw = localStorage.getItem(this.READS_STORAGE_KEY);
      if (!raw)
        return;
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr))
        return;
      this.readRoomIds = new Set(arr);
      if (this.readRoomIds.size) {
        this.rooms = this.rooms.map((r) => this.readRoomIds.has(r.id) ? __spreadProps(__spreadValues({}, r), { unreadCount: 0 }) : r);
      }
    } catch {
    }
  }
  loadPersistedDraft() {
    if (this.selectedRoomId) {
      this.loadDraftForRoom(this.selectedRoomId);
    }
  }
  loadDraftForRoom(roomId) {
    try {
      const raw = localStorage.getItem(this.DRAFT_STORAGE_KEY);
      if (!raw) {
        this.messageInput = "";
        return;
      }
      const map2 = JSON.parse(raw);
      this.messageInput = map2[roomId] || "";
      this.cdr.markForCheck();
    } catch (e) {
      this.messageInput = "";
    }
  }
  saveDraftForRoom(roomId, text) {
    if (!roomId)
      return;
    if (this.draftSaveTimer)
      clearTimeout(this.draftSaveTimer);
    this.draftSaveTimer = setTimeout(() => this.flushDraftForRoom(roomId, text), 300);
  }
  /** debounce を待たず即時に下書きを localStorage へ flush する。
   *  (ページ離脱 / コンポーネント破棄 / beforeunload の直前で使用)
   *  ユーザー指示 2026-04-21: 他ページへ遷移しても下書きが確実に復活するよう
   *  debounce を待たずに確実に保存。 */
  flushDraftForRoom(roomId, text) {
    if (!roomId)
      return;
    try {
      const raw = localStorage.getItem(this.DRAFT_STORAGE_KEY);
      const map2 = raw ? JSON.parse(raw) : {};
      if (text && text.trim()) {
        map2[roomId] = text;
      } else {
        delete map2[roomId];
      }
      localStorage.setItem(this.DRAFT_STORAGE_KEY, JSON.stringify(map2));
    } catch (e) {
    }
  }
  clearDraftForRoom(roomId) {
    try {
      const raw = localStorage.getItem(this.DRAFT_STORAGE_KEY);
      if (!raw)
        return;
      const map2 = JSON.parse(raw);
      delete map2[roomId];
      localStorage.setItem(this.DRAFT_STORAGE_KEY, JSON.stringify(map2));
    } catch (e) {
    }
  }
  /** 入力変化のたびに draft を保存 (textareaの ngModelChange から呼ばれる) */
  onMessageInputChange(value) {
    this.messageInput = value;
    if (this.selectedRoomId) {
      this.saveDraftForRoom(this.selectedRoomId, value);
    }
    this.maybeOpenInsertionPopup(value);
  }
  /** fix B1 (2026-04-28): textarea focus 即時に visualViewport 補正 + 入力エリアを
   *  画面下端に強制配置。「何回かスクロールすると表示される」問題を解消し、
   *  最初のフォーカスから入力エリアが必ず可視に。 */
  onInputFocus() {
    this.inputFocused = true;
    if (typeof window !== "undefined" && this.isMobile) {
      const inputEl = document.querySelector(".chat-room__input");
      if (inputEl) {
        inputEl.classList.remove("chat-room__input--hidden");
      }
      const adjust = () => {
        const vv = window.visualViewport;
        if (!vv || !inputEl)
          return;
        const bottomOffset = Math.max(0, window.innerHeight - (vv.offsetTop + vv.height));
        inputEl.style.bottom = bottomOffset + "px";
        inputEl.scrollIntoView({ block: "end", behavior: "auto" });
      };
      adjust();
      setTimeout(adjust, 100);
      setTimeout(adjust, 300);
      setTimeout(adjust, 600);
      this.forceScrollToBottom(6);
    }
  }
  onInputBlur() {
    this.inputFocused = false;
    if (typeof window !== "undefined" && this.isMobile) {
      setTimeout(() => {
        const inputEl = document.querySelector(".chat-room__input");
        if (inputEl)
          inputEl.style.bottom = "";
      }, 100);
    }
  }
  /** カーソル位置直前のトークンを見て @メンション / #タグ ポップアップを自動表示 */
  maybeOpenInsertionPopup(value) {
    const ta = this.msgInputRef?.nativeElement;
    const cursor = ta?.selectionStart ?? value.length;
    const before = value.slice(0, cursor);
    const m = before.match(/(^|[\s　])([@#])([^\s　@#]*)$/);
    if (m) {
      const trigger = m[2];
      const query = (m[3] || "").toLowerCase();
      if (trigger === "@" && (this.isGroup || this.isMyChat)) {
        this.showTagPopup = false;
        this.showMentionPopup = true;
        const all = (this.selectedRoom?.members || []).filter((mem) => mem.id !== "me");
        this.mentionCandidates = query ? all.filter((mem) => mem.name.toLowerCase().includes(query)) : all;
        this.mentionActiveIndex = 0;
      } else if (trigger === "#") {
        this.showMentionPopup = false;
        this.showTagPopup = true;
        this.tagCandidates = query ? this.availableTags.filter((t) => t.label.toLowerCase().includes(query)) : this.availableTags;
      }
      return;
    }
    if (this.showMentionPopup || this.showTagPopup) {
      this.showMentionPopup = false;
      this.showTagPopup = false;
    }
  }
  /** 遷移/破棄直前に下書きを確実に保存するため beforeunload + ngOnDestroy */
  onBeforeUnload() {
    if (this.selectedRoomId) {
      if (this.draftSaveTimer) {
        clearTimeout(this.draftSaveTimer);
        this.draftSaveTimer = null;
      }
      this.flushDraftForRoom(this.selectedRoomId, this.messageInput);
    }
  }
  ngOnDestroy() {
    if (this.selectedRoomId) {
      if (this.draftSaveTimer) {
        clearTimeout(this.draftSaveTimer);
        this.draftSaveTimer = null;
      }
      this.flushDraftForRoom(this.selectedRoomId, this.messageInput);
    }
    this.scheduledSubs.forEach((s) => s.unsubscribe());
    this.scheduledSubs = [];
    if (this.vvHandler && window.visualViewport) {
      window.visualViewport.removeEventListener("resize", this.vvHandler);
      window.visualViewport.removeEventListener("scroll", this.vvHandler);
      this.vvHandler = null;
    }
    if (this.inputFocusHandler) {
      document.removeEventListener("focusin", this.inputFocusHandler, true);
      this.inputFocusHandler = null;
    }
    try {
      document.body.classList.remove("keyboard-open");
      document.documentElement.style.removeProperty("--kb-h");
    } catch {
    }
  }
  /** Navigate to the full profile page for a member (connects to address-book). */
  goToFullProfile(member) {
    if (!member)
      return;
    this.closeAllModals();
    this.router.navigate(["/address-book", member.id]);
  }
  copyProfileEmail(email, event) {
    event?.stopPropagation();
    if (!email)
      return;
    const done = () => {
      this.copiedEmailAddress = email;
      this.showToast("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
      this.cdr.markForCheck();
      setTimeout(() => {
        this.copiedEmailAddress = null;
        this.cdr.markForCheck();
      }, 2500);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(done).catch(() => {
        this.legacyCopy(email);
        done();
      });
    } else {
      this.legacyCopy(email);
      done();
    }
  }
  legacyCopy(text) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    } catch {
    }
  }
  /** プロフィールの「メール送信」ボタン: /mail に遷移して新規作成モードを開く
   *  (ユーザー指示 2026-04-21) */
  composeMailToProfile(member, event) {
    event?.stopPropagation();
    if (!member || !member.email)
      return;
    this.closeAllModals();
    this.router.navigate(["/mail"], {
      queryParams: {
        compose: "new",
        to: member.email,
        toName: member.name || ""
      }
    });
  }
  // ====== Block ======
  openBlockConfirm() {
    this.rightPanelView = "block-confirm";
  }
  confirmBlock() {
    const id = this.selectedRoomId;
    this.rooms = this.rooms.filter((r) => r.id !== id);
    this.messages = this.messages.filter((m) => m.roomId !== id);
    this.blockedRoomIds.add(id);
    this.persistBlocks();
    this.selectedRoomId = this.rooms[0]?.id || "";
    this.rightPanelView = "menu";
    this.showToast("\u30C1\u30E3\u30C3\u30C8\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F");
  }
  // ====== AI modal ======
  openAiModal() {
    this.aiResult = "";
    this.aiSuggestions = [];
    if (this.replyToMessage) {
      this.aiMode = "reply";
      this.aiPrompt = this.replyToMessage.text || "";
      this.showAiModal = true;
      this.generateAi();
    } else if (this.messageInput.trim().length > 0) {
      this.aiMode = "improve";
      this.aiPrompt = this.messageInput;
      this.showAiModal = true;
      this.generateAi();
    } else {
      this.aiMode = "template";
      this.aiTemplate = "greeting";
      this.aiPrompt = this.quickAiTemplates[0].prompt;
      this.showAiModal = true;
    }
  }
  selectAiTemplate(id) {
    const t = this.quickAiTemplates.find((t2) => t2.id === id);
    if (t) {
      this.aiTemplate = id;
      this.aiPrompt = t.prompt;
    }
  }
  generateAi() {
    this.aiLoading = true;
    this.aiResult = "";
    this.aiSuggestions = [];
    if (this.aiMode === "reply") {
      const replyText = this.aiPrompt;
      this._callGeminiForSuggestions(`\u3042\u306A\u305F\u306F\u30D3\u30B8\u30CD\u30B9\u30C1\u30E3\u30C3\u30C8\u306E\u30A2\u30B7\u30B9\u30BF\u30F3\u30C8\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u5BFE\u3059\u308B\u9069\u5207\u306A\u8FD4\u4FE1\u5019\u88DC\u30923\u3064\u751F\u6210\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u308C\u305E\u308C\u7570\u306A\u308B\u30C8\u30FC\u30F3\uFF08\u4E01\u5BE7\u30FB\u30AB\u30B8\u30E5\u30A2\u30EB\u30FB\u7C21\u6F54\uFF09\u3067\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u5404\u5019\u88DC\u306F\u300C---\u300D\u3067\u533A\u5207\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u5019\u88DC\u4EE5\u5916\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u542B\u3081\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002

\u30E1\u30C3\u30BB\u30FC\u30B8: ${replyText}`);
    } else if (this.aiMode === "improve") {
      const draft = this.aiPrompt;
      this._callGeminiForSuggestions(`\u3042\u306A\u305F\u306F\u30D3\u30B8\u30CD\u30B9\u30C1\u30E3\u30C3\u30C8\u306E\u6587\u7AE0\u6539\u5584\u30A2\u30B7\u30B9\u30BF\u30F3\u30C8\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u4E0B\u66F8\u304D\u30C6\u30AD\u30B9\u30C8\u3092\u3001\u3088\u308A\u4F1D\u308F\u308A\u3084\u3059\u304F\u3001\u308F\u304B\u308A\u3084\u3059\u304F\u3001\u88DC\u8DB3\u306E\u52B9\u3044\u305F\u6587\u7AE0\u306B\u6539\u5584\u3057\u3066\u304F\u3060\u3055\u3044\u30023\u3064\u306E\u7570\u306A\u308B\u6539\u5584\u6848\u3092\u63D0\u793A\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u4E01\u5BE7\u7248\u30FB\u7C21\u6F54\u7248\u30FB\u8A73\u7D30\u7248\uFF09\u3002\u5404\u5019\u88DC\u306F\u300C---\u300D\u3067\u533A\u5207\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u5019\u88DC\u4EE5\u5916\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u542B\u3081\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002

\u4E0B\u66F8\u304D: ${draft}`);
    } else {
      setTimeout(() => {
        const samples = {
          greeting: "\u304A\u4E16\u8A71\u306B\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002\n\u77F3\u6FA4\u3067\u3059\u3002\n\u672C\u65E5\u3082\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002",
          schedule: "\u304A\u4E16\u8A71\u306B\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002\n\u6765\u9031\u306E\u6253\u3061\u5408\u308F\u305B\u306E\u4EF6\u3067\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3057\u305F\u3002\n\u4EE5\u4E0B\u306E\u5019\u88DC\u65E5\u3067\u3054\u90FD\u5408\u3044\u304B\u304C\u3067\u3057\u3087\u3046\u304B\u3002\n\u30FB3/15 (\u6708) 14:00-\n\u30FB3/16 (\u706B) 10:00-\n\u30FB3/17 (\u6C34) 15:00-",
          followup: "\u304A\u4E16\u8A71\u306B\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002\n\u5148\u65E5\u306E\u5546\u8AC7\u306F\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u3002\n\u305D\u306E\u5F8C\u3001\u3054\u691C\u8A0E\u72B6\u6CC1\u306F\u3044\u304B\u304C\u3067\u3057\u3087\u3046\u304B\u3002\n\u3054\u4E0D\u660E\u70B9\u306A\u3069\u3054\u3056\u3044\u307E\u3057\u305F\u3089\u304A\u6C17\u8EFD\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002",
          thanks: "\u304A\u4E16\u8A71\u306B\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002\n\u672C\u65E5\u306F\u304A\u5FD9\u3057\u3044\u4E2D\u3001\u304A\u6642\u9593\u3092\u3044\u305F\u3060\u304D\u307E\u3057\u3066\u8AA0\u306B\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u3002\n\u5F15\u304D\u7D9A\u304D\u3001\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002",
          apology: "\u304A\u4E16\u8A71\u306B\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002\n\u3053\u306E\u5EA6\u306F\u3001\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u5909\u66F4\u306E\u3054\u9023\u7D61\u3068\u306A\u308A\u5927\u5909\u7533\u3057\u8A33\u3054\u3056\u3044\u307E\u305B\u3093\u3002\n\u4EE3\u66FF\u65E5\u7A0B\u306B\u3064\u3044\u3066\u5225\u9014\u3054\u76F8\u8AC7\u3055\u305B\u3066\u304F\u3060\u3055\u3044\u3002"
        };
        this.aiSuggestions = [samples[this.aiTemplate] || "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u751F\u6210\u3057\u307E\u3057\u305F\u3002"];
        this.aiLoading = false;
        this.cdr.markForCheck();
      }, 600);
    }
  }
  _callGeminiForSuggestions(prompt) {
    const apiKey = "AIzaSyAFJ0sI1LjhaTSVCCZ3XQnXuZ5TJDnPiKE";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    }).then((r) => r.json()).then((data) => {
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      this.aiSuggestions = text.split(/---+/).map((s) => s.trim()).filter((s) => s.length > 0);
      if (this.aiSuggestions.length === 0) {
        this.aiSuggestions = [text.trim() || "\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002"];
      }
      this.aiLoading = false;
      this.cdr.markForCheck();
    }).catch(() => {
      this.aiSuggestions = ["AI\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"];
      this.aiLoading = false;
      this.cdr.markForCheck();
    });
  }
  selectAiSuggestion(suggestion) {
    this.messageInput = suggestion;
    this.showAiModal = false;
    this.cdr.markForCheck();
  }
  applyAiResult() {
    if (this.aiResult) {
      this.messageInput = this.aiResult;
      this.showAiModal = false;
    }
  }
  openScheduleModal() {
    this.scheduleModal.open();
    this.showInputMenu = false;
    this.cdr.markForCheck();
  }
  /** 予定調整メニューを別タブで開く (AppComponent の picker-item から呼ばれる可能性有) */
  openScheduleInNewTab(path) {
    const base = (document.querySelector("base")?.getAttribute("href") || "/").replace(/\/$/, "");
    window.open(`${base}/${path}`, "_blank", "noopener");
    this.scheduleModal.close();
  }
  // ====== Attach modal ======
  openAttachModal() {
    this.showAttachModal = true;
  }
  /** Trigger native file picker (accept can be narrowed e.g. "image/*"). */
  triggerFilePicker(accept = "*/*") {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    input.multiple = true;
    input.onchange = () => {
      if (input.files && input.files.length > 0) {
        this.handleFiles(Array.from(input.files));
      }
    };
    input.click();
  }
  /** Drop handler for the attach modal drop zone. */
  onAttachDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const dt = event.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      this.handleFiles(Array.from(dt.files));
    }
  }
  onAttachDragOver(event) {
    event.preventDefault();
    if (event.dataTransfer)
      event.dataTransfer.dropEffect = "copy";
  }
  /**
   * Messenger風: 選んだファイルは即投稿せず、pendingAttachments に溜めてトレイに表示する。
   * 送信時に sendMessage() が text と pendingAttachments をまとめて投稿する。
   */
  handleFiles(files) {
    const startIdx = this.pendingAttachments.length;
    const added = files.map((f) => {
      const type = f.type.startsWith("image/") ? "image" : f.type.startsWith("video/") ? "video" : "file";
      return {
        name: f.name,
        size: this.formatFileSize(f.size),
        type,
        uploading: false,
        progress: 0
      };
    });
    this.pendingAttachments = [...this.pendingAttachments, ...added];
    this.pendingFiles = [...this.pendingFiles, ...files];
    this.showAttachModal = false;
    setTimeout(() => {
      const el = document.querySelector("textarea.msg-input");
      if (el)
        el.focus();
    }, 100);
    files.forEach((file, i) => {
      const idx = startIdx + i;
      if (added[i].type === "image") {
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataUrl = e.target?.result;
          this.pendingAttachments = this.pendingAttachments.map((a, j) => j === idx ? __spreadProps(__spreadValues({}, a), { dataUrl }) : a);
          this.cdr.markForCheck();
        };
        reader.readAsDataURL(file);
      }
    });
  }
  /** 送信前にトレイからサムネを外す */
  removePendingAttachment(index) {
    this.pendingAttachments = this.pendingAttachments.filter((_, i) => i !== index);
    this.pendingFiles = this.pendingFiles.filter((_, i) => i !== index);
  }
  /** 送信可能かどうか（本文 or 添付があれば送信可能、ただしOGP取得中は待機）
   * R-CHAT-04 fix (2026-04-27): URL貼付直後のOGP取得中にsendを押すと
   * プレビュー無しで送信されてOGP fetch結果が孤立する race を防止 */
  get canSend() {
    if (this.inputOgpLoading)
      return false;
    return this.messageInput.trim().length > 0 || this.pendingAttachments.length > 0;
  }
  trackByMsgId(_, msg) {
    return msg.id;
  }
  trackByAttName(_, att) {
    return att.name;
  }
  simulateUpload(messageId, attIndex) {
    let progress = 0;
    const tick = () => {
      progress += 8 + Math.random() * 12;
      if (progress >= 100) {
        this.updateAttachment(messageId, attIndex, { progress: 100, uploading: false });
        this.forceScrollToBottom(3);
      } else {
        this.updateAttachment(messageId, attIndex, { progress: Math.round(progress) });
        setTimeout(tick, 400 + Math.random() * 200);
      }
    };
    setTimeout(tick, 300);
  }
  updateAttachment(messageId, attIndex, patch) {
    this.messages = this.messages.map((m) => {
      if (m.id !== messageId || !m.attachments)
        return m;
      const atts = m.attachments.map((a, i) => i === attIndex ? __spreadValues(__spreadValues({}, a), patch) : a);
      return __spreadProps(__spreadValues({}, m), { attachments: atts });
    });
    this.cdr.markForCheck();
  }
  formatFileSize(bytes) {
    if (bytes < 1024)
      return bytes + " B";
    if (bytes < 1024 * 1024)
      return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }
  /** Legacy mock for the quick-pick buttons — kept for backward compat but now just opens the picker. */
  mockUploadFile(fileName) {
    const accept = fileName.match(/\.(png|jpe?g|gif|webp|svg)$/i) ? "image/*" : fileName.match(/\.(mp4|mov|webm)$/i) ? "video/*" : "*/*";
    this.triggerFilePicker(accept);
  }
  getMessageImages(msg) {
    return (msg.attachments || []).filter((a) => a.type === "image");
  }
  openLightbox(clicked, sourceMsg) {
    let images = [];
    if (sourceMsg) {
      this.lightboxSource = sourceMsg;
      images = (sourceMsg.attachments || []).filter((a) => a.type === "image" && a.dataUrl && !a.uploading);
    }
    if (images.length === 0) {
      this.lightboxSource = null;
      this.roomMessages.forEach((m) => {
        m.attachments?.forEach((a) => {
          if (a.type === "image" && a.dataUrl && !a.uploading)
            images.push(a);
        });
      });
    }
    if (images.length === 0)
      return;
    const idx = images.indexOf(clicked);
    this.lightboxImages = images;
    this.lightboxIndex = idx >= 0 ? idx : 0;
    this.showLightbox = true;
  }
  closeLightbox() {
    this.showLightbox = false;
  }
  downloadLightboxImage() {
    const img = this.currentLightboxImage;
    if (!img?.dataUrl)
      return;
    this.downloadDataUrl(img.dataUrl, img.name || "image.png");
  }
  /** data URL を Blob 経由で確実にダウンロードする */
  downloadDataUrl(dataUrl, filename) {
    fetch(dataUrl).then((res) => res.blob()).then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1e3);
    }).catch(() => {
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
  lightboxPrev() {
    if (this.lightboxImages.length === 0)
      return;
    this.lightboxIndex = (this.lightboxIndex - 1 + this.lightboxImages.length) % this.lightboxImages.length;
  }
  lightboxNext() {
    if (this.lightboxImages.length === 0)
      return;
    this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxImages.length;
  }
  get currentLightboxImage() {
    return this.lightboxImages[this.lightboxIndex] ?? null;
  }
  scrollMentionIntoView() {
    setTimeout(() => {
      const el = document.querySelector(`[data-mention-index="${this.mentionActiveIndex}"]`);
      if (el)
        el.scrollIntoView({ block: "nearest" });
    }, 0);
  }
  onLightboxTouchStart(e) {
    if (e.touches.length >= 2) {
      this.lightboxIsPinching = true;
      return;
    }
    this.lightboxIsPinching = false;
    const t = e.touches[0];
    if (!t)
      return;
    this.lightboxTouchStartX = t.clientX;
    this.lightboxTouchStartY = t.clientY;
  }
  /* 修正 No.56 (2026-04-25): 長押しメニュー発火時に document.getSelection() を
     クリアして、ブラウザ標準の範囲選択が残らないようにする */
  clearDocumentSelection() {
    try {
      const sel = window.getSelection?.();
      if (sel) {
        sel.removeAllRanges?.();
      }
    } catch {
    }
  }
  onBubbleTouchStart(e, msg) {
    const t = e.touches[0];
    if (!t)
      return;
    const x = t.clientX, y = t.clientY;
    this.bubbleTouchStartY = y;
    this.bubbleLongPressTimer = setTimeout(() => {
      this.clearDocumentSelection();
      this.messageMenuTarget = msg;
      this.messageMenuPos = this.clampMenuPosition(x, y, 200, 340);
      this.showMessageMenu = true;
      this.cdr.markForCheck();
      if (navigator.vibrate)
        navigator.vibrate(10);
    }, 500);
  }
  /** fix Critical #1 (2026-04-27): メニュー寸法を考慮して画面内に収める。
   *  - 右端: clientWidth - menuW - margin
   *  - 下端: clientHeight - menuH - margin
   *  - margin: 8px (safe-area より内側)
   */
  clampMenuPosition(x, y, menuW, menuH) {
    const margin = 8;
    const vw = window.innerWidth;
    const vh = window.visualViewport?.height || window.innerHeight;
    const maxX = Math.max(margin, vw - menuW - margin);
    const maxY = Math.max(margin, vh - menuH - margin);
    return {
      x: Math.min(Math.max(margin, x), maxX),
      y: Math.min(Math.max(margin, y), maxY)
    };
  }
  onBubbleTouchEnd() {
    if (this.bubbleLongPressTimer) {
      clearTimeout(this.bubbleLongPressTimer);
      this.bubbleLongPressTimer = null;
    }
    this.bubbleTouchStartY = null;
  }
  onBubbleTouchMove(e) {
    const t = e.touches[0];
    if (!t || this.bubbleTouchStartY == null) {
      this.onBubbleTouchEnd();
      return;
    }
    if (Math.abs(t.clientY - this.bubbleTouchStartY) > 10) {
      this.onBubbleTouchEnd();
    }
  }
  onLightboxTouchEnd(e) {
    if (this.lightboxIsPinching || e.touches.length > 0) {
      this.lightboxIsPinching = false;
      return;
    }
    const t = e.changedTouches[0];
    if (!t)
      return;
    const dx = t.clientX - this.lightboxTouchStartX;
    const dy = t.clientY - this.lightboxTouchStartY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0)
        this.lightboxPrev();
      else
        this.lightboxNext();
    }
  }
  // ====== Message context menu ======
  openMessageMenu(event, msg) {
    const sel = typeof window !== "undefined" ? window.getSelection() : null;
    if (sel && sel.toString().length > 0) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.messageMenuTarget = msg;
    this.messageMenuPos = this.clampMenuPosition(event.clientX, event.clientY, 200, 340);
    this.showMessageMenu = true;
  }
  replyMessage(msg) {
    this.replyToMessage = msg;
    this.showMessageMenu = false;
    this.showMobileInfoMenu = false;
    this.showMobileHeaderMenu = false;
    this.cdr.markForCheck();
    if (this.isMobile) {
      setTimeout(() => {
        const ta = document.querySelector(".chat-room__input textarea");
        if (ta)
          ta.focus();
      }, 50);
    }
  }
  cancelReply() {
    this.replyToMessage = null;
    this.cdr.markForCheck();
  }
  startEditMessage(msg) {
    this.editingMessageId = msg.id;
    this.editingText = msg.text;
    this.showMessageMenu = false;
  }
  saveEditMessage() {
    if (!this.editingMessageId)
      return;
    const newText = this.editingText.trim();
    if (!newText)
      return;
    this.messages = this.messages.map((m) => m.id === this.editingMessageId ? __spreadProps(__spreadValues({}, m), { text: newText, edited: true }) : m);
    this.editingMessageId = null;
    this.editingText = "";
    this.showToast("\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
    this.cdr.markForCheck();
  }
  cancelEditMessage() {
    this.editingMessageId = null;
    this.editingText = "";
    this.cdr.markForCheck();
  }
  /* 修正 No.53 (2026-04-24): 独自 confirm モーダル化 */
  withdrawMessage(msg) {
    return __async(this, null, function* () {
      this.showMessageMenu = false;
      const ok = yield this.confirmDialog.confirm({
        title: "\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u53D6\u308A\u6D88\u3057",
        message: "\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D6\u308A\u6D88\u3057\u307E\u3059\u304B\uFF1F\n\u5168\u54E1\u306E\u30C1\u30E3\u30C3\u30C8\u304B\u3089\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u53D6\u308A\u6D88\u3055\u308C\u307E\u3059\u3002",
        confirmText: "\u53D6\u308A\u6D88\u3059",
        danger: true
      });
      if (!ok)
        return;
      this.messages = this.messages.map((m) => m.id === msg.id ? __spreadProps(__spreadValues({}, m), { withdrawn: true, text: "", attachments: void 0, urlPreview: void 0, isPinned: false }) : m);
      this.showToast("\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D6\u308A\u6D88\u3057\u307E\u3057\u305F");
      this.cdr.markForCheck();
    });
  }
  pinMessage(msg) {
    const willPin = !msg.isPinned;
    this.messages = this.messages.map((m) => m.id === msg.id ? __spreadProps(__spreadValues({}, m), { isPinned: willPin, pinnedAt: willPin ? Date.now() : void 0 }) : m);
    this.showMessageMenu = false;
    this.showToast(willPin ? "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30D4\u30F3\u7559\u3081\u3057\u307E\u3057\u305F" : "\u30D4\u30F3\u7559\u3081\u3092\u89E3\u9664\u3057\u307E\u3057\u305F");
  }
  copyMessage(msg) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(msg.text || "").then(() => this.showToast("\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"), () => this.showToast("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F"));
    } else {
      this.showToast("\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u3092\u5229\u7528\u3067\u304D\u307E\u305B\u3093");
    }
    this.showMessageMenu = false;
  }
  // ====== Reactions ======
  openEmojiPicker(msg) {
    this.emojiTarget = msg;
    this.showEmojiPopup = true;
    this.showMessageMenu = false;
  }
  addReaction(emoji) {
    if (!this.emojiTarget)
      return;
    const target = this.emojiTarget;
    this.messages = this.messages.map((m) => {
      if (m.id !== target.id)
        return m;
      const reactions = [...m.reactions || []];
      const existing = reactions.find((r) => r.emoji === emoji);
      if (existing) {
        existing.count = existing.mine ? existing.count - 1 : existing.count + 1;
        existing.mine = !existing.mine;
        if (existing.count <= 0)
          return __spreadProps(__spreadValues({}, m), { reactions: reactions.filter((r) => r.emoji !== emoji) });
      } else {
        reactions.push({ emoji, count: 1, mine: true });
      }
      return __spreadProps(__spreadValues({}, m), { reactions });
    });
    this.showEmojiPopup = false;
    this.emojiTarget = null;
    this.persistReactions();
  }
  toggleReactionOnMessage(msg, emoji) {
    this.emojiTarget = msg;
    this.addReaction(emoji);
  }
  // Utility: scroll to a specific message (for bookmark navigation)
  scrollToMessage(id) {
    const el = document.getElementById("msg-" + id);
    if (el)
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    this.showBookmarksModal = false;
  }
  newChat() {
    this.openNewChatModal();
  }
  stopEvent(e) {
    e.stopPropagation();
  }
  // ====== My Task (メッセージ→タスク) ======
  openTaskCreateModal(msg) {
    this.taskCreateTarget = msg;
    this.taskDraftTitle = "";
    this.taskDraftMemo = "";
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 3);
    this.taskDraftDate = this.toDateInputValue(d);
    this.taskDraftTime = "18:00";
    this.taskDraftRemind = true;
    this.showTaskCreateModal = true;
    this.showMessageMenu = false;
  }
  setTaskPreset(preset) {
    const d = /* @__PURE__ */ new Date();
    if (preset === "1h") {
      d.setHours(d.getHours() + 1);
      this.taskDraftDate = this.toDateInputValue(d);
      this.taskDraftTime = this.toTimeInputValue(d);
    } else if (preset === "3h") {
      d.setHours(d.getHours() + 3);
      this.taskDraftDate = this.toDateInputValue(d);
      this.taskDraftTime = this.toTimeInputValue(d);
    } else if (preset === "tomorrow") {
      d.setDate(d.getDate() + 1);
      this.taskDraftDate = this.toDateInputValue(d);
      this.taskDraftTime = "09:00";
    } else if (preset === "nextweek") {
      const daysUntilMon = (8 - d.getDay()) % 7 || 7;
      d.setDate(d.getDate() + daysUntilMon);
      this.taskDraftDate = this.toDateInputValue(d);
      this.taskDraftTime = "09:00";
    }
  }
  toDateInputValue(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  toTimeInputValue(d) {
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
  createTask() {
    if (!this.taskCreateTarget || !this.taskDraftDate)
      return;
    const id = "task-" + Date.now();
    const fallbackTitle = (this.taskCreateTarget.text || "").replace(/\n/g, " ").slice(0, 80) || "\u30DE\u30A4\u30BF\u30B9\u30AF";
    const title = this.taskDraftTitle.trim() || fallbackTitle;
    const newTask = {
      id,
      roomId: this.taskCreateTarget.roomId,
      messageId: this.taskCreateTarget.id,
      title,
      memo: this.taskDraftMemo?.trim() || void 0,
      dueDate: this.taskDraftDate,
      dueTime: this.taskDraftTime || void 0,
      remindInChat: this.taskDraftRemind,
      reminder3dSent: false,
      reminder24hSent: false,
      done: false,
      createdAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
    };
    this.tasks = [...this.tasks, newTask];
    const targetId = this.taskCreateTarget.id;
    this.messages = this.messages.map((m) => m.id === targetId ? __spreadProps(__spreadValues({}, m), { taskId: id }) : m);
    this.showTaskCreateModal = false;
    this.taskCreateTarget = null;
    const dueLabel = this.taskDraftDate + (this.taskDraftTime ? " " + this.taskDraftTime : "");
    this.showToast(this.taskDraftRemind ? `\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9\u306E\u30DE\u30A4\u30BF\u30B9\u30AF\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\uFF08\u7DE0\u5207: ${dueLabel}\u30013\u65E5\u524D\u306824\u6642\u9593\u524D\u306B\u901A\u77E5\uFF09` : `\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9\u306E\u30DE\u30A4\u30BF\u30B9\u30AF\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\uFF08\u7DE0\u5207: ${dueLabel}\uFF09`);
    this.checkDueReminders();
  }
  /** 該当スレッドのメッセージアンカーを別タブで開く */
  openTaskInNewTab(task, event) {
    event?.stopPropagation();
    const base = (document.querySelector("base")?.getAttribute("href") || "/").replace(/\/$/, "");
    const url = `${base}/chat/${task.roomId}#msg-${task.messageId}`;
    window.open(url, "_blank", "noopener");
  }
  getRoomName(roomId) {
    return this.rooms.find((r) => r.id === roomId)?.name || "\u5225\u306E\u30C1\u30E3\u30C3\u30C8";
  }
  /** 全タスクを締切順にソートして返す（未完了→完了） */
  get allTasksSorted() {
    return [...this.tasks].sort((a, b) => {
      if (a.done !== b.done)
        return a.done ? 1 : -1;
      const ka = a.dueDate + (a.dueTime || "23:59");
      const kb = b.dueDate + (b.dueTime || "23:59");
      return ka.localeCompare(kb);
    });
  }
  /** 直近のタスク: 締切が1週間以内（過去の期限切れ含む）のみ */
  get upcomingTasks() {
    const now = /* @__PURE__ */ new Date();
    const oneWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1e3);
    const oneWeekStr = oneWeek.toISOString().slice(0, 10);
    return this.allTasksSorted.filter((t) => !t.done && t.dueDate <= oneWeekStr);
  }
  /** 課題タブ: 未完了かつ期限切れでないタスク（締切順） */
  get activeTasksSorted() {
    return this.allTasksSorted.filter((t) => !t.done && !this.isTaskOverdue(t));
  }
  /** 終了タブ: 完了済みまたは期限切れタスク（最新の終了が上） */
  get doneTasksSorted() {
    return [...this.tasks].filter((t) => t.done || this.isTaskOverdue(t)).sort((a, b) => {
      const ka = a.dueDate + (a.dueTime || "23:59");
      const kb = b.dueDate + (b.dueTime || "23:59");
      return kb.localeCompare(ka);
    });
  }
  setTaskTab(tab) {
    this.taskActiveTab = tab;
    this.cdr.markForCheck();
  }
  startReminderTimer() {
    if (this.reminderTimerStarted)
      return;
    this.reminderTimerStarted = true;
    setInterval(() => this.checkDueReminders(), 30 * 1e3);
  }
  checkDueReminders() {
    const now = /* @__PURE__ */ new Date();
    const myChat = this.rooms.find((r) => r.type === "my");
    if (!myChat)
      return;
    let posted = false;
    const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1e3;
    const ONE_DAY_MS = 24 * 60 * 60 * 1e3;
    this.tasks = this.tasks.map((t) => {
      if (t.done || !t.remindInChat)
        return t;
      if (t.reminder3dSent && t.reminder24hSent)
        return t;
      const due = /* @__PURE__ */ new Date(t.dueDate + "T" + (t.dueTime || "23:59"));
      const nowMs = now.getTime();
      const remind3dAt = due.getTime() - THREE_DAYS_MS;
      const remind24hAt = due.getTime() - ONE_DAY_MS;
      if (!t.reminder24hSent && nowMs >= remind24hAt) {
        this._postReminderMessage(t, myChat.id, "24\u6642\u9593\u4EE5\u5185", now);
        posted = true;
        return __spreadProps(__spreadValues({}, t), { reminder3dSent: true, reminder24hSent: true });
      }
      if (!t.reminder3dSent && nowMs >= remind3dAt) {
        this._postReminderMessage(t, myChat.id, "3\u65E5\u4EE5\u5185", now);
        posted = true;
        return __spreadProps(__spreadValues({}, t), { reminder3dSent: true });
      }
      return t;
    });
    if (posted) {
      this.cdr.markForCheck();
    }
  }
  _postReminderMessage(t, myChatId, window2, now) {
    const sourceRoom = this.rooms.find((r) => r.id === t.roomId);
    const sourceMsg = this.messages.find((m) => m.id === t.messageId);
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const quote = sourceMsg?.text ? `\u300C${sourceMsg.text.replace(/\n/g, " ").slice(0, 80)}\u300D` : "";
    const roomName = sourceRoom?.name || "\u5225\u306E\u30C1\u30E3\u30C3\u30C8";
    const dueLabel = `${t.dueDate}${t.dueTime ? " " + t.dueTime : ""}`;
    const idSuffix = window2 === "24\u6642\u9593\u4EE5\u5185" ? "-24h" : "-3d";
    this.messages = [
      ...this.messages,
      {
        id: "rm-" + t.id + idSuffix,
        roomId: myChatId,
        senderName: "\u30B9\u30B1\u30B3\u30F3AI",
        senderInitial: "\u30B9",
        senderColor: "#ff9800",
        senderAvatar: "assets/imgs/common/schecon-favicon.png",
        text: `\u23F0 \u30DE\u30A4\u30BF\u30B9\u30AF\u306E\u30EA\u30DE\u30A4\u30F3\u30C9: ${t.title}
\u7DE0\u5207: ${dueLabel}\uFF08${window2}\uFF09
\u5143\u30E1\u30C3\u30BB\u30FC\u30B8: ${roomName} ${quote}`.trim(),
        time: `${hh}:${mm}`,
        isMe: false,
        isSystem: true,
        taskId: t.id
      }
    ];
  }
  openTaskListModal() {
    this.showDetailPanel = true;
    this.rightPanelView = "tasks";
    this.cdr.markForCheck();
  }
  toggleTaskDone(task) {
    this.tasks = this.tasks.map((t) => t.id === task.id ? __spreadProps(__spreadValues({}, t), { done: !t.done }) : t);
  }
  deleteTask(task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    this.messages = this.messages.map((m) => m.taskId === task.id ? __spreadProps(__spreadValues({}, m), { taskId: void 0 }) : m);
    this.showToast("\u30BF\u30B9\u30AF\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
  }
  jumpToTaskMessage(task) {
    this.selectedRoomId = task.roomId;
    this.showTaskListModal = false;
    this.syncUrl();
    setTimeout(() => this.scrollToMessage(task.messageId), 100);
  }
  /** マイスペースの右インパネル・マイタスク一覧からクリックでジャンプ */
  jumpToTaskFromPanel(task, event) {
    event?.stopPropagation();
    if (this.selectedRoomId !== task.roomId) {
      this.selectedRoomId = task.roomId;
      this.syncUrl();
    }
    if (this.isMobile) {
      this.closeRightPanel();
    }
    this.rightPanelView = "menu";
    this.cdr.markForCheck();
    setTimeout(() => this.scrollToMessage(task.messageId), 200);
  }
  isTaskDueSoon(task) {
    if (task.done)
      return false;
    const now = /* @__PURE__ */ new Date();
    const due = /* @__PURE__ */ new Date(task.dueDate + "T" + (task.dueTime || "23:59"));
    const diffH = (due.getTime() - now.getTime()) / (1e3 * 60 * 60);
    return diffH >= 0 && diffH <= 24;
  }
  isTaskOverdue(task) {
    if (task.done)
      return false;
    const now = /* @__PURE__ */ new Date();
    const due = /* @__PURE__ */ new Date(task.dueDate + "T" + (task.dueTime || "23:59"));
    return due.getTime() < now.getTime();
  }
  static {
    this.\u0275fac = function ChatPageComponent_Factory(t) {
      return new (t || _ChatPageComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChatStateService), \u0275\u0275directiveInject(ScheduleModalService), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(ScheduledMessagesService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatPageComponent, selectors: [["app-chat-page"]], viewQuery: function ChatPageComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesScrollRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.msgInputRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.avatarFileInputRef = _t.first);
      }
    }, hostBindings: function ChatPageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function ChatPageComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, \u0275\u0275resolveWindow)("popstate", function ChatPageComponent_popstate_HostBindingHandler() {
          return ctx.onPopState();
        }, false, \u0275\u0275resolveWindow)("keydown.escape", function ChatPageComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument)("keydown.arrowleft", function ChatPageComponent_keydown_arrowleft_HostBindingHandler() {
          return ctx.onArrowLeft();
        }, false, \u0275\u0275resolveDocument)("keydown.arrowright", function ChatPageComponent_keydown_arrowright_HostBindingHandler() {
          return ctx.onArrowRight();
        }, false, \u0275\u0275resolveDocument)("click", function ChatPageComponent_click_HostBindingHandler() {
          return ctx.onDocumentClick();
        }, false, \u0275\u0275resolveDocument)("mousemove", function ChatPageComponent_mousemove_HostBindingHandler($event) {
          return ctx.onDocumentDragMove($event);
        }, false, \u0275\u0275resolveDocument)("touchmove", function ChatPageComponent_touchmove_HostBindingHandler($event) {
          return ctx.onDocumentDragMove($event);
        }, false, \u0275\u0275resolveDocument)("mouseup", function ChatPageComponent_mouseup_HostBindingHandler() {
          return ctx.onDocumentDragEnd();
        }, false, \u0275\u0275resolveDocument)("touchend", function ChatPageComponent_touchend_HostBindingHandler() {
          return ctx.onDocumentDragEnd();
        }, false, \u0275\u0275resolveDocument)("beforeunload", function ChatPageComponent_beforeunload_HostBindingHandler() {
          return ctx.onBeforeUnload();
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 66, vars: 46, consts: [["folderNode", ""], ["roomListView", ""], ["emptyRooms", ""], ["messagesScrollRef", ""], ["msgInputRef", ""], ["nonReplyBlock", ""], ["bubbleTpl", ""], ["replyFallback", ""], ["normalBubble", ""], ["mentionItem", ""], ["avatarFileInput", ""], ["folderPickNode", ""], ["noToggleSpacer", ""], ["imgPlaceholder", ""], ["videoPlaceholder", ""], [1, "chat-page"], [1, "chat-list"], ["class", "chat-list__resume-banner", 3, "click", 4, "ngIf"], [1, "chat-list__filters"], [1, "filter-btn", 3, "click"], [1, "filter-btn__label"], ["matTooltip", "\u30D5\u30A9\u30EB\u30C0", 1, "filter-btn", 3, "click"], ["matTooltip", "\u30C0\u30A4\u30EC\u30AF\u30C8", 1, "filter-btn", 3, "click"], ["matTooltip", "\u30B0\u30EB\u30FC\u30D7", 1, "filter-btn", 3, "click"], [1, "chat-list__filters-spacer"], ["matTooltip", "\u65B0\u3057\u3044\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB", "data-testid", "open-new-chat-modal", 1, "filter-btn", "filter-btn--action", 3, "click"], [1, "chat-list__search"], [1, "search-label"], ["type", "text", "placeholder", "\u30C1\u30E3\u30C3\u30C8\u540D / \u30E1\u30C3\u30BB\u30FC\u30B8\u672C\u6587\u3067\u691C\u7D22", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 1, "search-input", 3, "ngModelChange", "ngModel"], ["class", "chat-list__search-count", 4, "ngIf"], [1, "chat-list__rooms"], [4, "ngIf", "ngIfElse"], [1, "chat-list__new-btn", 3, "click"], ["class", "chat-room", 3, "chat-room--transitioning", 4, "ngIf"], ["class", "chat-detail__backdrop", 3, "click", 4, "ngIf"], ["class", "chat-detail", 3, "chat-detail--subview", 4, "ngIf"], ["class", "msg-menu-backdrop", 3, "click", 4, "ngIf"], ["class", "msg-menu", 3, "left", "top", "click", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-backdrop modal-backdrop--newchat", "data-testid", "new-chat-modal-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-backdrop modal-backdrop--addmember", 3, "click", 4, "ngIf"], ["class", "chat-toast", 4, "ngIf"], ["class", "media-carousel", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "lightbox", 3, "click", 4, "ngIf"], ["class", "modal-backdrop avatar-crop-backdrop", 3, "click", 4, "ngIf"], [1, "chat-list__resume-banner", 3, "click"], [1, "chat-list__resume-text"], [1, "chat-list__resume-label"], [1, "chat-list__resume-name"], [1, "chat-list__search-count"], [1, "folder-view"], [4, "ngFor", "ngForOf"], [1, "btn", "btn--ghost", "btn--full", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "folder-view__item", 3, "dragstart", "dragover", "dragleave", "drop"], [1, "folder-view__head", 3, "click"], ["class", "folder-view__chevron", 4, "ngIf"], [1, "folder-view__name"], ["class", "room-item__unread-dot", 3, "matTooltip", 4, "ngIf"], [1, "folder-view__count"], ["class", "folder-view__actions", 4, "ngIf"], ["class", "folder-view__body", 4, "ngIf"], [1, "folder-view__chevron"], [1, "room-item__unread-dot", 3, "matTooltip"], [1, "folder-view__actions"], ["matTooltip", "\u30C1\u30E3\u30C3\u30C8\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0/\u524A\u9664", 1, "icon-btn", "icon-btn--sm", 3, "click"], ["matTooltip", "\u540D\u524D\u306E\u5909\u66F4", 1, "icon-btn", "icon-btn--sm", 3, "click"], ["matTooltip", "\u30D5\u30A9\u30EB\u30C0\u306E\u524A\u9664", 1, "icon-btn", "icon-btn--sm", 3, "click"], [1, "folder-view__body"], [1, "folder-view__rooms"], ["class", "room-item room-item--compact", 3, "room-item--selected", "room-item--unread", "dragstart", "click", 4, "ngFor", "ngForOf"], ["class", "folder-view__empty", 4, "ngIf"], [1, "room-item", "room-item--compact", 3, "dragstart", "click"], [1, "room-item__avatar"], [1, "room-item__name"], ["class", "room-item__unread-dot", 4, "ngIf"], ["matTooltip", "\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u5916\u3059", 1, "icon-btn", "icon-btn--xs", "room-item__remove-folder", 3, "click"], [1, "room-item__unread-dot"], [1, "folder-view__empty"], ["class", "room-item", 3, "room-item--selected", "room-item--mychat", "room-item--drop", "room-item--unread", "dragstart", "dragover", "dragleave", "drop", "click", 4, "ngFor", "ngForOf"], [1, "room-item", 3, "dragstart", "dragover", "dragleave", "drop", "click"], [1, "room-item__avatar-wrap"], ["class", "room-item__avatar room-item__avatar--img", "alt", "\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9", 3, "src", 4, "ngIf"], ["class", "room-item__avatar room-item__avatar--img", "src", "assets/imgs/common/schecon-favicon.png", "alt", "\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9", 4, "ngIf"], ["class", "room-item__avatar room-item__avatar--img", 3, "src", "alt", 4, "ngIf"], ["class", "room-item__avatar", 3, "background", 4, "ngIf"], ["class", "room-item__badge", 4, "ngIf"], ["class", "room-item__type-badge", "matTooltip", "\u30B0\u30EB\u30FC\u30D7", 4, "ngIf"], ["class", "room-item__type-badge room-item__type-badge--my", "matTooltip", "\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9", 4, "ngIf"], [1, "room-item__body"], [1, "room-item__top"], [1, "room-item__time"], [1, "room-item__bottom"], ["class", "room-item__msg", 4, "ngIf"], ["class", "room-item__msg room-item__msg--desc room-item__msg--single", 4, "ngIf"], [1, "room-item__meta"], ["class", "room-item__warning", 4, "ngIf"], ["class", "icon-btn icon-btn--xs", 3, "matTooltip", "click", 4, "ngIf"], ["alt", "\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9", 1, "room-item__avatar", "room-item__avatar--img", 3, "src"], ["src", "assets/imgs/common/schecon-favicon.png", "alt", "\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9", 1, "room-item__avatar", "room-item__avatar--img"], [1, "room-item__avatar", "room-item__avatar--img", 3, "src", "alt"], [1, "room-item__badge"], ["matTooltip", "\u30B0\u30EB\u30FC\u30D7", 1, "room-item__type-badge"], ["matTooltip", "\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9", 1, "room-item__type-badge", "room-item__type-badge--my"], [1, "room-item__msg"], [1, "room-item__msg-icon"], [1, "room-item__msg", "room-item__msg--desc", "room-item__msg--single"], [1, "room-item__warning"], [1, "icon-btn", "icon-btn--xs", 3, "click", "matTooltip"], [1, "chat-list__empty"], [1, "chat-room"], [1, "chat-room__header"], [1, "chat-room__header-left"], ["matTooltip", "\u4E00\u89A7\u306B\u623B\u308B", 1, "icon-btn", "chat-room__back-btn", 3, "click"], ["class", "chat-room__avatar", 4, "ngIf"], [1, "chat-room__title"], [1, "chat-room__header-actions"], ["matTooltip", "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u691C\u7D22", 1, "icon-btn", "chat-room__ha--primary", "chat-room__ha--pc", 3, "click"], ["class", "icon-btn chat-room__ha--collapse chat-room__ha--pc", "matTooltip", "\u53C2\u52A0\u30E1\u30F3\u30D0\u30FC", 3, "click", 4, "ngIf"], ["class", "icon-btn chat-room__ha--collapse chat-room__ha--pc", "matTooltip", "\u62DB\u5F85\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC", 3, "click", 4, "ngIf"], ["class", "icon-btn chat-room__ha--collapse chat-room__ha--pc", "matTooltip", "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u4E00\u89A7", 3, "click", 4, "ngIf"], ["class", "icon-btn chat-room__ha--collapse chat-room__ha--pc", "matTooltip", "\u30BF\u30B0\u4E00\u89A7\u3092\u8868\u793A", 3, "click", 4, "ngIf"], ["class", "icon-btn chat-room__ha--collapse chat-room__ha--pc", "matTooltip", "\u30DE\u30A4\u30BF\u30B9\u30AF\u4E00\u89A7", 3, "click", 4, "ngIf"], ["matTooltip", "\u8A73\u7D30\u60C5\u5831", 1, "icon-btn", "chat-room__ha--primary", "chat-room__ha--pc", 3, "click"], [1, "chat-room__ha-more", "chat-room__ha--pc"], ["matTooltip", "\u305D\u306E\u4ED6", 1, "icon-btn", "chat-room__ha-more-btn", 3, "click"], ["class", "chat-room__ha-more-backdrop", 3, "click", 4, "ngIf"], ["class", "chat-room__ha-more-menu", 3, "click", 4, "ngIf"], [1, "chat-room__ha--mobile", "chat-room__info-menu"], ["matTooltip", "\u8A73\u7D30\u30E1\u30CB\u30E5\u30FC", 1, "icon-btn", "chat-room__info-menu-btn", 3, "click"], ["class", "chat-room__info-menu-backdrop", 3, "click", 4, "ngIf"], ["class", "chat-room__info-menu-list", 3, "click", 4, "ngIf"], ["class", "chat-room__msg-search", 4, "ngIf"], ["class", "chat-room__task-banner", 4, "ngIf"], ["class", "chat-room__pinned", 3, "click", 4, "ngIf"], ["class", "tag-filter-banner", 4, "ngIf"], [1, "chat-room__messages"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "chat-room__reply-bar", 4, "ngIf"], ["class", "scheduled-banner-wrap", 4, "ngIf"], [1, "chat-room__input"], [1, "chat-room__input-actions"], ["matTooltip", "\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210", 1, "icon-btn", "icon-btn--schecon", 3, "click"], ["src", "assets/imgs/common/schecon-favicon.png", "alt", "\u30B9\u30B1\u30B3\u30F3", 1, "schecon-icon-img"], ["matTooltip", "\u30D5\u30A1\u30A4\u30EB\u30FB\u753B\u50CF\u30FB\u52D5\u753B\u3092\u6DFB\u4ED8", 1, "icon-btn", 3, "click"], ["class", "icon-btn", "matTooltip", "\u30E1\u30F3\u30B7\u30E7\u30F3\u633F\u5165", 3, "click", 4, "ngIf"], ["matTooltip", "\u30BF\u30B0\u633F\u5165", 1, "icon-btn", 3, "click"], ["matTooltip", "AI\u3067\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u4F5C\u6210", 1, "icon-btn", 3, "click"], [1, "chat-room__input-plus-wrap"], ["matTooltip", "\u30C4\u30FC\u30EB", 1, "icon-btn", "icon-btn--plus", 3, "click"], ["class", "input-menu-backdrop", 3, "click", "touchstart", 4, "ngIf"], ["class", "input-menu", 3, "click", 4, "ngIf"], [1, "msg-input-wrap"], ["class", "compose-tray", 4, "ngIf"], ["rows", "1", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", "inputmode", "text", "enterkeyhint", "send", "data-gramm", "false", "data-gramm_editor", "false", "data-enable-grammarly", "false", 1, "msg-input", "msg-input--textarea", 2, "font-size", "16px", "-webkit-text-size-adjust", "100%", 3, "ngModelChange", "focus", "blur", "keydown", "input", "placeholder", "ngModel"], ["class", "popup-backdrop", 3, "click", 4, "ngIf"], ["class", "popup", 3, "click", 4, "ngIf"], ["class", "input-tag-preview", 4, "ngIf"], ["class", "input-ogp", 4, "ngIf"], ["type", "button", "matTooltip", "\u4E88\u7D04\u6295\u7A3F", "aria-label", "\u4E88\u7D04\u6295\u7A3F", 1, "schedule-send-btn", 3, "click", "disabled"], [1, "send-btn", 3, "click", "disabled"], [1, "chat-room__avatar"], ["matTooltip", "\u53C2\u52A0\u30E1\u30F3\u30D0\u30FC", 1, "icon-btn", "chat-room__ha--collapse", "chat-room__ha--pc", 3, "click"], ["matTooltip", "\u62DB\u5F85\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC", 1, "icon-btn", "chat-room__ha--collapse", "chat-room__ha--pc", 3, "click"], ["matTooltip", "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u4E00\u89A7", 1, "icon-btn", "chat-room__ha--collapse", "chat-room__ha--pc", 3, "click"], ["matTooltip", "\u30BF\u30B0\u4E00\u89A7\u3092\u8868\u793A", 1, "icon-btn", "chat-room__ha--collapse", "chat-room__ha--pc", 3, "click"], ["matTooltip", "\u30DE\u30A4\u30BF\u30B9\u30AF\u4E00\u89A7", 1, "icon-btn", "chat-room__ha--collapse", "chat-room__ha--pc", 3, "click"], [1, "chat-room__ha-more-backdrop", 3, "click"], [1, "chat-room__ha-more-menu", 3, "click"], [3, "click", 4, "ngIf"], [3, "click"], [1, "chat-room__info-menu-backdrop", 3, "click"], [1, "chat-room__info-menu-list", 3, "click"], [1, "chat-room__msg-search"], ["type", "text", "placeholder", "\u3053\u306E\u30B9\u30EC\u30C3\u30C9\u5185\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u691C\u7D22...", "autofocus", "", 3, "ngModelChange", "ngModel"], ["class", "chat-room__msg-search-count", 4, "ngIf"], ["class", "icon-btn", 3, "click", 4, "ngIf"], [1, "chat-room__msg-search-count"], [1, "icon-btn", 3, "click"], [1, "chat-room__task-banner"], [1, "chat-room__task-banner-label"], [1, "chat-room__task-banner-link", 3, "click"], [1, "chat-room__pinned", 3, "click"], [1, "chat-room__pinned-icon"], [1, "chat-room__pinned-avatar"], ["class", "chat-room__pinned-text", 4, "ngIf"], ["class", "chat-room__pinned-url", 4, "ngIf"], ["class", "chat-room__pinned-count", "type", "button", "matTooltip", "\u30D4\u30F3\u7559\u3081\u4E00\u89A7\u3092\u8868\u793A", 3, "click", 4, "ngIf"], ["matTooltip", "\u30D4\u30F3\u7559\u3081\u3092\u89E3\u9664", 1, "icon-btn", "chat-room__pinned-close", 3, "click"], [1, "chat-room__pinned-text"], [1, "chat-room__pinned-url"], ["type", "button", "matTooltip", "\u30D4\u30F3\u7559\u3081\u4E00\u89A7\u3092\u8868\u793A", 1, "chat-room__pinned-count", 3, "click"], [1, "tag-filter-banner"], [1, "tag-filter-banner__icon"], [1, "tag-filter-banner__text"], [1, "tag-dot"], [1, "tag-filter-banner__count"], ["matTooltip", "\u7D5E\u308A\u8FBC\u307F\u3092\u89E3\u9664", 1, "tag-filter-banner__clear", 3, "click"], ["class", "date-divider", 4, "ngIf"], ["class", "system-msg", 4, "ngIf"], ["class", "msg-row", 3, "msg-row--me", "id", 4, "ngIf"], [1, "date-divider"], [1, "system-msg"], [1, "msg-row", 3, "id"], ["class", "msg-avatar", 3, "background", "click", 4, "ngIf"], ["class", "msg-avatar msg-avatar--img", 3, "src", "alt", "click", 4, "ngIf"], [1, "msg-group"], ["class", "msg-reply-stack", 4, "ngIf", "ngIfElse"], [1, "msg-time"], [1, "msg-avatar", 3, "click"], [1, "msg-avatar", "msg-avatar--img", 3, "click", "src", "alt"], [1, "msg-reply-stack"], [4, "ngTemplateOutlet"], [1, "msg-reply-header"], [1, "msg-reply-quote"], [1, "msg-reply-preview"], ["class", "msg-forward-label", 4, "ngIf"], [1, "msg-forward-label"], [1, "msg-bubble", "msg-bubble--editing"], ["rows", "3", 1, "msg-edit-input", 3, "ngModelChange", "ngModel"], [1, "msg-edit-actions"], [1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "btn", "btn--primary", "btn--sm", 3, "click"], [1, "msg-bubble", 3, "contextmenu", "touchstart", "touchend", "touchcancel", "touchmove"], ["class", "msg-bubble__withdrawn", 4, "ngIf"], [4, "ngIf"], ["class", "msg-reactions", 3, "click", 4, "ngIf"], [1, "msg-bubble__withdrawn"], [1, "msg-hover-actions", 3, "click"], ["class", "msg-hover-actions__btn msg-hover-actions__btn--edit", "matTooltip", "\u7DE8\u96C6", 3, "click", 4, "ngIf"], ["class", "msg-hover-actions__btn msg-hover-actions__btn--danger", "matTooltip", "\u53D6\u308A\u6D88\u3057", 3, "click", 4, "ngIf"], ["matTooltip", "\u7D75\u6587\u5B57\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3", 1, "msg-hover-actions__btn", 3, "click"], ["matTooltip", "\u8FD4\u4FE1", 1, "msg-hover-actions__btn", 3, "click"], ["matTooltip", "\u5F15\u7528", 1, "msg-hover-actions__btn", 3, "click"], ["matTooltip", "\u8EE2\u9001", 1, "msg-hover-actions__btn", 3, "click"], ["matTooltip", "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF", 1, "msg-hover-actions__btn", 3, "click"], [1, "msg-hover-actions__btn", 3, "click", "matTooltip"], ["matTooltip", "\u30DE\u30A4\u30BF\u30B9\u30AF\u306B\u8FFD\u52A0", 1, "msg-hover-actions__btn", 3, "click"], ["matTooltip", "\u30B3\u30D4\u30FC", 1, "msg-hover-actions__btn", 3, "click"], ["class", "msg-bubble__pin", "matTooltip", "\u30D4\u30F3\u7559\u3081\u6E08\u307F", 4, "ngIf"], ["class", "msg-bubble__bookmark", 4, "ngIf"], ["class", "msg-bubble__task", "matTooltip", "\u30BF\u30B9\u30AF\u306B\u8FFD\u52A0\u6E08\u307F", 3, "msg-bubble__task--done", 4, "ngIf"], ["class", "msg-bubble__text", 3, "innerHTML", "click", 4, "ngIf"], ["class", "msg-bubble__task-chip", 3, "msg-bubble__task-chip--overdue", "msg-bubble__task-chip--soon", "click", 4, "ngIf"], ["class", "url-preview url-preview--rich", "target", "_blank", "rel", "noopener", 3, "href", "--accent", "click", 4, "ngIf"], ["class", "msg-bubble__edited", 4, "ngIf"], ["matTooltip", "\u7DE8\u96C6", 1, "msg-hover-actions__btn", "msg-hover-actions__btn--edit", 3, "click"], ["matTooltip", "\u53D6\u308A\u6D88\u3057", 1, "msg-hover-actions__btn", "msg-hover-actions__btn--danger", 3, "click"], ["matTooltip", "\u30D4\u30F3\u7559\u3081\u6E08\u307F", 1, "msg-bubble__pin"], [1, "msg-bubble__bookmark"], ["matTooltip", "\u30BF\u30B9\u30AF\u306B\u8FFD\u52A0\u6E08\u307F", 1, "msg-bubble__task"], [1, "msg-bubble__text", 3, "click", "innerHTML"], [1, "msg-bubble__task-chip", 3, "click"], [1, "msg-bubble__task-chip-label"], ["target", "_blank", "rel", "noopener", 1, "url-preview", "url-preview--rich", 3, "click", "href"], [1, "url-preview__accent"], [1, "url-preview__content"], [1, "url-preview__site-row"], [1, "url-preview__favicon"], [1, "url-preview__site"], [1, "url-preview__title"], ["class", "url-preview__desc", 4, "ngIf"], ["class", "url-preview__thumb", 3, "background", 4, "ngIf"], [1, "url-preview__desc"], [1, "url-preview__thumb"], ["class", "msg-image-grid", 4, "ngIf"], [1, "msg-attachments"], [1, "msg-image-grid"], ["class", "msg-image-grid__cell", 3, "msg-image-grid__cell--uploading", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "msg-image-grid__cell", 3, "click"], ["class", "msg-image__placeholder", 4, "ngIf"], ["loading", "lazy", 3, "src", "alt", 4, "ngIf"], ["class", "msg-image__overlay", 4, "ngIf"], ["class", "msg-image-grid__more", 4, "ngIf"], [1, "msg-image__placeholder"], ["loading", "lazy", 3, "src", "alt"], [1, "msg-image__overlay"], [1, "spinner"], [1, "msg-image__progress"], [1, "msg-image-grid__more"], ["class", "msg-attachment", 4, "ngIf"], [1, "msg-attachment"], [1, "msg-attachment__info"], [1, "msg-attachment__name"], [1, "msg-attachment__size"], ["class", "msg-attachment__bar", 4, "ngIf"], ["class", "icon-btn", 4, "ngIf"], ["class", "spinner spinner--sm", 4, "ngIf"], [1, "msg-attachment__bar"], [1, "msg-attachment__bar-fill"], [1, "icon-btn"], [1, "spinner", "spinner--sm"], [1, "msg-bubble__edited"], [1, "msg-reactions", 3, "click"], ["class", "msg-reaction", 3, "msg-reaction--mine", "click", 4, "ngFor", "ngForOf"], [1, "msg-reaction", 3, "click"], [1, "msg-reaction__emoji"], ["class", "msg-reaction__count", 4, "ngIf"], [1, "msg-reaction__count"], [1, "chat-room__reply-bar"], [1, "chat-room__reply-content"], [1, "chat-room__reply-name"], [1, "chat-room__reply-text"], ["type", "button", "aria-label", "\u8FD4\u4FE1\u3092\u30AD\u30E3\u30F3\u30BB\u30EB", 1, "chat-room__reply-close", 3, "click"], [1, "scheduled-banner-wrap"], ["type", "button", "aria-label", "\u4E88\u7D04\u6295\u7A3F\u4E00\u89A7\u3092\u958B\u304F", 1, "scheduled-banner", 3, "click"], ["aria-hidden", "true", 1, "scheduled-banner__icon"], [1, "scheduled-banner__text"], ["aria-hidden", "true", 1, "scheduled-banner__chevron"], ["class", "scheduled-banner__panel", 3, "items", "edit", "delete", "close", 4, "ngIf"], [1, "scheduled-banner__panel", 3, "edit", "delete", "close", "items"], ["matTooltip", "\u30E1\u30F3\u30B7\u30E7\u30F3\u633F\u5165", 1, "icon-btn", 3, "click"], [1, "input-menu-backdrop", 3, "click", "touchstart"], [1, "input-menu", 3, "click"], [1, "input-menu__item", "input-menu__item--schecon", 3, "click"], [1, "input-menu__schecon-wrap"], ["src", "assets/imgs/common/schecon-favicon.png", "alt", "\u30B9\u30B1\u30B3\u30F3", 1, "input-menu__schecon-img"], [1, "input-menu__item", 3, "click"], [1, "input-menu__icon"], ["class", "input-menu__item", 3, "click", 4, "ngIf"], [1, "compose-tray"], ["class", "compose-tray__item", 4, "ngFor", "ngForOf"], ["type", "button", "matTooltip", "\u3055\u3089\u306B\u8FFD\u52A0", 1, "compose-tray__add", 3, "click"], [1, "compose-tray__item"], ["class", "compose-tray__thumb compose-tray__thumb--video", 4, "ngIf"], ["class", "compose-tray__thumb compose-tray__thumb--file", 4, "ngIf"], ["type", "button", "matTooltip", "\u3053\u306E\u6DFB\u4ED8\u3092\u5916\u3059", 1, "compose-tray__remove", 3, "click"], ["class", "compose-tray__thumb", 3, "src", "alt", 4, "ngIf"], ["class", "compose-tray__thumb compose-tray__thumb--placeholder", 4, "ngIf"], [1, "compose-tray__thumb", 3, "src", "alt"], [1, "compose-tray__thumb", "compose-tray__thumb--placeholder"], [1, "compose-tray__thumb", "compose-tray__thumb--video"], [1, "compose-tray__thumb", "compose-tray__thumb--file"], [1, "compose-tray__filename"], [1, "popup-backdrop", 3, "click"], [1, "popup", 3, "click"], [1, "popup__title"], ["class", "popup__item", 3, "popup__item--active", "mouseenter", "click", 4, "ngFor", "ngForOf"], ["class", "popup__empty", 4, "ngIf"], [1, "popup__item", 3, "mouseenter", "click"], [1, "mini-avatar"], [1, "popup__empty"], [1, "popup__item", "popup__item--create", 3, "click"], ["class", "popup__divider", 4, "ngIf"], ["class", "popup__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "popup__divider"], [1, "popup__item", 3, "click"], [1, "input-tag-preview"], [1, "input-tag-preview__icon"], [1, "input-tag-preview__label"], ["class", "input-tag-preview__chip", 4, "ngFor", "ngForOf"], [1, "input-tag-preview__chip"], [1, "input-ogp"], ["class", "input-ogp__loading", 4, "ngIf"], ["class", "input-ogp__card", 3, "--accent", 4, "ngIf"], [1, "input-ogp__loading"], [1, "input-ogp__card"], [1, "input-ogp__accent"], [1, "input-ogp__text"], [1, "input-ogp__site"], [1, "input-ogp__title"], ["class", "input-ogp__desc", 4, "ngIf"], ["class", "input-ogp__image", "alt", "", 3, "src", 4, "ngIf"], ["matTooltip", "\u30D7\u30EC\u30D3\u30E5\u30FC\u3092\u524A\u9664", 1, "input-ogp__close", "icon-btn", 3, "click"], [1, "input-ogp__desc"], ["alt", "", 1, "input-ogp__image", 3, "src"], [1, "chat-detail__backdrop", 3, "click"], [1, "chat-detail"], ["class", "chat-detail__panel-header chat-detail__panel-header--menu", 4, "ngIf"], ["class", "chat-detail__panel-header", 4, "ngIf"], ["class", "chat-detail__panel", 4, "ngIf"], ["class", "chat-detail__panel chat-detail__panel--media", 4, "ngIf"], ["class", "chat-detail__panel chat-detail__panel--profile", 4, "ngIf"], ["class", "chat-detail__panel chat-detail__panel--search", 4, "ngIf"], [1, "chat-detail__panel-header", "chat-detail__panel-header--menu"], ["matTooltip", "\u623B\u308B", "aria-label", "\u30C1\u30E3\u30C3\u30C8\u30EB\u30FC\u30E0\u3078\u623B\u308B", 1, "icon-btn", 3, "click"], [1, "chat-detail__panel-title"], [1, "chat-detail__panel-header"], ["matTooltip", "\u623B\u308B", 1, "icon-btn", 3, "click"], [1, "chat-detail__avatar-wrap"], ["class", "chat-detail__avatar", 3, "background-color", "background-image", "chat-detail__avatar--has-image", 4, "ngIf"], ["class", "chat-detail__avatar-edit", "matTooltip", "\u30A2\u30A4\u30B3\u30F3\u3092\u5909\u66F4", 4, "ngIf"], [1, "chat-detail__title-row"], [1, "chat-detail__title"], ["class", "icon-btn icon-btn--sm", "matTooltip", "\u30B0\u30EB\u30FC\u30D7\u540D\u3092\u5909\u66F4", 3, "click", 4, "ngIf"], ["class", "chat-detail__quick-actions", 4, "ngIf"], [1, "chat-detail__menu"], ["class", "chat-detail__tasks", 4, "ngIf"], ["class", "chat-detail__avatar", "style", "background-color: #fff", 3, "background-image", "chat-detail__avatar--has-image", 4, "ngIf"], ["class", "chat-detail__avatar-cluster", 4, "ngIf"], [1, "chat-detail__avatar", 2, "background-color", "#fff"], [1, "chat-detail__avatar-cluster"], ["class", "mini-avatar mini-avatar--lg", 3, "background", 4, "ngFor", "ngForOf"], [1, "mini-avatar", "mini-avatar--lg"], [1, "chat-detail__avatar"], ["matTooltip", "\u30A2\u30A4\u30B3\u30F3\u3092\u5909\u66F4", 1, "chat-detail__avatar-edit"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["matTooltip", "\u30B0\u30EB\u30FC\u30D7\u540D\u3092\u5909\u66F4", 1, "icon-btn", "icon-btn--sm", 3, "click"], [1, "chat-detail__quick-actions"], ["matTooltip", "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u691C\u7D22", 1, "chat-detail__quick-btn", 3, "click"], [1, "chat-detail__quick-circle"], [1, "chat-detail__quick-label"], ["class", "chat-detail__quick-btn", "matTooltip", "\u53C2\u52A0\u30E1\u30F3\u30D0\u30FC", 3, "click", 4, "ngIf"], ["class", "chat-detail__quick-btn", "matTooltip", "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB", 3, "click", 4, "ngIf"], ["matTooltip", "\u901A\u77E5\u8A2D\u5B9A\u30FB\u30DF\u30E5\u30FC\u30C8", 1, "chat-detail__quick-btn", 3, "click"], ["matTooltip", "\u53C2\u52A0\u30E1\u30F3\u30D0\u30FC", 1, "chat-detail__quick-btn", 3, "click"], ["matTooltip", "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB", 1, "chat-detail__quick-btn", 3, "click"], ["class", "chat-detail__count", 4, "ngIf"], [1, "chat-detail__count"], [1, "chat-detail__menu-danger", 3, "click"], [1, "chat-detail__tasks"], [1, "chat-detail__tasks-header"], [1, "chat-detail__tasks-count"], [1, "chat-detail__tasks-more", 3, "click"], [1, "chat-detail__tasks-hint"], [1, "chat-detail__tasks-list"], ["class", "inline-task", "type", "button", 3, "inline-task--overdue", "inline-task--soon", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "inline-task", 3, "click"], [1, "inline-task__check", 3, "click"], [1, "inline-task__body"], [1, "inline-task__title"], [1, "inline-task__meta"], [1, "inline-task__meta-icon"], [1, "inline-task__due"], ["class", "inline-task__badge inline-task__badge--overdue", 4, "ngIf"], ["class", "inline-task__badge inline-task__badge--soon", 4, "ngIf"], [1, "inline-task__room"], [1, "inline-task__open"], [1, "inline-task__badge", "inline-task__badge--overdue"], [1, "inline-task__badge", "inline-task__badge--soon"], [1, "chat-detail__panel"], [1, "task-tabs"], ["type", "button", 1, "task-tabs__tab", 3, "click"], ["class", "task-tabs__count", 4, "ngIf"], [1, "task-tabs__count"], ["class", "chat-detail__panel-empty", 4, "ngIf"], ["class", "chat-detail__tasks-list", 4, "ngIf"], [1, "chat-detail__panel-empty"], ["class", "inline-task", "type", "button", 3, "inline-task--done", "inline-task--soon", "click", 4, "ngFor", "ngForOf"], ["class", "inline-task", "type", "button", 3, "inline-task--done", "inline-task--overdue", "click", 4, "ngFor", "ngForOf"], ["class", "inline-task__badge inline-task__badge--done", 4, "ngIf"], [1, "inline-task__badge", "inline-task__badge--done"], ["class", "bookmark-list bookmark-list--inline", 4, "ngIf"], [1, "bookmark-list", "bookmark-list--inline"], ["class", "bookmark-item", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "bookmark-item", 3, "click"], [1, "bookmark-item__body"], [1, "bookmark-item__head"], [1, "bookmark-item__name"], [1, "bookmark-item__time"], [1, "bookmark-item__text"], ["class", "bookmark-item__room", 4, "ngIf"], ["type", "button", "matTooltip", "\u89E3\u9664", 1, "icon-btn", "icon-btn--sm", 3, "click"], [1, "bookmark-item__room"], ["type", "button", "matTooltip", "\u30D4\u30F3\u7559\u3081\u3092\u89E3\u9664", 1, "icon-btn", "icon-btn--sm", 3, "click"], [1, "chat-detail__panel-hint"], ["class", "btn btn--ghost btn--full chat-detail__panel-cta", 3, "click", 4, "ngIf"], ["class", "tag-create", 4, "ngIf"], [1, "tag-list", "tag-list--inline"], ["class", "tag-item", "type", "button", 3, "tag-item--active", "--tag-color", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn--ghost", "btn--full", "chat-detail__panel-cta", 3, "click"], [1, "tag-create"], ["type", "text", "placeholder", "\u30BF\u30B0\u540D\u3092\u5165\u529B", 1, "tag-create__input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "tag-create__colors"], ["type", "button", "class", "tag-create__color", 3, "background", "tag-create__color--active", "click", 4, "ngFor", "ngForOf"], [1, "tag-create__actions"], [1, "btn", "btn--ghost", 3, "click"], [1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", 1, "tag-create__color", 3, "click"], ["type", "button", 1, "tag-item", 3, "click"], [1, "tag-item__label"], [1, "tag-item__count"], [1, "tag-item__chev"], [1, "chat-detail__panel", "chat-detail__panel--media"], [1, "chat-detail__panel-tabs"], ["class", "media-grid media-grid--inline", 4, "ngIf"], ["class", "file-list file-list--inline", 4, "ngIf"], [1, "media-grid", "media-grid--inline"], ["class", "media-tile", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "media-tile", 3, "click"], [1, "media-tile__thumb"], ["class", "media-tile__play", 4, "ngIf"], [1, "media-tile__date"], [1, "media-tile__overlay"], [1, "media-tile__play"], [1, "file-list", "file-list--inline"], ["class", "file-item", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "file-item", 3, "click"], [1, "file-item__body"], [1, "file-item__name"], [1, "file-item__meta"], [1, "file-item__download"], [1, "member-actions", "member-actions--top"], [1, "btn", "btn--primary", "btn--full", 3, "click"], [1, "member-search"], ["type", "text", "placeholder", "\u30E1\u30F3\u30D0\u30FC\u3092\u691C\u7D22", 3, "ngModelChange", "ngModel"], [1, "member-list-full", "member-list-full--inline"], ["class", "member-list-full__item", 4, "ngFor", "ngForOf"], [1, "member-actions"], [1, "btn", "btn--danger", "btn--full", 3, "click"], [1, "member-list-full__item"], [1, "member-list-full__info"], [1, "member-list-full__name"], ["class", "member-list-full__role", 4, "ngIf"], [1, "member-list-full__role"], [1, "chat-detail__panel", "chat-detail__panel--profile"], [1, "profile-inline__avatar"], ["class", "profile-inline__status", 4, "ngIf"], [1, "profile-inline__name"], ["class", "profile-inline__role", 4, "ngIf"], [1, "profile-inline__info"], ["class", "profile-inline__row profile-inline__row--email", 4, "ngIf"], ["class", "profile-inline__row", 4, "ngIf"], [1, "profile-inline__actions"], [1, "btn", "btn--ghost", "btn--full", 3, "click", "disabled"], [1, "profile-inline__status"], [1, "profile-inline__role"], [1, "profile-inline__row", "profile-inline__row--email"], [1, "profile-inline__email-text"], ["type", "button", 1, "profile-inline__copy-btn", 3, "click", "matTooltip"], [1, "profile-inline__row"], [1, "notif-panel"], [1, "notif-panel__heading"], [1, "notif-panel__radio"], ["type", "radio", "name", "notifMode", "value", "all", 3, "change", "checked"], [1, "notif-panel__radio-dot"], [1, "notif-panel__radio-body"], [1, "notif-panel__radio-icon"], ["class", "notif-panel__radio", 3, "notif-panel__radio--active", 4, "ngIf"], ["type", "radio", "name", "notifMode", "value", "mute", 3, "change", "checked"], ["class", "notif-panel__mute-options", 4, "ngIf"], [1, "notif-panel__hint"], ["type", "radio", "name", "notifMode", "value", "mention", 3, "change", "checked"], [1, "notif-panel__mute-options"], [1, "notif-panel__sub-heading"], [1, "notif-panel__mute-grid"], ["type", "button", 1, "notif-panel__mute-btn", 3, "click"], ["class", "notif-panel__mute-btn-check", 4, "ngIf"], ["type", "button", 1, "notif-panel__mute-btn", "notif-panel__mute-btn--forever", 3, "click"], [1, "notif-panel__mute-btn-check"], [1, "inline-form"], [1, "inline-form__label"], ["type", "text", "placeholder", "\u65B0\u3057\u3044\u30B0\u30EB\u30FC\u30D7\u540D", 1, "inline-form__input", 3, "ngModelChange", "ngModel"], [1, "inline-form__actions"], [1, "inline-confirm"], [1, "inline-confirm__icon", "inline-confirm__icon--danger"], [1, "inline-confirm__title"], [1, "inline-confirm__msg"], [1, "inline-confirm__sub"], [1, "inline-confirm__actions"], [1, "btn", "btn--danger", 3, "click"], [1, "chat-detail__panel", "chat-detail__panel--search"], [1, "search-panel"], [1, "search-panel__input-wrap"], ["type", "text", "placeholder", "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u691C\u7D22...", "autofocus", "", 1, "search-panel__input", 3, "ngModelChange", "ngModel"], ["class", "icon-btn icon-btn--sm", 3, "click", 4, "ngIf"], ["class", "search-panel__count", 4, "ngIf"], ["class", "search-panel__results", 4, "ngIf"], ["class", "search-panel__empty", 4, "ngIf"], [1, "icon-btn", "icon-btn--sm", 3, "click"], [1, "search-panel__count"], [1, "search-panel__results"], ["class", "search-panel__result", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-panel__result", 3, "click"], [1, "search-panel__result-sender"], [1, "search-panel__result-time"], [1, "search-panel__result-text", 3, "innerHTML"], [1, "search-panel__empty"], [1, "msg-menu-backdrop", 3, "click"], [1, "msg-menu", 3, "click"], [1, "msg-menu__item", 3, "click"], [1, "msg-menu__divider"], ["class", "msg-menu__item", 3, "click", 4, "ngIf"], ["class", "msg-menu__item msg-menu__item--danger", 3, "click", 4, "ngIf"], [1, "msg-menu__item", "msg-menu__item--danger", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "emoji-picker", 3, "click"], [1, "emoji-picker__title"], [1, "emoji-picker__grid"], ["class", "emoji-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "emoji-btn", 3, "click"], ["data-testid", "new-chat-modal-backdrop", 1, "modal-backdrop", "modal-backdrop--newchat", 3, "click"], ["data-testid", "new-chat-modal", 1, "modal", "modal--md", "modal--newchat", 3, "click"], [1, "modal__header", "modal__header--orange", "modal__header--with-back"], ["aria-label", "\u623B\u308B", 1, "icon-btn", "icon-btn--light", "modal__back-btn", 3, "click"], ["aria-label", "\u9589\u3058\u308B", 1, "icon-btn", "icon-btn--light", "modal__close-btn", 3, "click"], [1, "modal__body"], ["class", "search-field search-field--group-name", 4, "ngIf"], [1, "chip-input"], [1, "chip-input__label"], [1, "chip-input__box"], ["class", "chip-tag", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", 1, "chip-input__input", 3, "ngModelChange", "keydown", "ngModel"], [1, "search-field"], [1, "search-field__label"], [1, "search-field__box"], ["type", "text", "placeholder", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u307E\u305F\u306F\u6C0F\u540D\u3067\u691C\u7D22", 1, "search-field__input", 3, "ngModelChange", "ngModel"], [1, "toggle-row"], [1, "toggle", 3, "click"], [1, "toggle__dot"], [1, "toggle-row__icon"], ["data-testid", "new-chat-contact-list", 1, "contact-list", 3, "scroll"], ["class", "contact-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "contact-list__empty", 4, "ngIf"], ["class", "contact-list__more", 4, "ngIf"], [1, "modal__footer"], ["data-testid", "new-chat-submit", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "search-field", "search-field--group-name"], [1, "search-field__hint"], ["type", "text", "placeholder", "\u4F8B: \u30D7\u30ED\u30C0\u30AF\u30C8\u958B\u767A\u30B9\u30AF\u30E9\u30E0\u30FB\u9031\u6B21MTG \u306A\u3069", "maxlength", "50", 1, "search-field__input", 3, "ngModelChange", "ngModel"], [1, "chip-tag"], [1, "chip-tag__name"], [1, "chip-tag__remove", 3, "click"], [1, "contact-item", 3, "click"], [1, "contact-item__body"], [1, "contact-item__name"], [1, "contact-item__email"], [1, "contact-list__empty"], [1, "contact-list__more"], [1, "modal", "modal--sm", 3, "click"], [1, "modal__header", "modal__header--orange"], [1, "icon-btn", "icon-btn--light", 3, "click"], [1, "member-list-full"], [1, "modal__header"], [1, "new-tag-confirm__msg"], [1, "new-tag-confirm__chips"], ["class", "new-tag-confirm__chip", 4, "ngFor", "ngForOf"], [1, "btn", "btn--primary", 3, "click"], [1, "new-tag-confirm__chip"], [1, "modal-backdrop", "modal-backdrop--addmember", 3, "click"], [1, "modal", "modal--md", 3, "click"], ["class", "add-member__selected", 4, "ngIf"], [1, "add-member__search"], ["type", "text", "placeholder", "\u540D\u524D\u30FB\u30E1\u30FC\u30EB\u3067\u691C\u7D22", 3, "ngModelChange", "ngModel"], [1, "add-member__list"], ["class", "add-member__item", 3, "add-member__item--selected", 4, "ngFor", "ngForOf"], ["class", "add-member__empty", 4, "ngIf"], [1, "add-member__selected"], ["class", "add-member__chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "add-member__chip", 3, "click"], [1, "add-member__item"], ["type", "checkbox", 3, "change", "checked"], [1, "add-member__info"], [1, "add-member__name"], ["class", "add-member__email", 4, "ngIf"], ["class", "add-member__check", 4, "ngIf"], [1, "add-member__email"], [1, "add-member__check"], [1, "add-member__empty"], [1, "form-field"], ["type", "text", "placeholder", "\u4F8B: \u91CD\u8981\u9867\u5BA2", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "form-field", 4, "ngIf"], [1, "form-input", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", "disabled", 4, "ngFor", "ngForOf"], [3, "ngValue", "disabled"], ["type", "text", "placeholder", "\u65B0\u3057\u3044\u30D5\u30A9\u30EB\u30C0\u540D", "autofocus", "", 1, "form-input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "modal", "modal--md", "modal--folder-add", 3, "click"], [1, "folder-pick-hint"], [1, "folder-pick-list", "folder-pick-list--checkbox", "folder-pick-list--accordion"], [1, "folder-pick-create"], ["type", "button", "class", "folder-pick-create__toggle", 3, "click", 4, "ngIf"], ["class", "folder-pick-create__form", 4, "ngIf"], ["class", "btn btn--ghost", 3, "click", 4, "ngIf"], [1, "folder-pick-row"], ["type", "button", "class", "folder-pick-row__toggle", 3, "click", 4, "ngIf", "ngIfElse"], [1, "folder-pick-item", "folder-pick-item--check"], [1, "folder-pick-item__icon"], [1, "folder-pick-item__name"], ["class", "folder-pick-item__check", 4, "ngIf"], ["type", "button", 1, "folder-pick-row__toggle", 3, "click"], ["aria-hidden", "true", 1, "folder-pick-row__spacer"], [1, "folder-pick-item__check"], ["type", "button", 1, "folder-pick-create__toggle", 3, "click"], [1, "folder-pick-create__form"], ["type", "text", "placeholder", "\u4F8B: \u91CD\u8981\u9867\u5BA2", "autofocus", "", 1, "form-input", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "folder-pick-create__actions"], [1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], [1, "modal", "modal--md", "modal--forward", 3, "click"], [1, "modal__body", "modal__body--forward"], [1, "forward-preview"], [1, "forward-preview__label"], [1, "forward-preview__body"], [1, "forward-preview__sender"], ["class", "forward-preview__text", 4, "ngIf"], ["class", "forward-preview__attach", 4, "ngIf"], [1, "forward-search"], ["type", "text", "placeholder", "\u30C1\u30E3\u30C3\u30C8\u540D\u3067\u691C\u7D22...", 1, "forward-search__input", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "forward-search__clear", 3, "click", 4, "ngIf"], [1, "forward-hint"], ["class", "forward-hint__count", 4, "ngIf"], [1, "forward-list"], ["class", "forward-list__item", 3, "forward-list__item--checked", 4, "ngFor", "ngForOf"], ["class", "forward-list__empty", 4, "ngIf"], [1, "forward-preview__text"], [1, "forward-preview__attach"], ["type", "button", 1, "forward-search__clear", 3, "click"], [1, "forward-hint__count"], [1, "forward-list__item"], ["type", "checkbox", 1, "forward-list__checkbox", 3, "change", "checked"], ["class", "forward-list__avatar forward-list__avatar--img", 3, "src", "alt", 4, "ngIf"], ["class", "forward-list__avatar", 3, "background", 4, "ngIf"], [1, "forward-list__text"], [1, "forward-list__name"], [1, "forward-list__type"], ["class", "forward-list__status", 4, "ngIf"], [1, "forward-list__avatar", "forward-list__avatar--img", 3, "src", "alt"], [1, "forward-list__avatar"], [1, "forward-list__status"], [1, "forward-list__empty"], [1, "modal", "modal--md", "modal--folder-bulk", 3, "click"], [1, "modal__body", "modal__body--folder-bulk"], [1, "folder-bulk__hint"], [1, "folder-bulk__count"], [1, "folder-bulk__search"], ["type", "text", "placeholder", "\u30C1\u30E3\u30C3\u30C8\u540D\u3067\u7D5E\u308A\u8FBC\u307F...", 1, "folder-bulk__search-input", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "folder-bulk__search-clear", 3, "click", 4, "ngIf"], ["class", "folder-bulk__bulk-actions", 4, "ngIf"], [1, "folder-bulk__list"], ["class", "folder-bulk__item", 3, "folder-bulk__item--checked", 4, "ngFor", "ngForOf"], ["class", "folder-bulk__empty", 4, "ngIf"], ["type", "button", 1, "folder-bulk__search-clear", 3, "click"], [1, "folder-bulk__bulk-actions"], [1, "folder-bulk__item"], ["type", "checkbox", 1, "folder-bulk__checkbox", 3, "change", "checked"], ["class", "folder-bulk__avatar folder-bulk__avatar--img", 3, "src", "alt", 4, "ngIf"], ["class", "folder-bulk__avatar", 3, "background", 4, "ngIf"], [1, "folder-bulk__text"], [1, "folder-bulk__name"], ["class", "folder-bulk__type", 4, "ngIf"], ["class", "folder-bulk__status-icon", 4, "ngIf"], [1, "folder-bulk__avatar", "folder-bulk__avatar--img", 3, "src", "alt"], [1, "folder-bulk__avatar"], [1, "folder-bulk__type"], [1, "folder-bulk__status-icon"], [1, "folder-bulk__empty"], [1, "chat-toast"], ["class", "modal__empty", 4, "ngIf"], [1, "bookmark-list"], ["class", "bookmark-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "modal__empty"], [1, "bookmark-item", 3, "click"], ["class", "bookmark-item__tags", 4, "ngIf"], ["matTooltip", "\u89E3\u9664", 1, "icon-btn", 3, "click"], [1, "bookmark-item__tags"], ["class", "msg-tag", 4, "ngFor", "ngForOf"], [1, "msg-tag"], [1, "tag-list__hint"], [1, "btn", "btn--ghost", "btn--full", "tag-list__create", 3, "click"], [1, "tag-list"], [1, "media-carousel", 3, "click"], [1, "media-carousel__header", 3, "click"], [1, "media-carousel__title"], [1, "media-carousel__name"], [1, "media-carousel__meta"], [1, "media-carousel__actions"], ["matTooltip", "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9", 1, "icon-btn", "icon-btn--light", 3, "click"], ["matTooltip", "\u9589\u3058\u308B", 1, "icon-btn", "icon-btn--light", 3, "click"], ["class", "media-carousel__nav media-carousel__nav--prev", 3, "click", 4, "ngIf"], [1, "media-carousel__stage", 3, "touchstart", "touchend"], ["class", "media-carousel__nav media-carousel__nav--next", 3, "click", 4, "ngIf"], ["class", "media-carousel__thumbs", 3, "click", 4, "ngIf"], [1, "media-carousel__nav", "media-carousel__nav--prev", 3, "click"], ["draggable", "false", 1, "media-carousel__img", 3, "click", "src", "alt"], [1, "media-carousel__placeholder", 3, "click"], [1, "media-carousel__placeholder-name"], ["controls", "", "playsinline", "", "webkit-playsinline", "", "preload", "auto", 1, "media-carousel__video", 3, "click", "error", "loadedmetadata", "poster"], ["type", "video/mp4", 3, "src"], [1, "media-carousel__nav", "media-carousel__nav--next", 3, "click"], [1, "media-carousel__thumbs", 3, "click"], ["class", "media-carousel__thumb", 3, "media-carousel__thumb--active", "click", 4, "ngFor", "ngForOf"], [1, "media-carousel__thumb", 3, "click"], [1, "media-carousel__thumb-inner"], [1, "modal", "modal--lg", 3, "click"], [1, "modal__tabs"], ["class", "media-grid", 4, "ngIf"], ["class", "file-list", 4, "ngIf"], [1, "media-grid"], [1, "media-tile__name"], [1, "media-tile__meta"], [1, "file-list"], ["class", "ai-context", 4, "ngIf"], ["class", "btn btn--primary btn--full", 3, "disabled", "click", 4, "ngIf"], ["class", "ai-loading", 4, "ngIf"], ["class", "ai-suggestions", 4, "ngIf"], ["class", "btn btn--ghost btn--full", 3, "click", 4, "ngIf"], [1, "ai-context"], [1, "ai-context__label"], [1, "ai-context__text"], [1, "chip-group"], ["class", "chip", 3, "chip--active", "click", 4, "ngFor", "ngForOf"], [1, "chip", 3, "click"], ["rows", "3", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "btn", "btn--primary", "btn--full", 3, "click", "disabled"], [1, "ai-loading"], [1, "ai-loading__spinner"], [1, "ai-suggestions"], ["class", "ai-suggestion-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "ai-suggestion-card", 3, "click"], [1, "ai-suggestion-card__num"], [1, "ai-suggestion-card__text"], [1, "ai-suggestion-card__arrow"], [1, "modal", "modal--attach", 3, "click"], [1, "drop-zone", 3, "dragover", "drop"], [1, "attach-quick"], [1, "attach-quick__btn", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--md", "modal--task-create", 3, "click"], ["class", "task-form__source", 4, "ngIf"], [1, "task-form__notice"], [1, "form-label"], [1, "form-row"], [1, "form-col"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "time", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "task-form__presets"], ["type", "button", 1, "task-form__preset", 3, "click"], ["type", "text", "placeholder", "\u4F8B: \u898B\u7A4D\u66F8\u306E\u63D0\u51FA\u3092\u5FD8\u308C\u305A\u306B", 1, "form-input", 3, "ngModelChange", "ngModel"], ["rows", "4", "maxlength", "600", "placeholder", "\u30BF\u30B9\u30AF\u306B\u95A2\u3059\u308B\u8A73\u7D30\u30E1\u30E2\u3092\u66F8\u3051\u307E\u3059\uFF08\u6700\u5927600\u6587\u5B57\uFF09", 1, "form-input", 2, "resize", "vertical", "min-height", "80px", 3, "ngModelChange", "ngModel"], [2, "text-align", "right", "font-size", "12px", "color", "#757575", "margin-top", "-4px"], [1, "task-form__remind-toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "task-form__source"], [1, "task-form__source-text"], [1, "lightbox", 3, "click"], [1, "lightbox__toolbar", 3, "click"], ["matTooltip", "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9", 1, "lightbox__download", "icon-btn", 3, "click"], ["matTooltip", "\u9589\u3058\u308B (Esc)", 1, "lightbox__close", "icon-btn", 3, "click"], ["class", "lightbox__nav lightbox__nav--prev", "matTooltip", "\u524D\u3078", 3, "click", 4, "ngIf"], [1, "lightbox__stage", 3, "click", "touchstart", "touchend"], [3, "src", "alt"], [1, "lightbox__caption"], [1, "lightbox__name"], [1, "lightbox__meta"], ["class", "lightbox__nav lightbox__nav--next", "matTooltip", "\u6B21\u3078", 3, "click", 4, "ngIf"], ["class", "lightbox__thumbs", 3, "click", 4, "ngIf"], ["matTooltip", "\u524D\u3078", 1, "lightbox__nav", "lightbox__nav--prev", 3, "click"], ["matTooltip", "\u6B21\u3078", 1, "lightbox__nav", "lightbox__nav--next", 3, "click"], [1, "lightbox__thumbs", 3, "click"], ["class", "lightbox__thumb", 3, "lightbox__thumb--active", "click", 4, "ngFor", "ngForOf"], [1, "lightbox__thumb", 3, "click"], [1, "modal-backdrop", "avatar-crop-backdrop", 3, "click"], [1, "modal", "modal--avatar-crop", 3, "click"], ["matTooltip", "\u30AD\u30E3\u30F3\u30BB\u30EB", 1, "icon-btn", 3, "click"], [1, "modal__body", "avatar-crop__body"], [1, "avatar-crop__stage", 3, "mousedown", "touchstart", "touchmove", "touchend", "wheel"], [1, "avatar-crop__canvas"], ["class", "avatar-crop__img", "draggable", "false", "alt", "\u30A2\u30D0\u30BF\u30FC", 3, "src", "transform", 4, "ngIf"], ["class", "avatar-crop__loading", 4, "ngIf"], [1, "avatar-crop__mask"], [1, "avatar-crop__controls"], [1, "avatar-crop__zoom"], [1, "avatar-crop__zoom-btn", 3, "click"], [1, "avatar-crop__slider-wrap"], ["type", "range", "min", "1", "max", "3", "step", "0.05", 3, "ngModelChange", "ngModel"], [1, "avatar-crop__ticks"], ["class", "avatar-crop__tick", 4, "ngFor", "ngForOf"], [1, "avatar-crop__reset"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "avatar-crop__hint"], [1, "btn", "btn--ghost", 3, "click", "disabled"], ["class", "avatar-crop__saving", 4, "ngIf"], ["draggable", "false", "alt", "\u30A2\u30D0\u30BF\u30FC", 1, "avatar-crop__img", 3, "src"], [1, "avatar-crop__loading"], ["aria-label", "\u8AAD\u307F\u8FBC\u307F\u4E2D", 1, "avatar-crop__spinner"], [1, "avatar-crop__loading-text"], [1, "avatar-crop__tick"], [1, "avatar-crop__saving"], ["aria-hidden", "true", 1, "avatar-crop__spinner", "avatar-crop__spinner--sm"]], template: function ChatPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 15)(1, "aside", 16);
        \u0275\u0275template(2, ChatPageComponent_button_2_Template, 8, 2, "button", 17);
        \u0275\u0275elementStart(3, "div", 18)(4, "button", 19);
        \u0275\u0275listener("click", function ChatPageComponent_Template_button_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setFilter("all"));
        });
        \u0275\u0275elementStart(5, "span", 20);
        \u0275\u0275text(6, "ALL");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 21);
        \u0275\u0275listener("click", function ChatPageComponent_Template_button_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setFilter("folder"));
        });
        \u0275\u0275elementStart(8, "mat-icon");
        \u0275\u0275text(9, "folder_open");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 22);
        \u0275\u0275listener("click", function ChatPageComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setFilter("direct"));
        });
        \u0275\u0275elementStart(11, "mat-icon");
        \u0275\u0275text(12, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 23);
        \u0275\u0275listener("click", function ChatPageComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setFilter("group"));
        });
        \u0275\u0275elementStart(14, "mat-icon");
        \u0275\u0275text(15, "group");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 19);
        \u0275\u0275listener("click", function ChatPageComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setFilter("unread"));
        });
        \u0275\u0275elementStart(17, "span", 20);
        \u0275\u0275text(18, "\u672A\u8AAD");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "div", 24);
        \u0275\u0275elementStart(20, "button", 25);
        \u0275\u0275listener("click", function ChatPageComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openNewChatModal());
        });
        \u0275\u0275elementStart(21, "mat-icon");
        \u0275\u0275text(22, "edit_square");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 26)(24, "label", 27);
        \u0275\u0275text(25, "\u30C1\u30E3\u30C3\u30C8\u691C\u7D22");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function ChatPageComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function ChatPageComponent_Template_input_ngModelChange_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearchQueryChange());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, ChatPageComponent_span_27_Template, 2, 1, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 30);
        \u0275\u0275template(29, ChatPageComponent_ng_container_29_Template, 7, 1, "ng-container", 31)(30, ChatPageComponent_ng_template_30_Template, 12, 20, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(32, ChatPageComponent_ng_template_32_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 32);
        \u0275\u0275listener("click", function ChatPageComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openNewChatModal());
        });
        \u0275\u0275elementStart(35, "mat-icon");
        \u0275\u0275text(36, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38, "\u65B0\u3057\u3044\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(39, ChatPageComponent_section_39_Template, 79, 47, "section", 33)(40, ChatPageComponent_div_40_Template, 1, 0, "div", 34)(41, ChatPageComponent_aside_41_Template, 16, 17, "aside", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, ChatPageComponent_div_42_Template, 1, 0, "div", 36)(43, ChatPageComponent_div_43_Template, 34, 9, "div", 37)(44, ChatPageComponent_div_44_Template, 6, 1, "div", 38)(45, ChatPageComponent_div_45_Template, 42, 10, "div", 39)(46, ChatPageComponent_div_46_Template, 20, 1, "div", 38)(47, ChatPageComponent_div_47_Template, 1, 0, "div", 36)(48, ChatPageComponent_div_48_Template, 17, 4, "div", 37)(49, ChatPageComponent_div_49_Template, 17, 1, "div", 38)(50, ChatPageComponent_div_50_Template, 22, 6, "div", 40)(51, ChatPageComponent_div_51_Template, 26, 5, "div", 38)(52, ChatPageComponent_div_52_Template, 20, 2, "div", 38)(53, ChatPageComponent_div_53_Template, 24, 4, "div", 38)(54, ChatPageComponent_div_54_Template, 35, 10, "div", 38)(55, ChatPageComponent_div_55_Template, 28, 8, "div", 38)(56, ChatPageComponent_div_56_Template, 5, 1, "div", 41)(57, ChatPageComponent_div_57_Template, 14, 2, "div", 38)(58, ChatPageComponent_div_58_Template, 19, 1, "div", 38)(59, ChatPageComponent_div_59_Template, 23, 11, "div", 42)(60, ChatPageComponent_div_60_Template, 26, 8, "div", 38)(61, ChatPageComponent_div_61_Template, 19, 9, "div", 38)(62, ChatPageComponent_div_62_Template, 34, 0, "div", 38)(63, ChatPageComponent_div_63_Template, 55, 8, "div", 43)(64, ChatPageComponent_div_64_Template, 18, 9, "div", 44)(65, ChatPageComponent_div_65_Template, 37, 11, "div", 45);
      }
      if (rf & 2) {
        const roomListView_r238 = \u0275\u0275reference(33);
        \u0275\u0275classProp("chat-page--mobile-list", ctx.mobilePane === "list")("chat-page--mobile-room", ctx.mobilePane === "room");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.mobilePane === "list" && ctx.selectedRoom);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("filter-btn--active", ctx.activeFilter === "all");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("filter-btn--active", ctx.activeFilter === "folder");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("filter-btn--active", ctx.activeFilter === "direct");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("filter-btn--active", ctx.activeFilter === "group");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("filter-btn--active", ctx.activeFilter === "unread");
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchQuery.trim());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeFilter === "folder")("ngIfElse", roomListView_r238);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.selectedRoom);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedRoom && ctx.showDetailPanel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedRoom && ctx.showDetailPanel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showMessageMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showMessageMenu && ctx.messageMenuTarget);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEmojiPopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNewChatModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showMemberListModal && ctx.selectedRoom);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.memberListMenuTarget);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.memberListMenuTarget);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNewTagConfirmModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAddMemberModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFolderCreateModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFolderRenameModal && ctx.folderRenameTarget);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFolderAddToModal && ctx.folderAddToTarget);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForwardModal && ctx.forwardingMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFolderBulkManageModal && ctx.folderBulkManageTarget);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.toastVisible);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBookmarksModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showTagsModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showMediaCarousel && ctx.currentCarouselItem);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showMediaModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAiModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAttachModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showTaskCreateModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLightbox && ctx.currentLightboxImage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAvatarCropModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, RouterModule, ScheduledListComponent], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.chat-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  min-height: 0;\n  background: #f6f8fc;\n  overflow: hidden;\n}\n.chat-list[_ngcontent-%COMP%] {\n  width: 380px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-right: 1px solid #e0e0e0;\n}\n.chat-list__resume-banner[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff3e0,\n      #ffe0b2);\n  border: none;\n  border-bottom: 1px solid #ffcc80;\n  color: #e65100;\n  font-size: 13px;\n  font-weight: 600;\n  text-align: left;\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(255, 152, 0, 0.2);\n}\n.chat-list__resume-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #ef6c00;\n  flex-shrink: 0;\n}\n.chat-list__resume-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.chat-list__resume-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #e65100;\n  opacity: 0.8;\n}\n.chat-list__resume-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #e65100;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chat-list__filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0 12px;\n  height: 48px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #f0f0f0;\n  flex-shrink: 0;\n}\n.chat-list__filters-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.chat-list__search[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  position: relative;\n  flex-shrink: 0;\n  height: 48px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #f5f5f5;\n}\n.chat-list[_ngcontent-%COMP%]   .search-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  left: 20px;\n  background: #fff;\n  padding: 0 5px;\n  font-size: 10px;\n  color: #757575;\n}\n.chat-list[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 32px;\n  padding: 0 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n  box-sizing: border-box;\n}\n.chat-list[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.chat-list__rooms[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 0 8px;\n}\n.chat-list__empty[_ngcontent-%COMP%] {\n  padding: 48px 16px;\n  text-align: center;\n  color: #757575;\n}\n.chat-list__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #bdbdbd;\n}\n.chat-list__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 13px;\n}\n.chat-list__new-btn[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0;\n  flex-shrink: 0;\n  padding: 8px 14px;\n  height: auto;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  border-radius: 0;\n  font-size: 13px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n  transition: background 0.15s;\n  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.05);\n}\n.chat-list__new-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.chat-list__new-btn[_ngcontent-%COMP%]:hover {\n  background: #e08600;\n}\n.chat-list__new-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 30px;\n  padding: 0 8px;\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  color: #757575;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, color 0.15s;\n}\n.filter-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.filter-btn__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.filter-btn--active[_ngcontent-%COMP%] {\n  color: #ff9800;\n  background: #fff3e0;\n}\n.filter-btn--action[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.room-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.room-item[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.room-item--selected[_ngcontent-%COMP%] {\n  background: #fff3e0 !important;\n  border-left: 3px solid #ff9800;\n  padding-left: 13px;\n}\n.room-item__avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.room-item__avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #bdbdbd;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.room-item__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -4px;\n  bottom: -2px;\n  min-width: 20px;\n  height: 18px;\n  padding: 0 4px;\n  background: #90caf9;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #fff;\n}\n.room-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.room-item__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.room-item__name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 400;\n  color: #81766e;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.room-item__time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757575;\n  flex-shrink: 0;\n  font-weight: 400;\n}\n.room-item__bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.room-item__msg[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  font-weight: 400;\n  color: #757575;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.room-item__msg-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  color: #bdbdbd;\n}\n.room-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.room-item__warning[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n  color: #ffa726;\n}\n.room-item__star[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n  color: #ff9800;\n}\n.chat-room[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  background: #fafafa;\n}\n.chat-room__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  height: 48px;\n  background: #ff9800;\n  color: #fff;\n  flex-shrink: 0;\n}\n.chat-room__header[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 32px;\n  height: 32px;\n}\n.chat-room__header[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n  color: #fff;\n}\n.chat-room__header[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.chat-room__header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.chat-room__avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #fff;\n  color: #ff9800;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.chat-room__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.chat-room__header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.chat-room__header-actions[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.chat-room__header-actions[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.chat-room__header-actions[_ngcontent-%COMP%]   .chat-room__ha--mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.chat-room__pinned[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 20px;\n  background: #fffbea;\n  border-bottom: 1px solid #ffecb3;\n  font-size: 13px;\n  color: #81766e;\n}\n.chat-room__pinned-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #ff9800;\n}\n.chat-room__pinned-avatar[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #ff9800;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.chat-room__pinned-text[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.chat-room__messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.chat-room__input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  padding-bottom: calc(10px + env(safe-area-inset-bottom, 0));\n  background: #fff;\n  border-top: 1px solid #e0e0e0;\n  flex-shrink: 0;\n  transition: padding 0.2s ease;\n}\n.chat-room__input-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  overflow: hidden;\n  max-width: 220px;\n  opacity: 1;\n  transition: max-width 0.28s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.22s;\n}\n.chat-room__input-plus-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  max-width: 0;\n  overflow: visible;\n  opacity: 0;\n  pointer-events: none;\n  transition: max-width 0.28s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.22s;\n}\n.chat-room__input--typing[_ngcontent-%COMP%]   .chat-room__input-actions[_ngcontent-%COMP%] {\n  max-width: 0 !important;\n  opacity: 0 !important;\n  pointer-events: none !important;\n}\n.chat-room__input--typing[_ngcontent-%COMP%]   .chat-room__input-plus-wrap[_ngcontent-%COMP%] {\n  max-width: 44px !important;\n  opacity: 1 !important;\n  pointer-events: auto !important;\n}\n.chat-room__input--typing[_ngcontent-%COMP%]   .msg-input-wrap[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.chat-room__input--typing[_ngcontent-%COMP%]   .msg-input.msg-input--textarea[_ngcontent-%COMP%] {\n  background: #f8f9fb;\n  border-color: var(--schecon-orange, #ff9800);\n  box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.12);\n}\n.icon-btn--plus[_ngcontent-%COMP%] {\n  background: #f1f3f4 !important;\n  color: #5f6368 !important;\n  transition: background 0.18s, color 0.18s;\n  transform: none !important;\n}\n.icon-btn--plus[_ngcontent-%COMP%]:hover {\n  background: #e8eaed !important;\n}\n.icon-btn--plus-open[_ngcontent-%COMP%] {\n  transform: none !important;\n  background: var(--schecon-orange, #ff9800) !important;\n  color: #fff !important;\n}\n.icon-btn--plus-open[_ngcontent-%COMP%]:hover {\n  background: #ef6c00 !important;\n  color: #fff !important;\n}\n.input-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 0;\n  min-width: 220px;\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.06);\n  border: 1px solid #eceff1;\n  padding: 8px 0;\n  z-index: 50;\n  opacity: 1;\n  animation: _ngcontent-%COMP%_inputMenuIn 0.16s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_inputMenuIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.input-menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 16px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  color: #81766e;\n  text-align: left;\n}\n.input-menu__item[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.input-menu__icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--schecon-orange, #ff9800);\n}\n.input-menu__item--schecon[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #e65100;\n}\n.input-menu__schecon-wrap[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: transparent;\n  border-radius: 0;\n}\n.input-menu__schecon-img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: block;\n  filter: none;\n  object-fit: contain;\n}\n.msg-input.msg-input--textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  resize: none;\n  overflow-y: hidden;\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 1.5;\n  padding: 10px 14px;\n  border: 1px solid #e0e0e0;\n  border-radius: 18px;\n  background: #fff;\n  color: #81766e;\n  box-sizing: border-box;\n  height: auto;\n  min-height: 40px;\n  max-height: 192px;\n  flex: 0 0 auto;\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    background 0.18s ease;\n  scrollbar-width: thin;\n  scrollbar-color: #bdbdbd transparent;\n}\n.msg-input.msg-input--textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #fff;\n}\n.msg-input.msg-input--textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9aa0a6;\n}\n.msg-input.msg-input--textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.msg-input.msg-input--textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.msg-input.msg-input--textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #bdbdbd;\n  border-radius: 4px;\n}\n.msg-input.msg-input--textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #9e9e9e;\n}\n.schecon-icon-img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: block;\n  pointer-events: none;\n  object-fit: contain;\n  filter: none;\n}\n.icon-btn--schecon[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.icon-btn--schecon[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.08) !important;\n  transform: scale(1.05);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  color: #757575;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.msg-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 36px;\n  height: 36px;\n  padding: 7px 12px;\n  border: none;\n  border-radius: 18px;\n  background: #f0f2f5;\n  font-size: 15px;\n  line-height: 20px;\n  outline: none;\n  transition: background 0.15s;\n}\n.msg-input[_ngcontent-%COMP%]:focus {\n  background: #e4e6eb;\n}\n.input-ogp[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 0 4px;\n}\n.input-ogp__loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #999;\n  font-size: 12px;\n  padding: 4px 0;\n}\n.input-ogp__card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e0e0e0;\n  max-width: 360px;\n  border-left: 4px solid var(--accent, #5865f2);\n}\n.input-ogp__accent[_ngcontent-%COMP%] {\n  display: none;\n}\n.input-ogp__text[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  min-width: 0;\n}\n.input-ogp__site[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  margin-bottom: 2px;\n}\n.input-ogp__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a73e8;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.input-ogp__desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  line-height: 1.3;\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.input-ogp__image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 180px;\n  object-fit: cover;\n}\n.input-ogp__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 22px !important;\n  height: 22px !important;\n  background: rgba(0, 0, 0, 0.5) !important;\n  color: #fff !important;\n  border-radius: 50%;\n}\n.input-ogp__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.input-ogp__close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7) !important;\n}\n.send-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.send-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d68000;\n}\n.send-btn[_ngcontent-%COMP%]:disabled {\n  background: #e0e0e0;\n  cursor: not-allowed;\n}\n.date-divider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 8px 0;\n}\n.date-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #757575;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 4px 12px;\n  border-radius: 12px;\n}\n.system-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: #757575;\n  margin: 4px 0;\n}\n.msg-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n  margin-top: 2px;\n}\n.msg-row--first[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.msg-row--me[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.msg-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #ff9800;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.msg-avatar--img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  background: #fff;\n  padding: 1px;\n}\n.msg-avatar--hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.msg-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  max-width: min(72%, 60ch);\n  overflow: visible;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border: none;\n  border-radius: 18px;\n  padding: 8px 12px;\n  font-size: 15px;\n  line-height: 1.3333;\n  letter-spacing: 0;\n  color: #81766e;\n  white-space: pre-wrap;\n  word-break: break-word;\n  box-shadow: none;\n  overflow: visible;\n  max-width: 100%;\n  cursor: text;\n}\n.msg-bubble--me[_ngcontent-%COMP%] {\n  background: #ffe0b2;\n  border: none;\n  color: #5d4037;\n}\n@media (min-width: 1024px) {\n  .msg-bubble[_ngcontent-%COMP%], .msg-bubble[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .msg-bubble__text[_ngcontent-%COMP%], .msg-bubble__text[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    -webkit-user-select: text !important;\n    -moz-user-select: text !important;\n    -ms-user-select: text !important;\n    user-select: text !important;\n    -webkit-touch-callout: default !important;\n    touch-action: manipulation !important;\n  }\n}\n@media (max-width: 1023px) {\n  .msg-bubble[_ngcontent-%COMP%], .msg-bubble[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .msg-bubble__text[_ngcontent-%COMP%], .msg-bubble__text[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important;\n    -webkit-touch-callout: none !important;\n    touch-action: manipulation !important;\n  }\n}\n.chat-page[_ngcontent-%COMP%]:has(.chat-detail)   .msg-group[_ngcontent-%COMP%], body[_ngcontent-%COMP%]:has(.chat-page--mobile-room.chat-page--has-detail)   .msg-group[_ngcontent-%COMP%] {\n  max-width: min(72%, 60ch);\n}\n.chat-page[_ngcontent-%COMP%]:has(.chat-detail)   .msg-bubble[_ngcontent-%COMP%], body[_ngcontent-%COMP%]:has(.chat-page--mobile-room.chat-page--has-detail)   .msg-bubble[_ngcontent-%COMP%] {\n  max-width: 60ch;\n  word-break: break-word;\n  overflow-wrap: anywhere;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  word-break: break-word;\n  overflow-wrap: anywhere;\n}\n@media (min-width: 768px) {\n  .msg-bubble[_ngcontent-%COMP%] {\n    max-width: 60ch;\n  }\n}\n@media (max-width: 767px) {\n  .msg-bubble[_ngcontent-%COMP%] {\n    max-width: 100%;\n    font-size: 16px;\n    line-height: 1.4;\n  }\n  .msg-group[_ngcontent-%COMP%] {\n    max-width: calc(100% - 48px) !important;\n  }\n  .chat-page[_ngcontent-%COMP%]:has(.chat-detail)   .msg-group[_ngcontent-%COMP%], body[_ngcontent-%COMP%]:has(.chat-page--mobile-room.chat-page--has-detail)   .msg-group[_ngcontent-%COMP%] {\n    max-width: calc(100% - 48px) !important;\n  }\n  .chat-page[_ngcontent-%COMP%]:has(.chat-detail)   .msg-bubble[_ngcontent-%COMP%], body[_ngcontent-%COMP%]:has(.chat-page--mobile-room.chat-page--has-detail)   .msg-bubble[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n  }\n}\n.msg-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757575;\n  white-space: nowrap;\n  margin-bottom: 2px;\n}\n.msg-row--me[_ngcontent-%COMP%]   .msg-group[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.chat-detail[_ngcontent-%COMP%] {\n  width: 280px;\n  flex-shrink: 0;\n  background: #fff;\n  border-left: 1px solid #e0e0e0;\n  padding: 12px 20px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  max-height: 100%;\n}\n.chat-detail__avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #bdbdbd;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.chat-detail__title[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n  text-align: center;\n  word-break: break-word;\n}\n.chat-detail__menu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.chat-detail__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 8px;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #81766e;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.chat-detail__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #757575;\n}\n.chat-detail__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.chat-detail__menu-danger[_ngcontent-%COMP%] {\n  color: #e53935 !important;\n}\n.chat-detail__menu-danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #e53935 !important;\n}\n.chat-detail__tasks[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid #e0e0e0;\n}\n.chat-detail__tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 6px;\n}\n.chat-detail__tasks-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #ff9800;\n}\n.chat-detail__tasks-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: #81766e;\n  letter-spacing: 0.02em;\n}\n.chat-detail__tasks-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #757575;\n  padding: 2px 8px;\n  background: #f4f4f5;\n  border-radius: 10px;\n}\n.chat-detail__tasks-more[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11px;\n  font-weight: 600;\n  color: #ff9800;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 6px;\n}\n.chat-detail__tasks-more[_ngcontent-%COMP%]:hover {\n  background: #ffe0b2;\n}\n.chat-detail__tasks-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757575;\n  margin: 0 0 10px;\n  line-height: 1.4;\n}\n.chat-detail__tasks-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.chat-detail__tasks-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 8px;\n  color: #757575;\n}\n.chat-detail__tasks-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.4;\n  margin-bottom: 6px;\n}\n.chat-detail__tasks-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 600;\n}\n.chat-detail__tasks-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.4;\n  display: block;\n  margin-top: 4px;\n}\n.inline-task[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 10px 10px 8px;\n  background: #fff;\n  border: 1px solid #eaeaea;\n  border-left: 3px solid #cfcfcf;\n  border-radius: 8px;\n  cursor: pointer;\n  text-align: left;\n  font-family: inherit;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    transform 0.1s,\n    box-shadow 0.15s;\n  width: 100%;\n}\n.inline-task[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n  border-color: #d6d6d6;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  transform: translateY(-1px);\n}\n.inline-task[_ngcontent-%COMP%]:hover   .inline-task__open[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.inline-task[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.inline-task__check[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n  margin-top: -1px;\n  border-radius: 50%;\n  color: #bdbdbd;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.inline-task__check[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.inline-task__check[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n}\n.inline-task__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.inline-task__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n  line-height: 1.35;\n  word-break: break-word;\n  margin-bottom: 4px;\n}\n.inline-task__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: wrap;\n  font-size: 11px;\n  color: #757575;\n}\n.inline-task__meta-icon[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  width: 13px !important;\n  height: 13px !important;\n}\n.inline-task__due[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.inline-task__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 1px 6px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 1.4;\n}\n.inline-task__badge--overdue[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #c62828;\n}\n.inline-task__badge--soon[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.inline-task__badge--done[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.inline-task__room[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-top: 4px;\n  font-size: 10px;\n  color: #757575;\n}\n.inline-task__room[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  width: 12px !important;\n  height: 12px !important;\n}\n.inline-task__room[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.inline-task__open[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  color: #757575;\n  flex-shrink: 0;\n  margin-top: 2px;\n  opacity: 0.5;\n  transition: opacity 0.15s;\n}\n.inline-task--overdue[_ngcontent-%COMP%] {\n  border-left-color: #e53935;\n}\n.inline-task--overdue[_ngcontent-%COMP%]   .inline-task__title[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.inline-task--soon[_ngcontent-%COMP%] {\n  border-left-color: #ff9800;\n}\n.inline-task--done[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.inline-task--done[_ngcontent-%COMP%]   .inline-task__title[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #757575;\n}\n.inline-task--done[_ngcontent-%COMP%]   .inline-task__check[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.task-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #e8e8e8;\n  background: #fff;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n.task-tabs__tab[_ngcontent-%COMP%] {\n  flex: 1;\n  appearance: none;\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid transparent;\n  padding: 10px 8px;\n  font-family: inherit;\n  font-size: 13px;\n  font-weight: 600;\n  color: #757575;\n  cursor: pointer;\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.task-tabs__tab[_ngcontent-%COMP%]:hover {\n  color: #81766e;\n  background: #fafafa;\n}\n.task-tabs__tab--active[_ngcontent-%COMP%] {\n  color: #ff9800;\n  border-bottom-color: #ff9800;\n  background: #fff;\n}\n.task-tabs__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 6px;\n  border-radius: 9px;\n  background: #eeeeee;\n  color: #757575;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n}\n.task-tabs__tab--active[_ngcontent-%COMP%]   .task-tabs__count[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.task-form__remind-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 13px;\n  color: #81766e;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.task-form__remind-toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #ff9800;\n  cursor: pointer;\n}\n.chat-detail__mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.chat-detail__backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1200px) {\n  .chat-detail__backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 9998;\n    animation: _ngcontent-%COMP%_fade-in 0.2s;\n  }\n  .chat-detail[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: min(420px, 92vw);\n    max-width: 92vw;\n    z-index: 9999;\n    padding: 0 20px 20px;\n    overflow-y: auto;\n    animation: _ngcontent-%COMP%_slide-in-right 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n    box-shadow: -8px 0 24px rgba(0, 0, 0, 0.18);\n  }\n  .chat-detail__mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    position: sticky;\n    top: 0;\n    background: #fff;\n    padding: 12px 0;\n    margin: 0 -20px 12px;\n    padding: 12px 20px;\n    border-bottom: 1px solid #e0e0e0;\n    z-index: 2;\n  }\n  .chat-detail__mobile-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n    font-weight: 600;\n    color: #81766e;\n  }\n}\n@keyframes _ngcontent-%COMP%_slide-in-right {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@media (max-width: 900px) {\n  .chat-list[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n}\n@media (max-width: 768px) {\n  .chat-list[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: none;\n  }\n  .chat-room__messages[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.modal-backdrop[_ngcontent-%COMP%], .modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 16px;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease-out;\n}\n.modal-backdrop--addmember[_ngcontent-%COMP%] {\n  z-index: 10100 !important;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 480px;\n  max-height: 88vh;\n  max-height: 88dvh;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_modalIn 0.18s ease-out;\n  box-sizing: border-box;\n}\n.modal--sm[_ngcontent-%COMP%] {\n  max-width: 360px;\n}\n.modal--md[_ngcontent-%COMP%] {\n  max-width: 560px;\n}\n.modal--lg[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e0e0e0;\n  flex-shrink: 0;\n}\n.modal__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #81766e;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.modal__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  box-sizing: border-box;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n.modal__body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 0;\n}\n.modal__body--center[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n.modal__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  padding: 10px 14px;\n  border-top: 1px solid #e0e0e0;\n  flex-shrink: 0;\n}\n.modal__tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 0 12px;\n}\n.modal__tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid transparent;\n  font-size: 13px;\n  color: #757575;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.15s;\n}\n.modal__tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.modal__tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #81766e;\n}\n.modal__tab--active[_ngcontent-%COMP%] {\n  color: #ff9800 !important;\n  border-bottom-color: #ff9800 !important;\n}\n.modal__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #757575;\n}\n.modal__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #bdbdbd;\n}\n.modal__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 13px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: 6px;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  color: #81766e;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.15s;\n}\n.btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f5f5f5;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  border-color: #ff9800;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e08600;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #e0e0e0;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e53935;\n  color: #fff;\n  border-color: #e53935;\n}\n.btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #df211d;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn--full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #757575;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n  background: #fff;\n  box-sizing: border-box;\n  font-family: inherit;\n  resize: vertical;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.seg-control[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f5f5f5;\n  border-radius: 8px;\n  padding: 4px;\n}\n.seg-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #757575;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.15s;\n}\n.seg-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.seg-control__btn--active[_ngcontent-%COMP%] {\n  background: #fff !important;\n  color: #ff9800 !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.member-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 280px;\n  overflow-y: auto;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n}\n.member-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.member-list__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.member-list__item[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.member-list__item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #ff9800;\n}\n.member-list__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.member-list__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n}\n.member-list__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757575;\n}\n.mini-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #ff9800;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: none;\n  cursor: pointer;\n}\n.selected-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ff9800;\n  font-weight: 600;\n}\n.bookmark-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.bookmark-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.bookmark-item[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.bookmark-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.bookmark-item__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.bookmark-item__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n}\n.bookmark-item__time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757575;\n}\n.bookmark-item__text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #81766e;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.bookmark-item__tags[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.tag-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin: 8px 0 16px;\n}\n.tag-list__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #757575;\n  margin: 0 0 12px;\n  padding: 8px 12px;\n  background: #f7f7f8;\n  border-radius: 8px;\n  line-height: 1.5;\n}\n.tag-list__create[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.tag-item[_ngcontent-%COMP%] {\n  --tag-color: #ff9800;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #eaeaea;\n  border-left: 3px solid var(--tag-color);\n  border-radius: 10px;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    transform 0.1s,\n    box-shadow 0.15s;\n  font-family: inherit;\n  text-align: left;\n  width: 100%;\n}\n.tag-item[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--tag-color) 5%, #fff);\n  border-color: color-mix(in srgb, var(--tag-color) 30%, #eaeaea);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transform: translateY(-1px);\n}\n.tag-item[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.tag-item__label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 600;\n  color: #81766e;\n}\n.tag-item__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #757575;\n  padding: 2px 10px;\n  background: #f4f4f5;\n  border-radius: 10px;\n}\n.tag-item__chev[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #757575;\n}\n.tag-item--active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--tag-color) 10%, #fff);\n  border-color: var(--tag-color);\n  box-shadow: 0 2px 8px color-mix(in srgb, var(--tag-color) 18%, transparent);\n}\n.tag-item--active[_ngcontent-%COMP%]   .tag-item__label[_ngcontent-%COMP%] {\n  color: var(--tag-color);\n}\n.tag-item--active[_ngcontent-%COMP%]   .tag-item__count[_ngcontent-%COMP%] {\n  background: var(--tag-color);\n  color: #fff;\n}\n.tag-item--active[_ngcontent-%COMP%]   .tag-item__chev[_ngcontent-%COMP%] {\n  color: var(--tag-color);\n}\n.tag-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.media-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 12px;\n}\n.media-tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  padding: 0;\n  text-align: left;\n  font-family: inherit;\n}\n.media-tile__thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f0f0;\n  overflow: hidden;\n  transition: transform 0.15s;\n}\n.media-tile__thumb[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.media-tile__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.media-tile__overlay[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.media-tile__play[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff !important;\n  font-size: 44px !important;\n  width: 44px !important;\n  height: 44px !important;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);\n  pointer-events: none;\n  z-index: 1;\n}\n.media-tile[_ngcontent-%COMP%]:hover   .media-tile__overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.media-tile[_ngcontent-%COMP%]:hover   .media-tile__thumb[_ngcontent-%COMP%] {\n  transform: scale(1.02);\n}\n.media-tile__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #81766e;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.media-tile__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757575;\n}\n.file-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.file-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  transition: background 0.15s;\n  width: 100%;\n  background: transparent;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-family: inherit;\n  text-align: left;\n}\n.file-item[_ngcontent-%COMP%]:hover {\n  background: #fff8f0;\n  border-color: #ffe0b2;\n}\n.file-item[_ngcontent-%COMP%]:hover   .file-item__download[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.file-item[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #ff9800;\n  flex-shrink: 0;\n}\n.file-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.file-item__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n}\n.file-item__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757575;\n}\n.file-item__download[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #f1f3f4;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.file-item__download[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #5f6368;\n  transition: color 0.15s;\n}\n.media-carousel[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.92);\n  z-index: 99999;\n  display: flex;\n  flex-direction: column;\n  padding: 72px 72px 140px;\n  animation: _ngcontent-%COMP%_mediaCarouselIn 0.18s ease-out;\n}\n.media-carousel__header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 22px;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.6),\n      transparent);\n  color: #fff;\n  z-index: 2;\n}\n.media-carousel__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.media-carousel__title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n}\n.media-carousel__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  max-width: 420px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.media-carousel__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.75;\n  margin-top: 2px;\n}\n.media-carousel__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.media-carousel__nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.15s, transform 0.15s;\n  z-index: 2;\n}\n.media-carousel__nav[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: #fff;\n}\n.media-carousel__nav[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-50%) scale(1.05);\n}\n.media-carousel__nav--prev[_ngcontent-%COMP%] {\n  left: 16px;\n}\n.media-carousel__nav--next[_ngcontent-%COMP%] {\n  right: 16px;\n}\n.media-carousel__stage[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 0;\n  touch-action: pan-y;\n}\n.media-carousel__img[_ngcontent-%COMP%] {\n  max-width: min(900px, 92vw);\n  max-height: 100%;\n  object-fit: contain;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);\n  border-radius: 8px;\n}\n.media-carousel__video[_ngcontent-%COMP%] {\n  max-width: min(900px, 92vw);\n  max-height: 100%;\n  background: #000;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);\n  border-radius: 8px;\n}\n.media-carousel__placeholder[_ngcontent-%COMP%] {\n  width: min(800px, 80vw);\n  aspect-ratio: 16/10;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);\n}\n.media-carousel__placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 120px;\n  width: 120px;\n  height: 120px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.media-carousel__placeholder-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n  padding: 6px 14px;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 999px;\n}\n.media-carousel__thumbs[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  padding: 0 20px;\n  overflow-x: auto;\n  scrollbar-width: thin;\n}\n.media-carousel__thumb[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 64px;\n  height: 64px;\n  border-radius: 8px;\n  background: transparent;\n  border: 2px solid transparent;\n  cursor: pointer;\n  padding: 0;\n  transition: border-color 0.15s, transform 0.15s;\n}\n.media-carousel__thumb--active[_ngcontent-%COMP%] {\n  border-color: var(--schecon-orange, #ff9800);\n  transform: scale(1.06);\n}\n.media-carousel__thumb[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n}\n.media-carousel__thumb-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.media-carousel__thumb-inner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.icon-btn--light[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background: rgba(255, 255, 255, 0.12) !important;\n}\n.icon-btn--light[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22) !important;\n}\n.icon-btn--light[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n@keyframes _ngcontent-%COMP%_mediaCarouselIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #ff9800;\n  color: #fff;\n  font-size: 36px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin-bottom: 4px;\n}\n.profile-avatar__status[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n  bottom: 4px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #4caf50;\n  border: 3px solid #fff;\n}\n.profile-name[_ngcontent-%COMP%] {\n  margin: 8px 0 4px;\n  font-size: 18px;\n  font-weight: 700;\n  color: #81766e;\n}\n.profile-role[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  background: #fff3e0;\n  color: #ff9800;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 10px;\n}\n.profile-info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n}\n.profile-info__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border-radius: 6px;\n  font-size: 13px;\n  color: #81766e;\n}\n.profile-info__row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #757575;\n}\n.profile-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n  width: 100%;\n}\n.profile-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.confirm-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px 0;\n}\n.confirm-msg__icon[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n  width: 48px !important;\n  height: 48px !important;\n  color: #e53935;\n  margin-bottom: 8px;\n}\n.confirm-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 14px;\n  color: #81766e;\n}\n.confirm-msg__sub[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: #757575 !important;\n}\n.chip-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: #f5f5f5;\n  border: 1px solid #e0e0e0;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #81766e;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n}\n.chip--active[_ngcontent-%COMP%] {\n  background: #ff9800 !important;\n  color: #fff !important;\n  border-color: #ff9800 !important;\n}\n.ai-result[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ai-result[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #757575;\n}\n.ai-result__box[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: #fff3e0;\n  border: 1px solid #ffe0b2;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #81766e;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.ai-context[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding: 10px 14px;\n  background: #f5f7fa;\n  border-radius: 8px;\n  border-left: 3px solid #ff9800;\n}\n.ai-context__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #757575;\n  margin-bottom: 4px;\n}\n.ai-context__label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.ai-context__text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #81766e;\n  white-space: pre-wrap;\n  word-break: break-word;\n  max-height: 80px;\n  overflow-y: auto;\n}\n.ai-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 20px;\n  color: #757575;\n  font-size: 13px;\n}\n.ai-loading__spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e0e0e0;\n  border-top-color: #ff9800;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ai-suggestions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ai-suggestions[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #757575;\n  margin-bottom: 2px;\n}\n.ai-suggestion-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e0e4e9;\n  border-radius: 10px;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    box-shadow 0.15s,\n    background 0.15s;\n}\n.ai-suggestion-card[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.12);\n  background: #fffaf4;\n}\n.ai-suggestion-card__num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #ff9800;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2px;\n}\n.ai-suggestion-card__text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #81766e;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.ai-suggestion-card__arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #bbb;\n  font-size: 18px;\n  margin-top: 2px;\n  transition: color 0.15s;\n}\n.ai-suggestion-card[_ngcontent-%COMP%]:hover   .ai-suggestion-card__arrow[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.drop-zone[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n  border: 2px dashed #e0e0e0;\n  border-radius: 10px;\n  text-align: center;\n  color: #757575;\n}\n.drop-zone[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #bdbdbd;\n}\n.drop-zone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 12px;\n  font-size: 13px;\n}\n.attach-quick[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.attach-quick__btn[_ngcontent-%COMP%] {\n  padding: 16px 8px;\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #81766e;\n  transition: all 0.15s;\n}\n.attach-quick__btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #ff9800;\n}\n.attach-quick__btn[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n}\n.folder-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.folder-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.folder-item[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.folder-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #ff9800;\n}\n.folder-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  color: #81766e;\n}\n.folder-count[_ngcontent-%COMP%] {\n  flex: none !important;\n  font-size: 12px !important;\n  color: #757575 !important;\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.msg-menu-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  background: transparent;\n}\n@media (max-width: 768px) {\n  .msg-menu-backdrop[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.3);\n  }\n}\n.msg-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 10001;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n  padding: 4px;\n  min-width: 180px;\n}\n.msg-menu__item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  background: transparent;\n  border: none;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #81766e;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-align: left;\n  transition: background 0.15s;\n}\n.msg-menu__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #757575;\n}\n.msg-menu__item[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.msg-menu__item--danger[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.msg-menu__item--danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.msg-menu__divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e0e0e0;\n  margin: 4px 0;\n}\n.emoji-picker[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 999px;\n  padding: 8px 12px;\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18), 0 2px 6px rgba(0, 0, 0, 0.08);\n  max-width: calc(100vw - 24px);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.emoji-picker__title[_ngcontent-%COMP%] {\n  display: none;\n}\n.emoji-picker__grid[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.emoji-picker__grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.emoji-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  font-size: 26px;\n  cursor: pointer;\n  transition: transform 0.12s ease-out, background 0.15s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.emoji-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f2f5;\n  transform: scale(1.15);\n}\n.emoji-btn[_ngcontent-%COMP%]:active {\n  transform: scale(1.25);\n}\n.msg-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.compose-tray[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px 10px;\n  margin-bottom: 6px;\n  background: #f5f7fa;\n  border: 1px solid #e0e4e9;\n  border-radius: 14px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n  scrollbar-width: thin;\n  scrollbar-color: #cfd4da transparent;\n}\n.compose-tray[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.compose-tray[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cfd4da;\n  border-radius: 3px;\n}\n.compose-tray[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.compose-tray__item[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 auto;\n  width: 72px;\n  height: 72px;\n  border-radius: 10px;\n  overflow: visible;\n}\n.compose-tray__thumb[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 10px;\n  object-fit: cover;\n  display: block;\n  background: #fff;\n  border: 1px solid #e0e4e9;\n}\n.compose-tray__thumb--placeholder[_ngcontent-%COMP%], .compose-tray__thumb--video[_ngcontent-%COMP%], .compose-tray__thumb--file[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #5f6368;\n  background: #fff;\n  padding: 6px;\n}\n.compose-tray__thumb--placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .compose-tray__thumb--video[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .compose-tray__thumb--file[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.compose-tray__thumb--video[_ngcontent-%COMP%] {\n  background: #202124;\n  color: #fff;\n}\n.compose-tray__thumb--file[_ngcontent-%COMP%]   .compose-tray__filename[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 4px;\n  max-width: 60px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.compose-tray__remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 22px;\n  height: 22px;\n  min-width: 22px;\n  border-radius: 50%;\n  background: #202124;\n  color: #fff;\n  border: 2px solid #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n  transition: transform 0.12s, background 0.12s;\n}\n.compose-tray__remove[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.compose-tray__remove[_ngcontent-%COMP%]:hover {\n  background: #e53935;\n  transform: scale(1.1);\n}\n.compose-tray__add[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 72px;\n  height: 72px;\n  border-radius: 10px;\n  border: 2px dashed #cfd4da;\n  background: transparent;\n  color: #5f6368;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    color 0.15s,\n    background 0.15s;\n}\n.compose-tray__add[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.compose-tray__add[_ngcontent-%COMP%]:hover {\n  border-color: var(--schecon-orange, #ff9800);\n  color: var(--schecon-orange, #ff9800);\n  background: #fff8f0;\n}\n.popup-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: transparent;\n  z-index: 1199;\n  cursor: default;\n  pointer-events: auto;\n}\n.popup[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);\n  padding: 6px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1200;\n  pointer-events: auto;\n}\n.popup__title[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #757575;\n  text-transform: uppercase;\n}\n.popup__item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  color: #81766e;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-align: left;\n  transition: background 0.15s;\n}\n.popup__item[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.popup__item--active[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ef6c00;\n}\n.popup__empty[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 12px;\n  color: #757575;\n  text-align: center;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  position: relative;\n}\n.msg-bubble__pin[_ngcontent-%COMP%], .msg-bubble__bookmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n  color: #ff9800;\n  background: #fff;\n  border-radius: 50%;\n  padding: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.msg-bubble__bookmark[_ngcontent-%COMP%] {\n  right: 14px;\n}\n.msg-bubble__edited[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 4px;\n  font-size: 10px;\n  color: #757575;\n  font-style: italic;\n}\n.msg-bubble--editing[_ngcontent-%COMP%] {\n  min-width: 280px;\n  padding: 8px !important;\n}\n.msg-edit-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: inherit;\n  resize: vertical;\n  outline: none;\n  box-sizing: border-box;\n}\n.msg-edit-input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.msg-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  margin-top: 6px;\n}\n.msg-reply-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #757575;\n  padding: 2px 8px;\n  border-left: 2px solid #ff9800;\n  margin-bottom: 2px;\n}\n.msg-reply-preview[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.msg-reply-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  max-width: 100%;\n}\n.msg-row--me[_ngcontent-%COMP%]   .msg-reply-stack[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.msg-row[_ngcontent-%COMP%]:not(.msg-row--me)   .msg-reply-stack[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.msg-reply-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #757575;\n  margin-bottom: 4px;\n}\n.msg-reply-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.msg-reply-quote[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 14px;\n  padding: 8px 12px;\n  font-size: 12.5px;\n  color: #757575;\n  margin-bottom: 4px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-break: break-word;\n  max-width: 100%;\n}\n.msg-forward-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #757575;\n  padding: 2px 8px;\n  border-left: 2px solid #29b6f6;\n  margin-bottom: 2px;\n}\n.msg-forward-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #29b6f6;\n}\n.msg-bubble--forwarded[_ngcontent-%COMP%] {\n  border-left: 3px solid #29b6f6;\n}\n.msg-bubble--quoted[_ngcontent-%COMP%]   .msg-bubble__text[_ngcontent-%COMP%] {\n  padding-left: 2px;\n}\n.msg-bubble--stamp[_ngcontent-%COMP%] {\n  background: transparent !important;\n  box-shadow: none !important;\n  padding: 4px 0 !important;\n}\n.msg-bubble--stamp[_ngcontent-%COMP%]   .msg-bubble__text[_ngcontent-%COMP%] {\n  font-size: 56px;\n  line-height: 1.1;\n  background: transparent;\n}\n.msg-attachments[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 6px;\n}\n.msg-attachment[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 6px;\n}\n.msg-attachment[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #ff9800;\n}\n.msg-attachment__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.msg-attachment__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #81766e;\n}\n.msg-attachment__size[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #757575;\n}\n.msg-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n  margin-top: 6px;\n}\n.msg-tag[_ngcontent-%COMP%] {\n  --tag-color: #ff9800;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px 3px 8px;\n  background: color-mix(in srgb, var(--tag-color) 10%, #fff);\n  color: var(--tag-color);\n  font-size: 11px;\n  font-weight: 600;\n  border: 1px solid color-mix(in srgb, var(--tag-color) 22%, transparent);\n  border-radius: 11px;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    transform 0.1s;\n  font-family: inherit;\n}\n.msg-tag__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--tag-color);\n  flex-shrink: 0;\n}\n.msg-tag__label[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.msg-tag[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--tag-color) 18%, #fff);\n  border-color: color-mix(in srgb, var(--tag-color) 40%, transparent);\n}\n.msg-tag[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.msg-tag--active[_ngcontent-%COMP%] {\n  background: var(--tag-color);\n  color: #fff;\n  border-color: var(--tag-color);\n}\n.msg-tag--active[_ngcontent-%COMP%]   .msg-tag__dot[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.msg-tag--active[_ngcontent-%COMP%]:hover {\n  background: var(--tag-color);\n  filter: brightness(1.05);\n}\n.tag-filter-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  background:\n    linear-gradient(\n      90deg,\n      color-mix(in srgb, #ff9800 8%, #fff),\n      #fff);\n  border-bottom: 1px solid color-mix(in srgb, #ff9800 18%, #eee);\n  font-size: 13px;\n  color: #81766e;\n  animation: _ngcontent-%COMP%_tagBannerIn 0.2s ease-out;\n}\n.tag-filter-banner__icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tag-filter-banner__text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.tag-filter-banner__text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.tag-filter-banner__text[_ngcontent-%COMP%]   .tag-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n}\n.tag-filter-banner__count[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  padding: 2px 8px;\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 10px;\n  font-size: 11px;\n  color: #757575;\n  font-weight: 600;\n}\n.tag-filter-banner__clear[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  min-width: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  color: #757575;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.tag-filter-banner__clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tag-filter-banner__clear[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, #ff9800 12%, #fff);\n  color: #ff9800;\n}\n@keyframes _ngcontent-%COMP%_tagBannerIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.msg-reactions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -10px;\n  right: 8px;\n  display: inline-flex;\n  gap: 2px;\n  flex-wrap: nowrap;\n  z-index: 2;\n  pointer-events: auto;\n  margin-top: 0;\n}\n.msg-bubble--me[_ngcontent-%COMP%]   .msg-reactions[_ngcontent-%COMP%] {\n  right: auto;\n  left: 8px;\n}\n.msg-reaction[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 7px;\n  background: #ffffff;\n  border: 1px solid #e4e6eb;\n  border-radius: 999px;\n  font-size: 12px;\n  line-height: 1;\n  min-height: 22px;\n  cursor: pointer;\n  transition:\n    transform 0.12s ease,\n    background 0.12s ease,\n    border-color 0.12s ease;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);\n}\n.msg-reaction[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  transform: translateY(-1px);\n}\n.msg-reaction--mine[_ngcontent-%COMP%] {\n  background: #fff3e0 !important;\n  border-color: #ff9800 !important;\n}\n.msg-reaction__emoji[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1;\n}\n.msg-reaction__count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #81766e;\n}\n.chat-room__reply-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 16px 10px 16px;\n  background: #ffffff;\n  border-top: 1px solid #e5ddd4;\n  border-bottom: 1px solid #f0eae3;\n}\n.chat-room__reply-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(0, 0, 0, 0.05);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #757575;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  padding: 0;\n}\n.chat-room__reply-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n  color: #81766e;\n}\n.chat-room__reply-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n}\n.chat-room__reply-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.chat-room__reply-content[_ngcontent-%COMP%]   .chat-room__reply-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #81766e;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.chat-room__reply-content[_ngcontent-%COMP%]   .chat-room__reply-text[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #757575;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.3;\n}\n.chat-detail__quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 16px;\n  width: 100%;\n  margin: 12px 0 16px;\n}\n.chat-detail__quick-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 4px;\n  font-family: inherit;\n  color: #3c4043;\n}\n.chat-detail__quick-btn[_ngcontent-%COMP%]:hover   .chat-detail__quick-circle[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ff9800;\n}\n.chat-detail__quick-circle[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: #f1f3f4;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #3c4043;\n  transition: background 0.15s, color 0.15s;\n}\n.chat-detail__quick-circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.chat-detail__quick-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #5f6368;\n  white-space: nowrap;\n}\n.chat-detail__desc[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 12px;\n  color: #757575;\n  text-align: center;\n  line-height: 1.5;\n}\n.chat-detail__section[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.chat-detail__section-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #757575;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.chat-detail__members[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.chat-detail__count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11px;\n  font-weight: 600;\n  color: #757575;\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.chat-detail__avatar-cluster[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: -8px;\n  margin: 16px auto 8px;\n}\n.chat-detail__avatar-cluster[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%] {\n  margin-left: -8px;\n  border: 2px solid #fff;\n}\n.chat-detail__avatar-cluster[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.chat-detail__avatar-cluster[_ngcontent-%COMP%]   .mini-avatar--lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  font-size: 16px;\n}\n.chat-detail__title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.mini-avatar--lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  font-size: 16px;\n}\n.folder-view[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n}\n.folder-view__item[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.folder-view__head[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  font-weight: 600;\n  color: #81766e;\n  border-bottom: 1px solid #eee;\n}\n.folder-view__head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.folder-view__head[_ngcontent-%COMP%]:hover   .folder-view__actions[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(-50%) translateX(0);\n}\n.folder-view__icon--fav[_ngcontent-%COMP%] {\n  color: #ffa726 !important;\n}\n.folder-view__icon--blocked[_ngcontent-%COMP%] {\n  color: #ef5350 !important;\n}\n.folder-view__name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.folder-view__count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11px;\n  color: #757575;\n  background: #f0f0f0;\n  padding: 1px 8px;\n  border-radius: 10px;\n  min-width: 24px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.folder-view__actions[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 50%;\n  transform: translateY(-50%) translateX(4px);\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.16s ease, transform 0.18s ease;\n  padding: 2px 4px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(245, 245, 245, 0) 0%,\n      #f5f5f5 24%,\n      #f5f5f5 100%);\n  border-radius: 8px;\n}\n.folder-view__actions[_ngcontent-%COMP%]   .icon-btn--sm[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n.folder-view__actions[_ngcontent-%COMP%]   .icon-btn--sm[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.folder-view__actions[_ngcontent-%COMP%]   .icon-btn--sm[_ngcontent-%COMP%]:hover {\n  background: #fff;\n}\n.folder-view__rooms[_ngcontent-%COMP%] {\n  padding: 4px 0 4px 20px;\n}\n.folder-view__empty[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #757575;\n  padding: 6px 0;\n}\n.room-item--unread[_ngcontent-%COMP%] {\n}\n.room-item--unread[_ngcontent-%COMP%]   .room-item__name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #3e2c22;\n}\n.room-item--unread[_ngcontent-%COMP%]   .room-item__msg[_ngcontent-%COMP%] {\n  color: #3e2c22;\n  font-weight: 700;\n}\n.room-item--unread.room-item--compact[_ngcontent-%COMP%]   .room-item__name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #3e2c22;\n}\n.room-item__msg--single[_ngcontent-%COMP%] {\n  display: block !important;\n  white-space: nowrap !important;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  line-height: 1.3 !important;\n  max-height: 1.3em;\n}\n.room-item__unread-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ff9800;\n  margin-right: 6px;\n  flex-shrink: 0;\n  vertical-align: middle;\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.15);\n}\n.folder-view__head--unread[_ngcontent-%COMP%]   .folder-view__name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #81766e;\n}\n.room-item--mychat[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f1f8e9 0%,\n      #fff 100%);\n  border-left: 3px solid #7cb342;\n  margin-bottom: 4px;\n  min-height: 64px;\n}\n.room-item--mychat[_ngcontent-%COMP%]   .room-item__name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #558b2f;\n}\n.room-item--mychat[_ngcontent-%COMP%]   .room-item__msg--desc[_ngcontent-%COMP%] {\n  white-space: normal;\n  overflow: visible;\n  text-overflow: clip;\n  line-height: 1.4;\n  color: #689f38;\n  font-size: 11px;\n}\n.room-item--mychat[_ngcontent-%COMP%]   .room-item__avatar--img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  object-fit: cover;\n  background: #fff;\n  padding: 3px;\n  box-shadow: 0 1px 4px rgba(124, 179, 66, 0.25);\n}\n.room-item--compact[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  gap: 8px;\n  position: relative;\n}\n.room-item--compact[_ngcontent-%COMP%]   .room-item__avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  font-size: 12px;\n}\n.room-item--compact[_ngcontent-%COMP%]   .room-item__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #81766e;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.room-item--compact[_ngcontent-%COMP%]   .room-item__remove-folder[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  min-width: 22px;\n  opacity: 0;\n  transition: opacity 0.15s, background 0.15s;\n  color: #9aa0a6;\n}\n.room-item--compact[_ngcontent-%COMP%]   .room-item__remove-folder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.room-item--compact[_ngcontent-%COMP%]   .room-item__remove-folder[_ngcontent-%COMP%]:hover {\n  background: #ffebee;\n  color: #e53935;\n}\n.room-item--compact[_ngcontent-%COMP%]:hover   .room-item__remove-folder[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.room-item__type-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -4px;\n  right: -4px;\n  font-size: 12px !important;\n  width: 16px !important;\n  height: 16px !important;\n  background: #fff;\n  border-radius: 50%;\n  color: #26a69a;\n  padding: 1px;\n  border: 1px solid #fff;\n}\n.room-item__type-badge--my[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.room-item__star--active[_ngcontent-%COMP%] {\n  color: #ffa726 !important;\n}\n.chip-input[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.chip-input__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #757575;\n  margin-bottom: 4px;\n  padding-left: 6px;\n}\n.chip-input__box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 10px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  min-height: 48px;\n  align-items: center;\n  transition: border-color 0.15s;\n}\n.chip-input__box[_ngcontent-%COMP%]:focus-within {\n  border-color: #ff9800;\n}\n.chip-input__input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  background: transparent;\n}\n.chip-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 4px 4px 10px;\n  background: #fff3e0;\n  color: #e65100;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.chip-tag__remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  padding: 2px;\n  color: #e65100;\n}\n.chip-tag__remove[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.chip-tag__remove[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 50%;\n}\n.search-field[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.search-field__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #757575;\n  margin-bottom: 4px;\n  padding-left: 6px;\n}\n.search-field__box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n}\n.search-field__box[_ngcontent-%COMP%]:focus-within {\n  border-color: #ff9800;\n}\n.search-field__box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #757575;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.search-field__input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 13px;\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 4px;\n  font-size: 13px;\n  color: #81766e;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-row__icon[_ngcontent-%COMP%] {\n  color: #42a5f5;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 20px;\n  background: #bdbdbd;\n  border-radius: 10px;\n  transition: background 0.15s;\n  cursor: pointer;\n}\n.toggle__dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 16px;\n  height: 16px;\n  background: #fff;\n  border-radius: 50%;\n  transition: left 0.15s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.toggle--on[_ngcontent-%COMP%] {\n  background: #ff9800;\n}\n.toggle--on[_ngcontent-%COMP%]   .toggle__dot[_ngcontent-%COMP%] {\n  left: 20px;\n}\n.contact-list[_ngcontent-%COMP%] {\n  max-height: 260px;\n  overflow-y: auto;\n  border: 1px solid #f0f0f0;\n  border-radius: 8px;\n}\n.contact-list__empty[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #757575;\n  font-size: 12px;\n}\n.contact-list__more[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  color: #757575;\n  font-size: 11px;\n}\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  width: 100%;\n  border: none;\n  background: none;\n  cursor: pointer;\n  text-align: left;\n  border-bottom: 1px solid #f5f5f5;\n}\n.contact-item[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n}\n.contact-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.contact-item__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #81766e;\n  font-weight: 500;\n}\n.contact-item__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757575;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.modal__header--orange[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.modal__header--orange[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.modal__header--orange[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.icon-btn--light[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.icon-btn--sm[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n.icon-btn--sm[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.icon-btn--xs[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.icon-btn--xs[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.modal--newchat[_ngcontent-%COMP%] {\n  max-width: 720px;\n  width: 94vw;\n  max-height: 88vh;\n  max-height: 88dvh;\n}\n.modal--newchat[_ngcontent-%COMP%]   .modal__body[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  gap: 8px;\n  max-height: 82vh;\n  max-height: 82dvh;\n}\n.modal--newchat[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%], .modal--newchat[_ngcontent-%COMP%]   .chip-input[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.modal--newchat[_ngcontent-%COMP%]   .search-field__caption[_ngcontent-%COMP%], .modal--newchat[_ngcontent-%COMP%]   .chip-input__label[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 2px;\n}\n.modal--newchat[_ngcontent-%COMP%]   .chip-input__box[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  min-height: 44px;\n}\n@media (max-width: 767px) {\n  .modal-backdrop--newchat[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    align-items: stretch !important;\n    justify-content: stretch !important;\n  }\n  .modal--newchat[_ngcontent-%COMP%] {\n    max-width: 100vw !important;\n    width: 100vw !important;\n    max-height: 100dvh !important;\n    max-height: 100svh;\n    max-height: 100vh;\n    height: 100dvh;\n    height: 100svh;\n    height: 100vh;\n    border-radius: 0 !important;\n    display: flex !important;\n    flex-direction: column !important;\n    overflow: hidden !important;\n    box-sizing: border-box;\n  }\n  .modal--newchat[_ngcontent-%COMP%]   .modal__header[_ngcontent-%COMP%] {\n    padding: env(safe-area-inset-top, 0) 8px 8px 8px !important;\n    flex-shrink: 0;\n  }\n  .modal--newchat[_ngcontent-%COMP%]   .modal__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    flex: 1;\n    text-align: center;\n    font-size: 15px !important;\n  }\n  .modal--newchat[_ngcontent-%COMP%]   .modal__back-btn[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n  .modal--newchat[_ngcontent-%COMP%]   .modal__close-btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .modal--newchat[_ngcontent-%COMP%]   .modal__body[_ngcontent-%COMP%] {\n    padding: 12px !important;\n    gap: 8px !important;\n    flex: 1 1 auto !important;\n    min-height: 0 !important;\n    max-height: none !important;\n    overflow-y: auto !important;\n    -webkit-overflow-scrolling: touch;\n    padding-bottom: calc(16px + env(safe-area-inset-bottom, 0)) !important;\n  }\n  .modal--newchat[_ngcontent-%COMP%]   .modal__footer[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    padding: 10px 12px env(safe-area-inset-bottom, 10px) !important;\n    background: #fff;\n    border-top: 1px solid #e0e0e0;\n  }\n}\n@media (min-width: 768px) {\n  .modal--newchat[_ngcontent-%COMP%]   .modal__back-btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.member-list-full[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.member-list-full__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 4px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.member-list-full__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.member-list-full__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #81766e;\n  font-weight: 500;\n}\n.member-list-full__role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #ff9800;\n}\n.member-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 12px;\n}\n.member-actions--top[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #eceff1;\n  margin-bottom: 12px;\n}\n.member-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #f5f7fa;\n  border: 1px solid #e0e4e9;\n  border-radius: 10px;\n  margin-bottom: 12px;\n}\n.member-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9aa0a6;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.member-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  font-family: inherit;\n  min-width: 0;\n}\n.member-search[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n.member-search[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.popup__divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #eceff1;\n  margin: 6px 10px;\n}\n.popup__item--create[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-weight: 600;\n}\n.popup__item--create[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.new-tag-confirm__msg[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 14px;\n  color: #5f6368;\n}\n.new-tag-confirm__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.new-tag-confirm__chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 4px 12px;\n  background: #fff3e0;\n  color: #e65100;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.tag-create[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: #f5f7fa;\n  border: 1px solid #e0e4e9;\n  border-radius: 10px;\n  margin-top: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.tag-create__input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e0e4e9;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  font-family: inherit;\n  outline: none;\n}\n.tag-create__input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n  box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.12);\n}\n.tag-create__colors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tag-create__color[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  padding: 0;\n  transition: transform 0.15s;\n}\n.tag-create__color[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.tag-create__color--active[_ngcontent-%COMP%] {\n  border-color: #81766e;\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);\n}\n.tag-create__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.tag-create__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 13px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #d32f2f;\n  border: 1px solid #ffcdd2;\n}\n.btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ffebee;\n  border-color: #ef9a9a;\n}\n.folder-pick-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.folder-pick-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n  color: #81766e;\n  text-align: left;\n  transition: all 0.15s;\n}\n.folder-pick-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.folder-pick-item[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ffe0b2;\n}\n.folder-pick-item--active[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-color: #ff9800;\n  color: #e65100;\n  font-weight: 600;\n}\n.folder-pick-item--active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.folder-pick-item--check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #ff9800;\n  flex-shrink: 0;\n  cursor: pointer;\n  margin: 0;\n}\n.folder-pick-item--check[_ngcontent-%COMP%]   .folder-pick-item__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.folder-pick-item--check[_ngcontent-%COMP%]   .folder-pick-item__name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.folder-pick-item--check[_ngcontent-%COMP%]   .folder-pick-item__check[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.folder-pick-list--checkbox[_ngcontent-%COMP%] {\n  max-height: 50vh;\n  max-height: 50dvh;\n  overflow-y: auto;\n  padding: 2px;\n}\n.modal--folder-add[_ngcontent-%COMP%] {\n  max-width: 560px !important;\n  width: 92vw !important;\n  position: relative;\n  z-index: 1010;\n  pointer-events: auto !important;\n}\n.modal--folder-add[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.modal--folder-add[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], .modal--folder-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .modal--folder-add[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .modal--folder-add[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .modal--folder-add[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  touch-action: manipulation;\n}\n@media (max-width: 767px) {\n  .modal--folder-add[_ngcontent-%COMP%] {\n    max-width: calc(100vw - 16px) !important;\n    width: calc(100vw - 16px) !important;\n    max-height: 90dvh !important;\n    max-height: 90svh;\n    max-height: 90vh;\n    display: flex !important;\n    flex-direction: column !important;\n    overflow: hidden !important;\n  }\n  .modal--folder-add[_ngcontent-%COMP%]   .modal__body[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important;\n    min-height: 0 !important;\n    overflow-y: auto !important;\n    -webkit-overflow-scrolling: touch;\n  }\n  .modal--folder-add[_ngcontent-%COMP%]   .modal__footer[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important;\n    padding-bottom: calc(10px + env(safe-area-inset-bottom, 0)) !important;\n    background: #fff;\n    border-top: 1px solid #e0e0e0;\n  }\n}\n.folder-pick-list--accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.folder-pick-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 0;\n}\n.folder-pick-row__toggle[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #81766e;\n}\n.folder-pick-row__toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.folder-pick-row__toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.folder-pick-row__spacer[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 28px;\n  flex-shrink: 0;\n}\n.folder-pick-row[_ngcontent-%COMP%]   .folder-pick-item[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n}\n.folder-pick-item--nested[_ngcontent-%COMP%] {\n  position: relative;\n  border-left: 2px solid #ffd79a;\n  border-radius: 0 8px 8px 0;\n}\n.folder-pick-item__tree[_ngcontent-%COMP%] {\n  color: #ed9630;\n  font-size: 14px;\n  line-height: 1;\n  -webkit-user-select: none;\n  user-select: none;\n  margin-right: 2px;\n  flex-shrink: 0;\n}\n.folder-pick-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #757575;\n  margin: 0 0 8px;\n}\n.folder-pick-create[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px dashed #e0e0e0;\n}\n.folder-pick-create__toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: transparent;\n  border: 1px dashed #ff9800;\n  border-radius: 8px;\n  color: #e65100;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 8px 14px;\n  cursor: pointer;\n  transition: background 0.15s;\n  width: 100%;\n  justify-content: center;\n}\n.folder-pick-create__toggle[_ngcontent-%COMP%]:hover {\n  background: #fff8e1;\n}\n.folder-pick-create__toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.folder-pick-create__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.folder-pick-create__form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.folder-pick-create__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 4px;\n}\n.url-preview--rich[_ngcontent-%COMP%] {\n  --accent: #5865f2;\n  display: flex;\n  margin-top: 8px;\n  background: #f2f3f5;\n  border-radius: 6px;\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  max-width: 432px;\n  transition: background 0.15s;\n}\n.url-preview--rich[_ngcontent-%COMP%]:hover {\n  background: #e9ebef;\n}\n.url-preview--rich[_ngcontent-%COMP%]   .url-preview__accent[_ngcontent-%COMP%] {\n  width: 4px;\n  background: var(--accent);\n  flex-shrink: 0;\n}\n.url-preview--rich[_ngcontent-%COMP%]   .url-preview__content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 16px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.url-preview--rich[_ngcontent-%COMP%]   .url-preview__site-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #4f5660;\n  font-size: 12px;\n}\n.url-preview--rich[_ngcontent-%COMP%]   .url-preview__favicon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #72767d;\n}\n.url-preview--rich[_ngcontent-%COMP%]   .url-preview__site[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.url-preview--rich[_ngcontent-%COMP%]   .url-preview__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0068e0;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.url-preview--rich[_ngcontent-%COMP%]   .url-preview__desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2e3338;\n  line-height: 1.4;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n.url-preview--rich[_ngcontent-%COMP%]   .url-preview__thumb[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  width: 100%;\n  max-width: 400px;\n  aspect-ratio: 2/1;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.url-preview--rich[_ngcontent-%COMP%]   .url-preview__thumb[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b0b3b8;\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.url-preview[_ngcontent-%COMP%]:not(.url-preview--rich) {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n  padding: 10px;\n  background: #fafafa;\n  border: 1px solid #eee;\n  border-radius: 10px;\n  text-decoration: none;\n  color: inherit;\n  max-width: 360px;\n}\n.url-preview[_ngcontent-%COMP%]:not(.url-preview--rich)   .url-preview__img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.url-preview[_ngcontent-%COMP%]:not(.url-preview--rich)   .url-preview__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.url-preview[_ngcontent-%COMP%]:not(.url-preview--rich)   .url-preview__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n}\n.url-preview[_ngcontent-%COMP%]:not(.url-preview--rich)   .url-preview__site[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757575;\n}\n.chat-room__pinned-url[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 0;\n  font-size: 12px;\n  color: #1976d2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.chat-room__pinned-url[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.chat-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: max(12px, env(safe-area-inset-top, 0px) + 12px);\n  bottom: auto;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #ff9800;\n  color: rgba(255, 255, 255, 0.95);\n  padding: 10px 18px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  font-weight: 500;\n  line-height: 1.3;\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1);\n  z-index: 10000;\n  animation: _ngcontent-%COMP%_toastIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  max-width: calc(100vw - 32px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chat-toast[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.95);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n@media (max-width: 767px) {\n  .chat-toast[_ngcontent-%COMP%] {\n    top: max(12px, env(safe-area-inset-top, 0px) + 12px);\n    max-width: calc(100vw - 24px);\n    padding: 9px 16px;\n    font-size: 13px;\n  }\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -20px);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, 0);\n  }\n}\n  .msg-bubble__text mark.hl {\n  background: #fff59d;\n  color: inherit;\n  padding: 0 1px;\n  border-radius: 2px;\n}\n  .msg-bubble__text a.msg-link {\n  color: #1a73e8;\n  text-decoration: none;\n  word-break: break-all;\n}\n  .msg-bubble__text a.msg-link:hover {\n  text-decoration: underline;\n}\n  .msg-bubble--me .msg-bubble__text a.msg-link {\n  color: #90caf9;\n}\n  .msg-bubble--me .msg-bubble__text a.msg-link:hover {\n  color: #bbdefb;\n}\n  .msg-bubble__text .msg-mention {\n  color: #1a73e8;\n  font-weight: 600;\n  background: rgba(26, 115, 232, 0.08);\n  padding: 1px 4px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n  .msg-bubble__text .msg-mention:hover {\n  background: rgba(26, 115, 232, 0.18);\n}\n  .msg-bubble--me .msg-bubble__text .msg-mention {\n  color: #bbdefb;\n  background: rgba(255, 255, 255, 0.12);\n}\n  .msg-bubble--me .msg-bubble__text .msg-mention:hover {\n  background: rgba(255, 255, 255, 0.22);\n}\n.profile-inline__row--email[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.profile-inline__email-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-inline__copy-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #e0e0e0;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #5f6368;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n  flex-shrink: 0;\n}\n.profile-inline__copy-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.profile-inline__copy-btn[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ff9800;\n  color: #e65100;\n}\n.input-tag-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: #fff8e1;\n  border-top: 1px solid #ffe0b2;\n  border-bottom: 1px solid #ffe0b2;\n  font-size: 12px;\n  flex-wrap: wrap;\n}\n.input-tag-preview__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #ff9800;\n  flex-shrink: 0;\n}\n.input-tag-preview__label[_ngcontent-%COMP%] {\n  color: #81766e;\n  flex-shrink: 0;\n}\n.input-tag-preview__chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  background: #ff9800;\n  color: #fff;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 12px;\n  animation: _ngcontent-%COMP%_tagChipPop 0.18s ease-out;\n}\n@keyframes _ngcontent-%COMP%_tagChipPop {\n  from {\n    transform: scale(0.85);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.modal--forward[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 560px;\n}\n.modal__body--forward[_ngcontent-%COMP%] {\n  max-height: 65vh;\n  max-height: 65dvh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 16px 20px;\n}\n.forward-preview[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  border-left: 3px solid #ff9800;\n  border-radius: 6px;\n  padding: 10px 12px;\n  margin-bottom: 12px;\n}\n.forward-preview__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #81766e;\n  font-weight: 500;\n  margin-bottom: 4px;\n}\n.forward-preview__body[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #3c4043;\n}\n.forward-preview__sender[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #e65100;\n  font-size: 12px;\n  margin-bottom: 2px;\n}\n.forward-preview__text[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-break: break-word;\n  max-height: 96px;\n  overflow-y: auto;\n}\n.forward-preview__attach[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #81766e;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.forward-preview__attach[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.forward-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  background: #f5f5f5;\n  border-radius: 20px;\n  margin-bottom: 8px;\n}\n.forward-search[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #9e9e9e;\n  flex-shrink: 0;\n}\n.forward-search__input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  font-family: inherit;\n  color: #3c4043;\n  min-width: 0;\n  padding: 4px 0;\n}\n.forward-search__input[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.forward-search__clear[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  display: inline-flex;\n  align-items: center;\n  color: #9e9e9e;\n  border-radius: 50%;\n}\n.forward-search__clear[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n  color: #5f6368;\n}\n.forward-search__clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.forward-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5f6368;\n  margin: 0 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.forward-hint__count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #e65100;\n  background: #fff3e0;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n}\n.forward-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  margin: 0 -8px;\n  padding: 4px 8px;\n}\n.forward-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.forward-list__item[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.forward-list__item--checked[_ngcontent-%COMP%] {\n  background: #fff3e0;\n}\n.forward-list__item--checked[_ngcontent-%COMP%]:hover {\n  background: #ffe0b2;\n}\n.forward-list__checkbox[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #ff9800;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.forward-list__avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.forward-list__avatar--img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.forward-list__text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.forward-list__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3c4043;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.forward-list__type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n}\n.forward-list__type[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.forward-list__status[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.forward-list__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #9e9e9e;\n}\n.forward-list__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  opacity: 0.4;\n  margin-bottom: 8px;\n}\n.forward-list__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .modal--forward[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0;\n    height: 100dvh;\n    max-height: 100dvh;\n    border-radius: 0;\n  }\n  .modal__body--forward[_ngcontent-%COMP%] {\n    max-height: calc(100dvh - 120px);\n  }\n}\n.notif-panel__mute-btn[_ngcontent-%COMP%] {\n  position: relative;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s,\n    transform 0.15s;\n}\n.notif-panel__mute-btn--active[_ngcontent-%COMP%] {\n  background: #fff3e0 !important;\n  border-color: #ff9800 !important;\n  color: #ef6c00 !important;\n  font-weight: 700 !important;\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.2);\n}\n.notif-panel__mute-btn[_ngcontent-%COMP%]   .notif-panel__mute-btn-check[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #ff9800;\n  margin-right: 2px;\n  vertical-align: middle;\n}\n  .msg-bubble__text .msg-hashtag {\n  color: #ff9800;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgba(255, 152, 0, 0.08);\n  padding: 1px 6px;\n  border-radius: 10px;\n  transition: background 0.15s, color 0.15s;\n}\n  .msg-bubble__text .msg-hashtag:hover {\n  background: rgba(255, 152, 0, 0.22);\n  color: #e65100;\n  text-decoration: none;\n}\n  .msg-bubble--me .msg-bubble__text .msg-hashtag {\n  color: #ffd54f;\n  background: rgba(255, 255, 255, 0.16);\n}\n  .msg-bubble--me .msg-bubble__text .msg-hashtag:hover {\n  background: rgba(255, 255, 255, 0.28);\n  color: #fff3e0;\n}\n  .msg-bubble__text .msg-hashtag--active {\n  background: #ff9800;\n  color: #fff !important;\n}\n.chat-room__back-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.chat-room__msg-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e0e0e0;\n  background: #fffef7;\n}\n.chat-room__msg-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #757575;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.chat-room__msg-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  color: #81766e;\n}\n.chat-room__msg-search[_ngcontent-%COMP%]   .chat-room__msg-search-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ff9800;\n  font-weight: 600;\n  background: #fff3e0;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.chat-room__task-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  background: #fff3e0;\n  border-bottom: 1px solid #ffe0b2;\n  color: #ef6c00;\n  font-size: 13px;\n}\n.chat-room__task-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #ef6c00;\n}\n.chat-room__task-banner[_ngcontent-%COMP%]   .chat-room__task-banner-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n}\n.chat-room__task-banner[_ngcontent-%COMP%]   .chat-room__task-banner-link[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #ef6c00;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n  font-size: 12px;\n}\n.chat-room__task-banner[_ngcontent-%COMP%]   .chat-room__task-banner-link[_ngcontent-%COMP%]:hover {\n  color: #e65100;\n}\n.msg-bubble__task[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: 24px;\n  background: #fff;\n  border-radius: 50%;\n  padding: 2px;\n  color: #ff9800;\n  font-size: 14px;\n  width: 18px;\n  height: 18px;\n}\n.msg-bubble__task--done[_ngcontent-%COMP%] {\n  color: #66bb6a;\n}\n.msg-bubble__task-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 6px;\n  padding: 4px 10px;\n  background: #fff3e0;\n  border: 1px solid #ffe0b2;\n  border-radius: 12px;\n  font-size: 11px;\n  color: #ef6c00;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.msg-bubble__task-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.msg-bubble__task-chip[_ngcontent-%COMP%]   .msg-bubble__task-chip-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: #fff;\n}\n.msg-bubble__task-chip[_ngcontent-%COMP%]:hover {\n  background: #ffe0b2;\n}\n.msg-bubble__task-chip--soon[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  border-color: #ffe082;\n  color: #f57f17;\n}\n.msg-bubble__task-chip--overdue[_ngcontent-%COMP%] {\n  background: #ffebee;\n  border-color: #ffcdd2;\n  color: #c62828;\n}\n.folder-view__head[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 12px;\n  min-height: 44px;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);\n}\n.folder-view__head[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.folder-view__head[_ngcontent-%COMP%]:active {\n  background: #eeeeee;\n}\n.folder-view__chevron[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #757575;\n  transition: transform 0.18s ease;\n  flex-shrink: 0;\n}\n.folder-view__body[_ngcontent-%COMP%] {\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_folderExpand 0.22s cubic-bezier(0.22, 1, 0.36, 1);\n}\n@keyframes _ngcontent-%COMP%_folderExpand {\n  from {\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    max-height: 2000px;\n    transform: translateY(0);\n  }\n}\n.folder-view__item--nested[_ngcontent-%COMP%] {\n  border-left: 2px solid #ffe0b2;\n  margin-left: 4px;\n  position: relative;\n}\n.folder-view__item--nested[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -2px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffb74d,\n      #ffe0b2);\n  opacity: 0.6;\n  pointer-events: none;\n}\n.folder-view__item--nested[_ngcontent-%COMP%]   .folder-view__head[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.folder-view__item--nested[_ngcontent-%COMP%]   .folder-view__head[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n}\n.modal--folder-bulk[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 560px;\n}\n.modal__body--folder-bulk[_ngcontent-%COMP%] {\n  max-height: 65vh;\n  max-height: 65dvh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 16px 20px;\n}\n.folder-bulk__hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5f6368;\n  margin: 0 0 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.folder-bulk__count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #e65100;\n  background: #fff3e0;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.folder-bulk__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  background: #f5f5f5;\n  border-radius: 20px;\n  margin-bottom: 12px;\n}\n.folder-bulk__search[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #9e9e9e;\n  flex-shrink: 0;\n}\n.folder-bulk__search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  font-family: inherit;\n  color: #3c4043;\n  min-width: 0;\n  padding: 4px 0;\n}\n.folder-bulk__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.folder-bulk__search-clear[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  display: inline-flex;\n  align-items: center;\n  color: #9e9e9e;\n  border-radius: 50%;\n}\n.folder-bulk__search-clear[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n  color: #5f6368;\n}\n.folder-bulk__search-clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.folder-bulk__bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px dashed #eeeeee;\n  flex-wrap: wrap;\n}\n.folder-bulk__bulk-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  gap: 4px;\n}\n.folder-bulk__bulk-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.folder-bulk__list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  margin: 0 -8px;\n  padding: 4px 8px;\n}\n.folder-bulk__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.folder-bulk__item[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.folder-bulk__item--checked[_ngcontent-%COMP%] {\n  background: #fff3e0;\n}\n.folder-bulk__item--checked[_ngcontent-%COMP%]:hover {\n  background: #ffe0b2;\n}\n.folder-bulk__checkbox[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #ff9800;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.folder-bulk__avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.folder-bulk__avatar--img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.folder-bulk__text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.folder-bulk__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3c4043;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.folder-bulk__type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n}\n.folder-bulk__type[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.folder-bulk__status-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.folder-bulk__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #9e9e9e;\n}\n.folder-bulk__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  opacity: 0.4;\n  margin-bottom: 8px;\n}\n.folder-bulk__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .modal--folder-bulk[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0;\n    height: 100dvh;\n    max-height: 100dvh;\n    border-radius: 0;\n  }\n  .modal__body--folder-bulk[_ngcontent-%COMP%] {\n    max-height: calc(100dvh - 120px);\n  }\n  .folder-bulk__bulk-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .folder-bulk__bulk-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    width: 100%;\n  }\n  .folder-bulk__item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .folder-bulk__avatar[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 13px;\n  }\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #616161;\n  margin: 12px 0 4px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.form-col[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n  font-size: 13px;\n  color: #81766e;\n  cursor: pointer;\n}\n.form-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.task-form__source[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px;\n  background: #f5f5f5;\n  border-radius: 6px;\n  font-size: 12px;\n  color: #616161;\n  margin-bottom: 10px;\n}\n.task-form__source[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.task-form__source[_ngcontent-%COMP%]   .task-form__source-text[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.task-form__notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 12px;\n  background: #fff3e0;\n  border: 1px solid #ffe0b2;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #e65100;\n  margin-bottom: 12px;\n}\n.task-form__notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: 2px;\n  color: #ff9800;\n}\n.task-form__notice[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #bf360c;\n}\n.task-form__presets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin: 8px 0 14px;\n}\n.task-form__preset[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 999px;\n  font-size: 12px;\n  color: #555;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.task-form__preset[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ffb74d;\n  color: #e65100;\n}\n.modal--task-create[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.3;\n  min-height: 44px;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  appearance: none;\n  background: #fff;\n}\n.modal--task-create[_ngcontent-%COMP%]   input[type=date].form-input[_ngcontent-%COMP%], .modal--task-create[_ngcontent-%COMP%]   input[type=time].form-input[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding-right: 10px;\n}\n.modal--task-create[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.modal--task-create[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.modal--task-create[_ngcontent-%COMP%]   textarea.form-input[_ngcontent-%COMP%] {\n  min-height: 96px !important;\n  max-height: 240px;\n  resize: vertical;\n  font-size: 14px;\n}\n.modal--task-create[_ngcontent-%COMP%]   .task-form__presets[_ngcontent-%COMP%] {\n  margin: 6px 0 10px;\n}\n.modal--task-create[_ngcontent-%COMP%]   .task-form__preset[_ngcontent-%COMP%] {\n  min-height: 32px;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .modal-overlay[_ngcontent-%COMP%]:has(.modal--task-create) {\n    align-items: flex-start !important;\n    padding: 8px 8px env(safe-area-inset-bottom, 8px) !important;\n  }\n  .modal--task-create[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    max-height: 96dvh !important;\n    max-height: 96svh;\n    max-height: 96vh;\n    border-radius: 12px;\n    margin-top: env(safe-area-inset-top, 0);\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .modal__header[_ngcontent-%COMP%] {\n    padding: 8px 12px !important;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .modal__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .modal__body[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    gap: 8px;\n    padding-bottom: 16px;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .modal__footer[_ngcontent-%COMP%] {\n    padding: 8px 12px env(safe-area-inset-bottom, 8px);\n    flex-shrink: 0;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n    min-height: 40px !important;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   textarea.form-input[_ngcontent-%COMP%] {\n    min-height: 64px !important;\n    max-height: 120px !important;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .task-form__source[_ngcontent-%COMP%] {\n    max-height: 60px;\n    overflow-y: auto;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .task-form__notice[_ngcontent-%COMP%] {\n    font-size: 11.5px;\n    line-height: 1.3;\n  }\n  .modal--task-create[_ngcontent-%COMP%] {\n    width: 100vw !important;\n    max-width: 100vw !important;\n    max-height: 100dvh !important;\n    max-height: 100svh;\n    max-height: 100vh;\n    height: 100dvh;\n    height: 100svh;\n    height: 100vh;\n    border-radius: 0 !important;\n    margin: 0 !important;\n    display: flex;\n    flex-direction: column;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .modal__body[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important;\n    overflow-y: auto !important;\n    overscroll-behavior: contain !important;\n    -webkit-overflow-scrolling: touch !important;\n    max-height: none !important;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .modal__footer[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 0;\n    background: #fff;\n    z-index: 2;\n    border-top: 1px solid #e0e0e0;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .modal__header[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    background: #fff;\n    z-index: 2;\n  }\n  .modal--task-create[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], .modal--task-create[_ngcontent-%COMP%]   input.form-input[_ngcontent-%COMP%], .modal--task-create[_ngcontent-%COMP%]   textarea.form-input[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n    min-height: 44px !important;\n    box-sizing: border-box;\n  }\n  .modal-overlay[_ngcontent-%COMP%]:has(.modal--task-create) {\n    padding: 0 !important;\n    z-index: 1500 !important;\n  }\n}\nbody[_ngcontent-%COMP%]:has(.modal--task-create) {\n  overflow: hidden !important;\n}\n@media (max-width: 767px) {\n  .chat-room[_ngcontent-%COMP%] {\n    transition: opacity 0.08s ease-out;\n  }\n  .chat-room--transitioning[_ngcontent-%COMP%] {\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n.task-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.task-list__section-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #757575;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.task-list__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9e9e9e;\n  padding: 20px;\n  font-size: 13px;\n}\n.task-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  transition: all 0.15s;\n}\n.task-list-item[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n  border-color: #ff9800;\n}\n.task-list-item--done[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.task-list-item--done[_ngcontent-%COMP%]   .task-list-item__title[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.task-list-item--overdue[_ngcontent-%COMP%] {\n  border-color: #ffcdd2;\n  background: #ffebee;\n}\n.task-list-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.task-list-item[_ngcontent-%COMP%]   .task-list-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  cursor: pointer;\n}\n.task-list-item[_ngcontent-%COMP%]   .task-list-item__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #81766e;\n  margin-bottom: 4px;\n}\n.task-list-item[_ngcontent-%COMP%]   .task-list-item__due[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  color: #757575;\n}\n.task-list-item[_ngcontent-%COMP%]   .task-list-item__due[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.task-list-item[_ngcontent-%COMP%]   .task-list-item__badge[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c62828;\n  font-weight: 600;\n  padding: 1px 6px;\n  border-radius: 8px;\n}\n.task-list-item[_ngcontent-%COMP%]   .task-list-item__badge--soon[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.task-list-item[_ngcontent-%COMP%]   .task-list-item__remind[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #ff9800;\n}\n.modal__header-count[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  font-size: 12px;\n  color: #757575;\n  font-weight: 500;\n}\n.modal--attach[_ngcontent-%COMP%] {\n  max-width: 440px;\n}\n.add-member__selected[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.add-member__chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px 4px 10px;\n  background: #fff3e0;\n  border: 1px solid #ffcc80;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #e65100;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.add-member__chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #ef6c00;\n}\n.add-member__chip[_ngcontent-%COMP%]:hover {\n  background: #ffe0b2;\n}\n.add-member__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #f5f7fa;\n  border: 1px solid #e0e4e9;\n  border-radius: 10px;\n  margin-bottom: 12px;\n}\n.add-member__search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9aa0a6;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.add-member__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  font-family: inherit;\n}\n.add-member__list[_ngcontent-%COMP%] {\n  max-height: 360px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.add-member__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.add-member__item[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n}\n.add-member__item--selected[_ngcontent-%COMP%] {\n  background: #fff8e1;\n}\n.add-member__item--selected[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n}\n.add-member__item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #ff9800;\n}\n.add-member__item[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.add-member__check[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #ff9800;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.add-member__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.add-member__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #81766e;\n}\n.add-member__email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5f6368;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.add-member__empty[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  color: #9aa0a6;\n  font-size: 13px;\n}\n.icon-btn--active[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ef6c00;\n}\n@media (max-width: 768px) {\n  .chat-page[_ngcontent-%COMP%] {\n    position: relative;\n    height: 100%;\n  }\n  .chat-page[_ngcontent-%COMP%]   .chat-list[_ngcontent-%COMP%] {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    z-index: 2;\n    transition: transform 0.28s ease;\n    will-change: transform;\n  }\n  .chat-page[_ngcontent-%COMP%]   .chat-room[_ngcontent-%COMP%] {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    z-index: 3;\n    left: 100%;\n    transition: left 0.28s ease;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .chat-page[_ngcontent-%COMP%]   .chat-detail[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch !important;\n    position: fixed;\n    inset: 0;\n    width: 100% !important;\n    max-width: 100% !important;\n    z-index: 10000;\n    padding: 0 !important;\n    overflow-y: auto;\n    overscroll-behavior: contain;\n    background: #fff;\n    animation: none !important;\n    transform: none !important;\n  }\n  .chat-page[_ngcontent-%COMP%]   .chat-detail[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n  .chat-page[_ngcontent-%COMP%]   .chat-detail[_ngcontent-%COMP%]   .chat-detail__panel-header[_ngcontent-%COMP%] {\n    padding-left: 8px;\n    padding-right: 8px;\n    position: sticky;\n    top: 0;\n    background: #fff;\n    z-index: 10;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  }\n  .chat-page[_ngcontent-%COMP%]   .chat-detail[_ngcontent-%COMP%]   .chat-detail__panel--media[_ngcontent-%COMP%] {\n    padding: 0 8px 16px !important;\n  }\n  .chat-page[_ngcontent-%COMP%]   .chat-detail__backdrop[_ngcontent-%COMP%] {\n    display: block !important;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.4);\n    z-index: 9999;\n  }\n  .chat-page.chat-page--mobile-room[_ngcontent-%COMP%] {\n  }\n  .chat-page.chat-page--mobile-room[_ngcontent-%COMP%]   .chat-list[_ngcontent-%COMP%] {\n    transform: translateX(-30%);\n    pointer-events: none;\n  }\n  .chat-page.chat-page--mobile-room[_ngcontent-%COMP%]   .chat-room[_ngcontent-%COMP%] {\n    left: 0;\n    transform: none;\n  }\n  .chat-page.chat-page--mobile-list[_ngcontent-%COMP%]   .chat-list[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .chat-page.chat-page--mobile-list[_ngcontent-%COMP%]   .chat-room[_ngcontent-%COMP%] {\n    left: 100%;\n    transform: none;\n  }\n  .chat-room__back-btn[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n    margin-right: 4px;\n  }\n  .chat-room__header-actions[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n  .chat-room__header-actions[_ngcontent-%COMP%]   .chat-room__ha--pc[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .chat-room__header-actions[_ngcontent-%COMP%]   .chat-room__ha--mobile[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n  .msg-bubble[_ngcontent-%COMP%] {\n    max-width: 85%;\n  }\n  .chat-list__filters[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n    -webkit-overflow-scrolling: touch;\n    transition:\n      max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n      padding 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n      opacity 0.2s;\n    max-height: 60px;\n  }\n  .chat-list__search[_ngcontent-%COMP%] {\n    transition:\n      max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n      padding 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n      opacity 0.2s;\n    max-height: 80px;\n    padding: 8px 12px !important;\n  }\n  .chat-list.chat-list--scroll-collapsed[_ngcontent-%COMP%]   .chat-list__filters[_ngcontent-%COMP%], .chat-list.chat-list--scroll-collapsed[_ngcontent-%COMP%]   .chat-list__search[_ngcontent-%COMP%] {\n    max-height: 0 !important;\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n    opacity: 0 !important;\n    overflow: hidden !important;\n    border: 0 !important;\n    pointer-events: none !important;\n  }\n  .chat-page.chat-page--mobile-list[_ngcontent-%COMP%]   .chat-list[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n  }\n  .chat-page.chat-page--mobile-list[_ngcontent-%COMP%]   .chat-list__resume-banner[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .chat-page.chat-page--mobile-room[_ngcontent-%COMP%]   .chat-list[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .chat-page.chat-page--mobile-list[_ngcontent-%COMP%]   .chat-room[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .chat-page.chat-page--mobile-room[_ngcontent-%COMP%]   .chat-room[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n  }\n  .chat-list__rooms[_ngcontent-%COMP%] {\n    flex: 1 !important;\n    overflow-y: auto !important;\n    padding-bottom: calc(72px + env(safe-area-inset-bottom, 0)) !important;\n  }\n  .chat-list__new-btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .chat-list__filters[_ngcontent-%COMP%] {\n    position: sticky !important;\n    top: 0 !important;\n    z-index: 90 !important;\n    background: #fff !important;\n    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  }\n  .chat-list__search[_ngcontent-%COMP%] {\n    position: sticky !important;\n    top: 44px !important;\n    z-index: 89 !important;\n    background: #fff !important;\n    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);\n  }\n  .chat-list__search-count[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 14px;\n    bottom: 14px;\n    font-size: 12px;\n    color: #ff9800;\n    font-weight: 600;\n    pointer-events: none;\n  }\n  .chat-list__new-btn[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important;\n    display: flex !important;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    margin: 0 !important;\n    padding: 7px 12px !important;\n    background: #ff9800 !important;\n    color: #fff !important;\n    border: 0 !important;\n    border-radius: 0 !important;\n    font-size: 12px !important;\n    font-weight: 600 !important;\n    cursor: pointer;\n    z-index: 60 !important;\n    position: relative;\n    pointer-events: auto !important;\n    touch-action: manipulation;\n    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);\n    width: 100%;\n    min-height: 36px !important;\n    height: auto !important;\n  }\n  .chat-list__new-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    width: 14px !important;\n    height: 14px !important;\n  }\n  .chat-list__filters[_ngcontent-%COMP%]   .filter-btn--action[_ngcontent-%COMP%] {\n    pointer-events: auto !important;\n    touch-action: manipulation;\n    position: relative;\n    z-index: 60 !important;\n  }\n  .msg-image[_ngcontent-%COMP%] {\n    max-width: 220px;\n  }\n  .msg-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    border-radius: 8px;\n    object-fit: cover;\n  }\n  .lightbox__thumbs[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .lightbox__thumb[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .modal-backdrop[_ngcontent-%COMP%], .modal-overlay[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n    justify-content: center !important;\n    padding: 72px 12px 20px !important;\n    padding-top: max(72px, env(safe-area-inset-top, 0px) + 72px) !important;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-width: calc(100vw - 24px) !important;\n    width: calc(100vw - 24px) !important;\n    max-height: calc(100svh - 100px) !important;\n    max-height: calc(100dvh - 100px) !important;\n    max-height: calc(100vh - 100px);\n    border-radius: 12px !important;\n    margin: 0 !important;\n    animation: _ngcontent-%COMP%_fade-in 0.2s ease !important;\n  }\n  .modal__body[_ngcontent-%COMP%] {\n    max-height: calc(100svh - 220px) !important;\n    max-height: calc(100dvh - 220px) !important;\n    max-height: calc(100vh - 220px);\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .modal__body[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .modal__body[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .modal__body[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%], .modal__body[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%] {\n    font-size: 16px !important;\n    max-width: 100%;\n    box-sizing: border-box;\n    scroll-margin-top: 72px;\n  }\n  .modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    resize: none !important;\n    overflow-y: auto !important;\n    -webkit-overflow-scrolling: touch;\n    max-height: 32vh !important;\n    line-height: 1.5;\n  }\n  .modal__body[_ngcontent-%COMP%] {\n    overscroll-behavior: contain;\n  }\n  .modal[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: auto;\n  }\n  .modal-backdrop.modal--bottomsheet[_ngcontent-%COMP%], .modal-overlay.modal--bottomsheet[_ngcontent-%COMP%] {\n    align-items: flex-end !important;\n    padding: 0 !important;\n  }\n  .modal-backdrop.modal--bottomsheet[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%], .modal-overlay.modal--bottomsheet[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    width: 100% !important;\n    border-radius: 16px 16px 0 0 !important;\n    animation: _ngcontent-%COMP%_slide-up 0.25s ease !important;\n    padding-bottom: env(safe-area-inset-bottom, 0);\n  }\n  .msg-menu[_ngcontent-%COMP%] {\n    position: fixed !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    top: auto !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    border-radius: 16px 16px 0 0;\n    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.18);\n    padding: 8px 0 env(safe-area-inset-bottom, 8px);\n    animation: _ngcontent-%COMP%_slide-up 0.2s ease;\n    z-index: 10001;\n  }\n  .msg-menu[_ngcontent-%COMP%]   .msg-menu__item[_ngcontent-%COMP%] {\n    padding: 14px 20px;\n    font-size: 15px;\n  }\n  .popup[_ngcontent-%COMP%] {\n    position: fixed !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 60px !important;\n    top: auto !important;\n    width: 100% !important;\n    max-height: 40vh;\n    max-height: 40dvh;\n    border-radius: 16px 16px 0 0;\n    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.18);\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    z-index: 1200 !important;\n    pointer-events: auto !important;\n  }\n  .popup-backdrop[_ngcontent-%COMP%] {\n    z-index: 1199 !important;\n  }\n  .chat-room__messages[_ngcontent-%COMP%] {\n    padding: 12px 12px;\n    gap: 6px;\n  }\n  .chat-room__header[_ngcontent-%COMP%] {\n    height: 48px;\n    padding: 0 8px;\n    align-items: center;\n  }\n  .chat-room__header-left[_ngcontent-%COMP%] {\n    gap: 8px;\n    align-items: center;\n  }\n  .chat-room__avatar[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 13px;\n  }\n  .chat-room__title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .chat-room__input[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    padding-bottom: calc(8px + env(safe-area-inset-bottom, 0));\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 100;\n    background: #fff;\n    box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.06);\n    overflow: hidden;\n    transition: bottom 0.15s ease, opacity 0.2s;\n    will-change: bottom;\n    contain: layout;\n  }\n  .chat-room__input[_ngcontent-%COMP%], .chat-room__input.chat-room__input--hidden[_ngcontent-%COMP%] {\n    display: flex !important;\n    opacity: 1 !important;\n    pointer-events: auto !important;\n    visibility: visible !important;\n    transform: none !important;\n    max-height: none !important;\n  }\n  body.keyboard-open[_ngcontent-%COMP%]   .chat-room__messages[_ngcontent-%COMP%] {\n    padding-bottom: calc(80px + var(--kb-h, 0px) + env(safe-area-inset-bottom, 0px)) !important;\n  }\n  .chat-room__messages[_ngcontent-%COMP%], .chat-room.chat-room--scroll-collapsed[_ngcontent-%COMP%]   .chat-room__messages[_ngcontent-%COMP%], body.scroll-ui-hidden[_ngcontent-%COMP%]   .chat-room__messages[_ngcontent-%COMP%] {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    transform: none !important;\n    overflow-y: auto !important;\n  }\n  .chat-room__input[_ngcontent-%COMP%], .chat-room.chat-room--scroll-collapsed[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%], .chat-room__input.chat-room__input--hidden[_ngcontent-%COMP%], body.scroll-ui-hidden[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%] {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    pointer-events: auto !important;\n    transform: none !important;\n    max-height: none !important;\n  }\n  .chat-room.chat-room--scroll-collapsed[_ngcontent-%COMP%]   .chat-room__pinned[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .msg-input.msg-input--textarea[_ngcontent-%COMP%] {\n    min-height: 40px !important;\n    line-height: 1.4 !important;\n    padding: 10px 12px !important;\n    font-size: 16px !important;\n    max-width: none !important;\n    width: 100% !important;\n    box-sizing: border-box !important;\n    scroll-behavior: smooth;\n  }\n  .send-btn[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    min-width: 36px;\n  }\n  .input-menu-backdrop[_ngcontent-%COMP%] {\n    position: fixed !important;\n    inset: 0 !important;\n    z-index: 10000 !important;\n    background: rgba(0, 0, 0, 0.3) !important;\n    pointer-events: auto !important;\n  }\n  .input-menu[_ngcontent-%COMP%] {\n    position: fixed !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    top: auto !important;\n    width: 100vw !important;\n    max-width: 100vw !important;\n    min-width: 100vw !important;\n    border-radius: 16px 16px 0 0 !important;\n    border: none !important;\n    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.18) !important;\n    padding: 8px 0 env(safe-area-inset-bottom, 8px) !important;\n    z-index: 10001 !important;\n    pointer-events: auto !important;\n    background: #fff !important;\n    animation: _ngcontent-%COMP%_slide-up 0.22s cubic-bezier(0.2, 0.9, 0.3, 1) !important;\n    transform: none !important;\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n  }\n  .input-menu__item[_ngcontent-%COMP%] {\n    pointer-events: auto !important;\n    padding: 14px 20px !important;\n    font-size: 15px !important;\n    min-height: 48px !important;\n    width: 100% !important;\n    text-align: left !important;\n    display: flex !important;\n    align-items: center !important;\n    gap: 12px !important;\n    border-radius: 0 !important;\n    background: transparent !important;\n  }\n  .input-menu__item[_ngcontent-%COMP%]:active {\n    background: #f1f3f4 !important;\n  }\n  .popup-backdrop[_ngcontent-%COMP%] {\n    z-index: 1199 !important;\n    pointer-events: auto !important;\n  }\n  .input-ogp[_ngcontent-%COMP%] {\n    max-height: 38vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .input-ogp__card[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 32vh;\n    overflow: hidden;\n  }\n  .input-ogp__image[_ngcontent-%COMP%] {\n    max-height: 96px;\n  }\n  .input-ogp__desc[_ngcontent-%COMP%] {\n    -webkit-line-clamp: 1;\n  }\n  .compose-tray[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .lightbox__nav--prev[_ngcontent-%COMP%], .lightbox__nav--next[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n  }\n  .chat-detail__panel-header[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    background: #fff;\n    z-index: 2;\n    padding: 14px 0;\n    border-bottom: 1px solid #eee;\n  }\n  .chat-detail__avatar-wrap[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n  .search-panel__input[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n  }\n  .chat-room__pinned[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding: 8px 12px;\n  }\n  .chat-list__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n  }\n  .avatar-crop__stage[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  .avatar-crop__controls[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .chat-detail__tasks[_ngcontent-%COMP%], .chat-detail__bookmarks-inline[_ngcontent-%COMP%] {\n    padding: 0 4px;\n  }\n  .add-member__list[_ngcontent-%COMP%] {\n    max-height: 50vh;\n    max-height: 50dvh;\n  }\n  .add-member__item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .add-member__selected[_ngcontent-%COMP%] {\n    max-height: 80px;\n    overflow-y: auto;\n  }\n  .msg-image-grid[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow: hidden;\n    border-radius: 8px;\n  }\n  .msg-image-grid[data-count="1"][_ngcontent-%COMP%]   .msg-image-grid__cell[_ngcontent-%COMP%] {\n    max-height: 200px;\n  }\n  .msg-image-grid[data-count="1"][_ngcontent-%COMP%]   .msg-image-grid__cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 200px;\n    object-fit: cover;\n  }\n  .msg-image-grid__cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    object-fit: cover;\n    display: block;\n  }\n  .msg-bubble[_ngcontent-%COMP%] {\n    word-break: break-word;\n    overflow-wrap: break-word;\n  }\n  .chat-room__messages[_ngcontent-%COMP%] {\n    padding: 12px 10px;\n  }\n  .msg-wrap[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .msg-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    object-fit: cover;\n  }\n  .msg-menu__item[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .modal__tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .bookmark-item__head[_ngcontent-%COMP%], .bookmark-item__room[_ngcontent-%COMP%], .tag-item[_ngcontent-%COMP%], .chat-room__pinned[_ngcontent-%COMP%], .chat-list__filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .msg-menu__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .modal__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .modal__tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .bookmark-item__head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .bookmark-item__room[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .tag-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .chat-room__pinned[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .chat-list__filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .msg-attachment[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow: hidden;\n  }\n  .msg-attachment__name[_ngcontent-%COMP%] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .ogp-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .msg-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    word-break: break-all;\n  }\n}\n.msg-bubble[_ngcontent-%COMP%]   .msg-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .msg-bubble[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1565c0 !important;\n  text-decoration: underline;\n  font-weight: 500;\n}\n.msg-bubble[_ngcontent-%COMP%]   .msg-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .msg-bubble[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0d47a1 !important;\n  text-decoration: underline;\n}\n.msg-bubble[_ngcontent-%COMP%]   .msg-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .msg-bubble[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #4527a0 !important;\n}\n.msg-bubble.msg-bubble--me[_ngcontent-%COMP%]   .msg-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .msg-bubble.msg-bubble--me[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  text-decoration: underline;\n  text-decoration-color: rgba(255, 255, 255, 0.6);\n  font-weight: 600;\n}\n.msg-bubble.msg-bubble--me[_ngcontent-%COMP%]   .msg-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .msg-bubble.msg-bubble--me[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fffde7 !important;\n  text-decoration-color: #fff;\n}\n.msg-bubble.msg-bubble--me[_ngcontent-%COMP%]   .msg-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .msg-bubble.msg-bubble--me[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #fff3e0 !important;\n}\n@keyframes _ngcontent-%COMP%_slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.msg-image-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n  margin-top: 6px;\n  border-radius: 14px;\n  overflow: hidden;\n  max-width: 260px;\n  width: 100%;\n}\n.msg-image-grid[data-count="1"][_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.msg-image-grid[data-count="1"][_ngcontent-%COMP%]   .msg-image-grid__cell[_ngcontent-%COMP%] {\n  aspect-ratio: auto;\n  max-height: 260px;\n}\n.msg-image-grid[data-count="1"][_ngcontent-%COMP%]   .msg-image-grid__cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  aspect-ratio: auto;\n  max-height: 260px;\n}\n.msg-image-grid[data-count="2"][_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n.msg-image-grid[data-count="2"][_ngcontent-%COMP%]   .msg-image-grid__cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1/1;\n}\n.msg-image-grid[data-count="3"][_ngcontent-%COMP%] {\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n.msg-image-grid[data-count="3"][_ngcontent-%COMP%]   .msg-image-grid__cell[_ngcontent-%COMP%]:nth-child(1) {\n  grid-row: span 2;\n  aspect-ratio: 1/1;\n}\n.msg-image-grid[data-count="3"][_ngcontent-%COMP%]   .msg-image-grid__cell[_ngcontent-%COMP%]:nth-child(n+2) {\n  aspect-ratio: 1/1;\n}\n.msg-image-grid[data-count="4"][_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n.msg-image-grid[data-count="4"][_ngcontent-%COMP%]   .msg-image-grid__cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1/1;\n}\n.msg-image-grid__cell[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  background: #f0f0f0;\n}\n.msg-image-grid__cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.25s ease;\n}\n.msg-image-grid__cell[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n.msg-image-grid__cell[_ngcontent-%COMP%]   .msg-image__placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #bbb;\n}\n.msg-image-grid__cell[_ngcontent-%COMP%]   .msg-image__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  gap: 6px;\n  will-change: contents;\n}\n.msg-image-grid__cell[_ngcontent-%COMP%]   .msg-image__progress[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  min-width: 3em;\n  text-align: center;\n}\n.msg-image-grid__more[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  pointer-events: none;\n}\n.chat-room__pinned[_ngcontent-%COMP%] {\n  position: relative;\n}\n.chat-room__pinned-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 42px;\n  transform: translateY(-50%);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border: 1px solid #ffcc80;\n  border-radius: 12px;\n  background: #fff3e0;\n  color: #e65100;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  z-index: 2;\n}\n.chat-room__pinned-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.chat-room__pinned-count[_ngcontent-%COMP%]:hover {\n  background: #ffe0b2;\n}\n.chat-room__pinned-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 6px;\n  transform: translateY(-50%);\n  width: 28px;\n  height: 28px;\n  background: transparent;\n  border-radius: 50%;\n  color: #888;\n  z-index: 2;\n}\n.chat-room__pinned-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.chat-room__pinned-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.06);\n  color: #81766e;\n}\n.msg-hover-actions__btn--on[_ngcontent-%COMP%] {\n  color: var(--schecon-orange, #ff9800) !important;\n  background: #fff3e0 !important;\n}\n.folder-view__item--drop[_ngcontent-%COMP%], .room-item--drop[_ngcontent-%COMP%] {\n  position: relative;\n}\n.folder-view__item--drop[_ngcontent-%COMP%]::before, .room-item--drop[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 6px;\n  right: 6px;\n  top: -1px;\n  height: 2px;\n  background: var(--schecon-orange, #ff9800);\n  border-radius: 2px;\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.18);\n  pointer-events: none;\n}\n.chat-room__ha-more[_ngcontent-%COMP%] {\n  position: relative;\n  display: none;\n}\n.chat-room__ha-more-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 99;\n}\n.chat-room__ha-more-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  min-width: 180px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);\n  padding: 6px 0;\n  z-index: 100;\n}\n.chat-room__ha-more-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 14px;\n  background: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  font-size: 14px;\n  color: #3c4043;\n}\n.chat-room__ha-more-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.chat-room__ha-more-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #5f6368;\n}\n.chat-room__info-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.chat-room__info-menu-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 99;\n  background: transparent;\n}\n.chat-room__info-menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  min-width: 200px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);\n  padding: 6px 0;\n  z-index: 100;\n}\n.chat-room__info-menu-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 11px 14px;\n  background: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  font-size: 14px;\n  color: #3c4043;\n}\n.chat-room__info-menu-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .chat-room__info-menu-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.chat-room__info-menu-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #5f6368;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  position: relative;\n}\n.msg-bubble[_ngcontent-%COMP%]:hover {\n  z-index: 15;\n}\n.msg-hover-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  right: auto;\n  top: auto;\n  margin-bottom: 2px;\n  transform: translateY(4px);\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  padding: 6px 8px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 24px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.14), 0 2px 6px rgba(0, 0, 0, 0.06);\n  opacity: 0;\n  transition: opacity 0.15s, transform 0.15s;\n  pointer-events: none;\n  z-index: 30;\n  white-space: nowrap;\n  max-width: min(100vw - 40px, 520px);\n  flex-wrap: nowrap;\n  overflow: visible;\n}\n.msg-hover-actions[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: -8px;\n  right: -8px;\n  height: 14px;\n  background: transparent;\n  pointer-events: auto;\n}\n.msg-hover-actions__btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  color: #5f6368;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    transform 0.15s;\n}\n.msg-hover-actions__btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.msg-hover-actions__btn[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n  color: var(--schecon-orange, #ff9800);\n}\n.msg-hover-actions__btn--edit[_ngcontent-%COMP%] {\n  color: #1a73e8;\n}\n.msg-hover-actions__btn--edit[_ngcontent-%COMP%]:hover {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.msg-hover-actions__btn--danger[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.msg-hover-actions__btn--danger[_ngcontent-%COMP%]:hover {\n  background: #ffebee;\n  color: #c62828;\n}\n.msg-bubble[_ngcontent-%COMP%]:hover   .msg-hover-actions[_ngcontent-%COMP%], .msg-hover-actions[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n}\n.msg-bubble--me[_ngcontent-%COMP%]   .msg-hover-actions[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n.msg-row[_ngcontent-%COMP%]:first-child   .msg-hover-actions[_ngcontent-%COMP%], .msg-row[_ngcontent-%COMP%]:nth-child(2)   .msg-hover-actions[_ngcontent-%COMP%], .msg-row[_ngcontent-%COMP%]:nth-child(3)   .msg-hover-actions[_ngcontent-%COMP%], .msg-date[_ngcontent-%COMP%]    + .msg-row[_ngcontent-%COMP%]   .msg-hover-actions[_ngcontent-%COMP%] {\n  bottom: auto;\n  top: 100%;\n  margin-bottom: 0;\n  margin-top: 4px;\n  transform: translateY(-4px);\n}\n.msg-row[_ngcontent-%COMP%]:first-child   .msg-hover-actions[_ngcontent-%COMP%]::after, .msg-row[_ngcontent-%COMP%]:nth-child(2)   .msg-hover-actions[_ngcontent-%COMP%]::after, .msg-row[_ngcontent-%COMP%]:nth-child(3)   .msg-hover-actions[_ngcontent-%COMP%]::after, .msg-date[_ngcontent-%COMP%]    + .msg-row[_ngcontent-%COMP%]   .msg-hover-actions[_ngcontent-%COMP%]::after {\n  top: auto;\n  bottom: 100%;\n}\n.msg-row[_ngcontent-%COMP%]:first-child   .msg-bubble[_ngcontent-%COMP%]:hover   .msg-hover-actions[_ngcontent-%COMP%], .msg-row[_ngcontent-%COMP%]:nth-child(2)   .msg-bubble[_ngcontent-%COMP%]:hover   .msg-hover-actions[_ngcontent-%COMP%], .msg-row[_ngcontent-%COMP%]:nth-child(3)   .msg-bubble[_ngcontent-%COMP%]:hover   .msg-hover-actions[_ngcontent-%COMP%], .msg-date[_ngcontent-%COMP%]    + .msg-row[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%]:hover   .msg-hover-actions[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.chat-room__messages[_ngcontent-%COMP%] {\n  padding-top: 56px !important;\n}\n.msg-bubble[_ngcontent-%COMP%]:has(.msg-reactions) {\n  margin-bottom: 14px;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  position: relative;\n}\n.msg-bubble--withdrawn[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: 1px dashed #ccc !important;\n  opacity: 0.7;\n  cursor: default;\n}\n.msg-bubble--withdrawn[_ngcontent-%COMP%]:hover {\n  background: transparent !important;\n}\n.msg-bubble--withdrawn[_ngcontent-%COMP%]   .msg-bubble__withdrawn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #999;\n  font-size: 13px;\n  font-style: italic;\n  padding: 4px 0;\n}\n.msg-bubble--withdrawn[_ngcontent-%COMP%]   .msg-bubble__withdrawn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #bbb;\n}\n.msg-highlight[_ngcontent-%COMP%] {\n  position: relative;\n  animation: _ngcontent-%COMP%_msg-search-highlight 3s ease;\n  border-radius: 14px;\n}\n.msg-highlight[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_msg-bubble-highlight 3s ease;\n}\n@keyframes _ngcontent-%COMP%_msg-search-highlight {\n  0% {\n    background: transparent;\n    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);\n  }\n  10% {\n    background: rgba(255, 235, 59, 0.45);\n    box-shadow: 0 0 0 4px rgba(255, 193, 7, 0.6);\n  }\n  40% {\n    background: rgba(255, 235, 59, 0.35);\n    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.45);\n  }\n  80% {\n    background: rgba(255, 235, 59, 0.18);\n    box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.25);\n  }\n  100% {\n    background: transparent;\n    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_msg-bubble-highlight {\n  0% {\n    outline: 0 solid rgba(255, 152, 0, 0);\n    outline-offset: 0;\n  }\n  10% {\n    outline: 3px solid rgba(255, 152, 0, 0.9);\n    outline-offset: 2px;\n  }\n  40% {\n    outline: 3px solid rgba(255, 152, 0, 0.75);\n    outline-offset: 2px;\n  }\n  80% {\n    outline: 2px solid rgba(255, 152, 0, 0.4);\n    outline-offset: 2px;\n  }\n  100% {\n    outline: 0 solid rgba(255, 152, 0, 0);\n    outline-offset: 0;\n  }\n}\n@media (hover: none) {\n  .msg-hover-actions[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.search-panel[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n}\n.search-panel__input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f5f5f5;\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.search-panel__input-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.search-panel__input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  outline: none;\n}\n.search-panel__input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.search-panel__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  padding: 8px 0 4px;\n}\n.search-panel__results[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  max-height: calc(100vh - 220px);\n  max-height: calc(100dvh - 220px);\n  overflow-y: auto;\n}\n.search-panel__result[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 10px 12px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.search-panel__result[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.search-panel__result-sender[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.search-panel__result-sender[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n}\n.search-panel__result-sender[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.search-panel__result-time[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11px;\n  color: #aaa;\n}\n.search-panel__result-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #555;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-break: break-word;\n  max-height: 120px;\n  overflow: hidden;\n  background: #fafafa;\n  border-left: 3px solid #e0e0e0;\n  padding: 6px 10px;\n  border-radius: 0 6px 6px 0;\n  margin-top: 2px;\n}\n.search-panel__empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 40px 16px;\n  color: #aaa;\n  font-size: 13px;\n}\n.search-panel__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n}\n.search-highlight[_ngcontent-%COMP%] {\n  background: #fff176;\n  padding: 1px 3px;\n  border-radius: 2px;\n  font-weight: 700;\n  color: #81766e;\n}\n.msg-image[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  max-width: 280px;\n  max-height: 280px;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  background: #f1f3f4;\n  border: 1px solid #e0e0e0;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.msg-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  max-height: 280px;\n  object-fit: cover;\n}\n.msg-image__placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 160px;\n  color: #9aa0a6;\n}\n.msg-image__placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n.msg-image__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #fff;\n}\n.msg-image__progress[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.msg-image__progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.3);\n}\n.msg-image__progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--schecon-orange, #ff9800);\n  transition: width 0.2s ease;\n}\n.msg-image__zoom[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.msg-image__zoom[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.msg-image[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);\n}\n.msg-image[_ngcontent-%COMP%]:hover   .msg-image__zoom[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.msg-image--uploading[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.msg-image--uploading[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spinner-rotate 0.8s linear infinite;\n}\n.spinner--sm[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-width: 2px;\n  border-color: rgba(0, 0, 0, 0.15);\n  border-top-color: var(--schecon-orange, #ff9800);\n}\n@keyframes _ngcontent-%COMP%_spinner-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.msg-attachment__bar[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  height: 3px;\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.msg-attachment__bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--schecon-orange, #ff9800);\n  transition: width 0.2s ease;\n}\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.92);\n  z-index: 11000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_lightbox-fade 0.2s ease;\n}\n.lightbox__toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  display: flex;\n  gap: 8px;\n  z-index: 2;\n}\n.lightbox__close[_ngcontent-%COMP%], .lightbox__download[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.lightbox__close[_ngcontent-%COMP%]:hover, .lightbox__download[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n}\n.lightbox__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .lightbox__download[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.lightbox__nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 52px;\n  height: 52px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  transition: background 0.15s;\n}\n.lightbox__nav[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n}\n.lightbox__nav[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n}\n.lightbox__nav--prev[_ngcontent-%COMP%] {\n  left: 24px;\n}\n.lightbox__nav--next[_ngcontent-%COMP%] {\n  right: 24px;\n}\n.lightbox__stage[_ngcontent-%COMP%] {\n  max-width: 94vw;\n  max-height: 94vh;\n  max-height: 94dvh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  touch-action: pan-y;\n}\n.lightbox__stage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 94vw;\n  max-height: 88vh;\n  max-height: 88dvh;\n  object-fit: contain;\n  border-radius: 4px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n.lightbox__caption[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.lightbox__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n.lightbox__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.7;\n}\n.lightbox__thumbs[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 8px;\n  padding: 10px 14px;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 12px;\n  max-width: 90vw;\n  overflow-x: auto;\n  z-index: 2;\n}\n.lightbox__thumb[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  overflow: hidden;\n  background: #000;\n  cursor: pointer;\n  transition: border-color 0.15s, transform 0.15s;\n}\n.lightbox__thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lightbox__thumb[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.lightbox__thumb--active[_ngcontent-%COMP%] {\n  border-color: var(--schecon-orange, #ff9800);\n}\n@keyframes _ngcontent-%COMP%_lightbox-fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .lightbox__nav--prev[_ngcontent-%COMP%] {\n    left: 8px;\n    width: 44px;\n    height: 44px;\n  }\n  .lightbox__nav--next[_ngcontent-%COMP%] {\n    right: 8px;\n    width: 44px;\n    height: 44px;\n  }\n  .lightbox__thumbs[_ngcontent-%COMP%] {\n    bottom: 8px;\n    padding: 6px 8px;\n  }\n  .lightbox__thumb[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n  }\n}\n.chat-detail[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.chat-detail[_ngcontent-%COMP%]   .chat-detail__mobile-header[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.chat-detail--subview[_ngcontent-%COMP%] {\n  align-items: stretch;\n  padding-left: 0;\n  padding-right: 0;\n}\n.chat-detail__panel-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: calc(100% + 40px);\n  margin: 0 -20px 16px;\n  padding: 14px 16px;\n  background: #fff;\n  border-bottom: 1px solid #eceff1;\n}\n.chat-detail__panel-header[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\n.chat-detail__panel-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.chat-detail--subview[_ngcontent-%COMP%]   .chat-detail__panel-header[_ngcontent-%COMP%] {\n  margin: 0 0 0;\n  width: 100%;\n}\n.chat-detail__panel-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 700;\n  color: #81766e;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.chat-detail__panel-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.chat-detail__panel[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 16px 20px;\n  animation: _ngcontent-%COMP%_panelSlideIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.search-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n}\n.search-panel__input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 10px;\n  min-height: 44px;\n  background: #f5f7fa;\n  border: 1px solid #e0e4e9;\n  border-radius: 12px;\n}\n.search-panel__input-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9aa0a6;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.search-panel__input-wrap[_ngcontent-%COMP%]   .icon-btn--sm[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n}\n.search-panel__input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 15px;\n  padding: 10px 0;\n  min-height: 44px;\n  box-sizing: border-box;\n}\n.search-panel__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  padding: 0 4px;\n}\n.search-panel__results[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.search-panel__result[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 10px 12px;\n  background: #fff;\n  border: 1px solid #e0e4e9;\n  border-radius: 10px;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    box-shadow 0.15s,\n    background 0.15s;\n}\n.search-panel__result[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  background: #fffaf4;\n}\n.search-panel__result-sender[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n}\n.search-panel__result-sender[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.search-panel__result-sender[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.search-panel__result-time[_ngcontent-%COMP%] {\n  color: #9aa0a6;\n  margin-left: auto;\n  font-size: 11px;\n}\n.search-panel__result-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.5;\n  color: #81766e;\n}\n.search-panel__empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 24px 0;\n  color: #9aa0a6;\n  font-size: 13px;\n}\n.search-panel__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n@keyframes _ngcontent-%COMP%_panelSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.chat-detail__panel-hint[_ngcontent-%COMP%] {\n  margin: 4px 0 12px;\n  font-size: 12px;\n  color: #757575;\n  line-height: 1.5;\n}\n.chat-detail__panel-empty[_ngcontent-%COMP%] {\n  padding: 40px 16px;\n  text-align: center;\n  color: #9aa0a6;\n}\n.chat-detail__panel-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #cfd8dc;\n  margin-bottom: 8px;\n}\n.chat-detail__panel-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 4px;\n  font-size: 13px;\n  color: #616161;\n}\n.chat-detail__panel-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9aa0a6;\n}\n.chat-detail__panel-cta[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.chat-detail__panel-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 4px;\n  background: #f5f5f5;\n  border-radius: 10px;\n  margin-bottom: 14px;\n}\n.chat-detail__panel-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 8px 4px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #757575;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.chat-detail__panel-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.chat-detail__panel-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #81766e;\n}\n.chat-detail__panel-tab--active[_ngcontent-%COMP%] {\n  background: #fff !important;\n  color: var(--schecon-orange, #ff9800) !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.bookmark-list--inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bookmark-list--inline[_ngcontent-%COMP%]   .bookmark-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #fafafa;\n  border: 1px solid #eceff1;\n  border-radius: 10px;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s, border-color 0.15s;\n}\n.bookmark-list--inline[_ngcontent-%COMP%]   .bookmark-item[_ngcontent-%COMP%]:hover {\n  background: #fff8e1;\n  border-color: #ffe082;\n}\n.bookmark-list--inline[_ngcontent-%COMP%]   .bookmark-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.bookmark-list--inline[_ngcontent-%COMP%]   .bookmark-item__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.bookmark-list--inline[_ngcontent-%COMP%]   .bookmark-item__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #81766e;\n}\n.bookmark-list--inline[_ngcontent-%COMP%]   .bookmark-item__time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9e9e9e;\n}\n.bookmark-list--inline[_ngcontent-%COMP%]   .bookmark-item__text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #81766e;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.bookmark-list--inline[_ngcontent-%COMP%]   .bookmark-item__room[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 4px;\n  font-size: 11px;\n  color: #9e9e9e;\n}\n.bookmark-list--inline[_ngcontent-%COMP%]   .bookmark-item__room[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.tag-list--inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tag-list--inline[_ngcontent-%COMP%]   .tag-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #fff;\n  border: 1px solid #eceff1;\n  border-left: 3px solid var(--tag-color, #ed9630);\n  border-radius: 10px;\n  cursor: pointer;\n  text-align: left;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    transform 0.15s;\n}\n.tag-list--inline[_ngcontent-%COMP%]   .tag-item[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--tag-color, #ed9630) 8%, #fff);\n  transform: translateX(2px);\n}\n.tag-list--inline[_ngcontent-%COMP%]   .tag-item--active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--tag-color, #ed9630) 14%, #fff) !important;\n  border-color: var(--tag-color, #ed9630) !important;\n}\n.tag-list--inline[_ngcontent-%COMP%]   .tag-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.tag-list--inline[_ngcontent-%COMP%]   .tag-item__label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n}\n.tag-list--inline[_ngcontent-%COMP%]   .tag-item__count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9aa0a6;\n}\n.tag-list--inline[_ngcontent-%COMP%]   .tag-item__chev[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #bdbdbd;\n}\n.media-grid--inline[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 4px;\n}\n@media (max-width: 1024px) {\n  .media-grid--inline[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .media-grid--inline[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.media-grid--inline[_ngcontent-%COMP%]   .media-tile[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  text-align: left;\n  display: block;\n}\n.media-grid--inline[_ngcontent-%COMP%]   .media-tile__thumb[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 2px;\n  background: #eceff1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.media-grid--inline[_ngcontent-%COMP%]   .media-tile__thumb[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #90a4ae;\n}\n.media-grid--inline[_ngcontent-%COMP%]   .media-tile__thumb[_ngcontent-%COMP%]   .media-tile__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.media-grid--inline[_ngcontent-%COMP%]   .media-tile__thumb[_ngcontent-%COMP%]   .media-tile__overlay[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.media-grid--inline[_ngcontent-%COMP%]   .media-tile__thumb[_ngcontent-%COMP%]:hover   .media-tile__overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.media-grid--inline[_ngcontent-%COMP%]   .media-tile__date[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 6px;\n  bottom: 6px;\n  font-size: 10px;\n  font-weight: 600;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.55);\n  padding: 2px 6px;\n  border-radius: 10px;\n  pointer-events: none;\n  z-index: 1;\n}\n.media-grid--inline[_ngcontent-%COMP%]   .media-tile__name[_ngcontent-%COMP%] {\n  display: none;\n}\n.file-list--inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.file-list--inline[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #fafafa;\n  border: 1px solid #eceff1;\n  border-radius: 10px;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.file-list--inline[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ffcc80;\n}\n.file-list--inline[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.file-list--inline[_ngcontent-%COMP%]   .file-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.file-list--inline[_ngcontent-%COMP%]   .file-item__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #81766e;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file-list--inline[_ngcontent-%COMP%]   .file-item__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9aa0a6;\n  margin-top: 2px;\n}\n.file-list--inline[_ngcontent-%COMP%]   .file-item__download[_ngcontent-%COMP%] {\n  color: #9aa0a6;\n}\n.file-list--inline[_ngcontent-%COMP%]   .file-item__download[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.member-list-full--inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 14px;\n}\n.member-list-full--inline[_ngcontent-%COMP%]   .member-list-full__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  transition: background 0.15s;\n}\n.member-list-full--inline[_ngcontent-%COMP%]   .member-list-full__item[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.member-list-full--inline[_ngcontent-%COMP%]   .member-list-full__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: nowrap;\n}\n.member-list-full--inline[_ngcontent-%COMP%]   .member-list-full__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #81766e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.member-list-full--inline[_ngcontent-%COMP%]   .member-list-full__role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #fff;\n  font-weight: 700;\n  background: #ff9800;\n  padding: 2px 6px;\n  border-radius: 8px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.chat-detail__avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 88px;\n  height: 88px;\n  margin: 8px auto 12px;\n}\n.chat-detail__avatar-wrap[_ngcontent-%COMP%]   .chat-detail__avatar[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  margin-bottom: 0;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n.chat-detail__avatar-wrap[_ngcontent-%COMP%]   .chat-detail__avatar--has-image[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n}\n.chat-detail__avatar-wrap[_ngcontent-%COMP%]   .chat-detail__avatar-cluster[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  gap: 2px;\n}\n.chat-detail__avatar-wrap[_ngcontent-%COMP%]   .chat-detail__avatar-cluster[_ngcontent-%COMP%]   .mini-avatar--lg[_ngcontent-%COMP%] {\n  width: 42px !important;\n  height: 42px !important;\n  margin-left: 0 !important;\n  font-size: 14px !important;\n}\n.chat-detail__avatar-wrap[_ngcontent-%COMP%]   .chat-detail__avatar-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  opacity: 0;\n  transition: opacity 0.18s ease;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  pointer-events: none;\n  box-sizing: border-box;\n}\n.chat-detail__avatar-wrap[_ngcontent-%COMP%]   .chat-detail__avatar-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.chat-detail__avatar-wrap[_ngcontent-%COMP%]   .chat-detail__avatar-edit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.chat-detail__avatar-wrap[_ngcontent-%COMP%]:hover   .chat-detail__avatar-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n@media (hover: none) {\n  .chat-detail__avatar-wrap[_ngcontent-%COMP%]   .chat-detail__avatar-edit[_ngcontent-%COMP%] {\n    opacity: 0.85;\n    pointer-events: auto;\n    background: rgba(0, 0, 0, 0.35);\n    justify-content: flex-end;\n    padding-bottom: 6px;\n  }\n  .chat-detail__avatar-wrap[_ngcontent-%COMP%]   .chat-detail__avatar-edit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .chat-detail__avatar-wrap[_ngcontent-%COMP%]   .chat-detail__avatar-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n}\n.chat-detail__panel--profile[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n.chat-detail__panel--profile[_ngcontent-%COMP%]   .profile-inline__avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  background: #bdbdbd;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: 700;\n  margin: 4px auto 12px;\n}\n.chat-detail__panel--profile[_ngcontent-%COMP%]   .profile-inline__status[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n  bottom: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #4caf50;\n  border: 2px solid #fff;\n}\n.chat-detail__panel--profile[_ngcontent-%COMP%]   .profile-inline__name[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n}\n.chat-detail__panel--profile[_ngcontent-%COMP%]   .profile-inline__role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #ff9800;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.chat-detail__panel--profile[_ngcontent-%COMP%]   .profile-inline__info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 18px;\n}\n.chat-detail__panel--profile[_ngcontent-%COMP%]   .profile-inline__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  background: #f8f9fb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #81766e;\n}\n.chat-detail__panel--profile[_ngcontent-%COMP%]   .profile-inline__row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #9aa0a6;\n}\n.chat-detail__panel--profile[_ngcontent-%COMP%]   .profile-inline__row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  word-break: break-all;\n  text-align: left;\n}\n.chat-detail__panel--profile[_ngcontent-%COMP%]   .profile-inline__actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.notif-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.notif-panel__heading[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #757575;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.notif-panel__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  background: #f8f9fb;\n  border-radius: 10px;\n  font-size: 13px;\n  color: #81766e;\n  cursor: pointer;\n}\n.notif-panel__row[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.notif-panel__radio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #f8f9fb;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.notif-panel__radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.notif-panel__radio[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.notif-panel__radio--active[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-color: #ff9800;\n}\n.notif-panel__radio-dot[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid #c1c1c1;\n  background: #fff;\n  position: relative;\n  transition: border-color 0.15s;\n}\n.notif-panel__radio-dot[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: #ff9800;\n  transform: scale(0);\n  transition: transform 0.15s;\n}\n.notif-panel__radio--active[_ngcontent-%COMP%]   .notif-panel__radio-dot[_ngcontent-%COMP%] {\n  border-color: #ff9800;\n}\n.notif-panel__radio--active[_ngcontent-%COMP%]   .notif-panel__radio-dot[_ngcontent-%COMP%]::after {\n  transform: scale(1);\n}\n.notif-panel__radio-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.notif-panel__radio-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n}\n.notif-panel__radio-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757575;\n}\n.notif-panel__radio-icon[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  flex-shrink: 0;\n}\n.notif-panel__radio--active[_ngcontent-%COMP%]   .notif-panel__radio-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.notif-panel__sub-heading[_ngcontent-%COMP%] {\n  margin: 10px 0 6px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #757575;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.notif-panel__mute-options[_ngcontent-%COMP%] {\n  padding: 0 6px;\n}\n.notif-panel__mute-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n.notif-panel__mute-btn[_ngcontent-%COMP%] {\n  appearance: none;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #5f6368;\n  cursor: pointer;\n  transition: all 0.15s;\n  font-family: inherit;\n}\n.notif-panel__mute-btn[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ff9800;\n  color: #ff9800;\n}\n.notif-panel__mute-btn--forever[_ngcontent-%COMP%] {\n  grid-column: span 3;\n  font-weight: 600;\n}\n.notif-panel__mute-btn--active[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-color: #ff9800;\n  color: #ef6c00;\n}\n.notif-panel__hint[_ngcontent-%COMP%] {\n  margin: 10px 4px 0;\n  font-size: 11px;\n  color: #9aa0a6;\n}\n.avatar-crop-backdrop[_ngcontent-%COMP%] {\n  z-index: 1200;\n}\n.schedule-modal__icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n}\n.schedule-modal__body[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.schedule-modal__desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #757575;\n  margin: 0 0 12px;\n  padding: 0 4px;\n}\n.schedule-modal__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 14px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n  text-align: left;\n  margin-bottom: 10px;\n}\n.schedule-modal__item[_ngcontent-%COMP%]:hover {\n  background: #fff8e1;\n  border-color: #ffcc80;\n}\n.schedule-modal__item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.schedule-modal__item-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #ff9800;\n  flex-shrink: 0;\n}\n.schedule-modal__item-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.schedule-modal__item-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #81766e;\n  margin-bottom: 2px;\n}\n.schedule-modal__item-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.schedule-modal__item-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #bdbdbd;\n  flex-shrink: 0;\n}\n.modal--avatar-crop[_ngcontent-%COMP%] {\n  width: min(92vw, 420px);\n  max-width: 420px;\n}\n.modal--avatar-crop[_ngcontent-%COMP%]   .modal__footer[_ngcontent-%COMP%] {\n  padding-bottom: calc(12px + env(safe-area-inset-bottom, 0)) !important;\n}\n@media (max-width: 767px) {\n  .modal--avatar-crop[_ngcontent-%COMP%] {\n    width: 100vw;\n    max-width: 100vw;\n    max-height: 100dvh;\n    max-height: 100svh;\n    border-radius: 0;\n    display: flex;\n    flex-direction: column;\n  }\n  .modal--avatar-crop[_ngcontent-%COMP%]   .avatar-crop__body[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    overflow-y: auto;\n  }\n  .modal--avatar-crop[_ngcontent-%COMP%]   .avatar-crop__stage[_ngcontent-%COMP%] {\n    width: min(80vw, 280px);\n    height: min(80vw, 280px);\n  }\n}\n.avatar-crop__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  padding: 18px 20px 10px;\n}\n.avatar-crop__stage[_ngcontent-%COMP%] {\n  position: relative;\n  width: 240px;\n  height: 240px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: #222;\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);\n  cursor: grab;\n  touch-action: none;\n}\n.avatar-crop__stage--dragging[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n.avatar-crop__stage[_ngcontent-%COMP%]   .avatar-crop__canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.avatar-crop__stage[_ngcontent-%COMP%]   .avatar-crop__img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  display: block;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n  will-change: transform;\n  pointer-events: none;\n}\n.avatar-crop__stage[_ngcontent-%COMP%]   .avatar-crop__mask[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  pointer-events: none;\n  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.9), inset 0 0 0 4px rgba(0, 0, 0, 0.08);\n}\n.avatar-crop__stage[_ngcontent-%COMP%]   .avatar-crop__loading[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: #fff;\n  background: rgba(34, 34, 34, 0.85);\n  z-index: 2;\n}\n.avatar-crop__stage[_ngcontent-%COMP%]   .avatar-crop__loading-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.9;\n}\n.avatar-crop__spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid rgba(255, 255, 255, 0.25);\n  border-top-color: #ff9800;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_avatar-crop-spin 0.8s linear infinite;\n}\n.avatar-crop__spinner--sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-width: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n@keyframes _ngcontent-%COMP%_avatar-crop-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.avatar-crop__saving[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n.avatar-crop__controls[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.avatar-crop__arrows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.avatar-crop__arrows[_ngcontent-%COMP%]   .avatar-crop__arrows-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.avatar-crop__arrows[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  background: #f1f3f4;\n}\n.avatar-crop__arrows[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: #e1e4e8;\n}\n.avatar-crop__zoom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 0 8px;\n}\n.avatar-crop__zoom[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9aa0a6;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.avatar-crop__zoom[_ngcontent-%COMP%]   .avatar-crop__zoom-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.avatar-crop__zoom[_ngcontent-%COMP%]   .avatar-crop__zoom-btn[_ngcontent-%COMP%]:hover {\n  color: var(--schecon-orange, #ff9800);\n}\n.avatar-crop__zoom[_ngcontent-%COMP%]   .avatar-crop__zoom-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n.avatar-crop__zoom[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  flex: 1;\n  accent-color: var(--schecon-orange, #ff9800);\n}\n.avatar-crop__slider-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 2px;\n}\n.avatar-crop__slider-wrap[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n}\n.avatar-crop__ticks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 6px;\n  height: 8px;\n}\n.avatar-crop__tick[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 6px;\n  background: #bdbdbd;\n  flex-shrink: 0;\n}\n.avatar-crop__tick[_ngcontent-%COMP%]:nth-child(5n+1) {\n  height: 8px;\n  background: #9e9e9e;\n}\n.avatar-crop__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  color: #9aa0a6;\n  text-align: center;\n}\n.avatar-crop__reset[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.avatar-crop__reset[_ngcontent-%COMP%]   .btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 12px;\n}\n.avatar-crop__reset[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n}\n.inline-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 16px 20px;\n}\n.inline-form__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5f6368;\n  font-weight: 500;\n}\n.inline-form__input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n}\n.inline-form__input[_ngcontent-%COMP%]:focus {\n  border-color: var(--schecon-orange, #ff9800);\n}\n.inline-form__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n.inline-confirm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 10px;\n  padding: 20px 20px 16px;\n}\n.inline-confirm__icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n.inline-confirm__icon--danger[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.inline-confirm__title[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n}\n.inline-confirm__msg[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #81766e;\n}\n.inline-confirm__sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #5f6368;\n  line-height: 1.5;\n}\n.inline-confirm__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  margin-top: 12px;\n  width: 100%;\n}\n.inline-confirm__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n  flex-shrink: 0;\n  min-width: 0;\n  padding-left: 14px;\n  padding-right: 14px;\n  font-size: 13px;\n}\n.chat-list__item-avatar[_ngcontent-%COMP%], .chat-room__avatar[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n.search-field--group-name[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.search-field--group-name[_ngcontent-%COMP%]   .search-field__hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  font-weight: 500;\n  margin-left: 4px;\n}\n.search-field--group-name[_ngcontent-%COMP%]   .search-field__caption[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 11px;\n  color: #757575;\n  line-height: 1.5;\n}\n.chat-detail__quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  padding: 4px 16px 12px;\n}\n.chat-detail__quick-actions[_ngcontent-%COMP%]   .chat-detail__quick-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  min-width: 64px;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 0;\n  background: transparent;\n  color: #555;\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.chat-detail__quick-actions[_ngcontent-%COMP%]   .chat-detail__quick-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.chat-detail__quick-actions[_ngcontent-%COMP%]   .chat-detail__quick-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n}\n.chat-detail__quick-actions[_ngcontent-%COMP%]   .chat-detail__quick-btn[_ngcontent-%COMP%]:hover {\n  color: #e65100;\n}\n.chat-detail__quick-actions[_ngcontent-%COMP%]   .chat-detail__quick-btn.chat-detail__quick-btn--active[_ngcontent-%COMP%] {\n  color: #e65100;\n}\n.scheduled-banner-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 6px 12px 0;\n  box-sizing: border-box;\n}\n.scheduled-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  appearance: none;\n  border: 1px solid #ffd4b3;\n  background: #fff3e0;\n  color: #3d2f24;\n  padding: 8px 12px;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n  text-align: left;\n}\n.scheduled-banner[_ngcontent-%COMP%]:hover {\n  background: #ffe5c7;\n  border-color: #ffb980;\n}\n.scheduled-banner[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #ff6b1a;\n  outline-offset: 2px;\n}\n.scheduled-banner--open[_ngcontent-%COMP%] {\n  border-color: #ff6b1a;\n  background: #ffe5c7;\n}\n.scheduled-banner__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.scheduled-banner__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #3d2f24;\n}\n.scheduled-banner__chevron[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #81766e;\n  flex-shrink: 0;\n}\n.scheduled-banner__panel[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 12px;\n  right: 12px;\n  bottom: calc(100% + 6px);\n  z-index: 20;\n}\n.schedule-send-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  color: #ff6b1a;\n  border: 1px solid #ffd4b3;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n  margin-right: 6px;\n}\n.schedule-send-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.schedule-send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fff3e0;\n  border-color: #ff6b1a;\n}\n.schedule-send-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #ff6b1a;\n  outline-offset: 2px;\n}\n.schedule-send-btn[_ngcontent-%COMP%]:disabled {\n  background: #f5f5f5;\n  color: #bdbdbd;\n  border-color: #e0e0e0;\n  cursor: not-allowed;\n}\n@media (hover: none) and (pointer: coarse) {\n  .chat-room[_ngcontent-%COMP%], .chat-room__messages[_ngcontent-%COMP%], .msg-row[_ngcontent-%COMP%], .msg-bubble[_ngcontent-%COMP%], .msg-bubble__content[_ngcontent-%COMP%], .msg-bubble__text[_ngcontent-%COMP%], .msg-hover-actions[_ngcontent-%COMP%], .msg-reactions[_ngcontent-%COMP%], .msg-avatar[_ngcontent-%COMP%], .date-divider[_ngcontent-%COMP%], .system-msg[_ngcontent-%COMP%], .msg-reply-preview[_ngcontent-%COMP%], .msg-meta[_ngcontent-%COMP%], .msg-time[_ngcontent-%COMP%], .chat-list[_ngcontent-%COMP%], .room-item[_ngcontent-%COMP%] {\n    -webkit-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .chat-room__input[_ngcontent-%COMP%], .chat-room__input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .chat-room__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea.msg-input[_ngcontent-%COMP%], textarea.msg-input--edit[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], .room-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .message-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .chat-list__search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%], .chat-list__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    -webkit-user-select: text !important;\n    user-select: text !important;\n    -webkit-touch-callout: default !important;\n    pointer-events: auto !important;\n    touch-action: auto !important;\n  }\n}\n.msg-bubble[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .msg-bubble__text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0b57d0;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n  word-break: break-all;\n}\n.msg-bubble[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .msg-bubble__text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0842a0;\n}\n.msg-bubble[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .msg-bubble__text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #6f3ec1;\n}\n@media (max-width: 767px) {\n  .modal-overlay[_ngcontent-%COMP%], .modal-backdrop[_ngcontent-%COMP%] {\n    padding: 8px !important;\n    align-items: flex-end !important;\n  }\n  @supports (height: 100dvh) {\n    .modal-overlay[_ngcontent-%COMP%], .modal-backdrop[_ngcontent-%COMP%] {\n      padding-top: 8px;\n    }\n  }\n  .modal[_ngcontent-%COMP%], .modal--md[_ngcontent-%COMP%], .modal--lg[_ngcontent-%COMP%], .modal--task-create[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100vw !important;\n    max-height: calc(100dvh - 16px - var(--kb-h, 0px)) !important;\n    max-height: calc(100svh - 16px - var(--kb-h, 0px)) !important;\n    margin-bottom: env(safe-area-inset-bottom, 0px);\n    border-radius: 16px 16px 0 0;\n    display: flex !important;\n    flex-direction: column !important;\n    overflow: hidden !important;\n  }\n  .modal__header[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important;\n  }\n  .modal__body[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important;\n    min-height: 0 !important;\n    overflow-y: auto !important;\n    overflow-x: hidden !important;\n    -webkit-overflow-scrolling: touch !important;\n    overscroll-behavior: contain !important;\n    padding: 12px 14px !important;\n    padding-bottom: calc(16px + var(--kb-h, 0px) + env(safe-area-inset-bottom, 0px)) !important;\n  }\n  .modal__footer[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important;\n    padding: 10px 14px !important;\n    padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px)) !important;\n  }\n  .modal__body[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .modal__body[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    min-width: 0;\n  }\n  .modal__body[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n  .modal__body[_ngcontent-%COMP%]   textarea.form-input[_ngcontent-%COMP%] {\n    min-height: 60px !important;\n    max-height: 30vh;\n  }\n}\nbody.keyboard-open[_ngcontent-%COMP%] {\n}\nbody.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%], body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input.chat-room__input--hidden[_ngcontent-%COMP%] {\n  transform: none !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n  pointer-events: auto !important;\n  display: flex !important;\n}\nbody.keyboard-open[_ngcontent-%COMP%]   .header.header--hidden[_ngcontent-%COMP%], body.keyboard-open[_ngcontent-%COMP%]   .chat-room.chat-room--scroll-collapsed[_ngcontent-%COMP%]   .chat-room__header[_ngcontent-%COMP%] {\n  transform: none !important;\n  opacity: 1 !important;\n  pointer-events: auto !important;\n}\nbody.keyboard-open[_ngcontent-%COMP%]   .chat-room__messages[_ngcontent-%COMP%] {\n  padding-bottom: calc(80px + env(safe-area-inset-bottom, 0) + var(--kb-h, 0px)) !important;\n}\nbody.keyboard-open[_ngcontent-%COMP%]   .chat-room__messages[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  scroll-margin-bottom: calc(120px + var(--kb-h, 0px));\n}\nbody.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  scroll-margin-bottom: calc(20px + var(--kb-h, 0px));\n}\n@supports (-webkit-touch-callout: none) {\n  body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n    font-size: 16px !important;\n  }\n}\n@media (max-width: 767px) {\n  .chat-list.chat-list--scroll-collapsed[_ngcontent-%COMP%]   .chat-list__filters[_ngcontent-%COMP%], .chat-list.chat-list--scroll-collapsed[_ngcontent-%COMP%]   .chat-list__search[_ngcontent-%COMP%] {\n    max-height: none !important;\n    padding-top: 8px !important;\n    padding-bottom: 8px !important;\n    opacity: 1 !important;\n    overflow: visible !important;\n    pointer-events: auto !important;\n  }\n}\n.msg-reactions[_ngcontent-%COMP%] {\n  margin-top: -2px !important;\n  gap: 4px !important;\n}\n.member-add-btn[_ngcontent-%COMP%], button.add-member[_ngcontent-%COMP%], [data-action=add-member][_ngcontent-%COMP%] {\n  min-height: 44px !important;\n  min-width: 44px !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  cursor: pointer !important;\n  pointer-events: auto !important;\n  touch-action: manipulation !important;\n  position: relative !important;\n  z-index: 2 !important;\n}\n.media-thumb[_ngcontent-%COMP%], .media-grid__item[_ngcontent-%COMP%], [data-testid=media-thumbnail][_ngcontent-%COMP%] {\n  cursor: pointer !important;\n  pointer-events: auto !important;\n  touch-action: manipulation !important;\n  user-select: none;\n  -webkit-user-select: none;\n  position: relative;\n  z-index: 1;\n}\n.media-thumb[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .media-grid__item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], [data-testid=media-thumbnail][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.media-thumb[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], .media-thumb[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .media-grid__item[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], .media-grid__item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], [data-testid=media-thumbnail][_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], [data-testid=media-thumbnail][_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n/*# sourceMappingURL=chat-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatPageComponent, { className: "ChatPageComponent", filePath: "src\\app\\features\\chat\\pages\\chat-page\\chat-page.component.ts", lineNumber: 183 });
})();
export {
  ChatPageComponent
};
//# sourceMappingURL=chunk-E7NVHKKO.js.map
