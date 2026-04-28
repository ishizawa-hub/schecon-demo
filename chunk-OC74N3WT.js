import {
  AvatarComponent,
  RelativeTimePipe,
  TruncatePipe
} from "./chunk-NJWUP6YD.js";
import {
  ConfirmDialogService
} from "./chunk-3K5GTNE6.js";
import {
  AppealCreateComponent,
  EventCreateComponent,
  FormDraftService,
  RecruitmentCreateComponent,
  ThreadCreateComponent
} from "./chunk-WAEBYP66.js";
import "./chunk-XACQWZ45.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-NWSZROQH.js";
import "./chunk-QLKTM4SV.js";
import {
  CommunityService
} from "./chunk-GSEWMOGN.js";
import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-YF2NDTP4.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-VOAOX4DE.js";
import {
  MatIcon,
  MatIconModule,
  Title
} from "./chunk-MPKYFQD7.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  SlicePipe,
  Subject,
  __async,
  debounceTime,
  distinctUntilChanged,
  of,
  startWith,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3YYMYGX4.js";

// src/app/features/community/models/community.model.ts
var CATEGORY_ICONS = {
  business: { icon: "business_center", label: "\u7D4C\u55B6\u30FB\u30D3\u30B8\u30CD\u30B9" },
  engineering: { icon: "code", label: "\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0" },
  hr: { icon: "people", label: "\u4EBA\u4E8B\u30FB\u63A1\u7528" },
  design: { icon: "palette", label: "\u30C7\u30B6\u30A4\u30F3" },
  sales: { icon: "trending_up", label: "\u55B6\u696D\u30FB\u4E8B\u696D\u958B\u767A" },
  leadership: { icon: "star", label: "\u30EA\u30FC\u30C0\u30FC\u30B7\u30C3\u30D7" },
  ai: { icon: "psychology", label: "AI\u30FB\u30C7\u30FC\u30BF\u30B5\u30A4\u30A8\u30F3\u30B9" },
  innovation: { icon: "lightbulb", label: "\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3" },
  marketing: { icon: "campaign", label: "\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0" },
  sidebiz: { icon: "work_outline", label: "\u526F\u696D\u30FB\u30D1\u30E9\u30EC\u30EB\u30AD\u30E3\u30EA\u30A2" }
};

// src/app/features/community/components/community-card/community-card.component.ts
function CommunityCardComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u53C2\u52A0\u4E2D ");
    \u0275\u0275elementEnd();
  }
}
function CommunityCardComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, " \u672A\u53C2\u52A0 ");
    \u0275\u0275elementEnd();
  }
}
function CommunityCardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r1 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r1.label);
  }
}
function CommunityCardComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r2, " ");
  }
}
function CommunityCardComponent_app_avatar_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-avatar", 19);
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    \u0275\u0275property("name", member_r3.name)("imageUrl", member_r3.avatar)("size", 28);
  }
}
var CommunityCardComponent = class _CommunityCardComponent {
  constructor() {
    this.categoryIcons = CATEGORY_ICONS;
    this.memberAvatars = [];
    this.isMember = false;
    this.select = new EventEmitter();
  }
  onCardClick() {
    this.select.emit(this.community.id);
  }
  static {
    this.\u0275fac = function CommunityCardComponent_Factory(t) {
      return new (t || _CommunityCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityCardComponent, selectors: [["app-community-card"]], inputs: { community: "community", memberAvatars: "memberAvatars", isMember: "isMember" }, outputs: { select: "select" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 15, consts: [[1, "community-card", 3, "click"], [1, "community-card__image"], [3, "src", "alt"], ["class", "community-card__status community-card__status--joined", 4, "ngIf"], ["class", "community-card__status community-card__status--not-joined", 4, "ngIf"], [1, "community-card__body"], ["class", "community-card__category", 4, "ngIf"], [1, "community-card__title"], [1, "community-card__description"], [1, "community-card__tags"], ["class", "community-card__tag", 4, "ngFor", "ngForOf"], [1, "community-card__footer"], [1, "community-card__avatars"], [3, "name", "imageUrl", "size", 4, "ngFor", "ngForOf"], [1, "community-card__member-count"], [1, "community-card__status", "community-card__status--joined"], [1, "community-card__status", "community-card__status--not-joined"], [1, "community-card__category"], [1, "community-card__tag"], [3, "name", "imageUrl", "size"]], template: function CommunityCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function CommunityCardComponent_Template_div_click_0_listener() {
          return ctx.onCardClick();
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275template(3, CommunityCardComponent_span_3_Template, 4, 0, "span", 3)(4, CommunityCardComponent_span_4_Template, 2, 0, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275template(6, CommunityCardComponent_div_6_Template, 5, 2, "div", 6);
        \u0275\u0275elementStart(7, "h3", 7);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 8);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "truncate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275template(13, CommunityCardComponent_span_13_Template, 2, 1, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 12);
        \u0275\u0275template(16, CommunityCardComponent_app_avatar_16_Template, 1, 3, "app-avatar", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 14)(18, "mat-icon");
        \u0275\u0275text(19, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("community-card--not-joined", !ctx.isMember);
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.community.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx.community.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isMember);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isMember);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.categoryIcons[ctx.community.category]);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.community.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 12, ctx.community.description, 80));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.community.tags);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.memberAvatars);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.community.memberCount, "\u4EBA\u306E\u30E1\u30F3\u30D0\u30FC ");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatIconModule, MatIcon, AvatarComponent, TruncatePipe], styles: ["\n\n.community-card[_ngcontent-%COMP%] {\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: box-shadow 0.2s ease;\n  background: #fff;\n}\n.community-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.community-card--not-joined[_ngcontent-%COMP%] {\n  border-color: #e2dfdc;\n}\n.community-card__image[_ngcontent-%COMP%] {\n  height: 160px;\n  overflow: hidden;\n  position: relative;\n}\n.community-card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.community-card__status[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.community-card__status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.community-card__status--joined[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.9);\n  color: #fff;\n}\n.community-card__status--not-joined[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n}\n.community-card__body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.community-card__category[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 10px 2px 6px;\n  background: rgba(255, 152, 0, 0.08);\n  border-radius: 12px;\n  margin-bottom: 8px;\n}\n.community-card__category[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #ff9800;\n}\n.community-card__category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #ff9800;\n}\n.community-card__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 8px;\n  line-height: 1.4;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n.community-card__description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5f6368;\n  line-height: 1.5;\n  margin: 0 0 12px;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.community-card__tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.community-card__tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f6f8fc;\n  color: #5f6368;\n  font-size: 11px;\n  padding: 2px 10px;\n  border-radius: 24px;\n  border: 1px solid #e2dfdc;\n}\n.community-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.community-card__avatars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.community-card__member-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #ff9800;\n  background: rgba(255, 152, 0, 0.08);\n  padding: 4px 12px;\n  border-radius: 16px;\n}\n.community-card__member-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n@media (max-width: 640px) {\n  .community-card__body[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .community-card__image[_ngcontent-%COMP%] {\n    height: 140px;\n    overflow: hidden;\n    border-radius: 8px 8px 0 0;\n  }\n  .community-card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n  }\n  .community-card__category[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .community-card__category[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .community-card__status[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .community-card__status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .community-card__member-count[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .community-card__member-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .community-card__footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=community-card.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityCardComponent, { className: "CommunityCardComponent", filePath: "src\\app\\features\\community\\components\\community-card\\community-card.component.ts", lineNumber: 16 });
})();

// src/app/features/community/components/community-list/community-list.component.ts
var _c0 = () => [];
function CommunityListComponent_div_8_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function CommunityListComponent_div_8_button_7_Template_button_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("community-list__pager-num--active", p_r4 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4);
  }
}
function CommunityListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275listener("click", function CommunityListComponent_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function CommunityListComponent_div_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CommunityListComponent_div_8_button_7_Template, 2, 3, "button", 13);
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function CommunityListComponent_div_8_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function CommunityListComponent_div_8_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "last_page");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function CommunityListComponent_app_community_card_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-community-card", 17);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("select", function CommunityListComponent_app_community_card_10_Template_app_community_card_select_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectCommunity($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const community_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("community", community_r6)("memberAvatars", \u0275\u0275pipeBind1(1, 3, ctx_r1.getMemberPreviews(community_r6.id)) || \u0275\u0275pureFunction0(5, _c0))("isMember", (tmp_4_0 = ctx_r1.membershipMap.get(community_r6.id)) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : false);
  }
}
function CommunityListComponent_div_11_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function CommunityListComponent_div_11_button_7_Template_button_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("community-list__pager-num--active", p_r9 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r9);
  }
}
function CommunityListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function CommunityListComponent_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function CommunityListComponent_div_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CommunityListComponent_div_11_button_7_Template, 2, 3, "button", 13);
    \u0275\u0275elementStart(8, "button", 19);
    \u0275\u0275listener("click", function CommunityListComponent_div_11_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 19);
    \u0275\u0275listener("click", function CommunityListComponent_div_11_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "last_page");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var SCROLL_STORAGE_KEY = "schecon.community-list.scrollTop.v1";
var CommunityListComponent = class _CommunityListComponent {
  constructor(communityService, cdr) {
    this.communityService = communityService;
    this.cdr = cdr;
    this.selectCommunity = new EventEmitter();
    this.createCommunity = new EventEmitter();
    this.searchSubject = new Subject();
    this.allCommunities = [];
    this.pagedCommunities = [];
    this.memberPreviews = /* @__PURE__ */ new Map();
    this.membershipMap = /* @__PURE__ */ new Map();
    this.currentPage = 1;
    this.pageSize = 40;
    this.totalPages = 1;
  }
  ngOnInit() {
    const communities$ = this.searchSubject.pipe(startWith(""), debounceTime(300), distinctUntilChanged(), switchMap((term) => this.communityService.searchCommunities(term)));
    this.subscription = communities$.subscribe((communities) => {
      this.allCommunities = communities;
      this.currentPage = 1;
      this.totalPages = Math.ceil(communities.length / this.pageSize);
      communities.forEach((c) => {
        if (!this.membershipMap.has(c.id)) {
          this.communityService.isMember(c.id).subscribe((val) => {
            this.membershipMap.set(c.id, val);
            this.cdr.markForCheck();
          });
        }
      });
      this.updatePage();
      this.cdr.markForCheck();
    });
  }
  ngAfterViewInit() {
    queueMicrotask(() => this.restoreScroll());
    requestAnimationFrame(() => this.restoreScroll());
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  /** fix #17: scroll container を取得。host (app-community-page) が overflow-y: auto。 */
  getScrollEl() {
    return document.querySelector("app-community-page") || document.scrollingElement || document.documentElement;
  }
  /** fix #17: localStorage から scrollTop を取得して復元 */
  restoreScroll() {
    try {
      const raw = localStorage.getItem(SCROLL_STORAGE_KEY);
      if (raw == null)
        return;
      const top = parseInt(raw, 10);
      if (Number.isNaN(top) || top < 0)
        return;
      const el = this.getScrollEl();
      if (el)
        el.scrollTop = top;
    } catch {
    }
  }
  /** fix #17: 現在の scrollTop を localStorage に保存 */
  saveScroll() {
    try {
      const el = this.getScrollEl();
      const top = el ? el.scrollTop : window.scrollY;
      localStorage.setItem(SCROLL_STORAGE_KEY, String(Math.max(0, Math.floor(top))));
    } catch {
    }
  }
  updatePage() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedCommunities = this.allCommunities.slice(start, end);
    this.pagedCommunities.forEach((c) => {
      if (!this.memberPreviews.has(c.id)) {
        this.memberPreviews.set(c.id, this.communityService.getRandomMembers(c.id, 3));
      }
    });
  }
  onSearch(event) {
    const value = event.target.value;
    this.searchSubject.next(value);
  }
  getMemberPreviews(communityId) {
    if (!this.memberPreviews.has(communityId)) {
      this.memberPreviews.set(communityId, this.communityService.getRandomMembers(communityId, 3));
    }
    return this.memberPreviews.get(communityId);
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.updatePage();
    this.cdr.markForCheck();
    const el = document.querySelector("app-community-page");
    if (el)
      el.scrollTop = 0;
    try {
      localStorage.removeItem(SCROLL_STORAGE_KEY);
    } catch {
    }
  }
  get pageNumbers() {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  onSelectCommunity(id) {
    this.saveScroll();
    this.selectCommunity.emit(id);
  }
  onCreateCommunity() {
    this.createCommunity.emit();
  }
  static {
    this.\u0275fac = function CommunityListComponent_Factory(t) {
      return new (t || _CommunityListComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityListComponent, selectors: [["app-community-list"]], outputs: { selectCommunity: "selectCommunity", createCommunity: "createCommunity" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 4, consts: [[1, "community-list"], [1, "community-list__header", "community-list__sticky"], ["type", "text", "placeholder", "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3092\u691C\u7D22...", 1, "community-list__search", 3, "input"], [1, "community-list__create-btn", 3, "click"], [1, "community-list__info", "community-list__info--inline", "community-list__sticky", "community-list__sticky--pager"], [1, "community-list__info-count"], ["class", "community-list__pager community-list__pager--inline", 4, "ngIf"], [1, "community-list__grid"], [3, "community", "memberAvatars", "isMember", "select", 4, "ngFor", "ngForOf"], ["class", "community-list__pager", 4, "ngIf"], [1, "community-list__pager", "community-list__pager--inline"], ["aria-label", "\u6700\u521D\u306E\u30DA\u30FC\u30B8", 1, "community-list__pager-btn", 3, "click", "disabled"], ["aria-label", "\u524D\u306E\u30DA\u30FC\u30B8", 1, "community-list__pager-btn", 3, "click", "disabled"], ["class", "community-list__pager-num", 3, "community-list__pager-num--active", "click", 4, "ngFor", "ngForOf"], ["aria-label", "\u6B21\u306E\u30DA\u30FC\u30B8", 1, "community-list__pager-btn", 3, "click", "disabled"], ["aria-label", "\u6700\u5F8C\u306E\u30DA\u30FC\u30B8", 1, "community-list__pager-btn", 3, "click", "disabled"], [1, "community-list__pager-num", 3, "click"], [3, "select", "community", "memberAvatars", "isMember"], [1, "community-list__pager"], [1, "community-list__pager-btn", 3, "click", "disabled"]], template: function CommunityListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
        \u0275\u0275listener("input", function CommunityListComponent_Template_input_input_2_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 3);
        \u0275\u0275listener("click", function CommunityListComponent_Template_button_click_3_listener() {
          return ctx.onCreateCommunity();
        });
        \u0275\u0275text(4, " \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3092\u4F5C\u6210 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "span", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, CommunityListComponent_div_8_Template, 14, 5, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275template(10, CommunityListComponent_app_community_card_10_Template, 2, 6, "app-community-card", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, CommunityListComponent_div_11_Template, 14, 5, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("", ctx.allCommunities.length, "\u4EF6\u306E\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.totalPages > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pagedCommunities);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.totalPages > 1);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, MatIconModule, MatIcon, CommunityCardComponent], styles: ['@charset "UTF-8";\n\n\n\n.community-list[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n}\n.community-list__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.community-list__search[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 24px;\n  background: #f1f3f4;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n}\n.community-list__search[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.community-list__search[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.3);\n}\n.community-list__create-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  border-radius: 24px;\n  padding: 10px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.community-list__create-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.community-list__info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9e9e9e;\n  margin-bottom: 12px;\n}\n.community-list__info--inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 0;\n  margin-bottom: 4px;\n  position: relative;\n}\n.community-list__info-count[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.community-list__sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  background: #fff;\n  z-index: 20;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);\n}\n.community-list__header.community-list__sticky[_ngcontent-%COMP%] {\n  top: 0;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  margin-bottom: 0 !important;\n}\n.community-list__info.community-list__sticky--pager[_ngcontent-%COMP%] {\n  top: 52px;\n  padding: 4px 0;\n  margin-top: 0;\n}\n@media (min-width: 768px) {\n  .community-list__info.community-list__sticky--pager[_ngcontent-%COMP%] {\n    top: 52px;\n  }\n}\n.community-list__pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 12px 0;\n}\n.community-list__pager--inline[_ngcontent-%COMP%] {\n  padding: 0;\n  gap: 2px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.community-list__pager-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 50%;\n  background: transparent;\n  color: #5f6368;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.community-list__pager-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.community-list__pager-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 152, 0, 0.08);\n}\n.community-list__pager-btn[_ngcontent-%COMP%]:disabled {\n  color: #ccc;\n  cursor: default;\n}\n.community-list__pager-num[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background: transparent;\n  color: #5f6368;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  box-sizing: border-box;\n  transition: all 0.15s;\n}\n.community-list__pager-num[_ngcontent-%COMP%]:hover:not(.community-list__pager-num--active) {\n  background: rgba(255, 152, 0, 0.08);\n}\n.community-list__pager-num--active[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.community-list__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n}\n@media (max-width: 640px) {\n  .community-list[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .community-list__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .community-list__search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .community-list__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .community-list__info--inline[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 4px;\n    position: static;\n  }\n  .community-list__info-count[_ngcontent-%COMP%] {\n    position: static !important;\n    transform: none !important;\n    align-self: center;\n  }\n  .community-list__pager--inline[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .community-list__pager-btn[_ngcontent-%COMP%], .community-list__pager-num[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    min-width: 32px;\n    font-size: 13px;\n  }\n  .community-list__pager-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .community-list__pager-num[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .community-list__info.community-list__sticky--pager[_ngcontent-%COMP%] {\n    top: 40px !important;\n  }\n}\n/*# sourceMappingURL=community-list.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityListComponent, { className: "CommunityListComponent", filePath: "src\\app\\features\\community\\components\\community-list\\community-list.component.ts", lineNumber: 22 });
})();

// src/app/features/community/components/blur-overlay/blur-overlay.component.ts
var _c02 = ["*"];
function BlurOverlayComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
    \u0275\u0275listener("click", function BlurOverlayComponent_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDismiss());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-icon", 6);
    \u0275\u0275text(6, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 7);
    \u0275\u0275text(8, "\u3053\u306E\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u5168\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u898B\u308B\u306B\u306F\u53C2\u52A0\u304C\u5FC5\u8981\u3067\u3059");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 8);
    \u0275\u0275text(10, "\u30E1\u30F3\u30D0\u30FC\u3078\u306E\u30C1\u30E3\u30C3\u30C8\u30FB\u52DF\u96C6\u3078\u306E\u5FDC\u52DF\u30FB\u30A2\u30D4\u30FC\u30EB\u306E\u95B2\u89A7\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
    \u0275\u0275listener("click", function BlurOverlayComponent_div_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onJoinClick());
    });
    \u0275\u0275text(13, " \u53C2\u52A0\u7533\u8ACB\u3059\u308B ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function BlurOverlayComponent_div_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDismiss());
    });
    \u0275\u0275text(15, " \u95B2\u89A7\u3092\u7D9A\u3051\u308B ");
    \u0275\u0275elementEnd()()()();
  }
}
var BlurOverlayComponent = class _BlurOverlayComponent {
  constructor() {
    this.blurred = false;
    this.message = "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u53C2\u52A0\u3057\u3066\u30E1\u30F3\u30D0\u30FC\u3084\u52DF\u96C6\u3092\u95B2\u89A7\u3057\u307E\u3057\u3087\u3046";
    this.joinRequest = new EventEmitter();
    this.dismissed = false;
  }
  onJoinClick() {
    this.joinRequest.emit();
  }
  onDismiss() {
    this.dismissed = true;
  }
  static {
    this.\u0275fac = function BlurOverlayComponent_Factory(t) {
      return new (t || _BlurOverlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlurOverlayComponent, selectors: [["app-blur-overlay"]], inputs: { blurred: "blurred", message: "message" }, outputs: { joinRequest: "joinRequest" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c02, decls: 4, vars: 3, consts: [[1, "blur-overlay"], [1, "blur-overlay__content"], ["class", "blur-overlay__overlay", 4, "ngIf"], [1, "blur-overlay__overlay"], [1, "blur-overlay__prompt"], ["aria-label", "\u9589\u3058\u308B", 1, "blur-overlay__close", 3, "click"], [1, "blur-overlay__lock-icon"], [1, "blur-overlay__title"], [1, "blur-overlay__subtitle"], [1, "blur-overlay__actions"], [1, "blur-overlay__button", 3, "click"], [1, "blur-overlay__skip", 3, "click"]], template: function BlurOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, BlurOverlayComponent_div_3_Template, 16, 0, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("blur-overlay__content--blurred", ctx.blurred && !ctx.dismissed);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.blurred && !ctx.dismissed);
      }
    }, dependencies: [CommonModule, NgIf, MatIconModule, MatIcon], styles: ['@charset "UTF-8";\n\n\n\n.blur-overlay[_ngcontent-%COMP%] {\n  position: relative;\n}\n.blur-overlay__content[_ngcontent-%COMP%] {\n  transition: filter 0.3s ease;\n}\n.blur-overlay__content--blurred[_ngcontent-%COMP%] {\n  filter: blur(4px);\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.blur-overlay__overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-height: 100dvh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 16px 80px;\n  background: rgba(255, 255, 255, 0.6);\n  -webkit-backdrop-filter: saturate(120%);\n  backdrop-filter: saturate(120%);\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_overlayFadeIn 0.3s ease forwards;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.blur-overlay__prompt[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 16px;\n  padding: 40px 48px;\n  text-align: center;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);\n  max-width: 440px;\n  width: 90%;\n  transform: scale(0.8) translateY(30px);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_promptSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;\n}\n.blur-overlay__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9e9e9e;\n  padding: 4px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, color 0.2s;\n}\n.blur-overlay__close[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n  color: #81766e;\n}\n.blur-overlay__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.blur-overlay__lock-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #ff9800;\n  display: block;\n  margin: 0 auto 20px;\n  animation: _ngcontent-%COMP%_lockBounce 0.5s ease 0.4s both;\n}\n.blur-overlay__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #81766e;\n  line-height: 1.5;\n  margin: 0 0 12px;\n}\n.blur-overlay__subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5f6368;\n  line-height: 1.6;\n  margin: 0 0 28px;\n}\n.blur-overlay__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.blur-overlay__button[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  border-radius: 24px;\n  padding: 12px 40px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.15s;\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n}\n.blur-overlay__button[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(255, 152, 0, 0.4);\n}\n.blur-overlay__button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.blur-overlay__skip[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5f6368;\n  font-size: 13px;\n  cursor: pointer;\n  padding: 4px 8px;\n  text-decoration: underline;\n  transition: color 0.2s;\n}\n.blur-overlay__skip[_ngcontent-%COMP%]:hover {\n  color: #81766e;\n}\n@keyframes _ngcontent-%COMP%_overlayFadeIn {\n  from {\n    background: rgba(255, 255, 255, 0);\n  }\n  to {\n    background: rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes _ngcontent-%COMP%_promptSlideIn {\n  from {\n    transform: scale(0.8) translateY(30px);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_lockBounce {\n  0% {\n    transform: scale(0) rotate(-20deg);\n    opacity: 0;\n  }\n  60% {\n    transform: scale(1.2) rotate(5deg);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=blur-overlay.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlurOverlayComponent, { className: "BlurOverlayComponent", filePath: "src\\app\\features\\community\\components\\blur-overlay\\blur-overlay.component.ts", lineNumber: 13 });
})();

// src/app/features/community/components/chat-request/chat-request.component.ts
function ChatRequestComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2, "\u95A2\u9023\u60C5\u5831");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data.prefilledInfo);
  }
}
var ChatRequestComponent = class _ChatRequestComponent {
  constructor(dialogRef, data, notification) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.notification = notification;
    this.message = "";
  }
  get contextLabel() {
    switch (this.data.type) {
      case "member":
        return "\u30E1\u30F3\u30D0\u30FC\u3078\u306E\u30C1\u30E3\u30C3\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8";
      case "recruitment":
        return "\u52DF\u96C6\u3078\u306E\u5FDC\u52DF";
      case "appeal":
        return "\u30A2\u30D4\u30FC\u30EB\u3078\u306E\u8208\u5473\u3042\u308A";
      default:
        return "\u30C1\u30E3\u30C3\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8";
    }
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSend() {
    this.dialogRef.close({ message: this.message });
    this.notification.success("\u30C1\u30E3\u30C3\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F");
  }
  static {
    this.\u0275fac = function ChatRequestComponent_Factory(t) {
      return new (t || _ChatRequestComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatRequestComponent, selectors: [["app-chat-request"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 5, consts: [[1, "chat-request"], [1, "chat-request__title"], [1, "chat-request__context"], [1, "chat-request__context-item"], [1, "chat-request__context-label"], [1, "chat-request__context-value"], ["class", "chat-request__context-item", 4, "ngIf"], [1, "chat-request__field"], [1, "chat-request__label"], ["placeholder", "\u30C1\u30E3\u30C3\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u7406\u7531\u3084\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", "rows", "4", 1, "chat-request__textarea", 3, "ngModelChange", "ngModel"], [1, "chat-request__actions"], [1, "chat-request__cancel-btn", 3, "click"], [1, "chat-request__send-btn", 3, "click"]], template: function ChatRequestComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "span", 4);
        \u0275\u0275text(6, "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "span", 4);
        \u0275\u0275text(11, "\u5B9B\u5148");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 5);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, ChatRequestComponent_div_14_Template, 5, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "label", 8);
        \u0275\u0275text(17, "\u30E1\u30C3\u30BB\u30FC\u30B8\u30FB\u7406\u7531");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "textarea", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ChatRequestComponent_Template_textarea_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.message, $event) || (ctx.message = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 10)(20, "button", 11);
        \u0275\u0275listener("click", function ChatRequestComponent_Template_button_click_20_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(21, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 12);
        \u0275\u0275listener("click", function ChatRequestComponent_Template_button_click_22_listener() {
          return ctx.onSend();
        });
        \u0275\u0275text(23, "\u9001\u4FE1");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.contextLabel);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.data.communityName);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.data.targetName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.prefilledInfo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.message);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatDialogModule], styles: ["\n\n.chat-request[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-width: 480px;\n  box-sizing: border-box;\n}\n.chat-request__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 20px;\n}\n.chat-request__context[_ngcontent-%COMP%] {\n  background: #f6f8fc;\n  border-radius: 8px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.chat-request__context-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.chat-request__context-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #5f6368;\n  min-width: 80px;\n  flex-shrink: 0;\n}\n.chat-request__context-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #81766e;\n}\n.chat-request__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 24px;\n}\n.chat-request__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #5f6368;\n}\n.chat-request__textarea[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n  resize: vertical;\n  font-family: inherit;\n}\n.chat-request__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.chat-request__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.chat-request__cancel-btn[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 1px solid #e2dfdc;\n  border-radius: 24px;\n  background: #fff;\n  color: #5f6368;\n  font-size: 14px;\n  cursor: pointer;\n}\n.chat-request__cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f6f8fc;\n}\n.chat-request__send-btn[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  border: none;\n  border-radius: 24px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.chat-request__send-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n@media (max-width: 768px) {\n  .chat-request[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n    padding: 16px;\n  }\n  .chat-request__title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .chat-request__context[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n  }\n  .chat-request__context-label[_ngcontent-%COMP%] {\n    min-width: 60px;\n    font-size: 12px;\n  }\n  .chat-request__actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .chat-request__cancel-btn[_ngcontent-%COMP%], .chat-request__send-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=chat-request.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatRequestComponent, { className: "ChatRequestComponent", filePath: "src\\app\\features\\community\\components\\chat-request\\chat-request.component.ts", lineNumber: 16 });
})();

