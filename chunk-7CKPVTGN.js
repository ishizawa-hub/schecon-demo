import {
  SettingsTabNavComponent
} from "./chunk-TZAQ3ICD.js";
import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-YF2NDTP4.js";
import "./chunk-VOAOX4DE.js";
import {
  DomSanitizer,
  MatIcon,
  MatIconModule,
  Title
} from "./chunk-MPKYFQD7.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3YYMYGX4.js";

// src/app/features/settings/pages/service-page/service-page.component.ts
function ServicePageComponent_div_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(service_r1.connectedInfo);
  }
}
function ServicePageComponent_div_6_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r1.note);
  }
}
function ServicePageComponent_div_6_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ServicePageComponent_div_6_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const service_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onConfigureClick(service_r1));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", service_r1.buttonLabel, " ");
  }
}
function ServicePageComponent_div_6_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275listener("click", function ServicePageComponent_div_6_div_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleService(i_r5));
    });
    \u0275\u0275element(4, "span", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.toggleLabel);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", service_r1.connected);
    \u0275\u0275attribute("aria-checked", service_r1.connected);
  }
}
function ServicePageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "h3", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275element(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ServicePageComponent_div_6_div_9_Template, 5, 1, "div", 12)(10, ServicePageComponent_div_6_p_10_Template, 2, 1, "p", 13);
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275template(12, ServicePageComponent_div_6_button_12_Template, 4, 1, "button", 15)(13, ServicePageComponent_div_6_div_13_Template, 5, 4, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", service_r1.logoSvg, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("connected", service_r1.connected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", service_r1.connected ? "\u63A5\u7D9A\u6E08\u307F" : "\u672A\u63A5\u7D9A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r1.connected && service_r1.connectedInfo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r1.note);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", service_r1.buttonLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r1.toggleLabel);
  }
}
function ServicePageComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function ServicePageComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeZoomDialog());
    });
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275listener("click", function ServicePageComponent_div_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 26)(3, "h2");
    \u0275\u0275text(4, "Zoom \u9023\u643A\u306E\u8A2D\u5B9A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function ServicePageComponent_div_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeZoomDialog());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 28)(9, "div", 29)(10, "label", 30);
    \u0275\u0275text(11, "Zoom PMI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ServicePageComponent_div_7_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.zoomPmi, $event) || (ctx_r2.zoomPmi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 29)(14, "label", 30);
    \u0275\u0275text(15, "\u30D1\u30B9\u30B3\u30FC\u30C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ServicePageComponent_div_7_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.zoomPasscode, $event) || (ctx_r2.zoomPasscode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 33)(18, "div", 34)(19, "div", 35)(20, "mat-icon");
    \u0275\u0275text(21, "play_circle_filled");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p", 36);
    \u0275\u0275text(23, "\u30D1\u30FC\u30BD\u30CA\u30EB\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0ID & \u30D1\u30B9\u30B3\u30FC\u30C9");
    \u0275\u0275element(24, "br");
    \u0275\u0275text(25, "\u78BA\u8A8D\u65B9\u6CD5(PC&\u30B9\u30DE\u30DB)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 37);
    \u0275\u0275listener("click", function ServicePageComponent_div_7_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveZoomSettings());
    });
    \u0275\u0275text(27, "OK");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.zoomPmi);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.zoomPasscode);
  }
}
var ServicePageComponent = class _ServicePageComponent {
  static {
    this.STORAGE_KEY = "schecon.services.v1";
  }
  constructor(titleService, sanitizer, notification) {
    this.titleService = titleService;
    this.sanitizer = sanitizer;
    this.notification = notification;
    this.services = [];
    this.showZoomDialog = false;
    this.zoomPmi = "3544768229";
    this.zoomPasscode = "";
  }
  ngOnInit() {
    this.titleService.setTitle('\u9023\u643A\u30B5\u30FC\u30D3\u30B9 | \u65E5\u7A0B\u8ABF\u6574\u30C4\u30FC\u30EB"\u30B9\u30B1\u30B3\u30F3"');
    this.services = [
      {
        name: "Zoom",
        logoSvg: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 159"><title>Zoom</title><path d="M485,432.5H539A52.47,52.47,0,0,1,591.5,485V539A52.47,52.47,0,0,1,539,591.5H485A52.47,52.47,0,0,1,432.5,539V485A52.47,52.47,0,0,1,485,432.5Z" transform="translate(-432.5 -432.5)" fill="#2D8CFF"/><path d="M539.74,526.56l8.18,6.81c2,1.67,3,2.51,3.81,2.7a3.61,3.61,0,0,0,4.11-1.93c.36-.75.36-2,.36-4.66v-35c0-2.61,0-3.91-.36-4.66a3.61,3.61,0,0,0-4.11-1.93c-.81.2-1.81,1-3.81,2.7l-8.18,6.81a20.66,20.66,0,0,0-2.54,2.3,9.42,9.42,0,0,0-2.08,4.44,20.45,20.45,0,0,0-.14,3.42v8.82a20.45,20.45,0,0,0,.14,3.42,9.42,9.42,0,0,0,2.08,4.44A20.6,20.6,0,0,0,539.74,526.56Z" transform="translate(-432.5 -432.5)" fill="#fff"/><path d="M467.8,496.61c0-3.27,0-4.91.64-6.16a5.87,5.87,0,0,1,2.56-2.56c1.25-.64,2.89-.64,6.16-.64H507c8.57,0,12.86,0,16.13,1.67a15.35,15.35,0,0,1,6.69,6.69c1.67,3.27,1.67,7.56,1.67,16.13v3.74c0,3.27,0,4.91-.64,6.16a5.87,5.87,0,0,1-2.56,2.56c-1.25.64-2.89.64-6.16.64h-30c-8.57,0-12.86,0-16.13-1.67a15.35,15.35,0,0,1-6.69-6.69c-1.67-3.27-1.67-7.56-1.67-16.13Z" transform="translate(-432.5 -432.5)" fill="#fff"/></svg>`),
        description: "\u5FC5\u8981\u306A\u9805\u76EE\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\u958B\u50AC\u5834\u6240\u3068\u3057\u3066 Zoom \u3092\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059",
        connected: true,
        toggleLabel: "",
        connectedInfo: "PMI: 3544768229",
        buttonLabel: "Zoom\u9023\u643A\u306E\u8A2D\u5B9A"
      },
      {
        name: "Slack",
        logoSvg: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="70 70 130 130"><title>Slack</title><g><g><path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"/><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"/></g><g><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"/><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"/></g><g><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"/><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"/></g><g><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"/><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"/></g></g></svg>`),
        description: "Slack \u306B\u901A\u77E5\u3092\u9001\u308B\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059",
        connected: false,
        toggleLabel: "Slack\u3068\u9023\u643A"
      },
      {
        name: "Chatwork",
        logoSvg: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.08 170.08"><title>Chatwork</title><path fill="#13202f" d="M133.87,10.08a34.44,34.44,0,0,0-58.77,23V65.75a3.08,3.08,0,0,0,3.08,3.08H108c10.48,0,18.77-2.94,25.87-10A34.49,34.49,0,0,0,133.87,10.08Z"/><path fill="#f03748" d="M10.08,36.34a34.44,34.44,0,0,0,23,58.77H65.75A3.08,3.08,0,0,0,68.83,92V62.21c0-10.48-2.94-18.77-10-25.87A34.49,34.49,0,0,0,10.08,36.34Z"/><path fill="#f03748" d="M36.33,160A34.44,34.44,0,0,0,95.1,137V104.33A3.08,3.08,0,0,0,92,101.25H62.2c-10.48,0-18.76,2.94-25.87,10A34.49,34.49,0,0,0,36.33,160Z"/><path fill="#f03748" d="M160,133.76A34.42,34.42,0,0,0,137,75H104.32a3.07,3.07,0,0,0-3.07,3.07v29.82c0,10.48,2.93,18.77,10,25.87A34.49,34.49,0,0,0,160,133.76Z"/></svg>`),
        description: "Chatwork \u306B\u901A\u77E5\u3092\u9001\u308B\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059",
        connected: false,
        toggleLabel: "Chatwork\u3068\u9023\u643A"
      },
      {
        name: "blastmail",
        logoSvg: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><title>blastmail</title><defs><style>.bm1{fill:#4c4a4a;}.bm2{fill:#c12620;}</style></defs><path class="bm1" d="M25.13,78.08A24.15,24.15,0,0,1,1,53.95h8.51a15.62,15.62,0,0,0,31.24,0h8.52a24.16,24.16,0,0,1-24.14,24.13z"/><path class="bm2" d="m64.88,29.82a24.15,24.15,0,0,0-19.88,10.47,24.06,24.06,0,0,0-35.49-4.7v-21.39H1v39.75h8.51a15.62,15.62,0,0,1,31.24,0h8.52a15.62,15.62,0,1,1,31.23,0v19.87H89v-19.87a24.16,24.16,0,0,0-24.12-24.13z"/></svg>`),
        description: "\u9023\u643A\u3092\u8A2D\u5B9A\u3057\u305F\u4E88\u5B9A\u8ABF\u6574\u306EURL\u304B\u3089\u4E88\u5B9A\u8ABF\u6574\u3092\u3057\u305F\u3001\u53C2\u52A0\u8005\u306E\u6C0F\u540D\u3084\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306A\u3069\u306E\u60C5\u5831\u3092\u3001\u81EA\u52D5\u3067 blastmail \u306B\u767B\u9332\u3057\u307E\u3059",
        connected: false,
        toggleLabel: "blastmail\u3068\u9023\u643A",
        note: "\u203B blastmail \u306EID\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u3001API\u5229\u7528\u30AD\u30FC\u304C\u5FC5\u8981\u3067\u3059"
      },
      {
        name: "Salesforce",
        logoSvg: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273 191"><title>Salesforce</title><path d="m113 21.3c8.78-9.14 21-14.8 34.5-14.8 18 0 33.6 10 42 24.9a58 58 0 0 1 23.7-5.05c32.4 0 58.7 26.5 58.7 59.2s-26.3 59.2-58.7 59.2c-3.96 0-7.82-0.398-11.6-1.15-7.35 13.1-21.4 22-37.4 22a42.7 42.7 0 0 1-18.8-4.32c-7.45 17.5-24.8 29.8-45 29.8-21.1 0-39-13.3-45.9-32a45.1 45.1 0 0 1-9.34 0.972c-25.1 0-45.4-20.6-45.4-45.9 0-17 9.14-31.8 22.7-39.8a52.6 52.6 0 0 1-4.35-21c0-29.2 23.7-52.8 52.9-52.8 17.1 0 32.4 8.15 42 20.8" fill="#00A1E0"/></svg>`),
        description: "\u9023\u643A\u3092\u8A2D\u5B9A\u3057\u305F\u4E88\u5B9A\u8ABF\u6574\u306EURL\u304B\u3089\u4E88\u5B9A\u8ABF\u6574\u3092\u3057\u305F\u3001\u53C2\u52A0\u8005\u306E\u6C0F\u540D\u3084\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306A\u3069\u306E\u60C5\u5831\u3092\u3001\u81EA\u52D5\u3067 salesforce \u306B\u767B\u9332\u3057\u307E\u3059",
        connected: false,
        toggleLabel: "Salesforce\u3068\u9023\u643A"
      }
    ];
    this.restoreServicesFromStorage();
  }
  /* 修正 No.38 (2026-04-25): localStorage から services の connected / zoomPmi を復元 */
  restoreServicesFromStorage() {
    try {
      const raw = typeof localStorage !== "undefined" ? localStorage.getItem(_ServicePageComponent.STORAGE_KEY) : null;
      if (!raw)
        return;
      const data = JSON.parse(raw);
      if (!data || typeof data !== "object")
        return;
      if (data.connected && typeof data.connected === "object") {
        this.services.forEach((s) => {
          if (typeof data.connected[s.name] === "boolean") {
            s.connected = data.connected[s.name];
          }
        });
      }
      if (typeof data.zoomPmi === "string" && data.zoomPmi) {
        this.zoomPmi = data.zoomPmi;
        const zoomService = this.services.find((s) => s.name === "Zoom");
        if (zoomService)
          zoomService.connectedInfo = `PMI: ${this.zoomPmi}`;
      }
    } catch (err) {
      console.warn("[ServicePage] failed to restore services:", err);
    }
  }
  /* 修正 No.38 (2026-04-25): 連携状態を localStorage に永続化 */
  persistServices() {
    try {
      const connected = {};
      this.services.forEach((s) => {
        connected[s.name] = !!s.connected;
      });
      const data = { connected, zoomPmi: this.zoomPmi };
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(_ServicePageComponent.STORAGE_KEY, JSON.stringify(data));
      }
    } catch (err) {
      console.warn("[ServicePage] failed to persist services:", err);
    }
  }
  toggleService(index) {
    this.services[index].connected = !this.services[index].connected;
    const service = this.services[index];
    if (service.connected) {
      this.notification.success(`${service.name}\u3068\u9023\u643A\u3057\u307E\u3057\u305F`);
    } else {
      this.notification.warn(`${service.name}\u306E\u9023\u643A\u3092\u89E3\u9664\u3057\u307E\u3057\u305F`);
    }
    this.persistServices();
  }
  openZoomDialog() {
    this.showZoomDialog = true;
  }
  closeZoomDialog() {
    this.showZoomDialog = false;
  }
  saveZoomSettings() {
    if (!this.zoomPmi || this.zoomPmi.trim() === "") {
      this.notification.error("PMI ID\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    const zoomService = this.services.find((s) => s.name === "Zoom");
    if (zoomService) {
      zoomService.connectedInfo = `PMI: ${this.zoomPmi}`;
    }
    this.showZoomDialog = false;
    this.notification.success("Zoom\u8A2D\u5B9A\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F");
    this.persistServices();
  }
  onConfigureClick(service) {
    if (service.name === "Zoom") {
      this.openZoomDialog();
    }
  }
  static {
    this.\u0275fac = function ServicePageComponent_Factory(t) {
      return new (t || _ServicePageComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicePageComponent, selectors: [["app-service-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "service-page"], [1, "service-container"], [1, "page-title"], [1, "service-grid"], ["class", "service-card", 4, "ngFor", "ngForOf"], ["class", "zoom-dialog-overlay", 3, "click", 4, "ngIf"], [1, "service-card"], [1, "service-logo-area", 3, "innerHTML"], [1, "service-name"], [1, "status-badge"], [1, "status-dot"], [1, "service-description"], ["class", "connected-info", 4, "ngIf"], ["class", "service-note", 4, "ngIf"], [1, "service-actions"], ["class", "btn-configure", 3, "click", 4, "ngIf"], ["class", "toggle-row", 4, "ngIf"], [1, "connected-info"], [1, "service-note"], [1, "btn-configure", 3, "click"], [1, "toggle-row"], [1, "toggle-label"], ["role", "switch", 1, "toggle-switch", 3, "click"], [1, "toggle-knob"], [1, "zoom-dialog-overlay", 3, "click"], [1, "zoom-dialog", 3, "click"], [1, "zoom-dialog-header"], [1, "zoom-dialog-close", 3, "click"], [1, "zoom-dialog-body"], [1, "zoom-form-group"], [1, "zoom-form-label"], ["type", "text", "placeholder", "Zoom PMI\uFF0810\u6841\u306E\u6570\u5B57\uFF09\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", 1, "zoom-form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Zoom \u30D1\u30B9\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", 1, "zoom-form-input", 3, "ngModelChange", "ngModel"], [1, "zoom-help-video"], [1, "zoom-help-thumbnail"], [1, "zoom-help-icon"], [1, "zoom-help-text"], [1, "zoom-dialog-ok", 3, "click"]], template: function ServicePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-settings-tab-nav");
        \u0275\u0275elementStart(3, "h1", 2);
        \u0275\u0275text(4, "\u5916\u90E8\u30B5\u30FC\u30D3\u30B9\u3068\u306E\u9023\u643A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275template(6, ServicePageComponent_div_6_Template, 14, 10, "div", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ServicePageComponent_div_7_Template, 28, 2, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.services);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showZoomDialog);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, SettingsTabNavComponent], styles: ['\n\n.service-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100dvh;\n  background: #f0f0f4;\n  padding: 32px 16px 64px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 15px;\n  color: #81766e;\n  -webkit-font-smoothing: antialiased;\n}\n.service-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 0 24px;\n  box-sizing: border-box;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0 0 24px;\n  color: #81766e;\n}\n.page-title[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 4px;\n  height: 22px;\n  background: #ff9800;\n  border-radius: 2px;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.service-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 28px 20px 24px;\n  border: 1px solid #e0e0e0;\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  border-color: rgba(255, 152, 0, 0.25);\n}\n.service-logo-area[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  position: relative;\n  overflow: hidden;\n  background: #fafafa;\n  border: 1px solid #e0e0e0;\n}\n.service-logo-area[_ngcontent-%COMP%]     svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.service-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 8px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n  background: rgba(158, 158, 158, 0.1);\n  color: #9e9e9e;\n  margin-bottom: 10px;\n}\n.status-badge.connected[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.1);\n  color: #4caf50;\n}\n.status-badge.connected[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #4caf50;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #9e9e9e;\n}\n.service-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #757575;\n  margin: 0 0 12px;\n  line-height: 1.6;\n}\n.connected-info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  background: rgba(76, 175, 80, 0.08);\n  border-radius: 8px;\n  font-size: 12px;\n  color: #4caf50;\n  margin-bottom: 12px;\n}\n.connected-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.service-note[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  margin: 0 0 12px;\n  line-height: 1.5;\n}\n.service-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  width: 100%;\n}\n.btn-configure[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 8px 16px;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  color: #757575;\n  font-size: 13px;\n  font-weight: 500;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n  width: 100%;\n}\n.btn-configure[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-configure[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  color: #ff9800;\n  background: rgba(255, 152, 0, 0.04);\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #757575;\n  font-weight: 500;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  background: #e0e0e0;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  padding: 0;\n  flex-shrink: 0;\n}\n.toggle-switch.active[_ngcontent-%COMP%] {\n  background: #ff9800;\n}\n.toggle-switch.active[_ngcontent-%COMP%]   .toggle-knob[_ngcontent-%COMP%] {\n  transform: translateX(20px);\n}\n.toggle-switch[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.toggle-knob[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n  transition: transform 0.2s ease;\n}\n.zoom-dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.zoom-dialog[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 480px;\n  max-width: 90vw;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.zoom-dialog-header[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.zoom-dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.zoom-dialog-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background 0.15s;\n}\n.zoom-dialog-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.zoom-dialog-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.zoom-dialog-body[_ngcontent-%COMP%] {\n  padding: 24px 20px 16px;\n}\n.zoom-form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.zoom-form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #757575;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n.zoom-form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  color: #81766e;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n  outline: none;\n}\n.zoom-form-input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.15);\n}\n.zoom-form-input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.zoom-help-video[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.zoom-help-thumbnail[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8e8e8 0%,\n      #d0d0d0 100%);\n  border-radius: 8px;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.zoom-help-thumbnail[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.zoom-help-icon[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.zoom-help-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.zoom-help-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #ff9800;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.zoom-dialog-ok[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 14px;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  font-size: 16px;\n  font-weight: 600;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.zoom-dialog-ok[_ngcontent-%COMP%]:hover {\n  background: #ef6c00;\n}\n@media (max-width: 768px) {\n  .service-page[_ngcontent-%COMP%] {\n    padding: 16px 0 48px;\n  }\n  .service-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 12px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .service-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .service-card[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n    border-radius: 10px;\n  }\n  .service-logo-area[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n    border-radius: 12px;\n  }\n  .service-logo[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n}\n/*# sourceMappingURL=service-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicePageComponent, { className: "ServicePageComponent", filePath: "src\\app\\features\\settings\\pages\\service-page\\service-page.component.ts", lineNumber: 28 });
})();
export {
  ServicePageComponent
};
//# sourceMappingURL=chunk-7CKPVTGN.js.map
