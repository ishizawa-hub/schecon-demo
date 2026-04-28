import {
  KeyboardManagerService
} from "./chunk-XACQWZ45.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-NWSZROQH.js";
import {
  ImageUploadComponent
} from "./chunk-QLKTM4SV.js";
import {
  CommunityService
} from "./chunk-GSEWMOGN.js";
import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-YF2NDTP4.js";
import {
  Router
} from "./chunk-VOAOX4DE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MPKYFQD7.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Location,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3YYMYGX4.js";

// src/app/shared/services/form-draft.service.ts
var STORAGE_PREFIX = "schecon.draft.v1:";
var DEBOUNCE_MS = 300;
var FormDraftService = class _FormDraftService {
  constructor() {
    this.timers = /* @__PURE__ */ new Map();
  }
  /** 保存済み下書きを取得。無ければ null */
  load(key) {
    if (typeof localStorage === "undefined")
      return null;
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + key);
      if (!raw)
        return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  /** debounce つき保存 (頻繁な呼び出しを抑制) */
  save(key, data) {
    if (typeof localStorage === "undefined")
      return;
    if (data == null || typeof data === "object" && Object.keys(data).length === 0) {
      this.clear(key);
      return;
    }
    if (this.timers.has(key))
      clearTimeout(this.timers.get(key));
    this.timers.set(key, setTimeout(() => this.flush(key, data), DEBOUNCE_MS));
  }
  /** debounce を待たずに即時保存。遷移直前などに使う */
  flush(key, data) {
    if (typeof localStorage === "undefined")
      return;
    this.timers.delete(key);
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data));
    } catch {
    }
  }
  /** 下書きを削除 */
  clear(key) {
    if (typeof localStorage === "undefined")
      return;
    try {
      localStorage.removeItem(STORAGE_PREFIX + key);
    } catch {
    }
    if (this.timers.has(key)) {
      clearTimeout(this.timers.get(key));
      this.timers.delete(key);
    }
  }
  /** 全件クリア (ログアウト時などに利用) */
  clearAll() {
    if (typeof localStorage === "undefined")
      return;
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(STORAGE_PREFIX))
          keys.push(k);
      }
      keys.forEach((k) => localStorage.removeItem(k));
    } catch {
    }
    this.timers.forEach((t) => clearTimeout(t));
    this.timers.clear();
  }
  static {
    this.\u0275fac = function FormDraftService_Factory(t) {
      return new (t || _FormDraftService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormDraftService, factory: _FormDraftService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/community/components/recruitment-create/recruitment-create.component.ts
function RecruitmentCreateComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 4);
    \u0275\u0275text(2, "\u5831\u916C\u306E\u8A73\u7D30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentCreateComponent_div_27_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.compensationDetails, $event) || (ctx_r1.compensationDetails = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RecruitmentCreateComponent_div_27_Template_input_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFieldChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.compensationDetails);
  }
}
function RecruitmentCreateComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "button", 26);
    \u0275\u0275listener("click", function RecruitmentCreateComponent_div_31_div_1_Template_button_click_2_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeImage(i_r4));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const url_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", url_r5, \u0275\u0275sanitizeUrl);
  }
}
function RecruitmentCreateComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, RecruitmentCreateComponent_div_31_div_1_Template, 5, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.imagePreviewUrls);
  }
}
function RecruitmentCreateComponent_app_image_upload_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-image-upload", 27);
    \u0275\u0275listener("imageSelected", function RecruitmentCreateComponent_app_image_upload_32_Template_app_image_upload_imageSelected_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("recommendedSize", "800 x 600px (4:3)");
  }
}
var RecruitmentCreateComponent = class _RecruitmentCreateComponent {
  /** モーダル時は data.communityId、ページ時は communityIdInput を使う */
  get communityId() {
    return this.data?.communityId || this.communityIdInput || "";
  }
  get editing() {
    return this.data?.editing || this.editingInput;
  }
  get draftKey() {
    return "recruitment-create:" + this.communityId;
  }
  snapshot() {
    return {
      title: this.title,
      problem: this.problem,
      details: this.details,
      deadline: this.deadline,
      hasCompensation: this.hasCompensation,
      compensationDetails: this.compensationDetails
    };
  }
  constructor(dialogRef, data, location, router, communityService, draftSvc, keyboard, cdr) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.location = location;
    this.router = router;
    this.communityService = communityService;
    this.draftSvc = draftSvc;
    this.keyboard = keyboard;
    this.cdr = cdr;
    this.title = "";
    this.problem = "";
    this.details = "";
    this.deadline = "";
    this.hasCompensation = false;
    this.compensationDetails = "";
    this.imageFiles = [];
    this.imagePreviewUrls = [];
    this.keyboardHeight = 0;
    this.keyboardSub = this.keyboard.keyboardHeight$.subscribe((h) => {
      this.keyboardHeight = h;
      this.cdr.markForCheck();
    });
  }
  /** 編集モードか */
  get isEdit() {
    return !!this.editing;
  }
  ngOnInit() {
    if (this.editing) {
      const r = this.editing;
      this.title = r.title;
      this.problem = r.problem;
      this.details = r.details;
      this.deadline = r.deadline ? new Date(r.deadline).toISOString().slice(0, 10) : "";
      this.hasCompensation = r.hasCompensation;
      this.compensationDetails = r.compensationDetails || "";
      return;
    }
    const d = this.draftSvc.load(this.draftKey);
    if (d) {
      this.title = d.title || "";
      this.problem = d.problem || "";
      this.details = d.details || "";
      this.deadline = d.deadline || "";
      this.hasCompensation = !!d.hasCompensation;
      this.compensationDetails = d.compensationDetails || "";
    }
  }
  onFieldChange() {
    if (this.isEdit)
      return;
    this.draftSvc.save(this.draftKey, this.snapshot());
  }
  onBeforeUnload() {
    this.draftSvc.flush(this.draftKey, this.snapshot());
  }
  ngOnDestroy() {
    this.keyboardSub?.unsubscribe();
    if (this.isEdit)
      return;
    const s = this.snapshot();
    if (s.title || s.problem || s.details || s.deadline || s.compensationDetails) {
      this.draftSvc.flush(this.draftKey, s);
    }
  }
  onImageSelected(event) {
    if (this.imageFiles.length < 5) {
      this.imageFiles.push(event.file);
      this.imagePreviewUrls.push(event.previewUrl);
    }
  }
  onImageRemoved() {
    this.imageFiles = [];
    this.imagePreviewUrls = [];
  }
  removeImage(index) {
    this.imageFiles.splice(index, 1);
    this.imagePreviewUrls.splice(index, 1);
  }
  /** fix (2026-04-27 v2): モーダル時は dialogRef.close、ページ時は:
   *  - 成功 (result あり): /community/:id へ navigate して community-detail を再マウント
   *    → 内部の active list (募集/イベント/スレッド/アピール) が ngOnInit で loadXxx 再実行
   *  - キャンセル/失敗 (result なし): location.back で履歴を消費
   */
  closeOrBack(result) {
    if (this.dialogRef) {
      this.dialogRef.close(result);
      return;
    }
    if (result && this.router && this.communityId) {
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate(["/community", this.communityId]);
      });
      return;
    }
    if (this.location && window.history.length > 1) {
      this.location.back();
    } else if (this.router && this.communityId) {
      this.router.navigate(["/community", this.communityId]);
    }
  }
  onCancel() {
    this.closeOrBack();
  }
  onCreate() {
    if (!this.title.trim())
      return;
    const payload = {
      communityId: this.communityId,
      title: this.title.trim(),
      problem: this.problem.trim(),
      details: this.details.trim(),
      deadline: this.deadline ? new Date(this.deadline) : void 0,
      hasCompensation: this.hasCompensation,
      compensationDetails: this.hasCompensation ? this.compensationDetails.trim() : void 0
    };
    if (this.isEdit && this.editing) {
      this.communityService.updateRecruitment(this.editing.id, payload).subscribe((updated) => this.closeOrBack(updated));
      return;
    }
    this.communityService.createRecruitment(payload).subscribe((recruitment) => {
      this.draftSvc.clear(this.draftKey);
      this.closeOrBack(recruitment);
    });
  }
  static {
    this.\u0275fac = function RecruitmentCreateComponent_Factory(t) {
      return new (t || _RecruitmentCreateComponent)(\u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(MAT_DIALOG_DATA, 8), \u0275\u0275directiveInject(Location, 8), \u0275\u0275directiveInject(Router, 8), \u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(FormDraftService), \u0275\u0275directiveInject(KeyboardManagerService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruitmentCreateComponent, selectors: [["app-recruitment-create"]], hostBindings: function RecruitmentCreateComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function RecruitmentCreateComponent_beforeunload_HostBindingHandler() {
          return ctx.onBeforeUnload();
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { communityIdInput: "communityIdInput", editingInput: "editingInput" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 14, consts: [[1, "recruitment-create"], [1, "recruitment-create__title"], [1, "recruitment-create__form"], [1, "recruitment-create__field"], [1, "recruitment-create__label"], [1, "recruitment-create__required"], ["type", "text", "placeholder", "\u52DF\u96C6\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B", 1, "recruitment-create__input", 3, "ngModelChange", "ngModel"], ["placeholder", "\u89E3\u6C7A\u3057\u305F\u3044\u8AB2\u984C\u3084\u80CC\u666F\u3092\u5165\u529B", "rows", "3", 1, "recruitment-create__textarea", 3, "ngModelChange", "ngModel"], ["placeholder", "\u52DF\u96C6\u306E\u8A73\u7D30\u3092\u5165\u529B", "rows", "4", 1, "recruitment-create__textarea", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "recruitment-create__input", 3, "ngModelChange", "ngModel"], [1, "recruitment-create__field", "recruitment-create__field--row"], [1, "recruitment-create__toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "recruitment-create__field", 4, "ngIf"], [1, "recruitment-create__field", "recruitment-create__image-upload-section"], ["class", "recruitment-create__image-previews", 4, "ngIf"], [3, "recommendedSize", "imageSelected", 4, "ngIf"], [1, "recruitment-create__image-hint"], [1, "recruitment-create__actions"], [1, "recruitment-create__cancel-btn", 3, "click"], [1, "recruitment-create__submit-btn", 3, "click", "disabled"], ["type", "text", "placeholder", "\u4F8B: \u6708\u984D10-20\u4E07\u5186", 1, "recruitment-create__input", 3, "ngModelChange", "ngModel"], [1, "recruitment-create__image-previews"], ["class", "recruitment-create__image-thumb", 4, "ngFor", "ngForOf"], [1, "recruitment-create__image-thumb"], [3, "src"], ["type", "button", 1, "recruitment-create__image-remove", 3, "click"], [3, "imageSelected", "recommendedSize"]], template: function RecruitmentCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
        \u0275\u0275text(6, "\u30BF\u30A4\u30C8\u30EB ");
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function RecruitmentCreateComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function RecruitmentCreateComponent_Template_input_ngModelChange_9_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 3)(11, "label", 4);
        \u0275\u0275text(12, "\u8AB2\u984C\u30FB\u80CC\u666F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "textarea", 7);
        \u0275\u0275twoWayListener("ngModelChange", function RecruitmentCreateComponent_Template_textarea_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.problem, $event) || (ctx.problem = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function RecruitmentCreateComponent_Template_textarea_ngModelChange_13_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 3)(15, "label", 4);
        \u0275\u0275text(16, "\u8A73\u7D30");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "textarea", 8);
        \u0275\u0275twoWayListener("ngModelChange", function RecruitmentCreateComponent_Template_textarea_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.details, $event) || (ctx.details = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function RecruitmentCreateComponent_Template_textarea_ngModelChange_17_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 3)(19, "label", 4);
        \u0275\u0275text(20, "\u7DE0\u5207\u65E5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function RecruitmentCreateComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.deadline, $event) || (ctx.deadline = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function RecruitmentCreateComponent_Template_input_ngModelChange_21_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 10)(23, "label", 11)(24, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function RecruitmentCreateComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.hasCompensation, $event) || (ctx.hasCompensation = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function RecruitmentCreateComponent_Template_input_ngModelChange_24_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span");
        \u0275\u0275text(26, "\u5831\u916C\u3042\u308A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, RecruitmentCreateComponent_div_27_Template, 4, 1, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 14)(29, "label", 4);
        \u0275\u0275text(30, "\u753B\u50CF\u3092\u6DFB\u4ED8\uFF08\u6700\u59275\u679A\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, RecruitmentCreateComponent_div_31_Template, 2, 1, "div", 15)(32, RecruitmentCreateComponent_app_image_upload_32_Template, 1, 1, "app-image-upload", 16);
        \u0275\u0275elementStart(33, "p", 17);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 18)(36, "button", 19);
        \u0275\u0275listener("click", function RecruitmentCreateComponent_Template_button_click_36_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(37, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 20);
        \u0275\u0275listener("click", function RecruitmentCreateComponent_Template_button_click_38_listener() {
          return ctx.onCreate();
        });
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("padding-bottom", ctx.keyboardHeight, "px");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit ? "\u52DF\u96C6\u3092\u7DE8\u96C6" : "\u65B0\u898F\u52DF\u96C6\u3092\u4F5C\u6210");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.title);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.problem);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.details);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.deadline);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.hasCompensation);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.hasCompensation);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.imagePreviewUrls.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.imagePreviewUrls.length < 5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.imagePreviewUrls.length, "/5\u679A");
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.title.trim());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "\u66F4\u65B0\u3059\u308B" : "\u6295\u7A3F\u3059\u308B", " ");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, MatDialogModule, MatIconModule, MatIcon, ImageUploadComponent], styles: ['@charset "UTF-8";\n\n\n\n.recruitment-create[_ngcontent-%COMP%] {\n  padding: 24px;\n  width: 100%;\n  max-width: 720px;\n  box-sizing: border-box;\n}\n.recruitment-create__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 24px;\n}\n.recruitment-create__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.recruitment-create__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.recruitment-create__field--row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n}\n.recruitment-create__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #5f6368;\n}\n.recruitment-create__required[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.recruitment-create__input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n}\n.recruitment-create__input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.recruitment-create__textarea[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n  resize: vertical;\n  font-family: inherit;\n}\n.recruitment-create__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.recruitment-create__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #81766e;\n  cursor: pointer;\n}\n.recruitment-create__toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: #ff9800;\n  width: 16px;\n  height: 16px;\n}\n.recruitment-create__image-upload-section[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.recruitment-create__image-previews[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.recruitment-create__image-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e2dfdc;\n}\n.recruitment-create__image-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.recruitment-create__image-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n.recruitment-create__image-remove[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.recruitment-create__image-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  margin: 6px 0 0;\n}\n.recruitment-create__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n}\n.recruitment-create__cancel-btn[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 1px solid #e2dfdc;\n  border-radius: 24px;\n  background: #fff;\n  color: #5f6368;\n  font-size: 14px;\n  cursor: pointer;\n}\n.recruitment-create__cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f6f8fc;\n}\n.recruitment-create__submit-btn[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  border: none;\n  border-radius: 24px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.recruitment-create__submit-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.recruitment-create__submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #e2dfdc;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .recruitment-create[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n    padding: 16px;\n  }\n  .recruitment-create__title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 16px;\n  }\n  .recruitment-create__image-thumb[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n  }\n  .recruitment-create__actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .recruitment-create__cancel-btn[_ngcontent-%COMP%], .recruitment-create__submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=recruitment-create.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruitmentCreateComponent, { className: "RecruitmentCreateComponent", filePath: "src\\app\\features\\community\\components\\recruitment-create\\recruitment-create.component.ts", lineNumber: 33 });
})();

