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
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3YYMYGX4.js";

// src/app/features/scheduling/pages/confirm-page/confirm-page.component.ts
var _c0 = () => ["15", "30", "45", "60"];
var _c1 = () => ["0", "15", "30", "45"];
function ConfirmPageComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const org_r1 = ctx.$implicit;
    \u0275\u0275property("value", org_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(org_r1);
  }
}
function ConfirmPageComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 49);
    \u0275\u0275element(1, "input", 50);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const d_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ((tmp_10_0 = ctx_r2.conditionForm.get("duration")) == null ? null : tmp_10_0.value) === d_r2);
    \u0275\u0275advance();
    \u0275\u0275property("value", d_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r2, "\u5206");
  }
}
function ConfirmPageComponent_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 49);
    \u0275\u0275element(1, "input", 51);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const t_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ((tmp_10_0 = ctx_r2.conditionForm.get("travelTime")) == null ? null : tmp_10_0.value) === t_r4);
    \u0275\u0275advance();
    \u0275\u0275property("value", t_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r4, "\u5206");
  }
}
function ConfirmPageComponent_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 43);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function ConfirmPageComponent_For_131_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "label", 53)(2, "input", 42);
    \u0275\u0275listener("change", function ConfirmPageComponent_For_131_Template_input_change_2_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSlot($index_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 57)(9, "mat-icon");
    \u0275\u0275text(10, "edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const slot_r7 = ctx.$implicit;
    \u0275\u0275classProp("checked", slot_r7.checked);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", slot_r7.checked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", slot_r7.date, "(", slot_r7.dayOfWeek, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r7.timeRange);
  }
}
var ConfirmPageComponent = class _ConfirmPageComponent {
  constructor(fb, notification) {
    this.fb = fb;
    this.notification = notification;
    this.includeWeekends = signal(false);
    this.includeAllDay = signal(true);
    this.candidateSlots = signal(this.generateMockSlots());
    this.checkedCount = computed(() => this.candidateSlots().filter((s) => s.checked).length);
    this.organizers = ["ishizawamoph@gmail.com", "\u5C71\u7530\u592A\u90CE", "\u4F50\u85E4\u82B1\u5B50"];
    this.conditionForm = this.fb.group({
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
  copyAsText() {
    const text = this.candidateSlots().filter((s) => s.checked).map((s) => `${s.date}(${s.dayOfWeek}) ${s.timeRange}`).join("\n");
    navigator.clipboard.writeText(text);
    this.notification.success("\u5019\u88DC\u65E5\u6642\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  copyInvitation() {
    this.notification.success("\u62DB\u5F85\u6587\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  shareByMail() {
    this.notification.info("\u30E1\u30FC\u30EB\u3067\u5171\u6709\u3057\u307E\u3059");
  }
  shareBySlack() {
    this.notification.info("Slack\u3067\u5171\u6709\u3057\u307E\u3059");
  }
  shareByChatwork() {
    this.notification.info("Chatwork\u3067\u5171\u6709\u3057\u307E\u3059");
  }
  onCreate() {
    this.notification.success("\u7A7A\u304D\u6642\u9593\u304B\u3089\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F");
  }
  generateMockSlots() {
    return [
      { date: "04/07", dayOfWeek: "\u706B", timeRange: "09:30 - 11:30", checked: true },
      { date: "04/08", dayOfWeek: "\u6C34", timeRange: "14:00 - 16:00", checked: true },
      { date: "04/09", dayOfWeek: "\u6728", timeRange: "09:30 - 10:30", checked: true },
      { date: "04/09", dayOfWeek: "\u6728", timeRange: "14:00 - 18:30", checked: true },
      { date: "04/10", dayOfWeek: "\u91D1", timeRange: "16:00 - 19:00", checked: true },
      { date: "04/13", dayOfWeek: "\u6708", timeRange: "12:30 - 13:30", checked: true },
      { date: "04/13", dayOfWeek: "\u6708", timeRange: "16:00 - 18:00", checked: true },
      { date: "04/14", dayOfWeek: "\u706B", timeRange: "09:30 - 13:30", checked: true },
      { date: "04/15", dayOfWeek: "\u6C34", timeRange: "12:30 - 13:30", checked: true },
      { date: "04/15", dayOfWeek: "\u6C34", timeRange: "16:30 - 19:00", checked: true },
      { date: "04/16", dayOfWeek: "\u6728", timeRange: "09:30 - 10:30", checked: true },
      { date: "04/16", dayOfWeek: "\u6728", timeRange: "12:30 - 18:30", checked: true },
      { date: "04/17", dayOfWeek: "\u91D1", timeRange: "09:30 - 10:30", checked: true },
      { date: "04/17", dayOfWeek: "\u91D1", timeRange: "12:30 - 13:30", checked: true },
      { date: "04/17", dayOfWeek: "\u91D1", timeRange: "17:30 - 18:30", checked: true }
    ];
  }
  static {
    this.\u0275fac = function ConfirmPageComponent_Factory(t) {
      return new (t || _ConfirmPageComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmPageComponent, selectors: [["app-confirm-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 137, vars: 23, consts: [["pageTitle", "\u7A7A\u304D\u6642\u9593\u78BA\u8A8D", "pageSubtitle", "\u30E1\u30FC\u30EB\u3084SNS\u3067\u7C21\u5358\u306B\u5171\u6709", "accentColor", "#f1ba2b", 3, "candidateCount"], [1, "create-form"], [1, "step-section"], [1, "step-title"], [3, "formGroup"], [1, "form-section-label"], [1, "organizer-select"], [1, "organizer-icon"], ["formControlName", "organizer", 1, "outlined-select"], [3, "value"], [1, "outlined-field"], [1, "outlined-select"], [1, "toggle-row"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "hideParticipantNames"], [1, "toggle-slider"], [1, "toggle-text"], [1, "form-section-label", "with-dot"], [1, "radio-group"], [1, "radio-btn"], ["type", "radio", "formControlName", "period", "value", "1week"], ["type", "radio", "formControlName", "period", "value", "2weeks"], ["type", "radio", "formControlName", "period", "value", "custom"], ["href", "/settings/profile", 1, "inline-link"], [1, "radio-btn", "wide"], ["type", "radio", "formControlName", "timeSlot", "value", "meeting"], [1, "radio-main"], [1, "radio-sub"], ["type", "radio", "formControlName", "timeSlot", "value", "dinner"], ["type", "radio", "formControlName", "timeSlot", "value", "customTime"], [1, "radio-group", "compact"], [1, "radio-btn", "small", 3, "selected"], [1, "radio-btn", "small", "has-select"], ["type", "radio", "formControlName", "duration", "value", "custom"], [1, "small-label"], [1, "small-value"], ["type", "radio", "formControlName", "travelTime", "value", "custom"], [1, "copy-btn", 3, "click"], [1, "share-section"], [1, "share-label"], [1, "share-icons"], [1, "share-icon-btn", 3, "click"], ["type", "checkbox", 3, "change", "checked"], [1, "check-icon"], [1, "candidate-list"], [1, "candidate-item", 3, "checked"], [1, "cta-section"], [1, "cta-btn", 3, "click"], [1, "calendar-section"], [1, "radio-btn", "small"], ["type", "radio", "formControlName", "duration", 3, "value"], ["type", "radio", "formControlName", "travelTime", 3, "value"], [1, "candidate-item"], [1, "candidate-checkbox"], [1, "checkbox-mark"], [1, "candidate-date"], [1, "candidate-time"], [1, "candidate-edit"]], template: function ConfirmPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-schecon-page-layout", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4, "STEP 1\uFF1A \u6761\u4EF6\u3092\u6C7A\u3081\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 4)(6, "div", 5);
        \u0275\u0275text(7, "\u4E3B\u50AC\u8005\u3092\u9078\u629E(\u672C\u4EBA\u4EE5\u5916\u3067\u3082\u53EF\u80FD)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "mat-icon", 7);
        \u0275\u0275text(10, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "select", 8);
        \u0275\u0275repeaterCreate(12, ConfirmPageComponent_For_13_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 5);
        \u0275\u0275text(15, "\u53C2\u52A0\u8005\u3092\u8FFD\u52A0(\u5171\u6709\u6E08\u307F\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10)(17, "select", 11)(18, "option");
        \u0275\u0275text(19, "\u5171\u6709\u6E08\u307F\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u9078\u629E");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 12)(21, "label", 13);
        \u0275\u0275element(22, "input", 14)(23, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 16);
        \u0275\u0275text(25, "\u53C2\u52A0\u8005\u306E\u540D\u524D\u3092\u8868\u793A\u3057\u306A\u3044");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 17);
        \u0275\u0275text(27, "\u958B\u50AC\u6642\u671F\uFF08\u7121\u671F\u9650\u3067\u4F5C\u6210\u3057\u305FURL\u306F\u6C38\u9060\u306B\u4F7F\u3048\u307E\u3059\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 18)(29, "label", 19);
        \u0275\u0275element(30, "input", 20);
        \u0275\u0275elementStart(31, "span");
        \u0275\u0275text(32, "\u76F4\u8FD11\u9031\u9593");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "label", 19);
        \u0275\u0275element(34, "input", 21);
        \u0275\u0275elementStart(35, "span");
        \u0275\u0275text(36, "\u76F4\u8FD12\u9031\u9593");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "label", 19);
        \u0275\u0275element(38, "input", 22);
        \u0275\u0275elementStart(39, "span");
        \u0275\u0275text(40, "\u671F\u9593\u3092\u6307\u5B9A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 17);
        \u0275\u0275text(42, "\u6642\u9593\u5E2F ( ");
        \u0275\u0275elementStart(43, "a", 23);
        \u0275\u0275text(44, "\u30DE\u30A4\u30DA\u30FC\u30B8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\u3067\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u6642\u9593\u5E2F\u3092\u8A2D\u5B9A )");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 18)(47, "label", 24);
        \u0275\u0275element(48, "input", 25);
        \u0275\u0275elementStart(49, "span", 26);
        \u0275\u0275text(50, "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 27);
        \u0275\u0275text(52, "09:30-19:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "label", 24);
        \u0275\u0275element(54, "input", 28);
        \u0275\u0275elementStart(55, "span", 26);
        \u0275\u0275text(56, "\u98DF\u4E8B\u4F1A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span", 27);
        \u0275\u0275text(58, "19:00-23:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "label", 24);
        \u0275\u0275element(60, "input", 29);
        \u0275\u0275elementStart(61, "span");
        \u0275\u0275text(62, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 17);
        \u0275\u0275text(64, "\u6240\u8981\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 30);
        \u0275\u0275repeaterCreate(66, ConfirmPageComponent_For_67_Template, 4, 4, "label", 31, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(68, "label", 32);
        \u0275\u0275element(69, "input", 33);
        \u0275\u0275elementStart(70, "span", 34);
        \u0275\u0275text(71, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "span", 35);
        \u0275\u0275text(73, "75\u5206\u25BC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 17);
        \u0275\u0275text(75, "\u79FB\u52D5\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 30);
        \u0275\u0275repeaterCreate(77, ConfirmPageComponent_For_78_Template, 4, 4, "label", 31, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(79, "label", 32);
        \u0275\u0275element(80, "input", 36);
        \u0275\u0275elementStart(81, "span", 34);
        \u0275\u0275text(82, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "span", 35);
        \u0275\u0275text(84, "60\u5206\u25BC");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(85, "div", 2)(86, "h2", 3);
        \u0275\u0275text(87, "STEP 2\uFF1A \u7A7A\u304D\u6642\u9593\u3092\u76F8\u624B\u306B\u9001\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "button", 37);
        \u0275\u0275listener("click", function ConfirmPageComponent_Template_button_click_88_listener() {
          return ctx.copyAsText();
        });
        \u0275\u0275elementStart(89, "mat-icon");
        \u0275\u0275text(90, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, " \u5019\u88DC\u65E5\u6642\u3092\u30C6\u30AD\u30B9\u30C8\u3068\u3057\u3066\u30B3\u30D4\u30FC ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 38)(93, "div", 39);
        \u0275\u0275text(94, "\u30E1\u30FC\u30EB\u30FBSNS\u3067\u5171\u6709");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 40)(96, "button", 41);
        \u0275\u0275listener("click", function ConfirmPageComponent_Template_button_click_96_listener() {
          return ctx.copyInvitation();
        });
        \u0275\u0275elementStart(97, "mat-icon");
        \u0275\u0275text(98, "content_paste");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "span");
        \u0275\u0275text(100, "\u62DB\u5F85\u6587\u3092\u30B3\u30D4\u30FC");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "button", 41);
        \u0275\u0275listener("click", function ConfirmPageComponent_Template_button_click_101_listener() {
          return ctx.shareByMail();
        });
        \u0275\u0275elementStart(102, "mat-icon");
        \u0275\u0275text(103, "mail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "span");
        \u0275\u0275text(105, "\u30E1\u30FC\u30EB\u3067\u5171\u6709");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "button", 41);
        \u0275\u0275listener("click", function ConfirmPageComponent_Template_button_click_106_listener() {
          return ctx.shareBySlack();
        });
        \u0275\u0275elementStart(107, "mat-icon");
        \u0275\u0275text(108, "tag");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "span");
        \u0275\u0275text(110, "Slack\u3067\u5171\u6709");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "button", 41);
        \u0275\u0275listener("click", function ConfirmPageComponent_Template_button_click_111_listener() {
          return ctx.shareByChatwork();
        });
        \u0275\u0275elementStart(112, "mat-icon");
        \u0275\u0275text(113, "chat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "span");
        \u0275\u0275text(115, "Chatwork\u3067\u5171\u6709");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(116, "div", 12)(117, "label", 13)(118, "input", 42);
        \u0275\u0275listener("change", function ConfirmPageComponent_Template_input_change_118_listener() {
          return ctx.includeWeekends.set(!ctx.includeWeekends());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(119, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "span", 16);
        \u0275\u0275text(121, "\u571F\u65E5\u795D\u65E5\u3082\u5019\u88DC\u65E5\u306B\u5165\u308C\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 12)(123, "label", 13)(124, "input", 42);
        \u0275\u0275listener("change", function ConfirmPageComponent_Template_input_change_124_listener() {
          return ctx.includeAllDay.set(!ctx.includeAllDay());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(125, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "span", 16);
        \u0275\u0275text(127, "\u7D42\u65E5\u4E88\u5B9A\u304C\u3042\u3063\u3066\u3082\u5019\u88DC\u65E5\u306B\u5165\u308C\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275template(128, ConfirmPageComponent_Conditional_128_Template, 2, 0, "mat-icon", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div", 44);
        \u0275\u0275repeaterCreate(130, ConfirmPageComponent_For_131_Template, 11, 6, "div", 45, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "div", 46)(133, "button", 47);
        \u0275\u0275listener("click", function ConfirmPageComponent_Template_button_click_133_listener() {
          return ctx.onCreate();
        });
        \u0275\u0275text(134, "\u7A7A\u304D\u6642\u9593\u304B\u3089\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(135, "div", 48);
        \u0275\u0275element(136, "app-calendar-week-view-mini");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_10_0;
        let tmp_12_0;
        \u0275\u0275property("candidateCount", ctx.candidateSlots().length);
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.conditionForm);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.organizers);
        \u0275\u0275advance(17);
        \u0275\u0275classProp("selected", ((tmp_3_0 = ctx.conditionForm.get("period")) == null ? null : tmp_3_0.value) === "1week");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_4_0 = ctx.conditionForm.get("period")) == null ? null : tmp_4_0.value) === "2weeks");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_5_0 = ctx.conditionForm.get("period")) == null ? null : tmp_5_0.value) === "custom");
        \u0275\u0275advance(10);
        \u0275\u0275classProp("selected", ((tmp_6_0 = ctx.conditionForm.get("timeSlot")) == null ? null : tmp_6_0.value) === "meeting");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("selected", ((tmp_7_0 = ctx.conditionForm.get("timeSlot")) == null ? null : tmp_7_0.value) === "dinner");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("selected", ((tmp_8_0 = ctx.conditionForm.get("timeSlot")) == null ? null : tmp_8_0.value) === "customTime");
        \u0275\u0275advance(7);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(21, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ((tmp_10_0 = ctx.conditionForm.get("duration")) == null ? null : tmp_10_0.value) === "custom");
        \u0275\u0275advance(9);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(22, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ((tmp_12_0 = ctx.conditionForm.get("travelTime")) == null ? null : tmp_12_0.value) === "custom");
        \u0275\u0275advance(39);
        \u0275\u0275property("checked", ctx.includeWeekends());
        \u0275\u0275advance(6);
        \u0275\u0275property("checked", ctx.includeAllDay());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(128, ctx.includeAllDay() ? 128 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.candidateSlots());
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, MatIconModule, MatIcon, ScheconPageLayoutComponent, CalendarWeekViewMiniComponent], styles: [`@charset "UTF-8";



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
  background: #f1ba2b;
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
  border-color: #f1ba2b;
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
.outlined-textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 80px;
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
.check-icon[_ngcontent-%COMP%] {
  color: #4caf50;
  font-size: 20px !important;
  width: 20px !important;
  height: 20px !important;
}
.option-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  border: 1px solid #f1ba2b;
  border-radius: 6px;
  background: #fff;
  color: #f1ba2b;
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
  background: rgba(241, 186, 43, 0.06);
}
.link-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #f1ba2b;
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
  color: #f1ba2b;
}
.sub-text[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
}
.inline-link[_ngcontent-%COMP%] {
  color: #f1ba2b;
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
  background: #f1ba2b;
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
.form-section-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
}
.form-section-label.with-dot[_ngcontent-%COMP%]::before {
  content: "\\25cf";
  color: #f1ba2b;
  margin-right: 4px;
  font-size: 10px;
}
.copy-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px 24px;
  background: #f1ba2b;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  margin-bottom: 32px;
  transition: opacity 0.2s;
}
.copy-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 20px;
  width: 20px;
  height: 20px;
}
.copy-btn[_ngcontent-%COMP%]:hover {
  opacity: 0.85;
}
.share-section[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 32px;
  padding: 24px 0;
  border-bottom: 1px solid #eee;
}
.share-label[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 600;
  color: #81766e;
  margin-bottom: 20px;
}
.share-icons[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 32px;
}
.share-icon-btn[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.2s;
}
.share-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f5f5f5;
  color: #666;
  font-size: 24px;
  transition: background 0.2s, color 0.2s;
}
.share-icon-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #666;
  white-space: nowrap;
}
.share-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {
  background: rgba(241, 186, 43, 0.12);
  color: #f1ba2b;
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
.candidate-checkbox[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
}
.candidate-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}
.candidate-checkbox[_ngcontent-%COMP%]   .checkbox-mark[_ngcontent-%COMP%] {
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: #fff;
  transition: all 0.2s;
  position: relative;
}
.candidate-checkbox[_ngcontent-%COMP%]   .checkbox-mark[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: solid #fff;
  border-width: 0 2.5px 2.5px 0;
  transform: rotate(45deg);
}
.candidate-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkbox-mark[_ngcontent-%COMP%] {
  background: #f1ba2b;
  border-color: #f1ba2b;
}
.candidate-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkbox-mark[_ngcontent-%COMP%]::after {
  display: block;
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
.cta-section[_ngcontent-%COMP%] {
  text-align: center;
  margin: 32px 0;
}
.cta-btn[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 14px 80px;
  background: #f1ba2b;
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
@media (max-width: 768px) {
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
  .share-icons[_ngcontent-%COMP%] {
    gap: 16px;
    flex-wrap: wrap;
  }
  .share-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}
/*# sourceMappingURL=confirm-page.component.css.map */`], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmPageComponent, { className: "ConfirmPageComponent", filePath: "src\\app\\features\\scheduling\\pages\\confirm-page\\confirm-page.component.ts", lineNumber: 24 });
})();
export {
  ConfirmPageComponent
};
//# sourceMappingURL=chunk-7B7X6WMO.js.map
