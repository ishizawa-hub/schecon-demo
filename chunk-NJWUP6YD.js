import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-3YYMYGX4.js";

// src/app/shared/pipes/relative-time.pipe.ts
var RelativeTimePipe = class _RelativeTimePipe {
  transform(value) {
    if (!value)
      return "";
    const date = value instanceof Date ? value : new Date(value);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1e3);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    if (diffSec < 60) {
      return "\u305F\u3063\u305F\u4ECA";
    }
    if (diffMin < 60) {
      return `${diffMin}\u5206\u524D`;
    }
    if (diffHour < 24) {
      return `${diffHour}\u6642\u9593\u524D`;
    }
    if (diffDay === 1) {
      return "\u6628\u65E5";
    }
    if (diffDay < 7) {
      return `${diffDay}\u65E5\u524D`;
    }
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if (date.getFullYear() === now.getFullYear()) {
      return `${month}\u6708${day}\u65E5`;
    }
    return `${date.getFullYear()}/${month}/${day}`;
  }
  static {
    this.\u0275fac = function RelativeTimePipe_Factory(t) {
      return new (t || _RelativeTimePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "relativeTime", type: _RelativeTimePipe, pure: true, standalone: true });
  }
};

// src/app/shared/components/avatar/avatar.component.ts
function AvatarComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.name);
  }
}
function AvatarComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.initials);
  }
}
var AvatarComponent = class _AvatarComponent {
  constructor() {
    this.name = "";
    this.size = 40;
  }
  get initials() {
    if (!this.name)
      return "?";
    const chars = this.name.trim();
    if (/[\u3000-\u9fff]/.test(chars)) {
      return chars.charAt(0);
    }
    const parts = chars.split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
    }
    return chars.charAt(0).toUpperCase();
  }
  get backgroundColor() {
    const colors = [
      "#e53935",
      "#d81b60",
      "#8e24aa",
      "#5e35b1",
      "#3949ab",
      "#1e88e5",
      "#039be5",
      "#00acc1",
      "#00897b",
      "#43a047",
      "#7cb342",
      "#c0ca33",
      "#fdd835",
      "#ffb300",
      "#fb8c00",
      "#f4511e"
    ];
    let hash = 0;
    for (let i = 0; i < this.name.length; i++) {
      hash = this.name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }
  static {
    this.\u0275fac = function AvatarComponent_Factory(t) {
      return new (t || _AvatarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvatarComponent, selectors: [["app-avatar"]], inputs: { name: "name", size: "size", imageUrl: "imageUrl" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 12, consts: [[1, "avatar"], ["class", "avatar__image", 3, "src", "alt", 4, "ngIf"], ["class", "avatar__initials", 4, "ngIf"], [1, "avatar__image", 3, "src", "alt"], [1, "avatar__initials"]], template: function AvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AvatarComponent_img_1_Template, 1, 2, "img", 1)(2, AvatarComponent_span_2_Template, 2, 1, "span", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.size, "px")("height", ctx.size, "px")("font-size", ctx.size * 0.4, "px")("line-height", ctx.size, "px")("background-color", ctx.imageUrl ? "transparent" : ctx.backgroundColor);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.imageUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.imageUrl);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.avatar__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar__initials[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  -webkit-user-select: none;\n  user-select: none;\n  text-align: center;\n}\n/*# sourceMappingURL=avatar.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvatarComponent, { className: "AvatarComponent", filePath: "src\\app\\shared\\components\\avatar\\avatar.component.ts", lineNumber: 12 });
})();

// src/app/shared/pipes/truncate.pipe.ts
var TruncatePipe = class _TruncatePipe {
  transform(value, limit = 50, trail = "...") {
    if (!value)
      return "";
    if (value.length <= limit)
      return value;
    return value.substring(0, limit) + trail;
  }
  static {
    this.\u0275fac = function TruncatePipe_Factory(t) {
      return new (t || _TruncatePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "truncate", type: _TruncatePipe, pure: true, standalone: true });
  }
};

export {
  RelativeTimePipe,
  TruncatePipe,
  AvatarComponent
};
//# sourceMappingURL=chunk-NJWUP6YD.js.map