// src/app/features/community/components/appeal-create/appeal-create.component.ts
function AppealCreateComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275elementStart(2, "button", 21);
    \u0275\u0275listener("click", function AppealCreateComponent_div_25_div_1_Template_button_click_2_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeImage(i_r2));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const url_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", url_r4, \u0275\u0275sanitizeUrl);
  }
}
function AppealCreateComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, AppealCreateComponent_div_25_div_1_Template, 5, 1, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.imagePreviewUrls);
  }
}
function AppealCreateComponent_app_image_upload_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-image-upload", 22);
    \u0275\u0275listener("imageSelected", function AppealCreateComponent_app_image_upload_26_Template_app_image_upload_imageSelected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImageSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("recommendedSize", "800 x 600px (4:3)");
  }
}
var AppealCreateComponent = class _AppealCreateComponent {
  /** モーダル時は data、ページ時は Input を使う */
  get communityId() {
    return this.data?.communityId || this.communityIdInput || "";
  }
  get editing() {
    return this.data?.editing || this.editingInput;
  }
  get draftKey() {
    return "appeal-create:" + this.communityId;
  }
  constructor(dialogRef, data, location, router, communityService, draftSvc, keyboard, cdr) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.location = location;
    this.router = router;
    this.communityService = communityService;
    this.draftSvc = draftSvc;
    this.keyboard = keyboard;
    this.cdr = cdr;
    this.title = "";
    this.selfIntro = "";
    this.skillsText = "";
    this.wantToMeet = "";
    this.imageFiles = [];
    this.imagePreviewUrls = [];
    this.keyboardHeight = 0;
    this.keyboardSub = this.keyboard.keyboardHeight$.subscribe((h) => {
      this.keyboardHeight = h;
      this.cdr.markForCheck();
    });
  }
  get isEdit() {
    return !!this.editing;
  }
  ngOnInit() {
    if (this.editing) {
      const a = this.editing;
      this.title = a.title;
      this.selfIntro = a.selfIntro;
      this.skillsText = (a.skills || []).join(", ");
      this.wantToMeet = a.wantToMeet;
      return;
    }
    const d = this.draftSvc.load(this.draftKey);
    if (d) {
      this.title = d.title || "";
      this.selfIntro = d.selfIntro || "";
      this.skillsText = d.skillsText || "";
      this.wantToMeet = d.wantToMeet || "";
    }
  }
  /** ngModelChange から呼ぶ統合ハンドラ (各フィールド入力で draft 保存) */
  onFieldChange() {
    if (this.isEdit)
      return;
    this.draftSvc.save(this.draftKey, {
      title: this.title,
      selfIntro: this.selfIntro,
      skillsText: this.skillsText,
      wantToMeet: this.wantToMeet
    });
  }
  onBeforeUnload() {
    this.draftSvc.flush(this.draftKey, {
      title: this.title,
      selfIntro: this.selfIntro,
      skillsText: this.skillsText,
      wantToMeet: this.wantToMeet
    });
  }
  ngOnDestroy() {
    this.keyboardSub?.unsubscribe();
    if (this.isEdit)
      return;
    if (this.title || this.selfIntro || this.skillsText || this.wantToMeet) {
      this.draftSvc.flush(this.draftKey, {
        title: this.title,
        selfIntro: this.selfIntro,
        skillsText: this.skillsText,
        wantToMeet: this.wantToMeet
      });
    }
  }
  onImageSelected(event) {
    if (this.imageFiles.length < 5) {
      this.imageFiles.push(event.file);
      this.imagePreviewUrls.push(event.previewUrl);
    }
  }
  onImageRemoved() {
    this.imageFiles = [];
    this.imagePreviewUrls = [];
  }
  removeImage(index) {
    this.imageFiles.splice(index, 1);
    this.imagePreviewUrls.splice(index, 1);
  }
  /** fix (2026-04-27 v2): モーダル時は dialogRef.close、ページ時は:
   *  - 成功 (result あり): /community/:id へ navigate して community-detail を再マウント
   *    → 内部の active list (募集/イベント/スレッド/アピール) が ngOnInit で loadXxx 再実行
   *  - キャンセル/失敗 (result なし): location.back で履歴を消費
   */
  closeOrBack(result) {
    if (this.dialogRef) {
      this.dialogRef.close(result);
      return;
    }
    if (result && this.router && this.communityId) {
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate(["/community", this.communityId]);
      });
      return;
    }
    if (this.location && window.history.length > 1) {
      this.location.back();
    } else if (this.router && this.communityId) {
      this.router.navigate(["/community", this.communityId]);
    }
  }
  onCancel() {
    this.closeOrBack();
  }
  onCreate() {
    if (!this.title.trim())
      return;
    const skills = this.skillsText.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
    const payload = {
      communityId: this.communityId,
      title: this.title.trim(),
      selfIntro: this.selfIntro.trim(),
      skills,
      wantToMeet: this.wantToMeet.trim()
    };
    if (this.isEdit && this.editing) {
      this.communityService.updateAppeal(this.editing.id, payload).subscribe((updated) => this.closeOrBack(updated));
      return;
    }
    this.communityService.createAppeal(payload).subscribe((appeal) => {
      this.draftSvc.clear(this.draftKey);
      this.closeOrBack(appeal);
    });
  }
  static {
    this.\u0275fac = function AppealCreateComponent_Factory(t) {
      return new (t || _AppealCreateComponent)(\u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(MAT_DIALOG_DATA, 8), \u0275\u0275directiveInject(Location, 8), \u0275\u0275directiveInject(Router, 8), \u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(FormDraftService), \u0275\u0275directiveInject(KeyboardManagerService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppealCreateComponent, selectors: [["app-appeal-create"]], hostBindings: function AppealCreateComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function AppealCreateComponent_beforeunload_HostBindingHandler() {
          return ctx.onBeforeUnload();
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { communityIdInput: "communityIdInput", editingInput: "editingInput" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 12, consts: [[1, "appeal-create"], [1, "appeal-create__title"], [1, "appeal-create__form"], [1, "appeal-create__field"], [1, "appeal-create__label"], [1, "appeal-create__required"], ["type", "text", "placeholder", "\u30A2\u30D4\u30FC\u30EB\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B", 1, "appeal-create__input", 3, "ngModelChange", "ngModel"], ["placeholder", "\u7D4C\u6B74\u3084\u30B9\u30AD\u30EB\u306E\u7D39\u4ECB\u3092\u5165\u529B", "rows", "4", 1, "appeal-create__textarea", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u4F8B: Python, \u6A5F\u68B0\u5B66\u7FD2, \u30C7\u30FC\u30BF\u5206\u6790", 1, "appeal-create__input", 3, "ngModelChange", "ngModel"], ["placeholder", "\u51FA\u4F1A\u3044\u305F\u3044\u4EBA\u7269\u50CF\u3092\u5165\u529B", "rows", "3", 1, "appeal-create__textarea", 3, "ngModelChange", "ngModel"], [1, "appeal-create__field", "appeal-create__image-upload-section"], ["class", "appeal-create__image-previews", 4, "ngIf"], [3, "recommendedSize", "imageSelected", 4, "ngIf"], [1, "appeal-create__image-hint"], [1, "appeal-create__actions"], [1, "appeal-create__cancel-btn", 3, "click"], [1, "appeal-create__submit-btn", 3, "click", "disabled"], [1, "appeal-create__image-previews"], ["class", "appeal-create__image-thumb", 4, "ngFor", "ngForOf"], [1, "appeal-create__image-thumb"], [3, "src"], ["type", "button", 1, "appeal-create__image-remove", 3, "click"], [3, "imageSelected", "recommendedSize"]], template: function AppealCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
        \u0275\u0275text(6, "\u30BF\u30A4\u30C8\u30EB ");
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AppealCreateComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AppealCreateComponent_Template_input_ngModelChange_9_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 3)(11, "label", 4);
        \u0275\u0275text(12, "\u81EA\u5DF1\u7D39\u4ECB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "textarea", 7);
        \u0275\u0275twoWayListener("ngModelChange", function AppealCreateComponent_Template_textarea_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selfIntro, $event) || (ctx.selfIntro = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AppealCreateComponent_Template_textarea_ngModelChange_13_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 3)(15, "label", 4);
        \u0275\u0275text(16, "\u30B9\u30AD\u30EB\uFF08\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function AppealCreateComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.skillsText, $event) || (ctx.skillsText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AppealCreateComponent_Template_input_ngModelChange_17_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 3)(19, "label", 4);
        \u0275\u0275text(20, "\u3053\u3093\u306A\u4EBA\u3068\u51FA\u4F1A\u3044\u305F\u3044");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "textarea", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AppealCreateComponent_Template_textarea_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.wantToMeet, $event) || (ctx.wantToMeet = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AppealCreateComponent_Template_textarea_ngModelChange_21_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 10)(23, "label", 4);
        \u0275\u0275text(24, "\u753B\u50CF\u3092\u6DFB\u4ED8\uFF08\u6700\u59275\u679A\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, AppealCreateComponent_div_25_Template, 2, 1, "div", 11)(26, AppealCreateComponent_app_image_upload_26_Template, 1, 1, "app-image-upload", 12);
        \u0275\u0275elementStart(27, "p", 13);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 14)(30, "button", 15);
        \u0275\u0275listener("click", function AppealCreateComponent_Template_button_click_30_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(31, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 16);
        \u0275\u0275listener("click", function AppealCreateComponent_Template_button_click_32_listener() {
          return ctx.onCreate();
        });
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("padding-bottom", ctx.keyboardHeight, "px");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit ? "\u30A2\u30D4\u30FC\u30EB\u3092\u7DE8\u96C6" : "\u65B0\u898F\u30A2\u30D4\u30FC\u30EB\u3092\u4F5C\u6210");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.title);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selfIntro);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.skillsText);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.wantToMeet);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.imagePreviewUrls.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.imagePreviewUrls.length < 5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.imagePreviewUrls.length, "/5\u679A");
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.title.trim());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "\u66F4\u65B0\u3059\u308B" : "\u6295\u7A3F\u3059\u308B", " ");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatDialogModule, MatIconModule, MatIcon, ImageUploadComponent], styles: ['@charset "UTF-8";\n\n\n\n.appeal-create[_ngcontent-%COMP%] {\n  padding: 24px;\n  width: 100%;\n  max-width: 720px;\n  box-sizing: border-box;\n}\n.appeal-create__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 24px;\n}\n.appeal-create__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.appeal-create__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.appeal-create__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #5f6368;\n}\n.appeal-create__required[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.appeal-create__input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n}\n.appeal-create__input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.appeal-create__textarea[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n  resize: vertical;\n  font-family: inherit;\n}\n.appeal-create__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.appeal-create__image-upload-section[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.appeal-create__image-previews[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.appeal-create__image-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e2dfdc;\n}\n.appeal-create__image-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.appeal-create__image-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n.appeal-create__image-remove[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.appeal-create__image-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  margin: 6px 0 0;\n}\n.appeal-create__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n}\n.appeal-create__cancel-btn[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 1px solid #e2dfdc;\n  border-radius: 24px;\n  background: #fff;\n  color: #5f6368;\n  font-size: 14px;\n  cursor: pointer;\n}\n.appeal-create__cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f6f8fc;\n}\n.appeal-create__submit-btn[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  border: none;\n  border-radius: 24px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.appeal-create__submit-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.appeal-create__submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #e2dfdc;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .appeal-create[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n    padding: 16px;\n  }\n  .appeal-create__title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 16px;\n  }\n  .appeal-create__image-thumb[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n  }\n  .appeal-create__actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .appeal-create__cancel-btn[_ngcontent-%COMP%], .appeal-create__submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=appeal-create.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppealCreateComponent, { className: "AppealCreateComponent", filePath: "src\\app\\features\\community\\components\\appeal-create\\appeal-create.component.ts", lineNumber: 35 });
})();

