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

// src/app/features/scheduling/pages/multiple-create-page/multiple-create-page.component.ts
var _c0 = () => ["15", "30", "45", "60"];
var _c1 = () => ["0", "15", "30", "45"];
function MultipleCreatePageComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
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
function MultipleCreatePageComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const count_r2 = ctx.$implicit;
    \u0275\u0275property("value", count_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", count_r2, "\u4EBA");
  }
}
function MultipleCreatePageComponent_For_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const org_r3 = ctx.$implicit;
    \u0275\u0275property("value", org_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(org_r3);
  }
}
function MultipleCreatePageComponent_For_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 72);
    \u0275\u0275element(1, "input", 73);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const d_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ((tmp_10_0 = ctx_r4.step2Form.get("duration")) == null ? null : tmp_10_0.value) === d_r4);
    \u0275\u0275advance();
    \u0275\u0275property("value", d_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r4, "\u5206");
  }
}
function MultipleCreatePageComponent_For_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 72);
    \u0275\u0275element(1, "input", 74);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const t_r6 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ((tmp_10_0 = ctx_r4.step2Form.get("travelTime")) == null ? null : tmp_10_0.value) === t_r6);
    \u0275\u0275advance();
    \u0275\u0275property("value", t_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r6, "\u5206");
  }
}
function MultipleCreatePageComponent_For_194_Template(rf, ctx) {
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
    const slot_r7 = ctx.$implicit;
    \u0275\u0275classProp("checked", slot_r7.checked);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", slot_r7.date, "(", slot_r7.dayOfWeek, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r7.timeRange);
  }
}
var MultipleCreatePageComponent = class _MultipleCreatePageComponent {
  constructor(fb, location, notification) {
    this.fb = fb;
    this.location = location;
    this.notification = notification;
    this.includeWeekends = signal(false);
    this.includeAllDay = signal(true);
    this.candidateSlots = signal(this.generateMockSlots());
    this.checkedCount = computed(() => this.candidateSlots().filter((s) => s.checked).length);
    this.mtgTools = [
      "\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u3067\u306F\u884C\u308F\u306A\u3044",
      "Zoom",
      "Google Meet",
      "Microsoft Teams"
    ];
    this.participantCounts = Array.from({ length: 19 }, (_, i) => i + 2);
    this.organizers = ["ishizawamoph@gmail.com", "\u5C71\u7530\u592A\u90CE", "\u4F50\u85E4\u82B1\u5B50", "\u9234\u6728\u4E00\u90CE"];
    this.step1Form = this.fb.group({
      eventName: ["", Validators.required],
      isPrivate: [false],
      registerBlastMail: [false],
      registerSalesforce: [false],
      mtgTool: ["\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u3067\u306F\u884C\u308F\u306A\u3044"],
      location: [""],
      participantCount: [2],
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
    this.\u0275fac = function MultipleCreatePageComponent_Factory(t) {
      return new (t || _MultipleCreatePageComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultipleCreatePageComponent, selectors: [["app-multiple-create-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 229, vars: 25, consts: [["pageTitle", "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574", "pageSubtitle", "\u30C0\u30D6\u30EB\u30D6\u30C3\u30AD\u30F3\u30B0\u306A\u3057\u3067\u8907\u6570\u793E\u3001\u8907\u6570\u4EBA\u3068\u8ABF\u6574", "accentColor", "#ed9630", 3, "candidateCount"], [1, "create-form"], [1, "step-section"], [1, "step-header"], [1, "step-title"], [1, "template-btn"], [3, "formGroup"], [1, "outlined-field"], [1, "outlined-label"], ["type", "text", "formControlName", "eventName", "placeholder", "\u4E88\u5B9A\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", 1, "outlined-input"], [1, "toggle-row"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isPrivate"], [1, "toggle-slider"], [1, "toggle-text"], ["type", "checkbox", "formControlName", "registerBlastMail"], ["type", "checkbox", "formControlName", "registerSalesforce"], ["formControlName", "mtgTool", 1, "outlined-select"], [3, "value"], ["type", "text", "formControlName", "location", "placeholder", "\u5834\u6240\u3092\u5165\u529B", 1, "outlined-input"], ["formControlName", "participantCount", 1, "outlined-select"], [1, "form-section-label"], [1, "file-drop-area", 3, "drop", "dragover"], [1, "upload-icon"], [1, "drop-text"], ["formControlName", "description", "maxlength", "400", "rows", "3", "placeholder", "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306B\u5FC5\u8981\u306A\u4E8B\u524D\u9023\u7D61\u4E8B\u9805\u3084 Zoom \u306E\u30D1\u30B9\u30B3\u30FC\u30C9\u306A\u3069\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002", 1, "outlined-textarea"], ["type", "button", 1, "link-btn", 3, "click"], [1, "help-sm"], [1, "organizer-select"], [1, "organizer-icon"], ["formControlName", "organizer", 1, "outlined-select"], ["type", "checkbox", "formControlName", "orSetting"], [1, "outlined-select"], [1, "note-text"], ["href", "https://schecon.com", "target", "_blank"], [1, "form-section-label", "with-dot"], [1, "radio-group"], [1, "radio-btn"], ["type", "radio", "formControlName", "period", "value", "1week"], ["type", "radio", "formControlName", "period", "value", "2weeks"], ["type", "radio", "formControlName", "period", "value", "custom"], ["type", "radio", "formControlName", "period", "value", "unlimited"], ["href", "/settings/profile", 1, "inline-link"], [1, "radio-btn", "wide"], ["type", "radio", "formControlName", "timeSlot", "value", "meeting"], [1, "radio-main"], [1, "radio-sub"], ["type", "radio", "formControlName", "timeSlot", "value", "dinner"], ["type", "radio", "formControlName", "timeSlot", "value", "customTime"], [1, "radio-group", "compact"], [1, "radio-btn", "small", 3, "selected"], [1, "radio-btn", "small", "has-select"], ["type", "radio", "formControlName", "duration", "value", "custom"], [1, "small-label"], [1, "small-value"], ["type", "radio", "formControlName", "travelTime", "value", "custom"], [1, "exclude-section"], ["type", "button", 1, "link-btn"], [1, "sub-text"], ["type", "checkbox", 3, "change", "checked"], [1, "candidate-list"], [1, "candidate-item", 3, "checked"], [1, "slot-actions"], [1, "action-btn", 3, "click"], [1, "cta-section"], [1, "cta-btn", 3, "click"], [1, "calendar-section"], [1, "calendar-section-title"], [1, "calendar-links"], [1, "link-btn", 3, "click"], [1, "text-link", 3, "click"], ["routerLink", "/calendar", 1, "text-link"], [1, "radio-btn", "small"], ["type", "radio", "formControlName", "duration", 3, "value"], ["type", "radio", "formControlName", "travelTime", 3, "value"], [1, "candidate-item"], [1, "candidate-date"], [1, "candidate-time"], [1, "candidate-edit"]], template: function MultipleCreatePageComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(31, "div", 7)(32, "label", 8);
        \u0275\u0275text(33, "\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u30C4\u30FC\u30EB\u3092\u9078\u3076");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "select", 17);
        \u0275\u0275repeaterCreate(35, MultipleCreatePageComponent_For_36_Template, 2, 2, "option", 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 7)(38, "label", 8);
        \u0275\u0275text(39, "\u958B\u50AC\u5834\u6240\uFF08\u4EFB\u610F)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 7)(42, "label", 8);
        \u0275\u0275text(43, "\u53C2\u52A0\u4E88\u5B9A\u4EBA\u6570");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "select", 20);
        \u0275\u0275repeaterCreate(45, MultipleCreatePageComponent_For_46_Template, 2, 2, "option", 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 21);
        \u0275\u0275text(48, "\u56DE\u7B54\u753B\u9762\u306E\u30C8\u30C3\u30D7\u753B\u50CF\u3092\u8A2D\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 22);
        \u0275\u0275listener("drop", function MultipleCreatePageComponent_Template_div_drop_49_listener($event) {
          return ctx.onFileDropped($event);
        })("dragover", function MultipleCreatePageComponent_Template_div_dragover_49_listener($event) {
          return ctx.onDragOver($event);
        });
        \u0275\u0275elementStart(50, "mat-icon", 23);
        \u0275\u0275text(51, "add_photo_alternate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 24);
        \u0275\u0275text(53, "\u3053\u3053\u306B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7");
        \u0275\u0275element(54, "br");
        \u0275\u0275text(55, "\u307E\u305F\u306F\u3053\u3053\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 7)(57, "label", 8);
        \u0275\u0275text(58, "\u4E88\u5B9A\u6982\u8981\uFF08400\u6587\u5B57\u4EE5\u5185\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "textarea", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "button", 26);
        \u0275\u0275listener("click", function MultipleCreatePageComponent_Template_button_click_60_listener() {
          return ctx.addNotificationEmail();
        });
        \u0275\u0275elementStart(61, "mat-icon");
        \u0275\u0275text(62, "forward_to_inbox");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " \u901A\u77E5\u5148\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementStart(64, "mat-icon", 27);
        \u0275\u0275text(65, "help_outline");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(66, "div", 2)(67, "h2", 4);
        \u0275\u0275text(68, "STEP 2\uFF1A\u4E88\u5B9A\u306E\u6761\u4EF6\u3092\u6C7A\u3081\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "form", 6)(70, "div", 21);
        \u0275\u0275text(71, "\u4E3B\u50AC\u8005\u3092\u9078\u629E(\u672C\u4EBA\u4EE5\u5916\u3067\u3082\u53EF\u80FD)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 28)(73, "mat-icon", 29);
        \u0275\u0275text(74, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "select", 30);
        \u0275\u0275repeaterCreate(76, MultipleCreatePageComponent_For_77_Template, 2, 2, "option", 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 10)(79, "label", 11);
        \u0275\u0275element(80, "input", 31)(81, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "span", 14);
        \u0275\u0275text(83, "OR\u8A2D\u5B9A(A\u3055\u3093\u307E\u305F\u306FB\u3055\u3093)\u3092\u6709\u52B9\u306B\u3059\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "mat-icon", 27);
        \u0275\u0275text(85, "help_outline");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 21);
        \u0275\u0275text(87, "\u53C2\u52A0\u8005\u3092\u8FFD\u52A0(\u5171\u6709\u6E08\u307F\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 7)(89, "select", 32)(90, "option");
        \u0275\u0275text(91, "\u5171\u6709\u6E08\u307F\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u9078\u629E");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "p", 33);
        \u0275\u0275text(93, "\u203B \u540C\u50DA\u3084\u4EF2\u9593\u306E\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u8868\u793A\u3059\u308B\u5834\u5408\u306F");
        \u0275\u0275elementStart(94, "a", 34);
        \u0275\u0275text(95, "\u30B3\u30C1\u30E9");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, "\u306E\u5171\u6709\u8A2D\u5B9A\u3092\u3057\u3066\u4E0B\u3055\u3044");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 35);
        \u0275\u0275text(98, "\u958B\u50AC\u6642\u671F\uFF08\u7121\u671F\u9650\u3067\u4F5C\u6210\u3057\u305FURL\u306F\u6C38\u9060\u306B\u4F7F\u3048\u307E\u3059\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 36)(100, "label", 37);
        \u0275\u0275element(101, "input", 38);
        \u0275\u0275elementStart(102, "span");
        \u0275\u0275text(103, "\u76F4\u8FD11\u9031\u9593");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "label", 37);
        \u0275\u0275element(105, "input", 39);
        \u0275\u0275elementStart(106, "span");
        \u0275\u0275text(107, "\u76F4\u8FD12\u9031\u9593");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "label", 37);
        \u0275\u0275element(109, "input", 40);
        \u0275\u0275elementStart(110, "span");
        \u0275\u0275text(111, "\u671F\u9593\u3092\u6307\u5B9A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "label", 37);
        \u0275\u0275element(113, "input", 41);
        \u0275\u0275elementStart(114, "span");
        \u0275\u0275text(115, "\u7121\u671F\u9650");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(116, "div", 35);
        \u0275\u0275text(117, "\u6642\u9593\u5E2F ( ");
        \u0275\u0275elementStart(118, "a", 42);
        \u0275\u0275text(119, "\u30DE\u30A4\u30DA\u30FC\u30B8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(120, "\u3067\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u6642\u9593\u5E2F\u3092\u8A2D\u5B9A )");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "div", 36)(122, "label", 43);
        \u0275\u0275element(123, "input", 44);
        \u0275\u0275elementStart(124, "span", 45);
        \u0275\u0275text(125, "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "span", 46);
        \u0275\u0275text(127, "09:30-19:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "label", 43);
        \u0275\u0275element(129, "input", 47);
        \u0275\u0275elementStart(130, "span", 45);
        \u0275\u0275text(131, "\u98DF\u4E8B\u4F1A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "span", 46);
        \u0275\u0275text(133, "19:00-23:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "label", 43);
        \u0275\u0275element(135, "input", 48);
        \u0275\u0275elementStart(136, "span");
        \u0275\u0275text(137, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(138, "div", 35);
        \u0275\u0275text(139, "\u6240\u8981\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 49);
        \u0275\u0275repeaterCreate(141, MultipleCreatePageComponent_For_142_Template, 4, 4, "label", 50, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(143, "label", 51);
        \u0275\u0275element(144, "input", 52);
        \u0275\u0275elementStart(145, "span", 53);
        \u0275\u0275text(146, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "span", 54);
        \u0275\u0275text(148, "75\u5206\u25BC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(149, "div", 35);
        \u0275\u0275text(150, "\u79FB\u52D5\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "div", 49);
        \u0275\u0275repeaterCreate(152, MultipleCreatePageComponent_For_153_Template, 4, 4, "label", 50, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(154, "label", 51);
        \u0275\u0275element(155, "input", 55);
        \u0275\u0275elementStart(156, "span", 53);
        \u0275\u0275text(157, "\u6642\u9593\u6307\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "span", 54);
        \u0275\u0275text(159, "60\u5206\u25BC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(160, "div", 56)(161, "button", 57)(162, "mat-icon");
        \u0275\u0275text(163, "free_cancellation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(164, " \u9664\u5916\u3059\u308B\u6642\u9593\u5E2F\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementStart(165, "mat-icon", 27);
        \u0275\u0275text(166, "help_outline");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(167, "div", 35);
        \u0275\u0275text(168, "\u958B\u59CB\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "p", 58);
        \u0275\u0275text(170, "\u73FE\u5728\u306E\u958B\u59CB\u6642\u9593 : 15\u5206\u3054\u3068");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "button", 57)(172, "mat-icon");
        \u0275\u0275text(173, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(174, " \u958B\u59CB\u6642\u9593\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "p", 33);
        \u0275\u0275text(176, "\u203B \u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3092\u884C\u3046\u3068\u3001\u56DE\u7B54\u8005\u5074\u306B\u306F\u6307\u5B9A\u3055\u308C\u305F\u958B\u59CB\u6642\u9593\u306E\u307F\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(177, "div", 2)(178, "h2", 4);
        \u0275\u0275text(179, "STEP 3\uFF1A \u5019\u88DC\u65E5\u304B\u3089\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "div", 10)(181, "label", 11)(182, "input", 59);
        \u0275\u0275listener("change", function MultipleCreatePageComponent_Template_input_change_182_listener() {
          return ctx.includeWeekends.set(!ctx.includeWeekends());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(183, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "span", 14);
        \u0275\u0275text(185, "\u571F\u65E5\u795D\u65E5\u3082\u5019\u88DC\u65E5\u306B\u5165\u308C\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(186, "div", 10)(187, "label", 11)(188, "input", 59);
        \u0275\u0275listener("change", function MultipleCreatePageComponent_Template_input_change_188_listener() {
          return ctx.includeAllDay.set(!ctx.includeAllDay());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(189, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "span", 14);
        \u0275\u0275text(191, "\u7D42\u65E5\u4E88\u5B9A\u304C\u3042\u3063\u3066\u3082\u5019\u88DC\u65E5\u306B\u5165\u308C\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(192, "div", 60);
        \u0275\u0275repeaterCreate(193, MultipleCreatePageComponent_For_194_Template, 8, 5, "div", 61, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "div", 62)(196, "button", 63);
        \u0275\u0275listener("click", function MultipleCreatePageComponent_Template_button_click_196_listener() {
          return ctx.addWithExisting();
        });
        \u0275\u0275elementStart(197, "mat-icon");
        \u0275\u0275text(198, "event_available");
        \u0275\u0275elementEnd();
        \u0275\u0275text(199, " \u4E88\u5B9A\u304C\u3042\u3063\u3066\u3082\u5019\u88DC\u65E5\u306B\u8FFD\u52A0 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "button", 63);
        \u0275\u0275listener("click", function MultipleCreatePageComponent_Template_button_click_200_listener() {
          return ctx.addNextWeek();
        });
        \u0275\u0275elementStart(201, "mat-icon");
        \u0275\u0275text(202, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(203, " \u7FCC\u9031\u3082\u8FFD\u52A0 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "button", 63);
        \u0275\u0275listener("click", function MultipleCreatePageComponent_Template_button_click_204_listener() {
          return ctx.selectPeriod();
        });
        \u0275\u0275elementStart(205, "mat-icon");
        \u0275\u0275text(206, "calendar_month");
        \u0275\u0275elementEnd();
        \u0275\u0275text(207, " \u671F\u9593\u3092\u9078\u629E ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(208, "div", 64)(209, "button", 65);
        \u0275\u0275listener("click", function MultipleCreatePageComponent_Template_button_click_209_listener() {
          return ctx.onCreate();
        });
        \u0275\u0275text(210, "\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(211, "div", 66)(212, "h3", 67);
        \u0275\u0275text(213, "\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u8ABF\u6574\u30FB\u5019\u88DC\u65E5\u8FFD\u52A0\u3059\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "p", 33);
        \u0275\u0275text(215, "\u203B\u4E88\u5B9A\u304C\u3042\u3063\u3066\u3082\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308C\u3070\u5019\u88DC\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "div", 68)(217, "button", 69);
        \u0275\u0275listener("click", function MultipleCreatePageComponent_Template_button_click_217_listener() {
          return ctx.refreshCalendar();
        });
        \u0275\u0275elementStart(218, "mat-icon");
        \u0275\u0275text(219, "event_busy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(220, " \u9664\u5916\u30EF\u30FC\u30C9\u3092\u8A2D\u5B9A\u3057\u5019\u88DC\u65E5\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementStart(221, "mat-icon", 27);
        \u0275\u0275text(222, "help_outline");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(223, "div", 68)(224, "a", 70);
        \u0275\u0275listener("click", function MultipleCreatePageComponent_Template_a_click_224_listener() {
          return ctx.refreshCalendar();
        });
        \u0275\u0275text(225, "\u30AB\u30EC\u30F3\u30C0\u30FC\u304B\u3089\u65E5\u7A0B\u3092\u518D\u53D6\u5F97\u3059\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "a", 71);
        \u0275\u0275text(227, "\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u958B\u304F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(228, "app-calendar-week-view-mini");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_14_0;
        let tmp_16_0;
        \u0275\u0275property("candidateCount", ctx.candidateSlots().length);
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.step1Form);
        \u0275\u0275advance(27);
        \u0275\u0275repeater(ctx.mtgTools);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.participantCounts);
        \u0275\u0275advance(24);
        \u0275\u0275property("formGroup", ctx.step2Form);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.organizers);
        \u0275\u0275advance(24);
        \u0275\u0275classProp("selected", ((tmp_6_0 = ctx.step2Form.get("period")) == null ? null : tmp_6_0.value) === "1week");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_7_0 = ctx.step2Form.get("period")) == null ? null : tmp_7_0.value) === "2weeks");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_8_0 = ctx.step2Form.get("period")) == null ? null : tmp_8_0.value) === "custom");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("selected", ((tmp_9_0 = ctx.step2Form.get("period")) == null ? null : tmp_9_0.value) === "unlimited");
        \u0275\u0275advance(10);
        \u0275\u0275classProp("selected", ((tmp_10_0 = ctx.step2Form.get("timeSlot")) == null ? null : tmp_10_0.value) === "meeting");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("selected", ((tmp_11_0 = ctx.step2Form.get("timeSlot")) == null ? null : tmp_11_0.value) === "dinner");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("selected", ((tmp_12_0 = ctx.step2Form.get("timeSlot")) == null ? null : tmp_12_0.value) === "customTime");
        \u0275\u0275advance(7);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(23, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ((tmp_14_0 = ctx.step2Form.get("duration")) == null ? null : tmp_14_0.value) === "custom");
        \u0275\u0275advance(9);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(24, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("selected", ((tmp_16_0 = ctx.step2Form.get("travelTime")) == null ? null : tmp_16_0.value) === "custom");
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
  background: #ed9630;
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
  border-color: #ed9630;
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
.link-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #ed9630;
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
  color: #ed9630;
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
  border-color: #ed9630;
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
  color: #ed9630;
}
.sub-text[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
}
.inline-link[_ngcontent-%COMP%] {
  color: #ed9630;
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
  background: #ed9630;
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
  background: #ed9630;
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
  color: #ed9630;
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
/*# sourceMappingURL=multiple-create-page.component.css.map */`], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultipleCreatePageComponent, { className: "MultipleCreatePageComponent", filePath: "src\\app\\features\\scheduling\\pages\\multiple-create-page\\multiple-create-page.component.ts", lineNumber: 36 });
})();
export {
  MultipleCreatePageComponent
};
//# sourceMappingURL=chunk-QGXQGLQK.js.map
