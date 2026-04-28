import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-VOAOX4DE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MPKYFQD7.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-3YYMYGX4.js";

// src/app/features/scheduling/pages/event-redirect-page/event-redirect-page.component.ts
var EventRedirectPageComponent = class _EventRedirectPageComponent {
  constructor(route, router, notification) {
    this.route = route;
    this.router = router;
    this.notification = notification;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id) {
      this.notification.error("\u30A4\u30D9\u30F3\u30C8ID\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093");
      return;
    }
    this.notification.info("\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u4E2D...");
    this.router.navigate(["/multiple/event", id]);
  }
  static {
    this.\u0275fac = function EventRedirectPageComponent_Factory(t) {
      return new (t || _EventRedirectPageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventRedirectPageComponent, selectors: [["app-event-redirect-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "redirect-container"], [1, "spinner-icon"]], template: function EventRedirectPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-icon", 1);
        \u0275\u0275text(2, "sync");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u4E2D...");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon], styles: ['\n\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  min-height: 100dvh;\n  background: #f7f7fa;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.redirect-container[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #556;\n}\n.spinner-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: #ff9800;\n  animation: _ngcontent-%COMP%_spin 1.2s linear infinite;\n}\np[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 14px;\n  font-weight: 500;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=event-redirect-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventRedirectPageComponent, { className: "EventRedirectPageComponent", filePath: "src\\app\\features\\scheduling\\pages\\event-redirect-page\\event-redirect-page.component.ts", lineNumber: 53 });
})();
export {
  EventRedirectPageComponent
};
//# sourceMappingURL=chunk-6HKOJOCT.js.map
