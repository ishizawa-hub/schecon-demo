import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MPKYFQD7.js";
import {
  CommonModule,
  Location,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3YYMYGX4.js";

// src/app/features/scheduling/pages/one-on-one-event-page/one-on-one-event-page.component.ts
function OneOnOneEventPageComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "mat-icon", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.description);
  }
}
var OneOnOneEventPageComponent = class _OneOnOneEventPageComponent {
  constructor(notification, location) {
    this.notification = notification;
    this.location = location;
    this.event = {
      name: "\u30C6\u30B9\u30C8",
      type: "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574",
      organizer: "\u79C0\u6B21\u90CE",
      duration: 60,
      deadline: "2026\u5E744\u670816\u65E5(\u6728) 17:30",
      url: "https://schecon.example.com/event/abc123"
    };
    this.footerCards = [
      { icon: "person", label: "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574", description: "2\u4EBA\u306E\u4E88\u5B9A\u3092\u8ABF\u6574" },
      { icon: "group", label: "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574", description: "3\u4EBA\u4EE5\u4E0A\u306E\u4E88\u5B9A\u3092\u8ABF\u6574" },
      { icon: "business", label: "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574", description: "\u793E\u5185\u30E1\u30F3\u30D0\u30FC\u3068\u8ABF\u6574" },
      { icon: "event_available", label: "\u7A7A\u304D\u6642\u9593\u78BA\u8A8D", description: "\u7A7A\u304D\u6642\u9593\u3092\u5171\u6709" }
    ];
  }
  goBack() {
    this.location.back();
  }
  copyUrl() {
    this.notification.info("URL\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  copyInvitation() {
    this.notification.info("\u62DB\u5F85\u6587\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  openPreview() {
    this.notification.info("\u56DE\u7B54\u5074\u30D7\u30EC\u30D3\u30E5\u30FC\u3092\u958B\u304D\u307E\u3059");
  }
  editEvent() {
    this.notification.info("\u7DE8\u96C6\u753B\u9762\u3078\u9077\u79FB\u3057\u307E\u3059");
  }
  cancelEvent() {
    this.notification.warn("\u4E88\u5B9A\u8ABF\u6574\u3092\u4E2D\u6B62\u3057\u307E\u3059\u304B\uFF1F");
  }
  shareByEmail() {
    this.notification.info("\u30E1\u30FC\u30EB\u5171\u6709\u3092\u958B\u304D\u307E\u3059");
  }
  shareBySlack() {
    this.notification.info("Slack\u5171\u6709\u3092\u958B\u304D\u307E\u3059");
  }
  shareByChatwork() {
    this.notification.info("Chatwork\u5171\u6709\u3092\u958B\u304D\u307E\u3059");
  }
  copyHtmlDates() {
    this.notification.info("\u76F4\u8FD1\u306E\u5019\u88DC\u65E5\u3092HTML\u3067\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  embedEvent() {
    this.notification.info("\u57CB\u3081\u8FBC\u307F\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  static {
    this.\u0275fac = function OneOnOneEventPageComponent_Factory(t) {
      return new (t || _OneOnOneEventPageComponent)(\u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Location));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OneOnOneEventPageComponent, selectors: [["app-one-on-one-event-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 103, vars: 6, consts: [[1, "page-container"], [1, "back-nav"], [1, "back-button", 3, "click"], [1, "success-banner"], [1, "banner-icon"], [1, "banner-text"], [1, "card", "event-info-card"], [1, "event-header"], [1, "event-name"], [1, "type-badge"], [1, "event-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "card", "action-buttons-card"], [1, "action-buttons"], [1, "action-btn", 3, "click"], [1, "action-btn", "action-btn--danger", 3, "click"], [1, "card", "share-card"], [1, "card-title"], [1, "share-buttons"], [1, "share-btn", "share-btn--primary", 3, "click"], [1, "share-btn", 3, "click"], [1, "footer-cta"], [1, "footer-cta-title"], [1, "footer-cards"], ["class", "footer-card", 4, "ngFor", "ngForOf"], [1, "footer-card"], [1, "footer-card-icon"], [1, "footer-card-label"], [1, "footer-card-desc"]], template: function OneOnOneEventPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "button", 2);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "\u623B\u308B");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 3)(8, "mat-icon", 4);
        \u0275\u0275text(9, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "strong");
        \u0275\u0275text(12, "\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " URL\u306F\u671F\u9650\u307E\u3067\u4F55\u5EA6\u3082\u4F7F\u3048\u307E\u3059\u3002\u53C2\u52A0\u8005\u3092\u62DB\u5F85\u3057\u3088\u3046\u3002 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "div", 7)(16, "h2", 8);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 9);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "mat-icon");
        \u0275\u0275text(23, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 12);
        \u0275\u0275text(25, "\u4E3B\u50AC\u8005:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 13);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 11)(29, "mat-icon");
        \u0275\u0275text(30, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32, "\u6240\u8981\u6642\u9593:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 13);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 11)(36, "mat-icon");
        \u0275\u0275text(37, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 12);
        \u0275\u0275text(39, "\u7DE0\u5207\u65E5\u6642:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 13);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "div", 14)(43, "div", 15)(44, "button", 16);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_44_listener() {
          return ctx.copyInvitation();
        });
        \u0275\u0275elementStart(45, "mat-icon");
        \u0275\u0275text(46, "file_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span");
        \u0275\u0275text(48, "\u62DB\u5F85\u6587\u30B3\u30D4\u30FC");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "button", 16);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_49_listener() {
          return ctx.openPreview();
        });
        \u0275\u0275elementStart(50, "mat-icon");
        \u0275\u0275text(51, "preview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span");
        \u0275\u0275text(53, "\u56DE\u7B54\u5074\u78BA\u8A8D");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "button", 16);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_54_listener() {
          return ctx.editEvent();
        });
        \u0275\u0275elementStart(55, "mat-icon");
        \u0275\u0275text(56, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span");
        \u0275\u0275text(58, "\u7DE8\u96C6");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "button", 17);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_59_listener() {
          return ctx.cancelEvent();
        });
        \u0275\u0275elementStart(60, "mat-icon");
        \u0275\u0275text(61, "do_not_disturb_on");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span");
        \u0275\u0275text(63, "\u4E2D\u6B62");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "div", 18)(65, "h3", 19)(66, "mat-icon");
        \u0275\u0275text(67, "share");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " URL\u3068\u30E1\u30FC\u30EB\u30FBSNS\u3067\u53C2\u52A0\u8005\u3092\u62DB\u5F85\u3059\u308B ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 20)(70, "button", 21);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_70_listener() {
          return ctx.copyUrl();
        });
        \u0275\u0275elementStart(71, "mat-icon");
        \u0275\u0275text(72, "link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(73, " URL\u3092\u30B3\u30D4\u30FC ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "button", 22);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_74_listener() {
          return ctx.copyInvitation();
        });
        \u0275\u0275elementStart(75, "mat-icon");
        \u0275\u0275text(76, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " \u62DB\u5F85\u6587\u3092\u30B3\u30D4\u30FC ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "button", 22);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_78_listener() {
          return ctx.shareByEmail();
        });
        \u0275\u0275elementStart(79, "mat-icon");
        \u0275\u0275text(80, "mail");
        \u0275\u0275elementEnd();
        \u0275\u0275text(81, " \u30E1\u30FC\u30EB\u3067\u5171\u6709 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "button", 22);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_82_listener() {
          return ctx.shareBySlack();
        });
        \u0275\u0275elementStart(83, "mat-icon");
        \u0275\u0275text(84, "tag");
        \u0275\u0275elementEnd();
        \u0275\u0275text(85, " Slack\u3067\u5171\u6709 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "button", 22);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_86_listener() {
          return ctx.shareByChatwork();
        });
        \u0275\u0275elementStart(87, "mat-icon");
        \u0275\u0275text(88, "chat");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, " Chatwork\u3067\u5171\u6709 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "button", 22);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_90_listener() {
          return ctx.copyHtmlDates();
        });
        \u0275\u0275elementStart(91, "mat-icon");
        \u0275\u0275text(92, "code");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, " \u76F4\u8FD1\u306E\u5019\u88DC\u65E5\u3092HTML\u3067\u30B3\u30D4\u30FC ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "button", 22);
        \u0275\u0275listener("click", function OneOnOneEventPageComponent_Template_button_click_94_listener() {
          return ctx.embedEvent();
        });
        \u0275\u0275elementStart(95, "mat-icon");
        \u0275\u0275text(96, "integration_instructions");
        \u0275\u0275elementEnd();
        \u0275\u0275text(97, " \u3053\u306E\u4E88\u5B9A\u8ABF\u6574\u3092\u30B5\u30A4\u30C8\u306B\u57CB\u3081\u8FBC\u3080 ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "div", 23)(99, "h3", 24);
        \u0275\u0275text(100, "\u3042\u306A\u305F\u3082\u4E88\u5B9A\u8ABF\u6574\u3092\u3057\u3088\u3046");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div", 25);
        \u0275\u0275template(102, OneOnOneEventPageComponent_div_102_Template, 7, 3, "div", 26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(ctx.event.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.event.type);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.event.organizer);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("", ctx.event.duration, "\u5206");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.event.deadline);
        \u0275\u0275advance(61);
        \u0275\u0275property("ngForOf", ctx.footerCards);
      }
    }, dependencies: [CommonModule, NgForOf, MatIconModule, MatIcon], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #fafafa;\n  min-height: 100vh;\n  min-height: 100dvh;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  color: #81766e;\n}\n.page-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 24px 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.success-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n}\n.success-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.success-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  color: #1b5e20;\n}\n.success-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  margin-bottom: 2px;\n}\n.event-info-card[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.event-info-card[_ngcontent-%COMP%]   .event-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n.event-info-card[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  background: rgba(255, 152, 0, 0.12);\n  color: #ef6c00;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.event-info-card[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #9e9e9e;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  color: #757575;\n  min-width: 72px;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #81766e;\n  font-weight: 500;\n}\n.action-buttons-card[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fff;\n  color: #81766e;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n  border-color: #ff9800;\n  color: #ef6c00;\n}\n.action-btn--danger[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  border-color: #ffcdd2;\n}\n.action-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #ffebee;\n  border-color: #d32f2f;\n  color: #b71c1c;\n}\n.share-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 20px;\n  color: #81766e;\n}\n.share-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.share-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.share-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fff;\n  color: #81766e;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  width: 100%;\n  text-align: left;\n}\n.share-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #9e9e9e;\n}\n.share-btn[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n  border-color: #ff9800;\n}\n.share-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.share-btn--primary[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  border-color: #ff9800;\n}\n.share-btn--primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.share-btn--primary[_ngcontent-%COMP%]:hover {\n  background: #ef6c00;\n  border-color: #ef6c00;\n}\n.share-btn--primary[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.footer-cta[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  text-align: center;\n}\n.footer-cta[_ngcontent-%COMP%]   .footer-cta-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0 0 20px;\n  color: #81766e;\n}\n.footer-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n.footer-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 20px 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 1px solid transparent;\n}\n.footer-card[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.footer-card[_ngcontent-%COMP%]   .footer-card-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  margin-bottom: 8px;\n}\n.footer-card[_ngcontent-%COMP%]   .footer-card-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n  margin-bottom: 4px;\n}\n.footer-card[_ngcontent-%COMP%]   .footer-card-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n}\n@media (max-width: 768px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .footer-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .event-info-card[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .share-buttons[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .share-btn[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    font-size: 13px;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=one-on-one-event-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OneOnOneEventPageComponent, { className: "OneOnOneEventPageComponent", filePath: "src\\app\\features\\scheduling\\pages\\one-on-one-event-page\\one-on-one-event-page.component.ts", lineNumber: 17 });
})();
export {
  OneOnOneEventPageComponent
};
//# sourceMappingURL=chunk-JNTBNAKH.js.map