// src/app/features/community/components/member-profile/member-profile.component.ts
var MemberProfileComponent = class _MemberProfileComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.isMember = false;
    this.close = new EventEmitter();
    this.chatRequest = new EventEmitter();
  }
  onClose() {
    this.close.emit();
  }
  onChatRequest() {
    this.dialog.open(ChatRequestComponent, {
      width: "520px",
      data: {
        type: "member",
        targetName: this.member.name,
        communityName: ""
      }
    });
  }
  static {
    this.\u0275fac = function MemberProfileComponent_Factory(t) {
      return new (t || _MemberProfileComponent)(\u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MemberProfileComponent, selectors: [["app-member-profile"]], inputs: { member: "member", isMember: "isMember" }, outputs: { close: "close", chatRequest: "chatRequest" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 10, consts: [[1, "member-profile__backdrop", 3, "click"], [1, "member-profile", 3, "click"], [1, "member-profile__close", 3, "click"], [1, "member-profile__header"], [3, "name", "imageUrl", "size"], [1, "member-profile__name"], [1, "member-profile__company"], [1, "member-profile__job-title"], [1, "member-profile__meta"], [1, "member-profile__joined"], [1, "member-profile__chat-btn", 3, "click", "disabled"]], template: function MemberProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function MemberProfileComponent_Template_div_click_0_listener() {
          return ctx.onClose();
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275listener("click", function MemberProfileComponent_Template_div_click_1_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(2, "button", 2);
        \u0275\u0275listener("click", function MemberProfileComponent_Template_button_click_2_listener() {
          return ctx.onClose();
        });
        \u0275\u0275text(3, "\xD7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275element(5, "app-avatar", 4);
        \u0275\u0275elementStart(6, "h3", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "span", 9);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "relativeTime");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275listener("click", function MemberProfileComponent_Template_button_click_16_listener() {
          return ctx.onChatRequest();
        });
        \u0275\u0275text(17, " \u30C1\u30E3\u30C3\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u308B ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("name", ctx.member.name)("imageUrl", ctx.member.avatar)("size", 80);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.member.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.member.company);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.member.jobTitle);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\u53C2\u52A0: ", \u0275\u0275pipeBind1(15, 8, ctx.member.joinedAt), "");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.isMember);
      }
    }, dependencies: [CommonModule, MatDialogModule, AvatarComponent, RelativeTimePipe], styles: ["\n\n.member-profile[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  width: 360px;\n  max-width: 90vw;\n  position: relative;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  text-align: center;\n}\n.member-profile__backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n.member-profile__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #9e9e9e;\n  cursor: pointer;\n  padding: 4px 8px;\n  line-height: 1;\n}\n.member-profile__close[_ngcontent-%COMP%]:hover {\n  color: #81766e;\n}\n.member-profile__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.member-profile__name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 12px 0 4px;\n}\n.member-profile__company[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5f6368;\n  margin: 0 0 2px;\n}\n.member-profile__job-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9e9e9e;\n  margin: 0;\n}\n.member-profile__meta[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.member-profile__joined[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.member-profile__chat-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 24px;\n  border: none;\n  border-radius: 24px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.member-profile__chat-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f57c00;\n}\n.member-profile__chat-btn[_ngcontent-%COMP%]:disabled {\n  background: #e2dfdc;\n  color: #9e9e9e;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=member-profile.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MemberProfileComponent, { className: "MemberProfileComponent", filePath: "src\\app\\features\\community\\components\\member-profile\\member-profile.component.ts", lineNumber: 17 });
})();

// src/app/features/community/components/member-list/member-list.component.ts
function MemberListComponent_div_6_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function MemberListComponent_div_6_button_4_Template_button_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("member-list__pager-num--active", p_r4 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4);
  }
}
function MemberListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275listener("click", function MemberListComponent_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, MemberListComponent_div_6_button_4_Template, 2, 3, "button", 12);
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function MemberListComponent_div_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function MemberListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function MemberListComponent_div_8_Template_div_click_0_listener() {
      const member_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMemberClick(member_r6));
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275element(2, "app-avatar", 16);
    \u0275\u0275elementStart(3, "div", 17)(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "button", 20);
    \u0275\u0275listener("click", function MemberListComponent_div_8_Template_button_click_8_listener($event) {
      const member_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.onChat(member_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(9, " \u30C1\u30E3\u30C3\u30C8 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", member_r6.name)("imageUrl", member_r6.avatar)("size", 40);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", member_r6.company, " / ", member_r6.jobTitle, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isMember);
  }
}
function MemberListComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, " \u30E1\u30F3\u30D0\u30FC\u306F\u307E\u3060\u3044\u307E\u305B\u3093 ");
    \u0275\u0275elementEnd();
  }
}
function MemberListComponent_div_10_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function MemberListComponent_div_10_button_4_Template_button_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("member-list__pager-num--active", p_r9 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r9);
  }
}
function MemberListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275listener("click", function MemberListComponent_div_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, MemberListComponent_div_10_button_4_Template, 2, 3, "button", 12);
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function MemberListComponent_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function MemberListComponent_app_member_profile_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-member-profile", 22);
    \u0275\u0275listener("close", function MemberListComponent_app_member_profile_11_Template_app_member_profile_close_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCloseProfile());
    })("chatRequest", function MemberListComponent_app_member_profile_11_Template_app_member_profile_chatRequest_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChat($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("member", ctx_r1.selectedMember)("isMember", ctx_r1.isMember);
  }
}
var MemberListComponent = class _MemberListComponent {
  constructor(communityService, cdr, dialog, notification) {
    this.communityService = communityService;
    this.cdr = cdr;
    this.dialog = dialog;
    this.notification = notification;
    this.communityId = "";
    this.isMember = false;
    this.chatRequest = new EventEmitter();
    this.allMembers = [];
    this.filteredMembers = [];
    this.pagedMembers = [];
    this.searchTerm = "";
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 1;
    this.selectedMember = null;
  }
  ngOnInit() {
    this.loadMembers();
  }
  ngOnChanges(changes) {
    if (changes["communityId"] && !changes["communityId"].firstChange) {
      this.loadMembers();
    }
  }
  loadMembers() {
    if (!this.communityId)
      return;
    this.communityService.searchMembers(this.communityId, "").subscribe((members) => {
      this.allMembers = members;
      this.applyFilter();
      this.cdr.markForCheck();
    });
  }
  applyFilter() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredMembers = [...this.allMembers];
    } else {
      this.filteredMembers = this.allMembers.filter((m) => m.name.toLowerCase().includes(term) || m.company.toLowerCase().includes(term) || m.jobTitle.toLowerCase().includes(term));
    }
    this.currentPage = 1;
    this.updatePagination();
  }
  updatePagination() {
    this.totalPages = Math.max(1, Math.ceil(this.filteredMembers.length / this.pageSize));
    if (this.currentPage > this.totalPages)
      this.currentPage = this.totalPages;
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedMembers = this.filteredMembers.slice(start, start + this.pageSize);
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.updatePagination();
  }
  get pageNumbers() {
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;
    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }
    const pages = [];
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  onMemberClick(member) {
    this.selectedMember = member;
  }
  onCloseProfile() {
    this.selectedMember = null;
  }
  onChat(member) {
    this.dialog.open(ChatRequestComponent, {
      width: "90vw",
      maxWidth: "420px",
      panelClass: "community-create-dialog",
      data: {
        type: "member",
        targetName: member.name,
        communityName: ""
      }
    });
  }
  onJoinRequest() {
    this.communityService.requestJoin(this.communityId).subscribe(() => {
      this.isMember = true;
      this.notification.success("\u53C2\u52A0\u7533\u8ACB\u304C\u627F\u8A8D\u3055\u308C\u307E\u3057\u305F");
      this.cdr.markForCheck();
    });
  }
  static {
    this.\u0275fac = function MemberListComponent_Factory(t) {
      return new (t || _MemberListComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MemberListComponent, selectors: [["app-member-list"]], inputs: { communityId: "communityId", isMember: "isMember" }, outputs: { chatRequest: "chatRequest" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 12, vars: 8, consts: [[3, "joinRequest", "blurred"], [1, "member-list"], [1, "member-list__header"], ["type", "text", "placeholder", "\u540D\u524D\u30FB\u4F1A\u793E\u540D\u30FB\u5F79\u8077\u3067\u691C\u7D22...", 1, "member-list__search", 3, "ngModelChange", "ngModel"], [1, "member-list__info"], ["class", "member-list__pager", 4, "ngIf"], [1, "member-list__items"], ["class", "member-list__item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "member-list__empty", 4, "ngIf"], [3, "member", "isMember", "close", "chatRequest", 4, "ngIf"], [1, "member-list__pager"], [1, "member-list__pager-btn", 3, "click", "disabled"], ["class", "member-list__pager-num", 3, "member-list__pager-num--active", "click", 4, "ngFor", "ngForOf"], [1, "member-list__pager-num", 3, "click"], [1, "member-list__item", 3, "click"], [1, "member-list__item-info"], [3, "name", "imageUrl", "size"], [1, "member-list__item-text"], [1, "member-list__item-name"], [1, "member-list__item-detail"], [1, "member-list__chat-btn", 3, "click", "disabled"], [1, "member-list__empty"], [3, "close", "chatRequest", "member", "isMember"]], template: function MemberListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-blur-overlay", 0);
        \u0275\u0275listener("joinRequest", function MemberListComponent_Template_app_blur_overlay_joinRequest_0_listener() {
          return ctx.onJoinRequest();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "input", 3);
        \u0275\u0275twoWayListener("ngModelChange", function MemberListComponent_Template_input_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function MemberListComponent_Template_input_ngModelChange_3_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, MemberListComponent_div_6_Template, 8, 3, "div", 5);
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275template(8, MemberListComponent_div_8_Template, 10, 7, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, MemberListComponent_p_9_Template, 2, 0, "p", 8)(10, MemberListComponent_div_10_Template, 8, 3, "div", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, MemberListComponent_app_member_profile_11_Template, 1, 2, "app-member-profile", 9);
      }
      if (rf & 2) {
        \u0275\u0275property("blurred", !ctx.isMember);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.filteredMembers.length, "\u4EBA\u306E\u30E1\u30F3\u30D0\u30FC ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.totalPages > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pagedMembers);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pagedMembers.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.totalPages > 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMember);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, MatDialogModule, AvatarComponent, BlurOverlayComponent, MemberProfileComponent], styles: ['@charset "UTF-8";\n\n\n\n.member-list[_ngcontent-%COMP%] {\n}\n.member-list__header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.member-list__search[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 24px;\n  background: #f1f3f4;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n  box-sizing: border-box;\n}\n.member-list__search[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.member-list__search[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.3);\n}\n.member-list__info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9e9e9e;\n  margin-bottom: 8px;\n}\n.member-list__pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 12px 0;\n}\n.member-list__pager-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9e9e9e;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n}\n.member-list__pager-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #ff9800;\n}\n.member-list__pager-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\n.member-list__pager-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.member-list__pager-num[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 13px;\n  color: #5f6368;\n  cursor: pointer;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.member-list__pager-num[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.member-list__pager-num--active[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n.member-list__pager-num--active[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.member-list__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.member-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f1f3f4;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.member-list__item[_ngcontent-%COMP%]:hover {\n  background: #f6f8fc;\n}\n.member-list__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.member-list__item-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.member-list__item-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 2px;\n  min-width: 0;\n  line-height: 1.3;\n}\n.member-list__item-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #81766e;\n}\n.member-list__item-detail[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5f6368;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.member-list__chat-btn[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border: 1px solid #ff9800;\n  border-radius: 24px;\n  background: transparent;\n  color: #ff9800;\n  font-size: 13px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.member-list__chat-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ff9800;\n  color: #fff;\n}\n.member-list__chat-btn[_ngcontent-%COMP%]:disabled {\n  border-color: #e2dfdc;\n  color: #9e9e9e;\n  cursor: not-allowed;\n}\n.member-list__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9e9e9e;\n  font-size: 14px;\n  padding: 32px 0;\n}\n/*# sourceMappingURL=member-list.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MemberListComponent, { className: "MemberListComponent", filePath: "src\\app\\features\\community\\components\\member-list\\member-list.component.ts", lineNumber: 22 });
})();

// src/app/features/community/components/recruitment-detail/recruitment-detail.component.ts
function RecruitmentDetailComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "\u53C2\u52A0\u3059\u308B\u3068\u5FDC\u52DF\u3067\u304D\u307E\u3059");
    \u0275\u0275elementEnd();
  }
}
function RecruitmentDetailComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.mainImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.recruitment.title);
  }
}
function RecruitmentDetailComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function RecruitmentDetailComponent_div_21_div_2_Template_div_click_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onGalleryClick(i_r3));
    });
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r4, \u0275\u0275sanitizeUrl)("alt", ctx_r0.recruitment.title + " " + (i_r3 + 2));
  }
}
function RecruitmentDetailComponent_div_21_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function RecruitmentDetailComponent_div_21_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.galleryPrev());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
}
function RecruitmentDetailComponent_div_21_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RecruitmentDetailComponent_div_21_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.galleryNext());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd()();
  }
}
function RecruitmentDetailComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275template(2, RecruitmentDetailComponent_div_21_div_2_Template, 2, 2, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RecruitmentDetailComponent_div_21_button_3_Template, 3, 0, "button", 25)(4, RecruitmentDetailComponent_div_21_button_4_Template, 3, 0, "button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", "translateX(-" + ctx_r0.galleryOffset + "px)");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.subImages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.galleryOffset > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canGalleryNext);
  }
}
function RecruitmentDetailComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function RecruitmentDetailComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeLightbox());
    });
    \u0275\u0275element(1, "img", 31);
    \u0275\u0275elementStart(2, "button", 32)(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.lightboxImage, \u0275\u0275sanitizeUrl);
  }
}
function RecruitmentDetailComponent_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 36);
    \u0275\u0275text(2, "\u7DE0\u5207");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "relativeTime");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.recruitment.deadline));
  }
}
function RecruitmentDetailComponent_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 36);
    \u0275\u0275text(2, "\u5831\u916C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.recruitment.compensationDetails || "\u5831\u916C\u3042\u308A\uFF08\u8981\u76F8\u8AC7\uFF09");
  }
}
function RecruitmentDetailComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, RecruitmentDetailComponent_div_33_div_1_Template, 6, 3, "div", 34)(2, RecruitmentDetailComponent_div_33_div_2_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recruitment.deadline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recruitment.hasCompensation);
  }
}
var RecruitmentDetailComponent = class _RecruitmentDetailComponent {
  constructor() {
    this.isMember = false;
    this.back = new EventEmitter();
    this.apply = new EventEmitter();
    this.mainImage = null;
    this.subImages = [];
    this.galleryOffset = 0;
    this.lightboxImage = null;
  }
  ngOnInit() {
    this.setupImages();
  }
  ngOnChanges(changes) {
    if (changes["recruitment"]) {
      this.setupImages();
    }
  }
  setupImages() {
    const urls = this.recruitment.imageUrls || (this.recruitment.imageUrl ? [this.recruitment.imageUrl] : []);
    this.mainImage = urls.length > 0 ? urls[0] : null;
    this.subImages = urls.slice(1);
    this.galleryOffset = 0;
  }
  get canGalleryNext() {
    return this.galleryOffset < (this.subImages.length - 2) * 220;
  }
  galleryPrev() {
    this.galleryOffset = Math.max(0, this.galleryOffset - 220);
  }
  galleryNext() {
    this.galleryOffset += 220;
  }
  onGalleryClick(index) {
    this.lightboxImage = this.subImages[index];
  }
  closeLightbox() {
    this.lightboxImage = null;
  }
  onBack() {
    this.back.emit();
  }
  onApply() {
    this.apply.emit(this.recruitment);
  }
  static {
    this.\u0275fac = function RecruitmentDetailComponent_Factory(t) {
      return new (t || _RecruitmentDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruitmentDetailComponent, selectors: [["app-recruitment-detail"]], inputs: { recruitment: "recruitment", isMember: "isMember" }, outputs: { back: "back", apply: "apply" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 34, vars: 16, consts: [[1, "recruitment-detail"], [1, "recruitment-detail__back", 3, "click"], [1, "recruitment-detail__top-bar"], [1, "recruitment-detail__author"], [3, "name", "imageUrl", "size"], [1, "recruitment-detail__author-info"], [1, "recruitment-detail__author-name"], [1, "recruitment-detail__date"], [1, "recruitment-detail__cta"], [1, "recruitment-detail__apply-btn", 3, "click", "disabled"], ["class", "recruitment-detail__cta-hint", 4, "ngIf"], [1, "recruitment-detail__title"], ["class", "recruitment-detail__hero", 4, "ngIf"], ["class", "recruitment-detail__gallery", 4, "ngIf"], ["class", "recruitment-detail__lightbox", 3, "click", 4, "ngIf"], [1, "recruitment-detail__section"], [1, "recruitment-detail__section-title"], [1, "recruitment-detail__section-text"], ["class", "recruitment-detail__meta", 4, "ngIf"], [1, "recruitment-detail__cta-hint"], [1, "recruitment-detail__hero"], [3, "src", "alt"], [1, "recruitment-detail__gallery"], [1, "recruitment-detail__gallery-track"], ["class", "recruitment-detail__gallery-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "recruitment-detail__gallery-prev", 3, "click", 4, "ngIf"], ["class", "recruitment-detail__gallery-next", 3, "click", 4, "ngIf"], [1, "recruitment-detail__gallery-item", 3, "click"], [1, "recruitment-detail__gallery-prev", 3, "click"], [1, "recruitment-detail__gallery-next", 3, "click"], [1, "recruitment-detail__lightbox", 3, "click"], [3, "src"], [1, "recruitment-detail__lightbox-close"], [1, "recruitment-detail__meta"], ["class", "recruitment-detail__meta-item", 4, "ngIf"], [1, "recruitment-detail__meta-item"], [1, "recruitment-detail__meta-label"], [1, "recruitment-detail__meta-value"]], template: function RecruitmentDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275listener("click", function RecruitmentDetailComponent_Template_a_click_1_listener() {
          return ctx.onBack();
        });
        \u0275\u0275text(2, " < \u52DF\u96C6\u4E00\u89A7\u306B\u623B\u308B ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275element(5, "app-avatar", 4);
        \u0275\u0275elementStart(6, "div", 5)(7, "span", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "relativeTime");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
        \u0275\u0275listener("click", function RecruitmentDetailComponent_Template_button_click_13_listener() {
          return ctx.onApply();
        });
        \u0275\u0275elementStart(14, "mat-icon");
        \u0275\u0275text(15, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " \u5FDC\u52DF\u3059\u308B ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, RecruitmentDetailComponent_span_17_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "h2", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, RecruitmentDetailComponent_div_20_Template, 2, 2, "div", 12)(21, RecruitmentDetailComponent_div_21_Template, 5, 5, "div", 13)(22, RecruitmentDetailComponent_div_22_Template, 5, 1, "div", 14);
        \u0275\u0275elementStart(23, "div", 15)(24, "h3", 16);
        \u0275\u0275text(25, "\u8AB2\u984C\u30FB\u80CC\u666F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 17);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 15)(29, "h3", 16);
        \u0275\u0275text(30, "\u8A73\u7D30");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 17);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(33, RecruitmentDetailComponent_div_33_Template, 3, 2, "div", 18);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("name", ctx.recruitment.authorName)("imageUrl", ctx.recruitment.authorAvatar)("size", 40);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.recruitment.authorName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, ctx.recruitment.createdAt));
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.isMember);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.isMember);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.recruitment.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mainImage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subImages.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.lightboxImage);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.recruitment.problem);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.recruitment.details);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.recruitment.deadline || ctx.recruitment.hasCompensation);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatIconModule, MatIcon, AvatarComponent, RelativeTimePipe], styles: ["\n\n.recruitment-detail[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n}\n.recruitment-detail__back[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  color: #5f6368;\n  cursor: pointer;\n  margin-bottom: 20px;\n  text-decoration: none;\n}\n.recruitment-detail__back[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n}\n.recruitment-detail__top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 16px;\n}\n.recruitment-detail__author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.recruitment-detail__author-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.recruitment-detail__author-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #81766e;\n}\n.recruitment-detail__date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.recruitment-detail__cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.recruitment-detail__cta-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n}\n.recruitment-detail__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0 0 24px;\n  line-height: 1.4;\n}\n.recruitment-detail__section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.recruitment-detail__section-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 8px;\n}\n.recruitment-detail__section-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5f6368;\n  line-height: 1.7;\n  margin: 0;\n  white-space: pre-wrap;\n}\n.recruitment-detail__meta[_ngcontent-%COMP%] {\n  background: #f6f8fc;\n  border-radius: 8px;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.recruitment-detail__meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.recruitment-detail__meta-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #5f6368;\n  min-width: 40px;\n}\n.recruitment-detail__meta-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #81766e;\n}\n.recruitment-detail__hero[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.recruitment-detail__hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n  display: block;\n}\n.recruitment-detail__gallery[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.recruitment-detail__gallery-track[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  transition: transform 0.3s ease;\n}\n.recruitment-detail__gallery-item[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 200px;\n  height: 140px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: border-color 0.2s, transform 0.2s;\n}\n.recruitment-detail__gallery-item[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  transform: scale(1.03);\n}\n.recruitment-detail__gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.recruitment-detail__gallery-prev[_ngcontent-%COMP%], .recruitment-detail__gallery-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.recruitment-detail__gallery-prev[_ngcontent-%COMP%]:hover, .recruitment-detail__gallery-next[_ngcontent-%COMP%]:hover {\n  background: #fff;\n}\n.recruitment-detail__gallery-prev[_ngcontent-%COMP%] {\n  left: 8px;\n}\n.recruitment-detail__gallery-next[_ngcontent-%COMP%] {\n  right: 8px;\n}\n.recruitment-detail__lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  cursor: pointer;\n}\n.recruitment-detail__lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 90vh;\n  max-height: 90dvh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.recruitment-detail__lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.recruitment-detail__apply-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 40px;\n  border: none;\n  border-radius: 24px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n}\n.recruitment-detail__apply-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.recruitment-detail__apply-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f57c00;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(255, 152, 0, 0.4);\n}\n.recruitment-detail__apply-btn[_ngcontent-%COMP%]:disabled {\n  background: #e2dfdc;\n  color: #9e9e9e;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n@media (max-width: 640px) {\n  .recruitment-detail[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 0;\n  }\n  .recruitment-detail__top-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .recruitment-detail__cta[_ngcontent-%COMP%] {\n    align-items: stretch;\n    width: 100%;\n  }\n  .recruitment-detail__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .recruitment-detail__hero[_ngcontent-%COMP%] {\n    margin-left: -16px;\n    margin-right: -16px;\n    border-radius: 0;\n  }\n  .recruitment-detail__hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 240px;\n  }\n  .recruitment-detail__gallery-item[_ngcontent-%COMP%] {\n    width: 160px;\n    height: 110px;\n  }\n  .recruitment-detail__apply-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 14px 24px;\n  }\n}\n/*# sourceMappingURL=recruitment-detail.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruitmentDetailComponent, { className: "RecruitmentDetailComponent", filePath: "src\\app\\features\\community\\components\\recruitment-detail\\recruitment-detail.component.ts", lineNumber: 16 });
})();

