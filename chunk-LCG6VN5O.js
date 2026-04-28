import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
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
  ChangeDetectorRef,
  CommonModule,
  NgClass,
  NgForOf,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-3YYMYGX4.js";

// src/app/features/address-book/pages/contact-detail-page/contact-detail-page.component.ts
var _c0 = ["tabSentinel"];
function ContactDetailPageComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 26);
    \u0275\u0275listener("click", function ContactDetailPageComponent_div_35_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateBack());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 27)(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29)(8, "span", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.avatarInitial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.contact.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.contact.company);
  }
}
function ContactDetailPageComponent_div_47_a_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51)(1, "mat-icon");
    \u0275\u0275text(2, "facebook");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Facebook");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r2.contact.sns.facebook, \u0275\u0275sanitizeUrl);
  }
}
function ContactDetailPageComponent_div_47_a_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51)(1, "mat-icon");
    \u0275\u0275text(2, "alternate_email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "X (Twitter)");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r2.contact.sns.twitter, \u0275\u0275sanitizeUrl);
  }
}
function ContactDetailPageComponent_div_47_a_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51)(1, "mat-icon");
    \u0275\u0275text(2, "photo_camera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Instagram");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r2.contact.sns.instagram, \u0275\u0275sanitizeUrl);
  }
}
function ContactDetailPageComponent_div_47_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r4, " ");
  }
}
function ContactDetailPageComponent_div_47_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementStart(2, "div", 55)(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 59);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r5.period);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.description);
  }
}
function ContactDetailPageComponent_div_47_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementStart(2, "div", 55)(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 59);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r6.period);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r6.school);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r6.faculty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r6.description);
  }
}
function ContactDetailPageComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h2", 35)(4, "mat-icon");
    \u0275\u0275text(5, "contact_mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u9023\u7D61\u5148\u60C5\u5831 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36)(8, "div", 37)(9, "span", 38);
    \u0275\u0275text(10, "\u30E1\u30FC\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 37)(14, "span", 38);
    \u0275\u0275text(15, "\u96FB\u8A71\u756A\u53F7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 39);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 37)(19, "span", 38);
    \u0275\u0275text(20, "\u4F4F\u6240");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 40);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 37)(24, "span", 38);
    \u0275\u0275text(25, "\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 41);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 34)(29, "h2", 35)(30, "mat-icon");
    \u0275\u0275text(31, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " SNS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 36)(34, "div", 42);
    \u0275\u0275template(35, ContactDetailPageComponent_div_47_a_35_Template, 5, 1, "a", 43)(36, ContactDetailPageComponent_div_47_a_36_Template, 5, 1, "a", 43)(37, ContactDetailPageComponent_div_47_a_37_Template, 5, 1, "a", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 34)(39, "h2", 35)(40, "mat-icon");
    \u0275\u0275text(41, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " \u81EA\u5DF1\u7D39\u4ECB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 36)(44, "p", 44);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 45);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 46)(49, "div", 37)(50, "span", 38);
    \u0275\u0275text(51, "\u51FA\u8EAB\u5730");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 40);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 37)(55, "span", 38);
    \u0275\u0275text(56, "\u8A95\u751F\u65E5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 40);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "div", 34)(60, "h2", 35)(61, "mat-icon");
    \u0275\u0275text(62, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " \u30B9\u30AD\u30EB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 36)(65, "div", 47);
    \u0275\u0275template(66, ContactDetailPageComponent_div_47_span_66_Template, 2, 1, "span", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 34)(68, "h2", 35)(69, "mat-icon");
    \u0275\u0275text(70, "work");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " \u7D4C\u6B74 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 36)(73, "div", 49);
    \u0275\u0275template(74, ContactDetailPageComponent_div_47_div_74_Template, 11, 4, "div", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 34)(76, "h2", 35)(77, "mat-icon");
    \u0275\u0275text(78, "school");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, " \u5B66\u6B74 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 36)(81, "div", 49);
    \u0275\u0275template(82, ContactDetailPageComponent_div_47_div_82_Template, 11, 4, "div", 50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("href", "mailto:" + ctx_r2.contact.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.contact.email, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "tel:" + ctx_r2.contact.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.contact.phone, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.contact.address);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", ctx_r2.contact.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.contact.website, " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.contact.sns.facebook);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.contact.sns.twitter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.contact.sns.instagram);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.contact.bio);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.contact.catchphrase);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.contact.birthplace);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.contact.birthday);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.contact.skills);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.contact.career);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.contact.education);
  }
}
function ContactDetailPageComponent_div_48_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "mat-icon");
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r8.scheduledDate);
  }
}
function ContactDetailPageComponent_div_48_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "mat-icon");
    \u0275\u0275text(2, "timer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u7DE0\u5207: ", item_r8.deadline, "");
  }
}
function ContactDetailPageComponent_div_48_div_2_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "mat-icon");
    \u0275\u0275text(2, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u79FB\u52D5 ", item_r8.travelTime, "\u5206");
  }
}
function ContactDetailPageComponent_div_48_div_2_button_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 74)(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u7DE8\u96C6 ");
    \u0275\u0275elementEnd();
  }
}
function ContactDetailPageComponent_div_48_div_2_button_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 74)(1, "mat-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u53C2\u52A0\u8005\u540D\u7C3FDL ");
    \u0275\u0275elementEnd();
  }
}
function ContactDetailPageComponent_div_48_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 68)(9, "div", 69)(10, "mat-icon");
    \u0275\u0275text(11, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 69)(15, "mat-icon");
    \u0275\u0275text(16, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, ContactDetailPageComponent_div_48_div_2_div_19_Template, 5, 1, "div", 70)(20, ContactDetailPageComponent_div_48_div_2_div_20_Template, 5, 1, "div", 70);
    \u0275\u0275elementStart(21, "div", 69)(22, "mat-icon");
    \u0275\u0275text(23, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 69)(27, "mat-icon");
    \u0275\u0275text(28, "timelapse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, ContactDetailPageComponent_div_48_div_2_div_31_Template, 5, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 71)(33, "button", 72);
    \u0275\u0275listener("click", function ContactDetailPageComponent_div_48_div_2_Template_button_click_33_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyUrl(item_r8.id));
    });
    \u0275\u0275elementStart(34, "mat-icon");
    \u0275\u0275text(35, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " URL\u30B3\u30D4\u30FC ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ContactDetailPageComponent_div_48_div_2_button_37_Template, 4, 0, "button", 73);
    \u0275\u0275elementStart(38, "button", 74)(39, "mat-icon");
    \u0275\u0275text(40, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " \u518D\u4F5C\u6210 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, ContactDetailPageComponent_div_48_div_2_button_42_Template, 4, 0, "button", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.getTypeCardClass(item_r8.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getTypeBadgeClass(item_r8.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getStatusBadgeClass(item_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r8.organizer);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u4F5C\u6210: ", item_r8.createdDate, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.scheduledDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r8.scheduledDate && item_r8.deadline);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", item_r8.participants, "\u540D");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", item_r8.duration, "\u5206");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.travelTime > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", item_r8.status === "\u8ABF\u6574\u4E2D");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", item_r8.status === "\u78BA\u5B9A");
  }
}
function ContactDetailPageComponent_div_48_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "mat-icon");
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74\u304C\u3042\u308A\u307E\u305B\u3093");
    \u0275\u0275elementEnd()();
  }
}
function ContactDetailPageComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 60);
    \u0275\u0275template(2, ContactDetailPageComponent_div_48_div_2_Template, 43, 15, "div", 61)(3, ContactDetailPageComponent_div_48_div_3_Template, 5, 0, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.contact.schedulingHistory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.contact.schedulingHistory.length === 0);
  }
}
var ContactDetailPageComponent = class _ContactDetailPageComponent {
  get avatarInitial() {
    return this.contact.name.charAt(0);
  }
  constructor(router, route, notification, titleService, cdr) {
    this.router = router;
    this.route = route;
    this.notification = notification;
    this.titleService = titleService;
    this.cdr = cdr;
    this.activeTab = "profile";
    this.stuck = false;
    this.sentinelObserver = null;
    this.contact = {
      id: "c-001",
      name: "\u7530\u4E2D \u592A\u90CE",
      furigana: "\u30BF\u30CA\u30AB \u30BF\u30ED\u30A6",
      avatarUrl: "",
      company: "\u682A\u5F0F\u4F1A\u793E\u30C6\u30C3\u30AF\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3",
      department: "\u30D7\u30ED\u30C0\u30AF\u30C8\u958B\u767A\u90E8",
      title: "\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC",
      email: "tanaka@techinnovation.co.jp",
      phone: "03-1234-5678",
      address: "\u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\u795E\u5BAE\u524D1-2-3 \u30C6\u30C3\u30AF\u30D3\u30EB5F",
      website: "https://techinnovation.co.jp",
      sns: {
        facebook: "https://facebook.com/tanaka.taro",
        twitter: "https://x.com/tanaka_taro",
        instagram: "https://instagram.com/tanaka.taro"
      },
      bio: "\u30D7\u30ED\u30C0\u30AF\u30C8\u958B\u767A\u306B10\u5E74\u4EE5\u4E0A\u643A\u308F\u308A\u3001\u30E6\u30FC\u30B6\u30FC\u4E2D\u5FC3\u8A2D\u8A08\u3092\u30D9\u30FC\u30B9\u306B\u3057\u305F\u30B5\u30FC\u30D3\u30B9\u958B\u767A\u3092\u5F97\u610F\u3068\u3057\u3066\u3044\u307E\u3059\u3002\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u304B\u3089\u5927\u624B\u4F01\u696D\u307E\u3067\u5E45\u5E83\u3044\u74B0\u5883\u3067\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3092\u7D4C\u9A13\u3002\u30C1\u30FC\u30E0\u5168\u4F53\u306E\u751F\u7523\u6027\u3092\u9AD8\u3081\u308B\u3053\u3068\u306B\u60C5\u71B1\u3092\u6CE8\u3044\u3067\u3044\u307E\u3059\u3002",
      catchphrase: "\u300C\u30E6\u30FC\u30B6\u30FC\u306E\u58F0\u306B\u8033\u3092\u50BE\u3051\u3001\u6700\u9AD8\u306E\u4F53\u9A13\u3092\u5C4A\u3051\u308B\u300D",
      birthplace: "\u795E\u5948\u5DDD\u770C\u6A2A\u6D5C\u5E02",
      birthday: "1988\u5E744\u670815\u65E5",
      skills: ["React", "TypeScript", "\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8", "\u30A2\u30B8\u30E3\u30A4\u30EB", "UX\u30C7\u30B6\u30A4\u30F3"],
      career: [
        {
          period: "2020\u5E744\u6708 \u301C \u73FE\u5728",
          company: "\u682A\u5F0F\u4F1A\u793E\u30C6\u30C3\u30AF\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3",
          role: "\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC",
          description: "BtoB SaaS\u30D7\u30ED\u30C0\u30AF\u30C8\u306E\u4F01\u753B\u30FB\u958B\u767A\u3092\u30EA\u30FC\u30C9\u3002\u30C1\u30FC\u30E015\u540D\u306E\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3092\u62C5\u5F53\u3057\u3001ARR 300%\u6210\u9577\u3092\u9054\u6210\u3002"
        },
        {
          period: "2015\u5E744\u6708 \u301C 2020\u5E743\u6708",
          company: "\u682A\u5F0F\u4F1A\u793E\u30C7\u30B8\u30BF\u30EB\u30AF\u30EA\u30A8\u30A4\u30C8",
          role: "\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2 \u2192 \u30EA\u30FC\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2",
          description: "Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u958B\u767A\u3092\u62C5\u5F53\u30022018\u5E74\u3088\u308A\u30EA\u30FC\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2\u3068\u3057\u3066\u6280\u8853\u9078\u5B9A\u30FB\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u8A2D\u8A08\u3092\u4E3B\u5C0E\u3002"
        }
      ],
      education: [
        {
          period: "2007\u5E744\u6708 \u301C 2011\u5E743\u6708",
          school: "\u6771\u4EAC\u5DE5\u696D\u5927\u5B66",
          faculty: "\u60C5\u5831\u7406\u5DE5\u5B66\u9662 \u60C5\u5831\u5DE5\u5B66\u7CFB",
          description: "\u5352\u696D\u7814\u7A76\u30C6\u30FC\u30DE: \u30D2\u30E5\u30FC\u30DE\u30F3\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306B\u304A\u3051\u308BUI\u6700\u9069\u5316\u624B\u6CD5\u306E\u7814\u7A76"
        }
      ],
      schedulingHistory: [
        {
          id: "sh-001",
          type: "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574",
          createdDate: "2026-03-28",
          title: "Q2\u30D7\u30ED\u30C0\u30AF\u30C8\u6226\u7565\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0",
          status: "\u78BA\u5B9A",
          organizer: "\u77F3\u6FA4 \u79C0\u6B21\u90CE",
          scheduledDate: "2026-04-01 10:00-11:00",
          deadline: "",
          participants: 5,
          duration: 60,
          travelTime: 0,
          currentResponses: 5
        },
        {
          id: "sh-002",
          type: "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574",
          createdDate: "2026-03-20",
          title: "\u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC 1on1",
          status: "\u78BA\u5B9A",
          organizer: "\u7530\u4E2D \u592A\u90CE",
          scheduledDate: "2026-03-25 14:00-15:00",
          deadline: "",
          participants: 2,
          duration: 60,
          travelTime: 15,
          currentResponses: 2
        },
        {
          id: "sh-003",
          type: "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574",
          createdDate: "2026-03-15",
          title: "\u30E9\u30F3\u30C1\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0",
          status: "\u30AD\u30E3\u30F3\u30BB\u30EB",
          organizer: "\u77F3\u6FA4 \u79C0\u6B21\u90CE",
          scheduledDate: "",
          deadline: "2026-03-20 17:30",
          participants: 4,
          duration: 60,
          travelTime: 0,
          currentResponses: 1
        },
        {
          id: "sh-004",
          type: "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574",
          createdDate: "2026-04-01",
          title: "\u30B9\u30D7\u30EA\u30F3\u30C8\u30EC\u30C8\u30ED\u30B9\u30DA\u30AF\u30C6\u30A3\u30D6",
          status: "\u8ABF\u6574\u4E2D",
          organizer: "\u7530\u4E2D \u592A\u90CE",
          scheduledDate: "",
          deadline: "2026-04-10 17:30",
          participants: 8,
          duration: 45,
          travelTime: 0,
          currentResponses: 3
        },
        {
          id: "sh-005",
          type: "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574",
          createdDate: "2026-04-02",
          title: "\u65B0\u6A5F\u80FD\u30D6\u30EC\u30A4\u30F3\u30B9\u30C8\u30FC\u30DF\u30F3\u30B0",
          status: "\u8ABF\u6574\u4E2D",
          organizer: "\u77F3\u6FA4 \u79C0\u6B21\u90CE",
          scheduledDate: "",
          deadline: "2026-04-16 17:30",
          participants: 2,
          duration: 30,
          travelTime: 30,
          currentResponses: 0
        },
        {
          id: "sh-006",
          type: "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574",
          createdDate: "2026-02-10",
          title: "\u5E74\u5EA6\u672B\u5831\u544A\u4F1A",
          status: "\u4E0D\u6210\u7ACB",
          organizer: "\u77F3\u6FA4 \u79C0\u6B21\u90CE",
          scheduledDate: "",
          deadline: "2026-03-01 17:30",
          participants: 6,
          duration: 90,
          travelTime: 0,
          currentResponses: 2
        }
      ]
    };
  }
  ngOnInit() {
    this.titleService.setTitle(`${this.contact.name} | \u30D7\u30ED\u30D5\u30A3\u30FC\u30EB`);
    this.route.queryParams.subscribe((params) => {
      if (params["tab"] === "history") {
        this.activeTab = "history";
      }
    });
  }
  /** センチネルが画面外に出たら sticky (ユーザー指示 2026-04-21) */
  ngAfterViewInit() {
    if (!this.tabSentinel || typeof IntersectionObserver === "undefined")
      return;
    this.sentinelObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const shouldStick = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      if (shouldStick !== this.stuck) {
        this.stuck = shouldStick;
        this.cdr.markForCheck();
      }
    }, { threshold: 0, rootMargin: "0px 0px 0px 0px" });
    this.sentinelObserver.observe(this.tabSentinel.nativeElement);
  }
  ngOnDestroy() {
    this.sentinelObserver?.disconnect();
  }
  switchTab(tab) {
    this.activeTab = tab;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: tab === "history" ? { tab: "history" } : {},
      queryParamsHandling: tab === "history" ? "merge" : ""
    });
  }
  navigateBack() {
    this.router.navigate(["/address-book"]);
  }
  onChat() {
    this.notification.info("\u30C1\u30E3\u30C3\u30C8\u753B\u9762\u306B\u9077\u79FB\u3057\u307E\u3059");
  }
  // history-pageと同じデザインのバッジクラス
  getTypeBadgeClass(type) {
    switch (type) {
      case "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574":
        return "badge--blue";
      case "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574":
        return "badge--orange";
      case "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574":
        return "badge--green";
      default:
        return "";
    }
  }
  getTypeCardClass(type) {
    switch (type) {
      case "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574":
        return "entry--blue";
      case "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574":
        return "entry--orange";
      case "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574":
        return "entry--green";
      default:
        return "";
    }
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case "\u8ABF\u6574\u4E2D":
        return "status--pending";
      case "\u78BA\u5B9A":
        return "status--confirmed";
      case "\u4E0D\u6210\u7ACB":
        return "status--failed";
      case "\u30AD\u30E3\u30F3\u30BB\u30EB":
        return "status--cancelled";
      default:
        return "";
    }
  }
  // 旧メソッド（互換性）
  getStatusClass(status) {
    return this.getStatusBadgeClass(status);
  }
  getTypeClass(type) {
    return this.getTypeBadgeClass(type);
  }
  copyUrl(id) {
    this.notification.info("URL\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  static {
    this.\u0275fac = function ContactDetailPageComponent_Factory(t) {
      return new (t || _ContactDetailPageComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactDetailPageComponent, selectors: [["app-contact-detail-page"]], viewQuery: function ContactDetailPageComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabSentinel = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 18, consts: [["tabSentinel", ""], [1, "contact-detail-page"], [1, "back-nav"], [1, "back-button", 3, "click"], [1, "profile-card"], [1, "profile-card__inner"], [1, "profile-card__avatar"], [1, "avatar-initial"], [1, "profile-card__info"], [1, "profile-card__name"], [1, "profile-card__furigana"], [1, "profile-card__meta"], [1, "profile-card__company"], [1, "profile-card__separator"], [1, "profile-card__department"], [1, "profile-card__title"], [1, "profile-card__actions"], [1, "btn", "btn--outlined", 3, "click"], [1, "tab-sentinel"], [1, "tab-bar"], ["class", "tab-bar__sticky-left", 4, "ngIf"], [1, "tab-bar__tabs"], [1, "tab-item", 3, "click"], [1, "tab-badge"], ["class", "tab-content", 4, "ngIf"], [1, "tab-bar__sticky-left"], ["title", "\u9023\u7D61\u5148\u4E00\u89A7\u306B\u623B\u308B", 1, "tab-bar__back-mini", 3, "click"], [1, "tab-bar__profile-mini"], [1, "tab-bar__profile-mini-avatar"], [1, "tab-bar__profile-mini-text"], [1, "tab-bar__profile-mini-name"], [1, "tab-bar__profile-mini-company"], [1, "tab-content"], [1, "info-grid"], [1, "info-card"], [1, "info-card__title"], [1, "info-card__body"], [1, "info-row"], [1, "info-row__label"], [1, "info-row__value", "info-row__link", 3, "href"], [1, "info-row__value"], ["target", "_blank", "rel", "noopener", 1, "info-row__value", "info-row__link", 3, "href"], [1, "sns-links"], ["target", "_blank", "rel", "noopener", "class", "sns-link", 3, "href", 4, "ngIf"], [1, "bio-text"], [1, "bio-catchphrase"], [1, "bio-details"], [1, "skill-chips"], ["class", "skill-chip", 4, "ngFor", "ngForOf"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener", 1, "sns-link", 3, "href"], [1, "skill-chip"], [1, "timeline-item"], [1, "timeline-item__marker"], [1, "timeline-item__content"], [1, "timeline-item__period"], [1, "timeline-item__company"], [1, "timeline-item__role"], [1, "timeline-item__desc"], [1, "history-list"], ["class", "history-entry", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "history-entry", 3, "ngClass"], [1, "history-entry__header"], [1, "type-badge", 3, "ngClass"], [1, "status-badge", 3, "ngClass"], [1, "history-entry__title"], [1, "history-entry__meta"], [1, "meta-item"], ["class", "meta-item", 4, "ngIf"], [1, "history-entry__actions"], [1, "action-btn", 3, "click"], ["class", "action-btn", 4, "ngIf"], [1, "action-btn"], [1, "empty-state"]], template: function ContactDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function ContactDetailPageComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigateBack());
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " \u9023\u7D61\u5148\u4E00\u89A7\u306B\u623B\u308B ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "span", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "h1", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 13);
        \u0275\u0275text(20, "|");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 14);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 13);
        \u0275\u0275text(24, "|");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 15);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 16)(28, "button", 17);
        \u0275\u0275listener("click", function ContactDetailPageComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onChat());
        });
        \u0275\u0275elementStart(29, "mat-icon");
        \u0275\u0275text(30, "chat");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " \u30C1\u30E3\u30C3\u30C8\u3059\u308B ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(32, "div", 18, 0);
        \u0275\u0275elementStart(34, "div", 19);
        \u0275\u0275template(35, ContactDetailPageComponent_div_35_Template, 12, 3, "div", 20);
        \u0275\u0275elementStart(36, "div", 21)(37, "button", 22);
        \u0275\u0275listener("click", function ContactDetailPageComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.switchTab("profile"));
        });
        \u0275\u0275elementStart(38, "mat-icon");
        \u0275\u0275text(39, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " \u30D7\u30ED\u30D5\u30A3\u30FC\u30EB ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 22);
        \u0275\u0275listener("click", function ContactDetailPageComponent_Template_button_click_41_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.switchTab("history"));
        });
        \u0275\u0275elementStart(42, "mat-icon");
        \u0275\u0275text(43, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, " \u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74 ");
        \u0275\u0275elementStart(45, "span", 23);
        \u0275\u0275text(46);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(47, ContactDetailPageComponent_div_47_Template, 83, 17, "div", 24)(48, ContactDetailPageComponent_div_48_Template, 4, 2, "div", 24);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("contact-detail-page--sticky", ctx.stuck);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.avatarInitial);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.contact.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.contact.furigana);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.contact.company);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.contact.department);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.contact.title);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("tab-bar--stuck", ctx.stuck);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.stuck);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("tab-item--active", ctx.activeTab === "profile");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("tab-item--active", ctx.activeTab === "history");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.contact.schedulingHistory.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "profile");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "history");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, MatIconModule, MatIcon], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #fafafa;\n  min-height: 100%;\n}\n.contact-detail-page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 24px 32px 64px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.back-nav[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 14px;\n  border: none;\n  border-radius: 999px;\n  background: #ed9630;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n  line-height: 1.2;\n}\n.back-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: #d47e1c;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 16px 24px;\n  margin-bottom: 0;\n}\n.profile-card__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.profile-card__avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #ed9630,\n      #ffb74d);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.profile-card__avatar[_ngcontent-%COMP%]   .avatar-initial[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n  font-weight: 700;\n}\n.profile-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.profile-card__name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0 0 2px;\n  line-height: 1.25;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n.profile-card__furigana[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  letter-spacing: 0.5px;\n}\n.profile-card__meta[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: #757575;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.profile-card__separator[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n  margin: 0 2px;\n}\n.profile-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 22px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 2px solid transparent;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #ed9630;\n  color: #fff;\n  border-color: #ed9630;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  background: #d47e1c;\n  border-color: #d47e1c;\n}\n.btn--outlined[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ed9630;\n  border-color: #ed9630;\n}\n.btn--outlined[_ngcontent-%COMP%]:hover {\n  background: rgba(237, 150, 48, 0.06);\n}\n.tab-sentinel[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n}\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-top: none;\n  border-radius: 0 0 12px 12px;\n  overflow: hidden;\n  margin-bottom: 24px;\n  transition: box-shadow 0.2s, background 0.2s;\n}\n.tab-bar__tabs[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n.tab-bar--stuck[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 0;\n  max-width: none;\n  animation: _ngcontent-%COMP%_tab-bar-slide-down 0.2s ease-out;\n}\n.tab-bar__sticky-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  border-right: 1px solid #e0e0e0;\n  min-width: 0;\n}\n.tab-bar__back-mini[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #ed9630;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.tab-bar__back-mini[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tab-bar__back-mini[_ngcontent-%COMP%]:hover {\n  background: #d47e1c;\n}\n.tab-bar__profile-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  max-width: 260px;\n}\n.tab-bar__profile-mini-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #ed9630,\n      #ffb74d);\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.tab-bar__profile-mini-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.tab-bar__profile-mini-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #81766e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n.tab-bar__profile-mini-company[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n.contact-detail-page--sticky[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n@keyframes _ngcontent-%COMP%_tab-bar-slide-down {\n  from {\n    transform: translateY(-100%);\n    opacity: 0.6;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 767px) {\n  .tab-bar__sticky-left[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    gap: 8px;\n  }\n  .tab-bar__profile-mini[_ngcontent-%COMP%] {\n    max-width: 140px;\n  }\n  .tab-bar__profile-mini-name[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .tab-bar__profile-mini-company[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .contact-detail-page--sticky[_ngcontent-%COMP%] {\n    padding-top: 56px;\n  }\n}\n.tab-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 12px 20px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #9e9e9e;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.tab-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tab-item[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 20%;\n  right: 20%;\n  height: 3px;\n  background: transparent;\n  border-radius: 3px 3px 0 0;\n  transition: all 0.2s;\n}\n.tab-item[_ngcontent-%COMP%]:hover {\n  color: #757575;\n  background: rgba(237, 150, 48, 0.03);\n}\n.tab-item--active[_ngcontent-%COMP%] {\n  color: #ed9630;\n  font-weight: 700;\n  background: rgba(237, 150, 48, 0.04);\n}\n.tab-item--active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ed9630;\n}\n.tab-item--active[_ngcontent-%COMP%]::after {\n  background: #ed9630;\n  left: 10%;\n  right: 10%;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 10px;\n  background: #ed9630;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n}\n.tab-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n.info-card--full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.info-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.info-card__title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #ed9630;\n}\n.info-card__body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  padding: 8px 0;\n}\n.info-row[_ngcontent-%COMP%]    + .info-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #eaeaea;\n}\n.info-row__label[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100px;\n  font-size: 13px;\n  color: #9e9e9e;\n  font-weight: 500;\n}\n.info-row__value[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  color: #81766e;\n  word-break: break-all;\n}\n.info-row__link[_ngcontent-%COMP%] {\n  color: #ed9630;\n  text-decoration: none;\n}\n.info-row__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.sns-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.sns-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #fafafa;\n  color: #81766e;\n  text-decoration: none;\n  font-size: 14px;\n  transition: background 0.2s;\n}\n.sns-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #ed9630;\n}\n.sns-link[_ngcontent-%COMP%]:hover {\n  background: #f2f2f2;\n}\n.bio-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #81766e;\n  line-height: 1.75;\n  margin: 0 0 12px;\n}\n.bio-catchphrase[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ed9630;\n  font-weight: 600;\n  font-style: italic;\n  margin: 0 0 16px;\n}\n.bio-details[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e0;\n  padding-top: 8px;\n}\n.skill-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.skill-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 999px;\n  background: rgba(237, 150, 48, 0.1);\n  color: #d47e1c;\n  font-size: 13px;\n  font-weight: 500;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 7px;\n  top: 6px;\n  bottom: 6px;\n  width: 2px;\n  background: #e0e0e0;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  position: relative;\n}\n.timeline-item[_ngcontent-%COMP%]    + .timeline-item[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.timeline-item__marker[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 3px solid #ed9630;\n  background: #fff;\n  margin-top: 2px;\n  position: relative;\n  z-index: 1;\n}\n.timeline-item__content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.timeline-item__period[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  font-weight: 500;\n}\n.timeline-item__company[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 4px 0 2px;\n}\n.timeline-item__role[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #ed9630;\n  font-weight: 500;\n}\n.timeline-item__desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #757575;\n  line-height: 1.6;\n  margin: 6px 0 0;\n}\n.history-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.history-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e0e0e0;\n  flex-wrap: wrap;\n}\n.history-card__body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n.history-card__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 12px;\n}\n.history-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.history-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #e0e0e0;\n  flex-wrap: wrap;\n}\n.history-type-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 4px;\n}\n.type-one-on-one[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.type-multiple[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.type-group[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.history-created[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  margin-left: auto;\n}\n.history-status-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.status-confirmed[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #757575;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #c62828;\n}\n.history-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.history-meta-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #ed9630;\n}\n.meta-label[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  width: 100px;\n  flex-shrink: 0;\n  font-weight: 500;\n}\n.meta-value[_ngcontent-%COMP%] {\n  color: #81766e;\n}\n.history-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  background: transparent;\n  color: #757575;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.history-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.history-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #ed9630;\n  color: #ed9630;\n  background: rgba(237, 150, 48, 0.04);\n}\n@media (max-width: 768px) {\n  .contact-detail-page[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 16px 12px 48px;\n  }\n  .profile-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .profile-card__inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .profile-card__meta[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .profile-card__actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .tab-item[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n    font-size: 14px;\n  }\n  .tab-item[_ngcontent-%COMP%]::after {\n    left: 15%;\n    right: 15%;\n  }\n  .tab-item--active[_ngcontent-%COMP%]::after {\n    left: 5%;\n    right: 5%;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2px;\n  }\n  .info-row__label[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .history-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n    padding: 12px 16px;\n  }\n  .history-item__date[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .history-item__info[_ngcontent-%COMP%] {\n    width: 100%;\n    order: 3;\n  }\n}\n.history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.history-entry[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-left: 4px solid #e0e0e0;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 20px 24px;\n  transition: all 0.2s;\n}\n.history-entry.entry--blue[_ngcontent-%COMP%] {\n  border-left-color: #a1c92f;\n}\n.history-entry.entry--blue[_ngcontent-%COMP%]:hover {\n  border-color: rgba(161, 201, 47, 0.3);\n  border-left-color: #a1c92f;\n}\n.history-entry.entry--orange[_ngcontent-%COMP%] {\n  border-left-color: #ed9630;\n}\n.history-entry.entry--orange[_ngcontent-%COMP%]:hover {\n  border-color: rgba(237, 150, 48, 0.3);\n  border-left-color: #ed9630;\n}\n.history-entry.entry--green[_ngcontent-%COMP%] {\n  border-left-color: #02d697;\n}\n.history-entry.entry--green[_ngcontent-%COMP%]:hover {\n  border-color: rgba(2, 214, 151, 0.3);\n  border-left-color: #02d697;\n}\n.history-entry[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.history-entry__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  gap: 8px;\n}\n.history-entry__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #81766e;\n  margin: 0 0 12px;\n  line-height: 1.4;\n}\n.history-entry__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.history-entry__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding-top: 14px;\n  border-top: 1px solid #e0e0e0;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: #757575;\n}\n.meta-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #9e9e9e;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.type-badge.badge--blue[_ngcontent-%COMP%] {\n  background: rgba(161, 201, 47, 0.1);\n  color: #a1c92f;\n}\n.type-badge.badge--orange[_ngcontent-%COMP%] {\n  background: rgba(237, 150, 48, 0.1);\n  color: #ed9630;\n}\n.type-badge.badge--green[_ngcontent-%COMP%] {\n  background: rgba(2, 214, 151, 0.1);\n  color: #02d697;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-badge.status--pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-badge.status--confirmed[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-badge.status--failed[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #c62828;\n}\n.status-badge.status--cancelled[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #757575;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  color: #757575;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n  white-space: nowrap;\n}\n.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #ed9630;\n  color: #ed9630;\n  background: rgba(237, 150, 48, 0.04);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 20px;\n  color: #9e9e9e;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n/*# sourceMappingURL=contact-detail-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactDetailPageComponent, { className: "ContactDetailPageComponent", filePath: "src\\app\\features\\address-book\\pages\\contact-detail-page\\contact-detail-page.component.ts", lineNumber: 84 });
})();
export {
  ContactDetailPageComponent
};
//# sourceMappingURL=chunk-LCG6VN5O.js.map
