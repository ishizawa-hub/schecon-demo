import {
  CdkScrollableModule,
  DOWN_ARROW,
  Directionality,
  DomPortalOutlet,
  ENTER,
  ESCAPE,
  FocusKeyManager,
  FocusMonitor,
  LEFT_ARROW,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  Overlay,
  OverlayConfig,
  OverlayModule,
  RIGHT_ARROW,
  SPACE,
  TemplatePortal,
  UP_ARROW,
  animate,
  coerceBooleanProperty,
  hasModifierKey,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  normalizePassiveListenerOptions,
  state,
  style,
  transition,
  trigger
} from "./chunk-MPKYFQD7.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  QueryList,
  Self,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  asapScheduler,
  booleanAttribute,
  delay,
  filter,
  inject,
  merge,
  of,
  setClassMetadata,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵɵInputTransformsFeature,
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
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-3YYMYGX4.js";

// src/app/features/mail/mock/mock-mail-data.ts
var senders = {
  tanaka: { name: "\u7530\u4E2D\u592A\u90CE", email: "tanaka.taro@example.co.jp" },
  sato: { name: "\u4F50\u85E4\u82B1\u5B50", email: "sato.hanako@example.co.jp" },
  yamada: { name: "\u5C71\u7530\u4E00\u90CE", email: "yamada.ichiro@example.co.jp" },
  suzuki: { name: "\u9234\u6728\u5065\u4E8C", email: "suzuki.kenji@example.co.jp" },
  takahashi: { name: "\u9AD8\u6A4B\u7F8E\u54B2", email: "takahashi.misaki@example.co.jp" },
  watanabe: { name: "\u6E21\u8FBA\u76F4\u4EBA", email: "watanabe.naoto@example.co.jp" },
  ito: { name: "\u4F0A\u85E4\u3081\u3050\u307F", email: "ito.megumi@example.co.jp" },
  nakamura: { name: "\u4E2D\u6751\u5927\u8F14", email: "nakamura.daisuke@example.co.jp" },
  kobayashi: { name: "\u5C0F\u6797\u7531\u7F8E\u5B50", email: "kobayashi.yumiko@example.co.jp" },
  kato: { name: "\u52A0\u85E4\u6B63\u7FA9", email: "kato.masayoshi@example.co.jp" },
  schecon: { name: "\u30B9\u30B1\u30B3\u30F3\u901A\u77E5", email: "noreply@schecon.jp" }
};
var me = { name: "\u77F3\u5D0E\u592A\u4E00", email: "ishizaki.taichi@example.co.jp" };
function sig(name, dept) {
  return `
<br><br>
<div style="border-top: 1px solid #ccc; padding-top: 8px; margin-top: 16px; font-size: 12px; color: #666;">
  <p style="margin:2px 0;">${name}</p>
  <p style="margin:2px 0;">${dept}</p>
  <p style="margin:2px 0;">\u682A\u5F0F\u4F1A\u793E\u30B5\u30F3\u30D7\u30EB\u30C6\u30C3\u30AF</p>
  <p style="margin:2px 0;">TEL: 03-1234-5678</p>
</div>`;
}
function scheconSig() {
  return `
<br>
<div style="border-top: 1px solid #ff9800; padding-top: 8px; margin-top: 16px; font-size: 12px; color: #666;">
  <p style="margin:2px 0; color: #ff9800; font-weight: bold;">\u30B9\u30B1\u30B3\u30F3 - \u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u7BA1\u7406\u30B5\u30FC\u30D3\u30B9</p>
  <p style="margin:2px 0;">https://schecon.jp</p>
  <p style="margin:2px 0;">\u3053\u306E\u30E1\u30FC\u30EB\u306F\u81EA\u52D5\u9001\u4FE1\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p>
</div>`;
}
var MOCK_MESSAGES = [
  // ========== ScheCon Notifications (10) ==========
  {
    id: "msg-001",
    from: senders["schecon"],
    to: [me],
    subject: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u4F1A\u8B70\u306E\u62DB\u5F85: \u7B2C4\u56DB\u534A\u671F\u30EC\u30D3\u30E5\u30FC\u4F1A\u8B70",
    body: "\u7530\u4E2D\u592A\u90CE\u3055\u3093\u304B\u3089\u4F1A\u8B70\u306E\u62DB\u5F85\u304C\u5C4A\u304D\u307E\u3057\u305F\u3002\n\n\u4F1A\u8B70\u540D: \u7B2C4\u56DB\u534A\u671F\u30EC\u30D3\u30E5\u30FC\u4F1A\u8B70\n\u65E5\u6642: 2026\u5E743\u670830\u65E5\uFF08\u6708\uFF0914:00\u301C16:00\n\u5834\u6240: \u4F1A\u8B70\u5BA4A\n\n\u53C2\u52A0\u30FB\u4E0D\u53C2\u52A0\u3092\u56DE\u7B54\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px 8px 0 0;">
        <h2 style="margin:0;">\u4F1A\u8B70\u306E\u62DB\u5F85</h2>
      </div>
      <div style="padding: 16px; border: 1px solid #eee; border-top: none;">
        <p><strong>\u7530\u4E2D\u592A\u90CE</strong>\u3055\u3093\u304B\u3089\u4F1A\u8B70\u306E\u62DB\u5F85\u304C\u5C4A\u304D\u307E\u3057\u305F\u3002</p>
        <table style="margin: 16px 0;">
          <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u4F1A\u8B70\u540D</td><td>\u7B2C4\u56DB\u534A\u671F\u30EC\u30D3\u30E5\u30FC\u4F1A\u8B70</td></tr>
          <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u65E5\u6642</td><td>2026\u5E743\u670830\u65E5\uFF08\u6708\uFF0914:00\u301C16:00</td></tr>
          <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u5834\u6240</td><td>\u4F1A\u8B70\u5BA4A</td></tr>
        </table>
        <div style="margin-top: 16px;">
          <a href="#" style="background: #ff9800; color: white; padding: 10px 24px; border-radius: 4px; text-decoration: none; margin-right: 8px;">\u53C2\u52A0\u3059\u308B</a>
          <a href="#" style="background: #eee; color: #333; padding: 10px 24px; border-radius: 4px; text-decoration: none;">\u4E0D\u53C2\u52A0</a>
        </div>
      </div>
      ${scheconSig()}
    </div>`,
    snippet: "\u7530\u4E2D\u592A\u90CE\u3055\u3093\u304B\u3089\u4F1A\u8B70\u306E\u62DB\u5F85\u304C\u5C4A\u304D\u307E\u3057\u305F\u3002\u7B2C4\u56DB\u534A\u671F\u30EC\u30D3\u30E5\u30FC\u4F1A\u8B70...",
    date: /* @__PURE__ */ new Date("2026-03-27T09:30:00"),
    isRead: false,
    isStarred: true,
    isBookmarked: true,
    folderId: "inbox",
    labels: ["label-schecon"],
    attachments: [],
    threadId: "thread-sc-001",
    hasAttachments: false
  },
  {
    id: "msg-002",
    from: senders["schecon"],
    to: [me],
    subject: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u5909\u66F4: \u958B\u767A\u30C1\u30FC\u30E0\u5B9A\u4F8B\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0",
    body: "\u4F50\u85E4\u82B1\u5B50\u3055\u3093\u304C\u4EE5\u4E0B\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px 8px 0 0;">
        <h2 style="margin:0;">\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u5909\u66F4</h2>
      </div>
      <div style="padding: 16px; border: 1px solid #eee; border-top: none;">
        <p><strong>\u4F50\u85E4\u82B1\u5B50</strong>\u3055\u3093\u304C\u4EE5\u4E0B\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002</p>
        <table style="margin: 16px 0;">
          <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u4F1A\u8B70\u540D</td><td>\u958B\u767A\u30C1\u30FC\u30E0\u5B9A\u4F8B\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0</td></tr>
          <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u5909\u66F4\u524D</td><td style="text-decoration: line-through; color: #999;">3\u670828\u65E5\uFF08\u571F\uFF0910:00\u301C11:00</td></tr>
          <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u5909\u66F4\u5F8C</td><td style="color: #e53935; font-weight: bold;">3\u670831\u65E5\uFF08\u706B\uFF0910:00\u301C11:00</td></tr>
        </table>
      </div>
      ${scheconSig()}
    </div>`,
    snippet: "\u4F50\u85E4\u82B1\u5B50\u3055\u3093\u304C\u958B\u767A\u30C1\u30FC\u30E0\u5B9A\u4F8B\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002",
    date: /* @__PURE__ */ new Date("2026-03-27T08:15:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-schecon"],
    attachments: [],
    threadId: "thread-sc-002",
    hasAttachments: false
  },
  {
    id: "msg-003",
    from: senders["schecon"],
    to: [me],
    subject: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u30EA\u30DE\u30A4\u30F3\u30C0\u30FC: \u660E\u65E5\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u9032\u6357\u5831\u544A\u4F1A",
    body: "\u660E\u65E5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px 8px 0 0;">
        <h2 style="margin:0;">\u30EA\u30DE\u30A4\u30F3\u30C0\u30FC</h2>
      </div>
      <div style="padding: 16px; border: 1px solid #eee; border-top: none;">
        <p>\u660E\u65E5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002</p>
        <div style="background: #fff3e0; padding: 12px; border-radius: 4px; border-left: 4px solid #ff9800;">
          <p style="margin: 0; font-weight: bold;">\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u9032\u6357\u5831\u544A\u4F1A</p>
          <p style="margin: 4px 0; color: #666;">2026\u5E743\u670828\u65E5\uFF08\u571F\uFF0915:00\u301C16:30</p>
          <p style="margin: 4px 0; color: #666;">\u30AA\u30F3\u30E9\u30A4\u30F3\uFF08Zoom\uFF09</p>
        </div>
      </div>
      ${scheconSig()}
    </div>`,
    snippet: "\u660E\u65E5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u9032\u6357\u5831\u544A\u4F1A...",
    date: /* @__PURE__ */ new Date("2026-03-26T18:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: true,
    folderId: "inbox",
    labels: ["label-schecon"],
    attachments: [],
    threadId: "thread-sc-003",
    hasAttachments: false
  },
  {
    id: "msg-004",
    from: senders["schecon"],
    to: [me],
    subject: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u51FA\u6B20\u56DE\u7B54: \u65B0\u88FD\u54C1\u4F01\u753B\u30D6\u30EC\u30B9\u30C8",
    body: "\u9AD8\u6A4B\u7F8E\u54B2\u3055\u3093\u304C\u300C\u65B0\u88FD\u54C1\u4F01\u753B\u30D6\u30EC\u30B9\u30C8\u300D\u3078\u306E\u51FA\u5E2D\u3092\u56DE\u7B54\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px 8px 0 0;">
        <h2 style="margin:0;">\u51FA\u6B20\u56DE\u7B54</h2>
      </div>
      <div style="padding: 16px; border: 1px solid #eee; border-top: none;">
        <p><strong>\u9AD8\u6A4B\u7F8E\u54B2</strong>\u3055\u3093\u304C\u300C\u65B0\u88FD\u54C1\u4F01\u753B\u30D6\u30EC\u30B9\u30C8\u300D\u3078\u306E\u51FA\u5E2D\u3092\u56DE\u7B54\u3057\u307E\u3057\u305F\u3002</p>
        <p style="color: #43a047; font-weight: bold;">\u2713 \u53C2\u52A0\u3057\u307E\u3059</p>
        <p style="color: #666;">\u30B3\u30E1\u30F3\u30C8: \u300C\u8CC7\u6599\u3092\u4E8B\u524D\u306B\u5171\u6709\u3044\u305F\u3060\u3051\u308B\u3068\u52A9\u304B\u308A\u307E\u3059\u3002\u300D</p>
      </div>
      ${scheconSig()}
    </div>`,
    snippet: "\u9AD8\u6A4B\u7F8E\u54B2\u3055\u3093\u304C\u300C\u65B0\u88FD\u54C1\u4F01\u753B\u30D6\u30EC\u30B9\u30C8\u300D\u3078\u306E\u51FA\u5E2D\u3092\u56DE\u7B54\u3057\u307E\u3057\u305F\u3002\u53C2\u52A0\u3057\u307E\u3059\u3002",
    date: /* @__PURE__ */ new Date("2026-03-26T14:20:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-schecon"],
    attachments: [],
    threadId: "thread-sc-004",
    hasAttachments: false
  },
  {
    id: "msg-005",
    from: senders["schecon"],
    to: [me],
    subject: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u9031\u6B21\u30B5\u30DE\u30EA\u30FC: 3\u6708\u7B2C4\u9031\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB",
    body: "\u4ECA\u9031\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u30B5\u30DE\u30EA\u30FC\u3067\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px 8px 0 0;">
        <h2 style="margin:0;">\u9031\u6B21\u30B5\u30DE\u30EA\u30FC</h2>
      </div>
      <div style="padding: 16px; border: 1px solid #eee; border-top: none;">
        <p>\u4ECA\u9031\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u30B5\u30DE\u30EA\u30FC\u3067\u3059\u3002</p>
        <p><strong>\u4E88\u5B9A\u6570: 12\u4EF6</strong></p>
        <ul>
          <li>\u6708\u66DC\u65E5: 3\u4EF6</li>
          <li>\u706B\u66DC\u65E5: 2\u4EF6</li>
          <li>\u6C34\u66DC\u65E5: 4\u4EF6</li>
          <li>\u6728\u66DC\u65E5: 2\u4EF6</li>
          <li>\u91D1\u66DC\u65E5: 1\u4EF6</li>
        </ul>
      </div>
      ${scheconSig()}
    </div>`,
    snippet: "\u4ECA\u9031\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u30B5\u30DE\u30EA\u30FC\u3067\u3059\u3002\u4E88\u5B9A\u6570: 12\u4EF6...",
    date: /* @__PURE__ */ new Date("2026-03-23T08:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-schecon"],
    attachments: [],
    threadId: "thread-sc-005",
    hasAttachments: false
  },
  {
    id: "msg-006",
    from: senders["schecon"],
    to: [me],
    subject: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u65B0\u30E1\u30F3\u30D0\u30FC\u8FFD\u52A0: \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha\u30C1\u30FC\u30E0",
    body: "\u4E2D\u6751\u5927\u8F14\u3055\u3093\u304C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha\u30C1\u30FC\u30E0\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px 8px 0 0;">
        <h2 style="margin:0;">\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u8FFD\u52A0</h2>
      </div>
      <div style="padding: 16px; border: 1px solid #eee; border-top: none;">
        <p><strong>\u4E2D\u6751\u5927\u8F14</strong>\u3055\u3093\u304C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha\u30C1\u30FC\u30E0\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002</p>
        <p>\u73FE\u5728\u306E\u30E1\u30F3\u30D0\u30FC: 8\u540D</p>
      </div>
      ${scheconSig()}
    </div>`,
    snippet: "\u4E2D\u6751\u5927\u8F14\u3055\u3093\u304C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha\u30C1\u30FC\u30E0\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002",
    date: /* @__PURE__ */ new Date("2026-03-21T11:30:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-schecon"],
    attachments: [],
    threadId: "thread-sc-006",
    hasAttachments: false
  },
  {
    id: "msg-007",
    from: senders["schecon"],
    to: [me],
    subject: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u4F1A\u8B70\u30AD\u30E3\u30F3\u30BB\u30EB: 3\u670820\u65E5\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8MTG",
    body: "\u5C71\u7530\u4E00\u90CE\u3055\u3093\u304C\u4EE5\u4E0B\u306E\u4F1A\u8B70\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px 8px 0 0;">
        <h2 style="margin:0;">\u4F1A\u8B70\u30AD\u30E3\u30F3\u30BB\u30EB</h2>
      </div>
      <div style="padding: 16px; border: 1px solid #eee; border-top: none;">
        <p><strong>\u5C71\u7530\u4E00\u90CE</strong>\u3055\u3093\u304C\u4EE5\u4E0B\u306E\u4F1A\u8B70\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002</p>
        <div style="background: #ffebee; padding: 12px; border-radius: 4px; border-left: 4px solid #e53935;">
          <p style="margin: 0; font-weight: bold; text-decoration: line-through;">\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8MTG</p>
          <p style="margin: 4px 0; color: #666;">2026\u5E743\u670820\u65E5\uFF08\u91D1\uFF0913:00\u301C14:00</p>
        </div>
        <p style="color: #666;">\u7406\u7531: \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u69D8\u306E\u90FD\u5408\u306B\u3088\u308A\u5EF6\u671F</p>
      </div>
      ${scheconSig()}
    </div>`,
    snippet: "\u5C71\u7530\u4E00\u90CE\u3055\u3093\u304C3\u670820\u65E5\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8MTG\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002",
    date: /* @__PURE__ */ new Date("2026-03-19T16:45:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-schecon"],
    attachments: [],
    threadId: "thread-sc-007",
    hasAttachments: false
  },
  {
    id: "msg-008",
    from: senders["schecon"],
    to: [me],
    subject: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u7A7A\u304D\u6642\u9593\u63D0\u6848: \u30C1\u30FC\u30E0\u30E9\u30F3\u30C1\u5019\u88DC\u65E5",
    body: "\u30C1\u30FC\u30E0\u5168\u54E1\u306E\u7A7A\u304D\u6642\u9593\u304B\u3089\u5019\u88DC\u65E5\u3092\u63D0\u6848\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px 8px 0 0;">
        <h2 style="margin:0;">\u7A7A\u304D\u6642\u9593\u63D0\u6848</h2>
      </div>
      <div style="padding: 16px; border: 1px solid #eee; border-top: none;">
        <p>\u30C1\u30FC\u30E0\u5168\u54E1\u306E\u7A7A\u304D\u6642\u9593\u304B\u3089\u5019\u88DC\u65E5\u3092\u63D0\u6848\u3057\u307E\u3059\u3002</p>
        <div style="margin: 12px 0;">
          <div style="padding: 8px; background: #e8f5e9; border-radius: 4px; margin: 4px 0;">\u25CE 3\u670831\u65E5\uFF08\u706B\uFF0912:00\u301C13:00 - \u5168\u54E1\u53C2\u52A0\u53EF\u80FD</div>
          <div style="padding: 8px; background: #fff3e0; border-radius: 4px; margin: 4px 0;">\u25CB 4\u67081\u65E5\uFF08\u6C34\uFF0912:00\u301C13:00 - 1\u540D\u8ABF\u6574\u4E2D</div>
          <div style="padding: 8px; background: #fff3e0; border-radius: 4px; margin: 4px 0;">\u25CB 4\u67082\u65E5\uFF08\u6728\uFF0912:00\u301C13:00 - 1\u540D\u8ABF\u6574\u4E2D</div>
        </div>
      </div>
      ${scheconSig()}
    </div>`,
    snippet: "\u30C1\u30FC\u30E0\u5168\u54E1\u306E\u7A7A\u304D\u6642\u9593\u304B\u3089\u5019\u88DC\u65E5\u3092\u63D0\u6848\u3057\u307E\u3059\u30023\u670831\u65E5\u304C\u6700\u9069...",
    date: /* @__PURE__ */ new Date("2026-03-18T10:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-schecon"],
    attachments: [],
    threadId: "thread-sc-008",
    hasAttachments: false
  },
  {
    id: "msg-009",
    from: senders["schecon"],
    to: [me],
    subject: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u30AB\u30EC\u30F3\u30C0\u30FC\u9023\u643A\u5B8C\u4E86\u306E\u304A\u77E5\u3089\u305B",
    body: "Google\u30AB\u30EC\u30F3\u30C0\u30FC\u3068\u306E\u9023\u643A\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px 8px 0 0;">
        <h2 style="margin:0;">\u9023\u643A\u5B8C\u4E86</h2>
      </div>
      <div style="padding: 16px; border: 1px solid #eee; border-top: none;">
        <p>Google\u30AB\u30EC\u30F3\u30C0\u30FC\u3068\u306E\u9023\u643A\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002</p>
        <p>\u4ECA\u5F8C\u3001\u30B9\u30B1\u30B3\u30F3\u3067\u4F5C\u6210\u3057\u305F\u4E88\u5B9A\u306FGoogle\u30AB\u30EC\u30F3\u30C0\u30FC\u306B\u3082\u81EA\u52D5\u53CD\u6620\u3055\u308C\u307E\u3059\u3002</p>
        <p style="color: #666; font-size: 12px;">\u8A2D\u5B9A\u306E\u5909\u66F4\u306F\u300C\u8A2D\u5B9A > \u5916\u90E8\u9023\u643A\u300D\u304B\u3089\u884C\u3048\u307E\u3059\u3002</p>
      </div>
      ${scheconSig()}
    </div>`,
    snippet: "Google\u30AB\u30EC\u30F3\u30C0\u30FC\u3068\u306E\u9023\u643A\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002",
    date: /* @__PURE__ */ new Date("2026-03-15T14:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-schecon"],
    attachments: [],
    threadId: "thread-sc-009",
    hasAttachments: false
  },
  {
    id: "msg-010",
    from: senders["schecon"],
    to: [me],
    subject: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u30A2\u30AB\u30A6\u30F3\u30C8\u8A2D\u5B9A\u306E\u78BA\u8A8D",
    body: "\u30A2\u30AB\u30A6\u30F3\u30C8\u8A2D\u5B9A\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px 8px 0 0;">
        <h2 style="margin:0;">\u30A2\u30AB\u30A6\u30F3\u30C8\u8A2D\u5B9A\u66F4\u65B0</h2>
      </div>
      <div style="padding: 16px; border: 1px solid #eee; border-top: none;">
        <p>\u30A2\u30AB\u30A6\u30F3\u30C8\u8A2D\u5B9A\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002</p>
        <ul>
          <li>\u901A\u77E5\u8A2D\u5B9A: \u30E1\u30FC\u30EB + \u30D7\u30C3\u30B7\u30E5\u901A\u77E5</li>
          <li>\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3: Asia/Tokyo (UTC+9)</li>
          <li>\u8A00\u8A9E: \u65E5\u672C\u8A9E</li>
        </ul>
      </div>
      ${scheconSig()}
    </div>`,
    snippet: "\u30A2\u30AB\u30A6\u30F3\u30C8\u8A2D\u5B9A\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",
    date: /* @__PURE__ */ new Date("2026-03-10T09:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-schecon"],
    attachments: [],
    threadId: "thread-sc-010",
    hasAttachments: false
  },
  // ========== Business Emails (15) ==========
  {
    id: "msg-011",
    from: senders["tanaka"],
    to: [me],
    cc: [senders["sato"], senders["yamada"]],
    subject: "Q4\u58F2\u4E0A\u5831\u544A\u66F8\u306E\u78BA\u8A8D\u4F9D\u983C",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u7530\u4E2D\u3067\u3059\u3002\n\nQ4\u306E\u58F2\u4E0A\u5831\u544A\u66F8\u3092\u6DFB\u4ED8\u3044\u305F\u3057\u307E\u3057\u305F\u306E\u3067\u3001\u3054\u78BA\u8A8D\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u7530\u4E2D\u3067\u3059\u3002</p>
      <p>Q4\u306E\u58F2\u4E0A\u5831\u544A\u66F8\u3092\u6DFB\u4ED8\u3044\u305F\u3057\u307E\u3057\u305F\u306E\u3067\u3001\u3054\u78BA\u8A8D\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002\u4ECA\u56DE\u306E\u5831\u544A\u66F8\u3067\u306F\u3001\u7B2C4\u56DB\u534A\u671F\uFF081\u6708\u301C3\u6708\uFF09\u306E\u58F2\u4E0A\u5B9F\u7E3E\u3001\u9867\u5BA2\u52D5\u5411\u3001\u304A\u3088\u3073\u6765\u671F\u306B\u5411\u3051\u305F\u6226\u7565\u63D0\u6848\u3092\u307E\u3068\u3081\u3066\u304A\u308A\u307E\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #1e88e5; padding-bottom: 4px;">1. \u58F2\u4E0A\u30B5\u30DE\u30EA\u30FC</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #1e88e5; color: white;"><th style="border: 1px solid #ddd; padding: 8px;">\u9805\u76EE</th><th style="border: 1px solid #ddd; padding: 8px;">\u76EE\u6A19</th><th style="border: 1px solid #ddd; padding: 8px;">\u5B9F\u7E3E</th><th style="border: 1px solid #ddd; padding: 8px;">\u9054\u6210\u7387</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u7DCF\u58F2\u4E0A\u9AD8</td><td style="border: 1px solid #ddd; padding: 8px;">\xA5250,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">\xA5268,500,000</td><td style="border: 1px solid #ddd; padding: 8px; color: #43a047; font-weight: bold;">107.4%</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u65B0\u898F\u9867\u5BA2\u58F2\u4E0A</td><td style="border: 1px solid #ddd; padding: 8px;">\xA580,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">\xA572,300,000</td><td style="border: 1px solid #ddd; padding: 8px; color: #e53935;">90.4%</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u65E2\u5B58\u9867\u5BA2\u58F2\u4E0A</td><td style="border: 1px solid #ddd; padding: 8px;">\xA5170,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">\xA5196,200,000</td><td style="border: 1px solid #ddd; padding: 8px; color: #43a047; font-weight: bold;">115.4%</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #1e88e5; padding-bottom: 4px;">2. \u9867\u5BA2\u52D5\u5411\u5206\u6790</h3>
      <p>\u65B0\u898F\u9867\u5BA2\u7372\u5F97\u6570\u306F\u524D\u5E74\u540C\u671F\u6BD4\u306712%\u6E1B\u5C11\u3057\u307E\u3057\u305F\u304C\u3001\u65E2\u5B58\u9867\u5BA2\u306E\u30A2\u30C3\u30D7\u30BB\u30EB\u30FB\u30AF\u30ED\u30B9\u30BB\u30EB\u304C\u597D\u8ABF\u3067\u3001\u5168\u4F53\u3068\u3057\u3066\u306F\u76EE\u6A19\u3092\u4E0A\u56DE\u308A\u307E\u3057\u305F\u3002\u7279\u306B\u30A8\u30F3\u30BF\u30FC\u30D7\u30E9\u30A4\u30BA\u9867\u5BA2\uFF08\u5E74\u9593\u5951\u7D04\u984D1,000\u4E07\u5186\u4EE5\u4E0A\uFF09\u306E\u5951\u7D04\u66F4\u65B0\u7387\u304C98.5%\u3068\u975E\u5E38\u306B\u9AD8\u3044\u6C34\u6E96\u3092\u7DAD\u6301\u3057\u3066\u3044\u307E\u3059\u3002</p>
      <ul>
        <li><strong>\u65B0\u898F\u9867\u5BA2\u7372\u5F97\u6570:</strong> \u76EE\u6A1945\u793E\u306B\u5BFE\u305738\u793E\uFF08\u9054\u6210\u738784.4%\uFF09</li>
        <li><strong>\u30EA\u30D4\u30FC\u30C8\u7387:</strong> 92.3%\uFF08\u524D\u5E74\u540C\u671F\u6BD4+3.1\u30DD\u30A4\u30F3\u30C8\uFF09</li>
        <li><strong>\u5E73\u5747\u5951\u7D04\u5358\u4FA1:</strong> \xA54,280,000\uFF08\u524D\u5E74\u540C\u671F\u6BD4+8.7%\uFF09</li>
        <li><strong>\u89E3\u7D04\u7387:</strong> 3.2%\uFF08\u524D\u5E74\u540C\u671F\u6BD4-1.5\u30DD\u30A4\u30F3\u30C8\u3001\u904E\u53BB\u6700\u4F4E\u6C34\u6E96\uFF09</li>
      </ul>
      <h3 style="color: #333; border-bottom: 2px solid #1e88e5; padding-bottom: 4px;">3. \u5730\u57DF\u5225\u5B9F\u7E3E</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 8px;">\u5730\u57DF</th><th style="border: 1px solid #ddd; padding: 8px;">\u58F2\u4E0A\u5B9F\u7E3E</th><th style="border: 1px solid #ddd; padding: 8px;">\u524D\u5E74\u6BD4</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u95A2\u6771</td><td style="border: 1px solid #ddd; padding: 8px;">\xA5142,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">+12%</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u95A2\u897F</td><td style="border: 1px solid #ddd; padding: 8px;">\xA568,500,000</td><td style="border: 1px solid #ddd; padding: 8px;">+5%</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u4E2D\u90E8</td><td style="border: 1px solid #ddd; padding: 8px;">\xA535,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">+8%</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u305D\u306E\u4ED6</td><td style="border: 1px solid #ddd; padding: 8px;">\xA523,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">-2%</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #1e88e5; padding-bottom: 4px;">4. \u6765\u671F\u306E\u76EE\u6A19\u8A2D\u5B9A\u6848</h3>
      <p>\u4EE5\u4E0B\u306E3\u3064\u306E\u91CD\u70B9\u65BD\u7B56\u3092\u63D0\u6848\u3044\u305F\u3057\u307E\u3059\uFF1A</p>
      <ol>
        <li><strong>\u65B0\u898F\u9867\u5BA2\u958B\u62D3\u306E\u5F37\u5316:</strong> \u30C7\u30B8\u30BF\u30EB\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u4E88\u7B97\u309230%\u5897\u984D\u3057\u3001\u30EA\u30FC\u30C9\u7372\u5F97\u6570\u30921.5\u500D\u306B</li>
        <li><strong>\u30AB\u30B9\u30BF\u30DE\u30FC\u30B5\u30AF\u30BB\u30B9\u4F53\u5236\u306E\u69CB\u7BC9:</strong> \u5C02\u4EFB\u30C1\u30FC\u30E03\u540D\u3092\u914D\u7F6E\u3057\u3001\u89E3\u7D04\u73872.5%\u4EE5\u4E0B\u3092\u76EE\u6307\u3059</li>
        <li><strong>\u30D7\u30ED\u30C0\u30AF\u30C8\u62E1\u5145:</strong> \u65B0\u6A5F\u80FD\u30EA\u30EA\u30FC\u30B9\u306B\u4F34\u3046\u30A2\u30C3\u30D7\u30BB\u30EB\u63D0\u6848\u306E\u5F37\u5316</li>
      </ol>
      <p>\u7279\u306B\u4EE5\u4E0B\u306E\u70B9\u306B\u3064\u3044\u3066\u3001\u30B3\u30E1\u30F3\u30C8\u3092\u3044\u305F\u3060\u3051\u308B\u3068\u5E78\u3044\u3067\u3059\uFF1A</p>
      <ul>
        <li>\u65B0\u898F\u9867\u5BA2\u7372\u5F97\u6570\u306E\u63A8\u79FB\u306B\u5BFE\u3059\u308B\u6539\u5584\u7B56</li>
        <li>\u30EA\u30D4\u30FC\u30C8\u7387\u306E\u3055\u3089\u306A\u308B\u5411\u4E0A\u65BD\u7B56</li>
        <li>\u6765\u671F\u306E\u76EE\u6A19\u6570\u5024\uFF08\u58F2\u4E0A\xA5300,000,000\uFF09\u306E\u59A5\u5F53\u6027</li>
      </ul>
      <p><strong>\u91D1\u66DC\u65E5\u307E\u3067\u306B\u3054\u56DE\u7B54\u3044\u305F\u3060\u3051\u307E\u3059\u3068\u52A9\u304B\u308A\u307E\u3059\u3002</strong>\u7D4C\u55B6\u4F1A\u8B70\uFF084/7\uFF09\u3067\u306E\u5831\u544A\u306B\u53CD\u6620\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002</p>
      <p>\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002</p>
      ${sig("\u7530\u4E2D\u592A\u90CE", "\u55B6\u696D\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u7530\u4E2D\u3067\u3059\u3002Q4\u306E\u58F2\u4E0A\u5831\u544A\u66F8\u3092\u6DFB\u4ED8\u3044\u305F\u3057\u307E\u3057\u305F\u306E\u3067...",
    date: /* @__PURE__ */ new Date("2026-03-27T10:15:00"),
    isRead: false,
    isStarred: true,
    isBookmarked: true,
    folderId: "inbox",
    labels: ["label-work", "label-important"],
    attachments: [
      { id: "att-001", fileName: "Q4\u58F2\u4E0A\u5831\u544A\u66F8.pdf", fileSize: 2456e3, mimeType: "application/pdf" },
      { id: "att-002", fileName: "\u58F2\u4E0A\u30C7\u30FC\u30BF.xlsx", fileSize: 845e3, mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
    ],
    threadId: "thread-biz-001",
    hasAttachments: true
  },
  {
    id: "msg-012",
    from: senders["sato"],
    to: [me],
    subject: "\u958B\u767A\u74B0\u5883\u306E\u79FB\u884C\u306B\u3064\u3044\u3066",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002\n\n\u6765\u6708\u4E88\u5B9A\u3057\u3066\u3044\u308B\u958B\u767A\u74B0\u5883\u306E\u79FB\u884C\u306B\u3064\u3044\u3066\u3001\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u5171\u6709\u3044\u305F\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002</p>
      <p>\u6765\u6708\u4E88\u5B9A\u3057\u3066\u3044\u308B\u958B\u767A\u74B0\u5883\u306E\u79FB\u884C\u306B\u3064\u3044\u3066\u3001\u8A73\u7D30\u306A\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3068\u5404\u30D5\u30A7\u30FC\u30BA\u306E\u4F5C\u696D\u5185\u5BB9\u3092\u5171\u6709\u3044\u305F\u3057\u307E\u3059\u3002\u4ECA\u56DE\u306E\u79FB\u884C\u306F\u30AA\u30F3\u30D7\u30EC\u30DF\u30B9\u74B0\u5883\u304B\u3089AWS\u30AF\u30E9\u30A6\u30C9\u74B0\u5883\u3078\u306E\u5168\u9762\u79FB\u884C\u3068\u306A\u308A\u3001\u958B\u767A\u30FB\u30B9\u30C6\u30FC\u30B8\u30F3\u30B0\u30FB\u672C\u756A\u306E3\u74B0\u5883\u3092\u5BFE\u8C61\u3068\u3057\u3066\u3044\u307E\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #43a047; padding-bottom: 4px;">\u79FB\u884C\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #43a047; color: white;"><th style="border: 1px solid #ddd; padding: 8px;">\u30D5\u30A7\u30FC\u30BA</th><th style="border: 1px solid #ddd; padding: 8px;">\u671F\u9593</th><th style="border: 1px solid #ddd; padding: 8px;">\u62C5\u5F53</th><th style="border: 1px solid #ddd; padding: 8px;">\u6210\u679C\u7269</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">1. \u74B0\u5883\u69CB\u7BC9</td><td style="border: 1px solid #ddd; padding: 8px;">4/1\u301C4/5</td><td style="border: 1px solid #ddd; padding: 8px;">\u30A4\u30F3\u30D5\u30E9\u30C1\u30FC\u30E0</td><td style="border: 1px solid #ddd; padding: 8px;">AWS\u74B0\u5883\u69CB\u7BC9\u5B8C\u4E86\u5831\u544A\u66F8</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">2. \u30C7\u30FC\u30BF\u79FB\u884C</td><td style="border: 1px solid #ddd; padding: 8px;">4/7\u301C4/11</td><td style="border: 1px solid #ddd; padding: 8px;">DB\u30C1\u30FC\u30E0</td><td style="border: 1px solid #ddd; padding: 8px;">\u30C7\u30FC\u30BF\u6574\u5408\u6027\u691C\u8A3C\u30EC\u30DD\u30FC\u30C8</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">3. \u30A2\u30D7\u30EA\u691C\u8A3C</td><td style="border: 1px solid #ddd; padding: 8px;">4/14\u301C4/18</td><td style="border: 1px solid #ddd; padding: 8px;">QA\u30C1\u30FC\u30E0</td><td style="border: 1px solid #ddd; padding: 8px;">\u30C6\u30B9\u30C8\u7D50\u679C\u5831\u544A\u66F8</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">4. \u6027\u80FD\u30C6\u30B9\u30C8</td><td style="border: 1px solid #ddd; padding: 8px;">4/18\u301C4/20</td><td style="border: 1px solid #ddd; padding: 8px;">\u30A4\u30F3\u30D5\u30E9+\u958B\u767A</td><td style="border: 1px solid #ddd; padding: 8px;">\u8CA0\u8377\u30C6\u30B9\u30C8\u7D50\u679C</td></tr>
        <tr style="background: #fff3e0;"><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">5. \u672C\u756A\u5207\u66FF</td><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">4/21</td><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">\u5168\u30C1\u30FC\u30E0</td><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">\u5207\u66FF\u5B8C\u4E86\u5831\u544A\u66F8</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #43a047; padding-bottom: 4px;">\u5404\u30D5\u30A7\u30FC\u30BA\u306E\u8A73\u7D30</h3>
      <p><strong>\u30D5\u30A7\u30FC\u30BA1: \u74B0\u5883\u69CB\u7BC9\uFF084/1\u301C4/5\uFF09</strong></p>
      <ul>
        <li>VPC\u3001\u30B5\u30D6\u30CD\u30C3\u30C8\u3001\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30B0\u30EB\u30FC\u30D7\u306E\u69CB\u6210</li>
        <li>ECS Fargate\u30AF\u30E9\u30B9\u30BF\u30FC\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7</li>
        <li>RDS\uFF08PostgreSQL 15\uFF09\u306E\u30D7\u30ED\u30D3\u30B8\u30E7\u30CB\u30F3\u30B0</li>
        <li>ElastiCache\uFF08Redis\uFF09\u30AF\u30E9\u30B9\u30BF\u30FC\u306E\u69CB\u7BC9</li>
        <li>CloudFront + S3\u306B\u3088\u308B\u9759\u7684\u30A2\u30BB\u30C3\u30C8\u914D\u4FE1\u306E\u8A2D\u5B9A</li>
        <li>Terraform\u306B\u3088\u308B\u30A4\u30F3\u30D5\u30E9\u306E\u30B3\u30FC\u30C9\u7BA1\u7406</li>
      </ul>
      <p><strong>\u30D5\u30A7\u30FC\u30BA2: \u30C7\u30FC\u30BF\u79FB\u884C\uFF084/7\u301C4/11\uFF09</strong></p>
      <ul>
        <li>AWS DMS\u3092\u5229\u7528\u3057\u305F\u65E2\u5B58PostgreSQL\u304B\u3089RDS\u3078\u306E\u30C7\u30FC\u30BF\u79FB\u884C</li>
        <li>\u30DE\u30B9\u30BF\u30FC\u30C7\u30FC\u30BF\u306E\u6574\u5408\u6027\u691C\u8A3C\uFF08\u7D04350\u30C6\u30FC\u30D6\u30EB\u3001\u7DCF\u30EC\u30B3\u30FC\u30C9\u6570\u7D041.2\u5104\u4EF6\uFF09</li>
        <li>\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u306E\u79FB\u884C\u3068\u52D5\u4F5C\u78BA\u8A8D</li>
        <li>\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30FB\u30EA\u30B9\u30C8\u30A2\u306E\u624B\u9806\u78BA\u8A8D</li>
      </ul>
      <p><strong>\u30D5\u30A7\u30FC\u30BA3: \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u691C\u8A3C\uFF084/14\u301C4/18\uFF09</strong></p>
      <ul>
        <li>\u5168API\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306E\u758E\u901A\u78BA\u8A8D\uFF08\u7D04200\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\uFF09</li>
        <li>E2E\u30C6\u30B9\u30C8\u30B9\u30A4\u30FC\u30C8\u306E\u5B9F\u884C\uFF08Cypress\u3001\u7D04450\u30B7\u30CA\u30EA\u30AA\uFF09</li>
        <li>\u5916\u90E8\u30B5\u30FC\u30D3\u30B9\u9023\u643A\u306E\u52D5\u4F5C\u78BA\u8A8D\uFF08\u6C7A\u6E08\u3001\u30E1\u30FC\u30EB\u3001SMS\uFF09</li>
      </ul>
      <h3 style="color: #333; border-bottom: 2px solid #43a047; padding-bottom: 4px;">\u30EA\u30B9\u30AF\u3068\u5BFE\u7B56</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 8px;">\u30EA\u30B9\u30AF</th><th style="border: 1px solid #ddd; padding: 8px;">\u5F71\u97FF\u5EA6</th><th style="border: 1px solid #ddd; padding: 8px;">\u5BFE\u7B56</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u30C7\u30FC\u30BF\u79FB\u884C\u306E\u9045\u5EF6</td><td style="border: 1px solid #ddd; padding: 8px; color: #ff9800;">\u4E2D</td><td style="border: 1px solid #ddd; padding: 8px;">\u4E26\u5217\u79FB\u884C\u306E\u5B9F\u65BD\u3001\u4E88\u5099\u65E5\u306E\u78BA\u4FDD</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u6027\u80FD\u52A3\u5316</td><td style="border: 1px solid #ddd; padding: 8px; color: #e53935;">\u9AD8</td><td style="border: 1px solid #ddd; padding: 8px;">\u4E8B\u524D\u306E\u8CA0\u8377\u30C6\u30B9\u30C8\u3001\u30AA\u30FC\u30C8\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u8A2D\u5B9A</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u5207\u66FF\u6642\u306E\u30C0\u30A6\u30F3\u30BF\u30A4\u30E0</td><td style="border: 1px solid #ddd; padding: 8px; color: #e53935;">\u9AD8</td><td style="border: 1px solid #ddd; padding: 8px;">Blue/Green\u30C7\u30D7\u30ED\u30A4\u3001\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u624B\u9806\u306E\u6E96\u5099</td></tr>
      </table>
      <p><strong>\u672C\u756A\u5207\u66FF\u65E5\uFF084/21\uFF09\u306F\u65E5\u66DC\u65E5\u3092\u4E88\u5B9A\u3057\u3066\u304A\u308A\u3001\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u30A6\u30A3\u30F3\u30C9\u30A6\u306F22:00\u301C\u7FCC06:00\u306E8\u6642\u9593\u3092\u78BA\u4FDD\u3057\u3066\u3044\u307E\u3059\u3002</strong>\u4E07\u304C\u4E00\u306E\u5834\u5408\u306B\u5099\u3048\u3001\u65E7\u74B0\u5883\u306F4\u6708\u672B\u307E\u3067\u4E26\u884C\u7A3C\u50CD\u3055\u305B\u307E\u3059\u3002</p>
      <p>\u8A73\u7D30\u306F\u6DFB\u4ED8\u306E\u79FB\u884C\u8A08\u753B\u66F8\u3092\u3054\u53C2\u7167\u304F\u3060\u3055\u3044\u3002\u3054\u8CEA\u554F\u3084\u3054\u61F8\u5FF5\u304C\u3054\u3056\u3044\u307E\u3057\u305F\u3089\u3001\u4ECA\u9031\u4E2D\u306B\u304A\u77E5\u3089\u305B\u3044\u305F\u3060\u3051\u308B\u3068\u52A9\u304B\u308A\u307E\u3059\u3002</p>
      ${sig("\u4F50\u85E4\u82B1\u5B50", "\u958B\u767A\u90E8 \u30DE\u30CD\u30FC\u30B8\u30E3\u30FC")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002\u6765\u6708\u4E88\u5B9A\u3057\u3066\u3044\u308B\u958B\u767A\u74B0\u5883\u306E\u79FB\u884C\u306B\u3064\u3044\u3066\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u5171\u6709...",
    date: /* @__PURE__ */ new Date("2026-03-27T07:45:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [
      { id: "att-003", fileName: "\u79FB\u884C\u8A08\u753B\u66F8.pdf", fileSize: 123e4, mimeType: "application/pdf" }
    ],
    threadId: "thread-biz-002",
    hasAttachments: true
  },
  {
    id: "msg-013",
    from: senders["yamada"],
    to: [me],
    subject: "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u5411\u3051\u30D7\u30EC\u30BC\u30F3\u8CC7\u6599\u306E\u30EC\u30D3\u30E5\u30FC",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C71\u7530\u3067\u3059\u3002\n\n\u6765\u9031\u306E\u30D7\u30EC\u30BC\u30F3\u8CC7\u6599\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u306E\u3067\u3001\u30EC\u30D3\u30E5\u30FC\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C71\u7530\u3067\u3059\u3002</p>
      <p>\u6765\u9031\u706B\u66DC\u65E5\uFF084/1\uFF09\u306EXYZ\u682A\u5F0F\u4F1A\u793E\u69D8\u5411\u3051\u30D7\u30EC\u30BC\u30F3\u8CC7\u6599\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u306E\u3067\u3001\u30EC\u30D3\u30E5\u30FC\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u5148\u65B9\u306E\u60C5\u5831\u30B7\u30B9\u30C6\u30E0\u90E8\u9577\u3068\u7D4C\u55B6\u4F01\u753B\u5BA4\u9577\u304C\u51FA\u5E2D\u4E88\u5B9A\u3068\u306E\u3053\u3068\u3067\u3001\u6280\u8853\u9762\u3068\u7D4C\u55B6\u9762\u306E\u4E21\u65B9\u3092\u30AB\u30D0\u30FC\u3059\u308B\u69CB\u6210\u306B\u3057\u3066\u3044\u307E\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #7b1fa2; padding-bottom: 4px;">\u30D7\u30EC\u30BC\u30F3\u69CB\u6210\uFF08\u516835\u30B9\u30E9\u30A4\u30C9\uFF09</h3>
      <ol>
        <li><strong>\u5C0E\u5165\u90E8\uFF08\u30B9\u30E9\u30A4\u30C91-5\uFF09:</strong> \u5F53\u793E\u7D39\u4ECB\u3001\u5B9F\u7E3E\u30B5\u30DE\u30EA\u30FC\u3001XYZ\u793E\u306E\u8AB2\u984C\u8A8D\u8B58</li>
        <li><strong>\u5E02\u5834\u5206\u6790\uFF08\u30B9\u30E9\u30A4\u30C96-12\uFF09:</strong> DX\u5E02\u5834\u306E\u52D5\u5411\u3001\u696D\u754C\u5225\u5C0E\u5165\u7387\u3001\u7AF6\u5408\u4ED6\u793E\u306E\u52D5\u5411
          <ul>
            <li>\u56FD\u5185DX\u5E02\u5834\u898F\u6A21: 2025\u5E743.8\u5146\u5186 \u2192 2028\u5E74\u4E88\u6E2C5.2\u5146\u5186</li>
            <li>\u88FD\u9020\u696D\u306B\u304A\u3051\u308BDX\u5C0E\u5165\u7387: 42%\uFF08\u524D\u5E74\u6BD4+11pt\uFF09</li>
            <li>\u5C0E\u5165\u4F01\u696D\u306E\u751F\u7523\u6027\u5411\u4E0A\u7387: \u5E73\u574723%</li>
          </ul>
        </li>
        <li><strong>\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u63D0\u6848\uFF08\u30B9\u30E9\u30A4\u30C913-22\uFF09:</strong> \u65B0\u30B5\u30FC\u30D3\u30B9\u300CSmartOps\u300D\u306E\u6982\u8981
          <ul>
            <li>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u751F\u7523\u7BA1\u7406\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9</li>
            <li>AI\u30D9\u30FC\u30B9\u306E\u9700\u8981\u4E88\u6E2C\u30A8\u30F3\u30B8\u30F3</li>
            <li>IoT\u30BB\u30F3\u30B5\u30FC\u9023\u643A\u306B\u3088\u308B\u8A2D\u5099\u7A3C\u50CD\u76E3\u8996</li>
            <li>\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u81EA\u52D5\u5316\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0</li>
          </ul>
        </li>
        <li><strong>\u5C0E\u5165\u4E8B\u4F8B\uFF08\u30B9\u30E9\u30A4\u30C923-28\uFF09:</strong> 3\u793E\u306E\u6210\u529F\u4E8B\u4F8B
          <ul>
            <li>A\u793E\uFF08\u81EA\u52D5\u8ECA\u90E8\u54C1\u30E1\u30FC\u30AB\u30FC\uFF09: \u751F\u7523\u52B9\u738728%\u5411\u4E0A\u3001\u4E0D\u826F\u738760%\u524A\u6E1B</li>
            <li>B\u793E\uFF08\u98DF\u54C1\u30E1\u30FC\u30AB\u30FC\uFF09: \u5728\u5EAB\u30B3\u30B9\u30C835%\u524A\u6E1B\u3001\u51FA\u8377\u30EA\u30FC\u30C9\u30BF\u30A4\u30E050%\u77ED\u7E2E</li>
            <li>C\u793E\uFF08\u96FB\u5B50\u90E8\u54C1\u30E1\u30FC\u30AB\u30FC\uFF09: \u8A2D\u5099\u7A3C\u50CD\u738792%\u9054\u6210\u3001\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u30B3\u30B9\u30C840%\u524A\u6E1B</li>
          </ul>
        </li>
        <li><strong>\u6599\u91D1\u30FB\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\uFF08\u30B9\u30E9\u30A4\u30C929-35\uFF09:</strong> 3\u3064\u306E\u6599\u91D1\u30D7\u30E9\u30F3\u3001\u5C0E\u5165\u30ED\u30FC\u30C9\u30DE\u30C3\u30D7</li>
      </ol>
      <h3 style="color: #333; border-bottom: 2px solid #7b1fa2; padding-bottom: 4px;">\u30EC\u30D3\u30E5\u30FC\u306E\u30DD\u30A4\u30F3\u30C8</h3>
      <p>\u7279\u306B\u4EE5\u4E0B\u306E\u70B9\u306B\u3064\u3044\u3066\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u304A\u9858\u3044\u3057\u307E\u3059\uFF1A</p>
      <ul>
        <li>\u7AF6\u5408\u6BD4\u8F03\u306E\u30B9\u30E9\u30A4\u30C9\uFF08\u30B9\u30E9\u30A4\u30C910-12\uFF09\u3067\u3001A\u793E\u30FBB\u793E\u3068\u306E\u5DEE\u5225\u5316\u30DD\u30A4\u30F3\u30C8\u304C\u660E\u78BA\u304B</li>
        <li>\u6599\u91D1\u30D7\u30E9\u30F3\u304C3\u6BB5\u968E\uFF08Starter: \u6708\u984D50\u4E07\u5186 / Business: \u6708\u984D120\u4E07\u5186 / Enterprise: \u500B\u5225\u898B\u7A4D\uFF09\u3067\u59A5\u5F53\u304B</li>
        <li>\u5C0E\u5165\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\uFF086\u30F6\u6708\uFF09\u306E\u5B9F\u73FE\u6027</li>
        <li>XYZ\u793E\u306E\u696D\u7A2E\u7279\u6709\u306E\u8AB2\u984C\u306B\u5BFE\u3059\u308B\u8A34\u6C42\u304C\u5341\u5206\u304B</li>
      </ul>
      <p><strong>\u3067\u304D\u308C\u3070\u6728\u66DC\u65E5\u306E\u5348\u524D\u4E2D\u307E\u3067\u306B\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u3044\u305F\u3060\u3051\u308B\u3068\u52A9\u304B\u308A\u307E\u3059\u3002</strong>\u91D1\u66DC\u65E5\u306B\u6700\u7D42\u7248\u3092\u4ED5\u4E0A\u3052\u3066\u3001\u5148\u65B9\u3078\u306E\u4E8B\u524D\u9001\u4ED8\u3092\u6708\u66DC\u65E5\u306B\u4E88\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002</p>
      ${sig("\u5C71\u7530\u4E00\u90CE", "\u4F01\u753B\u90E8 \u4E3B\u4EFB")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C71\u7530\u3067\u3059\u3002\u6765\u9031\u306E\u30D7\u30EC\u30BC\u30F3\u8CC7\u6599\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u306E\u3067...",
    date: /* @__PURE__ */ new Date("2026-03-26T16:30:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [
      { id: "att-004", fileName: "\u30D7\u30EC\u30BC\u30F3\u8CC7\u6599_v2.pptx", fileSize: 567e4, mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation" }
    ],
    threadId: "thread-biz-003",
    hasAttachments: true
  },
  {
    id: "msg-014",
    from: senders["suzuki"],
    to: [me],
    cc: [senders["tanaka"]],
    subject: "\u65B0\u898F\u6848\u4EF6\u306E\u3054\u76F8\u8AC7",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9234\u6728\u3067\u3059\u3002\n\n\u65B0\u898F\u6848\u4EF6\u306E\u76F8\u8AC7\u3092\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u305F\u304F\u3001\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9234\u6728\u3067\u3059\u3002</p>
      <p>\u65B0\u898F\u6848\u4EF6\u306E\u76F8\u8AC7\u3092\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u305F\u304F\u3001\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3057\u305F\u3002\u5148\u9031\u306E\u30D3\u30B8\u30CD\u30B9\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9\u3067ABC\u30B3\u30FC\u30DD\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u60C5\u5831\u30B7\u30B9\u30C6\u30E0\u90E8\u9577\u30FB\u4F50\u3005\u6728\u69D8\u3068\u304A\u8A71\u3057\u3059\u308B\u6A5F\u4F1A\u304C\u3042\u308A\u3001\u5177\u4F53\u7684\u306A\u6848\u4EF6\u306E\u3054\u76F8\u8AC7\u3092\u3044\u305F\u3060\u304D\u307E\u3057\u305F\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #ff9800; padding-bottom: 4px;">\u6848\u4EF6\u6982\u8981</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold; width: 30%;">\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8</td><td style="padding: 8px;">ABC\u30B3\u30FC\u30DD\u30EC\u30FC\u30B7\u30E7\u30F3\u682A\u5F0F\u4F1A\u793E\uFF08\u6771\u8A3C\u30D7\u30E9\u30A4\u30E0\u4E0A\u5834\u30FB\u5F93\u696D\u54E1\u6570\u7D043,000\u540D\uFF09</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u6848\u4EF6\u5185\u5BB9</td><td style="padding: 8px;">\u793E\u5185\u696D\u52D9\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0\u306E\u5168\u9762\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u4E88\u7B97\u898F\u6A21</td><td style="padding: 8px;">3,000\u4E07\u5186\u301C5,000\u4E07\u5186\uFF08\u521D\u5E74\u5EA6\uFF09</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u958B\u767A\u671F\u9593</td><td style="padding: 8px;">6\u30F6\u6708\uFF082026\u5E745\u6708\u301C10\u6708\uFF09</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u4FDD\u5B88\u904B\u7528</td><td style="padding: 8px;">\u5E74\u984D600\u4E07\u5186\uFF085\u5E74\u5951\u7D04\u3092\u60F3\u5B9A\uFF09</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #ff9800; padding-bottom: 4px;">\u80CC\u666F\u30FB\u8981\u4EF6</h3>
      <p>ABC\u30B3\u30FC\u30DD\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u73FE\u5728\u3001\u7D0415\u5E74\u524D\u306B\u69CB\u7BC9\u3057\u305F\u30AA\u30F3\u30D7\u30EC\u30DF\u30B9\u306E\u696D\u52D9\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u8AB2\u984C\u3092\u62B1\u3048\u3066\u3044\u308B\u3068\u306E\u3053\u3068\u3067\u3059\uFF1A</p>
      <ul>
        <li><strong>\u8001\u673D\u5316:</strong> VB.NET + SQL Server\u3067\u69CB\u7BC9\u3055\u308C\u305F\u30B7\u30B9\u30C6\u30E0\u304C\u4FDD\u5B88\u56F0\u96E3\u306A\u72B6\u614B</li>
        <li><strong>\u30EA\u30E2\u30FC\u30C8\u30EF\u30FC\u30AF\u975E\u5BFE\u5FDC:</strong> \u793E\u5185\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u304B\u3089\u306E\u307F\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD</li>
        <li><strong>\u30C7\u30FC\u30BF\u9023\u643A:</strong> \u5404\u90E8\u9580\u306EExcel\u7BA1\u7406\u3092\u30B7\u30B9\u30C6\u30E0\u306B\u7D71\u5408\u3057\u305F\u3044</li>
        <li><strong>\u627F\u8A8D\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC:</strong> \u73FE\u5728\u7D19\u30D9\u30FC\u30B9\u306E\u7A1F\u8B70\u30FB\u7533\u8ACB\u3092\u30DA\u30FC\u30D1\u30FC\u30EC\u30B9\u5316</li>
        <li><strong>\u30E2\u30D0\u30A4\u30EB\u5BFE\u5FDC:</strong> \u55B6\u696D\u62C5\u5F53\u8005\u304C\u5916\u51FA\u5148\u304B\u3089\u5229\u7528\u3057\u305F\u3044</li>
      </ul>
      <h3 style="color: #333; border-bottom: 2px solid #ff9800; padding-bottom: 4px;">\u5148\u65B9\u306E\u671F\u5F85\u3059\u308B\u30B9\u30B3\u30FC\u30D7</h3>
      <ol>
        <li>\u52E4\u6020\u7BA1\u7406\u30E2\u30B8\u30E5\u30FC\u30EB\uFF08\u6253\u523B\u3001\u6B8B\u696D\u7533\u8ACB\u3001\u6709\u7D66\u7BA1\u7406\uFF09</li>
        <li>\u7D4C\u8CBB\u7CBE\u7B97\u30E2\u30B8\u30E5\u30FC\u30EB\uFF08\u9818\u53CE\u66F8OCR\u3001\u627F\u8A8D\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\uFF09</li>
        <li>\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406\u30E2\u30B8\u30E5\u30FC\u30EB\uFF08\u5DE5\u6570\u7BA1\u7406\u3001\u30AC\u30F3\u30C8\u30C1\u30E3\u30FC\u30C8\uFF09</li>
        <li>\u6587\u66F8\u7BA1\u7406\u30E2\u30B8\u30E5\u30FC\u30EB\uFF08\u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406\u3001\u5168\u6587\u691C\u7D22\uFF09</li>
        <li>\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u30A8\u30F3\u30B8\u30F3\uFF08\u6C4E\u7528\u627F\u8A8D\u30D5\u30ED\u30FC\uFF09</li>
      </ol>
      <h3 style="color: #333; border-bottom: 2px solid #ff9800; padding-bottom: 4px;">\u7AF6\u5408\u72B6\u6CC1</h3>
      <p>\u73FE\u6642\u70B9\u3067\u5F53\u793E\u3092\u542B\u30813\u793E\u304C\u30B3\u30F3\u30DA\u306B\u53C2\u52A0\u4E88\u5B9A\u3067\u3059\u3002\u63D0\u6848\u66F8\u306E\u63D0\u51FA\u671F\u9650\u306F4\u6708\u672B\u30015\u6708\u4E2D\u65EC\u306B\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u30015\u6708\u672B\u306B\u9078\u5B9A\u7D50\u679C\u306E\u901A\u77E5\u304C\u4E88\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p>
      <p>\u5F53\u793E\u306E\u5F37\u307F\u3067\u3042\u308BAngular + .NET\u306E\u6280\u8853\u30B9\u30BF\u30C3\u30AF\u3068\u3001\u985E\u4F3C\u6848\u4EF6\u306E\u5B9F\u7E3E\uFF08D\u793E\u3001E\u793E\u3067\u306E\u5C0E\u5165\u4E8B\u4F8B\uFF09\u3092\u30A2\u30D4\u30FC\u30EB\u30DD\u30A4\u30F3\u30C8\u306B\u3057\u305F\u3044\u3068\u8003\u3048\u3066\u3044\u307E\u3059\u3002</p>
      <p><strong>\u6765\u9031\u4E2D\u306B\u4E00\u5EA6\u6253\u3061\u5408\u308F\u305B\u306E\u6642\u9593\u3092\u8A2D\u3051\u3066\u3044\u305F\u3060\u3051\u306A\u3044\u3067\u3057\u3087\u3046\u304B\u3002</strong>\u63D0\u6848\u66F8\u306E\u65B9\u5411\u6027\u3068\u4F53\u5236\u306B\u3064\u3044\u3066\u76F8\u8AC7\u3055\u305B\u3066\u304F\u3060\u3055\u3044\u3002\u7530\u4E2D\u90E8\u9577\u306B\u3082Cc\u3057\u3066\u3044\u307E\u3059\u306E\u3067\u3001\u3054\u90FD\u5408\u306E\u5408\u3046\u65E5\u7A0B\u3092\u8ABF\u6574\u3067\u304D\u308C\u3070\u3068\u601D\u3044\u307E\u3059\u3002</p>
      ${sig("\u9234\u6728\u5065\u4E8C", "\u55B6\u696D\u90E8 \u8AB2\u9577")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9234\u6728\u3067\u3059\u3002\u65B0\u898F\u6848\u4EF6\u306E\u76F8\u8AC7\u3092\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u305F\u304F...",
    date: /* @__PURE__ */ new Date("2026-03-26T14:00:00"),
    isRead: false,
    isStarred: true,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work", "label-important"],
    attachments: [],
    threadId: "thread-biz-004",
    hasAttachments: false
  },
  {
    id: "msg-015",
    from: senders["takahashi"],
    to: [me],
    subject: "\u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC\u306E\u7D50\u679C\u5831\u544A",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9AD8\u6A4B\u3067\u3059\u3002\n\n\u5148\u65E5\u306E\u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC\u306E\u7D50\u679C\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9AD8\u6A4B\u3067\u3059\u3002</p>
      <p>3\u670824\u65E5\u306B\u5B9F\u65BD\u3057\u305F\u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC\u4F1A\u8B70\u306E\u7D50\u679C\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002\u30EC\u30D3\u30E5\u30FC\u53C2\u52A0\u8005\u306F\u30C7\u30B6\u30A4\u30F3\u90E84\u540D\u3001\u958B\u767A\u90E83\u540D\u3001\u4F01\u753B\u90E82\u540D\u306E\u8A089\u540D\u3067\u3001\u7D042\u6642\u9593\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u3057\u305F\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #e91e63; padding-bottom: 4px;">\u30EC\u30D3\u30E5\u30FC\u5BFE\u8C61</h3>
      <p>\u4ECA\u56DE\u306E\u30EC\u30D3\u30E5\u30FC\u5BFE\u8C61\u306F\u3001\u30B9\u30B1\u30B3\u30F3\u30A2\u30D7\u30EA\u306E\u30D0\u30FC\u30B8\u30E7\u30F32.0\u3067\u5237\u65B0\u3059\u308BUI/UX\u30C7\u30B6\u30A4\u30F3\u5168\u4F53\u3067\u3059\u3002\u5177\u4F53\u7684\u306B\u306F\u4EE5\u4E0B\u306E\u753B\u9762\u3092\u5BFE\u8C61\u3068\u3057\u307E\u3057\u305F\uFF1A</p>
      <ul>
        <li>\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\uFF08\u30DB\u30FC\u30E0\u753B\u9762\uFF09</li>
        <li>\u30AB\u30EC\u30F3\u30C0\u30FC\u30D3\u30E5\u30FC\uFF08\u6708\u30FB\u9031\u30FB\u65E5\uFF09</li>
        <li>\u30E1\u30FC\u30EB\u4E00\u89A7\u30FB\u8A73\u7D30\u753B\u9762</li>
        <li>\u8A2D\u5B9A\u753B\u9762</li>
        <li>\u901A\u77E5\u30BB\u30F3\u30BF\u30FC</li>
      </ul>
      <h3 style="color: #333; border-bottom: 2px solid #e91e63; padding-bottom: 4px;">\u7DCF\u5408\u8A55\u4FA1</h3>
      <p>\u5168\u4F53\u7684\u306B\u597D\u8A55\u3067\u3001\u7279\u306B\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u306E\u60C5\u5831\u8A2D\u8A08\u3068\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u64CD\u4F5C\u6027\u306B\u3064\u3044\u3066\u9AD8\u3044\u8A55\u4FA1\u3092\u3044\u305F\u3060\u304D\u307E\u3057\u305F\u3002\u53C2\u52A0\u8005\u30A2\u30F3\u30B1\u30FC\u30C8\u306E\u7D50\u679C\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\uFF1A</p>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 8px;">\u8A55\u4FA1\u9805\u76EE</th><th style="border: 1px solid #ddd; padding: 8px;">\u30B9\u30B3\u30A2\uFF085\u6BB5\u968E\uFF09</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u8996\u899A\u7684\u30C7\u30B6\u30A4\u30F3</td><td style="border: 1px solid #ddd; padding: 8px;">4.3 / 5.0</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u60C5\u5831\u8A2D\u8A08</td><td style="border: 1px solid #ddd; padding: 8px;">4.5 / 5.0</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u64CD\u4F5C\u6027</td><td style="border: 1px solid #ddd; padding: 8px;">3.8 / 5.0</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u30EC\u30B9\u30DD\u30F3\u30B7\u30D6\u5BFE\u5FDC</td><td style="border: 1px solid #ddd; padding: 8px;">3.5 / 5.0</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3</td><td style="border: 1px solid #ddd; padding: 8px;">3.2 / 5.0</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #e91e63; padding-bottom: 4px;">\u4FEE\u6B63\u304C\u5FC5\u8981\u306A\u9805\u76EE</h3>
      <ol>
        <li><strong>\u30D8\u30C3\u30C0\u30FC\u306E\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u69CB\u9020\u3092\u7C21\u7D20\u5316</strong>\uFF08\u512A\u5148\u5EA6: \u9AD8\uFF09
          <p style="color: #666; margin: 4px 0 12px 0;">\u73FE\u57285\u968E\u5C64\u306E\u30E1\u30CB\u30E5\u30FC\u69CB\u9020\u30923\u968E\u5C64\u306B\u6574\u7406\u3002\u983B\u7E41\u306B\u4F7F\u3046\u6A5F\u80FD\u3078\u306E\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3092\u8FFD\u52A0\u3002</p></li>
        <li><strong>\u30AB\u30E9\u30FC\u30D1\u30EC\u30C3\u30C8\u306E\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u6BD4\u3092\u6539\u5584</strong>\uFF08\u512A\u5148\u5EA6: \u9AD8\uFF09
          <p style="color: #666; margin: 4px 0 12px 0;">WCAG 2.1 AA\u57FA\u6E96\uFF08\u6700\u4F4E4.5:1\uFF09\u3092\u6E80\u305F\u3057\u3066\u3044\u306A\u3044\u7B87\u6240\u304C12\u7B87\u6240\u3002\u7279\u306B\u30B0\u30EC\u30FC\u30C6\u30AD\u30B9\u30C8\uFF08#999\uFF09\u3092#666\u4EE5\u4E0A\u306B\u5909\u66F4\u3002</p></li>
        <li><strong>\u30E2\u30D0\u30A4\u30EB\u7248\u306E\u30BF\u30C3\u30C1\u30BF\u30FC\u30B2\u30C3\u30C8\u30B5\u30A4\u30BA\u309248px\u4EE5\u4E0A\u306B</strong>\uFF08\u512A\u5148\u5EA6: \u4E2D\uFF09
          <p style="color: #666; margin: 4px 0 12px 0;">\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u65E5\u4ED8\u30BB\u30EB\u3001\u30E1\u30FC\u30EB\u4E00\u89A7\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u30DC\u30BF\u30F3\u304C\u73FE\u572836px\u3067\u5C0F\u3055\u3044\u3002</p></li>
        <li><strong>\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u306E\u30B0\u30E9\u30D5\u8868\u793A\u3092\u6539\u5584</strong>\uFF08\u512A\u5148\u5EA6: \u4E2D\uFF09
          <p style="color: #666; margin: 4px 0 12px 0;">\u5186\u30B0\u30E9\u30D5\u3092\u30C9\u30FC\u30CA\u30C4\u30C1\u30E3\u30FC\u30C8\u306B\u5909\u66F4\u3057\u3001\u4E2D\u592E\u306B\u6570\u5024\u3092\u8868\u793A\u3002\u8272\u899A\u591A\u69D8\u6027\u306B\u914D\u616E\u3057\u305F\u30AB\u30E9\u30FC\u30D1\u30BF\u30FC\u30F3\u3092\u9069\u7528\u3002</p></li>
        <li><strong>\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u5BFE\u5FDC</strong>\uFF08\u512A\u5148\u5EA6: \u4F4E\uFF09
          <p style="color: #666; margin: 4px 0 12px 0;">v2.0\u3067\u306F\u5BFE\u5FDC\u898B\u9001\u308A\u3001v2.1\u3067\u5B9F\u88C5\u4E88\u5B9A\u3002CSS\u30AB\u30B9\u30BF\u30E0\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4F7F\u3063\u305F\u8A2D\u8A08\u3092\u5148\u884C\u3057\u3066\u7D44\u307F\u8FBC\u3080\u3002</p></li>
      </ol>
      <p><strong>\u4FEE\u6B63\u5F8C\u306E\u30C7\u30B6\u30A4\u30F3\u306F\u6765\u9031\u6708\u66DC\u65E5\u306B\u5171\u6709\u4E88\u5B9A\u3067\u3059\u3002</strong>\u4FEE\u6B63\u306B\u95A2\u3059\u308B\u3054\u610F\u898B\u304C\u3042\u308C\u3070\u3001\u6728\u66DC\u65E5\u4E2D\u306B\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u9AD8\u6A4B\u7F8E\u54B2", "\u30C7\u30B6\u30A4\u30F3\u90E8 \u30EA\u30FC\u30C0\u30FC")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9AD8\u6A4B\u3067\u3059\u3002\u5148\u65E5\u306E\u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC\u306E\u7D50\u679C\u3092\u307E\u3068\u3081\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-26T11:20:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-biz-005",
    hasAttachments: false
  },
  {
    id: "msg-016",
    from: senders["watanabe"],
    to: [me],
    subject: "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u5831\u544A\u66F8",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u6E21\u8FBA\u3067\u3059\u3002\n\n\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u306E\u7D50\u679C\u5831\u544A\u66F8\u3092\u63D0\u51FA\u3044\u305F\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u6E21\u8FBA\u3067\u3059\u3002</p>
      <p>2026\u5E743\u6708\u5EA6\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u7D50\u679C\u5831\u544A\u66F8\u3092\u63D0\u51FA\u3044\u305F\u3057\u307E\u3059\u3002\u4ECA\u56DE\u306E\u76E3\u67FB\u306F\u5916\u90E8\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30D9\u30F3\u30C0\u30FC\uFF08\u682A\u5F0F\u4F1A\u793E\u30BB\u30AD\u30E5\u30A2\u30C6\u30B9\u30C8\uFF09\u3068\u5F53\u90E8\u9580\u306E\u5408\u540C\u3067\u5B9F\u65BD\u3057\u3001Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3001API\u30B5\u30FC\u30D0\u30FC\u3001\u793E\u5185\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3001\u30AF\u30E9\u30A6\u30C9\u74B0\u5883\u3092\u5BFE\u8C61\u3068\u3057\u307E\u3057\u305F\u3002</p>
      <h3 style="color: #e53935; border-bottom: 2px solid #e53935; padding-bottom: 4px;">\u76E3\u67FB\u7D50\u679C\u30B5\u30DE\u30EA\u30FC</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #333; color: white;"><th style="border: 1px solid #ddd; padding: 8px;">\u91CD\u8981\u5EA6</th><th style="border: 1px solid #ddd; padding: 8px;">\u4EF6\u6570</th><th style="border: 1px solid #ddd; padding: 8px;">\u5BFE\u5FDC\u671F\u9650</th><th style="border: 1px solid #ddd; padding: 8px;">\u30B9\u30C6\u30FC\u30BF\u30B9</th></tr>
        <tr style="background: #ffebee;"><td style="border: 1px solid #ddd; padding: 8px; color: #e53935; font-weight: bold;">\u91CD\u5927\uFF08Critical\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">2\u4EF6</td><td style="border: 1px solid #ddd; padding: 8px;">72\u6642\u9593\u4EE5\u5185</td><td style="border: 1px solid #ddd; padding: 8px;">\u5BFE\u5FDC\u4E2D</td></tr>
        <tr style="background: #fff3e0;"><td style="border: 1px solid #ddd; padding: 8px; color: #ff9800; font-weight: bold;">\u8B66\u544A\uFF08High\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">5\u4EF6</td><td style="border: 1px solid #ddd; padding: 8px;">1\u9031\u9593\u4EE5\u5185</td><td style="border: 1px solid #ddd; padding: 8px;">\u672A\u7740\u624B</td></tr>
        <tr style="background: #e3f2fd;"><td style="border: 1px solid #ddd; padding: 8px; color: #1e88e5; font-weight: bold;">\u4E2D\u7A0B\u5EA6\uFF08Medium\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">8\u4EF6</td><td style="border: 1px solid #ddd; padding: 8px;">1\u30F6\u6708\u4EE5\uFFFD\uFFFD\uFFFD</td><td style="border: 1px solid #ddd; padding: 8px;">\u672A\u7740\u624B</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px; color: #666;">\u60C5\u5831\uFF08Low\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">12\u4EF6</td><td style="border: 1px solid #ddd; padding: 8px;">\u6B21\u56DE\u30EA\u30EA\u30FC\u30B9\u6642</td><td style="border: 1px solid #ddd; padding: 8px;">\u30D0\u30C3\u30AF\u30ED\u30B0\u8FFD\u52A0</td></tr>
      </table>
      <h3 style="color: #e53935; border-bottom: 2px solid #e53935; padding-bottom: 4px;">\u91CD\u5927\u306A\u8106\u5F31\u6027\u306E\u8A73\u7D30</h3>
      <div style="background: #ffebee; padding: 16px; border-radius: 4px; margin: 12px 0; border-left: 4px solid #e53935;">
        <p style="margin: 0; font-weight: bold; color: #e53935;">VULN-001: SQL\u30A4\u30F3\u30B8\u30A7\u30AF\u30B7\u30E7\u30F3\uFF08\u691C\u7D22API\uFF09</p>
        <p style="margin: 4px 0; color: #666;">\u5BFE\u8C61: /api/v2/search \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8</p>
        <p style="margin: 4px 0;">\u30E6\u30FC\u30B6\u30FC\u5165\u529B\u5024\u306E\u30B5\u30CB\u30BF\u30A4\u30BA\u304C\u4E0D\u5341\u5206\u3067\u3001UNION-based SQL\u30A4\u30F3\u30B8\u30A7\u30AF\u30B7\u30E7\u30F3\u304C\u53EF\u80FD\u3002\u8A8D\u8A3C\u6E08\u307F\u30E6\u30FC\u30B6\u30FC\u304C\u4ED6\u30E6\u30FC\u30B6\u30FC\u306E\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308C\u308B\u72B6\u614B\u3002CVSS \u30B9\u30B3\u30A2: 9.1</p>
      </div>
      <div style="background: #ffebee; padding: 16px; border-radius: 4px; margin: 12px 0; border-left: 4px solid #e53935;">
        <p style="margin: 0; font-weight: bold; color: #e53935;">VULN-002: SQL\u30A4\u30F3\u30B8\u30A7\u30AF\u30B7\u30E7\u30F3\uFF08\u30EC\u30DD\u30FC\u30C8API\uFF09</p>
        <p style="margin: 4px 0; color: #666;">\u5BFE\u8C61: /api/v2/reports/export \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8</p>
        <p style="margin: 4px 0;">\u65E5\u4ED8\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u691C\u8A3C\u4E0D\u5099\u306B\u3088\u308A\u3001Time-based Blind SQL\u30A4\u30F3\u30B8\u30A7\u30AF\u30B7\u30E7\u30F3\u304C\u53EF\u80FD\u3002CVSS \u30B9\u30B3\u30A2: 8.6</p>
      </div>
      <h3 style="color: #ff9800; border-bottom: 2px solid #ff9800; padding-bottom: 4px;">\u8B66\u544A\u30EC\u30D9\u30EB\u306E\u767A\u898B\u4E8B\u9805</h3>
      <ul>
        <li><strong>CSRF\u30C8\u30FC\u30AF\u30F3\u672A\u8A2D\u5B9A:</strong> \u7BA1\u7406\u753B\u9762\u306E5\u3064\u306EPOST\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u3067CSRF\u30C8\u30FC\u30AF\u30F3\u304C\u691C\u8A3C\u3055\u308C\u3066\u3044\u306A\u3044</li>
        <li><strong>\u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406\u306E\u4E0D\u5099:</strong> \u30BB\u30C3\u30B7\u30E7\u30F3\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u304C24\u6642\u9593\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\uFF08\u63A8\u5968: 30\u5206\uFF09</li>
        <li><strong>HTTP Strict Transport Security\u672A\u8A2D\u5B9A:</strong> HSTS\u30D8\u30C3\u30C0\u30FC\u304C\u4ED8\u4E0E\u3055\u308C\u3066\u3044\u306A\u3044</li>
        <li><strong>\u30D1\u30B9\u30EF\u30FC\u30C9\u30DD\u30EA\u30B7\u30FC:</strong> \u6700\u5C0F\u6587\u5B57\u6570\u304C6\u6587\u5B57\uFF08\u63A8\u5968: 12\u6587\u5B57\u4EE5\u4E0A\uFF09</li>
        <li><strong>API\u30EC\u30FC\u30C8\u5236\u9650:</strong> \u30ED\u30B0\u30A4\u30F3API\u306B\u30EC\u30FC\u30C8\u5236\u9650\u304C\u306A\u304F\u3001\u30D6\u30EB\u30FC\u30C8\u30D5\u30A9\u30FC\u30B9\u653B\u6483\u306B\u8106\u5F31</li>
      </ul>
      <h3 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 4px;">\u63A8\u5968\u5BFE\u5FDC\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB</h3>
      <p>\u91CD\u5927\u306A\u8106\u5F31\u6027\u306B\u3064\u3044\u3066\u306F<strong style="color: #e53935;">\u4ECA\u9031\u91D1\u66DC\u65E5\uFF083/28\uFF09\u307E\u3067\u306B</strong>\u4FEE\u6B63\u30D1\u30C3\u30C1\u306E\u9069\u7528\u3092\u5B8C\u4E86\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u958B\u767A\u90E8\u3068\u9023\u643A\u3057\u3066\u7DCA\u6025\u5BFE\u5FDC\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002</p>
      <p>\u8A73\u7D30\u306F\u6DFB\u4ED8\u306E\u76E3\u67FB\u5831\u544A\u66F8\uFF08\u516848\u30DA\u30FC\u30B8\uFF09\u3092\u3054\u53C2\u7167\u304F\u3060\u3055\u3044\u3002\u4FEE\u6B63\u65B9\u91DD\u306B\u3064\u3044\u3066\u306E\u3054\u76F8\u8AC7\u306F\u968F\u6642\u53D7\u3051\u4ED8\u3051\u3066\u3044\u307E\u3059\u3002</p>
      ${sig("\u6E21\u8FBA\u76F4\u4EBA", "\u60C5\u5831\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u6E21\u8FBA\u3067\u3059\u3002\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u306E\u7D50\u679C\u5831\u544A\u66F8\u3092\u63D0\u51FA\u3044\u305F\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-25T17:00:00"),
    isRead: false,
    isStarred: true,
    isBookmarked: true,
    folderId: "inbox",
    labels: ["label-work", "label-important"],
    attachments: [
      { id: "att-005", fileName: "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u5831\u544A\u66F8.pdf", fileSize: 34e5, mimeType: "application/pdf" }
    ],
    threadId: "thread-biz-006",
    hasAttachments: true
  },
  {
    id: "msg-017",
    from: senders["ito"],
    to: [me],
    subject: "\u63A1\u7528\u9762\u63A5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u8ABF\u6574",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u3002\n\n\u6765\u9031\u306E\u63A1\u7528\u9762\u63A5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u8ABF\u6574\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u3002</p>
      <p>\u6765\u9031\u306E\u4E8C\u6B21\u9762\u63A5\uFF08\u6280\u8853\u9762\u63A5\uFF09\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u8ABF\u6574\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u4ECA\u56DE\u306E\u5019\u88DC\u80053\u540D\u306F\u5168\u54E1\u3001\u4E00\u6B21\u9762\u63A5\uFF08\u4EBA\u4E8B\u9762\u63A5\uFF09\u3092\u901A\u904E\u3057\u305F\u65B9\u3005\u3067\u3001\u3044\u305A\u308C\u3082\u5373\u6226\u529B\u3068\u3057\u3066\u671F\u5F85\u3067\u304D\u308B\u4EBA\u6750\u3067\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #00897b; padding-bottom: 4px;">\u9762\u63A5\u6982\u8981</h3>
      <ul>
        <li><strong>\u30DD\u30B8\u30B7\u30E7\u30F3:</strong> \u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2\uFF08\u30B7\u30CB\u30A2\uFF091\u540D\u3001\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2\uFF08\u30DF\u30C9\u30EB\uFF092\u540D</li>
        <li><strong>\u9762\u63A5\u5F62\u5F0F:</strong> \u5BFE\u9762\uFF08\u4F1A\u8B70\u5BA4B\uFF09\u3001\u540460\u5206</li>
        <li><strong>\u9762\u63A5\u5B98:</strong> \u77F3\u5D0E\u3055\u3093\uFF08\u6280\u8853\u8A55\u4FA1\uFF09+ \u4F50\u85E4\u3055\u3093\uFF08\u30C1\u30FC\u30E0\u30D5\u30A3\u30C3\u30C8\u8A55\u4FA1\uFF09</li>
      </ul>
      <h3 style="color: #333; border-bottom: 2px solid #00897b; padding-bottom: 4px;">\u5019\u88DC\u8005\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #00897b; color: white;"><th style="border: 1px solid #ddd; padding: 8px;">\u5019\u88DC\u8005</th><th style="border: 1px solid #ddd; padding: 8px;">\u30DD\u30B8\u30B7\u30E7\u30F3</th><th style="border: 1px solid #ddd; padding: 8px;">\u7D4C\u9A13</th><th style="border: 1px solid #ddd; padding: 8px;">\u5E0C\u671B\u65E5</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;"><strong>A\u6C0F\uFF0828\u6B73\uFF09</strong></td><td style="border: 1px solid #ddd; padding: 8px;">\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9</td><td style="border: 1px solid #ddd; padding: 8px;">Angular 5\u5E74\u3001React 3\u5E74</td><td style="border: 1px solid #ddd; padding: 8px;">3/31\uFF08\u706B\uFF09\u5348\u524D</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;"><strong>B\u6C0F\uFF0832\u6B73\uFF09</strong></td><td style="border: 1px solid #ddd; padding: 8px;">\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9</td><td style="border: 1px solid #ddd; padding: 8px;">Java 7\u5E74\u3001Go 2\u5E74</td><td style="border: 1px solid #ddd; padding: 8px;">4/1\uFF08\u6C34\uFF09\u5348\u5F8C</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;"><strong>C\u6C0F\uFF0826\u6B73\uFF09</strong></td><td style="border: 1px solid #ddd; padding: 8px;">\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9</td><td style="border: 1px solid #ddd; padding: 8px;">Python 4\u5E74\u3001AWS 3\u5E74</td><td style="border: 1px solid #ddd; padding: 8px;">4/2\uFF08\u6728\uFF09\u7D42\u65E5\u53EF</td></tr>
      </table>
      <p>\u4E00\u6B21\u9762\u63A5\u3067\u306E\u8A55\u4FA1\u30B3\u30E1\u30F3\u30C8\uFF1A</p>
      <ul>
        <li><strong>A\u6C0F:</strong> \u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u80FD\u529B\u304C\u9AD8\u304F\u3001\u30C1\u30FC\u30E0\u30EF\u30FC\u30AF\u3092\u91CD\u8996\u3059\u308B\u59FF\u52E2\u304C\u597D\u5370\u8C61\u3002\u73FE\u8077\u3067\u306E\u30C6\u30C3\u30AF\u30EA\u30FC\u30C9\u7D4C\u9A13\u3042\u308A\u3002\u5E0C\u671B\u5E74\u53CE650\u4E07\u5186\u3002</li>
        <li><strong>B\u6C0F:</strong> \u5927\u898F\u6A21\u30B7\u30B9\u30C6\u30E0\u306E\u8A2D\u8A08\u7D4C\u9A13\u304C\u8C4A\u5BCC\u3002\u30DE\u30A4\u30AF\u30ED\u30B5\u30FC\u30D3\u30B9\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306B\u7CBE\u901A\u3002\u8EE2\u8077\u7406\u7531\u306F\u6280\u8853\u7684\u306A\u30C1\u30E3\u30EC\u30F3\u30B8\u3092\u6C42\u3081\u3066\u3002\u5E0C\u671B\u5E74\u53CE720\u4E07\u5186\u3002</li>
        <li><strong>C\u6C0F:</strong> \u82E5\u624B\u306A\u304C\u3089AWS\u8A8D\u5B9A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u30A2\u30FC\u30AD\u30C6\u30AF\u30C8\u53D6\u5F97\u6E08\u307F\u3002\u500B\u4EBA\u3067OSS\u3078\u306E\u8CA2\u732E\u5B9F\u7E3E\u3042\u308A\u3002\u5B66\u7FD2\u610F\u6B32\u304C\u975E\u5E38\u306B\u9AD8\u3044\u3002\u5E0C\u671B\u5E74\u53CE550\u4E07\u5186\u3002</li>
      </ul>
      <p><strong>\u3054\u90FD\u5408\u306E\u826F\u3044\u65E5\u7A0B\u30923\u670827\u65E5\uFF08\u6728\uFF09\u4E2D\u306B\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044\u3002</strong>\u5019\u88DC\u8005\u3078\u306E\u9023\u7D61\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306E\u90FD\u5408\u4E0A\u3001\u65E9\u3081\u306E\u3054\u56DE\u7B54\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002</p>
      ${sig("\u4F0A\u85E4\u3081\u3050\u307F", "\u4EBA\u4E8B\u90E8 \u63A1\u7528\u62C5\u5F53")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u3002\u6765\u9031\u306E\u63A1\u7528\u9762\u63A5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u8ABF\u6574\u3092\u304A\u9858\u3044\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-25T13:30:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-biz-007",
    hasAttachments: false
  },
  {
    id: "msg-018",
    from: senders["nakamura"],
    to: [me],
    subject: "API\u8A2D\u8A08\u66F8\u306E\u6700\u7D42\u7248",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002\n\nAPI\u8A2D\u8A08\u66F8\u306E\u6700\u7D42\u7248\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002</p>
      <p>API\u8A2D\u8A08\u66F8\u306E\u6700\u7D42\u7248\uFF08v3\uFF09\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002\u524D\u56DE\u306E\u30EC\u30D3\u30E5\u30FC\u4F1A\u8B70\uFF083/20\uFF09\u3067\u3044\u305F\u3060\u3044\u305F\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u516814\u4EF6\u3092\u53CD\u6620\u3057\u3066\u3044\u307E\u3059\u3002\u5909\u66F4\u5C65\u6B74\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u672B\u5C3E\u306EAppendix A\u306B\u307E\u3068\u3081\u3066\u3042\u308A\u307E\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #1565c0; padding-bottom: 4px;">v3\u3067\u306E\u4E3B\u306A\u5909\u66F4\u70B9</h3>
      <ol>
        <li><strong>\u8A8D\u8A3C\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306E\u30EC\u30B9\u30DD\u30F3\u30B9\u5F62\u5F0F\u7D71\u4E00</strong>
          <p style="color: #666; margin: 4px 0 12px 0;">\u5168\u8A8D\u8A3C\u7CFBAPI\uFF08/auth/login, /auth/refresh, /auth/logout\uFF09\u306E\u30EC\u30B9\u30DD\u30F3\u30B9\u5F62\u5F0F\u3092\u7D71\u4E00\u3002JWT\u306E\u30DA\u30A4\u30ED\u30FC\u30C9\u306Brole, permissions\u914D\u5217\u3092\u8FFD\u52A0\u3002</p>
        </li>
        <li><strong>\u30DA\u30FC\u30B8\u30CD\u30FC\u30B7\u30E7\u30F3\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u6A19\u6E96\u5316</strong>
          <p style="color: #666; margin: 4px 0 12px 0;">cursor-based\u30DA\u30FC\u30B8\u30CD\u30FC\u30B7\u30E7\u30F3\u3092\u63A1\u7528\u3002\u30D1\u30E9\u30E1\u30FC\u30BF: cursor, limit\uFF08\u30C7\u30D5\u30A9\u30EB\u30C820\u3001\u6700\u5927100\uFF09\u3002\u30EC\u30B9\u30DD\u30F3\u30B9\u306Bnext_cursor, has_more\u3092\u542B\u3081\u308B\u3002</p>
        </li>
        <li><strong>\u30A8\u30E9\u30FC\u30EC\u30B9\u30DD\u30F3\u30B9\u306ERFC 7807\u6E96\u62E0</strong>
          <p style="color: #666; margin: 4px 0 12px 0;">Problem Details\u5F62\u5F0F\uFF08type, title, status, detail, instance\uFF09\u306B\u7D71\u4E00\u3002\u72EC\u81EA\u30D5\u30A3\u30FC\u30EB\u30C9\u3068\u3057\u3066error_code, traceId\u3092\u8FFD\u52A0\u3002</p>
        </li>
        <li><strong>\u30EC\u30FC\u30C8\u5236\u9650\u306E\u4ED5\u69D8\u8FFD\u52A0</strong>
          <p style="color: #666; margin: 4px 0 12px 0;">Token Bucket\u65B9\u5F0F\u3092\u63A1\u7528\u3002\u30EC\u30B9\u30DD\u30F3\u30B9\u30D8\u30C3\u30C0\u30FC\u306BX-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset\u3092\u4ED8\u4E0E\u3002</p>
        </li>
      </ol>
      <h3 style="color: #333; border-bottom: 2px solid #1565c0; padding-bottom: 4px;">API\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u4E00\u89A7\uFF08\u65B0\u898F\u8FFD\u52A0\u5206\uFF09</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%; font-size: 13px;">
        <tr style="background: #1565c0; color: white;"><th style="border: 1px solid #ddd; padding: 6px;">\u30E1\u30BD\u30C3\u30C9</th><th style="border: 1px solid #ddd; padding: 6px;">\u30D1\u30B9</th><th style="border: 1px solid #ddd; padding: 6px;">\u8AAC\u660E</th><th style="border: 1px solid #ddd; padding: 6px;">\u8A8D\u8A3C</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px; color: #43a047; font-weight: bold;">GET</td><td style="border: 1px solid #ddd; padding: 6px; font-family: monospace;">/api/v2/users/me/preferences</td><td style="border: 1px solid #ddd; padding: 6px;">\u30E6\u30FC\u30B6\u30FC\u8A2D\u5B9A\u53D6\u5F97</td><td style="border: 1px solid #ddd; padding: 6px;">\u5FC5\u9808</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px; color: #1e88e5; font-weight: bold;">PUT</td><td style="border: 1px solid #ddd; padding: 6px; font-family: monospace;">/api/v2/users/me/preferences</td><td style="border: 1px solid #ddd; padding: 6px;">\u30E6\u30FC\u30B6\u30FC\u8A2D\u5B9A\u66F4\u65B0</td><td style="border: 1px solid #ddd; padding: 6px;">\u5FC5\u9808</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px; color: #43a047; font-weight: bold;">GET</td><td style="border: 1px solid #ddd; padding: 6px; font-family: monospace;">/api/v2/notifications</td><td style="border: 1px solid #ddd; padding: 6px;">\u901A\u77E5\u4E00\u89A7\u53D6\u5F97</td><td style="border: 1px solid #ddd; padding: 6px;">\u5FC5\u9808</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px; color: #ff9800; font-weight: bold;">POST</td><td style="border: 1px solid #ddd; padding: 6px; font-family: monospace;">/api/v2/notifications/mark-read</td><td style="border: 1px solid #ddd; padding: 6px;">\u65E2\u8AAD\u4E00\u62EC\u66F4\u65B0</td><td style="border: 1px solid #ddd; padding: 6px;">\u5FC5\u9808</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px; color: #43a047; font-weight: bold;">GET</td><td style="border: 1px solid #ddd; padding: 6px; font-family: monospace;">/api/v2/schedules/conflicts</td><td style="border: 1px solid #ddd; padding: 6px;">\u4E88\u5B9A\u91CD\u8907\u30C1\u30A7\u30C3\u30AF</td><td style="border: 1px solid #ddd; padding: 6px;">\u5FC5\u9808</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px; color: #ff9800; font-weight: bold;">POST</td><td style="border: 1px solid #ddd; padding: 6px; font-family: monospace;">/api/v2/schedules/suggest</td><td style="border: 1px solid #ddd; padding: 6px;">\u7A7A\u304D\u6642\u9593\u63D0\u6848</td><td style="border: 1px solid #ddd; padding: 6px;">\u5FC5\u9808</td></tr>
      </table>
      <p>\u5168\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u6570: 47\uFF08v2\u306712\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u8FFD\u52A0\uFF09\u3002OpenAPI 3.0\u4ED5\u69D8\u66F8\u306F\u6DFB\u4ED8\u306EPDF\u304A\u3088\u3073Swagger UI\u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002</p>
      <p><strong>\u554F\u984C\u306A\u3051\u308C\u3070\u3001\u6765\u9031\u6708\u66DC\u65E5\u304B\u3089\u5B9F\u88C5\u306B\u7740\u624B\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002</strong>\u5B9F\u88C5\u306E\u512A\u5148\u9806\u4F4D\u306F\u8A8D\u8A3C \u2192 \u30B9\u30B1\u30B8\u30E5\u30FC\u30EB \u2192 \u901A\u77E5\u306E\u9806\u3067\u9032\u3081\u308B\u4E88\u5B9A\u3067\u3059\u3002</p>
      ${sig("\u4E2D\u6751\u5927\u8F14", "\u958B\u767A\u90E8 \u30B7\u30CB\u30A2\u30A8\u30F3\u30B8\u30CB\u30A2")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002API\u8A2D\u8A08\u66F8\u306E\u6700\u7D42\u7248\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-25T10:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [
      { id: "att-006", fileName: "API\u8A2D\u8A08\u66F8_v3_final.pdf", fileSize: 189e4, mimeType: "application/pdf" }
    ],
    threadId: "thread-biz-008",
    hasAttachments: true
  },
  {
    id: "msg-019",
    from: senders["kobayashi"],
    to: [me],
    subject: "\u7D4C\u8CBB\u7CBE\u7B97\u306E\u627F\u8A8D\u4F9D\u983C",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C0F\u6797\u3067\u3059\u3002\n\n3\u6708\u5206\u306E\u7D4C\u8CBB\u7CBE\u7B97\u66F8\u3092\u63D0\u51FA\u3044\u305F\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C0F\u6797\u3067\u3059\u3002</p>
      <p>3\u6708\u5206\u306E\u7D4C\u8CBB\u7CBE\u7B97\u66F8\u3092\u63D0\u51FA\u3044\u305F\u3057\u307E\u3059\u3002\u5E74\u5EA6\u672B\u306E\u305F\u3081\u4F8B\u6708\u3088\u308A\u3082\u4EF6\u6570\u304C\u591A\u304F\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002\u3054\u627F\u8A8D\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002\u306A\u304A\u3001\u6708\u672B\u7DE0\u3081\u51E6\u7406\u306E\u95A2\u4FC2\u4E0A\u3001<strong>3\u670828\u65E5\uFF08\u91D1\uFF09\u307E\u3067\u306B\u3054\u627F\u8A8D\u3044\u305F\u3060\u3051\u307E\u3059\u3068\u5E78\u3044\u3067\u3059\u3002</strong></p>
      <h3 style="color: #333; border-bottom: 2px solid #795548; padding-bottom: 4px;">\u7D4C\u8CBB\u660E\u7D30</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #795548; color: white;"><th style="border: 1px solid #ddd; padding: 8px;">\u65E5\u4ED8</th><th style="border: 1px solid #ddd; padding: 8px;">\u9805\u76EE</th><th style="border: 1px solid #ddd; padding: 8px;">\u8A73\u7D30</th><th style="border: 1px solid #ddd; padding: 8px;">\u91D1\u984D</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">3/3</td><td style="border: 1px solid #ddd; padding: 8px;">\u4EA4\u901A\u8CBB</td><td style="border: 1px solid #ddd; padding: 8px;">\u54C1\u5DDD\u2192\u6A2A\u6D5C\uFF08\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u8A2A\u554F\uFF09\u5F80\u5FA9</td><td style="border: 1px solid #ddd; padding: 8px; text-align: right;">\xA51,120</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">3/5</td><td style="border: 1px solid #ddd; padding: 8px;">\u4EA4\u901A\u8CBB</td><td style="border: 1px solid #ddd; padding: 8px;">\u54C1\u5DDD\u2192\u5927\u624B\u753A\uFF08\u672C\u793E\u4F1A\u8B70\uFF09\u5F80\u5FA9</td><td style="border: 1px solid #ddd; padding: 8px; text-align: right;">\xA5560</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">3/7</td><td style="border: 1px solid #ddd; padding: 8px;">\u63A5\u5F85\u8CBB</td><td style="border: 1px solid #ddd; padding: 8px;">ABC\u30B3\u30FC\u30DD\u30EC\u30FC\u30B7\u30E7\u30F3\u4F50\u3005\u6728\u90E8\u9577\u3068\u306E\u4F1A\u98DF\uFF08\u65B0\u5BBF\u300C\u548C\u5F69\u300D\uFF09</td><td style="border: 1px solid #ddd; padding: 8px; text-align: right;">\xA518,500</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">3/10</td><td style="border: 1px solid #ddd; padding: 8px;">\u4EA4\u901A\u8CBB</td><td style="border: 1px solid #ddd; padding: 8px;">\u30BF\u30AF\u30B7\u30FC\u4EE3\uFF08\u5BA2\u5148\u2192\u30AA\u30D5\u30A3\u30B9\u3001\u96E8\u5929\u306E\u305F\u3081\uFF09</td><td style="border: 1px solid #ddd; padding: 8px; text-align: right;">\xA53,200</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">3/12</td><td style="border: 1px solid #ddd; padding: 8px;">\u5099\u54C1\u8CFC\u5165</td><td style="border: 1px solid #ddd; padding: 8px;">USB\u30CF\u30D6\u3001HDMI\u30B1\u30FC\u30D6\u30EB\uFF08\u4F1A\u8B70\u5BA4\u7528\uFF09</td><td style="border: 1px solid #ddd; padding: 8px; text-align: right;">\xA54,500</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">3/14</td><td style="border: 1px solid #ddd; padding: 8px;">\u4EA4\u901A\u8CBB</td><td style="border: 1px solid #ddd; padding: 8px;">\u54C1\u5DDD\u2192\u540D\u53E4\u5C4B\uFF08\u51FA\u5F35\uFF09\u65B0\u5E79\u7DDA\u5F80\u5FA9</td><td style="border: 1px solid #ddd; padding: 8px; text-align: right;">\xA510,800</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">3/14</td><td style="border: 1px solid #ddd; padding: 8px;">\u63A5\u5F85\u8CBB</td><td style="border: 1px solid #ddd; padding: 8px;">DEF\u793E\u3068\u306E\u61C7\u89AA\u4F1A\uFF08\u540D\u53E4\u5C4B\u300C\u9DB4\u821E\u5EB5\u300D\uFF09</td><td style="border: 1px solid #ddd; padding: 8px; text-align: right;">\xA513,500</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">3/18</td><td style="border: 1px solid #ddd; padding: 8px;">\u5099\u54C1\u8CFC\u5165</td><td style="border: 1px solid #ddd; padding: 8px;">\u30D7\u30EC\u30BC\u30F3\u7528\u30DD\u30A4\u30F3\u30BF\u30FC</td><td style="border: 1px solid #ddd; padding: 8px; text-align: right;">\xA54,400</td></tr>
        <tr style="font-weight: bold; background: #f5f5f5;"><td style="border: 1px solid #ddd; padding: 8px;" colspan="3">\u5408\u8A08</td><td style="border: 1px solid #ddd; padding: 8px; text-align: right;">\xA556,580</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #795548; padding-bottom: 4px;">\u30AB\u30C6\u30B4\u30EA\u5225\u96C6\u8A08</h3>
      <table style="border-collapse: collapse; margin: 16px 0;">
        <tr style="background: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 8px;">\u30AB\u30C6\u30B4\u30EA</th><th style="border: 1px solid #ddd; padding: 8px;">\u91D1\u984D</th><th style="border: 1px solid #ddd; padding: 8px;">\u524D\u6708\u6BD4</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u4EA4\u901A\u8CBB</td><td style="border: 1px solid #ddd; padding: 8px;">\xA515,680</td><td style="border: 1px solid #ddd; padding: 8px;">+\xA54,200</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u63A5\u5F85\u8CBB</td><td style="border: 1px solid #ddd; padding: 8px;">\xA532,000</td><td style="border: 1px solid #ddd; padding: 8px;">+\xA512,000</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u5099\u54C1\u8CFC\u5165</td><td style="border: 1px solid #ddd; padding: 8px;">\xA58,900</td><td style="border: 1px solid #ddd; padding: 8px;">+\xA58,900</td></tr>
      </table>
      <p style="color: #666;">\u203B \u9818\u53CE\u66F8\u539F\u672C\u306F\u5168\u3066\u6DFB\u4ED8\u306EExcel\u30D5\u30A1\u30A4\u30EB\u5185\u306B\u753B\u50CF\u3068\u3057\u3066\u8CBC\u4ED8\u3057\u3066\u304A\u308A\u307E\u3059\u3002\u539F\u672C\u306F\u7DCF\u52D9\u90E8\u306B\u3066\u4FDD\u7BA1\u3057\u307E\u3059\u3002</p>
      ${sig("\u5C0F\u6797\u7531\u7F8E\u5B50", "\u7DCF\u52D9\u90E8 \u4E3B\u4EFB")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C0F\u6797\u3067\u3059\u30023\u6708\u5206\u306E\u7D4C\u8CBB\u7CBE\u7B97\u66F8\u3092\u63D0\u51FA\u3044\u305F\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-24T15:45:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [
      { id: "att-007", fileName: "\u7D4C\u8CBB\u7CBE\u7B97\u66F8_3\u6708.xlsx", fileSize: 456e3, mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
    ],
    threadId: "thread-biz-009",
    hasAttachments: true
  },
  {
    id: "msg-020",
    from: senders["kato"],
    to: [me],
    subject: "\u5E74\u5EA6\u672B\u306E\u5728\u5EAB\u68DA\u5378\u3057\u306B\u3064\u3044\u3066",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u52A0\u85E4\u3067\u3059\u3002\n\n\u5E74\u5EA6\u672B\u306E\u5728\u5EAB\u68DA\u5378\u3057\u306E\u65E5\u7A0B\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u52A0\u85E4\u3067\u3059\u3002</p>
      <p>\u5E74\u5EA6\u672B\u306E\u5728\u5EAB\u68DA\u5378\u3057\u306E\u5B9F\u65BD\u8981\u9818\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002\u4ECA\u5E74\u5EA6\u306F\u56FA\u5B9A\u8CC7\u7523\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0\u306E\u5C0E\u5165\u306B\u4F34\u3044\u3001\u30D0\u30FC\u30B3\u30FC\u30C9\u30B9\u30AD\u30E3\u30CA\u30FC\u3092\u4F7F\u7528\u3057\u305F\u68DA\u5378\u3057\u3092\u521D\u3081\u3066\u5B9F\u65BD\u3044\u305F\u3057\u307E\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #5d4037; padding-bottom: 4px;">\u5B9F\u65BD\u6982\u8981</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold; width: 25%;">\u5B9F\u65BD\u65E5</td><td style="padding: 8px;">2026\u5E743\u670831\u65E5\uFF08\u706B\uFF099:00\u301C17:00</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u5BFE\u8C61</td><td style="padding: 8px;">\u672C\u793E\u30D3\u30EB\u5168\u30D5\u30ED\u30A2\uFF081F\u301C8F\uFF09\u306E\u56FA\u5B9A\u8CC7\u7523\u30FB\u5099\u54C1</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u53C2\u52A0\u4EBA\u6570</td><td style="padding: 8px;">\u5404\u90E8\u9580\u304B\u30891\u301C2\u540D\uFF08\u8A0816\u540D\u4E88\u5B9A\uFF09</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u96C6\u5408\u5834\u6240</td><td style="padding: 8px;">1F\u4F1A\u8B70\u5BA4\uFF088:45\u96C6\u5408\u3001\u8AAC\u660E\u4F1A\u5B9F\u65BD\u5F8C\u306B\u5404\u30D5\u30ED\u30A2\u3078\uFF09</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #5d4037; padding-bottom: 4px;">\u30D5\u30ED\u30A2\u5225\u62C5\u5F53\u5272\u308A\u5F53\u3066</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 8px;">\u30D5\u30ED\u30A2</th><th style="border: 1px solid #ddd; padding: 8px;">\u62C5\u5F53\u8005</th><th style="border: 1px solid #ddd; padding: 8px;">\u60F3\u5B9A\u70B9\u6570</th><th style="border: 1px solid #ddd; padding: 8px;">\u6240\u8981\u6642\u9593\u76EE\u5B89</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">1F\uFF08\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9\u30FB\u53D7\uFFFD\uFFFD\uFFFD\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u5C0F\u6797\u3001\u4F50\u85E4</td><td style="border: 1px solid #ddd; padding: 8px;">45\u70B9</td><td style="border: 1px solid #ddd; padding: 8px;">1\u6642\u9593</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">2F\uFF08\u55B6\u696D\u90E8\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u9234\u6728\u3001\u7530\u4E2D</td><td style="border: 1px solid #ddd; padding: 8px;">120\u70B9</td><td style="border: 1px solid #ddd; padding: 8px;">2.5\u6642\u9593</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">3F\uFF08\u958B\u767A\u90E8\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u77F3\u5D0E\u3001\u4E2D\u6751</td><td style="border: 1px solid #ddd; padding: 8px;">180\u70B9</td><td style="border: 1px solid #ddd; padding: 8px;">3\u6642\u9593</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">4F\uFF08\u4F01\u753B\u90E8\u30FB\u30C7\u30B6\uFFFD\uFFFD\u30F3\u90E8\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u5C71\u7530\u3001\u9AD8\u6A4B</td><td style="border: 1px solid #ddd; padding: 8px;">95\u70B9</td><td style="border: 1px solid #ddd; padding: 8px;">2\u6642\u9593</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">5F-8F\uFF08\u7BA1\u7406\u90E8\u9580\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u52A0\u85E4\u3001\u4F0A\u85E4 \u4ED6</td><td style="border: 1px solid #ddd; padding: 8px;">210\u70B9</td><td style="border: 1px solid #ddd; padding: 8px;">4\u6642\u9593</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #5d4037; padding-bottom: 4px;">\u5F53\u65E5\u306E\u6301\u3061\u7269\u30FB\u6CE8\u610F\u4E8B\u9805</h3>
      <ul>
        <li>\u52D5\u304D\u3084\u3059\u3044\u670D\u88C5\u3067\u304A\u8D8A\u3057\u304F\u3060\u3055\u3044\uFF08\u79C1\u670DOK\uFF09</li>
        <li>\u30D0\u30FC\u30B3\u30FC\u30C9\u30B9\u30AD\u30E3\u30CA\u30FC\u306F\u7BA1\u7406\u90E8\u3067\u7528\u610F\u3057\u307E\u3059\uFF08\u5404\u30C1\u30FC\u30E01\uFFFD\uFFFD\uFF09</li>
        <li>\u68DA\u306E\u4E0A\u3084\u5965\u306B\u3042\u308B\u5099\u54C1\u3082\u78BA\u8A8D\u3059\u308B\u305F\u3081\u3001\u811A\u7ACB\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059</li>
        <li>\u663C\u98DF\u306F\u5404\u81EA\u3067\u304A\u53D6\u308A\u304F\u3060\u3055\u3044\uFF0812:00\uFFFD\uFFFD\uFFFD13:00\u3092\u4F11\u61A9\u6642\u9593\u3068\u3057\u307E\u3059\uFF09</li>
        <li>\u4E0D\u660E\u8CC7\u7523\u304C\u898B\u3064\u304B\u3063\u305F\u5834\u5408\u306F\u3001\u5199\u771F\u3092\u64AE\u5F71\u3057\u3066\u7BA1\u7406\u90E8\u306B\u5831\u544A\u3057\u3066\u304F\u3060\u3055\u3044</li>
      </ul>
      <p>\u3054\u8CEA\u554F\u304C\u3042\u308A\u307E\u3057\u305F\u3089\u7BA1\u7406\u90E8\uFF08\u5185\u7DDA: 2100\uFF09\u307E\u3067\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u52A0\u85E4\u6B63\u7FA9", "\u7BA1\u7406\u90E8 \u8AB2\u9577")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u52A0\u85E4\u3067\u3059\u3002\u5E74\u5EA6\u672B\u306E\u5728\u5EAB\u68DA\u5378\u3057\u306E\u65E5\u7A0B\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-24T09:30:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-biz-010",
    hasAttachments: false
  },
  {
    id: "msg-021",
    from: senders["tanaka"],
    to: [me],
    subject: "\u6765\u671F\u306E\u4E88\u7B97\u8A08\u753B\u306B\u3064\u3044\u3066",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u7530\u4E2D\u3067\u3059\u3002\n\n\u6765\u671F\u306E\u4E88\u7B97\u8A08\u753B\u306E\u30C9\u30E9\u30D5\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u7530\u4E2D\u3067\u3059\u3002</p>
      <p>\u6765\u671F\uFF082026\u5E744\u6708\u301C2027\u5E743\u6708\uFF09\u306E\u4E88\u7B97\u8A08\u753B\u30C9\u30E9\u30D5\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002\u5404\u90E8\u9580\u304B\u3089\u306E\u8981\u671B\u3092\u30D2\u30A2\u30EA\u30F3\u30B0\u3057\u3001\u7D4C\u55B6\u65B9\u91DD\u3092\u8E0F\u307E\u3048\u3066\u53D6\u308A\u307E\u3068\u3081\u3066\u304A\u308A\u307E\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #ff6f00; padding-bottom: 4px;">\u4E88\u7B97\u30B5\u30DE\u30EA\u30FC</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #ff6f00; color: white;"><th style="border: 1px solid #ddd; padding: 8px;">\u90E8\u9580</th><th style="border: 1px solid #ddd; padding: 8px;">\u4ECA\u671F\u5B9F\u7E3E</th><th style="border: 1px solid #ddd; padding: 8px;">\u6765\u671F\u8981\u6C42</th><th style="border: 1px solid #ddd; padding: 8px;">\u524D\u5E74\u6BD4</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u55B6\u696D\u90E8</td><td style="border: 1px solid #ddd; padding: 8px;">\xA545,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">\xA552,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">115.6%</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u958B\u767A\u90E8</td><td style="border: 1px solid #ddd; padding: 8px;">\xA582,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">\xA5105,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">128.0%</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u30C7\u30B6\u30A4\u30F3\u90E8</td><td style="border: 1px solid #ddd; padding: 8px;">\xA518,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">\xA522,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">122.2%</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u4EBA\u4E8B\u90E8</td><td style="border: 1px solid #ddd; padding: 8px;">\xA525,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">\xA530,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">120.0%</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u7BA1\u7406\u90E8</td><td style="border: 1px solid #ddd; padding: 8px;">\xA515,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">\xA516,500,000</td><td style="border: 1px solid #ddd; padding: 8px;">110.0%</td></tr>
        <tr style="font-weight: bold; background: #fff3e0;"><td style="border: 1px solid #ddd; padding: 8px;">\u5408\u8A08</td><td style="border: 1px solid #ddd; padding: 8px;">\xA5185,000,000</td><td style="border: 1px solid #ddd; padding: 8px;">\xA5225,500,000</td><td style="border: 1px solid #ddd; padding: 8px;">121.9%</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #ff6f00; padding-bottom: 4px;">\u4E3B\u306A\u5897\u984D\u8981\u56E0</h3>
      <ul>
        <li><strong>\u958B\u767A\u90E8\uFF08+\xA523,000,000\uFF09:</strong> \u30AF\u30E9\u30A6\u30C9\u79FB\u884C\u8CBB\u7528\uFF08\xA512,000,000\uFF09\u3001\u65B0\u898F\u30A8\u30F3\u30B8\u30CB\u30A2\u63A1\u75283\u540D\u5206\u306E\u4EBA\u4EF6\u8CBB\uFF08\xA58,000,000\uFF09\u3001\u958B\u767A\u30C4\u30FC\u30EB\u30E9\u30A4\u30BB\u30F3\u30B9\u66F4\u65B0\uFF08\xA53,000,000\uFF09</li>
        <li><strong>\u55B6\u696D\u90E8\uFF08+\xA57,000,000\uFF09:</strong> \u5C55\u793A\u4F1A\u51FA\u5C55\u8CBB\u7528\uFF08\xA53,000,000\uFF09\u3001CRM\u5C0E\u5165\u8CBB\u7528\uFF08\xA52,500,000\uFF09\u3001\u55B6\u696D\u62C5\u5F531\u540D\u5897\u54E1\uFF08\xA51,500,000\uFF09</li>
        <li><strong>\u4EBA\u4E8B\u90E8\uFF08+\xA55,000,000\uFF09:</strong> \u63A1\u7528\u6D3B\u52D5\u5F37\u5316\uFF08\xA52,000,000\uFF09\u3001\u7814\u4FEE\u30D7\u30ED\u30B0\u30E9\u30E0\u62E1\u5145\uFF08\xA51,500,000\uFF09\u3001\u798F\u5229\u539A\u751F\u5236\u5EA6\u306E\u898B\u76F4\u3057\uFF08\xA51,500,000\uFF09</li>
      </ul>
      <p>\u5168\u4F53\u3067\u524D\u5E74\u6BD4\u7D04120%\u306E\u4E88\u7B97\u8981\u6C42\u3068\u306A\u3063\u3066\u304A\u308A\u3001\u7D4C\u55B6\u9663\u304C\u8A2D\u5B9A\u3057\u305F\u4E0A\u9650\uFF08115%\uFF09\u3092\u8D85\u904E\u3057\u3066\u3044\u307E\u3059\u3002<strong>\u7D4C\u55B6\u4F1A\u8B70\uFF084/7\uFF09\u307E\u3067\u306B\u8ABF\u6574\u304C\u5FC5\u8981\u3067\u3059\u306E\u3067\u3001\u5404\u9805\u76EE\u306E\u512A\u5148\u5EA6\u3092\u691C\u8A0E\u3044\u305F\u3060\u3051\u307E\u3059\u3067\u3057\u3087\u3046\u304B\u3002</strong></p>
      <p>\u7279\u306B\u958B\u767A\u90E8\u306E\u30AF\u30E9\u30A6\u30C9\u79FB\u884C\u8CBB\u7528\u306B\u3064\u3044\u3066\u306F\u30013\u5E74\u9593\u306ETCO\u524A\u6E1B\u52B9\u679C\u3092\u8A66\u7B97\u3057\u305F\u8CC7\u6599\u3082\u6DFB\u4ED8\u3057\u3066\u304A\u308A\u307E\u3059\u306E\u3067\u3001\u5408\u308F\u305B\u3066\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u7530\u4E2D\u592A\u90CE", "\u55B6\u696D\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u7530\u4E2D\u3067\u3059\u3002\u6765\u671F\u306E\u4E88\u7B97\u8A08\u753B\u306E\u30C9\u30E9\u30D5\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-22T11:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work", "label-important"],
    attachments: [
      { id: "att-008", fileName: "\u6765\u671F\u4E88\u7B97\u8A08\u753B_draft.xlsx", fileSize: 112e4, mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
    ],
    threadId: "thread-biz-011",
    hasAttachments: true
  },
  {
    id: "msg-022",
    from: senders["sato"],
    to: [me],
    subject: "\u30B3\u30FC\u30C9\u30EC\u30D3\u30E5\u30FC\u4F9D\u983C: \u30E6\u30FC\u30B6\u30FC\u8A8D\u8A3C\u30E2\u30B8\u30E5\u30FC\u30EB",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002\n\n\u30E6\u30FC\u30B6\u30FC\u8A8D\u8A3C\u30E2\u30B8\u30E5\u30FC\u30EB\u306EPR\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002\u30EC\u30D3\u30E5\u30FC\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002</p>
      <p>\u30E6\u30FC\u30B6\u30FC\u8A8D\u8A3C\u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u5927\u578BPR\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002API\u8A2D\u8A08\u66F8v3\u306B\u57FA\u3065\u304D\u3001OAuth2.0 + OIDC\u8A8D\u8A3C\u306E\u5B8C\u5168\u306A\u5B9F\u88C5\u3067\u3059\u3002\u5909\u66F4\u30D5\u30A1\u30A4\u30EB\u6570\u304C\u591A\u3044\u305F\u3081\u3001\u30EC\u30D3\u30E5\u30FC\u306E\u30DD\u30A4\u30F3\u30C8\u3092\u6574\u7406\u3057\u307E\u3057\u305F\u3002</p>
      <p style="margin: 12px 0;"><a href="#" style="background: #1e88e5; color: white; padding: 8px 16px; border-radius: 4px; text-decoration: none;">PR #342: feat: OAuth2.0\u8A8D\u8A3C\u306E\u5B9F\u88C5</a></p>
      <h3 style="color: #333; border-bottom: 2px solid #1e88e5; padding-bottom: 4px;">PR\u6982\u8981</h3>
      <table style="border-collapse: collapse; margin: 16px 0;">
        <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u5909\u66F4\u30D5\u30A1\u30A4\u30EB\u6570</td><td>38\u30D5\u30A1\u30A4\u30EB</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u8FFD\u52A0\u884C\u6570</td><td style="color: #43a047;">+2,847\u884C</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u524A\u9664\u884C\u6570</td><td style="color: #e53935;">-312\u884C</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u30C6\u30B9\u30C8\u30AB\u30D0\u30EC\u30C3\u30B8</td><td>92.3%\uFF08\u76EE\u6A1990%\u9054\u6210\uFF09</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #666;">\u30D9\u30FC\u30B9\u30D6\u30E9\u30F3\u30C1</td><td>develop</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #1e88e5; padding-bottom: 4px;">\u5909\u66F4\u5185\u5BB9\u306E\u8A73\u7D30</h3>
      <ol>
        <li><strong>OAuth2.0 Authorization Code Flow + PKCE</strong>
          <ul>
            <li>AuthService: \u8A8D\u8A3C\u30D5\u30ED\u30FC\u5168\u4F53\u306E\u30AA\u30FC\u30B1\u30B9\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3</li>
            <li>AuthGuard: \u30EB\u30FC\u30C8\u30AC\u30FC\u30C9\u306B\u3088\u308B\u30A2\u30AF\u30BB\u30B9\u5236\u5FA1</li>
            <li>AuthInterceptor: HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u3078\u306EBearer\u30C8\u30FC\u30AF\u30F3\u81EA\u52D5\u4ED8\u4E0E</li>
          </ul>
        </li>
        <li><strong>JWT\u30C8\u30FC\u30AF\u30F3\u306E\u691C\u8A3C\u30ED\u30B8\u30C3\u30AF</strong>
          <ul>
            <li>RS256\u7F72\u540D\u306E\u691C\u8A3C\uFF08\u516C\u958B\u9375\u306FJWKS\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u304B\u3089\u53D6\u5F97\uFF09</li>
            <li>issuer, audience, expiration\u306E\u691C\u8A3C</li>
            <li>\u30AB\u30B9\u30BF\u30E0\u30AF\u30EC\u30FC\u30E0\uFF08role, permissions\uFF09\u306E\u30D1\u30FC\u30B9</li>
          </ul>
        </li>
        <li><strong>\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u30C8\u30FC\u30AF\u30F3\u306E\u7BA1\u7406</strong>
          <ul>
            <li>\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u671F\u9650\u5207\u308C\u6642\u306E\u81EA\u52D5\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\uFF08HttpInterceptor\u5185\u3067\u5B9F\u88C5\uFF09</li>
            <li>\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u30C8\u30FC\u30AF\u30F3\u306E\u30BB\u30AD\u30E5\u30A2\u30B9\u30C8\u30EC\u30FC\u30B8\uFF08HttpOnly Cookie\uFF09</li>
            <li>\u540C\u6642\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u6392\u4ED6\u5236\u5FA1\uFF08RxJS switchMap\u4F7F\u7528\uFF09</li>
          </ul>
        </li>
        <li><strong>\u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406</strong>
          <ul>
            <li>\u30A2\u30A4\u30C9\u30EB\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8: 30\u5206\uFF08\u8A2D\u5B9A\u53EF\u80FD\uFF09</li>
            <li>\u30BB\u30C3\u30B7\u30E7\u30F3\u6709\u52B9\u671F\u9650: 8\u6642\u9593\uFF08\u8A2D\u5B9A\u53EF\u80FD\uFF09</li>
            <li>\u30BF\u30D6\u9593\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u540C\u671F\uFF08BroadcastChannel API\u4F7F\u7528\uFF09</li>
          </ul>
        </li>
      </ol>
      <h3 style="color: #333; border-bottom: 2px solid #1e88e5; padding-bottom: 4px;">\u30EC\u30D3\u30E5\u30FC\u3067\u7279\u306B\u898B\u3066\u307B\u3057\u3044\u30DD\u30A4\u30F3\u30C8</h3>
      <ul>
        <li>src/app/core/auth/auth.interceptor.ts - \u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u30C8\u30FC\u30AF\u30F3\u306E\u7AF6\u5408\u51E6\u7406\u304C\u6B63\u3057\u3044\u304B</li>
        <li>src/app/core/auth/token.service.ts - \u30C8\u30FC\u30AF\u30F3\u306E\u4FDD\u5B58\u65B9\u6CD5\u304C\u30BB\u30AD\u30E5\u30A2\u304B</li>
        <li>src/app/core/auth/auth.guard.ts - \u6A29\u9650\u30C1\u30A7\u30C3\u30AF\u306E\u30ED\u30B8\u30C3\u30AF</li>
      </ul>
      <p><strong>\u30EC\u30D3\u30E5\u30FC\u671F\u9650: 3\u670824\u65E5\uFF08\u706B\uFF09</strong>\u307E\u3067\u306B\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u30DE\u30FC\u30B8\u5F8C\u3001\u30B9\u30C6\u30FC\u30B8\u30F3\u30B0\u74B0\u5883\u3067\u306EE2E\u30C6\u30B9\u30C8\u3092\u5B9F\u65BD\u4E88\u5B9A\u3067\u3059\u3002</p>
      ${sig("\u4F50\u85E4\u82B1\u5B50", "\u958B\u767A\u90E8 \u30DE\u30CD\u30FC\u30B8\u30E3\u30FC")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002\u30E6\u30FC\u30B6\u30FC\u8A8D\u8A3C\u30E2\u30B8\u30E5\u30FC\u30EB\u306EPR\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-20T16:15:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-biz-012",
    hasAttachments: false
  },
  {
    id: "msg-023",
    from: senders["watanabe"],
    to: [me],
    subject: "VPN\u63A5\u7D9A\u8A2D\u5B9A\u306E\u5909\u66F4\u306B\u3064\u3044\u3066",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u6E21\u8FBA\u3067\u3059\u3002\n\nVPN\u63A5\u7D9A\u306E\u8A2D\u5B9A\u5909\u66F4\u306B\u3064\u3044\u3066\u9023\u7D61\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u6E21\u8FBA\u3067\u3059\u3002</p>
      <p>\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u5F37\u5316\u306E\u4E00\u74B0\u3068\u3057\u3066\u30014\u67081\u65E5\u3088\u308AVPN\u63A5\u7D9A\u306E\u8A2D\u5B9A\u304C\u5909\u66F4\u3068\u306A\u308A\u307E\u3059\u3002\u5168\u793E\u54E1\u304C\u5F71\u97FF\u3092\u53D7\u3051\u307E\u3059\u306E\u3067\u3001<strong style="color: #e53935;">3\u670831\u65E5\u307E\u3067\u306B\u5FC5\u305A\u8A2D\u5B9A\u306E\u66F4\u65B0\u3092\u5B8C\u4E86\u3057\u3066\u304F\u3060\u3055\u3044\u3002</strong></p>
      <h3 style="color: #333; border-bottom: 2px solid #37474f; padding-bottom: 4px;">\u5909\u66F4\u5185\u5BB9</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 8px;">\u9805\u76EE</th><th style="border: 1px solid #ddd; padding: 8px;">\u73FE\u884C</th><th style="border: 1px solid #ddd; padding: 8px;">\u5909\u66F4\u5F8C</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">VPN\u30D7\u30ED\u30C8\u30B3\u30EB</td><td style="border: 1px solid #ddd; padding: 8px;">L2TP/IPsec</td><td style="border: 1px solid #ddd; padding: 8px;">WireGuard</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u8A8D\u8A3C\u65B9\u5F0F</td><td style="border: 1px solid #ddd; padding: 8px;">ID/\u30D1\u30B9\u30EF\u30FC\u30C9</td><td style="border: 1px solid #ddd; padding: 8px;">\u8A3C\u660E\u66F8 + \u591A\u8981\u7D20\u8A8D\u8A3C\uFF08MFA\uFF09</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u63A5\u7D9A\u5148</td><td style="border: 1px solid #ddd; padding: 8px;">vpn.example.co.jp</td><td style="border: 1px solid #ddd; padding: 8px;">vpn2.example.co.jp</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">\u540C\u6642\u63A5\u7D9A\u6570</td><td style="border: 1px solid #ddd; padding: 8px;">1\u30C7\u30D0\u30A4\u30B9</td><td style="border: 1px solid #ddd; padding: 8px;">\u6700\u59273\u30C7\u30D0\u30A4\u30B9</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #37474f; padding-bottom: 4px;">\u8A2D\u5B9A\u624B\u9806</h3>
      <ol>
        <li>\u793E\u5185\u30DD\u30FC\u30BF\u30EB\uFF08https://portal.example.co.jp/vpn\uFF09\u306B\u30A2\u30AF\u30BB\u30B9</li>
        <li>\u300CVPN\u8A2D\u5B9A\u30C4\u30FC\u30EB\u300D\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\uFF08Windows / macOS\u5BFE\u5FDC\uFF09</li>
        <li>\u30C4\u30FC\u30EB\u3092\u5B9F\u884C\u3057\u3001\u793E\u54E1\u756A\u53F7\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3067\u8A8D\u8A3C</li>
        <li>\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u8A3C\u660E\u66F8\u304C\u81EA\u52D5\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u307E\u3059</li>
        <li>Microsoft Authenticator\u30A2\u30D7\u30EA\u3067\u306E\u30C8\u30FC\u30C6\u30E0\u8A8D\u8A3C\u767B\u9332\uFF08\u521D\u56DE\u306E\u307F\uFF09</li>
        <li>\u63A5\u7D9A\u30C6\u30B9\u30C8\u306E\u5B9F\u65BD</li>
      </ol>
      <p><strong>\u6CE8\u610F\u4E8B\u9805:</strong></p>
      <ul>
        <li>4\u67081\u65E5\u4EE5\u964D\u3001\u65E7VPN\uFF08L2TP/IPsec\uFF09\u306F\u63A5\u7D9A\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059</li>
        <li>\u500B\u4EBA\u6240\u6709\u30C7\u30D0\u30A4\u30B9\u3067\u63A5\u7D9A\u3059\u308B\u5834\u5408\u306F\u3001\u4E8B\u524D\u306BMDM\u767B\u9332\u304C\u5FC5\u8981\u3067\u3059</li>
        <li>\u6D77\u5916\u51FA\u5F35\u6642\u306E\u63A5\u7D9A\u306B\u3064\u3044\u3066\u3082\u540C\u3058\u8A2D\u5B9A\u3067\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u3059</li>
      </ul>
      <p>\u8A2D\u5B9A\u306B\u95A2\u3059\u308BFAQ\u306F\u793E\u5185\u30DD\u30FC\u30BF\u30EB\u306B\u63B2\u8F09\u3057\u3066\u3044\u307E\u3059\u3002\u3054\u4E0D\u660E\u306A\u70B9\u304C\u3042\u308A\u307E\u3057\u305F\u3089\u3001\u60C5\u5831\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u90E8\uFF08\u5185\u7DDA: 2200\uFF09\u307E\u305F\u306F\u30D8\u30EB\u30D7\u30C7\u30B9\u30AF\uFF08helpdesk@example.co.jp\uFF09\u307E\u3067\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u6E21\u8FBA\u76F4\u4EBA", "\u60C5\u5831\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u6E21\u8FBA\u3067\u3059\u30024\u67081\u65E5\u3088\u308AVPN\u63A5\u7D9A\u306E\u8A2D\u5B9A\u304C\u5909\u66F4\u3068\u306A\u308A\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-18T09:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-biz-013",
    hasAttachments: false
  },
  {
    id: "msg-024",
    from: senders["ito"],
    to: [me],
    subject: "\u793E\u5185\u7814\u4FEE\u306E\u304A\u77E5\u3089\u305B\uFF084\u6708\u958B\u50AC\uFF09",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u3002\n\n4\u6708\u306E\u793E\u5185\u7814\u4FEE\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u3002</p>
      <p>2026\u5E74\u5EA6\u7B2C1\u56DB\u534A\u671F\u306E\u793E\u5185\u7814\u4FEE\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002\u4ECA\u671F\u306F\u300C\u30B9\u30AD\u30EB\u30A2\u30C3\u30D7\u300D\u3068\u300C\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u300D\u306E2\u8EF8\u3067\u7814\u4FEE\u3092\u4F01\u753B\u3057\u3066\u304A\u308A\u307E\u3059\u3002\u5BFE\u8C61\u8005\u306F\u5FC5\u305A\u3054\u53C2\u52A0\u304F\u3060\u3055\u3044\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #00897b; padding-bottom: 4px;">4\u6708\u306E\u7814\u4FEE\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #00897b; color: white;"><th style="border: 1px solid #ddd; padding: 8px;">\u65E5\u7A0B</th><th style="border: 1px solid #ddd; padding: 8px;">\u7814\u4FEE\u540D</th><th style="border: 1px solid #ddd; padding: 8px;">\u5BFE\u8C61</th><th style="border: 1px solid #ddd; padding: 8px;">\u5F62\u5F0F</th><th style="border: 1px solid #ddd; padding: 8px;">\u6642\u9593</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">4/8\uFF08\u6C34\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u30EA\u30FC\u30C0\u30FC\u30B7\u30C3\u30D7\u7814\u4FEE</td><td style="border: 1px solid #ddd; padding: 8px;">\u7BA1\u7406\u8077</td><td style="border: 1px solid #ddd; padding: 8px;">\u5BFE\u9762</td><td style="border: 1px solid #ddd; padding: 8px;">10:00-17:00</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">4/10\uFF08\u91D1\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u65B0\u5165\u793E\u54E1\u30D3\u30B8\u30CD\u30B9\u30DE\u30CA\u30FC\u7814\u4FEE</td><td style="border: 1px solid #ddd; padding: 8px;">\u65B0\u5165\u793E\u54E1</td><td style="border: 1px solid #ddd; padding: 8px;">\u5BFE\u9762</td><td style="border: 1px solid #ddd; padding: 8px;">9:00-18:00</td></tr>
        <tr style="background: #fff3e0;"><td style="border: 1px solid #ddd; padding: 8px;">4/15\uFF08\u6C34\uFF09</td><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u610F\u8B58\u5411\u4E0A\u7814\u4FEE \u2605\u5FC5\u9808</td><td style="border: 1px solid #ddd; padding: 8px;">\u5168\u793E\u54E1</td><td style="border: 1px solid #ddd; padding: 8px;">\u30AA\u30F3\u30E9\u30A4\u30F3</td><td style="border: 1px solid #ddd; padding: 8px;">14:00-16:00</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">4/22\uFF08\u6C34\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u65B0\u6280\u8853\u52C9\u5F37\u4F1A\uFF08\u751F\u6210AI\u6D3B\u7528\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u30A8\u30F3\u30B8\u30CB\u30A2</td><td style="border: 1px solid #ddd; padding: 8px;">\u30CF\u30A4\u30D6\u30EA\u30C3\u30C9</td><td style="border: 1px solid #ddd; padding: 8px;">15:00-17:00</td></tr>
        <tr style="background: #fff3e0;"><td style="border: 1px solid #ddd; padding: 8px;">4/25\uFF08\u91D1\uFF09</td><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u7814\u4FEE \u2605\u5FC5\u9808</td><td style="border: 1px solid #ddd; padding: 8px;">\u5168\u793E\u54E1</td><td style="border: 1px solid #ddd; padding: 8px;">e\u30E9\u30FC\u30CB\u30F3\u30B0</td><td style="border: 1px solid #ddd; padding: 8px;">\u5404\u81EA\uFF08\u7D0490\u5206\uFF09</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #00897b; padding-bottom: 4px;">\u7814\u4FEE\u8A73\u7D30</h3>
      <p><strong>\u30EA\u30FC\u30C0\u30FC\u30B7\u30C3\u30D7\u7814\u4FEE\uFF084/8\uFF09</strong></p>
      <p style="color: #666;">\u5916\u90E8\u8B1B\u5E2B\uFF08\u682A\u5F0F\u4F1A\u793E\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u30E9\u30DC \u9234\u6728\u8B1B\u5E2B\uFF09\u306B\u3088\u308B\u5B9F\u8DF5\u7684\u306A\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u5F62\u5F0F\u3002\u30C6\u30FC\u30DE\u306F\u300C1on1\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u52B9\u679C\u7684\u306A\u9032\u3081\u65B9\u300D\u3068\u300C\u5FC3\u7406\u7684\u5B89\u5168\u6027\u306E\u69CB\u7BC9\u300D\u3002\u6628\u5E74\u306E\u53C2\u52A0\u8005\u6E80\u8DB3\u5EA6\u306F4.7/5.0\u3068\u9AD8\u8A55\u4FA1\u3067\u3057\u305F\u3002</p>
      <p><strong>\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u610F\u8B58\u5411\u4E0A\u7814\u4FEE\uFF084/15\uFF09\u2605\u5168\u793E\u54E1\u5FC5\u9808</strong></p>
      <p style="color: #666;">\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0\u30E1\u30FC\u30EB\u5BFE\u7B56\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u7BA1\u7406\u3001\u30EA\u30E2\u30FC\u30C8\u30EF\u30FC\u30AF\u6642\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306B\u3064\u3044\u3066\u3002\u7814\u4FEE\u5F8C\u306B\u30AA\u30F3\u30E9\u30A4\u30F3\u30C6\u30B9\u30C8\uFF08\u5408\u683C\u57FA\u6E96: 80\u70B9\u4EE5\u4E0A\uFF09\u3092\u5B9F\u65BD\u3057\u307E\u3059\u3002\u672A\u53D7\u8B1B\u8005\u30FB\u4E0D\u5408\u683C\u8005\u306B\u306F\u8FFD\u52A0\u7814\u4FEE\u3092\u5B9F\u65BD\u3057\u307E\u3059\u3002</p>
      <p><strong>\u65B0\u6280\u8853\u52C9\u5F37\u4F1A\uFF084/22\uFF09</strong></p>
      <p style="color: #666;">\u30C6\u30FC\u30DE: \u300CGitHub Copilot / Claude Code\u3092\u6D3B\u7528\u3057\u305F\u958B\u767A\u52B9\u7387\u5316\u300D\u3002\u958B\u767A\u90E8\u30E1\u30F3\u30D0\u30FC\u306B\u3088\u308B\u4E8B\u4F8B\u7D39\u4ECB\u3068\u3001\u30CF\u30F3\u30BA\u30AA\u30F3\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u4E88\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002</p>
      <p><strong>\u53C2\u52A0\u7533\u8FBC\u306F3\u670828\u65E5\uFF08\u91D1\uFF09\u307E\u3067\u306B\u793E\u5185\u30DD\u30FC\u30BF\u30EB\u304B\u3089\u304A\u9858\u3044\u3057\u307E\u3059\u3002</strong>\u5B9A\u54E1\u304C\u3042\u308B\u7814\u4FEE\u306F\u5148\u7740\u9806\u3068\u306A\u308A\u307E\u3059\u3002</p>
      ${sig("\u4F0A\u85E4\u3081\u3050\u307F", "\u4EBA\u4E8B\u90E8 \u63A1\u7528\u62C5\u5F53")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u30024\u6708\u306E\u793E\u5185\u7814\u4FEE\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-16T10:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-biz-014",
    hasAttachments: false
  },
  {
    id: "msg-025",
    from: senders["kobayashi"],
    to: [me],
    subject: "\u30AA\u30D5\u30A3\u30B9\u5099\u54C1\u306E\u767A\u6CE8\u78BA\u8A8D",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C0F\u6797\u3067\u3059\u3002\n\n\u5148\u65E5\u3054\u4F9D\u983C\u3044\u305F\u3060\u3044\u305F\u5099\u54C1\u306E\u767A\u6CE8\u3092\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C0F\u6797\u3067\u3059\u3002</p>
      <p>\u5148\u65E5\u3054\u4F9D\u983C\u3044\u305F\u3060\u3044\u305F\u5099\u54C1\u306E\u767A\u6CE8\u3092\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002</p>
      <p>\u5230\u7740\u4E88\u5B9A: 3\u670828\u65E5\uFF08\u571F\uFF09</p>
      <ul>
        <li>\u30E2\u30CB\u30BF\u30FC\u30A2\u30FC\u30E0 x2</li>
        <li>\u30AD\u30FC\u30DC\u30FC\u30C9 x1</li>
        <li>\u30DE\u30A6\u30B9\u30D1\u30C3\u30C9 x3</li>
      </ul>
      ${sig("\u5C0F\u6797\u7531\u7F8E\u5B50", "\u7DCF\u52D9\u90E8 \u4E3B\u4EFB")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C0F\u6797\u3067\u3059\u3002\u5148\u65E5\u3054\u4F9D\u983C\u3044\u305F\u3060\u3044\u305F\u5099\u54C1\u306E\u767A\u6CE8\u3092\u5B8C\u4E86\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-14T14:20:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: true,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-biz-015",
    hasAttachments: false
  },
  // ========== Internal / Casual Emails (10) ==========
  {
    id: "msg-026",
    from: senders["takahashi"],
    to: [me],
    subject: "\u4ECA\u9031\u306E\u91D1\u66DC\u65E5\u3001\u30C1\u30FC\u30E0\u98F2\u307F\u4F1A\u3057\u307E\u305B\u3093\u304B\uFF1F",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\uFF01\u9AD8\u6A4B\u3067\u3059\u3002\n\n\u4ECA\u9031\u91D1\u66DC\u65E5\u306B\u30C1\u30FC\u30E0\u98F2\u307F\u4F1A\u3092\u4F01\u753B\u3057\u3066\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\uFF01\u9AD8\u6A4B\u3067\u3059\u3002</p>
      <p>\u4ECA\u9031\u91D1\u66DC\u65E5\u306B\u30C1\u30FC\u30E0\u98F2\u307F\u4F1A\u3092\u4F01\u753B\u3057\u3066\u3044\u307E\u3059 \u{1F37B}</p>
      <p>\u5834\u6240\u306F\u65B0\u5BBF\u306E\u5C45\u9152\u5C4B\u3092\u4E88\u7D04\u3059\u308B\u4E88\u5B9A\u3067\u3059\u300218:30\u30B9\u30BF\u30FC\u30C8\u3067\u3069\u3046\u3067\u3057\u3087\u3046\u304B\uFF1F</p>
      <p>\u53C2\u52A0\u3067\u304D\u308B\u65B9\u306F\u3053\u306E\u30E1\u30FC\u30EB\u306B\u8FD4\u4FE1\u3057\u3066\u304F\u3060\u3055\u3044\uFF01</p>
      ${sig("\u9AD8\u6A4B\u7F8E\u54B2", "\u30C7\u30B6\u30A4\u30F3\u90E8 \u30EA\u30FC\u30C0\u30FC")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\uFF01\u9AD8\u6A4B\u3067\u3059\u3002\u4ECA\u9031\u91D1\u66DC\u65E5\u306B\u30C1\u30FC\u30E0\u98F2\u307F\u4F1A\u3092\u4F01\u753B\u3057\u3066\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-27T12:00:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-personal"],
    attachments: [],
    threadId: "thread-int-001",
    hasAttachments: false
  },
  {
    id: "msg-027",
    from: senders["nakamura"],
    to: [me],
    subject: "\u304A\u3059\u3059\u3081\u306E\u6280\u8853\u66F8",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002\n\n\u5148\u65E5\u8A71\u3057\u3066\u3044\u305F\u6280\u8853\u66F8\u306E\u60C5\u5831\u3067\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002</p>
      <p>\u5148\u65E5\u306E\u30E9\u30F3\u30C1\u3067\u8A71\u3057\u3066\u3044\u305F\u6280\u8853\u66F8\u306E\u60C5\u5831\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002\u4ECA\u5E74\u8AAD\u3093\u3060\u4E2D\u3067\u7279\u306B\u826F\u304B\u3063\u305F\u3082\u306E\u3092\u30AB\u30C6\u30B4\u30EA\u5225\u306B\u7D39\u4ECB\u3057\u307E\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 4px;">\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9</h3>
      <ul>
        <li><strong>\u300C\u5B9F\u8DF5TypeScript\u300D\uFF08\u6280\u8853\u8A55\u8AD6\u793E\uFF09</strong> - \u578B\u30B7\u30B9\u30C6\u30E0\u306E\u6DF1\u3044\u7406\u89E3\u306B\u6700\u9069\u3002\u7279\u306BConditional Types\u3068Template Literal Types\u306E\u7AE0\u304C\u5B9F\u52D9\u3067\u5F79\u7ACB\u3061\u307E\u3057\u305F\u3002Angular\u958B\u767A\u8005\u306B\u306F\u7279\u306B\u304A\u3059\u3059\u3081\u3002\u2605\u2605\u2605\u2605\u2605</li>
        <li><strong>\u300CAngular\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u300D\uFF08\u7FD4\u6CF3\u793E\uFF09</strong> - \u5927\u898F\u6A21\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306E\u30E2\u30B8\u30E5\u30FC\u30EB\u8A2D\u8A08\u3001\u72B6\u614B\u7BA1\u7406\u30D1\u30BF\u30FC\u30F3\uFF08NgRx vs Signal Store\uFF09\u306E\u6BD4\u8F03\u304C\u8A73\u3057\u3044\u3002\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha\u306E\u8A2D\u8A08\u3067\u3082\u304B\u306A\u308A\u53C2\u8003\u306B\u3057\u307E\u3057\u305F\u3002\u2605\u2605\u2605\u2605\u2606</li>
        <li><strong>\u300CRxJS in Action\u300D\uFF08Manning\uFF09</strong> - \u82F1\u8A9E\u3067\u3059\u304C\u3001\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u8003\u3048\u65B9\u3092\u8EAB\u306B\u3064\u3051\u308B\u306A\u3089\u3053\u306E\u4E00\u518A\u3002\u4F50\u85E4\u3055\u3093\u306E\u52C9\u5F37\u4F1A\u3068\u5408\u308F\u305B\u3066\u8AAD\u3080\u3068\u52B9\u679C\u7684\u3067\u3059\u3002\u2605\u2605\u2605\u2605\u2606</li>
      </ul>
      <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 4px;">\u8A2D\u8A08\u30FB\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3</h3>
      <ul>
        <li><strong>\u300CClean Architecture\u300D\uFF08Robert C. Martin\uFF09</strong> - \u8A00\u308F\u305A\u3068\u77E5\u308C\u305F\u5FC5\u8AAD\u66F8\u3002\u4F9D\u5B58\u95A2\u4FC2\u306E\u65B9\u5411\u3092\u610F\u8B58\u3057\u305F\u8A2D\u8A08\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\u30C1\u30FC\u30E0\u5185\u306E\u5171\u901A\u8A00\u8A9E\u3068\u3057\u3066\u3082\u91CD\u8981\u3002\u2605\u2605\u2605\u2605\u2605</li>
        <li><strong>\u300C\u30DE\u30A4\u30AF\u30ED\u30B5\u30FC\u30D3\u30B9\u30D1\u30BF\u30FC\u30F3\u300D\uFF08Chris Richardson\uFF09</strong> - Saga\u30D1\u30BF\u30FC\u30F3\u3001CQRS\u306A\u3069\u306E\u5206\u6563\u30B7\u30B9\u30C6\u30E0\u30D1\u30BF\u30FC\u30F3\u304C\u5B9F\u4F8B\u4ED8\u304D\u3067\u89E3\u8AAC\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u30AF\u30E9\u30A6\u30C9\u79FB\u884C\u3092\u63A7\u3048\u305F\u4ECA\uFFFD\uFFFD\uFFFD\u8AAD\u3093\u3067\u304A\u304F\u3079\u304D\u4E00\u518A\u3002\u2605\u2605\u2605\u2605\u2606</li>
        <li><strong>\u300C\u30C9\u30E1\u30A4\u30F3\u99C6\u52D5\u8A2D\u8A08\u5165\u9580\u300D\uFF08\u6210\u702C\u5141\u5BA3\uFF09</strong> - DDD\u306E\u65E5\u672C\u8A9E\u5165\u9580\u66F8\u3068\u3057\u3066\u6700\u9069\u3002\u30A8\u30EA\u30C3\u30AF\u30FB\u30A8\u30F4\uFFFD\uFFFD\uFFFD\u30F3\u30B9\u306E\u539F\u8457\u306F\u5206\u539A\u3044\u306E\u3067\u3001\u307E\u305A\u3053\u3061\u3089\u304B\u3089\u3002\u2605\u2605\u2605\u2605\u2606</li>
      </ul>
      <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 4px;">DevOps\u30FB\u30A4\u30F3\u30D5\u30E9</h3>
      <ul>
        <li><strong>\u300CKubernetes\u5B8C\u5168\u30AC\u30A4\u30C9\u300D\uFF08\u9752\u5C71\u771F\u4E5F\uFF09</strong> - AWS\u79FB\u884C\u3067\u5FC5\u9808\u306B\u306A\u308B\u306E\u3067\u3001\u3053\u308C\u306F\u5168\u54E1\u8AAD\u3093\u3067\u307B\u3057\u3044\u3002\u7B2C3\u7248\u304C\u6700\u65B0\u3067\u3059\u3002\u2605\u2605\u2605\u2605\u2605</li>
      </ul>
      <p>\u793E\u5185\u306E\u6280\u8853\u66F8\u8CFC\u5165\u5236\u5EA6\uFF08\u6708\u984D5,000\u5186\u307E\u3067\uFF09\u3092\u4F7F\u3048\u308B\u306E\u3067\u3001\u6C17\u306B\u306A\u3063\u305F\u3082\u306E\u304C\u3042\u308C\u3070\u7DCF\u52D9\u90E8\u306B\u7533\u8ACB\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\uFF01</p>
      ${sig("\u4E2D\u6751\u5927\u8F14", "\u958B\u767A\u90E8 \u30B7\u30CB\u30A2\u30A8\u30F3\u30B8\u30CB\u30A2")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002\u5148\u65E5\u8A71\u3057\u3066\u3044\u305F\u6280\u8853\u66F8\u306E\u60C5\u5831\u3067\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-26T09:15:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-personal"],
    attachments: [],
    threadId: "thread-int-002",
    hasAttachments: false
  },
  {
    id: "msg-028",
    from: senders["yamada"],
    to: [me],
    subject: "\u30E9\u30F3\u30C1\u884C\u304D\u307E\u305B\u3093\u304B\uFF1F",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\uFF01\u5C71\u7530\u3067\u3059\u3002\n\n\u4ECA\u65E5\u306E\u30E9\u30F3\u30C1\u3001\u4E00\u7DD2\u306B\u3069\u3046\u3067\u3059\u304B\uFF1F",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\uFF01\u5C71\u7530\u3067\u3059\u3002</p>
      <p>\u4ECA\u65E5\u306E\u30E9\u30F3\u30C1\u3001\u4E00\u7DD2\u306B\u3069\u3046\u3067\u3059\u304B\uFF1F</p>
      <p>\u6700\u8FD1\u30AA\u30FC\u30D7\u30F3\u3057\u305F\u99C5\u524D\u306E\u30A4\u30BF\u30EA\u30A2\u30F3\u304C\u6C17\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u300212\u6642\u9803\u3069\u3046\u3067\u3057\u3087\u3046\uFF1F</p>
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\uFF01\u5C71\u7530\u3067\u3059\u3002\u4ECA\u65E5\u306E\u30E9\u30F3\u30C1\u3001\u4E00\u7DD2\u306B\u3069\u3046\u3067\u3059\u304B\uFF1F",
    date: /* @__PURE__ */ new Date("2026-03-25T11:30:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-personal"],
    attachments: [],
    threadId: "thread-int-003",
    hasAttachments: false
  },
  {
    id: "msg-029",
    from: senders["kato"],
    to: [me],
    subject: "\u5065\u5EB7\u8A3A\u65AD\u306E\u4E88\u7D04\u306B\u3064\u3044\u3066",
    body: "\u5404\u4F4D\n\n\u4ECA\u5E74\u5EA6\u306E\u5065\u5EB7\u8A3A\u65AD\u306E\u4E88\u7D04\u53D7\u4ED8\u3092\u958B\u59CB\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>2026\u5E74\u5EA6\u306E\u5B9A\u671F\u5065\u5EB7\u8A3A\u65AD\u306B\u3064\u3044\u3066\u3001\u4E88\u7D04\u53D7\u4ED8\u3092\u958B\u59CB\u3044\u305F\u3057\u307E\u3059\u306E\u3067\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002\u52B4\u50CD\u5B89\u5168\u885B\u751F\u6CD5\u306B\u57FA\u3065\u304F\u6CD5\u5B9A\u5065\u8A3A\u3068\u306A\u308A\u307E\u3059\u306E\u3067\u3001<strong>\u5168\u793E\u54E1\u304C\u5FC5\u305A\u53D7\u8A3A\u3057\u3066\u304F\u3060\u3055\u3044\u3002</strong></p>
      <h3 style="color: #333; border-bottom: 2px solid #00897b; padding-bottom: 4px;">\u5B9F\u65BD\u8981\u9818</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold; width: 25%;">\u4E88\u7D04\u671F\u9593</td><td style="padding: 8px;">2026\u5E743\u670825\u65E5\uFF08\u6C34\uFF09\u301C 4\u670810\u65E5\uFF08\u91D1\uFF09</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u5B9F\u65BD\u671F\u9593</td><td style="padding: 8px;">2026\u5E744\u670820\u65E5\uFF08\u6708\uFF09\u301C 5\u670815\u65E5\uFF08\u91D1\uFF09</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u5B9F\u65BD\u5834\u6240</td><td style="padding: 8px;">\u30B5\u30F3\u30D7\u30EB\u30C6\u30C3\u30AF\u5065\u5EB7\u7BA1\u7406\u30BB\u30F3\u30BF\u30FC\uFF08\u672C\u793E\u30D3\u30EB1F\uFF09</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u6240\u8981\u6642\u9593</td><td style="padding: 8px;">\u7D0460\u5206\uFF08\u4E00\u822C\u5065\u8A3A\uFF09/ \u7D0490\u5206\uFF08\u4EBA\u9593\u30C9\u30C3\u30AF\uFF09</td></tr>
        <tr><td style="padding: 8px; background: #f5f5f5; font-weight: bold;">\u4E88\u7D04\u65B9\u6CD5</td><td style="padding: 8px;">\u793E\u5185\u30DD\u30FC\u30BF\u30EB\u300C\u5065\u5EB7\u8A3A\u65AD\u4E88\u7D04\u300D\u3088\u308A</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #00897b; padding-bottom: 4px;">\u691C\u67FB\u9805\u76EE</h3>
      <p><strong>\u4E00\u822C\u5065\u8A3A\uFF08\u5168\u793E\u54E1\u5BFE\u8C61\uFF09:</strong></p>
      <ul>
        <li>\u8EAB\u4F53\u6E2C\u5B9A\uFF08\u8EAB\u9577\u3001\u4F53\u91CD\u3001BMI\u3001\u8179\u56F2\uFF09</li>
        <li>\u8840\u5727\u6E2C\u5B9A</li>
        <li>\u8996\u529B\u30FB\u8074\u529B\u691C\u67FB</li>
        <li>\u5C3F\u691C\u67FB\uFF08\u7CD6\u3001\u86CB\u767D\uFF09</li>
        <li>\u8840\u6DB2\u691C\u67FB\uFF08\u8CA7\u8840\u3001\u809D\u6A5F\u80FD\u3001\u8102\u8CEA\u3001\u8840\u7CD6\uFF09</li>
        <li>\u80F8\u90E8X\u7DDA\u691C\u67FB</li>
        <li>\u5FC3\u96FB\u56F3\u691C\u67FB</li>
        <li>\u554F\u8A3A</li>
      </ul>
      <p><strong>\u4EBA\u9593\u30C9\u30C3\u30AF\uFF0835\u6B73\u4EE5\u4E0A\u307E\u305F\u306F\u5E0C\u671B\u8005\uFF09:</strong></p>
      <p style="color: #666;">\u4E0A\u8A18\u306B\u52A0\u3048\u3001\u80C3\u30AB\u30E1\u30E9\uFF08\u307E\u305F\u306F\u80C3\u90E8X\u7DDA\uFF09\u3001\u8179\u90E8\u8D85\u97F3\u6CE2\u3001\u773C\u5E95\u691C\u67FB\u3001\u80BA\u6A5F\u80FD\u691C\u67FB\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u8CBB\u7528\u306F\u4F1A\u793E\u8CA0\u62C5\u3067\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #00897b; padding-bottom: 4px;">\u6CE8\u610F\u4E8B\u9805</h3>
      <ul>
        <li>\u524D\u65E521\u6642\u4EE5\u964D\u306F\u98DF\u4E8B\u3092\u63A7\u3048\u3066\u304F\u3060\u3055\u3044\uFF08\u6C34\u30FB\u304A\u8336\u306FOK\uFF09</li>
        <li>\u5F53\u65E5\u306F\u671D\u98DF\u3092\u629C\u3044\u3066\u304A\u8D8A\u3057\u304F\u3060\u3055\u3044</li>
        <li>\u670D\u85AC\u4E2D\u306E\u65B9\u306F\u4E8B\u524D\u306B\u554F\u8A3A\u7968\u306B\u3054\u8A18\u5165\u304F\u3060\u3055\u3044</li>
        <li>\u598A\u5A20\u4E2D\u30FB\u598A\u5A20\u306E\u53EF\u80FD\u6027\u304C\u3042\u308B\u65B9\u306FX\u7DDA\u691C\u67FB\u3092\u514D\u9664\u3067\u304D\u307E\u3059</li>
      </ul>
      <p>\u3054\u4E0D\u660E\u306A\u70B9\u306F\u7BA1\u7406\u90E8\uFF08\u5185\u7DDA: 2100\uFF09\u307E\u305F\u306F\u7523\u696D\u533B\uFF08\u5185\u7DDA: 2150\uFF09\u307E\u3067\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u52A0\u85E4\u6B63\u7FA9", "\u7BA1\u7406\u90E8 \u8AB2\u9577")}
    </div>`,
    snippet: "\u5404\u4F4D \u4ECA\u5E74\u5EA6\u306E\u5065\u5EB7\u8A3A\u65AD\u306E\u4E88\u7D04\u53D7\u4ED8\u3092\u958B\u59CB\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-24T08:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-int-004",
    hasAttachments: false
  },
  {
    id: "msg-030",
    from: senders["suzuki"],
    to: [me],
    subject: "\u30D5\u30C3\u30C8\u30B5\u30EB\u5927\u4F1A\u306E\u304A\u77E5\u3089\u305B",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\uFF01\u9234\u6728\u3067\u3059\u3002\n\n\u6765\u6708\u306E\u793E\u5185\u30D5\u30C3\u30C8\u30B5\u30EB\u5927\u4F1A\u306E\u53C2\u52A0\u8005\u3092\u52DF\u96C6\u3057\u3066\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\uFF01\u9234\u6728\u3067\u3059\u3002</p>
      <p>\u6765\u6708\u306E\u793E\u5185\u30D5\u30C3\u30C8\u30B5\u30EB\u5927\u4F1A\u306E\u53C2\u52A0\u8005\u3092\u52DF\u96C6\u3057\u3066\u3044\u307E\u3059\u26BD</p>
      <p>\u65E5\u6642: 4\u670812\u65E5\uFF08\u65E5\uFF0910:00\u301C</p>
      <p>\u5834\u6240: \u30B9\u30DD\u30FC\u30C4\u30BB\u30F3\u30BF\u30FC\u4F53\u80B2\u9928</p>
      <p>\u30C1\u30FC\u30E0\u5206\u3051\u306F\u53C2\u52A0\u4EBA\u6570\u78BA\u5B9A\u5F8C\u306B\u884C\u3044\u307E\u3059\u3002\u53C2\u52A0\u5E0C\u671B\u306E\u65B9\u306F\u8FD4\u4FE1\u304F\u3060\u3055\u3044\uFF01</p>
      ${sig("\u9234\u6728\u5065\u4E8C", "\u55B6\u696D\u90E8 \u8AB2\u9577")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\uFF01\u9234\u6728\u3067\u3059\u3002\u6765\u6708\u306E\u793E\u5185\u30D5\u30C3\u30C8\u30B5\u30EB\u5927\u4F1A\u306E\u53C2\u52A0\u8005\u3092\u52DF\u96C6\u3057\u3066\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-21T16:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-personal"],
    attachments: [],
    threadId: "thread-int-005",
    hasAttachments: false
  },
  {
    id: "msg-031",
    from: senders["sato"],
    to: [me],
    subject: "\u52C9\u5F37\u4F1A\u306E\u30B9\u30E9\u30A4\u30C9\u5171\u6709",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002\n\n\u5148\u65E5\u306E\u52C9\u5F37\u4F1A\u3067\u4F7F\u7528\u3057\u305F\u30B9\u30E9\u30A4\u30C9\u3092\u5171\u6709\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002</p>
      <p>\u5148\u65E5\u306E\u52C9\u5F37\u4F1A\u3067\u4F7F\u7528\u3057\u305F\u30B9\u30E9\u30A4\u30C9\u3092\u5171\u6709\u3057\u307E\u3059\u3002</p>
      <p>\u30C6\u30FC\u30DE: \u300CRxJS\u3092\u4F7F\u3063\u305F\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5165\u9580\u300D</p>
      <p>\u8CEA\u554F\u304C\u3042\u308C\u3070\u3044\u3064\u3067\u3082\u805E\u3044\u3066\u304F\u3060\u3055\u3044\uFF01</p>
      ${sig("\u4F50\u85E4\u82B1\u5B50", "\u958B\u767A\u90E8 \u30DE\u30CD\u30FC\u30B8\u30E3\u30FC")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002\u5148\u65E5\u306E\u52C9\u5F37\u4F1A\u3067\u4F7F\u7528\u3057\u305F\u30B9\u30E9\u30A4\u30C9\u3092\u5171\u6709\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-19T13:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [
      { id: "att-009", fileName: "RxJS\u5165\u9580.pdf", fileSize: 456e4, mimeType: "application/pdf" }
    ],
    threadId: "thread-int-006",
    hasAttachments: true
  },
  {
    id: "msg-032",
    from: senders["tanaka"],
    to: [me],
    subject: "\u304A\u82B1\u898B\u306E\u5834\u6240\u53D6\u308A\u306B\u3064\u3044\u3066",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u7530\u4E2D\u3067\u3059\u3002\n\n\u304A\u82B1\u898B\u306E\u5834\u6240\u53D6\u308A\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u3092\u52DF\u96C6\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u7530\u4E2D\u3067\u3059\u3002</p>
      <p>4\u6708\u306E\u982D\u306B\u304A\u82B1\u898B\u3092\u4E88\u5B9A\u3057\u3066\u3044\u307E\u3059\u{1F338}</p>
      <p>\u5834\u6240\u53D6\u308A\u3092\u3057\u3066\u304F\u3060\u3055\u308B\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u3092\u52DF\u96C6\u3057\u307E\u3059\u3002</p>
      <p>\u65E5\u6642: 4\u67084\u65E5\uFF08\u571F\uFF0911:00\u301C</p>
      <p>\u5834\u6240: \u4EE3\u3005\u6728\u516C\u5712</p>
      <p>\u5834\u6240\u53D6\u308A: 9:00\u304B\u3089\uFF082\u540D\u5FC5\u8981\uFF09</p>
      <p>\u53C2\u52A0\u5E0C\u671B\u30FB\u5834\u6240\u53D6\u308AOK\u306E\u65B9\u306F\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\uFF01</p>
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u7530\u4E2D\u3067\u3059\u30024\u6708\u306E\u982D\u306B\u304A\u82B1\u898B\u3092\u4E88\u5B9A\u3057\u3066\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-17T15:30:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-personal"],
    attachments: [],
    threadId: "thread-int-007",
    hasAttachments: false
  },
  {
    id: "msg-033",
    from: senders["ito"],
    to: [me],
    subject: "\u793E\u54E1\u65C5\u884C\u306E\u30A2\u30F3\u30B1\u30FC\u30C8\u7D50\u679C",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u3002\n\n\u793E\u54E1\u65C5\u884C\u306E\u30A2\u30F3\u30B1\u30FC\u30C8\u7D50\u679C\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u3002</p>
      <p>\u793E\u54E1\u65C5\u884C\u306E\u30A2\u30F3\u30B1\u30FC\u30C8\u7D50\u679C\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002</p>
      <ol>
        <li>\u7BB1\u6839\u6E29\u6CC9 - 45%</li>
        <li>\u6C96\u7E04 - 30%</li>
        <li>\u4EAC\u90FD - 25%</li>
      </ol>
      <p>\u4E00\u756A\u4EBA\u6C17\u306E\u7BB1\u6839\u6E29\u6CC9\u3067\u9032\u3081\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u8A73\u7D30\u306F\u8FFD\u3063\u3066\u3054\u9023\u7D61\u3057\u307E\u3059\u3002</p>
      ${sig("\u4F0A\u85E4\u3081\u3050\u307F", "\u4EBA\u4E8B\u90E8 \u63A1\u7528\u62C5\u5F53")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u3002\u793E\u54E1\u65C5\u884C\u306E\u30A2\u30F3\u30B1\u30FC\u30C8\u7D50\u679C\u3092\u304A\u77E5\u3089\u305B\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-13T11:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-personal"],
    attachments: [],
    threadId: "thread-int-008",
    hasAttachments: false
  },
  {
    id: "msg-034",
    from: senders["watanabe"],
    to: [me],
    subject: "\u30D1\u30B9\u30EF\u30FC\u30C9\u5909\u66F4\u306E\u304A\u9858\u3044",
    body: "\u5404\u4F4D\n\n\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30DD\u30EA\u30B7\u30FC\u306B\u57FA\u3065\u304D\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u5B9A\u671F\u5909\u66F4\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30DD\u30EA\u30B7\u30FC\u306B\u57FA\u3065\u304D\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u5B9A\u671F\u5909\u66F4\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
      <p>\u5BFE\u8C61: \u5168\u793E\u54E1</p>
      <p>\u671F\u9650: 3\u670831\u65E5\uFF08\u706B\uFF09</p>
      <p>\u5909\u66F4\u65B9\u6CD5\u306F\u793E\u5185\u30DD\u30FC\u30BF\u30EB\u306E\u300C\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u8A2D\u5B9A\u300D\u304B\u3089\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
      ${sig("\u6E21\u8FBA\u76F4\u4EBA", "\u60C5\u5831\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u5404\u4F4D \u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30DD\u30EA\u30B7\u30FC\u306B\u57FA\u3065\u304D\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u5B9A\u671F\u5909\u66F4\u3092\u304A\u9858\u3044\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-12T08:30:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-int-009",
    hasAttachments: false
  },
  {
    id: "msg-035",
    from: senders["kobayashi"],
    to: [me],
    subject: "\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u70B9\u691C\u306E\u304A\u77E5\u3089\u305B",
    body: "\u5404\u4F4D\n\n\u4EE5\u4E0B\u306E\u65E5\u7A0B\u3067\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u306E\u5B9A\u671F\u70B9\u691C\u3092\u884C\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>\u4EE5\u4E0B\u306E\u65E5\u7A0B\u3067\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u306E\u5B9A\u671F\u70B9\u691C\u3092\u884C\u3044\u307E\u3059\u3002</p>
      <p>\u65E5\u6642: 3\u670829\u65E5\uFF08\u65E5\uFF099:00\u301C12:00</p>
      <p>\u5BFE\u8C61: 1\u53F7\u6A5F\u30FB2\u53F7\u6A5F</p>
      <p>\u70B9\u691C\u4E2D\u306F\u968E\u6BB5\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002\u3054\u4E0D\u4FBF\u3092\u304A\u304B\u3051\u3057\u307E\u3059\u304C\u3054\u5354\u529B\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
      ${sig("\u5C0F\u6797\u7531\u7F8E\u5B50", "\u7DCF\u52D9\u90E8 \u4E3B\u4EFB")}
    </div>`,
    snippet: "\u5404\u4F4D \u4EE5\u4E0B\u306E\u65E5\u7A0B\u3067\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u306E\u5B9A\u671F\u70B9\u691C\u3092\u884C\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-10T10:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-int-010",
    hasAttachments: false
  },
  // ========== Thread 1: プロジェクトAlpha進捗 (5 messages) ==========
  {
    id: "msg-036",
    from: senders["tanaka"],
    to: [me, senders["sato"], senders["nakamura"]],
    subject: "Re: \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha \u9032\u6357\u78BA\u8A8D",
    body: "\u6700\u65B0\u306E\u72B6\u6CC1\u3092\u5171\u6709\u3057\u307E\u3059\u3002\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u306E\u5B9F\u88C5\u304C80%\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u6700\u65B0\u306E\u72B6\u6CC1\u3092\u5171\u6709\u3057\u307E\u3059\u3002\u5404\u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u9032\u6357\u3092\u8A73\u7D30\u306B\u307E\u3068\u3081\u307E\u3057\u305F\u3002</p>
      <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 4px;">\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u9032\u6357\uFF08\u5168\u4F53: 80%\uFF09</h3>
      <table style="border-collapse: collapse; margin: 12px 0; width: 100%;">
        <tr style="background: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 6px;">\u30E2\u30B8\u30E5\u30FC\u30EB</th><th style="border: 1px solid #ddd; padding: 6px;">\u9032\u6357</th><th style="border: 1px solid #ddd; padding: 6px;">\u30B9\u30C6\u30FC\u30BF\u30B9</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px;">\u30ED\u30B0\u30A4\u30F3\u30FB\u8A8D\u8A3C\u753B\u9762</td><td style="border: 1px solid #ddd; padding: 6px;">100%</td><td style="border: 1px solid #ddd; padding: 6px; color: #43a047;">\u5B8C\u4E86</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px;">\u30E1\u30FC\u30EB\u4E00\u89A7\u30FB\u8A73\u7D30</td><td style="border: 1px solid #ddd; padding: 6px;">100%</td><td style="border: 1px solid #ddd; padding: 6px; color: #43a047;">\u5B8C\u4E86</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px;">\u30AB\u30EC\u30F3\u30C0\u30FC\u30D3\u30E5\u30FC</td><td style="border: 1px solid #ddd; padding: 6px;">95%</td><td style="border: 1px solid #ddd; padding: 6px; color: #43a047;">\u30EC\u30D3\u30E5\u30FC\u4E2D</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px;">\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\uFF08\u30B0\u30E9\u30D5\uFF09</td><td style="border: 1px solid #ddd; padding: 6px;">60%</td><td style="border: 1px solid #ddd; padding: 6px; color: #ff9800;">\u958B\u767A\u4E2D</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px;">\u8A2D\u5B9A\u753B\u9762</td><td style="border: 1px solid #ddd; padding: 6px;">40%</td><td style="border: 1px solid #ddd; padding: 6px; color: #ff9800;">\u958B\u767A\u4E2D</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 6px;">\u901A\u77E5\u6A5F\u80FD</td><td style="border: 1px solid #ddd; padding: 6px;">20%</td><td style="border: 1px solid #ddd; padding: 6px; color: #e53935;">\u7740\u624B\u6E08</td></tr>
      </table>
      <p>\u6B8B\u308A\u306E\u30BF\u30B9\u30AF\u306B\u3064\u3044\u3066\u3001\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u898B\u901A\u3057\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\uFF1A</p>
      <ul>
        <li><strong>\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u306E\u30B0\u30E9\u30D5\u8868\u793A:</strong> Chart.js\u306E\u5B9F\u88C5\u4E2D\u3002\u5186\u30B0\u30E9\u30D5\u3001\u68D2\u30B0\u30E9\u30D5\u3001\u6298\u308C\u7DDA\u30B0\u30E9\u30D5\u306E3\u7A2E\u3092\u5B9F\u88C5\u30023/28\u5B8C\u4E86\u4E88\u5B9A\u3002</li>
        <li><strong>\u8A2D\u5B9A\u753B\u9762:</strong> \u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u8A2D\u5B9A\u3001\u901A\u77E5\u8A2D\u5B9A\u3001\u5916\u90E8\u9023\u643A\u8A2D\u5B9A\u306E3\u753B\u9762\u30023/31\u5B8C\u4E86\u4E88\u5B9A\u3002</li>
        <li><strong>\u901A\u77E5\u6A5F\u80FD:</strong> WebSocket\u63A5\u7D9A\u306B\u3088\u308B\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u901A\u77E5\u3002\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u306EServiceWorker\u5B9F\u88C5\u542B\u3080\u30024/3\u5B8C\u4E86\u4E88\u5B9A\u3002</li>
      </ul>
      <p>\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u3064\u3044\u3066\uFF1ALighthouse\u30B9\u30B3\u30A2\u306F\u73FE\u5728Performance: 85, Accessibility: 92, Best Practices: 95\u3067\u3059\u3002\u76EE\u6A19\u306E90\u70B9\u4EE5\u4E0A\u306B\u5411\u3051\u3066\u3001\u30B3\u30FC\u30C9\u5206\u5272\u3068\u30EC\u30A4\u30B8\u30FC\u30ED\u30FC\u30C9\u306E\u6700\u9069\u5316\u3092\u4E26\u884C\u3057\u3066\u9032\u3081\u3066\u3044\u307E\u3059\u3002</p>
      <p>\u6765\u9031\u4E2D\u306B\u306F\u307B\u307C\u5168\u30E2\u30B8\u30E5\u30FC\u30EB\u304C\u5B8C\u4E86\u898B\u8FBC\u307F\u3067\u3059\u3002</p>
      ${sig("\u7530\u4E2D\u592A\u90CE", "\u55B6\u696D\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u6700\u65B0\u306E\u72B6\u6CC1\u3092\u5171\u6709\u3057\u307E\u3059\u3002\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u306E\u5B9F\u88C5\u304C80%\u5B8C\u4E86\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-27T11:30:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-alpha",
    inReplyTo: "msg-037",
    hasAttachments: false
  },
  {
    id: "msg-037",
    from: senders["nakamura"],
    to: [me, senders["tanaka"], senders["sato"]],
    subject: "Re: \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha \u9032\u6357\u78BA\u8A8D",
    body: "\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9API\u306F\u4E88\u5B9A\u901A\u308A\u9032\u3093\u3067\u3044\u307E\u3059\u3002\u30C6\u30B9\u30C8\u3082\u9806\u8ABF\u3067\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9API\u306F\u4E88\u5B9A\u901A\u308A\u9032\u3093\u3067\u3044\u307E\u3059\u3002</p>
      <p>\u30C6\u30B9\u30C8\u30AB\u30D0\u30EC\u30C3\u30B8\u306F\u73FE\u572888%\u3067\u3001\u76EE\u6A19\u306E90%\u307E\u3067\u3042\u3068\u5C11\u3057\u3067\u3059\u3002</p>
      <p>\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u30C6\u30B9\u30C8\u306E\u7D50\u679C\u3082\u554F\u984C\u3042\u308A\u307E\u305B\u3093\u3002</p>
      ${sig("\u4E2D\u6751\u5927\u8F14", "\u958B\u767A\u90E8 \u30B7\u30CB\u30A2\u30A8\u30F3\u30B8\u30CB\u30A2")}
    </div>`,
    snippet: "\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9API\u306F\u4E88\u5B9A\u901A\u308A\u9032\u3093\u3067\u3044\u307E\u3059\u3002\u30C6\u30B9\u30C8\u3082\u9806\u8ABF\u3067\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-27T10:45:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-alpha",
    inReplyTo: "msg-038",
    hasAttachments: false
  },
  {
    id: "msg-038",
    from: senders["sato"],
    to: [me, senders["tanaka"], senders["nakamura"]],
    subject: "Re: \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha \u9032\u6357\u78BA\u8A8D",
    body: "\u4E86\u89E3\u3057\u307E\u3057\u305F\u3002\u30A4\u30F3\u30D5\u30E9\u5074\u306E\u6E96\u5099\u3082\u9032\u3081\u3066\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u4E86\u89E3\u3057\u307E\u3057\u305F\u3002\u30A4\u30F3\u30D5\u30E9\u5074\u306E\u6E96\u5099\u3082\u9032\u3081\u3066\u3044\u307E\u3059\u3002</p>
      <p>Kubernetes\u74B0\u5883\u306E\u69CB\u7BC9\u304C\u5B8C\u4E86\u3057\u3001CI/CD\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3082\u8A2D\u5B9A\u6E08\u307F\u3067\u3059\u3002</p>
      <p>\u30B9\u30C6\u30FC\u30B8\u30F3\u30B0\u74B0\u5883\u3078\u306E\u30C7\u30D7\u30ED\u30A4\u30C6\u30B9\u30C8\u3092\u4ECA\u9031\u4E2D\u306B\u5B9F\u65BD\u3057\u307E\u3059\u3002</p>
      ${sig("\u4F50\u85E4\u82B1\u5B50", "\u958B\u767A\u90E8 \u30DE\u30CD\u30FC\u30B8\u30E3\u30FC")}
    </div>`,
    snippet: "\u4E86\u89E3\u3057\u307E\u3057\u305F\u3002\u30A4\u30F3\u30D5\u30E9\u5074\u306E\u6E96\u5099\u3082\u9032\u3081\u3066\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-26T17:30:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-alpha",
    inReplyTo: "msg-039",
    hasAttachments: false
  },
  {
    id: "msg-039",
    from: me,
    to: [senders["tanaka"], senders["sato"], senders["nakamura"]],
    subject: "Re: \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha \u9032\u6357\u78BA\u8A8D",
    body: "\u7686\u3055\u3093\u3001\u9032\u6357\u5831\u544A\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u9806\u8ABF\u305D\u3046\u3067\u3059\u306D\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u7686\u3055\u3093\u3001\u9032\u6357\u5831\u544A\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u9806\u8ABF\u305D\u3046\u3067\u3059\u306D\u3002</p>
      <p>\u6C17\u306B\u306A\u308B\u70B9\u304C2\u3064\u3042\u308A\u307E\u3059\uFF1A</p>
      <ol>
        <li>\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u76EE\u6A19\u306F\u9054\u6210\u3067\u304D\u305D\u3046\u3067\u3059\u304B\uFF1F</li>
        <li>\u30EA\u30EA\u30FC\u30B9\u65E5\uFF084/15\uFF09\u306B\u5909\u66F4\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F</li>
      </ol>
      <p>\u6765\u9031\u6708\u66DC\u306E\u5B9A\u4F8B\u3067\u8A73\u3057\u304F\u78BA\u8A8D\u3057\u307E\u3057\u3087\u3046\u3002</p>
    </div>`,
    snippet: "\u7686\u3055\u3093\u3001\u9032\u6357\u5831\u544A\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u9806\u8ABF\u305D\u3046\u3067\u3059\u306D...",
    date: /* @__PURE__ */ new Date("2026-03-26T15:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-alpha",
    inReplyTo: "msg-040",
    hasAttachments: false
  },
  {
    id: "msg-040",
    from: senders["tanaka"],
    to: [me, senders["sato"], senders["nakamura"]],
    subject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha \u9032\u6357\u78BA\u8A8D",
    body: "\u5404\u4F4D\n\n\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha\u306E\u9032\u6357\u3092\u78BA\u8A8D\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha\u306E\u9032\u6357\u3092\u78BA\u8A8D\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002</p>
      <p>\u5404\u62C5\u5F53\u306E\u73FE\u5728\u306E\u72B6\u6CC1\u3092\u5171\u6709\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
      <ul>
        <li>\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u958B\u767A</li>
        <li>\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9API\u958B\u767A</li>
        <li>\u30A4\u30F3\u30D5\u30E9\u69CB\u7BC9</li>
        <li>\u30C6\u30B9\u30C8</li>
      </ul>
      <p>\u30EA\u30EA\u30FC\u30B9\u65E5\uFF084/15\uFF09\u306B\u5411\u3051\u3066\u9806\u8ABF\u306B\u9032\u3093\u3067\u3044\u308B\u304B\u78BA\u8A8D\u3057\u305F\u3044\u3067\u3059\u3002</p>
      ${sig("\u7530\u4E2D\u592A\u90CE", "\u55B6\u696D\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u5404\u4F4D \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Alpha\u306E\u9032\u6357\u3092\u78BA\u8A8D\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-26T10:00:00"),
    isRead: true,
    isStarred: true,
    isBookmarked: true,
    folderId: "inbox",
    labels: ["label-work", "label-important"],
    attachments: [],
    threadId: "thread-alpha",
    hasAttachments: false
  },
  // ========== Thread 2: サーバー障害対応 (4 messages) ==========
  {
    id: "msg-041",
    from: senders["watanabe"],
    to: [me, senders["sato"], senders["nakamura"]],
    subject: "Re: \u3010\u7DCA\u6025\u3011\u672C\u756A\u30B5\u30FC\u30D0\u30FC\u969C\u5BB3\u306B\u3064\u3044\u3066",
    body: "\u5FA9\u65E7\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002\u539F\u56E0\u306F\u30E1\u30E2\u30EA\u30EA\u30FC\u30AF\u3067\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #e8f5e9; padding: 12px; border-radius: 4px; border-left: 4px solid #43a047; margin-bottom: 16px;">
        <p style="margin: 0; font-weight: bold; color: #43a047;">\u2713 \u969C\u5BB3\u5FA9\u65E7\u5B8C\u4E86</p>
      </div>
      <p>\u672C\u756A\u30B5\u30FC\u30D0\u30FC\u306E\u5FA9\u65E7\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u306E\u3067\u3054\u5831\u544A\u3044\u305F\u3057\u307E\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 4px;">\u969C\u5BB3\u30EC\u30DD\u30FC\u30C8\uFF08\u901F\u5831\u7248\uFF09</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u969C\u5BB3ID</td><td style="padding: 6px;">INC-2026-0087</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u767A\u751F\u6642\u523B</td><td style="padding: 6px;">2026\u5E743\u670822\u65E5 02:30</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u691C\u77E5\u65B9\u6CD5</td><td style="padding: 6px;">Datadog \u30A2\u30E9\u30FC\u30C8\uFF08\u30E1\u30E2\u30EA\u4F7F\u7528\u738790%\u8D85\u904E\uFF09</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u5FA9\u65E7\u6642\u523B</td><td style="padding: 6px;">2026\u5E743\u670822\u65E5 04:30</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u30C0\u30A6\u30F3\u30BF\u30A4\u30E0</td><td style="padding: 6px;">\u7D042\u6642\u9593\uFF08\u90E8\u5206\u7684\u30B5\u30FC\u30D3\u30B9\u4F4E\u4E0B\uFF09</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u5F71\u97FF\u7BC4\u56F2</td><td style="padding: 6px;">Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5168\u4F53\uFF08\u63A8\u5B9A\u5F71\u97FF\u30E6\u30FC\u30B6\u30FC\u6570: \u7D04150\u540D\uFF09</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 4px;">\u539F\u56E0</h3>
      <p>\u591C\u9593\u30D0\u30C3\u30C1\u51E6\u7406\uFF08\u65E5\u6B21\u30EC\u30DD\u30FC\u30C8\u751F\u6210\u30B8\u30E7\u30D6\uFF09\u306B\u304A\u3051\u308B\u30E1\u30E2\u30EA\u30EA\u30FC\u30AF\u304C\u539F\u56E0\u3067\u3057\u305F\u3002\u5177\u4F53\u7684\u306B\u306F\u3001\u5927\u91CF\u306ECSV\u30C7\u30FC\u30BF\u3092\u51E6\u7406\u3059\u308B\u969B\u306B\u30B9\u30C8\u30EA\u30FC\u30E0\u51E6\u7406\u3067\u306F\u306A\u304F\u5168\u4EF6\u30E1\u30E2\u30EA\u4E0A\u306B\u5C55\u958B\u3057\u3066\u3044\u305F\u305F\u3081\u3001\u30C7\u30FC\u30BF\u91CF\u306E\u5897\u52A0\uFF083\u6708\u306F\u5E74\u5EA6\u672B\u3067\u901A\u5E38\u306E3\u500D\u306E\u30C7\u30FC\u30BF\u91CF\uFF09\u306B\u4F34\u3044\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u304C\u6025\u6FC0\u306B\u5897\u52A0\u3057\u307E\u3057\u305F\u3002</p>
      <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 4px;">\u5BFE\u5FDC\u5185\u5BB9</h3>
      <ol>
        <li>02:40 - \u30D0\u30C3\u30C1\u51E6\u7406\u30D7\u30ED\u30BB\u30B9\u306E\u7DCA\u6025\u505C\u6B62</li>
        <li>02:50 - \u30E1\u30E2\u30EA\u306E\u624B\u52D5\u89E3\u653E\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u306E\u518D\u8D77\u52D5</li>
        <li>03:15 - \u30B5\u30FC\u30D3\u30B9\u90E8\u5206\u5FA9\u65E7\u3092\u78BA\u8A8D</li>
        <li>03:30 - \u30E1\u30E2\u30EA\u30EA\u30FC\u30AF\u7B87\u6240\u3092\u7279\u5B9A\uFF08ReportGeneratorService.generateCsv()\uFF09</li>
        <li>04:00 - \u30B9\u30C8\u30EA\u30FC\u30E0\u51E6\u7406\u3078\u306E\u4FEE\u6B63\u30D1\u30C3\u30C1\u3092\u4F5C\u6210\u30FB\u9069\u7528</li>
        <li>04:30 - \u5168\u30B5\u30FC\u30D3\u30B9\u6B63\u5E38\u7A3C\u50CD\u3092\u78BA\u8A8D</li>
      </ol>
      <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 4px;">\u518D\u767A\u9632\u6B62\u7B56\uFF08\u4E88\u5B9A\uFF09</h3>
      <ul>
        <li>\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306E\u95BE\u5024\u30A2\u30E9\u30FC\u30C8\u309280%\u306B\u5F15\u304D\u4E0B\u3052\uFF08\u73FE\u884C90%\uFF09</li>
        <li>\u30D0\u30C3\u30C1\u51E6\u7406\u306E\u30E1\u30E2\u30EA\u30D7\u30ED\u30D5\u30A1\u30A4\u30EA\u30F3\u30B0\u30C6\u30B9\u30C8\u3092\u6708\u6B21\u3067\u5B9F\u65BD</li>
        <li>\u5927\u91CF\u30C7\u30FC\u30BF\u51E6\u7406\u306E\u8A2D\u8A08\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u3092\u4F5C\u6210</li>
      </ul>
      <p>\u8A73\u7D30\u306A\u969C\u5BB3\u5831\u544A\u66F8\uFF08RCA: Root Cause Analysis\u542B\u3080\uFF09\u306F\u6765\u9031\u6708\u66DC\u65E5\u307E\u3067\u306B\u63D0\u51FA\u3057\u307E\u3059\u3002</p>
      ${sig("\u6E21\u8FBA\u76F4\u4EBA", "\u60C5\u5831\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u5FA9\u65E7\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002\u539F\u56E0\u306F\u30E1\u30E2\u30EA\u30EA\u30FC\u30AF\u3067\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-22T05:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work", "label-important"],
    attachments: [],
    threadId: "thread-incident",
    inReplyTo: "msg-042",
    hasAttachments: false
  },
  {
    id: "msg-042",
    from: senders["nakamura"],
    to: [me, senders["watanabe"], senders["sato"]],
    subject: "Re: \u3010\u7DCA\u6025\u3011\u672C\u756A\u30B5\u30FC\u30D0\u30FC\u969C\u5BB3\u306B\u3064\u3044\u3066",
    body: "\u8ABF\u67FB\u4E2D\u3067\u3059\u3002\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u304C\u7570\u5E38\u306B\u5897\u52A0\u3057\u3066\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u8ABF\u67FB\u4E2D\u3067\u3059\u3002\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u304C\u7570\u5E38\u306B\u5897\u52A0\u3057\u3066\u3044\u307E\u3059\u3002</p>
      <p>\u30D0\u30C3\u30C1\u51E6\u7406\u306E\u30D7\u30ED\u30BB\u30B9\u304C\u539F\u56E0\u306E\u53EF\u80FD\u6027\u304C\u9AD8\u3044\u3067\u3059\u3002</p>
      <p>\u4E00\u65E6\u30D0\u30C3\u30C1\u51E6\u7406\u3092\u505C\u6B62\u3057\u3001\u624B\u52D5\u3067\u30E1\u30E2\u30EA\u3092\u89E3\u653E\u3057\u307E\u3057\u305F\u3002</p>
      ${sig("\u4E2D\u6751\u5927\u8F14", "\u958B\u767A\u90E8 \u30B7\u30CB\u30A2\u30A8\u30F3\u30B8\u30CB\u30A2")}
    </div>`,
    snippet: "\u8ABF\u67FB\u4E2D\u3067\u3059\u3002\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u304C\u7570\u5E38\u306B\u5897\u52A0\u3057\u3066\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-22T03:15:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work", "label-important"],
    attachments: [],
    threadId: "thread-incident",
    inReplyTo: "msg-043",
    hasAttachments: false
  },
  {
    id: "msg-043",
    from: senders["sato"],
    to: [me, senders["watanabe"], senders["nakamura"]],
    subject: "Re: \u3010\u7DCA\u6025\u3011\u672C\u756A\u30B5\u30FC\u30D0\u30FC\u969C\u5BB3\u306B\u3064\u3044\u3066",
    body: "\u4E86\u89E3\u3057\u307E\u3057\u305F\u3002\u3059\u3050\u306B\u78BA\u8A8D\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u4E86\u89E3\u3057\u307E\u3057\u305F\u3002\u3059\u3050\u306B\u78BA\u8A8D\u3057\u307E\u3059\u3002</p>
      <p>\u30B5\u30FC\u30D0\u30FC\u306E\u30ED\u30B0\u3092\u78BA\u8A8D\u3057\u305F\u3068\u3053\u308D\u30012:30\u9803\u304B\u3089\u30EC\u30B9\u30DD\u30F3\u30B9\u30BF\u30A4\u30E0\u304C\u6025\u6FC0\u306B\u60AA\u5316\u3057\u3066\u3044\u307E\u3059\u3002</p>
      <p>\u4E2D\u6751\u3055\u3093\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5074\u306E\u30ED\u30B0\u3082\u78BA\u8A8D\u3057\u3066\u3082\u3089\u3048\u307E\u3059\u304B\uFF1F</p>
      ${sig("\u4F50\u85E4\u82B1\u5B50", "\u958B\u767A\u90E8 \u30DE\u30CD\u30FC\u30B8\u30E3\u30FC")}
    </div>`,
    snippet: "\u4E86\u89E3\u3057\u307E\u3057\u305F\u3002\u3059\u3050\u306B\u78BA\u8A8D\u3057\u307E\u3059\u3002\u30B5\u30FC\u30D0\u30FC\u306E\u30ED\u30B0\u3092\u78BA\u8A8D\u3057\u305F\u3068\u3053\u308D...",
    date: /* @__PURE__ */ new Date("2026-03-22T02:45:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work", "label-important"],
    attachments: [],
    threadId: "thread-incident",
    inReplyTo: "msg-044",
    hasAttachments: false
  },
  {
    id: "msg-044",
    from: senders["watanabe"],
    to: [me, senders["sato"], senders["nakamura"]],
    subject: "\u3010\u7DCA\u6025\u3011\u672C\u756A\u30B5\u30FC\u30D0\u30FC\u969C\u5BB3\u306B\u3064\u3044\u3066",
    body: "\u7DCA\u6025\u9023\u7D61\u3067\u3059\u3002\u672C\u756A\u30B5\u30FC\u30D0\u30FC\u3067\u969C\u5BB3\u304C\u767A\u751F\u3057\u3066\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <div style="background: #ffebee; padding: 12px; border-radius: 4px; border-left: 4px solid #e53935; margin-bottom: 16px;">
        <p style="margin: 0; font-weight: bold; color: #e53935; font-size: 16px;">\u3010\u7DCA\u6025\u3011\u672C\u756A\u74B0\u5883\u969C\u5BB3\u767A\u751F</p>
      </div>
      <p>\u672C\u756A\u30B5\u30FC\u30D0\u30FC\u3067\u969C\u5BB3\u304C\u767A\u751F\u3057\u3066\u3044\u307E\u3059\u3002Datadog\u306E\u30A2\u30E9\u30FC\u30C8\u306B\u3088\u308A\u691C\u77E5\u3057\u307E\u3057\u305F\u3002\u81F3\u6025\u5BFE\u5FDC\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u969C\u5BB3ID</td><td style="padding: 6px;">INC-2026-0087</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u767A\u751F\u6642\u523B</td><td style="padding: 6px;">2026\u5E743\u670822\u65E5 02:30</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u5F71\u97FF\u7BC4\u56F2</td><td style="padding: 6px;">Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5168\u4F53\uFF08\u672C\u756A\u74B0\u5883 prod-web-01, prod-web-02\uFF09</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u75C7\u72B6</td><td style="padding: 6px;">\u30EC\u30B9\u30DD\u30F3\u30B9\u30BF\u30A4\u30E0\u304C\u901A\u5E38\u306E10\u500D\u4EE5\u4E0A\u306B\u60AA\u5316\uFF08\u5E73\u5747200ms \u2192 2,500ms\uFF09\u3002\u4E00\u90E8\u30EA\u30AF\u30A8\u30B9\u30C8\u304C30\u79D2\u3067\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3002</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #666; font-weight: bold;">\u30B5\u30FC\u30D0\u30FC\u72B6\u614B</td><td style="padding: 6px;">CPU: 45%\uFF08\u6B63\u5E38\uFF09\u3001\u30E1\u30E2\u30EA: 94%\uFF08\u7570\u5E38\uFF09\u3001\u30C7\u30A3\u30B9\u30AFI/O: \u6B63\u5E38</td></tr>
      </table>
      <p><strong>\u78BA\u8A8D\u6E08\u307F\u306E\u72B6\u6CC1:</strong></p>
      <ul>
        <li>CloudFront\u7D4C\u7531\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u6B63\u5E38\uFF08\u9759\u7684\u30A2\u30BB\u30C3\u30C8\u914D\u4FE1\u306B\u306F\u554F\u984C\u306A\u3057\uFF09</li>
        <li>\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\uFF08RDS\uFF09\u306E\u8CA0\u8377\u306F\u6B63\u5E38\u7BC4\u56F2</li>
        <li>\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u306E\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u304C\u7570\u5E38\u306B\u9AD8\u3044</li>
        <li>\u591C\u9593\u30D0\u30C3\u30C1\u51E6\u7406\u304C02:00\u304B\u3089\u5B9F\u884C\u4E2D</li>
      </ul>
      <p style="color: #e53935; font-weight: bold;">\u4F50\u85E4\u3055\u3093: \u30B5\u30FC\u30D0\u30FC\u30ED\u30B0\u306E\u78BA\u8A8D\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002<br>\u4E2D\u6751\u3055\u3093: \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5074\u306E\u30ED\u30B0\u78BA\u8A8D\u3068\u30D0\u30C3\u30C1\u51E6\u7406\u306E\u72B6\u6CC1\u78BA\u8A8D\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
      <p>Slack\u306E #incident-response \u30C1\u30E3\u30F3\u30CD\u30EB\u3067\u72B6\u6CC1\u3092\u5171\u6709\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u6E21\u8FBA\u76F4\u4EBA", "\u60C5\u5831\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u3010\u7DCA\u6025\u3011\u672C\u756A\u30B5\u30FC\u30D0\u30FC\u3067\u969C\u5BB3\u304C\u767A\u751F\u3057\u3066\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-22T02:35:00"),
    isRead: true,
    isStarred: true,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work", "label-important"],
    attachments: [],
    threadId: "thread-incident",
    hasAttachments: false
  },
  // ========== Thread 3: デザインシステム検討 (3 messages) ==========
  {
    id: "msg-045",
    from: senders["takahashi"],
    to: [me, senders["sato"]],
    subject: "Re: \u30C7\u30B6\u30A4\u30F3\u30B7\u30B9\u30C6\u30E0\u306E\u5C0E\u5165\u691C\u8A0E",
    body: "\u30AB\u30E9\u30FC\u30D1\u30EC\u30C3\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u6848\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u30AB\u30E9\u30FC\u30D1\u30EC\u30C3\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u6848\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002</p>
      <p>\u6DFB\u4ED8\u306EPDF\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002</p>
      <p>\u30D6\u30E9\u30F3\u30C9\u30AB\u30E9\u30FC\u306E#ff9800\u3092\u57FA\u8ABF\u306B\u3001\u30A2\u30AF\u30BB\u30B7\u30D6\u30EB\u306A\u30AB\u30E9\u30FC\u30B7\u30B9\u30C6\u30E0\u3092\u8A2D\u8A08\u3057\u3066\u3044\u307E\u3059\u3002</p>
      ${sig("\u9AD8\u6A4B\u7F8E\u54B2", "\u30C7\u30B6\u30A4\u30F3\u90E8 \u30EA\u30FC\u30C0\u30FC")}
    </div>`,
    snippet: "\u30AB\u30E9\u30FC\u30D1\u30EC\u30C3\u30C8\u3068\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u6848\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-20T14:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [
      { id: "att-010", fileName: "\u30C7\u30B6\u30A4\u30F3\u30B7\u30B9\u30C6\u30E0_\u30AB\u30E9\u30FC\u6848.pdf", fileSize: 234e4, mimeType: "application/pdf" }
    ],
    threadId: "thread-design",
    inReplyTo: "msg-046",
    hasAttachments: true
  },
  {
    id: "msg-046",
    from: senders["sato"],
    to: [me, senders["takahashi"]],
    subject: "Re: \u30C7\u30B6\u30A4\u30F3\u30B7\u30B9\u30C6\u30E0\u306E\u5C0E\u5165\u691C\u8A0E",
    body: "\u8CDB\u6210\u3067\u3059\u3002Storybook\u3067\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30AB\u30BF\u30ED\u30B0\u3092\u7BA1\u7406\u3059\u308B\u306E\u304C\u826F\u3044\u3068\u601D\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u8CDB\u6210\u3067\u3059\u3002Storybook\u3067\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30AB\u30BF\u30ED\u30B0\u3092\u7BA1\u7406\u3059\u308B\u306E\u304C\u826F\u3044\u3068\u601D\u3044\u307E\u3059\u3002</p>
      <p>Angular Material \u3092\u30D9\u30FC\u30B9\u306B\u30AB\u30B9\u30BF\u30E0\u30C6\u30FC\u30DE\u3092\u9069\u7528\u3059\u308B\u65B9\u5411\u3067\u9032\u3081\u307E\u3057\u3087\u3046\u3002</p>
      ${sig("\u4F50\u85E4\u82B1\u5B50", "\u958B\u767A\u90E8 \u30DE\u30CD\u30FC\u30B8\u30E3\u30FC")}
    </div>`,
    snippet: "\u8CDB\u6210\u3067\u3059\u3002Storybook\u3067\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30AB\u30BF\u30ED\u30B0\u3092\u7BA1\u7406\u3059\u308B\u306E\u304C\u826F\u3044\u3068\u601D\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-19T17:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-design",
    inReplyTo: "msg-047",
    hasAttachments: false
  },
  {
    id: "msg-047",
    from: me,
    to: [senders["takahashi"], senders["sato"]],
    subject: "\u30C7\u30B6\u30A4\u30F3\u30B7\u30B9\u30C6\u30E0\u306E\u5C0E\u5165\u691C\u8A0E",
    body: "\u9AD8\u6A4B\u3055\u3093\u3001\u4F50\u85E4\u3055\u3093\n\n\u30C7\u30B6\u30A4\u30F3\u30B7\u30B9\u30C6\u30E0\u306E\u5C0E\u5165\u3092\u691C\u8A0E\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u9AD8\u6A4B\u3055\u3093\u3001\u4F50\u85E4\u3055\u3093</p>
      <p>\u30C7\u30B6\u30A4\u30F3\u30B7\u30B9\u30C6\u30E0\u306E\u5C0E\u5165\u3092\u691C\u8A0E\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002</p>
      <p>\u73FE\u5728\u3001UI\u306E\u4E00\u8CAB\u6027\u306B\u8AB2\u984C\u304C\u3042\u308A\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u518D\u5229\u7528\u6027\u3082\u4F4E\u3044\u72B6\u614B\u3067\u3059\u3002</p>
      <p>\u4EE5\u4E0B\u306E\u65B9\u91DD\u3067\u9032\u3081\u305F\u3044\u306E\u3067\u3059\u304C\u3044\u304B\u304C\u3067\u3057\u3087\u3046\u304B\uFF1A</p>
      <ul>
        <li>\u5171\u901A\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u69CB\u7BC9</li>
        <li>\u30AB\u30E9\u30FC\u30D1\u30EC\u30C3\u30C8\u30FB\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u7D71\u4E00</li>
        <li>\u30C7\u30B6\u30A4\u30F3\u30C8\u30FC\u30AF\u30F3\u306E\u5B9A\u7FA9</li>
      </ul>
    </div>`,
    snippet: "\u30C7\u30B6\u30A4\u30F3\u30B7\u30B9\u30C6\u30E0\u306E\u5C0E\u5165\u3092\u691C\u8A0E\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-19T14:30:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-design",
    hasAttachments: false
  },
  // ========== Sent Messages (3) ==========
  {
    id: "msg-048",
    from: me,
    to: [senders["tanaka"]],
    subject: "Re: Q4\u58F2\u4E0A\u5831\u544A\u66F8\u306E\u78BA\u8A8D\u4F9D\u983C",
    body: "\u7530\u4E2D\u3055\u3093\n\n\u3054\u9023\u7D61\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u5831\u544A\u66F8\u3092\u78BA\u8A8D\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u7530\u4E2D\u3055\u3093</p>
      <p>\u3054\u9023\u7D61\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u5831\u544A\u66F8\u3092\u78BA\u8A8D\u3057\u307E\u3057\u305F\u3002</p>
      <p>\u5168\u4F53\u7684\u306B\u826F\u304F\u307E\u3068\u307E\u3063\u3066\u3044\u308B\u3068\u601D\u3044\u307E\u3059\u3002\u3044\u304F\u3064\u304B\u30B3\u30E1\u30F3\u30C8\u304C\u3042\u308A\u307E\u3059\uFF1A</p>
      <ul>
        <li>P.12\u306E\u65B0\u898F\u9867\u5BA2\u6570\u306E\u30B0\u30E9\u30D5\u3001\u524D\u5E74\u6BD4\u3082\u8FFD\u52A0\u3067\u304D\u307E\u3059\u304B\uFF1F</li>
        <li>\u30EA\u30D4\u30FC\u30C8\u7387\u306E\u8A08\u7B97\u65B9\u6CD5\u3092\u6CE8\u91C8\u306B\u5165\u308C\u3066\u304F\u3060\u3055\u3044</li>
      </ul>
      <p>\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
    </div>`,
    snippet: "\u7530\u4E2D\u3055\u3093 \u3054\u9023\u7D61\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u5831\u544A\u66F8\u3092\u78BA\u8A8D\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-27T11:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "sent",
    labels: [],
    attachments: [],
    threadId: "thread-biz-001",
    inReplyTo: "msg-011",
    hasAttachments: false
  },
  {
    id: "msg-049",
    from: me,
    to: [senders["suzuki"]],
    subject: "Re: \u65B0\u898F\u6848\u4EF6\u306E\u3054\u76F8\u8AC7",
    body: "\u9234\u6728\u3055\u3093\n\n\u65B0\u898F\u6848\u4EF6\u306E\u4EF6\u3001\u4E86\u89E3\u3057\u307E\u3057\u305F\u3002\u6765\u9031\u6253\u3061\u5408\u308F\u305B\u3057\u307E\u3057\u3087\u3046\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u9234\u6728\u3055\u3093</p>
      <p>\u65B0\u898F\u6848\u4EF6\u306E\u4EF6\u3001\u4E86\u89E3\u3057\u307E\u3057\u305F\u3002</p>
      <p>\u6765\u9031\u306E\u706B\u66DC\u65E5\u304B\u6C34\u66DC\u65E5\u306E\u5348\u5F8C\u3067\u3044\u304B\u304C\u3067\u3057\u3087\u3046\u304B\uFF1F</p>
      <p>\u30B9\u30B1\u30B3\u30F3\u3067\u7A7A\u304D\u6642\u9593\u3092\u78BA\u8A8D\u3057\u3066\u3001\u5019\u88DC\u65E5\u3092\u9001\u308A\u307E\u3059\u3002</p>
    </div>`,
    snippet: "\u9234\u6728\u3055\u3093 \u65B0\u898F\u6848\u4EF6\u306E\u4EF6\u3001\u4E86\u89E3\u3057\u307E\u3057\u305F\u3002\u6765\u9031\u6253\u3061\u5408\u308F\u305B\u3057\u307E\u3057\u3087\u3046...",
    date: /* @__PURE__ */ new Date("2026-03-26T15:30:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "sent",
    labels: [],
    attachments: [],
    threadId: "thread-biz-004",
    inReplyTo: "msg-014",
    hasAttachments: false
  },
  {
    id: "msg-050",
    from: me,
    to: [senders["ito"]],
    subject: "Re: \u63A1\u7528\u9762\u63A5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u8ABF\u6574",
    body: "\u4F0A\u85E4\u3055\u3093\n\n\u9762\u63A5\u306E\u4EF6\u3001\u4EE5\u4E0B\u306E\u65E5\u7A0B\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u4F0A\u85E4\u3055\u3093</p>
      <p>\u9762\u63A5\u306E\u4EF6\u3001\u4EE5\u4E0B\u306E\u65E5\u7A0B\u3067\u53C2\u52A0\u53EF\u80FD\u3067\u3059\uFF1A</p>
      <ul>
        <li>A\u6C0F: 3/31\uFF08\u706B\uFF0910:00\u301C OK</li>
        <li>B\u6C0F: 4/1\uFF08\u6C34\uFF0914:00\u301C OK</li>
        <li>C\u6C0F: 4/2\uFF08\u6728\uFF0910:00\u301C OK</li>
      </ul>
      <p>\u4F1A\u8B70\u5BA4\u306E\u4E88\u7D04\u3082\u304A\u9858\u3044\u3067\u304D\u307E\u3059\u304B\uFF1F</p>
    </div>`,
    snippet: "\u4F0A\u85E4\u3055\u3093 \u9762\u63A5\u306E\u4EF6\u3001\u4EE5\u4E0B\u306E\u65E5\u7A0B\u3067\u304A\u9858\u3044\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-25T14:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "sent",
    labels: [],
    attachments: [],
    threadId: "thread-biz-007",
    inReplyTo: "msg-017",
    hasAttachments: false
  },
  // ========== Drafts (2) ==========
  {
    id: "msg-051",
    from: me,
    to: [senders["watanabe"]],
    subject: "Re: \u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u5831\u544A\u66F8",
    body: "\u6E21\u8FBA\u3055\u3093\n\n\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u5831\u544A\u66F8\u3092\u78BA\u8A8D\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u6E21\u8FBA\u3055\u3093</p>
      <p>\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u5831\u544A\u66F8\u3092\u78BA\u8A8D\u3057\u307E\u3057\u305F\u3002</p>
      <p>SQL\u30A4\u30F3\u30B8\u30A7\u30AF\u30B7\u30E7\u30F3\u306E\u8106\u5F31\u6027\u306B\u3064\u3044\u3066\u306F\u3001\u4ECA\u9031\u4E2D\u306B\u4FEE\u6B63\u30D1\u30C3\u30C1\u3092</p>
    </div>`,
    snippet: "\u6E21\u8FBA\u3055\u3093 \u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u5831\u544A\u66F8\u3092\u78BA\u8A8D\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-26T18:30:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "drafts",
    labels: [],
    attachments: [],
    threadId: "thread-biz-006",
    inReplyTo: "msg-016",
    hasAttachments: false
  },
  {
    id: "msg-052",
    from: me,
    to: [],
    subject: "4\u6708\u306E\u30C1\u30FC\u30E0\u76EE\u6A19\u306B\u3064\u3044\u3066",
    body: "\u5404\u4F4D\n\n4\u6708\u306E\u30C1\u30FC\u30E0\u76EE\u6A19\u3092\u4EE5\u4E0B\u306E\u901A\u308A\u8A2D\u5B9A\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>4\u6708\u306E\u30C1\u30FC\u30E0\u76EE\u6A19\u3092\u4EE5\u4E0B\u306E\u901A\u308A\u8A2D\u5B9A\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002</p>
    </div>`,
    snippet: "\u5404\u4F4D 4\u6708\u306E\u30C1\u30FC\u30E0\u76EE\u6A19\u3092\u4EE5\u4E0B\u306E\u901A\u308A\u8A2D\u5B9A\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-25T20:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "drafts",
    labels: [],
    attachments: [],
    threadId: "thread-draft-001",
    hasAttachments: false
  },
  // ========== Additional unread messages for count ==========
  {
    id: "msg-053",
    from: senders["kato"],
    to: [me],
    subject: "\u4F1A\u8B70\u5BA4\u4E88\u7D04\u30B7\u30B9\u30C6\u30E0\u306E\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9",
    body: "\u5404\u4F4D\n\n\u4F1A\u8B70\u5BA4\u4E88\u7D04\u30B7\u30B9\u30C6\u30E0\u306E\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u3092\u5B9F\u65BD\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>\u4F1A\u8B70\u5BA4\u4E88\u7D04\u30B7\u30B9\u30C6\u30E0\u306E\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u3092\u5B9F\u65BD\u3057\u307E\u3059\u3002</p>
      <p>\u65E5\u6642: 3\u670829\u65E5\uFF08\u65E5\uFF0922:00\u301C\u7FCC6:00</p>
      <p>\u3053\u306E\u9593\u3001\u4E88\u7D04\u306E\u78BA\u8A8D\u30FB\u5909\u66F4\u304C\u3067\u304D\u307E\u305B\u3093\u306E\u3067\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u52A0\u85E4\u6B63\u7FA9", "\u7BA1\u7406\u90E8 \u8AB2\u9577")}
    </div>`,
    snippet: "\u5404\u4F4D \u4F1A\u8B70\u5BA4\u4E88\u7D04\u30B7\u30B9\u30C6\u30E0\u306E\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u3092\u5B9F\u65BD\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-27T08:00:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-misc-001",
    hasAttachments: false
  },
  {
    id: "msg-054",
    from: senders["suzuki"],
    to: [me],
    subject: "\u6765\u9031\u306E\u55B6\u696D\u4F1A\u8B70\u8CC7\u6599",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9234\u6728\u3067\u3059\u3002\n\n\u6765\u9031\u306E\u55B6\u696D\u4F1A\u8B70\u306E\u8CC7\u6599\u3092\u5171\u6709\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9234\u6728\u3067\u3059\u3002</p>
      <p>\u6765\u9031\u706B\u66DC\u65E5\uFF083/31\uFF09\u306E\u55B6\u696D\u4F1A\u8B70\u306E\u8CC7\u6599\u3092\u4E8B\u524D\u5171\u6709\u3057\u307E\u3059\u3002\u4ECA\u56DE\u306F\u5E74\u5EA6\u672B\u3068\u3044\u3046\u3053\u3068\u3067\u30013\u6708\u306E\u5B9F\u7E3E\u30EC\u30D3\u30E5\u30FC\u306B\u52A0\u3048\u3001\u6765\u671F\u306E\u55B6\u696D\u6226\u7565\u306B\u3064\u3044\u3066\u3082\u8B70\u8AD6\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #ff6f00; padding-bottom: 4px;">\u30A2\u30B8\u30A7\u30F3\u30C0</h3>
      <ol>
        <li><strong>3\u6708\u306E\u55B6\u696D\u5B9F\u7E3E\u30EC\u30D3\u30E5\u30FC</strong>\uFF0815\u5206\uFF09
          <ul>
            <li>\u6708\u6B21\u58F2\u4E0A: \xA589,500,000\uFF08\u76EE\u6A19\u6BD4103.5%\uFF09</li>
            <li>\u65B0\u898F\u5546\u8AC7: 18\u4EF6\uFF08\u3046\u3061\u6210\u7D048\u4EF6\u3001\u9032\u884C\u4E2D6\u4EF6\u3001\u5931\u6CE84\u4EF6\uFF09</li>
            <li>\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u91D1\u984D: \xA5245,000,000</li>
          </ul>
        </li>
        <li><strong>\u5E74\u9593\u5B9F\u7E3E\u30B5\u30DE\u30EA\u30FC</strong>\uFF0810\u5206\uFF09
          <ul>
            <li>\u5E74\u9593\u58F2\u4E0A: \xA51,020,000,000\uFF08\u76EE\u6A19\u6BD4105.2%\uFF09</li>
            <li>\u5E74\u9593\u65B0\u898F\u9867\u5BA2: 42\u793E</li>
            <li>\u9867\u5BA2\u6E80\u8DB3\u5EA6\uFF08NPS\uFF09: +45</li>
          </ul>
        </li>
        <li><strong>\u6765\u671F\u55B6\u696D\u6226\u7565\u306E\u691C\u8A0E</strong>\uFF0830\u5206\uFF09
          <ul>
            <li>\u91CD\u70B9\u696D\u7A2E\u306E\u9078\u5B9A\uFF08\u88FD\u9020\u696D\u3001\u91D1\u878D\u3001SaaS\uFF09</li>
            <li>\u30D1\u30FC\u30C8\u30CA\u30FC\u8CA9\u58F2\u30C1\u30E3\u30CD\u30EB\u306E\u62E1\u5927</li>
            <li>\u30A4\u30F3\u30B5\u30A4\u30C9\u30BB\u30FC\u30EB\u30B9\u30C1\u30FC\u30E0\u306E\u65B0\u8A2D\u63D0\u6848</li>
          </ul>
        </li>
        <li><strong>\u500B\u5225\u6848\u4EF6\u306E\u76F8\u8AC7</strong>\uFF0815\u5206\uFF09</li>
      </ol>
      <p>\u6DFB\u4ED8\u306E\u30B9\u30E9\u30A4\u30C9\u306B\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u307E\u3068\u3081\u3066\u3044\u307E\u3059\u306E\u3067\u3001\u4E8B\u524D\u306B\u3054\u78BA\u8A8D\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u7279\u306B\u6765\u671F\u6226\u7565\u306E\u90E8\u5206\u306B\u3064\u3044\u3066\u3001\u5404\u81EA\u306E\u3054\u610F\u898B\u3092\u304A\u6301\u3061\u3044\u305F\u3060\u3051\u308B\u3068\u8B70\u8AD6\u304C\u30B9\u30E0\u30FC\u30BA\u306B\u9032\u307F\u307E\u3059\u3002</p>
      ${sig("\u9234\u6728\u5065\u4E8C", "\u55B6\u696D\u90E8 \u8AB2\u9577")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9234\u6728\u3067\u3059\u3002\u6765\u9031\u306E\u55B6\u696D\u4F1A\u8B70\u306E\u8CC7\u6599\u3092\u5171\u6709\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-26T17:00:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [
      { id: "att-011", fileName: "\u55B6\u696D\u4F1A\u8B70\u8CC7\u6599_3\u6708.pptx", fileSize: 32e5, mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation" }
    ],
    threadId: "thread-misc-002",
    hasAttachments: true
  },
  {
    id: "msg-055",
    from: senders["ito"],
    to: [me],
    subject: "\u65B0\u5165\u793E\u54E1\u7814\u4FEE\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u78BA\u8A8D",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u3002\n\n4\u6708\u5165\u793E\u306E\u65B0\u5165\u793E\u54E1\u5411\u3051\u7814\u4FEE\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u3002</p>
      <p>4\u67081\u65E5\u5165\u793E\u306E\u65B0\u5165\u793E\u54E15\u540D\u306E\u7814\u4FEE\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002\u77F3\u5D0E\u3055\u3093\u306B\u306F\u958B\u767A\u90E8\u914D\u5C5E\u4E88\u5B9A\u306E2\u540D\u306E\u30E1\u30F3\u30BF\u30FC\u62C5\u5F53\u3092\u304A\u9858\u3044\u3057\u305F\u304F\u3001\u3054\u76F8\u8AC7\u3055\u305B\u3066\u304F\u3060\u3055\u3044\u3002</p>
      <h3 style="color: #333; border-bottom: 2px solid #00897b; padding-bottom: 4px;">\u65B0\u5165\u793E\u54E1\u7814\u4FEE\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\uFF084/1\u301C4/30\uFF09</h3>
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%;">
        <tr style="background: #00897b; color: white;"><th style="border: 1px solid #ddd; padding: 8px;">\u671F\u9593</th><th style="border: 1px solid #ddd; padding: 8px;">\u5185\u5BB9</th><th style="border: 1px solid #ddd; padding: 8px;">\u62C5\u5F53</th></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">4/1\u301C4/3</td><td style="border: 1px solid #ddd; padding: 8px;">\u5165\u793E\u30AA\u30EA\u30A8\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\uFF08\u4F1A\u793E\u6982\u8981\u3001\u5236\u5EA6\u8AAC\u660E\u3001PC\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u4EBA\u4E8B\u90E8</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">4/7\u301C4/11</td><td style="border: 1px solid #ddd; padding: 8px;">\u30D3\u30B8\u30CD\u30B9\u30DE\u30CA\u30FC\u30FB\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u7814\u4FEE</td><td style="border: 1px solid #ddd; padding: 8px;">\u5916\u90E8\u8B1B\u5E2B</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">4/14\u301C4/18</td><td style="border: 1px solid #ddd; padding: 8px;">\u6280\u8853\u57FA\u790E\u7814\u4FEE\uFF08Git\u3001CI/CD\u3001\u958B\u767A\u30D7\u30ED\u30BB\u30B9\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u958B\u767A\u90E8</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">4/21\u301C4/30</td><td style="border: 1px solid #ddd; padding: 8px;">OJT\uFF08\u30E1\u30F3\u30BF\u30FC\u6307\u5C0E\u306E\u3082\u3068\u5B9F\u52D9\u4F53\u9A13\uFF09</td><td style="border: 1px solid #ddd; padding: 8px;">\u5404\u914D\u5C5E\u5148</td></tr>
      </table>
      <h3 style="color: #333; border-bottom: 2px solid #00897b; padding-bottom: 4px;">\u30E1\u30F3\u30BF\u30FC\u5236\u5EA6\u306B\u3064\u3044\u3066</h3>
      <p>\u30E1\u30F3\u30BF\u30FC\u5236\u5EA6\u306F\u5165\u793E\u5F8C3\u30F6\u6708\u9593\u306E\u5236\u5EA6\u3067\u3059\u3002\u5177\u4F53\u7684\u306A\u5F79\u5272\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\uFF1A</p>
      <ul>
        <li>\u90311\u56DE\u306E1on1\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\uFF0830\u5206\u7A0B\u5EA6\uFF09</li>
        <li>\u65E5\u5E38\u7684\u306A\u696D\u52D9\u306E\u8CEA\u554F\u5BFE\u5FDC</li>
        <li>\u6708\u6B21\u306E\u6210\u9577\u30EC\u30DD\u30FC\u30C8\u63D0\u51FA\uFF08\u4EBA\u4E8B\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3042\u308A\uFF09</li>
        <li>3\u30F6\u6708\u5F8C\u306E\u914D\u5C5E\u9762\u8AC7\u3078\u306E\u53C2\u52A0</li>
      </ul>
      <p><strong>\u958B\u767A\u90E8\u914D\u5C5E\u4E88\u5B9A\u306E\u65B0\u5165\u793E\u54E1\uFF1A</strong></p>
      <ul>
        <li>\u4F50\u91CE\u5927\u5730\uFF08\u3055\u306E \u3060\u3044\u3061\uFF09- \u6771\u4EAC\u5DE5\u696D\u5927\u5B66 \u60C5\u5831\u5DE5\u5B66\u79D1\u5352\u3002Web\u30A2\u30D7\u30EA\u958B\u767A\u7D4C\u9A13\u3042\u308A\uFF08\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF09\u3002Angular\u5E0C\u671B\u3002</li>
        <li>\u6797\u7F8E\u512A\uFF08\u306F\u3084\u3057 \u307F\u3086\uFF09- \u6176\u61C9\u7FA9\u587E\u5927\u5B66 \u7406\u5DE5\u5B66\u90E8\u5352\u3002\u30A4\u30F3\u30BF\u30FC\u30F3\u3067Python/Django\u7D4C\u9A13\u3002\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u5FD7\u5411\u3002</li>
      </ul>
      <p>\u30E1\u30F3\u30BF\u30FC\u7D4C\u9A13\u306F\u77F3\u5D0E\u3055\u3093\u306E\u4EBA\u4E8B\u8A55\u4FA1\u306B\u3082\u53CD\u6620\u3055\u308C\u307E\u3059\u3002\u304A\u5FD9\u3057\u3044\u3068\u3053\u308D\u6050\u308C\u5165\u308A\u307E\u3059\u304C\u3001\u3054\u691C\u8A0E\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002</p>
      ${sig("\u4F0A\u85E4\u3081\u3050\u307F", "\u4EBA\u4E8B\u90E8 \u63A1\u7528\u62C5\u5F53")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F0A\u85E4\u3067\u3059\u30024\u6708\u5165\u793E\u306E\u65B0\u5165\u793E\u54E1\u5411\u3051\u7814\u4FEE\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-26T13:00:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-misc-003",
    hasAttachments: false
  },
  {
    id: "msg-056",
    from: senders["kobayashi"],
    to: [me],
    subject: "3\u6708\u306E\u52E4\u6020\u78BA\u8A8D\u306E\u304A\u9858\u3044",
    body: "\u5404\u4F4D\n\n3\u6708\u306E\u52E4\u6020\u30C7\u30FC\u30BF\u306E\u78BA\u8A8D\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>3\u6708\u306E\u52E4\u6020\u30C7\u30FC\u30BF\u306E\u78BA\u8A8D\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
      <p>\u7DE0\u5207: 3\u670831\u65E5\uFF08\u706B\uFF0917:00</p>
      <p>\u4FEE\u6B63\u304C\u3042\u308B\u5834\u5408\u306F\u7DCF\u52D9\u90E8\u307E\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u5C0F\u6797\u7531\u7F8E\u5B50", "\u7DCF\u52D9\u90E8 \u4E3B\u4EFB")}
    </div>`,
    snippet: "\u5404\u4F4D 3\u6708\u306E\u52E4\u6020\u30C7\u30FC\u30BF\u306E\u78BA\u8A8D\u3092\u304A\u9858\u3044\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-26T10:30:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-misc-004",
    hasAttachments: false
  },
  {
    id: "msg-057",
    from: senders["nakamura"],
    to: [me],
    subject: "Docker\u74B0\u5883\u306E\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002\n\nDocker\u74B0\u5883\u306E\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u4E88\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002</p>
      <p>Docker\u74B0\u5883\u306E\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u4E88\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002</p>
      <p>Docker Compose v2\u3078\u306E\u79FB\u884C\u306B\u4F34\u3044\u3001\u4E00\u90E8\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0\u304C\u5FC5\u8981\u3067\u3059\u3002</p>
      <p>\u624B\u9806\u66F8\u3092\u6DFB\u4ED8\u3057\u307E\u3059\u306E\u3067\u3001\u5404\u81EA\u5BFE\u5FDC\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
      ${sig("\u4E2D\u6751\u5927\u8F14", "\u958B\u767A\u90E8 \u30B7\u30CB\u30A2\u30A8\u30F3\u30B8\u30CB\u30A2")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002Docker\u74B0\u5883\u306E\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u4E88\u5B9A\u3057\u3066\u3044\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-25T16:00:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [
      { id: "att-012", fileName: "Docker\u79FB\u884C\u624B\u9806\u66F8.docx", fileSize: 89e4, mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }
    ],
    threadId: "thread-misc-005",
    hasAttachments: true
  },
  {
    id: "msg-058",
    from: senders["takahashi"],
    to: [me],
    subject: "UI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u6539\u5584",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9AD8\u6A4B\u3067\u3059\u3002\n\n\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u306E\u6539\u5584\u63D0\u6848\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9AD8\u6A4B\u3067\u3059\u3002</p>
      <p>\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u306E\u6539\u5584\u63D0\u6848\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002</p>
      <p>WCAG 2.1 AA\u6E96\u62E0\u3092\u76EE\u6A19\u306B\u3001\u4EE5\u4E0B\u306E\u9805\u76EE\u3092\u512A\u5148\u7684\u306B\u5BFE\u5FDC\u3057\u305F\u3044\u3068\u8003\u3048\u3066\u3044\u307E\u3059\u3002</p>
      <ul>
        <li>\u30AD\u30FC\u30DC\u30FC\u30C9\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u306E\u6539\u5584</li>
        <li>\u30B9\u30AF\u30EA\u30FC\u30F3\u30EA\u30FC\u30C0\u30FC\u5BFE\u5FDC</li>
        <li>\u30AB\u30E9\u30FC\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u306E\u78BA\u4FDD</li>
      </ul>
      ${sig("\u9AD8\u6A4B\u7F8E\u54B2", "\u30C7\u30B6\u30A4\u30F3\u90E8 \u30EA\u30FC\u30C0\u30FC")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9AD8\u6A4B\u3067\u3059\u3002\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u306E\u6539\u5584\u63D0\u6848\u3092\u307E\u3068\u3081\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-25T09:00:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-misc-006",
    hasAttachments: false
  },
  {
    id: "msg-059",
    from: senders["yamada"],
    to: [me],
    subject: "\u898B\u7A4D\u66F8\u306E\u78BA\u8A8D\u4F9D\u983C",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C71\u7530\u3067\u3059\u3002\n\nABC\u30B3\u30FC\u30DD\u30EC\u30FC\u30B7\u30E7\u30F3\u5411\u3051\u306E\u898B\u7A4D\u66F8\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C71\u7530\u3067\u3059\u3002</p>
      <p>ABC\u30B3\u30FC\u30DD\u30EC\u30FC\u30B7\u30E7\u30F3\u5411\u3051\u306E\u898B\u7A4D\u66F8\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002</p>
      <p>\u91D1\u984D\u3068\u30B9\u30B3\u30FC\u30D7\u3092\u78BA\u8A8D\u3044\u305F\u3060\u3051\u307E\u3059\u3067\u3057\u3087\u3046\u304B\u3002</p>
      <p>\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3078\u306E\u63D0\u51FA\u671F\u9650\u304C3\u670831\u65E5\u3067\u3059\u3002</p>
      ${sig("\u5C71\u7530\u4E00\u90CE", "\u4F01\u753B\u90E8 \u4E3B\u4EFB")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C71\u7530\u3067\u3059\u3002ABC\u30B3\u30FC\u30DD\u30EC\u30FC\u30B7\u30E7\u30F3\u5411\u3051\u306E\u898B\u7A4D\u66F8\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-24T11:00:00"),
    isRead: false,
    isStarred: true,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work", "label-important"],
    attachments: [
      { id: "att-013", fileName: "\u898B\u7A4D\u66F8_ABC\u793E.pdf", fileSize: 567e3, mimeType: "application/pdf" }
    ],
    threadId: "thread-misc-007",
    hasAttachments: true
  },
  {
    id: "msg-060",
    from: senders["tanaka"],
    to: [me],
    subject: "\u4ECA\u6708\u306E\u793E\u5185\u5831",
    body: "\u5404\u4F4D\n\n3\u6708\u306E\u793E\u5185\u5831\u3092\u914D\u4FE1\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>3\u6708\u306E\u793E\u5185\u5831\u3092\u914D\u4FE1\u3057\u307E\u3059\u3002</p>
      <p>\u4ECA\u6708\u306E\u30C8\u30D4\u30C3\u30AF\uFF1A</p>
      <ul>
        <li>\u65B0\u88FD\u54C1\u30ED\u30FC\u30F3\u30C1\u6210\u529F\uFF01</li>
        <li>\u793E\u54E1\u7D39\u4ECB\u30B3\u30FC\u30CA\u30FC</li>
        <li>\u6765\u671F\u306E\u65B9\u91DD\u306B\u3064\u3044\u3066</li>
      </ul>
      ${sig("\u7530\u4E2D\u592A\u90CE", "\u55B6\u696D\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u5404\u4F4D 3\u6708\u306E\u793E\u5185\u5831\u3092\u914D\u4FE1\u3057\u307E\u3059\u3002\u4ECA\u6708\u306E\u30C8\u30D4\u30C3\u30AF...",
    date: /* @__PURE__ */ new Date("2026-03-15T09:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [
      { id: "att-014", fileName: "\u793E\u5185\u5831_3\u6708\u53F7.pdf", fileSize: 78e5, mimeType: "application/pdf" }
    ],
    threadId: "thread-misc-008",
    hasAttachments: true
  },
  // Additional unread messages
  {
    id: "msg-061",
    from: senders["sato"],
    to: [me],
    subject: "CI/CD\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306E\u6539\u5584\u63D0\u6848",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002\n\nCI/CD\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306E\u6539\u5584\u6848\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002</p>
      <p>CI/CD\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306E\u6539\u5584\u6848\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002</p>
      <p>\u30D3\u30EB\u30C9\u6642\u9593\u3092\u73FE\u5728\u306E15\u5206\u304B\u30895\u5206\u4EE5\u4E0B\u306B\u77ED\u7E2E\u3067\u304D\u308B\u898B\u8FBC\u307F\u3067\u3059\u3002</p>
      ${sig("\u4F50\u85E4\u82B1\u5B50", "\u958B\u767A\u90E8 \u30DE\u30CD\u30FC\u30B8\u30E3\u30FC")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002CI/CD\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306E\u6539\u5584\u6848\u3092\u307E\u3068\u3081\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-27T06:30:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-misc-009",
    hasAttachments: false
  },
  {
    id: "msg-062",
    from: senders["kato"],
    to: [me],
    subject: "\u99D0\u8ECA\u5834\u5229\u7528\u306B\u95A2\u3059\u308B\u304A\u77E5\u3089\u305B",
    body: "\u5404\u4F4D\n\n4\u6708\u304B\u3089\u99D0\u8ECA\u5834\u306E\u5229\u7528\u30EB\u30FC\u30EB\u304C\u5909\u66F4\u306B\u306A\u308A\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>4\u6708\u304B\u3089\u99D0\u8ECA\u5834\u306E\u5229\u7528\u30EB\u30FC\u30EB\u304C\u5909\u66F4\u306B\u306A\u308A\u307E\u3059\u3002</p>
      <p>\u8A73\u7D30\u306F\u6DFB\u4ED8\u306E\u8CC7\u6599\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u52A0\u85E4\u6B63\u7FA9", "\u7BA1\u7406\u90E8 \u8AB2\u9577")}
    </div>`,
    snippet: "\u5404\u4F4D 4\u6708\u304B\u3089\u99D0\u8ECA\u5834\u306E\u5229\u7528\u30EB\u30FC\u30EB\u304C\u5909\u66F4\u306B\u306A\u308A\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-26T08:00:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-misc-010",
    hasAttachments: false
  },
  {
    id: "msg-063",
    from: senders["yamada"],
    to: [me],
    subject: "\u8B70\u4E8B\u9332: 3\u670825\u65E5 \u4F01\u753B\u4F1A\u8B70",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C71\u7530\u3067\u3059\u3002\n\n3\u670825\u65E5\u306E\u4F01\u753B\u4F1A\u8B70\u306E\u8B70\u4E8B\u9332\u3092\u5171\u6709\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C71\u7530\u3067\u3059\u3002</p>
      <p>3\u670825\u65E5\u306E\u4F01\u753B\u4F1A\u8B70\u306E\u8B70\u4E8B\u9332\u3092\u5171\u6709\u3057\u307E\u3059\u3002</p>
      <p>\u6C7A\u5B9A\u4E8B\u9805\u3001\u30A2\u30AF\u30B7\u30E7\u30F3\u30A2\u30A4\u30C6\u30E0\u306F\u6DFB\u4ED8\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u5C71\u7530\u4E00\u90CE", "\u4F01\u753B\u90E8 \u4E3B\u4EFB")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u5C71\u7530\u3067\u3059\u30023\u670825\u65E5\u306E\u4F01\u753B\u4F1A\u8B70\u306E\u8B70\u4E8B\u9332\u3092\u5171\u6709\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-25T18:00:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [
      { id: "att-015", fileName: "\u8B70\u4E8B\u9332_\u4F01\u753B\u4F1A\u8B70_0325.docx", fileSize: 234e3, mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }
    ],
    threadId: "thread-misc-011",
    hasAttachments: true
  },
  {
    id: "msg-064",
    from: senders["watanabe"],
    to: [me],
    subject: "\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u8A2D\u5B9A\u5909\u66F4\u306E\u901A\u77E5",
    body: "\u5404\u4F4D\n\n\u672C\u65E5\u3001\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u306E\u8A2D\u5B9A\u5909\u66F4\u3092\u5B9F\u65BD\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>\u672C\u65E5\u3001\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u306E\u8A2D\u5B9A\u5909\u66F4\u3092\u5B9F\u65BD\u3057\u307E\u3057\u305F\u3002</p>
      <p>\u63A5\u7D9A\u306B\u554F\u984C\u304C\u3042\u308B\u5834\u5408\u306F\u60C5\u5831\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u90E8\u307E\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u6E21\u8FBA\u76F4\u4EBA", "\u60C5\u5831\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u5404\u4F4D \u672C\u65E5\u3001\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u306E\u8A2D\u5B9A\u5909\u66F4\u3092\u5B9F\u65BD\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-25T15:00:00"),
    isRead: false,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-misc-012",
    hasAttachments: false
  },
  {
    id: "msg-065",
    from: senders["suzuki"],
    to: [me],
    subject: "\u5C55\u793A\u4F1A\u51FA\u5C55\u306E\u304A\u77E5\u3089\u305B",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9234\u6728\u3067\u3059\u3002\n\n\u6765\u6708\u306E\u5C55\u793A\u4F1A\u306B\u51FA\u5C55\u3059\u308B\u3053\u3068\u304C\u6C7A\u307E\u308A\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9234\u6728\u3067\u3059\u3002</p>
      <p>\u6765\u6708\u306E\u5C55\u793A\u4F1A\u306B\u51FA\u5C55\u3059\u308B\u3053\u3068\u304C\u6C7A\u307E\u308A\u307E\u3057\u305F\u3002</p>
      <p>\u30D6\u30FC\u30B9\u62C5\u5F53\u8005\u3092\u52DF\u96C6\u3057\u3066\u3044\u307E\u3059\u3002\u8208\u5473\u306E\u3042\u308B\u65B9\u306F\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u9234\u6728\u5065\u4E8C", "\u55B6\u696D\u90E8 \u8AB2\u9577")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9234\u6728\u3067\u3059\u3002\u6765\u6708\u306E\u5C55\u793A\u4F1A\u306B\u51FA\u5C55\u3059\u308B\u3053\u3068\u304C\u6C7A\u307E\u308A\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-11T10:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-misc-013",
    hasAttachments: false
  },
  {
    id: "msg-066",
    from: senders["kobayashi"],
    to: [me],
    subject: "\u8907\u5408\u6A5F\u306E\u30C8\u30CA\u30FC\u4EA4\u63DB\u306B\u3064\u3044\u3066",
    body: "\u5404\u4F4D\n\n3\u968E\u306E\u8907\u5408\u6A5F\u306E\u30C8\u30CA\u30FC\u3092\u4EA4\u63DB\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>3\u968E\u306E\u8907\u5408\u6A5F\u306E\u30C8\u30CA\u30FC\u3092\u4EA4\u63DB\u3057\u307E\u3057\u305F\u3002</p>
      <p>\u5370\u5237\u54C1\u8CEA\u306B\u554F\u984C\u304C\u3042\u308B\u5834\u5408\u306F\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u5C0F\u6797\u7531\u7F8E\u5B50", "\u7DCF\u52D9\u90E8 \u4E3B\u4EFB")}
    </div>`,
    snippet: "\u5404\u4F4D 3\u968E\u306E\u8907\u5408\u6A5F\u306E\u30C8\u30CA\u30FC\u3092\u4EA4\u63DB\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-07T09:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-misc-014",
    hasAttachments: false
  },
  {
    id: "msg-067",
    from: senders["ito"],
    to: [me],
    subject: "\u6709\u7D66\u4F11\u6687\u306E\u53D6\u5F97\u63A8\u5968",
    body: "\u5404\u4F4D\n\n\u5E74\u5EA6\u672B\u306B\u3042\u305F\u308A\u3001\u6709\u7D66\u4F11\u6687\u306E\u8A08\u753B\u7684\u306A\u53D6\u5F97\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>\u5E74\u5EA6\u672B\u306B\u3042\u305F\u308A\u3001\u6709\u7D66\u4F11\u6687\u306E\u8A08\u753B\u7684\u306A\u53D6\u5F97\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
      <p>\u7E70\u8D8A\u53EF\u80FD\u65E5\u6570\u3092\u8D85\u3048\u308B\u5206\u306B\u3064\u3044\u3066\u306F\u30013\u6708\u4E2D\u306E\u53D6\u5F97\u3092\u3054\u691C\u8A0E\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u4F0A\u85E4\u3081\u3050\u307F", "\u4EBA\u4E8B\u90E8 \u63A1\u7528\u62C5\u5F53")}
    </div>`,
    snippet: "\u5404\u4F4D \u5E74\u5EA6\u672B\u306B\u3042\u305F\u308A\u3001\u6709\u7D66\u4F11\u6687\u306E\u8A08\u753B\u7684\u306A\u53D6\u5F97\u3092\u304A\u9858\u3044\u3057\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-03-05T08:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-misc-015",
    hasAttachments: false
  },
  {
    id: "msg-068",
    from: senders["nakamura"],
    to: [me],
    subject: "\u30C6\u30B9\u30C8\u74B0\u5883\u306E\u30EA\u30BB\u30C3\u30C8\u5B8C\u4E86",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002\n\n\u30C6\u30B9\u30C8\u74B0\u5883\u306E\u30EA\u30BB\u30C3\u30C8\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002</p>
      <p>\u30C6\u30B9\u30C8\u74B0\u5883\u306E\u30EA\u30BB\u30C3\u30C8\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002</p>
      <p>\u65B0\u3057\u3044\u63A5\u7D9A\u60C5\u5831\uFF1A</p>
      <ul>
        <li>URL: https://test.example.co.jp</li>
        <li>\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF: \u521D\u671F\u5316\u6E08\u307F</li>
      </ul>
      ${sig("\u4E2D\u6751\u5927\u8F14", "\u958B\u767A\u90E8 \u30B7\u30CB\u30A2\u30A8\u30F3\u30B8\u30CB\u30A2")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4E2D\u6751\u3067\u3059\u3002\u30C6\u30B9\u30C8\u74B0\u5883\u306E\u30EA\u30BB\u30C3\u30C8\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-03-03T14:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-misc-016",
    hasAttachments: false
  },
  {
    id: "msg-069",
    from: senders["tanaka"],
    to: [me],
    subject: "2\u6708\u306E\u696D\u7E3E\u5831\u544A",
    body: "\u5404\u4F4D\n\n2\u6708\u306E\u696D\u7E3E\u5831\u544A\u3092\u5171\u6709\u3057\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>2\u6708\u306E\u696D\u7E3E\u5831\u544A\u3092\u5171\u6709\u3057\u307E\u3059\u3002</p>
      <p>\u58F2\u4E0A\u76EE\u6A19\u9054\u6210\u7387: 105%\u3068\u597D\u8ABF\u306A\u7D50\u679C\u3068\u306A\u308A\u307E\u3057\u305F\u3002</p>
      <p>\u8A73\u7D30\u306F\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u7530\u4E2D\u592A\u90CE", "\u55B6\u696D\u90E8 \u90E8\u9577")}
    </div>`,
    snippet: "\u5404\u4F4D 2\u6708\u306E\u696D\u7E3E\u5831\u544A\u3092\u5171\u6709\u3057\u307E\u3059\u3002\u58F2\u4E0A\u76EE\u6A19\u9054\u6210\u7387: 105%...",
    date: /* @__PURE__ */ new Date("2026-03-01T09:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [
      { id: "att-016", fileName: "\u696D\u7E3E\u5831\u544A_2\u6708.pdf", fileSize: 145e4, mimeType: "application/pdf" }
    ],
    threadId: "thread-misc-017",
    hasAttachments: true
  },
  {
    id: "msg-070",
    from: senders["sato"],
    to: [me],
    subject: "\u6280\u8853\u30D6\u30ED\u30B0\u306E\u57F7\u7B46\u4F9D\u983C",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002\n\n\u793E\u5916\u5411\u3051\u6280\u8853\u30D6\u30ED\u30B0\u306E\u57F7\u7B46\u3092\u304A\u9858\u3044\u3057\u305F\u3044\u3067\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002</p>
      <p>\u793E\u5916\u5411\u3051\u6280\u8853\u30D6\u30ED\u30B0\u306E\u57F7\u7B46\u3092\u304A\u9858\u3044\u3057\u305F\u3044\u3067\u3059\u3002</p>
      <p>\u30C6\u30FC\u30DE: \u300CAngular\u306B\u304A\u3051\u308B\u72B6\u614B\u7BA1\u7406\u306E\u30D9\u30B9\u30C8\u30D7\u30E9\u30AF\u30C6\u30A3\u30B9\u300D</p>
      <p>\u516C\u958B\u4E88\u5B9A: 4\u6708\u4E2D\u65EC</p>
      <p>\u3054\u691C\u8A0E\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
      ${sig("\u4F50\u85E4\u82B1\u5B50", "\u958B\u767A\u90E8 \u30DE\u30CD\u30FC\u30B8\u30E3\u30FC")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u4F50\u85E4\u3067\u3059\u3002\u793E\u5916\u5411\u3051\u6280\u8853\u30D6\u30ED\u30B0\u306E\u57F7\u7B46\u3092\u304A\u9858\u3044\u3057\u305F\u3044\u3067\u3059...",
    date: /* @__PURE__ */ new Date("2026-02-27T11:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [],
    threadId: "thread-misc-018",
    hasAttachments: false
  },
  {
    id: "msg-071",
    from: senders["kato"],
    to: [me],
    subject: "\u793E\u5185Wi-Fi\u8A2D\u5B9A\u306E\u5909\u66F4",
    body: "\u5404\u4F4D\n\n\u793E\u5185Wi-Fi\u306E\u8A2D\u5B9A\u304C\u5909\u66F4\u306B\u306A\u308A\u307E\u3059\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u5404\u4F4D</p>
      <p>3\u67081\u65E5\u3088\u308A\u793E\u5185Wi-Fi\u306E\u8A2D\u5B9A\u304C\u5909\u66F4\u306B\u306A\u308A\u307E\u3059\u3002</p>
      <p>\u65B0\u3057\u3044SSID\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u793E\u5185\u30DD\u30FC\u30BF\u30EB\u306B\u63B2\u8F09\u3057\u3066\u3044\u307E\u3059\u3002</p>
      ${sig("\u52A0\u85E4\u6B63\u7FA9", "\u7BA1\u7406\u90E8 \u8AB2\u9577")}
    </div>`,
    snippet: "\u5404\u4F4D 3\u67081\u65E5\u3088\u308A\u793E\u5185Wi-Fi\u306E\u8A2D\u5B9A\u304C\u5909\u66F4\u306B\u306A\u308A\u307E\u3059...",
    date: /* @__PURE__ */ new Date("2026-02-26T10:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: [],
    attachments: [],
    threadId: "thread-misc-019",
    hasAttachments: false
  },
  {
    id: "msg-072",
    from: senders["takahashi"],
    to: [me],
    subject: "\u30E6\u30FC\u30B6\u30D3\u30EA\u30C6\u30A3\u30C6\u30B9\u30C8\u306E\u7D50\u679C\u5831\u544A",
    body: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9AD8\u6A4B\u3067\u3059\u3002\n\n\u30E6\u30FC\u30B6\u30D3\u30EA\u30C6\u30A3\u30C6\u30B9\u30C8\u306E\u7D50\u679C\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002",
    bodyHtml: `<div style="font-family: sans-serif;">
      <p>\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9AD8\u6A4B\u3067\u3059\u3002</p>
      <p>\u30E6\u30FC\u30B6\u30D3\u30EA\u30C6\u30A3\u30C6\u30B9\u30C8\u306E\u7D50\u679C\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002</p>
      <p>\u5168\u4F53\u7684\u306B\u30DD\u30B8\u30C6\u30A3\u30D6\u306A\u7D50\u679C\u3067\u3057\u305F\u304C\u3001\u3044\u304F\u3064\u304B\u6539\u5584\u70B9\u3082\u898B\u3064\u304B\u308A\u307E\u3057\u305F\u3002</p>
      <p>\u8A73\u7D30\u306F\u6DFB\u4ED8\u8CC7\u6599\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002</p>
      ${sig("\u9AD8\u6A4B\u7F8E\u54B2", "\u30C7\u30B6\u30A4\u30F3\u90E8 \u30EA\u30FC\u30C0\u30FC")}
    </div>`,
    snippet: "\u304A\u75B2\u308C\u69D8\u3067\u3059\u3002\u9AD8\u6A4B\u3067\u3059\u3002\u30E6\u30FC\u30B6\u30D3\u30EA\u30C6\u30A3\u30C6\u30B9\u30C8\u306E\u7D50\u679C\u3092\u307E\u3068\u3081\u307E\u3057\u305F...",
    date: /* @__PURE__ */ new Date("2026-02-25T15:00:00"),
    isRead: true,
    isStarred: false,
    isBookmarked: false,
    folderId: "inbox",
    labels: ["label-work"],
    attachments: [
      { id: "att-017", fileName: "UT\u7D50\u679C\u5831\u544A\u66F8.pdf", fileSize: 31e5, mimeType: "application/pdf" }
    ],
    threadId: "thread-misc-020",
    hasAttachments: true
  }
];

// src/app/features/mail/mock/mock-folders.ts
var MOCK_FOLDERS = [
  // System folders
  { id: "inbox", name: "\u53D7\u4FE1\u30C8\u30EC\u30A4", icon: "inbox", type: "system", unreadCount: 23 },
  { id: "starred", name: "\u30B9\u30BF\u30FC\u4ED8\u304D", icon: "star", type: "system", unreadCount: 5 },
  { id: "sent", name: "\u9001\u4FE1\u6E08\u307F", icon: "send", type: "system", unreadCount: 0 },
  { id: "drafts", name: "\u4E0B\u66F8\u304D", icon: "drafts", type: "system", unreadCount: 2 },
  { id: "trash", name: "\u30B4\u30DF\u7BB1", icon: "delete", type: "system", unreadCount: 0 },
  { id: "spam", name: "\u8FF7\u60D1\u30E1\u30FC\u30EB", icon: "report", type: "system", unreadCount: 0 }
];

// src/app/features/mail/services/mail.service.ts
var MailService = class _MailService {
  constructor() {
    this.messages = [...MOCK_MESSAGES];
    this.folders = [...MOCK_FOLDERS];
    this.nextId = 100;
    this.messagesSubject = new BehaviorSubject(this.messages);
    this.foldersSubject = new BehaviorSubject(this.folders);
    this.messages$ = this.messagesSubject.asObservable();
    this.folders$ = this.foldersSubject.asObservable();
  }
  listMessages(query) {
    let filtered = [...this.messages];
    if (query) {
      if (query.folderId) {
        if (query.folderId === "starred") {
          filtered = filtered.filter((m) => m.isStarred);
        } else if (query.folderId === "bookmarked") {
          filtered = filtered.filter((m) => m.isBookmarked);
        } else {
          filtered = filtered.filter((m) => m.folderId === query.folderId);
        }
      }
      if (query.labelId) {
        filtered = filtered.filter((m) => m.labels.includes(query.labelId));
      }
      if (query.search) {
        const term = query.search.toLowerCase();
        filtered = filtered.filter((m) => m.subject.toLowerCase().includes(term) || m.body.toLowerCase().includes(term) || m.from.name.toLowerCase().includes(term) || m.from.email.toLowerCase().includes(term) || m.snippet.toLowerCase().includes(term) || (m.to || []).some((a) => a.name.toLowerCase().includes(term) || a.email.toLowerCase().includes(term)) || (m.cc || []).some((a) => a.name.toLowerCase().includes(term) || a.email.toLowerCase().includes(term)));
      }
      if (query.isRead !== void 0) {
        filtered = filtered.filter((m) => m.isRead === query.isRead);
      }
      if (query.isStarred !== void 0) {
        filtered = filtered.filter((m) => m.isStarred === query.isStarred);
      }
      if (query.isBookmarked !== void 0) {
        filtered = filtered.filter((m) => m.isBookmarked === query.isBookmarked);
      }
      if (query.hasAttachments !== void 0) {
        filtered = filtered.filter((m) => m.hasAttachments === query.hasAttachments);
      }
      if (query.from) {
        const fromTerm = query.from.toLowerCase();
        filtered = filtered.filter((m) => m.from.name.toLowerCase().includes(fromTerm) || m.from.email.toLowerCase().includes(fromTerm));
      }
      if (query.dateFrom) {
        filtered = filtered.filter((m) => m.date >= query.dateFrom);
      }
      if (query.dateTo) {
        filtered = filtered.filter((m) => m.date <= query.dateTo);
      }
    }
    filtered.sort((a, b) => b.date.getTime() - a.date.getTime());
    return of(filtered);
  }
  getMessage(id) {
    return of(this.messages.find((m) => m.id === id));
  }
  getThreadMessages(threadId) {
    const threadMsgs = this.messages.filter((m) => m.threadId === threadId).sort((a, b) => a.date.getTime() - b.date.getTime());
    return of(threadMsgs);
  }
  sendMessage(draft) {
    const newMsg = {
      id: `msg-${this.nextId++}`,
      from: { name: "\u77F3\u5D0E\u592A\u4E00", email: "ishizaki.taichi@example.co.jp" },
      to: draft.to,
      cc: draft.cc,
      bcc: draft.bcc,
      subject: draft.subject,
      body: draft.body,
      bodyHtml: draft.bodyHtml,
      snippet: draft.body.substring(0, 80),
      date: /* @__PURE__ */ new Date(),
      isRead: true,
      isStarred: false,
      isBookmarked: false,
      folderId: "sent",
      labels: [],
      attachments: draft.attachments || [],
      threadId: draft.threadId || `thread-${this.nextId}`,
      inReplyTo: draft.inReplyTo,
      hasAttachments: (draft.attachments?.length || 0) > 0
    };
    this.messages = [newMsg, ...this.messages];
    this.messagesSubject.next(this.messages);
    return of(newMsg);
  }
  replyMessage(messageId, body, bodyHtml, replyAll = false) {
    const original = this.messages.find((m) => m.id === messageId);
    if (!original) {
      throw new Error("Message not found");
    }
    const to = [original.from];
    let cc;
    if (replyAll) {
      const myEmail = "ishizaki.taichi@example.co.jp";
      const additionalTo = original.to.filter((a) => a.email !== myEmail);
      to.push(...additionalTo);
      if (original.cc) {
        cc = original.cc.filter((a) => a.email !== myEmail);
      }
    }
    const draft = {
      to,
      cc,
      subject: original.subject.startsWith("Re: ") ? original.subject : `Re: ${original.subject}`,
      body,
      bodyHtml,
      inReplyTo: messageId,
      threadId: original.threadId,
      mode: replyAll ? "replyAll" : "reply"
    };
    return this.sendMessage(draft);
  }
  forwardMessage(messageId, to, body, bodyHtml) {
    const original = this.messages.find((m) => m.id === messageId);
    if (!original) {
      throw new Error("Message not found");
    }
    const draft = {
      to,
      subject: original.subject.startsWith("Fwd: ") ? original.subject : `Fwd: ${original.subject}`,
      body,
      bodyHtml,
      attachments: original.attachments,
      threadId: original.threadId,
      mode: "forward"
    };
    return this.sendMessage(draft);
  }
  moveToFolder(messageIds, folderId) {
    this.messages = this.messages.map((m) => {
      if (messageIds.includes(m.id)) {
        return __spreadProps(__spreadValues({}, m), { folderId });
      }
      return m;
    });
    this.messagesSubject.next(this.messages);
    this.updateFolderCounts();
    return of(void 0);
  }
  toggleStar(messageId) {
    let updated;
    this.messages = this.messages.map((m) => {
      if (m.id === messageId) {
        updated = __spreadProps(__spreadValues({}, m), { isStarred: !m.isStarred });
        return updated;
      }
      return m;
    });
    this.messagesSubject.next(this.messages);
    this.updateFolderCounts();
    return of(updated);
  }
  toggleBookmark(messageId) {
    let updated;
    this.messages = this.messages.map((m) => {
      if (m.id === messageId) {
        updated = __spreadProps(__spreadValues({}, m), { isBookmarked: !m.isBookmarked });
        return updated;
      }
      return m;
    });
    this.messagesSubject.next(this.messages);
    this.updateFolderCounts();
    return of(updated);
  }
  markAsRead(messageIds, isRead = true) {
    this.messages = this.messages.map((m) => {
      if (messageIds.includes(m.id)) {
        return __spreadProps(__spreadValues({}, m), { isRead });
      }
      return m;
    });
    this.messagesSubject.next(this.messages);
    this.updateFolderCounts();
    return of(void 0);
  }
  deleteMessage(messageIds) {
    return this.moveToFolder(messageIds, "trash");
  }
  listFolders() {
    this.updateFolderCounts();
    return of(this.folders);
  }
  // Label management methods
  createLabel(name, color) {
    const id = "label-" + name.toLowerCase().replace(/[^a-z0-9\u3000-\u9fff\uf900-\ufaff]/g, "-") + "-" + Date.now();
    const newLabel = {
      id,
      name,
      icon: "label",
      type: "label",
      unreadCount: 0,
      color
    };
    this.folders = [...this.folders, newLabel];
    this.foldersSubject.next(this.folders);
    return of(newLabel);
  }
  deleteLabel(labelId) {
    this.folders = this.folders.filter((f) => f.id !== labelId);
    this.messages = this.messages.map((m) => {
      if (m.labels.includes(labelId)) {
        return __spreadProps(__spreadValues({}, m), { labels: m.labels.filter((l) => l !== labelId) });
      }
      return m;
    });
    this.foldersSubject.next(this.folders);
    this.messagesSubject.next(this.messages);
    return of(void 0);
  }
  addLabelToMessage(messageId, labelId) {
    let updated;
    this.messages = this.messages.map((m) => {
      if (m.id === messageId) {
        if (!m.labels.includes(labelId)) {
          updated = __spreadProps(__spreadValues({}, m), { labels: [...m.labels, labelId] });
          return updated;
        }
        updated = m;
      }
      return m;
    });
    this.messagesSubject.next(this.messages);
    this.updateFolderCounts();
    return of(updated);
  }
  removeLabelFromMessage(messageId, labelId) {
    let updated;
    this.messages = this.messages.map((m) => {
      if (m.id === messageId) {
        updated = __spreadProps(__spreadValues({}, m), { labels: m.labels.filter((l) => l !== labelId) });
        return updated;
      }
      return m;
    });
    this.messagesSubject.next(this.messages);
    this.updateFolderCounts();
    return of(updated);
  }
  getAvailableColors() {
    return [
      "#e53935",
      // red
      "#1e88e5",
      // blue
      "#ff9800",
      // orange
      "#43a047",
      // green
      "#8e24aa",
      // purple
      "#d81b60",
      // pink
      "#00897b",
      // teal
      "#6d4c41"
      // brown
    ];
  }
  searchMessages(term) {
    return this.listMessages({ search: term });
  }
  getContacts() {
    const contacts = [
      { name: "\u7530\u4E2D\u592A\u90CE", email: "tanaka.taro@example.co.jp" },
      { name: "\u4F50\u85E4\u82B1\u5B50", email: "sato.hanako@example.co.jp" },
      { name: "\u5C71\u7530\u4E00\u90CE", email: "yamada.ichiro@example.co.jp" },
      { name: "\u9234\u6728\u5065\u4E8C", email: "suzuki.kenji@example.co.jp" },
      { name: "\u9AD8\u6A4B\u7F8E\u54B2", email: "takahashi.misaki@example.co.jp" },
      { name: "\u6E21\u8FBA\u76F4\u4EBA", email: "watanabe.naoto@example.co.jp" },
      { name: "\u4F0A\u85E4\u3081\u3050\u307F", email: "ito.megumi@example.co.jp" },
      { name: "\u4E2D\u6751\u5927\u8F14", email: "nakamura.daisuke@example.co.jp" },
      { name: "\u5C0F\u6797\u7531\u7F8E\u5B50", email: "kobayashi.yumiko@example.co.jp" },
      { name: "\u52A0\u85E4\u6B63\u7FA9", email: "kato.masayoshi@example.co.jp" }
    ];
    return of(contacts);
  }
  updateFolderCounts() {
    this.folders = this.folders.map((f) => {
      if (f.id === "starred") {
        return __spreadProps(__spreadValues({}, f), { unreadCount: this.messages.filter((m) => m.isStarred && m.folderId !== "trash").length });
      }
      if (f.id === "bookmarked") {
        return __spreadProps(__spreadValues({}, f), { unreadCount: this.messages.filter((m) => m.isBookmarked && m.folderId !== "trash").length });
      }
      if (f.type === "system") {
        const unread = this.messages.filter((m) => m.folderId === f.id && !m.isRead).length;
        return __spreadProps(__spreadValues({}, f), { unreadCount: unread });
      }
      if (f.type === "label") {
        const unread = this.messages.filter((m) => m.labels.includes(f.id) && !m.isRead && m.folderId !== "trash").length;
        return __spreadProps(__spreadValues({}, f), { unreadCount: unread });
      }
      return f;
    });
    this.foldersSubject.next(this.folders);
  }
  static {
    this.\u0275fac = function MailService_Factory(t) {
      return new (t || _MailService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MailService, factory: _MailService.\u0275fac, providedIn: "root" });
  }
};

// node_modules/@angular/material/fesm2022/divider.mjs
var MatDivider = class _MatDivider {
  constructor() {
    this._vertical = false;
    this._inset = false;
  }
  /** Whether the divider is vertically aligned. */
  get vertical() {
    return this._vertical;
  }
  set vertical(value) {
    this._vertical = coerceBooleanProperty(value);
  }
  /** Whether the divider is an inset divider. */
  get inset() {
    return this._inset;
  }
  set inset(value) {
    this._inset = coerceBooleanProperty(value);
  }
  static {
    this.\u0275fac = function MatDivider_Factory(t) {
      return new (t || _MatDivider)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatDivider,
      selectors: [["mat-divider"]],
      hostAttrs: ["role", "separator", 1, "mat-divider"],
      hostVars: 7,
      hostBindings: function MatDivider_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
          \u0275\u0275classProp("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
        }
      },
      inputs: {
        vertical: "vertical",
        inset: "inset"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function MatDivider_Template(rf, ctx) {
      },
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color);border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color);border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDivider, [{
    type: Component,
    args: [{
      selector: "mat-divider",
      host: {
        "role": "separator",
        "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
        "[class.mat-divider-vertical]": "vertical",
        "[class.mat-divider-horizontal]": "!vertical",
        "[class.mat-divider-inset]": "inset",
        "class": "mat-divider"
      },
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color);border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color);border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"]
    }]
  }], null, {
    vertical: [{
      type: Input
    }],
    inset: [{
      type: Input
    }]
  });
})();
var MatDividerModule = class _MatDividerModule {
  static {
    this.\u0275fac = function MatDividerModule_Factory(t) {
      return new (t || _MatDividerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatDividerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDividerModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatDivider],
      exports: [MatDivider, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/menu.mjs
var _c0 = ["mat-menu-item", ""];
var _c1 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
var _c2 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "polygon", 3);
    \u0275\u0275elementEnd();
  }
}
var _c3 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._handleKeydown($event));
    })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closed.emit("click"));
    })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationStart($event));
    })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event));
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275property("id", ctx_r1.panelId)("@transformMenu", ctx_r1._panelAnimationState);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var MatMenuItem = class _MatMenuItem {
  constructor(_elementRef, _document, _focusMonitor, _parentMenu, _changeDetectorRef) {
    this._elementRef = _elementRef;
    this._document = _document;
    this._focusMonitor = _focusMonitor;
    this._parentMenu = _parentMenu;
    this._changeDetectorRef = _changeDetectorRef;
    this.role = "menuitem";
    this.disabled = false;
    this.disableRipple = false;
    this._hovered = new Subject();
    this._focused = new Subject();
    this._highlighted = false;
    this._triggersSubmenu = false;
    _parentMenu?.addItem?.(this);
  }
  /** Focuses the menu item. */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  /** Used to set the `tabindex`. */
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Returns the host DOM element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Prevents the default element actions if it is disabled. */
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef?.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef?.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
  static {
    this.\u0275fac = function MatMenuItem_Factory(t) {
      return new (t || _MatMenuItem)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(MAT_MENU_PANEL, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatMenuItem,
      selectors: [["", "mat-menu-item", ""]],
      hostAttrs: [1, "mat-mdc-menu-item", "mat-mdc-focus-indicator"],
      hostVars: 8,
      hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatMenuItem_click_HostBindingHandler($event) {
            return ctx._checkDisabled($event);
          })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
            return ctx._handleMouseEnter();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
          \u0275\u0275classProp("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
        }
      },
      inputs: {
        role: "role",
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute]
      },
      exportAs: ["matMenuItem"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      attrs: _c0,
      ngContentSelectors: _c2,
      decls: 5,
      vars: 3,
      consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
      template: function MatMenuItem_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c1);
          \u0275\u0275projection(0);
          \u0275\u0275elementStart(1, "span", 0);
          \u0275\u0275projection(2, 1);
          \u0275\u0275elementEnd();
          \u0275\u0275element(3, "div", 1);
          \u0275\u0275template(4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275property("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
          \u0275\u0275advance();
          \u0275\u0275conditional(4, ctx._triggersSubmenu ? 4 : -1);
        }
      },
      dependencies: [MatRipple],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuItem, [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-mdc-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [MatRipple],
      template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_PANEL]
    }, {
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    role: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var MatMenuContent = class _MatMenuContent {
  constructor(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
    this._template = _template;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._injector = _injector;
    this._viewContainerRef = _viewContainerRef;
    this._document = _document;
    this._changeDetectorRef = _changeDetectorRef;
    this._attached = new Subject();
  }
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._componentFactoryResolver, this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef?.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */
  detach() {
    if (this._portal.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    if (this._outlet) {
      this._outlet.dispose();
    }
  }
  static {
    this.\u0275fac = function MatMenuContent_Factory(t) {
      return new (t || _MatMenuContent)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ApplicationRef), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatMenuContent,
      selectors: [["ng-template", "matMenuContent", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_MENU_CONTENT,
        useExisting: _MatMenuContent
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: ApplicationRef
  }, {
    type: Injector
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var matMenuAnimations = {
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: trigger("transformMenu", [state("void", style({
    opacity: 0,
    transform: "scale(0.8)"
  })), transition("void => enter", animate("120ms cubic-bezier(0, 0, 0.2, 1)", style({
    opacity: 1,
    transform: "scale(1)"
  }))), transition("* => void", animate("100ms 25ms linear", style({
    opacity: 0
  })))]),
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: trigger("fadeInItems", [
    // TODO(crisbeto): this is inside the `transformMenu`
    // now. Remove next time we do breaking changes.
    state("showing", style({
      opacity: 1
    })),
    transition("void => *", [style({
      opacity: 0
    }), animate("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])
  ])
};
var fadeInItems = matMenuAnimations.fadeInItems;
var transformMenu = matMenuAnimations.transformMenu;
var menuPanelUid = 0;
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  };
}
var MatMenu = class _MatMenu {
  /** Position of the menu in the X axis. */
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the menu in the Y axis. */
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = __spreadValues({}, this._classList);
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach((className) => {
        newClassList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach((className) => {
        newClassList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
    this._classList = newClassList;
  }
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
   */
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  constructor(_elementRef, _ngZone, defaultOptions, _changeDetectorRef) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._elevationPrefix = "mat-elevation-z";
    this._baseElevation = 8;
    this._directDescendantItems = new QueryList();
    this._classList = {};
    this._panelAnimationState = "void";
    this._animationDone = new Subject();
    this.closed = new EventEmitter();
    this.close = this.closed;
    this.panelId = `mat-menu-panel-${menuPanelUid++}`;
    this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe((itemsList) => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusSubscription?.unsubscribe();
  }
  /** Stream that emits whenever the hovered menu item changes. */
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
  }
  /*
   * Registers a menu item with the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  addItem(_item) {
  }
  /**
   * Removes an item from the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  removeItem(_item) {
  }
  /** Handle a keyboard event from the menu, delegating to the appropriate action. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
    event.stopPropagation();
  }
  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */
  focusFirstItem(origin = "program") {
    this._firstItemFocusSubscription?.unsubscribe();
    this._firstItemFocusSubscription = this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      let menuPanel = null;
      if (this._directDescendantItems.length) {
        menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
      }
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    });
  }
  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  /**
   * Sets the menu panel elevation.
   * @param depth Number of parent menus that come before the menu.
   */
  setElevation(depth) {
    const elevation = Math.min(this._baseElevation + depth, 24);
    const newElevation = `${this._elevationPrefix}${elevation}`;
    const customElevation = Object.keys(this._classList).find((className) => {
      return className.startsWith(this._elevationPrefix);
    });
    if (!customElevation || customElevation === this._previousElevation) {
      const newClassList = __spreadValues({}, this._classList);
      if (this._previousElevation) {
        newClassList[this._previousElevation] = false;
      }
      newClassList[newElevation] = true;
      this._previousElevation = newElevation;
      this._classList = newClassList;
    }
  }
  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    this._classList = __spreadProps(__spreadValues({}, this._classList), {
      ["mat-menu-before"]: posX === "before",
      ["mat-menu-after"]: posX === "after",
      ["mat-menu-above"]: posY === "above",
      ["mat-menu-below"]: posY === "below"
    });
    this._changeDetectorRef?.markForCheck();
  }
  /** Starts the enter animation. */
  _startAnimation() {
    this._panelAnimationState = "enter";
  }
  /** Resets the panel animation to its initial state. */
  _resetAnimation() {
    this._panelAnimationState = "void";
  }
  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(event) {
    this._animationDone.next(event);
    this._isAnimating = false;
  }
  _onAnimationStart(event) {
    this._isAnimating = true;
    if (event.toState === "enter" && this._keyManager.activeItemIndex === 0) {
      event.element.scrollTop = 0;
    }
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
      this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
  static {
    this.\u0275fac = function MatMenu_Factory(t) {
      return new (t || _MatMenu)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(MAT_MENU_DEFAULT_OPTIONS), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatMenu,
      selectors: [["mat-menu"]],
      contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MAT_MENU_CONTENT, 5);
          \u0275\u0275contentQuery(dirIndex, MatMenuItem, 5);
          \u0275\u0275contentQuery(dirIndex, MatMenuItem, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lazyContent = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allItems = _t);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
        }
      },
      viewQuery: function MatMenu_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
        }
      },
      hostVars: 3,
      hostBindings: function MatMenu_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        }
      },
      inputs: {
        backdropClass: "backdropClass",
        ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
        ariaLabelledby: [InputFlags.None, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [InputFlags.None, "aria-describedby", "ariaDescribedby"],
        xPosition: "xPosition",
        yPosition: "yPosition",
        overlapTrigger: [InputFlags.HasDecoratorInputTransform, "overlapTrigger", "overlapTrigger", booleanAttribute],
        hasBackdrop: [InputFlags.HasDecoratorInputTransform, "hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)],
        panelClass: [InputFlags.None, "class", "panelClass"],
        classList: "classList"
      },
      outputs: {
        closed: "closed",
        close: "close"
      },
      exportAs: ["matMenu"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_MENU_PANEL,
        useExisting: _MatMenu
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", "mat-mdc-elevation-specific", 3, "keydown", "click", "id"], [1, "mat-mdc-menu-content"]],
      template: function MatMenu_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, MatMenu_ng_template_0_Template, 3, 7, "ng-template");
        }
      },
      styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],
      encapsulation: 2,
      data: {
        animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenu, [{
    type: Component,
    args: [{
      selector: "mat-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      standalone: true,
      template: `<ng-template>
  <div
    class="mat-mdc-menu-panel mat-mdc-elevation-specific"
    [id]="panelId"
    [class]="_classList"
    (keydown)="_handleKeydown($event)"
    (click)="closed.emit('click')"
    [@transformMenu]="_panelAnimationState"
    (@transformMenu.start)="_onAnimationStart($event)"
    (@transformMenu.done)="_onAnimationDone($event)"
    tabindex="-1"
    role="menu"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_DEFAULT_OPTIONS]
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? null : booleanAttribute(value)
      }]
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var MatMenuTrigger = class _MatMenuTrigger {
  /**
   * @deprecated
   * @breaking-change 8.0.0
   */
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    if (menu === this._menu) {
      return;
    }
    this._menu = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe((reason) => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
    this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu());
  }
  constructor(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu, _menuItemInstance, _dir, _focusMonitor, _ngZone) {
    this._overlay = _overlay;
    this._element = _element;
    this._viewContainerRef = _viewContainerRef;
    this._menuItemInstance = _menuItemInstance;
    this._dir = _dir;
    this._focusMonitor = _focusMonitor;
    this._ngZone = _ngZone;
    this._overlayRef = null;
    this._menuOpen = false;
    this._closingActionsSubscription = Subscription.EMPTY;
    this._hoverSubscription = Subscription.EMPTY;
    this._menuCloseSubscription = Subscription.EMPTY;
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._handleTouchStart = (event) => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    };
    this._openedBy = void 0;
    this.restoreFocus = true;
    this.menuOpened = new EventEmitter();
    this.onMenuOpen = this.menuOpened;
    this.menuClosed = new EventEmitter();
    this.onMenuClose = this.menuClosed;
    this._scrollStrategy = scrollStrategy;
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
    _element.nativeElement.addEventListener("touchstart", this._handleTouchStart, passiveEventListenerOptions);
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
    this._element.nativeElement.removeEventListener("touchstart", this._handleTouchStart, passiveEventListenerOptions);
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    this._hoverSubscription.unsubscribe();
  }
  /** Whether the menu is open. */
  get menuOpen() {
    return this._menuOpen;
  }
  /** The text direction of the containing app. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu);
  }
  /** Toggles the menu between the open and closed states. */
  toggleMenu() {
    return this._menuOpen ? this.closeMenu() : this.openMenu();
  }
  /** Opens the menu. */
  openMenu() {
    const menu = this.menu;
    if (this._menuOpen || !menu) {
      return;
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this.triggersSubmenu() : menu.hasBackdrop;
    overlayRef.attach(this._getPortal(menu));
    if (menu.lazyContent) {
      menu.lazyContent.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
    this._initMenu(menu);
    if (menu instanceof MatMenu) {
      menu._startAnimation();
      menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  /** Closes the menu. */
  closeMenu() {
    this.menu?.close.emit();
  }
  /**
   * Focuses the menu trigger.
   * @param origin Source of the menu trigger's focus.
   */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  /**
   * Updates the position of the menu to ensure that it fits all options within the viewport.
   */
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  /** Closes the menu and does the necessary cleanup. */
  _destroyMenu(reason) {
    if (!this._overlayRef || !this.menuOpen) {
      return;
    }
    const menu = this.menu;
    this._closingActionsSubscription.unsubscribe();
    this._overlayRef.detach();
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this.triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    if (menu instanceof MatMenu) {
      menu._resetAnimation();
      if (menu.lazyContent) {
        menu._animationDone.pipe(
          filter((event) => event.toState === "void"),
          take(1),
          // Interrupt if the content got re-attached.
          takeUntil(menu.lazyContent._attached)
        ).subscribe({
          next: () => menu.lazyContent.detach(),
          // No matter whether the content got re-attached, reset the menu.
          complete: () => this._setIsMenuOpen(false)
        });
      } else {
        this._setIsMenuOpen(false);
      }
    } else {
      this._setIsMenuOpen(false);
      menu?.lazyContent?.detach();
    }
  }
  /**
   * This method sets the menu state to open and focuses the first item if
   * the menu was opened via the keyboard.
   */
  _initMenu(menu) {
    menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : void 0;
    menu.direction = this.dir;
    this._setMenuElevation(menu);
    menu.focusFirstItem(this._openedBy || "program");
    this._setIsMenuOpen(true);
  }
  /** Updates the menu elevation based on the amount of parent menus that it has. */
  _setMenuElevation(menu) {
    if (menu.setElevation) {
      let depth = 0;
      let parentMenu = menu.parentMenu;
      while (parentMenu) {
        depth++;
        parentMenu = parentMenu.parentMenu;
      }
      menu.setElevation(depth);
    }
  }
  // set state rather than toggle to support triggers sharing a menu
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this.triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = this._overlay.create(config);
      this._overlayRef.keydownEvents().subscribe();
    }
    return this._overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */
  _getOverlayConfig(menu) {
    return new OverlayConfig({
      positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe((change) => {
        const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
        const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
        if (this._ngZone) {
          this._ngZone.run(() => menu.setPositionClasses(posX, posY));
        } else {
          menu.setPositionClasses(posX, posY);
        }
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this.triggersSubmenu()) {
      overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  _menuClosingActions() {
    const backdrop = this._overlayRef.backdropClick();
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => active !== this._menuItemInstance), filter(() => this._menuOpen)) : of();
    return merge(backdrop, parentClose, hover, detachments);
  }
  /** Handles mouse presses on the trigger. */
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  /** Handles key presses on the trigger. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  /** Handles click events on the trigger. */
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  /** Handles the cases where the user hovers over the trigger. */
  _handleHover() {
    if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
      return;
    }
    this._hoverSubscription = this._parentMaterialMenu._hovered().pipe(filter((active) => active === this._menuItemInstance && !active.disabled), delay(0, asapScheduler)).subscribe(() => {
      this._openedBy = "mouse";
      if (this.menu instanceof MatMenu && this.menu._isAnimating) {
        this.menu._animationDone.pipe(take(1), delay(0, asapScheduler), takeUntil(this._parentMaterialMenu._hovered())).subscribe(() => this.openMenu());
      } else {
        this.openMenu();
      }
    });
  }
  /** Gets the portal that should be attached to the overlay. */
  _getPortal(menu) {
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
  static {
    this.\u0275fac = function MatMenuTrigger_Factory(t) {
      return new (t || _MatMenuTrigger)(\u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(MAT_MENU_SCROLL_STRATEGY), \u0275\u0275directiveInject(MAT_MENU_PANEL, 8), \u0275\u0275directiveInject(MatMenuItem, 10), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatMenuTrigger,
      selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
      hostAttrs: [1, "mat-mdc-menu-trigger"],
      hostVars: 3,
      hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatMenuTrigger_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
            return ctx._handleMousedown($event);
          })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
        }
      },
      inputs: {
        _deprecatedMatMenuTriggerFor: [InputFlags.None, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
        menu: [InputFlags.None, "matMenuTriggerFor", "menu"],
        menuData: [InputFlags.None, "matMenuTriggerData", "menuData"],
        restoreFocus: [InputFlags.None, "matMenuTriggerRestoreFocus", "restoreFocus"]
      },
      outputs: {
        menuOpened: "menuOpened",
        onMenuOpen: "onMenuOpen",
        menuClosed: "menuClosed",
        onMenuClose: "onMenuClose"
      },
      exportAs: ["matMenuTrigger"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTrigger, [{
    type: Directive,
    args: [{
      selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
      host: {
        "class": "mat-mdc-menu-trigger",
        "[attr.aria-haspopup]": 'menu ? "menu" : null',
        "[attr.aria-expanded]": "menuOpen",
        "[attr.aria-controls]": "menuOpen ? menu.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      exportAs: "matMenuTrigger",
      standalone: true
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_SCROLL_STRATEGY]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_PANEL]
    }, {
      type: Optional
    }]
  }, {
    type: MatMenuItem,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FocusMonitor
  }, {
    type: NgZone
  }], {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  });
})();
var MatMenuModule = class _MatMenuModule {
  static {
    this.\u0275fac = function MatMenuModule_Factory(t) {
      return new (t || _MatMenuModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatMenuModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [CommonModule, MatRippleModule, MatCommonModule, OverlayModule, CdkScrollableModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger],
      exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger],
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

export {
  MatDivider,
  MatDividerModule,
  MatMenuItem,
  MatMenu,
  MatMenuTrigger,
  MatMenuModule,
  MailService
};
//# sourceMappingURL=chunk-HKDYSX2N.js.map
