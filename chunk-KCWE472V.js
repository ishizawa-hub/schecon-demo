import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import {
  MatButtonModule
} from "./chunk-A5WWN5VM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YF2NDTP4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MPKYFQD7.js";
import {
  CommonModule,
  Location,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3YYMYGX4.js";

// src/app/features/scheduling/pages/one-on-one-edit-page/one-on-one-edit-page.component.ts
function OneOnOneEditPageComponent_For_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
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
function OneOnOneEditPageComponent_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "p", 45);
    \u0275\u0275text(2, "\u5019\u88DC\u65E5\u306E\u6761\u4EF6\u5909\u66F4\u306F\u3001\u65E2\u5B58\u306E\u5019\u88DC\u65E5\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u3066\u518D\u751F\u6210\u3057\u307E\u3059\u3002");
    \u0275\u0275elementEnd()();
  }
}
var OneOnOneEditPageComponent = class _OneOnOneEditPageComponent {
  constructor(fb, location, notification) {
    this.fb = fb;
    this.location = location;
    this.notification = notification;
    this.eventInfo = {
      eventName: "\u30C6\u30B9\u30C8",
      organizer: "\u79C0\u6B21\u90CE",
      duration: "60\u5206",
      deadline: "2026\u5E744\u670816\u65E5(\u6728) 17:30"
    };
    this.changeCandidateConditions = signal(false);
    this.mtgTools = [
      "\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u3067\u306F\u884C\u308F\u306A\u3044",
      "Zoom",
      "Google Meet",
      "Microsoft Teams"
    ];
    this.editForm = this.fb.group({
      eventName: ["\u30C6\u30B9\u30C8"],
      isPrivate: [false],
      startChat: [true],
      registerSalesforce: [false],
      mtgTool: ["Zoom"],
      location: ["\u30AA\u30F3\u30E9\u30A4\u30F3"],
      description: ["\u6B21\u56DE\u306E1on1\u3067\u306F\u3001Q2\u306E\u76EE\u6A19\u9032\u6357\u306B\u3064\u3044\u3066\u78BA\u8A8D\u3057\u307E\u3059\u3002"]
    });
  }
  onFileDropped(event) {
    event.preventDefault();
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onSubmit() {
    console.log("Form submitted:", this.editForm.value);
    this.notification.success("\u4E88\u5B9A\u8ABF\u6574\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
  }
  goBack() {
    this.location.back();
  }
  static {
    this.\u0275fac = function OneOnOneEditPageComponent_Factory(t) {
      return new (t || _OneOnOneEditPageComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OneOnOneEditPageComponent, selectors: [["app-one-on-one-edit-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 123, vars: 8, consts: [[1, "page-container"], [1, "back-nav"], [1, "back-button", 3, "click"], [1, "page-header"], [1, "header-icon"], [1, "page-title"], [1, "info-card"], [1, "info-title"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "card"], [1, "section-title"], [1, "form-body", 3, "formGroup"], [1, "form-group"], [1, "form-label"], ["type", "text", "formControlName", "eventName", 1, "form-input"], [1, "toggle-row"], [1, "toggle-info"], [1, "toggle-label"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isPrivate"], [1, "toggle-slider"], ["type", "checkbox", "formControlName", "startChat"], ["type", "checkbox", "formControlName", "registerSalesforce"], [1, "form-group", 2, "margin-top", "16px"], ["formControlName", "mtgTool", 1, "form-select"], [3, "value"], ["type", "text", "formControlName", "location", "placeholder", "\u4F8B: \u4F1A\u8B70\u5BA4A / \u30AA\u30F3\u30E9\u30A4\u30F3", 1, "form-input"], [1, "file-drop-area", 3, "drop", "dragover"], [1, "upload-icon"], [1, "drop-text"], [1, "drop-subtext"], [1, "browse-link"], ["formControlName", "description", "maxlength", "400", "rows", "4", "placeholder", "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306B\u5FC5\u8981\u306A\u4E8B\u524D\u9023\u7D61\u4E8B\u9805\u3084Zoom\u306E\u30D1\u30B9\u30B3\u30FC\u30C9\u306A\u3069\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002", 1, "form-textarea"], [1, "char-count"], ["type", "button", 1, "btn-outline"], [1, "card", 2, "margin-top", "20px"], [1, "form-body"], [1, "help-btn"], ["type", "checkbox", 3, "change", "checked"], [1, "conditions-expanded"], [1, "card-actions"], [1, "btn-primary", 3, "click"], [1, "conditions-note"]], template: function OneOnOneEditPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "button", 2);
        \u0275\u0275listener("click", function OneOnOneEditPageComponent_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "\u623B\u308B");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 3)(8, "mat-icon", 4);
        \u0275\u0275text(9, "edit_calendar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h1", 5);
        \u0275\u0275text(11, "\u3053\u306E\u4E88\u5B9A\u3092\u7DE8\u96C6\u3057\u307E\u3057\u3087\u3046");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "h3", 7)(14, "mat-icon");
        \u0275\u0275text(15, "info_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " \u73FE\u5728\u306E\u4E88\u5B9A\u60C5\u5831 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "span", 10);
        \u0275\u0275text(20, "\u30A4\u30D9\u30F3\u30C8\u540D");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 11);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 9)(24, "span", 10);
        \u0275\u0275text(25, "\u4E3B\u50AC\u8005");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 11);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 9)(29, "span", 10);
        \u0275\u0275text(30, "\u6240\u8981\u6642\u9593");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 11);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 9)(34, "span", 10);
        \u0275\u0275text(35, "\u7DE0\u5207\u65E5\u6642");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 11);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 12)(39, "h2", 13)(40, "mat-icon");
        \u0275\u0275text(41, "edit_note");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " \u4E88\u5B9A\u540D\u3068\u958B\u50AC\u5834\u6240\u3092\u5909\u66F4\u3059\u308B ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "form", 14)(44, "div", 15)(45, "label", 16);
        \u0275\u0275text(46, "\u4E88\u5B9A\u306E\u540D\u524D");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 18)(49, "div", 19)(50, "span", 20);
        \u0275\u0275text(51, "\u975E\u516C\u958B\u4E88\u5B9A\u3068\u3057\u3066\u4F5C\u6210\u3059\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "label", 21);
        \u0275\u0275element(53, "input", 22)(54, "span", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 18)(56, "div", 19)(57, "span", 20);
        \u0275\u0275text(58, "\u56DE\u7B54\u5F8C\u306B\u30C1\u30E3\u30C3\u30C8\u3092\u59CB\u3081\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "label", 21);
        \u0275\u0275element(60, "input", 24)(61, "span", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 18)(63, "div", 19)(64, "span", 20);
        \u0275\u0275text(65, "\u53C2\u52A0\u8005\u3092Salesforce\u306B\u767B\u9332\u3059\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "label", 21);
        \u0275\u0275element(67, "input", 25)(68, "span", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 26)(70, "label", 16);
        \u0275\u0275text(71, "\u30AA\u30F3\u30E9\u30A4\u30F3MTG\u30C4\u30FC\u30EB\u3092\u9078\u3076");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "select", 27);
        \u0275\u0275repeaterCreate(73, OneOnOneEditPageComponent_For_74_Template, 2, 2, "option", 28, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 15)(76, "label", 16);
        \u0275\u0275text(77, "\u958B\u50AC\u5834\u6240");
        \u0275\u0275elementEnd();
        \u0275\u0275element(78, "input", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 15)(80, "label", 16);
        \u0275\u0275text(81, "\u56DE\u7B54\u753B\u9762\u306E\u30C8\u30C3\u30D7\u753B\u50CF\u3092\u8A2D\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 30);
        \u0275\u0275listener("drop", function OneOnOneEditPageComponent_Template_div_drop_82_listener($event) {
          return ctx.onFileDropped($event);
        })("dragover", function OneOnOneEditPageComponent_Template_div_dragover_82_listener($event) {
          return ctx.onDragOver($event);
        });
        \u0275\u0275elementStart(83, "mat-icon", 31);
        \u0275\u0275text(84, "cloud_upload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "p", 32);
        \u0275\u0275text(86, "\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "p", 33);
        \u0275\u0275text(88, "\u307E\u305F\u306F");
        \u0275\u0275elementStart(89, "span", 34);
        \u0275\u0275text(90, "\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(91, "div", 15)(92, "label", 16);
        \u0275\u0275text(93, "\u4E88\u5B9A\u6982\u8981");
        \u0275\u0275elementEnd();
        \u0275\u0275element(94, "textarea", 35);
        \u0275\u0275elementStart(95, "span", 36);
        \u0275\u0275text(96);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "button", 37)(98, "mat-icon");
        \u0275\u0275text(99, "mail_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275text(100, " \u901A\u77E5\u5148\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(101, "div", 38)(102, "h2", 13)(103, "mat-icon");
        \u0275\u0275text(104, "tune");
        \u0275\u0275elementEnd();
        \u0275\u0275text(105, " \u4E88\u5B9A\u306E\u6761\u4EF6\u3092\u5909\u66F4\u3059\u308B ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 39)(107, "div", 18)(108, "div", 19)(109, "span", 20);
        \u0275\u0275text(110, "\u5019\u88DC\u65E5\u3068\u306A\u308B\u6761\u4EF6\u3092\u5909\u66F4\u3059\u308B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "button", 40)(112, "mat-icon");
        \u0275\u0275text(113, "help_outline");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "label", 21)(115, "input", 41);
        \u0275\u0275listener("change", function OneOnOneEditPageComponent_Template_input_change_115_listener() {
          return ctx.changeCandidateConditions.set(!ctx.changeCandidateConditions());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(116, "span", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(117, OneOnOneEditPageComponent_Conditional_117_Template, 3, 0, "div", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "div", 43)(119, "button", 44);
        \u0275\u0275listener("click", function OneOnOneEditPageComponent_Template_button_click_119_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(120, "mat-icon");
        \u0275\u0275text(121, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(122, " \u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_6_0;
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate(ctx.eventInfo.eventName);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.eventInfo.organizer);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.eventInfo.duration);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.eventInfo.deadline);
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.editForm);
        \u0275\u0275advance(30);
        \u0275\u0275repeater(ctx.mtgTools);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate1("", ((tmp_6_0 = ctx.editForm.get("description")) == null ? null : tmp_6_0.value == null ? null : tmp_6_0.value.length) || 0, " / 400");
        \u0275\u0275advance(19);
        \u0275\u0275property("checked", ctx.changeCandidateConditions());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(117, ctx.changeCandidateConditions() ? 117 : -1);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormGroupDirective,
      FormControlName,
      MatIconModule,
      MatIcon,
      MatButtonModule
    ], styles: [`

[_nghost-%COMP%] {
  display: block;
  background: #fafafa;
  min-height: 100vh;
  min-height: 100dvh;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  color: #81766e;
}
.page-container[_ngcontent-%COMP%] {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 24px 64px;
}
.page-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}
.page-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {
  font-size: 28px;
  width: 28px;
  height: 28px;
  color: #ff9800;
}
.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  color: #81766e;
}
.info-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      rgba(255, 152, 0, 0.06) 0%,
      rgba(255, 152, 0, 0.02) 100%);
  border: 1.5px solid rgba(255, 152, 0, 0.2);
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 24px;
}
.info-card[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #ef6c00;
  margin: 0 0 16px;
}
.info-card[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  width: 18px;
  height: 18px;
}
.info-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.info-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  color: #9e9e9e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: #81766e;
}
.card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid #e0e0e0;
  overflow: hidden;
}
.section-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  padding: 24px 28px 0;
  margin: 0;
  color: #81766e;
}
.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  color: #ff9800;
  font-size: 22px;
}
.form-body[_ngcontent-%COMP%] {
  padding: 20px 28px 28px;
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 22px;
}
.form-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #757575;
  margin-bottom: 6px;
}
.form-input[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%], .form-textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  color: #81766e;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}
.form-input[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #ff9800;
  box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.12);
}
.form-input[_ngcontent-%COMP%]::placeholder, .form-select[_ngcontent-%COMP%]::placeholder, .form-textarea[_ngcontent-%COMP%]::placeholder {
  color: #9e9e9e;
}
.form-select[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23889' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
  cursor: pointer;
}
.form-textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 100px;
}
.char-count[_ngcontent-%COMP%] {
  display: block;
  text-align: right;
  font-size: 12px;
  color: #9e9e9e;
  margin-top: 4px;
}
.toggle-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid rgba(224, 224, 224, 0.6);
}
.toggle-row[_ngcontent-%COMP%]:last-of-type {
  border-bottom: none;
}
.toggle-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
}
.toggle-label[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 500;
  color: #81766e;
}
.help-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  cursor: pointer;
  color: #9e9e9e;
  padding: 2px;
  display: flex;
  align-items: center;
}
.help-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  width: 18px;
  height: 18px;
}
.help-btn[_ngcontent-%COMP%]:hover {
  color: #ff9800;
}
.toggle-switch[_ngcontent-%COMP%] {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 26px;
  flex-shrink: 0;
}
.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background: #ccc;
  border-radius: 26px;
  transition: 0.3s;
}
.toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background: #fff;
  border-radius: 50%;
  transition: 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}
.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {
  background: #ff9800;
}
.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]::before {
  transform: translateX(22px);
}
.file-drop-area[_ngcontent-%COMP%] {
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.file-drop-area[_ngcontent-%COMP%]:hover {
  border-color: #ff9800;
  background: rgba(255, 152, 0, 0.03);
}
.file-drop-area[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {
  font-size: 36px;
  width: 36px;
  height: 36px;
  color: #9e9e9e;
  margin-bottom: 8px;
}
.file-drop-area[_ngcontent-%COMP%]   .drop-text[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #757575;
  margin: 0 0 4px;
}
.file-drop-area[_ngcontent-%COMP%]   .drop-subtext[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #9e9e9e;
  margin: 0;
}
.file-drop-area[_ngcontent-%COMP%]   .drop-subtext[_ngcontent-%COMP%]   .browse-link[_ngcontent-%COMP%] {
  color: #ff9800;
  cursor: pointer;
  font-weight: 500;
}
.file-drop-area[_ngcontent-%COMP%]   .drop-subtext[_ngcontent-%COMP%]   .browse-link[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.conditions-expanded[_ngcontent-%COMP%] {
  margin-top: 12px;
  padding: 14px 16px;
  background: rgba(255, 152, 0, 0.04);
  border-radius: 8px;
  border: 1px solid rgba(255, 152, 0, 0.15);
}
.conditions-expanded[_ngcontent-%COMP%]   .conditions-note[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #757575;
  margin: 0;
  line-height: 1.6;
}
.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 11px 28px;
  background: #ff9800;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #ef6c00;
}
.btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  width: 18px;
  height: 18px;
}
.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  background: transparent;
  color: #ff9800;
  border: 1.5px solid #ff9800;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(255, 152, 0, 0.06);
}
.btn-outline[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  width: 18px;
  height: 18px;
}
.card-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  padding: 16px 28px 24px;
  border-top: 1px solid rgba(224, 224, 224, 0.5);
}
@media (max-width: 768px) {
  .page-container[_ngcontent-%COMP%] {
    padding: 16px 12px 48px;
  }
  .page-header[_ngcontent-%COMP%] {
    margin-bottom: 20px;
  }
  .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  .info-card[_ngcontent-%COMP%] {
    padding: 16px;
  }
  .info-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .section-title[_ngcontent-%COMP%] {
    font-size: 16px;
    padding: 20px 16px 0;
  }
  .form-body[_ngcontent-%COMP%] {
    padding: 16px 16px 20px;
  }
  .card-actions[_ngcontent-%COMP%] {
    padding: 12px 16px 20px;
  }
  .btn-primary[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
}
/*# sourceMappingURL=one-on-one-edit-page.component.css.map */`], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OneOnOneEditPageComponent, { className: "OneOnOneEditPageComponent", filePath: "src\\app\\features\\scheduling\\pages\\one-on-one-edit-page\\one-on-one-edit-page.component.ts", lineNumber: 25 });
})();
export {
  OneOnOneEditPageComponent
};
//# sourceMappingURL=chunk-KCWE472V.js.map