// src/app/features/community/components/recruitment-list/recruitment-list.component.ts
function RecruitmentListComponent_app_recruitment_detail_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-recruitment-detail", 3);
    \u0275\u0275listener("back", function RecruitmentListComponent_app_recruitment_detail_1_Template_app_recruitment_detail_back_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackToList());
    })("apply", function RecruitmentListComponent_app_recruitment_detail_1_Template_app_recruitment_detail_apply_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onApply($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("recruitment", ctx_r1.selectedRecruitment)("isMember", ctx_r1.isMember);
  }
}
function RecruitmentListComponent_div_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCreate());
    });
    \u0275\u0275text(1, " \u65B0\u898F\u52DF\u96C6\u3092\u4F5C\u6210 ");
    \u0275\u0275elementEnd();
  }
}
function RecruitmentListComponent_div_2_div_6_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_6_button_7_Template_button_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("recruitment-list__pager-num--active", p_r7 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r7, " ");
  }
}
function RecruitmentListComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, RecruitmentListComponent_div_2_div_6_button_7_Template, 2, 3, "button", 16);
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_6_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "last_page");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function RecruitmentListComponent_div_2_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_8_div_1_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const rec_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEdit(rec_r9, $event));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_8_div_1_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const rec_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(rec_r9, $event));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function RecruitmentListComponent_div_2_div_8_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u5831\u916C\u3042\u308A");
    \u0275\u0275elementEnd();
  }
}
function RecruitmentListComponent_div_2_div_8_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40)(1, "mat-icon");
    \u0275\u0275text(2, "photo_library");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rec_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", rec_r9.imageUrls.length, " ");
  }
}
function RecruitmentListComponent_div_2_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275template(2, RecruitmentListComponent_div_2_div_8_div_2_span_2_Template, 2, 0, "span", 37)(3, RecruitmentListComponent_div_2_div_8_div_2_span_3_Template, 4, 1, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rec_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", rec_r9.imageUrls && rec_r9.imageUrls.length > 0 ? rec_r9.imageUrls[0] : rec_r9.imageUrl, \u0275\u0275sanitizeUrl)("alt", rec_r9.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rec_r9.hasCompensation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rec_r9.imageUrls && rec_r9.imageUrls.length > 1);
  }
}
function RecruitmentListComponent_div_2_div_8_div_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u5831\u916C\u3042\u308A");
    \u0275\u0275elementEnd();
  }
}
function RecruitmentListComponent_div_2_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "mat-icon");
    \u0275\u0275text(2, "work_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RecruitmentListComponent_div_2_div_8_div_3_span_3_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rec_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", rec_r9.hasCompensation);
  }
}
function RecruitmentListComponent_div_2_div_8_span_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " / ");
    \u0275\u0275elementEnd();
  }
}
function RecruitmentListComponent_div_2_div_8_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275template(2, RecruitmentListComponent_div_2_div_8_span_16_span_2_Template, 2, 0, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rec_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rec_r9.authorJobTitle, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rec_r9.authorCompany && rec_r9.authorJobTitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", rec_r9.authorCompany, " ");
  }
}
function RecruitmentListComponent_div_2_div_8_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44)(1, "mat-icon");
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "relativeTime");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rec_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, rec_r9.deadline), " ");
  }
}
function RecruitmentListComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_8_Template_div_click_0_listener() {
      const rec_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSelect(rec_r9));
    });
    \u0275\u0275template(1, RecruitmentListComponent_div_2_div_8_div_1_Template, 7, 0, "div", 19)(2, RecruitmentListComponent_div_2_div_8_div_2_Template, 4, 4, "div", 20)(3, RecruitmentListComponent_div_2_div_8_div_3_Template, 4, 1, "div", 21);
    \u0275\u0275elementStart(4, "div", 22)(5, "h4", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "truncate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25)(11, "div", 26);
    \u0275\u0275element(12, "app-avatar", 27);
    \u0275\u0275elementStart(13, "div", 28)(14, "span", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, RecruitmentListComponent_div_2_div_8_span_16_Template, 4, 3, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, RecruitmentListComponent_div_2_div_8_span_17_Template, 5, 3, "span", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rec_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMine(rec_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rec_r9.imageUrls && rec_r9.imageUrls.length > 0 || rec_r9.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(rec_r9.imageUrls && rec_r9.imageUrls.length > 0) && !rec_r9.imageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rec_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 11, rec_r9.problem, 120));
    \u0275\u0275advance(4);
    \u0275\u0275property("name", rec_r9.authorName)("imageUrl", rec_r9.authorAvatar)("size", 28);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rec_r9.authorName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rec_r9.authorCompany || rec_r9.authorJobTitle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rec_r9.deadline);
  }
}
function RecruitmentListComponent_div_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1, " \u52DF\u96C6\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093 ");
    \u0275\u0275elementEnd();
  }
}
function RecruitmentListComponent_div_2_div_10_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_10_button_7_Template_button_click_0_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("recruitment-list__pager-num--active", p_r13 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r13, " ");
  }
}
function RecruitmentListComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, RecruitmentListComponent_div_2_div_10_button_7_Template, 2, 3, "button", 16);
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function RecruitmentListComponent_div_2_div_10_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "last_page");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function RecruitmentListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentListComponent_div_2_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RecruitmentListComponent_div_2_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RecruitmentListComponent_div_2_button_3_Template, 2, 0, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RecruitmentListComponent_div_2_div_6_Template, 14, 5, "div", 9);
    \u0275\u0275elementStart(7, "div", 10);
    \u0275\u0275template(8, RecruitmentListComponent_div_2_div_8_Template, 18, 14, "div", 11)(9, RecruitmentListComponent_div_2_p_9_Template, 2, 0, "p", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, RecruitmentListComponent_div_2_div_10_Template, 14, 5, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMember);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filteredRecruitments.length, " \u4EF6\u306E\u52DF\u96C6 ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pagedRecruitments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagedRecruitments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var RecruitmentListComponent = class _RecruitmentListComponent {
  constructor(communityService, cdr, dialog, notification, confirmDialog, router) {
    this.communityService = communityService;
    this.cdr = cdr;
    this.dialog = dialog;
    this.notification = notification;
    this.confirmDialog = confirmDialog;
    this.router = router;
    this.communityId = "";
    this.isMember = false;
    this.selectRecruitment = new EventEmitter();
    this.createRecruitment = new EventEmitter();
    this.allRecruitments = [];
    this.filteredRecruitments = [];
    this.pagedRecruitments = [];
    this.searchTerm = "";
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 1;
    this.selectedRecruitment = null;
  }
  ngOnInit() {
    this.loadRecruitments();
  }
  ngOnChanges(changes) {
    if (changes["communityId"] && !changes["communityId"].firstChange) {
      this.loadRecruitments();
    }
  }
  loadRecruitments() {
    if (!this.communityId)
      return;
    this.communityService.searchRecruitments(this.communityId, "").subscribe((data) => {
      this.allRecruitments = data;
      this.applyFilter();
      this.cdr.markForCheck();
    });
  }
  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.filteredRecruitments = [...this.allRecruitments];
    } else {
      this.filteredRecruitments = this.allRecruitments.filter((r) => r.title?.toLowerCase().includes(term) || r.problem?.toLowerCase().includes(term) || r.details?.toLowerCase().includes(term) || r.authorName?.toLowerCase().includes(term));
    }
    this.totalPages = Math.max(1, Math.ceil(this.filteredRecruitments.length / this.pageSize));
    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }
    this.updatePage();
  }
  updatePage() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedRecruitments = this.filteredRecruitments.slice(start, start + this.pageSize);
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.updatePage();
  }
  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  onSelect(recruitment) {
    this.selectedRecruitment = recruitment;
  }
  onBackToList() {
    this.selectedRecruitment = null;
  }
  /**
   * fix (2026-04-27): SP モーダルクリック不能問題対策。
   * MatDialog → ルート遷移 (/community/:id/sub/recruitment/create) に変更。
   * 戻る時は location.back で list に復帰、loadRecruitments は ngOnInit/onChanges で再走。
   */
  onCreate() {
    this.router.navigate(["/community", this.communityId, "sub", "recruitment", "create"]);
  }
  /** 自分が作成した投稿か (ユーザー指示 2026-04-21) */
  isMine(r) {
    return this.communityService.isCurrentUser(r.authorId);
  }
  /** 編集ダイアログを開く (ユーザー指示 2026-04-21) */
  onEdit(rec, ev) {
    ev?.stopPropagation();
    const dialogRef = this.dialog.open(RecruitmentCreateComponent, {
      width: "94vw",
      maxWidth: "560px",
      maxHeight: "90dvh",
      panelClass: "community-create-dialog",
      data: { communityId: this.communityId, editing: rec }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadRecruitments();
        this.notification.success("\u52DF\u96C6\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
      }
    });
  }
  /* 修正 No.53 (2026-04-24): 独自 confirm モーダル化 */
  onDelete(rec, ev) {
    return __async(this, null, function* () {
      ev?.stopPropagation();
      const ok = yield this.confirmDialog.confirm({
        title: "\u52DF\u96C6\u306E\u524A\u9664",
        message: `\u300C${rec.title}\u300D\u3092\u524A\u9664\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F`,
        confirmText: "\u524A\u9664",
        danger: true
      });
      if (!ok)
        return;
      this.communityService.deleteRecruitment(rec.id).subscribe(() => {
        this.loadRecruitments();
        this.notification.warn("\u52DF\u96C6\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
      });
    });
  }
  onApply(recruitment) {
    this.dialog.open(ChatRequestComponent, {
      width: "90vw",
      maxWidth: "420px",
      panelClass: "community-create-dialog",
      data: {
        type: "recruitment",
        targetName: recruitment.authorName,
        prefilledInfo: recruitment.title,
        communityName: ""
      }
    });
  }
  onJoinRequest() {
    this.communityService.requestJoin(this.communityId).subscribe(() => {
      this.isMember = true;
      this.notification.success("\u53C2\u52A0\u7533\u8ACB\u304C\u627F\u8A8D\u3055\u308C\u307E\u3057\u305F");
      this.cdr.markForCheck();
    });
  }
  static {
    this.\u0275fac = function RecruitmentListComponent_Factory(t) {
      return new (t || _RecruitmentListComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruitmentListComponent, selectors: [["app-recruitment-list"]], inputs: { communityId: "communityId", isMember: "isMember" }, outputs: { selectRecruitment: "selectRecruitment", createRecruitment: "createRecruitment" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[3, "joinRequest", "blurred"], [3, "recruitment", "isMember", "back", "apply", 4, "ngIf"], ["class", "recruitment-list", 4, "ngIf"], [3, "back", "apply", "recruitment", "isMember"], [1, "recruitment-list"], [1, "recruitment-list__header"], ["type", "text", "placeholder", "\u52DF\u96C6\u3092\u691C\u7D22...", 1, "recruitment-list__search", 3, "ngModelChange", "ngModel"], ["class", "recruitment-list__create-btn", 3, "click", 4, "ngIf"], [1, "recruitment-list__info"], ["class", "recruitment-list__pager", 4, "ngIf"], [1, "recruitment-list__items"], ["class", "recruitment-list__card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "recruitment-list__empty", 4, "ngIf"], [1, "recruitment-list__create-btn", 3, "click"], [1, "recruitment-list__pager"], [1, "recruitment-list__pager-btn", 3, "click", "disabled"], ["class", "recruitment-list__pager-num", 3, "recruitment-list__pager-num--active", "click", 4, "ngFor", "ngForOf"], [1, "recruitment-list__pager-num", 3, "click"], [1, "recruitment-list__card", 3, "click"], ["class", "recruitment-list__card-actions", 4, "ngIf"], ["class", "recruitment-list__card-visual", 4, "ngIf"], ["class", "recruitment-list__card-visual recruitment-list__card-visual--placeholder", 4, "ngIf"], [1, "recruitment-list__card-inner"], [1, "recruitment-list__card-title"], [1, "recruitment-list__card-problem"], [1, "recruitment-list__card-footer"], [1, "recruitment-list__card-author-row"], [3, "name", "imageUrl", "size"], [1, "recruitment-list__card-author-info"], [1, "recruitment-list__card-author-name"], ["class", "recruitment-list__card-author-role", 4, "ngIf"], ["class", "recruitment-list__card-deadline", 4, "ngIf"], [1, "recruitment-list__card-actions"], ["title", "\u7DE8\u96C6", 1, "recruitment-list__card-action-btn", 3, "click"], ["title", "\u524A\u9664", 1, "recruitment-list__card-action-btn", "recruitment-list__card-action-btn--danger", 3, "click"], [1, "recruitment-list__card-visual"], [3, "src", "alt"], ["class", "recruitment-list__card-badge recruitment-list__card-badge--compensation", 4, "ngIf"], ["class", "recruitment-list__card-img-count", 4, "ngIf"], [1, "recruitment-list__card-badge", "recruitment-list__card-badge--compensation"], [1, "recruitment-list__card-img-count"], [1, "recruitment-list__card-visual", "recruitment-list__card-visual--placeholder"], [1, "recruitment-list__card-author-role"], [4, "ngIf"], [1, "recruitment-list__card-deadline"], [1, "recruitment-list__empty"]], template: function RecruitmentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-blur-overlay", 0);
        \u0275\u0275listener("joinRequest", function RecruitmentListComponent_Template_app_blur_overlay_joinRequest_0_listener() {
          return ctx.onJoinRequest();
        });
        \u0275\u0275template(1, RecruitmentListComponent_app_recruitment_detail_1_Template, 1, 2, "app-recruitment-detail", 1)(2, RecruitmentListComponent_div_2_Template, 11, 7, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("blurred", !ctx.isMember);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedRecruitment);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedRecruitment);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, MatDialogModule, BlurOverlayComponent, AvatarComponent, TruncatePipe, RelativeTimePipe, RecruitmentDetailComponent], styles: ['@charset "UTF-8";\n\n\n\n.recruitment-list[_ngcontent-%COMP%] {\n}\n.recruitment-list__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.recruitment-list__search[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 24px;\n  background: #f1f3f4;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n}\n.recruitment-list__search[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.recruitment-list__search[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.3);\n}\n.recruitment-list__create-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  border-radius: 24px;\n  padding: 10px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.recruitment-list__create-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.recruitment-list__info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9e9e9e;\n  margin-bottom: 12px;\n}\n.recruitment-list__pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 12px 0;\n}\n.recruitment-list__pager-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9e9e9e;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n}\n.recruitment-list__pager-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #ff9800;\n}\n.recruitment-list__pager-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\n.recruitment-list__pager-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.recruitment-list__pager-num[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 13px;\n  color: #5f6368;\n  cursor: pointer;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.recruitment-list__pager-num[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.recruitment-list__pager-num--active[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.recruitment-list__pager-num--active[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.recruitment-list__items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .recruitment-list__items[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .recruitment-list__items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.recruitment-list__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2dfdc;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  position: relative;\n}\n.recruitment-list__card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.recruitment-list__card-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  display: flex;\n  gap: 4px;\n  z-index: 2;\n}\n.recruitment-list__card-action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.92);\n  border: 1px solid #e0e0e0;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #5f6368;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    transform 0.15s;\n}\n.recruitment-list__card-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.recruitment-list__card-action-btn[_ngcontent-%COMP%]:hover {\n  background: #ff9800;\n  color: #fff;\n  transform: scale(1.05);\n}\n.recruitment-list__card-action-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #e53935;\n}\n.recruitment-list__card-visual[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n  position: relative;\n}\n.recruitment-list__card-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.recruitment-list__card-visual--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #fff3e0 0%,\n      #ffe0b2 50%,\n      #ffcc80 100%);\n}\n.recruitment-list__card-visual--placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: rgba(255, 152, 0, 0.4);\n}\n.recruitment-list__card-badge--compensation[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.recruitment-list__card-img-count[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 12px;\n}\n.recruitment-list__card-img-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.recruitment-list__card-inner[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.recruitment-list__card-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0 0 10px;\n  line-height: 1.5;\n}\n.recruitment-list__card-problem[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5f6368;\n  line-height: 1.7;\n  margin: 0 0 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.recruitment-list__card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.recruitment-list__card-author-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.recruitment-list__card-author-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.recruitment-list__card-author-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #81766e;\n}\n.recruitment-list__card-author-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n}\n.recruitment-list__card-deadline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9e9e9e;\n  white-space: nowrap;\n}\n.recruitment-list__card-deadline[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.recruitment-list__empty[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  color: #9e9e9e;\n  font-size: 14px;\n  padding: 32px 0;\n}\n@media (max-width: 640px) {\n  .recruitment-list__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .recruitment-list__search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .recruitment-list__card-inner[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .recruitment-list__card-visual[_ngcontent-%COMP%] {\n    height: 150px;\n    overflow: hidden;\n  }\n  .recruitment-list__card-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n  }\n  .recruitment-list__card-author-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .recruitment-list__card-author-row[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .recruitment-list__card-deadline[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .recruitment-list__card-deadline[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .recruitment-list__card-img-count[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .recruitment-list__card-img-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n}\n/*# sourceMappingURL=recruitment-list.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruitmentListComponent, { className: "RecruitmentListComponent", filePath: "src\\app\\features\\community\\components\\recruitment-list\\recruitment-list.component.ts", lineNumber: 28 });
})();

// src/app/features/community/components/appeal-detail/appeal-detail.component.ts
function AppealDetailComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "\u53C2\u52A0\u3059\u308B\u3068\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308C\u307E\u3059");
    \u0275\u0275elementEnd();
  }
}
function AppealDetailComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.mainImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.appeal.title);
  }
}
function AppealDetailComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function AppealDetailComponent_div_21_div_2_Template_div_click_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onGalleryClick(i_r3));
    });
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r4, \u0275\u0275sanitizeUrl)("alt", ctx_r0.appeal.title + " " + (i_r3 + 2));
  }
}
function AppealDetailComponent_div_21_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function AppealDetailComponent_div_21_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.galleryPrev());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
}
function AppealDetailComponent_div_21_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function AppealDetailComponent_div_21_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.galleryNext());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd()();
  }
}
function AppealDetailComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275template(2, AppealDetailComponent_div_21_div_2_Template, 2, 2, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AppealDetailComponent_div_21_button_3_Template, 3, 0, "button", 26)(4, AppealDetailComponent_div_21_button_4_Template, 3, 0, "button", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", "translateX(-" + ctx_r0.galleryOffset + "px)");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.subImages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.galleryOffset > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canGalleryNext);
  }
}
function AppealDetailComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function AppealDetailComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeLightbox());
    });
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275elementStart(2, "button", 33)(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.lightboxImage, \u0275\u0275sanitizeUrl);
  }
}
function AppealDetailComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r8, " ");
  }
}
var AppealDetailComponent = class _AppealDetailComponent {
  constructor() {
    this.isMember = false;
    this.back = new EventEmitter();
    this.interested = new EventEmitter();
    this.mainImage = null;
    this.subImages = [];
    this.galleryOffset = 0;
    this.lightboxImage = null;
  }
  ngOnInit() {
    this.setupImages();
  }
  ngOnChanges(changes) {
    if (changes["appeal"]) {
      this.setupImages();
    }
  }
  setupImages() {
    const urls = this.appeal.imageUrls || (this.appeal.imageUrl ? [this.appeal.imageUrl] : []);
    this.mainImage = urls.length > 0 ? urls[0] : null;
    this.subImages = urls.slice(1);
    this.galleryOffset = 0;
  }
  get canGalleryNext() {
    return this.galleryOffset < (this.subImages.length - 2) * 220;
  }
  galleryPrev() {
    this.galleryOffset = Math.max(0, this.galleryOffset - 220);
  }
  galleryNext() {
    this.galleryOffset += 220;
  }
  onGalleryClick(index) {
    this.lightboxImage = this.subImages[index];
  }
  closeLightbox() {
    this.lightboxImage = null;
  }
  onBack() {
    this.back.emit();
  }
  onInterested() {
    this.interested.emit(this.appeal);
  }
  static {
    this.\u0275fac = function AppealDetailComponent_Factory(t) {
      return new (t || _AppealDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppealDetailComponent, selectors: [["app-appeal-detail"]], inputs: { appeal: "appeal", isMember: "isMember" }, outputs: { back: "back", interested: "interested" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 38, vars: 16, consts: [[1, "appeal-detail"], [1, "appeal-detail__back", 3, "click"], [1, "appeal-detail__top-bar"], [1, "appeal-detail__author"], [3, "name", "imageUrl", "size"], [1, "appeal-detail__author-info"], [1, "appeal-detail__author-name"], [1, "appeal-detail__date"], [1, "appeal-detail__cta"], [1, "appeal-detail__interested-btn", 3, "click", "disabled"], ["class", "appeal-detail__cta-hint", 4, "ngIf"], [1, "appeal-detail__title"], ["class", "appeal-detail__hero", 4, "ngIf"], ["class", "appeal-detail__gallery", 4, "ngIf"], ["class", "appeal-detail__lightbox", 3, "click", 4, "ngIf"], [1, "appeal-detail__section"], [1, "appeal-detail__section-title"], [1, "appeal-detail__section-text"], [1, "appeal-detail__skills"], ["class", "appeal-detail__skill", 4, "ngFor", "ngForOf"], [1, "appeal-detail__cta-hint"], [1, "appeal-detail__hero"], [3, "src", "alt"], [1, "appeal-detail__gallery"], [1, "appeal-detail__gallery-track"], ["class", "appeal-detail__gallery-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "appeal-detail__gallery-prev", 3, "click", 4, "ngIf"], ["class", "appeal-detail__gallery-next", 3, "click", 4, "ngIf"], [1, "appeal-detail__gallery-item", 3, "click"], [1, "appeal-detail__gallery-prev", 3, "click"], [1, "appeal-detail__gallery-next", 3, "click"], [1, "appeal-detail__lightbox", 3, "click"], [3, "src"], [1, "appeal-detail__lightbox-close"], [1, "appeal-detail__skill"]], template: function AppealDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275listener("click", function AppealDetailComponent_Template_a_click_1_listener() {
          return ctx.onBack();
        });
        \u0275\u0275text(2, " < \u30A2\u30D4\u30FC\u30EB\u4E00\u89A7\u306B\u623B\u308B ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275element(5, "app-avatar", 4);
        \u0275\u0275elementStart(6, "div", 5)(7, "span", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "relativeTime");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
        \u0275\u0275listener("click", function AppealDetailComponent_Template_button_click_13_listener() {
          return ctx.onInterested();
        });
        \u0275\u0275elementStart(14, "mat-icon");
        \u0275\u0275text(15, "favorite");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " \u8208\u5473\u3042\u308A\u30FB\u8A71\u3092\u805E\u304D\u305F\u3044 ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, AppealDetailComponent_span_17_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "h2", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, AppealDetailComponent_div_20_Template, 2, 2, "div", 12)(21, AppealDetailComponent_div_21_Template, 5, 5, "div", 13)(22, AppealDetailComponent_div_22_Template, 5, 1, "div", 14);
        \u0275\u0275elementStart(23, "div", 15)(24, "h3", 16);
        \u0275\u0275text(25, "\u81EA\u5DF1\u7D39\u4ECB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 17);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 15)(29, "h3", 16);
        \u0275\u0275text(30, "\u30B9\u30AD\u30EB\u30FB\u5C02\u9580\u9818\u57DF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 18);
        \u0275\u0275template(32, AppealDetailComponent_span_32_Template, 2, 1, "span", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 15)(34, "h3", 16);
        \u0275\u0275text(35, "\u3053\u3093\u306A\u4EBA\u3068\u51FA\u4F1A\u3044\u305F\u3044");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p", 17);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("name", ctx.appeal.authorName)("imageUrl", ctx.appeal.authorAvatar)("size", 40);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.appeal.authorName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, ctx.appeal.createdAt));
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.isMember);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.isMember);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.appeal.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mainImage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subImages.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.lightboxImage);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.appeal.selfIntro);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.appeal.skills);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.appeal.wantToMeet);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatIconModule, MatIcon, AvatarComponent, RelativeTimePipe], styles: ["\n\n.appeal-detail[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n}\n.appeal-detail__back[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  color: #5f6368;\n  cursor: pointer;\n  margin-bottom: 20px;\n  text-decoration: none;\n}\n.appeal-detail__back[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n}\n.appeal-detail__top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 16px;\n}\n.appeal-detail__author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.appeal-detail__author-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.appeal-detail__author-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #81766e;\n}\n.appeal-detail__date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.appeal-detail__cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.appeal-detail__cta-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n}\n.appeal-detail__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0 0 24px;\n  line-height: 1.4;\n}\n.appeal-detail__section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.appeal-detail__section-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 8px;\n}\n.appeal-detail__section-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5f6368;\n  line-height: 1.7;\n  margin: 0;\n  white-space: pre-wrap;\n}\n.appeal-detail__skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.appeal-detail__skill[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #fff3e0;\n  color: #e65100;\n  font-size: 13px;\n  padding: 4px 14px;\n  border-radius: 24px;\n}\n.appeal-detail__hero[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.appeal-detail__hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n  display: block;\n}\n.appeal-detail__gallery[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.appeal-detail__gallery-track[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  transition: transform 0.3s ease;\n}\n.appeal-detail__gallery-item[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 200px;\n  height: 140px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: border-color 0.2s, transform 0.2s;\n}\n.appeal-detail__gallery-item[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  transform: scale(1.03);\n}\n.appeal-detail__gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.appeal-detail__gallery-prev[_ngcontent-%COMP%], .appeal-detail__gallery-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.appeal-detail__gallery-prev[_ngcontent-%COMP%]:hover, .appeal-detail__gallery-next[_ngcontent-%COMP%]:hover {\n  background: #fff;\n}\n.appeal-detail__gallery-prev[_ngcontent-%COMP%] {\n  left: 8px;\n}\n.appeal-detail__gallery-next[_ngcontent-%COMP%] {\n  right: 8px;\n}\n.appeal-detail__lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  cursor: pointer;\n}\n.appeal-detail__lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 90vh;\n  max-height: 90dvh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.appeal-detail__lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.appeal-detail__interested-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 40px;\n  border: none;\n  border-radius: 24px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n}\n.appeal-detail__interested-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.appeal-detail__interested-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f57c00;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(255, 152, 0, 0.4);\n}\n.appeal-detail__interested-btn[_ngcontent-%COMP%]:disabled {\n  background: #e2dfdc;\n  color: #9e9e9e;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n@media (max-width: 640px) {\n  .appeal-detail[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 0;\n  }\n  .appeal-detail__top-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .appeal-detail__cta[_ngcontent-%COMP%] {\n    align-items: stretch;\n    width: 100%;\n  }\n  .appeal-detail__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .appeal-detail__hero[_ngcontent-%COMP%] {\n    margin-left: -16px;\n    margin-right: -16px;\n    border-radius: 0;\n  }\n  .appeal-detail__hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 240px;\n  }\n  .appeal-detail__gallery-item[_ngcontent-%COMP%] {\n    width: 160px;\n    height: 110px;\n  }\n  .appeal-detail__interested-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 14px 24px;\n  }\n}\n/*# sourceMappingURL=appeal-detail.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppealDetailComponent, { className: "AppealDetailComponent", filePath: "src\\app\\features\\community\\components\\appeal-detail\\appeal-detail.component.ts", lineNumber: 16 });
})();

