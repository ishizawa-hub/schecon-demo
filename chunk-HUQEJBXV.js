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
  MaxLengthValidator,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3YYMYGX4.js";

// src/app/features/scheduling/pages/one-on-one-create-page/one-on-one-create-page.component.ts
var _c0 = () => ["15", "30", "45", "60"];
var _c1 = () => ["0", "15", "30", "45"];
function OneOnOneCreatePageComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
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
function OneOnOneCreatePageComponent_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
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
function OneOnOneCreatePageComponent_For_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 72);
    \u0275\u0275element(1, "input", 73);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const d_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ((tmp_10_0 = ctx_r3.step2Form.get("duration")) == null ? null : tmp_10_0.value) === d_r3);
    \u0275\u0275advance();
    \u0275\u0275property("value", d_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r3, "\u5206");
  }
}
function OneOnOneCreatePageComponent_For_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 72);
    \u0275\u0275element(1, "input", 74);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const t_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ((tmp_10_0 = ctx_r3.step2Form.get("travelTime")) == null ? null : tmp_10_0.value) === t_r5);
    \u0275\u0275advance();
    \u0275\u0275property("value", t_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r5, "\u5206");
  }
}
function OneOnOneCreatePageComponent_For_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 78)(6, "mat-icon");
    \u0275\u0275text(7, "edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const slot_r6 = ctx.$implicit;
    \u0275\u0275classProp("checked", slot_r6.checked);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", slot_r6.date, "(", slot_r6.dayOfWeek, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r6.timeRange);
  }
}
var OneOnOneCreatePageComponent = class _OneOnOneCreatePageComponent {
  constructor(fb, location, notification) {
    this.fb = fb;
    this.location = location;
    this.notification = notification;
    this.includeWeekends = signal(false);
    this.includeAllDay = signal(true);
    this.showOptions = signal(false);
    this.candidateSlots = signal(this.generateMockSlots());
    this.checkedCount = computed(() => this.candidateSlots().filter((s) => s.checked).length);
    this.mtgTools = [
      "\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u3067\u306F\u884C\u308F\u306A\u3044",
      "Zoom",
      "Google Meet",
      "Microsoft Teams"
    ];
    this.organizers = ["ishizawamoph@gmail.com", "\u5C71\u7530\u592A\u90CE", "\u4F50\u85E4\u82B1\u5B50", "\u9234\u6728\u4E00\u90CE"];
    this.step1Form = this.fb.group({
      eventName: ["", Validators.required],
      isPrivate: [false],
      registerBlastMail: [false],
      registerSalesforce: [false],
      mtgTool: ["\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u3067\u306F\u884C\u308F\u306A\u3044"],
      location: [""],
      description: [""]
    });
    this.step2Form = this.fb.group({
      organizer: ["ishizawamoph@gmail.com"],
      orSetting: [false],
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
  onFileDropped(event) {
    event.preventDefault();
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onCreate() {
    if (this.step1Form.invalid) {
      this.notification.error("\u4E88\u5B9A\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    this.notification.success("\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F");
  }
  addNotificationEmail() {
    this.notification.info("\u901A\u77E5\u5148\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F");
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
    this.\u0275fac = function OneOnOneCreatePageComponent_Factory(t) {
      return new (t || _OneOnOneCreatePageComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OneOnOneCreatePageComponent, selectors: [["app-one-on-one-create-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 227, vars: 25, consts: [["pageTitle", "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574", "pageSubtitle", "\u4F5C\u6210\u3057\u305FURL\u306F\u4F55\u5EA6\u3082\u4F7F\u3048\u3066\u4FBF\u5229", "accentColor", "#a1c92f", 3, "candidateCount"], [1, "create-form"], [1, "step-section"], [1, "step-header"], [1, "step-title"], [1, "template-btn"], [3, "formGroup"], [1, "outlined-field"], [1, "outlined-label"], ["type", "text", "formControlName", "eventName", "placeholder", "\u4E88\u5B9A\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", 1, "outlined-input"], [1, "toggle-row"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isPrivate"], [1, "toggle-slider"], [1, "toggle-text"], ["type", "checkbox", "formControlName", "registerBlastMail"], ["type", "checkbox", "formControlName", "registerSalesforce"], ["type", "button", 1, "option-btn", 3, "click"], ["formControlName", "mtgTool", 1, "outlined-select"], [3, "value"], ["type", "text", "formControlName", "location", "placeholder", "\u5834\u6240\u3092\u5165\u529B", 1, "outlined-input"], [1, "form-section-label"], [1, "file-drop-area", 3, "drop", "dragover"], [1, "upload-icon"], [1, "drop-text"], ["formControlName", "description", "maxlength", "400", "rows", "3", "placeholder", "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306B\u5FC5\u8981\u306A\u4E8B\u524D\u9023\u7D61\u4E8B\u9805\u3084 Zoom \u306E\u30D1\u30B9\u30B3\u30FC\u30C9\u306A\u3069\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002", 1, "outlined-textarea"], ["type", "button", 1, "link-btn", 3, "click"], [1, "help-sm"], [1, "organizer-select"], [1, "organizer-icon"], ["formControlName", "organizer", 1, "outlined-select"], ["type", "checkbox", "formControlName", "orSetting"], [1, "outlined-select"], [1, "note-text"], ["href", "https://schecon.com", "target", "_blank"], [1, "form-section-label", "with-dot"], [1, "radio-group"], [1, "radio-btn"], ["type", "radio", "formControlName", "period", "value", "1week"], ["type", "radio", "formControlName", "period", "value", "2weeks"], ["type", "radio", "formControlName", "period", "value", "custom"], ["type", "radio", "formControlName", "period", "value", "unlimited"], ["href", "/settings/profile", 1, "inline-link"], [1, "radio-btn", "wide"], ["type", "radio", "formControlName", "timeSlot", "value", "meeting"], [1, "radio-main"], [1, "radio-sub"], ["type", "radio", "formControlName", "timeSlot", "value", "dinner"], ["type", "radio", "formControlName", "timeSlot", "value", "customTime"], [1, "radio-group", "compact"], [1, "radio-btn", "small", 3, "selected"], [1, "radio-btn", "small", "has-select"], ["type", "radio", "formControlName", "duration", "value", "custom"], [1, "small-label"], [1, "small-value"], ["type", "radio", "formControlName", "travelTime", "value", "custom"], [1, "exclude-section"], ["type", "button", 1, "link-btn"], [1, "sub-text"], ["type", "checkbox", 3, "change", "checked"], [1, "candidate-list"], [1, "candidate-item", 3, "checked"], [1, "slot-actions"], [1, "action-btn", 3, "click"], [1, "cta-section"], [1, "cta-btn", 3, "click"], [1, "calendar-section"], [1, "calendar-section-title"], [1, "calendar-links"], [1, "link-btn", 3, "click"], [1, "text-link", 3, "click"], ["routerLink", "/calendar", 1, "text-link"], [1, "radio-btn", "small"], ["type", "radio", "formControlName", "duration", 3, "value"], ["type", "radio", "formControlName", "travelTime", 3, "value"], [1, "candidate-item"], [1, "candidate-date"], [1, "candidate-time"], [1, "candidate-edit"]], template: function OneOnOneCreatePageComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(19, "div", 10)(20, "label", 11);
        \u0275\u0275element(21, "input", 15)(22, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 14);
        \u0275\u0275text(24, "\u53C2\u52A0\u8005\u3092 BlastMail \u306B\u767B\u9332\u3059\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 10)(26, "label", 11);
        \u0275\u0275element(27, "input", 16)(28, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 14);
        \u0275\u0275text(30, "\u53C2\u52A0\u8005\u3092 Salesforce \u306B\u767B\u9332\u3059\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "button", 17);
        \u0275\u0275listener("click", function OneOnOneCreatePageComponent_Template_button_click_31_listener() {
          return ctx.showOptions.set(!ctx.showOptions());
        });
        \u0275\u0275elementStart(32, "mat-icon");
        \u0275\u0275text(33, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " \u8FFD\u52A0\u30AA\u30D7\u30B7\u30E7\u30F3\u8A2D\u5B9A ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 7)(36, "label", 8);
        \u0275\u0275text(37, "\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u30C4\u30FC\u30EB\u3092\u9078\u3076");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "select", 18);
        \u0275\u0275repeaterCreate(39, OneOnOneCreatePageComponent_For_40_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 7)(42, "label", 8);
        \u0275\u0275text(43, "\u958B\u50AC\u5834\u6240\uFF08\u4EFB\u610F)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "input", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 21);
        \u0275\u0275text(46, "\u56DE\u7B54\u753B\u9762\u306E\u30C8\u30C3\u30D7\u753B\u50CF\u3092\u8A2D\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 22);
        \u0275\u0275listener("drop", function OneOnOneCreatePageComponent_Template_div_drop_47_listener($event) {
          return ctx.onFileDropped($event);
        })("dragover", function OneOnOneCreatePageComponent_Template_div_dragover_47_listener($event) {
          return ctx.onDragOver($event);
        });
        \u0275\u0275elementStart(48, "mat-icon", 23);
        \u0275\u0275text(49, "add_photo_alternate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 24);
        \u0275\u0275text(51, "\u3053\u3053\u306B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7");
        \u0275\u0275element(52, "br");
        \u0275\u0275text(53, "\u307E\u305F\u306F\u3053\u3053\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 7)(55, "label", 8);
        \u0275\u0275text(56, "\u4E88\u5B9A\u6982\u8981\uFF08400\u6587\u5B57\u4EE5\u5185\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275element(57, "textarea", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "button", 26);
        \u0275\u0275listener("click", function OneOnOneCreatePageComponent_Template_button_click_58_listener() {
          return ctx.addNotificationEmail();
        });
        \u0275\u0275elementStart(59, "mat-icon");
        \u0275\u0275text(60, "forward_to_inbox");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, " \u901A\u77E5\u5148\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementStart(62, "mat-icon", 27);
        \u0275\u0275text(63, "help_outline");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "div", 2)(65, "h2", 4);
        \u0275\u0275text(66, "STEP 2\uFF1A\u4E88\u5B9A\u306E\u6761\u4EF6\u3092\u6C7A\u3081\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "form", 6)(68, "div", 21);
        \u0275\u0275text(69, "\u4E3B\u50AC\u8005\u3092\u9078\u629E(\u672C\u4EBA\u4EE5\u5916\u3067\u3082\u53EF\u80FD)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 28)(71, "mat-icon", 29);
        \u0275\u0275text(72, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "select", 30);
        \u0275\u0275repeaterCreate(74, OneOnOneCreatePageComponent_For_75_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 10)(77, "label", 11);
        \u0275\u0275element(78, "input", 31)(79, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "span", 14);
        \u0275\u0275text(81, "OR\u8A2D\u5B9A(A\u3055\u3093\u307E\u305F\u306FB\u3055\u3093)\u3092\u6709\u52B9\u306B\u3059\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-icon", 27);
        \u0275\u0275text(83, "help_outline");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 21);
        \u0275\u0275text(85, "\u53C2\u52A0\u8005\u3092\u8FFD\u52A0(\u5171\u6709\u6E08\u307F\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 7)(87, "select", 32)(88, "option");
        \u0275\u0275text(89, "\u5171\u6709\u6E08\u307F\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u9078\u629E");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(90, "p", 33);
        \u0275\u0275text(91, "\u203B \u540C\u50DA\u3084\u4EF2\u9593\u306E\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u8868\u793A\u3059\u308B\u5834\u5408\u306F");
        \u0275\u0275elementStart(92, "a", 34);
        \u0275\u0275text(93, "\u30B3\u30C1\u30E9");
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, "\u306E\u5171\u6709\u8A2D\u5B9A\u3092\u3057\u3066\u4E0B\u3055\u3044");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 35);
        \u0275\u0275text(96, "\u958B\u50AC\u6642\u671F\uFF08\u7121\u671F\u9650\u3067\u4F5C\u6210\u3057\u305FURL\u306F\u6C38\u9060\u306B\u4F7F\u3048\u307E\u3059\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 36)(98, "label", 37);
        \u0275\u0275element(99, "input", 38);
        \u0275\u0275elementStart(100, "span");
        \u0275\u0275text(101, "\u76F4\u8FD11\u9031\u9593");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "label", 37);
        \u0275\u0275element(103, "input", 39);
        \u0275\u0275elementStart(104, "span");
        \u0275\u0275text(105, "\u76F4\u8FD12\u9031\u9593");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "label", 37);
        \u0275\u0275element(107, "input", 40);
        \u0275\u0275elementStart(108, "span");
        \u0275\u0275text(109, "\u671F\u9593\u3092\u6307\u5B9A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "label", 37);
        \u0275\u0275element(111, "input", 41);
        \u0275\u0275elementStart(112, "span");
        \u0275\u0275text(113, "\u7121\u671F\u9650");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "div", 35);
        \u0275\u0275text(115, "\u6642\u9593\u5E2F ( ");
        \u0275\u0275elementStart(116, "a", 42);
        \u0275\u0275text(117, "\u30DE\u30A4\u30DA\u30FC\u30B8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(118, "\u3067\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u6642\u9593\u5E2F\u3092\u8A2D\u5B9A )");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div", 36)(120, "label", 43);
        \u0275\u0275element(121, "input", 44);
        \u0275\u0275elementStart(122, "span", 45);
        \u0275\u0275text(123, "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "span", 46);
        \u0275\u0275text(125, "09:30-19:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "label", 43);
        \u0275\u0275element(127, "input", 47);
        \u0275\u0275elementStart(128, "span", 45);
        \u0275\u0275text(129, "\u98DF\u4E8B\u4F1A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "span", 46);
        \u0275\u0275text(131, "19:00-23:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "label", 43);
        \u0275\u0275element(133, "input", 48);
        \u0275\u0275elementStart(134, "span");
        \u0275\u0275text(135, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(136, "div", 35);
        \u0275\u0275text(137, "\u6240\u8981\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 49);
        \u0275\u0275repeaterCreate(139, OneOnOneCreatePageComponent_For_140_Template, 4, 4, "label", 50, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(141, "label", 51);
        \u0275\u0275element(142, "input", 52);
        \u0275\u0275elementStart(143, "span", 53);
        \u0275\u0275text(144, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "span", 54);
        \u0275\u0275text(146, "75\u5206\u25BC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "div", 35);
        \u0275\u0275text(148, "\u79FB\u52D5\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "div", 49);
        \u0275\u0275repeaterCreate(150, OneOnOneCreatePageComponent_For_151_Template, 4, 4, "label", 50, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(152, "label", 51);
        \u0275\u0275element(153, "input", 55);
        \u0275\u0275elementStart(154, "span", 53);
        \u0275\u0275text(155, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "span", 54);
        \u0275\u0275text(157, "60\u5206\u25BC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(158, "div", 56)(159, "button", 57)(160, "mat-icon");
        \u0275\u0275text(161, "free_cancellation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(162, " \u9664\u5916\u3059\u308B\u6642\u9593\u5E2F\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementStart(163, "mat-icon", 27);
        \u0275\u0275text(164, "help_outline");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(165, "div", 35);
        \u0275\u0275text(166, "\u958B\u59CB\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "p", 58);
        \u0275\u0275text(168, "\u73FE\u5728\u306E\u958B\u59CB\u6642\u9593 : 15\u5206\u3054\u3068");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "button", 57)(170, "mat-icon");
        \u0275\u0275text(171, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(172, " \u958B\u59CB\u6642\u9593\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "p", 33);
        \u0275\u0275text(174, "\u203B \u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3092\u884C\u3046\u3068\u3001\u56DE\u7B54\u8005\u5074\u306B\u306F\u6307\u5B9A\u3055\u308C\u305F\u958B\u59CB\u6642\u9593\u306E\u307F\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(175, "div", 2)(176, "h2", 4);
        \u0275\u0275text(177, "STEP 3\uFF1A \u5019\u88DC\u65E5\u304B\u3089\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 10)(179, "label", 11)(180, "input", 59);
        \u0275\u0275listener("change", function OneOnOneCreatePageComponent_Template_input_change_180_listener() {
          return ctx.includeWeekends.set(!ctx.includeWeekends());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(181, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "span", 14);
        \u0275\u0275text(183, "\u571F\u65E5\u795D\u65E5\u3082\u5019\u88DC\u65E5\u306B\u5165\u308C\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(184, "div", 10)(185, "label", 11)(186, "input", 59);
        \u0275\u0275listener("change", function OneOnOneCreatePageComponent_Template_input_change_186_listener() {
          return ctx.includeAllDay.set(!ctx.includeAllDay());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(187, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "span", 14);
        \u0275\u0275text(189, "\u7D42\u65E5\u4E88\u5B9A\u304C\u3042\u3063\u3066\u3082\u5019\u88DC\u65E5\u306B\u5165\u308C\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(190, "div", 60);
        \u0275\u0275repeaterCreate(191, OneOnOneCreatePageComponent_For_192_Template, 8, 5, "div", 61, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "div", 62)(194, "button", 63);
        \u0275\u0275listener("click", function OneOnOneCreatePageComponent_Template_button_click_194_listener() {
          return ctx.addWithExisting();
        });
        \u0275\u0275elementStart(195, "mat-icon");
        \u0275\u0275text(196, "event_available");
        \u0275\u0275elementEnd();
        \u0275\u0275text(197, " \u4E88\u5B9A\u304C\u3042\u3063\u3066\u3082\u5019\u88DC\u65E5\u306B\u8FFD\u52A0 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "button", 63);
        \u0275\u0275listener("click", function OneOnOneCreatePageComponent_Template_button_click_198_listener() {
          return ctx.addNextWeek();
        });
        \u0275\u0275elementStart(199, "mat-icon");
        \u0275\u0275text(200, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(201, " \u7FCC\u9031\u3082\u8FFD\u52A0 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "button", 63);
        \u0275\u0275listener("click", function OneOnOneCreatePageComponent_Template_button_click_202_listener() {
          return ctx.selectPeriod();
        });
        \u0275\u0275elementStart(203, "mat-icon");
        \u0275\u0275text(204, "calendar_month");
        \u0275\u0275elementEnd();
        \u0275\u0275text(205, " \u671F\u9593\u3092\u9078\u629E ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(206, "div", 64)(207, "button", 65);
        \u0275\u0275listener("click", function OneOnOneCreatePageComponent_Template_button_click_207_listener() {
          return ctx.onCreate();
        });
        \u0275\u0275text(208, "\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(209, "div", 66)(210, "h3", 67);
        \u0275\u0275text(211, "\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u8ABF\u6574\u30FB\u5019\u88DC\u65E5\u8FFD\u52A0\u3059\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "p", 33);
        \u0275\u0275text(213, "\u203B\u4E88\u5B9A\u304C\u3042\u3063\u3066\u3082\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308C\u3070\u5019\u88DC\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "div", 68)(215, "button", 69);
        \u0275\u0275listener("click", function OneOnOneCreatePageComponent_Template_button_click_215_listener() {
          return ctx.refreshCalendar();
        });
        \u0275\u0275elementStart(216, "mat-icon");
        \u0275\u0275text(217, "event_busy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(218, " \u9664\u5916\u30EF\u30FC\u30C9\u3092\u8A2D\u5B9A\u3057\u5019\u88DC\u65E5\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementStart(219, "mat-icon", 27);
        \u0275\u0275text(220, "help_outline");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(221, "div", 68)(222, "a", 70);
        \u0275\u0275listener("click", function OneOnOneCreatePageComponent_Template_a_click_222_listener() {
          return ctx.refreshCalendar();
        });
        \u0275\u0275text(223, "\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u65E5\u7A0B\u3092\u518D\u53D6\u5F97\u3059\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "a", 71);
        \u0275\u0275text(225, "\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u958B\u304F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(226, "app-calendar-week-view-mini");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_13_0;
        let tmp_15_0;
        \u0275\u0275property("candidateCount", ctx.candidateSlots().length);
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.step1Form);
        \u0275\u0275advance(31);
        \u0275\u0275repeater(ctx.mtgTools);
        \u0275\u0275advance(28);
        \u0275\u0275property("formGroup", ctx.step2Form);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.organizers);
        \u0275\u0275advance(24);
        \u0275\u0275classProp("selected", ((tmp_5_0 = ctx.step2Form.get("period")) == null ? null : tmp_5_0.value) === "1week");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_6_0 = ctx.step2Form.get("period")) == null ? null : tmp_6_0.value) === "2weeks");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_7_0 = ctx.step2Form.get("period")) == null ? null : tmp_7_0.value) === "custom");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_8_0 = ctx.step2Form.get("period")) == null ? null : tmp_8_0.value) === "unlimited");
        \u0275\u0275advance(10);
        \u0275\u0275classProp("selected", ((tmp_9_0 = ctx.step2Form.get("timeSlot")) == null ? null : tmp_9_0.value) === "meeting");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("selected", ((tmp_10_0 = ctx.step2Form.get("timeSlot")) == null ? null : tmp_10_0.value) === "dinner");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("selected", ((tmp_11_0 = ctx.step2Form.get("timeSlot")) == null ? null : tmp_11_0.value) === "customTime");
        \u0275\u0275advance(7);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(23, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ((tmp_13_0 = ctx.step2Form.get("duration")) == null ? null : tmp_13_0.value) === "custom");
        \u0275\u0275advance(9);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(24, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ((tmp_15_0 = ctx.step2Form.get("travelTime")) == null ? null : tmp_15_0.value) === "custom");
        \u0275\u0275advance(28);
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
      MaxLengthValidator,
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
  background: #a1c92f;
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
  border-color: #a1c92f;
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
.option-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  border: 1px solid #a1c92f;
  border-radius: 6px;
  background: #fff;
  color: #a1c92f;
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
  background: rgba(161, 201, 47, 0.06);
}
.link-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #a1c92f;
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
.form-section-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
}
.form-section-label.with-dot[_ngcontent-%COMP%]::before {
  content: "\\25cf";
  color: #a1c92f;
  margin-right: 4px;
  font-size: 10px;
}
.file-drop-area[_ngcontent-%COMP%] {
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 28px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: border-color 0.2s;
}
.file-drop-area[_ngcontent-%COMP%]:hover {
  border-color: #a1c92f;
}
.upload-icon[_ngcontent-%COMP%] {
  font-size: 32px !important;
  width: 32px !important;
  height: 32px !important;
  color: #bbb;
}
.drop-text[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #999;
  line-height: 1.6;
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
  color: #a1c92f;
}
.sub-text[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
}
.inline-link[_ngcontent-%COMP%] {
  color: #a1c92f;
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
  background: #a1c92f;
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
.exclude-section[_ngcontent-%COMP%] {
  margin: 16px 0;
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
  background: #a1c92f;
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
  color: #a1c92f;
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
/*# sourceMappingURL=one-on-one-create-page.component.css.map */`], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OneOnOneCreatePageComponent, { className: "OneOnOneCreatePageComponent", filePath: "src\\app\\features\\scheduling\\pages\\one-on-one-create-page\\one-on-one-create-page.component.ts", lineNumber: 36 });
})();
export {
  OneOnOneCreatePageComponent
};
//# sourceMappingURL=chunk-HUQEJBXV.js.map