// src/app/features/community/components/thread-create/thread-create.component.ts
var ThreadCreateComponent = class _ThreadCreateComponent {
  /** モーダル時は data、ページ時は Input を使う */
  get communityId() {
    return this.data?.communityId || this.communityIdInput || "";
  }
  get editing() {
    return this.data?.editing || this.editingInput;
  }
  get draftKey() {
    return "thread-create:" + this.communityId;
  }
  snapshot() {
    return { title: this.title, content: this.content };
  }
  get isEdit() {
    return !!this.editing;
  }
  constructor(dialogRef, data, location, router, draftSvc, keyboard, cdr, communityService, notification) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.location = location;
    this.router = router;
    this.draftSvc = draftSvc;
    this.keyboard = keyboard;
    this.cdr = cdr;
    this.communityService = communityService;
    this.notification = notification;
    this.title = "";
    this.content = "";
    this.imageFile = null;
    this.keyboardHeight = 0;
    this.keyboardSub = this.keyboard.keyboardHeight$.subscribe((h) => {
      this.keyboardHeight = h;
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    if (this.editing) {
      this.title = this.editing.title;
      this.content = this.editing.content;
      return;
    }
    const d = this.draftSvc.load(this.draftKey);
    if (d) {
      this.title = d.title || "";
      this.content = d.content || "";
    }
  }
  onFieldChange() {
    if (this.isEdit)
      return;
    this.draftSvc.save(this.draftKey, this.snapshot());
  }
  onBeforeUnload() {
    if (this.isEdit)
      return;
    this.draftSvc.flush(this.draftKey, this.snapshot());
  }
  ngOnDestroy() {
    this.keyboardSub?.unsubscribe();
    if (this.isEdit)
      return;
    const s = this.snapshot();
    if (s.title || s.content)
      this.draftSvc.flush(this.draftKey, s);
  }
  onImageSelected(event) {
    this.imageFile = event.file;
  }
  onImageRemoved() {
    this.imageFile = null;
  }
  /** fix (2026-04-27 v2): モーダル時は dialogRef.close、ページ時は:
   *  - 成功 (result あり): /community/:id へ navigate して community-detail を再マウント
   *    → 内部の active list (募集/イベント/スレッド/アピール) が ngOnInit で loadXxx 再実行
   *  - キャンセル/失敗 (result なし): location.back で履歴を消費
   */
  closeOrBack(result) {
    if (this.dialogRef) {
      this.dialogRef.close(result);
      return;
    }
    if (result && this.router && this.communityId) {
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate(["/community", this.communityId]);
      });
      return;
    }
    if (this.location && window.history.length > 1) {
      this.location.back();
    } else if (this.router && this.communityId) {
      this.router.navigate(["/community", this.communityId]);
    }
  }
  onSubmit() {
    if (!(this.title.trim() && this.content.trim()))
      return;
    this.draftSvc.clear(this.draftKey);
    const payload = {
      title: this.title.trim(),
      content: this.content.trim(),
      editing: this.editing
    };
    if (this.isEdit) {
      this.closeOrBack(payload);
      return;
    }
    this.communityService.createThread({
      communityId: this.communityId,
      title: payload.title,
      content: payload.content
    }).subscribe({
      next: (created) => {
        this.notification.success("\u30B9\u30EC\u30C3\u30C9\u3092\u6295\u7A3F\u3057\u307E\u3057\u305F");
        this.closeOrBack(__spreadProps(__spreadValues({}, payload), { created }));
      },
      error: () => {
        this.notification.warn("\u30B9\u30EC\u30C3\u30C9\u306E\u6295\u7A3F\u306B\u5931\u6557\u3057\u307E\u3057\u305F");
      }
    });
  }
  onCancel() {
    this.closeOrBack();
  }
  static {
    this.\u0275fac = function ThreadCreateComponent_Factory(t) {
      return new (t || _ThreadCreateComponent)(\u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(MAT_DIALOG_DATA, 8), \u0275\u0275directiveInject(Location, 8), \u0275\u0275directiveInject(Router, 8), \u0275\u0275directiveInject(FormDraftService), \u0275\u0275directiveInject(KeyboardManagerService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThreadCreateComponent, selectors: [["app-thread-create"]], hostBindings: function ThreadCreateComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function ThreadCreateComponent_beforeunload_HostBindingHandler() {
          return ctx.onBeforeUnload();
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { communityIdInput: "communityIdInput", editingInput: "editingInput" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 7, consts: [[1, "thread-create"], [1, "thread-create__header"], [1, "thread-create__heading"], [1, "thread-create__close", 3, "click"], [1, "thread-create__body"], [1, "thread-create__field"], [1, "thread-create__label"], ["type", "text", "placeholder", "\u30B9\u30EC\u30C3\u30C9\u306E\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B...", 1, "thread-create__input", 3, "ngModelChange", "ngModel"], ["placeholder", "\u30B9\u30EC\u30C3\u30C9\u306E\u5185\u5BB9\u3092\u5165\u529B...", "rows", "6", 1, "thread-create__textarea", 3, "ngModelChange", "ngModel"], ["recommendedSize", "1200 x 630px (16:9)", 3, "imageSelected", "imageRemoved"], [1, "thread-create__footer"], [1, "thread-create__cancel-btn", 3, "click"], [1, "thread-create__submit-btn", 3, "click", "disabled"]], template: function ThreadCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function ThreadCreateComponent_Template_button_click_4_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275elementStart(5, "mat-icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label", 6);
        \u0275\u0275text(10, "\u30BF\u30A4\u30C8\u30EB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ThreadCreateComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ThreadCreateComponent_Template_input_ngModelChange_11_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "label", 6);
        \u0275\u0275text(14, "\u5185\u5BB9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "textarea", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ThreadCreateComponent_Template_textarea_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.content, $event) || (ctx.content = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ThreadCreateComponent_Template_textarea_ngModelChange_15_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 4)(17, "div", 5)(18, "label", 6);
        \u0275\u0275text(19, "\u753B\u50CF\u3092\u6DFB\u4ED8\uFF08\u4EFB\u610F\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "app-image-upload", 9);
        \u0275\u0275listener("imageSelected", function ThreadCreateComponent_Template_app_image_upload_imageSelected_20_listener($event) {
          return ctx.onImageSelected($event);
        })("imageRemoved", function ThreadCreateComponent_Template_app_image_upload_imageRemoved_20_listener() {
          return ctx.onImageRemoved();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 10)(22, "button", 11);
        \u0275\u0275listener("click", function ThreadCreateComponent_Template_button_click_22_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(23, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 12);
        \u0275\u0275listener("click", function ThreadCreateComponent_Template_button_click_24_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("padding-bottom", ctx.keyboardHeight, "px");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isEdit ? "\u30B9\u30EC\u30C3\u30C9\u3092\u7DE8\u96C6" : "\u65B0\u898F\u30B9\u30EC\u30C3\u30C9\u3092\u4F5C\u6210");
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.title);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.content);
        \u0275\u0275advance(9);
        \u0275\u0275property("disabled", !ctx.title.trim() || !ctx.content.trim());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "\u66F4\u65B0\u3059\u308B" : "\u6295\u7A3F\u3059\u308B", " ");
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatDialogModule, MatIconModule, MatIcon, ImageUploadComponent], styles: ["\n\n.thread-create__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #e2dfdc;\n}\n.thread-create__heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0;\n}\n.thread-create__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #5f6368;\n  padding: 4px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.thread-create__close[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.thread-create__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.thread-create__field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.thread-create__field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.thread-create__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n  margin-bottom: 8px;\n}\n.thread-create__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n  box-sizing: border-box;\n}\n.thread-create__input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.thread-create__input[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.thread-create__textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n  resize: vertical;\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.thread-create__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.thread-create__textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.thread-create__image-upload-section[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.thread-create__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid #e2dfdc;\n}\n.thread-create__cancel-btn[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 1px solid #e2dfdc;\n  border-radius: 24px;\n  background: #fff;\n  color: #5f6368;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.thread-create__cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.thread-create__submit-btn[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  border: none;\n  border-radius: 24px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.thread-create__submit-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.thread-create__submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #e0e0e0;\n  color: #9e9e9e;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=thread-create.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThreadCreateComponent, { className: "ThreadCreateComponent", filePath: "src\\app\\features\\community\\components\\thread-create\\thread-create.component.ts", lineNumber: 34 });
})();

// src/app/features/community/components/event-create/event-create.component.ts
function EventCreateComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 4);
    \u0275\u0275text(2, "\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_31_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.meetingUrl, $event) || (ctx_r1.meetingUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EventCreateComponent_div_31_Template_input_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFieldChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.meetingUrl);
  }
}
function EventCreateComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "img", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
var EventCreateComponent = class _EventCreateComponent {
  /** モーダル時は data、ページ時は Input を使う */
  get communityId() {
    return this.data?.communityId || this.communityIdInput || "";
  }
  get editing() {
    return this.data?.editing || this.editingInput;
  }
  get draftKey() {
    return "event-create:" + this.communityId;
  }
  snapshot() {
    return {
      title: this.title,
      description: this.description,
      date: this.date,
      endDate: this.endDate,
      location: this.location,
      isOnline: this.isOnline,
      meetingUrl: this.meetingUrl,
      maxParticipants: this.maxParticipants,
      tagsInput: this.tagsInput,
      imageUrl: this.imageUrl
    };
  }
  constructor(dialogRef, data, location_, router, communityService, draftSvc, keyboard, cdr) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.location_ = location_;
    this.router = router;
    this.communityService = communityService;
    this.draftSvc = draftSvc;
    this.keyboard = keyboard;
    this.cdr = cdr;
    this.title = "";
    this.description = "";
    this.date = "";
    this.endDate = "";
    this.location = "";
    this.isOnline = false;
    this.meetingUrl = "";
    this.maxParticipants = null;
    this.tagsInput = "";
    this.imageUrl = "";
    this.keyboardHeight = 0;
    this.keyboardSub = this.keyboard.keyboardHeight$.subscribe((h) => {
      this.keyboardHeight = h;
      this.cdr.markForCheck();
    });
  }
  get isEdit() {
    return !!this.editing;
  }
  ngOnInit() {
    if (this.editing) {
      const e = this.editing;
      this.title = e.title;
      this.description = e.description;
      this.date = e.date ? new Date(e.date).toISOString().slice(0, 16) : "";
      this.endDate = e.endDate ? new Date(e.endDate).toISOString().slice(0, 16) : "";
      this.location = e.location;
      this.isOnline = !!e.isOnline;
      this.meetingUrl = e.meetingUrl || "";
      this.maxParticipants = e.maxParticipants ?? null;
      this.tagsInput = (e.tags || []).join(", ");
      this.imageUrl = e.imageUrl || "";
      return;
    }
    const d = this.draftSvc.load(this.draftKey);
    if (d) {
      this.title = d.title || "";
      this.description = d.description || "";
      this.date = d.date || "";
      this.endDate = d.endDate || "";
      this.location = d.location || "";
      this.isOnline = !!d.isOnline;
      this.meetingUrl = d.meetingUrl || "";
      this.maxParticipants = d.maxParticipants ?? null;
      this.tagsInput = d.tagsInput || "";
      this.imageUrl = d.imageUrl || "";
    }
  }
  onFieldChange() {
    if (this.isEdit)
      return;
    this.draftSvc.save(this.draftKey, this.snapshot());
  }
  onBeforeUnload() {
    if (this.isEdit)
      return;
    this.draftSvc.flush(this.draftKey, this.snapshot());
  }
  ngOnDestroy() {
    this.keyboardSub?.unsubscribe();
    if (this.isEdit)
      return;
    const s = this.snapshot();
    if (s.title || s.description || s.date || s.location || s.tagsInput) {
      this.draftSvc.flush(this.draftKey, s);
    }
  }
  /** fix (2026-04-27 v2): モーダル時は dialogRef.close、ページ時は:
   *  - 成功 (result あり): /community/:id へ navigate して community-detail を再マウント
   *    → 内部の active list (募集/イベント/スレッド/アピール) が ngOnInit で loadXxx 再実行
   *  - キャンセル/失敗 (result なし): location.back で履歴を消費
   */
  closeOrBack(result) {
    if (this.dialogRef) {
      this.dialogRef.close(result);
      return;
    }
    if (result && this.router && this.communityId) {
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate(["/community", this.communityId]);
      });
      return;
    }
    if (this.location_ && window.history.length > 1) {
      this.location_.back();
    } else if (this.router && this.communityId) {
      this.router.navigate(["/community", this.communityId]);
    }
  }
  onCancel() {
    this.closeOrBack();
  }
  onCreate() {
    if (!this.title.trim())
      return;
    const tags = this.tagsInput.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
    const payload = {
      communityId: this.communityId,
      title: this.title.trim(),
      description: this.description.trim(),
      imageUrl: this.imageUrl.trim() || void 0,
      date: this.date ? new Date(this.date) : /* @__PURE__ */ new Date(),
      endDate: this.endDate ? new Date(this.endDate) : void 0,
      location: this.location.trim(),
      isOnline: this.isOnline,
      meetingUrl: this.isOnline ? this.meetingUrl.trim() : void 0,
      maxParticipants: this.maxParticipants || void 0,
      tags: tags.length > 0 ? tags : void 0
    };
    if (this.isEdit && this.editing) {
      this.communityService.updateEvent(this.editing.id, payload).subscribe((updated) => this.closeOrBack(updated));
      return;
    }
    this.communityService.createEvent(payload).subscribe((event) => {
      this.draftSvc.clear(this.draftKey);
      this.closeOrBack(event);
    });
  }
  static {
    this.\u0275fac = function EventCreateComponent_Factory(t) {
      return new (t || _EventCreateComponent)(\u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(MAT_DIALOG_DATA, 8), \u0275\u0275directiveInject(Location, 8), \u0275\u0275directiveInject(Router, 8), \u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(FormDraftService), \u0275\u0275directiveInject(KeyboardManagerService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCreateComponent, selectors: [["app-event-create"]], hostBindings: function EventCreateComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function EventCreateComponent_beforeunload_HostBindingHandler() {
          return ctx.onBeforeUnload();
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { communityIdInput: "communityIdInput", editingInput: "editingInput" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 16, consts: [[1, "event-create"], [1, "event-create__title"], [1, "event-create__form"], [1, "event-create__field"], [1, "event-create__label"], [1, "event-create__required"], ["type", "text", "placeholder", "\u30A4\u30D9\u30F3\u30C8\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B", 1, "event-create__input", 3, "ngModelChange", "ngModel"], ["placeholder", "\u30A4\u30D9\u30F3\u30C8\u306E\u8AAC\u660E\u3092\u5165\u529B", "rows", "4", 1, "event-create__textarea", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", 1, "event-create__input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u958B\u50AC\u5834\u6240\u3092\u5165\u529B", 1, "event-create__input", 3, "ngModelChange", "ngModel"], [1, "event-create__field", "event-create__field--row"], [1, "event-create__toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "event-create__field", 4, "ngIf"], ["type", "number", "placeholder", "\u672A\u8A2D\u5B9A\u306E\u5834\u5408\u306F\u4E0A\u9650\u306A\u3057", "min", "1", 1, "event-create__input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u4F8B: React, TypeScript, \u52C9\u5F37\u4F1A", 1, "event-create__input", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "\u753B\u50CFURL\u3092\u5165\u529B", 1, "event-create__input", 3, "ngModelChange", "ngModel"], ["class", "event-create__image-preview", 4, "ngIf"], [1, "event-create__image-info"], [1, "event-create__actions"], [1, "event-create__cancel-btn", 3, "click"], [1, "event-create__submit-btn", 3, "click", "disabled"], ["type", "url", "placeholder", "https://zoom.us/j/...", 1, "event-create__input", 3, "ngModelChange", "ngModel"], [1, "event-create__image-preview"], ["alt", "\u30D7\u30EC\u30D3\u30E5\u30FC", 3, "src"]], template: function EventCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
        \u0275\u0275text(6, "\u30BF\u30A4\u30C8\u30EB ");
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_9_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 3)(11, "label", 4);
        \u0275\u0275text(12, "\u8AAC\u660E");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "textarea", 7);
        \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_textarea_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EventCreateComponent_Template_textarea_ngModelChange_13_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 3)(15, "label", 4);
        \u0275\u0275text(16, "\u958B\u50AC\u65E5\u6642");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.date, $event) || (ctx.date = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_17_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 3)(19, "label", 4);
        \u0275\u0275text(20, "\u7D42\u4E86\u65E5\u6642\uFF08\u4EFB\u610F\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_21_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 3)(23, "label", 4);
        \u0275\u0275text(24, "\u5834\u6240");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.location, $event) || (ctx.location = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_25_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 10)(27, "label", 11)(28, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isOnline, $event) || (ctx.isOnline = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_28_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "\u30AA\u30F3\u30E9\u30A4\u30F3\u958B\u50AC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(31, EventCreateComponent_div_31_Template, 4, 1, "div", 13);
        \u0275\u0275elementStart(32, "div", 3)(33, "label", 4);
        \u0275\u0275text(34, "\u6700\u5927\u53C2\u52A0\u4EBA\u6570\uFF08\u4EFB\u610F\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.maxParticipants, $event) || (ctx.maxParticipants = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_35_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 3)(37, "label", 4);
        \u0275\u0275text(38, "\u30BF\u30B0\uFF08\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.tagsInput, $event) || (ctx.tagsInput = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_39_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 3)(41, "label", 4);
        \u0275\u0275text(42, "\u753B\u50CF\u3092\u8FFD\u52A0\uFF08\u4EFB\u610F\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.imageUrl, $event) || (ctx.imageUrl = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_43_listener() {
          return ctx.onFieldChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, EventCreateComponent_div_44_Template, 2, 1, "div", 17);
        \u0275\u0275elementStart(45, "div", 18);
        \u0275\u0275text(46, " \u63A8\u5968\u30B5\u30A4\u30BA: 1200 x 630px / \u5BFE\u5FDC\u5F62\u5F0F: JPG, PNG, GIF, WebP / \u6700\u59275MB ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 19)(48, "button", 20);
        \u0275\u0275listener("click", function EventCreateComponent_Template_button_click_48_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(49, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 21);
        \u0275\u0275listener("click", function EventCreateComponent_Template_button_click_50_listener() {
          return ctx.onCreate();
        });
        \u0275\u0275text(51);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("padding-bottom", ctx.keyboardHeight, "px");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit ? "\u30A4\u30D9\u30F3\u30C8\u3092\u7DE8\u96C6" : "\u30A4\u30D9\u30F3\u30C8\u3092\u4F5C\u6210");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.title);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.description);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.date);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.location);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.isOnline);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isOnline);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.maxParticipants);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.tagsInput);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.imageUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.imageUrl);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", !ctx.title.trim());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "\u66F4\u65B0\u3059\u308B" : "\u4F5C\u6210\u3059\u308B", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, NgModel, MatDialogModule], styles: ['@charset "UTF-8";\n\n\n\n.event-create[_ngcontent-%COMP%] {\n  padding: 24px;\n  width: 100%;\n  max-width: 720px;\n  box-sizing: border-box;\n}\n.event-create__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 24px;\n}\n.event-create__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.event-create__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.event-create__field--row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n}\n.event-create__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #5f6368;\n}\n.event-create__required[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.event-create__input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n}\n.event-create__input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.event-create__textarea[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n  resize: vertical;\n  font-family: inherit;\n}\n.event-create__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.event-create__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #81766e;\n  cursor: pointer;\n}\n.event-create__toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: #ff9800;\n  width: 16px;\n  height: 16px;\n}\n.event-create__image-preview[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n  max-height: 160px;\n  margin-top: 4px;\n}\n.event-create__image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.event-create__image-info[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  margin-top: 2px;\n}\n.event-create__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n}\n.event-create__cancel-btn[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 1px solid #e2dfdc;\n  border-radius: 24px;\n  background: #fff;\n  color: #5f6368;\n  font-size: 14px;\n  cursor: pointer;\n}\n.event-create__cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f6f8fc;\n}\n.event-create__submit-btn[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  border: none;\n  border-radius: 24px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.event-create__submit-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.event-create__submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #e2dfdc;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .event-create[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n    padding: 16px;\n  }\n  .event-create__title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 16px;\n  }\n  .event-create__actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .event-create__cancel-btn[_ngcontent-%COMP%], .event-create__submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=event-create.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCreateComponent, { className: "EventCreateComponent", filePath: "src\\app\\features\\community\\components\\event-create\\event-create.component.ts", lineNumber: 32 });
})();

export {
  FormDraftService,
  RecruitmentCreateComponent,
  AppealCreateComponent,
  ThreadCreateComponent,
  EventCreateComponent
};
//# sourceMappingURL=chunk-WAEBYP66.js.map