// src/app/features/community/components/appeal-list/appeal-list.component.ts
function AppealListComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-appeal-detail", 4);
    \u0275\u0275listener("back", function AppealListComponent_ng_container_2_Template_app_appeal_detail_back_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBackToList());
    })("interested", function AppealListComponent_ng_container_2_Template_app_appeal_detail_interested_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInterested($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("appeal", ctx_r2.selectedAppeal)("isMember", ctx_r2.isMember);
  }
}
function AppealListComponent_ng_template_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function AppealListComponent_ng_template_3_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCreate());
    });
    \u0275\u0275text(1, " \u65B0\u898F\u30A2\u30D4\u30FC\u30EB\u3092\u4F5C\u6210 ");
    \u0275\u0275elementEnd();
  }
}
function AppealListComponent_ng_template_3_div_5_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AppealListComponent_ng_template_3_div_5_button_4_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("appeal-list__pager-num--active", p_r8 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r8, " ");
  }
}
function AppealListComponent_ng_template_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function AppealListComponent_ng_template_3_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AppealListComponent_ng_template_3_div_5_button_4_Template, 2, 3, "button", 16);
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function AppealListComponent_ng_template_3_div_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage + 1));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
function AppealListComponent_ng_template_3_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function AppealListComponent_ng_template_3_div_7_div_1_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const appeal_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEdit(appeal_r10, $event));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function AppealListComponent_ng_template_3_div_7_div_1_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const appeal_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDelete(appeal_r10, $event));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function AppealListComponent_ng_template_3_div_7_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38)(1, "mat-icon");
    \u0275\u0275text(2, "photo_library");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appeal_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", appeal_r10.imageUrls.length, " ");
  }
}
function AppealListComponent_ng_template_3_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275template(2, AppealListComponent_ng_template_3_div_7_div_2_span_2_Template, 4, 1, "span", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appeal_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", appeal_r10.imageUrls && appeal_r10.imageUrls.length > 0 ? appeal_r10.imageUrls[0] : appeal_r10.imageUrl, \u0275\u0275sanitizeUrl)("alt", appeal_r10.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", appeal_r10.imageUrls && appeal_r10.imageUrls.length > 1);
  }
}
function AppealListComponent_ng_template_3_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "mat-icon");
    \u0275\u0275text(2, "person_outline");
    \u0275\u0275elementEnd()();
  }
}
function AppealListComponent_ng_template_3_div_7_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r12);
  }
}
function AppealListComponent_ng_template_3_div_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, AppealListComponent_ng_template_3_div_7_div_10_span_1_Template, 2, 1, "span", 41);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appeal_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 1, appeal_r10.skills, 0, 4));
  }
}
function AppealListComponent_ng_template_3_div_7_span_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " / ");
    \u0275\u0275elementEnd();
  }
}
function AppealListComponent_ng_template_3_div_7_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AppealListComponent_ng_template_3_div_7_span_17_span_2_Template, 2, 0, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appeal_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", appeal_r10.authorJobTitle, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", appeal_r10.authorCompany && appeal_r10.authorJobTitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", appeal_r10.authorCompany, " ");
  }
}
function AppealListComponent_ng_template_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function AppealListComponent_ng_template_3_div_7_Template_div_click_0_listener() {
      const appeal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSelectAppeal(appeal_r10));
    });
    \u0275\u0275template(1, AppealListComponent_ng_template_3_div_7_div_1_Template, 7, 0, "div", 19)(2, AppealListComponent_ng_template_3_div_7_div_2_Template, 3, 3, "div", 20)(3, AppealListComponent_ng_template_3_div_7_div_3_Template, 3, 0, "div", 21);
    \u0275\u0275elementStart(4, "div", 22)(5, "h4", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "truncate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AppealListComponent_ng_template_3_div_7_div_10_Template, 3, 5, "div", 25);
    \u0275\u0275elementStart(11, "div", 26)(12, "div", 27);
    \u0275\u0275element(13, "app-avatar", 28);
    \u0275\u0275elementStart(14, "div", 29)(15, "span", 30);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AppealListComponent_ng_template_3_div_7_span_17_Template, 4, 3, "span", 31);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const appeal_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMine(appeal_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", appeal_r10.imageUrls && appeal_r10.imageUrls.length > 0 || appeal_r10.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(appeal_r10.imageUrls && appeal_r10.imageUrls.length > 0) && !appeal_r10.imageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(appeal_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 11, appeal_r10.selfIntro, 100));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", appeal_r10.skills == null ? null : appeal_r10.skills.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", appeal_r10.authorName)("imageUrl", appeal_r10.authorAvatar)("size", 28);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(appeal_r10.authorName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", appeal_r10.authorCompany || appeal_r10.authorJobTitle);
  }
}
function AppealListComponent_ng_template_3_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1, " \u30A2\u30D4\u30FC\u30EB\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093 ");
    \u0275\u0275elementEnd();
  }
}
function AppealListComponent_ng_template_3_div_9_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AppealListComponent_ng_template_3_div_9_button_4_Template_button_click_0_listener() {
      const p_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("appeal-list__pager-num--active", p_r15 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r15, " ");
  }
}
function AppealListComponent_ng_template_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function AppealListComponent_ng_template_3_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AppealListComponent_ng_template_3_div_9_button_4_Template, 2, 3, "button", 16);
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function AppealListComponent_ng_template_3_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage + 1));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
function AppealListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function AppealListComponent_ng_template_3_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchTerm, $event) || (ctx_r2.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AppealListComponent_ng_template_3_Template_input_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, AppealListComponent_ng_template_3_button_2_Template, 2, 0, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AppealListComponent_ng_template_3_div_5_Template, 8, 3, "div", 9);
    \u0275\u0275elementStart(6, "div", 10);
    \u0275\u0275template(7, AppealListComponent_ng_template_3_div_7_Template, 18, 14, "div", 11)(8, AppealListComponent_ng_template_3_p_8_Template, 2, 0, "p", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AppealListComponent_ng_template_3_div_9_Template, 8, 3, "div", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isMember);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.filteredAppeals.length, "\u4EF6\u306E\u30A2\u30D4\u30FC\u30EB ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.totalPages > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pagedAppeals);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pagedAppeals.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.totalPages > 1);
  }
}
var AppealListComponent = class _AppealListComponent {
  constructor(communityService, cdr, dialog, notification, confirmDialog, router) {
    this.communityService = communityService;
    this.cdr = cdr;
    this.dialog = dialog;
    this.notification = notification;
    this.confirmDialog = confirmDialog;
    this.router = router;
    this.communityId = "";
    this.isMember = false;
    this.selectAppeal = new EventEmitter();
    this.createAppeal = new EventEmitter();
    this.allAppeals = [];
    this.filteredAppeals = [];
    this.pagedAppeals = [];
    this.searchTerm = "";
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 1;
    this.selectedAppeal = null;
  }
  ngOnInit() {
    this.loadAppeals();
  }
  ngOnChanges(changes) {
    if (changes["communityId"] && !changes["communityId"].firstChange) {
      this.loadAppeals();
    }
  }
  loadAppeals() {
    if (!this.communityId)
      return;
    this.communityService.searchAppeals(this.communityId, "").subscribe((appeals) => {
      this.allAppeals = appeals;
      this.applyFilter();
      this.cdr.markForCheck();
    });
  }
  applyFilter() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredAppeals = [...this.allAppeals];
    } else {
      this.filteredAppeals = this.allAppeals.filter((a) => (a.title || "").toLowerCase().includes(term) || (a.selfIntro || "").toLowerCase().includes(term) || (a.skills || []).join(" ").toLowerCase().includes(term) || (a.authorName || "").toLowerCase().includes(term) || (a.wantToMeet || "").toLowerCase().includes(term) || (a.authorCompany || "").toLowerCase().includes(term) || (a.authorJobTitle || "").toLowerCase().includes(term));
    }
    this.currentPage = 1;
    this.updatePagination();
  }
  updatePagination() {
    this.totalPages = Math.max(1, Math.ceil(this.filteredAppeals.length / this.pageSize));
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedAppeals = this.filteredAppeals.slice(start, start + this.pageSize);
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.updatePagination();
  }
  get pageNumbers() {
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;
    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  onSelectAppeal(appeal) {
    this.selectedAppeal = appeal;
  }
  onBackToList() {
    this.selectedAppeal = null;
  }
  /**
   * fix (2026-04-27): SP モーダルクリック不能問題対策。
   * MatDialog → ルート遷移 (/community/:id/sub/appeal/create) に変更。
   */
  onCreate() {
    this.router.navigate(["/community", this.communityId, "sub", "appeal", "create"]);
  }
  /** 自分が作成したアピールか (ユーザー指示 2026-04-21) */
  isMine(a) {
    return this.communityService.isCurrentUser(a.authorId);
  }
  onEdit(appeal, ev) {
    ev?.stopPropagation();
    const dialogRef = this.dialog.open(AppealCreateComponent, {
      width: "94vw",
      maxWidth: "560px",
      maxHeight: "90dvh",
      panelClass: "community-create-dialog",
      data: { communityId: this.communityId, editing: appeal }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadAppeals();
        this.notification.success("\u30A2\u30D4\u30FC\u30EB\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
      }
    });
  }
  /* 修正 No.53 (2026-04-24): 独自 confirm モーダル化 */
  onDelete(appeal, ev) {
    return __async(this, null, function* () {
      ev?.stopPropagation();
      const ok = yield this.confirmDialog.confirm({
        title: "\u30A2\u30D4\u30FC\u30EB\u306E\u524A\u9664",
        message: `\u300C${appeal.title}\u300D\u3092\u524A\u9664\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F`,
        confirmText: "\u524A\u9664",
        danger: true
      });
      if (!ok)
        return;
      this.communityService.deleteAppeal(appeal.id).subscribe(() => {
        this.loadAppeals();
        this.notification.warn("\u30A2\u30D4\u30FC\u30EB\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
      });
    });
  }
  onInterested(appeal) {
    this.dialog.open(ChatRequestComponent, {
      width: "90vw",
      maxWidth: "420px",
      panelClass: "community-create-dialog",
      data: {
        type: "appeal",
        targetName: appeal.authorName,
        prefilledInfo: appeal.title,
        communityName: ""
      }
    });
  }
  onJoinRequest() {
    this.communityService.requestJoin(this.communityId).subscribe(() => {
      this.isMember = true;
      this.notification.success("\u53C2\u52A0\u7533\u8ACB\u304C\u627F\u8A8D\u3055\u308C\u307E\u3057\u305F");
      this.cdr.markForCheck();
    });
  }
  static {
    this.\u0275fac = function AppealListComponent_Factory(t) {
      return new (t || _AppealListComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppealListComponent, selectors: [["app-appeal-list"]], inputs: { communityId: "communityId", isMember: "isMember" }, outputs: { selectAppeal: "selectAppeal", createAppeal: "createAppeal" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [["listView", ""], [3, "joinRequest", "blurred"], [1, "appeal-list"], [4, "ngIf", "ngIfElse"], [3, "back", "interested", "appeal", "isMember"], [1, "appeal-list__header"], ["type", "text", "placeholder", "\u30A2\u30D4\u30FC\u30EB\u3092\u691C\u7D22...", 1, "appeal-list__search", 3, "ngModelChange", "ngModel"], ["class", "appeal-list__create-btn", 3, "click", 4, "ngIf"], [1, "appeal-list__info"], ["class", "appeal-list__pager", 4, "ngIf"], [1, "appeal-list__items"], ["class", "appeal-list__card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "appeal-list__empty", 4, "ngIf"], [1, "appeal-list__create-btn", 3, "click"], [1, "appeal-list__pager"], [1, "appeal-list__pager-btn", 3, "click", "disabled"], ["class", "appeal-list__pager-num", 3, "appeal-list__pager-num--active", "click", 4, "ngFor", "ngForOf"], [1, "appeal-list__pager-num", 3, "click"], [1, "appeal-list__card", 3, "click"], ["class", "appeal-list__card-actions", 4, "ngIf"], ["class", "appeal-list__card-visual", 4, "ngIf"], ["class", "appeal-list__card-visual appeal-list__card-visual--placeholder", 4, "ngIf"], [1, "appeal-list__card-inner"], [1, "appeal-list__card-title"], [1, "appeal-list__card-intro"], ["class", "appeal-list__card-skills", 4, "ngIf"], [1, "appeal-list__card-footer"], [1, "appeal-list__card-author-row"], [3, "name", "imageUrl", "size"], [1, "appeal-list__card-author-info"], [1, "appeal-list__card-author-name"], ["class", "appeal-list__card-author-role", 4, "ngIf"], [1, "appeal-list__card-actions"], ["title", "\u7DE8\u96C6", 1, "appeal-list__card-action-btn", 3, "click"], ["title", "\u524A\u9664", 1, "appeal-list__card-action-btn", "appeal-list__card-action-btn--danger", 3, "click"], [1, "appeal-list__card-visual"], [3, "src", "alt"], ["class", "appeal-list__card-img-count", 4, "ngIf"], [1, "appeal-list__card-img-count"], [1, "appeal-list__card-visual", "appeal-list__card-visual--placeholder"], [1, "appeal-list__card-skills"], ["class", "appeal-list__card-skill", 4, "ngFor", "ngForOf"], [1, "appeal-list__card-skill"], [1, "appeal-list__card-author-role"], [4, "ngIf"], [1, "appeal-list__empty"]], template: function AppealListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-blur-overlay", 1);
        \u0275\u0275listener("joinRequest", function AppealListComponent_Template_app_blur_overlay_joinRequest_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onJoinRequest());
        });
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275template(2, AppealListComponent_ng_container_2_Template, 2, 2, "ng-container", 3)(3, AppealListComponent_ng_template_3_Template, 10, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const listView_r16 = \u0275\u0275reference(4);
        \u0275\u0275property("blurred", !ctx.isMember);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.selectedAppeal)("ngIfElse", listView_r16);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, MatDialogModule, BlurOverlayComponent, AvatarComponent, TruncatePipe, AppealDetailComponent], styles: ['@charset "UTF-8";\n\n\n\n.appeal-list[_ngcontent-%COMP%] {\n}\n.appeal-list__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n.appeal-list__search[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 24px;\n  background: #f1f3f4;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n}\n.appeal-list__search[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.appeal-list__search[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.3);\n}\n.appeal-list__create-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  border-radius: 24px;\n  padding: 10px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.appeal-list__create-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.appeal-list__info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5f6368;\n  margin-bottom: 8px;\n  padding: 0 4px;\n}\n.appeal-list__pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 12px 0;\n}\n.appeal-list__pager-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: 1px solid #e2dfdc;\n  border-radius: 6px;\n  background: #fff;\n  color: #5f6368;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.appeal-list__pager-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1f3f4;\n  color: #81766e;\n}\n.appeal-list__pager-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.appeal-list__pager-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.appeal-list__pager-num[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 32px;\n  height: 32px;\n  border: 1px solid #e2dfdc;\n  border-radius: 6px;\n  background: #fff;\n  color: #5f6368;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.appeal-list__pager-num[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n  color: #81766e;\n}\n.appeal-list__pager-num--active[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  border-color: #ff9800;\n}\n.appeal-list__pager-num--active[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n  color: #fff;\n}\n.appeal-list__items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .appeal-list__items[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .appeal-list__items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.appeal-list__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2dfdc;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  position: relative;\n}\n.appeal-list__card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.appeal-list__card-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  display: flex;\n  gap: 4px;\n  z-index: 2;\n}\n.appeal-list__card-action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.92);\n  border: 1px solid #e0e0e0;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #5f6368;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    transform 0.15s;\n}\n.appeal-list__card-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.appeal-list__card-action-btn[_ngcontent-%COMP%]:hover {\n  background: #ff9800;\n  color: #fff;\n  transform: scale(1.05);\n}\n.appeal-list__card-action-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #e53935;\n}\n.appeal-list__card-visual[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n  position: relative;\n}\n.appeal-list__card-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.appeal-list__card-visual--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9 0%,\n      #c8e6c9 50%,\n      #a5d6a7 100%);\n}\n.appeal-list__card-visual--placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: rgba(76, 175, 80, 0.4);\n}\n.appeal-list__card-img-count[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 12px;\n}\n.appeal-list__card-img-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.appeal-list__card-inner[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.appeal-list__card-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0 0 10px;\n  line-height: 1.5;\n}\n.appeal-list__card-intro[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5f6368;\n  line-height: 1.7;\n  margin: 0 0 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.appeal-list__card-skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.appeal-list__card-skill[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #fff3e0;\n  color: #e65100;\n  font-size: 11px;\n  padding: 3px 10px;\n  border-radius: 24px;\n}\n.appeal-list__card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.appeal-list__card-author-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.appeal-list__card-author-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.appeal-list__card-author-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #81766e;\n}\n.appeal-list__card-author-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n}\n.appeal-list__empty[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  color: #9e9e9e;\n  font-size: 14px;\n  padding: 32px 0;\n}\n@media (max-width: 640px) {\n  .appeal-list__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .appeal-list__search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .appeal-list__card-inner[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .appeal-list__card-visual[_ngcontent-%COMP%] {\n    height: 150px;\n    overflow: hidden;\n  }\n  .appeal-list__card-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n  }\n  .appeal-list__card-author-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .appeal-list__card-author-row[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .appeal-list__card-img-count[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .appeal-list__card-img-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n}\n/*# sourceMappingURL=appeal-list.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppealListComponent, { className: "AppealListComponent", filePath: "src\\app\\features\\community\\components\\appeal-list\\appeal-list.component.ts", lineNumber: 27 });
})();

// src/app/features/community/components/thread-detail/thread-detail.component.ts
function ThreadDetailComponent_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r1);
  }
}
function ThreadDetailComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, ThreadDetailComponent_div_17_span_1_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.thread.tags);
  }
}
function ThreadDetailComponent_span_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.thread.authorCompany);
  }
}
function ThreadDetailComponent_span_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " / ");
    \u0275\u0275elementEnd();
  }
}
function ThreadDetailComponent_span_23_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.thread.authorJobTitle);
  }
}
function ThreadDetailComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275template(1, ThreadDetailComponent_span_23_span_1_Template, 2, 1, "span", 37)(2, ThreadDetailComponent_span_23_span_2_Template, 2, 0, "span", 37)(3, ThreadDetailComponent_span_23_span_3_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.thread.authorCompany);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.thread.authorCompany && ctx_r1.thread.authorJobTitle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.thread.authorJobTitle);
  }
}
function ThreadDetailComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.thread.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.thread.title);
  }
}
function ThreadDetailComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ThreadDetailComponent_button_31_Template_button_click_0_listener() {
      const kind_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleThreadReaction(kind_r4));
    });
    \u0275\u0275elementStart(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kind_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("thread-detail__reaction--active", ctx_r1.reactionByMe(ctx_r1.thread.reactions, kind_r4));
    \u0275\u0275property("hidden", ctx_r1.reactionCount(ctx_r1.thread.reactions, kind_r4) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.reactionEmoji(kind_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.reactionCount(ctx_r1.thread.reactions, kind_r4));
  }
}
function ThreadDetailComponent_div_38_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_38_button_1_Template_button_click_0_listener($event) {
      const kind_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectThreadReaction(kind_r7, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kind_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("thread-detail__reaction-popup-item--active", ctx_r1.reactionByMe(ctx_r1.thread.reactions, kind_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.reactionEmoji(kind_r7));
  }
}
function ThreadDetailComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_38_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, ThreadDetailComponent_div_38_button_1_Template, 2, 3, "button", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.REACTION_KINDS);
  }
}
function ThreadDetailComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "(\u7DE8\u96C6\u6E08\u307F)");
    \u0275\u0275elementEnd();
  }
}
function ThreadDetailComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "app-avatar", 49);
    \u0275\u0275elementStart(3, "textarea", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ThreadDetailComponent_div_56_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.replyText, $event) || (ctx_r1.replyText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ThreadDetailComponent_div_56_Template_textarea_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReplyChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 51)(5, "button", 52);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_56_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmitReply());
    });
    \u0275\u0275text(6, " \u56DE\u7B54\u3092\u6295\u7A3F ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 36);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.replyText);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.replyText.trim());
  }
}
function ThreadDetailComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "mat-icon");
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u56DE\u7B54\u3092\u6295\u7A3F\u3059\u308B\u306B\u306F\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u53C2\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
    \u0275\u0275elementEnd()();
  }
}
function ThreadDetailComponent_div_58_div_1_span_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r9.authorCompany);
  }
}
function ThreadDetailComponent_div_58_div_1_span_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " / ");
    \u0275\u0275elementEnd();
  }
}
function ThreadDetailComponent_div_58_div_1_span_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r9.authorJobTitle);
  }
}
function ThreadDetailComponent_div_58_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275template(1, ThreadDetailComponent_div_58_div_1_span_8_span_1_Template, 2, 1, "span", 37)(2, ThreadDetailComponent_div_58_div_1_span_8_span_2_Template, 2, 0, "span", 37)(3, ThreadDetailComponent_div_58_div_1_span_8_span_3_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r9.authorCompany);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r9.authorCompany && comment_r9.authorJobTitle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r9.authorJobTitle);
  }
}
function ThreadDetailComponent_div_58_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "textarea", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ThreadDetailComponent_div_58_div_1_div_12_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingCommentText, $event) || (ctx_r1.editingCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 69)(3, "button", 52);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_58_div_1_div_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEditComment());
    });
    \u0275\u0275text(4, "\u4FDD\u5B58");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 70);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_58_div_1_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEditComment());
    });
    \u0275\u0275text(6, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editingCommentText);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.editingCommentText.trim());
  }
}
function ThreadDetailComponent_div_58_div_1_ng_container_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "(\u7DE8\u96C6\u6E08\u307F)");
    \u0275\u0275elementEnd();
  }
}
function ThreadDetailComponent_div_58_div_1_ng_container_13_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_58_div_1_ng_container_13_button_5_Template_button_click_0_listener() {
      const kind_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const comment_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCommentReaction(comment_r9, kind_r13));
    });
    \u0275\u0275elementStart(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kind_r13 = ctx.$implicit;
    const comment_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("thread-detail__reaction--active", ctx_r1.reactionByMe(comment_r9.reactions, kind_r13));
    \u0275\u0275property("hidden", ctx_r1.reactionCount(comment_r9.reactions, kind_r13) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.reactionEmoji(kind_r13));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.reactionCount(comment_r9.reactions, kind_r13));
  }
}
function ThreadDetailComponent_div_58_div_1_ng_container_13_div_12_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_58_div_1_ng_container_13_div_12_button_1_Template_button_click_0_listener($event) {
      const kind_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const comment_r9 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCommentReaction(comment_r9, kind_r16, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kind_r16 = ctx.$implicit;
    const comment_r9 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("thread-detail__reaction-popup-item--active", ctx_r1.reactionByMe(comment_r9.reactions, kind_r16));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.reactionEmoji(kind_r16));
  }
}
function ThreadDetailComponent_div_58_div_1_ng_container_13_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_58_div_1_ng_container_13_div_12_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, ThreadDetailComponent_div_58_div_1_ng_container_13_div_12_button_1_Template, 2, 3, "button", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.REACTION_KINDS);
  }
}
function ThreadDetailComponent_div_58_div_1_ng_container_13_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_58_div_1_ng_container_13_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const comment_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditComment(comment_r9));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u7DE8\u96C6 ");
    \u0275\u0275elementEnd();
  }
}
function ThreadDetailComponent_div_58_div_1_ng_container_13_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_58_div_1_ng_container_13_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const comment_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteComment(comment_r9));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u524A\u9664 ");
    \u0275\u0275elementEnd();
  }
}
function ThreadDetailComponent_div_58_div_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 71);
    \u0275\u0275text(2);
    \u0275\u0275template(3, ThreadDetailComponent_div_58_div_1_ng_container_13_span_3_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 72);
    \u0275\u0275template(5, ThreadDetailComponent_div_58_div_1_ng_container_13_button_5_Template, 5, 5, "button", 73);
    \u0275\u0275elementStart(6, "div", 20)(7, "button", 74);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_58_div_1_ng_container_13_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r11);
      const comment_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCommentPicker(comment_r9.id, $event));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "sentiment_satisfied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-icon", 22);
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ThreadDetailComponent_div_58_div_1_ng_container_13_div_12_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 75)(14, "button", 76);
    \u0275\u0275listener("click", function ThreadDetailComponent_div_58_div_1_ng_container_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const comment_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLikeComment(comment_r9.id));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "thumb_up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, ThreadDetailComponent_div_58_div_1_ng_container_13_button_19_Template, 4, 0, "button", 77)(20, ThreadDetailComponent_div_58_div_1_ng_container_13_button_20_Template, 4, 0, "button", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const comment_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", comment_r9.content, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r9.edited);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.REACTION_KINDS);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.commentPickerOpenId === comment_r9.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(comment_r9.likes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMyComment(comment_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMyComment(comment_r9));
  }
}
function ThreadDetailComponent_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58);
    \u0275\u0275element(2, "app-avatar", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 59)(4, "div", 60)(5, "div", 61)(6, "span", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ThreadDetailComponent_div_58_div_1_span_8_Template, 4, 3, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 64);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "relativeTime");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ThreadDetailComponent_div_58_div_1_div_12_Template, 7, 2, "div", 65)(13, ThreadDetailComponent_div_58_div_1_ng_container_13_Template, 21, 7, "ng-container", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comment_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("imageUrl", comment_r9.authorAvatar)("name", comment_r9.authorName)("size", 40);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(comment_r9.authorName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r9.authorCompany || comment_r9.authorJobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, comment_r9.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.editingCommentId === comment_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingCommentId !== comment_r9.id);
  }
}
function ThreadDetailComponent_div_58_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275text(1, " \u307E\u3060\u56DE\u7B54\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6700\u521D\u306E\u56DE\u7B54\u3092\u6295\u7A3F\u3057\u307E\u3057\u3087\u3046! ");
    \u0275\u0275elementEnd();
  }
}
function ThreadDetailComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, ThreadDetailComponent_div_58_div_1_Template, 14, 10, "div", 55)(2, ThreadDetailComponent_div_58_div_2_Template, 2, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comments_r19 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", comments_r19);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comments_r19.length === 0);
  }
}
var ThreadDetailComponent = class _ThreadDetailComponent {
  constructor(communityService, notification, draftSvc, cdr, confirmDialog) {
    this.communityService = communityService;
    this.notification = notification;
    this.draftSvc = draftSvc;
    this.cdr = cdr;
    this.confirmDialog = confirmDialog;
    this.isMember = false;
    this.back = new EventEmitter();
    this.replyText = "";
    this.comments$ = of([]);
    this.editingCommentId = null;
    this.editingCommentText = "";
    this.REACTION_KINDS = ["like", "clap", "heart", "bulb", "laugh", "fire"];
    this._voted = false;
    this._liked = false;
    this._likedComments = /* @__PURE__ */ new Set();
    this.threadPickerOpen = false;
    this.commentPickerOpenId = null;
  }
  /** スレッド別の下書きキー (ユーザー指示 2026-04-21) */
  get replyDraftKey() {
    return "thread-reply:" + this.thread?.id;
  }
  ngOnInit() {
    this.loadComments();
    const draft = this.draftSvc.load(this.replyDraftKey);
    if (draft?.text)
      this.replyText = draft.text;
  }
  onBeforeUnload() {
    if (this.replyText)
      this.draftSvc.flush(this.replyDraftKey, { text: this.replyText });
  }
  ngOnDestroy() {
    if (this.replyText)
      this.draftSvc.flush(this.replyDraftKey, { text: this.replyText });
  }
  onReplyChange() {
    this.draftSvc.save(this.replyDraftKey, { text: this.replyText });
  }
  loadComments() {
    if (this.thread?.id) {
      this.comments$ = this.communityService.getThreadComments(this.thread.id);
    }
  }
  onBack() {
    this.back.emit();
  }
  onSubmitReply() {
    if (!this.replyText.trim())
      return;
    this.communityService.addThreadComment(this.thread.id, this.replyText.trim()).subscribe(() => {
      this.replyText = "";
      this.draftSvc.clear(this.replyDraftKey);
      this.comments$ = this.communityService.getThreadComments(this.thread.id);
      this.thread.replies++;
      this.cdr.markForCheck();
    });
  }
  onVote() {
    if (this._voted) {
      this.thread.votes = Math.max(0, (this.thread.votes || 0) - 1);
      this._voted = false;
    } else {
      this.thread.votes = (this.thread.votes || 0) + 1;
      this._voted = true;
    }
  }
  onLike() {
    if (this._liked) {
      this.thread.likes = Math.max(0, this.thread.likes - 1);
      this._liked = false;
    } else {
      this.thread.likes++;
      this._liked = true;
    }
  }
  isVoted() {
    return this._voted;
  }
  isLiked() {
    return this._liked;
  }
  onLikeComment(commentId) {
    if (this._likedComments.has(commentId)) {
      this._likedComments.delete(commentId);
      this.communityService.unlikeThreadComment(commentId);
    } else {
      this._likedComments.add(commentId);
      this.communityService.likeThreadComment(commentId);
    }
    this.comments$ = this.communityService.getThreadComments(this.thread.id);
    this.cdr.markForCheck();
  }
  isCommentLiked(commentId) {
    return this._likedComments.has(commentId);
  }
  /** コメント作者が自分か (ユーザー指示 2026-04-21) */
  isMyComment(c) {
    return this.communityService.isCurrentUser(c.authorId);
  }
  isMyThread() {
    return this.communityService.isCurrentUser(this.thread.authorId);
  }
  /** コメント編集開始 */
  startEditComment(c) {
    this.editingCommentId = c.id;
    this.editingCommentText = c.content;
  }
  cancelEditComment() {
    this.editingCommentId = null;
    this.editingCommentText = "";
  }
  saveEditComment() {
    if (!this.editingCommentId || !this.editingCommentText.trim())
      return;
    this.communityService.updateThreadComment(this.editingCommentId, this.editingCommentText.trim()).subscribe(() => {
      this.editingCommentId = null;
      this.editingCommentText = "";
      this.comments$ = this.communityService.getThreadComments(this.thread.id);
      this.notification.success("\u30B3\u30E1\u30F3\u30C8\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
      this.cdr.markForCheck();
    });
  }
  /* 修正 No.53 (2026-04-24): 独自 confirm モーダル化 */
  deleteComment(c) {
    return __async(this, null, function* () {
      const ok = yield this.confirmDialog.confirm({
        title: "\u30B3\u30E1\u30F3\u30C8\u306E\u524A\u9664",
        message: "\u3053\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u524A\u9664\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F",
        confirmText: "\u524A\u9664",
        danger: true
      });
      if (!ok)
        return;
      this.communityService.deleteThreadComment(c.id).subscribe(() => {
        this.comments$ = this.communityService.getThreadComments(this.thread.id);
        this.thread.replies = Math.max(0, this.thread.replies - 1);
        this.notification.warn("\u30B3\u30E1\u30F3\u30C8\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
        this.cdr.markForCheck();
      });
    });
  }
  /** スレッド本体のリアクション */
  toggleThreadReaction(kind) {
    this.communityService.toggleThreadReaction(this.thread.id, kind);
    const existing = (this.thread.reactions || []).find((r) => r.kind === kind);
    if (existing) {
      if (existing.byMe) {
        existing.count = Math.max(0, existing.count - 1);
        existing.byMe = false;
        if (existing.count === 0) {
          this.thread.reactions = (this.thread.reactions || []).filter((r) => r.kind !== kind);
        }
      } else {
        existing.count++;
        existing.byMe = true;
      }
    } else {
      this.thread.reactions = [...this.thread.reactions || [], { kind, count: 1, byMe: true }];
    }
    this.cdr.markForCheck();
  }
  /** コメントのリアクション */
  toggleCommentReaction(c, kind) {
    this.communityService.toggleThreadCommentReaction(c.id, kind);
    this.comments$ = this.communityService.getThreadComments(this.thread.id);
    this.cdr.markForCheck();
  }
  reactionEmoji(kind) {
    switch (kind) {
      case "like":
        return "\u{1F44D}";
      case "clap":
        return "\u{1F44F}";
      case "heart":
        return "\u2764\uFE0F";
      case "bulb":
        return "\u{1F4A1}";
      case "laugh":
        return "\u{1F602}";
      case "fire":
        return "\u{1F525}";
    }
  }
  reactionCount(arr, kind) {
    return (arr || []).find((r) => r.kind === kind)?.count || 0;
  }
  reactionByMe(arr, kind) {
    return !!(arr || []).find((r) => r.kind === kind)?.byMe;
  }
  toggleThreadPicker(ev) {
    ev.stopPropagation();
    this.threadPickerOpen = !this.threadPickerOpen;
    this.commentPickerOpenId = null;
  }
  toggleCommentPicker(commentId, ev) {
    ev.stopPropagation();
    this.commentPickerOpenId = this.commentPickerOpenId === commentId ? null : commentId;
    this.threadPickerOpen = false;
  }
  selectThreadReaction(kind, ev) {
    ev.stopPropagation();
    this.toggleThreadReaction(kind);
    this.threadPickerOpen = false;
  }
  selectCommentReaction(c, kind, ev) {
    ev.stopPropagation();
    this.toggleCommentReaction(c, kind);
    this.commentPickerOpenId = null;
  }
  static {
    this.\u0275fac = function ThreadDetailComponent_Factory(t) {
      return new (t || _ThreadDetailComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(FormDraftService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ConfirmDialogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThreadDetailComponent, selectors: [["app-thread-detail"]], hostBindings: function ThreadDetailComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function ThreadDetailComponent_beforeunload_HostBindingHandler() {
          return ctx.onBeforeUnload();
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { thread: "thread", isMember: "isMember" }, outputs: { back: "back" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 24, consts: [[1, "thread-detail"], [1, "thread-detail__back", 3, "click"], [1, "thread-detail__card"], [1, "thread-detail__layout"], [1, "thread-detail__vote-sidebar"], [1, "thread-detail__vote-btn", 3, "click"], [1, "thread-detail__vote-count"], [1, "thread-detail__content-area"], [1, "thread-detail__title"], ["class", "thread-detail__tags", 4, "ngIf"], [1, "thread-detail__author-row"], [3, "imageUrl", "name", "size"], [1, "thread-detail__author-info"], [1, "thread-detail__author-name"], ["class", "thread-detail__author-meta", 4, "ngIf"], [1, "thread-detail__date"], [1, "thread-detail__body"], ["class", "thread-detail__image-wrap", 4, "ngIf"], [1, "thread-detail__reactions"], ["class", "thread-detail__reaction", 3, "thread-detail__reaction--active", "hidden", "click", 4, "ngFor", "ngForOf"], [1, "thread-detail__reaction-picker-wrap"], ["type", "button", "aria-label", "\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0", 1, "thread-detail__reaction-add", 3, "click"], [1, "thread-detail__reaction-add-plus"], ["class", "thread-detail__reaction-popup", 3, "click", 4, "ngIf"], [1, "thread-detail__stats"], [1, "thread-detail__stat-btn", 3, "click"], [1, "thread-detail__stat"], ["class", "thread-detail__edited", 4, "ngIf"], [1, "thread-detail__replies-section"], [1, "thread-detail__replies-heading"], ["class", "thread-detail__reply-form", 4, "ngIf"], ["class", "thread-detail__no-replies", 4, "ngIf"], ["class", "thread-detail__comment-list", 4, "ngIf"], [1, "thread-detail__tags"], ["class", "thread-detail__tag", 4, "ngFor", "ngForOf"], [1, "thread-detail__tag"], [1, "thread-detail__author-meta"], [4, "ngIf"], [1, "thread-detail__image-wrap"], [1, "thread-detail__image", 3, "src", "alt"], [1, "thread-detail__reaction", 3, "click", "hidden"], [1, "thread-detail__reaction-emoji"], [1, "thread-detail__reaction-count"], [1, "thread-detail__reaction-popup", 3, "click"], ["class", "thread-detail__reaction-popup-item", "type", "button", 3, "thread-detail__reaction-popup-item--active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "thread-detail__reaction-popup-item", 3, "click"], [1, "thread-detail__edited"], [1, "thread-detail__reply-form"], [1, "thread-detail__reply-input-row"], ["name", "\u81EA\u5206", 3, "size"], ["placeholder", "\u56DE\u7B54\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044...", "rows", "3", 1, "thread-detail__reply-textarea", 3, "ngModelChange", "ngModel"], [1, "thread-detail__reply-actions"], [1, "thread-detail__reply-submit", 3, "click", "disabled"], [1, "thread-detail__no-replies"], [1, "thread-detail__comment-list"], ["class", "thread-detail__comment", 4, "ngFor", "ngForOf"], ["class", "thread-detail__no-comments", 4, "ngIf"], [1, "thread-detail__comment"], [1, "thread-detail__comment-avatar"], [1, "thread-detail__comment-body"], [1, "thread-detail__comment-header"], [1, "thread-detail__comment-author-info"], [1, "thread-detail__comment-name"], ["class", "thread-detail__comment-meta", 4, "ngIf"], [1, "thread-detail__comment-time"], ["class", "thread-detail__comment-edit", 4, "ngIf"], [1, "thread-detail__comment-meta"], [1, "thread-detail__comment-edit"], ["rows", "3", 1, "thread-detail__comment-edit-textarea", 3, "ngModelChange", "ngModel"], [1, "thread-detail__comment-edit-actions"], [1, "thread-detail__comment-cancel", 3, "click"], [1, "thread-detail__comment-text"], [1, "thread-detail__comment-reactions"], ["class", "thread-detail__reaction thread-detail__reaction--sm", 3, "thread-detail__reaction--active", "hidden", "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0", 1, "thread-detail__reaction-add", "thread-detail__reaction-add--sm", 3, "click"], [1, "thread-detail__comment-actions"], [1, "thread-detail__comment-like", 3, "click"], ["class", "thread-detail__comment-action", 3, "click", 4, "ngIf"], ["class", "thread-detail__comment-action thread-detail__comment-action--danger", 3, "click", 4, "ngIf"], [1, "thread-detail__reaction", "thread-detail__reaction--sm", 3, "click", "hidden"], [1, "thread-detail__comment-action", 3, "click"], [1, "thread-detail__comment-action", "thread-detail__comment-action--danger", 3, "click"], [1, "thread-detail__no-comments"]], template: function ThreadDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275listener("click", function ThreadDetailComponent_Template_a_click_1_listener() {
          return ctx.onBack();
        });
        \u0275\u0275elementStart(2, "mat-icon");
        \u0275\u0275text(3, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "\u30B9\u30EC\u30C3\u30C9\u4E00\u89A7\u306B\u623B\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "button", 5);
        \u0275\u0275listener("click", function ThreadDetailComponent_Template_button_click_9_listener() {
          return ctx.onVote();
        });
        \u0275\u0275elementStart(10, "mat-icon");
        \u0275\u0275text(11, "thumb_up");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "span", 6);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 7)(15, "h1", 8);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, ThreadDetailComponent_div_17_Template, 2, 1, "div", 9);
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275element(19, "app-avatar", 11);
        \u0275\u0275elementStart(20, "div", 12)(21, "span", 13);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, ThreadDetailComponent_span_23_Template, 4, 3, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 15);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "relativeTime");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 16);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ThreadDetailComponent_div_29_Template, 2, 2, "div", 17);
        \u0275\u0275elementStart(30, "div", 18);
        \u0275\u0275template(31, ThreadDetailComponent_button_31_Template, 5, 5, "button", 19);
        \u0275\u0275elementStart(32, "div", 20)(33, "button", 21);
        \u0275\u0275listener("click", function ThreadDetailComponent_Template_button_click_33_listener($event) {
          return ctx.toggleThreadPicker($event);
        });
        \u0275\u0275elementStart(34, "mat-icon");
        \u0275\u0275text(35, "sentiment_satisfied");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-icon", 22);
        \u0275\u0275text(37, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, ThreadDetailComponent_div_38_Template, 2, 1, "div", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 24)(40, "button", 25);
        \u0275\u0275listener("click", function ThreadDetailComponent_Template_button_click_40_listener() {
          return ctx.onLike();
        });
        \u0275\u0275elementStart(41, "mat-icon");
        \u0275\u0275text(42, "favorite");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 26)(46, "mat-icon");
        \u0275\u0275text(47, "chat_bubble_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "span");
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(50, ThreadDetailComponent_span_50_Template, 2, 0, "span", 27);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 28)(52, "h2", 29)(53, "mat-icon");
        \u0275\u0275text(54, "forum");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55);
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, ThreadDetailComponent_div_56_Template, 7, 3, "div", 30)(57, ThreadDetailComponent_div_57_Template, 5, 0, "div", 31)(58, ThreadDetailComponent_div_58_Template, 3, 2, "div", 32);
        \u0275\u0275pipe(59, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.thread.votes || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.thread.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.thread.tags && ctx.thread.tags.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("imageUrl", ctx.thread.authorAvatar)("name", ctx.thread.authorName)("size", 40);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.thread.authorName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.thread.authorCompany || ctx.thread.authorJobTitle);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 20, ctx.thread.createdAt));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.thread.content);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.thread.imageUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.REACTION_KINDS);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.threadPickerOpen);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.thread.likes);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.thread.replies);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.thread.edited);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" \u56DE\u7B54 (", ctx.thread.replies, ") ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isMember);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isMember);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(59, 22, ctx.comments$));
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, MatIconModule, MatIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, AvatarComponent, RelativeTimePipe], styles: ['@charset "UTF-8";\n\n\n\n.thread-detail[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto;\n  padding: 24px 16px;\n}\n.thread-detail__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #5f6368;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 16px;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.thread-detail__back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.thread-detail__back[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n}\n.thread-detail__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.thread-detail__layout[_ngcontent-%COMP%] {\n  display: flex;\n}\n.thread-detail__vote-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 24px 12px;\n  background: #f8f8f8;\n  border-right: 1px solid #e2dfdc;\n  min-width: 56px;\n}\n.thread-detail__vote-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 50%;\n  background: transparent;\n  color: #9e9e9e;\n  cursor: pointer;\n  transition: color 0.15s, background 0.15s;\n}\n.thread-detail__vote-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.thread-detail__vote-btn[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n  background: rgba(255, 152, 0, 0.08);\n}\n.thread-detail__vote-count[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #202124;\n  line-height: 1;\n}\n.thread-detail__content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  min-width: 0;\n}\n.thread-detail__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #202124;\n  margin: 0 0 12px;\n  line-height: 1.4;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n.thread-detail__tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.thread-detail__tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #ff9800;\n  background: rgba(255, 152, 0, 0.08);\n  border: 1px solid rgba(255, 152, 0, 0.3);\n  border-radius: 20px;\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.thread-detail__author-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e2dfdc;\n}\n.thread-detail__author-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.thread-detail__author-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #202124;\n  line-height: 1.3;\n}\n.thread-detail__author-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  line-height: 1.3;\n  margin-top: 2px;\n}\n.thread-detail__date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.thread-detail__body[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #202124;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin-bottom: 20px;\n}\n.thread-detail__image-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.thread-detail__image[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  display: block;\n}\n.thread-detail__stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding-top: 16px;\n  border-top: 1px solid #e2dfdc;\n}\n.thread-detail__stat-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: none;\n  background: transparent;\n  color: #5f6368;\n  font-size: 13px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: color 0.15s, background 0.15s;\n}\n.thread-detail__stat-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.thread-detail__stat-btn[_ngcontent-%COMP%]:hover {\n  color: #e53935;\n  background: rgba(229, 57, 53, 0.08);\n}\n.thread-detail__stat[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #5f6368;\n  font-size: 13px;\n}\n.thread-detail__stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.thread-detail__replies-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.thread-detail__replies-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 18px;\n  font-weight: 700;\n  color: #202124;\n  margin: 0 0 16px;\n}\n.thread-detail__replies-heading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: #ff9800;\n}\n.thread-detail__reply-form[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.thread-detail__reply-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.thread-detail__reply-textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #e2dfdc;\n  border-radius: 6px;\n  padding: 12px;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #202124;\n  resize: vertical;\n  font-family: inherit;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.thread-detail__reply-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.thread-detail__reply-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ff9800;\n}\n.thread-detail__reply-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 12px;\n}\n.thread-detail__reply-submit[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  background: #ff9800;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.thread-detail__reply-submit[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.thread-detail__reply-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.thread-detail__no-replies[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8f8f8;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  padding: 16px 24px;\n  margin-bottom: 20px;\n}\n.thread-detail__no-replies[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #9e9e9e;\n}\n.thread-detail__no-replies[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #9e9e9e;\n}\n.thread-detail__comment-list[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.thread-detail__comment[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 12px;\n  transition: border-color 0.15s;\n}\n.thread-detail__comment[_ngcontent-%COMP%]:hover {\n  border-color: #d0cbc6;\n}\n.thread-detail__comment-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.thread-detail__comment-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.thread-detail__comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.thread-detail__comment-author-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.thread-detail__comment-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #202124;\n  line-height: 1.3;\n}\n.thread-detail__comment-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  line-height: 1.3;\n  margin-top: 1px;\n}\n.thread-detail__comment-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  white-space: nowrap;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.thread-detail__comment-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n  color: #202124;\n  margin: 0 0 8px;\n  word-break: break-word;\n}\n.thread-detail__comment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.thread-detail__comment-like[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: none;\n  background: none;\n  color: #9e9e9e;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 2px 8px;\n  border-radius: 12px;\n  transition: all 0.15s;\n}\n.thread-detail__comment-like[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.thread-detail__comment-like[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n  background: rgba(255, 152, 0, 0.08);\n}\n.thread-detail__no-comments[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9e9e9e;\n  font-size: 14px;\n  padding: 32px 0;\n  background: #f8f8f8;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n}\n@media (max-width: 640px) {\n  .thread-detail[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .thread-detail__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .thread-detail__content-area[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .thread-detail__comment[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .thread-detail__author-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .thread-detail__author-row[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .thread-detail__comment-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .thread-detail__image-wrap[_ngcontent-%COMP%] {\n    overflow: hidden;\n    border-radius: 8px;\n  }\n  .thread-detail__image[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    display: block;\n  }\n  .thread-detail__stat-btn[_ngcontent-%COMP%], .thread-detail__stat[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .thread-detail__stat-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .thread-detail__stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .thread-detail__replies-heading[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .thread-detail__replies-heading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .thread-detail__comment-like[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .thread-detail__comment-like[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n}\n.thread-detail[_ngcontent-%COMP%] {\n}\n.thread-detail__reactions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin: 12px 0;\n}\n.thread-detail__reaction[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 18px;\n  background: #fafafa;\n  cursor: pointer;\n  font-size: 13px;\n  color: #5f6368;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    transform 0.12s;\n}\n.thread-detail__reaction[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ffb74d;\n  transform: translateY(-1px);\n}\n.thread-detail__reaction--active[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-color: #ff9800;\n  color: #e65100;\n  font-weight: 600;\n}\n.thread-detail__reaction--sm[_ngcontent-%COMP%] {\n  padding: 3px 9px;\n  font-size: 12px;\n  border-radius: 14px;\n}\n.thread-detail__reaction-emoji[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1;\n}\n.thread-detail__reaction-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  min-width: 10px;\n  text-align: right;\n}\n.thread-detail__edited[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #81766e;\n  font-style: italic;\n  margin-left: 6px;\n}\n.thread-detail__comment-reactions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 8px;\n}\n.thread-detail__comment-edit[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.thread-detail__comment-edit-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #dadce0;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 13px;\n  resize: vertical;\n  box-sizing: border-box;\n}\n.thread-detail__comment-edit-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ff9800;\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.15);\n}\n.thread-detail__comment-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-top: 6px;\n}\n.thread-detail__comment-cancel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dadce0;\n  border-radius: 16px;\n  padding: 6px 14px;\n  font-size: 12px;\n  cursor: pointer;\n  color: #5f6368;\n}\n.thread-detail__comment-cancel[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.thread-detail__comment-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  background: transparent;\n  border: 1px solid #e0e0e0;\n  border-radius: 14px;\n  padding: 3px 10px;\n  font-size: 11px;\n  color: #5f6368;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.thread-detail__comment-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.thread-detail__comment-action[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  color: #e65100;\n  border-color: #ff9800;\n}\n.thread-detail__comment-action--danger[_ngcontent-%COMP%]:hover {\n  background: #ffebee;\n  color: #c62828;\n  border-color: #f44336;\n}\n.thread-detail__reaction-picker-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n}\n.thread-detail__reaction-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 4px 10px;\n  border: 1px dashed #d0d0d0;\n  border-radius: 18px;\n  background: #fff;\n  cursor: pointer;\n  color: #9e9e9e;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.thread-detail__reaction-add[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.thread-detail__reaction-add[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ffb74d;\n  color: #ff9800;\n}\n.thread-detail__reaction-add--sm[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n}\n.thread-detail__reaction-add--sm[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.thread-detail__reaction-add-plus[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  width: 12px !important;\n  height: 12px !important;\n}\n.thread-detail__reaction-popup[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 0;\n  z-index: 30;\n  display: flex;\n  gap: 2px;\n  padding: 6px 8px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 24px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.14), 0 2px 6px rgba(0, 0, 0, 0.06);\n  animation: _ngcontent-%COMP%_thread-detail-reaction-popup-in 0.16s ease-out;\n}\n.thread-detail__reaction-popup-item[_ngcontent-%COMP%] {\n  appearance: none;\n  background: transparent;\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  font-size: 22px;\n  line-height: 1;\n  cursor: pointer;\n  transition: background 0.12s, transform 0.12s;\n}\n.thread-detail__reaction-popup-item[_ngcontent-%COMP%]:hover {\n  background: #fff8e1;\n  transform: scale(1.2);\n}\n.thread-detail__reaction-popup-item--active[_ngcontent-%COMP%] {\n  background: #fff3e0;\n}\n@keyframes _ngcontent-%COMP%_thread-detail-reaction-popup-in {\n  from {\n    opacity: 0;\n    transform: translateY(4px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=thread-detail.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThreadDetailComponent, { className: "ThreadDetailComponent", filePath: "src\\app\\features\\community\\components\\thread-detail\\thread-detail.component.ts", lineNumber: 25 });
})();

