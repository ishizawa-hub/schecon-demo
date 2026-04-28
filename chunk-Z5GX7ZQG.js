import {
  ScheduleModalService
} from "./chunk-W3VOPBRX.js";
import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-YF2NDTP4.js";
import {
  ActivatedRoute,
  RouterModule
} from "./chunk-VOAOX4DE.js";
import {
  MatIcon,
  MatIconModule,
  Title
} from "./chunk-MPKYFQD7.js";
import {
  ChangeDetectorRef,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3YYMYGX4.js";

// src/app/features/scheduling/pages/history-page/history-page.component.ts
function HistoryPageComponent_label_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 30)(1, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function HistoryPageComponent_label_49_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showHidden, $event) || (ctx_r1.showHidden = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.showHidden);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u524A\u9664\u3057\u305F\u4E88\u5B9A\u3082\u8868\u793A (", ctx_r1.hiddenCount, "\u4EF6) ");
  }
}
function HistoryPageComponent_div_51_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "mat-icon");
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", entry_r4.participants, "\u540D");
  }
}
function HistoryPageComponent_div_51_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "mat-icon");
    \u0275\u0275text(2, "timelapse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r4.duration);
  }
}
function HistoryPageComponent_div_51_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "mat-icon");
    \u0275\u0275text(2, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u79FB\u52D5 ", entry_r4.travelTime, "");
  }
}
function HistoryPageComponent_div_51_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function HistoryPageComponent_div_51_button_36_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const entry_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit($event, entry_r4));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u7DE8\u96C6");
    \u0275\u0275elementEnd()();
  }
}
function HistoryPageComponent_div_51_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function HistoryPageComponent_div_51_button_42_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const entry_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHide($event, entry_r4));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function HistoryPageComponent_div_51_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function HistoryPageComponent_div_51_button_43_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const entry_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUnhide($event, entry_r4));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "restore");
    \u0275\u0275elementEnd()();
  }
}
function HistoryPageComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34)(5, "mat-icon", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "h3", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 38)(12, "div", 39)(13, "mat-icon");
    \u0275\u0275text(14, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 39)(18, "mat-icon");
    \u0275\u0275text(19, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 39)(23, "mat-icon");
    \u0275\u0275text(24, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, HistoryPageComponent_div_51_div_27_Template, 5, 1, "div", 40)(28, HistoryPageComponent_div_51_div_28_Template, 5, 1, "div", 40)(29, HistoryPageComponent_div_51_div_29_Template, 5, 1, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 41)(31, "button", 42);
    \u0275\u0275listener("click", function HistoryPageComponent_div_51_Template_button_click_31_listener($event) {
      const entry_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCopyUrl($event, entry_r4));
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "URL\u30B3\u30D4\u30FC");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, HistoryPageComponent_div_51_button_36_Template, 5, 0, "button", 43);
    \u0275\u0275elementStart(37, "button", 42);
    \u0275\u0275listener("click", function HistoryPageComponent_div_51_Template_button_click_37_listener($event) {
      const entry_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecreate($event, entry_r4));
    });
    \u0275\u0275elementStart(38, "mat-icon");
    \u0275\u0275text(39, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "\u518D\u4F5C\u6210");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, HistoryPageComponent_div_51_button_42_Template, 3, 0, "button", 44)(43, HistoryPageComponent_div_51_button_43_Template, 3, 0, "button", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("history-entry--hidden", entry_r4.hidden)("history-entry--confirmed", entry_r4.status === "\u78BA\u5B9A")("history-entry--pending", entry_r4.status === "\u8ABF\u6574\u4E2D")("history-entry--failed", entry_r4.status === "\u4E0D\u6210\u7ACB")("history-entry--cancelled", entry_r4.status === "\u30AD\u30E3\u30F3\u30BB\u30EB")("history-entry--aborted", entry_r4.status === "\u4E2D\u6B62");
    \u0275\u0275property("ngClass", ctx_r1.getTypeCardClass(entry_r4.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getTypeBadgeClass(entry_r4.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r4.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadgeClass(entry_r4.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStatusIcon(entry_r4.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r4.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(entry_r4.organizer);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u4F5C\u6210: ", entry_r4.createdDate, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(entry_r4.scheduledDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entry_r4.participants);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entry_r4.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entry_r4.travelTime);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", entry_r4.status === "\u8ABF\u6574\u4E2D");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !entry_r4.hidden);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entry_r4.hidden);
  }
}
function HistoryPageComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "mat-icon");
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u8A72\u5F53\u3059\u308B\u4E88\u5B9A\u8ABF\u6574\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function HistoryPageComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function HistoryPageComponent_div_53_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showScheduleMenu = false);
    });
    \u0275\u0275elementEnd();
  }
}
function HistoryPageComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "a", 51);
    \u0275\u0275listener("click", function HistoryPageComponent_div_54_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showScheduleMenu = false);
    });
    \u0275\u0275elementStart(2, "div", 52);
    \u0275\u0275element(3, "img", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54);
    \u0275\u0275text(5, "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574 ");
    \u0275\u0275elementStart(6, "mat-icon", 55);
    \u0275\u0275text(7, "arrow_forward_ios");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "a", 56);
    \u0275\u0275listener("click", function HistoryPageComponent_div_54_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showScheduleMenu = false);
    });
    \u0275\u0275elementStart(9, "div", 52);
    \u0275\u0275element(10, "img", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 54);
    \u0275\u0275text(12, "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574 ");
    \u0275\u0275elementStart(13, "mat-icon", 55);
    \u0275\u0275text(14, "arrow_forward_ios");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "a", 58);
    \u0275\u0275listener("click", function HistoryPageComponent_div_54_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showScheduleMenu = false);
    });
    \u0275\u0275elementStart(16, "div", 52);
    \u0275\u0275element(17, "img", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 54);
    \u0275\u0275text(19, "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574 ");
    \u0275\u0275elementStart(20, "mat-icon", 55);
    \u0275\u0275text(21, "arrow_forward_ios");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "a", 60);
    \u0275\u0275listener("click", function HistoryPageComponent_div_54_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showScheduleMenu = false);
    });
    \u0275\u0275elementStart(23, "div", 52);
    \u0275\u0275element(24, "img", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 54);
    \u0275\u0275text(26, "\u7A7A\u304D\u6642\u9593\u78BA\u8A8D ");
    \u0275\u0275elementStart(27, "mat-icon", 55);
    \u0275\u0275text(28, "arrow_forward_ios");
    \u0275\u0275elementEnd()()()();
  }
}
var HistoryPageComponent = class _HistoryPageComponent {
  /** 今月の成立件数 = 当月内に scheduledDate がある「確定」ステータスの件数 */
  get monthlyCount() {
    const now = /* @__PURE__ */ new Date();
    const ym = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    return this.entries.filter((e) => {
      if (e.status !== "\u78BA\u5B9A")
        return false;
      if (!e.scheduledDate)
        return false;
      return e.scheduledDate.startsWith(ym);
    }).length;
  }
  constructor(notification, cdr, titleService, route, scheduleModal) {
    this.notification = notification;
    this.cdr = cdr;
    this.titleService = titleService;
    this.route = route;
    this.scheduleModal = scheduleModal;
    this.showScheduleMenu = false;
    this.searchQuery = "";
    this.filterOneOnOne = true;
    this.filterMultiple = true;
    this.filterInternal = true;
    this.filterActiveOnly = false;
    this.showHidden = false;
    this.totalCount = 160;
    this.entries = [
      {
        id: "h-001",
        type: "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574",
        title: "Q2\u4E8B\u696D\u8A08\u753B\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0",
        organizer: "\u7530\u4E2D \u592A\u90CE",
        createdDate: "2026-04-01",
        scheduledDate: "2026-04-10 14:00",
        status: "\u8ABF\u6574\u4E2D",
        duration: "60\u5206",
        travelTime: "30\u5206"
      },
      {
        id: "h-002",
        type: "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574",
        title: "\u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC\u4F1A\u8B70",
        organizer: "\u4F50\u85E4 \u82B1\u5B50",
        createdDate: "2026-03-30",
        scheduledDate: "2026-04-05 10:00",
        status: "\u8ABF\u6574\u4E2D",
        participants: 5
      },
      {
        id: "h-003",
        type: "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574",
        title: "\u5168\u4F53\u671D\u793C",
        organizer: "\u9234\u6728 \u4E00\u90CE",
        createdDate: "2026-03-28",
        scheduledDate: "2026-04-01 09:00",
        status: "\u78BA\u5B9A",
        participants: 25
      },
      {
        id: "h-004",
        type: "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574",
        title: "\u30E9\u30F3\u30C1\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\uFF08\u9AD8\u6A4B\u3055\u3093\uFF09",
        organizer: "\u81EA\u5206",
        createdDate: "2026-03-25",
        scheduledDate: "2026-03-30 12:00",
        status: "\u4E0D\u6210\u7ACB",
        duration: "90\u5206",
        travelTime: "15\u5206"
      },
      {
        id: "h-005",
        type: "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574",
        title: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30AD\u30C3\u30AF\u30AA\u30D5",
        organizer: "\u4F0A\u85E4 \u5065\u592A",
        createdDate: "2026-03-22",
        scheduledDate: "2026-03-28 15:00",
        status: "\u30AD\u30E3\u30F3\u30BB\u30EB",
        participants: 8
      },
      {
        id: "h-006",
        type: "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574",
        title: "\u958B\u767A\u30C1\u30FC\u30E0\u632F\u308A\u8FD4\u308A",
        organizer: "\u6E21\u8FBA \u3055\u304F\u3089",
        createdDate: "2026-03-20",
        scheduledDate: "2026-03-26 16:00",
        status: "\u78BA\u5B9A",
        participants: 6
      },
      {
        id: "h-007",
        type: "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574",
        title: "\u63A1\u7528\u9762\u8AC7\uFF08\u5019\u88DC\u8005A\uFF09",
        organizer: "\u81EA\u5206",
        createdDate: "2026-03-18",
        scheduledDate: "2026-03-25 11:00",
        status: "\u78BA\u5B9A",
        duration: "45\u5206",
        travelTime: "0\u5206"
      },
      {
        id: "h-008",
        type: "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574",
        title: "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63D0\u6848\u4F1A\u8B70",
        organizer: "\u5C71\u672C \u5927\u8F14",
        createdDate: "2026-03-15",
        scheduledDate: "2026-03-22 13:00",
        status: "\u8ABF\u6574\u4E2D",
        participants: 4
      },
      {
        id: "h-009",
        type: "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574",
        title: "\u6708\u6B21\u5831\u544A\u4F1A",
        organizer: "\u4E2D\u6751 \u7531\u7F8E",
        createdDate: "2026-03-10",
        scheduledDate: "2026-03-20 10:00",
        status: "\u78BA\u5B9A",
        participants: 15
      },
      {
        id: "h-010",
        type: "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574",
        title: "\u30E1\u30F3\u30BF\u30FC\u9762\u8AC7",
        organizer: "\u5C0F\u6797 \u7FD4",
        createdDate: "2026-03-08",
        scheduledDate: "2026-03-18 17:00",
        status: "\u8ABF\u6574\u4E2D",
        duration: "30\u5206",
        travelTime: "20\u5206"
      },
      {
        id: "h-011",
        type: "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574",
        title: "\u65B0\u5E74\u5EA6\u8A08\u753B\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7",
        organizer: "\u52A0\u85E4 \u5948\u3005",
        createdDate: "2026-03-05",
        scheduledDate: "2026-03-15 09:00",
        status: "\u4E2D\u6B62",
        participants: 12
      },
      {
        id: "h-012",
        type: "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574",
        title: "\u6B53\u8FCE\u4F1A\u306E\u65E5\u7A0B\u8ABF\u6574",
        organizer: "\u81EA\u5206",
        createdDate: "2026-03-01",
        scheduledDate: "2026-04-03 19:00",
        status: "\u78BA\u5B9A",
        participants: 20
      }
    ];
  }
  /** 修正 No.65 (2026-04-25): /history の「予定調整する」ボタンをグローバル ScheduleModal に切替 */
  openScheduleModal() {
    this.scheduleModal.open();
  }
  ngOnInit() {
    this.titleService.setTitle('\u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74 | \u65E5\u7A0B\u8ABF\u6574\u30C4\u30FC\u30EB"\u30B9\u30B1\u30B3\u30F3"');
    this.route.queryParams.subscribe((params) => {
      if (params["q"]) {
        this.searchQuery = params["q"];
        this.cdr.markForCheck();
      }
    });
  }
  get filteredEntries() {
    const query = this.searchQuery.trim().toLowerCase();
    return this.entries.filter((e) => {
      if (e.hidden && !this.showHidden)
        return false;
      if (!this.filterOneOnOne && e.type === "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574")
        return false;
      if (!this.filterMultiple && e.type === "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574")
        return false;
      if (!this.filterInternal && e.type === "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574")
        return false;
      if (this.filterActiveOnly && e.status !== "\u8ABF\u6574\u4E2D")
        return false;
      if (query) {
        const searchTarget = `${e.title} ${e.organizer} ${e.type} ${e.status}`.toLowerCase();
        if (!searchTarget.includes(query))
          return false;
      }
      return true;
    });
  }
  get hiddenCount() {
    return this.entries.filter((e) => e.hidden).length;
  }
  getTypeBadgeClass(type) {
    switch (type) {
      case "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574":
        return "badge--blue";
      case "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574":
        return "badge--orange";
      case "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574":
        return "badge--green";
    }
  }
  getTypeCardClass(type) {
    switch (type) {
      case "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574":
        return "entry--blue";
      case "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574":
        return "entry--orange";
      case "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574":
        return "entry--green";
    }
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case "\u8ABF\u6574\u4E2D":
        return "status--pending";
      case "\u78BA\u5B9A":
        return "status--confirmed";
      case "\u4E0D\u6210\u7ACB":
        return "status--failed";
      case "\u30AD\u30E3\u30F3\u30BB\u30EB":
        return "status--cancelled";
      case "\u4E2D\u6B62":
        return "status--aborted";
    }
  }
  /** ステータス別のアイコン名 (Material Symbols) */
  getStatusIcon(status) {
    switch (status) {
      case "\u78BA\u5B9A":
        return "check_circle";
      case "\u8ABF\u6574\u4E2D":
        return "schedule";
      case "\u4E0D\u6210\u7ACB":
        return "error_outline";
      case "\u30AD\u30E3\u30F3\u30BB\u30EB":
        return "cancel";
      case "\u4E2D\u6B62":
        return "block";
    }
  }
  onSearch() {
    this.cdr.markForCheck();
  }
  onCopyUrl(event, entry) {
    event.stopPropagation();
    navigator.clipboard.writeText(`https://schecon.app/schedule/${entry.id}`);
    this.notification.success("URL\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  onEdit(event, entry) {
    event.stopPropagation();
    this.notification.info(`\u300C${entry.title}\u300D\u3092\u7DE8\u96C6\u3057\u307E\u3059`);
  }
  onRecreate(event, entry) {
    event.stopPropagation();
    this.notification.info(`\u300C${entry.title}\u300D\u3092\u518D\u4F5C\u6210\u3057\u307E\u3059`);
  }
  onDownloadParticipants(event, entry) {
    event.stopPropagation();
    this.notification.info("\u53C2\u52A0\u8005\u540D\u7C3F\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3059");
  }
  /** 予定を削除する（データ・URLは保持、表示のみ非表示） */
  onHide(event, entry) {
    event.stopPropagation();
    entry.hidden = true;
    this.notification.success(`\u300C${entry.title}\u300D\u3092\u524A\u9664\u3057\u307E\u3057\u305F\uFF08\u30C7\u30FC\u30BF\u3068URL\u306F\u4FDD\u6301\u3055\u308C\u307E\u3059\uFF09`);
    this.cdr.markForCheck();
  }
  /** 削除した予定を復元 */
  onUnhide(event, entry) {
    event.stopPropagation();
    entry.hidden = false;
    this.notification.info(`\u300C${entry.title}\u300D\u3092\u5FA9\u5143\u3057\u307E\u3057\u305F`);
    this.cdr.markForCheck();
  }
  /** 「非表示の予定も表示」トグル */
  toggleShowHidden() {
    this.showHidden = !this.showHidden;
    this.cdr.markForCheck();
  }
  static {
    this.\u0275fac = function HistoryPageComponent_Factory(t) {
      return new (t || _HistoryPageComponent)(\u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ScheduleModalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryPageComponent, selectors: [["app-history-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 12, consts: [[1, "history-page"], [1, "page-header"], [1, "page-title"], [1, "schedule-btn", "schedule-btn--with-logo", 3, "click"], ["src", "assets/imgs/common/schecon-favicon.png", "alt", "\u30B9\u30B1\u30B3\u30F3", 1, "schedule-btn__logo"], [1, "stats-row"], [1, "stat-card"], [1, "stat-card__label"], [1, "stat-card__value"], [1, "stat-card__number"], [1, "stat-card__unit"], [1, "filter-card", "filter-card--sticky"], [1, "search-row"], [1, "search-box"], [1, "search-box__icon"], ["type", "text", "placeholder", "\u4E88\u5B9A\u8ABF\u6574\u3092\u691C\u7D22", 1, "search-box__input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "search-box__btn", 3, "click"], [1, "filter-row"], [1, "checkbox-label", "checkbox-label--one-on-one"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkbox-custom"], [1, "checkbox-label", "checkbox-label--multiple"], [1, "checkbox-label", "checkbox-label--internal"], [1, "checkbox-label", "checkbox-label--highlight"], ["class", "checkbox-label checkbox-label--hidden-toggle", 4, "ngIf"], [1, "history-list"], ["class", "history-entry", 3, "ngClass", "history-entry--hidden", "history-entry--confirmed", "history-entry--pending", "history-entry--failed", "history-entry--cancelled", "history-entry--aborted", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "schedule-modal-overlay", 3, "click", 4, "ngIf"], ["class", "schedule-modal", 4, "ngIf"], [1, "checkbox-label", "checkbox-label--hidden-toggle"], [1, "history-entry", 3, "ngClass"], [1, "history-entry__header"], [1, "type-badge", 3, "ngClass"], [1, "status-badge", 3, "ngClass"], [1, "status-badge__icon"], [1, "status-badge__label"], [1, "history-entry__title"], [1, "history-entry__meta"], [1, "meta-item"], ["class", "meta-item", 4, "ngIf"], [1, "history-entry__actions"], [1, "action-btn", 3, "click"], ["class", "action-btn", 3, "click", 4, "ngIf"], ["class", "action-btn action-btn--icon-only action-btn--hide", "matTooltip", "\u3053\u306E\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059 (\u30C7\u30FC\u30BF\u3068 URL \u306F\u6B8B\u308A\u307E\u3059)", 3, "click", 4, "ngIf"], ["class", "action-btn action-btn--icon-only action-btn--unhide", "matTooltip", "\u5FA9\u5143", 3, "click", 4, "ngIf"], ["matTooltip", "\u3053\u306E\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059 (\u30C7\u30FC\u30BF\u3068 URL \u306F\u6B8B\u308A\u307E\u3059)", 1, "action-btn", "action-btn--icon-only", "action-btn--hide", 3, "click"], ["matTooltip", "\u5FA9\u5143", 1, "action-btn", "action-btn--icon-only", "action-btn--unhide", 3, "click"], [1, "empty-state"], [1, "schedule-modal-overlay", 3, "click"], [1, "schedule-modal"], ["href", "/schecon-demo/one-on-one-create", "target", "_blank", "rel", "noopener", 1, "schedule-modal__card", "schedule-modal__card--one-on-one", 3, "click"], [1, "schedule-modal__img"], ["src", "/schecon-demo/images/static/content-link/adjustment_1.webp", "alt", "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574"], [1, "schedule-modal__title"], [1, "schedule-modal__arrow"], ["href", "/schecon-demo/multiple/create", "target", "_blank", "rel", "noopener", 1, "schedule-modal__card", "schedule-modal__card--multiple", 3, "click"], ["src", "/schecon-demo/images/static/content-link/adjustment_2.webp", "alt", "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574"], ["href", "/schecon-demo/group/create", "target", "_blank", "rel", "noopener", 1, "schedule-modal__card", "schedule-modal__card--group", 3, "click"], ["src", "/schecon-demo/images/static/content-link/adjustment_3.webp", "alt", "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574"], ["href", "/schecon-demo/confirm", "target", "_blank", "rel", "noopener", 1, "schedule-modal__card", "schedule-modal__card--free-time", 3, "click"], ["src", "/schecon-demo/images/static/content-link/adjustment_4.webp", "alt", "\u7A7A\u304D\u6642\u9593\u78BA\u8A8D"]], template: function HistoryPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "\u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74\u4E00\u89A7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function HistoryPageComponent_Template_button_click_4_listener() {
          return ctx.openScheduleModal();
        });
        \u0275\u0275element(5, "img", 4);
        \u0275\u0275text(6, " \u4E88\u5B9A\u8ABF\u6574\u3059\u308B ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10, "\u4ECA\u6708\u306E\u6210\u7ACB\u4EF6\u6570");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15, "\u4EF6");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 6)(17, "div", 7);
        \u0275\u0275text(18, "\u7D2F\u8A08\u306E\u6210\u7ACB\u4EF6\u6570");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 8)(20, "span", 9);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 10);
        \u0275\u0275text(23, "\u4EF6");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 11)(25, "div", 12)(26, "div", 13)(27, "mat-icon", 14);
        \u0275\u0275text(28, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function HistoryPageComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function HistoryPageComponent_Template_input_keyup_enter_29_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 16);
        \u0275\u0275listener("click", function HistoryPageComponent_Template_button_click_30_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275text(31, "\u691C\u7D22");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 17)(33, "label", 18)(34, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function HistoryPageComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterOneOnOne, $event) || (ctx.filterOneOnOne = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "span", 20);
        \u0275\u0275text(36, " 1\u5BFE1\u4E88\u5B9A\u8ABF\u6574 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "label", 21)(38, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function HistoryPageComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterMultiple, $event) || (ctx.filterMultiple = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "span", 20);
        \u0275\u0275text(40, " \u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "label", 22)(42, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function HistoryPageComponent_Template_input_ngModelChange_42_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterInternal, $event) || (ctx.filterInternal = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "span", 20);
        \u0275\u0275text(44, " \u793E\u5185\u4E88\u5B9A\u8ABF\u6574 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "label", 23)(46, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function HistoryPageComponent_Template_input_ngModelChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterActiveOnly, $event) || (ctx.filterActiveOnly = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "span", 20);
        \u0275\u0275text(48, " \u8ABF\u6574\u4E2D\u306E\u307F\u3092\u8868\u793A ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(49, HistoryPageComponent_label_49_Template, 4, 2, "label", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 25);
        \u0275\u0275template(51, HistoryPageComponent_div_51_Template, 44, 28, "div", 26)(52, HistoryPageComponent_div_52_Template, 5, 0, "div", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(53, HistoryPageComponent_div_53_Template, 1, 0, "div", 28)(54, HistoryPageComponent_div_54_Template, 29, 0, "div", 29);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.monthlyCount);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.totalCount);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterOneOnOne);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterMultiple);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterInternal);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterActiveOnly);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.hiddenCount > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.filteredEntries);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredEntries.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showScheduleMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showScheduleMenu);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, MatIconModule, MatIcon, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, RouterModule], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #fafafa;\n  min-height: 100%;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.history-page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 24px 32px 64px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin: 0 0 24px;\n  position: relative;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0;\n}\n.schedule-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: #ed9630;\n  color: #fff;\n  border: none;\n  border-radius: 24px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.schedule-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.schedule-btn__logo[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  object-fit: contain;\n  display: inline-block;\n  border-radius: 4px;\n  background: #fff;\n  padding: 2px;\n  flex-shrink: 0;\n}\n.schedule-btn[_ngcontent-%COMP%]:hover {\n  background: #d47e1c;\n}\n.schedule-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 2000;\n}\n.schedule-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2001;\n  display: flex;\n  gap: 16px;\n  padding: 24px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n}\n.schedule-modal__card[_ngcontent-%COMP%] {\n  width: 210px;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  text-decoration: none;\n  color: inherit;\n  background: #fff;\n}\n.schedule-modal__card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.schedule-modal__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n}\n.schedule-modal__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.schedule-modal__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  border-radius: 0 0 12px 12px;\n}\n.schedule-modal__arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 24px;\n  height: 24px;\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.schedule-modal__card--one-on-one[_ngcontent-%COMP%]   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #a1c92f;\n}\n.schedule-modal__card--multiple[_ngcontent-%COMP%]   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #ed9630;\n}\n.schedule-modal__card--group[_ngcontent-%COMP%]   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #ed9630;\n}\n.schedule-modal__card--free-time[_ngcontent-%COMP%]   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #f1ba2b;\n}\n.schedule-modal__card--one-on-one[_ngcontent-%COMP%]:hover   .schedule-modal__title[_ngcontent-%COMP%] {\n  filter: brightness(1.08);\n}\n.schedule-modal__card--multiple[_ngcontent-%COMP%]:hover   .schedule-modal__title[_ngcontent-%COMP%] {\n  filter: brightness(1.08);\n}\n.schedule-modal__card--group[_ngcontent-%COMP%]:hover   .schedule-modal__title[_ngcontent-%COMP%] {\n  filter: brightness(1.08);\n}\n.schedule-modal__card--free-time[_ngcontent-%COMP%]:hover   .schedule-modal__title[_ngcontent-%COMP%] {\n  filter: brightness(1.08);\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 24px;\n  text-align: center;\n  transition: border-color 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(237, 150, 48, 0.3);\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #9e9e9e;\n  margin-bottom: 8px;\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 4px;\n}\n.stat-card__number[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 800;\n  color: #ed9630;\n  line-height: 1;\n}\n.stat-card__unit[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #757575;\n}\n.filter-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.filter-card--sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 30;\n  border-top: none;\n  border-radius: 0 0 12px 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  margin-left: -32px;\n  margin-right: -32px;\n  padding-left: 0;\n  padding-right: 0;\n  max-width: none;\n  background: #fff;\n}\n.search-row[_ngcontent-%COMP%] {\n  padding: 20px 20px 0;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fafafa;\n  overflow: hidden;\n  transition: border-color 0.2s;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #ed9630;\n}\n.search-box__icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #9e9e9e;\n  margin-left: 12px;\n  flex-shrink: 0;\n}\n.search-box__input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  padding: 10px 12px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n  font-family: inherit;\n  min-width: 0;\n}\n.search-box__input[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.search-box__btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 10px 20px;\n  border: none;\n  background: #ed9630;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  font-family: inherit;\n}\n.search-box__btn[_ngcontent-%COMP%]:hover {\n  background: #d47e1c;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 16px 20px;\n  flex-wrap: wrap;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #757575;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #e0e0e0;\n  border-radius: 4px;\n  position: relative;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 1px;\n  left: 5px;\n  width: 5px;\n  height: 9px;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg) scale(0);\n  transition: transform 0.2s;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%] {\n  background: #ed9630;\n  border-color: #ed9630;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%]::after {\n  transform: rotate(45deg) scale(1);\n}\n.checkbox-label--one-on-one[_ngcontent-%COMP%] {\n  color: #a1c92f;\n  font-weight: 500;\n}\n.checkbox-label--one-on-one[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%] {\n  background: #a1c92f;\n  border-color: #a1c92f;\n}\n.checkbox-label--multiple[_ngcontent-%COMP%] {\n  color: #ed9630;\n  font-weight: 500;\n}\n.checkbox-label--multiple[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%] {\n  background: #ed9630;\n  border-color: #ed9630;\n}\n.checkbox-label--internal[_ngcontent-%COMP%] {\n  color: #02d697;\n  font-weight: 500;\n}\n.checkbox-label--internal[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%] {\n  background: #02d697;\n  border-color: #02d697;\n}\n.checkbox-label--highlight[_ngcontent-%COMP%] {\n  color: #ed9630;\n  font-weight: 500;\n}\n.history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.history-entry[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-left: 4px solid #e0e0e0;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 20px 24px;\n  transition: all 0.2s;\n}\n.history-entry.entry--blue[_ngcontent-%COMP%] {\n  border-left-color: #a1c92f;\n}\n.history-entry.entry--blue[_ngcontent-%COMP%]:hover {\n  border-color: rgba(161, 201, 47, 0.3);\n  border-left-color: #a1c92f;\n}\n.history-entry.entry--orange[_ngcontent-%COMP%] {\n  border-left-color: #ed9630;\n}\n.history-entry.entry--orange[_ngcontent-%COMP%]:hover {\n  border-color: rgba(237, 150, 48, 0.3);\n  border-left-color: #ed9630;\n}\n.history-entry.entry--green[_ngcontent-%COMP%] {\n  border-left-color: #02d697;\n}\n.history-entry.entry--green[_ngcontent-%COMP%]:hover {\n  border-color: rgba(2, 214, 151, 0.3);\n  border-left-color: #02d697;\n}\n.history-entry[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.history-entry__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  gap: 8px;\n}\n.history-entry__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 12px;\n  line-height: 1.4;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n.history-entry__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.history-entry__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-top: 14px;\n  border-top: 1px solid #e0e0e0;\n  scrollbar-width: thin;\n}\n.history-entry__actions[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.history-entry__actions[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cfd4da;\n  border-radius: 2px;\n}\n.history-entry__actions[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: #757575;\n}\n.meta-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #9e9e9e;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.type-badge.badge--blue[_ngcontent-%COMP%] {\n  background: rgba(161, 201, 47, 0.1);\n  color: #a1c92f;\n}\n.type-badge.badge--orange[_ngcontent-%COMP%] {\n  background: rgba(237, 150, 48, 0.1);\n  color: #ed9630;\n}\n.type-badge.badge--green[_ngcontent-%COMP%] {\n  background: rgba(2, 214, 151, 0.1);\n  color: #02d697;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px 4px 8px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  border: 1.5px solid transparent;\n  white-space: nowrap;\n  line-height: 1;\n  letter-spacing: 0.02em;\n}\n.status-badge__icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  flex-shrink: 0;\n}\n.status-badge__label[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.status-badge.status--confirmed[_ngcontent-%COMP%] {\n  background: #2e7d32;\n  color: #fff;\n  border-color: #1b5e20;\n  box-shadow: 0 1px 3px rgba(46, 125, 50, 0.3);\n}\n.status-badge.status--pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n  border-color: #ffb74d;\n  position: relative;\n}\n.status-badge.status--pending[_ngcontent-%COMP%]   .status-badge__icon[_ngcontent-%COMP%] {\n  color: #ef6c00;\n}\n.status-badge.status--pending[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #ef6c00;\n  animation: _ngcontent-%COMP%_pulse-dot 1.6s ease-in-out infinite;\n}\n.status-badge.status--failed[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #b71c1c;\n  border-color: #ef9a9a;\n  text-decoration: line-through;\n}\n.status-badge.status--failed[_ngcontent-%COMP%]   .status-badge__icon[_ngcontent-%COMP%] {\n  color: #c62828;\n  text-decoration: none;\n}\n.status-badge.status--cancelled[_ngcontent-%COMP%] {\n  background: #eceff1;\n  color: #455a64;\n  border-color: #b0bec5;\n  text-decoration: line-through;\n}\n.status-badge.status--cancelled[_ngcontent-%COMP%]   .status-badge__icon[_ngcontent-%COMP%] {\n  color: #607d8b;\n  text-decoration: none;\n}\n.status-badge.status--aborted[_ngcontent-%COMP%] {\n  background: #546e7a;\n  color: #fff;\n  border-color: #37474f;\n}\n.status-badge.status--aborted[_ngcontent-%COMP%]   .status-badge__icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.35;\n    transform: scale(0.7);\n  }\n}\n.history-entry__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  overflow-y: visible;\n  scrollbar-width: thin;\n  -webkit-overflow-scrolling: touch;\n  padding-bottom: 2px;\n}\n.history-entry__actions[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.history-entry__actions[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e0e0e0;\n  border-radius: 2px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  background: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  color: #757575;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #ed9630;\n  color: #ed9630;\n  background: rgba(237, 150, 48, 0.04);\n}\n.action-btn--icon-only[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  min-width: 32px;\n  margin-left: auto;\n}\n.action-btn--hide[_ngcontent-%COMP%]:hover {\n  border-color: #e53935;\n  color: #e53935;\n  background: rgba(229, 57, 53, 0.06);\n}\n.action-btn--unhide[_ngcontent-%COMP%] {\n  border-color: #1e88e5;\n  color: #1e88e5;\n}\n.action-btn--unhide[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 136, 229, 0.08);\n  border-color: #1565c0;\n  color: #1565c0;\n}\n@media (max-width: 767px) {\n  .action-btn[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    font-size: 11px;\n    gap: 3px;\n  }\n  .action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 14px;\n    height: 14px;\n  }\n  .action-btn--icon-only[_ngcontent-%COMP%] {\n    padding: 5px 7px;\n    min-width: 28px;\n  }\n}\n.history-entry--confirmed[_ngcontent-%COMP%] {\n  border-left: 4px solid #2e7d32;\n  padding-left: 32px;\n}\n.history-entry--pending[_ngcontent-%COMP%] {\n  border-left: 4px solid #ef6c00;\n  padding-left: 32px;\n  background: #fffbf6;\n}\n.history-entry--failed[_ngcontent-%COMP%] {\n  border-left: 4px solid #c62828;\n  padding-left: 32px;\n  background: #fff8f8;\n}\n.history-entry--failed[_ngcontent-%COMP%]   .history-entry__title[_ngcontent-%COMP%] {\n  color: #81766e;\n}\n.history-entry--cancelled[_ngcontent-%COMP%] {\n  border-left: 4px solid #78909c;\n  padding-left: 32px;\n  background: #f5f7f8;\n  opacity: 0.75;\n}\n.history-entry--cancelled[_ngcontent-%COMP%]   .history-entry__title[_ngcontent-%COMP%] {\n  color: #81766e;\n  text-decoration: line-through;\n  text-decoration-color: rgba(69, 90, 100, 0.35);\n}\n.history-entry--aborted[_ngcontent-%COMP%] {\n  border-left: 4px solid #37474f;\n  padding-left: 32px;\n  background: #f0f2f3;\n  opacity: 0.8;\n}\n.history-entry--aborted[_ngcontent-%COMP%]   .history-entry__title[_ngcontent-%COMP%] {\n  color: #81766e;\n  text-decoration: line-through;\n  text-decoration-color: rgba(55, 71, 79, 0.45);\n}\n.history-entry--hidden[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  background:\n    repeating-linear-gradient(\n      -45deg,\n      #fafafa,\n      #fafafa 10px,\n      #f0f0f0 10px,\n      #f0f0f0 20px);\n}\n.history-entry--hidden[_ngcontent-%COMP%]   .history-entry__title[_ngcontent-%COMP%]::after {\n  content: "\\ff08\\975e\\8868\\793a\\ff09";\n  margin-left: 8px;\n  font-size: 12px;\n  color: #9e9e9e;\n  font-weight: normal;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 20px;\n  color: #9e9e9e;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .history-page[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 16px 12px 48px;\n    overflow-x: hidden;\n  }\n  .filter-card--sticky[_ngcontent-%COMP%] {\n    margin-left: -12px !important;\n    margin-right: -12px !important;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .stat-card__number[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .history-entry[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .history-entry__header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .history-entry__meta[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .history-entry__actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .status-badge[_ngcontent-%COMP%], .type-badge[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .meta-item[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .meta-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    padding: 6px 10px;\n    font-size: 12px;\n  }\n  .action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .schedule-btn[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .schedule-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .schedule-modal[_ngcontent-%COMP%] {\n    top: auto !important;\n    bottom: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    transform: none !important;\n    border-radius: 16px 16px 0 0;\n    max-width: 100%;\n    width: 100%;\n    flex-direction: column;\n    padding: 16px;\n    padding-bottom: max(16px, env(safe-area-inset-bottom));\n    gap: 8px;\n  }\n  .schedule-modal__card[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    border-radius: 10px;\n  }\n  .schedule-modal__img[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 60px;\n    flex-shrink: 0;\n    border-radius: 10px 0 0 10px;\n  }\n  .schedule-modal__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 10px 0 0 10px;\n  }\n  .schedule-modal__title[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 8px 12px;\n    font-size: 14px;\n    border-radius: 0 10px 10px 0;\n  }\n}\n/*# sourceMappingURL=history-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryPageComponent, { className: "HistoryPageComponent", filePath: "src\\app\\features\\scheduling\\pages\\history-page\\history-page.component.ts", lineNumber: 40 });
})();
export {
  HistoryPageComponent
};
//# sourceMappingURL=chunk-Z5GX7ZQG.js.map
