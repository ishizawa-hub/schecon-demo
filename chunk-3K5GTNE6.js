import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-NWSZROQH.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵresolveDocument,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3YYMYGX4.js";

// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
  }
  get title() {
    return this.data?.title || "\u78BA\u8A8D";
  }
  get message() {
    return this.data?.message || "";
  }
  get confirmText() {
    return this.data?.confirmText || "OK";
  }
  get cancelText() {
    return this.data?.cancelText || "\u30AD\u30E3\u30F3\u30BB\u30EB";
  }
  get danger() {
    return !!this.data?.danger;
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  onEscape() {
    this.onCancel();
  }
  static {
    this.\u0275fac = function ConfirmDialogComponent_Factory(t) {
      return new (t || _ConfirmDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], hostBindings: function ConfirmDialogComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function ConfirmDialogComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 8, consts: [[1, "confirm-dialog"], [1, "confirm-dialog__header"], [1, "confirm-dialog__title"], [1, "confirm-dialog__body"], [1, "confirm-dialog__message"], [1, "confirm-dialog__actions"], ["type", "button", 1, "confirm-dialog__btn", "confirm-dialog__btn--cancel", 3, "click"], ["type", "button", "cdkFocusInitial", "", 1, "confirm-dialog__btn", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "p", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
        \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_8_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 7);
        \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_10_listener() {
          return ctx.onConfirm();
        });
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.message);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.cancelText, " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("confirm-dialog__btn--danger", ctx.danger)("confirm-dialog__btn--primary", !ctx.danger);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.confirmText, " ");
      }
    }, dependencies: [CommonModule], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.confirm-dialog[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  width: min(440px, 92vw);\n  padding: 24px 24px 18px;\n  box-shadow: 0 18px 56px rgba(60, 40, 20, 0.18);\n  animation: _ngcontent-%COMP%_confirm-fade-in 0.18s ease-out;\n  font-family: inherit;\n  color: #3d2f24;\n}\n.confirm-dialog__header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.confirm-dialog__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: #3d2f24;\n  letter-spacing: 0.02em;\n}\n.confirm-dialog__body[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.confirm-dialog__message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.65;\n  color: #5a4a3d;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.confirm-dialog__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.confirm-dialog__btn[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 1px solid transparent;\n  background: transparent;\n  padding: 8px 20px;\n  min-width: 96px;\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 999px;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n  font-family: inherit;\n  line-height: 1.4;\n}\n.confirm-dialog__btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #ff6b1a;\n  outline-offset: 2px;\n}\n.confirm-dialog__btn--cancel[_ngcontent-%COMP%] {\n  background: #fafaf8;\n  color: #81766e;\n  border-color: #e5ddd4;\n}\n.confirm-dialog__btn--cancel[_ngcontent-%COMP%]:hover {\n  background: #f1ece5;\n  color: #3d2f24;\n}\n.confirm-dialog__btn--primary[_ngcontent-%COMP%] {\n  background: #ff6b1a;\n  color: #ffffff;\n  border-color: #ff6b1a;\n  box-shadow: 0 4px 12px rgba(255, 107, 26, 0.25);\n}\n.confirm-dialog__btn--primary[_ngcontent-%COMP%]:hover {\n  background: #e85d0f;\n  border-color: #e85d0f;\n}\n.confirm-dialog__btn--danger[_ngcontent-%COMP%] {\n  background: #e53935;\n  color: #ffffff;\n  border-color: #e53935;\n  box-shadow: 0 4px 12px rgba(229, 57, 53, 0.25);\n}\n.confirm-dialog__btn--danger[_ngcontent-%COMP%]:hover {\n  background: #c62828;\n  border-color: #c62828;\n}\n@keyframes _ngcontent-%COMP%_confirm-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n  .confirm-dialog-panel .mat-mdc-dialog-surface,   .confirm-dialog-panel .mdc-dialog__surface {\n  background: transparent !important;\n  box-shadow: none !important;\n  overflow: visible !important;\n  padding: 0 !important;\n  border-radius: 16px !important;\n}\n  .confirm-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src\\app\\shared\\components\\confirm-dialog\\confirm-dialog.component.ts", lineNumber: 23 });
})();

// src/app/shared/services/confirm-dialog.service.ts
var ConfirmDialogService = class _ConfirmDialogService {
  constructor() {
    this.dialog = inject(MatDialog);
  }
  confirm(options) {
    const data = {
      title: options.title,
      message: options.message,
      confirmText: options.confirmText || (options.danger ? "\u524A\u9664" : "OK"),
      cancelText: options.cancelText || "\u30AD\u30E3\u30F3\u30BB\u30EB",
      danger: options.danger
    };
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data,
      panelClass: "confirm-dialog-panel",
      backdropClass: "confirm-dialog-backdrop",
      width: "auto",
      maxWidth: "92vw",
      autoFocus: true,
      restoreFocus: true,
      disableClose: false
    });
    return ref.afterClosed().toPromise().then((v) => !!v);
  }
  static {
    this.\u0275fac = function ConfirmDialogService_Factory(t) {
      return new (t || _ConfirmDialogService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmDialogService, factory: _ConfirmDialogService.\u0275fac, providedIn: "root" });
  }
};

export {
  ConfirmDialogService
};
//# sourceMappingURL=chunk-3K5GTNE6.js.map
