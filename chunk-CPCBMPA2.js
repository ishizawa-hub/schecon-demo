import {
  ImageUploadComponent
} from "./chunk-QLKTM4SV.js";
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
  NgModel,
  RequiredValidator
} from "./chunk-YF2NDTP4.js";
import {
  Router
} from "./chunk-VOAOX4DE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MPKYFQD7.js";
import {
  CommonModule,
  Location,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3YYMYGX4.js";

// src/app/features/community/pages/community-create-page/community-create-page.component.ts
function CommunityCreatePageComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "img", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.imagePreviewUrl, \u0275\u0275sanitizeUrl);
  }
}
var CommunityCreatePageComponent = class _CommunityCreatePageComponent {
  constructor(router, location, communityService, notification) {
    this.router = router;
    this.location = location;
    this.communityService = communityService;
    this.notification = notification;
    this.imageUrl = "";
    this.title = "";
    this.description = "";
    this.tagsText = "";
    this.imageFile = null;
  }
  get imagePreviewUrl() {
    return this.imageUrl.trim() || null;
  }
  onImageSelected(event) {
    this.imageFile = event.file;
  }
  onImageRemoved() {
    this.imageFile = null;
  }
  onBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(["/community"]);
    }
  }
  onCancel() {
    this.onBack();
  }
  onCreate() {
    if (!this.title.trim())
      return;
    const tags = this.tagsText.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
    this.communityService.createCommunity({
      title: this.title.trim(),
      description: this.description.trim(),
      imageUrl: this.imageUrl.trim() || void 0,
      tags
    }).subscribe((community) => {
      this.notification.success("\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F");
      this.router.navigate(["/community", community.id]);
    });
  }
  static {
    this.\u0275fac = function CommunityCreatePageComponent_Factory(t) {
      return new (t || _CommunityCreatePageComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityCreatePageComponent, selectors: [["app-community-create-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 6, consts: [[1, "community-create-page"], [1, "community-create-page__header"], ["aria-label", "\u623B\u308B", 1, "community-create-page__back", 3, "click"], [1, "community-create-page__title"], [1, "community-create-page__body"], [1, "community-create-page__field"], [1, "community-create-page__label"], ["type", "text", "placeholder", "https://example.com/image.jpg", 1, "community-create-page__input", 3, "ngModelChange", "ngModel"], ["class", "community-create-page__preview", 4, "ngIf"], [1, "community-create-page__required"], ["type", "text", "placeholder", "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u540D\u3092\u5165\u529B", "required", "", 1, "community-create-page__input", 3, "ngModelChange", "ngModel"], ["placeholder", "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u8AAC\u660E\u3092\u5165\u529B", "rows", "4", 1, "community-create-page__textarea", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u4F8B: \u30A8\u30F3\u30B8\u30CB\u30A2, \u30C7\u30B6\u30A4\u30F3, \u8D77\u696D", 1, "community-create-page__input", 3, "ngModelChange", "ngModel"], ["recommendedSize", "1200 x 630px (16:9)", 3, "imageSelected", "imageRemoved"], [1, "community-create-page__footer"], [1, "community-create-page__cancel-btn", 3, "click"], [1, "community-create-page__submit-btn", 3, "click", "disabled"], [1, "community-create-page__preview"], ["alt", "\u30D7\u30EC\u30D3\u30E5\u30FC", 3, "src"]], template: function CommunityCreatePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
        \u0275\u0275listener("click", function CommunityCreatePageComponent_Template_button_click_2_listener() {
          return ctx.onBack();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "h2", 3);
        \u0275\u0275text(6, "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3092\u4F5C\u6210");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label", 6);
        \u0275\u0275text(10, "\u753B\u50CFURL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function CommunityCreatePageComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.imageUrl, $event) || (ctx.imageUrl = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, CommunityCreatePageComponent_div_12_Template, 2, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 5)(14, "label", 6);
        \u0275\u0275text(15, "\u30BF\u30A4\u30C8\u30EB ");
        \u0275\u0275elementStart(16, "span", 9);
        \u0275\u0275text(17, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CommunityCreatePageComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 5)(20, "label", 6);
        \u0275\u0275text(21, "\u8AAC\u660E");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "textarea", 11);
        \u0275\u0275twoWayListener("ngModelChange", function CommunityCreatePageComponent_Template_textarea_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 5)(24, "label", 6);
        \u0275\u0275text(25, "\u30BF\u30B0\uFF08\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function CommunityCreatePageComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.tagsText, $event) || (ctx.tagsText = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 5)(28, "label", 6);
        \u0275\u0275text(29, "\u753B\u50CF\u3092\u6DFB\u4ED8\uFF08\u4EFB\u610F\uFF09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "app-image-upload", 13);
        \u0275\u0275listener("imageSelected", function CommunityCreatePageComponent_Template_app_image_upload_imageSelected_30_listener($event) {
          return ctx.onImageSelected($event);
        })("imageRemoved", function CommunityCreatePageComponent_Template_app_image_upload_imageRemoved_30_listener() {
          return ctx.onImageRemoved();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "footer", 14)(32, "button", 15);
        \u0275\u0275listener("click", function CommunityCreatePageComponent_Template_button_click_32_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(33, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 16);
        \u0275\u0275listener("click", function CommunityCreatePageComponent_Template_button_click_34_listener() {
          return ctx.onCreate();
        });
        \u0275\u0275text(35, " \u4F5C\u6210 ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.imageUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.imagePreviewUrl);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.title);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.description);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.tagsText);
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", !ctx.title.trim());
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, MatIconModule, MatIcon, ImageUploadComponent], styles: ['@charset "UTF-8";\n\n\n\n.community-create-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100dvh;\n  min-height: 100svh;\n  min-height: 100vh;\n  background: #fafafa;\n}\n.community-create-page__header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 16px;\n  background: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.community-create-page__back[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  color: #ff9800;\n  border-radius: 50%;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.community-create-page__back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.1);\n}\n.community-create-page__back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.community-create-page__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #212121;\n  margin: 0;\n}\n.community-create-page__body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 20px 16px 80px;\n  max-width: 720px;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 auto;\n}\n.community-create-page__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 18px;\n}\n.community-create-page__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #555;\n}\n.community-create-page__required[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.community-create-page__input[_ngcontent-%COMP%], .community-create-page__textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  background: #fff;\n  box-sizing: border-box;\n}\n.community-create-page__input[_ngcontent-%COMP%]:focus, .community-create-page__textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ff9800;\n}\n.community-create-page__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 88px;\n}\n.community-create-page__preview[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.community-create-page__preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.community-create-page__footer[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  z-index: 50;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  padding: 12px 16px;\n  background: #fff;\n  border-top: 1px solid #e0e0e0;\n  padding-bottom: calc(12px + env(safe-area-inset-bottom, 0));\n}\n.community-create-page__cancel-btn[_ngcontent-%COMP%], .community-create-page__submit-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, opacity 0.15s;\n}\n.community-create-page__cancel-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #555;\n}\n.community-create-page__cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.community-create-page__submit-btn[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.community-create-page__submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ef6c00;\n}\n.community-create-page__submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #e0e0e0;\n  color: #fff;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=community-create-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityCreatePageComponent, { className: "CommunityCreatePageComponent", filePath: "src\\app\\features\\community\\pages\\community-create-page\\community-create-page.component.ts", lineNumber: 30 });
})();
export {
  CommunityCreatePageComponent
};
//# sourceMappingURL=chunk-CPCBMPA2.js.map