// src/app/features/community/components/thread-list/thread-list.component.ts
function ThreadListComponent_app_thread_detail_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-thread-detail", 3);
    \u0275\u0275listener("back", function ThreadListComponent_app_thread_detail_1_Template_app_thread_detail_back_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackToList());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("thread", ctx_r1.selectedThread)("isMember", ctx_r1.isMember);
  }
}
function ThreadListComponent_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCreate());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u65B0\u898F\u30B9\u30EC\u30C3\u30C9\u3092\u4F5C\u6210 ");
    \u0275\u0275elementEnd();
  }
}
function ThreadListComponent_div_2_div_9_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_9_button_4_Template_button_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("thread-list__pager-num--active", p_r7 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7);
  }
}
function ThreadListComponent_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ThreadListComponent_div_2_div_9_button_4_Template, 2, 3, "button", 17);
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function ThreadListComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon");
    \u0275\u0275text(2, "forum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u30B9\u30EC\u30C3\u30C9\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ThreadListComponent_div_2_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_12_div_1_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const thread_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEditThread(thread_r9, $event));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_12_div_1_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const thread_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDeleteThread(thread_r9, $event));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ThreadListComponent_div_2_div_12_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const thread_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(thread_r9.authorCompany);
  }
}
function ThreadListComponent_div_2_div_12_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "(\u7DE8\u96C6\u6E08\u307F)");
    \u0275\u0275elementEnd();
  }
}
function ThreadListComponent_div_2_div_12_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r11);
  }
}
function ThreadListComponent_div_2_div_12_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, ThreadListComponent_div_2_div_12_div_18_span_1_Template, 2, 1, "span", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const thread_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", thread_r9.tags);
  }
}
function ThreadListComponent_div_2_div_12_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275element(2, "img", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const thread_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", thread_r9.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function ThreadListComponent_div_2_div_12_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_12_button_23_Template_button_click_0_listener($event) {
      const kind_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const thread_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onToggleReaction(thread_r9, kind_r13, $event));
    });
    \u0275\u0275elementStart(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kind_r13 = ctx.$implicit;
    const thread_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("thread-list__reaction--active", ctx_r1.reactionByMe(thread_r9, kind_r13));
    \u0275\u0275property("hidden", ctx_r1.reactionCount(thread_r9, kind_r13) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.reactionEmoji(kind_r13));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.reactionCount(thread_r9, kind_r13));
  }
}
function ThreadListComponent_div_2_div_12_div_30_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_12_div_30_button_1_Template_button_click_0_listener($event) {
      const kind_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const thread_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectReaction(thread_r9, kind_r16, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kind_r16 = ctx.$implicit;
    const thread_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("thread-list__reaction-popup-item--active", ctx_r1.reactionByMe(thread_r9, kind_r16));
    \u0275\u0275attribute("aria-label", kind_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.reactionEmoji(kind_r16));
  }
}
function ThreadListComponent_div_2_div_12_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_12_div_30_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, ThreadListComponent_div_2_div_12_div_30_button_1_Template, 2, 4, "button", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.reactionKinds);
  }
}
function ThreadListComponent_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_12_Template_div_click_0_listener() {
      const thread_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSelectThread(thread_r9));
    });
    \u0275\u0275template(1, ThreadListComponent_div_2_div_12_div_1_Template, 7, 0, "div", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "mat-icon");
    \u0275\u0275text(4, "thumb_up_off_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 24)(8, "div", 25);
    \u0275\u0275element(9, "app-avatar", 26);
    \u0275\u0275elementStart(10, "span", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ThreadListComponent_div_2_div_12_span_12_Template, 2, 1, "span", 28);
    \u0275\u0275elementStart(13, "span", 29);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ThreadListComponent_div_2_div_12_span_15_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h3", 31);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ThreadListComponent_div_2_div_12_div_18_Template, 2, 1, "div", 32)(19, ThreadListComponent_div_2_div_12_div_19_Template, 3, 1, "div", 33);
    \u0275\u0275elementStart(20, "p", 34);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 35);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_12_Template_div_click_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(23, ThreadListComponent_div_2_div_12_button_23_Template, 5, 5, "button", 36);
    \u0275\u0275elementStart(24, "div", 37)(25, "button", 38);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_12_Template_button_click_25_listener($event) {
      const thread_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleReactionPicker(thread_r9.id, $event));
    });
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "sentiment_satisfied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-icon", 39);
    \u0275\u0275text(29, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, ThreadListComponent_div_2_div_12_div_30_Template, 2, 1, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 41)(32, "span", 42)(33, "mat-icon");
    \u0275\u0275text(34, "favorite_border");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 42)(37, "mat-icon");
    \u0275\u0275text(38, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const thread_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMine(thread_r9));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(thread_r9.votes || 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", thread_r9.authorName)("imageUrl", thread_r9.authorAvatar)("size", 28);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(thread_r9.authorName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", thread_r9.authorCompany);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(thread_r9.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", thread_r9.edited);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(thread_r9.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", thread_r9.tags && thread_r9.tags.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", thread_r9.imageUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(thread_r9.content);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.reactionKinds);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.reactionPickerOpenId === thread_r9.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", thread_r9.likes, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", thread_r9.replies, "\u4EF6\u306E\u56DE\u7B54 ");
  }
}
function ThreadListComponent_div_2_div_13_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_13_button_4_Template_button_click_0_listener() {
      const p_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r19));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("thread-list__pager-num--active", p_r19 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r19);
  }
}
function ThreadListComponent_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ThreadListComponent_div_2_div_13_button_4_Template, 2, 3, "button", 17);
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function ThreadListComponent_div_2_div_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function ThreadListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "mat-icon");
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function ThreadListComponent_div_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ThreadListComponent_div_2_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ThreadListComponent_div_2_button_6_Template, 4, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ThreadListComponent_div_2_div_9_Template, 8, 3, "div", 10)(10, ThreadListComponent_div_2_div_10_Template, 5, 0, "div", 11);
    \u0275\u0275elementStart(11, "div", 12);
    \u0275\u0275template(12, ThreadListComponent_div_2_div_12_Template, 40, 17, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ThreadListComponent_div_2_div_13_Template, 8, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMember);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filteredThreads.length, "\u4EF6\u306E\u30B9\u30EC\u30C3\u30C9 ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagedThreads.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pagedThreads);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var ThreadListComponent = class _ThreadListComponent {
  constructor(communityService, dialog, notification, cdr, confirmDialog, router) {
    this.communityService = communityService;
    this.dialog = dialog;
    this.notification = notification;
    this.cdr = cdr;
    this.confirmDialog = confirmDialog;
    this.router = router;
    this.communityId = "";
    this.isMember = false;
    this.allThreads = [];
    this.filteredThreads = [];
    this.pagedThreads = [];
    this.searchTerm = "";
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 1;
    this.selectedThread = null;
    this.reactionKinds = ["like", "clap", "heart", "bulb", "laugh", "fire"];
    this.reactionPickerOpenId = null;
  }
  ngOnInit() {
    this.loadThreads();
  }
  ngOnChanges(changes) {
    if (changes["communityId"] && !changes["communityId"].firstChange) {
      this.loadThreads();
    }
  }
  loadThreads() {
    if (this.communityId) {
      this.communityService.getThreads(this.communityId).subscribe((threads) => {
        this.allThreads = threads;
        this.applyFilter();
        this.cdr.markForCheck();
      });
    }
  }
  applyFilter() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredThreads = [...this.allThreads];
    } else {
      this.filteredThreads = this.allThreads.filter((t) => t.title.toLowerCase().includes(term) || t.content.toLowerCase().includes(term) || t.authorName.toLowerCase().includes(term) || (t.authorCompany || "").toLowerCase().includes(term) || (t.authorJobTitle || "").toLowerCase().includes(term) || (t.tags || []).join(" ").toLowerCase().includes(term));
    }
    this.currentPage = 1;
    this.updatePagination();
  }
  updatePagination() {
    this.totalPages = Math.max(1, Math.ceil(this.filteredThreads.length / this.pageSize));
    if (this.currentPage > this.totalPages)
      this.currentPage = this.totalPages;
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedThreads = this.filteredThreads.slice(start, start + this.pageSize);
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.updatePagination();
  }
  get pageNumbers() {
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;
    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }
    const pages = [];
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  onSelectThread(thread) {
    this.selectedThread = thread;
  }
  onBackToList() {
    this.selectedThread = null;
  }
  /**
   * fix (2026-04-27): SP モーダルクリック不能問題対策。
   * MatDialog → ルート遷移 (/community/:id/sub/thread/create) に変更。
   */
  onCreate() {
    this.router.navigate(["/community", this.communityId, "sub", "thread", "create"]);
  }
  /** 自分のスレッドか (ユーザー指示 2026-04-21) */
  isMine(t) {
    return this.communityService.isCurrentUser(t.authorId);
  }
  /** 編集 */
  onEditThread(thread, ev) {
    ev?.stopPropagation();
    const dialogRef = this.dialog.open(ThreadCreateComponent, {
      width: "94vw",
      maxWidth: "560px",
      maxHeight: "90dvh",
      panelClass: "community-create-dialog",
      data: { communityId: this.communityId, editing: thread }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.editing) {
        this.communityService.updateThread(thread.id, { title: result.title, content: result.content }).subscribe(() => {
          this.loadThreads();
          this.notification.success("\u30B9\u30EC\u30C3\u30C9\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
        });
      }
    });
  }
  /** 削除 */
  /* 修正 No.53 (2026-04-24): 独自 confirm モーダル化 */
  onDeleteThread(thread, ev) {
    return __async(this, null, function* () {
      ev?.stopPropagation();
      const ok = yield this.confirmDialog.confirm({
        title: "\u30B9\u30EC\u30C3\u30C9\u306E\u524A\u9664",
        message: `\u300C${thread.title}\u300D\u3092\u524A\u9664\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F`,
        confirmText: "\u524A\u9664",
        danger: true
      });
      if (!ok)
        return;
      this.communityService.deleteThread(thread.id).subscribe(() => {
        this.loadThreads();
        this.notification.warn("\u30B9\u30EC\u30C3\u30C9\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
      });
    });
  }
  /** スレッドへのリアクション切替 */
  onToggleReaction(thread, kind, ev) {
    ev?.stopPropagation();
    this.communityService.toggleThreadReaction(thread.id, kind);
    this.loadThreads();
  }
  /** テンプレ用ヘルパ: リアクション件数 */
  reactionCount(thread, kind) {
    return (thread.reactions || []).find((r) => r.kind === kind)?.count || 0;
  }
  /** テンプレ用ヘルパ: 自分が押しているか */
  reactionByMe(thread, kind) {
    return !!(thread.reactions || []).find((r) => r.kind === kind)?.byMe;
  }
  reactionEmoji(kind) {
    switch (kind) {
      case "like":
        return "\u{1F44D}";
      case "clap":
        return "\u{1F44F}";
      case "heart":
        return "\u2764\uFE0F";
      case "bulb":
        return "\u{1F4A1}";
      case "laugh":
        return "\u{1F602}";
      case "fire":
        return "\u{1F525}";
      default:
        return "";
    }
  }
  toggleReactionPicker(threadId, ev) {
    ev.stopPropagation();
    this.reactionPickerOpenId = this.reactionPickerOpenId === threadId ? null : threadId;
  }
  selectReaction(thread, kind, ev) {
    ev.stopPropagation();
    this.onToggleReaction(thread, kind, ev);
    this.reactionPickerOpenId = null;
  }
  /** 自分が押したリアクションのみ (pill 表示用) */
  userReactions(thread) {
    return (thread.reactions || []).filter((r) => (r.count || 0) > 0);
  }
  /** ポップアップ外クリックで閉じる用ヘルパ */
  closeReactionPicker() {
    this.reactionPickerOpenId = null;
  }
  onJoinRequest() {
    this.communityService.requestJoin(this.communityId).subscribe(() => {
      this.isMember = true;
      this.notification.success("\u53C2\u52A0\u7533\u8ACB\u304C\u627F\u8A8D\u3055\u308C\u307E\u3057\u305F");
      this.cdr.markForCheck();
    });
  }
  formatDate(date) {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  }
  static {
    this.\u0275fac = function ThreadListComponent_Factory(t) {
      return new (t || _ThreadListComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThreadListComponent, selectors: [["app-thread-list"]], inputs: { communityId: "communityId", isMember: "isMember" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[3, "joinRequest", "blurred"], [3, "thread", "isMember", "back", 4, "ngIf"], ["class", "thread-list", 4, "ngIf"], [3, "back", "thread", "isMember"], [1, "thread-list"], [1, "thread-list__header"], [1, "thread-list__search"], ["type", "text", "placeholder", "\u30B9\u30EC\u30C3\u30C9\u3092\u691C\u7D22...", 3, "ngModelChange", "ngModel"], ["class", "thread-list__create-btn", 3, "click", 4, "ngIf"], [1, "thread-list__info"], ["class", "thread-list__pager", 4, "ngIf"], ["class", "thread-list__empty", 4, "ngIf"], [1, "thread-list__items"], ["class", "thread-list__card", 3, "click", 4, "ngFor", "ngForOf"], [1, "thread-list__create-btn", 3, "click"], [1, "thread-list__pager"], [1, "thread-list__pager-btn", 3, "click", "disabled"], ["class", "thread-list__pager-num", 3, "thread-list__pager-num--active", "click", 4, "ngFor", "ngForOf"], [1, "thread-list__pager-num", 3, "click"], [1, "thread-list__empty"], [1, "thread-list__card", 3, "click"], ["class", "thread-list__card-actions", 4, "ngIf"], [1, "thread-list__card-vote"], [1, "thread-list__card-vote-count"], [1, "thread-list__card-main"], [1, "thread-list__card-author-row"], [3, "name", "imageUrl", "size"], [1, "thread-list__card-author-name"], ["class", "thread-list__card-author-role", 4, "ngIf"], [1, "thread-list__card-date"], ["class", "thread-list__card-edited", "title", "\u7DE8\u96C6\u6E08\u307F", 4, "ngIf"], [1, "thread-list__card-title"], ["class", "thread-list__card-tags", 4, "ngIf"], ["class", "thread-list__card-body", 4, "ngIf"], [1, "thread-list__card-content"], [1, "thread-list__card-reactions", 3, "click"], ["class", "thread-list__reaction", 3, "thread-list__reaction--active", "hidden", "click", 4, "ngFor", "ngForOf"], [1, "thread-list__reaction-picker-wrap"], ["type", "button", "aria-label", "\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0", 1, "thread-list__reaction-add", 3, "click"], [1, "thread-list__reaction-add-plus"], ["class", "thread-list__reaction-popup", 3, "click", 4, "ngIf"], [1, "thread-list__card-meta"], [1, "thread-list__card-stat"], [1, "thread-list__card-actions"], ["title", "\u7DE8\u96C6", 1, "thread-list__card-action-btn", 3, "click"], ["title", "\u524A\u9664", 1, "thread-list__card-action-btn", "thread-list__card-action-btn--danger", 3, "click"], [1, "thread-list__card-author-role"], ["title", "\u7DE8\u96C6\u6E08\u307F", 1, "thread-list__card-edited"], [1, "thread-list__card-tags"], ["class", "thread-list__card-tag", 4, "ngFor", "ngForOf"], [1, "thread-list__card-tag"], [1, "thread-list__card-body"], [1, "thread-list__card-thumb"], ["alt", "", 3, "src"], [1, "thread-list__reaction", 3, "click", "hidden"], [1, "thread-list__reaction-emoji"], [1, "thread-list__reaction-count"], [1, "thread-list__reaction-popup", 3, "click"], ["class", "thread-list__reaction-popup-item", "type", "button", 3, "thread-list__reaction-popup-item--active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "thread-list__reaction-popup-item", 3, "click"]], template: function ThreadListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-blur-overlay", 0);
        \u0275\u0275listener("joinRequest", function ThreadListComponent_Template_app_blur_overlay_joinRequest_0_listener() {
          return ctx.onJoinRequest();
        });
        \u0275\u0275template(1, ThreadListComponent_app_thread_detail_1_Template, 1, 2, "app-thread-detail", 1)(2, ThreadListComponent_div_2_Template, 14, 7, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("blurred", !ctx.isMember);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedThread);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedThread);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatIconModule, MatIcon, MatDialogModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, BlurOverlayComponent, AvatarComponent, ThreadDetailComponent], styles: ['@charset "UTF-8";\n\n\n\n.thread-list[_ngcontent-%COMP%] {\n}\n.thread-list__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n.thread-list__search[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  background: #fff;\n}\n.thread-list__search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.thread-list__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  color: #81766e;\n}\n.thread-list__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.thread-list__create-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border: none;\n  border-radius: 24px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.thread-list__create-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.thread-list__create-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.thread-list__info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9e9e9e;\n  margin-bottom: 8px;\n}\n.thread-list__pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 12px 0;\n}\n.thread-list__pager-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9e9e9e;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n}\n.thread-list__pager-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #ff9800;\n}\n.thread-list__pager-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\n.thread-list__pager-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.thread-list__pager-num[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  font-size: 13px;\n  color: #5f6368;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  aspect-ratio: 1;\n  padding: 0;\n  border-radius: 50%;\n  box-sizing: border-box;\n}\n.thread-list__pager-num[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.thread-list__pager-num--active[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.thread-list__pager-num--active[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.thread-list__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #9e9e9e;\n}\n.thread-list__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n}\n.thread-list__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.thread-list__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.thread-list__card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  border: 1px solid #e2dfdc;\n  border-left: 4px solid #ff9800;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  background: #fff;\n  position: relative;\n}\n.thread-list__card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.thread-list__card-vote[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding-top: 4px;\n  min-width: 36px;\n}\n.thread-list__card-vote[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #9e9e9e;\n}\n.thread-list__card-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  display: flex;\n  gap: 4px;\n  z-index: 2;\n}\n.thread-list__card-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #5f6368;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    transform 0.15s;\n}\n.thread-list__card-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.thread-list__card-action-btn[_ngcontent-%COMP%]:hover {\n  background: #ff9800;\n  color: #fff;\n  transform: scale(1.05);\n}\n.thread-list__card-action-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #e53935;\n}\n.thread-list__card-edited[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #81766e;\n  font-style: italic;\n  margin-left: 4px;\n}\n.thread-list__card-reactions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 8px;\n}\n.thread-list__reaction[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border: 1px solid #e0e0e0;\n  border-radius: 16px;\n  background: #fafafa;\n  cursor: pointer;\n  font-size: 12px;\n  color: #5f6368;\n  transition: background 0.15s, border-color 0.15s;\n}\n.thread-list__reaction[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ffb74d;\n}\n.thread-list__reaction--active[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-color: #ff9800;\n  color: #e65100;\n  font-weight: 600;\n}\n.thread-list__reaction-emoji[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1;\n}\n.thread-list__reaction-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  min-width: 8px;\n  text-align: right;\n}\n.thread-list__reaction-picker-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n}\n.thread-list__reaction-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 3px 8px;\n  border: 1px dashed #d0d0d0;\n  border-radius: 16px;\n  background: #fff;\n  cursor: pointer;\n  color: #9e9e9e;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.thread-list__reaction-add[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.thread-list__reaction-add[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ffb74d;\n  color: #ff9800;\n}\n.thread-list__reaction-add-plus[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  width: 12px !important;\n  height: 12px !important;\n}\n.thread-list__reaction-popup[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 0;\n  z-index: 30;\n  display: flex;\n  gap: 2px;\n  padding: 6px 8px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 22px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.14), 0 2px 6px rgba(0, 0, 0, 0.06);\n  animation: _ngcontent-%COMP%_thread-reaction-popup-in 0.16s ease-out;\n}\n.thread-list__reaction-popup-item[_ngcontent-%COMP%] {\n  appearance: none;\n  background: transparent;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  font-size: 20px;\n  line-height: 1;\n  cursor: pointer;\n  transition: background 0.12s, transform 0.12s;\n}\n.thread-list__reaction-popup-item[_ngcontent-%COMP%]:hover {\n  background: #fff8e1;\n  transform: scale(1.2);\n}\n.thread-list__reaction-popup-item--active[_ngcontent-%COMP%] {\n  background: #fff3e0;\n}\n.thread-list__card-vote-count[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #5f6368;\n}\n.thread-list__card-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.thread-list__card-author-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.thread-list__card-author-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n}\n.thread-list__card-author-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n}\n.thread-list__card-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  margin-left: auto;\n}\n.thread-list__card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0 0 8px;\n  line-height: 1.4;\n}\n.thread-list__card-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.thread-list__card-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255, 152, 0, 0.08);\n  color: #e65100;\n  font-size: 11px;\n  padding: 2px 10px;\n  border-radius: 24px;\n  border: 1px solid rgba(255, 152, 0, 0.2);\n}\n.thread-list__card-body[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.thread-list__card-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 160px;\n  overflow: hidden;\n  border-radius: 6px;\n}\n.thread-list__card-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.thread-list__card-content[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5f6368;\n  line-height: 1.6;\n  margin: 0 0 10px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.thread-list__card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.thread-list__card-stat[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.thread-list__card-stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n@media (max-width: 640px) {\n  .thread-list__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .thread-list__search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .thread-list__card[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 10px;\n  }\n  .thread-list__card-vote[_ngcontent-%COMP%] {\n    min-width: 28px;\n  }\n}\n@keyframes _ngcontent-%COMP%_thread-reaction-popup-in {\n  from {\n    opacity: 0;\n    transform: translateY(4px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=thread-list.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThreadListComponent, { className: "ThreadListComponent", filePath: "src\\app\\features\\community\\components\\thread-list\\thread-list.component.ts", lineNumber: 25 });
})();

// src/app/features/community/components/news-detail/news-detail.component.ts
function NewsDetailComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const news_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("src", news_r3.imageUrl, \u0275\u0275sanitizeUrl)("alt", news_r3.title);
  }
}
function NewsDetailComponent_div_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275element(2, "app-avatar", 24);
    \u0275\u0275elementStart(3, "textarea", 25);
    \u0275\u0275twoWayListener("ngModelChange", function NewsDetailComponent_div_0_div_37_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newComment, $event) || (ctx_r1.newComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 26)(5, "button", 27);
    \u0275\u0275listener("click", function NewsDetailComponent_div_0_div_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitComment());
    });
    \u0275\u0275text(6, " \u6295\u7A3F\u3059\u308B ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 36);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newComment);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.newComment.trim());
  }
}
function NewsDetailComponent_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-icon");
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u30B3\u30E1\u30F3\u30C8\u3059\u308B\u306B\u306F\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3078\u306E\u53C2\u52A0\u304C\u5FC5\u8981\u3067\u3059");
    \u0275\u0275elementEnd()();
  }
}
function NewsDetailComponent_div_0_div_39_div_1_span_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r6.authorCompany);
  }
}
function NewsDetailComponent_div_0_div_39_div_1_span_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " / ");
    \u0275\u0275elementEnd();
  }
}
function NewsDetailComponent_div_0_div_39_div_1_span_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r6.authorJobTitle);
  }
}
function NewsDetailComponent_div_0_div_39_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275template(1, NewsDetailComponent_div_0_div_39_div_1_span_8_span_1_Template, 2, 1, "span", 45)(2, NewsDetailComponent_div_0_div_39_div_1_span_8_span_2_Template, 2, 0, "span", 45)(3, NewsDetailComponent_div_0_div_39_div_1_span_8_span_3_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r6.authorCompany);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r6.authorCompany && comment_r6.authorJobTitle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r6.authorJobTitle);
  }
}
function NewsDetailComponent_div_0_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "app-avatar", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "div", 36)(5, "div", 37)(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, NewsDetailComponent_div_0_div_39_div_1_span_8_Template, 4, 3, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 40);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "relativeTime");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 41);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 42)(15, "button", 43);
    \u0275\u0275listener("click", function NewsDetailComponent_div_0_div_39_div_1_Template_button_click_15_listener() {
      const comment_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.likeComment(comment_r6.id));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "thumb_up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("imageUrl", comment_r6.authorAvatar)("name", comment_r6.authorName)("size", 40);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(comment_r6.authorName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r6.authorCompany || comment_r6.authorJobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, comment_r6.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r6.content);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(comment_r6.likes);
  }
}
function NewsDetailComponent_div_0_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, " \u307E\u3060\u30B3\u30E1\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6700\u521D\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u6295\u7A3F\u3057\u307E\u3057\u3087\u3046! ");
    \u0275\u0275elementEnd();
  }
}
function NewsDetailComponent_div_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, NewsDetailComponent_div_0_div_39_div_1_Template, 20, 10, "div", 30)(2, NewsDetailComponent_div_0_div_39_div_2_Template, 2, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comments_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", comments_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comments_r7.length === 0);
  }
}
function NewsDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function NewsDetailComponent_div_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBack());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u30CB\u30E5\u30FC\u30B9\u4E00\u89A7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "article", 3)(7, "div", 4)(8, "span", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h1", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 8)(15, "span", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "relativeTime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 10);
    \u0275\u0275listener("click", function NewsDetailComponent_div_0_Template_a_click_18_listener($event) {
      const news_r3 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSourceClick($event, news_r3));
    });
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " \u5143\u8A18\u4E8B\u3092\u8AAD\u3080 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, NewsDetailComponent_div_0_div_22_Template, 2, 2, "div", 11);
    \u0275\u0275elementStart(23, "div", 12)(24, "p");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 13)(27, "a", 14);
    \u0275\u0275listener("click", function NewsDetailComponent_div_0_Template_a_click_27_listener($event) {
      const news_r3 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSourceClick($event, news_r3));
    });
    \u0275\u0275elementStart(28, "mat-icon");
    \u0275\u0275text(29, "article");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "section", 15)(32, "div", 16)(33, "mat-icon");
    \u0275\u0275text(34, "comment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h2");
    \u0275\u0275text(36, "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30E1\u30F3\u30D0\u30FC\u306E\u30B3\u30E1\u30F3\u30C8");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, NewsDetailComponent_div_0_div_37_Template, 7, 3, "div", 17)(38, NewsDetailComponent_div_0_div_38_Template, 5, 0, "div", 18)(39, NewsDetailComponent_div_0_div_39_Template, 3, 2, "div", 19);
    \u0275\u0275pipe(40, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const news_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(news_r3.source);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 12, news_r3.publishedAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", news_r3.sourceUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", news_r3.imageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(news_r3.summary);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", news_r3.sourceUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u8A18\u4E8B\u306E\u5168\u6587\u3092\u8AAD\u3080\uFF08", news_r3.source, "\uFF09 ");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isMember);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isMember);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(40, 14, ctx_r1.comments$));
  }
}
var NewsDetailComponent = class _NewsDetailComponent {
  constructor(communityService, notification, cdr) {
    this.communityService = communityService;
    this.notification = notification;
    this.cdr = cdr;
    this.newsId = "";
    this.isMember = false;
    this.back = new EventEmitter();
    this.news$ = of(void 0);
    this.comments$ = of([]);
    this.newComment = "";
  }
  /** 元記事クリック処理 (ユーザー指示 修正 #11): デモ用ニュースのため
   *  リンク先は実在しないことが多いので、クリックをインターセプトして
   *  案内のトーストを表示 + 元ソースサイトの TOP へフォールバック遷移。 */
  onSourceClick(event, news) {
    event.preventDefault();
    event.stopPropagation();
    try {
      const url = new URL(news.sourceUrl);
      const homepage = `${url.protocol}//${url.host}/`;
      this.notification.info(`\u30C7\u30E2\u7528\u30CB\u30E5\u30FC\u30B9\u306E\u305F\u3081\u5143\u8A18\u4E8B\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002${news.source} \u306E\u30B5\u30A4\u30C8TOP\u3092\u65B0\u898F\u30BF\u30D6\u3067\u958B\u304D\u307E\u3059\u3002`);
      window.open(homepage, "_blank", "noopener,noreferrer");
    } catch {
      this.notification.warn("\u5143\u8A18\u4E8B URL \u304C\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F");
    }
  }
  ngOnInit() {
    this.loadData();
  }
  ngOnChanges(changes) {
    if (changes["newsId"] && !changes["newsId"].firstChange) {
      this.loadData();
    }
  }
  loadData() {
    if (this.newsId) {
      this.news$ = this.communityService.getNewsItem(this.newsId);
      this.comments$ = this.communityService.getNewsComments(this.newsId);
    }
  }
  onBack() {
    this.back.emit();
  }
  submitComment() {
    if (!this.newComment.trim() || !this.isMember)
      return;
    this.communityService.addNewsComment(this.newsId, this.newComment.trim()).subscribe(() => {
      this.newComment = "";
      this.comments$ = this.communityService.getNewsComments(this.newsId);
      this.cdr.markForCheck();
    });
  }
  likeComment(commentId) {
    this.communityService.likeComment(commentId);
    this.comments$ = this.communityService.getNewsComments(this.newsId);
    this.cdr.markForCheck();
  }
  static {
    this.\u0275fac = function NewsDetailComponent_Factory(t) {
      return new (t || _NewsDetailComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsDetailComponent, selectors: [["app-news-detail"]], inputs: { newsId: "newsId", isMember: "isMember" }, outputs: { back: "back" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [["class", "news-detail", 4, "ngIf"], [1, "news-detail"], [1, "news-detail__back", 3, "click"], [1, "news-detail__article"], [1, "news-detail__source-bar"], [1, "news-detail__source-name"], [1, "news-detail__category-badge"], [1, "news-detail__title"], [1, "news-detail__meta"], [1, "news-detail__date"], ["target", "_blank", "rel", "noopener", 1, "news-detail__original-link", 3, "click", "href"], ["class", "news-detail__hero", 4, "ngIf"], [1, "news-detail__body"], [1, "news-detail__read-more"], ["target", "_blank", "rel", "noopener", 1, "news-detail__read-more-btn", 3, "click", "href"], [1, "news-detail__comments"], [1, "news-detail__comments-header"], ["class", "news-detail__comment-input", 4, "ngIf"], ["class", "news-detail__comment-login", 4, "ngIf"], ["class", "news-detail__comment-list", 4, "ngIf"], [1, "news-detail__hero"], [3, "src", "alt"], [1, "news-detail__comment-input"], [1, "news-detail__comment-input-row"], ["name", "\u81EA\u5206", 3, "size"], ["placeholder", "\u3053\u306E\u30CB\u30E5\u30FC\u30B9\u306B\u3064\u3044\u3066\u30B3\u30E1\u30F3\u30C8\u3059\u308B...", "rows", "2", 1, "news-detail__comment-textarea", 3, "ngModelChange", "ngModel"], [1, "news-detail__comment-input-actions"], [1, "news-detail__comment-submit", 3, "click", "disabled"], [1, "news-detail__comment-login"], [1, "news-detail__comment-list"], ["class", "news-detail__comment", 4, "ngFor", "ngForOf"], ["class", "news-detail__no-comments", 4, "ngIf"], [1, "news-detail__comment"], [1, "news-detail__comment-avatar"], [3, "imageUrl", "name", "size"], [1, "news-detail__comment-body"], [1, "news-detail__comment-header"], [1, "news-detail__comment-author-info"], [1, "news-detail__comment-name"], ["class", "news-detail__comment-meta", 4, "ngIf"], [1, "news-detail__comment-time"], [1, "news-detail__comment-text"], [1, "news-detail__comment-actions"], [1, "news-detail__comment-like", 3, "click"], [1, "news-detail__comment-meta"], [4, "ngIf"], [1, "news-detail__no-comments"]], template: function NewsDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NewsDetailComponent_div_0_Template, 41, 16, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.news$));
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, AvatarComponent, RelativeTimePipe], styles: ["\n\n.news-detail[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.news-detail__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px 6px 6px;\n  border: none;\n  border-radius: 20px;\n  background: #f1f3f4;\n  color: #5f6368;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 20px;\n  transition: all 0.15s;\n}\n.news-detail__back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.news-detail__back[_ngcontent-%COMP%]:hover {\n  background: #e2dfdc;\n  color: #202124;\n}\n.news-detail__article[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2dfdc;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.news-detail__source-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 24px 0;\n}\n.news-detail__source-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #ff9800;\n}\n.news-detail__category-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(255, 152, 0, 0.08);\n  color: #ff9800;\n  font-weight: 500;\n}\n.news-detail__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #202124;\n  line-height: 1.4;\n  margin: 12px 0 0;\n  padding: 0 24px;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n.news-detail__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 24px;\n  color: #9e9e9e;\n  font-size: 13px;\n}\n.news-detail__original-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #5f6368;\n  text-decoration: none;\n  font-size: 13px;\n  transition: color 0.15s;\n}\n.news-detail__original-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.news-detail__original-link[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n}\n.news-detail__hero[_ngcontent-%COMP%] {\n  margin: 0 24px 16px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.news-detail__hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 360px;\n  object-fit: cover;\n  display: block;\n}\n.news-detail__body[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n}\n.news-detail__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #3c4043;\n  margin: 0 0 20px;\n}\n.news-detail__read-more[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 8px;\n  border-top: 1px solid #f1f3f4;\n}\n.news-detail__read-more-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 24px;\n  border-radius: 24px;\n  background: #f6f8fc;\n  color: #5f6368;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.15s;\n}\n.news-detail__read-more-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.news-detail__read-more-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.08);\n  color: #ff9800;\n}\n.news-detail__comments[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2dfdc;\n  padding: 24px;\n  margin-bottom: 32px;\n}\n.news-detail__comments-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.news-detail__comments-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: #ff9800;\n}\n.news-detail__comments-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #202124;\n  margin: 0;\n}\n.news-detail__comment-input[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f1f3f4;\n}\n.news-detail__comment-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.news-detail__comment-textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #e2dfdc;\n  border-radius: 12px;\n  padding: 10px 14px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #202124;\n  resize: vertical;\n  min-height: 60px;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.news-detail__comment-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.news-detail__comment-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #ff9800;\n}\n.news-detail__comment-input-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n.news-detail__comment-submit[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n  border: none;\n  border-radius: 20px;\n  background: #ff9800;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.news-detail__comment-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f57c00;\n}\n.news-detail__comment-submit[_ngcontent-%COMP%]:disabled {\n  background: #e2dfdc;\n  color: #9e9e9e;\n  cursor: default;\n}\n.news-detail__comment-login[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f6f8fc;\n  border-radius: 8px;\n  color: #9e9e9e;\n  font-size: 13px;\n  margin-bottom: 20px;\n}\n.news-detail__comment-login[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.news-detail__comment[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px 0;\n  border-bottom: 1px solid #f1f3f4;\n}\n.news-detail__comment[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.news-detail__comment-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.news-detail__comment-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.news-detail__comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.news-detail__comment-author-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.news-detail__comment-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #202124;\n}\n.news-detail__comment-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  line-height: 1.3;\n  margin-top: 1px;\n}\n.news-detail__comment-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  white-space: nowrap;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.news-detail__comment-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  color: #3c4043;\n  margin: 0 0 8px;\n}\n.news-detail__comment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.news-detail__comment-like[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: none;\n  background: none;\n  color: #9e9e9e;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 12px;\n  transition: all 0.15s;\n}\n.news-detail__comment-like[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.news-detail__comment-like[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n  background: rgba(255, 152, 0, 0.08);\n}\n.news-detail__no-comments[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9e9e9e;\n  font-size: 14px;\n  padding: 24px 0;\n}\n@media (max-width: 640px) {\n  .news-detail__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n    padding: 0 16px;\n  }\n  .news-detail__source-bar[_ngcontent-%COMP%], .news-detail__meta[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n  .news-detail__body[_ngcontent-%COMP%] {\n    padding: 0 16px 16px;\n  }\n  .news-detail__hero[_ngcontent-%COMP%] {\n    margin: 0 16px 12px;\n    overflow: hidden;\n    border-radius: 8px;\n  }\n  .news-detail__hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    object-fit: cover;\n    display: block;\n  }\n  .news-detail__comments[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .news-detail__comment-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .news-detail__comments-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .news-detail__comments-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .news-detail__comment-like[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .news-detail__comment-like[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .news-detail__original-link[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .news-detail__original-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n}\n/*# sourceMappingURL=news-detail.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsDetailComponent, { className: "NewsDetailComponent", filePath: "src\\app\\features\\community\\components\\news-detail\\news-detail.component.ts", lineNumber: 20 });
})();

// src/app/features/community/components/news-list/news-list.component.ts
function NewsListComponent_app_news_detail_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-news-detail", 2);
    \u0275\u0275listener("back", function NewsListComponent_app_news_detail_0_Template_app_news_detail_back_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackToList());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("newsId", ctx_r1.selectedNewsId)("isMember", ctx_r1.isMember);
  }
}
function NewsListComponent_div_1_div_8_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NewsListComponent_div_1_div_8_button_4_Template_button_click_0_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("news-list__pager-num--active", p_r6 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6);
  }
}
function NewsListComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275listener("click", function NewsListComponent_div_1_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, NewsListComponent_div_1_div_8_button_4_Template, 2, 3, "button", 14);
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function NewsListComponent_div_1_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function NewsListComponent_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "newspaper");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u30CB\u30E5\u30FC\u30B9\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function NewsListComponent_div_1_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "img", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r8.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r8.title);
  }
}
function NewsListComponent_div_1_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-icon");
    \u0275\u0275text(2, "article");
    \u0275\u0275elementEnd()();
  }
}
function NewsListComponent_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function NewsListComponent_div_1_div_11_Template_div_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openArticle(item_r8));
    });
    \u0275\u0275template(1, NewsListComponent_div_1_div_11_div_1_Template, 2, 2, "div", 18)(2, NewsListComponent_div_1_div_11_div_2_Template, 3, 0, "div", 19);
    \u0275\u0275elementStart(3, "div", 20)(4, "h3", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23)(9, "span", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 26);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r8.imageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.summary);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.source);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(item_r8.publishedAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.category);
  }
}
function NewsListComponent_div_1_div_12_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NewsListComponent_div_1_div_12_button_4_Template_button_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("news-list__pager-num--active", p_r11 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11);
  }
}
function NewsListComponent_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275listener("click", function NewsListComponent_div_1_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, NewsListComponent_div_1_div_12_button_4_Template, 2, 3, "button", 14);
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function NewsListComponent_div_1_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function NewsListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "mat-icon");
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function NewsListComponent_div_1_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewsListComponent_div_1_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, NewsListComponent_div_1_div_8_Template, 8, 3, "div", 8)(9, NewsListComponent_div_1_div_9_Template, 5, 0, "div", 9);
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275template(11, NewsListComponent_div_1_div_11_Template, 15, 7, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, NewsListComponent_div_1_div_12_Template, 8, 3, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filteredNews.length, "\u4EF6\u306E\u30CB\u30E5\u30FC\u30B9 ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagedNews.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pagedNews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var NewsListComponent = class _NewsListComponent {
  constructor(communityService, cdr) {
    this.communityService = communityService;
    this.cdr = cdr;
    this.communityId = "";
    this.isMember = false;
    this.allNews = [];
    this.filteredNews = [];
    this.pagedNews = [];
    this.searchTerm = "";
    this.selectedNewsId = null;
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 1;
  }
  ngOnInit() {
    this.loadNews();
  }
  ngOnChanges(changes) {
    if (changes["communityId"] && !changes["communityId"].firstChange) {
      this.loadNews();
      this.selectedNewsId = null;
    }
  }
  loadNews() {
    if (this.communityId) {
      this.communityService.getNews(this.communityId).subscribe((news) => {
        this.allNews = news;
        this.applyFilter();
        this.cdr.markForCheck();
      });
    }
  }
  applyFilter() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredNews = [...this.allNews];
    } else {
      this.filteredNews = this.allNews.filter((n) => n.title.toLowerCase().includes(term) || n.summary.toLowerCase().includes(term) || n.source.toLowerCase().includes(term) || n.category.toLowerCase().includes(term));
    }
    this.currentPage = 1;
    this.updatePagination();
  }
  updatePagination() {
    this.totalPages = Math.max(1, Math.ceil(this.filteredNews.length / this.pageSize));
    if (this.currentPage > this.totalPages)
      this.currentPage = this.totalPages;
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedNews = this.filteredNews.slice(start, start + this.pageSize);
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.updatePagination();
  }
  get pageNumbers() {
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;
    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }
    const pages = [];
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  openArticle(item) {
    this.selectedNewsId = item.id;
    this.cdr.markForCheck();
  }
  onBackToList() {
    this.selectedNewsId = null;
    this.cdr.markForCheck();
  }
  formatDate(date) {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  }
  static {
    this.\u0275fac = function NewsListComponent_Factory(t) {
      return new (t || _NewsListComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsListComponent, selectors: [["app-news-list"]], inputs: { communityId: "communityId", isMember: "isMember" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [[3, "newsId", "isMember", "back", 4, "ngIf"], ["class", "news-list", 4, "ngIf"], [3, "back", "newsId", "isMember"], [1, "news-list"], [1, "news-list__header"], [1, "news-list__search"], ["type", "text", "placeholder", "\u30CB\u30E5\u30FC\u30B9\u3092\u691C\u7D22...", 3, "ngModelChange", "ngModel"], [1, "news-list__info"], ["class", "news-list__pager", 4, "ngIf"], ["class", "news-list__empty", 4, "ngIf"], [1, "news-list__items"], ["class", "news-list__card", 3, "click", 4, "ngFor", "ngForOf"], [1, "news-list__pager"], [1, "news-list__pager-btn", 3, "click", "disabled"], ["class", "news-list__pager-num", 3, "news-list__pager-num--active", "click", 4, "ngFor", "ngForOf"], [1, "news-list__pager-num", 3, "click"], [1, "news-list__empty"], [1, "news-list__card", 3, "click"], ["class", "news-list__card-visual", 4, "ngIf"], ["class", "news-list__card-visual news-list__card-visual--placeholder", 4, "ngIf"], [1, "news-list__card-inner"], [1, "news-list__card-title"], [1, "news-list__card-summary"], [1, "news-list__card-meta"], [1, "news-list__card-source"], [1, "news-list__card-date"], [1, "news-list__card-category"], [1, "news-list__card-visual"], [3, "src", "alt"], [1, "news-list__card-visual", "news-list__card-visual--placeholder"]], template: function NewsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NewsListComponent_app_news_detail_0_Template, 1, 2, "app-news-detail", 0)(1, NewsListComponent_div_1_Template, 13, 6, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.selectedNewsId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedNewsId);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatIconModule, MatIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NewsDetailComponent], styles: ["\n\n.news-list__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n.news-list__search[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border: 1px solid #e2dfdc;\n  border-radius: 8px;\n  background: #fff;\n}\n.news-list__search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.news-list__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  color: #81766e;\n}\n.news-list__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.news-list__info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9e9e9e;\n  margin-bottom: 8px;\n}\n.news-list__pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 12px 0;\n}\n.news-list__pager-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9e9e9e;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n}\n.news-list__pager-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #ff9800;\n}\n.news-list__pager-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\n.news-list__pager-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.news-list__pager-num[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 13px;\n  color: #5f6368;\n  cursor: pointer;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.news-list__pager-num[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.news-list__pager-num--active[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.news-list__pager-num--active[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.news-list__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #9e9e9e;\n}\n.news-list__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n}\n.news-list__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.news-list__items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .news-list__items[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .news-list__items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.news-list__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2dfdc;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.news-list__card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.news-list__card-visual[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n  position: relative;\n}\n.news-list__card-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.news-list__card-visual--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f3e5f5 0%,\n      #e1bee7 50%,\n      #ce93d8 100%);\n}\n.news-list__card-visual--placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: rgba(156, 39, 176, 0.4);\n}\n.news-list__card-inner[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.news-list__card-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0 0 8px;\n  line-height: 1.5;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.news-list__card-summary[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5f6368;\n  line-height: 1.7;\n  margin: 0 0 12px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.news-list__card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.news-list__card-source[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #ff9800;\n}\n.news-list__card-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.news-list__card-category[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: #f1f3f4;\n  color: #5f6368;\n}\n@media (max-width: 640px) {\n  .news-list__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .news-list__search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .news-list__card-inner[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .news-list__card-visual[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n}\n/*# sourceMappingURL=news-list.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsListComponent, { className: "NewsListComponent", filePath: "src\\app\\features\\community\\components\\news-list\\news-list.component.ts", lineNumber: 17 });
})();

// src/app/features/community/components/event-detail/event-detail.component.ts
function EventDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "img", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.event.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.event.title);
  }
}
function EventDetailComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function EventDetailComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onJoin());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306B\u53C2\u52A0\u3059\u308B ");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 36)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37)(6, "button", 38);
    \u0275\u0275listener("click", function EventDetailComponent_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRSVP("going"));
    });
    \u0275\u0275text(7, "\u53C2\u52A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 38);
    \u0275\u0275listener("click", function EventDetailComponent_div_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRSVP("maybe"));
    });
    \u0275\u0275text(9, "\u672A\u5B9A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 38);
    \u0275\u0275listener("click", function EventDetailComponent_div_12_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRSVP("declined"));
    });
    \u0275\u0275text(11, "\u4E0D\u53C2\u52A0");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("event-detail__rsvp-chip--going", ctx_r0.myRsvp === "going")("event-detail__rsvp-chip--maybe", ctx_r0.myRsvp === "maybe")("event-detail__rsvp-chip--declined", ctx_r0.myRsvp === "declined");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.myRsvp === "going" ? "check_circle" : ctx_r0.myRsvp === "maybe" ? "help" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.rsvpLabel(ctx_r0.myRsvp), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("event-detail__rsvp-btn--active", ctx_r0.myRsvp === "going");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("event-detail__rsvp-btn--active", ctx_r0.myRsvp === "maybe");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("event-detail__rsvp-btn--active", ctx_r0.myRsvp === "declined");
  }
}
function EventDetailComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u6E80\u54E1");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "\u7D42\u4E86\u6E08\u307F");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u301C ", ctx_r0.formatDateTime(ctx_r0.event.endDate), " ");
  }
}
function EventDetailComponent_mat_icon_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "location_on");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_mat_icon_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "videocam");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_a_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r0.event.meetingUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.event.meetingUrl, " ");
  }
}
function EventDetailComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "mat-icon");
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.event.participantCount, " / ", ctx_r0.event.maxParticipants, " \u4EBA\u53C2\u52A0");
  }
}
function EventDetailComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "mat-icon");
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.event.participantCount, " \u4EBA\u53C2\u52A0");
  }
}
function EventDetailComponent_div_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r4);
  }
}
function EventDetailComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, EventDetailComponent_div_35_span_1_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.event.tags);
  }
}
function EventDetailComponent_span_49_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " / ");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275template(2, EventDetailComponent_span_49_span_2_Template, 2, 0, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.event.organizerJobTitle, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.organizerJobTitle && ctx_r0.event.organizerCompany);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.event.organizerCompany, " ");
  }
}
function EventDetailComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "app-avatar", 23);
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("name", p_r5.name)("imageUrl", p_r5.avatar)("size", 36);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.name);
  }
}
function EventDetailComponent_div_58_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "app-avatar", 23);
    \u0275\u0275elementStart(2, "div", 61)(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", p_r7.name)("imageUrl", p_r7.avatar)("size", 40);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("event-detail__modal-participant-rsvp--going", (p_r7.rsvp || "going") === "going")("event-detail__modal-participant-rsvp--maybe", p_r7.rsvp === "maybe");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.rsvpLabel(p_r7.rsvp || "going"), " ");
  }
}
function EventDetailComponent_div_58_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1, " \u8A72\u5F53\u3059\u308B\u53C2\u52A0\u8005\u306F\u3044\u307E\u305B\u3093 ");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function EventDetailComponent_div_58_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeParticipants());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("click", function EventDetailComponent_div_58_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 51)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 52);
    \u0275\u0275listener("click", function EventDetailComponent_div_58_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeParticipants());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 53)(11, "div", 54);
    \u0275\u0275text(12, "\u3042\u306A\u305F\u306E\u53C2\u52A0\u30B9\u30C6\u30FC\u30BF\u30B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 37)(14, "button", 38);
    \u0275\u0275listener("click", function EventDetailComponent_div_58_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRSVP("going"));
    });
    \u0275\u0275text(15, "\u53C2\u52A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 38);
    \u0275\u0275listener("click", function EventDetailComponent_div_58_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRSVP("maybe"));
    });
    \u0275\u0275text(17, "\u672A\u5B9A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 38);
    \u0275\u0275listener("click", function EventDetailComponent_div_58_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRSVP("declined"));
    });
    \u0275\u0275text(19, "\u4E0D\u53C2\u52A0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 55)(21, "button", 56);
    \u0275\u0275listener("click", function EventDetailComponent_div_58_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.participantsFilter = "all");
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 56);
    \u0275\u0275listener("click", function EventDetailComponent_div_58_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.participantsFilter = "going");
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 56);
    \u0275\u0275listener("click", function EventDetailComponent_div_58_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.participantsFilter = "maybe");
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 57);
    \u0275\u0275template(28, EventDetailComponent_div_58_div_28_Template, 7, 9, "div", 58)(29, EventDetailComponent_div_58_p_29_Template, 2, 0, "p", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" \u53C2\u52A0\u8005\u4E00\u89A7 (", ctx_r0.event.participants.length, ")");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("event-detail__rsvp-btn--active", ctx_r0.myRsvp === "going");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("event-detail__rsvp-btn--active", ctx_r0.myRsvp === "maybe");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("event-detail__rsvp-btn--active", ctx_r0.myRsvp === "declined");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("event-detail__modal-tab--active", ctx_r0.participantsFilter === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u5168\u54E1 (", ctx_r0.event.participants.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("event-detail__modal-tab--active", ctx_r0.participantsFilter === "going");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u53C2\u52A0 (", ctx_r0.goingCount, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("event-detail__modal-tab--active", ctx_r0.participantsFilter === "maybe");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u672A\u5B9A (", ctx_r0.maybeCount, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredParticipants);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredParticipants.length === 0);
  }
}
var EventDetailComponent = class _EventDetailComponent {
  constructor(communityService, cdr) {
    this.communityService = communityService;
    this.cdr = cdr;
    this.isMember = false;
    this.back = new EventEmitter();
    this.showParticipantsModal = false;
    this.participantsFilter = "all";
  }
  get isParticipant() {
    return this.event.participants.some((p) => p.id === "current-user");
  }
  /** 現在ユーザーの RSVP ステータス */
  get myRsvp() {
    return this.communityService.getMyRSVP(this.event);
  }
  get isFull() {
    return !!this.event.maxParticipants && this.event.participantCount >= this.event.maxParticipants;
  }
  get isPast() {
    return new Date(this.event.date).getTime() < Date.now();
  }
  /** フィルタ適用後の参加者 */
  get filteredParticipants() {
    const list = this.event.participants;
    if (this.participantsFilter === "all")
      return list;
    return list.filter((p) => (p.rsvp || "going") === this.participantsFilter);
  }
  /** 行きます件数 / 未定件数 */
  get goingCount() {
    return this.event.participants.filter((p) => !p.rsvp || p.rsvp === "going").length;
  }
  get maybeCount() {
    return this.event.participants.filter((p) => p.rsvp === "maybe").length;
  }
  onBack() {
    this.back.emit();
  }
  /** 参加ボタン: RSVP 'going' に設定し、参加者モーダルを開く (ユーザー指示 2026-04-21) */
  onJoin() {
    this.communityService.setEventRSVP(this.event.id, "going").subscribe((updated) => {
      this.event = updated;
      this.showParticipantsModal = true;
      this.cdr.markForCheck();
    });
  }
  onLeave() {
    this.communityService.setEventRSVP(this.event.id, "declined").subscribe((updated) => {
      this.event = updated;
      this.cdr.markForCheck();
    });
  }
  /** 参加者一覧を開く/閉じる (ユーザー指示 2026-04-21) */
  openParticipants() {
    this.showParticipantsModal = true;
  }
  closeParticipants() {
    this.showParticipantsModal = false;
  }
  /** RSVP 変更 (参加/未定/不参加) */
  setRSVP(rsvp) {
    this.communityService.setEventRSVP(this.event.id, rsvp).subscribe((updated) => {
      this.event = updated;
      this.cdr.markForCheck();
    });
  }
  rsvpLabel(rsvp) {
    switch (rsvp) {
      case "going":
        return "\u53C2\u52A0";
      case "maybe":
        return "\u672A\u5B9A";
      case "declined":
        return "\u4E0D\u53C2\u52A0";
      default:
        return "\u672A\u56DE\u7B54";
    }
  }
  formatDateTime(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const weekdays = ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"];
    const weekday = weekdays[d.getDay()];
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");
    return `${year}\u5E74${month}\u6708${day}\u65E5\uFF08${weekday}\uFF09${hours}:${minutes}`;
  }
  static {
    this.\u0275fac = function EventDetailComponent_Factory(t) {
      return new (t || _EventDetailComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailComponent, selectors: [["app-event-detail"]], inputs: { event: "event", isMember: "isMember" }, outputs: { back: "back" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 59, vars: 28, consts: [[1, "event-detail"], [1, "event-detail__back", 3, "click"], ["class", "event-detail__hero", 4, "ngIf"], [1, "event-detail__main"], [1, "event-detail__title"], [1, "event-detail__actions"], ["class", "event-detail__join-btn", 3, "click", 4, "ngIf"], ["class", "event-detail__rsvp-current", 4, "ngIf"], [1, "event-detail__participants-btn", 3, "click"], ["class", "event-detail__badge event-detail__badge--full", 4, "ngIf"], ["class", "event-detail__badge event-detail__badge--past", 4, "ngIf"], [1, "event-detail__date-section"], [1, "event-detail__date"], ["class", "event-detail__date", 4, "ngIf"], [1, "event-detail__location-section"], [4, "ngIf"], [1, "event-detail__location"], ["class", "event-detail__meeting-url", "target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], ["class", "event-detail__capacity", 4, "ngIf"], ["class", "event-detail__tags", 4, "ngIf"], [1, "event-detail__description"], [1, "event-detail__organizer-section"], [1, "event-detail__organizer"], [3, "name", "imageUrl", "size"], [1, "event-detail__organizer-info"], [1, "event-detail__organizer-name"], ["class", "event-detail__organizer-role", 4, "ngIf"], [1, "event-detail__participants-section"], [1, "event-detail__participants-grid"], ["class", "event-detail__participant", 4, "ngFor", "ngForOf"], [1, "event-detail__meta"], ["class", "event-detail__modal-backdrop", 3, "click", 4, "ngIf"], [1, "event-detail__hero"], [3, "src", "alt"], [1, "event-detail__join-btn", 3, "click"], [1, "event-detail__rsvp-current"], [1, "event-detail__rsvp-chip"], [1, "event-detail__rsvp-switch"], [1, "event-detail__rsvp-btn", 3, "click"], [1, "event-detail__badge", "event-detail__badge--full"], [1, "event-detail__badge", "event-detail__badge--past"], ["target", "_blank", "rel", "noopener", 1, "event-detail__meeting-url", 3, "href"], [1, "event-detail__capacity"], [1, "event-detail__tags"], ["class", "event-detail__tag", 4, "ngFor", "ngForOf"], [1, "event-detail__tag"], [1, "event-detail__organizer-role"], [1, "event-detail__participant"], [1, "event-detail__participant-name"], [1, "event-detail__modal-backdrop", 3, "click"], [1, "event-detail__modal", 3, "click"], [1, "event-detail__modal-header"], [1, "event-detail__modal-close", 3, "click"], [1, "event-detail__modal-my-rsvp"], [1, "event-detail__modal-my-rsvp-label"], [1, "event-detail__modal-tabs"], [1, "event-detail__modal-tab", 3, "click"], [1, "event-detail__modal-body"], ["class", "event-detail__modal-participant", 4, "ngFor", "ngForOf"], ["class", "event-detail__modal-empty", 4, "ngIf"], [1, "event-detail__modal-participant"], [1, "event-detail__modal-participant-info"], [1, "event-detail__modal-participant-name"], [1, "event-detail__modal-participant-rsvp"], [1, "event-detail__modal-empty"]], template: function EventDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function EventDetailComponent_Template_button_click_1_listener() {
          return ctx.onBack();
        });
        \u0275\u0275elementStart(2, "mat-icon");
        \u0275\u0275text(3, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "\u30A4\u30D9\u30F3\u30C8\u4E00\u89A7\u306B\u623B\u308B");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, EventDetailComponent_div_6_Template, 2, 2, "div", 2);
        \u0275\u0275elementStart(7, "div", 3)(8, "h1", 4);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275template(11, EventDetailComponent_button_11_Template, 4, 0, "button", 6)(12, EventDetailComponent_div_12_Template, 12, 14, "div", 7);
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function EventDetailComponent_Template_button_click_13_listener() {
          return ctx.openParticipants();
        });
        \u0275\u0275elementStart(14, "mat-icon");
        \u0275\u0275text(15, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, EventDetailComponent_span_17_Template, 2, 0, "span", 9)(18, EventDetailComponent_span_18_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11)(20, "mat-icon");
        \u0275\u0275text(21, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div")(23, "div", 12);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, EventDetailComponent_div_25_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 14);
        \u0275\u0275template(27, EventDetailComponent_mat_icon_27_Template, 2, 0, "mat-icon", 15)(28, EventDetailComponent_mat_icon_28_Template, 2, 0, "mat-icon", 15);
        \u0275\u0275elementStart(29, "div")(30, "div", 16);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, EventDetailComponent_a_32_Template, 2, 2, "a", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(33, EventDetailComponent_div_33_Template, 5, 2, "div", 18)(34, EventDetailComponent_div_34_Template, 5, 1, "div", 18)(35, EventDetailComponent_div_35_Template, 2, 1, "div", 19);
        \u0275\u0275elementStart(36, "div", 20)(37, "h3");
        \u0275\u0275text(38, "\u8A73\u7D30");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 21)(42, "h3");
        \u0275\u0275text(43, "\u4E3B\u50AC\u8005");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 22);
        \u0275\u0275element(45, "app-avatar", 23);
        \u0275\u0275elementStart(46, "div", 24)(47, "span", 25);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd();
        \u0275\u0275template(49, EventDetailComponent_span_49_Template, 4, 3, "span", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 27)(51, "h3");
        \u0275\u0275text(52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 28);
        \u0275\u0275template(54, EventDetailComponent_div_54_Template, 4, 4, "div", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 30);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "relativeTime");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(58, EventDetailComponent_div_58_Template, 30, 18, "div", 31);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.event.imageUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.event.title);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.myRsvp && ctx.isMember && !ctx.isPast && !ctx.isFull);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.myRsvp && !ctx.isPast);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" \u53C2\u52A0\u8005\u4E00\u89A7\u3092\u898B\u308B (", ctx.event.participants.length, ") ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.myRsvp && ctx.isFull && !ctx.isPast);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isPast);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.formatDateTime(ctx.event.date));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.endDate);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.event.isOnline);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.isOnline);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.event.location);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.isOnline && ctx.event.meetingUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.maxParticipants);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.event.maxParticipants);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.tags && ctx.event.tags.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.event.description);
        \u0275\u0275advance(5);
        \u0275\u0275property("name", ctx.event.organizerName)("imageUrl", ctx.event.organizerAvatar)("size", 48);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.event.organizerName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.organizerJobTitle || ctx.event.organizerCompany);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\u53C2\u52A0\u8005\uFF08", ctx.event.participants.length, "\u4EBA\uFF09");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.event.participants);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" \u4F5C\u6210\u65E5: ", \u0275\u0275pipeBind1(57, 26, ctx.event.createdAt), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showParticipantsModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatIconModule, MatIcon, AvatarComponent, RelativeTimePipe], styles: ['@charset "UTF-8";\n\n\n\n.event-detail[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n}\n.event-detail__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  color: #5f6368;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 8px 0;\n  margin-bottom: 16px;\n}\n.event-detail__back[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n}\n.event-detail__back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.event-detail__hero[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 24px;\n  max-height: 300px;\n}\n.event-detail__hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.event-detail__main[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.event-detail__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0 0 20px;\n  line-height: 1.4;\n}\n.event-detail__date-section[_ngcontent-%COMP%], .event-detail__location-section[_ngcontent-%COMP%], .event-detail__capacity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #5f6368;\n}\n.event-detail__date-section[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%], .event-detail__location-section[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%], .event-detail__capacity[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #ff9800;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.event-detail__date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #81766e;\n  font-weight: 500;\n}\n.event-detail__location[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #81766e;\n}\n.event-detail__meeting-url[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1a73e8;\n  text-decoration: none;\n  word-break: break-all;\n}\n.event-detail__meeting-url[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.event-detail__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 20px 0;\n}\n.event-detail__join-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  border-radius: 24px;\n  padding: 14px 40px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n}\n.event-detail__join-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.event-detail__join-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(255, 152, 0, 0.4);\n}\n.event-detail__leave-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #5f6368;\n  border: 1px solid #e2dfdc;\n  border-radius: 24px;\n  padding: 10px 24px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.event-detail__leave-btn[_ngcontent-%COMP%]:hover {\n  background: #f6f8fc;\n}\n.event-detail__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 6px 16px;\n  border-radius: 24px;\n}\n.event-detail__badge--joined[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.event-detail__badge--full[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #c62828;\n}\n.event-detail__badge--past[_ngcontent-%COMP%] {\n  background: #f1f3f4;\n  color: #9e9e9e;\n}\n.event-detail__tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.event-detail__tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  padding: 4px 12px;\n  border-radius: 24px;\n  background: #f1f3f4;\n  color: #5f6368;\n}\n.event-detail__description[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.event-detail__description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 8px;\n}\n.event-detail__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5f6368;\n  line-height: 1.7;\n  white-space: pre-wrap;\n  margin: 0;\n}\n.event-detail__organizer-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.event-detail__organizer-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 12px;\n}\n.event-detail__organizer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.event-detail__organizer-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.event-detail__organizer-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #81766e;\n}\n.event-detail__organizer-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  margin-top: 2px;\n}\n.event-detail__participants-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.event-detail__participants-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 12px;\n}\n.event-detail__participants-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.event-detail__participant[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  height: 40px;\n}\n.event-detail__participant-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #81766e;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.event-detail__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  padding-top: 16px;\n  border-top: 1px solid #e2dfdc;\n}\n@media (max-width: 768px) {\n  .event-detail[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 12px;\n  }\n  .event-detail__hero[_ngcontent-%COMP%] {\n    max-height: 200px;\n    border-radius: 8px;\n    overflow: hidden;\n  }\n  .event-detail__hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    object-fit: cover;\n    display: block;\n  }\n  .event-detail__title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 14px;\n  }\n  .event-detail__join-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 12px 24px;\n  }\n  .event-detail__participants-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .event-detail__actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .event-detail__organizer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .event-detail__organizer[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .event-detail__participant[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .event-detail__participant[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .event-detail__date-section[_ngcontent-%COMP%], .event-detail__location-section[_ngcontent-%COMP%], .event-detail__capacity[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n  }\n  .event-detail__date-section[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%], .event-detail__location-section[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%], .event-detail__capacity[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .event-detail__back[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .event-detail__back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n}\n.event-detail[_ngcontent-%COMP%] {\n}\n.event-detail__rsvp-current[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.event-detail__rsvp-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  align-self: flex-start;\n}\n.event-detail__rsvp-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.event-detail__rsvp-chip--going[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.event-detail__rsvp-chip--maybe[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.event-detail__rsvp-chip--declined[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.event-detail__rsvp-switch[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 4px;\n  padding: 4px;\n  border: 1px solid #e0e0e0;\n  border-radius: 20px;\n  background: #fafafa;\n}\n.event-detail__rsvp-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 6px 14px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #5f6368;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.event-detail__rsvp-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.1);\n  color: #e65100;\n}\n.event-detail__rsvp-btn--active[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff !important;\n  font-weight: 600;\n}\n.event-detail__participants-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #dadce0;\n  border-radius: 20px;\n  background: #fff;\n  color: #3c4043;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.event-detail__participants-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.event-detail__participants-btn[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  border-color: #ff9800;\n  color: #e65100;\n}\n.event-detail__modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.event-detail__modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 480px;\n  max-height: 85vh;\n  max-height: 85dvh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_event-detail-modal-in 0.18s ease-out;\n}\n.event-detail__modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.event-detail__modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #3c4043;\n}\n.event-detail__modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #ff9800;\n}\n.event-detail__modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #5f6368;\n  padding: 4px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.event-detail__modal-close[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.event-detail__modal-my-rsvp[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  background: #fafafa;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.event-detail__modal-my-rsvp-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5f6368;\n  font-weight: 500;\n}\n.event-detail__modal-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n}\n.event-detail__modal-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  color: #5f6368;\n  border-bottom: 2px solid transparent;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.event-detail__modal-tab[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.event-detail__modal-tab--active[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-weight: 600;\n  border-bottom-color: #ff9800;\n}\n.event-detail__modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.event-detail__modal-participant[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 20px;\n  transition: background 0.15s;\n}\n.event-detail__modal-participant[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.event-detail__modal-participant-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.event-detail__modal-participant-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3c4043;\n  font-weight: 500;\n}\n.event-detail__modal-participant-rsvp[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  align-self: flex-start;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: #f5f5f5;\n}\n.event-detail__modal-participant-rsvp--going[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.event-detail__modal-participant-rsvp--maybe[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.event-detail__modal-empty[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #9e9e9e;\n  font-size: 13px;\n}\n@keyframes _ngcontent-%COMP%_event-detail-modal-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 767px) {\n  .event-detail__modal[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 92dvh;\n  }\n}\n/*# sourceMappingURL=event-detail.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailComponent, { className: "EventDetailComponent", filePath: "src\\app\\features\\community\\components\\event-detail\\event-detail.component.ts", lineNumber: 17 });
})();

