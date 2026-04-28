import {
  SettingsTabNavComponent
} from "./chunk-TZAQ3ICD.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipsModule
} from "./chunk-O7H76VQG.js";
import {
  ConfirmDialogService
} from "./chunk-3K5GTNE6.js";
import {
  KeyboardManagerService
} from "./chunk-XACQWZ45.js";
import "./chunk-NWSZROQH.js";
import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-YF2NDTP4.js";
import "./chunk-VOAOX4DE.js";
import {
  COMMA,
  ENTER,
  MatIcon,
  MatIconModule,
  Title
} from "./chunk-MPKYFQD7.js";
import {
  ChangeDetectorRef,
  CommonModule,
  NgForOf,
  NgIf,
  __async,
  __spreadProps,
  __spreadValues,
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-3YYMYGX4.js";

// src/app/features/settings/pages/profile-page/profile-page.component.ts
var _c0 = ["avatarCanvas"];
function ProfilePageComponent_img_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 55);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "scale(" + ctx_r1.avatarScale + ")");
    \u0275\u0275property("src", ctx_r1.avatarPreview, \u0275\u0275sanitizeUrl);
  }
}
function ProfilePageComponent_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function ProfilePageComponent_label_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 56)(1, "span", 57);
    \u0275\u0275text(2, "\u30B5\u30A4\u30BA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 58);
    \u0275\u0275listener("input", function ProfilePageComponent_label_19_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarScaleChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.avatarScale);
  }
}
function ProfilePageComponent_mat_icon_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 59);
  }
}
function ProfilePageComponent_span_146_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 61);
    \u0275\u0275listener("click", function ProfilePageComponent_span_146_Template_button_click_2_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSkill(i_r5));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r6, " ");
  }
}
function ProfilePageComponent_div_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "span", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 65);
    \u0275\u0275listener("click", function ProfilePageComponent_div_154_Template_button_click_4_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeCareer(i_r8));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \u524A\u9664 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16)(9, "div", 17)(10, "label", 18);
    \u0275\u0275text(11, "\u958B\u59CB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "label", 18);
    \u0275\u0275text(15, "\u7D42\u4E86");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17)(19, "label", 18);
    \u0275\u0275text(20, "\u4F1A\u793E\u540D");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 17)(23, "label", 18);
    \u0275\u0275text(24, "\u5F79\u8077");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 17)(27, "label", 18);
    \u0275\u0275text(28, "\u8AAC\u660E");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "textarea", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    \u0275\u0275property("formGroupName", i_r8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u7D4C\u6B74 ", i_r8 + 1, "");
  }
}
function ProfilePageComponent_div_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "span", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 65);
    \u0275\u0275listener("click", function ProfilePageComponent_div_163_Template_button_click_4_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeEducation(i_r10));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \u524A\u9664 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16)(9, "div", 17)(10, "label", 18);
    \u0275\u0275text(11, "\u958B\u59CB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "label", 18);
    \u0275\u0275text(15, "\u7D42\u4E86");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 17)(18, "label", 18);
    \u0275\u0275text(19, "\u5B66\u6821\u540D");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "label", 18);
    \u0275\u0275text(23, "\u5B66\u90E8\u30FB\u5B66\u79D1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    \u0275\u0275property("formGroupName", i_r10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u5B66\u6B74 ", i_r10 + 1, "");
  }
}
function ProfilePageComponent_div_173_img_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 89);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("transform", "scale(" + ctx_r1.avatarZoom + ") translate(" + ctx_r1.avatarPanX + "px, " + ctx_r1.avatarPanY + "px)");
    \u0275\u0275property("src", ctx_r1.avatarEditorSrc, \u0275\u0275sanitizeUrl);
  }
}
function ProfilePageComponent_div_173_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275listener("click", function ProfilePageComponent_div_173_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarEditorCancel());
    });
    \u0275\u0275elementStart(1, "div", 74);
    \u0275\u0275listener("click", function ProfilePageComponent_div_173_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 75)(3, "h2");
    \u0275\u0275text(4, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u753B\u50CF\u306E\u8ABF\u6574");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 76);
    \u0275\u0275listener("click", function ProfilePageComponent_div_173_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarEditorCancel());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 77)(9, "div", 78);
    \u0275\u0275listener("mousedown", function ProfilePageComponent_div_173_Template_div_mousedown_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarDragStart($event));
    })("mousemove", function ProfilePageComponent_div_173_Template_div_mousemove_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarDragMove($event));
    })("mouseup", function ProfilePageComponent_div_173_Template_div_mouseup_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarDragEnd());
    })("mouseleave", function ProfilePageComponent_div_173_Template_div_mouseleave_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarDragEnd());
    })("touchstart", function ProfilePageComponent_div_173_Template_div_touchstart_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarTouchStart($event));
    })("touchmove", function ProfilePageComponent_div_173_Template_div_touchmove_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarTouchMove($event));
    })("touchend", function ProfilePageComponent_div_173_Template_div_touchend_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarDragEnd());
    });
    \u0275\u0275elementStart(10, "div", 79);
    \u0275\u0275template(11, ProfilePageComponent_div_173_img_11_Template, 1, 3, "img", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 81)(13, "button", 82);
    \u0275\u0275listener("click", function ProfilePageComponent_div_173_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarZoomOut());
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 83);
    \u0275\u0275listener("input", function ProfilePageComponent_div_173_Template_input_input_16_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarZoomChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 84);
    \u0275\u0275listener("click", function ProfilePageComponent_div_173_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarZoomIn());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "p", 85);
    \u0275\u0275text(21, "\u30C9\u30E9\u30C3\u30B0\u3067\u4F4D\u7F6E\u3092\u8ABF\u6574\u3001\u30B9\u30E9\u30A4\u30C0\u30FC\u3067\u30BA\u30FC\u30E0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 86)(23, "button", 87);
    \u0275\u0275listener("click", function ProfilePageComponent_div_173_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarEditorCancel());
    });
    \u0275\u0275text(24, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 88);
    \u0275\u0275listener("click", function ProfilePageComponent_div_173_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarSave());
    });
    \u0275\u0275text(26, "\u4FDD\u5B58");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.avatarEditorSrc);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.avatarZoom);
  }
}
var ProfilePageComponent = class _ProfilePageComponent {
  static {
    this.STORAGE_KEY = "schecon.profile.v1";
  }
  constructor(fb, titleService, cdr, notification, confirmDialog, keyboard) {
    this.fb = fb;
    this.titleService = titleService;
    this.cdr = cdr;
    this.notification = notification;
    this.confirmDialog = confirmDialog;
    this.keyboard = keyboard;
    this.keyboardHeight = 0;
    this.avatarPreview = null;
    this.skills = [];
    this.separatorKeyCodes = [ENTER, COMMA];
    this.avatarScale = 1;
    this.showAvatarEditor = false;
    this.avatarEditorSrc = null;
    this.avatarZoom = 1;
    this.avatarPanX = 0;
    this.avatarPanY = 0;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.panStartX = 0;
    this.panStartY = 0;
  }
  ngOnInit() {
    this.titleService.setTitle('\u30DE\u30A4\u30DA\u30FC\u30B8\u30FB\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB | \u65E5\u7A0B\u8ABF\u6574\u30C4\u30FC\u30EB"\u30B9\u30B1\u30B3\u30F3"');
    this.initForm();
    this.loadProfileFromStorage();
    this.keyboardSub = this.keyboard.keyboardHeight$.subscribe((h) => {
      this.keyboardHeight = h;
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.keyboardSub?.unsubscribe();
  }
  /* 修正 No.32/37 (2026-04-25): localStorage からプロフィール情報を読み込む */
  loadProfileFromStorage() {
    try {
      const raw = typeof localStorage !== "undefined" ? localStorage.getItem(_ProfilePageComponent.STORAGE_KEY) : null;
      if (!raw)
        return;
      const data = JSON.parse(raw);
      if (!data || typeof data !== "object")
        return;
      const primitiveKeys = [
        "lastName",
        "firstName",
        "furigana",
        "company",
        "department",
        "jobTitle",
        "catchphrase",
        "bio",
        "birthplace",
        "birthday",
        "phone",
        "address",
        "website",
        "facebook",
        "twitter",
        "instagram"
      ];
      const patch = {};
      primitiveKeys.forEach((k) => {
        if (data[k] != null)
          patch[k] = data[k];
      });
      this.profileForm.patchValue(patch);
      if (Array.isArray(data.careers)) {
        this.careers.clear();
        data.careers.forEach((c) => {
          this.careers.push(this.fb.group({
            periodFrom: [c?.periodFrom || ""],
            periodTo: [c?.periodTo || ""],
            company: [c?.company || ""],
            position: [c?.position || ""],
            description: [c?.description || ""]
          }));
        });
      }
      if (Array.isArray(data.educations)) {
        this.educations.clear();
        data.educations.forEach((e) => {
          this.educations.push(this.fb.group({
            periodFrom: [e?.periodFrom || ""],
            periodTo: [e?.periodTo || ""],
            school: [e?.school || ""],
            major: [e?.major || ""]
          }));
        });
      }
      if (Array.isArray(data.skills)) {
        this.skills = [...data.skills];
      }
      if (typeof data.avatarPreview === "string" && data.avatarPreview) {
        this.avatarPreview = data.avatarPreview;
      }
      if (typeof data.avatarScale === "number" && data.avatarScale > 0) {
        this.avatarScale = data.avatarScale;
      }
      this.cdr.markForCheck();
    } catch (err) {
      console.warn("[ProfilePage] failed to load profile from storage:", err);
    }
  }
  initForm() {
    this.profileForm = this.fb.group({
      // プロフィール情報
      lastName: ["", Validators.required],
      firstName: ["", Validators.required],
      furigana: [""],
      company: [""],
      department: [""],
      jobTitle: [""],
      catchphrase: [""],
      bio: [""],
      birthplace: [""],
      birthday: [""],
      // 連絡先
      phone: [""],
      address: [""],
      website: [""],
      // SNS
      facebook: [""],
      twitter: [""],
      instagram: [""],
      // 経歴 (FormArray)
      careers: this.fb.array([]),
      // 学歴 (FormArray)
      educations: this.fb.array([])
    });
  }
  // === アバター ===
  onAvatarChange(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.size > 5 * 1024 * 1024) {
        this.notification.error("\u30D5\u30A1\u30A4\u30EB\u30B5\u30A4\u30BA\u306F5MB\u4EE5\u4E0B\u306B\u3057\u3066\u304F\u3060\u3055\u3044");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarEditorSrc = reader.result;
        this.avatarZoom = 1;
        this.avatarPanX = 0;
        this.avatarPanY = 0;
        this.showAvatarEditor = true;
        this.cdr.markForCheck();
      };
      reader.readAsDataURL(file);
    }
  }
  onAvatarZoomIn() {
    this.avatarZoom = Math.min(this.avatarZoom + 0.1, 3);
  }
  onAvatarZoomOut() {
    this.avatarZoom = Math.max(this.avatarZoom - 0.1, 0.5);
  }
  onAvatarZoomChange(event) {
    this.avatarZoom = parseFloat(event.target.value);
  }
  onAvatarDragStart(event) {
    event.preventDefault();
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.panStartX = this.avatarPanX;
    this.panStartY = this.avatarPanY;
  }
  onAvatarDragMove(event) {
    if (!this.isDragging)
      return;
    this.avatarPanX = this.panStartX + (event.clientX - this.dragStartX);
    this.avatarPanY = this.panStartY + (event.clientY - this.dragStartY);
  }
  onAvatarDragEnd() {
    this.isDragging = false;
  }
  onAvatarTouchStart(event) {
    if (event.touches.length === 1) {
      this.isDragging = true;
      this.dragStartX = event.touches[0].clientX;
      this.dragStartY = event.touches[0].clientY;
      this.panStartX = this.avatarPanX;
      this.panStartY = this.avatarPanY;
    }
  }
  onAvatarTouchMove(event) {
    if (!this.isDragging || event.touches.length !== 1)
      return;
    event.preventDefault();
    this.avatarPanX = this.panStartX + (event.touches[0].clientX - this.dragStartX);
    this.avatarPanY = this.panStartY + (event.touches[0].clientY - this.dragStartY);
    this.cdr.markForCheck();
  }
  onAvatarSave() {
    if (!this.avatarEditorSrc)
      return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = 256;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();
      const scale = this.avatarZoom;
      const imgW = img.width * scale;
      const imgH = img.height * scale;
      const drawX = (size - imgW) / 2 + this.avatarPanX * (size / 200);
      const drawY = (size - imgH) / 2 + this.avatarPanY * (size / 200);
      ctx.drawImage(img, drawX, drawY, imgW, imgH);
      this.avatarPreview = canvas.toDataURL("image/png");
      this.showAvatarEditor = false;
      this.cdr.markForCheck();
      this.notification.success("\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u753B\u50CF\u3092\u8A2D\u5B9A\u3057\u307E\u3057\u305F");
    };
    img.src = this.avatarEditorSrc;
  }
  onAvatarEditorCancel() {
    this.showAvatarEditor = false;
  }
  // === スキル ===
  addSkill(event) {
    const value = (event.value || "").trim();
    if (value && !this.skills.includes(value)) {
      this.skills.push(value);
    }
    event.chipInput.clear();
  }
  removeSkill(index) {
    this.skills.splice(index, 1);
  }
  // === 経歴 ===
  get careers() {
    return this.profileForm.get("careers");
  }
  addCareer() {
    this.careers.push(this.fb.group({
      periodFrom: [""],
      periodTo: [""],
      company: [""],
      position: [""],
      description: [""]
    }));
  }
  removeCareer(index) {
    this.careers.removeAt(index);
  }
  // === 学歴 ===
  get educations() {
    return this.profileForm.get("educations");
  }
  addEducation() {
    this.educations.push(this.fb.group({
      periodFrom: [""],
      periodTo: [""],
      school: [""],
      major: [""]
    }));
  }
  removeEducation(index) {
    this.educations.removeAt(index);
  }
  // === 保存 ===
  onSave() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.notification.error("\u5FC5\u9808\u9805\u76EE\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    const formData = __spreadProps(__spreadValues({}, this.profileForm.getRawValue()), {
      skills: this.skills,
      avatarPreview: this.avatarPreview,
      avatarScale: this.avatarScale
    });
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(_ProfilePageComponent.STORAGE_KEY, JSON.stringify(formData));
      }
    } catch (err) {
      console.warn("[ProfilePage] failed to persist profile:", err);
    }
    this.notification.success("\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F");
  }
  /* 修正 No.36 (2026-04-25): プレビュー画像サイズのスライダー変更ハンドラ */
  onAvatarScaleChange(event) {
    const v = parseFloat(event.target.value);
    if (!isNaN(v) && v > 0) {
      this.avatarScale = v;
      this.cdr.markForCheck();
    }
  }
  // === 退会 ===
  /* 修正 No.53 (2026-04-24): 独自 confirm モーダル化 */
  onDeleteAccount() {
    return __async(this, null, function* () {
      const ok = yield this.confirmDialog.confirm({
        title: "\u9000\u4F1A\u306E\u78BA\u8A8D",
        message: "\u672C\u5F53\u306B\u9000\u4F1A\u3057\u307E\u3059\u304B\uFF1F\u3053\u306E\u64CD\u4F5C\u306F\u53D6\u308A\u6D88\u305B\u307E\u305B\u3093\u3002",
        confirmText: "\u9000\u4F1A\u3059\u308B",
        danger: true
      });
      if (!ok)
        return;
      this.notification.warn("\u9000\u4F1A\u51E6\u7406\u3092\u53D7\u3051\u4ED8\u3051\u307E\u3057\u305F");
    });
  }
  static {
    this.\u0275fac = function ProfilePageComponent_Factory(t) {
      return new (t || _ProfilePageComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(KeyboardManagerService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilePageComponent, selectors: [["app-profile-page"]], viewQuery: function ProfilePageComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.avatarCanvas = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 174, vars: 17, consts: [["chipGrid", ""], [1, "profile-page"], [1, "profile-container"], [1, "page-title"], [3, "ngSubmit", "formGroup"], [1, "card"], [1, "card-title"], [1, "avatar-section"], [1, "avatar-preview"], ["alt", "\u30A2\u30D0\u30BF\u30FC", 3, "src", "transform", 4, "ngIf"], [4, "ngIf"], [1, "avatar-actions"], [1, "btn-upload"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "avatar-hint"], ["class", "avatar-size-slider", 4, "ngIf"], [1, "field-row"], [1, "field"], [1, "field-label"], [1, "badge", "required"], ["type", "text", "formControlName", "lastName", "placeholder", "\u5C71\u7530", 1, "input"], ["type", "text", "formControlName", "firstName", "placeholder", "\u592A\u90CE", 1, "input"], [1, "badge", "optional"], ["type", "text", "formControlName", "furigana", "placeholder", "\u30BB\u30A4 \u30E1\u30A4", 1, "input"], ["type", "text", "formControlName", "company", "placeholder", "\u682A\u5F0F\u4F1A\u793E\u25CB\u25CB", 1, "input"], ["type", "text", "formControlName", "department", "placeholder", "\u55B6\u696D\u90E8", 1, "input"], ["type", "text", "formControlName", "jobTitle", "placeholder", "\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC", 1, "input"], ["type", "text", "formControlName", "catchphrase", "placeholder", "\u4E00\u8A00\u3067\u81EA\u5206\u3092\u8868\u3059\u30D5\u30EC\u30FC\u30BA", 1, "input"], ["formControlName", "bio", "placeholder", "\u7D4C\u6B74\u3084\u30B9\u30AD\u30EB\u306A\u3069\u81EA\u7531\u306B\u8A18\u5165", "rows", "4", 1, "input", "textarea"], ["type", "text", "formControlName", "birthplace", "placeholder", "\u6771\u4EAC\u90FD", 1, "input"], ["type", "date", "formControlName", "birthday", 1, "input"], ["type", "tel", "formControlName", "phone", "placeholder", "090-0000-0000", 1, "input"], ["type", "text", "formControlName", "address", "placeholder", "\u6771\u4EAC\u90FD\u6E0B\u8C37\u533A...", 1, "input"], ["type", "url", "formControlName", "website", "placeholder", "https://", 1, "input"], [1, "input-with-icon"], [1, "input-icon"], ["svgIcon", "facebook", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "sns-icon"], ["d", "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"], ["type", "url", "formControlName", "facebook", "placeholder", "https://facebook.com/username", 1, "input", "input-icon-padding"], ["d", "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"], ["type", "url", "formControlName", "twitter", "placeholder", "https://x.com/username", 1, "input", "input-icon-padding"], ["d", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"], ["type", "url", "formControlName", "instagram", "placeholder", "https://instagram.com/username", 1, "input", "input-icon-padding"], [1, "chips-container"], ["class", "chip", 4, "ngFor", "ngForOf"], ["placeholder", "\u30B9\u30AD\u30EB\u3092\u5165\u529B\u3057\u3066Enter\u3067\u8FFD\u52A0", 1, "input", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["formArrayName", "careers"], ["class", "dynamic-entry", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn-add", 3, "click"], ["formArrayName", "educations"], [1, "bottom-actions"], ["type", "submit", 1, "btn-save"], ["type", "button", 1, "btn-danger-link", 3, "click"], ["class", "avatar-editor-overlay", 3, "click", 4, "ngIf"], ["alt", "\u30A2\u30D0\u30BF\u30FC", 3, "src"], [1, "avatar-size-slider"], [1, "avatar-size-slider__label"], ["type", "range", "min", "0.5", "max", "2", "step", "0.05", 3, "input", "value"], ["svgIcon", "facebook"], [1, "chip"], ["type", "button", 1, "chip-remove", 3, "click"], [1, "dynamic-entry", 3, "formGroupName"], [1, "entry-header"], [1, "entry-number"], ["type", "button", 1, "btn-remove", 3, "click"], ["type", "month", "formControlName", "periodFrom", 1, "input"], ["type", "month", "formControlName", "periodTo", "placeholder", "\u73FE\u5728", 1, "input"], ["type", "text", "formControlName", "position", "placeholder", "\u30A8\u30F3\u30B8\u30CB\u30A2", 1, "input"], ["formControlName", "description", "placeholder", "\u696D\u52D9\u5185\u5BB9\u306A\u3069", "rows", "2", 1, "input", "textarea"], ["type", "month", "formControlName", "periodTo", 1, "input"], ["type", "text", "formControlName", "school", "placeholder", "\u25CB\u25CB\u5927\u5B66", 1, "input"], ["type", "text", "formControlName", "major", "placeholder", "\u5DE5\u5B66\u90E8 \u60C5\u5831\u5DE5\u5B66\u79D1", 1, "input"], [1, "avatar-editor-overlay", 3, "click"], [1, "avatar-editor", 3, "click"], [1, "avatar-editor__header"], [1, "avatar-editor__close", 3, "click"], [1, "avatar-editor__body"], [1, "avatar-editor__canvas", 3, "mousedown", "mousemove", "mouseup", "mouseleave", "touchstart", "touchmove", "touchend"], [1, "avatar-editor__circle-mask"], ["alt", "\u7DE8\u96C6\u4E2D", "class", "avatar-editor__image", "draggable", "false", 3, "src", "transform", 4, "ngIf"], [1, "avatar-editor__controls"], ["title", "\u7E2E\u5C0F", 1, "avatar-editor__zoom-btn", 3, "click"], ["type", "range", "min", "0.5", "max", "3", "step", "0.05", 1, "avatar-editor__slider", 3, "input", "value"], ["title", "\u62E1\u5927", 1, "avatar-editor__zoom-btn", 3, "click"], [1, "avatar-editor__hint"], [1, "avatar-editor__footer"], [1, "avatar-editor__btn-cancel", 3, "click"], [1, "avatar-editor__btn-save", 3, "click"], ["alt", "\u7DE8\u96C6\u4E2D", "draggable", "false", 1, "avatar-editor__image", 3, "src"]], template: function ProfilePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275element(2, "app-settings-tab-nav");
        \u0275\u0275elementStart(3, "h1", 3);
        \u0275\u0275text(4, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u8A2D\u5B9A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 4);
        \u0275\u0275listener("ngSubmit", function ProfilePageComponent_Template_form_ngSubmit_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSave());
        });
        \u0275\u0275elementStart(6, "section", 5)(7, "h2", 6);
        \u0275\u0275text(8, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u60C5\u5831");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
        \u0275\u0275template(11, ProfilePageComponent_img_11_Template, 1, 3, "img", 9)(12, ProfilePageComponent_mat_icon_12_Template, 2, 0, "mat-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11)(14, "label", 12);
        \u0275\u0275text(15, " \u753B\u50CF\u3092\u9078\u629E ");
        \u0275\u0275elementStart(16, "input", 13);
        \u0275\u0275listener("change", function ProfilePageComponent_Template_input_change_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAvatarChange($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "span", 14);
        \u0275\u0275text(18, "JPG, PNG\uFF085MB\u4EE5\u4E0B\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, ProfilePageComponent_label_19_Template, 4, 1, "label", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 16)(21, "div", 17)(22, "label", 18);
        \u0275\u0275text(23, " \u59D3 ");
        \u0275\u0275elementStart(24, "span", 19);
        \u0275\u0275text(25, "\u5FC5\u9808");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(26, "input", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 17)(28, "label", 18);
        \u0275\u0275text(29, " \u540D ");
        \u0275\u0275elementStart(30, "span", 19);
        \u0275\u0275text(31, "\u5FC5\u9808");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(32, "input", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 17)(34, "label", 18);
        \u0275\u0275text(35, " \u30D5\u30EA\u30AC\u30CA ");
        \u0275\u0275elementStart(36, "span", 22);
        \u0275\u0275text(37, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(38, "input", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 17)(40, "label", 18);
        \u0275\u0275text(41, " \u4F1A\u793E\u540D ");
        \u0275\u0275elementStart(42, "span", 22);
        \u0275\u0275text(43, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(44, "input", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 16)(46, "div", 17)(47, "label", 18);
        \u0275\u0275text(48, " \u90E8\u7F72 ");
        \u0275\u0275elementStart(49, "span", 22);
        \u0275\u0275text(50, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(51, "input", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 17)(53, "label", 18);
        \u0275\u0275text(54, " \u5F79\u8077 ");
        \u0275\u0275elementStart(55, "span", 22);
        \u0275\u0275text(56, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(57, "input", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 17)(59, "label", 18);
        \u0275\u0275text(60, " \u30AD\u30E3\u30C3\u30C1\u30B3\u30D4\u30FC ");
        \u0275\u0275elementStart(61, "span", 22);
        \u0275\u0275text(62, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(63, "input", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 17)(65, "label", 18);
        \u0275\u0275text(66, " \u81EA\u5DF1\u7D39\u4ECB ");
        \u0275\u0275elementStart(67, "span", 22);
        \u0275\u0275text(68, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(69, "textarea", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 17)(71, "label", 18);
        \u0275\u0275text(72, " \u51FA\u8EAB\u5730 ");
        \u0275\u0275elementStart(73, "span", 22);
        \u0275\u0275text(74, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(75, "input", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 17)(77, "label", 18);
        \u0275\u0275text(78, " \u751F\u5E74\u6708\u65E5 ");
        \u0275\u0275elementStart(79, "span", 22);
        \u0275\u0275text(80, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(81, "input", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "section", 5)(83, "h2", 6);
        \u0275\u0275text(84, "\u9023\u7D61\u5148\u60C5\u5831");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 17)(86, "label", 18);
        \u0275\u0275text(87, " \u96FB\u8A71\u756A\u53F7 ");
        \u0275\u0275elementStart(88, "span", 22);
        \u0275\u0275text(89, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(90, "input", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div", 17)(92, "label", 18);
        \u0275\u0275text(93, " \u4F4F\u6240 ");
        \u0275\u0275elementStart(94, "span", 22);
        \u0275\u0275text(95, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(96, "input", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 17)(98, "label", 18);
        \u0275\u0275text(99, " \u30DB\u30FC\u30E0\u30DA\u30FC\u30B8URL ");
        \u0275\u0275elementStart(100, "span", 22);
        \u0275\u0275text(101, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(102, "input", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "section", 5)(104, "h2", 6);
        \u0275\u0275text(105, "SNS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 17)(107, "label", 18);
        \u0275\u0275text(108, " Facebook ");
        \u0275\u0275elementStart(109, "span", 22);
        \u0275\u0275text(110, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "div", 34)(112, "span", 35);
        \u0275\u0275template(113, ProfilePageComponent_mat_icon_113_Template, 1, 0, "mat-icon", 36);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(114, "svg", 37);
        \u0275\u0275element(115, "path", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(116, "input", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "div", 17)(118, "label", 18);
        \u0275\u0275text(119, " X (Twitter) ");
        \u0275\u0275elementStart(120, "span", 22);
        \u0275\u0275text(121, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 34)(123, "span", 35);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(124, "svg", 37);
        \u0275\u0275element(125, "path", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(126, "input", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "div", 17)(128, "label", 18);
        \u0275\u0275text(129, " Instagram ");
        \u0275\u0275elementStart(130, "span", 22);
        \u0275\u0275text(131, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div", 34)(133, "span", 35);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(134, "svg", 37);
        \u0275\u0275element(135, "path", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(136, "input", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(137, "section", 5)(138, "h2", 6);
        \u0275\u0275text(139, "\u30B9\u30AD\u30EB\u30FB\u30BF\u30B0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 17)(141, "label", 18);
        \u0275\u0275text(142, " \u30B9\u30AD\u30EB ");
        \u0275\u0275elementStart(143, "span", 22);
        \u0275\u0275text(144, "\u4EFB\u610F");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "div", 44);
        \u0275\u0275template(146, ProfilePageComponent_span_146_Template, 5, 1, "span", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "mat-chip-grid", null, 0)(149, "input", 46);
        \u0275\u0275listener("matChipInputTokenEnd", function ProfilePageComponent_Template_input_matChipInputTokenEnd_149_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addSkill($event));
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(150, "section", 5)(151, "h2", 6);
        \u0275\u0275text(152, "\u7D4C\u6B74");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "div", 47);
        \u0275\u0275template(154, ProfilePageComponent_div_154_Template, 30, 2, "div", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "button", 49);
        \u0275\u0275listener("click", function ProfilePageComponent_Template_button_click_155_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addCareer());
        });
        \u0275\u0275elementStart(156, "mat-icon");
        \u0275\u0275text(157, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(158, " \u7D4C\u6B74\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(159, "section", 5)(160, "h2", 6);
        \u0275\u0275text(161, "\u5B66\u6B74");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "div", 50);
        \u0275\u0275template(163, ProfilePageComponent_div_163_Template, 25, 2, "div", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "button", 49);
        \u0275\u0275listener("click", function ProfilePageComponent_Template_button_click_164_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addEducation());
        });
        \u0275\u0275elementStart(165, "mat-icon");
        \u0275\u0275text(166, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(167, " \u5B66\u6B74\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(168, "div", 51)(169, "button", 52);
        \u0275\u0275text(170, " \u4FDD\u5B58\u3059\u308B ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "button", 53);
        \u0275\u0275listener("click", function ProfilePageComponent_Template_button_click_171_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDeleteAccount());
        });
        \u0275\u0275text(172, " \u9000\u4F1A\u3059\u308B ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(173, ProfilePageComponent_div_173_Template, 27, 2, "div", 54);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_7_0;
        const chipGrid_r12 = \u0275\u0275reference(148);
        \u0275\u0275styleProp("padding-bottom", ctx.keyboardHeight, "px");
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.profileForm);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.avatarPreview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.avatarPreview);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.avatarPreview);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("input-error", ((tmp_6_0 = ctx.profileForm.get("lastName")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.profileForm.get("lastName")) == null ? null : tmp_6_0.invalid));
        \u0275\u0275advance(6);
        \u0275\u0275classProp("input-error", ((tmp_7_0 = ctx.profileForm.get("firstName")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.profileForm.get("firstName")) == null ? null : tmp_7_0.invalid));
        \u0275\u0275advance(81);
        \u0275\u0275property("ngIf", false);
        \u0275\u0275advance(33);
        \u0275\u0275property("ngForOf", ctx.skills);
        \u0275\u0275advance(3);
        \u0275\u0275property("matChipInputFor", chipGrid_r12)("matChipInputSeparatorKeyCodes", ctx.separatorKeyCodes);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.careers.controls);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.educations.controls);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.showAvatarEditor);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, MatIconModule, MatIcon, MatChipsModule, MatChipGrid, MatChipInput, SettingsTabNavComponent], styles: ['@charset "UTF-8";\n\n\n\n.profile-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100dvh;\n  background: #f0f0f4;\n  padding: 32px 16px 64px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 15px;\n  color: #81766e;\n  -webkit-font-smoothing: antialiased;\n}\n.profile-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 0 24px;\n  box-sizing: border-box;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 24px;\n  color: #81766e;\n}\n.page-title[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 4px;\n  height: 24px;\n  background: #ff9800;\n  border-radius: 2px;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 28px 28px 24px;\n  margin-bottom: 20px;\n}\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 17px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 20px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #ff9800;\n}\n.card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.avatar-preview[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  background: #fafafa;\n  border: 2px solid #e0e0e0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.avatar-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  transform-origin: center center;\n  transition: transform 0.1s linear;\n}\n.avatar-preview[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #9e9e9e;\n}\n.avatar-size-slider[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.avatar-size-slider__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  min-width: 40px;\n}\n.avatar-size-slider[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  width: 140px;\n  accent-color: #ff9800;\n  cursor: pointer;\n}\n.avatar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.btn-upload[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #81766e;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn-upload[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  color: #ff9800;\n}\n.avatar-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.avatar-editor-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.avatar-editor[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 420px;\n  max-width: 92vw;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n}\n.avatar-editor__header[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.avatar-editor__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 600;\n}\n.avatar-editor__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  border-radius: 50%;\n  transition: background 0.15s;\n}\n.avatar-editor__close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.avatar-editor__body[_ngcontent-%COMP%] {\n  padding: 24px 20px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.avatar-editor__canvas[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  position: relative;\n  cursor: grab;\n  -webkit-user-select: none;\n  user-select: none;\n  background: #f0f0f0;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid #e0e0e0;\n}\n.avatar-editor__canvas[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.avatar-editor__circle-mask[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar-editor__image[_ngcontent-%COMP%] {\n  max-width: none;\n  max-height: none;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform-origin: center center;\n  pointer-events: none;\n}\n.avatar-editor__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 20px;\n  width: 100%;\n  max-width: 280px;\n}\n.avatar-editor__zoom-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  cursor: pointer;\n  color: #757575;\n  flex-shrink: 0;\n  transition: all 0.15s;\n}\n.avatar-editor__zoom-btn[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  color: #ff9800;\n}\n.avatar-editor__zoom-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.avatar-editor__slider[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: #e0e0e0;\n  border-radius: 2px;\n  outline: none;\n}\n.avatar-editor__slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #ff9800;\n  cursor: pointer;\n  border: 2px solid #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.avatar-editor__hint[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 12px;\n  color: #9e9e9e;\n  text-align: center;\n}\n.avatar-editor__footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px 20px;\n  border-top: 1px solid #e0e0e0;\n  justify-content: flex-end;\n}\n.avatar-editor__btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  color: #757575;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.avatar-editor__btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: #757575;\n}\n.avatar-editor__btn-save[_ngcontent-%COMP%] {\n  padding: 10px 32px;\n  border: none;\n  background: #ff9800;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.avatar-editor__btn-save[_ngcontent-%COMP%]:hover {\n  background: #ef6c00;\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n.field-row[_ngcontent-%COMP%]    > .field[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 0;\n}\n.field-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #757575;\n  margin-bottom: 6px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 1px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.badge.required[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.12);\n  color: #ef6c00;\n}\n.badge.optional[_ngcontent-%COMP%] {\n  background: rgba(158, 158, 158, 0.12);\n  color: #9e9e9e;\n}\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  font-size: 15px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  color: #81766e;\n  background: #f7f7fa;\n  border: 1.5px solid transparent;\n  border-radius: 8px;\n  outline: none;\n  transition: all 0.15s ease;\n  box-sizing: border-box;\n}\n.input[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n  box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.1);\n  background: #fff;\n}\n.input.input-error[_ngcontent-%COMP%] {\n  border-color: #e53935;\n  box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.08);\n}\n.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  line-height: 1.6;\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9e9e9e;\n  pointer-events: none;\n  z-index: 1;\n}\n.sns-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.input-icon-padding[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.chips-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px 5px 12px;\n  background: rgba(255, 152, 0, 0.1);\n  color: #ef6c00;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chip-remove[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: #ef6c00;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: background 0.15s ease;\n}\n.chip-remove[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.chip-remove[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.15);\n}\nmat-chip-grid[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-chip-grid[_ngcontent-%COMP%]     .mdc-evolution-chip-set__chips {\n  width: 100%;\n}\n.dynamic-entry[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #fafafa;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.dynamic-entry[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 16px;\n}\n.dynamic-entry[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%], .dynamic-entry[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.entry-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.entry-number[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #757575;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border: none;\n  background: transparent;\n  color: #e53935;\n  font-size: 13px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: background 0.15s ease;\n}\n.btn-remove[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: rgba(229, 57, 53, 0.08);\n}\n.btn-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: 1.5px dashed #e0e0e0;\n  background: transparent;\n  color: #757575;\n  font-size: 14px;\n  font-weight: 500;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n  width: 100%;\n  justify-content: center;\n}\n.btn-add[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  color: #ff9800;\n  background: rgba(255, 152, 0, 0.04);\n}\n.bottom-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  margin-top: 8px;\n  padding: 0 0 32px;\n}\n.btn-save[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: 14px 32px;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.25);\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #ef6c00;\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n  transform: translateY(-1px);\n}\n.btn-save[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-danger-link[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  color: #9e9e9e;\n  font-size: 13px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  cursor: pointer;\n  transition: color 0.15s ease;\n}\n.btn-danger-link[_ngcontent-%COMP%]:hover {\n  color: #e53935;\n}\n@media (max-width: 599px) {\n  .profile-page[_ngcontent-%COMP%] {\n    padding: 16px 0 48px;\n  }\n  .profile-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 12px;\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: 20px 16px 18px;\n    border-radius: 10px;\n  }\n  .field-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .field-row[_ngcontent-%COMP%]    > .field[_ngcontent-%COMP%] {\n    margin-bottom: 18px;\n  }\n  .avatar-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .btn-save[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=profile-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilePageComponent, { className: "ProfilePageComponent", filePath: "src\\app\\features\\settings\\pages\\profile-page\\profile-page.component.ts", lineNumber: 57 });
})();
export {
  ProfilePageComponent
};
//# sourceMappingURL=chunk-X4LRQXZQ.js.map
