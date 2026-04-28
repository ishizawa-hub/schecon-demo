import {
  ScheduleModalService
} from "./chunk-W3VOPBRX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-36EVFMHL.js";
import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import "./chunk-A5WWN5VM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
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
  ChangeDetectorRef,
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3YYMYGX4.js";

// src/app/features/address-book/pages/address-book-page/address-book-page.component.ts
function AddressBookPageComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function AddressBookPageComponent_div_44_Template_div_click_0_listener() {
      const contact_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onContactClick(contact_r2));
    });
    \u0275\u0275elementStart(1, "label", 28);
    \u0275\u0275listener("click", function AddressBookPageComponent_div_44_Template_label_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AddressBookPageComponent_div_44_Template_input_ngModelChange_2_listener($event) {
      const contact_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(contact_r2.selected, $event) || (contact_r2.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "div", 33)(9, "span", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 36)(14, "span", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 38);
    \u0275\u0275listener("click", function AddressBookPageComponent_div_44_Template_button_click_16_listener($event) {
      const contact_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyEmail($event, contact_r2.email));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "content_copy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 39)(20, "span", 40);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 41);
    \u0275\u0275text(23, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 42);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "mat-icon", 43);
    \u0275\u0275text(27, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", contact_r2.selected);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", contact_r2.avatarColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getAvatarInitial(contact_r2.name));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(contact_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contact_r2.furigana);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contact_r2.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(contact_r2.company);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u767B\u9332\u65E5: ", contact_r2.registeredDate, "");
  }
}
var AddressBookPageComponent = class _AddressBookPageComponent {
  constructor(router, cdr, titleService, notification, scheduleModal, route) {
    this.router = router;
    this.cdr = cdr;
    this.titleService = titleService;
    this.notification = notification;
    this.scheduleModal = scheduleModal;
    this.route = route;
    this.sortType = "name";
    this.searchQuery = "";
    this.selectAll = false;
    this.currentPage = 1;
    this.itemsPerPage = 100;
    this.totalItems = 100;
    this.contacts = [
      { id: "c-001", name: "\u7530\u4E2D \u592A\u90CE", furigana: "\u30BF\u30CA\u30AB \u30BF\u30ED\u30A6", email: "tanaka@techinnovation.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30C6\u30C3\u30AF\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3", registeredDate: "2026-03-28", avatarColor: "#ff9800", selected: false },
      { id: "c-002", name: "\u4F50\u85E4 \u82B1\u5B50", furigana: "\u30B5\u30C8\u30A6 \u30CF\u30CA\u30B3", email: "sato@designworks.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30C7\u30B6\u30A4\u30F3\u30EF\u30FC\u30AF\u30B9", registeredDate: "2026-03-25", avatarColor: "#e91e63", selected: false },
      { id: "c-003", name: "\u9234\u6728 \u4E00\u90CE", furigana: "\u30B9\u30BA\u30AD \u30A4\u30C1\u30ED\u30A6", email: "suzuki@globalnet.co.jp", company: "\u30B0\u30ED\u30FC\u30D0\u30EB\u30CD\u30C3\u30C8\u682A\u5F0F\u4F1A\u793E", registeredDate: "2026-03-20", avatarColor: "#2196f3", selected: false },
      { id: "c-004", name: "\u9AD8\u6A4B \u7F8E\u54B2", furigana: "\u30BF\u30AB\u30CF\u30B7 \u30DF\u30B5\u30AD", email: "takahashi@mediacorp.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30E1\u30C7\u30A3\u30A2\u30B3\u30FC\u30D7", registeredDate: "2026-03-18", avatarColor: "#9c27b0", selected: false },
      { id: "c-005", name: "\u4F0A\u85E4 \u5065\u592A", furigana: "\u30A4\u30C8\u30A6 \u30B1\u30F3\u30BF", email: "ito@smartsolutions.co.jp", company: "\u30B9\u30DE\u30FC\u30C8\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u30BA\u682A\u5F0F\u4F1A\u793E", registeredDate: "2026-03-15", avatarColor: "#009688", selected: false },
      { id: "c-006", name: "\u6E21\u8FBA \u3055\u304F\u3089", furigana: "\u30EF\u30BF\u30CA\u30D9 \u30B5\u30AF\u30E9", email: "watanabe@creativelab.co.jp", company: "\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u30E9\u30DC\u682A\u5F0F\u4F1A\u793E", registeredDate: "2026-03-10", avatarColor: "#f44336", selected: false },
      { id: "c-007", name: "\u5C71\u672C \u5927\u8F14", furigana: "\u30E4\u30DE\u30E2\u30C8 \u30C0\u30A4\u30B9\u30B1", email: "yamamoto@fintech.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30D5\u30A3\u30F3\u30C6\u30C3\u30AF", registeredDate: "2026-03-05", avatarColor: "#3f51b5", selected: false },
      { id: "c-008", name: "\u4E2D\u6751 \u7531\u7F8E", furigana: "\u30CA\u30AB\u30E0\u30E9 \u30E6\u30DF", email: "nakamura@healthcorp.co.jp", company: "\u30D8\u30EB\u30B9\u30B3\u30FC\u30D7\u682A\u5F0F\u4F1A\u793E", registeredDate: "2026-02-28", avatarColor: "#4caf50", selected: false },
      { id: "c-009", name: "\u5C0F\u6797 \u7FD4", furigana: "\u30B3\u30D0\u30E4\u30B7 \u30B7\u30E7\u30A6", email: "kobayashi@edtech.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30A8\u30C9\u30C6\u30C3\u30AF", registeredDate: "2026-02-20", avatarColor: "#ff5722", selected: false },
      { id: "c-010", name: "\u52A0\u85E4 \u5948\u3005", furigana: "\u30AB\u30C8\u30A6 \u30CA\u30CA", email: "kato@fashionlab.co.jp", company: "\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3\u30E9\u30DC\u682A\u5F0F\u4F1A\u793E", registeredDate: "2026-02-15", avatarColor: "#795548", selected: false },
      { id: "c-011", name: "\u5409\u7530 \u8AA0", furigana: "\u30E8\u30B7\u30C0 \u30DE\u30B3\u30C8", email: "yoshida@logistics.co.jp", company: "\u30ED\u30B8\u30B9\u30C6\u30A3\u30AF\u30B9\u682A\u5F0F\u4F1A\u793E", registeredDate: "2026-02-10", avatarColor: "#607d8b", selected: false },
      { id: "c-012", name: "\u5C71\u7530 \u5F69\u82B1", furigana: "\u30E4\u30DE\u30C0 \u30A2\u30E4\u30AB", email: "yamada@marketingpro.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED", registeredDate: "2026-02-05", avatarColor: "#00bcd4", selected: false },
      { id: "c-013", name: "\u677E\u672C \u9F8D\u592A", furigana: "\u30DE\u30C4\u30E2\u30C8 \u30EA\u30E5\u30A6\u30BF", email: "matsumoto@consulting-jp.co.jp", company: "\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u30B8\u30E3\u30D1\u30F3\u682A\u5F0F\u4F1A\u793E", registeredDate: "2026-01-28", avatarColor: "#8bc34a", selected: false },
      { id: "c-014", name: "\u4E95\u4E0A \u771F\u7406", furigana: "\u30A4\u30CE\u30A6\u30A8 \u30DE\u30EA", email: "inoue@travelplus.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30C8\u30E9\u30D9\u30EB\u30D7\u30E9\u30B9", registeredDate: "2026-01-20", avatarColor: "#ffc107", selected: false },
      { id: "c-015", name: "\u6728\u6751 \u6D69\u4E8C", furigana: "\u30AD\u30E0\u30E9 \u30B3\u30A6\u30B8", email: "kimura@energy-sol.co.jp", company: "\u30A8\u30CA\u30B8\u30FC\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u30BA\u682A\u5F0F\u4F1A\u793E", registeredDate: "2026-01-15", avatarColor: "#ff9800", selected: false },
      { id: "c-016", name: "\u6797 \u660E\u65E5\u9999", furigana: "\u30CF\u30E4\u30B7 \u30A2\u30B9\u30AB", email: "hayashi@sakuratech.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B5\u30AF\u30E9\u30C6\u30C3\u30AF", registeredDate: "2026-01-10", avatarColor: "#e91e63", selected: false },
      { id: "c-017", name: "\u6E05\u6C34 \u62D3\u6D77", furigana: "\u30B7\u30DF\u30BA \u30BF\u30AF\u30DF", email: "shimizu@oceandata.co.jp", company: "\u30AA\u30FC\u30B7\u30E3\u30F3\u30C7\u30FC\u30BF\u682A\u5F0F\u4F1A\u793E", registeredDate: "2026-01-05", avatarColor: "#2196f3", selected: false },
      { id: "c-018", name: "\u68EE \u7D50\u8863", furigana: "\u30E2\u30EA \u30E6\u30A4", email: "mori@brightfuture.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30D6\u30E9\u30A4\u30C8\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC", registeredDate: "2025-12-28", avatarColor: "#9c27b0", selected: false },
      { id: "c-019", name: "\u6C60\u7530 \u84EE", furigana: "\u30A4\u30B1\u30C0 \u30EC\u30F3", email: "ikeda@nextstage.co.jp", company: "\u30CD\u30AF\u30B9\u30C8\u30B9\u30C6\u30FC\u30B8\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-12-22", avatarColor: "#009688", selected: false },
      { id: "c-020", name: "\u6A4B\u672C \u5343\u5C0B", furigana: "\u30CF\u30B7\u30E2\u30C8 \u30C1\u30D2\u30ED", email: "hashimoto@aiworks.co.jp", company: "\u682A\u5F0F\u4F1A\u793EAI\u30EF\u30FC\u30AF\u30B9", registeredDate: "2025-12-18", avatarColor: "#f44336", selected: false },
      { id: "c-021", name: "\u963F\u90E8 \u60A0\u592A", furigana: "\u30A2\u30D9 \u30E6\u30A6\u30BF", email: "abe@cloudnine.co.jp", company: "\u30AF\u30E9\u30A6\u30C9\u30CA\u30A4\u30F3\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-12-15", avatarColor: "#3f51b5", selected: false },
      { id: "c-022", name: "\u77F3\u5DDD \u7F8E\u6708", furigana: "\u30A4\u30B7\u30AB\u30EF \u30DF\u30C5\u30AD", email: "ishikawa@greenearth.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B0\u30EA\u30FC\u30F3\u30A2\u30FC\u30B9", registeredDate: "2025-12-10", avatarColor: "#4caf50", selected: false },
      { id: "c-023", name: "\u524D\u7530 \u9678", furigana: "\u30DE\u30A8\u30C0 \u30EA\u30AF", email: "maeda@datavision.co.jp", company: "\u30C7\u30FC\u30BF\u30D3\u30B8\u30E7\u30F3\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-12-05", avatarColor: "#ff5722", selected: false },
      { id: "c-024", name: "\u85E4\u7530 \u51DB", furigana: "\u30D5\u30B8\u30BF \u30EA\u30F3", email: "fujita@solarpeak.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30BD\u30FC\u30E9\u30FC\u30D4\u30FC\u30AF", registeredDate: "2025-11-28", avatarColor: "#795548", selected: false },
      { id: "c-025", name: "\u5F8C\u85E4 \u98AF\u592A", furigana: "\u30B4\u30C8\u30A6 \u30BD\u30A6\u30BF", email: "goto@digitalbridge.co.jp", company: "\u30C7\u30B8\u30BF\u30EB\u30D6\u30EA\u30C3\u30B8\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-11-22", avatarColor: "#607d8b", selected: false },
      { id: "c-026", name: "\u5CA1\u7530 \u8475", furigana: "\u30AA\u30AB\u30C0 \u30A2\u30AA\u30A4", email: "okada@webfrontier.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30A6\u30A7\u30D6\u30D5\u30ED\u30F3\u30C6\u30A3\u30A2", registeredDate: "2025-11-18", avatarColor: "#00bcd4", selected: false },
      { id: "c-027", name: "\u9577\u8C37\u5DDD \u6A39", furigana: "\u30CF\u30BB\u30AC\u30EF \u30A4\u30C4\u30AD", email: "hasegawa@robotics-lab.co.jp", company: "\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u30E9\u30DC\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-11-12", avatarColor: "#8bc34a", selected: false },
      { id: "c-028", name: "\u6751\u4E0A \u967D\u83DC", furigana: "\u30E0\u30E9\u30AB\u30DF \u30D2\u30CA", email: "murakami@starfield.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B9\u30BF\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9", registeredDate: "2025-11-05", avatarColor: "#ffc107", selected: false },
      { id: "c-029", name: "\u8FD1\u85E4 \u5927\u7FD4", furigana: "\u30B3\u30F3\u30C9\u30A6 \u30D2\u30ED\u30C8", email: "kondo@quantumleap.co.jp", company: "\u30AF\u30A9\u30F3\u30BF\u30E0\u30EA\u30FC\u30D7\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-10-30", avatarColor: "#ff9800", selected: false },
      { id: "c-030", name: "\u77F3\u4E95 \u8A69\u7E54", furigana: "\u30A4\u30B7\u30A4 \u30B7\u30AA\u30EA", email: "ishii@blueocean.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30D6\u30EB\u30FC\u30AA\u30FC\u30B7\u30E3\u30F3", registeredDate: "2025-10-25", avatarColor: "#e91e63", selected: false },
      { id: "c-031", name: "\u658E\u85E4 \u671D\u967D", furigana: "\u30B5\u30A4\u30C8\u30A6 \u30A2\u30B5\u30D2", email: "saito@infosphere.co.jp", company: "\u30A4\u30F3\u30D5\u30A9\u30B9\u30D5\u30A3\u30A2\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-10-20", avatarColor: "#2196f3", selected: false },
      { id: "c-032", name: "\u5742\u672C \u8389\u5B50", furigana: "\u30B5\u30AB\u30E2\u30C8 \u30EA\u30B3", email: "sakamoto@techgarden.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30C6\u30C3\u30AF\u30AC\u30FC\u30C7\u30F3", registeredDate: "2025-10-15", avatarColor: "#9c27b0", selected: false },
      { id: "c-033", name: "\u9060\u85E4 \u6E4A", furigana: "\u30A8\u30F3\u30C9\u30A6 \u30DF\u30CA\u30C8", email: "endo@skylink.co.jp", company: "\u30B9\u30AB\u30A4\u30EA\u30F3\u30AF\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-10-08", avatarColor: "#009688", selected: false },
      { id: "c-034", name: "\u9752\u6728 \u6953", furigana: "\u30A2\u30AA\u30AD \u30AB\u30A8\u30C7", email: "aoki@medipharma.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30E1\u30C7\u30A3\u30D5\u30A1\u30FC\u30DE", registeredDate: "2025-10-01", avatarColor: "#f44336", selected: false },
      { id: "c-035", name: "\u85E4\u4E95 \u60A0\u771F", furigana: "\u30D5\u30B8\u30A4 \u30E6\u30A6\u30DE", email: "fujii@automate.co.jp", company: "\u30AA\u30FC\u30C8\u30E1\u30A4\u30C8\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-09-25", avatarColor: "#3f51b5", selected: false },
      { id: "c-036", name: "\u897F\u6751 \u5FC3\u6625", furigana: "\u30CB\u30B7\u30E0\u30E9 \u30B3\u30CF\u30EB", email: "nishimura@pearldesign.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30D1\u30FC\u30EB\u30C7\u30B6\u30A4\u30F3", registeredDate: "2025-09-18", avatarColor: "#4caf50", selected: false },
      { id: "c-037", name: "\u798F\u7530 \u594F\u6C70", furigana: "\u30D5\u30AF\u30C0 \u30BD\u30A6\u30BF", email: "fukuda@neonworks.co.jp", company: "\u30CD\u30AA\u30F3\u30EF\u30FC\u30AF\u30B9\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-09-12", avatarColor: "#ff5722", selected: false },
      { id: "c-038", name: "\u592A\u7530 \u7D2C", furigana: "\u30AA\u30AA\u30BF \u30C4\u30E0\u30AE", email: "ota@silkroad.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B7\u30EB\u30AF\u30ED\u30FC\u30C9", registeredDate: "2025-09-05", avatarColor: "#795548", selected: false },
      { id: "c-039", name: "\u4E09\u6D66 \u6696", furigana: "\u30DF\u30A6\u30E9 \u30C0\u30F3", email: "miura@apexsys.co.jp", company: "\u30A2\u30DA\u30C3\u30AF\u30B9\u30B7\u30B9\u30C6\u30E0\u30BA\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-08-28", avatarColor: "#607d8b", selected: false },
      { id: "c-040", name: "\u85E4\u539F \u82BD\u4F9D", furigana: "\u30D5\u30B8\u30EF\u30E9 \u30E1\u30A4", email: "fujiwara@cosmiclab.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B3\u30BA\u30DF\u30C3\u30AF\u30E9\u30DC", registeredDate: "2025-08-22", avatarColor: "#00bcd4", selected: false },
      { id: "c-041", name: "\u5CA1\u672C \u967D\u7FD4", furigana: "\u30AA\u30AB\u30E2\u30C8 \u30CF\u30EB\u30C8", email: "okamoto@sunrisenet.co.jp", company: "\u30B5\u30F3\u30E9\u30A4\u30BA\u30CD\u30C3\u30C8\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-08-15", avatarColor: "#8bc34a", selected: false },
      { id: "c-042", name: "\u677E\u7530 \u7434\u97F3", furigana: "\u30DE\u30C4\u30C0 \u30B3\u30C8\u30CD", email: "matsuda@harmonia.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30CF\u30EB\u30E2\u30CB\u30A2", registeredDate: "2025-08-08", avatarColor: "#ffc107", selected: false },
      { id: "c-043", name: "\u4E2D\u5CF6 \u745B\u592A", furigana: "\u30CA\u30AB\u30B8\u30DE \u30A8\u30A4\u30BF", email: "nakajima@prismtech.co.jp", company: "\u30D7\u30EA\u30BA\u30E0\u30C6\u30C3\u30AF\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-08-01", avatarColor: "#ff9800", selected: false },
      { id: "c-044", name: "\u4E2D\u5DDD \u67DA\u8449", furigana: "\u30CA\u30AB\u30AC\u30EF \u30E6\u30BA\u30CF", email: "nakagawa@citrusmedia.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B7\u30C8\u30E9\u30B9\u30E1\u30C7\u30A3\u30A2", registeredDate: "2025-07-25", avatarColor: "#e91e63", selected: false },
      { id: "c-045", name: "\u539F\u7530 \u84BC", furigana: "\u30CF\u30E9\u30C0 \u30A2\u30AA", email: "harada@horizonai.co.jp", company: "\u30DB\u30E9\u30A4\u30BE\u30F3AI\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-07-18", avatarColor: "#2196f3", selected: false },
      { id: "c-046", name: "\u5C0F\u91CE \u54B2\u826F", furigana: "\u30AA\u30CE \u30B5\u30AF\u30E9", email: "ono@blossomworks.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30D6\u30ED\u30C3\u30B5\u30E0\u30EF\u30FC\u30AF\u30B9", registeredDate: "2025-07-12", avatarColor: "#9c27b0", selected: false },
      { id: "c-047", name: "\u7AF9\u5185 \u5F8B", furigana: "\u30BF\u30B1\u30A6\u30C1 \u30EA\u30C4", email: "takeuchi@codesmith.co.jp", company: "\u30B3\u30FC\u30C9\u30B9\u30DF\u30B9\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-07-05", avatarColor: "#009688", selected: false },
      { id: "c-048", name: "\u91D1\u5B50 \u6731\u8389", furigana: "\u30AB\u30CD\u30B3 \u30A2\u30AB\u30EA", email: "kaneko@lightwave.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30E9\u30A4\u30C8\u30A6\u30A7\u30FC\u30D6", registeredDate: "2025-06-28", avatarColor: "#f44336", selected: false },
      { id: "c-049", name: "\u548C\u7530 \u6674\u7FD4", furigana: "\u30EF\u30C0 \u30CF\u30EB\u30C8", email: "wada@phoenixsys.co.jp", company: "\u30D5\u30A7\u30CB\u30C3\u30AF\u30B9\u30B7\u30B9\u30C6\u30E0\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-06-22", avatarColor: "#3f51b5", selected: false },
      { id: "c-050", name: "\u4E0A\u7530 \u5F69\u8449", furigana: "\u30A6\u30A8\u30C0 \u30A4\u30ED\u30CF", email: "ueda@maplecraft.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30E1\u30A4\u30D7\u30EB\u30AF\u30E9\u30D5\u30C8", registeredDate: "2025-06-15", avatarColor: "#4caf50", selected: false },
      { id: "c-051", name: "\u4E2D\u91CE \u7FFC", furigana: "\u30CA\u30AB\u30CE \u30C4\u30D0\u30B5", email: "nakano@wingtech.co.jp", company: "\u30A6\u30A4\u30F3\u30B0\u30C6\u30C3\u30AF\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-06-08", avatarColor: "#ff5722", selected: false },
      { id: "c-052", name: "\u4E38\u5C71 \u65E5\u548C", furigana: "\u30DE\u30EB\u30E4\u30DE \u30D2\u30E8\u30EA", email: "maruyama@sunnyday.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B5\u30CB\u30FC\u30C7\u30A4", registeredDate: "2025-06-01", avatarColor: "#795548", selected: false },
      { id: "c-053", name: "\u5C0F\u5DDD \u6176\u592A", furigana: "\u30AA\u30AC\u30EF \u30B1\u30A4\u30BF", email: "ogawa@riveredge.co.jp", company: "\u30EA\u30D0\u30FC\u30A8\u30C3\u30B8\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-05-25", avatarColor: "#607d8b", selected: false },
      { id: "c-054", name: "\u4ECA\u4E95 \u8309\u767D", furigana: "\u30A4\u30DE\u30A4 \u30DE\u30B7\u30ED", email: "imai@snowpeak-it.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B9\u30CE\u30FC\u30D4\u30FC\u30AFIT", registeredDate: "2025-05-18", avatarColor: "#00bcd4", selected: false },
      { id: "c-055", name: "\u6CB3\u91CE \u58EE\u771F", furigana: "\u30B3\u30A6\u30CE \u30BD\u30A6\u30DE", email: "kono@titanforge.co.jp", company: "\u30BF\u30A4\u30BF\u30F3\u30D5\u30A9\u30FC\u30B8\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-05-12", avatarColor: "#8bc34a", selected: false },
      { id: "c-056", name: "\u6A2A\u5C71 \u82B1\u97F3", furigana: "\u30E8\u30B3\u30E4\u30DE \u30AB\u30CE\u30F3", email: "yokoyama@melodynet.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30E1\u30ED\u30C7\u30A3\u30CD\u30C3\u30C8", registeredDate: "2025-05-05", avatarColor: "#ffc107", selected: false },
      { id: "c-057", name: "\u5B89\u85E4 \u594F", furigana: "\u30A2\u30F3\u30C9\u30A6 \u30AB\u30CA\u30C7", email: "ando@symphonia.co.jp", company: "\u30B7\u30F3\u30D5\u30A9\u30CB\u30A2\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-04-28", avatarColor: "#ff9800", selected: false },
      { id: "c-058", name: "\u5BAE\u5D0E \u6FAA", furigana: "\u30DF\u30E4\u30B6\u30AD \u30DF\u30AA", email: "miyazaki@aquastream.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30A2\u30AF\u30A2\u30B9\u30C8\u30EA\u30FC\u30E0", registeredDate: "2025-04-22", avatarColor: "#e91e63", selected: false },
      { id: "c-059", name: "\u5927\u585A \u98AF\u771F", furigana: "\u30AA\u30AA\u30C4\u30AB \u30BD\u30A6\u30DE", email: "otsuka@galeforce.co.jp", company: "\u30B2\u30A4\u30EB\u30D5\u30A9\u30FC\u30B9\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-04-15", avatarColor: "#2196f3", selected: false },
      { id: "c-060", name: "\u9AD8\u6728 \u7D50\u83DC", furigana: "\u30BF\u30AB\u30AE \u30E6\u30A4\u30CA", email: "takagi@gardenpath.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30AC\u30FC\u30C7\u30F3\u30D1\u30B9", registeredDate: "2025-04-08", avatarColor: "#9c27b0", selected: false },
      { id: "c-061", name: "\u4E45\u4FDD \u6F23", furigana: "\u30AF\u30DC \u30EC\u30F3", email: "kubo@wavecrest.co.jp", company: "\u30A6\u30A7\u30FC\u30D6\u30AF\u30EC\u30B9\u30C8\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-04-01", avatarColor: "#009688", selected: false },
      { id: "c-062", name: "\u5185\u7530 \u674F", furigana: "\u30A6\u30C1\u30C0 \u30A2\u30F3", email: "uchida@apricotdesign.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30A2\u30D7\u30EA\u30B3\u30C3\u30C8\u30C7\u30B6\u30A4\u30F3", registeredDate: "2025-03-25", avatarColor: "#f44336", selected: false },
      { id: "c-063", name: "\u4F50\u3005\u6728 \u60A0\u4EBA", furigana: "\u30B5\u30B5\u30AD \u30E6\u30A6\u30C8", email: "sasaki@infinityloop.co.jp", company: "\u30A4\u30F3\u30D5\u30A3\u30CB\u30C6\u30A3\u30EB\u30FC\u30D7\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-03-18", avatarColor: "#3f51b5", selected: false },
      { id: "c-064", name: "\u91CE\u6751 \u681E", furigana: "\u30CE\u30E0\u30E9 \u30B7\u30AA\u30EA", email: "nomura@bookmark.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF", registeredDate: "2025-03-12", avatarColor: "#4caf50", selected: false },
      { id: "c-065", name: "\u5E73\u91CE \u6D77\u7FD4", furigana: "\u30D2\u30E9\u30CE \u30AB\u30A4\u30C8", email: "hirano@seagate-jp.co.jp", company: "\u30B7\u30FC\u30B2\u30FC\u30C8\u30B8\u30E3\u30D1\u30F3\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-03-05", avatarColor: "#ff5722", selected: false },
      { id: "c-066", name: "\u5343\u8449 \u67D1\u5948", furigana: "\u30C1\u30D0 \u30AB\u30F3\u30CA", email: "chiba@orangetech.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30AA\u30EC\u30F3\u30B8\u30C6\u30C3\u30AF", registeredDate: "2025-02-28", avatarColor: "#795548", selected: false },
      { id: "c-067", name: "\u83C5\u539F \u9678\u6597", furigana: "\u30B9\u30AC\u30EF\u30E9 \u30EA\u30AF\u30C8", email: "sugawara@landmark-sys.co.jp", company: "\u30E9\u30F3\u30C9\u30DE\u30FC\u30AF\u30B7\u30B9\u30C6\u30E0\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-02-22", avatarColor: "#607d8b", selected: false },
      { id: "c-068", name: "\u671B\u6708 \u5F69\u4E43", furigana: "\u30E2\u30C1\u30C5\u30AD \u30A2\u30E4\u30CE", email: "mochizuki@moonlight.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30E0\u30FC\u30F3\u30E9\u30A4\u30C8", registeredDate: "2025-02-15", avatarColor: "#00bcd4", selected: false },
      { id: "c-069", name: "\u79CB\u5C71 \u5927\u5730", furigana: "\u30A2\u30AD\u30E4\u30DE \u30C0\u30A4\u30C1", email: "akiyama@terraworks.co.jp", company: "\u30C6\u30E9\u30EF\u30FC\u30AF\u30B9\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-02-08", avatarColor: "#8bc34a", selected: false },
      { id: "c-070", name: "\u95A2\u53E3 \u670B\u82B1", furigana: "\u30BB\u30AD\u30B0\u30C1 \u30C8\u30E2\u30AB", email: "sekiguchi@friendlyai.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30D5\u30EC\u30F3\u30C9\u30EA\u30FCAI", registeredDate: "2025-02-01", avatarColor: "#ffc107", selected: false },
      { id: "c-071", name: "\u677E\u4E95 \u822A\u5E73", furigana: "\u30DE\u30C4\u30A4 \u30B3\u30A6\u30D8\u30A4", email: "matsui@navigate.co.jp", company: "\u30CA\u30D3\u30B2\u30FC\u30C8\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-01-25", avatarColor: "#ff9800", selected: false },
      { id: "c-072", name: "\u5DDD\u53E3 \u7460\u5948", furigana: "\u30AB\u30EF\u30B0\u30C1 \u30EB\u30CA", email: "kawaguchi@lunasoft.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30EB\u30CA\u30BD\u30D5\u30C8", registeredDate: "2025-01-18", avatarColor: "#e91e63", selected: false },
      { id: "c-073", name: "\u670D\u90E8 \u76F4\u6A39", furigana: "\u30CF\u30C3\u30C8\u30EA \u30CA\u30AA\u30AD", email: "hattori@straightline.co.jp", company: "\u30B9\u30C8\u30EC\u30FC\u30C8\u30E9\u30A4\u30F3\u682A\u5F0F\u4F1A\u793E", registeredDate: "2025-01-12", avatarColor: "#2196f3", selected: false },
      { id: "c-074", name: "\u5409\u5DDD \u7A42\u4E43\u9999", furigana: "\u30E8\u30B7\u30AB\u30EF \u30DB\u30CE\u30AB", email: "yoshikawa@grainfield.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B0\u30EC\u30A4\u30F3\u30D5\u30A3\u30FC\u30EB\u30C9", registeredDate: "2025-01-05", avatarColor: "#9c27b0", selected: false },
      { id: "c-075", name: "\u571F\u4E95 \u84BC\u7A7A", furigana: "\u30C9\u30A4 \u30BD\u30E9", email: "doi@bluesky-tech.co.jp", company: "\u30D6\u30EB\u30FC\u30B9\u30AB\u30A4\u30C6\u30C3\u30AF\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-12-28", avatarColor: "#009688", selected: false },
      { id: "c-076", name: "\u5DE5\u85E4 \u611B\u8389", furigana: "\u30AF\u30C9\u30A6 \u30A2\u30A4\u30EA", email: "kudo@irisdesign.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30A2\u30A4\u30EA\u30B9\u30C7\u30B6\u30A4\u30F3", registeredDate: "2024-12-22", avatarColor: "#f44336", selected: false },
      { id: "c-077", name: "\u4F50\u91CE \u5320", furigana: "\u30B5\u30CE \u30BF\u30AF\u30DF", email: "sano@craftsman.co.jp", company: "\u30AF\u30E9\u30D5\u30C8\u30DE\u30F3\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-12-15", avatarColor: "#3f51b5", selected: false },
      { id: "c-078", name: "\u6749\u5C71 \u5B9F\u685C", furigana: "\u30B9\u30AE\u30E4\u30DE \u30DF\u30AA", email: "sugiyama@cherrybloom.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30C1\u30A7\u30EA\u30FC\u30D6\u30EB\u30FC\u30E0", registeredDate: "2024-12-08", avatarColor: "#4caf50", selected: false },
      { id: "c-079", name: "\u65B0\u4E95 \u8F1D", furigana: "\u30A2\u30E9\u30A4 \u30D2\u30AB\u30EB", email: "arai@luminous.co.jp", company: "\u30EB\u30DF\u30CA\u30B9\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-12-01", avatarColor: "#ff5722", selected: false },
      { id: "c-080", name: "\u5897\u7530 \u8389\u7DD2", furigana: "\u30DE\u30B9\u30C0 \u30EA\u30AA", email: "masuda@riostream.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30EA\u30AA\u30B9\u30C8\u30EA\u30FC\u30E0", registeredDate: "2024-11-25", avatarColor: "#795548", selected: false },
      { id: "c-081", name: "\u7530\u6751 \u512A\u6597", furigana: "\u30BF\u30E0\u30E9 \u30E6\u30A6\u30C8", email: "tamura@yutopia.co.jp", company: "\u30E6\u30FC\u30C8\u30D4\u30A2\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-11-18", avatarColor: "#607d8b", selected: false },
      { id: "c-082", name: "\u5C0F\u5CF6 \u5FC3\u7D50", furigana: "\u30B3\u30B8\u30DE \u30DF\u30E6", email: "kojima@heartknot.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30CF\u30FC\u30C8\u30CE\u30C3\u30C8", registeredDate: "2024-11-12", avatarColor: "#00bcd4", selected: false },
      { id: "c-083", name: "\u6B66\u7530 \u9065\u6597", furigana: "\u30BF\u30B1\u30C0 \u30CF\u30EB\u30C8", email: "takeda@farreach.co.jp", company: "\u30D5\u30A1\u30FC\u30EA\u30FC\u30C1\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-11-05", avatarColor: "#8bc34a", selected: false },
      { id: "c-084", name: "\u4E0A\u91CE \u7D17\u5F25", furigana: "\u30A6\u30A8\u30CE \u30B5\u30E4", email: "ueno@silkthread.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B7\u30EB\u30AF\u30B9\u30EC\u30C3\u30C9", registeredDate: "2024-10-28", avatarColor: "#ffc107", selected: false },
      { id: "c-085", name: "\u5927\u91CE \u84BC\u4ECB", furigana: "\u30AA\u30AA\u30CE \u30BD\u30A6\u30B9\u30B1", email: "ono-s@bluemark.co.jp", company: "\u30D6\u30EB\u30FC\u30DE\u30FC\u30AF\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-10-22", avatarColor: "#ff9800", selected: false },
      { id: "c-086", name: "\u5BAE\u672C \u5F69\u83EF", furigana: "\u30DF\u30E4\u30E2\u30C8 \u30A2\u30E4\u30AB", email: "miyamoto@colorpalette.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30AB\u30E9\u30FC\u30D1\u30EC\u30C3\u30C8", registeredDate: "2024-10-15", avatarColor: "#e91e63", selected: false },
      { id: "c-087", name: "\u8C37\u53E3 \u51CC\u96C5", furigana: "\u30BF\u30CB\u30B0\u30C1 \u30EA\u30E7\u30A6\u30AC", email: "taniguchi@summit-it.co.jp", company: "\u30B5\u30DF\u30C3\u30C8IT\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-10-08", avatarColor: "#2196f3", selected: false },
      { id: "c-088", name: "\u53E4\u5DDD \u7483\u5B50", furigana: "\u30D5\u30EB\u30AB\u30EF \u30EA\u30B3", email: "furukawa@glassworks.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B0\u30E9\u30B9\u30EF\u30FC\u30AF\u30B9", registeredDate: "2024-10-01", avatarColor: "#9c27b0", selected: false },
      { id: "c-089", name: "\u77F3\u7530 \u967D\u5411", furigana: "\u30A4\u30B7\u30C0 \u30D2\u30CA\u30BF", email: "ishida@sunward.co.jp", company: "\u30B5\u30F3\u30EF\u30FC\u30C9\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-09-25", avatarColor: "#009688", selected: false },
      { id: "c-090", name: "\u6C38\u4E95 \u82B1\u68A8", furigana: "\u30CA\u30AC\u30A4 \u30AB\u30EA\u30F3", email: "nagai@pearltree.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30D1\u30FC\u30EB\u30C4\u30EA\u30FC", registeredDate: "2024-09-18", avatarColor: "#f44336", selected: false },
      { id: "c-091", name: "\u6A29\u7530 \u6CF0\u5E73", furigana: "\u30B4\u30F3\u30C0 \u30BF\u30A4\u30D8\u30A4", email: "gonda@peacemaker.co.jp", company: "\u30D4\u30FC\u30B9\u30E1\u30FC\u30AB\u30FC\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-09-10", avatarColor: "#3f51b5", selected: false },
      { id: "c-092", name: "\u98EF\u585A \u8389\u592E", furigana: "\u30A4\u30A4\u30C5\u30AB \u30EA\u30AA", email: "iizuka@grandview.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30B0\u30E9\u30F3\u30C9\u30D3\u30E5\u30FC", registeredDate: "2024-08-28", avatarColor: "#4caf50", selected: false },
      { id: "c-093", name: "\u5800 \u572D\u543E", furigana: "\u30DB\u30EA \u30B1\u30A4\u30B4", email: "hori@keystone.co.jp", company: "\u30AD\u30FC\u30B9\u30C8\u30FC\u30F3\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-08-15", avatarColor: "#ff5722", selected: false },
      { id: "c-094", name: "\u6E0B\u8C37 \u51EA\u54B2", furigana: "\u30B7\u30D6\u30E4 \u30CA\u30AE\u30B5", email: "shibuya@calmwave.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30AB\u30FC\u30E0\u30A6\u30A7\u30FC\u30D6", registeredDate: "2024-07-25", avatarColor: "#795548", selected: false },
      { id: "c-095", name: "\u6D45\u91CE \u7422\u78E8", furigana: "\u30A2\u30B5\u30CE \u30BF\u30AF\u30DE", email: "asano@polishstone.co.jp", company: "\u30DD\u30EA\u30C3\u30B7\u30E5\u30B9\u30C8\u30FC\u30F3\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-07-10", avatarColor: "#607d8b", selected: false },
      { id: "c-096", name: "\u91CE\u53E3 \u7D17\u5B63", furigana: "\u30CE\u30B0\u30C1 \u30B5\u30AD", email: "noguchi@fourseasons.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30D5\u30A9\u30FC\u30B7\u30FC\u30BA\u30F3\u30BA", registeredDate: "2024-06-18", avatarColor: "#00bcd4", selected: false },
      { id: "c-097", name: "\u5317\u6751 \u99FF", furigana: "\u30AD\u30BF\u30E0\u30E9 \u30B7\u30E5\u30F3", email: "kitamura@swiftrun.co.jp", company: "\u30B9\u30A4\u30D5\u30C8\u30E9\u30F3\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-05-20", avatarColor: "#8bc34a", selected: false },
      { id: "c-098", name: "\u9808\u85E4 \u6843\u82B1", furigana: "\u30B9\u30C9\u30A6 \u30E2\u30E2\u30AB", email: "sudo@peachgarden.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30D4\u30FC\u30C1\u30AC\u30FC\u30C7\u30F3", registeredDate: "2024-04-12", avatarColor: "#ffc107", selected: false },
      { id: "c-099", name: "\u7247\u5C71 \u5CB3", furigana: "\u30AB\u30BF\u30E4\u30DE \u30AC\u30AF", email: "katayama@mountain-it.co.jp", company: "\u30DE\u30A6\u30F3\u30C6\u30F3IT\u682A\u5F0F\u4F1A\u793E", registeredDate: "2024-02-28", avatarColor: "#ff9800", selected: false },
      { id: "c-100", name: "\u5927\u68EE \u4E03\u6D77", furigana: "\u30AA\u30AA\u30E2\u30EA \u30CA\u30CA\u30DF", email: "omori@sevenseas.co.jp", company: "\u682A\u5F0F\u4F1A\u793E\u30BB\u30D6\u30F3\u30B7\u30FC\u30BA", registeredDate: "2024-01-15", avatarColor: "#e91e63", selected: false }
    ];
  }
  ngOnInit() {
    this.titleService.setTitle('\u9023\u7D61\u5148 | \u65E5\u7A0B\u8ABF\u6574\u30C4\u30FC\u30EB"\u30B9\u30B1\u30B3\u30F3"');
    this.route.queryParams.subscribe((params) => {
      if (params["q"]) {
        this.searchQuery = params["q"];
        this.cdr.markForCheck();
      }
    });
  }
  get displayStart() {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }
  get displayEnd() {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
  getAvatarInitial(name) {
    return name.charAt(0);
  }
  onSearch() {
    this.cdr.markForCheck();
  }
  get filteredContacts() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query)
      return this.contacts;
    return this.contacts.filter((c) => {
      const searchTarget = `${c.name} ${c.furigana} ${c.email} ${c.company}`.toLowerCase();
      return searchTarget.includes(query);
    });
  }
  onSortChange() {
    if (this.sortType === "name") {
      this.contacts.sort((a, b) => a.furigana.localeCompare(b.furigana));
    } else {
      this.contacts.sort((a, b) => b.registeredDate.localeCompare(a.registeredDate));
    }
  }
  toggleSelectAll() {
    this.contacts.forEach((c) => c.selected = this.selectAll);
  }
  onContactClick(contact) {
    this.router.navigate(["/address-book", contact.id]);
  }
  copyEmail(event, email) {
    event.stopPropagation();
    navigator.clipboard.writeText(email);
    this.notification.success("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F");
  }
  onCreateSchedule() {
    this.scheduleModal.open();
  }
  /* 修正 No.62 (2026-04-25): 参加者連絡先のスプレッドシート (CSV) エクスポート本実装
     - 選択された連絡先がある場合は選択分のみ、無い場合は全件をエクスポート
     - UTF-8 BOM 付きで Excel / Google スプレッドシート両対応
     - CSV インジェクション対策: =, +, -, @ で始まるセルを ' でエスケープ */
  onCsvDownload() {
    const selected = this.contacts.filter((c) => c.selected);
    const target = selected.length > 0 ? selected : this.filteredContacts;
    if (target.length === 0) {
      this.notification.warn("\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u5BFE\u8C61\u306E\u9023\u7D61\u5148\u304C\u3042\u308A\u307E\u305B\u3093");
      return;
    }
    const header = ["\u540D\u524D", "\u30D5\u30EA\u30AC\u30CA", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", "\u4F1A\u793E\u540D", "\u767B\u9332\u65E5"];
    const safeCell = (v) => {
      const s = String(v ?? "");
      const prefixed = /^[=+\-@]/.test(s) ? `'${s}` : s;
      if (/[",\r\n]/.test(prefixed)) {
        return `"${prefixed.replace(/"/g, '""')}"`;
      }
      return prefixed;
    };
    const rows = target.map((c) => [
      safeCell(c.name),
      safeCell(c.furigana),
      safeCell(c.email),
      safeCell(c.company),
      safeCell(c.registeredDate)
    ].join(","));
    const BOM = "\uFEFF";
    const csv = BOM + [header.map(safeCell).join(","), ...rows].join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const now = /* @__PURE__ */ new Date();
    const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}_${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;
    const filename = `schecon_contacts_${stamp}.csv`;
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
    this.notification.success(selected.length > 0 ? `\u9078\u629E\u3057\u305F ${target.length} \u4EF6\u306E\u9023\u7D61\u5148\u3092 CSV \u3067\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3057\u307E\u3057\u305F` : `${target.length} \u4EF6\u306E\u9023\u7D61\u5148\u3092 CSV \u3067\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3057\u307E\u3057\u305F`);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  nextPage() {
    if (this.displayEnd < this.totalItems) {
      this.currentPage++;
    }
  }
  static {
    this.\u0275fac = function AddressBookPageComponent_Factory(t) {
      return new (t || _AddressBookPageComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ScheduleModalService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressBookPageComponent, selectors: [["app-address-book-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 10, consts: [[1, "address-book-page"], [1, "page-header"], [1, "page-title"], [1, "btn", "btn--primary", "btn--with-schecon-logo", 3, "click"], ["src", "assets/imgs/common/schecon-favicon.png", "alt", "\u30B9\u30B1\u30B3\u30F3", 1, "schecon-logo"], [1, "filter-card"], [1, "search-row"], [1, "search-box"], [1, "search-box__icon"], ["type", "text", "placeholder", "\u540D\u524D\u3001\u4F1A\u793E\u540D\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3001\u4E88\u5B9A\u540D\u3067\u691C\u7D22", 1, "search-box__input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "search-box__btn", 3, "click"], [1, "controls-row"], [1, "sort-group"], [1, "radio-label"], ["type", "radio", "name", "sort", "value", "name", 3, "ngModelChange", "change", "ngModel"], [1, "radio-custom"], ["type", "radio", "name", "sort", "value", "date", 3, "ngModelChange", "change", "ngModel"], ["matTooltip", "Excel / Google \u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3067\u958B\u3051\u308B CSV \u3092\u66F8\u304D\u51FA\u3057\u307E\u3059", 1, "btn", "btn--ghost", 3, "click"], [1, "list-controls"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "checkbox-custom"], [1, "pagination"], [1, "pagination__count"], [1, "pagination__btn", 3, "click", "disabled"], [1, "contact-list"], ["class", "contact-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "contact-row", 3, "click"], [1, "checkbox-label", "contact-row__checkbox", 3, "click"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "contact-row__avatar"], [1, "contact-row__initial"], [1, "contact-row__info"], [1, "contact-row__name-line"], [1, "contact-row__name"], [1, "contact-row__furigana"], [1, "contact-row__details"], [1, "contact-row__email"], ["title", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u30B3\u30D4\u30FC", 1, "copy-btn", 3, "click"], [1, "contact-row__meta"], [1, "contact-row__company"], [1, "contact-row__separator"], [1, "contact-row__date"], [1, "contact-row__arrow"]], template: function AddressBookPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "\u53C2\u52A0\u8005\u9023\u7D61\u5148");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function AddressBookPageComponent_Template_button_click_4_listener() {
          return ctx.onCreateSchedule();
        });
        \u0275\u0275element(5, "img", 4);
        \u0275\u0275text(6, " \u4E88\u5B9A\u8ABF\u6574\u3092\u3059\u308B ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "mat-icon", 8);
        \u0275\u0275text(11, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AddressBookPageComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function AddressBookPageComponent_Template_input_keyup_enter_12_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 10);
        \u0275\u0275listener("click", function AddressBookPageComponent_Template_button_click_13_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275text(14, "\u691C\u7D22");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "label", 13)(18, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function AddressBookPageComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortType, $event) || (ctx.sortType = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AddressBookPageComponent_Template_input_change_18_listener() {
          return ctx.onSortChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "span", 15);
        \u0275\u0275text(20, " \u540D\u524D\u9806 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "label", 13)(22, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function AddressBookPageComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortType, $event) || (ctx.sortType = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AddressBookPageComponent_Template_input_change_22_listener() {
          return ctx.onSortChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "span", 15);
        \u0275\u0275text(24, " \u767B\u9332\u65E5\u9806 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "button", 17);
        \u0275\u0275listener("click", function AddressBookPageComponent_Template_button_click_25_listener() {
          return ctx.onCsvDownload();
        });
        \u0275\u0275elementStart(26, "mat-icon");
        \u0275\u0275text(27, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " CSV\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 18)(30, "label", 19)(31, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function AddressBookPageComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectAll, $event) || (ctx.selectAll = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AddressBookPageComponent_Template_input_change_31_listener() {
          return ctx.toggleSelectAll();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "span", 21);
        \u0275\u0275text(33, " \u5168\u3066\u3092\u9078\u629E ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 22)(35, "span", 23);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 24);
        \u0275\u0275listener("click", function AddressBookPageComponent_Template_button_click_37_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275elementStart(38, "mat-icon");
        \u0275\u0275text(39, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "button", 24);
        \u0275\u0275listener("click", function AddressBookPageComponent_Template_button_click_40_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275elementStart(41, "mat-icon");
        \u0275\u0275text(42, "chevron_right");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(43, "div", 25);
        \u0275\u0275template(44, AddressBookPageComponent_div_44_Template, 28, 9, "div", 26);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.sortType);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.sortType);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectAll);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate3("", ctx.totalItems, "\u4EF6\u4E2D ", ctx.displayStart, "-", ctx.displayEnd, "\u4EF6\u3092\u8868\u793A");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.displayEnd >= ctx.totalItems);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.filteredContacts);
      }
    }, dependencies: [CommonModule, NgForOf, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #fafafa;\n  min-height: 100%;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  overflow: visible;\n}\n.address-book-page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 16px 32px 48px;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: visible;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #81766e;\n  margin: 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 18px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 2px solid transparent;\n  white-space: nowrap;\n  font-family: inherit;\n}\n.btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  border-color: #ff9800;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  background: #ef6c00;\n  border-color: #ef6c00;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #757575;\n  border-color: #e0e0e0;\n  padding: 8px 16px;\n  font-weight: 500;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.06);\n  color: #ff9800;\n  border-color: #ff9800;\n}\n.filter-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 0;\n  margin-bottom: 16px;\n  overflow: hidden;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.filter-card[_ngcontent-%COMP%]::after {\n  content: none;\n}\n@media (max-width: 767px) {\n  .filter-card[_ngcontent-%COMP%] {\n    top: 56px;\n    border-radius: 8px;\n  }\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n}\n.filter-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 20px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #9e9e9e;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  font-family: inherit;\n}\n.filter-tab[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 20%;\n  right: 20%;\n  height: 3px;\n  background: transparent;\n  border-radius: 3px 3px 0 0;\n  transition: all 0.2s;\n}\n.filter-tab[_ngcontent-%COMP%]:hover {\n  color: #757575;\n  background: rgba(255, 152, 0, 0.03);\n}\n.filter-tab--active[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-weight: 700;\n}\n.filter-tab--active[_ngcontent-%COMP%]::after {\n  background: #ff9800;\n  left: 10%;\n  right: 10%;\n}\n.search-row[_ngcontent-%COMP%] {\n  padding: 10px 16px 0;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fafafa;\n  overflow: hidden;\n  transition: border-color 0.2s;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #ff9800;\n}\n.search-box__icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #9e9e9e;\n  margin-left: 12px;\n  flex-shrink: 0;\n}\n.search-box__input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  padding: 7px 12px;\n  font-size: 14px;\n  color: #81766e;\n  outline: none;\n  font-family: inherit;\n  min-width: 0;\n}\n.search-box__input[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.search-box__btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 7px 18px;\n  border: none;\n  background: #ff9800;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  font-family: inherit;\n}\n.search-box__btn[_ngcontent-%COMP%]:hover {\n  background: #ef6c00;\n}\n.controls-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px 0;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.sort-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.radio-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #757575;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.radio-label[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.radio-label[_ngcontent-%COMP%]   .radio-custom[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #e0e0e0;\n  border-radius: 50%;\n  position: relative;\n  transition: border-color 0.2s;\n  flex-shrink: 0;\n}\n.radio-label[_ngcontent-%COMP%]   .radio-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ff9800;\n  transform: scale(0);\n  transition: transform 0.2s;\n}\n.radio-label[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + .radio-custom[_ngcontent-%COMP%] {\n  border-color: #ff9800;\n}\n.radio-label[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + .radio-custom[_ngcontent-%COMP%]::after {\n  transform: scale(1);\n}\n.list-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border-top: 1px solid #e0e0e0;\n  margin-top: 8px;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #757575;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #e0e0e0;\n  border-radius: 4px;\n  position: relative;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 1px;\n  left: 5px;\n  width: 5px;\n  height: 9px;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg) scale(0);\n  transition: transform 0.2s;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%] {\n  background: #ff9800;\n  border-color: #ff9800;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%]::after {\n  transform: rotate(45deg) scale(1);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pagination__count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9e9e9e;\n  margin-right: 4px;\n}\n.pagination__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.2s;\n  padding: 0;\n}\n.pagination__btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #757575;\n}\n.pagination__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #ff9800;\n  background: rgba(255, 152, 0, 0.06);\n}\n.pagination__btn[_ngcontent-%COMP%]:hover:not(:disabled)   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.pagination__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.contact-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.contact-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  margin-bottom: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.contact-row[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 152, 0, 0.4);\n  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.contact-row__checkbox[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin: 0;\n}\n.contact-row__avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.contact-row__initial[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n}\n.contact-row__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.contact-row__name-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.contact-row__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #81766e;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n.contact-row__furigana[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  letter-spacing: 0.3px;\n}\n.contact-row__details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n.contact-row__email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #ff9800;\n}\n.contact-row__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #9e9e9e;\n}\n.contact-row__separator[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.contact-row__company[_ngcontent-%COMP%] {\n  color: #757575;\n}\n.contact-row__date[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.contact-row__arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #9e9e9e;\n  transition: color 0.2s;\n}\n.contact-row[_ngcontent-%COMP%]:hover   .contact-row__arrow[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 4px;\n  padding: 0;\n  transition: background 0.2s;\n}\n.copy-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  color: #9e9e9e;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.1);\n}\n.copy-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n@media (max-width: 768px) {\n  .address-book-page[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 16px 12px 48px;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .search-box__input[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .controls-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .list-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: flex-start;\n  }\n  .contact-row[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n    gap: 10px;\n  }\n  .contact-row__avatar[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .contact-row__initial[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .contact-row__name-line[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2px;\n  }\n  .contact-row__meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 2px;\n  }\n  .contact-row__separator[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .contact-row__arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=address-book-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressBookPageComponent, { className: "AddressBookPageComponent", filePath: "src\\app\\features\\address-book\\pages\\address-book-page\\address-book-page.component.ts", lineNumber: 33 });
})();
export {
  AddressBookPageComponent
};
//# sourceMappingURL=chunk-V4O5DB6Y.js.map