// src/app/features/community/components/event-list/event-list.component.ts
function EventListComponent_app_event_detail_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-event-detail", 3);
    \u0275\u0275listener("back", function EventListComponent_app_event_detail_1_Template_app_event_detail_back_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackToList());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("event", ctx_r1.selectedEvent)("isMember", ctx_r1.isMember);
  }
}
function EventListComponent_div_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function EventListComponent_div_2_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCreate());
    });
    \u0275\u0275text(1, " \u30A4\u30D9\u30F3\u30C8\u3092\u4F5C\u6210 ");
    \u0275\u0275elementEnd();
  }
}
function EventListComponent_div_2_div_6_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_6_button_7_Template_button_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("event-list__pager-num--active", p_r7 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r7, " ");
  }
}
function EventListComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, EventListComponent_div_2_div_6_button_7_Template, 2, 3, "button", 16);
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_6_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "last_page");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function EventListComponent_div_2_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "button", 37);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_8_div_1_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const evt_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEditEvent(evt_r9, $event));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 38);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_8_div_1_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const evt_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDeleteEvent(evt_r9, $event));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function EventListComponent_div_2_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "img", 40);
    \u0275\u0275elementStart(2, "div", 41)(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const evt_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", evt_r9.imageUrl, \u0275\u0275sanitizeUrl)("alt", evt_r9.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatMonth(evt_r9.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDay(evt_r9.date));
  }
}
function EventListComponent_div_2_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "mat-icon");
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const evt_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatMonth(evt_r9.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDay(evt_r9.date));
  }
}
function EventListComponent_div_2_div_8_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "location_on");
    \u0275\u0275elementEnd();
  }
}
function EventListComponent_div_2_div_8_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "videocam");
    \u0275\u0275elementEnd();
  }
}
function EventListComponent_div_2_div_8_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(evt_r9.organizerCompany);
  }
}
function EventListComponent_div_2_div_8_app_avatar_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-avatar", 27);
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275property("name", p_r11.name)("imageUrl", p_r11.avatar)("size", 20);
  }
}
function EventListComponent_div_2_div_8_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", evt_r9.participants.length - 4, " ");
  }
}
function EventListComponent_div_2_div_8_div_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r12);
  }
}
function EventListComponent_div_2_div_8_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275template(1, EventListComponent_div_2_div_8_div_26_span_1_Template, 2, 1, "span", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", evt_r9.tags);
  }
}
function EventListComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_8_Template_div_click_0_listener() {
      const evt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSelectEvent(evt_r9));
    });
    \u0275\u0275template(1, EventListComponent_div_2_div_8_div_1_Template, 7, 0, "div", 19)(2, EventListComponent_div_2_div_8_div_2_Template, 7, 4, "div", 20)(3, EventListComponent_div_2_div_8_div_3_Template, 8, 2, "div", 21);
    \u0275\u0275elementStart(4, "div", 22)(5, "h4", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24);
    \u0275\u0275template(8, EventListComponent_div_2_div_8_mat_icon_8_Template, 2, 0, "mat-icon", 25)(9, EventListComponent_div_2_div_8_mat_icon_9_Template, 2, 0, "mat-icon", 25);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 26);
    \u0275\u0275element(13, "app-avatar", 27);
    \u0275\u0275elementStart(14, "span", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, EventListComponent_div_2_div_8_span_16_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 30)(18, "div", 31)(19, "mat-icon");
    \u0275\u0275text(20, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 32);
    \u0275\u0275template(24, EventListComponent_div_2_div_8_app_avatar_24_Template, 1, 3, "app-avatar", 33)(25, EventListComponent_div_2_div_8_span_25_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, EventListComponent_div_2_div_8_div_26_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const evt_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("event-list__card--past", ctx_r1.isPast(evt_r9.date));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMine(evt_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r9.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !evt_r9.imageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(evt_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !evt_r9.isOnline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r9.isOnline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(evt_r9.location);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", evt_r9.organizerName)("imageUrl", evt_r9.organizerAvatar)("size", 22);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(evt_r9.organizerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r9.organizerCompany);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", evt_r9.participantCount, "\u4EBA\u53C2\u52A0");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", evt_r9.participants.slice(0, 4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r9.participants.length > 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r9.tags && evt_r9.tags.length);
  }
}
function EventListComponent_div_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1, " \u30A4\u30D9\u30F3\u30C8\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093 ");
    \u0275\u0275elementEnd();
  }
}
function EventListComponent_div_2_div_10_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_10_button_7_Template_button_click_0_listener() {
      const p_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("event-list__pager-num--active", p_r15 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r15, " ");
  }
}
function EventListComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, EventListComponent_div_2_div_10_button_7_Template, 2, 3, "button", 16);
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function EventListComponent_div_2_div_10_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "last_page");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function EventListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function EventListComponent_div_2_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EventListComponent_div_2_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EventListComponent_div_2_button_3_Template, 2, 0, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, EventListComponent_div_2_div_6_Template, 14, 5, "div", 9);
    \u0275\u0275elementStart(7, "div", 10);
    \u0275\u0275template(8, EventListComponent_div_2_div_8_Template, 27, 18, "div", 11)(9, EventListComponent_div_2_p_9_Template, 2, 0, "p", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, EventListComponent_div_2_div_10_Template, 14, 5, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMember);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filteredEvents.length, " \u4EF6\u306E\u30A4\u30D9\u30F3\u30C8 ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pagedEvents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagedEvents.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var EventListComponent = class _EventListComponent {
  constructor(communityService, dialog, notification, cdr, confirmDialog, router) {
    this.communityService = communityService;
    this.dialog = dialog;
    this.notification = notification;
    this.cdr = cdr;
    this.confirmDialog = confirmDialog;
    this.router = router;
    this.communityId = "";
    this.isMember = false;
    this.allEvents = [];
    this.filteredEvents = [];
    this.pagedEvents = [];
    this.searchTerm = "";
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 1;
    this.selectedEvent = null;
  }
  ngOnInit() {
    this.loadEvents();
  }
  ngOnChanges(changes) {
    if (changes["communityId"] && !changes["communityId"].firstChange) {
      this.loadEvents();
      this.selectedEvent = null;
    }
  }
  loadEvents() {
    if (this.communityId) {
      this.communityService.getEvents(this.communityId).subscribe((events) => {
        this.allEvents = events;
        this.applyFilter();
        this.cdr.markForCheck();
      });
    }
  }
  applyFilter() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredEvents = [...this.allEvents];
    } else {
      this.filteredEvents = this.allEvents.filter((e) => e.title.toLowerCase().includes(term) || e.description.toLowerCase().includes(term) || e.location.toLowerCase().includes(term) || e.organizerName.toLowerCase().includes(term) || (e.tags || []).some((t) => t.toLowerCase().includes(term)));
    }
    this.currentPage = 1;
    this.updatePagination();
  }
  updatePagination() {
    this.totalPages = Math.max(1, Math.ceil(this.filteredEvents.length / this.pageSize));
    if (this.currentPage > this.totalPages)
      this.currentPage = this.totalPages;
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedEvents = this.filteredEvents.slice(start, start + this.pageSize);
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.updatePagination();
  }
  get pageNumbers() {
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;
    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }
    const pages = [];
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  onSelectEvent(event) {
    this.selectedEvent = event;
  }
  onBackToList() {
    this.selectedEvent = null;
    this.loadEvents();
  }
  /**
   * fix (2026-04-27): SP モーダルクリック不能問題対策。
   * MatDialog → ルート遷移 (/community/:id/sub/event/create) に変更。
   */
  onCreate() {
    this.router.navigate(["/community", this.communityId, "sub", "event", "create"]);
  }
  formatMonth(date) {
    const d = new Date(date);
    return `${d.getMonth() + 1}\u6708`;
  }
  formatDay(date) {
    const d = new Date(date);
    return `${d.getDate()}`;
  }
  formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");
    return `${year}/${month}/${day} ${hours}:${minutes}`;
  }
  isPast(date) {
    return new Date(date).getTime() < Date.now();
  }
  onJoinRequest() {
    this.communityService.requestJoin(this.communityId).subscribe(() => {
      this.isMember = true;
      this.notification.success("\u53C2\u52A0\u7533\u8ACB\u304C\u627F\u8A8D\u3055\u308C\u307E\u3057\u305F");
      this.cdr.markForCheck();
    });
  }
  /** 自分が主催のイベントか (ユーザー指示 2026-04-21) */
  isMine(e) {
    return this.communityService.isCurrentUser(e.organizerId);
  }
  /** 編集 */
  onEditEvent(event, ev) {
    ev?.stopPropagation();
    const dialogRef = this.dialog.open(EventCreateComponent, {
      width: "94vw",
      maxWidth: "560px",
      maxHeight: "90dvh",
      panelClass: "community-create-dialog",
      data: { communityId: this.communityId, editing: event }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadEvents();
        this.notification.success("\u30A4\u30D9\u30F3\u30C8\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
      }
    });
  }
  /** 削除 */
  /* 修正 No.53 (2026-04-24): 独自 confirm モーダル化 */
  onDeleteEvent(event, ev) {
    return __async(this, null, function* () {
      ev?.stopPropagation();
      const ok = yield this.confirmDialog.confirm({
        title: "\u30A4\u30D9\u30F3\u30C8\u306E\u524A\u9664",
        message: `\u300C${event.title}\u300D\u3092\u524A\u9664\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F`,
        confirmText: "\u524A\u9664",
        danger: true
      });
      if (!ok)
        return;
      this.communityService.deleteEvent(event.id).subscribe(() => {
        this.loadEvents();
        this.notification.warn("\u30A4\u30D9\u30F3\u30C8\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
      });
    });
  }
  static {
    this.\u0275fac = function EventListComponent_Factory(t) {
      return new (t || _EventListComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventListComponent, selectors: [["app-event-list"]], inputs: { communityId: "communityId", isMember: "isMember" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[3, "joinRequest", "blurred"], [3, "event", "isMember", "back", 4, "ngIf"], ["class", "event-list", 4, "ngIf"], [3, "back", "event", "isMember"], [1, "event-list"], [1, "event-list__header"], ["type", "text", "placeholder", "\u30A4\u30D9\u30F3\u30C8\u3092\u691C\u7D22...", 1, "event-list__search", 3, "ngModelChange", "ngModel"], ["class", "event-list__create-btn", 3, "click", 4, "ngIf"], [1, "event-list__info"], ["class", "event-list__pager", 4, "ngIf"], [1, "event-list__items"], ["class", "event-list__card", 3, "event-list__card--past", "click", 4, "ngFor", "ngForOf"], ["class", "event-list__empty", 4, "ngIf"], [1, "event-list__create-btn", 3, "click"], [1, "event-list__pager"], [1, "event-list__pager-btn", 3, "click", "disabled"], ["class", "event-list__pager-num", 3, "event-list__pager-num--active", "click", 4, "ngFor", "ngForOf"], [1, "event-list__pager-num", 3, "click"], [1, "event-list__card", 3, "click"], ["class", "event-list__card-actions", 4, "ngIf"], ["class", "event-list__card-visual", 4, "ngIf"], ["class", "event-list__card-visual event-list__card-visual--placeholder", 4, "ngIf"], [1, "event-list__card-inner"], [1, "event-list__card-title"], [1, "event-list__card-location"], [4, "ngIf"], [1, "event-list__card-organizer"], [3, "name", "imageUrl", "size"], [1, "event-list__card-organizer-name"], ["class", "event-list__card-organizer-company", 4, "ngIf"], [1, "event-list__card-footer"], [1, "event-list__card-participants"], [1, "event-list__card-avatar-stack"], [3, "name", "imageUrl", "size", 4, "ngFor", "ngForOf"], ["class", "event-list__card-avatar-more", 4, "ngIf"], ["class", "event-list__card-tags", 4, "ngIf"], [1, "event-list__card-actions"], ["title", "\u7DE8\u96C6", 1, "event-list__card-action-btn", 3, "click"], ["title", "\u524A\u9664", 1, "event-list__card-action-btn", "event-list__card-action-btn--danger", 3, "click"], [1, "event-list__card-visual"], [3, "src", "alt"], [1, "event-list__card-date-badge"], [1, "event-list__card-date-month"], [1, "event-list__card-date-day"], [1, "event-list__card-visual", "event-list__card-visual--placeholder"], [1, "event-list__card-organizer-company"], [1, "event-list__card-avatar-more"], [1, "event-list__card-tags"], ["class", "event-list__card-tag", 4, "ngFor", "ngForOf"], [1, "event-list__card-tag"], [1, "event-list__empty"]], template: function EventListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-blur-overlay", 0);
        \u0275\u0275listener("joinRequest", function EventListComponent_Template_app_blur_overlay_joinRequest_0_listener() {
          return ctx.onJoinRequest();
        });
        \u0275\u0275template(1, EventListComponent_app_event_detail_1_Template, 1, 2, "app-event-detail", 1)(2, EventListComponent_div_2_Template, 11, 7, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("blurred", !ctx.isMember);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedEvent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedEvent);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, MatDialogModule, BlurOverlayComponent, AvatarComponent, EventDetailComponent], styles: ['@charset "UTF-8";\n\n\n\n.event-list[_ngcontent-%COMP%] {\n}\n.event-list__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.event-list__search[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 24px;\n  background: #f1f3f4;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n}\n.event-list__search[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.event-list__search[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.3);\n}\n.event-list__create-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: #ff9800;\n  color: #fff;\n  border: none;\n  border-radius: 24px;\n  padding: 10px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.event-list__create-btn[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.event-list__info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9e9e9e;\n  margin-bottom: 12px;\n}\n.event-list__pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 12px 0;\n}\n.event-list__pager-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9e9e9e;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n}\n.event-list__pager-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #ff9800;\n}\n.event-list__pager-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\n.event-list__pager-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.event-list__pager-num[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 13px;\n  color: #5f6368;\n  cursor: pointer;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.event-list__pager-num[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.event-list__pager-num--active[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.event-list__pager-num--active[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n}\n.event-list__items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .event-list__items[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .event-list__items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.event-list__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2dfdc;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  position: relative;\n}\n.event-list__card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.event-list__card--past[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.event-list__card-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  display: flex;\n  gap: 4px;\n  z-index: 2;\n}\n.event-list__card-action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.92);\n  border: 1px solid #e0e0e0;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #5f6368;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    transform 0.15s;\n}\n.event-list__card-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.event-list__card-action-btn[_ngcontent-%COMP%]:hover {\n  background: #ff9800;\n  color: #fff;\n  transform: scale(1.05);\n}\n.event-list__card-action-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #e53935;\n}\n.event-list__card-visual[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n  position: relative;\n}\n.event-list__card-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.event-list__card-visual--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #e3f2fd 0%,\n      #bbdefb 50%,\n      #90caf9 100%);\n}\n.event-list__card-visual--placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: rgba(33, 150, 243, 0.4);\n}\n.event-list__card-date-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 8px;\n  padding: 4px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  line-height: 1.2;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n}\n.event-list__card-date-month[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #ff9800;\n  text-transform: uppercase;\n}\n.event-list__card-date-day[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #81766e;\n}\n.event-list__card-inner[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.event-list__card-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0 0 10px;\n  line-height: 1.5;\n}\n.event-list__card-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: #5f6368;\n  margin-bottom: 10px;\n}\n.event-list__card-location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #9e9e9e;\n}\n.event-list__card-location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.event-list__card-organizer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.event-list__card-organizer-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #81766e;\n}\n.event-list__card-organizer-company[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n}\n.event-list__card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.event-list__card-participants[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #5f6368;\n}\n.event-list__card-participants[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #9e9e9e;\n}\n.event-list__card-avatar-stack[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 4px;\n}\n.event-list__card-avatar-stack[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n  margin-left: -4px;\n}\n.event-list__card-avatar-stack[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.event-list__card-avatar-more[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9e9e9e;\n  margin-left: 4px;\n}\n.event-list__card-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.event-list__card-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 24px;\n  background: #f1f3f4;\n  color: #5f6368;\n}\n.event-list__empty[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  color: #9e9e9e;\n  font-size: 14px;\n  padding: 32px 0;\n}\n@media (max-width: 640px) {\n  .event-list__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .event-list__search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .event-list__card-inner[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .event-list__card-visual[_ngcontent-%COMP%] {\n    height: 150px;\n    overflow: hidden;\n  }\n  .event-list__card-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n  }\n  .event-list__card-organizer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .event-list__card-organizer[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .event-list__card-location[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .event-list__card-location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .event-list__card-participants[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .event-list__card-participants[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .event-list__card-avatar-stack[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .event-list__card-avatar-stack[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n}\n/*# sourceMappingURL=event-list.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventListComponent, { className: "EventListComponent", filePath: "src\\app\\features\\community\\components\\event-list\\event-list.component.ts", lineNumber: 25 });
})();

// src/app/features/community/components/community-detail/community-detail.component.ts
function CommunityDetailComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.label);
  }
}
function CommunityDetailComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "\u53C2\u52A0\u6E08\u307F");
    \u0275\u0275elementEnd()();
  }
}
function CommunityDetailComponent_div_0_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 28);
    \u0275\u0275listener("click", function CommunityDetailComponent_div_0_ng_template_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onJoin());
    });
    \u0275\u0275text(2, "\u53C2\u52A0\u7533\u8ACB");
    \u0275\u0275elementEnd()();
  }
}
function CommunityDetailComponent_div_0_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function CommunityDetailComponent_div_0_button_32_Template_button_click_0_listener() {
      const tab_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab(tab_r6.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("community-detail__tab--active", ctx_r1.activeTab === tab_r6.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r6.label, " ");
  }
}
function CommunityDetailComponent_div_0_app_member_list_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-member-list", 30);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("communityId", ctx_r1.communityId)("isMember", (tmp_5_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.isMember$)) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false);
  }
}
function CommunityDetailComponent_div_0_app_recruitment_list_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recruitment-list", 30);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("communityId", ctx_r1.communityId)("isMember", (tmp_5_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.isMember$)) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false);
  }
}
function CommunityDetailComponent_div_0_app_appeal_list_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-appeal-list", 30);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("communityId", ctx_r1.communityId)("isMember", (tmp_5_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.isMember$)) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false);
  }
}
function CommunityDetailComponent_div_0_app_thread_list_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-thread-list", 30);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("communityId", ctx_r1.communityId)("isMember", (tmp_5_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.isMember$)) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false);
  }
}
function CommunityDetailComponent_div_0_app_news_list_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-news-list", 30);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("communityId", ctx_r1.communityId)("isMember", (tmp_5_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.isMember$)) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false);
  }
}
function CommunityDetailComponent_div_0_app_event_list_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-event-list", 30);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("communityId", ctx_r1.communityId)("isMember", (tmp_5_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.isMember$)) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false);
  }
}
function CommunityDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "button", 4);
    \u0275\u0275listener("click", function CommunityDetailComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBack());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275element(8, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
    \u0275\u0275template(11, CommunityDetailComponent_div_0_div_11_Template, 5, 2, "div", 10);
    \u0275\u0275elementStart(12, "h1", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14);
    \u0275\u0275element(18, "app-avatar", 15);
    \u0275\u0275elementStart(19, "span", 16);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 17)(22, "mat-icon");
    \u0275\u0275text(23, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, CommunityDetailComponent_div_0_div_25_Template, 3, 0, "div", 18);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275template(27, CommunityDetailComponent_div_0_ng_template_27_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 19)(30, "div", 20)(31, "div", 21);
    \u0275\u0275template(32, CommunityDetailComponent_div_0_button_32_Template, 2, 3, "button", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 23);
    \u0275\u0275template(34, CommunityDetailComponent_div_0_app_member_list_34_Template, 2, 4, "app-member-list", 24)(35, CommunityDetailComponent_div_0_app_recruitment_list_35_Template, 2, 4, "app-recruitment-list", 24)(36, CommunityDetailComponent_div_0_app_appeal_list_36_Template, 2, 4, "app-appeal-list", 24)(37, CommunityDetailComponent_div_0_app_thread_list_37_Template, 2, 4, "app-thread-list", 24)(38, CommunityDetailComponent_div_0_app_news_list_38_Template, 2, 4, "app-news-list", 24)(39, CommunityDetailComponent_div_0_app_event_list_39_Template, 2, 4, "app-event-list", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const community_r7 = ctx.ngIf;
    const notMember_r8 = \u0275\u0275reference(28);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(community_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", community_r7.imageUrl, \u0275\u0275sanitizeUrl)("alt", community_r7.title);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.categoryIcons[community_r7.category]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(community_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(community_r7.description);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", community_r7.ownerName)("imageUrl", community_r7.ownerAvatar)("size", 24);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(community_r7.ownerName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", community_r7.memberCount, "\u4EBA\u306E\u30E1\u30F3\u30D0\u30FC ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(26, 20, ctx_r1.isMember$))("ngIfElse", notMember_r8);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "members");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "recruitment");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "appeals");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "threads");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "news");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "events");
  }
}
var CommunityDetailComponent = class _CommunityDetailComponent {
  constructor(communityService, notification) {
    this.communityService = communityService;
    this.notification = notification;
    this.communityId = "";
    this.back = new EventEmitter();
    this.community$ = of(void 0);
    this.isMember$ = of(false);
    this.activeTab = "members";
    this.categoryIcons = CATEGORY_ICONS;
    this.tabs = [
      { key: "members", label: "\u30E1\u30F3\u30D0\u30FC" },
      { key: "recruitment", label: "\u52DF\u96C6" },
      { key: "appeals", label: "\u30A2\u30D4\u30FC\u30EB" },
      { key: "events", label: "\u30A4\u30D9\u30F3\u30C8" },
      { key: "threads", label: "\u30B9\u30EC\u30C3\u30C9" },
      { key: "news", label: "\u30CB\u30E5\u30FC\u30B9" }
    ];
  }
  static {
    this.TAB_STORAGE_PREFIX = "schecon.community-detail.tab.v1.";
  }
  static {
    this.VALID_TABS = [
      "members",
      "recruitment",
      "appeals",
      "events",
      "threads",
      "news"
    ];
  }
  ngOnInit() {
    this.activeTab = this.loadStoredTab(this.communityId);
    this.loadData();
  }
  ngOnChanges(changes) {
    if (changes["communityId"] && !changes["communityId"].firstChange) {
      this.activeTab = this.loadStoredTab(this.communityId);
      this.loadData();
    }
  }
  /** fix #20: 指定 community の保存タブを取得。なければデフォルト 'members'。 */
  loadStoredTab(communityId) {
    if (!communityId)
      return "members";
    try {
      const raw = localStorage.getItem(_CommunityDetailComponent.TAB_STORAGE_PREFIX + communityId);
      if (raw && _CommunityDetailComponent.VALID_TABS.includes(raw)) {
        return raw;
      }
    } catch {
    }
    return "members";
  }
  /** fix #20: 現在のアクティブタブを localStorage に保存 */
  persistTab(tab) {
    if (!this.communityId)
      return;
    try {
      localStorage.setItem(_CommunityDetailComponent.TAB_STORAGE_PREFIX + this.communityId, tab);
    } catch {
    }
  }
  loadData() {
    if (this.communityId) {
      this.community$ = this.communityService.getCommunity(this.communityId);
      this.isMember$ = this.communityService.isMember(this.communityId);
    }
  }
  setTab(tab) {
    this.activeTab = tab;
    this.persistTab(tab);
  }
  onJoin() {
    this.communityService.requestJoin(this.communityId).subscribe(() => {
      this.isMember$ = this.communityService.isMember(this.communityId);
      this.notification.success("\u53C2\u52A0\u7533\u8ACB\u304C\u627F\u8A8D\u3055\u308C\u307E\u3057\u305F");
    });
  }
  onBack() {
    this.back.emit();
  }
  static {
    this.\u0275fac = function CommunityDetailComponent_Factory(t) {
      return new (t || _CommunityDetailComponent)(\u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityDetailComponent, selectors: [["app-community-detail"]], inputs: { communityId: "communityId" }, outputs: { back: "back" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [["notMember", ""], ["class", "community-detail", 4, "ngIf"], [1, "community-detail"], [1, "community-detail__sticky-header"], ["aria-label", "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u4E00\u89A7\u3078\u623B\u308B", 1, "community-detail__sticky-back", 3, "click"], [1, "community-detail__sticky-title"], [1, "community-detail__banner"], [3, "src", "alt"], [1, "community-detail__info"], [1, "community-detail__info-main"], ["class", "community-detail__category", 4, "ngIf"], [1, "community-detail__title"], [1, "community-detail__description"], [1, "community-detail__meta"], [1, "community-detail__owner"], [3, "name", "imageUrl", "size"], [1, "community-detail__owner-name"], [1, "community-detail__member-count"], ["class", "community-detail__join", 4, "ngIf", "ngIfElse"], [1, "community-detail__tabs-wrapper", "community-detail__tabs-wrapper--sticky"], [1, "community-detail__tabs"], [1, "community-detail__tabs-buttons"], ["class", "community-detail__tab", 3, "community-detail__tab--active", "click", 4, "ngFor", "ngForOf"], [1, "community-detail__content"], [3, "communityId", "isMember", 4, "ngIf"], [1, "community-detail__category"], [1, "community-detail__join"], [1, "community-detail__badge", "community-detail__badge--member"], [1, "community-detail__join-btn", 3, "click"], [1, "community-detail__tab", 3, "click"], [3, "communityId", "isMember"]], template: function CommunityDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CommunityDetailComponent_div_0_Template, 40, 22, "div", 1);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.community$));
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      MatIconModule,
      MatIcon,
      AvatarComponent,
      MemberListComponent,
      RecruitmentListComponent,
      AppealListComponent,
      ThreadListComponent,
      NewsListComponent,
      EventListComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.community-detail[_ngcontent-%COMP%] {\n  padding: 0 32px 24px;\n}\n.community-detail__sticky-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 16px;\n  background: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  margin: 0 -32px 16px;\n}\n.community-detail__sticky-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: #ff9800;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.community-detail__sticky-back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.1);\n}\n.community-detail__sticky-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.community-detail__sticky-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #212121;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n  min-width: 0;\n}\n.community-detail__back[_ngcontent-%COMP%] {\n  display: none;\n}\n.community-detail__banner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 240px;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 24px;\n}\n.community-detail__banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n  display: block;\n}\n.community-detail__info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 24px;\n  gap: 24px;\n}\n.community-detail__info-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.community-detail__category[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px 4px 8px;\n  background: rgba(255, 152, 0, 0.08);\n  border-radius: 16px;\n  margin-bottom: 10px;\n}\n.community-detail__category[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #ff9800;\n}\n.community-detail__category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #ff9800;\n}\n.community-detail__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0 0 12px;\n}\n.community-detail__description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5f6368;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.community-detail__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.community-detail__owner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.community-detail__owner-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5f6368;\n}\n.community-detail__member-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #ff9800;\n  background: rgba(255, 152, 0, 0.1);\n  padding: 6px 16px;\n  border-radius: 20px;\n}\n.community-detail__member-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.community-detail__join-btn[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  border: 2px solid #ff9800;\n  border-radius: 24px;\n  background: transparent;\n  color: #ff9800;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.community-detail__join-btn[_ngcontent-%COMP%]:hover {\n  background: #ff9800;\n  color: #fff;\n}\n.community-detail__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 24px;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.community-detail__badge--member[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.community-detail__tabs-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 60px;\n  z-index: 49;\n  margin-left: -32px;\n  margin-right: -32px;\n  margin-bottom: 24px;\n  background: #fff;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.community-detail__tabs-wrapper--sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 60px;\n  z-index: 49;\n  background: #fff;\n}\n.community-detail__tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border-bottom: 1px solid #e2dfdc;\n  background: #fff;\n  padding: 0 32px;\n}\n.community-detail__tabs-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #81766e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 320px;\n  padding-right: 16px;\n  border-right: 1px solid #e2dfdc;\n}\n.community-detail__tabs-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.community-detail__tab[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s;\n}\n.community-detail__tab--active[_ngcontent-%COMP%] {\n  color: #ff9800;\n  border-bottom-color: #ff9800;\n}\n.community-detail__tab[_ngcontent-%COMP%]:hover:not(.community-detail__tab--active) {\n  color: #81766e;\n}\n.community-detail__content[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  min-height: 200px;\n}\n@media (max-width: 640px) {\n  .community-detail[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .community-detail__banner[_ngcontent-%COMP%] {\n    max-height: 160px;\n    margin-bottom: 16px;\n  }\n  .community-detail__banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n  .community-detail__info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 16px;\n    gap: 16px;\n  }\n  .community-detail__title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .community-detail__meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .community-detail__owner[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .community-detail__owner[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .community-detail__member-count[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .community-detail__member-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .community-detail__banner[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n  .community-detail__banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    object-fit: cover;\n    display: block;\n  }\n  .community-detail__category[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n  }\n  .community-detail__category[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .community-detail__tabs-wrapper[_ngcontent-%COMP%] {\n    margin-left: -16px;\n    margin-right: -16px;\n    margin-bottom: 16px;\n  }\n  .community-detail__tabs[_ngcontent-%COMP%] {\n    padding: 0 12px;\n    gap: 0;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .community-detail__tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .community-detail__tabs-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .community-detail__tab[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    font-size: 13px;\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n}\n/*# sourceMappingURL=community-detail.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityDetailComponent, { className: "CommunityDetailComponent", filePath: "src\\app\\features\\community\\components\\community-detail\\community-detail.component.ts", lineNumber: 34 });
})();

