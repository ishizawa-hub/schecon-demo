import {
  SettingsTabNavComponent
} from "./chunk-TZAQ3ICD.js";
import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-YF2NDTP4.js";
import "./chunk-VOAOX4DE.js";
import {
  MatIcon,
  MatIconModule,
  Title
} from "./chunk-MPKYFQD7.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3YYMYGX4.js";

// src/app/features/settings/pages/settings-page/settings-page.component.ts
function SettingsPageComponent_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const range_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", range_r2.startTime, " - ", range_r2.endTime, "");
  }
}
function SettingsPageComponent_div_11_div_4_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275property("value", t_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4);
  }
}
function SettingsPageComponent_div_11_div_4_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275property("value", t_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5);
  }
}
function SettingsPageComponent_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "label", 26);
    \u0275\u0275text(3, "\u958B\u59CB\u6642\u9593");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsPageComponent_div_11_div_4_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const range_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(range_r2.startTime, $event) || (range_r2.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(5, SettingsPageComponent_div_11_div_4_option_5_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25)(9, "label", 26);
    \u0275\u0275text(10, "\u7D42\u4E86\u6642\u9593");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsPageComponent_div_11_div_4_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const range_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(range_r2.endTime, $event) || (range_r2.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(12, SettingsPageComponent_div_11_div_4_option_12_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const range_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", range_r2.startTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r5.timeOptions);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", range_r2.endTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r5.timeOptions);
  }
}
function SettingsPageComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SettingsPageComponent_div_11_div_3_Template, 3, 2, "div", 19)(4, SettingsPageComponent_div_11_div_4_Template, 13, 4, "div", 20);
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function SettingsPageComponent_div_11_Template_button_click_5_listener() {
      const i_r7 = \u0275\u0275restoreView(_r1).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleEdit(i_r7));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const range_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(range_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !range_r2.editing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", range_r2.editing);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(range_r2.editing ? "check" : "edit");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", range_r2.editing ? "\u4FDD\u5B58\u3059\u308B" : "\u5909\u66F4\u3059\u308B", " ");
  }
}
function SettingsPageComponent_div_34_label_9_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function SettingsPageComponent_div_34_label_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 36);
    \u0275\u0275listener("click", function SettingsPageComponent_div_34_label_9_Template_label_click_0_listener($event) {
      const cal_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      ctx_r5.toggleCalendar(cal_r9.id);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 38);
    \u0275\u0275template(3, SettingsPageComponent_div_34_label_9_mat_icon_3_Template, 2, 0, "mat-icon", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "span", 40);
    \u0275\u0275elementStart(5, "span", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cal_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("checked", cal_r9.checked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cal_r9.checked);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", cal_r9.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cal_r9.name);
  }
}
function SettingsPageComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "mat-icon");
    \u0275\u0275text(3, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 34);
    \u0275\u0275template(9, SettingsPageComponent_div_34_label_9_Template, 7, 6, "label", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r10 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(group_r10.account);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", group_r10.items.length, "\u4EF6");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r10.items);
  }
}
function SettingsPageComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "mat-icon");
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u300C", ctx_r5.calendarSearch(), "\u300D\u306B\u4E00\u81F4\u3059\u308B\u30AB\u30EC\u30F3\u30C0\u30FC\u304C\u3042\u308A\u307E\u305B\u3093");
  }
}
var SettingsPageComponent = class _SettingsPageComponent {
  generateTimeOptions() {
    const options = [];
    for (let h = 0; h < 24; h++) {
      options.push(`${String(h).padStart(2, "0")}:00`);
      options.push(`${String(h).padStart(2, "0")}:30`);
    }
    return options;
  }
  constructor(titleService, notification) {
    this.titleService = titleService;
    this.notification = notification;
    this.timeRanges = [
      { label: "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0", startTime: "09:30", endTime: "19:00", editing: false },
      { label: "\u98DF\u4E8B\u4F1A", startTime: "19:00", endTime: "23:00", editing: false }
    ];
    this.timeOptions = this.generateTimeOptions();
    this.calendarSearch = signal("");
    this.calendars = signal(this.generateMockCalendars());
    this.filteredCalendars = computed(() => {
      const q = this.calendarSearch().toLowerCase();
      if (!q)
        return this.calendars();
      return this.calendars().filter((c) => c.name.toLowerCase().includes(q) || c.account.toLowerCase().includes(q));
    });
    this.checkedCount = computed(() => this.calendars().filter((c) => c.checked).length);
    this.totalCount = computed(() => this.calendars().length);
    this.groupedCalendars = computed(() => {
      const filtered = this.filteredCalendars();
      const groups = /* @__PURE__ */ new Map();
      for (const cal of filtered) {
        const list = groups.get(cal.account) || [];
        list.push(cal);
        groups.set(cal.account, list);
      }
      return Array.from(groups.entries()).map(([account, items]) => ({ account, items }));
    });
  }
  ngOnInit() {
    this.titleService.setTitle('\u57FA\u672C\u8A2D\u5B9A | \u65E5\u7A0B\u8ABF\u6574\u30C4\u30FC\u30EB"\u30B9\u30B1\u30B3\u30F3"');
  }
  toggleEdit(index) {
    this.timeRanges[index].editing = !this.timeRanges[index].editing;
    if (!this.timeRanges[index].editing) {
      this.notification.success("\u6642\u9593\u5E2F\u8A2D\u5B9A\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F");
    }
  }
  toggleCalendar(id) {
    this.calendars.update((cals) => cals.map((c) => c.id === id ? __spreadProps(__spreadValues({}, c), { checked: !c.checked }) : c));
    this.notification.info("\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u8868\u793A\u8A2D\u5B9A\u3092\u5909\u66F4\u3057\u307E\u3057\u305F");
  }
  selectAll() {
    const filtered = this.filteredCalendars();
    const ids = new Set(filtered.map((c) => c.id));
    this.calendars.update((cals) => cals.map((c) => ids.has(c.id) ? __spreadProps(__spreadValues({}, c), { checked: true }) : c));
    this.notification.info("\u3059\u3079\u3066\u306E\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u9078\u629E\u3057\u307E\u3057\u305F");
  }
  deselectAll() {
    const filtered = this.filteredCalendars();
    const ids = new Set(filtered.map((c) => c.id));
    this.calendars.update((cals) => cals.map((c) => ids.has(c.id) ? __spreadProps(__spreadValues({}, c), { checked: false }) : c));
    this.notification.info("\u3059\u3079\u3066\u306E\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u9078\u629E\u3092\u89E3\u9664\u3057\u307E\u3057\u305F");
  }
  onCalendarSearchInput(event) {
    this.calendarSearch.set(event.target.value);
  }
  generateMockCalendars() {
    const calendarData = [
      { id: "cal-personal", name: "\u500B\u4EBA", color: "#ff9800", owner: "\u81EA\u5206" },
      { id: "cal-work", name: "\u4ED5\u4E8B", color: "#1976d2", owner: "\u81EA\u5206" },
      { id: "cal-schecon", name: "\u30B9\u30B1\u30B3\u30F3\u4E88\u5B9A", color: "#4caf50", owner: "\u81EA\u5206" },
      { id: "cal-tanaka", name: "\u7530\u4E2D\u592A\u90CE", color: "#9c27b0", owner: "\u7530\u4E2D\u592A\u90CE" },
      { id: "cal-holidays", name: "\u65E5\u672C\u306E\u795D\u65E5", color: "#9e9e9e", owner: "\u305D\u306E\u4ED6" }
    ];
    return calendarData.map((cal) => ({
      id: cal.id,
      name: cal.name,
      color: cal.color,
      checked: true,
      account: cal.owner
    }));
  }
  static {
    this.\u0275fac = function SettingsPageComponent_Factory(t) {
      return new (t || _SettingsPageComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsPageComponent, selectors: [["app-settings-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 6, consts: [[1, "settings-page"], [1, "settings-container"], [1, "card"], [1, "card-title"], [1, "card-description"], [1, "time-range-list"], ["class", "time-range-row", 4, "ngFor", "ngForOf"], [1, "calendar-toolbar"], [1, "calendar-search"], [1, "calendar-search__icon"], ["type", "text", "placeholder", "\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u691C\u7D22...", 1, "calendar-search__input", 3, "input", "value"], [1, "calendar-controls"], [1, "calendar-count"], [1, "calendar-bulk-btn", 3, "click"], [1, "calendar-scroll-area"], ["class", "calendar-group", 4, "ngFor", "ngForOf"], ["class", "calendar-empty", 4, "ngIf"], [1, "time-range-row"], [1, "time-range-label"], ["class", "time-range-value", 4, "ngIf"], ["class", "time-range-edit", 4, "ngIf"], [1, "btn-edit", 3, "click"], [1, "time-range-value"], [1, "time-display"], [1, "time-range-edit"], [1, "time-select-group"], [1, "time-select-label"], [1, "time-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "time-separator"], [3, "value"], [1, "calendar-group"], [1, "calendar-group__header"], [1, "calendar-group__count"], [1, "calendar-group__list"], ["class", "calendar-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "calendar-item", 3, "click"], [1, "checkbox-wrapper"], [1, "custom-checkbox"], [4, "ngIf"], [1, "color-dot"], [1, "calendar-name"], [1, "calendar-empty"]], template: function SettingsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-settings-tab-nav");
        \u0275\u0275elementStart(3, "section", 2)(4, "h2", 3)(5, "mat-icon");
        \u0275\u0275text(6, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " \u6642\u9593\u5E2F\u306E\u8A2D\u5B9A ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 4);
        \u0275\u0275text(9, "\u4E88\u5B9A\u8ABF\u6574\u4F5C\u6210\u6642\u306E\u6642\u9593\u5E2F\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u5909\u66F4\u3057\u307E\u3059");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275template(11, SettingsPageComponent_div_11_Template, 9, 5, "div", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "section", 2)(13, "h2", 3)(14, "mat-icon");
        \u0275\u0275text(15, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " \u540C\u671F\u3055\u305B\u308B\u30AB\u30EC\u30F3\u30C0\u30FC ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 4);
        \u0275\u0275text(18, "\u5171\u6709\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u3042\u3089\u304B\u3058\u3081\u6307\u5B9A\u3067\u304D\u307E\u3059");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 7)(20, "div", 8)(21, "mat-icon", 9);
        \u0275\u0275text(22, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 10);
        \u0275\u0275listener("input", function SettingsPageComponent_Template_input_input_23_listener($event) {
          return ctx.onCalendarSearchInput($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 11)(25, "span", 12)(26, "strong");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 13);
        \u0275\u0275listener("click", function SettingsPageComponent_Template_button_click_29_listener() {
          return ctx.selectAll();
        });
        \u0275\u0275text(30, "\u3059\u3079\u3066\u9078\u629E");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 13);
        \u0275\u0275listener("click", function SettingsPageComponent_Template_button_click_31_listener() {
          return ctx.deselectAll();
        });
        \u0275\u0275text(32, "\u3059\u3079\u3066\u89E3\u9664");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 14);
        \u0275\u0275template(34, SettingsPageComponent_div_34_Template, 10, 3, "div", 15)(35, SettingsPageComponent_div_35_Template, 5, 1, "div", 16);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.timeRanges);
        \u0275\u0275advance(12);
        \u0275\u0275property("value", ctx.calendarSearch());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.checkedCount());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" / ", ctx.totalCount(), " \u4EF6\u9078\u629E\u4E2D ");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.groupedCalendars());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredCalendars().length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, SettingsTabNavComponent], styles: [`

.settings-page[_ngcontent-%COMP%] {
  min-height: 100vh;
  min-height: 100dvh;
  background: #f0f0f4;
  padding: 32px 16px 64px;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  font-size: 15px;
  color: #81766e;
  -webkit-font-smoothing: antialiased;
}
.settings-container[_ngcontent-%COMP%] {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
}
.card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  padding: 28px 28px 24px;
  margin-bottom: 20px;
}
.card-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 600;
  color: #81766e;
  margin: 0 0 8px;
  padding-bottom: 12px;
  border-bottom: 2px solid #ff9800;
}
.card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  color: #ff9800;
  font-size: 22px;
  width: 22px;
  height: 22px;
}
.card-description[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #9e9e9e;
  margin: 0 0 20px;
  line-height: 1.5;
}
.time-range-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.time-range-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
}
.time-range-row[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.time-range-row[_ngcontent-%COMP%]:first-child {
  padding-top: 0;
}
.time-range-label[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 500;
  color: #81766e;
  min-width: 120px;
  flex-shrink: 0;
}
.time-range-value[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  justify-content: center;
}
.time-display[_ngcontent-%COMP%] {
  font-size: 15px;
  color: #757575;
  font-weight: 500;
  background: #fafafa;
  padding: 6px 16px;
  border-radius: 8px;
  letter-spacing: 0.5px;
}
.time-range-edit[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.time-select-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.time-select-label[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #757575;
  font-weight: 500;
}
.time-select[_ngcontent-%COMP%] {
  padding: 10px 32px 10px 14px;
  font-size: 16px;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  color: #81766e;
  background: #fff;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  transition: all 0.15s ease;
  width: 130px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23757575' d='M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}
.time-select[_ngcontent-%COMP%]:focus {
  border-color: #ff9800;
  box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.1);
}
.time-select[_ngcontent-%COMP%]:hover {
  border-color: #c7c7c7;
}
.time-separator[_ngcontent-%COMP%] {
  color: #9e9e9e;
  font-weight: 500;
}
.btn-edit[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  background: #fff;
  color: #757575;
  font-size: 13px;
  font-weight: 500;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.15s ease;
  flex-shrink: 0;
  margin-left: 16px;
}
.btn-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 16px;
  width: 16px;
  height: 16px;
}
.btn-edit[_ngcontent-%COMP%]:hover {
  border-color: #ff9800;
  color: #ff9800;
  background: rgba(255, 152, 0, 0.04);
}
.calendar-toolbar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.calendar-search[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 200px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
  transition: border-color 0.2s;
}
.calendar-search[_ngcontent-%COMP%]:focus-within {
  border-color: #ff9800;
  background: #fff;
}
.calendar-search__icon[_ngcontent-%COMP%] {
  font-size: 18px;
  width: 18px;
  height: 18px;
  color: #9e9e9e;
  margin-left: 10px;
  flex-shrink: 0;
}
.calendar-search__input[_ngcontent-%COMP%] {
  flex: 1;
  border: none;
  background: transparent;
  padding: 9px 10px;
  font-size: 13px;
  color: #81766e;
  outline: none;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  min-width: 0;
}
.calendar-search__input[_ngcontent-%COMP%]::placeholder {
  color: #9e9e9e;
}
.calendar-controls[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.calendar-count[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #757575;
  white-space: nowrap;
}
.calendar-count[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #ff9800;
  font-weight: 700;
}
.calendar-bulk-btn[_ngcontent-%COMP%] {
  padding: 5px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fff;
  color: #757575;
  font-size: 12px;
  font-weight: 500;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.calendar-bulk-btn[_ngcontent-%COMP%]:hover {
  border-color: #ff9800;
  color: #ff9800;
  background: rgba(255, 152, 0, 0.04);
}
.calendar-scroll-area[_ngcontent-%COMP%] {
  max-height: 480px;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}
.calendar-group__header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: #fafafa;
  font-size: 12px;
  font-weight: 600;
  color: #757575;
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid #e0e0e0;
}
.calendar-group__header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: #9e9e9e;
}
.calendar-group__count[_ngcontent-%COMP%] {
  margin-left: auto;
  font-size: 11px;
  color: #9e9e9e;
  font-weight: 400;
}
.calendar-group__list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.calendar-group[_ngcontent-%COMP%]    + .calendar-group[_ngcontent-%COMP%] {
  border-top: 1px solid #e0e0e0;
}
.calendar-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.12s ease;
  -webkit-user-select: none;
  user-select: none;
}
.calendar-item[_ngcontent-%COMP%]:hover {
  background: rgba(255, 152, 0, 0.04);
}
.checkbox-wrapper[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.custom-checkbox[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  background: #fff;
}
.custom-checkbox[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 14px;
  width: 14px;
  height: 14px;
  color: #fff;
}
.custom-checkbox.checked[_ngcontent-%COMP%] {
  background: #ff9800;
  border-color: #ff9800;
}
.color-dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.calendar-name[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #81766e;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.calendar-empty[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 32px 16px;
  color: #9e9e9e;
  font-size: 13px;
}
.calendar-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 20px;
  width: 20px;
  height: 20px;
}
@media (max-width: 768px) {
  .settings-page[_ngcontent-%COMP%] {
    padding: 16px 0 48px;
  }
  .settings-container[_ngcontent-%COMP%] {
    max-width: 100%;
    padding: 0 12px;
  }
  .card[_ngcontent-%COMP%] {
    padding: 20px 16px 18px;
    border-radius: 10px;
  }
  .time-range-row[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    gap: 8px;
  }
  .time-range-label[_ngcontent-%COMP%] {
    min-width: 100px;
  }
  .time-range-value[_ngcontent-%COMP%] {
    justify-content: flex-start;
  }
  .time-range-edit[_ngcontent-%COMP%] {
    justify-content: flex-start;
    flex-basis: 100%;
    margin-top: 4px;
  }
  .btn-edit[_ngcontent-%COMP%] {
    margin-left: auto;
  }
  .time-select[_ngcontent-%COMP%] {
    width: 100px;
    padding: 8px 28px 8px 10px;
    font-size: 14px;
  }
}
/*# sourceMappingURL=settings-page.component.css.map */`], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsPageComponent, { className: "SettingsPageComponent", filePath: "src\\app\\features\\settings\\pages\\settings-page\\settings-page.component.ts", lineNumber: 32 });
})();
export {
  SettingsPageComponent
};
//# sourceMappingURL=chunk-2Z4V4CCN.js.map
