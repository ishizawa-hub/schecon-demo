import {
  MatIcon,
  MatIconModule
} from "./chunk-MPKYFQD7.js";
import {
  ChangeDetectorRef,
  CommonModule,
  EventEmitter,
  NgIf,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-3YYMYGX4.js";

// src/app/shared/components/image-upload/image-upload.component.ts
function ImageUploadComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("dragover", function ImageUploadComponent_div_1_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragOver($event));
    })("dragleave", function ImageUploadComponent_div_1_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragLeave($event));
    })("drop", function ImageUploadComponent_div_1_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrop($event));
    })("click", function ImageUploadComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext();
      const fileInput_r4 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(fileInput_r4.click());
    });
    \u0275\u0275elementStart(1, "mat-icon", 10);
    \u0275\u0275text(2, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4, "\u30AF\u30EA\u30C3\u30AF\u307E\u305F\u306F\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7\u3067\u753B\u50CF\u3092\u8FFD\u52A0");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("image-upload__dropzone--dragging", ctx_r2.isDragging);
  }
}
function ImageUploadComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u63A8\u5968\u30B5\u30A4\u30BA: ", ctx_r2.recommendedSize, " / \u5BFE\u5FDC\u5F62\u5F0F: JPG, PNG, GIF, WebP / \u6700\u5927", ctx_r2.maxFileSizeMB, "MB ");
  }
}
function ImageUploadComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function ImageUploadComponent_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "div", 20)(3, "span", 21);
    \u0275\u0275text(4, "\u7E26\u9577\u753B\u50CF: \u8868\u793A\u7BC4\u56F2\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u8ABF\u6574");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r2.cropTop, "%");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("height", 100 - ctx_r2.cropTop - 56.25, "%");
  }
}
function ImageUploadComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14, 1);
    \u0275\u0275listener("mousemove", function ImageUploadComponent_div_4_Template_div_mousemove_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const previewContainer_r6 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCropMove($event, previewContainer_r6));
    });
    \u0275\u0275element(2, "img", 15);
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function ImageUploadComponent_div_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ImageUploadComponent_div_4_div_6_Template, 6, 4, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.previewUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r2.fileName || "\u9078\u629E\u3057\u305F\u753B\u50CF");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.isPortrait);
  }
}
function ImageUploadComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fileName);
  }
}
var ImageUploadComponent = class _ImageUploadComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.recommendedSize = "1200 x 630px (16:9)";
    this.maxFileSizeMB = 5;
    this.imageSelected = new EventEmitter();
    this.imageRemoved = new EventEmitter();
    this.previewUrl = null;
    this.fileName = null;
    this.isDragging = false;
    this.isPortrait = false;
    this.cropTop = 0;
    this.error = null;
    this.allowedExtensions = ["JPG", "JPEG", "PNG", "GIF", "WebP"];
    this.allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  }
  onDragOver(event) {
    event.preventDefault();
    this.isDragging = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    this.isDragging = false;
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.processFile(files[0]);
    }
  }
  onFileSelect(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.processFile(input.files[0]);
      input.value = "";
    }
  }
  processFile(file) {
    this.error = null;
    if (!this.allowedMimeTypes.includes(file.type)) {
      this.error = `\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u3067\u3059\u3002${this.allowedExtensions.join(", ")} \u306E\u307F\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002`;
      this.cdr.markForCheck();
      return;
    }
    if (file.size > this.maxFileSizeMB * 1024 * 1024) {
      this.error = `\u30D5\u30A1\u30A4\u30EB\u30B5\u30A4\u30BA\u304C${this.maxFileSizeMB}MB\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002`;
      this.cdr.markForCheck();
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target?.result;
      const img = new Image();
      img.onload = () => {
        this.isPortrait = img.height > img.width * 1.3;
        this.cropTop = 0;
        this.previewUrl = url;
        this.fileName = file.name;
        this.imageSelected.emit({ file, previewUrl: url });
        this.cdr.markForCheck();
      };
      img.src = url;
    };
    reader.readAsDataURL(file);
  }
  onCropMove(event, container) {
    if (!this.isPortrait)
      return;
    const rect = container.getBoundingClientRect();
    const y = event.clientY - rect.top;
    const percent = Math.max(0, Math.min(100, y / rect.height * 100));
    this.cropTop = percent;
  }
  removeImage() {
    this.previewUrl = null;
    this.fileName = null;
    this.isPortrait = false;
    this.cropTop = 0;
    this.error = null;
    this.imageRemoved.emit();
  }
  static {
    this.\u0275fac = function ImageUploadComponent_Factory(t) {
      return new (t || _ImageUploadComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageUploadComponent, selectors: [["app-image-upload"]], inputs: { recommendedSize: "recommendedSize", maxFileSizeMB: "maxFileSizeMB" }, outputs: { imageSelected: "imageSelected", imageRemoved: "imageRemoved" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 5, consts: [["fileInput", ""], ["previewContainer", ""], [1, "image-upload"], ["class", "image-upload__dropzone", 3, "image-upload__dropzone--dragging", "dragover", "dragleave", "drop", "click", 4, "ngIf"], ["class", "image-upload__info", 4, "ngIf"], ["class", "image-upload__error", 4, "ngIf"], ["class", "image-upload__preview", 3, "mousemove", 4, "ngIf"], ["class", "image-upload__filename", 4, "ngIf"], ["type", "file", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "image-upload__input", 3, "change"], [1, "image-upload__dropzone", 3, "dragover", "dragleave", "drop", "click"], [1, "image-upload__icon"], [1, "image-upload__text"], [1, "image-upload__info"], [1, "image-upload__error"], [1, "image-upload__preview", 3, "mousemove"], [1, "image-upload__preview-image", 3, "src", "alt"], ["type", "button", "aria-label", "\u753B\u50CF\u3092\u524A\u9664", 1, "image-upload__remove", 3, "click"], ["class", "image-upload__crop-overlay", 4, "ngIf"], [1, "image-upload__crop-overlay"], [1, "image-upload__crop-top"], [1, "image-upload__crop-guide"], [1, "image-upload__crop-label"], [1, "image-upload__crop-bottom"], [1, "image-upload__filename"]], template: function ImageUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, ImageUploadComponent_div_1_Template, 5, 2, "div", 3)(2, ImageUploadComponent_p_2_Template, 2, 2, "p", 4)(3, ImageUploadComponent_p_3_Template, 2, 1, "p", 5)(4, ImageUploadComponent_div_4_Template, 7, 3, "div", 6)(5, ImageUploadComponent_p_5_Template, 2, 1, "p", 7);
        \u0275\u0275elementStart(6, "input", 8, 0);
        \u0275\u0275listener("change", function ImageUploadComponent_Template_input_change_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelect($event));
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.previewUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.previewUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.previewUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fileName);
      }
    }, dependencies: [CommonModule, NgIf, MatIconModule, MatIcon], styles: ['@charset "UTF-8";\n\n\n\n.image-upload[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.image-upload__input[_ngcontent-%COMP%] {\n  display: none;\n}\n.image-upload__dropzone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px 16px;\n  border: 2px dashed #e2dfdc;\n  border-radius: 12px;\n  background-color: #fafafa;\n  cursor: pointer;\n  transition: border-color 0.2s ease, background-color 0.2s ease;\n}\n.image-upload__dropzone[_ngcontent-%COMP%]:hover {\n  border-color: #ff9800;\n  background-color: #fff8f0;\n}\n.image-upload__dropzone--dragging[_ngcontent-%COMP%] {\n  border-color: #ff9800;\n  background-color: #fff3e0;\n}\n.image-upload__icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #5f6368;\n}\n.image-upload__text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #5f6368;\n  text-align: center;\n}\n.image-upload__info[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 12px;\n  color: #5f6368;\n  line-height: 1.5;\n}\n.image-upload__error[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 13px;\n  color: #d32f2f;\n  font-weight: 500;\n}\n.image-upload__preview[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  max-height: 200px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.image-upload__preview-image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 200px;\n  object-fit: cover;\n  border-radius: 12px;\n}\n.image-upload__remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: rgba(32, 33, 36, 0.6);\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  z-index: 3;\n}\n.image-upload__remove[_ngcontent-%COMP%]:hover {\n  background-color: rgba(32, 33, 36, 0.85);\n}\n.image-upload__remove[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.image-upload__crop-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 2;\n}\n.image-upload__crop-top[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n  transition: height 0.05s linear;\n}\n.image-upload__crop-guide[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 56.25%;\n  border-top: 2px solid #ff9800;\n  border-bottom: 2px solid #ff9800;\n  box-sizing: border-box;\n}\n.image-upload__crop-label[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 11px;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.55);\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.image-upload__crop-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n  transition: height 0.05s linear;\n}\n.image-upload__filename[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 12px;\n  color: #5f6368;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 767px) {\n  .image-upload__preview[_ngcontent-%COMP%] {\n    max-width: 80vw !important;\n    max-height: 60vh !important;\n    margin: 0 auto;\n  }\n  .image-upload__preview-image[_ngcontent-%COMP%] {\n    max-width: 80vw !important;\n    max-height: 60vh !important;\n    object-fit: contain !important;\n  }\n  .image-upload__remove[_ngcontent-%COMP%] {\n    width: 40px !important;\n    height: 40px !important;\n    top: calc(8px + env(safe-area-inset-top, 0px)) !important;\n    right: 8px !important;\n  }\n  .image-upload__crop-label[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n    padding: 3px 8px !important;\n  }\n}\n/*# sourceMappingURL=image-upload.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageUploadComponent, { className: "ImageUploadComponent", filePath: "src\\app\\shared\\components\\image-upload\\image-upload.component.ts", lineNumber: 13 });
})();

export {
  ImageUploadComponent
};
//# sourceMappingURL=chunk-QLKTM4SV.js.map
