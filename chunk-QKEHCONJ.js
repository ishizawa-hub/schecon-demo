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
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-3YYMYGX4.js";

// src/app/features/scheduling/pages/multiple-event-page/multiple-event-page.component.ts
var _c0 = () => ["created", "responded", "confirmed"];
function MultipleEventPageComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function MultipleEventPageComponent_button_8_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setState(s_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.state() === s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2 === "created" ? "\u8ABF\u6574\u4E2D\u30FB\u56DE\u7B54\u306A\u3057" : s_r2 === "responded" ? "\u8ABF\u6574\u4E2D\u30FB\u56DE\u7B54\u3042\u308A" : "\u6C7A\u5B9A\u6E08\u307F", " ");
  }
}
function MultipleEventPageComponent_ng_container_9_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slot_r5.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", slot_r5.dayOfWeek, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r5.timeRange);
  }
}
function MultipleEventPageComponent_ng_container_9_ng_container_97_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.name);
  }
}
function MultipleEventPageComponent_ng_container_9_ng_container_97_tr_16_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const i_r10 = \u0275\u0275nextContext().index;
    \u0275\u0275classProp("answer-ok", r_r9.answers[i_r10] === "\u25CB")("answer-ng", r_r9.answers[i_r10] === "\xD7")("answer-maybe", r_r9.answers[i_r10] === "\u25B3");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r9.answers[i_r10], " ");
  }
}
function MultipleEventPageComponent_ng_container_9_ng_container_97_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MultipleEventPageComponent_ng_container_9_ng_container_97_tr_16_td_3_Template, 2, 7, "td", 51);
    \u0275\u0275elementStart(4, "td", 52)(5, "button", 53);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_ng_container_97_tr_16_Template_button_click_5_listener() {
      const i_r10 = \u0275\u0275restoreView(_r8).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.confirmSlot(i_r10));
    });
    \u0275\u0275text(6, "\u6C7A\u5B9A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const slot_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", slot_r11.date, "(", slot_r11.dayOfWeek, ") ", slot_r11.timeRange, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.respondents);
  }
}
function MultipleEventPageComponent_ng_container_9_ng_container_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 41)(2, "h3", 29)(3, "mat-icon");
    \u0275\u0275text(4, "how_to_reg");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u53C2\u52A0\u8005\u56DE\u7B54\u4E00\u89A7\uFF08\u6C7A\u5B9A\u30DC\u30BF\u30F3\u3067\u6C7A\u5B9A\u3067\u304D\u307E\u3059\uFF09 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42)(7, "table", 43)(8, "thead")(9, "tr")(10, "th", 44);
    \u0275\u0275text(11, "\u5019\u88DC\u65E5\u6642");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, MultipleEventPageComponent_ng_container_9_ng_container_97_th_12_Template, 2, 1, "th", 45);
    \u0275\u0275elementStart(13, "th", 46);
    \u0275\u0275text(14, "\u64CD\u4F5C");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, MultipleEventPageComponent_ng_container_9_ng_container_97_tr_16_Template, 7, 4, "tr", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 48);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_ng_container_97_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyCandidatesText());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " \u5019\u88DC\u65E5\u6642\u3092\u30C6\u30AD\u30B9\u30C8\u3068\u3057\u3066\u30B3\u30D4\u30FC ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r2.respondents);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.candidateSlots);
  }
}
function MultipleEventPageComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "mat-icon", 12);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "strong");
    \u0275\u0275text(6, "\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \u53C2\u52A0\u3057\u3066\u6B32\u3057\u3044\u4EBA\u306B\u62DB\u5F85\u3092\u9001\u308A\u307E\u3057\u3087\u3046\u3002 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "h2", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 18)(15, "div", 19)(16, "mat-icon");
    \u0275\u0275text(17, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 20);
    \u0275\u0275text(19, "\u4E3B\u50AC\u8005:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 19)(23, "mat-icon");
    \u0275\u0275text(24, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 20);
    \u0275\u0275text(26, "\u6240\u8981\u6642\u9593:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 21);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 19)(30, "mat-icon");
    \u0275\u0275text(31, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 20);
    \u0275\u0275text(33, "\u7DE0\u5207\u65E5\u6642:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 21);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 19)(37, "mat-icon");
    \u0275\u0275text(38, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 20);
    \u0275\u0275text(40, "\u53C2\u52A0\u4E88\u5B9A:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 21);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 22)(44, "button", 23);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyUrl());
    });
    \u0275\u0275elementStart(45, "mat-icon");
    \u0275\u0275text(46, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " URL\u30B3\u30D4\u30FC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 24);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.recreate());
    });
    \u0275\u0275elementStart(49, "mat-icon");
    \u0275\u0275text(50, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " \u518D\u4F5C\u6210 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 25)(53, "div", 26)(54, "button", 24);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editEvent());
    });
    \u0275\u0275elementStart(55, "mat-icon");
    \u0275\u0275text(56, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58, "\u7DE8\u96C6");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "button", 27);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelEvent());
    });
    \u0275\u0275elementStart(60, "mat-icon");
    \u0275\u0275text(61, "do_not_disturb_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63, "\u4E2D\u6B62");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "div", 28)(65, "h3", 29)(66, "mat-icon");
    \u0275\u0275text(67, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " URL\u3068\u30E1\u30FC\u30EB\u30FBSNS\u3067\u53C2\u52A0\u8005\u3092\u62DB\u5F85\u3059\u308B ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 30)(70, "button", 31);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyUrl());
    });
    \u0275\u0275elementStart(71, "mat-icon");
    \u0275\u0275text(72, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " URL\u3092\u30B3\u30D4\u30FC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 32);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyInvitation());
    });
    \u0275\u0275elementStart(75, "mat-icon");
    \u0275\u0275text(76, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, " \u62DB\u5F85\u6587\u3092\u30B3\u30D4\u30FC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "button", 32);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.shareByEmail());
    });
    \u0275\u0275elementStart(79, "mat-icon");
    \u0275\u0275text(80, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, " \u30E1\u30FC\u30EB\u3067\u5171\u6709 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 32);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.shareBySlack());
    });
    \u0275\u0275elementStart(83, "mat-icon");
    \u0275\u0275text(84, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, " Slack\u3067\u5171\u6709 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 32);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_9_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.shareByChatwork());
    });
    \u0275\u0275elementStart(87, "mat-icon");
    \u0275\u0275text(88, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, " Chatwork\u3067\u5171\u6709 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "div", 33)(91, "h3", 29)(92, "mat-icon");
    \u0275\u0275text(93, "date_range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, " \u3053\u306E\u4E88\u5B9A\u8ABF\u6574\u306E\u5019\u88DC\u65E5 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 34);
    \u0275\u0275template(96, MultipleEventPageComponent_ng_container_9_div_96_Template, 8, 3, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(97, MultipleEventPageComponent_ng_container_9_ng_container_97_Template, 21, 2, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.event.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.event.type);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.event.organizer);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.event.duration, "\u5206");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.event.deadline);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.event.participantCount, "\u4EBA");
    \u0275\u0275advance(54);
    \u0275\u0275property("ngForOf", ctx_r2.candidateSlots);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.state() === "responded");
  }
}
function MultipleEventPageComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "mat-icon", 12);
    \u0275\u0275text(3, "celebration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "strong");
    \u0275\u0275text(6, "\u958B\u50AC\u65E5\u304C\u6C7A\u5B9A\u3057\u307E\u3057\u305F\u3002");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \u65E5\u7A0B\u3092\u5171\u6709\u3057\u307E\u3057\u3087\u3046\u3002 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "h2", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 55);
    \u0275\u0275text(13, "\u6C7A\u5B9A\u6E08\u307F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 18)(15, "div", 56)(16, "mat-icon");
    \u0275\u0275text(17, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 20);
    \u0275\u0275text(19, "\u958B\u50AC\u65E5:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 19)(23, "mat-icon");
    \u0275\u0275text(24, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 20);
    \u0275\u0275text(26, "\u4E3B\u50AC\u8005:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 21);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 19)(30, "mat-icon");
    \u0275\u0275text(31, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 20);
    \u0275\u0275text(33, "\u6240\u8981\u6642\u9593:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 21);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 19)(37, "mat-icon");
    \u0275\u0275text(38, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 20);
    \u0275\u0275text(40, "\u958B\u50AC\u5834\u6240:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 21);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 28)(44, "h3", 29)(45, "mat-icon");
    \u0275\u0275text(46, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " \u65E5\u7A0B\u3092\u5171\u6709\u3059\u308B ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 30)(49, "button", 31);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_10_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyUrl());
    });
    \u0275\u0275elementStart(50, "mat-icon");
    \u0275\u0275text(51, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " URL\u3092\u30B3\u30D4\u30FC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 32);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_10_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyDate());
    });
    \u0275\u0275elementStart(54, "mat-icon");
    \u0275\u0275text(55, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " \u65E5\u7A0B\u3092\u30B3\u30D4\u30FC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 32);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_10_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.shareByEmail());
    });
    \u0275\u0275elementStart(58, "mat-icon");
    \u0275\u0275text(59, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " \u30E1\u30FC\u30EB\u5171\u6709 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 32);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_10_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.shareBySlack());
    });
    \u0275\u0275elementStart(62, "mat-icon");
    \u0275\u0275text(63, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Slack\u5171\u6709 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 32);
    \u0275\u0275listener("click", function MultipleEventPageComponent_ng_container_10_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.shareByChatwork());
    });
    \u0275\u0275elementStart(66, "mat-icon");
    \u0275\u0275text(67, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " Chatwork\u5171\u6709 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.confirmedEvent.name);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.confirmedEvent.date);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.confirmedEvent.organizer);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.confirmedEvent.duration, "\u5206");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.confirmedEvent.location);
  }
}
function MultipleEventPageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "mat-icon", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 60);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r13.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r13.description);
  }
}
var MultipleEventPageComponent = class _MultipleEventPageComponent {
  constructor(notification, location) {
    this.notification = notification;
    this.location = location;
    this.state = signal("created");
    this.event = {
      name: "\u30C6\u30B9\u30C8",
      type: "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574",
      organizer: "\u79C0\u6B21\u90CE",
      duration: 60,
      deadline: "2026\u5E744\u670816\u65E5(\u6728) 17:30",
      participantCount: 2,
      url: "https://schecon.example.com/event/multi123"
    };
    this.confirmedEvent = {
      date: "2026\u5E744\u67083\u65E5(\u91D1) 9:00 - 10:00",
      name: "\u30C6\u30B9\u30C84",
      organizer: "\u77F3\u6FA4\u79C0\u6B21\u90CE",
      duration: 60,
      location: "\u672A\u5B9A"
    };
    this.candidateSlots = [
      { date: "4\u67083\u65E5", dayOfWeek: "\u91D1", timeRange: "9:00 - 10:30" },
      { date: "4\u67083\u65E5", dayOfWeek: "\u91D1", timeRange: "13:00 - 14:30" },
      { date: "4\u67086\u65E5", dayOfWeek: "\u6708", timeRange: "11:45 - 13:30" },
      { date: "4\u67086\u65E5", dayOfWeek: "\u6708", timeRange: "15:00 - 16:30" },
      { date: "4\u67087\u65E5", dayOfWeek: "\u706B", timeRange: "10:00 - 11:30" },
      { date: "4\u67088\u65E5", dayOfWeek: "\u6C34", timeRange: "9:00 - 10:30" },
      { date: "4\u67088\u65E5", dayOfWeek: "\u6C34", timeRange: "14:00 - 15:30" },
      { date: "4\u67089\u65E5", dayOfWeek: "\u6728", timeRange: "11:00 - 12:30" },
      { date: "4\u670810\u65E5", dayOfWeek: "\u91D1", timeRange: "9:00 - 10:30" },
      { date: "4\u670810\u65E5", dayOfWeek: "\u91D1", timeRange: "16:00 - 17:30" }
    ];
    this.respondents = [
      {
        name: "\u5C71\u7530\u592A\u90CE",
        answers: ["\u25CB", "\xD7", "\u25CB", "\u25B3", "\u25CB", "\xD7", "\u25CB", "\u25B3", "\u25CB", "\xD7"]
      },
      {
        name: "\u4F50\u85E4\u82B1\u5B50",
        answers: ["\u25CB", "\u25CB", "\u25B3", "\u25CB", "\xD7", "\u25CB", "\xD7", "\u25CB", "\u25B3", "\u25CB"]
      }
    ];
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
  setState(s) {
    this.state.set(s);
  }
  copyUrl() {
    this.notification.info("URL\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  recreate() {
    this.notification.info("\u518D\u4F5C\u6210\u3057\u307E\u3059");
  }
  editEvent() {
    this.notification.info("\u7DE8\u96C6\u753B\u9762\u3078\u9077\u79FB\u3057\u307E\u3059");
  }
  cancelEvent() {
    this.notification.warn("\u4E88\u5B9A\u8ABF\u6574\u3092\u4E2D\u6B62\u3057\u307E\u3059\u304B\uFF1F");
  }
  copyInvitation() {
    this.notification.info("\u62DB\u5F85\u6587\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
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
  confirmSlot(index) {
    this.notification.success(`\u5019\u88DC\u65E5 ${this.candidateSlots[index].date} ${this.candidateSlots[index].timeRange} \u3067\u6C7A\u5B9A\u3057\u307E\u3059`);
  }
  copyCandidatesText() {
    this.notification.info("\u5019\u88DC\u65E5\u6642\u3092\u30C6\u30AD\u30B9\u30C8\u3068\u3057\u3066\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  copyDate() {
    this.notification.info("\u65E5\u7A0B\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  static {
    this.\u0275fac = function MultipleEventPageComponent_Factory(t) {
      return new (t || _MultipleEventPageComponent)(\u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Location));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultipleEventPageComponent, selectors: [["app-multiple-event-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [[1, "page-container"], [1, "back-nav"], [1, "back-button", 3, "click"], [1, "state-toggle"], ["class", "toggle-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "footer-cta"], [1, "footer-cta-title"], [1, "footer-cards"], ["class", "footer-card", 4, "ngFor", "ngForOf"], [1, "toggle-btn", 3, "click"], [1, "success-banner"], [1, "banner-icon"], [1, "banner-text"], [1, "card", "event-info-card"], [1, "event-header"], [1, "event-name"], [1, "type-badge"], [1, "event-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "event-actions"], [1, "action-btn", "action-btn--accent", 3, "click"], [1, "action-btn", 3, "click"], [1, "card", "action-buttons-card"], [1, "action-buttons"], [1, "action-btn", "action-btn--danger", 3, "click"], [1, "card", "share-card"], [1, "card-title"], [1, "share-buttons"], [1, "share-btn", "share-btn--primary", 3, "click"], [1, "share-btn", 3, "click"], [1, "card", "candidates-card"], [1, "candidates-list"], ["class", "candidate-slot", 4, "ngFor", "ngForOf"], [1, "candidate-slot"], [1, "slot-date"], [1, "slot-date-text"], [1, "slot-day"], [1, "slot-time"], [1, "card", "respondents-card"], [1, "respondents-table-wrapper"], [1, "respondents-table"], [1, "th-slot"], ["class", "th-name", 4, "ngFor", "ngForOf"], [1, "th-action"], [4, "ngFor", "ngForOf"], [1, "share-btn", "copy-candidates-btn", 3, "click"], [1, "th-name"], [1, "td-slot"], ["class", "td-answer", 3, "answer-ok", "answer-ng", "answer-maybe", 4, "ngFor", "ngForOf"], [1, "td-action"], [1, "confirm-btn", 3, "click"], [1, "td-answer"], [1, "type-badge", "type-badge--confirmed"], [1, "detail-row", "detail-row--highlight"], [1, "footer-card"], [1, "footer-card-icon"], [1, "footer-card-label"], [1, "footer-card-desc"]], template: function MultipleEventPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "button", 2);
        \u0275\u0275listener("click", function MultipleEventPageComponent_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "\u623B\u308B");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275template(8, MultipleEventPageComponent_button_8_Template, 2, 3, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, MultipleEventPageComponent_ng_container_9_Template, 98, 8, "ng-container", 5)(10, MultipleEventPageComponent_ng_container_10_Template, 69, 5, "ng-container", 5);
        \u0275\u0275elementStart(11, "div", 6)(12, "h3", 7);
        \u0275\u0275text(13, "\u3042\u306A\u305F\u3082\u4E88\u5B9A\u8ABF\u6574\u3092\u3057\u3088\u3046");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8);
        \u0275\u0275template(15, MultipleEventPageComponent_div_15_Template, 7, 3, "div", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() !== "confirmed");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "confirmed");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.footerCards);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatIconModule, MatIcon], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #fafafa;\n  min-height: 100vh;\n  min-height: 100dvh;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  color: #81766e;\n}\n.page-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 24px 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.state-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 4px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: #757575;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  font-weight: 600;\n}\n.success-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n}\n.success-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.success-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  color: #1b5e20;\n}\n.success-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  margin-bottom: 2px;\n}\n.event-info-card[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.event-info-card[_ngcontent-%COMP%]   .event-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n.event-info-card[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  background: rgba(255, 152, 0, 0.12);\n  color: #ef6c00;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.event-info-card[_ngcontent-%COMP%]   .type-badge--confirmed[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.event-info-card[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #9e9e9e;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  color: #757575;\n  min-width: 72px;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #81766e;\n  font-weight: 500;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row--highlight[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.06);\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin: -4px -12px;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row--highlight[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #ef6c00;\n  font-weight: 700;\n  font-size: 15px;\n}\n.event-info-card[_ngcontent-%COMP%]   .detail-row--highlight[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.event-info-card[_ngcontent-%COMP%]   .event-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid #e0e0e0;\n}\n.action-buttons-card[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fff;\n  color: #81766e;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n  border-color: #ff9800;\n  color: #ef6c00;\n}\n.action-btn--accent[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  border-color: #ff9800;\n}\n.action-btn--accent[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.action-btn--accent[_ngcontent-%COMP%]:hover {\n  background: #ef6c00;\n  border-color: #ef6c00;\n}\n.action-btn--danger[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  border-color: #ffcdd2;\n}\n.action-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #ffebee;\n  border-color: #d32f2f;\n  color: #b71c1c;\n}\n.share-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 20px;\n  color: #81766e;\n}\n.share-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.share-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.share-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fff;\n  color: #81766e;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  width: 100%;\n  text-align: left;\n}\n.share-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #9e9e9e;\n}\n.share-btn[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n  border-color: #ff9800;\n}\n.share-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.share-btn--primary[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  border-color: #ff9800;\n}\n.share-btn--primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.share-btn--primary[_ngcontent-%COMP%]:hover {\n  background: #ef6c00;\n  border-color: #ef6c00;\n}\n.share-btn--primary[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.candidates-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 16px;\n  color: #81766e;\n}\n.candidates-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.candidates-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.candidate-slot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  transition: background 0.1s ease;\n}\n.candidate-slot[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgba(250, 250, 250, 0.7);\n}\n.candidate-slot[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.06);\n}\n.candidate-slot[_ngcontent-%COMP%]   .slot-date[_ngcontent-%COMP%] {\n  min-width: 100px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.candidate-slot[_ngcontent-%COMP%]   .slot-day[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  font-weight: 400;\n  margin-left: 2px;\n}\n.candidate-slot[_ngcontent-%COMP%]   .slot-time[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #757575;\n}\n.respondents-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  margin: 0 0 16px;\n  color: #81766e;\n}\n.respondents-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.respondents-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-bottom: 16px;\n}\n.respondents-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.respondents-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .respondents-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n.respondents-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #fafafa;\n  font-weight: 600;\n  color: #757575;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.respondents-table[_ngcontent-%COMP%]   .th-slot[_ngcontent-%COMP%] {\n  text-align: left;\n  min-width: 200px;\n}\n.respondents-table[_ngcontent-%COMP%]   .th-name[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n.respondents-table[_ngcontent-%COMP%]   .th-action[_ngcontent-%COMP%] {\n  min-width: 60px;\n}\n.respondents-table[_ngcontent-%COMP%]   .td-slot[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.respondents-table[_ngcontent-%COMP%]   .td-answer[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n.respondents-table[_ngcontent-%COMP%]   .td-answer.answer-ok[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.respondents-table[_ngcontent-%COMP%]   .td-answer.answer-ng[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.respondents-table[_ngcontent-%COMP%]   .td-answer.answer-maybe[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.respondents-table[_ngcontent-%COMP%]   .td-action[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n}\n.confirm-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid #ff9800;\n  border-radius: 8px;\n  background: #fff;\n  color: #ef6c00;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  white-space: nowrap;\n}\n.confirm-btn[_ngcontent-%COMP%]:hover {\n  background: #ff9800;\n  color: #fff;\n}\n.copy-candidates-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.footer-cta[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  text-align: center;\n}\n.footer-cta[_ngcontent-%COMP%]   .footer-cta-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0 0 20px;\n  color: #81766e;\n}\n.footer-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n.footer-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 20px 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 1px solid transparent;\n}\n.footer-card[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.footer-card[_ngcontent-%COMP%]   .footer-card-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  margin-bottom: 8px;\n}\n.footer-card[_ngcontent-%COMP%]   .footer-card-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n  margin-bottom: 4px;\n}\n.footer-card[_ngcontent-%COMP%]   .footer-card-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n}\n@media (max-width: 768px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .state-toggle[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .footer-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .event-info-card[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .respondents-table-wrapper[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    min-width: 0;\n  }\n  .respondents-table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .respondents-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .respondents-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px 6px;\n  }\n  .respondents-table[_ngcontent-%COMP%]   .th-slot[_ngcontent-%COMP%] {\n    min-width: 140px;\n  }\n  .respondents-table[_ngcontent-%COMP%]   .th-name[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n  .candidate-slot[_ngcontent-%COMP%] {\n    gap: 8px;\n    padding: 8px 10px;\n  }\n  .candidate-slot[_ngcontent-%COMP%]   .slot-date[_ngcontent-%COMP%] {\n    min-width: 80px;\n    font-size: 13px;\n  }\n  .candidate-slot[_ngcontent-%COMP%]   .slot-time[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=multiple-event-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultipleEventPageComponent, { className: "MultipleEventPageComponent", filePath: "src\\app\\features\\scheduling\\pages\\multiple-event-page\\multiple-event-page.component.ts", lineNumber: 29 });
})();
export {
  MultipleEventPageComponent
};
//# sourceMappingURL=chunk-QKEHCONJ.js.map
