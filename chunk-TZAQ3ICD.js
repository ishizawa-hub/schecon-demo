import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-VOAOX4DE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MPKYFQD7.js";
import {
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-3YYMYGX4.js";

// src/app/features/settings/components/settings-tab-nav/settings-tab-nav.component.ts
function SettingsTabNavComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "mat-icon", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", tab_r1.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r1.label);
  }
}
var SettingsTabNavComponent = class _SettingsTabNavComponent {
  constructor() {
    this.tabs = [
      { label: "\u30DE\u30A4\u30DA\u30FC\u30B8", path: "/settings/profile", icon: "person" },
      { label: "\u57FA\u672C\u8A2D\u5B9A", path: "/settings/settings", icon: "settings" },
      { label: "\u9023\u643A\u30B5\u30FC\u30D3\u30B9", path: "/settings/service", icon: "extension" }
    ];
  }
  static {
    this.\u0275fac = function SettingsTabNavComponent_Factory(t) {
      return new (t || _SettingsTabNavComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsTabNavComponent, selectors: [["app-settings-tab-nav"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "settings-tab-nav"], ["routerLinkActive", "active", "class", "tab-item", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "tab-item", 3, "routerLink"], [1, "tab-icon"], [1, "tab-label"]], template: function SettingsTabNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0);
        \u0275\u0275template(1, SettingsTabNavComponent_a_1_Template, 5, 3, "a", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.tabs);
      }
    }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink, RouterLinkActive, MatIconModule, MatIcon], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  position: sticky;\n  top: 70px;\n  z-index: 40;\n  background: transparent;\n  padding-top: 8px;\n  margin-top: -8px;\n  margin-bottom: 16px;\n}\n.settings-tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  margin-bottom: 8px;\n  overflow: hidden;\n  -webkit-backdrop-filter: saturate(1.2);\n  backdrop-filter: saturate(1.2);\n}\n.tab-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px 16px;\n  text-decoration: none;\n  color: #9e9e9e;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  border-bottom: 3px solid transparent;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n}\n.tab-item[_ngcontent-%COMP%]:hover {\n  color: #81766e;\n  background: rgba(255, 152, 0, 0.04);\n}\n.tab-item.active[_ngcontent-%COMP%] {\n  color: #ef6c00;\n  border-bottom-color: #ff9800;\n  background: rgba(255, 152, 0, 0.06);\n}\n.tab-item.active[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: inherit;\n}\n.tab-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    top: 40px;\n    padding-top: 6px;\n    margin-top: -6px;\n    margin-bottom: 12px;\n  }\n  .settings-tab-nav[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    margin-bottom: 6px;\n  }\n  .tab-item[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n    font-size: 13px;\n    gap: 4px;\n    flex-direction: column;\n  }\n  .tab-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n}\n/*# sourceMappingURL=settings-tab-nav.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsTabNavComponent, { className: "SettingsTabNavComponent", filePath: "src\\app\\features\\settings\\components\\settings-tab-nav\\settings-tab-nav.component.ts", lineNumber: 14 });
})();

export {
  SettingsTabNavComponent
};
//# sourceMappingURL=chunk-TZAQ3ICD.js.map