// src/app/features/community/pages/community-page/community-page.component.ts
function CommunityPageComponent_app_community_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-community-list", 3);
    \u0275\u0275listener("selectCommunity", function CommunityPageComponent_app_community_list_1_Template_app_community_list_selectCommunity_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectCommunity($event));
    })("createCommunity", function CommunityPageComponent_app_community_list_1_Template_app_community_list_createCommunity_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreateCommunity());
    });
    \u0275\u0275elementEnd();
  }
}
function CommunityPageComponent_app_community_detail_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-community-detail", 4);
    \u0275\u0275listener("back", function CommunityPageComponent_app_community_detail_2_Template_app_community_detail_back_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackToList());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("communityId", ctx_r1.communityId);
  }
}
var CommunityPageComponent = class _CommunityPageComponent {
  constructor(route, router, titleService) {
    this.route = route;
    this.router = router;
    this.titleService = titleService;
    this.communityId = null;
    this.destroy$ = new Subject();
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.communityId = params["id"] || null;
    });
  }
  ngOnInit() {
    this.titleService.setTitle('\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3 | \u65E5\u7A0B\u8ABF\u6574\u30C4\u30FC\u30EB"\u30B9\u30B1\u30B3\u30F3"');
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSelectCommunity(id) {
    this.router.navigate(["/community", id]);
  }
  onBackToList() {
    this.router.navigate(["/community"]);
  }
  /**
   * fix (2026-04-27): SP モーダルクリック不能問題対策。
   * MatDialog による community-create モーダル → /community/create ページ遷移に変更。
   * PC でも一貫した動作 (URL 化、ブラウザ戻る対応、z-index 戦争回避)。
   */
  onCreateCommunity() {
    this.router.navigate(["/community/create"]);
  }
  static {
    this.\u0275fac = function CommunityPageComponent_Factory(t) {
      return new (t || _CommunityPageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityPageComponent, selectors: [["app-community-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "community-page"], [3, "selectCommunity", "createCommunity", 4, "ngIf"], [3, "communityId", "back", 4, "ngIf"], [3, "selectCommunity", "createCommunity"], [3, "back", "communityId"]], template: function CommunityPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, CommunityPageComponent_app_community_list_1_Template, 1, 0, "app-community-list", 1)(2, CommunityPageComponent_app_community_detail_2_Template, 1, 1, "app-community-detail", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.communityId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.communityId);
      }
    }, dependencies: [CommonModule, NgIf, CommunityListComponent, CommunityDetailComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.community-page[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n  background: #f9f9f9;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    -webkit-overflow-scrolling: touch;\n  }\n  .community-page[_ngcontent-%COMP%] {\n    padding: 0 4px;\n  }\n}\n/*# sourceMappingURL=community-page.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityPageComponent, { className: "CommunityPageComponent", filePath: "src\\app\\features\\community\\pages\\community-page\\community-page.component.ts", lineNumber: 20 });
})();
export {
  CommunityPageComponent
};
//# sourceMappingURL=chunk-OC74N3WT.js.map
