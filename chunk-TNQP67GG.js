import {
  AppealCreateComponent,
  EventCreateComponent,
  RecruitmentCreateComponent,
  ThreadCreateComponent
} from "./chunk-WAEBYP66.js";
import "./chunk-XACQWZ45.js";
import "./chunk-NWSZROQH.js";
import "./chunk-QLKTM4SV.js";
import "./chunk-GSEWMOGN.js";
import "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
import "./chunk-YF2NDTP4.js";
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
  Location,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-3YYMYGX4.js";

// src/app/features/community/pages/community-sub-create-page/community-sub-create-page.component.ts
function CommunitySubCreatePageComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-recruitment-create", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("communityIdInput", ctx_r0.communityId);
  }
}
function CommunitySubCreatePageComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-event-create", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("communityIdInput", ctx_r0.communityId);
  }
}
function CommunitySubCreatePageComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-thread-create", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("communityIdInput", ctx_r0.communityId);
  }
}
function CommunitySubCreatePageComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-appeal-create", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("communityIdInput", ctx_r0.communityId);
  }
}
function CommunitySubCreatePageComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "construction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u3053\u306E\u30DA\u30FC\u30B8\u306F\u73FE\u5728\u6E96\u5099\u4E2D\u3067\u3059\u3002");
    \u0275\u0275element(5, "br");
    \u0275\u0275text(6, "\u4E00\u89A7\u753B\u9762\u306E\u30E2\u30FC\u30C0\u30EB\u304B\u3089\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 9);
    \u0275\u0275listener("click", function CommunitySubCreatePageComponent_div_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onBack());
    });
    \u0275\u0275text(8, "\u623B\u308B");
    \u0275\u0275elementEnd()();
  }
}
var SUB_TYPE_LABELS = {
  recruitment: "\u52DF\u96C6\u3092\u4F5C\u6210",
  event: "\u30A4\u30D9\u30F3\u30C8\u3092\u4F5C\u6210",
  thread: "\u30B9\u30EC\u30C3\u30C9\u3092\u4F5C\u6210",
  appeal: "\u30A2\u30D4\u30FC\u30EB\u3092\u4F5C\u6210",
  news: "\u30CB\u30E5\u30FC\u30B9\u3092\u4F5C\u6210"
};
var CommunitySubCreatePageComponent = class _CommunitySubCreatePageComponent {
  constructor(route, router, location) {
    this.route = route;
    this.router = router;
    this.location = location;
    this.communityId = "";
    this.subType = "recruitment";
    this.title = "";
    this.supportedSubTypes = /* @__PURE__ */ new Set(["recruitment", "event", "thread", "appeal"]);
  }
  ngOnInit() {
    this.communityId = this.route.snapshot.paramMap.get("id") || "";
    const sub = this.route.snapshot.paramMap.get("subType") || "recruitment";
    this.subType = sub;
    this.title = SUB_TYPE_LABELS[sub] || "\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u4F5C\u6210";
  }
  onBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(["/community", this.communityId]);
    }
  }
  isSupported() {
    return this.supportedSubTypes.has(this.subType);
  }
  static {
    this.\u0275fac = function CommunitySubCreatePageComponent_Factory(t) {
      return new (t || _CommunitySubCreatePageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Location));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunitySubCreatePageComponent, selectors: [["app-community-sub-create-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [[1, "community-sub-create-page"], [1, "community-sub-create-page__header"], ["aria-label", "\u623B\u308B", 1, "community-sub-create-page__back", 3, "click"], [1, "community-sub-create-page__title"], [1, "community-sub-create-page__body"], [4, "ngIf"], ["class", "community-sub-create-page__placeholder", 4, "ngIf"], [3, "communityIdInput"], [1, "community-sub-create-page__placeholder"], [1, "community-sub-create-page__back-btn", 3, "click"]], template: function CommunitySubCreatePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
        \u0275\u0275listener("click", function CommunitySubCreatePageComponent_Template_button_click_2_listener() {
          return ctx.onBack();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "h2", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275template(8, CommunitySubCreatePageComponent_ng_container_8_Template, 2, 1, "ng-container", 5)(9, CommunitySubCreatePageComponent_ng_container_9_Template, 2, 1, "ng-container", 5)(10, CommunitySubCreatePageComponent_ng_container_10_Template, 2, 1, "ng-container", 5)(11, CommunitySubCreatePageComponent_ng_container_11_Template, 2, 1, "ng-container", 5)(12, CommunitySubCreatePageComponent_div_12_Template, 9, 0, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.subType === "recruitment");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subType === "event");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subType === "thread");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subType === "appeal");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isSupported());
      }
    }, dependencies: [CommonModule, NgIf, MatIconModule, MatIcon, RecruitmentCreateComponent, EventCreateComponent, ThreadCreateComponent, AppealCreateComponent], styles: ['@charset "UTF-8";\n\n\n\n.community-sub-create-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100dvh;\n  min-height: 100svh;\n  min-height: 100vh;\n  background: #fafafa;\n}\n.community-sub-create-page__header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 16px;\n  background: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.community-sub-create-page__back[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  color: #ff9800;\n  border-radius: 50%;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.community-sub-create-page__back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.1);\n}\n.community-sub-create-page__back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.community-sub-create-page__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #212121;\n  margin: 0;\n}\n.community-sub-create-page__body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.community-sub-create-page__placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 60px 20px;\n  text-align: center;\n  color: #555;\n}\n.community-sub-create-page__placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #ff9800;\n}\n.community-sub-create-page__back-btn[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.community-sub-create-page__back-btn[_ngcontent-%COMP%]:hover {\n  background: #ef6c00;\n}\n/*# sourceMappingURL=community-sub-create-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunitySubCreatePageComponent, { className: "CommunitySubCreatePageComponent", filePath: "src\\app\\features\\community\\pages\\community-sub-create-page\\community-sub-create-page.component.ts", lineNumber: 40 });
})();
export {
  CommunitySubCreatePageComponent
};
//# sourceMappingURL=chunk-TNQP67GG.js.map
