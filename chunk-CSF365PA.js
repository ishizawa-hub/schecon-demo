import {
  CalendarWeekViewMiniComponent,
  ScheconPageLayoutComponent
} from "./chunk-Z6M62DVX.js";
import "./chunk-W3VOPBRX.js";
import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YF2NDTP4.js";
import "./chunk-VOAOX4DE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MPKYFQD7.js";
import {
  CommonModule,
  Location,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3YYMYGX4.js";

// src/app/features/scheduling/pages/group-create-page/group-create-page.component.ts
var _c0 = () => ["15", "30", "45", "60"];
var _c1 = () => ["0", "15", "30", "45"];
function GroupCreatePageComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tool_r1 = ctx.$implicit;
    \u0275\u0275property("value", tool_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tool_r1);
  }
}
function GroupCreatePageComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const org_r2 = ctx.$implicit;
    \u0275\u0275property("value", org_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(org_r2);
  }
}
function GroupCreatePageComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon", 63);
    \u0275\u0275listener("click", function GroupCreatePageComponent_For_45_Template_mat_icon_click_2_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeParticipant(p_r4));
    });
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4, " ");
  }
}
function GroupCreatePageComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ap_r6 = ctx.$implicit;
    \u0275\u0275property("value", ap_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ap_r6);
  }
}
function GroupCreatePageComponent_For_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 64);
    \u0275\u0275element(1, "input", 65);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const d_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ((tmp_10_0 = ctx_r4.step2Form.get("duration")) == null ? null : tmp_10_0.value) === d_r7);
    \u0275\u0275advance();
    \u0275\u0275property("value", d_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r7, "\u5206");
  }
}
function GroupCreatePageComponent_For_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 64);
    \u0275\u0275element(1, "input", 66);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const t_r8 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ((tmp_10_0 = ctx_r4.step2Form.get("travelTime")) == null ? null : tmp_10_0.value) === t_r8);
    \u0275\u0275advance();
    \u0275\u0275property("value", t_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r8, "\u5206");
  }
}
function GroupCreatePageComponent_For_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 70)(6, "mat-icon");
    \u0275\u0275text(7, "edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const slot_r9 = ctx.$implicit;
    \u0275\u0275classProp("checked", slot_r9.checked);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", slot_r9.date, "(", slot_r9.dayOfWeek, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r9.timeRange);
  }
}
var GroupCreatePageComponent = class _GroupCreatePageComponent {
  constructor(fb, location, notification) {
    this.fb = fb;
    this.location = location;
    this.notification = notification;
    this.includeWeekends = signal(false);
    this.includeAllDay = signal(true);
    this.showOptions = signal(false);
    this.candidateSlots = signal(this.generateMockSlots());
    this.checkedCount = computed(() => this.candidateSlots().filter((s) => s.checked).length);
    this.participants = signal(["\u5C71\u7530\u592A\u90CE", "\u4F50\u85E4\u82B1\u5B50"]);
    this.mtgTools = [
      "\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u3067\u306F\u884C\u308F\u306A\u3044",
      "Zoom",
      "Google Meet",
      "Microsoft Teams"
    ];
    this.organizers = ["ishizawamoph@gmail.com", "\u5C71\u7530\u592A\u90CE", "\u4F50\u85E4\u82B1\u5B50", "\u9234\u6728\u4E00\u90CE"];
    this.availableParticipants = ["\u7530\u4E2D\u5065", "\u9AD8\u6A4B\u7F8E\u54B2", "\u4F0A\u85E4\u5927\u8F14", "\u6E21\u8FBA\u7D17\u5E0C", "\u4E2D\u6751\u7FD4\u592A"];
    this.step1Form = this.fb.group({
      eventName: ["", Validators.required],
      isPrivate: [false],
      mtgTool: ["\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u3067\u306F\u884C\u308F\u306A\u3044"],
      location: [""]
    });
    this.step2Form = this.fb.group({
      organizer: ["ishizawamoph@gmail.com"],
      hideParticipantNames: [false],
      period: ["2weeks"],
      timeSlot: ["meeting"],
      duration: ["60"],
      travelTime: ["none"]
    });
  }
  toggleSlot(index) {
    this.candidateSlots.update((slots) => slots.map((s, i) => i === index ? __spreadProps(__spreadValues({}, s), { checked: !s.checked }) : s));
  }
  removeParticipant(name) {
    this.participants.update((p) => p.filter((n) => n !== name));
    this.notification.info("\u53C2\u52A0\u8005\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
  }
  addParticipant(name) {
    if (name && !this.participants().includes(name)) {
      this.participants.update((p) => [...p, name]);
      this.notification.info("\u53C2\u52A0\u8005\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F");
    }
  }
  onCreate() {
    if (this.step1Form.invalid) {
      this.notification.error("\u4E88\u5B9A\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    this.notification.success("\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F");
  }
  addNextWeek() {
    this.notification.info("\u7FCC\u9031\u306E\u5019\u88DC\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F");
  }
  addWithExisting() {
    this.notification.info("\u65E2\u5B58\u306E\u4E88\u5B9A\u304C\u3042\u308B\u65E5\u3082\u5019\u88DC\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F");
  }
  selectPeriod() {
    this.notification.info("\u671F\u9593\u3092\u9078\u629E\u3057\u307E\u3057\u305F");
  }
  refreshCalendar() {
    this.notification.info("\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u65E5\u7A0B\u3092\u518D\u53D6\u5F97\u3057\u307E\u3057\u305F");
  }
  goBack() {
    this.location.back();
  }
  generateMockSlots() {
    const slots = [];
    const data = [
      { date: "04/07", dow: "\u706B", time: "09:30 - 11:30" },
      { date: "04/08", dow: "\u6C34", time: "14:00 - 16:00" },
      { date: "04/09", dow: "\u6728", time: "09:30 - 10:30" },
      { date: "04/09", dow: "\u6728", time: "14:00 - 18:30" },
      { date: "04/10", dow: "\u91D1", time: "16:00 - 19:00" },
      { date: "04/13", dow: "\u6708", time: "12:30 - 13:30" },
      { date: "04/13", dow: "\u6708", time: "16:00 - 18:00" },
      { date: "04/14", dow: "\u706B", time: "09:30 - 13:30" },
      { date: "04/15", dow: "\u6C34", time: "12:30 - 13:30" },
      { date: "04/15", dow: "\u6C34", time: "16:30 - 19:00" },
      { date: "04/16", dow: "\u6728", time: "09:30 - 10:30" },
      { date: "04/16", dow: "\u6728", time: "12:30 - 18:30" },
      { date: "04/17", dow: "\u91D1", time: "09:30 - 10:30" },
      { date: "04/17", dow: "\u91D1", time: "12:30 - 13:30" },
      { date: "04/17", dow: "\u91D1", time: "17:30 - 18:30" }
    ];
    data.forEach((d) => {
      slots.push({ date: d.date, dayOfWeek: d.dow, timeRange: d.time, checked: true });
    });
    return slots;
  }
  static {
    this.\u0275fac = function GroupCreatePageComponent_Factory(t) {
      return new (t || _GroupCreatePageComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupCreatePageComponent, selectors: [["app-group-create-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 173, vars: 25, consts: [["pageTitle", "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574", "pageSubtitle", "\u5927\u4EBA\u6570\u306E\u793E\u5185MTG\u306E\u958B\u50AC\u3001\u4E88\u5B9A\u306E\u30EA\u30B9\u30B1\u306B\u3082\u6700\u9069", "accentColor", "#02d697", 3, "candidateCount"], [1, "create-form"], [1, "step-section"], [1, "step-header"], [1, "step-title"], [1, "template-btn"], [3, "formGroup"], [1, "outlined-field"], [1, "outlined-label"], ["type", "text", "formControlName", "eventName", "placeholder", "\u4E88\u5B9A\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", 1, "outlined-input"], [1, "toggle-row"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isPrivate"], [1, "toggle-slider"], [1, "toggle-text"], ["formControlName", "mtgTool", 1, "outlined-select"], [3, "value"], ["type", "text", "formControlName", "location", "placeholder", "\u5834\u6240\u3092\u5165\u529B", 1, "outlined-input"], [1, "form-section-label"], [1, "organizer-select"], [1, "organizer-icon"], ["formControlName", "organizer", 1, "outlined-select"], [1, "chips-container"], [1, "chip"], [1, "outlined-select", 3, "change"], ["value", "", "disabled", "", "selected", ""], ["type", "checkbox", "formControlName", "hideParticipantNames"], [1, "form-section-label", "with-dot"], [1, "radio-group"], [1, "radio-btn"], ["type", "radio", "formControlName", "period", "value", "1week"], ["type", "radio", "formControlName", "period", "value", "2weeks"], ["type", "radio", "formControlName", "period", "value", "custom"], ["type", "radio", "formControlName", "period", "value", "unlimited"], ["href", "/settings/profile", 1, "inline-link"], [1, "radio-btn", "wide"], ["type", "radio", "formControlName", "timeSlot", "value", "meeting"], [1, "radio-main"], [1, "radio-sub"], ["type", "radio", "formControlName", "timeSlot", "value", "dinner"], ["type", "radio", "formControlName", "timeSlot", "value", "customTime"], [1, "radio-group", "compact"], [1, "radio-btn", "small", 3, "selected"], [1, "radio-btn", "small", "has-select"], ["type", "radio", "formControlName", "duration", "value", "custom"], [1, "small-label"], [1, "small-value"], ["type", "radio", "formControlName", "travelTime", "value", "custom"], ["type", "checkbox", 3, "change", "checked"], [1, "candidate-list"], [1, "candidate-item", 3, "checked"], [1, "slot-actions"], [1, "action-btn", 3, "click"], [1, "cta-section"], [1, "cta-btn", 3, "click"], [1, "calendar-section"], [1, "calendar-section-title"], [1, "note-text"], [1, "calendar-links"], [1, "link-btn", 3, "click"], [1, "help-sm"], [1, "text-link", 3, "click"], ["routerLink", "/calendar", 1, "text-link"], [1, "chip-remove", 3, "click"], [1, "radio-btn", "small"], ["type", "radio", "formControlName", "duration", 3, "value"], ["type", "radio", "formControlName", "travelTime", 3, "value"], [1, "candidate-item"], [1, "candidate-date"], [1, "candidate-time"], [1, "candidate-edit"]], template: function GroupCreatePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-schecon-page-layout", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        \u0275\u0275text(5, "STEP 1\uFF1A \u4E88\u5B9A\u540D\u3068\u958B\u50AC\u5834\u6240\u3092\u6C7A\u3081\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 5);
        \u0275\u0275text(7, "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8 \uFF1E");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "form", 6)(9, "div", 7)(10, "label", 8);
        \u0275\u0275text(11, "\u4E88\u5B9A\u306E\u540D\u524D");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "label", 11);
        \u0275\u0275element(15, "input", 12)(16, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 14);
        \u0275\u0275text(18, "\u975E\u516C\u958B\u4E88\u5B9A\u3068\u3057\u3066\u4F5C\u6210\u3059\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 7)(20, "label", 8);
        \u0275\u0275text(21, "\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u30C4\u30FC\u30EB\u3092\u9078\u3076");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "select", 15);
        \u0275\u0275repeaterCreate(23, GroupCreatePageComponent_For_24_Template, 2, 2, "option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "label", 8);
        \u0275\u0275text(27, "\u958B\u50AC\u5834\u6240\uFF08\u4EFB\u610F)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 2)(30, "h2", 4);
        \u0275\u0275text(31, "STEP 2\uFF1A\u4E88\u5B9A\u306E\u6761\u4EF6\u3092\u6C7A\u3081\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "form", 6)(33, "div", 18);
        \u0275\u0275text(34, "\u4E3B\u50AC\u8005\u3092\u9078\u629E(\u672C\u4EBA\u4EE5\u5916\u3067\u3082\u53EF\u80FD)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 19)(36, "mat-icon", 20);
        \u0275\u0275text(37, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "select", 21);
        \u0275\u0275repeaterCreate(39, GroupCreatePageComponent_For_40_Template, 2, 2, "option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 18);
        \u0275\u0275text(42, "\u53C2\u52A0\u8005\u3092\u8FFD\u52A0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 22);
        \u0275\u0275repeaterCreate(44, GroupCreatePageComponent_For_45_Template, 4, 1, "span", 23, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 7)(47, "select", 24);
        \u0275\u0275listener("change", function GroupCreatePageComponent_Template_select_change_47_listener($event) {
          ctx.addParticipant($event.target.value);
          return $event.target.value = "";
        });
        \u0275\u0275elementStart(48, "option", 25);
        \u0275\u0275text(49, "\u53C2\u52A0\u8005\u3092\u9078\u629E...");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(50, GroupCreatePageComponent_For_51_Template, 2, 2, "option", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 10)(53, "label", 11);
        \u0275\u0275element(54, "input", 26)(55, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span", 14);
        \u0275\u0275text(57, "\u53C2\u52A0\u8005\u306E\u540D\u524D\u3092\u8868\u793A\u3057\u306A\u3044");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 27);
        \u0275\u0275text(59, "\u958B\u50AC\u6642\u671F\uFF08\u7121\u671F\u9650\u3067\u4F5C\u6210\u3057\u305FURL\u306F\u6C38\u9060\u306B\u4F7F\u3048\u307E\u3059\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 28)(61, "label", 29);
        \u0275\u0275element(62, "input", 30);
        \u0275\u0275elementStart(63, "span");
        \u0275\u0275text(64, "\u76F4\u8FD11\u9031\u9593");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "label", 29);
        \u0275\u0275element(66, "input", 31);
        \u0275\u0275elementStart(67, "span");
        \u0275\u0275text(68, "\u76F4\u8FD12\u9031\u9593");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "label", 29);
        \u0275\u0275element(70, "input", 32);
        \u0275\u0275elementStart(71, "span");
        \u0275\u0275text(72, "\u671F\u9593\u3092\u6307\u5B9A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "label", 29);
        \u0275\u0275element(74, "input", 33);
        \u0275\u0275elementStart(75, "span");
        \u0275\u0275text(76, "\u7121\u671F\u9650");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div", 27);
        \u0275\u0275text(78, "\u6642\u9593\u5E2F ( ");
        \u0275\u0275elementStart(79, "a", 34);
        \u0275\u0275text(80, "\u30DE\u30A4\u30DA\u30FC\u30B8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(81, "\u3067\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u6642\u9593\u5E2F\u3092\u8A2D\u5B9A )");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 28)(83, "label", 35);
        \u0275\u0275element(84, "input", 36);
        \u0275\u0275elementStart(85, "span", 37);
        \u0275\u0275text(86, "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "span", 38);
        \u0275\u0275text(88, "09:30-19:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "label", 35);
        \u0275\u0275element(90, "input", 39);
        \u0275\u0275elementStart(91, "span", 37);
        \u0275\u0275text(92, "\u98DF\u4E8B\u4F1A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "span", 38);
        \u0275\u0275text(94, "19:00-23:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "label", 35);
        \u0275\u0275element(96, "input", 40);
        \u0275\u0275elementStart(97, "span");
        \u0275\u0275text(98, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(99, "div", 27);
        \u0275\u0275text(100, "\u6240\u8981\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div", 41);
        \u0275\u0275repeaterCreate(102, GroupCreatePageComponent_For_103_Template, 4, 4, "label", 42, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(104, "label", 43);
        \u0275\u0275element(105, "input", 44);
        \u0275\u0275elementStart(106, "span", 45);
        \u0275\u0275text(107, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "span", 46);
        \u0275\u0275text(109, "75\u5206\u25BC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(110, "div", 27);
        \u0275\u0275text(111, "\u79FB\u52D5\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "div", 41);
        \u0275\u0275repeaterCreate(113, GroupCreatePageComponent_For_114_Template, 4, 4, "label", 42, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(115, "label", 43);
        \u0275\u0275element(116, "input", 47);
        \u0275\u0275elementStart(117, "span", 45);
        \u0275\u0275text(118, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "span", 46);
        \u0275\u0275text(120, "60\u5206\u25BC");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(121, "div", 2)(122, "h2", 4);
        \u0275\u0275text(123, "STEP 3\uFF1A \u5019\u88DC\u65E5\u304B\u3089\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "div", 10)(125, "label", 11)(126, "input", 48);
        \u0275\u0275listener("change", function GroupCreatePageComponent_Template_input_change_126_listener() {
          return ctx.includeWeekends.set(!ctx.includeWeekends());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(127, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "span", 14);
        \u0275\u0275text(129, "\u571F\u65E5\u795D\u65E5\u3082\u5019\u88DC\u65E5\u306B\u5165\u308C\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "div", 10)(131, "label", 11)(132, "input", 48);
        \u0275\u0275listener("change", function GroupCreatePageComponent_Template_input_change_132_listener() {
          return ctx.includeAllDay.set(!ctx.includeAllDay());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(133, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "span", 14);
        \u0275\u0275text(135, "\u7D42\u65E5\u4E88\u5B9A\u304C\u3042\u3063\u3066\u3082\u5019\u88DC\u65E5\u306B\u5165\u308C\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "div", 49);
        \u0275\u0275repeaterCreate(137, GroupCreatePageComponent_For_138_Template, 8, 5, "div", 50, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "div", 51)(140, "button", 52);
        \u0275\u0275listener("click", function GroupCreatePageComponent_Template_button_click_140_listener() {
          return ctx.addWithExisting();
        });
        \u0275\u0275elementStart(141, "mat-icon");
        \u0275\u0275text(142, "event_available");
        \u0275\u0275elementEnd();
        \u0275\u0275text(143, " \u4E88\u5B9A\u304C\u3042\u3063\u3066\u3082\u5019\u88DC\u65E5\u306B\u8FFD\u52A0 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "button", 52);
        \u0275\u0275listener("click", function GroupCreatePageComponent_Template_button_click_144_listener() {
          return ctx.addNextWeek();
        });
        \u0275\u0275elementStart(145, "mat-icon");
        \u0275\u0275text(146, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(147, " \u7FCC\u9031\u3082\u8FFD\u52A0 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "button", 52);
        \u0275\u0275listener("click", function GroupCreatePageComponent_Template_button_click_148_listener() {
          return ctx.selectPeriod();
        });
        \u0275\u0275elementStart(149, "mat-icon");
        \u0275\u0275text(150, "calendar_month");
        \u0275\u0275elementEnd();
        \u0275\u0275text(151, " \u671F\u9593\u3092\u9078\u629E ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(152, "div", 53)(153, "button", 54);
        \u0275\u0275listener("click", function GroupCreatePageComponent_Template_button_click_153_listener() {
          return ctx.onCreate();
        });
        \u0275\u0275text(154, "\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(155, "div", 55)(156, "h3", 56);
        \u0275\u0275text(157, "\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u8ABF\u6574\u30FB\u5019\u88DC\u65E5\u8FFD\u52A0\u3059\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "p", 57);
        \u0275\u0275text(159, "\u203B\u4E88\u5B9A\u304C\u3042\u3063\u3066\u3082\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308C\u3070\u5019\u88DC\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "div", 58)(161, "button", 59);
        \u0275\u0275listener("click", function GroupCreatePageComponent_Template_button_click_161_listener() {
          return ctx.refreshCalendar();
        });
        \u0275\u0275elementStart(162, "mat-icon");
        \u0275\u0275text(163, "event_busy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(164, " \u9664\u5916\u30EF\u30FC\u30C9\u3092\u8A2D\u5B9A\u3057\u5019\u88DC\u65E5\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementStart(165, "mat-icon", 60);
        \u0275\u0275text(166, "help_outline");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(167, "div", 58)(168, "a", 61);
        \u0275\u0275listener("click", function GroupCreatePageComponent_Template_a_click_168_listener() {
          return ctx.refreshCalendar();
        });
        \u0275\u0275text(169, "\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u65E5\u7A0B\u3092\u518D\u53D6\u5F97\u3059\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "a", 62);
        \u0275\u0275text(171, "\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u958B\u304F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(172, "app-calendar-week-view-mini");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_15_0;
        let tmp_17_0;
        \u0275\u0275property("candidateCount", ctx.candidateSlots().length);
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.step1Form);
        \u0275\u0275advance(15);
        \u0275\u0275repeater(ctx.mtgTools);
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.step2Form);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.organizers);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.participants());
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.availableParticipants);
        \u0275\u0275advance(11);
        \u0275\u0275classProp("selected", ((tmp_7_0 = ctx.step2Form.get("period")) == null ? null : tmp_7_0.value) === "1week");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_8_0 = ctx.step2Form.get("period")) == null ? null : tmp_8_0.value) === "2weeks");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_9_0 = ctx.step2Form.get("period")) == null ? null : tmp_9_0.value) === "custom");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_10_0 = ctx.step2Form.get("period")) == null ? null : tmp_10_0.value) === "unlimited");
        \u0275\u0275advance(10);
        \u0275\u0275classProp("selected", ((tmp_11_0 = ctx.step2Form.get("timeSlot")) == null ? null : tmp_11_0.value) === "meeting");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("selected", ((tmp_12_0 = ctx.step2Form.get("timeSlot")) == null ? null : tmp_12_0.value) === "dinner");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("selected", ((tmp_13_0 = ctx.step2Form.get("timeSlot")) == null ? null : tmp_13_0.value) === "customTime");
        \u0275\u0275advance(7);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(23, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ((tmp_15_0 = ctx.step2Form.get("duration")) == null ? null : tmp_15_0.value) === "custom");
        \u0275\u0275advance(9);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(24, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ((tmp_17_0 = ctx.step2Form.get("travelTime")) == null ? null : tmp_17_0.value) === "custom");
        \u0275\u0275advance(11);
        \u0275\u0275property("checked", ctx.includeWeekends());
        \u0275\u0275advance(6);
        \u0275\u0275property("checked", ctx.includeAllDay());
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.candidateSlots());
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatIconModule,
      MatIcon,
      ScheconPageLayoutComponent,
      CalendarWeekViewMiniComponent
    ], styles: [`@charset "UTF-8";



[_nghost-%COMP%] {
  display: block;
}
.create-form[_ngcontent-%COMP%] {
  max-width: 800px;
  margin: 0 auto;
}
.calendar-section[_ngcontent-%COMP%] {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #eee;
}
.step-section[_ngcontent-%COMP%] {
  margin-bottom: 48px;
  border-bottom: 1px solid #eee;
  padding-bottom: 40px;
}
.step-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.step-title[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: #81766e;
  margin: 0 0 24px;
}
.step-header[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.template-btn[_ngcontent-%COMP%] {
  background: #02d697;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 10px 28px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}
.template-btn[_ngcontent-%COMP%]:hover {
  opacity: 0.85;
}
.outlined-field[_ngcontent-%COMP%] {
  position: relative;
  margin-bottom: 20px;
}
.outlined-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 12px;
  color: #888;
  margin-bottom: 0;
  position: absolute;
  top: -8px;
  left: 12px;
  background: #fff;
  padding: 0 4px;
  z-index: 1;
}
.outlined-input[_ngcontent-%COMP%], .outlined-select[_ngcontent-%COMP%], .outlined-textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #81766e;
  background: #fff;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}
.outlined-input[_ngcontent-%COMP%]:focus, .outlined-select[_ngcontent-%COMP%]:focus, .outlined-textarea[_ngcontent-%COMP%]:focus {
  border-color: #02d697;
}
.outlined-input[_ngcontent-%COMP%]::placeholder, .outlined-select[_ngcontent-%COMP%]::placeholder, .outlined-textarea[_ngcontent-%COMP%]::placeholder {
  color: #bbb;
}
.outlined-select[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}
.toggle-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.toggle-switch[_ngcontent-%COMP%] {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  flex-shrink: 0;
}
.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggle-slider[_ngcontent-%COMP%] {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #bbb;
  border-radius: 24px;
  transition: background 0.3s;
}
.toggle-slider[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  left: 3px;
  bottom: 3px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
}
.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {
  background: #555;
}
.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]::before {
  transform: translateX(20px);
}
.toggle-text[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #666;
}
.option-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  border: 1px solid #02d697;
  border-radius: 6px;
  background: #fff;
  color: #02d697;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background 0.2s;
}
.option-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  width: 18px;
  height: 18px;
}
.option-btn[_ngcontent-%COMP%]:hover {
  background: rgba(2, 214, 151, 0.06);
}
.link-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #02d697;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 0;
  font-family: inherit;
}
.link-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  width: 18px;
  height: 18px;
}
.help-sm[_ngcontent-%COMP%] {
  font-size: 16px !important;
  width: 16px !important;
  height: 16px !important;
  color: #bbb !important;
}
.chips-container[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}
.chip[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  background: rgba(2, 214, 151, 0.1);
  color: #02a373;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}
.chip[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%] {
  font-size: 16px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  opacity: 0.7;
}
.chip[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%]:hover {
  opacity: 1;
}
.form-section-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
}
.form-section-label.with-dot[_ngcontent-%COMP%]::before {
  content: "\\25cf";
  color: #02d697;
  margin-right: 4px;
  font-size: 10px;
}
.organizer-select[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}
.organizer-select[_ngcontent-%COMP%]   .outlined-select[_ngcontent-%COMP%] {
  flex: 1;
}
.organizer-icon[_ngcontent-%COMP%] {
  color: #888;
  font-size: 22px !important;
}
.note-text[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #999;
  margin: 4px 0 16px;
}
.note-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #02d697;
}
.inline-link[_ngcontent-%COMP%] {
  color: #02d697;
  text-decoration: underline;
}
.radio-group[_ngcontent-%COMP%] {
  display: flex;
  gap: 0;
  margin-bottom: 24px;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
}
.radio-group.compact[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.radio-btn[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  background: #fff;
  cursor: pointer;
  border-right: 1px solid #ccc;
  transition: background 0.2s, color 0.2s;
  text-align: center;
  font-size: 14px;
  color: #81766e;
}
.radio-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  display: none;
}
.radio-btn[_ngcontent-%COMP%]:last-child {
  border-right: none;
}
.radio-btn.selected[_ngcontent-%COMP%] {
  background: #02d697;
  color: #fff;
}
.radio-btn.wide[_ngcontent-%COMP%] {
  padding: 14px 12px;
}
.radio-btn.small[_ngcontent-%COMP%] {
  padding: 10px 6px;
  font-size: 13px;
}
.radio-btn.has-select[_ngcontent-%COMP%] {
  padding: 6px;
}
.radio-main[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 14px;
}
.radio-sub[_ngcontent-%COMP%] {
  font-size: 11px;
  margin-top: 2px;
  opacity: 0.85;
}
.small-label[_ngcontent-%COMP%] {
  font-size: 10px;
  color: inherit;
}
.small-value[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
}
.candidate-list[_ngcontent-%COMP%] {
  margin: 20px 0;
}
.candidate-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #f0f0f0;
  gap: 16px;
}
.candidate-item[_ngcontent-%COMP%]:first-child {
  border-top: 1px solid #f0f0f0;
}
.candidate-date[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: #ed9630;
  min-width: 100px;
}
.candidate-time[_ngcontent-%COMP%] {
  font-size: 15px;
  color: #ed9630;
  font-weight: 600;
}
.candidate-edit[_ngcontent-%COMP%] {
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  color: #bbb;
  padding: 4px;
}
.candidate-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  width: 18px;
  height: 18px;
}
.candidate-edit[_ngcontent-%COMP%]:hover {
  color: #888;
}
.slot-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0;
}
.action-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  color: #666;
  font-size: 13px;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}
.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  width: 18px;
  height: 18px;
  color: #ed9630;
}
.action-btn[_ngcontent-%COMP%]:hover {
  background: #f9f9f9;
}
.cta-section[_ngcontent-%COMP%] {
  text-align: center;
  margin: 32px 0;
}
.cta-btn[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 14px 80px;
  background: #02d697;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.2s;
}
.cta-btn[_ngcontent-%COMP%]:hover {
  opacity: 0.85;
}
.calendar-section[_ngcontent-%COMP%] {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #eee;
}
.calendar-section-title[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 700;
  color: #81766e;
  margin-bottom: 8px;
}
.calendar-links[_ngcontent-%COMP%] {
  display: flex;
  gap: 24px;
  margin: 8px 0;
}
.text-link[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #02d697;
  cursor: pointer;
  text-decoration: underline;
}
.text-link[_ngcontent-%COMP%]:hover {
  opacity: 0.8;
}
@media (max-width: 768px) {
  .step-header[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .radio-group[_ngcontent-%COMP%] {
    flex-wrap: wrap;
  }
  .radio-btn[_ngcontent-%COMP%] {
    min-width: 0;
  }
  .cta-btn[_ngcontent-%COMP%] {
    padding: 14px 40px;
    width: 100%;
  }
  .slot-actions[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
/*# sourceMappingURL=group-create-page.component.css.map */`], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupCreatePageComponent, { className: "GroupCreatePageComponent", filePath: "src\\app\\features\\scheduling\\pages\\group-create-page\\group-create-page.component.ts", lineNumber: 36 });
})();
export {
  GroupCreatePageComponent
};
//# sourceMappingURL=chunk-CSF365PA.js.map
