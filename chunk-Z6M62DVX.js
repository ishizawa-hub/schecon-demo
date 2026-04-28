import {
  ScheduleModalService
} from "./chunk-W3VOPBRX.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-VOAOX4DE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MPKYFQD7.js";
import {
  CommonModule,
  EventEmitter,
  Location,
  NgIf,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4
} from "./chunk-3YYMYGX4.js";

// src/app/shared/components/schecon-page-layout/schecon-page-layout.component.ts
var _c0 = ["*"];
function ScheconPageLayoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.candidateCount, "\u4EF6\u306E\u5019\u88DC\u304C\u3042\u308A\u307E\u3059 ");
  }
}
function ScheconPageLayoutComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("- ", ctx_r0.pageSubtitle, " -");
  }
}
var ScheconPageLayoutComponent = class _ScheconPageLayoutComponent {
  constructor(location, scheduleModal) {
    this.location = location;
    this.scheduleModal = scheduleModal;
    this.pageTitle = "";
    this.pageSubtitle = "";
    this.candidateCount = 0;
    this.accentColor = "#ed9630";
    this.scheduleClick = new EventEmitter();
  }
  goBack() {
    this.location.back();
  }
  /** 「予定調整をする」ボタン: グローバルモーダルを開き、親の scheduleClick も発火 */
  onScheduleButtonClick() {
    this.scheduleModal.open();
    this.scheduleClick.emit();
  }
  static {
    this.\u0275fac = function ScheconPageLayoutComponent_Factory(t) {
      return new (t || _ScheconPageLayoutComponent)(\u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ScheduleModalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheconPageLayoutComponent, selectors: [["app-schecon-page-layout"]], inputs: { pageTitle: "pageTitle", pageSubtitle: "pageSubtitle", candidateCount: "candidateCount", accentColor: "accentColor" }, outputs: { scheduleClick: "scheduleClick" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 38, vars: 5, consts: [[1, "schecon-header"], [1, "header-back", 3, "click"], ["class", "header-banner", 4, "ngIf"], ["routerLink", "/mail", 1, "header-logo"], ["src", "assets/imgs/common/logo.svg", "alt", "ScheCon", 1, "header-logo__img"], [1, "header-actions"], ["routerLink", "/address-book", 1, "header-btn", "header-btn--orange"], ["routerLink", "/history", 1, "header-btn", "header-btn--orange"], [1, "header-avatar"], [1, "schecon-sidebar"], [1, "sidebar-icon", "sidebar-icon--slack"], ["viewBox", "0 0 54 54", "width", "24", "height", "24"], ["d", "M19.7 27.5c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8h3.8v3.8c0 2.1-1.7 3.8-3.8 3.8z", "fill", "#E01E5A"], ["d", "M21.6 23.7c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v9.5c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8v-9.5z", "fill", "#36C5F0"], ["d", "M25.4 15.3c2.1 0 3.8 1.7 3.8 3.8s-1.7 3.8-3.8 3.8h-3.8v-3.8c0-2.1 1.7-3.8 3.8-3.8z", "fill", "#2EB67D"], ["d", "M29.2 19.1c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8V9.6c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v9.5z", "fill", "#ECB22E"], [1, "sidebar-schedule-btn", 3, "click"], [1, "sidebar-schedule-icon"], ["src", "assets/imgs/common/schecon-favicon.png", "alt", "\u30B9\u30B1\u30B3\u30F3", "width", "20", "height", "20"], [1, "sidebar-schedule-text"], [1, "schecon-main"], [1, "page-title-section"], [1, "page-title"], [1, "help-icon"], ["class", "page-subtitle", 4, "ngIf"], [1, "header-banner"], [1, "page-subtitle"]], template: function ScheconPageLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "header", 0)(1, "button", 1);
        \u0275\u0275listener("click", function ScheconPageLayoutComponent_Template_button_click_1_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(2, "mat-icon");
        \u0275\u0275text(3, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, ScheconPageLayoutComponent_div_4_Template, 2, 1, "div", 2);
        \u0275\u0275elementStart(5, "a", 3);
        \u0275\u0275element(6, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "a", 6)(9, "mat-icon");
        \u0275\u0275text(10, "import_contacts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " \u53C2\u52A0\u8005\u9023\u7D61\u5148 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 7)(13, "mat-icon");
        \u0275\u0275text(14, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " \u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275text(17, "\u77F3");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "aside", 9)(19, "div", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 11);
        \u0275\u0275element(21, "path", 12)(22, "path", 13)(23, "path", 14)(24, "path", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(25, "button", 16);
        \u0275\u0275listener("click", function ScheconPageLayoutComponent_Template_button_click_25_listener() {
          return ctx.onScheduleButtonClick();
        });
        \u0275\u0275elementStart(26, "div", 17);
        \u0275\u0275element(27, "img", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 19);
        \u0275\u0275text(29, "\u4E88\u5B9A\u8ABF\u6574\u3092\u3059\u308B");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "main", 20)(31, "div", 21)(32, "h1", 22);
        \u0275\u0275text(33);
        \u0275\u0275elementStart(34, "mat-icon", 23);
        \u0275\u0275text(35, "help_outline");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(36, ScheconPageLayoutComponent_p_36_Template, 2, 1, "p", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(37);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.candidateCount > 0);
        \u0275\u0275advance(28);
        \u0275\u0275styleProp("color", ctx.accentColor);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.pageSubtitle);
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, MatIconModule, MatIcon], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100dvh;\n  background: #fff;\n}\n.schecon-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 56px;\n  background: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  z-index: 1000;\n}\n.header-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #555;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  border-radius: 50%;\n  transition: background 0.2s;\n}\n.header-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.header-back[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.06);\n}\n.header-banner[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background: #8bc34a;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 8px 48px;\n  border-radius: 24px;\n  white-space: nowrap;\n  z-index: 1;\n}\n.header-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 0;\n}\n.header-logo__img[_ngcontent-%COMP%] {\n  height: 32px;\n  display: block;\n}\n.header-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: opacity 0.2s;\n}\n.header-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.header-btn--orange[_ngcontent-%COMP%] {\n  background: #ed9630;\n  color: #fff;\n}\n.header-btn--orange[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.header-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #7c4dff;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.schecon-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 56px;\n  left: 0;\n  width: 48px;\n  height: calc(100vh - 56px);\n  height: calc(100dvh - 56px);\n  background: #fff;\n  border-right: 1px solid #e8e8e8;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 12px;\n  gap: 8px;\n  z-index: 999;\n}\n.sidebar-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n.sidebar-icon[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.06);\n}\n.sidebar-schedule-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  background: #ed9630;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 4px 6px;\n  cursor: pointer;\n  width: 40px;\n  transition: opacity 0.2s;\n}\n.sidebar-schedule-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.sidebar-schedule-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.sidebar-schedule-text[_ngcontent-%COMP%] {\n  writing-mode: vertical-rl;\n  font-size: 11px;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 0.1em;\n  line-height: 1;\n}\n.schecon-main[_ngcontent-%COMP%] {\n  margin-top: 56px;\n  margin-left: 48px;\n  padding: 32px 40px 120px;\n}\n.page-title-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.help-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: #bbb;\n  cursor: pointer;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #888;\n  margin-top: 4px;\n}\n@media (max-width: 768px) {\n  .schecon-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .schecon-main[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding: 24px 16px 120px;\n  }\n  .header-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-banner[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 6px 24px;\n  }\n}\n/*# sourceMappingURL=schecon-page-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheconPageLayoutComponent, { className: "ScheconPageLayoutComponent", filePath: "src\\app\\shared\\components\\schecon-page-layout\\schecon-page-layout.component.ts", lineNumber: 14 });
})();

// src/app/shared/components/calendar-week-view-mini/calendar-week-view-mini.component.ts
var _forTrack0 = ($index, $item) => $item.date;
function CalendarWeekViewMiniComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", hour_r1, ":00");
  }
}
function CalendarWeekViewMiniComponent_For_19_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2, "\u5019\u88DC\u6642\u9593");
    \u0275\u0275element(3, "br");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r2.getCandidateTop(slot_r2), "px")("height", ctx_r2.getCandidateHeight(slot_r2), "px");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4("", slot_r2.startHour, ":", slot_r2.startMin === 0 ? "00" : slot_r2.startMin, "-", slot_r2.endHour, ":", slot_r2.endMin === 0 ? "00" : slot_r2.endMin, "");
  }
}
function CalendarWeekViewMiniComponent_For_19_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r2.getEventTop(event_r4), "px")("height", ctx_r2.getEventHeight(event_r4), "px")("background", event_r4.color);
    \u0275\u0275property("title", event_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r4.title);
  }
}
function CalendarWeekViewMiniComponent_For_19_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
  if (rf & 2) {
    const hour_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", (hour_r5 - ctx_r2.startHour) * 50, "px");
  }
}
function CalendarWeekViewMiniComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "div", 16)(8, "span", 17);
    \u0275\u0275text(9, "\u6307\u5B9A\u3055\u308C\u305F\u6642\u9593\u5E2F");
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(12, CalendarWeekViewMiniComponent_For_19_For_13_Template, 5, 8, "div", 18, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(14, CalendarWeekViewMiniComponent_For_19_For_15_Template, 3, 8, "div", 19, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(16, CalendarWeekViewMiniComponent_For_19_For_17_Template, 1, 2, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(day_r6.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", day_r6.dayOfWeek, ")");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r2.startHour, ":30-", ctx_r2.endHour, ":00");
    \u0275\u0275advance();
    \u0275\u0275repeater(day_r6.candidateSlots);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(day_r6.events);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.hours());
  }
}
var CalendarWeekViewMiniComponent = class _CalendarWeekViewMiniComponent {
  constructor() {
    this.startHour = 9;
    this.endHour = 19;
    this.accentColor = "#ed9630";
    this.showTimezoneOnly = signal(false);
    this.weekOffset = signal(0);
    this.hours = computed(() => {
      const h = [];
      for (let i = this.startHour; i <= this.endHour; i++)
        h.push(i);
      return h;
    });
    this.weekDays = computed(() => {
      const base = new Date(2026, 3, 6);
      base.setDate(base.getDate() + this.weekOffset() * 7);
      const days = [];
      const dayNames = ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"];
      for (let i = 0; i < 5; i++) {
        const d = new Date(base);
        d.setDate(d.getDate() + i);
        days.push({
          date: d.getDate(),
          dayOfWeek: dayNames[d.getDay()],
          events: this.getMockEvents(d.getDate(), d.getDay()),
          candidateSlots: this.getCandidateSlots(d.getDate()),
          timeRange: `${this.startHour}:30-${this.endHour}:00`
        });
      }
      return days;
    });
    this.weekLabel = computed(() => {
      const base = new Date(2026, 3, 6);
      base.setDate(base.getDate() + this.weekOffset() * 7);
      const end = new Date(base);
      end.setDate(end.getDate() + 4);
      return `${base.getDate()} (${["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"][base.getDay()]})`;
    });
  }
  prevWeek() {
    this.weekOffset.update((v) => v - 1);
  }
  nextWeek() {
    this.weekOffset.update((v) => v + 1);
  }
  getEventTop(event) {
    return ((event.startHour - this.startHour) * 60 + event.startMin) * (50 / 60);
  }
  getEventHeight(event) {
    return event.durationMin * (50 / 60);
  }
  getCandidateTop(slot) {
    return ((slot.startHour - this.startHour) * 60 + slot.startMin) * (50 / 60);
  }
  getCandidateHeight(slot) {
    const dur = (slot.endHour - slot.startHour) * 60 + (slot.endMin - slot.startMin);
    return dur * (50 / 60);
  }
  getMockEvents(date, dayOfWeek) {
    const colors = ["#4285f4", "#ea4335", "#34a853", "#fbbc04", "#ff6d01", "#46bdc6", "#7b61ff"];
    const eventSets = {
      6: [
        { title: "\u30AA\u30F3\u30E9\u30A4\u30F3\u30B5\u30DD\u30FC\u30C8", startHour: 10, startMin: 0, durationMin: 60, color: colors[0] },
        { title: "\u30AB\u30B8\u30E5\u30A2\u30EB\u9762\u8AC7", startHour: 13, startMin: 0, durationMin: 60, color: colors[1] },
        { title: "\u30AF\u30EA\u30A8\u30A4\u30BF\u30FC\u9078\u5B9A", startHour: 15, startMin: 0, durationMin: 90, color: colors[2] },
        { title: "\u304A\u8336MTG", startHour: 17, startMin: 0, durationMin: 60, color: colors[3] }
      ],
      7: [
        { title: "\u5E83\u5C3E\u3054\u306F\u3093", startHour: 9, startMin: 30, durationMin: 60, color: colors[4] },
        { title: "\u30CF\u30C3\u30AB\u30BD\u30F3MTG", startHour: 11, startMin: 0, durationMin: 60, color: colors[0] },
        { title: "IP\u958B\u767AMTG", startHour: 13, startMin: 0, durationMin: 60, color: colors[5] },
        { title: "\u5B9A\u4F8BMTG", startHour: 15, startMin: 0, durationMin: 60, color: colors[2] },
        { title: "\u5BFE\u9762MTG", startHour: 17, startMin: 0, durationMin: 60, color: colors[6] }
      ],
      8: [
        { title: "CL MTG", startHour: 10, startMin: 0, durationMin: 60, color: colors[1] },
        { title: "\u30E9\u30F3\u30C160\u5206", startHour: 12, startMin: 0, durationMin: 60, color: colors[0] },
        { title: "\u5B9A\u4F8B\uFF08\u9032\u6357\u78BA\u8A8D\uFF09", startHour: 14, startMin: 0, durationMin: 60, color: colors[3] },
        { title: "\u5E79\u90E8\u5B9A\u4F8B", startHour: 16, startMin: 0, durationMin: 60, color: colors[2] },
        { title: "60\u5206MTG", startHour: 17, startMin: 30, durationMin: 60, color: colors[5] }
      ],
      9: [
        { title: "\u5E83\u5C3E\u3054\u306F\u3093", startHour: 9, startMin: 30, durationMin: 60, color: colors[4] },
        { title: "\u30B3\u30F3\u30C6\u30F3\u30C4\u5236\u4F5C\u76F8\u8AC7", startHour: 11, startMin: 0, durationMin: 90, color: colors[0] },
        { title: "\u5B9A\u4F8B", startHour: 14, startMin: 0, durationMin: 120, color: colors[2] }
      ],
      10: [
        { title: "IP MTG", startHour: 10, startMin: 0, durationMin: 60, color: colors[5] },
        { title: "\u5BFE\u9762\u30D7\u30EC\u30BC\u30F3", startHour: 13, startMin: 0, durationMin: 60, color: colors[1] },
        { title: "\u5B9A\u4F8B", startHour: 15, startMin: 0, durationMin: 60, color: colors[2] }
      ],
      13: [
        { title: "\u8A95\u751F\u65E5\u4F1A", startHour: 10, startMin: 0, durationMin: 120, color: colors[3] },
        { title: "Web\u30B5\u30A4\u30C8\u4F5C\u308B\u4F1A", startHour: 13, startMin: 0, durationMin: 60, color: colors[0] },
        { title: "Claude Code", startHour: 14, startMin: 30, durationMin: 90, color: colors[6] }
      ],
      14: [
        { title: "\u5E83\u5C3E\u3054\u306F\u3093", startHour: 9, startMin: 30, durationMin: 60, color: colors[4] },
        { title: "\u7B50\u4F53\u30D7\u30EC\u30BC\u30F3", startHour: 11, startMin: 0, durationMin: 60, color: colors[1] },
        { title: "SEO\u5BFE\u7B56MTG", startHour: 13, startMin: 0, durationMin: 60, color: colors[0] }
      ],
      15: [
        { title: "\u30D6\u30EC\u30B9\u30C8\u4F1A", startHour: 10, startMin: 0, durationMin: 90, color: colors[5] },
        { title: "\u5B9A\u4F8B", startHour: 13, startMin: 0, durationMin: 60, color: colors[2] },
        { title: "\u5E79\u90E8\u5B9A\u4F8B", startHour: 15, startMin: 0, durationMin: 60, color: colors[3] },
        { title: "\u5B9A\u4F8B", startHour: 16, startMin: 30, durationMin: 60, color: colors[0] }
      ],
      16: [
        { title: "\u5E83\u5C3E\u3054\u306F\u3093", startHour: 9, startMin: 30, durationMin: 60, color: colors[4] },
        { title: "\u5B9A\u4F8B", startHour: 14, startMin: 0, durationMin: 120, color: colors[2] }
      ],
      17: [
        { title: "\u98DF\u4E8B\u4F1A", startHour: 10, startMin: 0, durationMin: 60, color: colors[1] },
        { title: "\u30BB\u30DF\u30CA\u30FC", startHour: 13, startMin: 0, durationMin: 60, color: colors[0] },
        { title: "\u691C\u67FB\u7D50\u679C", startHour: 15, startMin: 0, durationMin: 60, color: colors[5] },
        { title: "\u5B9A\u4F8B", startHour: 16, startMin: 30, durationMin: 60, color: colors[2] }
      ]
    };
    return eventSets[date] || [
      { title: "\u4E88\u5B9A1", startHour: 10, startMin: 0, durationMin: 60, color: colors[0] },
      { title: "\u4E88\u5B9A2", startHour: 14, startMin: 0, durationMin: 60, color: colors[2] }
    ];
  }
  getCandidateSlots(date) {
    const slotMap = {
      7: [{ startHour: 9, startMin: 30, endHour: 11, endMin: 30 }],
      8: [{ startHour: 14, startMin: 0, endHour: 16, endMin: 0 }],
      9: [{ startHour: 9, startMin: 30, endHour: 10, endMin: 30 }, { startHour: 14, startMin: 0, endHour: 18, endMin: 30 }],
      10: [{ startHour: 16, startMin: 0, endHour: 19, endMin: 0 }],
      13: [{ startHour: 12, startMin: 30, endHour: 13, endMin: 30 }, { startHour: 16, startMin: 0, endHour: 18, endMin: 0 }],
      14: [{ startHour: 9, startMin: 30, endHour: 13, endMin: 30 }],
      15: [{ startHour: 12, startMin: 30, endHour: 13, endMin: 30 }, { startHour: 16, startMin: 30, endHour: 19, endMin: 0 }],
      16: [{ startHour: 9, startMin: 30, endHour: 10, endMin: 30 }, { startHour: 12, startMin: 30, endHour: 18, endMin: 30 }],
      17: [{ startHour: 9, startMin: 30, endHour: 10, endMin: 30 }, { startHour: 12, startMin: 30, endHour: 13, endMin: 30 }, { startHour: 17, startMin: 30, endHour: 18, endMin: 30 }]
    };
    return slotMap[date] || [];
  }
  static {
    this.\u0275fac = function CalendarWeekViewMiniComponent_Factory(t) {
      return new (t || _CalendarWeekViewMiniComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarWeekViewMiniComponent, selectors: [["app-calendar-week-view-mini"]], inputs: { startHour: "startHour", endHour: "endHour", accentColor: "accentColor" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 1, consts: [[1, "week-view"], [1, "week-header"], [1, "week-nav"], [1, "nav-btn", 3, "click"], [1, "week-toggle"], [1, "toggle-label"], ["type", "checkbox", 3, "change", "checked"], [1, "week-grid"], [1, "time-axis"], [1, "time-axis__header"], [1, "time-axis__label"], [1, "day-column"], [1, "day-column__header"], [1, "day-date"], [1, "day-name"], [1, "day-column__body"], [1, "timezone-bar"], [1, "timezone-label"], [1, "candidate-highlight", 3, "top", "height"], [1, "event-block", 3, "top", "height", "background", "title"], [1, "hour-line", 3, "top"], [1, "candidate-highlight"], [1, "candidate-label"], [1, "event-block", 3, "title"], [1, "event-title"], [1, "hour-line"]], template: function CalendarWeekViewMiniComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function CalendarWeekViewMiniComponent_Template_button_click_3_listener() {
          return ctx.prevWeek();
        });
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function CalendarWeekViewMiniComponent_Template_button_click_6_listener() {
          return ctx.nextWeek();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4)(10, "label", 5)(11, "input", 6);
        \u0275\u0275listener("change", function CalendarWeekViewMiniComponent_Template_input_change_11_listener() {
          return ctx.showTimezoneOnly.set(!ctx.showTimezoneOnly());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " \u6307\u5B9A\u3055\u308C\u305F\u6642\u9593\u5E2F\u306E\u307F\u3092\u8868\u793A ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 7)(14, "div", 8);
        \u0275\u0275element(15, "div", 9);
        \u0275\u0275repeaterCreate(16, CalendarWeekViewMiniComponent_For_17_Template, 2, 1, "div", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(18, CalendarWeekViewMiniComponent_For_19_Template, 18, 4, "div", 11, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("checked", ctx.showTimezoneOnly());
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.hours());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.weekDays());
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 24px;\n}\n.week-view[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #fff;\n}\n.week-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  border-bottom: 1px solid #e0e0e0;\n  background: #fafafa;\n}\n.week-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  color: #555;\n}\n.nav-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #555;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.week-grid[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n}\n.time-axis[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 50px;\n  border-right: 1px solid #e0e0e0;\n}\n.time-axis__header[_ngcontent-%COMP%] {\n  height: 36px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.time-axis__label[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  padding-right: 6px;\n  font-size: 10px;\n  color: #999;\n  position: relative;\n  top: -6px;\n}\n.day-column[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  border-right: 1px solid #eee;\n}\n.day-column[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.day-column__header[_ngcontent-%COMP%] {\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n  background: #fafafa;\n}\n.day-column__body[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(50px * 10);\n}\n.day-date[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n.day-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  font-weight: 400;\n}\n.timezone-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(237, 150, 48, 0.04);\n  border-left: 3px solid #ed9630;\n  pointer-events: none;\n  z-index: 0;\n}\n.timezone-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  left: 6px;\n  font-size: 9px;\n  color: #ed9630;\n  line-height: 1.3;\n  white-space: nowrap;\n}\n.candidate-highlight[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: rgba(237, 150, 48, 0.12);\n  border: 1px dashed #ed9630;\n  border-radius: 4px;\n  z-index: 1;\n  pointer-events: none;\n}\n.candidate-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 4px;\n  font-size: 9px;\n  color: #ed9630;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.event-block[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4px;\n  right: 4px;\n  border-radius: 4px;\n  padding: 2px 4px;\n  overflow: hidden;\n  z-index: 2;\n  cursor: default;\n  min-height: 18px;\n}\n.event-title[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #fff;\n  font-weight: 500;\n  line-height: 1.2;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.hour-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #f0f0f0;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .day-column[_ngcontent-%COMP%] {\n    min-width: 90px;\n  }\n  .time-axis[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n  .timezone-label[_ngcontent-%COMP%], .candidate-label[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n}\n/*# sourceMappingURL=calendar-week-view-mini.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarWeekViewMiniComponent, { className: "CalendarWeekViewMiniComponent", filePath: "src\\app\\shared\\components\\calendar-week-view-mini\\calendar-week-view-mini.component.ts", lineNumber: 28 });
})();

export {
  ScheconPageLayoutComponent,
  CalendarWeekViewMiniComponent
};
//# sourceMappingURL=chunk-Z6M62DVX.js.map
