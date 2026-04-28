import {
  CalendarService,
  addDays,
  addMonths,
  addWeeks,
  areIntervalsOverlapping,
  buildEventsDateMap,
  constructFrom,
  differenceInMilliseconds,
  endOfDay,
  millisecondsInDay,
  millisecondsInMinute,
  millisecondsInWeek,
  startOfDay,
  toDate
} from "./chunk-5OGJ5V3Y.js";
import {
  MAT_INPUT_VALUE_ACCESSOR,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatCheckboxModule,
  MatInput,
  MatInputModule
} from "./chunk-76F3L5RR.js";
import {
  MAT_FORM_FIELD,
  MatChipsModule,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-O7H76VQG.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-36EVFMHL.js";
import {
  KeyboardManagerService
} from "./chunk-XACQWZ45.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-NWSZROQH.js";
import {
  NotificationService
} from "./chunk-AFMKFOEB.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-A5WWN5VM.js";
import {
  ControlContainer,
  DefaultValueAccessor,
  FormGroupDirective,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgForm,
  NgModel,
  Validators
} from "./chunk-YF2NDTP4.js";
import {
  ActivatedRoute
} from "./chunk-VOAOX4DE.js";
import {
  A,
  A11yModule,
  ActiveDescendantKeyManager,
  BACKSPACE,
  CdkConnectedOverlay,
  CdkMonitorFocus,
  CdkOverlayOrigin,
  CdkPortalOutlet,
  CdkScrollableModule,
  CdkTrapFocus,
  ComponentPortal,
  DOWN_ARROW,
  DateAdapter,
  Directionality,
  END,
  ENTER,
  ESCAPE,
  ErrorStateMatcher,
  FlexibleConnectedPositionStrategy,
  FocusMonitor,
  HOME,
  LEFT_ARROW,
  LiveAnnouncer,
  MAT_DATE_FORMATS,
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  MatCommonModule,
  MatIcon,
  MatIconModule,
  MatNativeDateModule,
  MatOption,
  MatOptionModule,
  MatPseudoCheckbox,
  MatRipple,
  MatRippleModule,
  Overlay,
  OverlayConfig,
  OverlayModule,
  PAGE_DOWN,
  PAGE_UP,
  Platform,
  PortalModule,
  RIGHT_ARROW,
  SPACE,
  SelectionModel,
  TemplatePortal,
  Title,
  UP_ARROW,
  ViewportRuler,
  _ErrorStateTracker,
  _countGroupLabelsBeforeOption,
  _getFocusedElementPierceShadowDom,
  _getOptionScrollPosition,
  addAriaReferencedId,
  animate,
  animateChild,
  coerceStringArray,
  hasModifierKey,
  keyframes,
  normalizePassiveListenerOptions,
  query,
  removeAriaReferencedId,
  state,
  style,
  transition,
  trigger
} from "./chunk-MPKYFQD7.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Optional,
  Output,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  combineLatest,
  debounceTime,
  defer,
  distinctUntilChanged,
  filter,
  forwardRef,
  inject,
  map,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-3YYMYGX4.js";

// node_modules/date-fns/isWeekend.js
function isWeekend(date, options) {
  const day = toDate(date, options?.in).getDay();
  return day === 0 || day === 6;
}

// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
  return startOfWeek(date, __spreadProps(__spreadValues({}, options), { weekStartsOn: 1 }));
}

// node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}

// node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/date-fns/constructNow.js
function constructNow(date) {
  return constructFrom(date, Date.now());
}

// node_modules/date-fns/isSameDay.js
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}

// node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}

// node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}

// node_modules/date-fns/differenceInMinutes.js
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/endOfMonth.js
function endOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/_lib/normalizeInterval.js
function normalizeInterval(context, interval) {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return { start, end };
}

// node_modules/date-fns/eachDayOfInterval.js
function eachDayOfInterval(interval, options) {
  const { start, end } = normalizeInterval(options?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  let step = options?.step ?? 1;
  if (!step)
    return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date.setDate(date.getDate() + step);
    date.setHours(0, 0, 0, 0);
  }
  return reversed ? dates.reverse() : dates;
}

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// node_modules/date-fns/endOfWeek.js
function endOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

// node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// node_modules/date-fns/locale/en-US.js
var enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

// node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

// node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function(date, token, localize3) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize3.era(era, { width: "abbreviated" });
      case "GGGGG":
        return localize3.era(era, { width: "narrow" });
      case "GGGG":
      default:
        return localize3.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize3) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize3.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize3, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize3.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize3) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize3.ordinalNumber(quarter, { unit: "quarter" });
      case "QQQ":
        return localize3.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize3.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize3.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize3) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize3.ordinalNumber(quarter, { unit: "quarter" });
      case "qqq":
        return localize3.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize3.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize3.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize3) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      case "Mo":
        return localize3.ordinalNumber(month + 1, { unit: "month" });
      case "MMM":
        return localize3.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize3.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize3.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize3) {
    const month = date.getMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize3.ordinalNumber(month + 1, { unit: "month" });
      case "LLL":
        return localize3.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize3.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize3.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize3, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize3.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize3) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize3.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize3) {
    if (token === "do") {
      return localize3.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize3) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize3.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize3) {
    const dayOfWeek = date.getDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize3.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize3.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize3.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize3.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize3, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize3.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize3.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize3.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize3.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize3.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize3, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize3.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize3.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize3.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize3.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize3.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize3) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize3.ordinalNumber(isoDayOfWeek, { unit: "day" });
      case "iii":
        return localize3.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize3.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize3.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize3.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize3) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize3) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize3) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize3.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize3) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize3.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize3) {
    if (token === "Ho") {
      return localize3.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize3) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize3.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize3) {
    let hours = date.getHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize3.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize3) {
    if (token === "mo") {
      return localize3.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize3) {
    if (token === "so") {
      return localize3.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

// node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong3) => {
  switch (pattern) {
    case "P":
      return formatLong3.date({ width: "short" });
    case "PP":
      return formatLong3.date({ width: "medium" });
    case "PPP":
      return formatLong3.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong3.date({ width: "full" });
  }
};
var timeLongFormatter = (pattern, formatLong3) => {
  switch (pattern) {
    case "p":
      return formatLong3.time({ width: "short" });
    case "pp":
      return formatLong3.time({ width: "medium" });
    case "ppp":
      return formatLong3.time({ width: "long" });
    case "pppp":
    default:
      return formatLong3.time({ width: "full" });
  }
};
var dateTimeLongFormatter = (pattern, formatLong3) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong3);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong3.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong3.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong3.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong3.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong3)).replace("{{time}}", timeLongFormatter(timePattern, formatLong3));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

// node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token))
    throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date, options?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken)
      return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns/isSameMonth.js
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}

// node_modules/date-fns/isToday.js
function isToday(date, options) {
  return isSameDay(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date)
  );
}

// node_modules/date-fns/subDays.js
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}

// node_modules/date-fns/setHours.js
function setHours(date, hours, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(hours);
  return _date;
}

// node_modules/date-fns/setMinutes.js
function setMinutes(date, minutes, options) {
  const date_ = toDate(date, options?.in);
  date_.setMinutes(minutes);
  return date_;
}

// node_modules/date-fns/subMonths.js
function subMonths(date, amount, options) {
  return addMonths(date, -amount, options);
}

// node_modules/date-fns/subWeeks.js
function subWeeks(date, amount, options) {
  return addWeeks(date, -amount, options);
}

// node_modules/date-fns/locale/ja/_lib/formatDistance.js
var formatDistanceLocale2 = {
  lessThanXSeconds: {
    one: "1\u79D2\u672A\u6E80",
    other: "{{count}}\u79D2\u672A\u6E80",
    oneWithSuffix: "\u7D041\u79D2",
    otherWithSuffix: "\u7D04{{count}}\u79D2"
  },
  xSeconds: {
    one: "1\u79D2",
    other: "{{count}}\u79D2"
  },
  halfAMinute: "30\u79D2",
  lessThanXMinutes: {
    one: "1\u5206\u672A\u6E80",
    other: "{{count}}\u5206\u672A\u6E80",
    oneWithSuffix: "\u7D041\u5206",
    otherWithSuffix: "\u7D04{{count}}\u5206"
  },
  xMinutes: {
    one: "1\u5206",
    other: "{{count}}\u5206"
  },
  aboutXHours: {
    one: "\u7D041\u6642\u9593",
    other: "\u7D04{{count}}\u6642\u9593"
  },
  xHours: {
    one: "1\u6642\u9593",
    other: "{{count}}\u6642\u9593"
  },
  xDays: {
    one: "1\u65E5",
    other: "{{count}}\u65E5"
  },
  aboutXWeeks: {
    one: "\u7D041\u9031\u9593",
    other: "\u7D04{{count}}\u9031\u9593"
  },
  xWeeks: {
    one: "1\u9031\u9593",
    other: "{{count}}\u9031\u9593"
  },
  aboutXMonths: {
    one: "\u7D041\u304B\u6708",
    other: "\u7D04{{count}}\u304B\u6708"
  },
  xMonths: {
    one: "1\u304B\u6708",
    other: "{{count}}\u304B\u6708"
  },
  aboutXYears: {
    one: "\u7D041\u5E74",
    other: "\u7D04{{count}}\u5E74"
  },
  xYears: {
    one: "1\u5E74",
    other: "{{count}}\u5E74"
  },
  overXYears: {
    one: "1\u5E74\u4EE5\u4E0A",
    other: "{{count}}\u5E74\u4EE5\u4E0A"
  },
  almostXYears: {
    one: "1\u5E74\u8FD1\u304F",
    other: "{{count}}\u5E74\u8FD1\u304F"
  }
};
var formatDistance2 = (token, count, options) => {
  options = options || {};
  let result;
  const tokenValue = formatDistanceLocale2[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    if (options.addSuffix && tokenValue.oneWithSuffix) {
      result = tokenValue.oneWithSuffix;
    } else {
      result = tokenValue.one;
    }
  } else {
    if (options.addSuffix && tokenValue.otherWithSuffix) {
      result = tokenValue.otherWithSuffix.replace("{{count}}", String(count));
    } else {
      result = tokenValue.other.replace("{{count}}", String(count));
    }
  }
  if (options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + "\u5F8C";
    } else {
      return result + "\u524D";
    }
  }
  return result;
};

// node_modules/date-fns/locale/ja/_lib/formatLong.js
var dateFormats2 = {
  full: "y\u5E74M\u6708d\u65E5EEEE",
  long: "y\u5E74M\u6708d\u65E5",
  medium: "y/MM/dd",
  short: "y/MM/dd"
};
var timeFormats2 = {
  full: "H\u6642mm\u5206ss\u79D2 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
};
var dateTimeFormats2 = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
};
var formatLong2 = {
  date: buildFormatLongFn({
    formats: dateFormats2,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats2,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats2,
    defaultWidth: "full"
  })
};

// node_modules/date-fns/locale/ja/_lib/formatRelative.js
var formatRelativeLocale2 = {
  lastWeek: "\u5148\u9031\u306Eeeee\u306Ep",
  yesterday: "\u6628\u65E5\u306Ep",
  today: "\u4ECA\u65E5\u306Ep",
  tomorrow: "\u660E\u65E5\u306Ep",
  nextWeek: "\u7FCC\u9031\u306Eeeee\u306Ep",
  other: "P"
};
var formatRelative2 = (token, _date, _baseDate, _options) => {
  return formatRelativeLocale2[token];
};

// node_modules/date-fns/locale/ja/_lib/localize.js
var eraValues2 = {
  narrow: ["BC", "AC"],
  abbreviated: ["\u7D00\u5143\u524D", "\u897F\u66A6"],
  wide: ["\u7D00\u5143\u524D", "\u897F\u66A6"]
};
var quarterValues2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["\u7B2C1\u56DB\u534A\u671F", "\u7B2C2\u56DB\u534A\u671F", "\u7B2C3\u56DB\u534A\u671F", "\u7B2C4\u56DB\u534A\u671F"]
};
var monthValues2 = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "1\u6708",
    "2\u6708",
    "3\u6708",
    "4\u6708",
    "5\u6708",
    "6\u6708",
    "7\u6708",
    "8\u6708",
    "9\u6708",
    "10\u6708",
    "11\u6708",
    "12\u6708"
  ],
  wide: [
    "1\u6708",
    "2\u6708",
    "3\u6708",
    "4\u6708",
    "5\u6708",
    "6\u6708",
    "7\u6708",
    "8\u6708",
    "9\u6708",
    "10\u6708",
    "11\u6708",
    "12\u6708"
  ]
};
var dayValues2 = {
  narrow: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
  short: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
  abbreviated: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
  wide: ["\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"]
};
var dayPeriodValues2 = {
  narrow: {
    am: "\u5348\u524D",
    pm: "\u5348\u5F8C",
    midnight: "\u6DF1\u591C",
    noon: "\u6B63\u5348",
    morning: "\u671D",
    afternoon: "\u5348\u5F8C",
    evening: "\u591C",
    night: "\u6DF1\u591C"
  },
  abbreviated: {
    am: "\u5348\u524D",
    pm: "\u5348\u5F8C",
    midnight: "\u6DF1\u591C",
    noon: "\u6B63\u5348",
    morning: "\u671D",
    afternoon: "\u5348\u5F8C",
    evening: "\u591C",
    night: "\u6DF1\u591C"
  },
  wide: {
    am: "\u5348\u524D",
    pm: "\u5348\u5F8C",
    midnight: "\u6DF1\u591C",
    noon: "\u6B63\u5348",
    morning: "\u671D",
    afternoon: "\u5348\u5F8C",
    evening: "\u591C",
    night: "\u6DF1\u591C"
  }
};
var formattingDayPeriodValues2 = {
  narrow: {
    am: "\u5348\u524D",
    pm: "\u5348\u5F8C",
    midnight: "\u6DF1\u591C",
    noon: "\u6B63\u5348",
    morning: "\u671D",
    afternoon: "\u5348\u5F8C",
    evening: "\u591C",
    night: "\u6DF1\u591C"
  },
  abbreviated: {
    am: "\u5348\u524D",
    pm: "\u5348\u5F8C",
    midnight: "\u6DF1\u591C",
    noon: "\u6B63\u5348",
    morning: "\u671D",
    afternoon: "\u5348\u5F8C",
    evening: "\u591C",
    night: "\u6DF1\u591C"
  },
  wide: {
    am: "\u5348\u524D",
    pm: "\u5348\u5F8C",
    midnight: "\u6DF1\u591C",
    noon: "\u6B63\u5348",
    morning: "\u671D",
    afternoon: "\u5348\u5F8C",
    evening: "\u591C",
    night: "\u6DF1\u591C"
  }
};
var ordinalNumber2 = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = String(options?.unit);
  switch (unit) {
    case "year":
      return `${number}\u5E74`;
    case "quarter":
      return `\u7B2C${number}\u56DB\u534A\u671F`;
    case "month":
      return `${number}\u6708`;
    case "week":
      return `\u7B2C${number}\u9031`;
    case "date":
      return `${number}\u65E5`;
    case "hour":
      return `${number}\u6642`;
    case "minute":
      return `${number}\u5206`;
    case "second":
      return `${number}\u79D2`;
    default:
      return `${number}`;
  }
};
var localize2 = {
  ordinalNumber: ordinalNumber2,
  era: buildLocalizeFn({
    values: eraValues2,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues2,
    defaultWidth: "wide",
    argumentCallback: (quarter) => Number(quarter) - 1
  }),
  month: buildLocalizeFn({
    values: monthValues2,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues2,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues2,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues2,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/date-fns/locale/ja/_lib/match.js
var matchOrdinalNumberPattern2 = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i;
var parseOrdinalNumberPattern2 = /\d+/i;
var matchEraPatterns2 = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
};
var parseEraPatterns2 = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
};
var matchQuarterPatterns2 = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
};
var parseQuarterPatterns2 = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
};
var matchMonthPatterns2 = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
};
var parseMonthPatterns2 = {
  any: [
    /^1\D/,
    /^2/,
    /^3/,
    /^4/,
    /^5/,
    /^6/,
    /^7/,
    /^8/,
    /^9/,
    /^10/,
    /^11/,
    /^12/
  ]
};
var matchDayPatterns2 = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
};
var parseDayPatterns2 = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
};
var matchDayPeriodPatterns2 = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
};
var parseDayPeriodPatterns2 = {
  any: {
    am: /^(A|午前)/i,
    pm: /^(P|午後)/i,
    midnight: /^深夜|真夜中/i,
    noon: /^正午/i,
    morning: /^朝/i,
    afternoon: /^午後/i,
    evening: /^夜/i,
    night: /^深夜/i
  }
};
var match2 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern2,
    parsePattern: parseOrdinalNumberPattern2,
    valueCallback: function(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns2,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns2,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns2,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns2,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns2,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns2,
    defaultParseWidth: "any"
  })
};

// node_modules/date-fns/locale/ja.js
var ja = {
  code: "ja",
  formatDistance: formatDistance2,
  formatLong: formatLong2,
  formatRelative: formatRelative2,
  localize: localize2,
  match: match2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// src/app/features/calendar/components/calendar-sidebar/calendar-sidebar.component.ts
function CalendarSidebarComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", label_r1, " ");
  }
}
function CalendarSidebarComponent_div_18_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
function CalendarSidebarComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function CalendarSidebarComponent_div_18_Template_div_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectDate(day_r3));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CalendarSidebarComponent_div_18_span_3_Template, 1, 0, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mini-calendar__day--other-month", !day_r3.isCurrentMonth)("mini-calendar__day--today", day_r3.isToday)("mini-calendar__day--selected", ctx_r3.isSelected(day_r3))("mini-calendar__day--has-events", day_r3.hasEvents);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r3.dayNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", day_r3.hasEvents && !day_r3.isToday && !ctx_r3.isSelected(day_r3));
  }
}
function CalendarSidebarComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function CalendarSidebarComponent_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.calendarSearchQuery = "");
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CalendarSidebarComponent_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("contextmenu", function CalendarSidebarComponent_div_24_div_3_Template_div_contextmenu_0_listener($event) {
      const cal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onCalendarContextMenu($event, cal_r7.id));
    });
    \u0275\u0275elementStart(1, "mat-checkbox", 25);
    \u0275\u0275listener("change", function CalendarSidebarComponent_div_24_div_3_Template_mat_checkbox_change_1_listener() {
      const cal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onToggleCalendar(cal_r7.id));
    });
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cal_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("--mdc-checkbox-selected-checkmark-color", "#fff")("--mdc-checkbox-selected-focus-icon-color", cal_r7.color)("--mdc-checkbox-selected-hover-icon-color", cal_r7.color)("--mdc-checkbox-selected-icon-color", cal_r7.color)("--mdc-checkbox-selected-pressed-icon-color", cal_r7.color);
    \u0275\u0275property("checked", cal_r7.visible);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cal_r7.name);
  }
}
function CalendarSidebarComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3", 22);
    \u0275\u0275text(2, "\u30DE\u30A4\u30AB\u30EC\u30F3\u30C0\u30FC");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CalendarSidebarComponent_div_24_div_3_Template, 4, 12, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.myCalendars);
  }
}
function CalendarSidebarComponent_div_25_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("contextmenu", function CalendarSidebarComponent_div_25_div_3_Template_div_contextmenu_0_listener($event) {
      const cal_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onCalendarContextMenu($event, cal_r9.id));
    });
    \u0275\u0275elementStart(1, "mat-checkbox", 25);
    \u0275\u0275listener("change", function CalendarSidebarComponent_div_25_div_3_Template_mat_checkbox_change_1_listener() {
      const cal_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onToggleCalendar(cal_r9.id));
    });
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cal_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("--mdc-checkbox-selected-checkmark-color", "#fff")("--mdc-checkbox-selected-focus-icon-color", cal_r9.color)("--mdc-checkbox-selected-hover-icon-color", cal_r9.color)("--mdc-checkbox-selected-icon-color", cal_r9.color)("--mdc-checkbox-selected-pressed-icon-color", cal_r9.color);
    \u0275\u0275property("checked", cal_r9.visible);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cal_r9.name);
  }
}
function CalendarSidebarComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3", 22);
    \u0275\u0275text(2, "\u4ED6\u306E\u30AB\u30EC\u30F3\u30C0\u30FC");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CalendarSidebarComponent_div_25_div_3_Template, 4, 12, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.otherCalendars);
  }
}
function CalendarSidebarComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " \u8A72\u5F53\u3059\u308B\u30AB\u30EC\u30F3\u30C0\u30FC\u304C\u3042\u308A\u307E\u305B\u3093 ");
    \u0275\u0275elementEnd();
  }
}
var CalendarSidebarComponent = class _CalendarSidebarComponent {
  constructor() {
    this.calendars = [];
    this.eventsMap = /* @__PURE__ */ new Map();
    this.dateSelected = new EventEmitter();
    this.createEventClicked = new EventEmitter();
    this.calendarVisibilityToggled = new EventEmitter();
    this.calendarSoloToggled = new EventEmitter();
    this.monthChanged = new EventEmitter();
    this.miniCalendarDays = [];
    this.weekDayLabels = ["\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F", "\u65E5"];
    this.miniCalendarTitle = "";
    this.today = /* @__PURE__ */ new Date();
    this.calendarSearchQuery = "";
  }
  matchesSearch(cal) {
    if (!this.calendarSearchQuery.trim())
      return true;
    const q = this.calendarSearchQuery.trim().toLowerCase();
    return (cal.name || "").toLowerCase().includes(q);
  }
  get myCalendars() {
    return this.calendars.filter((c) => c.id !== "cal-tanaka" && c.id !== "cal-holidays" && this.matchesSearch(c));
  }
  get otherCalendars() {
    return this.calendars.filter((c) => (c.id === "cal-tanaka" || c.id === "cal-holidays") && this.matchesSearch(c));
  }
  /** 右クリックで「このカレンダーだけ表示」(他のカレンダーは全部非表示) */
  onCalendarContextMenu(event, calendarId) {
    event.preventDefault();
    event.stopPropagation();
    this.calendarSoloToggled.emit(calendarId);
  }
  ngOnChanges(changes) {
    if (changes["currentDate"] && this.currentDate) {
      const cur = this.miniCalendarMonth;
      const shouldSync = !cur || cur.getFullYear() !== this.currentDate.getFullYear() || cur.getMonth() !== this.currentDate.getMonth();
      if (shouldSync) {
        this.miniCalendarMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
      }
    }
    this.buildMiniCalendar();
  }
  buildMiniCalendar() {
    if (!this.miniCalendarMonth)
      return;
    this.miniCalendarTitle = format(this.miniCalendarMonth, "yyyy\u5E74M\u6708", {
      locale: ja
    });
    const monthStart = startOfMonth(this.miniCalendarMonth);
    const monthEnd = endOfMonth(this.miniCalendarMonth);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
    const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
    this.miniCalendarDays = days.map((date) => {
      const key = format(date, "yyyy-MM-dd");
      return {
        date,
        dayNumber: date.getDate(),
        isCurrentMonth: isSameMonth(date, this.miniCalendarMonth),
        isToday: isSameDay(date, this.today),
        hasEvents: this.eventsMap.has(key)
      };
    });
  }
  prevMonth() {
    this.miniCalendarMonth = subMonths(this.miniCalendarMonth, 1);
    this.buildMiniCalendar();
    this.monthChanged.emit(this.miniCalendarMonth);
  }
  nextMonth() {
    this.miniCalendarMonth = addMonths(this.miniCalendarMonth, 1);
    this.buildMiniCalendar();
    this.monthChanged.emit(this.miniCalendarMonth);
  }
  selectDate(day) {
    this.dateSelected.emit(day.date);
  }
  isSelected(day) {
    return isSameDay(day.date, this.currentDate);
  }
  onCreateEvent() {
    this.createEventClicked.emit();
  }
  onToggleCalendar(calendarId) {
    this.calendarVisibilityToggled.emit(calendarId);
  }
  static {
    this.\u0275fac = function CalendarSidebarComponent_Factory(t) {
      return new (t || _CalendarSidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarSidebarComponent, selectors: [["app-calendar-sidebar"]], inputs: { calendars: "calendars", currentDate: "currentDate", eventsMap: "eventsMap" }, outputs: { dateSelected: "dateSelected", createEventClicked: "createEventClicked", calendarVisibilityToggled: "calendarVisibilityToggled", calendarSoloToggled: "calendarSoloToggled", monthChanged: "monthChanged" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 27, vars: 8, consts: [[1, "calendar-sidebar"], [1, "calendar-sidebar__create-btn", 3, "click"], [1, "mini-calendar"], [1, "mini-calendar__header"], ["mat-icon-button", "", 1, "mini-calendar__nav-btn", 3, "click"], [1, "mini-calendar__title"], [1, "mini-calendar__grid"], ["class", "mini-calendar__weekday", 4, "ngFor", "ngForOf"], ["class", "mini-calendar__day", 3, "mini-calendar__day--other-month", "mini-calendar__day--today", "mini-calendar__day--selected", "mini-calendar__day--has-events", "click", 4, "ngFor", "ngForOf"], [1, "calendar-list__search"], [1, "calendar-list__search-icon"], ["type", "text", "placeholder", "\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u691C\u7D22", 1, "calendar-list__search-input", 3, "ngModelChange", "ngModel"], ["class", "calendar-list__search-clear", "type", "button", 3, "click", 4, "ngIf"], ["class", "calendar-list", 4, "ngIf"], ["class", "calendar-list__empty", 4, "ngIf"], [1, "mini-calendar__weekday"], [1, "mini-calendar__day", 3, "click"], [1, "mini-calendar__day-number"], ["class", "mini-calendar__day-dot", 4, "ngIf"], [1, "mini-calendar__day-dot"], ["type", "button", 1, "calendar-list__search-clear", 3, "click"], [1, "calendar-list"], [1, "calendar-list__heading"], ["class", "calendar-list__item", "matTooltip", "\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u5358\u72EC\u8868\u793A", 3, "contextmenu", 4, "ngFor", "ngForOf"], ["matTooltip", "\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u5358\u72EC\u8868\u793A", 1, "calendar-list__item", 3, "contextmenu"], [3, "change", "checked"], [1, "calendar-list__item-name"], [1, "calendar-list__empty"]], template: function CalendarSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "button", 1);
        \u0275\u0275listener("click", function CalendarSidebarComponent_Template_button_click_1_listener() {
          return ctx.onCreateEvent();
        });
        \u0275\u0275elementStart(2, "mat-icon");
        \u0275\u0275text(3, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "\u4E88\u5B9A\u4F5C\u6210");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "button", 4);
        \u0275\u0275listener("click", function CalendarSidebarComponent_Template_button_click_8_listener() {
          return ctx.prevMonth();
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "span", 5);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 4);
        \u0275\u0275listener("click", function CalendarSidebarComponent_Template_button_click_13_listener() {
          return ctx.nextMonth();
        });
        \u0275\u0275elementStart(14, "mat-icon");
        \u0275\u0275text(15, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 6);
        \u0275\u0275template(17, CalendarSidebarComponent_div_17_Template, 2, 1, "div", 7)(18, CalendarSidebarComponent_div_18_Template, 4, 10, "div", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 9)(20, "mat-icon", 10);
        \u0275\u0275text(21, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function CalendarSidebarComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.calendarSearchQuery, $event) || (ctx.calendarSearchQuery = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, CalendarSidebarComponent_button_23_Template, 3, 0, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, CalendarSidebarComponent_div_24_Template, 4, 1, "div", 13)(25, CalendarSidebarComponent_div_25_Template, 4, 1, "div", 13)(26, CalendarSidebarComponent_div_26_Template, 2, 0, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.miniCalendarTitle);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.weekDayLabels);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.miniCalendarDays);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.calendarSearchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.calendarSearchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.myCalendars.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.otherCalendars.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.calendarSearchQuery && !ctx.myCalendars.length && !ctx.otherCalendars.length);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatCheckboxModule, MatCheckbox, MatTooltipModule, MatTooltip], styles: ["\n\n.calendar-sidebar[_ngcontent-%COMP%] {\n  width: 256px;\n  min-width: 256px;\n  border-right: 1px solid #e0e0e0;\n  background: #fff;\n  padding: 16px;\n  overflow-y: auto;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n}\n.calendar-sidebar__create-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 24px;\n  height: 48px;\n  border: none;\n  border-radius: 24px;\n  background-color: #ff9800;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 0.2s, background-color 0.2s;\n  margin-bottom: 16px;\n  width: fit-content;\n}\n.calendar-sidebar__create-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.calendar-sidebar__create-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f57c00;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.15);\n}\n.calendar-sidebar__create-btn[_ngcontent-%COMP%]:active {\n  background-color: #e65100;\n}\n.mini-calendar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mini-calendar__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.mini-calendar__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #3c4043;\n}\n.mini-calendar__nav-btn[_ngcontent-%COMP%] {\n  width: 28px !important;\n  height: 28px !important;\n  padding: 4px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n.mini-calendar__nav-btn[_ngcontent-%COMP%]     .mat-mdc-button-persistent-ripple, .mini-calendar__nav-btn[_ngcontent-%COMP%]     .mat-mdc-button-touch-target {\n  width: 28px !important;\n  height: 28px !important;\n}\n.mini-calendar__nav-btn[_ngcontent-%COMP%]     .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.mini-calendar__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0;\n}\n.mini-calendar__weekday[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 10px;\n  color: #70757a;\n  padding: 4px 0;\n  font-weight: 500;\n}\n.mini-calendar__day[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n  cursor: pointer;\n  border-radius: 50%;\n  aspect-ratio: 1;\n}\n.mini-calendar__day[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f4;\n}\n.mini-calendar__day--other-month[_ngcontent-%COMP%]   .mini-calendar__day-number[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n.mini-calendar__day--today[_ngcontent-%COMP%]   .mini-calendar__day-number[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: #fff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mini-calendar__day--selected[_ngcontent-%COMP%]:not(.mini-calendar__day--today)   .mini-calendar__day-number[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: #ff9800;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n.mini-calendar__day-number[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #3c4043;\n  line-height: 1;\n}\n.mini-calendar__day-dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  background-color: #ff9800;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n}\n.calendar-list__search[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  margin: 12px 12px 4px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #f7f8fa;\n  transition: border-color 0.15s, background 0.15s;\n}\n.calendar-list__search[_ngcontent-%COMP%]:focus-within {\n  background: #fff;\n  border-color: #ff9800;\n}\n.calendar-list__search-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #9aa0a6;\n  flex-shrink: 0;\n}\n.calendar-list__search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 13px;\n  font-family: inherit;\n  color: #3c4043;\n  min-width: 0;\n  padding: 2px 0;\n}\n.calendar-list__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa0a6;\n}\n.calendar-list__search-clear[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  color: #9aa0a6;\n  display: inline-flex;\n  align-items: center;\n}\n.calendar-list__search-clear[_ngcontent-%COMP%]:hover {\n  color: #3c4043;\n}\n.calendar-list__search-clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.calendar-list__empty[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  font-size: 12px;\n  color: #9aa0a6;\n  text-align: center;\n}\n.calendar-list[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.calendar-list__heading[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #5f6368;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 12px 0 8px;\n  padding: 0;\n}\n.calendar-list__item[_ngcontent-%COMP%] {\n  padding: 2px 0;\n}\n.calendar-list__item[_ngcontent-%COMP%]     .mdc-form-field {\n  font-size: 13px;\n}\n.calendar-list__item-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #3c4043;\n}\n/*# sourceMappingURL=calendar-sidebar.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarSidebarComponent, { className: "CalendarSidebarComponent", filePath: "src\\app\\features\\calendar\\components\\calendar-sidebar\\calendar-sidebar.component.ts", lineNumber: 48 });
})();

// node_modules/@angular/material/fesm2022/button-toggle.mjs
var _c0 = ["button"];
var _c1 = ["*"];
function MatButtonToggle_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
function MatButtonToggle_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
  providedIn: "root",
  factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
});
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false
  };
}
var MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatButtonToggleGroup),
  multi: true
};
var uniqueIdCounter = 0;
var MatButtonToggleChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatButtonToggleGroup = class _MatButtonToggleGroup {
  /** `name` attribute for the underlying `input` element. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._markButtonsForCheck();
  }
  /** Value of the toggle group. */
  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    if (this.multiple) {
      return selected.map((toggle) => toggle.value);
    }
    return selected[0] ? selected[0].value : void 0;
  }
  set value(newValue) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }
  /** Selected button toggles in the group. */
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  /** Whether multiple button toggles can be selected. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._markButtonsForCheck();
  }
  /** Whether multiple button toggle group is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markButtonsForCheck();
  }
  /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
  get hideMultipleSelectionIndicator() {
    return this._hideMultipleSelectionIndicator;
  }
  set hideMultipleSelectionIndicator(value) {
    this._hideMultipleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  constructor(_changeDetector, defaultOptions2) {
    this._changeDetector = _changeDetector;
    this._multiple = false;
    this._disabled = false;
    this._controlValueAccessorChangeFn = () => {
    };
    this._onTouched = () => {
    };
    this._name = `mat-button-toggle-group-${uniqueIdCounter++}`;
    this.valueChange = new EventEmitter();
    this.change = new EventEmitter();
    this.appearance = defaultOptions2 && defaultOptions2.appearance ? defaultOptions2.appearance : "standard";
    this.hideSingleSelectionIndicator = defaultOptions2?.hideSingleSelectionIndicator ?? false;
    this.hideMultipleSelectionIndicator = defaultOptions2?.hideMultipleSelectionIndicator ?? false;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
  }
  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);
    this._rawValue = event.value;
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }
  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */
  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }
    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }
    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  /** Checks whether a button toggle is selected. */
  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  /** Determines whether a button toggle should be checked on init. */
  _isPrechecked(toggle) {
    if (typeof this._rawValue === "undefined") {
      return false;
    }
    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
    }
    return toggle.value === this._rawValue;
  }
  /** Updates the selection state of the toggles in the group based on a value. */
  _setSelectionByValue(value) {
    this._rawValue = value;
    if (!this._buttonToggles) {
      return;
    }
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Value must be an array in multiple-selection mode.");
      }
      this._clearSelection();
      value.forEach((currentValue) => this._selectValue(currentValue));
    } else {
      this._clearSelection();
      this._selectValue(value);
    }
  }
  /** Clears the selected toggles. */
  _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach((toggle) => toggle.checked = false);
  }
  /** Selects a value if there's a toggle that corresponds to it. */
  _selectValue(value) {
    const correspondingOption = this._buttonToggles.find((toggle) => {
      return toggle.value != null && toggle.value === value;
    });
    if (correspondingOption) {
      correspondingOption.checked = true;
      this._selectionModel.select(correspondingOption);
    }
  }
  /** Syncs up the group's value with the model and emits the change event. */
  _updateModelValue(toggle, isUserInput) {
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    }
    this.valueChange.emit(this.value);
  }
  /** Marks all of the child button toggles to be checked. */
  _markButtonsForCheck() {
    this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
  }
  static {
    this.\u0275fac = function MatButtonToggleGroup_Factory(t) {
      return new (t || _MatButtonToggleGroup)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatButtonToggleGroup,
      selectors: [["mat-button-toggle-group"]],
      contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatButtonToggle, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonToggles = _t);
        }
      },
      hostAttrs: ["role", "group", 1, "mat-button-toggle-group"],
      hostVars: 5,
      hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-disabled", ctx.disabled);
          \u0275\u0275classProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
        }
      },
      inputs: {
        appearance: "appearance",
        name: "name",
        vertical: [InputFlags.HasDecoratorInputTransform, "vertical", "vertical", booleanAttribute],
        value: "value",
        multiple: [InputFlags.HasDecoratorInputTransform, "multiple", "multiple", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        hideSingleSelectionIndicator: [InputFlags.HasDecoratorInputTransform, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
        hideMultipleSelectionIndicator: [InputFlags.HasDecoratorInputTransform, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute]
      },
      outputs: {
        valueChange: "valueChange",
        change: "change"
      },
      exportAs: ["matButtonToggleGroup"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: _MatButtonToggleGroup
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleGroup, [{
    type: Directive,
    args: [{
      selector: "mat-button-toggle-group",
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        "role": "group",
        "class": "mat-button-toggle-group",
        "[attr.aria-disabled]": "disabled",
        "[class.mat-button-toggle-vertical]": "vertical",
        "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
      },
      exportAs: "matButtonToggleGroup",
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
    }]
  }], {
    _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }],
    appearance: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatButtonToggle = class _MatButtonToggle {
  /** Unique ID for the underlying `button` element. */
  get buttonId() {
    return `${this.id}-button`;
  }
  /** The appearance style of the button. */
  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }
  set appearance(value) {
    this._appearance = value;
  }
  /** Whether the button is checked. */
  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }
  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the button is disabled. */
  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  constructor(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, defaultTabIndex, defaultOptions2) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._checked = false;
    this.ariaLabelledby = null;
    this._disabled = false;
    this.change = new EventEmitter();
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    this.buttonToggleGroup = toggleGroup;
    this.appearance = defaultOptions2 && defaultOptions2.appearance ? defaultOptions2.appearance : "standard";
  }
  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || `mat-button-toggle-${uniqueIdCounter++}`;
    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        group._syncButtonToggle(this, this._checked);
      }
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    const group = this.buttonToggleGroup;
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  /** Focuses the button. */
  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  /** Checks the button toggle due to an interaction with the underlying native button. */
  _onButtonClick() {
    const newChecked = this._isSingleSelector() ? true : !this._checked;
    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  /** Gets the name that should be assigned to the inner DOM node. */
  _getButtonName() {
    if (this._isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }
    return this.name || null;
  }
  /** Whether the toggle is in single selection mode. */
  _isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }
  static {
    this.\u0275fac = function MatButtonToggle_Factory(t) {
      return new (t || _MatButtonToggle)(\u0275\u0275directiveInject(MAT_BUTTON_TOGGLE_GROUP, 8), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatButtonToggle,
      selectors: [["mat-button-toggle"]],
      viewQuery: function MatButtonToggle_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonElement = _t.first);
        }
      },
      hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
      hostVars: 12,
      hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("focus", function MatButtonToggle_focus_HostBindingHandler() {
            return ctx.focus();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
          \u0275\u0275classProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
        }
      },
      inputs: {
        ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
        ariaLabelledby: [InputFlags.None, "aria-labelledby", "ariaLabelledby"],
        id: "id",
        name: "name",
        value: "value",
        tabIndex: "tabIndex",
        disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute],
        appearance: "appearance",
        checked: [InputFlags.HasDecoratorInputTransform, "checked", "checked", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matButtonToggle"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 11,
      consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-label-content"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]],
      template: function MatButtonToggle_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "button", 1, 0);
          \u0275\u0275listener("click", function MatButtonToggle_Template_button_click_0_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onButtonClick());
          });
          \u0275\u0275elementStart(2, "span", 2);
          \u0275\u0275template(3, MatButtonToggle_Conditional_3_Template, 1, 1, "mat-pseudo-checkbox", 3)(4, MatButtonToggle_Conditional_4_Template, 1, 1, "mat-pseudo-checkbox", 3);
          \u0275\u0275projection(5);
          \u0275\u0275elementEnd()();
          \u0275\u0275element(6, "span", 4)(7, "span", 5);
        }
        if (rf & 2) {
          const button_r3 = \u0275\u0275reference(1);
          \u0275\u0275property("id", ctx.buttonId)("disabled", ctx.disabled || null);
          \u0275\u0275attribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-pressed", ctx.checked)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(3, ctx.buttonToggleGroup && ctx.checked && !ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator ? 3 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(4, ctx.buttonToggleGroup && ctx.checked && ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator ? 4 : -1);
          \u0275\u0275advance(3);
          \u0275\u0275property("matRippleTrigger", button_r3)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
        }
      },
      dependencies: [MatRipple, MatPseudoCheckbox],
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape);border:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-standard-button-toggle-selected-state-text-color )}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-legacy-button-toggle-selected-state-text-color )}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-legacy-button-toggle-disabled-state-text-color )}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color);background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font);font-size:var(--mat-standard-button-toggle-label-text-size);line-height:var(--mat-standard-button-toggle-label-text-line-height);font-weight:var(--mat-standard-button-toggle-label-text-weight);letter-spacing:var(--mat-standard-button-toggle-label-text-tracking)}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color);background-color:var(--mat-standard-button-toggle-selected-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-standard-button-toggle-disabled-selected-state-text-color )}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color)}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity)}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity)}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape);border-bottom-right-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape);border-bottom-left-radius:var(--mat-standard-button-toggle-shape)}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggle, [{
    type: Component,
    args: [{
      selector: "mat-button-toggle",
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matButtonToggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      },
      standalone: true,
      imports: [MatRipple, MatPseudoCheckbox],
      template: '<button #button class="mat-button-toggle-button mat-focus-indicator"\n        type="button"\n        [id]="buttonId"\n        [attr.tabindex]="disabled ? -1 : tabIndex"\n        [attr.aria-pressed]="checked"\n        [disabled]="disabled || null"\n        [attr.name]="_getButtonName()"\n        [attr.aria-label]="ariaLabel"\n        [attr.aria-labelledby]="ariaLabelledby"\n        (click)="_onButtonClick()">\n  <span class="mat-button-toggle-label-content">\n    <!-- Render checkmark at the beginning for single-selection. -->\n    @if (buttonToggleGroup && checked && !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator) {\n      <mat-pseudo-checkbox\n          class="mat-mdc-option-pseudo-checkbox"\n          [disabled]="disabled"\n          state="checked"\n          aria-hidden="true"\n          appearance="minimal"></mat-pseudo-checkbox>\n    }\n    <!-- Render checkmark at the beginning for multiple-selection. -->\n    @if (buttonToggleGroup && checked && buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator) {\n      <mat-pseudo-checkbox\n          class="mat-mdc-option-pseudo-checkbox"\n          [disabled]="disabled"\n          state="checked"\n          aria-hidden="true"\n          appearance="minimal"></mat-pseudo-checkbox>\n    }\n    <ng-content></ng-content>\n  </span>\n</button>\n\n<span class="mat-button-toggle-focus-overlay"></span>\n<span class="mat-button-toggle-ripple" matRipple\n     [matRippleTrigger]="button"\n     [matRippleDisabled]="this.disableRipple || this.disabled">\n</span>\n',
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape);border:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-standard-button-toggle-selected-state-text-color )}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-legacy-button-toggle-selected-state-text-color )}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-legacy-button-toggle-disabled-state-text-color )}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color);background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font);font-size:var(--mat-standard-button-toggle-label-text-size);line-height:var(--mat-standard-button-toggle-label-text-line-height);font-weight:var(--mat-standard-button-toggle-label-text-weight);letter-spacing:var(--mat-standard-button-toggle-label-text-tracking)}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color);background-color:var(--mat-standard-button-toggle-selected-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-standard-button-toggle-disabled-selected-state-text-color )}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color)}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity)}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity)}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape);border-bottom-right-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape);border-bottom-left-radius:var(--mat-standard-button-toggle-shape)}"]
    }]
  }], () => [{
    type: MatButtonToggleGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_BUTTON_TOGGLE_GROUP]
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
    }]
  }], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }],
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }]
  });
})();
var MatButtonToggleModule = class _MatButtonToggleModule {
  static {
    this.\u0275fac = function MatButtonToggleModule_Factory(t) {
      return new (t || _MatButtonToggleModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatButtonToggleModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatRippleModule, MatButtonToggle, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
      exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
    }]
  }], null, null);
})();

// src/app/features/calendar/components/calendar-header/calendar-header.component.ts
function CalendarHeaderComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function CalendarHeaderComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearEventSearch());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CalendarHeaderComponent_div_19_button_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u30FB ", r_r4.location, "");
  }
}
function CalendarHeaderComponent_div_19_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("mousedown", function CalendarHeaderComponent_div_19_button_1_Template_button_mousedown_0_listener($event) {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearchResultClick(r_r4, $event));
    });
    \u0275\u0275element(1, "span", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275template(7, CalendarHeaderComponent_div_19_button_1_span_7_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", r_r4._color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r4._dateLabel, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.location);
  }
}
function CalendarHeaderComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, CalendarHeaderComponent_div_19_button_1_Template, 8, 5, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.searchResults.slice(0, 10));
  }
}
function CalendarHeaderComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " \u8A72\u5F53\u3059\u308B\u4E88\u5B9A\u304C\u3042\u308A\u307E\u305B\u3093 ");
    \u0275\u0275elementEnd();
  }
}
var CalendarHeaderComponent = class _CalendarHeaderComponent {
  constructor() {
    this.searchResults = [];
    this.dateChanged = new EventEmitter();
    this.viewChanged = new EventEmitter();
    this.todayClicked = new EventEmitter();
    this.eventSearch = new EventEmitter();
    this.eventSelected = new EventEmitter();
    this.eventSearchQuery = "";
    this.searchFocused = false;
  }
  onEventSearchChange() {
    this.eventSearch.emit(this.eventSearchQuery.trim());
  }
  clearEventSearch() {
    this.eventSearchQuery = "";
    this.eventSearch.emit("");
  }
  onSearchBlur() {
    setTimeout(() => {
      this.searchFocused = false;
    }, 150);
  }
  onSearchResultClick(event, e) {
    e.preventDefault();
    this.searchFocused = false;
    this.eventSelected.emit(event);
  }
  get dateDisplay() {
    switch (this.currentView) {
      case "month":
        return format(this.currentDate, "yyyy\u5E74M\u6708", { locale: ja });
      case "week7":
      case "week5": {
        const weekStart = startOfWeek(this.currentDate, { weekStartsOn: 1 });
        const days = this.currentView === "week7" ? 6 : 4;
        const weekEnd = addDays(weekStart, days);
        if (weekStart.getMonth() === weekEnd.getMonth()) {
          return format(weekStart, "yyyy\u5E74M\u6708", { locale: ja });
        }
        if (weekStart.getFullYear() === weekEnd.getFullYear()) {
          return `${format(weekStart, "yyyy\u5E74M\u6708", { locale: ja })} - ${format(weekEnd, "M\u6708", { locale: ja })}`;
        }
        return `${format(weekStart, "yyyy\u5E74M\u6708", { locale: ja })} - ${format(weekEnd, "yyyy\u5E74M\u6708", { locale: ja })}`;
      }
      case "day3": {
        const dayEnd = addDays(this.currentDate, 2);
        if (this.currentDate.getMonth() === dayEnd.getMonth()) {
          return `${format(this.currentDate, "yyyy\u5E74M\u6708d\u65E5", { locale: ja })} - ${format(dayEnd, "d\u65E5", { locale: ja })}`;
        }
        return `${format(this.currentDate, "yyyy\u5E74M\u6708d\u65E5", { locale: ja })} - ${format(dayEnd, "M\u6708d\u65E5", { locale: ja })}`;
      }
      case "day1":
        return format(this.currentDate, "yyyy\u5E74M\u6708d\u65E5 (EEEE)", { locale: ja });
      default:
        return format(this.currentDate, "yyyy\u5E74M\u6708", { locale: ja });
    }
  }
  navigateBack() {
    let newDate;
    switch (this.currentView) {
      case "month":
        newDate = subMonths(this.currentDate, 1);
        break;
      case "week7":
        newDate = subWeeks(this.currentDate, 1);
        break;
      case "week5":
        newDate = subDays(this.currentDate, 5);
        break;
      case "day3":
        newDate = subDays(this.currentDate, 3);
        break;
      case "day1":
        newDate = subDays(this.currentDate, 1);
        break;
      default:
        newDate = subMonths(this.currentDate, 1);
    }
    this.dateChanged.emit(newDate);
  }
  navigateForward() {
    let newDate;
    switch (this.currentView) {
      case "month":
        newDate = addMonths(this.currentDate, 1);
        break;
      case "week7":
        newDate = addWeeks(this.currentDate, 1);
        break;
      case "week5":
        newDate = addDays(this.currentDate, 5);
        break;
      case "day3":
        newDate = addDays(this.currentDate, 3);
        break;
      case "day1":
        newDate = addDays(this.currentDate, 1);
        break;
      default:
        newDate = addMonths(this.currentDate, 1);
    }
    this.dateChanged.emit(newDate);
  }
  onViewChange(view) {
    this.viewChanged.emit(view);
  }
  onTodayClick() {
    this.todayClicked.emit();
  }
  static {
    this.\u0275fac = function CalendarHeaderComponent_Factory(t) {
      return new (t || _CalendarHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarHeaderComponent, selectors: [["app-calendar-header"]], inputs: { currentDate: "currentDate", currentView: "currentView", searchResults: "searchResults" }, outputs: { dateChanged: "dateChanged", viewChanged: "viewChanged", todayClicked: "todayClicked", eventSearch: "eventSearch", eventSelected: "eventSelected" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 6, consts: [[1, "calendar-header"], [1, "calendar-header__nav"], ["mat-icon-button", "", "aria-label", "\u524D\u3078", 3, "click"], ["mat-icon-button", "", "aria-label", "\u6B21\u3078", 3, "click"], [1, "calendar-header__title"], ["mat-stroked-button", "", 1, "calendar-header__today-btn", 3, "click"], [1, "calendar-header__tools"], [1, "calendar-header__search-wrap"], [1, "calendar-header__search"], [1, "calendar-header__search-icon"], ["type", "text", "placeholder", "\u4E88\u5B9A\u3092\u691C\u7D22", 1, "calendar-header__search-input", 3, "ngModelChange", "focus", "blur", "ngModel"], ["class", "calendar-header__search-clear", "type", "button", 3, "click", 4, "ngIf"], ["class", "calendar-header__search-results", 4, "ngIf"], ["class", "calendar-header__search-empty", 4, "ngIf"], ["hideSingleSelectionIndicator", "", 1, "calendar-header__view-toggle", 3, "change", "value"], ["value", "month"], ["value", "week7"], ["value", "week5"], ["value", "day3"], ["value", "day1"], ["type", "button", 1, "calendar-header__search-clear", 3, "click"], [1, "calendar-header__search-results"], ["class", "calendar-header__search-item", "type", "mousedown", 3, "mousedown", 4, "ngFor", "ngForOf"], ["type", "mousedown", 1, "calendar-header__search-item", 3, "mousedown"], [1, "calendar-header__search-dot"], [1, "calendar-header__search-body"], [1, "calendar-header__search-title"], [1, "calendar-header__search-meta"], [4, "ngIf"], [1, "calendar-header__search-empty"]], template: function CalendarHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function CalendarHeaderComponent_Template_button_click_2_listener() {
          return ctx.navigateBack();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function CalendarHeaderComponent_Template_button_click_5_listener() {
          return ctx.navigateForward();
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "chevron_right");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "h2", 4);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275listener("click", function CalendarHeaderComponent_Template_button_click_10_listener() {
          return ctx.onTodayClick();
        });
        \u0275\u0275text(11, " \u4ECA\u65E5 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "mat-icon", 9);
        \u0275\u0275text(16, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CalendarHeaderComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.eventSearchQuery, $event) || (ctx.eventSearchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("focus", function CalendarHeaderComponent_Template_input_focus_17_listener() {
          return ctx.searchFocused = true;
        })("blur", function CalendarHeaderComponent_Template_input_blur_17_listener() {
          return ctx.onSearchBlur();
        })("ngModelChange", function CalendarHeaderComponent_Template_input_ngModelChange_17_listener() {
          return ctx.onEventSearchChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, CalendarHeaderComponent_button_18_Template, 3, 0, "button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, CalendarHeaderComponent_div_19_Template, 2, 1, "div", 12)(20, CalendarHeaderComponent_div_20_Template, 2, 0, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-button-toggle-group", 14);
        \u0275\u0275listener("change", function CalendarHeaderComponent_Template_mat_button_toggle_group_change_21_listener($event) {
          return ctx.onViewChange($event.value);
        });
        \u0275\u0275elementStart(22, "mat-button-toggle", 15);
        \u0275\u0275text(23, "\u6708");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-button-toggle", 16);
        \u0275\u0275text(25, "7\u65E5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-button-toggle", 17);
        \u0275\u0275text(27, "5\u65E5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-button-toggle", 18);
        \u0275\u0275text(29, "3\u65E5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-button-toggle", 19);
        \u0275\u0275text(31, "1\u65E5");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.dateDisplay);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.eventSearchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.eventSearchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchFocused && ctx.eventSearchQuery.trim() && ctx.searchResults.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchFocused && ctx.eventSearchQuery.trim() && !ctx.searchResults.length);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.currentView);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle], styles: ['@charset "UTF-8";\n\n\n\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border-bottom: 1px solid #e0e0e0;\n  background: #fff;\n  height: 56px;\n  box-sizing: border-box;\n}\n.calendar-header__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.calendar-header__nav[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.calendar-header__nav[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-persistent-ripple[_ngcontent-%COMP%], .calendar-header__nav[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-touch-target[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n.calendar-header__nav[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.calendar-header__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n  color: #3c4043;\n  margin: 0 16px 0 8px;\n  white-space: nowrap;\n}\n.calendar-header__tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.calendar-header__search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 480px;\n  max-width: 50vw;\n  min-width: 240px;\n}\n.calendar-header__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 2px 14px;\n  border: 1px solid #dadce0;\n  border-radius: 14px;\n  background: #f7f8fa;\n  width: 100%;\n  height: 24px;\n  box-sizing: border-box;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    box-shadow 0.15s;\n}\n.calendar-header__search[_ngcontent-%COMP%]:focus-within {\n  background: #fff;\n  border-color: #ff9800;\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.15);\n}\n.calendar-header__search-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #9aa0a6;\n  flex-shrink: 0;\n}\n.calendar-header__search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 12px;\n  font-family: inherit;\n  color: #3c4043;\n  min-width: 0;\n  padding: 1px 0;\n  line-height: 18px;\n  text-overflow: ellipsis;\n}\n.calendar-header__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa0a6;\n}\n.calendar-header__search-clear[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #9aa0a6;\n  padding: 2px;\n  display: inline-flex;\n  align-items: center;\n}\n.calendar-header__search-clear[_ngcontent-%COMP%]:hover {\n  color: #3c4043;\n}\n.calendar-header__search-clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.calendar-header__search-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14), 0 2px 6px rgba(0, 0, 0, 0.06);\n  max-height: 360px;\n  overflow-y: auto;\n  z-index: 1000;\n  padding: 6px 0;\n}\n.calendar-header__search-empty[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  padding: 16px;\n  text-align: center;\n  color: #9aa0a6;\n  font-size: 13px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);\n  z-index: 1000;\n}\n.calendar-header__search-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 16px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  font-family: inherit;\n  transition: background 0.12s;\n}\n.calendar-header__search-item[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.calendar-header__search-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #1a73e8;\n}\n.calendar-header__search-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.calendar-header__search-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #81766e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.calendar-header__search-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5f6368;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 2px;\n}\n@media (max-width: 767px) {\n  .calendar-header__search-wrap[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .calendar-header__search[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n  }\n  .calendar-header__search-input[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.calendar-header__today-btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  border: 1px solid #dadce0;\n  border-radius: 4px;\n  padding: 6px 16px;\n  color: #3c4043;\n  background: #fff;\n  transition: background-color 0.15s ease;\n}\n.calendar-header__today-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f4;\n}\n.calendar-header__view-toggle[_ngcontent-%COMP%] {\n  border: 1px solid #dadce0;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.calendar-header__view-toggle[_ngcontent-%COMP%]     .mat-button-toggle {\n  border: none;\n  transition: background-color 0.15s ease;\n}\n.calendar-header__view-toggle[_ngcontent-%COMP%]     .mat-button-toggle .mat-button-toggle-label-content {\n  padding: 0 14px;\n  line-height: 32px;\n  font-size: 13px;\n  color: #5f6368;\n}\n.calendar-header__view-toggle[_ngcontent-%COMP%]     .mat-button-toggle.mat-button-toggle-checked {\n  background-color: #ff9800;\n}\n.calendar-header__view-toggle[_ngcontent-%COMP%]     .mat-button-toggle.mat-button-toggle-checked .mat-button-toggle-label-content {\n  color: #fff;\n  font-weight: 500;\n}\n.calendar-header__view-toggle[_ngcontent-%COMP%]     .mat-button-toggle:not(.mat-button-toggle-checked):hover {\n  background-color: #f1f3f4;\n}\n.calendar-header__view-toggle[_ngcontent-%COMP%]     .mat-button-toggle-group {\n  border: none;\n  border-radius: 20px;\n}\n@media (max-width: 767px) {\n  .calendar-header[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    height: auto;\n    flex-wrap: wrap;\n    gap: 4px;\n  }\n  .calendar-header__nav[_ngcontent-%COMP%] {\n    width: 100%;\n    gap: 2px;\n  }\n  .calendar-header__nav[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    padding: 4px;\n  }\n  .calendar-header__nav[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-persistent-ripple[_ngcontent-%COMP%], .calendar-header__nav[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-touch-target[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .calendar-header__nav[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .calendar-header__title[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin: 0 auto 0 4px;\n  }\n  .calendar-header__today-btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 0 8px;\n    min-width: unset;\n    line-height: 28px;\n  }\n  .calendar-header__view-toggle[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n  .calendar-header__view-toggle[_ngcontent-%COMP%]     .mat-button-toggle-group {\n    width: 100%;\n    display: flex;\n  }\n  .calendar-header__view-toggle[_ngcontent-%COMP%]     .mat-button-toggle {\n    flex: 1;\n  }\n  .calendar-header__view-toggle[_ngcontent-%COMP%]     .mat-button-toggle .mat-button-toggle-label-content {\n    padding: 0 6px;\n    line-height: 28px;\n    font-size: 11px;\n  }\n}\n/*# sourceMappingURL=calendar-header.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarHeaderComponent, { className: "CalendarHeaderComponent", filePath: "src\\app\\features\\calendar\\components\\calendar-header\\calendar-header.component.ts", lineNumber: 29 });
})();

// src/app/features/calendar/components/event-chip/event-chip.component.ts
function EventChipComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.timeLabel);
  }
}
var EventChipComponent = class _EventChipComponent {
  constructor() {
    this.color = "#1976d2";
    this.eventClicked = new EventEmitter();
  }
  get timeLabel() {
    if (this.event.allDay)
      return "";
    return format(this.event.start, "H:mm");
  }
  onClick(e) {
    e.stopPropagation();
    this.eventClicked.emit(this.event);
  }
  static {
    this.\u0275fac = function EventChipComponent_Factory(t) {
      return new (t || _EventChipComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventChipComponent, selectors: [["app-event-chip"]], inputs: { event: "event", color: "color" }, outputs: { eventClicked: "eventClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 7, consts: [[1, "event-chip", 3, "click", "title"], [1, "event-chip__bar"], ["class", "event-chip__time", 4, "ngIf"], [1, "event-chip__title"], [1, "event-chip__time"]], template: function EventChipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function EventChipComponent_Template_div_click_0_listener($event) {
          return ctx.onClick($event);
        });
        \u0275\u0275element(1, "span", 1);
        \u0275\u0275template(2, EventChipComponent_span_2_Template, 2, 1, "span", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("--chip-color", ctx.color);
        \u0275\u0275classProp("event-chip--all-day", ctx.event.allDay);
        \u0275\u0275property("title", ctx.event.title);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.event.allDay);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.event.title);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.event-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 20px;\n  border-radius: 3px;\n  cursor: pointer;\n  overflow: hidden;\n  font-size: 12px;\n  line-height: 20px;\n  padding-right: 4px;\n  background-color: color-mix(in srgb, var(--chip-color, #1976d2) 15%, transparent);\n  transition: all 0.15s ease;\n}\n.event-chip[_ngcontent-%COMP%]:hover {\n  background-color: color-mix(in srgb, var(--chip-color, #1976d2) 25%, transparent);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  transform: translateY(-1px);\n}\n.event-chip--all-day[_ngcontent-%COMP%] {\n  background-color: var(--chip-color, #1976d2);\n  color: #fff;\n  padding-left: 4px;\n}\n.event-chip--all-day[_ngcontent-%COMP%]   .event-chip__bar[_ngcontent-%COMP%] {\n  display: none;\n}\n.event-chip--all-day[_ngcontent-%COMP%]:hover {\n  background-color: color-mix(in srgb, var(--chip-color, #1976d2) 85%, #000);\n}\n.event-chip__bar[_ngcontent-%COMP%] {\n  width: 3px;\n  min-width: 3px;\n  height: 100%;\n  background-color: var(--chip-color, #1976d2);\n  border-radius: 3px 0 0 3px;\n  margin-right: 4px;\n}\n.event-chip__time[_ngcontent-%COMP%] {\n  color: var(--chip-color, #1976d2);\n  font-weight: 500;\n  margin-right: 4px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.event-chip__title[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #3c4043;\n  flex: 1;\n  min-width: 0;\n}\n.event-chip--all-day[_ngcontent-%COMP%]   .event-chip__title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=event-chip.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventChipComponent, { className: "EventChipComponent", filePath: "src\\app\\features\\calendar\\components\\event-chip\\event-chip.component.ts", lineNumber: 14 });
})();

// src/app/features/calendar/components/calendar-month-view/calendar-month-view.component.ts
function CalendarMonthViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275classProp("month-view__weekday--weekend", i_r2 >= 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", label_r1, " ");
  }
}
function CalendarMonthViewComponent_div_3_div_1_app_event_chip_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-event-chip", 12);
    \u0275\u0275listener("eventClicked", function CalendarMonthViewComponent_div_3_div_1_app_event_chip_4_Template_app_event_chip_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.onEventClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275property("event", evt_r7)("color", ctx_r4.getEventColor(evt_r7));
  }
}
function CalendarMonthViewComponent_div_3_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function CalendarMonthViewComponent_div_3_div_1_div_5_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const cell_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onMoreClick(cell_r4, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", cell_r4.moreCount, "\u4EF6 ");
  }
}
function CalendarMonthViewComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function CalendarMonthViewComponent_div_3_div_1_Template_div_click_0_listener($event) {
      const cell_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onCellClick(cell_r4, $event));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275template(4, CalendarMonthViewComponent_div_3_div_1_app_event_chip_4_Template, 1, 2, "app-event-chip", 10)(5, CalendarMonthViewComponent_div_3_div_1_div_5_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("month-view__cell--other-month", !cell_r4.isCurrentMonth)("month-view__cell--weekend", cell_r4.isWeekend);
    \u0275\u0275advance();
    \u0275\u0275classProp("month-view__day-number--today", cell_r4.isToday);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r4.dayNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", cell_r4.events)("ngForTrackBy", ctx_r4.trackByEvent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r4.hasMore);
  }
}
function CalendarMonthViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, CalendarMonthViewComponent_div_3_div_1_Template, 6, 10, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r9 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", week_r9)("ngForTrackBy", ctx_r4.trackByCell);
  }
}
var CalendarMonthViewComponent = class _CalendarMonthViewComponent {
  constructor() {
    this.events = [];
    this.visibleCalendarIds = [];
    this.calendars = [];
    this.dateClicked = new EventEmitter();
    this.eventClicked = new EventEmitter();
    this.eventMoved = new EventEmitter();
    this.moreEventsClicked = new EventEmitter();
    this.weeks = [];
    this.weekDayLabels = ["\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F", "\u65E5"];
    this.today = /* @__PURE__ */ new Date();
    this.maxEventsPerCell = 3;
  }
  ngOnChanges(changes) {
    this.buildGrid();
  }
  buildGrid() {
    if (!this.currentDate)
      return;
    const monthStart = startOfMonth(this.currentDate);
    const monthEnd = endOfMonth(this.currentDate);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
    const allDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
    const filteredEvents = this.events.filter((e) => this.visibleCalendarIds.includes(e.calendarId));
    this.weeks = [];
    let currentWeek = [];
    for (const day of allDays) {
      const dayStart = startOfDay(day);
      const dayEnd = endOfDay(day);
      const dayEvents = filteredEvents.filter((e) => areIntervalsOverlapping({ start: e.start, end: e.end }, { start: dayStart, end: dayEnd }));
      dayEvents.sort((a, b) => {
        if (a.allDay && !b.allDay)
          return -1;
        if (!a.allDay && b.allDay)
          return 1;
        return a.start.getTime() - b.start.getTime();
      });
      const cell = {
        date: day,
        dayNumber: day.getDate(),
        isCurrentMonth: isSameMonth(day, this.currentDate),
        isToday: isSameDay(day, this.today),
        isWeekend: isWeekend(day),
        events: dayEvents.slice(0, this.maxEventsPerCell),
        hasMore: dayEvents.length > this.maxEventsPerCell,
        moreCount: dayEvents.length - this.maxEventsPerCell
      };
      currentWeek.push(cell);
      if (currentWeek.length === 7) {
        this.weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) {
      this.weeks.push(currentWeek);
    }
  }
  getEventColor(event) {
    if (event.color)
      return event.color;
    const cal = this.calendars.find((c) => c.id === event.calendarId);
    return cal?.color || "#1976d2";
  }
  onCellClick(cell, event) {
    this.dateClicked.emit(cell.date);
  }
  onEventClick(evt) {
    this.eventClicked.emit(evt);
  }
  onMoreClick(cell, event) {
    event.stopPropagation();
    const dayStart = startOfDay(cell.date);
    const dayEnd = endOfDay(cell.date);
    const allDayEvents = this.events.filter((e) => this.visibleCalendarIds.includes(e.calendarId) && areIntervalsOverlapping({ start: e.start, end: e.end }, { start: dayStart, end: dayEnd }));
    this.moreEventsClicked.emit({ date: cell.date, events: allDayEvents });
  }
  trackByWeek(index, week) {
    return index;
  }
  trackByCell(index, cell) {
    return cell.date.toISOString();
  }
  trackByEvent(index, event) {
    return event.id;
  }
  static {
    this.\u0275fac = function CalendarMonthViewComponent_Factory(t) {
      return new (t || _CalendarMonthViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarMonthViewComponent, selectors: [["app-calendar-month-view"]], inputs: { currentDate: "currentDate", events: "events", visibleCalendarIds: "visibleCalendarIds", calendars: "calendars" }, outputs: { dateClicked: "dateClicked", eventClicked: "eventClicked", eventMoved: "eventMoved", moreEventsClicked: "moreEventsClicked" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [[1, "month-view"], [1, "month-view__header"], ["class", "month-view__weekday", 3, "month-view__weekday--weekend", 4, "ngFor", "ngForOf"], ["class", "month-view__week", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "month-view__weekday"], [1, "month-view__week"], ["class", "month-view__cell", 3, "month-view__cell--other-month", "month-view__cell--weekend", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "month-view__cell", 3, "click"], [1, "month-view__day-number"], [1, "month-view__events"], [3, "event", "color", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "month-view__more", 3, "click", 4, "ngIf"], [3, "eventClicked", "event", "color"], [1, "month-view__more", 3, "click"]], template: function CalendarMonthViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, CalendarMonthViewComponent_div_2_Template, 2, 3, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CalendarMonthViewComponent_div_3_Template, 2, 2, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.weekDayLabels);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.weeks)("ngForTrackBy", ctx.trackByWeek);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, EventChipComponent], styles: ['@charset "UTF-8";\n\n\n\n.month-view[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto repeat(6, 1fr);\n  height: 100%;\n  width: 100%;\n  max-width: 100vw;\n  overflow: hidden;\n  overflow-x: hidden;\n  box-sizing: border-box;\n}\n.month-view__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-bottom: 1px solid #e0e0e0;\n  box-sizing: border-box;\n}\n.month-view__weekday[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #70757a;\n  padding: 4px 0;\n  text-transform: uppercase;\n  border-right: 1px solid transparent;\n  box-sizing: border-box;\n}\n.month-view__weekday[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.month-view__weekday--weekend[_ngcontent-%COMP%] {\n  color: #70757a;\n}\n.month-view__week[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  min-height: 0;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.month-view__cell[_ngcontent-%COMP%] {\n  min-height: 0;\n  border-right: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 2px 4px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: background-color 0.15s;\n  box-sizing: border-box;\n}\n.month-view__cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.month-view__cell[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.month-view__cell--other-month[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n.month-view__cell--other-month[_ngcontent-%COMP%]   .month-view__day-number[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n.month-view__cell--weekend[_ngcontent-%COMP%] {\n  background-color: #fafbfc;\n}\n.month-view__cell--other-month.month-view__cell--weekend[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n.month-view__day-number[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3c4043;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  margin: 2px auto 2px;\n  border-radius: 50%;\n}\n.month-view__day-number--today[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: #fff;\n  font-weight: 600;\n}\n.month-view__events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.month-view__more[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #5f6368;\n  cursor: pointer;\n  padding: 1px 4px;\n  border-radius: 3px;\n  font-weight: 500;\n}\n.month-view__more[_ngcontent-%COMP%]:hover {\n  background-color: #e8eaed;\n  color: #3c4043;\n}\n/*# sourceMappingURL=calendar-month-view.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarMonthViewComponent, { className: "CalendarMonthViewComponent", filePath: "src\\app\\features\\calendar\\components\\calendar-month-view\\calendar-month-view.component.ts", lineNumber: 48 });
})();

// src/app/features/calendar/components/calendar-week-view/calendar-week-view.component.ts
var _c02 = ["timeGrid"];
function CalendarWeekViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const col_r1 = ctx.$implicit;
    \u0275\u0275classProp("week-view__col-header--today", col_r1.isToday);
    \u0275\u0275advance();
    \u0275\u0275classProp("week-view__col-date--today", col_r1.isToday);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r1.dayOfWeek);
  }
}
function CalendarWeekViewComponent_div_4_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function CalendarWeekViewComponent_div_4_div_3_div_1_Template_div_click_0_listener($event) {
      const evt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onEventClick(evt_r3, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", ctx_r3.getEventColor(evt_r3));
    \u0275\u0275property("title", evt_r3.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", evt_r3.title, " ");
  }
}
function CalendarWeekViewComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, CalendarWeekViewComponent_div_4_div_3_div_1_Template, 2, 4, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    \u0275\u0275classProp("week-view__allday-cell--today", col_r5.isToday);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", col_r5.allDayEvents);
  }
}
function CalendarWeekViewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2, "\u7D42\u65E5");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CalendarWeekViewComponent_div_4_div_3_Template, 2, 3, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.columns)("ngForTrackBy", ctx_r3.trackByColumn);
  }
}
function CalendarWeekViewComponent_div_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("mousedown", function CalendarWeekViewComponent_div_9_div_5_Template_div_mousedown_0_listener($event) {
      const colIdx_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onGridMouseDown($event, colIdx_r7));
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275listener("click", function CalendarWeekViewComponent_div_9_div_5_Template_div_click_1_listener($event) {
      const col_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const hour_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onTimeSlotClick(col_r8, hour_r9, false, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275listener("click", function CalendarWeekViewComponent_div_9_div_5_Template_div_click_2_listener($event) {
      const col_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const hour_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onTimeSlotClick(col_r8, hour_r9, true, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    \u0275\u0275classProp("week-view__hour-cell--today", col_r8.isToday);
  }
}
function CalendarWeekViewComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275template(5, CalendarWeekViewComponent_div_9_div_5_Template, 3, 2, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatHour(hour_r9));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.columns)("ngForTrackBy", ctx_r3.trackByColumn);
  }
}
function CalendarWeekViewComponent_div_12_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pe_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pe_r11.event.location || "", " ");
  }
}
function CalendarWeekViewComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("mousedown", function CalendarWeekViewComponent_div_12_div_1_Template_div_mousedown_0_listener($event) {
      const pe_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const colIdx_r12 = \u0275\u0275nextContext().index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onEventMouseDown(pe_r11, colIdx_r12, $event));
    })("click", function CalendarWeekViewComponent_div_12_div_1_Template_div_click_0_listener($event) {
      const pe_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onEventClick(pe_r11.event, $event));
    });
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CalendarWeekViewComponent_div_12_div_1_div_3_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pe_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", pe_r11.top, "px")("height", pe_r11.height, "px")("left", pe_r11.left, "%")("width", pe_r11.width - 2, "%")("background-color", pe_r11.color);
    \u0275\u0275classProp("week-view__event-block--moving", ctx_r3.isMovingSourceBlock(pe_r11));
    \u0275\u0275property("title", pe_r11.event.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pe_r11.event.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pe_r11.height > 30);
  }
}
function CalendarWeekViewComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r3.dragPreviewTop, "px")("height", ctx_r3.dragPreviewHeight, "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.dragPreviewTimeLabel);
  }
}
function CalendarWeekViewComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "br");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r3.movePreviewTop, "px")("height", ctx_r3.movePreviewHeight, "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.moveState.event == null ? null : ctx_r3.moveState.event.title, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.movePreviewTimeLabel, " ");
  }
}
function CalendarWeekViewComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, CalendarWeekViewComponent_div_12_div_1_Template, 4, 15, "div", 33)(2, CalendarWeekViewComponent_div_12_div_2_Template, 3, 5, "div", 34)(3, CalendarWeekViewComponent_div_12_div_3_Template, 5, 6, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r13 = ctx.$implicit;
    const colIdx_r12 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", col_r13.timedEvents)("ngForTrackBy", ctx_r3.trackByEvent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.dragState.active && ctx_r3.dragState.columnIndex === colIdx_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.moveState.active && ctx_r3.moveState.currentColumnIndex === colIdx_r12);
  }
}
function CalendarWeekViewComponent_div_13_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
}
function CalendarWeekViewComponent_div_13_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 51);
  }
}
function CalendarWeekViewComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275template(1, CalendarWeekViewComponent_div_13_div_2_div_1_Template, 1, 0, "div", 48)(2, CalendarWeekViewComponent_div_13_div_2_div_2_Template, 1, 0, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r14 = ctx.$implicit;
    \u0275\u0275classProp("week-view__current-time-segment--active", col_r14.isToday);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r14.isToday);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r14.isToday);
  }
}
function CalendarWeekViewComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275template(2, CalendarWeekViewComponent_div_13_div_2_Template, 3, 4, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r3.currentTimeTop, "px");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.columns);
  }
}
var CalendarWeekViewComponent = class _CalendarWeekViewComponent {
  constructor(ngZone, cdr) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.events = [];
    this.visibleCalendarIds = [];
    this.calendars = [];
    this.viewType = "week7";
    this.eventClicked = new EventEmitter();
    this.timeSlotClicked = new EventEmitter();
    this.eventMoved = new EventEmitter();
    this.eventResized = new EventEmitter();
    this.timeSlotDragged = new EventEmitter();
    this.columns = [];
    this.hours = [];
    this.currentTimeTop = 0;
    this.currentTimeVisible = false;
    this.timerInterval = null;
    this.hourHeight = 48;
    this.startHour = 0;
    this.endHour = 24;
    this.today = /* @__PURE__ */ new Date();
    this.hasAllDayEvents = false;
    this.dragState = {
      active: false,
      columnIndex: -1,
      startMinutes: 0,
      currentMinutes: 0
    };
    this.moveState = {
      active: false,
      event: null,
      originalStart: /* @__PURE__ */ new Date(),
      originalEnd: /* @__PURE__ */ new Date(),
      originColumnIndex: -1,
      currentColumnIndex: -1,
      startMinutes: 0,
      currentMinutes: 0,
      durationMinutes: 0,
      grabOffsetMinutes: 0
    };
    this.isDragging = false;
    this.dragStarted = false;
    this.isMoving = false;
    this.moveStarted = false;
    this.mouseDownY = 0;
    this.mouseDownX = 0;
    this.DRAG_THRESHOLD = 4;
    this.boundOnMouseMove = null;
    this.boundOnMouseUp = null;
    this.boundOnMoveMouseMove = null;
    this.boundOnMoveMouseUp = null;
  }
  ngOnInit() {
    this.hours = [];
    for (let h = this.startHour; h < this.endHour; h++) {
      this.hours.push(h);
    }
    this.updateCurrentTime();
    this.timerInterval = setInterval(() => this.updateCurrentTime(), 6e4);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.timeGridRef) {
        this.timeGridRef.nativeElement.scrollTop = 7 * this.hourHeight;
      }
    }, 0);
  }
  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.cleanupDragListeners();
    this.cleanupMoveListeners();
  }
  ngOnChanges(changes) {
    this.buildColumns();
    this.hasAllDayEvents = this.columns.some((c) => c.allDayEvents.length > 0);
    this.updateCurrentTime();
  }
  updateCurrentTime() {
    const now = /* @__PURE__ */ new Date();
    const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
    this.currentTimeTop = minutesSinceMidnight / 60 * this.hourHeight;
    this.currentTimeVisible = this.columns.some((c) => isSameDay(c.date, now));
  }
  buildColumns() {
    if (!this.currentDate)
      return;
    const numDays = this.viewType === "week7" ? 7 : this.viewType === "week5" ? 5 : 3;
    let startDate;
    if (this.viewType === "week7" || this.viewType === "week5") {
      startDate = startOfWeek(this.currentDate, { weekStartsOn: 1 });
    } else {
      startDate = this.currentDate;
    }
    const filteredEvents = this.events.filter((e) => this.visibleCalendarIds.includes(e.calendarId));
    this.columns = [];
    for (let i = 0; i < numDays; i++) {
      const date = addDays(startDate, i);
      const dayStart = startOfDay(date);
      const dayEnd = endOfDay(date);
      const dayEvents = filteredEvents.filter((e) => areIntervalsOverlapping({ start: e.start, end: e.end }, { start: dayStart, end: dayEnd }));
      const allDayEvents = dayEvents.filter((e) => e.allDay);
      const timedEvents = dayEvents.filter((e) => !e.allDay);
      const positioned = this.positionEvents(timedEvents, date);
      this.columns.push({
        date,
        /* ユーザー指示 (2026-04-21): スマホの日付は "21 (火)" 形式
           (日 の漢字なし) に。label は日付のみに、曜日は dayOfWeek に括弧付き。 */
        label: format(date, "d", { locale: ja }),
        dayOfWeek: `(${format(date, "EEEEE", { locale: ja })})`,
        isToday: isToday(date),
        allDayEvents,
        timedEvents: positioned
      });
    }
  }
  positionEvents(events, date) {
    if (events.length === 0)
      return [];
    const sorted = [...events].sort((a, b) => a.start.getTime() - b.start.getTime());
    const positioned = [];
    const groups = [];
    let currentGroup = [];
    let groupEnd = null;
    for (const evt of sorted) {
      if (groupEnd && evt.start >= groupEnd) {
        if (currentGroup.length > 0)
          groups.push(currentGroup);
        currentGroup = [];
        groupEnd = null;
      }
      currentGroup.push(evt);
      if (!groupEnd || evt.end > groupEnd) {
        groupEnd = evt.end;
      }
    }
    if (currentGroup.length > 0)
      groups.push(currentGroup);
    for (const group of groups) {
      const numColumns = group.length;
      group.forEach((evt, colIndex) => {
        const eventStartMinutes = this.getMinutesForEvent(evt, date, true);
        const eventEndMinutes = this.getMinutesForEvent(evt, date, false);
        const durationMinutes = Math.max(eventEndMinutes - eventStartMinutes, 15);
        const top = eventStartMinutes / 60 * this.hourHeight;
        const height = durationMinutes / 60 * this.hourHeight;
        positioned.push({
          event: evt,
          top,
          height: Math.max(height, 18),
          left: colIndex / numColumns * 100,
          width: 1 / numColumns * 100,
          color: this.getEventColor(evt)
        });
      });
    }
    return positioned;
  }
  getMinutesForEvent(event, date, isStart2) {
    const d = isStart2 ? event.start : event.end;
    if (isSameDay(d, date)) {
      return d.getHours() * 60 + d.getMinutes();
    }
    return isStart2 ? 0 : 24 * 60;
  }
  getEventColor(event) {
    if (event.color)
      return event.color;
    const cal = this.calendars.find((c) => c.id === event.calendarId);
    return cal?.color || "#1976d2";
  }
  onEventClick(evt, e) {
    e.stopPropagation();
    if (this.moveStarted) {
      this.moveStarted = false;
      return;
    }
    this.eventClicked.emit(evt);
  }
  /**
   * 既存予定 (event-block) 上での mousedown: ドラッグで移動するか、
   * 閾値を超えなかったらクリック扱い。
   * (ユーザー指示 2026-04-21)
   */
  onEventMouseDown(pe, columnIndex, e) {
    if (e.button !== 0)
      return;
    if (pe.event.id.includes("-rec-"))
      return;
    e.stopPropagation();
    this.isMoving = true;
    this.moveStarted = false;
    this.mouseDownY = e.clientY;
    this.mouseDownX = e.clientX;
    const col = this.columns[columnIndex];
    if (!col)
      return;
    const durationMin = Math.max(differenceInMinutes(pe.event.end, pe.event.start), 15);
    const clickMinutes = this.snapTo15Min(this.getMinutesFromMouseEvent(e));
    const eventStartMin = pe.event.start.getHours() * 60 + pe.event.start.getMinutes();
    const grabOffset = Math.max(0, clickMinutes - eventStartMin);
    this.moveState = {
      active: false,
      event: pe.event,
      originalStart: new Date(pe.event.start),
      originalEnd: new Date(pe.event.end),
      originColumnIndex: columnIndex,
      currentColumnIndex: columnIndex,
      startMinutes: eventStartMin,
      currentMinutes: eventStartMin,
      durationMinutes: durationMin,
      grabOffsetMinutes: grabOffset
    };
    this.ngZone.runOutsideAngular(() => {
      this.boundOnMoveMouseMove = this.onMoveMouseMove.bind(this);
      this.boundOnMoveMouseUp = this.onMoveMouseUp.bind(this);
      document.addEventListener("mousemove", this.boundOnMoveMouseMove);
      document.addEventListener("mouseup", this.boundOnMoveMouseUp);
    });
    e.preventDefault();
  }
  onMoveMouseMove(e) {
    if (!this.isMoving || !this.moveState.event)
      return;
    if (!this.moveStarted) {
      const dy = Math.abs(e.clientY - this.mouseDownY);
      const dx = Math.abs(e.clientX - this.mouseDownX);
      if (dy < this.DRAG_THRESHOLD && dx < this.DRAG_THRESHOLD)
        return;
      this.moveStarted = true;
      this.moveState.active = true;
    }
    const minutes = this.snapTo15Min(this.getMinutesFromMouseEvent(e));
    const newStart = minutes - this.moveState.grabOffsetMinutes;
    this.moveState.currentMinutes = Math.max(0, Math.min(newStart, 1440 - this.moveState.durationMinutes));
    const targetColIdx = this.getColumnIndexFromMouseEvent(e);
    if (targetColIdx >= 0) {
      this.moveState.currentColumnIndex = targetColIdx;
    }
    this.ngZone.run(() => this.cdr.markForCheck());
  }
  onMoveMouseUp(e) {
    this.cleanupMoveListeners();
    if (!this.isMoving)
      return;
    this.isMoving = false;
    if (!this.moveStarted || !this.moveState.active || !this.moveState.event) {
      this.resetMove();
      return;
    }
    const targetCol = this.columns[this.moveState.currentColumnIndex];
    const originalCol = this.columns[this.moveState.originColumnIndex];
    const sameStart = targetCol && originalCol && isSameDay(targetCol.date, originalCol.date) && this.moveState.currentMinutes === this.moveState.startMinutes;
    if (!targetCol || sameStart) {
      this.resetMove();
      return;
    }
    const newStart = new Date(targetCol.date);
    newStart.setHours(Math.floor(this.moveState.currentMinutes / 60), this.moveState.currentMinutes % 60, 0, 0);
    const newEnd = new Date(newStart.getTime() + this.moveState.durationMinutes * 60 * 1e3);
    const movedEvent = this.moveState.event;
    this.ngZone.run(() => {
      this.eventMoved.emit({ event: movedEvent, newStart, newEnd });
      this.resetMove();
    });
  }
  cleanupMoveListeners() {
    if (this.boundOnMoveMouseMove) {
      document.removeEventListener("mousemove", this.boundOnMoveMouseMove);
      this.boundOnMoveMouseMove = null;
    }
    if (this.boundOnMoveMouseUp) {
      document.removeEventListener("mouseup", this.boundOnMoveMouseUp);
      this.boundOnMoveMouseUp = null;
    }
  }
  resetMove() {
    this.moveState = {
      active: false,
      event: null,
      originalStart: /* @__PURE__ */ new Date(),
      originalEnd: /* @__PURE__ */ new Date(),
      originColumnIndex: -1,
      currentColumnIndex: -1,
      startMinutes: 0,
      currentMinutes: 0,
      durationMinutes: 0,
      grabOffsetMinutes: 0
    };
    this.isMoving = false;
    this.cdr.markForCheck();
  }
  /** マウス位置からカラム (日付列) のインデックスを求める */
  getColumnIndexFromMouseEvent(e) {
    if (!this.timeGridRef)
      return -1;
    const gridEl = this.timeGridRef.nativeElement;
    const rect = gridEl.getBoundingClientRect();
    const gutter = 56;
    const xInGrid = e.clientX - rect.left - gutter;
    const contentWidth = rect.width - gutter;
    if (contentWidth <= 0 || xInGrid < 0)
      return -1;
    const ratio = xInGrid / contentWidth;
    const idx = Math.floor(ratio * this.columns.length);
    return Math.max(0, Math.min(this.columns.length - 1, idx));
  }
  /** 移動中のプレビュー表示用 */
  get movePreviewTop() {
    return this.moveState.currentMinutes / 60 * this.hourHeight;
  }
  get movePreviewHeight() {
    return this.moveState.durationMinutes / 60 * this.hourHeight;
  }
  get movePreviewTimeLabel() {
    const startMin = this.moveState.currentMinutes;
    const endMin = startMin + this.moveState.durationMinutes;
    return `${this.minutesToTimeString(startMin)} - ${this.minutesToTimeString(endMin)}`;
  }
  isMovingSourceBlock(pe) {
    return this.moveState.active && !!this.moveState.event && pe.event.id === this.moveState.event.id;
  }
  onTimeSlotClick(column, hour, isHalf, e) {
    if (this.dragStarted)
      return;
    this.timeSlotClicked.emit({
      date: column.date,
      hour,
      minute: isHalf ? 30 : 0
    });
  }
  formatHour(hour) {
    return `${hour}:00`;
  }
  currentTimeColumnIndex() {
    const now = /* @__PURE__ */ new Date();
    return this.columns.findIndex((c) => isSameDay(c.date, now));
  }
  trackByColumn(index, col) {
    return col.date.toISOString();
  }
  trackByEvent(index, pe) {
    return pe.event.id;
  }
  trackByHour(index, hour) {
    return hour;
  }
  // =============================================
  // Drag-to-create event handling
  // =============================================
  onGridMouseDown(event, columnIndex) {
    if (event.button !== 0)
      return;
    const target = event.target;
    if (target.closest(".week-view__event-block"))
      return;
    this.isDragging = true;
    this.dragStarted = false;
    this.mouseDownY = event.clientY;
    const minutes = this.getMinutesFromMouseEvent(event);
    const snappedMinutes = this.snapTo15Min(minutes);
    this.dragState = {
      active: false,
      columnIndex,
      startMinutes: snappedMinutes,
      currentMinutes: snappedMinutes
    };
    this.ngZone.runOutsideAngular(() => {
      this.boundOnMouseMove = this.onDocumentMouseMove.bind(this);
      this.boundOnMouseUp = this.onDocumentMouseUp.bind(this);
      document.addEventListener("mousemove", this.boundOnMouseMove);
      document.addEventListener("mouseup", this.boundOnMouseUp);
    });
    event.preventDefault();
  }
  onDocumentMouseMove(event) {
    if (!this.isDragging)
      return;
    if (!this.dragStarted) {
      const dy = Math.abs(event.clientY - this.mouseDownY);
      if (dy < this.DRAG_THRESHOLD)
        return;
      this.dragStarted = true;
      this.dragState.active = true;
    }
    const minutes = this.getMinutesFromMouseEvent(event);
    const snappedMinutes = this.snapTo15Min(minutes);
    this.dragState.currentMinutes = snappedMinutes;
    this.ngZone.run(() => {
      this.cdr.markForCheck();
    });
  }
  onDocumentMouseUp(event) {
    this.cleanupDragListeners();
    if (!this.isDragging)
      return;
    this.isDragging = false;
    if (!this.dragStarted || !this.dragState.active) {
      this.dragState.active = false;
      this.dragStarted = false;
      this.ngZone.run(() => {
        this.cdr.markForCheck();
      });
      return;
    }
    const col = this.columns[this.dragState.columnIndex];
    if (!col) {
      this.resetDrag();
      return;
    }
    let startMin = Math.min(this.dragState.startMinutes, this.dragState.currentMinutes);
    let endMin = Math.max(this.dragState.startMinutes, this.dragState.currentMinutes);
    if (endMin - startMin < 15) {
      endMin = startMin + 15;
    }
    startMin = Math.max(0, Math.min(startMin, 1440 - 15));
    endMin = Math.max(15, Math.min(endMin, 1440));
    const startTime = this.minutesToTimeString(startMin);
    const endTime = this.minutesToTimeString(endMin);
    this.ngZone.run(() => {
      this.timeSlotDragged.emit({
        date: col.date,
        startTime,
        endTime
      });
      this.resetDrag();
    });
  }
  cleanupDragListeners() {
    if (this.boundOnMouseMove) {
      document.removeEventListener("mousemove", this.boundOnMouseMove);
      this.boundOnMouseMove = null;
    }
    if (this.boundOnMouseUp) {
      document.removeEventListener("mouseup", this.boundOnMouseUp);
      this.boundOnMouseUp = null;
    }
  }
  resetDrag() {
    this.dragState = {
      active: false,
      columnIndex: -1,
      startMinutes: 0,
      currentMinutes: 0
    };
    this.isDragging = false;
    this.dragStarted = false;
    this.cdr.markForCheck();
  }
  getMinutesFromMouseEvent(event) {
    if (!this.timeGridRef)
      return 0;
    const gridEl = this.timeGridRef.nativeElement;
    const rect = gridEl.getBoundingClientRect();
    const scrollTop = gridEl.scrollTop;
    const yInGrid = event.clientY - rect.top + scrollTop;
    const minutes = yInGrid / this.hourHeight * 60;
    return Math.max(0, Math.min(minutes, 1440));
  }
  snapTo15Min(minutes) {
    return Math.round(minutes / 15) * 15;
  }
  minutesToTimeString(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }
  // Computed properties for the drag preview
  get dragPreviewTop() {
    const startMin = Math.min(this.dragState.startMinutes, this.dragState.currentMinutes);
    return startMin / 60 * this.hourHeight;
  }
  get dragPreviewHeight() {
    const startMin = Math.min(this.dragState.startMinutes, this.dragState.currentMinutes);
    const endMin = Math.max(this.dragState.startMinutes, this.dragState.currentMinutes);
    const diff = Math.max(endMin - startMin, 15);
    return diff / 60 * this.hourHeight;
  }
  get dragPreviewTimeLabel() {
    const startMin = Math.min(this.dragState.startMinutes, this.dragState.currentMinutes);
    let endMin = Math.max(this.dragState.startMinutes, this.dragState.currentMinutes);
    if (endMin - startMin < 15) {
      endMin = startMin + 15;
    }
    return `${this.minutesToTimeString(startMin)} - ${this.minutesToTimeString(endMin)}`;
  }
  static {
    this.\u0275fac = function CalendarWeekViewComponent_Factory(t) {
      return new (t || _CalendarWeekViewComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarWeekViewComponent, selectors: [["app-calendar-week-view"]], viewQuery: function CalendarWeekViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.timeGridRef = _t.first);
      }
    }, inputs: { currentDate: "currentDate", events: "events", visibleCalendarIds: "visibleCalendarIds", calendars: "calendars", viewType: "viewType" }, outputs: { eventClicked: "eventClicked", timeSlotClicked: "timeSlotClicked", eventMoved: "eventMoved", eventResized: "eventResized", timeSlotDragged: "timeSlotDragged" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 14, vars: 8, consts: [["timeGrid", ""], [1, "week-view"], [1, "week-view__header"], [1, "week-view__gutter-header"], ["class", "week-view__col-header", 3, "week-view__col-header--today", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "week-view__allday-row", 4, "ngIf"], [1, "week-view__body"], [1, "week-view__time-grid"], [1, "week-view__hours"], ["class", "week-view__hour-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "week-view__events-overlay"], [1, "week-view__events-gutter"], ["class", "week-view__events-col", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "week-view__current-time", 3, "top", 4, "ngIf"], [1, "week-view__col-header"], [1, "week-view__col-date"], [1, "week-view__col-date-num"], [1, "week-view__col-dow"], [1, "week-view__allday-row"], [1, "week-view__gutter", "week-view__gutter--allday"], ["class", "week-view__allday-cell", 3, "week-view__allday-cell--today", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "week-view__allday-cell"], ["class", "week-view__allday-event", 3, "background-color", "title", "click", 4, "ngFor", "ngForOf"], [1, "week-view__allday-event", 3, "click", "title"], [1, "week-view__hour-row"], [1, "week-view__gutter"], [1, "week-view__hour-label"], [1, "week-view__hour-cells"], ["class", "week-view__hour-cell", 3, "week-view__hour-cell--today", "mousedown", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "week-view__hour-cell", 3, "mousedown"], [1, "week-view__half-hour", "week-view__half-hour--top", 3, "click"], [1, "week-view__half-hour", "week-view__half-hour--bottom", 3, "click"], [1, "week-view__events-col"], ["class", "week-view__event-block", 3, "week-view__event-block--moving", "top", "height", "left", "width", "background-color", "title", "mousedown", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "week-view__drag-preview", 3, "top", "height", 4, "ngIf"], ["class", "week-view__move-preview", 3, "top", "height", 4, "ngIf"], [1, "week-view__event-block", 3, "mousedown", "click", "title"], [1, "week-view__event-title"], ["class", "week-view__event-time", 4, "ngIf"], [1, "week-view__event-time"], [1, "week-view__drag-preview"], [1, "week-view__drag-preview-label"], [1, "week-view__move-preview"], [1, "week-view__move-preview-label"], [1, "week-view__current-time"], [1, "week-view__current-time-gutter"], ["class", "week-view__current-time-segment", 3, "week-view__current-time-segment--active", 4, "ngFor", "ngForOf"], [1, "week-view__current-time-segment"], ["class", "week-view__current-time-dot", 4, "ngIf"], ["class", "week-view__current-time-line", 4, "ngIf"], [1, "week-view__current-time-dot"], [1, "week-view__current-time-line"]], template: function CalendarWeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275element(2, "div", 3);
        \u0275\u0275template(3, CalendarWeekViewComponent_div_3_Template, 6, 6, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, CalendarWeekViewComponent_div_4_Template, 4, 2, "div", 5);
        \u0275\u0275elementStart(5, "div", 6, 0)(7, "div", 7)(8, "div", 8);
        \u0275\u0275template(9, CalendarWeekViewComponent_div_9_Template, 6, 3, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 10);
        \u0275\u0275element(11, "div", 11);
        \u0275\u0275template(12, CalendarWeekViewComponent_div_12_Template, 4, 4, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, CalendarWeekViewComponent_div_13_Template, 3, 3, "div", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByColumn);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasAllDayEvents);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.hours)("ngForTrackBy", ctx.trackByHour);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByColumn);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentTimeVisible);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.week-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 100vw;\n  overflow: hidden;\n  overflow-x: hidden;\n  box-sizing: border-box;\n}\n.week-view[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .week-view[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, .week-view[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n.week-view__header[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n}\n.week-view__gutter-header[_ngcontent-%COMP%] {\n  width: 56px;\n  min-width: 56px;\n  flex-shrink: 0;\n  border-right: 1px solid #e0e0e0;\n}\n.week-view__col-header[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  padding: 6px 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.week-view__col-header--today[_ngcontent-%COMP%]   .week-view__col-dow[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.week-view__col-dow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #70757a;\n  font-weight: 600;\n}\n.week-view__col-date[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 14px;\n  color: #3c4043;\n  line-height: 1.2;\n  font-weight: 500;\n}\n.week-view__col-date--today[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: #fff;\n}\n.week-view__col-date--today[_ngcontent-%COMP%]   .week-view__col-dow[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.week-view__col-date-num[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n}\n.week-view__allday-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n  min-height: 28px;\n  flex-shrink: 0;\n}\n.week-view__gutter[_ngcontent-%COMP%] {\n  width: 56px;\n  min-width: 56px;\n  flex-shrink: 0;\n  border-right: 1px solid #e0e0e0;\n  position: relative;\n  box-sizing: border-box;\n}\n.week-view__gutter--allday[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  color: #70757a;\n}\n.week-view__allday-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2px 4px;\n  border-right: 1px solid #e0e0e0;\n  min-height: 24px;\n}\n.week-view__allday-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.week-view__allday-cell--today[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n}\n.week-view__allday-event[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #fff;\n  padding: 1px 6px;\n  border-radius: 3px;\n  cursor: pointer;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 1px;\n  transition: all 0.15s ease;\n}\n.week-view__allday-event[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.9);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  transform: translateY(-1px);\n}\n.week-view__body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  position: relative;\n}\n.week-view__time-grid[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: calc(48px * 24);\n}\n.week-view__hours[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 7px;\n}\n.week-view__hour-row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 48px;\n  position: relative;\n}\n.week-view__hour-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -7px;\n  right: 8px;\n  font-size: 10px;\n  color: #70757a;\n  white-space: nowrap;\n}\n.week-view__hour-row[_ngcontent-%COMP%]:first-child   .week-view__hour-label[_ngcontent-%COMP%] {\n  top: 2px;\n}\n.week-view__hour-cells[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n.week-view__hour-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  border-right: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n  position: relative;\n}\n.week-view__hour-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.week-view__hour-cell--today[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n}\n.week-view__half-hour[_ngcontent-%COMP%] {\n  height: 50%;\n  cursor: pointer;\n}\n.week-view__half-hour[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 152, 0, 0.05);\n}\n.week-view__half-hour--top[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #ececec;\n}\n.week-view__events-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  pointer-events: none;\n}\n.week-view__events-gutter[_ngcontent-%COMP%] {\n  width: 56px;\n  min-width: 56px;\n}\n.week-view__events-col[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.week-view__event-block[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 4px;\n  padding: 2px 6px;\n  color: #fff;\n  font-size: 11px;\n  cursor: grab;\n  overflow: hidden;\n  pointer-events: auto;\n  box-sizing: border-box;\n  border-left: 3px solid rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  transition: all 0.15s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.week-view__event-block[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.9);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  transform: translateY(-1px);\n  z-index: 2;\n}\n.week-view__event-block[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.week-view__event-block--moving[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: grabbing;\n}\n.week-view__event-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.3;\n}\n.week-view__event-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.9;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.week-view__drag-preview[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 2%;\n  background-color: rgba(255, 152, 0, 0.35);\n  border: 2px solid rgba(255, 152, 0, 0.7);\n  border-radius: 4px;\n  border-left: 3px solid #ff9800;\n  z-index: 5;\n  pointer-events: none;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  padding: 2px 6px;\n  min-height: 12px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.week-view__drag-preview-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #e65100;\n  white-space: nowrap;\n  line-height: 1.3;\n}\n.week-view__move-preview[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 2%;\n  background-color: rgba(25, 118, 210, 0.22);\n  border: 2px dashed rgba(25, 118, 210, 0.7);\n  border-radius: 4px;\n  z-index: 6;\n  pointer-events: none;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  padding: 2px 6px;\n  min-height: 12px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.week-view__move-preview-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #0d47a1;\n  line-height: 1.25;\n}\n.week-view__current-time[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: flex;\n  z-index: 3;\n  pointer-events: none;\n}\n.week-view__current-time-gutter[_ngcontent-%COMP%] {\n  width: 56px;\n  min-width: 56px;\n}\n.week-view__current-time-segment[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  height: 0;\n}\n.week-view__current-time-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -5px;\n  top: -5px;\n  width: 10px;\n  height: 10px;\n  background-color: #ea4335;\n  border-radius: 50%;\n  z-index: 4;\n}\n.week-view__current-time-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 2px;\n  background-color: #ea4335;\n  z-index: 3;\n}\n@media (max-width: 767px) {\n  .week-view[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    overflow-x: hidden;\n    -webkit-overflow-scrolling: touch;\n  }\n  .week-view__gutter-header[_ngcontent-%COMP%], .week-view__gutter[_ngcontent-%COMP%] {\n    width: 36px !important;\n    min-width: 36px !important;\n  }\n  .week-view__col-header[_ngcontent-%COMP%] {\n    padding: 4px 0;\n    gap: 3px;\n    font-size: 11px;\n  }\n  .week-view__col-date-num[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .week-view__col-dow[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .week-view__hour-label[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .week-view__event-title[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .week-view__event-time[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=calendar-week-view.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarWeekViewComponent, { className: "CalendarWeekViewComponent", filePath: "src\\app\\features\\calendar\\components\\calendar-week-view\\calendar-week-view.component.ts", lineNumber: 82 });
})();

// src/app/features/calendar/components/calendar-day-view/calendar-day-view.component.ts
var _c03 = ["timeGrid"];
function CalendarDayViewComponent_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function CalendarDayViewComponent_div_8_div_4_Template_div_click_0_listener($event) {
      const evt_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEventClick(evt_r2, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r2.getEventColor(evt_r2));
    \u0275\u0275property("title", evt_r2.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", evt_r2.title, " ");
  }
}
function CalendarDayViewComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2, "\u7D42\u65E5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275template(4, CalendarDayViewComponent_div_8_div_4_Template, 2, 4, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("day-view__allday-cell--today", ctx_r2.dayIsToday);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.allDayEvents);
  }
}
function CalendarDayViewComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 25)(5, "div", 26);
    \u0275\u0275listener("click", function CalendarDayViewComponent_div_13_Template_div_click_5_listener() {
      const hour_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTimeSlotClick(hour_r5, false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275listener("click", function CalendarDayViewComponent_div_13_Template_div_click_6_listener() {
      const hour_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTimeSlotClick(hour_r5, true));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const hour_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatHour(hour_r5));
    \u0275\u0275advance();
    \u0275\u0275classProp("day-view__hour-cell--today", ctx_r2.dayIsToday);
  }
}
function CalendarDayViewComponent_div_17_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34)(1, "span", 35);
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pe_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", pe_r7.event.location, " ");
  }
}
function CalendarDayViewComponent_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, CalendarDayViewComponent_div_17_div_3_span_1_Template, 4, 1, "span", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pe_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pe_r7.event.location);
  }
}
function CalendarDayViewComponent_div_17_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const initial_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(initial_r8);
  }
}
function CalendarDayViewComponent_div_17_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pe_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", pe_r7.event.guests.length - 3, " ");
  }
}
function CalendarDayViewComponent_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, CalendarDayViewComponent_div_17_div_4_span_1_Template, 2, 1, "span", 37)(2, CalendarDayViewComponent_div_17_div_4_span_2_Template, 2, 1, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pe_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getGuestInitials(pe_r7.event));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pe_r7.event.guests.length > 3);
  }
}
function CalendarDayViewComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function CalendarDayViewComponent_div_17_Template_div_click_0_listener($event) {
      const pe_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEventClick(pe_r7.event, $event));
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CalendarDayViewComponent_div_17_div_3_Template, 2, 1, "div", 30)(4, CalendarDayViewComponent_div_17_div_4_Template, 3, 2, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pe_r7 = ctx.$implicit;
    \u0275\u0275styleProp("top", pe_r7.top, "px")("height", pe_r7.height, "px")("left", pe_r7.left, "%")("width", pe_r7.width - 1, "%")("background-color", pe_r7.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pe_r7.event.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pe_r7.height > 40);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pe_r7.height > 56 && pe_r7.event.guests.length > 0);
  }
}
function CalendarDayViewComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "div", 42);
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275element(3, "div", 44)(4, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r2.currentTimeTop, "px");
  }
}
var CalendarDayViewComponent = class _CalendarDayViewComponent {
  constructor() {
    this.events = [];
    this.visibleCalendarIds = [];
    this.calendars = [];
    this.eventClicked = new EventEmitter();
    this.timeSlotClicked = new EventEmitter();
    this.hours = [];
    this.allDayEvents = [];
    this.timedEvents = [];
    this.currentTimeTop = 0;
    this.currentTimeVisible = false;
    this.dayLabel = "";
    this.dayOfWeek = "";
    this.dayIsToday = false;
    this.timerInterval = null;
    this.hourHeight = 60;
  }
  ngOnInit() {
    this.hours = [];
    for (let h = 0; h < 24; h++) {
      this.hours.push(h);
    }
    this.updateCurrentTime();
    this.timerInterval = setInterval(() => this.updateCurrentTime(), 6e4);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.timeGridRef) {
        this.timeGridRef.nativeElement.scrollTop = 7 * this.hourHeight;
      }
    }, 0);
  }
  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  ngOnChanges(changes) {
    this.buildDay();
    this.updateCurrentTime();
  }
  updateCurrentTime() {
    const now = /* @__PURE__ */ new Date();
    const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
    this.currentTimeTop = minutesSinceMidnight / 60 * this.hourHeight;
    this.currentTimeVisible = isSameDay(this.currentDate, now);
  }
  buildDay() {
    if (!this.currentDate)
      return;
    this.dayLabel = format(this.currentDate, "d", { locale: ja });
    this.dayOfWeek = format(this.currentDate, "EEEE", { locale: ja });
    this.dayIsToday = isToday(this.currentDate);
    const dayStart = startOfDay(this.currentDate);
    const dayEnd = endOfDay(this.currentDate);
    const filtered = this.events.filter((e) => this.visibleCalendarIds.includes(e.calendarId) && areIntervalsOverlapping({ start: e.start, end: e.end }, { start: dayStart, end: dayEnd }));
    this.allDayEvents = filtered.filter((e) => e.allDay);
    const timed = filtered.filter((e) => !e.allDay);
    this.timedEvents = this.positionEvents(timed);
  }
  positionEvents(events) {
    if (events.length === 0)
      return [];
    const sorted = [...events].sort((a, b) => a.start.getTime() - b.start.getTime());
    const positioned = [];
    const groups = [];
    let currentGroup = [];
    let groupEnd = null;
    for (const evt of sorted) {
      if (groupEnd && evt.start >= groupEnd) {
        if (currentGroup.length > 0)
          groups.push(currentGroup);
        currentGroup = [];
        groupEnd = null;
      }
      currentGroup.push(evt);
      if (!groupEnd || evt.end > groupEnd) {
        groupEnd = evt.end;
      }
    }
    if (currentGroup.length > 0)
      groups.push(currentGroup);
    for (const group of groups) {
      const numColumns = group.length;
      group.forEach((evt, colIndex) => {
        const startMin = this.getMinutes(evt, true);
        const endMin = this.getMinutes(evt, false);
        const dur = Math.max(endMin - startMin, 15);
        const top = startMin / 60 * this.hourHeight;
        const height = dur / 60 * this.hourHeight;
        positioned.push({
          event: evt,
          top,
          height: Math.max(height, 24),
          left: colIndex / numColumns * 100,
          width: 1 / numColumns * 100,
          color: this.getEventColor(evt)
        });
      });
    }
    return positioned;
  }
  getMinutes(event, isStart2) {
    const d = isStart2 ? event.start : event.end;
    if (isSameDay(d, this.currentDate)) {
      return d.getHours() * 60 + d.getMinutes();
    }
    return isStart2 ? 0 : 24 * 60;
  }
  getEventColor(event) {
    if (event.color)
      return event.color;
    const cal = this.calendars.find((c) => c.id === event.calendarId);
    return cal?.color || "#1976d2";
  }
  onEventClick(evt, e) {
    e.stopPropagation();
    this.eventClicked.emit(evt);
  }
  onTimeSlotClick(hour, isHalf) {
    this.timeSlotClicked.emit({
      date: this.currentDate,
      hour,
      minute: isHalf ? 30 : 0
    });
  }
  formatHour(hour) {
    return `${hour}:00`;
  }
  getGuestInitials(evt) {
    return evt.guests.slice(0, 3).map((g) => {
      const name = g.displayName || g.email;
      return name.charAt(0);
    });
  }
  trackByHour(index, hour) {
    return hour;
  }
  trackByEvent(index, pe) {
    return pe.event.id;
  }
  static {
    this.\u0275fac = function CalendarDayViewComponent_Factory(t) {
      return new (t || _CalendarDayViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarDayViewComponent, selectors: [["app-calendar-day-view"]], viewQuery: function CalendarDayViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.timeGridRef = _t.first);
      }
    }, inputs: { currentDate: "currentDate", events: "events", visibleCalendarIds: "visibleCalendarIds", calendars: "calendars" }, outputs: { eventClicked: "eventClicked", timeSlotClicked: "timeSlotClicked" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 19, vars: 12, consts: [["timeGrid", ""], [1, "day-view"], [1, "day-view__header"], [1, "day-view__gutter-header"], [1, "day-view__col-header"], [1, "day-view__col-dow"], [1, "day-view__col-date"], ["class", "day-view__allday-row", 4, "ngIf"], [1, "day-view__body"], [1, "day-view__time-grid"], [1, "day-view__hours"], ["class", "day-view__hour-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "day-view__events-overlay"], [1, "day-view__events-gutter"], [1, "day-view__events-col"], ["class", "day-view__event-block", 3, "top", "height", "left", "width", "background-color", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "day-view__current-time", 3, "top", 4, "ngIf"], [1, "day-view__allday-row"], [1, "day-view__gutter", "day-view__gutter--allday"], [1, "day-view__allday-cell"], ["class", "day-view__allday-event", 3, "background-color", "title", "click", 4, "ngFor", "ngForOf"], [1, "day-view__allday-event", 3, "click", "title"], [1, "day-view__hour-row"], [1, "day-view__gutter"], [1, "day-view__hour-label"], [1, "day-view__hour-cell"], [1, "day-view__half-hour", "day-view__half-hour--top", 3, "click"], [1, "day-view__half-hour", "day-view__half-hour--bottom", 3, "click"], [1, "day-view__event-block", 3, "click"], [1, "day-view__event-title"], ["class", "day-view__event-details", 4, "ngIf"], ["class", "day-view__event-guests", 4, "ngIf"], [1, "day-view__event-details"], ["class", "day-view__event-location", 4, "ngIf"], [1, "day-view__event-location"], [1, "day-view__event-icon"], [1, "day-view__event-guests"], ["class", "day-view__guest-avatar", 4, "ngFor", "ngForOf"], ["class", "day-view__guest-more", 4, "ngIf"], [1, "day-view__guest-avatar"], [1, "day-view__guest-more"], [1, "day-view__current-time"], [1, "day-view__current-time-gutter"], [1, "day-view__current-time-main"], [1, "day-view__current-time-dot"], [1, "day-view__current-time-line"]], template: function CalendarDayViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275element(2, "div", 3);
        \u0275\u0275elementStart(3, "div", 4)(4, "span", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(8, CalendarDayViewComponent_div_8_Template, 5, 3, "div", 7);
        \u0275\u0275elementStart(9, "div", 8, 0)(11, "div", 9)(12, "div", 10);
        \u0275\u0275template(13, CalendarDayViewComponent_div_13_Template, 7, 3, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12);
        \u0275\u0275element(15, "div", 13);
        \u0275\u0275elementStart(16, "div", 14);
        \u0275\u0275template(17, CalendarDayViewComponent_div_17_Template, 5, 13, "div", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, CalendarDayViewComponent_div_18_Template, 5, 2, "div", 16);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275classProp("day-view__col-header--today", ctx.dayIsToday);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.dayOfWeek);
        \u0275\u0275advance();
        \u0275\u0275classProp("day-view__col-date--today", ctx.dayIsToday);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.dayLabel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.allDayEvents.length > 0);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.hours)("ngForTrackBy", ctx.trackByHour);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.timedEvents)("ngForTrackBy", ctx.trackByEvent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentTimeVisible);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.day-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 100vw;\n  overflow: hidden;\n  overflow-x: hidden;\n  box-sizing: border-box;\n}\n.day-view[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .day-view[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, .day-view[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n.day-view__header[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n  flex-shrink: 0;\n}\n.day-view__gutter-header[_ngcontent-%COMP%] {\n  width: 56px;\n  min-width: 56px;\n  flex-shrink: 0;\n  border-right: 1px solid #e0e0e0;\n}\n.day-view__col-header[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  padding: 8px 0 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.day-view__col-header--today[_ngcontent-%COMP%]   .day-view__col-dow[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.day-view__col-dow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #70757a;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.day-view__col-date[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #3c4043;\n  line-height: 1.2;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.day-view__col-date--today[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: #fff;\n  font-weight: 500;\n}\n.day-view__allday-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n  min-height: 28px;\n  flex-shrink: 0;\n}\n.day-view__gutter[_ngcontent-%COMP%] {\n  width: 56px;\n  min-width: 56px;\n  flex-shrink: 0;\n  border-right: 1px solid #e0e0e0;\n  position: relative;\n  box-sizing: border-box;\n}\n.day-view__gutter--allday[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  color: #70757a;\n}\n.day-view__allday-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2px 8px;\n}\n.day-view__allday-cell--today[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n}\n.day-view__allday-event[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #fff;\n  padding: 2px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-bottom: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.day-view__allday-event[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.9);\n}\n.day-view__body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  position: relative;\n}\n.day-view__time-grid[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: calc(60px * 24);\n}\n.day-view__hours[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 7px;\n}\n.day-view__hour-row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  position: relative;\n}\n.day-view__hour-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -7px;\n  right: 8px;\n  font-size: 10px;\n  color: #70757a;\n  white-space: nowrap;\n}\n.day-view__hour-row[_ngcontent-%COMP%]:first-child   .day-view__hour-label[_ngcontent-%COMP%] {\n  top: 2px;\n}\n.day-view__hour-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  border-bottom: 1px solid #e0e0e0;\n  position: relative;\n}\n.day-view__hour-cell--today[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n}\n.day-view__half-hour[_ngcontent-%COMP%] {\n  height: 50%;\n  cursor: pointer;\n}\n.day-view__half-hour[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 152, 0, 0.05);\n}\n.day-view__half-hour--top[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #ececec;\n}\n.day-view__events-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  pointer-events: none;\n}\n.day-view__events-gutter[_ngcontent-%COMP%] {\n  width: 56px;\n  min-width: 56px;\n}\n.day-view__events-col[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  padding: 0 8px;\n}\n.day-view__event-block[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 6px;\n  padding: 4px 8px;\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  overflow: hidden;\n  pointer-events: auto;\n  box-sizing: border-box;\n  border-left: 4px solid rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  transition: filter 0.15s;\n}\n.day-view__event-block[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.9);\n  z-index: 2;\n}\n.day-view__event-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.3;\n}\n.day-view__event-details[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.day-view__event-location[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.9;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.day-view__event-icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.day-view__event-guests[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-top: 4px;\n}\n.day-view__guest-avatar[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  color: #fff;\n}\n.day-view__guest-more[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.8;\n  margin-left: 2px;\n}\n.day-view__current-time[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: flex;\n  z-index: 3;\n  pointer-events: none;\n}\n.day-view__current-time-gutter[_ngcontent-%COMP%] {\n  width: 56px;\n  min-width: 56px;\n}\n.day-view__current-time-main[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  height: 0;\n}\n.day-view__current-time-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -5px;\n  top: -5px;\n  width: 10px;\n  height: 10px;\n  background-color: #ea4335;\n  border-radius: 50%;\n  z-index: 4;\n}\n.day-view__current-time-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 2px;\n  background-color: #ea4335;\n  z-index: 3;\n}\n/*# sourceMappingURL=calendar-day-view.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarDayViewComponent, { className: "CalendarDayViewComponent", filePath: "src\\app\\features\\calendar\\components\\calendar-day-view\\calendar-day-view.component.ts", lineNumber: 45 });
})();

// src/app/features/calendar/components/event-detail/event-detail.component.ts
function EventDetailComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.recurrenceDisplay, " ");
  }
}
function EventDetailComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 11);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.event.location);
  }
}
function EventDetailComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 11);
    \u0275\u0275text(2, "videocam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 29);
    \u0275\u0275text(4, " \u30D3\u30C7\u30AA\u4F1A\u8B70\u306B\u53C2\u52A0 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.event.videoConferenceUrl, \u0275\u0275sanitizeUrl);
  }
}
function EventDetailComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "mat-icon", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const guest_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getResponseColor(guest_r3.responseStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getResponseIcon(guest_r3.responseStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(guest_r3.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", guest_r3.email, ")");
  }
}
function EventDetailComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.inviteError, " ");
  }
}
function EventDetailComponent_div_42_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function EventDetailComponent_div_42_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDescription());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showFullDescription ? "\u6298\u308A\u305F\u305F\u3080" : "\u3082\u3063\u3068\u898B\u308B", " ");
  }
}
function EventDetailComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 11);
    \u0275\u0275text(2, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "p", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, EventDetailComponent_div_42_button_6_Template, 2, 1, "button", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.truncatedDescription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasMoreDescription);
  }
}
function EventDetailComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 39);
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4, "\u30B9\u30B1\u30B3\u30F3\u3067\u8ABF\u6574\u6E08\u307F");
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2, "\u51FA\u6B20:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "button", 44);
    \u0275\u0275listener("click", function EventDetailComponent_div_44_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRespond("accepted"));
    });
    \u0275\u0275text(5, " \u306F\u3044 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 45);
    \u0275\u0275listener("click", function EventDetailComponent_div_44_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRespond("tentative"));
    });
    \u0275\u0275text(7, " \u672A\u5B9A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 46);
    \u0275\u0275listener("click", function EventDetailComponent_div_44_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRespond("declined"));
    });
    \u0275\u0275text(9, " \u3044\u3044\u3048 ");
    \u0275\u0275elementEnd()()();
  }
}
var EventDetailComponent = class _EventDetailComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.editClicked = new EventEmitter();
    this.deleteClicked = new EventEmitter();
    this.duplicateClicked = new EventEmitter();
    this.responseChanged = new EventEmitter();
    this.guestsInvited = new EventEmitter();
    this.closed = new EventEmitter();
    this.showFullDescription = false;
    this.inviteEmailInput = "";
    this.inviteError = "";
  }
  ngOnInit() {
  }
  get eventColor() {
    return this.calendar?.color || this.event.color || "#1976d2";
  }
  get dateTimeDisplay() {
    if (this.event.allDay) {
      const startStr = format(this.event.start, "M\u6708d\u65E5 (EEEE)", { locale: ja });
      if (this.event.end.getTime() - this.event.start.getTime() > 864e5) {
        const endStr = format(new Date(this.event.end.getTime() - 864e5), "M\u6708d\u65E5 (EEEE)", { locale: ja });
        return `${startStr} - ${endStr} (\u7D42\u65E5)`;
      }
      return `${startStr} (\u7D42\u65E5)`;
    }
    const startDate = format(this.event.start, "M\u6708d\u65E5 (EEEE)", { locale: ja });
    const startTime = format(this.event.start, "H:mm");
    const endTime = format(this.event.end, "H:mm");
    return `${startDate} ${startTime} - ${endTime}`;
  }
  get recurrenceDisplay() {
    if (!this.event.recurrence)
      return "";
    const r = this.event.recurrence;
    switch (r.frequency) {
      case "daily":
        return r.interval === 1 ? "\u6BCE\u65E5" : `${r.interval}\u65E5\u3054\u3068`;
      case "weekly": {
        const dayMap = {
          MO: "\u6708",
          TU: "\u706B",
          WE: "\u6C34",
          TH: "\u6728",
          FR: "\u91D1",
          SA: "\u571F",
          SU: "\u65E5"
        };
        const days = r.byDay?.map((d) => dayMap[d] || d).join("\u3001") || "";
        return r.interval === 1 ? `\u6BCE\u9031 ${days}` : `${r.interval}\u9031\u9593\u3054\u3068 ${days}`;
      }
      case "monthly":
        return r.interval === 1 ? "\u6BCE\u6708" : `${r.interval}\u30F6\u6708\u3054\u3068`;
      case "yearly":
        return "\u6BCE\u5E74";
      default:
        return "";
    }
  }
  get truncatedDescription() {
    if (!this.event.description)
      return "";
    if (this.showFullDescription)
      return this.event.description;
    const lines = this.event.description.split("\n");
    if (lines.length <= 3 && this.event.description.length <= 150) {
      return this.event.description;
    }
    return lines.slice(0, 3).join("\n").substring(0, 150) + "...";
  }
  get hasMoreDescription() {
    if (!this.event.description)
      return false;
    const lines = this.event.description.split("\n");
    return lines.length > 3 || this.event.description.length > 150;
  }
  getResponseIcon(status) {
    switch (status) {
      case "accepted":
        return "check_circle";
      case "declined":
        return "cancel";
      case "tentative":
        return "help";
      case "needsAction":
        return "radio_button_unchecked";
    }
  }
  getResponseColor(status) {
    switch (status) {
      case "accepted":
        return "#4caf50";
      case "declined":
        return "#f44336";
      case "tentative":
        return "#ff9800";
      case "needsAction":
        return "#9e9e9e";
    }
  }
  onEdit() {
    this.editClicked.emit(this.event);
  }
  onDelete() {
    this.deleteClicked.emit(this.event);
  }
  onClose() {
    this.closed.emit();
  }
  onRespond(response) {
    this.responseChanged.emit({ event: this.event, response });
  }
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
  onNotifyByEmail() {
  }
  onDuplicate() {
    this.duplicateClicked.emit(this.event);
  }
  /** メール招待 送信 (ユーザー指示 2026-04-21) */
  onInvite(inputEl) {
    const raw = (this.inviteEmailInput || "").trim();
    if (!raw) {
      this.inviteError = "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044";
      return;
    }
    const emails = raw.split(/[,、\s]+/).map((s) => s.trim()).filter((s) => s.length > 0);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalid = emails.filter((e) => !emailRegex.test(e));
    if (invalid.length > 0) {
      this.inviteError = `\u4E0D\u6B63\u306A\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9: ${invalid.join(", ")}`;
      return;
    }
    const existing = new Set(this.event.guests.map((g) => g.email.toLowerCase()));
    const unique = emails.filter((e) => !existing.has(e.toLowerCase()));
    if (unique.length === 0) {
      this.inviteError = "\u65E2\u306B\u62DB\u5F85\u6E08\u307F\u3067\u3059";
      return;
    }
    this.inviteError = "";
    this.guestsInvited.emit({ event: this.event, emails: unique });
    this.inviteEmailInput = "";
    if (inputEl) {
      inputEl.value = "";
    }
    this.cdr.markForCheck();
  }
  static {
    this.\u0275fac = function EventDetailComponent_Factory(t) {
      return new (t || _EventDetailComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailComponent, selectors: [["app-event-detail"]], inputs: { event: "event", calendar: "calendar", anchorEl: "anchorEl" }, outputs: { editClicked: "editClicked", deleteClicked: "deleteClicked", duplicateClicked: "duplicateClicked", responseChanged: "responseChanged", guestsInvited: "guestsInvited", closed: "closed" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 15, consts: [["inviteInput", ""], [1, "event-detail", 3, "click"], [1, "event-detail__header"], [1, "event-detail__color-dot"], [1, "event-detail__title"], [1, "event-detail__actions"], ["mat-icon-button", "", "matTooltip", "\u7DE8\u96C6", 3, "click"], ["mat-icon-button", "", "matTooltip", "\u8907\u88FD", 3, "click"], ["mat-icon-button", "", "matTooltip", "\u524A\u9664", 3, "click"], ["mat-icon-button", "", "matTooltip", "\u9589\u3058\u308B", 3, "click"], [1, "event-detail__row"], [1, "event-detail__icon"], [1, "event-detail__info"], [1, "event-detail__datetime"], ["class", "event-detail__recurrence", 4, "ngIf"], ["class", "event-detail__row", 4, "ngIf"], [1, "event-detail__row", "event-detail__row--guests"], [1, "event-detail__guests"], [1, "event-detail__guest-count"], ["class", "event-detail__guest", 4, "ngFor", "ngForOf"], [1, "event-detail__invite"], ["type", "email", "placeholder", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3067\u62DB\u5F85 (\u30AB\u30F3\u30DE\u533A\u5207\u308A\u53EF)", 1, "event-detail__invite-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "event-detail__invite-btn", 3, "click", "disabled"], ["class", "event-detail__invite-hint", 4, "ngIf"], ["class", "event-detail__rsvp", 4, "ngIf"], [1, "event-detail__footer"], [1, "event-detail__notify-btn", 3, "click"], [1, "event-detail__recurrence"], [1, "event-detail__location"], ["target", "_blank", "rel", "noopener", 1, "event-detail__video-link", 3, "href"], [1, "event-detail__guest"], [1, "event-detail__guest-status"], [1, "event-detail__guest-name"], [1, "event-detail__guest-email"], [1, "event-detail__invite-hint"], [1, "event-detail__description-wrapper"], [1, "event-detail__description"], ["class", "event-detail__more-btn", 3, "click", 4, "ngIf"], [1, "event-detail__more-btn", 3, "click"], [1, "event-detail__icon", 2, "color", "#4caf50"], [1, "event-detail__schecon-badge"], [1, "event-detail__rsvp"], [1, "event-detail__rsvp-label"], [1, "event-detail__rsvp-buttons"], [1, "event-detail__rsvp-btn", "event-detail__rsvp-btn--accept", 3, "click"], [1, "event-detail__rsvp-btn", "event-detail__rsvp-btn--tentative", 3, "click"], [1, "event-detail__rsvp-btn", "event-detail__rsvp-btn--decline", 3, "click"]], template: function EventDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("click", function EventDetailComponent_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275element(2, "span", 3);
        \u0275\u0275elementStart(3, "h3", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
        \u0275\u0275listener("click", function EventDetailComponent_Template_button_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onEdit());
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 7);
        \u0275\u0275listener("click", function EventDetailComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDuplicate());
        });
        \u0275\u0275elementStart(10, "mat-icon");
        \u0275\u0275text(11, "content_copy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function EventDetailComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDelete());
        });
        \u0275\u0275elementStart(13, "mat-icon");
        \u0275\u0275text(14, "delete");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "button", 9);
        \u0275\u0275listener("click", function EventDetailComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClose());
        });
        \u0275\u0275elementStart(16, "mat-icon");
        \u0275\u0275text(17, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 10)(19, "mat-icon", 11);
        \u0275\u0275text(20, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 12)(22, "span", 13);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, EventDetailComponent_span_24_Template, 2, 1, "span", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, EventDetailComponent_div_25_Template, 5, 1, "div", 15)(26, EventDetailComponent_div_26_Template, 5, 1, "div", 15);
        \u0275\u0275elementStart(27, "div", 16)(28, "mat-icon", 11);
        \u0275\u0275text(29, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 17)(31, "div", 18);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, EventDetailComponent_div_33_Template, 7, 5, "div", 19);
        \u0275\u0275elementStart(34, "div", 20)(35, "input", 21, 0);
        \u0275\u0275twoWayListener("ngModelChange", function EventDetailComponent_Template_input_ngModelChange_35_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.inviteEmailInput, $event) || (ctx.inviteEmailInput = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("keyup.enter", function EventDetailComponent_Template_input_keyup_enter_35_listener() {
          \u0275\u0275restoreView(_r1);
          const inviteInput_r4 = \u0275\u0275reference(36);
          return \u0275\u0275resetView(ctx.onInvite(inviteInput_r4));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 22);
        \u0275\u0275listener("click", function EventDetailComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          const inviteInput_r4 = \u0275\u0275reference(36);
          return \u0275\u0275resetView(ctx.onInvite(inviteInput_r4));
        });
        \u0275\u0275elementStart(38, "mat-icon");
        \u0275\u0275text(39, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " \u62DB\u5F85 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, EventDetailComponent_div_41_Template, 2, 1, "div", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(42, EventDetailComponent_div_42_Template, 7, 2, "div", 15)(43, EventDetailComponent_div_43_Template, 5, 0, "div", 15)(44, EventDetailComponent_div_44_Template, 10, 0, "div", 24);
        \u0275\u0275elementStart(45, "div", 25)(46, "button", 26);
        \u0275\u0275listener("click", function EventDetailComponent_Template_button_click_46_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onNotifyByEmail());
        });
        \u0275\u0275elementStart(47, "mat-icon");
        \u0275\u0275text(48, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, " \u30E1\u30FC\u30EB\u3067\u901A\u77E5 ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background-color", ctx.eventColor);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.event.title);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.dateTimeDisplay);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.recurrenceDisplay);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.location);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.videoConferenceUrl);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" \u30B2\u30B9\u30C8 ", ctx.event.guests.length, "\u4EBA ");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.event.guests);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.inviteEmailInput);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.inviteEmailInput.trim());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.inviteError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.description);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.scheconLinked);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.guests.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, MatButtonModule, MatIconButton, MatTooltipModule, MatTooltip], styles: ['@charset "UTF-8";\n\n\n\n.event-detail[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 380px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: 1000;\n  border-left: 3px solid var(--event-color, #1976d2);\n  animation: _ngcontent-%COMP%_eventDetailIn 0.15s ease-out;\n}\n.event-detail__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 16px 8px 8px 16px;\n  gap: 8px;\n}\n.event-detail__color-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 6px;\n}\n.event-detail__title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 18px;\n  font-weight: 400;\n  color: #3c4043;\n  margin: 0;\n  line-height: 1.4;\n  word-break: break-word;\n}\n.event-detail__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  flex-shrink: 0;\n}\n.event-detail__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n.event-detail__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #5f6368;\n}\n.event-detail__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 4px 16px;\n  gap: 12px;\n}\n.event-detail__row--guests[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.event-detail__icon[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.event-detail__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.event-detail__datetime[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #3c4043;\n}\n.event-detail__recurrence[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #70757a;\n  margin-top: 2px;\n}\n.event-detail__location[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #3c4043;\n}\n.event-detail__video-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1a73e8;\n  text-decoration: none;\n}\n.event-detail__video-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.event-detail__guests[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.event-detail__guest-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #3c4043;\n  font-weight: 500;\n  margin-bottom: 4px;\n}\n.event-detail__guest[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 2px 0;\n}\n.event-detail__guest-status[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n}\n.event-detail__guest-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3c4043;\n}\n.event-detail__guest-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #70757a;\n}\n.event-detail__description-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.event-detail__description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #3c4043;\n  margin: 0;\n  white-space: pre-line;\n  word-break: break-word;\n}\n.event-detail__more-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #1a73e8;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 2px 0;\n}\n.event-detail__more-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.event-detail__schecon-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4caf50;\n  font-weight: 500;\n  background-color: #e8f5e9;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.event-detail__rsvp[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-top: 1px solid #e0e0e0;\n  margin-top: 8px;\n}\n.event-detail__rsvp-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #5f6368;\n  flex-shrink: 0;\n}\n.event-detail__rsvp-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.event-detail__rsvp-btn[_ngcontent-%COMP%] {\n  border: 1px solid #dadce0;\n  background: #fff;\n  border-radius: 4px;\n  padding: 4px 12px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.event-detail__rsvp-btn--accept[_ngcontent-%COMP%]:hover {\n  background-color: #e8f5e9;\n  border-color: #4caf50;\n  color: #4caf50;\n}\n.event-detail__rsvp-btn--tentative[_ngcontent-%COMP%]:hover {\n  background-color: #fff3e0;\n  border-color: #ff9800;\n  color: #ff9800;\n}\n.event-detail__rsvp-btn--decline[_ngcontent-%COMP%]:hover {\n  background-color: #fbe9e7;\n  border-color: #f44336;\n  color: #f44336;\n}\n.event-detail__footer[_ngcontent-%COMP%] {\n  padding: 8px 16px 12px;\n}\n@keyframes _ngcontent-%COMP%_eventDetailIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.event-detail[_ngcontent-%COMP%] {\n}\n.event-detail__invite[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px dashed #e0e0e0;\n}\n.event-detail__invite-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-family: inherit;\n  font-size: 12px;\n  color: #3c4043;\n  padding: 6px 10px;\n  border: 1px solid #dadce0;\n  border-radius: 18px;\n  outline: none;\n  background: #fafafa;\n  transition:\n    border-color 0.15s,\n    box-shadow 0.15s,\n    background 0.15s;\n}\n.event-detail__invite-input[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #ff9800;\n  box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.15);\n}\n.event-detail__invite-input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa0a6;\n}\n.event-detail__invite-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 10px;\n  border: 1px solid #ff9800;\n  background: #fff3e0;\n  color: #e87f03;\n  border-radius: 18px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.15s, color 0.15s;\n  flex-shrink: 0;\n}\n.event-detail__invite-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.event-detail__invite-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ff9800;\n  color: #fff;\n}\n.event-detail__invite-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.event-detail__invite-hint[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 11px;\n  color: #f44336;\n}\n.event-detail__notify-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 1px solid #dadce0;\n  border-radius: 4px;\n  padding: 6px 12px;\n  font-size: 12px;\n  color: #5f6368;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.event-detail__notify-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.event-detail__notify-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f4;\n}\n/*# sourceMappingURL=event-detail.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailComponent, { className: "EventDetailComponent", filePath: "src\\app\\features\\calendar\\components\\event-detail\\event-detail.component.ts", lineNumber: 29 });
})();

// node_modules/@angular/material/fesm2022/datepicker.mjs
var _c04 = ["mat-calendar-body", ""];
function MatCalendarBody_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 0)(1, "td", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("colspan", ctx_r0.numCols);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
function MatCalendarBody_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("colspan", ctx_r0._firstRowOffset);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0._firstRowOffset >= ctx_r0.labelMinRequiredCells ? ctx_r0.label : "", " ");
  }
}
function MatCalendarBody_For_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 6)(1, "button", 7);
    \u0275\u0275listener("click", function MatCalendarBody_For_2_For_3_Template_button_click_1_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._cellClicked(item_r3, $event));
    })("focus", function MatCalendarBody_For_2_For_3_Template_button_focus_1_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._emitActiveDateChange(item_r3, $event));
    });
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const colIndex_r4 = ctx.$index;
    const rowIndex_r5 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r0._cellWidth)("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("data-mat-row", rowIndex_r5)("data-mat-col", colIndex_r4);
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-body-disabled", !item_r3.enabled)("mat-calendar-body-active", ctx_r0._isActiveCell(rowIndex_r5, colIndex_r4))("mat-calendar-body-range-start", ctx_r0._isRangeStart(item_r3.compareValue))("mat-calendar-body-range-end", ctx_r0._isRangeEnd(item_r3.compareValue))("mat-calendar-body-in-range", ctx_r0._isInRange(item_r3.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r0._isComparisonBridgeStart(item_r3.compareValue, rowIndex_r5, colIndex_r4))("mat-calendar-body-comparison-bridge-end", ctx_r0._isComparisonBridgeEnd(item_r3.compareValue, rowIndex_r5, colIndex_r4))("mat-calendar-body-comparison-start", ctx_r0._isComparisonStart(item_r3.compareValue))("mat-calendar-body-comparison-end", ctx_r0._isComparisonEnd(item_r3.compareValue))("mat-calendar-body-in-comparison-range", ctx_r0._isInComparisonRange(item_r3.compareValue))("mat-calendar-body-preview-start", ctx_r0._isPreviewStart(item_r3.compareValue))("mat-calendar-body-preview-end", ctx_r0._isPreviewEnd(item_r3.compareValue))("mat-calendar-body-in-preview", ctx_r0._isInPreview(item_r3.compareValue));
    \u0275\u0275property("ngClass", item_r3.cssClasses)("tabindex", ctx_r0._isActiveCell(rowIndex_r5, colIndex_r4) ? 0 : -1);
    \u0275\u0275attribute("aria-label", item_r3.ariaLabel)("aria-disabled", !item_r3.enabled || null)("aria-pressed", ctx_r0._isSelected(item_r3.compareValue))("aria-current", ctx_r0.todayValue === item_r3.compareValue ? "date" : null)("aria-describedby", ctx_r0._getDescribedby(item_r3.compareValue));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-body-selected", ctx_r0._isSelected(item_r3.compareValue))("mat-calendar-body-comparison-identical", ctx_r0._isComparisonIdentical(item_r3.compareValue))("mat-calendar-body-today", ctx_r0.todayValue === item_r3.compareValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.displayValue, " ");
  }
}
function MatCalendarBody_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 1);
    \u0275\u0275template(1, MatCalendarBody_For_2_Conditional_1_Template, 2, 6, "td", 4);
    \u0275\u0275repeaterCreate(2, MatCalendarBody_For_2_For_3_Template, 5, 48, "td", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const rowIndex_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, rowIndex_r5 === 0 && ctx_r0._firstRowOffset ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r6);
  }
}
function MatMonthView_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 2)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.long);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.narrow);
  }
}
var _c12 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) {
}
function MatCalendar_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-month-view", 2);
    \u0275\u0275twoWayListener("activeDateChange", function MatCalendar_Case_2_Template_mat_month_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("_userSelection", function MatCalendar_Case_2_Template_mat_month_view__userSelection_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dateSelected($event));
    })("dragStarted", function MatCalendar_Case_2_Template_mat_month_view_dragStarted_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dragStarted($event));
    })("dragEnded", function MatCalendar_Case_2_Template_mat_month_view_dragEnded_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dragEnded($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd)("startDateAccessibleName", ctx_r1.startDateAccessibleName)("endDateAccessibleName", ctx_r1.endDateAccessibleName)("activeDrag", ctx_r1._activeDrag);
  }
}
function MatCalendar_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-year-view", 3);
    \u0275\u0275twoWayListener("activeDateChange", function MatCalendar_Case_3_Template_mat_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("monthSelected", function MatCalendar_Case_3_Template_mat_year_view_monthSelected_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._monthSelectedInYearView($event));
    })("selectedChange", function MatCalendar_Case_3_Template_mat_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._goToDateInView($event, "month"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function MatCalendar_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-multi-year-view", 4);
    \u0275\u0275twoWayListener("activeDateChange", function MatCalendar_Case_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("yearSelected", function MatCalendar_Case_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._yearSelectedInMultiYearView($event));
    })("selectedChange", function MatCalendar_Case_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._goToDateInView($event, "year"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function MatDatepickerContent_ng_template_2_Template(rf, ctx) {
}
var _c2 = ["button"];
var _c3 = [[["", "matDatepickerToggleIcon", ""]]];
var _c4 = ["[matDatepickerToggleIcon]"];
function MatDatepickerToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "path", 3);
    \u0275\u0275elementEnd();
  }
}
var _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
var _c6 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function createMissingDateImplError(provider) {
  return Error(`MatDatepicker: No provider found for ${provider}. You must add one of the following to your app config: provideNativeDateAdapter, provideDateFnsAdapter, provideLuxonDateAdapter, provideMomentDateAdapter, or provide a custom implementation.`);
}
var MatDatepickerIntl = class _MatDatepickerIntl {
  constructor() {
    this.changes = new Subject();
    this.calendarLabel = "Calendar";
    this.openCalendarLabel = "Open calendar";
    this.closeCalendarLabel = "Close calendar";
    this.prevMonthLabel = "Previous month";
    this.nextMonthLabel = "Next month";
    this.prevYearLabel = "Previous year";
    this.nextYearLabel = "Next year";
    this.prevMultiYearLabel = "Previous 24 years";
    this.nextMultiYearLabel = "Next 24 years";
    this.switchToMonthViewLabel = "Choose date";
    this.switchToMultiYearViewLabel = "Choose month and year";
    this.startDateLabel = "Start date";
    this.endDateLabel = "End date";
  }
  /** Formats a range of years (used for visuals). */
  formatYearRange(start, end) {
    return `${start} \u2013 ${end}`;
  }
  /** Formats a label for a range of years (used by screen readers). */
  formatYearRangeLabel(start, end) {
    return `${start} to ${end}`;
  }
  static {
    this.\u0275fac = function MatDatepickerIntl_Factory(t) {
      return new (t || _MatDatepickerIntl)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatDatepickerIntl,
      factory: _MatDatepickerIntl.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MatCalendarCell = class {
  constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.cssClasses = cssClasses;
    this.compareValue = compareValue;
    this.rawValue = rawValue;
  }
};
var calendarBodyId = 1;
var activeCapturingEventOptions = normalizePassiveListenerOptions({
  passive: false,
  capture: true
});
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var passiveEventOptions = normalizePassiveListenerOptions({
  passive: true
});
var MatCalendarBody = class _MatCalendarBody {
  ngAfterViewChecked() {
    if (this._focusActiveCellAfterViewChecked) {
      this._focusActiveCell();
      this._focusActiveCellAfterViewChecked = false;
    }
  }
  constructor(_elementRef, _ngZone) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._platform = inject(Platform);
    this._focusActiveCellAfterViewChecked = false;
    this.numCols = 7;
    this.activeCell = 0;
    this.isRange = false;
    this.cellAspectRatio = 1;
    this.previewStart = null;
    this.previewEnd = null;
    this.selectedValueChange = new EventEmitter();
    this.previewChange = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    this.dragStarted = new EventEmitter();
    this.dragEnded = new EventEmitter();
    this._didDragSinceMouseDown = false;
    this._enterHandler = (event) => {
      if (this._skipNextFocus && event.type === "focus") {
        this._skipNextFocus = false;
        return;
      }
      if (event.target && this.isRange) {
        const cell = this._getCellFromElement(event.target);
        if (cell) {
          this._ngZone.run(() => this.previewChange.emit({
            value: cell.enabled ? cell : null,
            event
          }));
        }
      }
    };
    this._touchmoveHandler = (event) => {
      if (!this.isRange)
        return;
      const target = getActualTouchTarget(event);
      const cell = target ? this._getCellFromElement(target) : null;
      if (target !== event.target) {
        this._didDragSinceMouseDown = true;
      }
      if (getCellElement(event.target)) {
        event.preventDefault();
      }
      this._ngZone.run(() => this.previewChange.emit({
        value: cell?.enabled ? cell : null,
        event
      }));
    };
    this._leaveHandler = (event) => {
      if (this.previewEnd !== null && this.isRange) {
        if (event.type !== "blur") {
          this._didDragSinceMouseDown = true;
        }
        if (event.target && this._getCellFromElement(event.target) && !(event.relatedTarget && this._getCellFromElement(event.relatedTarget))) {
          this._ngZone.run(() => this.previewChange.emit({
            value: null,
            event
          }));
        }
      }
    };
    this._mousedownHandler = (event) => {
      if (!this.isRange)
        return;
      this._didDragSinceMouseDown = false;
      const cell = event.target && this._getCellFromElement(event.target);
      if (!cell || !this._isInRange(cell.compareValue)) {
        return;
      }
      this._ngZone.run(() => {
        this.dragStarted.emit({
          value: cell.rawValue,
          event
        });
      });
    };
    this._mouseupHandler = (event) => {
      if (!this.isRange)
        return;
      const cellElement = getCellElement(event.target);
      if (!cellElement) {
        this._ngZone.run(() => {
          this.dragEnded.emit({
            value: null,
            event
          });
        });
        return;
      }
      if (cellElement.closest(".mat-calendar-body") !== this._elementRef.nativeElement) {
        return;
      }
      this._ngZone.run(() => {
        const cell = this._getCellFromElement(cellElement);
        this.dragEnded.emit({
          value: cell?.rawValue ?? null,
          event
        });
      });
    };
    this._touchendHandler = (event) => {
      const target = getActualTouchTarget(event);
      if (target) {
        this._mouseupHandler({
          target
        });
      }
    };
    this._id = `mat-calendar-body-${calendarBodyId++}`;
    this._startDateLabelId = `${this._id}-start-date`;
    this._endDateLabelId = `${this._id}-end-date`;
    _ngZone.runOutsideAngular(() => {
      const element = _elementRef.nativeElement;
      element.addEventListener("touchmove", this._touchmoveHandler, activeCapturingEventOptions);
      element.addEventListener("mouseenter", this._enterHandler, passiveCapturingEventOptions);
      element.addEventListener("focus", this._enterHandler, passiveCapturingEventOptions);
      element.addEventListener("mouseleave", this._leaveHandler, passiveCapturingEventOptions);
      element.addEventListener("blur", this._leaveHandler, passiveCapturingEventOptions);
      element.addEventListener("mousedown", this._mousedownHandler, passiveEventOptions);
      element.addEventListener("touchstart", this._mousedownHandler, passiveEventOptions);
      if (this._platform.isBrowser) {
        window.addEventListener("mouseup", this._mouseupHandler);
        window.addEventListener("touchend", this._touchendHandler);
      }
    });
  }
  /** Called when a cell is clicked. */
  _cellClicked(cell, event) {
    if (this._didDragSinceMouseDown) {
      return;
    }
    if (cell.enabled) {
      this.selectedValueChange.emit({
        value: cell.value,
        event
      });
    }
  }
  _emitActiveDateChange(cell, event) {
    if (cell.enabled) {
      this.activeDateChange.emit({
        value: cell.value,
        event
      });
    }
  }
  /** Returns whether a cell should be marked as selected. */
  _isSelected(value) {
    return this.startValue === value || this.endValue === value;
  }
  ngOnChanges(changes) {
    const columnChanges = changes["numCols"];
    const {
      rows,
      numCols
    } = this;
    if (changes["rows"] || columnChanges) {
      this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
    }
    if (changes["cellAspectRatio"] || columnChanges || !this._cellPadding) {
      this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
    }
    if (columnChanges || !this._cellWidth) {
      this._cellWidth = `${100 / numCols}%`;
    }
  }
  ngOnDestroy() {
    const element = this._elementRef.nativeElement;
    element.removeEventListener("touchmove", this._touchmoveHandler, activeCapturingEventOptions);
    element.removeEventListener("mouseenter", this._enterHandler, passiveCapturingEventOptions);
    element.removeEventListener("focus", this._enterHandler, passiveCapturingEventOptions);
    element.removeEventListener("mouseleave", this._leaveHandler, passiveCapturingEventOptions);
    element.removeEventListener("blur", this._leaveHandler, passiveCapturingEventOptions);
    element.removeEventListener("mousedown", this._mousedownHandler, passiveEventOptions);
    element.removeEventListener("touchstart", this._mousedownHandler, passiveEventOptions);
    if (this._platform.isBrowser) {
      window.removeEventListener("mouseup", this._mouseupHandler);
      window.removeEventListener("touchend", this._touchendHandler);
    }
  }
  /** Returns whether a cell is active. */
  _isActiveCell(rowIndex, colIndex) {
    let cellNumber = rowIndex * this.numCols + colIndex;
    if (rowIndex) {
      cellNumber -= this._firstRowOffset;
    }
    return cellNumber == this.activeCell;
  }
  /**
   * Focuses the active cell after the microtask queue is empty.
   *
   * Adding a 0ms setTimeout seems to fix Voiceover losing focus when pressing PageUp/PageDown
   * (issue #24330).
   *
   * Determined a 0ms by gradually increasing duration from 0 and testing two use cases with screen
   * reader enabled:
   *
   * 1. Pressing PageUp/PageDown repeatedly with pausing between each key press.
   * 2. Pressing and holding the PageDown key with repeated keys enabled.
   *
   * Test 1 worked roughly 95-99% of the time with 0ms and got a little bit better as the duration
   * increased. Test 2 got slightly better until the duration was long enough to interfere with
   * repeated keys. If the repeated key speed was faster than the timeout duration, then pressing
   * and holding pagedown caused the entire page to scroll.
   *
   * Since repeated key speed can verify across machines, determined that any duration could
   * potentially interfere with repeated keys. 0ms would be best because it almost entirely
   * eliminates the focus being lost in Voiceover (#24330) without causing unintended side effects.
   * Adding delay also complicates writing tests.
   */
  _focusActiveCell(movePreview = true) {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => {
        setTimeout(() => {
          const activeCell = this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");
          if (activeCell) {
            if (!movePreview) {
              this._skipNextFocus = true;
            }
            activeCell.focus();
          }
        });
      });
    });
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _scheduleFocusActiveCellAfterViewChecked() {
    this._focusActiveCellAfterViewChecked = true;
  }
  /** Gets whether a value is the start of the main range. */
  _isRangeStart(value) {
    return isStart(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is the end of the main range. */
  _isRangeEnd(value) {
    return isEnd(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is within the currently-selected range. */
  _isInRange(value) {
    return isInRange(value, this.startValue, this.endValue, this.isRange);
  }
  /** Gets whether a value is the start of the comparison range. */
  _isComparisonStart(value) {
    return isStart(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Whether the cell is a start bridge cell between the main and comparison ranges. */
  _isComparisonBridgeStart(value, rowIndex, colIndex) {
    if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
      return false;
    }
    let previousCell = this.rows[rowIndex][colIndex - 1];
    if (!previousCell) {
      const previousRow = this.rows[rowIndex - 1];
      previousCell = previousRow && previousRow[previousRow.length - 1];
    }
    return previousCell && !this._isRangeEnd(previousCell.compareValue);
  }
  /** Whether the cell is an end bridge cell between the main and comparison ranges. */
  _isComparisonBridgeEnd(value, rowIndex, colIndex) {
    if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
      return false;
    }
    let nextCell = this.rows[rowIndex][colIndex + 1];
    if (!nextCell) {
      const nextRow = this.rows[rowIndex + 1];
      nextCell = nextRow && nextRow[0];
    }
    return nextCell && !this._isRangeStart(nextCell.compareValue);
  }
  /** Gets whether a value is the end of the comparison range. */
  _isComparisonEnd(value) {
    return isEnd(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Gets whether a value is within the current comparison range. */
  _isInComparisonRange(value) {
    return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
  }
  /**
   * Gets whether a value is the same as the start and end of the comparison range.
   * For context, the functions that we use to determine whether something is the start/end of
   * a range don't allow for the start and end to be on the same day, because we'd have to use
   * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
   * the regular range, because when it happens, the selected styles take over and still show where
   * the range would've been, however we don't have these selected styles for a comparison range.
   * This function is used to apply a class that serves the same purpose as the one for selected
   * dates, but it only applies in the context of a comparison range.
   */
  _isComparisonIdentical(value) {
    return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
  }
  /** Gets whether a value is the start of the preview range. */
  _isPreviewStart(value) {
    return isStart(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is the end of the preview range. */
  _isPreviewEnd(value) {
    return isEnd(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is inside the preview range. */
  _isInPreview(value) {
    return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
  }
  /** Gets ids of aria descriptions for the start and end of a date range. */
  _getDescribedby(value) {
    if (!this.isRange) {
      return null;
    }
    if (this.startValue === value && this.endValue === value) {
      return `${this._startDateLabelId} ${this._endDateLabelId}`;
    } else if (this.startValue === value) {
      return this._startDateLabelId;
    } else if (this.endValue === value) {
      return this._endDateLabelId;
    }
    return null;
  }
  /** Finds the MatCalendarCell that corresponds to a DOM node. */
  _getCellFromElement(element) {
    const cell = getCellElement(element);
    if (cell) {
      const row = cell.getAttribute("data-mat-row");
      const col = cell.getAttribute("data-mat-col");
      if (row && col) {
        return this.rows[parseInt(row)][parseInt(col)];
      }
    }
    return null;
  }
  static {
    this.\u0275fac = function MatCalendarBody_Factory(t) {
      return new (t || _MatCalendarBody)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatCalendarBody,
      selectors: [["", "mat-calendar-body", ""]],
      hostAttrs: [1, "mat-calendar-body"],
      inputs: {
        label: "label",
        rows: "rows",
        todayValue: "todayValue",
        startValue: "startValue",
        endValue: "endValue",
        labelMinRequiredCells: "labelMinRequiredCells",
        numCols: "numCols",
        activeCell: "activeCell",
        isRange: "isRange",
        cellAspectRatio: "cellAspectRatio",
        comparisonStart: "comparisonStart",
        comparisonEnd: "comparisonEnd",
        previewStart: "previewStart",
        previewEnd: "previewEnd",
        startDateAccessibleName: "startDateAccessibleName",
        endDateAccessibleName: "endDateAccessibleName"
      },
      outputs: {
        selectedValueChange: "selectedValueChange",
        previewChange: "previewChange",
        activeDateChange: "activeDateChange",
        dragStarted: "dragStarted",
        dragEnded: "dragEnded"
      },
      exportAs: ["matCalendarBody"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      attrs: _c04,
      decls: 7,
      vars: 5,
      consts: [["aria-hidden", "true"], ["role", "row"], [1, "mat-calendar-body-hidden-label", 3, "id"], [1, "mat-calendar-body-label"], [1, "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "click", "focus", "ngClass", "tabindex"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"]],
      template: function MatCalendarBody_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, MatCalendarBody_Conditional_0_Template, 3, 6, "tr", 0);
          \u0275\u0275repeaterCreate(1, MatCalendarBody_For_2_Template, 4, 1, "tr", 1, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementStart(3, "label", 2);
          \u0275\u0275text(4);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "label", 2);
          \u0275\u0275text(6);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275conditional(0, ctx._firstRowOffset < ctx.labelMinRequiredCells ? 0 : -1);
          \u0275\u0275advance();
          \u0275\u0275repeater(ctx.rows);
          \u0275\u0275advance(2);
          \u0275\u0275property("id", ctx._startDateLabelId);
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.startDateAccessibleName, "\n");
          \u0275\u0275advance();
          \u0275\u0275property("id", ctx._endDateLabelId);
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.endDateAccessibleName, "\n");
        }
      },
      dependencies: [NgClass],
      styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color)}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size);font-weight:var(--mat-datepicker-calendar-body-label-text-weight);color:var(--mat-datepicker-calendar-body-label-text-color)}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color)}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color)}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color);border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color)}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color);color:var(--mat-datepicker-calendar-date-selected-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color)}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color)}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color)}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color)}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendarBody, [{
    type: Component,
    args: [{
      selector: "[mat-calendar-body]",
      host: {
        "class": "mat-calendar-body"
      },
      exportAs: "matCalendarBody",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgClass],
      template: `<!--
  If there's not enough space in the first row, create a separate label row. We mark this row as
  aria-hidden because we don't want it to be read out as one of the weeks in the month.
-->
@if (_firstRowOffset < labelMinRequiredCells) {
  <tr aria-hidden="true">
    <td class="mat-calendar-body-label"
        [attr.colspan]="numCols"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding">
      {{label}}
    </td>
  </tr>
}

<!-- Create the first row separately so we can include a special spacer cell. -->
@for (row of rows; track row; let rowIndex = $index) {
  <tr role="row">
    <!--
      This cell is purely decorative, but we can't put \`aria-hidden\` or \`role="presentation"\` on it,
      because it throws off the week days for the rest of the row on NVDA. The aspect ratio of the
      table cells is maintained by setting the top and bottom padding as a percentage of the width
      (a variant of the trick described here: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).
    -->
    @if (rowIndex === 0 && _firstRowOffset) {
      <td
        class="mat-calendar-body-label"
        [attr.colspan]="_firstRowOffset"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding">
        {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}
      </td>
    }
    <!--
      Each gridcell in the calendar contains a button, which signals to assistive technology that the
      cell is interactable, as well as the selection state via \`aria-pressed\`. See #23476 for
      background.
    -->
    @for (item of row; track item; let colIndex = $index) {
      <td
        role="gridcell"
        class="mat-calendar-body-cell-container"
        [style.width]="_cellWidth"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding"
        [attr.data-mat-row]="rowIndex"
        [attr.data-mat-col]="colIndex"
      >
        <button
            type="button"
            class="mat-calendar-body-cell"
            [ngClass]="item.cssClasses"
            [tabindex]="_isActiveCell(rowIndex, colIndex) ? 0 : -1"
            [class.mat-calendar-body-disabled]="!item.enabled"
            [class.mat-calendar-body-active]="_isActiveCell(rowIndex, colIndex)"
            [class.mat-calendar-body-range-start]="_isRangeStart(item.compareValue)"
            [class.mat-calendar-body-range-end]="_isRangeEnd(item.compareValue)"
            [class.mat-calendar-body-in-range]="_isInRange(item.compareValue)"
            [class.mat-calendar-body-comparison-bridge-start]="_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)"
            [class.mat-calendar-body-comparison-bridge-end]="_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)"
            [class.mat-calendar-body-comparison-start]="_isComparisonStart(item.compareValue)"
            [class.mat-calendar-body-comparison-end]="_isComparisonEnd(item.compareValue)"
            [class.mat-calendar-body-in-comparison-range]="_isInComparisonRange(item.compareValue)"
            [class.mat-calendar-body-preview-start]="_isPreviewStart(item.compareValue)"
            [class.mat-calendar-body-preview-end]="_isPreviewEnd(item.compareValue)"
            [class.mat-calendar-body-in-preview]="_isInPreview(item.compareValue)"
            [attr.aria-label]="item.ariaLabel"
            [attr.aria-disabled]="!item.enabled || null"
            [attr.aria-pressed]="_isSelected(item.compareValue)"
            [attr.aria-current]="todayValue === item.compareValue ? 'date' : null"
            [attr.aria-describedby]="_getDescribedby(item.compareValue)"
            (click)="_cellClicked(item, $event)"
            (focus)="_emitActiveDateChange(item, $event)">
            <span class="mat-calendar-body-cell-content mat-focus-indicator"
              [class.mat-calendar-body-selected]="_isSelected(item.compareValue)"
              [class.mat-calendar-body-comparison-identical]="_isComparisonIdentical(item.compareValue)"
              [class.mat-calendar-body-today]="todayValue === item.compareValue">
              {{item.displayValue}}
            </span>
            <span class="mat-calendar-body-cell-preview" aria-hidden="true"></span>
        </button>
      </td>
    }
  </tr>
}

<label [id]="_startDateLabelId" class="mat-calendar-body-hidden-label">
  {{startDateAccessibleName}}
</label>
<label [id]="_endDateLabelId" class="mat-calendar-body-hidden-label">
  {{endDateAccessibleName}}
</label>
`,
      styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color)}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size);font-weight:var(--mat-datepicker-calendar-body-label-text-weight);color:var(--mat-datepicker-calendar-body-label-text-color)}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color)}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color)}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color);border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color)}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color);color:var(--mat-datepicker-calendar-date-selected-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color)}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color)}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color)}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color)}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    label: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    todayValue: [{
      type: Input
    }],
    startValue: [{
      type: Input
    }],
    endValue: [{
      type: Input
    }],
    labelMinRequiredCells: [{
      type: Input
    }],
    numCols: [{
      type: Input
    }],
    activeCell: [{
      type: Input
    }],
    isRange: [{
      type: Input
    }],
    cellAspectRatio: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    previewStart: [{
      type: Input
    }],
    previewEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    selectedValueChange: [{
      type: Output
    }],
    previewChange: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    dragStarted: [{
      type: Output
    }],
    dragEnded: [{
      type: Output
    }]
  });
})();
function isTableCell(node) {
  return node?.nodeName === "TD";
}
function getCellElement(element) {
  let cell;
  if (isTableCell(element)) {
    cell = element;
  } else if (isTableCell(element.parentNode)) {
    cell = element.parentNode;
  } else if (isTableCell(element.parentNode?.parentNode)) {
    cell = element.parentNode.parentNode;
  }
  return cell?.getAttribute("data-mat-row") != null ? cell : null;
}
function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
function getActualTouchTarget(event) {
  const touchLocation = event.changedTouches[0];
  return document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
}
var DateRange = class {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};
var MatDateSelectionModel = class _MatDateSelectionModel {
  constructor(selection, _adapter) {
    this.selection = selection;
    this._adapter = _adapter;
    this._selectionChanged = new Subject();
    this.selectionChanged = this._selectionChanged;
    this.selection = selection;
  }
  /**
   * Updates the current selection in the model.
   * @param value New selection that should be assigned.
   * @param source Object that triggered the selection change.
   */
  updateSelection(value, source) {
    const oldValue = this.selection;
    this.selection = value;
    this._selectionChanged.next({
      selection: value,
      source,
      oldValue
    });
  }
  ngOnDestroy() {
    this._selectionChanged.complete();
  }
  _isValidDateInstance(date) {
    return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
  }
  static {
    this.\u0275fac = function MatDateSelectionModel_Factory(t) {
      \u0275\u0275invalidFactory();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatDateSelectionModel,
      factory: _MatDateSelectionModel.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: void 0
  }, {
    type: DateAdapter
  }], null);
})();
var MatSingleDateSelectionModel = class _MatSingleDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(null, adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a single date selection, the added date
   * simply overwrites the previous selection
   */
  add(date) {
    super.updateSelection(date, this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    return this.selection != null && this._isValidDateInstance(this.selection);
  }
  /**
   * Checks whether the current selection is complete. In the case of a single date selection, this
   * is true if the current selection is not null.
   */
  isComplete() {
    return this.selection != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _MatSingleDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
  static {
    this.\u0275fac = function MatSingleDateSelectionModel_Factory(t) {
      return new (t || _MatSingleDateSelectionModel)(\u0275\u0275inject(DateAdapter));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatSingleDateSelectionModel,
      factory: _MatSingleDateSelectionModel.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSingleDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
var MatRangeDateSelectionModel = class _MatRangeDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(new DateRange(null, null), adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a date range selection, the added date
   * fills in the next `null` value in the range. If both the start and the end already have a date,
   * the selection is reset so that the given date is the new `start` and the `end` is null.
   */
  add(date) {
    let {
      start,
      end
    } = this.selection;
    if (start == null) {
      start = date;
    } else if (end == null) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    super.updateSelection(new DateRange(start, end), this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    const {
      start,
      end
    } = this.selection;
    if (start == null && end == null) {
      return true;
    }
    if (start != null && end != null) {
      return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
    }
    return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
  }
  /**
   * Checks whether the current selection is complete. In the case of a date range selection, this
   * is true if the current selection has a non-null `start` and `end`.
   */
  isComplete() {
    return this.selection.start != null && this.selection.end != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _MatRangeDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
  static {
    this.\u0275fac = function MatRangeDateSelectionModel_Factory(t) {
      return new (t || _MatRangeDateSelectionModel)(\u0275\u0275inject(DateAdapter));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatRangeDateSelectionModel,
      factory: _MatRangeDateSelectionModel.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRangeDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatSingleDateSelectionModel(adapter);
}
var MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), MatDateSelectionModel], DateAdapter],
  useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatRangeDateSelectionModel(adapter);
}
var MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), MatDateSelectionModel], DateAdapter],
  useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};
var MAT_DATE_RANGE_SELECTION_STRATEGY = new InjectionToken("MAT_DATE_RANGE_SELECTION_STRATEGY");
var DefaultMatCalendarRangeStrategy = class _DefaultMatCalendarRangeStrategy {
  constructor(_dateAdapter) {
    this._dateAdapter = _dateAdapter;
  }
  selectionFinished(date, currentRange) {
    let {
      start,
      end
    } = currentRange;
    if (start == null) {
      start = date;
    } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    return new DateRange(start, end);
  }
  createPreview(activeDate, currentRange) {
    let start = null;
    let end = null;
    if (currentRange.start && !currentRange.end && activeDate) {
      start = currentRange.start;
      end = activeDate;
    }
    return new DateRange(start, end);
  }
  createDrag(dragOrigin, originalRange, newDate) {
    let start = originalRange.start;
    let end = originalRange.end;
    if (!start || !end) {
      return null;
    }
    const adapter = this._dateAdapter;
    const isRange = adapter.compareDate(start, end) !== 0;
    const diffYears = adapter.getYear(newDate) - adapter.getYear(dragOrigin);
    const diffMonths = adapter.getMonth(newDate) - adapter.getMonth(dragOrigin);
    const diffDays = adapter.getDate(newDate) - adapter.getDate(dragOrigin);
    if (isRange && adapter.sameDate(dragOrigin, originalRange.start)) {
      start = newDate;
      if (adapter.compareDate(newDate, end) > 0) {
        end = adapter.addCalendarYears(end, diffYears);
        end = adapter.addCalendarMonths(end, diffMonths);
        end = adapter.addCalendarDays(end, diffDays);
      }
    } else if (isRange && adapter.sameDate(dragOrigin, originalRange.end)) {
      end = newDate;
      if (adapter.compareDate(newDate, start) < 0) {
        start = adapter.addCalendarYears(start, diffYears);
        start = adapter.addCalendarMonths(start, diffMonths);
        start = adapter.addCalendarDays(start, diffDays);
      }
    } else {
      start = adapter.addCalendarYears(start, diffYears);
      start = adapter.addCalendarMonths(start, diffMonths);
      start = adapter.addCalendarDays(start, diffDays);
      end = adapter.addCalendarYears(end, diffYears);
      end = adapter.addCalendarMonths(end, diffMonths);
      end = adapter.addCalendarDays(end, diffDays);
    }
    return new DateRange(start, end);
  }
  static {
    this.\u0275fac = function DefaultMatCalendarRangeStrategy_Factory(t) {
      return new (t || _DefaultMatCalendarRangeStrategy)(\u0275\u0275inject(DateAdapter));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DefaultMatCalendarRangeStrategy,
      factory: _DefaultMatCalendarRangeStrategy.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultMatCalendarRangeStrategy, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
var MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[new Optional(), new SkipSelf(), MAT_DATE_RANGE_SELECTION_STRATEGY], DateAdapter],
  useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};
var DAYS_PER_WEEK = 7;
var MatMonthView = class _MatMonthView {
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setRanges(this._selected);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rangeStrategy = _rangeStrategy;
    this._rerenderSubscription = Subscription.EMPTY;
    this.activeDrag = null;
    this.selectedChange = new EventEmitter();
    this._userSelection = new EventEmitter();
    this.dragStarted = new EventEmitter();
    this.dragEnded = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnChanges(changes) {
    const comparisonChange = changes["comparisonStart"] || changes["comparisonEnd"];
    if (comparisonChange && !comparisonChange.firstChange) {
      this._setRanges(this.selected);
    }
    if (changes["activeDrag"] && !this.activeDrag) {
      this._clearPreview();
    }
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new date is selected. */
  _dateSelected(event) {
    const date = event.value;
    const selectedDate = this._getDateFromDayOfMonth(date);
    let rangeStartDate;
    let rangeEndDate;
    if (this._selected instanceof DateRange) {
      rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
      rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
    } else {
      rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
    }
    if (rangeStartDate !== date || rangeEndDate !== date) {
      this.selectedChange.emit(selectedDate);
    }
    this._userSelection.emit({
      value: selectedDate,
      event: event.event
    });
    this._clearPreview();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromDayOfMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this._activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
        break;
      case PAGE_DOWN:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        if (this._canSelect(this._activeDate)) {
          event.preventDefault();
        }
        return;
      case ESCAPE:
        if (this._previewEnd != null && !hasModifierKey(event)) {
          this._clearPreview();
          if (this.activeDrag) {
            this.dragEnded.emit({
              value: null,
              event
            });
          } else {
            this.selectedChange.emit(null);
            this._userSelection.emit({
              value: null,
              event
            });
          }
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
        this._dateSelected({
          value: this._dateAdapter.getDate(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this month view. */
  _init() {
    this._setRanges(this.selected);
    this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
    this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
    let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
    this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
    this._initWeekdays();
    this._createWeekCells();
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell(movePreview) {
    this._matCalendarBody._focusActiveCell(movePreview);
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /** Called when the user has activated a new cell and the preview needs to be updated. */
  _previewChanged({
    event,
    value: cell
  }) {
    if (this._rangeStrategy) {
      const value = cell ? cell.rawValue : null;
      const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
      this._previewStart = this._getCellCompareValue(previewRange.start);
      this._previewEnd = this._getCellCompareValue(previewRange.end);
      if (this.activeDrag && value) {
        const dragRange = this._rangeStrategy.createDrag?.(this.activeDrag.value, this.selected, value, event);
        if (dragRange) {
          this._previewStart = this._getCellCompareValue(dragRange.start);
          this._previewEnd = this._getCellCompareValue(dragRange.end);
        }
      }
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Called when the user has ended a drag. If the drag/drop was successful,
   * computes and emits the new range selection.
   */
  _dragEnded(event) {
    if (!this.activeDrag)
      return;
    if (event.value) {
      const dragDropResult = this._rangeStrategy?.createDrag?.(this.activeDrag.value, this.selected, event.value, event.event);
      this.dragEnded.emit({
        value: dragDropResult ?? null,
        event: event.event
      });
    } else {
      this.dragEnded.emit({
        value: null,
        event: event.event
      });
    }
  }
  /**
   * Takes a day of the month and returns a new date in the same month and year as the currently
   *  active date. The returned date will have the same day of the month as the argument date.
   */
  _getDateFromDayOfMonth(dayOfMonth) {
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), dayOfMonth);
  }
  /** Initializes the weekdays. */
  _initWeekdays() {
    const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this._dateAdapter.getDayOfWeekNames("narrow");
    const longWeekdays = this._dateAdapter.getDayOfWeekNames("long");
    let weekdays = longWeekdays.map((long, i) => {
      return {
        long,
        narrow: narrowWeekdays[i]
      };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
  }
  /** Creates MatCalendarCells for the dates in this month. */
  _createWeekCells() {
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this._dateAdapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell == DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
      const enabled = this._shouldEnableDate(date);
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
      const cellClasses = this.dateClass ? this.dateClass(date, "month") : void 0;
      this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
    }
  }
  /** Date filter for the month */
  _shouldEnableDate(date) {
    return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
  }
  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  _getDateInCurrentMonth(date) {
    return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
  }
  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  _hasSameMonthAndYear(d1, d2) {
    return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
  }
  /** Gets the value that will be used to one cell to another. */
  _getCellCompareValue(date) {
    if (date) {
      const year = this._dateAdapter.getYear(date);
      const month = this._dateAdapter.getMonth(date);
      const day = this._dateAdapter.getDate(date);
      return new Date(year, month, day).getTime();
    }
    return null;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the current range based on a model value. */
  _setRanges(selectedValue) {
    if (selectedValue instanceof DateRange) {
      this._rangeStart = this._getCellCompareValue(selectedValue.start);
      this._rangeEnd = this._getCellCompareValue(selectedValue.end);
      this._isRange = true;
    } else {
      this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
      this._isRange = false;
    }
    this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
    this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
  }
  /** Gets whether a date can be selected in the month view. */
  _canSelect(date) {
    return !this.dateFilter || this.dateFilter(date);
  }
  /** Clears out preview state. */
  _clearPreview() {
    this._previewStart = this._previewEnd = null;
  }
  static {
    this.\u0275fac = function MatMonthView_Factory(t) {
      return new (t || _MatMonthView)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatMonthView,
      selectors: [["mat-month-view"]],
      viewQuery: function MatMonthView_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(MatCalendarBody, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
        }
      },
      inputs: {
        activeDate: "activeDate",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: "dateFilter",
        dateClass: "dateClass",
        comparisonStart: "comparisonStart",
        comparisonEnd: "comparisonEnd",
        startDateAccessibleName: "startDateAccessibleName",
        endDateAccessibleName: "endDateAccessibleName",
        activeDrag: "activeDrag"
      },
      outputs: {
        selectedChange: "selectedChange",
        _userSelection: "_userSelection",
        dragStarted: "dragStarted",
        dragEnded: "dragEnded",
        activeDateChange: "activeDateChange"
      },
      exportAs: ["matMonthView"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 8,
      vars: 14,
      consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col"], ["aria-hidden", "true"], ["colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName"], [1, "cdk-visually-hidden"]],
      template: function MatMonthView_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
          \u0275\u0275repeaterCreate(3, MatMonthView_For_4_Template, 5, 2, "th", 2, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "tr", 3);
          \u0275\u0275element(6, "th", 4);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(7, "tbody", 5);
          \u0275\u0275listener("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_7_listener($event) {
            return ctx._dateSelected($event);
          })("activeDateChange", function MatMonthView_Template_tbody_activeDateChange_7_listener($event) {
            return ctx._updateActiveDate($event);
          })("previewChange", function MatMonthView_Template_tbody_previewChange_7_listener($event) {
            return ctx._previewChanged($event);
          })("dragStarted", function MatMonthView_Template_tbody_dragStarted_7_listener($event) {
            return ctx.dragStarted.emit($event);
          })("dragEnded", function MatMonthView_Template_tbody_dragEnded_7_listener($event) {
            return ctx._dragEnded($event);
          })("keyup", function MatMonthView_Template_tbody_keyup_7_listener($event) {
            return ctx._handleCalendarBodyKeyup($event);
          })("keydown", function MatMonthView_Template_tbody_keydown_7_listener($event) {
            return ctx._handleCalendarBodyKeydown($event);
          });
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275repeater(ctx._weekdays);
          \u0275\u0275advance(4);
          \u0275\u0275property("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
        }
      },
      dependencies: [MatCalendarBody],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMonthView, [{
    type: Component,
    args: [{
      selector: "mat-month-view",
      exportAs: "matMonthView",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead class="mat-calendar-table-header">\n    <tr>\n      @for (day of _weekdays; track day) {\n        <th scope="col">\n          <span class="cdk-visually-hidden">{{day.long}}</span>\n          <span aria-hidden="true">{{day.narrow}}</span>\n        </th>\n      }\n    </tr>\n    <tr aria-hidden="true"><th class="mat-calendar-table-header-divider" colspan="7"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]="_monthLabel"\n         [rows]="_weeks"\n         [todayValue]="_todayDate!"\n         [startValue]="_rangeStart!"\n         [endValue]="_rangeEnd!"\n         [comparisonStart]="_comparisonRangeStart"\n         [comparisonEnd]="_comparisonRangeEnd"\n         [previewStart]="_previewStart"\n         [previewEnd]="_previewEnd"\n         [isRange]="_isRange"\n         [labelMinRequiredCells]="3"\n         [activeCell]="_dateAdapter.getDate(activeDate) - 1"\n         [startDateAccessibleName]="startDateAccessibleName"\n         [endDateAccessibleName]="endDateAccessibleName"\n         (selectedValueChange)="_dateSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (previewChange)="_previewChanged($event)"\n         (dragStarted)="dragStarted.emit($event)"\n         (dragEnded)="_dragEnded($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
    }, {
      type: Optional
    }]
  }], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    activeDrag: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    dragStarted: [{
      type: Output
    }],
    dragEnded: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
var yearsPerPage = 24;
var yearsPerRow = 4;
var MatMultiYearView = class _MatMultiYearView {
  /** The date to display in this multi-year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedYear(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = Subscription.EMPTY;
    this.selectedChange = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    if (!this._dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Initializes this multi-year view. */
  _init() {
    this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
    const activeYear = this._dateAdapter.getYear(this._activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    this._years = [];
    for (let i = 0, row = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);
      if (row.length == yearsPerRow) {
        this._years.push(row.map((year) => this._createCellForYear(year)));
        row = [];
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Handles when a new year is selected. */
  _yearSelected(event) {
    const year = event.value;
    const selectedYear = this._dateAdapter.createDate(year, 0, 1);
    const selectedDate = this._getDateFromYear(year);
    this.yearSelected.emit(selectedYear);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const year = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromYear(year);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCellAfterViewChecked();
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._yearSelected({
          value: this._dateAdapter.getYear(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  _getActiveCell() {
    return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Takes a year and returns a new date on the same day and month as the currently active date
   *  The returned date will have the same year as the argument date.
   */
  _getDateFromYear(year) {
    const activeMonth = this._dateAdapter.getMonth(this.activeDate);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, activeMonth, 1));
    const normalizedDate = this._dateAdapter.createDate(year, activeMonth, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
    return normalizedDate;
  }
  /** Creates an MatCalendarCell for the given year. */
  _createCellForYear(year) {
    const date = this._dateAdapter.createDate(year, 0, 1);
    const yearName = this._dateAdapter.getYearName(date);
    const cellClasses = this.dateClass ? this.dateClass(date, "multi-year") : void 0;
    return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
  }
  /** Whether the given year is enabled. */
  _shouldEnableYear(year) {
    if (year === void 0 || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
    for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-highlighted year based on a model value. */
  _setSelectedYear(value) {
    this._selectedYear = null;
    if (value instanceof DateRange) {
      const displayValue = value.start || value.end;
      if (displayValue) {
        this._selectedYear = this._dateAdapter.getYear(displayValue);
      }
    } else if (value) {
      this._selectedYear = this._dateAdapter.getYear(value);
    }
  }
  static {
    this.\u0275fac = function MatMultiYearView_Factory(t) {
      return new (t || _MatMultiYearView)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatMultiYearView,
      selectors: [["mat-multi-year-view"]],
      viewQuery: function MatMultiYearView_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(MatCalendarBody, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
        }
      },
      inputs: {
        activeDate: "activeDate",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: "dateFilter",
        dateClass: "dateClass"
      },
      outputs: {
        selectedChange: "selectedChange",
        yearSelected: "yearSelected",
        activeDateChange: "activeDateChange"
      },
      exportAs: ["matMultiYearView"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 5,
      vars: 7,
      consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell"]],
      template: function MatMultiYearView_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
          \u0275\u0275element(3, "th", 2);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "tbody", 3);
          \u0275\u0275listener("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
            return ctx._yearSelected($event);
          })("activeDateChange", function MatMultiYearView_Template_tbody_activeDateChange_4_listener($event) {
            return ctx._updateActiveDate($event);
          })("keyup", function MatMultiYearView_Template_tbody_keyup_4_listener($event) {
            return ctx._handleCalendarBodyKeyup($event);
          })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
            return ctx._handleCalendarBodyKeydown($event);
          });
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(4);
          \u0275\u0275property("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
        }
      },
      dependencies: [MatCalendarBody],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMultiYearView, [{
    type: Component,
    args: [{
      selector: "mat-multi-year-view",
      exportAs: "matMultiYearView",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead aria-hidden="true" class="mat-calendar-table-header">\n    <tr><th class="mat-calendar-table-header-divider" colspan="4"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]="_years"\n         [todayValue]="_todayYear"\n         [startValue]="_selectedYear!"\n         [endValue]="_selectedYear!"\n         [numCols]="4"\n         [cellAspectRatio]="4 / 7"\n         [activeCell]="_getActiveCell()"\n         (selectedValueChange)="_yearSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}
var MatYearView = class _MatYearView {
  /** The date to display in this year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedMonth(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = Subscription.EMPTY;
    this.selectedChange = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new month is selected. */
  _monthSelected(event) {
    const month = event.value;
    const selectedMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    this.monthSelected.emit(selectedMonth);
    const selectedDate = this._getDateFromMonth(month);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._monthSelected({
          value: this._dateAdapter.getMonth(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this year view. */
  _init() {
    this._setSelectedMonth(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
    this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
    let monthNames = this._dateAdapter.getMonthNames("short");
    this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map((row) => row.map((month) => this._createCellForMonth(month, monthNames[month])));
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Schedules the matCalendarBody to focus the active cell after change detection has run */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  _getMonthInCurrentYear(date) {
    return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
  }
  /**
   * Takes a month and returns a new date in the same day and year as the currently active date.
   *  The returned date will have the same month as the argument date.
   */
  _getDateFromMonth(month) {
    const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
  }
  /** Creates an MatCalendarCell for the given month. */
  _createCellForMonth(month, monthName) {
    const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
    const cellClasses = this.dateClass ? this.dateClass(date, "year") : void 0;
    return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
  }
  /** Whether the given month is enabled. */
  _shouldEnableMonth(month) {
    const activeYear = this._dateAdapter.getYear(this.activeDate);
    if (month === void 0 || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
    for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is after this.maxDate, considering
   * just the month and year of this.maxDate
   */
  _isYearAndMonthAfterMaxDate(year, month) {
    if (this.maxDate) {
      const maxYear = this._dateAdapter.getYear(this.maxDate);
      const maxMonth = this._dateAdapter.getMonth(this.maxDate);
      return year > maxYear || year === maxYear && month > maxMonth;
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is before this.minDate, considering
   * just the month and year of this.minDate
   */
  _isYearAndMonthBeforeMinDate(year, month) {
    if (this.minDate) {
      const minYear = this._dateAdapter.getYear(this.minDate);
      const minMonth = this._dateAdapter.getMonth(this.minDate);
      return year < minYear || year === minYear && month < minMonth;
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-selected month based on a model value. */
  _setSelectedMonth(value) {
    if (value instanceof DateRange) {
      this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
    } else {
      this._selectedMonth = this._getMonthInCurrentYear(value);
    }
  }
  static {
    this.\u0275fac = function MatYearView_Factory(t) {
      return new (t || _MatYearView)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatYearView,
      selectors: [["mat-year-view"]],
      viewQuery: function MatYearView_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(MatCalendarBody, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
        }
      },
      inputs: {
        activeDate: "activeDate",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: "dateFilter",
        dateClass: "dateClass"
      },
      outputs: {
        selectedChange: "selectedChange",
        monthSelected: "monthSelected",
        activeDateChange: "activeDateChange"
      },
      exportAs: ["matYearView"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 5,
      vars: 9,
      consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell"]],
      template: function MatYearView_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
          \u0275\u0275element(3, "th", 2);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "tbody", 3);
          \u0275\u0275listener("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
            return ctx._monthSelected($event);
          })("activeDateChange", function MatYearView_Template_tbody_activeDateChange_4_listener($event) {
            return ctx._updateActiveDate($event);
          })("keyup", function MatYearView_Template_tbody_keyup_4_listener($event) {
            return ctx._handleCalendarBodyKeyup($event);
          })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
            return ctx._handleCalendarBodyKeydown($event);
          });
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(4);
          \u0275\u0275property("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
        }
      },
      dependencies: [MatCalendarBody],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatYearView, [{
    type: Component,
    args: [{
      selector: "mat-year-view",
      exportAs: "matYearView",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead aria-hidden="true" class="mat-calendar-table-header">\n    <tr><th class="mat-calendar-table-header-divider" colspan="4"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]="_yearLabel"\n         [rows]="_months"\n         [todayValue]="_todayMonth!"\n         [startValue]="_selectedMonth!"\n         [endValue]="_selectedMonth!"\n         [labelMinRequiredCells]="2"\n         [numCols]="4"\n         [cellAspectRatio]="4 / 7"\n         [activeCell]="_dateAdapter.getMonth(activeDate)"\n         (selectedValueChange)="_monthSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
var calendarHeaderId = 1;
var MatCalendarHeader = class _MatCalendarHeader {
  constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
    this._intl = _intl;
    this.calendar = calendar;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._id = `mat-calendar-header-${calendarHeaderId++}`;
    this._periodButtonLabelId = `${this._id}-period-label`;
    this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
  }
  /** The display text for the current calendar view. */
  get periodButtonText() {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    return this._intl.formatYearRange(...this._formatMinAndMaxYearLabels());
  }
  /** The aria description for the current calendar view. */
  get periodButtonDescription() {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    return this._intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
  }
  /** The `aria-label` for changing the calendar view. */
  get periodButtonLabel() {
    return this.calendar.currentView == "month" ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
  }
  /** The label for the previous button. */
  get prevButtonLabel() {
    return {
      "month": this._intl.prevMonthLabel,
      "year": this._intl.prevYearLabel,
      "multi-year": this._intl.prevMultiYearLabel
    }[this.calendar.currentView];
  }
  /** The label for the next button. */
  get nextButtonLabel() {
    return {
      "month": this._intl.nextMonthLabel,
      "year": this._intl.nextYearLabel,
      "multi-year": this._intl.nextMultiYearLabel
    }[this.calendar.currentView];
  }
  /** Handles user clicks on the period label. */
  currentPeriodClicked() {
    this.calendar.currentView = this.calendar.currentView == "month" ? "multi-year" : "month";
  }
  /** Handles user clicks on the previous button. */
  previousClicked() {
    this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? -1 : -yearsPerPage);
  }
  /** Handles user clicks on the next button. */
  nextClicked() {
    this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? 1 : yearsPerPage);
  }
  /** Whether the previous period button is enabled. */
  previousEnabled() {
    if (!this.calendar.minDate) {
      return true;
    }
    return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
  }
  /** Whether the next period button is enabled. */
  nextEnabled() {
    return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
  }
  /** Whether the two dates represent the same view in the current view mode (month or year). */
  _isSameView(date1, date2) {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
    }
    return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
  }
  /**
   * Format two individual labels for the minimum year and maximum year available in the multi-year
   * calendar view. Returns an array of two strings where the first string is the formatted label
   * for the minimum year, and the second string is the formatted label for the maximum year.
   */
  _formatMinAndMaxYearLabels() {
    const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
    const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
    const minYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
    const maxYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
    return [minYearLabel, maxYearLabel];
  }
  static {
    this.\u0275fac = function MatCalendarHeader_Factory(t) {
      return new (t || _MatCalendarHeader)(\u0275\u0275directiveInject(MatDatepickerIntl), \u0275\u0275directiveInject(forwardRef(() => MatCalendar)), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatCalendarHeader,
      selectors: [["mat-calendar-header"]],
      exportAs: ["matCalendarHeader"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c12,
      decls: 13,
      vars: 11,
      consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], [1, "cdk-visually-hidden", 3, "id"], ["mat-button", "", "type", "button", "aria-live", "polite", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "click", "disabled"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "click", "disabled"]],
      template: function MatCalendarHeader_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "label", 2);
          \u0275\u0275text(3);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "button", 3);
          \u0275\u0275listener("click", function MatCalendarHeader_Template_button_click_4_listener() {
            return ctx.currentPeriodClicked();
          });
          \u0275\u0275elementStart(5, "span", 4);
          \u0275\u0275text(6);
          \u0275\u0275elementEnd();
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(7, "svg", 5);
          \u0275\u0275element(8, "polygon", 6);
          \u0275\u0275elementEnd()();
          \u0275\u0275namespaceHTML();
          \u0275\u0275element(9, "div", 7);
          \u0275\u0275projection(10);
          \u0275\u0275elementStart(11, "button", 8);
          \u0275\u0275listener("click", function MatCalendarHeader_Template_button_click_11_listener() {
            return ctx.previousClicked();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(12, "button", 9);
          \u0275\u0275listener("click", function MatCalendarHeader_Template_button_click_12_listener() {
            return ctx.nextClicked();
          });
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275property("id", ctx._periodButtonLabelId);
          \u0275\u0275advance();
          \u0275\u0275textInterpolate(ctx.periodButtonDescription);
          \u0275\u0275advance();
          \u0275\u0275attribute("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._periodButtonLabelId);
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate(ctx.periodButtonText);
          \u0275\u0275advance();
          \u0275\u0275classProp("mat-calendar-invert", ctx.calendar.currentView !== "month");
          \u0275\u0275advance(4);
          \u0275\u0275property("disabled", !ctx.previousEnabled());
          \u0275\u0275attribute("aria-label", ctx.prevButtonLabel);
          \u0275\u0275advance();
          \u0275\u0275property("disabled", !ctx.nextEnabled());
          \u0275\u0275attribute("aria-label", ctx.nextButtonLabel);
        }
      },
      dependencies: [MatButton, MatIconButton],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendarHeader, [{
    type: Component,
    args: [{
      selector: "mat-calendar-header",
      exportAs: "matCalendarHeader",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatButton, MatIconButton],
      template: `<div class="mat-calendar-header">
  <div class="mat-calendar-controls">
    <!-- [Firefox Issue: https://bugzilla.mozilla.org/show_bug.cgi?id=1880533] 
      Relocated label next to related button and made visually hidden via cdk-visually-hidden
      to enable label to appear in a11y tree for SR when using Firefox -->
    <label [id]="_periodButtonLabelId" class="cdk-visually-hidden">{{periodButtonDescription}}</label>
    <button mat-button type="button" class="mat-calendar-period-button"
            (click)="currentPeriodClicked()" [attr.aria-label]="periodButtonLabel"
            [attr.aria-describedby]="_periodButtonLabelId" aria-live="polite">
      <span aria-hidden="true">{{periodButtonText}}</span>
      <svg class="mat-calendar-arrow" [class.mat-calendar-invert]="calendar.currentView !== 'month'"
           viewBox="0 0 10 5" focusable="false" aria-hidden="true">
           <polygon points="0,0 5,5 10,0"/>
      </svg>
    </button>

    <div class="mat-calendar-spacer"></div>

    <ng-content></ng-content>

    <button mat-icon-button type="button" class="mat-calendar-previous-button"
            [disabled]="!previousEnabled()" (click)="previousClicked()"
            [attr.aria-label]="prevButtonLabel">
    </button>

    <button mat-icon-button type="button" class="mat-calendar-next-button"
            [disabled]="!nextEnabled()" (click)="nextClicked()"
            [attr.aria-label]="nextButtonLabel">
    </button>
  </div>
</div>
`
    }]
  }], () => [{
    type: MatDatepickerIntl
  }, {
    type: MatCalendar,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => MatCalendar)]
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var MatCalendar = class _MatCalendar {
  /** A date representing the period (month or year) to start the calendar in. */
  get startAt() {
    return this._startAt;
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get activeDate() {
    return this._clampedActiveDate;
  }
  set activeDate(value) {
    this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
    this.stateChanges.next();
    this._changeDetectorRef.markForCheck();
  }
  /** Whether the calendar is in month view. */
  get currentView() {
    return this._currentView;
  }
  set currentView(value) {
    const viewChangedResult = this._currentView !== value ? value : null;
    this._currentView = value;
    this._moveFocusOnNextTick = true;
    this._changeDetectorRef.markForCheck();
    if (viewChangedResult) {
      this.viewChanged.emit(viewChangedResult);
    }
  }
  constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._changeDetectorRef = _changeDetectorRef;
    this._moveFocusOnNextTick = false;
    this.startView = "month";
    this.selectedChange = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.viewChanged = new EventEmitter(true);
    this._userSelection = new EventEmitter();
    this._userDragDrop = new EventEmitter();
    this._activeDrag = null;
    this.stateChanges = new Subject();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._intlChanges = _intl.changes.subscribe(() => {
      _changeDetectorRef.markForCheck();
      this.stateChanges.next();
    });
  }
  ngAfterContentInit() {
    this._calendarHeaderPortal = new ComponentPortal(this.headerComponent || MatCalendarHeader);
    this.activeDate = this.startAt || this._dateAdapter.today();
    this._currentView = this.startView;
  }
  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }
  ngOnDestroy() {
    this._intlChanges.unsubscribe();
    this.stateChanges.complete();
  }
  ngOnChanges(changes) {
    const minDateChange = changes["minDate"] && !this._dateAdapter.sameDate(changes["minDate"].previousValue, changes["minDate"].currentValue) ? changes["minDate"] : void 0;
    const maxDateChange = changes["maxDate"] && !this._dateAdapter.sameDate(changes["maxDate"].previousValue, changes["maxDate"].currentValue) ? changes["maxDate"] : void 0;
    const change = minDateChange || maxDateChange || changes["dateFilter"];
    if (change && !change.firstChange) {
      const view = this._getCurrentViewComponent();
      if (view) {
        this._changeDetectorRef.detectChanges();
        view._init();
      }
    }
    this.stateChanges.next();
  }
  /** Focuses the active date. */
  focusActiveCell() {
    this._getCurrentViewComponent()._focusActiveCell(false);
  }
  /** Updates today's date after an update of the active date */
  updateTodaysDate() {
    this._getCurrentViewComponent()._init();
  }
  /** Handles date selection in the month view. */
  _dateSelected(event) {
    const date = event.value;
    if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
      this.selectedChange.emit(date);
    }
    this._userSelection.emit(event);
  }
  /** Handles year selection in the multiyear view. */
  _yearSelectedInMultiYearView(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Handles month selection in the year view. */
  _monthSelectedInYearView(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Handles year/month selection in the multi-year/year views. */
  _goToDateInView(date, view) {
    this.activeDate = date;
    this.currentView = view;
  }
  /** Called when the user starts dragging to change a date range. */
  _dragStarted(event) {
    this._activeDrag = event;
  }
  /**
   * Called when a drag completes. It may end in cancelation or in the selection
   * of a new range.
   */
  _dragEnded(event) {
    if (!this._activeDrag)
      return;
    if (event.value) {
      this._userDragDrop.emit(event);
    }
    this._activeDrag = null;
  }
  /** Returns the component instance that corresponds to the current calendar view. */
  _getCurrentViewComponent() {
    return this.monthView || this.yearView || this.multiYearView;
  }
  static {
    this.\u0275fac = function MatCalendar_Factory(t) {
      return new (t || _MatCalendar)(\u0275\u0275directiveInject(MatDatepickerIntl), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatCalendar,
      selectors: [["mat-calendar"]],
      viewQuery: function MatCalendar_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(MatMonthView, 5);
          \u0275\u0275viewQuery(MatYearView, 5);
          \u0275\u0275viewQuery(MatMultiYearView, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.monthView = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.yearView = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiYearView = _t.first);
        }
      },
      hostAttrs: [1, "mat-calendar"],
      inputs: {
        headerComponent: "headerComponent",
        startAt: "startAt",
        startView: "startView",
        selected: "selected",
        minDate: "minDate",
        maxDate: "maxDate",
        dateFilter: "dateFilter",
        dateClass: "dateClass",
        comparisonStart: "comparisonStart",
        comparisonEnd: "comparisonEnd",
        startDateAccessibleName: "startDateAccessibleName",
        endDateAccessibleName: "endDateAccessibleName"
      },
      outputs: {
        selectedChange: "selectedChange",
        yearSelected: "yearSelected",
        monthSelected: "monthSelected",
        viewChanged: "viewChanged",
        _userSelection: "_userSelection",
        _userDragDrop: "_userDragDrop"
      },
      exportAs: ["matCalendar"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 5,
      vars: 2,
      consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content"], [3, "activeDateChange", "_userSelection", "dragStarted", "dragEnded", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDateChange", "monthSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "yearSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"]],
      template: function MatCalendar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275template(2, MatCalendar_Case_2_Template, 1, 11)(3, MatCalendar_Case_3_Template, 1, 6)(4, MatCalendar_Case_4_Template, 1, 6);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          let tmp_1_0;
          \u0275\u0275property("cdkPortalOutlet", ctx._calendarHeaderPortal);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(2, (tmp_1_0 = ctx.currentView) === "month" ? 2 : tmp_1_0 === "year" ? 3 : tmp_1_0 === "multi-year" ? 4 : -1);
        }
      },
      dependencies: [CdkPortalOutlet, CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
      styles: ['.mat-calendar{display:block;font-family:var(--mat-datepicker-calendar-text-font);font-size:var(--mat-datepicker-calendar-text-size)}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size);font-weight:var(--mat-datepicker-calendar-period-button-text-weight);--mdc-text-button-label-text-color:var(--mat-datepicker-calendar-period-button-text-color)}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color)}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color)}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:"";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color);font-size:var(--mat-datepicker-calendar-header-text-size);font-weight:var(--mat-datepicker-calendar-header-text-weight)}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:""}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendar, [{
    type: Component,
    args: [{
      selector: "mat-calendar",
      host: {
        "class": "mat-calendar"
      },
      exportAs: "matCalendar",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
      standalone: true,
      imports: [CdkPortalOutlet, CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
      template: `<ng-template [cdkPortalOutlet]="_calendarHeaderPortal"></ng-template>

<div class="mat-calendar-content" cdkMonitorSubtreeFocus tabindex="-1">
  @switch (currentView) {
    @case ('month') {
        <mat-month-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            [comparisonStart]="comparisonStart"
            [comparisonEnd]="comparisonEnd"
            [startDateAccessibleName]="startDateAccessibleName"
            [endDateAccessibleName]="endDateAccessibleName"
            (_userSelection)="_dateSelected($event)"
            (dragStarted)="_dragStarted($event)"
            (dragEnded)="_dragEnded($event)"
            [activeDrag]="_activeDrag"></mat-month-view>
    }

    @case ('year') {
        <mat-year-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            (monthSelected)="_monthSelectedInYearView($event)"
            (selectedChange)="_goToDateInView($event, 'month')"></mat-year-view>
    }

    @case ('multi-year') {
        <mat-multi-year-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            (yearSelected)="_yearSelectedInMultiYearView($event)"
            (selectedChange)="_goToDateInView($event, 'year')"></mat-multi-year-view>
    }
  }
</div>
`,
      styles: ['.mat-calendar{display:block;font-family:var(--mat-datepicker-calendar-text-font);font-size:var(--mat-datepicker-calendar-text-size)}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size);font-weight:var(--mat-datepicker-calendar-period-button-text-weight);--mdc-text-button-label-text-color:var(--mat-datepicker-calendar-period-button-text-color)}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color)}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color)}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:"";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color);font-size:var(--mat-datepicker-calendar-header-text-size);font-weight:var(--mat-datepicker-calendar-header-text-weight)}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: MatDatepickerIntl
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    headerComponent: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    startView: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    viewChanged: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    _userDragDrop: [{
      type: Output
    }],
    monthView: [{
      type: ViewChild,
      args: [MatMonthView]
    }],
    yearView: [{
      type: ViewChild,
      args: [MatYearView]
    }],
    multiYearView: [{
      type: ViewChild,
      args: [MatMultiYearView]
    }]
  });
})();
var matDatepickerAnimations = {
  /** Transforms the height of the datepicker's calendar. */
  transformPanel: trigger("transformPanel", [transition("void => enter-dropdown", animate("120ms cubic-bezier(0, 0, 0.2, 1)", keyframes([style({
    opacity: 0,
    transform: "scale(1, 0.8)"
  }), style({
    opacity: 1,
    transform: "scale(1, 1)"
  })]))), transition("void => enter-dialog", animate("150ms cubic-bezier(0, 0, 0.2, 1)", keyframes([style({
    opacity: 0,
    transform: "scale(0.7)"
  }), style({
    transform: "none",
    opacity: 1
  })]))), transition("* => void", animate("100ms linear", style({
    opacity: 0
  })))]),
  /** Fades in the content of the calendar. */
  fadeInCalendar: trigger("fadeInCalendar", [
    state("void", style({
      opacity: 0
    })),
    state("enter", style({
      opacity: 1
    })),
    // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
    // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
    transition("void => *", animate("120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"))
  ])
};
var datepickerUid = 0;
var MAT_DATEPICKER_SCROLL_STRATEGY = new InjectionToken("mat-datepicker-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
var MatDatepickerContent = class _MatDatepickerContent {
  constructor(_elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, intl) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._globalModel = _globalModel;
    this._dateAdapter = _dateAdapter;
    this._rangeSelectionStrategy = _rangeSelectionStrategy;
    this._subscriptions = new Subscription();
    this._animationDone = new Subject();
    this._isAnimating = false;
    this._actionsPortal = null;
    this._closeButtonText = intl.closeCalendarLabel;
  }
  ngOnInit() {
    this._animationState = this.datepicker.touchUi ? "enter-dialog" : "enter-dropdown";
  }
  ngAfterViewInit() {
    this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    }));
    this._calendar.focusActiveCell();
  }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this._animationDone.complete();
  }
  _handleUserSelection(event) {
    const selection = this._model.selection;
    const value = event.value;
    const isRange = selection instanceof DateRange;
    if (isRange && this._rangeSelectionStrategy) {
      const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
      this._model.updateSelection(newSelection, this);
    } else if (value && (isRange || !this._dateAdapter.sameDate(value, selection))) {
      this._model.add(value);
    }
    if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
      this.datepicker.close();
    }
  }
  _handleUserDragDrop(event) {
    this._model.updateSelection(event.value, this);
  }
  _startExitAnimation() {
    this._animationState = "void";
    this._changeDetectorRef.markForCheck();
  }
  _handleAnimationEvent(event) {
    this._isAnimating = event.phaseName === "start";
    if (!this._isAnimating) {
      this._animationDone.next();
    }
  }
  _getSelected() {
    return this._model.selection;
  }
  /** Applies the current pending selection to the global model. */
  _applyPendingSelection() {
    if (this._model !== this._globalModel) {
      this._globalModel.updateSelection(this._model.selection, this);
    }
  }
  /**
   * Assigns a new portal containing the datepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
   * necessary if the portal is assigned during initialization, but it may be required if it's
   * added at a later point.
   */
  _assignActions(portal, forceRerender) {
    this._model = portal ? this._globalModel.clone() : this._globalModel;
    this._actionsPortal = portal;
    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }
  static {
    this.\u0275fac = function MatDatepickerContent_Factory(t) {
      return new (t || _MatDatepickerContent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatDateSelectionModel), \u0275\u0275directiveInject(DateAdapter), \u0275\u0275directiveInject(MAT_DATE_RANGE_SELECTION_STRATEGY, 8), \u0275\u0275directiveInject(MatDatepickerIntl));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatDatepickerContent,
      selectors: [["mat-datepicker-content"]],
      viewQuery: function MatDatepickerContent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(MatCalendar, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._calendar = _t.first);
        }
      },
      hostAttrs: [1, "mat-datepicker-content"],
      hostVars: 5,
      hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275syntheticHostListener("@transformPanel.start", function MatDatepickerContent_animation_transformPanel_start_HostBindingHandler($event) {
            return ctx._handleAnimationEvent($event);
          })("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler($event) {
            return ctx._handleAnimationEvent($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275syntheticHostProperty("@transformPanel", ctx._animationState);
          \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
          \u0275\u0275classProp("mat-datepicker-content-touch", ctx.datepicker.touchUi);
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["matDatepickerContent"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 5,
      vars: 27,
      consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop", "id", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "focus", "blur", "click", "color"]],
      template: function MatDatepickerContent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "mat-calendar", 1);
          \u0275\u0275listener("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) {
            return ctx.datepicker._selectYear($event);
          })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) {
            return ctx.datepicker._selectMonth($event);
          })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) {
            return ctx.datepicker._viewChanged($event);
          })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) {
            return ctx._handleUserSelection($event);
          })("_userDragDrop", function MatDatepickerContent_Template_mat_calendar__userDragDrop_1_listener($event) {
            return ctx._handleUserDragDrop($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275template(2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
          \u0275\u0275elementStart(3, "button", 3);
          \u0275\u0275listener("focus", function MatDatepickerContent_Template_button_focus_3_listener() {
            return ctx._closeButtonFocused = true;
          })("blur", function MatDatepickerContent_Template_button_blur_3_listener() {
            return ctx._closeButtonFocused = false;
          })("click", function MatDatepickerContent_Template_button_click_3_listener() {
            return ctx.datepicker.close();
          });
          \u0275\u0275text(4);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          let tmp_3_0;
          \u0275\u0275classProp("mat-datepicker-content-container-with-custom-header", ctx.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
          \u0275\u0275attribute("aria-modal", true)("aria-labelledby", (tmp_3_0 = ctx._dialogLabelId) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : void 0);
          \u0275\u0275advance();
          \u0275\u0275classMap(ctx.datepicker.panelClass);
          \u0275\u0275property("id", ctx.datepicker.id)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter")("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
          \u0275\u0275advance();
          \u0275\u0275property("cdkPortalOutlet", ctx._actionsPortal);
          \u0275\u0275advance();
          \u0275\u0275classProp("cdk-visually-hidden", !ctx._closeButtonFocused);
          \u0275\u0275property("color", ctx.color || "primary");
          \u0275\u0275advance();
          \u0275\u0275textInterpolate(ctx._closeButtonText);
        }
      },
      dependencies: [CdkTrapFocus, MatCalendar, CdkPortalOutlet, MatButton],
      styles: [".mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color);color:var(--mat-datepicker-calendar-container-text-color);box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-touch-shape);position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"],
      encapsulation: 2,
      data: {
        animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerContent, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-content",
      host: {
        "class": "mat-datepicker-content",
        "[class]": 'color ? "mat-" + color : ""',
        "[@transformPanel]": "_animationState",
        "(@transformPanel.start)": "_handleAnimationEvent($event)",
        "(@transformPanel.done)": "_handleAnimationEvent($event)",
        "[class.mat-datepicker-content-touch]": "datepicker.touchUi"
      },
      animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
      exportAs: "matDatepickerContent",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [CdkTrapFocus, MatCalendar, CdkPortalOutlet, MatButton],
      template: `<div
  cdkTrapFocus
  role="dialog"
  [attr.aria-modal]="true"
  [attr.aria-labelledby]="_dialogLabelId ?? undefined"
  class="mat-datepicker-content-container"
  [class.mat-datepicker-content-container-with-custom-header]="datepicker.calendarHeaderComponent"
  [class.mat-datepicker-content-container-with-actions]="_actionsPortal">
  <mat-calendar
    [id]="datepicker.id"
    [class]="datepicker.panelClass"
    [startAt]="datepicker.startAt"
    [startView]="datepicker.startView"
    [minDate]="datepicker._getMinDate()"
    [maxDate]="datepicker._getMaxDate()"
    [dateFilter]="datepicker._getDateFilter()"
    [headerComponent]="datepicker.calendarHeaderComponent"
    [selected]="_getSelected()"
    [dateClass]="datepicker.dateClass"
    [comparisonStart]="comparisonStart"
    [comparisonEnd]="comparisonEnd"
    [@fadeInCalendar]="'enter'"
    [startDateAccessibleName]="startDateAccessibleName"
    [endDateAccessibleName]="endDateAccessibleName"
    (yearSelected)="datepicker._selectYear($event)"
    (monthSelected)="datepicker._selectMonth($event)"
    (viewChanged)="datepicker._viewChanged($event)"
    (_userSelection)="_handleUserSelection($event)"
    (_userDragDrop)="_handleUserDragDrop($event)"></mat-calendar>

  <ng-template [cdkPortalOutlet]="_actionsPortal"></ng-template>

  <!-- Invisible close button for screen reader users. -->
  <button
    type="button"
    mat-raised-button
    [color]="color || 'primary'"
    class="mat-datepicker-close-button"
    [class.cdk-visually-hidden]="!_closeButtonFocused"
    (focus)="_closeButtonFocused = true"
    (blur)="_closeButtonFocused = false"
    (click)="datepicker.close()">{{ _closeButtonText }}</button>
</div>
`,
      styles: [".mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color);color:var(--mat-datepicker-calendar-container-text-color);box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-touch-shape);position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: MatDateSelectionModel
  }, {
    type: DateAdapter
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
    }]
  }, {
    type: MatDatepickerIntl
  }], {
    _calendar: [{
      type: ViewChild,
      args: [MatCalendar]
    }],
    color: [{
      type: Input
    }]
  });
})();
var MatDatepickerBase = class _MatDatepickerBase {
  /** The date to open the calendar to initially. */
  get startAt() {
    return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** Color palette to use on the datepicker's calendar. */
  get color() {
    return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : void 0);
  }
  set color(value) {
    this._color = value;
  }
  /** Whether the datepicker pop-up should be disabled. */
  get disabled() {
    return this._disabled === void 0 && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this.stateChanges.next(void 0);
    }
  }
  /** Classes to be passed to the date picker panel. */
  get panelClass() {
    return this._panelClass;
  }
  set panelClass(value) {
    this._panelClass = coerceStringArray(value);
  }
  /** Whether the calendar is open. */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    if (value) {
      this.open();
    } else {
      this.close();
    }
  }
  /** The minimum selectable date. */
  _getMinDate() {
    return this.datepickerInput && this.datepickerInput.min;
  }
  /** The maximum selectable date. */
  _getMaxDate() {
    return this.datepickerInput && this.datepickerInput.max;
  }
  _getDateFilter() {
    return this.datepickerInput && this.datepickerInput.dateFilter;
  }
  constructor(_overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _model) {
    this._overlay = _overlay;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._model = _model;
    this._inputStateChanges = Subscription.EMPTY;
    this._document = inject(DOCUMENT);
    this.startView = "month";
    this.touchUi = false;
    this.xPosition = "start";
    this.yPosition = "below";
    this.restoreFocus = true;
    this.yearSelected = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.viewChanged = new EventEmitter(true);
    this.openedStream = new EventEmitter();
    this.closedStream = new EventEmitter();
    this._opened = false;
    this.id = `mat-datepicker-${datepickerUid++}`;
    this._focusedElementBeforeOpen = null;
    this._backdropHarnessClass = `${this.id}-backdrop`;
    this.stateChanges = new Subject();
    if (!this._dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    this._scrollStrategy = scrollStrategy;
  }
  ngOnChanges(changes) {
    const positionChange = changes["xPosition"] || changes["yPosition"];
    if (positionChange && !positionChange.firstChange && this._overlayRef) {
      const positionStrategy = this._overlayRef.getConfig().positionStrategy;
      if (positionStrategy instanceof FlexibleConnectedPositionStrategy) {
        this._setConnectedPositions(positionStrategy);
        if (this.opened) {
          this._overlayRef.updatePosition();
        }
      }
    }
    this.stateChanges.next(void 0);
  }
  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this.stateChanges.complete();
  }
  /** Selects the given date */
  select(date) {
    this._model.add(date);
  }
  /** Emits the selected year in multiyear view */
  _selectYear(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Emits selected month in year view */
  _selectMonth(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Emits changed view */
  _viewChanged(view) {
    this.viewChanged.emit(view);
  }
  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   * @returns Selection model that the input should hook itself up to.
   */
  registerInput(input) {
    if (this.datepickerInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("A MatDatepicker can only be associated with a single input.");
    }
    this._inputStateChanges.unsubscribe();
    this.datepickerInput = input;
    this._inputStateChanges = input.stateChanges.subscribe(() => this.stateChanges.next(void 0));
    return this._model;
  }
  /**
   * Registers a portal containing action buttons with the datepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal) {
    if (this._actionsPortal && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("A MatDatepicker can only be associated with a single actions row.");
    }
    this._actionsPortal = portal;
    this._componentRef?.instance._assignActions(portal, true);
  }
  /**
   * Removes a portal containing action buttons from the datepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal) {
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      this._componentRef?.instance._assignActions(null, true);
    }
  }
  /** Open the calendar. */
  open() {
    if (this._opened || this.disabled || this._componentRef?.instance._isAnimating) {
      return;
    }
    if (!this.datepickerInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Attempted to open an MatDatepicker with no associated input.");
    }
    this._focusedElementBeforeOpen = _getFocusedElementPierceShadowDom();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }
  /** Close the calendar. */
  close() {
    if (!this._opened || this._componentRef?.instance._isAnimating) {
      return;
    }
    const canRestoreFocus = this.restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === "function";
    const completeClose = () => {
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };
    if (this._componentRef) {
      const {
        instance,
        location
      } = this._componentRef;
      instance._startExitAnimation();
      instance._animationDone.pipe(take(1)).subscribe(() => {
        const activeElement = this._document.activeElement;
        if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
          this._focusedElementBeforeOpen.focus();
        }
        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });
    }
    if (canRestoreFocus) {
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /** Applies the current pending selection on the overlay to the model. */
  _applyPendingSelection() {
    this._componentRef?.instance?._applyPendingSelection();
  }
  /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
  _forwardContentValues(instance) {
    instance.datepicker = this;
    instance.color = this.color;
    instance._dialogLabelId = this.datepickerInput.getOverlayLabelId();
    instance._assignActions(this._actionsPortal, false);
  }
  /** Opens the overlay with the calendar. */
  _openOverlay() {
    this._destroyOverlay();
    const isDialog = this.touchUi;
    const portal = new ComponentPortal(MatDatepickerContent, this._viewContainerRef);
    const overlayRef = this._overlayRef = this._overlay.create(new OverlayConfig({
      positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
      hasBackdrop: true,
      backdropClass: [isDialog ? "cdk-overlay-dark-backdrop" : "mat-overlay-transparent-backdrop", this._backdropHarnessClass],
      direction: this._dir,
      scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
      panelClass: `mat-datepicker-${isDialog ? "dialog" : "popup"}`
    }));
    this._getCloseStream(overlayRef).subscribe((event) => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });
    overlayRef.keydownEvents().subscribe((event) => {
      const keyCode = event.keyCode;
      if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === PAGE_UP || keyCode === PAGE_DOWN) {
        event.preventDefault();
      }
    });
    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);
    if (!isDialog) {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => overlayRef.updatePosition());
    }
  }
  /** Destroys the current overlay. */
  _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDialogStrategy() {
    return this._overlay.position().global().centerHorizontally().centerVertically();
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDropdownStrategy() {
    const strategy = this._overlay.position().flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
    return this._setConnectedPositions(strategy);
  }
  /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
  _setConnectedPositions(strategy) {
    const primaryX = this.xPosition === "end" ? "end" : "start";
    const secondaryX = primaryX === "start" ? "end" : "start";
    const primaryY = this.yPosition === "above" ? "bottom" : "top";
    const secondaryY = primaryY === "top" ? "bottom" : "top";
    return strategy.withPositions([{
      originX: primaryX,
      originY: secondaryY,
      overlayX: primaryX,
      overlayY: primaryY
    }, {
      originX: primaryX,
      originY: primaryY,
      overlayX: primaryX,
      overlayY: secondaryY
    }, {
      originX: secondaryX,
      originY: secondaryY,
      overlayX: secondaryX,
      overlayY: primaryY
    }, {
      originX: secondaryX,
      originY: primaryY,
      overlayX: secondaryX,
      overlayY: secondaryY
    }]);
  }
  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  _getCloseStream(overlayRef) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    return merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((event) => {
      return event.keyCode === ESCAPE && !hasModifierKey(event) || this.datepickerInput && hasModifierKey(event, "altKey") && event.keyCode === UP_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    })));
  }
  static {
    this.\u0275fac = function MatDatepickerBase_Factory(t) {
      return new (t || _MatDatepickerBase)(\u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(MAT_DATEPICKER_SCROLL_STRATEGY), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(MatDateSelectionModel));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDatepickerBase,
      inputs: {
        calendarHeaderComponent: "calendarHeaderComponent",
        startAt: "startAt",
        startView: "startView",
        color: "color",
        touchUi: [InputFlags.HasDecoratorInputTransform, "touchUi", "touchUi", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        xPosition: "xPosition",
        yPosition: "yPosition",
        restoreFocus: [InputFlags.HasDecoratorInputTransform, "restoreFocus", "restoreFocus", booleanAttribute],
        dateClass: "dateClass",
        panelClass: "panelClass",
        opened: [InputFlags.HasDecoratorInputTransform, "opened", "opened", booleanAttribute]
      },
      outputs: {
        yearSelected: "yearSelected",
        monthSelected: "monthSelected",
        viewChanged: "viewChanged",
        openedStream: "opened",
        closedStream: "closed"
      },
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerBase, [{
    type: Directive
  }], () => [{
    type: Overlay
  }, {
    type: NgZone
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DATEPICKER_SCROLL_STRATEGY]
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: MatDateSelectionModel
  }], {
    calendarHeaderComponent: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    startView: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    touchUi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    restoreFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    viewChanged: [{
      type: Output
    }],
    dateClass: [{
      type: Input
    }],
    openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    panelClass: [{
      type: Input
    }],
    opened: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatDatepicker = class _MatDatepicker extends MatDatepickerBase {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatDatepicker_BaseFactory;
      return function MatDatepicker_Factory(t) {
        return (\u0275MatDatepicker_BaseFactory || (\u0275MatDatepicker_BaseFactory = \u0275\u0275getInheritedFactory(_MatDatepicker)))(t || _MatDatepicker);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatDatepicker,
      selectors: [["mat-datepicker"]],
      exportAs: ["matDatepicker"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: _MatDatepicker
      }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function MatDatepicker_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepicker, [{
    type: Component,
    args: [{
      selector: "mat-datepicker",
      template: "",
      exportAs: "matDatepicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDatepicker
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatDatepickerInputEvent = class {
  constructor(target, targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
};
var MatDatepickerInputBase = class _MatDatepickerInputBase {
  /** The value of the input. */
  get value() {
    return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
  }
  set value(value) {
    this._assignValueProgrammatically(value);
  }
  /** Whether the datepicker-input is disabled. */
  get disabled() {
    return !!this._disabled || this._parentDisabled();
  }
  set disabled(value) {
    const newValue = value;
    const element = this._elementRef.nativeElement;
    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this.stateChanges.next(void 0);
    }
    if (newValue && this._isInitialized && element.blur) {
      element.blur();
    }
  }
  /** Gets the base validator functions. */
  _getValidators() {
    return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
  }
  /** Registers a date selection model with the input. */
  _registerModel(model) {
    this._model = model;
    this._valueChangesSubscription.unsubscribe();
    if (this._pendingValue) {
      this._assignValue(this._pendingValue);
    }
    this._valueChangesSubscription = this._model.selectionChanged.subscribe((event) => {
      if (this._shouldHandleChangeEvent(event)) {
        const value = this._getValueFromModel(event.selection);
        this._lastValueValid = this._isValidValue(value);
        this._cvaOnChange(value);
        this._onTouched();
        this._formatValue(value);
        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
      }
    });
  }
  constructor(_elementRef, _dateAdapter, _dateFormats) {
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this.dateChange = new EventEmitter();
    this.dateInput = new EventEmitter();
    this.stateChanges = new Subject();
    this._onTouched = () => {
    };
    this._validatorOnChange = () => {
    };
    this._cvaOnChange = () => {
    };
    this._valueChangesSubscription = Subscription.EMPTY;
    this._localeSubscription = Subscription.EMPTY;
    this._parseValidator = () => {
      return this._lastValueValid ? null : {
        "matDatepickerParse": {
          "text": this._elementRef.nativeElement.value
        }
      };
    };
    this._filterValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      return !controlValue || this._matchesFilter(controlValue) ? null : {
        "matDatepickerFilter": true
      };
    };
    this._minValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const min = this._getMinDate();
      return !min || !controlValue || this._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
        "matDatepickerMin": {
          "min": min,
          "actual": controlValue
        }
      };
    };
    this._maxValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const max = this._getMaxDate();
      return !max || !controlValue || this._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
        "matDatepickerMax": {
          "max": max,
          "actual": controlValue
        }
      };
    };
    this._lastValueValid = false;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
      this._assignValueProgrammatically(this.value);
    });
  }
  ngAfterViewInit() {
    this._isInitialized = true;
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._valueChangesSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** @docs-private */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** @docs-private */
  validate(c) {
    return this._validator ? this._validator(c) : null;
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this._assignValueProgrammatically(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._cvaOnChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _onKeydown(event) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    const isAltDownArrow = hasModifierKey(event, "altKey") && event.keyCode === DOWN_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._openPopup();
      event.preventDefault();
    }
  }
  _onInput(value) {
    const lastValueWasValid = this._lastValueValid;
    let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
    this._lastValueValid = this._isValidValue(date);
    date = this._dateAdapter.getValidDateOrNull(date);
    const hasChanged = !this._dateAdapter.sameDate(date, this.value);
    if (!date || hasChanged) {
      this._cvaOnChange(date);
    } else {
      if (value && !this.value) {
        this._cvaOnChange(date);
      }
      if (lastValueWasValid !== this._lastValueValid) {
        this._validatorOnChange();
      }
    }
    if (hasChanged) {
      this._assignValue(date);
      this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
  }
  _onChange() {
    this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
  }
  /** Handles blur events on the input. */
  _onBlur() {
    if (this.value) {
      this._formatValue(this.value);
    }
    this._onTouched();
  }
  /** Formats a value and sets it on the input element. */
  _formatValue(value) {
    this._elementRef.nativeElement.value = value != null ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : "";
  }
  /** Assigns a value to the model. */
  _assignValue(value) {
    if (this._model) {
      this._assignValueToModel(value);
      this._pendingValue = null;
    } else {
      this._pendingValue = value;
    }
  }
  /** Whether a value is considered valid. */
  _isValidValue(value) {
    return !value || this._dateAdapter.isValid(value);
  }
  /**
   * Checks whether a parent control is disabled. This is in place so that it can be overridden
   * by inputs extending this one which can be placed inside of a group that can be disabled.
   */
  _parentDisabled() {
    return false;
  }
  /** Programmatically assigns a value to the input. */
  _assignValueProgrammatically(value) {
    value = this._dateAdapter.deserialize(value);
    this._lastValueValid = this._isValidValue(value);
    value = this._dateAdapter.getValidDateOrNull(value);
    this._assignValue(value);
    this._formatValue(value);
  }
  /** Gets whether a value matches the current date filter. */
  _matchesFilter(value) {
    const filter2 = this._getDateFilter();
    return !filter2 || filter2(value);
  }
  static {
    this.\u0275fac = function MatDatepickerInputBase_Factory(t) {
      return new (t || _MatDatepickerInputBase)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(MAT_DATE_FORMATS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDatepickerInputBase,
      inputs: {
        value: "value",
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
      },
      outputs: {
        dateChange: "dateChange",
        dateInput: "dateInput"
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerInputBase, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }], {
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dateChange: [{
      type: Output
    }],
    dateInput: [{
      type: Output
    }]
  });
})();
function dateInputsHaveChanged(changes, adapter) {
  const keys = Object.keys(changes);
  for (let key of keys) {
    const {
      previousValue,
      currentValue
    } = changes[key];
    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}
var MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatDatepickerInput),
  multi: true
};
var MAT_DATEPICKER_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatDatepickerInput),
  multi: true
};
var MatDatepickerInput = class _MatDatepickerInput extends MatDatepickerInputBase {
  /** The datepicker that this input is associated with. */
  set matDatepicker(datepicker) {
    if (datepicker) {
      this._datepicker = datepicker;
      this._closedSubscription = datepicker.closedStream.subscribe(() => this._onTouched());
      this._registerModel(datepicker.registerInput(this));
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._validatorOnChange();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._validatorOnChange();
    }
  }
  /** Function that can be used to filter out dates within the datepicker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const wasMatchingValue = this._matchesFilter(this.value);
    this._dateFilter = value;
    if (this._matchesFilter(this.value) !== wasMatchingValue) {
      this._validatorOnChange();
    }
  }
  constructor(elementRef, dateAdapter, dateFormats3, _formField) {
    super(elementRef, dateAdapter, dateFormats3);
    this._formField = _formField;
    this._closedSubscription = Subscription.EMPTY;
    this._validator = Validators.compose(super._getValidators());
  }
  /**
   * Gets the element that the datepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    if (this._formField) {
      return this._formField.getLabelId();
    }
    return this._elementRef.nativeElement.getAttribute("aria-labelledby");
  }
  /** Returns the palette used by the input's form field, if any. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the value at which the calendar should start. */
  getStartValue() {
    return this.value;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._closedSubscription.unsubscribe();
  }
  /** Opens the associated datepicker. */
  _openPopup() {
    if (this._datepicker) {
      this._datepicker.open();
    }
  }
  _getValueFromModel(modelValue) {
    return modelValue;
  }
  _assignValueToModel(value) {
    if (this._model) {
      this._model.updateSelection(value, this);
    }
  }
  /** Gets the input's minimum date. */
  _getMinDate() {
    return this._min;
  }
  /** Gets the input's maximum date. */
  _getMaxDate() {
    return this._max;
  }
  /** Gets the input's date filtering function. */
  _getDateFilter() {
    return this._dateFilter;
  }
  _shouldHandleChangeEvent(event) {
    return event.source !== this;
  }
  static {
    this.\u0275fac = function MatDatepickerInput_Factory(t) {
      return new (t || _MatDatepickerInput)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(MAT_FORM_FIELD, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDatepickerInput,
      selectors: [["input", "matDatepicker", ""]],
      hostAttrs: [1, "mat-datepicker-input"],
      hostVars: 6,
      hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function MatDatepickerInput_input_HostBindingHandler($event) {
            return ctx._onInput($event.target.value);
          })("change", function MatDatepickerInput_change_HostBindingHandler() {
            return ctx._onChange();
          })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
            return ctx._onBlur();
          })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("disabled", ctx.disabled);
          \u0275\u0275attribute("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
        }
      },
      inputs: {
        matDatepicker: "matDatepicker",
        min: "min",
        max: "max",
        dateFilter: [InputFlags.None, "matDatepickerFilter", "dateFilter"]
      },
      exportAs: ["matDatepickerInput"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
        provide: MAT_INPUT_VALUE_ACCESSOR,
        useExisting: _MatDatepickerInput
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerInput, [{
    type: Directive,
    args: [{
      selector: "input[matDatepicker]",
      providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
        provide: MAT_INPUT_VALUE_ACCESSOR,
        useExisting: MatDatepickerInput
      }],
      host: {
        "class": "mat-datepicker-input",
        "[attr.aria-haspopup]": '_datepicker ? "dialog" : null',
        "[attr.aria-owns]": "(_datepicker?.opened && _datepicker.id) || null",
        "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
        "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "_datepicker ? _datepicker.id : null",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(blur)": "_onBlur()",
        "(keydown)": "_onKeydown($event)"
      },
      exportAs: "matDatepickerInput",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FORM_FIELD]
    }]
  }], {
    matDatepicker: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    dateFilter: [{
      type: Input,
      args: ["matDatepickerFilter"]
    }]
  });
})();
var MatDatepickerToggleIcon = class _MatDatepickerToggleIcon {
  static {
    this.\u0275fac = function MatDatepickerToggleIcon_Factory(t) {
      return new (t || _MatDatepickerToggleIcon)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDatepickerToggleIcon,
      selectors: [["", "matDatepickerToggleIcon", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerToggleIcon, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerToggleIcon]",
      standalone: true
    }]
  }], null, null);
})();
var MatDatepickerToggle = class _MatDatepickerToggle {
  /** Whether the toggle button is disabled. */
  get disabled() {
    if (this._disabled === void 0 && this.datepicker) {
      return this.datepicker.disabled;
    }
    return !!this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  constructor(_intl, _changeDetectorRef, defaultTabIndex) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._stateChanges = Subscription.EMPTY;
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  ngOnChanges(changes) {
    if (changes["datepicker"]) {
      this._watchStateChanges();
    }
  }
  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }
  ngAfterContentInit() {
    this._watchStateChanges();
  }
  _open(event) {
    if (this.datepicker && !this.disabled) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }
  _watchStateChanges() {
    const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : of();
    const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : of();
    const datepickerToggled = this.datepicker ? merge(this.datepicker.openedStream, this.datepicker.closedStream) : of();
    this._stateChanges.unsubscribe();
    this._stateChanges = merge(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  static {
    this.\u0275fac = function MatDatepickerToggle_Factory(t) {
      return new (t || _MatDatepickerToggle)(\u0275\u0275directiveInject(MatDatepickerIntl), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275injectAttribute("tabindex"));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatDatepickerToggle,
      selectors: [["mat-datepicker-toggle"]],
      contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatDatepickerToggleIcon, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._customIcon = _t.first);
        }
      },
      viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c2, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._button = _t.first);
        }
      },
      hostAttrs: [1, "mat-datepicker-toggle"],
      hostVars: 8,
      hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatDatepickerToggle_click_HostBindingHandler($event) {
            return ctx._open($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
          \u0275\u0275classProp("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
        }
      },
      inputs: {
        datepicker: [InputFlags.None, "for", "datepicker"],
        tabIndex: "tabIndex",
        ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        disableRipple: "disableRipple"
      },
      exportAs: ["matDatepickerToggle"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c4,
      decls: 4,
      vars: 6,
      consts: [["button", ""], ["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
      template: function MatDatepickerToggle_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c3);
          \u0275\u0275elementStart(0, "button", 1, 0);
          \u0275\u0275template(2, MatDatepickerToggle_Conditional_2_Template, 2, 0, ":svg:svg", 2);
          \u0275\u0275projection(3);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275property("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
          \u0275\u0275attribute("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(2, !ctx._customIcon ? 2 : -1);
        }
      },
      dependencies: [MatIconButton],
      styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color)}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color)}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerToggle, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-toggle",
      host: {
        "class": "mat-datepicker-toggle",
        "[attr.tabindex]": "null",
        "[class.mat-datepicker-toggle-active]": "datepicker && datepicker.opened",
        "[class.mat-accent]": 'datepicker && datepicker.color === "accent"',
        "[class.mat-warn]": 'datepicker && datepicker.color === "warn"',
        // Used by the test harness to tie this toggle to its datepicker.
        "[attr.data-mat-calendar]": "datepicker ? datepicker.id : null",
        // Bind the `click` on the host, rather than the inner `button`, so that we can call
        // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
        // it so that the input doesn't get focused automatically by the form field (See #21836).
        "(click)": "_open($event)"
      },
      exportAs: "matDatepickerToggle",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatIconButton],
      template: `<button
  #button
  mat-icon-button
  type="button"
  [attr.aria-haspopup]="datepicker ? 'dialog' : null"
  [attr.aria-label]="ariaLabel || _intl.openCalendarLabel"
  [attr.tabindex]="disabled ? -1 : tabIndex"
  [disabled]="disabled"
  [disableRipple]="disableRipple">

  @if (!_customIcon) {
    <svg
      class="mat-datepicker-toggle-default-icon"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="currentColor"
      focusable="false"
      aria-hidden="true">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  }

  <ng-content select="[matDatepickerToggleIcon]"></ng-content>
</button>
`,
      styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color)}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color)}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"]
    }]
  }], () => [{
    type: MatDatepickerIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    datepicker: [{
      type: Input,
      args: ["for"]
    }],
    tabIndex: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input
    }],
    _customIcon: [{
      type: ContentChild,
      args: [MatDatepickerToggleIcon]
    }],
    _button: [{
      type: ViewChild,
      args: ["button"]
    }]
  });
})();
function _computeAriaAccessibleName(element) {
  return _computeAriaAccessibleNameInternal(element, true);
}
function ssrSafeIsElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
function ssrSafeIsHTMLInputElement(node) {
  return node.nodeName === "INPUT";
}
function ssrSafeIsHTMLTextAreaElement(node) {
  return node.nodeName === "TEXTAREA";
}
function _computeAriaAccessibleNameInternal(currentNode, isDirectlyReferenced) {
  if (ssrSafeIsElement(currentNode) && isDirectlyReferenced) {
    const labelledbyIds = currentNode.getAttribute?.("aria-labelledby")?.split(/\s+/g) || [];
    const validIdRefs = labelledbyIds.reduce((validIds, id) => {
      const elem = document.getElementById(id);
      if (elem) {
        validIds.push(elem);
      }
      return validIds;
    }, []);
    if (validIdRefs.length) {
      return validIdRefs.map((idRef) => {
        return _computeAriaAccessibleNameInternal(idRef, false);
      }).join(" ");
    }
  }
  if (ssrSafeIsElement(currentNode)) {
    const ariaLabel = currentNode.getAttribute("aria-label")?.trim();
    if (ariaLabel) {
      return ariaLabel;
    }
  }
  if (ssrSafeIsHTMLInputElement(currentNode) || ssrSafeIsHTMLTextAreaElement(currentNode)) {
    if (currentNode.labels?.length) {
      return Array.from(currentNode.labels).map((x) => _computeAriaAccessibleNameInternal(x, false)).join(" ");
    }
    const placeholder = currentNode.getAttribute("placeholder")?.trim();
    if (placeholder) {
      return placeholder;
    }
    const title = currentNode.getAttribute("title")?.trim();
    if (title) {
      return title;
    }
  }
  return (currentNode.textContent || "").replace(/\s+/g, " ").trim();
}
var MAT_DATE_RANGE_INPUT_PARENT = new InjectionToken("MAT_DATE_RANGE_INPUT_PARENT");
var MatDateRangeInputPartBase = class _MatDateRangeInputPartBase extends MatDatepickerInputBase {
  /** Object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor(_rangeInput, _elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats3) {
    super(_elementRef, dateAdapter, dateFormats3);
    this._rangeInput = _rangeInput;
    this._elementRef = _elementRef;
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._injector = _injector;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this._dir = inject(Directionality, {
      optional: true
    });
    this._errorStateTracker = new _ErrorStateTracker(this._defaultErrorStateMatcher, null, this._parentFormGroup, this._parentForm, this.stateChanges);
  }
  ngOnInit() {
    const ngControl = this._injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    if (ngControl) {
      this.ngControl = ngControl;
      this._errorStateTracker.ngControl = ngControl;
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }
  /** Gets whether the input is empty. */
  isEmpty() {
    return this._elementRef.nativeElement.value.length === 0;
  }
  /** Gets the placeholder of the input. */
  _getPlaceholder() {
    return this._elementRef.nativeElement.placeholder;
  }
  /** Focuses the input. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  /** Gets the value that should be used when mirroring the input's size. */
  getMirrorValue() {
    const element = this._elementRef.nativeElement;
    const value = element.value;
    return value.length > 0 ? value : element.placeholder;
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Handles `input` events on the input element. */
  _onInput(value) {
    super._onInput(value);
    this._rangeInput._handleChildValueChange();
  }
  /** Opens the datepicker associated with the input. */
  _openPopup() {
    this._rangeInput._openDatepicker();
  }
  /** Gets the minimum date from the range input. */
  _getMinDate() {
    return this._rangeInput.min;
  }
  /** Gets the maximum date from the range input. */
  _getMaxDate() {
    return this._rangeInput.max;
  }
  /** Gets the date filter function from the range input. */
  _getDateFilter() {
    return this._rangeInput.dateFilter;
  }
  _parentDisabled() {
    return this._rangeInput._groupDisabled;
  }
  _shouldHandleChangeEvent({
    source
  }) {
    return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
  }
  _assignValueProgrammatically(value) {
    super._assignValueProgrammatically(value);
    const opposite = this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput;
    opposite?._validatorOnChange();
  }
  /** return the ARIA accessible name of the input element */
  _getAccessibleName() {
    return _computeAriaAccessibleName(this._elementRef.nativeElement);
  }
  static {
    this.\u0275fac = function MatDateRangeInputPartBase_Factory(t) {
      return new (t || _MatDateRangeInputPartBase)(\u0275\u0275directiveInject(MAT_DATE_RANGE_INPUT_PARENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ErrorStateMatcher), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(MAT_DATE_FORMATS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDateRangeInputPartBase,
      inputs: {
        errorStateMatcher: "errorStateMatcher"
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangeInputPartBase, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ErrorStateMatcher
  }, {
    type: Injector
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }], {
    errorStateMatcher: [{
      type: Input
    }]
  });
})();
var MatStartDate = class _MatStartDate extends MatDateRangeInputPartBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats3) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats3);
    this._startValidator = (control) => {
      const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const end = this._model ? this._model.selection.end : null;
      return !start || !end || this._dateAdapter.compareDate(start, end) <= 0 ? null : {
        "matStartDateInvalid": {
          "end": end,
          "actual": start
        }
      };
    };
    this._validator = Validators.compose([...super._getValidators(), this._startValidator]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.start;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.start ? !!change.selection.start : !change.selection.start || !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range = new DateRange(value, this._model.selection.end);
      this._model.updateSelection(range, this);
    }
  }
  _formatValue(value) {
    super._formatValue(value);
    this._rangeInput._handleChildValueChange();
  }
  _onKeydown(event) {
    const endInput = this._rangeInput._endInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== "rtl";
    if ((event.keyCode === RIGHT_ARROW && isLtr || event.keyCode === LEFT_ARROW && !isLtr) && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) {
      event.preventDefault();
      endInput._elementRef.nativeElement.setSelectionRange(0, 0);
      endInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
  static {
    this.\u0275fac = function MatStartDate_Factory(t) {
      return new (t || _MatStartDate)(\u0275\u0275directiveInject(MAT_DATE_RANGE_INPUT_PARENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ErrorStateMatcher), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(MAT_DATE_FORMATS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatStartDate,
      selectors: [["input", "matStartDate", ""]],
      hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
      hostVars: 5,
      hostBindings: function MatStartDate_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function MatStartDate_input_HostBindingHandler($event) {
            return ctx._onInput($event.target.value);
          })("change", function MatStartDate_change_HostBindingHandler() {
            return ctx._onChange();
          })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          })("blur", function MatStartDate_blur_HostBindingHandler() {
            return ctx._onBlur();
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("disabled", ctx.disabled);
          \u0275\u0275attribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
        }
      },
      outputs: {
        dateChange: "dateChange",
        dateInput: "dateInput"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: _MatStartDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: _MatStartDate,
        multi: true
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStartDate, [{
    type: Directive,
    args: [{
      selector: "input[matStartDate]",
      host: {
        "class": "mat-start-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null",
        "(blur)": "_onBlur()",
        "type": "text"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MatStartDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatStartDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"],
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ErrorStateMatcher
  }, {
    type: Injector
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }], null);
})();
var MatEndDate = class _MatEndDate extends MatDateRangeInputPartBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats3) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats3);
    this._endValidator = (control) => {
      const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const start = this._model ? this._model.selection.start : null;
      return !end || !start || this._dateAdapter.compareDate(end, start) >= 0 ? null : {
        "matEndDateInvalid": {
          "start": start,
          "actual": end
        }
      };
    };
    this._validator = Validators.compose([...super._getValidators(), this._endValidator]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.end;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.end ? !!change.selection.end : !change.selection.end || !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range = new DateRange(this._model.selection.start, value);
      this._model.updateSelection(range, this);
    }
  }
  _moveCaretToEndOfStartInput() {
    const startInput = this._rangeInput._startInput._elementRef.nativeElement;
    const value = startInput.value;
    if (value.length > 0) {
      startInput.setSelectionRange(value.length, value.length);
    }
    startInput.focus();
  }
  _onKeydown(event) {
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== "rtl";
    if (event.keyCode === BACKSPACE && !element.value) {
      this._moveCaretToEndOfStartInput();
    } else if ((event.keyCode === LEFT_ARROW && isLtr || event.keyCode === RIGHT_ARROW && !isLtr) && element.selectionStart === 0 && element.selectionEnd === 0) {
      event.preventDefault();
      this._moveCaretToEndOfStartInput();
    } else {
      super._onKeydown(event);
    }
  }
  static {
    this.\u0275fac = function MatEndDate_Factory(t) {
      return new (t || _MatEndDate)(\u0275\u0275directiveInject(MAT_DATE_RANGE_INPUT_PARENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ErrorStateMatcher), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(MAT_DATE_FORMATS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatEndDate,
      selectors: [["input", "matEndDate", ""]],
      hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
      hostVars: 5,
      hostBindings: function MatEndDate_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function MatEndDate_input_HostBindingHandler($event) {
            return ctx._onInput($event.target.value);
          })("change", function MatEndDate_change_HostBindingHandler() {
            return ctx._onChange();
          })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          })("blur", function MatEndDate_blur_HostBindingHandler() {
            return ctx._onBlur();
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("disabled", ctx.disabled);
          \u0275\u0275attribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
        }
      },
      outputs: {
        dateChange: "dateChange",
        dateInput: "dateInput"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: _MatEndDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: _MatEndDate,
        multi: true
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatEndDate, [{
    type: Directive,
    args: [{
      selector: "input[matEndDate]",
      host: {
        "class": "mat-end-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null",
        "(blur)": "_onBlur()",
        "type": "text"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MatEndDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatEndDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"],
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ErrorStateMatcher
  }, {
    type: Injector
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }], null);
})();
var nextUniqueId = 0;
var MatDateRangeInput = class _MatDateRangeInput {
  /** Current value of the range input. */
  get value() {
    return this._model ? this._model.selection : null;
  }
  /** Whether the control's label should float. */
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * Set the placeholder attribute on `matStartDate` and `matEndDate`.
   * @docs-private
   */
  get placeholder() {
    const start = this._startInput?._getPlaceholder() || "";
    const end = this._endInput?._getPlaceholder() || "";
    return start || end ? `${start} ${this.separator} ${end}` : "";
  }
  /** The range picker that this input is associated with. */
  get rangePicker() {
    return this._rangePicker;
  }
  set rangePicker(rangePicker) {
    if (rangePicker) {
      this._model = rangePicker.registerInput(this);
      this._rangePicker = rangePicker;
      this._closedSubscription.unsubscribe();
      this._closedSubscription = rangePicker.closedStream.subscribe(() => {
        this._startInput?._onTouched();
        this._endInput?._onTouched();
      });
      this._registerModel(this._model);
    }
  }
  /** Whether the input is required. */
  get required() {
    return this._required ?? (this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) ?? false;
  }
  set required(value) {
    this._required = value;
  }
  /** Function that can be used to filter out dates within the date range picker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const start = this._startInput;
    const end = this._endInput;
    const wasMatchingStart = start && start._matchesFilter(start.value);
    const wasMatchingEnd = end && end._matchesFilter(start.value);
    this._dateFilter = value;
    if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
      start._validatorOnChange();
    }
    if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
      end._validatorOnChange();
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._revalidate();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._revalidate();
    }
  }
  /** Whether the input is disabled. */
  get disabled() {
    return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
  }
  set disabled(value) {
    if (value !== this._groupDisabled) {
      this._groupDisabled = value;
      this.stateChanges.next(void 0);
    }
  }
  /** Whether the input is in an error state. */
  get errorState() {
    if (this._startInput && this._endInput) {
      return this._startInput.errorState || this._endInput.errorState;
    }
    return false;
  }
  /** Whether the datepicker input is empty. */
  get empty() {
    const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
    const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
    return startEmpty && endEmpty;
  }
  constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._formField = _formField;
    this._closedSubscription = Subscription.EMPTY;
    this.id = `mat-date-range-input-${nextUniqueId++}`;
    this.focused = false;
    this.controlType = "mat-date-range-input";
    this._groupDisabled = false;
    this._ariaDescribedBy = null;
    this.separator = "\u2013";
    this.comparisonStart = null;
    this.comparisonEnd = null;
    this.stateChanges = new Subject();
    this.disableAutomaticLabeling = true;
    if (!_dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    if (_formField?._elementRef.nativeElement.classList.contains("mat-mdc-form-field")) {
      _elementRef.nativeElement.classList.add("mat-mdc-input-element", "mat-mdc-form-field-input-control", "mdc-text-field__input");
    }
    this.ngControl = control;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  setDescribedByIds(ids) {
    this._ariaDescribedBy = ids.length ? ids.join(" ") : null;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused && !this.disabled) {
      if (!this._model || !this._model.selection.start) {
        this._startInput.focus();
      } else {
        this._endInput.focus();
      }
    }
  }
  ngAfterContentInit() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._startInput) {
        throw Error("mat-date-range-input must contain a matStartDate input");
      }
      if (!this._endInput) {
        throw Error("mat-date-range-input must contain a matEndDate input");
      }
    }
    if (this._model) {
      this._registerModel(this._model);
    }
    merge(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
      this.stateChanges.next(void 0);
    });
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._closedSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** Gets the date at which the calendar should start. */
  getStartValue() {
    return this.value ? this.value.start : null;
  }
  /** Gets the input's theme palette. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the element to which the calendar overlay should be attached. */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    return this._formField ? this._formField.getLabelId() : null;
  }
  /** Gets the value that is used to mirror the state input. */
  _getInputMirrorValue(part) {
    const input = part === "start" ? this._startInput : this._endInput;
    return input ? input.getMirrorValue() : "";
  }
  /** Whether the input placeholders should be hidden. */
  _shouldHidePlaceholders() {
    return this._startInput ? !this._startInput.isEmpty() : false;
  }
  /** Handles the value in one of the child inputs changing. */
  _handleChildValueChange() {
    this.stateChanges.next(void 0);
    this._changeDetectorRef.markForCheck();
  }
  /** Opens the date range picker associated with the input. */
  _openDatepicker() {
    if (this._rangePicker) {
      this._rangePicker.open();
    }
  }
  /** Whether the separate text should be hidden. */
  _shouldHideSeparator() {
    return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty;
  }
  /** Gets the value for the `aria-labelledby` attribute of the inputs. */
  _getAriaLabelledby() {
    const formField = this._formField;
    return formField && formField._hasFloatingLabel() ? formField._labelId : null;
  }
  _getStartDateAccessibleName() {
    return this._startInput._getAccessibleName();
  }
  _getEndDateAccessibleName() {
    return this._endInput._getAccessibleName();
  }
  /** Updates the focused state of the range input. */
  _updateFocus(origin) {
    this.focused = origin !== null;
    this.stateChanges.next();
  }
  /** Re-runs the validators on the start/end inputs. */
  _revalidate() {
    if (this._startInput) {
      this._startInput._validatorOnChange();
    }
    if (this._endInput) {
      this._endInput._validatorOnChange();
    }
  }
  /** Registers the current date selection model with the start/end inputs. */
  _registerModel(model) {
    if (this._startInput) {
      this._startInput._registerModel(model);
    }
    if (this._endInput) {
      this._endInput._registerModel(model);
    }
  }
  /** Checks whether a specific range input directive is required. */
  _isTargetRequired(target) {
    return target?.ngControl?.control?.hasValidator(Validators.required);
  }
  static {
    this.\u0275fac = function MatDateRangeInput_Factory(t) {
      return new (t || _MatDateRangeInput)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ControlContainer, 10), \u0275\u0275directiveInject(DateAdapter, 8), \u0275\u0275directiveInject(MAT_FORM_FIELD, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatDateRangeInput,
      selectors: [["mat-date-range-input"]],
      contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatStartDate, 5);
          \u0275\u0275contentQuery(dirIndex, MatEndDate, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._startInput = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._endInput = _t.first);
        }
      },
      hostAttrs: ["role", "group", 1, "mat-date-range-input"],
      hostVars: 8,
      hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx.id)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
          \u0275\u0275classProp("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
        }
      },
      inputs: {
        rangePicker: "rangePicker",
        required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
        dateFilter: "dateFilter",
        min: "min",
        max: "max",
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        separator: "separator",
        comparisonStart: "comparisonStart",
        comparisonEnd: "comparisonEnd"
      },
      exportAs: ["matDateRangeInput"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MatFormFieldControl,
        useExisting: _MatDateRangeInput
      }, {
        provide: MAT_DATE_RANGE_INPUT_PARENT,
        useExisting: _MatDateRangeInput
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c6,
      decls: 11,
      vars: 5,
      consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]],
      template: function MatDateRangeInput_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c5);
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275listener("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
            return ctx._updateFocus($event);
          });
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275projection(2);
          \u0275\u0275elementStart(3, "span", 2);
          \u0275\u0275text(4);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(5, "span", 3);
          \u0275\u0275text(6);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(7, "div", 4);
          \u0275\u0275projection(8, 1);
          \u0275\u0275elementStart(9, "span", 2);
          \u0275\u0275text(10);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(4);
          \u0275\u0275textInterpolate(ctx._getInputMirrorValue("start"));
          \u0275\u0275advance();
          \u0275\u0275classProp("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
          \u0275\u0275advance();
          \u0275\u0275textInterpolate(ctx.separator);
          \u0275\u0275advance(4);
          \u0275\u0275textInterpolate(ctx._getInputMirrorValue("end"));
        }
      },
      dependencies: [CdkMonitorFocus],
      styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color)}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color)}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangeInput, [{
    type: Component,
    args: [{
      selector: "mat-date-range-input",
      exportAs: "matDateRangeInput",
      host: {
        "class": "mat-date-range-input",
        "[class.mat-date-range-input-hide-placeholders]": "_shouldHidePlaceholders()",
        "[class.mat-date-range-input-required]": "required",
        "[attr.id]": "id",
        "role": "group",
        "[attr.aria-labelledby]": "_getAriaLabelledby()",
        "[attr.aria-describedby]": "_ariaDescribedBy",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "rangePicker ? rangePicker.id : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatDateRangeInput
      }, {
        provide: MAT_DATE_RANGE_INPUT_PARENT,
        useExisting: MatDateRangeInput
      }],
      standalone: true,
      imports: [CdkMonitorFocus],
      template: `<div
  class="mat-date-range-input-container"
  cdkMonitorSubtreeFocus
  (cdkFocusChange)="_updateFocus($event)">
  <div class="mat-date-range-input-wrapper">
    <ng-content select="input[matStartDate]"></ng-content>
    <span
      class="mat-date-range-input-mirror"
      aria-hidden="true">{{_getInputMirrorValue('start')}}</span>
  </div>

  <span
    class="mat-date-range-input-separator"
    [class.mat-date-range-input-separator-hidden]="_shouldHideSeparator()">{{separator}}</span>

  <div class="mat-date-range-input-wrapper mat-date-range-input-end-wrapper">
    <ng-content select="input[matEndDate]"></ng-content>
    <span
      class="mat-date-range-input-mirror"
      aria-hidden="true">{{_getInputMirrorValue('end')}}</span>
  </div>
</div>

`,
      styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color)}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color)}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FORM_FIELD]
    }]
  }], {
    rangePicker: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dateFilter: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    separator: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    _startInput: [{
      type: ContentChild,
      args: [MatStartDate]
    }],
    _endInput: [{
      type: ContentChild,
      args: [MatEndDate]
    }]
  });
})();
var MatDateRangePicker = class _MatDateRangePicker extends MatDatepickerBase {
  _forwardContentValues(instance) {
    super._forwardContentValues(instance);
    const input = this.datepickerInput;
    if (input) {
      instance.comparisonStart = input.comparisonStart;
      instance.comparisonEnd = input.comparisonEnd;
      instance.startDateAccessibleName = input._getStartDateAccessibleName();
      instance.endDateAccessibleName = input._getEndDateAccessibleName();
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatDateRangePicker_BaseFactory;
      return function MatDateRangePicker_Factory(t) {
        return (\u0275MatDateRangePicker_BaseFactory || (\u0275MatDateRangePicker_BaseFactory = \u0275\u0275getInheritedFactory(_MatDateRangePicker)))(t || _MatDateRangePicker);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatDateRangePicker,
      selectors: [["mat-date-range-picker"]],
      exportAs: ["matDateRangePicker"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: _MatDateRangePicker
      }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function MatDateRangePicker_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangePicker, [{
    type: Component,
    args: [{
      selector: "mat-date-range-picker",
      template: "",
      exportAs: "matDateRangePicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDateRangePicker
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatDatepickerApply = class _MatDatepickerApply {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
  _applySelection() {
    this._datepicker._applyPendingSelection();
    this._datepicker.close();
  }
  static {
    this.\u0275fac = function MatDatepickerApply_Factory(t) {
      return new (t || _MatDatepickerApply)(\u0275\u0275directiveInject(MatDatepickerBase));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDatepickerApply,
      selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]],
      hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatDatepickerApply_click_HostBindingHandler() {
            return ctx._applySelection();
          });
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerApply, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerApply], [matDateRangePickerApply]",
      host: {
        "(click)": "_applySelection()"
      },
      standalone: true
    }]
  }], () => [{
    type: MatDatepickerBase
  }], null);
})();
var MatDatepickerCancel = class _MatDatepickerCancel {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
  static {
    this.\u0275fac = function MatDatepickerCancel_Factory(t) {
      return new (t || _MatDatepickerCancel)(\u0275\u0275directiveInject(MatDatepickerBase));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDatepickerCancel,
      selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]],
      hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatDatepickerCancel_click_HostBindingHandler() {
            return ctx._datepicker.close();
          });
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerCancel, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerCancel], [matDateRangePickerCancel]",
      host: {
        "(click)": "_datepicker.close()"
      },
      standalone: true
    }]
  }], () => [{
    type: MatDatepickerBase
  }], null);
})();
var MatDatepickerActions = class _MatDatepickerActions {
  constructor(_datepicker, _viewContainerRef) {
    this._datepicker = _datepicker;
    this._viewContainerRef = _viewContainerRef;
  }
  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    this._datepicker.registerActions(this._portal);
  }
  ngOnDestroy() {
    this._datepicker.removeActions(this._portal);
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
  static {
    this.\u0275fac = function MatDatepickerActions_Factory(t) {
      return new (t || _MatDatepickerActions)(\u0275\u0275directiveInject(MatDatepickerBase), \u0275\u0275directiveInject(ViewContainerRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatDatepickerActions,
      selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]],
      viewQuery: function MatDatepickerActions_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._template = _t.first);
        }
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c12,
      decls: 1,
      vars: 0,
      consts: [[1, "mat-datepicker-actions"]],
      template: function MatDatepickerActions_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
        }
      },
      styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerActions, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-actions, mat-date-range-picker-actions",
      template: `
    <ng-template>
      <div class="mat-datepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], () => [{
    type: MatDatepickerBase
  }, {
    type: ViewContainerRef
  }], {
    _template: [{
      type: ViewChild,
      args: [TemplateRef]
    }]
  });
})();
var MatDatepickerModule = class _MatDatepickerModule {
  static {
    this.\u0275fac = function MatDatepickerModule_Factory(t) {
      return new (t || _MatDatepickerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatDatepickerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [CommonModule, MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatDatepickerContent, MatDatepickerToggle, MatCalendarHeader, CdkScrollableModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      exports: [CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/select.mjs
var _c05 = ["trigger"];
var _c13 = ["panel"];
var _c22 = [[["mat-select-trigger"]], "*"];
var _c32 = ["mat-select-trigger", "*"];
function MatSelect_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder);
  }
}
function MatSelect_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatSelect_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.triggerValue);
  }
}
function MatSelect_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275template(1, MatSelect_Conditional_5_Conditional_1_Template, 1, 0)(2, MatSelect_Conditional_5_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.customTrigger ? 1 : 2);
  }
}
function MatSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12, 1);
    \u0275\u0275listener("@transformPanel.done", function MatSelect_ng_template_10_Template_div_animation_transformPanel_done_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._panelDoneAnimatingStream.next($event.toState));
    })("keydown", function MatSelect_ng_template_10_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._handleKeydown($event));
    });
    \u0275\u0275projection(2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ", ctx_r1._getPanelTheme(), "");
    \u0275\u0275property("ngClass", ctx_r1.panelClass)("@transformPanel", "showing");
    \u0275\u0275attribute("id", ctx_r1.id + "-panel")("aria-multiselectable", ctx_r1.multiple)("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby());
  }
}
var matSelectAnimations = {
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: trigger("transformPanelWrap", [transition("* => void", query("@transformPanel", [animateChild()], {
    optional: true
  }))]),
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: trigger("transformPanel", [state("void", style({
    opacity: 0,
    transform: "scale(1, 0.8)"
  })), transition("void => showing", animate("120ms cubic-bezier(0, 0, 0.2, 1)", style({
    opacity: 1,
    transform: "scale(1, 1)"
  }))), transition("* => void", animate("100ms linear", style({
    opacity: 0
  })))])
};
function getMatSelectDynamicMultipleError() {
  return Error("Cannot change `multiple` mode of select after initialization.");
}
function getMatSelectNonArrayValueError() {
  return Error("Value must be an array in multiple-selection mode.");
}
function getMatSelectNonFunctionValueError() {
  return Error("`compareWith` must be a function.");
}
var nextUniqueId2 = 0;
var MAT_SELECT_SCROLL_STRATEGY = new InjectionToken("mat-select-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var MAT_SELECT_CONFIG = new InjectionToken("MAT_SELECT_CONFIG");
var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var MAT_SELECT_TRIGGER = new InjectionToken("MatSelectTrigger");
var MatSelectChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatSelect = class _MatSelect {
  /** Scrolls a particular option into the view. */
  _scrollOptionIntoView(index) {
    const option = this.options.toArray()[index];
    if (option) {
      const panel = this.panel.nativeElement;
      const labelCount = _countGroupLabelsBeforeOption(index, this.options, this.optionGroups);
      const element = option._getHostElement();
      if (index === 0 && labelCount === 1) {
        panel.scrollTop = 0;
      } else {
        panel.scrollTop = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
      }
    }
  }
  /** Called when the panel has been opened and the overlay has settled on its final position. */
  _positioningSettled() {
    this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
  }
  /** Creates a change event object that should be emitted by the select. */
  _getChangeEvent(value) {
    return new MatSelectChange(this, value);
  }
  /** Whether the select is focused. */
  get focused() {
    return this._focused || this._panelOpen;
  }
  /** Whether checkmark indicator for single-selection options is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  /** Placeholder to be shown if no value has been selected. */
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  /** Whether the component is required. */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = value;
    this.stateChanges.next();
  }
  /** Whether the user should be allowed to select multiple options. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    if (this._selectionModel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatSelectDynamicMultipleError();
    }
    this._multiple = value;
  }
  /**
   * Function to compare the option values with the selected values. The first argument
   * is a value from an option. The second is a value from the selection. A boolean
   * should be returned.
   */
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatSelectNonFunctionValueError();
    }
    this._compareWith = fn;
    if (this._selectionModel) {
      this._initializeSelection();
    }
  }
  /** Value of the select control. */
  get value() {
    return this._value;
  }
  set value(newValue) {
    const hasAssigned = this._assignValue(newValue);
    if (hasAssigned) {
      this._onChange(newValue);
    }
  }
  /** Object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Unique id of the element. */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  /** Whether the select is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor(_viewportRuler, _changeDetectorRef, _unusedNgZone, defaultErrorStateMatcher, _elementRef, _dir, parentForm, parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
    this._viewportRuler = _viewportRuler;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._parentFormField = _parentFormField;
    this.ngControl = ngControl;
    this._liveAnnouncer = _liveAnnouncer;
    this._defaultOptions = _defaultOptions;
    this._positions = [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }, {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      panelClass: "mat-mdc-select-panel-above"
    }, {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom",
      panelClass: "mat-mdc-select-panel-above"
    }];
    this._panelOpen = false;
    this._compareWith = (o1, o2) => o1 === o2;
    this._uid = `mat-select-${nextUniqueId2++}`;
    this._triggerAriaLabelledBy = null;
    this._destroy = new Subject();
    this.stateChanges = new Subject();
    this.disableAutomaticLabeling = true;
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    this._valueId = `mat-select-value-${nextUniqueId2++}`;
    this._panelDoneAnimatingStream = new Subject();
    this._overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
    this._focused = false;
    this.controlType = "mat-select";
    this.disabled = false;
    this.disableRipple = false;
    this.tabIndex = 0;
    this._hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
    this._multiple = false;
    this.disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
    this.ariaLabel = "";
    this.panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== "undefined" ? this._defaultOptions.panelWidth : "auto";
    this._initialized = new Subject();
    this.optionSelectionChanges = defer(() => {
      const options = this.options;
      if (options) {
        return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
      }
      return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
    });
    this.openedChange = new EventEmitter();
    this._openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
    }));
    this._closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
    }));
    this.selectionChange = new EventEmitter();
    this.valueChange = new EventEmitter();
    this._trackedModal = null;
    this._skipPredicate = (option) => {
      if (this.panelOpen) {
        return false;
      }
      return option.disabled;
    };
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    if (_defaultOptions?.typeaheadDebounceInterval != null) {
      this.typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._scrollStrategyFactory = scrollStrategyFactory;
    this._scrollStrategy = this._scrollStrategyFactory();
    this.tabIndex = parseInt(tabIndex) || 0;
    this.id = this.id;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple);
    this.stateChanges.next();
    this._panelDoneAnimatingStream.pipe(distinctUntilChanged(), takeUntil(this._destroy)).subscribe(() => this._panelDoneAnimating(this.panelOpen));
    this._viewportRuler.change().pipe(takeUntil(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
        this._changeDetectorRef.detectChanges();
      }
    });
  }
  ngAfterContentInit() {
    this._initialized.next();
    this._initialized.complete();
    this._initKeyManager();
    this._selectionModel.changed.pipe(takeUntil(this._destroy)).subscribe((event) => {
      event.added.forEach((option) => option.select());
      event.removed.forEach((option) => option.deselect());
    });
    this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      this._resetOptions();
      this._initializeSelection();
    });
  }
  ngDoCheck() {
    const newAriaLabelledby = this._getTriggerAriaLabelledby();
    const ngControl = this.ngControl;
    if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
      const element = this._elementRef.nativeElement;
      this._triggerAriaLabelledBy = newAriaLabelledby;
      if (newAriaLabelledby) {
        element.setAttribute("aria-labelledby", newAriaLabelledby);
      } else {
        element.removeAttribute("aria-labelledby");
      }
    }
    if (ngControl) {
      if (this._previousControl !== ngControl.control) {
        if (this._previousControl !== void 0 && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
          this.disabled = ngControl.disabled;
        }
        this._previousControl = ngControl.control;
      }
      this.updateErrorState();
    }
  }
  ngOnChanges(changes) {
    if (changes["disabled"] || changes["userAriaDescribedBy"]) {
      this.stateChanges.next();
    }
    if (changes["typeaheadDebounceInterval"] && this._keyManager) {
      this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._destroy.next();
    this._destroy.complete();
    this.stateChanges.complete();
    this._clearFromModal();
  }
  /** Toggles the overlay panel open or closed. */
  toggle() {
    this.panelOpen ? this.close() : this.open();
  }
  /** Opens the overlay panel. */
  open() {
    if (!this._canOpen()) {
      return;
    }
    if (this._parentFormField) {
      this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
    }
    this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
    this._applyModalPanelOwnership();
    this._panelOpen = true;
    this._keyManager.withHorizontalOrientation(null);
    this._highlightCorrectOption();
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  /**
   * If the autocomplete trigger is inside of an `aria-modal` element, connect
   * that modal to the options panel with `aria-owns`.
   *
   * For some browser + screen reader combinations, when navigation is inside
   * of an `aria-modal` element, the screen reader treats everything outside
   * of that modal as hidden or invisible.
   *
   * This causes a problem when the combobox trigger is _inside_ of a modal, because the
   * options panel is rendered _outside_ of that modal, preventing screen reader navigation
   * from reaching the panel.
   *
   * We can work around this issue by applying `aria-owns` to the modal with the `id` of
   * the options panel. This effectively communicates to assistive technology that the
   * options panel is part of the same interaction as the modal.
   *
   * At time of this writing, this issue is present in VoiceOver.
   * See https://github.com/angular/components/issues/20694
   */
  _applyModalPanelOwnership() {
    const modal = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
    if (!modal) {
      return;
    }
    const panelId = `${this.id}-panel`;
    if (this._trackedModal) {
      removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    }
    addAriaReferencedId(modal, "aria-owns", panelId);
    this._trackedModal = modal;
  }
  /** Clears the reference to the listbox overlay element from the modal it was added to. */
  _clearFromModal() {
    if (!this._trackedModal) {
      return;
    }
    const panelId = `${this.id}-panel`;
    removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    this._trackedModal = null;
  }
  /** Closes the overlay panel and focuses the host element. */
  close() {
    if (this._panelOpen) {
      this._panelOpen = false;
      this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr");
      this._changeDetectorRef.markForCheck();
      this._onTouched();
      this.stateChanges.next();
    }
  }
  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */
  writeValue(value) {
    this._assignValue(value);
  }
  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Disables the select. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  /** Whether or not the overlay panel is open. */
  get panelOpen() {
    return this._panelOpen;
  }
  /** The currently selected option. */
  get selected() {
    return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
  }
  /** The value displayed in the trigger. */
  get triggerValue() {
    if (this.empty) {
      return "";
    }
    if (this._multiple) {
      const selectedOptions = this._selectionModel.selected.map((option) => option.viewValue);
      if (this._isRtl()) {
        selectedOptions.reverse();
      }
      return selectedOptions.join(", ");
    }
    return this._selectionModel.selected[0].viewValue;
  }
  /** Refreshes the error state of the select. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Whether the element is in RTL mode. */
  _isRtl() {
    return this._dir ? this._dir.value === "rtl" : false;
  }
  /** Handles all keydown events on the select. */
  _handleKeydown(event) {
    if (!this.disabled) {
      this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
    }
  }
  /** Handles keyboard events while the select is closed. */
  _handleClosedKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW;
    const isOpenKey = keyCode === ENTER || keyCode === SPACE;
    const manager = this._keyManager;
    if (!manager.isTyping() && isOpenKey && !hasModifierKey(event) || (this.multiple || event.altKey) && isArrowKey) {
      event.preventDefault();
      this.open();
    } else if (!this.multiple) {
      const previouslySelectedOption = this.selected;
      manager.onKeydown(event);
      const selectedOption = this.selected;
      if (selectedOption && previouslySelectedOption !== selectedOption) {
        this._liveAnnouncer.announce(selectedOption.viewValue, 1e4);
      }
    }
  }
  /** Handles keyboard events when the selected is open. */
  _handleOpenKeydown(event) {
    const manager = this._keyManager;
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW;
    const isTyping = manager.isTyping();
    if (isArrowKey && event.altKey) {
      event.preventDefault();
      this.close();
    } else if (!isTyping && (keyCode === ENTER || keyCode === SPACE) && manager.activeItem && !hasModifierKey(event)) {
      event.preventDefault();
      manager.activeItem._selectViaInteraction();
    } else if (!isTyping && this._multiple && keyCode === A && event.ctrlKey) {
      event.preventDefault();
      const hasDeselectedOptions = this.options.some((opt) => !opt.disabled && !opt.selected);
      this.options.forEach((option) => {
        if (!option.disabled) {
          hasDeselectedOptions ? option.select() : option.deselect();
        }
      });
    } else {
      const previouslyFocusedIndex = manager.activeItemIndex;
      manager.onKeydown(event);
      if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
        manager.activeItem._selectViaInteraction();
      }
    }
  }
  _onFocus() {
    if (!this.disabled) {
      this._focused = true;
      this.stateChanges.next();
    }
  }
  /**
   * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
   * "blur" to the panel when it opens, causing a false positive.
   */
  _onBlur() {
    this._focused = false;
    this._keyManager?.cancelTypeahead();
    if (!this.disabled && !this.panelOpen) {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
  }
  /**
   * Callback that is invoked when the overlay panel has been attached.
   */
  _onAttached() {
    this._overlayDir.positionChange.pipe(take(1)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this._positioningSettled();
    });
  }
  /** Returns the theme to be used on the panel. */
  _getPanelTheme() {
    return this._parentFormField ? `mat-${this._parentFormField.color}` : "";
  }
  /** Whether the select has a value. */
  get empty() {
    return !this._selectionModel || this._selectionModel.isEmpty();
  }
  _initializeSelection() {
    Promise.resolve().then(() => {
      if (this.ngControl) {
        this._value = this.ngControl.value;
      }
      this._setSelectionByValue(this._value);
      this.stateChanges.next();
    });
  }
  /**
   * Sets the selected option based on a value. If no option can be
   * found with the designated value, the select trigger is cleared.
   */
  _setSelectionByValue(value) {
    this.options.forEach((option) => option.setInactiveStyles());
    this._selectionModel.clear();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getMatSelectNonArrayValueError();
      }
      value.forEach((currentValue) => this._selectOptionByValue(currentValue));
      this._sortValues();
    } else {
      const correspondingOption = this._selectOptionByValue(value);
      if (correspondingOption) {
        this._keyManager.updateActiveItem(correspondingOption);
      } else if (!this.panelOpen) {
        this._keyManager.updateActiveItem(-1);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Finds and selects and option based on its value.
   * @returns Option that has the corresponding value.
   */
  _selectOptionByValue(value) {
    const correspondingOption = this.options.find((option) => {
      if (this._selectionModel.isSelected(option)) {
        return false;
      }
      try {
        return option.value != null && this._compareWith(option.value, value);
      } catch (error) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(error);
        }
        return false;
      }
    });
    if (correspondingOption) {
      this._selectionModel.select(correspondingOption);
    }
    return correspondingOption;
  }
  /** Assigns a specific value to the select. Returns whether the value has changed. */
  _assignValue(newValue) {
    if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
      if (this.options) {
        this._setSelectionByValue(newValue);
      }
      this._value = newValue;
      return true;
    }
    return false;
  }
  /** Gets how wide the overlay panel should be. */
  _getOverlayWidth(preferredOrigin) {
    if (this.panelWidth === "auto") {
      const refToMeasure = preferredOrigin instanceof CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
      return refToMeasure.nativeElement.getBoundingClientRect().width;
    }
    return this.panelWidth === null ? "" : this.panelWidth;
  }
  /** Syncs the parent state with the individual options. */
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  /** Sets up a key manager to listen to keyboard events on the overlay panel. */
  _initKeyManager() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate);
    this._keyManager.tabOut.subscribe(() => {
      if (this.panelOpen) {
        if (!this.multiple && this._keyManager.activeItem) {
          this._keyManager.activeItem._selectViaInteraction();
        }
        this.focus();
        this.close();
      }
    });
    this._keyManager.change.subscribe(() => {
      if (this._panelOpen && this.panel) {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
        this._keyManager.activeItem._selectViaInteraction();
      }
    });
  }
  /** Drops current option subscriptions and IDs and resets from scratch. */
  _resetOptions() {
    const changedOrDestroyed = merge(this.options.changes, this._destroy);
    this.optionSelectionChanges.pipe(takeUntil(changedOrDestroyed)).subscribe((event) => {
      this._onSelect(event.source, event.isUserInput);
      if (event.isUserInput && !this.multiple && this._panelOpen) {
        this.close();
        this.focus();
      }
    });
    merge(...this.options.map((option) => option._stateChanges)).pipe(takeUntil(changedOrDestroyed)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this.stateChanges.next();
    });
  }
  /** Invoked when an option is clicked. */
  _onSelect(option, isUserInput) {
    const wasSelected = this._selectionModel.isSelected(option);
    if (option.value == null && !this._multiple) {
      option.deselect();
      this._selectionModel.clear();
      if (this.value != null) {
        this._propagateChanges(option.value);
      }
    } else {
      if (wasSelected !== option.selected) {
        option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
      }
      if (isUserInput) {
        this._keyManager.setActiveItem(option);
      }
      if (this.multiple) {
        this._sortValues();
        if (isUserInput) {
          this.focus();
        }
      }
    }
    if (wasSelected !== this._selectionModel.isSelected(option)) {
      this._propagateChanges();
    }
    this.stateChanges.next();
  }
  /** Sorts the selected values in the selected based on their order in the panel. */
  _sortValues() {
    if (this.multiple) {
      const options = this.options.toArray();
      this._selectionModel.sort((a, b) => {
        return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
      });
      this.stateChanges.next();
    }
  }
  /** Emits change event to set the model value. */
  _propagateChanges(fallbackValue) {
    let valueToEmit;
    if (this.multiple) {
      valueToEmit = this.selected.map((option) => option.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }
    this._value = valueToEmit;
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this.selectionChange.emit(this._getChangeEvent(valueToEmit));
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Highlights the selected item. If no option is selected, it will highlight
   * the first *enabled* option.
   */
  _highlightCorrectOption() {
    if (this._keyManager) {
      if (this.empty) {
        let firstEnabledOptionIndex = -1;
        for (let index = 0; index < this.options.length; index++) {
          const option = this.options.get(index);
          if (!option.disabled) {
            firstEnabledOptionIndex = index;
            break;
          }
        }
        this._keyManager.setActiveItem(firstEnabledOptionIndex);
      } else {
        this._keyManager.setActiveItem(this._selectionModel.selected[0]);
      }
    }
  }
  /** Whether the panel is allowed to open. */
  _canOpen() {
    return !this._panelOpen && !this.disabled && this.options?.length > 0;
  }
  /** Focuses the select element. */
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Gets the aria-labelledby for the select panel. */
  _getPanelAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    const labelId = this._parentFormField?.getLabelId();
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  /** Determines the `aria-activedescendant` to be set on the host. */
  _getAriaActiveDescendant() {
    if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
      return this._keyManager.activeItem.id;
    }
    return null;
  }
  /** Gets the aria-labelledby of the select component trigger. */
  _getTriggerAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    const labelId = this._parentFormField?.getLabelId();
    let value = (labelId ? labelId + " " : "") + this._valueId;
    if (this.ariaLabelledby) {
      value += " " + this.ariaLabelledby;
    }
    return value;
  }
  /** Called when the overlay panel is done animating. */
  _panelDoneAnimating(isOpen) {
    this.openedChange.emit(isOpen);
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    if (ids.length) {
      this._elementRef.nativeElement.setAttribute("aria-describedby", ids.join(" "));
    } else {
      this._elementRef.nativeElement.removeAttribute("aria-describedby");
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick() {
    this.focus();
    this.open();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
  }
  static {
    this.\u0275fac = function MatSelect_Factory(t) {
      return new (t || _MatSelect)(\u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ErrorStateMatcher), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(MAT_FORM_FIELD, 8), \u0275\u0275directiveInject(NgControl, 10), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(MAT_SELECT_SCROLL_STRATEGY), \u0275\u0275directiveInject(LiveAnnouncer), \u0275\u0275directiveInject(MAT_SELECT_CONFIG, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatSelect,
      selectors: [["mat-select"]],
      contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MAT_SELECT_TRIGGER, 5);
          \u0275\u0275contentQuery(dirIndex, MatOption, 5);
          \u0275\u0275contentQuery(dirIndex, MAT_OPTGROUP, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customTrigger = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.options = _t);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionGroups = _t);
        }
      },
      viewQuery: function MatSelect_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c05, 5);
          \u0275\u0275viewQuery(_c13, 5);
          \u0275\u0275viewQuery(CdkConnectedOverlay, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trigger = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._overlayDir = _t.first);
        }
      },
      hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "listbox", 1, "mat-mdc-select"],
      hostVars: 19,
      hostBindings: function MatSelect_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("keydown", function MatSelect_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("focus", function MatSelect_focus_HostBindingHandler() {
            return ctx._onFocus();
          })("blur", function MatSelect_blur_HostBindingHandler() {
            return ctx._onBlur();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx.id)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-activedescendant", ctx._getAriaActiveDescendant());
          \u0275\u0275classProp("mat-mdc-select-disabled", ctx.disabled)("mat-mdc-select-invalid", ctx.errorState)("mat-mdc-select-required", ctx.required)("mat-mdc-select-empty", ctx.empty)("mat-mdc-select-multiple", ctx.multiple);
        }
      },
      inputs: {
        userAriaDescribedBy: [InputFlags.None, "aria-describedby", "userAriaDescribedBy"],
        panelClass: "panelClass",
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute],
        tabIndex: [InputFlags.HasDecoratorInputTransform, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
        hideSingleSelectionIndicator: [InputFlags.HasDecoratorInputTransform, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
        placeholder: "placeholder",
        required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
        multiple: [InputFlags.HasDecoratorInputTransform, "multiple", "multiple", booleanAttribute],
        disableOptionCentering: [InputFlags.HasDecoratorInputTransform, "disableOptionCentering", "disableOptionCentering", booleanAttribute],
        compareWith: "compareWith",
        value: "value",
        ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
        ariaLabelledby: [InputFlags.None, "aria-labelledby", "ariaLabelledby"],
        errorStateMatcher: "errorStateMatcher",
        typeaheadDebounceInterval: [InputFlags.HasDecoratorInputTransform, "typeaheadDebounceInterval", "typeaheadDebounceInterval", numberAttribute],
        sortComparator: "sortComparator",
        id: "id",
        panelWidth: "panelWidth"
      },
      outputs: {
        openedChange: "openedChange",
        _openedStream: "opened",
        _closedStream: "closed",
        selectionChange: "selectionChange",
        valueChange: "valueChange"
      },
      exportAs: ["matSelect"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MatFormFieldControl,
        useExisting: _MatSelect
      }, {
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: _MatSelect
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c32,
      decls: 11,
      vars: 8,
      consts: [["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""], ["panel", ""], ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"], [1, "mat-mdc-select-value"], [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"], [1, "mat-mdc-select-arrow-wrapper"], [1, "mat-mdc-select-arrow"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "backdropClick", "attach", "detach", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth"], [1, "mat-mdc-select-value-text"], [1, "mat-mdc-select-min-line"], ["role", "listbox", "tabindex", "-1", 3, "keydown", "ngClass"]],
      template: function MatSelect_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef(_c22);
          \u0275\u0275elementStart(0, "div", 2, 0);
          \u0275\u0275listener("click", function MatSelect_Template_div_click_0_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.open());
          });
          \u0275\u0275elementStart(3, "div", 3);
          \u0275\u0275template(4, MatSelect_Conditional_4_Template, 2, 1, "span", 4)(5, MatSelect_Conditional_5_Template, 3, 1);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(8, "svg", 7);
          \u0275\u0275element(9, "path", 8);
          \u0275\u0275elementEnd()()()();
          \u0275\u0275template(10, MatSelect_ng_template_10_Template, 3, 9, "ng-template", 9);
          \u0275\u0275listener("backdropClick", function MatSelect_Template_ng_template_backdropClick_10_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.close());
          })("attach", function MatSelect_Template_ng_template_attach_10_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onAttached());
          })("detach", function MatSelect_Template_ng_template_detach_10_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.close());
          });
        }
        if (rf & 2) {
          const fallbackOverlayOrigin_r4 = \u0275\u0275reference(1);
          \u0275\u0275advance(3);
          \u0275\u0275attribute("id", ctx._valueId);
          \u0275\u0275advance();
          \u0275\u0275conditional(4, ctx.empty ? 4 : 5);
          \u0275\u0275advance(6);
          \u0275\u0275property("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", ctx._preferredOverlayOrigin || fallbackOverlayOrigin_r4)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayWidth", ctx._overlayWidth);
        }
      },
      dependencies: [CdkOverlayOrigin, CdkConnectedOverlay, NgClass],
      styles: ['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}'],
      encapsulation: 2,
      data: {
        animation: [matSelectAnimations.transformPanel]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelect, [{
    type: Component,
    args: [{
      selector: "mat-select",
      exportAs: "matSelect",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "role": "combobox",
        "aria-autocomplete": "none",
        "aria-haspopup": "listbox",
        "class": "mat-mdc-select",
        "[attr.id]": "id",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": 'panelOpen ? id + "-panel" : null',
        "[attr.aria-expanded]": "panelOpen",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.aria-required]": "required.toString()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[attr.aria-activedescendant]": "_getAriaActiveDescendant()",
        "[class.mat-mdc-select-disabled]": "disabled",
        "[class.mat-mdc-select-invalid]": "errorState",
        "[class.mat-mdc-select-required]": "required",
        "[class.mat-mdc-select-empty]": "empty",
        "[class.mat-mdc-select-multiple]": "multiple",
        "(keydown)": "_handleKeydown($event)",
        "(focus)": "_onFocus()",
        "(blur)": "_onBlur()"
      },
      animations: [matSelectAnimations.transformPanel],
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatSelect
      }, {
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatSelect
      }],
      standalone: true,
      imports: [CdkOverlayOrigin, CdkConnectedOverlay, NgClass],
      template: `<div cdk-overlay-origin
     class="mat-mdc-select-trigger"
     (click)="open()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>

  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayOpen]="panelOpen"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  (backdropClick)="close()"
  (attach)="_onAttached()"
  (detach)="close()">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    [@transformPanel]="'showing'"
    (@transformPanel.done)="_panelDoneAnimatingStream.next($event.toState)"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}']
    }]
  }], () => [{
    type: ViewportRuler
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: ErrorStateMatcher
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: MatFormField,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FORM_FIELD]
    }]
  }, {
    type: NgControl,
    decorators: [{
      type: Self
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_SELECT_SCROLL_STRATEGY]
    }]
  }, {
    type: LiveAnnouncer
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SELECT_CONFIG]
    }]
  }], {
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    customTrigger: [{
      type: ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    trigger: [{
      type: ViewChild,
      args: ["trigger"]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    _overlayDir: [{
      type: ViewChild,
      args: [CdkConnectedOverlay]
    }],
    panelClass: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableOptionCentering: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    errorStateMatcher: [{
      type: Input
    }],
    typeaheadDebounceInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortComparator: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    panelWidth: [{
      type: Input
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    selectionChange: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }]
  });
})();
var MatSelectTrigger = class _MatSelectTrigger {
  static {
    this.\u0275fac = function MatSelectTrigger_Factory(t) {
      return new (t || _MatSelectTrigger)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatSelectTrigger,
      selectors: [["mat-select-trigger"]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_SELECT_TRIGGER,
        useExisting: _MatSelectTrigger
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectTrigger, [{
    type: Directive,
    args: [{
      selector: "mat-select-trigger",
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatSelectModule = class _MatSelectModule {
  static {
    this.\u0275fac = function MatSelectModule_Factory(t) {
      return new (t || _MatSelectModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatSelectModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
      imports: [CommonModule, OverlayModule, MatOptionModule, MatCommonModule, CdkScrollableModule, MatFormFieldModule, MatOptionModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger],
      exports: [CdkScrollableModule, MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule, MatCommonModule],
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();

// src/app/features/calendar/components/guest-picker/guest-picker.component.ts
function GuestPickerComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275listener("click", function GuestPickerComponent_div_1_div_1_Template_button_click_7_listener() {
      const guest_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeGuest(guest_r3));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const guest_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r3.getResponseColor(guest_r3.responseStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getResponseIcon(guest_r3.responseStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(guest_r3.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(guest_r3.email);
  }
}
function GuestPickerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, GuestPickerComponent_div_1_div_1_Template, 10, 5, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.guests);
  }
}
function GuestPickerComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const suggestion_r5 = ctx.$implicit;
    \u0275\u0275property("value", suggestion_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(suggestion_r5.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(suggestion_r5.email);
  }
}
var GuestPickerComponent = class _GuestPickerComponent {
  constructor(calendarService, cdr) {
    this.calendarService = calendarService;
    this.cdr = cdr;
    this.guests = [];
    this.guestsChange = new EventEmitter();
    this.searchQuery = "";
    this.suggestions = [];
    this.searchSubject = new Subject();
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.searchSubject.pipe(debounceTime(200), switchMap((query2) => this.calendarService.searchContacts(query2)), takeUntil(this.destroy$)).subscribe((results) => {
      this.suggestions = results.filter((r) => !this.guests.some((g) => g.email === r.email));
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSearchInput() {
    this.searchSubject.next(this.searchQuery);
  }
  addGuest(suggestion) {
    const guest = {
      email: suggestion.email,
      displayName: suggestion.displayName,
      responseStatus: "needsAction"
    };
    this.guests = [...this.guests, guest];
    this.guestsChange.emit(this.guests);
    this.searchQuery = "";
    this.suggestions = [];
  }
  addGuestByEmail() {
    if (!this.searchQuery || !this.searchQuery.includes("@"))
      return;
    const email = this.searchQuery.trim();
    if (this.guests.some((g) => g.email === email))
      return;
    const guest = {
      email,
      displayName: email.split("@")[0],
      responseStatus: "needsAction"
    };
    this.guests = [...this.guests, guest];
    this.guestsChange.emit(this.guests);
    this.searchQuery = "";
    this.suggestions = [];
  }
  removeGuest(guest) {
    this.guests = this.guests.filter((g) => g.email !== guest.email);
    this.guestsChange.emit(this.guests);
  }
  getResponseIcon(status) {
    switch (status) {
      case "accepted":
        return "check_circle";
      case "declined":
        return "cancel";
      case "tentative":
        return "help";
      case "needsAction":
        return "radio_button_unchecked";
    }
  }
  getResponseColor(status) {
    switch (status) {
      case "accepted":
        return "#4caf50";
      case "declined":
        return "#f44336";
      case "tentative":
        return "#ff9800";
      case "needsAction":
        return "#9e9e9e";
    }
  }
  displayFn(value) {
    return value ? value.displayName : "";
  }
  static {
    this.\u0275fac = function GuestPickerComponent_Factory(t) {
      return new (t || _GuestPickerComponent)(\u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuestPickerComponent, selectors: [["app-guest-picker"]], inputs: { guests: "guests" }, outputs: { guestsChange: "guestsChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [["auto", "matAutocomplete"], [1, "guest-picker"], ["class", "guest-picker__chips", 4, "ngIf"], [1, "guest-picker__input-wrapper"], [1, "guest-picker__search-icon"], ["type", "text", "placeholder", "\u30B2\u30B9\u30C8\u3092\u8FFD\u52A0\uFF08\u540D\u524D\u307E\u305F\u306F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\uFF09", 1, "guest-picker__input", 3, "ngModelChange", "input", "keydown.enter", "ngModel", "matAutocomplete"], [3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], [1, "guest-picker__chips"], ["class", "guest-picker__chip", 4, "ngFor", "ngForOf"], [1, "guest-picker__chip"], [1, "guest-picker__chip-status"], [1, "guest-picker__chip-name"], [1, "guest-picker__chip-email"], ["type", "button", 1, "guest-picker__chip-remove", 3, "click"], [3, "value"], [1, "guest-picker__suggestion"], [1, "guest-picker__suggestion-name"], [1, "guest-picker__suggestion-email"]], template: function GuestPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, GuestPickerComponent_div_1_Template, 2, 1, "div", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "mat-icon", 4);
        \u0275\u0275text(4, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function GuestPickerComponent_Template_input_ngModelChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function GuestPickerComponent_Template_input_input_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearchInput());
        })("keydown.enter", function GuestPickerComponent_Template_input_keydown_enter_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addGuestByEmail());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-autocomplete", 6, 0);
        \u0275\u0275listener("optionSelected", function GuestPickerComponent_Template_mat_autocomplete_optionSelected_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addGuest($event.option.value));
        });
        \u0275\u0275template(8, GuestPickerComponent_mat_option_8_Template, 6, 3, "mat-option", 7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const auto_r6 = \u0275\u0275reference(7);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.guests.length > 0);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275property("matAutocomplete", auto_r6);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.suggestions);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatChipsModule,
      MatIconModule,
      MatIcon,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatFormFieldModule,
      MatInputModule
    ], styles: ["\n\n.guest-picker__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.guest-picker__chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background-color: #f1f3f4;\n  border-radius: 16px;\n  padding: 4px 4px 4px 8px;\n  font-size: 12px;\n  max-width: 100%;\n}\n.guest-picker__chip-status[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  flex-shrink: 0;\n}\n.guest-picker__chip-name[_ngcontent-%COMP%] {\n  color: #3c4043;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.guest-picker__chip-email[_ngcontent-%COMP%] {\n  color: #70757a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.guest-picker__chip-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.guest-picker__chip-remove[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #5f6368;\n}\n.guest-picker__chip-remove[_ngcontent-%COMP%]:hover {\n  background-color: #dadce0;\n}\n.guest-picker__input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #dadce0;\n  border-radius: 4px;\n  padding: 6px 8px;\n  transition: border-color 0.2s;\n}\n.guest-picker__input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #ff9800;\n}\n.guest-picker__search-icon[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.guest-picker__input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: #3c4043;\n  background: transparent;\n  min-width: 0;\n}\n.guest-picker__input[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n}\n.guest-picker__suggestion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 2px 0;\n}\n.guest-picker__suggestion-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #3c4043;\n  font-weight: 500;\n}\n.guest-picker__suggestion-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #70757a;\n}\n/*# sourceMappingURL=guest-picker.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuestPickerComponent, { className: "GuestPickerComponent", filePath: "src\\app\\features\\calendar\\components\\guest-picker\\guest-picker.component.ts", lineNumber: 37 });
})();

// src/app/features/calendar/components/event-editor/event-editor.component.ts
function EventEditorComponent_mat_form_field_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 10)(1, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_mat_form_field_14_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.endDate, $event) || (ctx_r2.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "mat-datepicker-toggle", 12)(3, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const endPicker_r4 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matDatepicker", endPicker_r4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.endDate);
    \u0275\u0275advance();
    \u0275\u0275property("for", endPicker_r4);
  }
}
function EventEditorComponent_div_15_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    \u0275\u0275property("value", t_r6.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6.label, " ");
  }
}
function EventEditorComponent_div_15_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275property("value", t_r7.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r7.label, " ");
  }
}
function EventEditorComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "mat-form-field", 44)(2, "mat-label");
    \u0275\u0275text(3, "\u958B\u59CB\u6642\u9593");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_div_15_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.startTime, $event) || (ctx_r2.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(5, EventEditorComponent_div_15_mat_option_5_Template, 2, 2, "mat-option", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7, "\u301C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 44)(9, "mat-label");
    \u0275\u0275text(10, "\u7D42\u4E86\u6642\u9593");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_div_15_Template_mat_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.endTime, $event) || (ctx_r2.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(12, EventEditorComponent_div_15_mat_option_12_Template, 2, 2, "mat-option", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.startTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.timeOptions);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.endTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.timeOptions);
  }
}
function EventEditorComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    \u0275\u0275property("value", opt_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r8.label, " ");
  }
}
function EventEditorComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function EventEditorComponent_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addVideoConference());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "video_call");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Google Meet\u4F1A\u8B70\u3092\u8FFD\u52A0 ");
    \u0275\u0275elementEnd();
  }
}
function EventEditorComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "a", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 50);
    \u0275\u0275listener("click", function EventEditorComponent_div_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.videoConferenceUrl = "");
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r2.videoConferenceUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.videoConferenceUrl, " ");
  }
}
function EventEditorComponent_div_38_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 59);
  }
  if (rf & 2) {
    const hour_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r2.getAvailabilityColor(hour_r11));
    \u0275\u0275property("matTooltip", hour_r11 + ":00");
  }
}
function EventEditorComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon", 7);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "span", 52);
    \u0275\u0275text(5, "\u7A7A\u304D\u72B6\u6CC1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53);
    \u0275\u0275template(7, EventEditorComponent_div_38_div_7_Template, 1, 3, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 55)(9, "span", 56);
    \u0275\u0275element(10, "span", 57);
    \u0275\u0275text(11, " \u7A7A\u304D ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 56);
    \u0275\u0275element(13, "span", 58);
    \u0275\u0275text(14, " \u4E88\u5B9A\u3042\u308A ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.availabilityHours());
  }
}
function EventEditorComponent_div_43_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    \u0275\u0275property("value", opt_r14.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r14.label, " ");
  }
}
function EventEditorComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "mat-form-field", 61)(2, "mat-select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_div_43_Template_mat_select_ngModelChange_2_listener($event) {
      const reminder_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(reminder_r13.minutes, $event) || (reminder_r13.minutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, EventEditorComponent_div_43_mat_option_3_Template, 2, 2, "mat-option", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 62);
    \u0275\u0275listener("click", function EventEditorComponent_div_43_Template_button_click_4_listener() {
      const i_r15 = \u0275\u0275restoreView(_r12).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeReminder(i_r15));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reminder_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", reminder_r13.minutes);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.reminderOptions);
  }
}
function EventEditorComponent_mat_option_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
    \u0275\u0275element(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cal_r16 = ctx.$implicit;
    \u0275\u0275property("value", cal_r16.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", cal_r16.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cal_r16.name, " ");
  }
}
function EventEditorComponent_mat_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r17 = ctx.$implicit;
    \u0275\u0275property("value", opt_r17.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r17.label, " ");
  }
}
function EventEditorComponent_button_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function EventEditorComponent_button_60_Template_button_click_0_listener() {
      const c_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectColor(c_r19));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", c_r19);
    \u0275\u0275classProp("event-editor__color-btn--selected", ctx_r2.color === c_r19);
  }
}
function EventEditorComponent_button_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function EventEditorComponent_button_67_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDelete());
    });
    \u0275\u0275text(1, " \u524A\u9664 ");
    \u0275\u0275elementEnd();
  }
}
var EventEditorComponent = class _EventEditorComponent {
  constructor(dialogRef, data, calendarService, cdr, keyboard) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.calendarService = calendarService;
    this.cdr = cdr;
    this.keyboard = keyboard;
    this.keyboardHeight = 0;
    this.mode = "create";
    this.calendars = [];
    this.title = "";
    this.startDate = /* @__PURE__ */ new Date();
    this.endDate = /* @__PURE__ */ new Date();
    this.startTime = "09:00";
    this.endTime = "10:00";
    this.allDay = false;
    this.location = "";
    this.description = "";
    this.videoConferenceUrl = "";
    this.calendarId = "cal-personal";
    this.visibility = "busy";
    this.guests = [];
    this.reminders = [{ method: "popup", minutes: 15 }];
    this.recurrenceType = "none";
    this.color = "";
    this.timeOptions = [];
    this.availabilitySlots = [];
    this.recurrenceOptions = [
      { value: "none", label: "\u7E70\u308A\u8FD4\u3055\u306A\u3044" },
      { value: "daily", label: "\u6BCE\u65E5" },
      { value: "weekdays", label: "\u5E73\u65E5" },
      { value: "weekly", label: "\u6BCE\u9031" },
      { value: "monthly", label: "\u6BCE\u6708" },
      { value: "yearly", label: "\u6BCE\u5E74" }
    ];
    this.reminderOptions = [
      { value: 0, label: "\u306A\u3057" },
      { value: 5, label: "5\u5206\u524D" },
      { value: 10, label: "10\u5206\u524D" },
      { value: 15, label: "15\u5206\u524D" },
      { value: 30, label: "30\u5206\u524D" },
      { value: 60, label: "1\u6642\u9593\u524D" },
      { value: 120, label: "2\u6642\u9593\u524D" },
      { value: 1440, label: "1\u65E5\u524D" }
    ];
    this.visibilityOptions = [
      { value: "busy", label: "\u4E88\u5B9A\u3042\u308A" },
      { value: "free", label: "\u7A7A\u304D\u6642\u9593" },
      { value: "tentative", label: "\u4EEE\u306E\u4E88\u5B9A" },
      { value: "outOfOffice", label: "\u4E0D\u5728" }
    ];
    this.calendarColors = [
      "#ff9800",
      "#1976d2",
      "#4caf50",
      "#9c27b0",
      "#f44336",
      "#00bcd4",
      "#e91e63",
      "#795548",
      "#607d8b",
      "#ff5722"
    ];
    this.keyboardSub = this.keyboard.keyboardHeight$.subscribe((h) => {
      this.keyboardHeight = h;
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.keyboardSub?.unsubscribe();
  }
  ngOnInit() {
    this.buildTimeOptions();
    this.mode = this.data.mode;
    this.calendars = this.data.calendars;
    if (this.data.event && (this.mode === "edit" || this.mode === "create")) {
      const evt = this.data.event;
      this.title = evt.title;
      this.startDate = new Date(evt.start);
      this.endDate = new Date(evt.end);
      this.startTime = format(evt.start, "HH:mm");
      this.endTime = format(evt.end, "HH:mm");
      this.allDay = evt.allDay;
      this.location = evt.location || "";
      this.description = evt.description || "";
      this.videoConferenceUrl = evt.videoConferenceUrl || "";
      this.calendarId = evt.calendarId;
      this.visibility = evt.visibility;
      this.guests = evt.guests ? evt.guests.map((g) => __spreadValues({}, g)) : [];
      this.reminders = evt.reminders ? evt.reminders.map((r) => __spreadValues({}, r)) : [];
      this.color = evt.color || "";
      if (evt.recurrence) {
        if (evt.recurrence.frequency === "daily" && evt.recurrence.byDay?.length === 5) {
          this.recurrenceType = "weekdays";
        } else {
          this.recurrenceType = evt.recurrence.frequency;
        }
      }
    } else {
      if (this.data.initialDate) {
        this.startDate = new Date(this.data.initialDate);
        this.endDate = new Date(this.data.initialDate);
      }
      if (this.data.initialStartTime) {
        this.startTime = this.data.initialStartTime;
      }
      if (this.data.initialEndTime) {
        this.endTime = this.data.initialEndTime;
      }
    }
    this.loadAvailability();
  }
  buildTimeOptions() {
    this.timeOptions = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hh = String(h).padStart(2, "0");
        const mm = String(m).padStart(2, "0");
        this.timeOptions.push({
          label: `${hh}:${mm}`,
          hour: h,
          minute: m
        });
      }
    }
  }
  loadAvailability() {
    this.calendarService.getAvailability(this.startDate).subscribe((slots) => {
      this.availabilitySlots = slots.map((s) => ({
        hour: s.start.getHours(),
        busy: s.busy
      }));
      this.cdr.markForCheck();
    });
  }
  onStartDateChange() {
    if (this.endDate < this.startDate) {
      this.endDate = new Date(this.startDate);
    }
    this.loadAvailability();
  }
  onGuestsChange(guests) {
    this.guests = guests;
  }
  addReminder() {
    this.reminders.push({ method: "popup", minutes: 15 });
  }
  removeReminder(index) {
    this.reminders.splice(index, 1);
  }
  addVideoConference() {
    this.videoConferenceUrl = "https://meet.google.com/new-meeting-link";
  }
  selectColor(color) {
    this.color = this.color === color ? "" : color;
  }
  onSave() {
    const [startH, startM] = this.startTime.split(":").map(Number);
    const [endH, endM] = this.endTime.split(":").map(Number);
    const start = this.allDay ? new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate()) : setMinutes(setHours(new Date(this.startDate), startH), startM);
    const end = this.allDay ? new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() + 1) : setMinutes(setHours(new Date(this.endDate), endH), endM);
    let recurrence;
    switch (this.recurrenceType) {
      case "daily":
        recurrence = { frequency: "daily", interval: 1 };
        break;
      case "weekdays":
        recurrence = { frequency: "daily", interval: 1, byDay: ["MO", "TU", "WE", "TH", "FR"] };
        break;
      case "weekly":
        recurrence = { frequency: "weekly", interval: 1 };
        break;
      case "monthly":
        recurrence = { frequency: "monthly", interval: 1 };
        break;
      case "yearly":
        recurrence = { frequency: "yearly", interval: 1 };
        break;
    }
    const eventData = {
      title: this.title || "(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)",
      start,
      end,
      allDay: this.allDay,
      location: this.location || void 0,
      description: this.description || void 0,
      videoConferenceUrl: this.videoConferenceUrl || void 0,
      calendarId: this.calendarId,
      visibility: this.visibility,
      guests: this.guests,
      reminders: this.reminders,
      recurrence,
      color: this.color || void 0
    };
    if (this.mode === "edit" && this.data.event) {
      eventData.id = this.data.event.id;
    }
    this.dialogRef.close({ action: "save", event: eventData });
  }
  onDelete() {
    this.dialogRef.close({ action: "delete", event: this.data.event });
  }
  onCancel() {
    this.dialogRef.close({ action: "cancel" });
  }
  getAvailabilityColor(hour) {
    const slot = this.availabilitySlots.find((s) => s.hour === hour);
    return slot?.busy ? "#f44336" : "#4caf50";
  }
  availabilityHours() {
    const hours = [];
    for (let h = 7; h <= 21; h++) {
      hours.push(h);
    }
    return hours;
  }
  static {
    this.\u0275fac = function EventEditorComponent_Factory(t) {
      return new (t || _EventEditorComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(KeyboardManagerService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventEditorComponent, selectors: [["app-event-editor"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 73, vars: 26, consts: [["startPicker", ""], ["endPicker", ""], [1, "event-editor"], [1, "event-editor__title-row"], ["type", "text", "placeholder", "\u30BF\u30A4\u30C8\u30EB\u3092\u8FFD\u52A0", "autofocus", "", 1, "event-editor__title-input", 3, "ngModelChange", "ngModel"], [1, "event-editor__body"], [1, "event-editor__section"], [1, "event-editor__section-icon"], [1, "event-editor__datetime"], [1, "event-editor__date-row"], ["appearance", "outline", 1, "event-editor__date-field"], ["matInput", "", "placeholder", "\u958B\u59CB\u65E5", 3, "ngModelChange", "matDatepicker", "ngModel"], ["matSuffix", "", 3, "for"], ["appearance", "outline", "class", "event-editor__date-field", 4, "ngIf"], ["class", "event-editor__time-row", 4, "ngIf"], [1, "event-editor__options-row"], [1, "event-editor__allday-check", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "event-editor__recurrence-field"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "event-editor__full-field"], ["matInput", "", "placeholder", "\u5834\u6240\u3092\u8FFD\u52A0", 3, "ngModelChange", "ngModel"], [1, "event-editor__video-section"], ["class", "event-editor__video-btn", "type", "button", 3, "click", 4, "ngIf"], ["class", "event-editor__video-link", 4, "ngIf"], [1, "event-editor__full-field"], [3, "guestsChange", "guests"], ["class", "event-editor__section", 4, "ngIf"], [1, "event-editor__reminders"], ["class", "event-editor__reminder-row", 4, "ngFor", "ngForOf"], ["type", "button", 1, "event-editor__add-reminder", 3, "click"], [1, "event-editor__calendar-row"], ["appearance", "outline", 1, "event-editor__calendar-field"], ["appearance", "outline", 1, "event-editor__visibility-field"], [1, "event-editor__colors"], ["class", "event-editor__color-btn", "type", "button", 3, "background-color", "event-editor__color-btn--selected", "click", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "\u8AAC\u660E\u3092\u8FFD\u52A0", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "event-editor__footer"], ["class", "event-editor__delete-btn", "type", "button", 3, "click", 4, "ngIf"], [1, "event-editor__footer-right"], ["type", "button", 1, "event-editor__cancel-btn", 3, "click"], ["type", "button", 1, "event-editor__save-btn", 3, "click"], ["matInput", "", "placeholder", "\u7D42\u4E86\u65E5", 3, "ngModelChange", "matDatepicker", "ngModel"], [1, "event-editor__time-row"], ["appearance", "outline", 1, "event-editor__time-field"], [1, "event-editor__separator"], [3, "value"], ["type", "button", 1, "event-editor__video-btn", 3, "click"], [1, "event-editor__video-link"], ["target", "_blank", "rel", "noopener", 3, "href"], ["mat-icon-button", "", "matTooltip", "\u524A\u9664", "type", "button", 3, "click"], [1, "event-editor__availability"], [1, "event-editor__availability-label"], [1, "event-editor__availability-bar"], ["class", "event-editor__availability-slot", 3, "background-color", "matTooltip", 4, "ngFor", "ngForOf"], [1, "event-editor__availability-legend"], [1, "event-editor__legend-item"], [1, "event-editor__legend-dot", 2, "background", "#4caf50"], [1, "event-editor__legend-dot", 2, "background", "#f44336"], [1, "event-editor__availability-slot", 3, "matTooltip"], [1, "event-editor__reminder-row"], ["appearance", "outline", 1, "event-editor__reminder-field"], ["mat-icon-button", "", "matTooltip", "\u524A\u9664", "type", "button", 1, "event-editor__reminder-remove", 3, "click"], [1, "event-editor__cal-dot"], ["type", "button", 1, "event-editor__color-btn", 3, "click"], ["type", "button", 1, "event-editor__delete-btn", 3, "click"]], template: function EventEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_Template_input_ngModelChange_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "mat-icon", 7);
        \u0275\u0275text(6, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 8)(8, "div", 9)(9, "mat-form-field", 10)(10, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function EventEditorComponent_Template_input_ngModelChange_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onStartDateChange());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "mat-datepicker-toggle", 12)(12, "mat-datepicker", null, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, EventEditorComponent_mat_form_field_14_Template, 5, 3, "mat-form-field", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, EventEditorComponent_div_15_Template, 13, 4, "div", 14);
        \u0275\u0275elementStart(16, "div", 15)(17, "mat-checkbox", 16);
        \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_Template_mat_checkbox_ngModelChange_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.allDay, $event) || (ctx.allDay = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275text(18, " \u7D42\u65E5 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-form-field", 17)(20, "mat-select", 18);
        \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_Template_mat_select_ngModelChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.recurrenceType, $event) || (ctx.recurrenceType = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(21, EventEditorComponent_mat_option_21_Template, 2, 2, "mat-option", 19);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(22, "div", 6)(23, "mat-icon", 7);
        \u0275\u0275text(24, "location_on");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-form-field", 20)(26, "input", 21);
        \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.location, $event) || (ctx.location = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 6)(28, "mat-icon", 7);
        \u0275\u0275text(29, "videocam");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 22);
        \u0275\u0275template(31, EventEditorComponent_button_31_Template, 4, 0, "button", 23)(32, EventEditorComponent_div_32_Template, 6, 2, "div", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 6)(34, "mat-icon", 7);
        \u0275\u0275text(35, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 25)(37, "app-guest-picker", 26);
        \u0275\u0275listener("guestsChange", function EventEditorComponent_Template_app_guest_picker_guestsChange_37_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onGuestsChange($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, EventEditorComponent_div_38_Template, 15, 1, "div", 27);
        \u0275\u0275elementStart(39, "div", 6)(40, "mat-icon", 7);
        \u0275\u0275text(41, "notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 28);
        \u0275\u0275template(43, EventEditorComponent_div_43_Template, 7, 2, "div", 29);
        \u0275\u0275elementStart(44, "button", 30);
        \u0275\u0275listener("click", function EventEditorComponent_Template_button_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addReminder());
        });
        \u0275\u0275text(45, " \u901A\u77E5\u3092\u8FFD\u52A0 ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 6)(47, "mat-icon", 7);
        \u0275\u0275text(48, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 31)(50, "mat-form-field", 32)(51, "mat-select", 18);
        \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_Template_mat_select_ngModelChange_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.calendarId, $event) || (ctx.calendarId = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(52, EventEditorComponent_mat_option_52_Template, 3, 4, "mat-option", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "mat-form-field", 33)(54, "mat-select", 18);
        \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_Template_mat_select_ngModelChange_54_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.visibility, $event) || (ctx.visibility = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(55, EventEditorComponent_mat_option_55_Template, 2, 2, "mat-option", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "div", 6)(57, "mat-icon", 7);
        \u0275\u0275text(58, "palette");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 34);
        \u0275\u0275template(60, EventEditorComponent_button_60_Template, 1, 4, "button", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 6)(62, "mat-icon", 7);
        \u0275\u0275text(63, "notes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "mat-form-field", 20)(65, "textarea", 36);
        \u0275\u0275twoWayListener("ngModelChange", function EventEditorComponent_Template_textarea_ngModelChange_65_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(66, "div", 37);
        \u0275\u0275template(67, EventEditorComponent_button_67_Template, 2, 0, "button", 38);
        \u0275\u0275elementStart(68, "div", 39)(69, "button", 40);
        \u0275\u0275listener("click", function EventEditorComponent_Template_button_click_69_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCancel());
        });
        \u0275\u0275text(70, " \u30AD\u30E3\u30F3\u30BB\u30EB ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "button", 41);
        \u0275\u0275listener("click", function EventEditorComponent_Template_button_click_71_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSave());
        });
        \u0275\u0275text(72, " \u4FDD\u5B58 ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const startPicker_r21 = \u0275\u0275reference(13);
        \u0275\u0275styleProp("--keyboard-h", ctx.keyboardHeight, "px")("padding-bottom", ctx.keyboardHeight, "px");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.title);
        \u0275\u0275advance(8);
        \u0275\u0275property("matDatepicker", startPicker_r21);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
        \u0275\u0275advance();
        \u0275\u0275property("for", startPicker_r21);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.allDay);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.allDay);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.allDay);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.recurrenceType);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.recurrenceOptions);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.location);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.videoConferenceUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.videoConferenceUrl);
        \u0275\u0275advance(5);
        \u0275\u0275property("guests", ctx.guests);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.guests.length > 0);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.reminders);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.calendarId);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.calendars);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.visibility);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.visibilityOptions);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.calendarColors);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.description);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.mode === "edit");
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      MatButtonModule,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerToggle,
      MatNativeDateModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatCheckboxModule,
      MatCheckbox,
      MatTooltipModule,
      MatTooltip,
      GuestPickerComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.event-editor[_ngcontent-%COMP%] {\n  width: 600px;\n  max-width: 100%;\n  max-height: 80vh;\n  max-height: 80dvh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .event-editor[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    max-height: calc(100vh - 40px) !important;\n    max-height: calc(100dvh - 40px) !important;\n    padding-bottom: calc(var(--keyboard-h, 0px) + env(safe-area-inset-bottom, 0px)) !important;\n    box-sizing: border-box !important;\n  }\n  .event-editor__title-row[_ngcontent-%COMP%] {\n    padding: 12px 16px 6px !important;\n  }\n  .event-editor__title-input[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n  .event-editor__body[_ngcontent-%COMP%] {\n    padding: 4px 0 !important;\n    overflow-y: auto !important;\n    -webkit-overflow-scrolling: touch !important;\n  }\n  .event-editor__section[_ngcontent-%COMP%] {\n    padding: 6px 16px !important;\n    gap: 10px !important;\n  }\n  .event-editor__date-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important;\n    gap: 6px !important;\n  }\n  .event-editor__time-row[_ngcontent-%COMP%] {\n    display: flex !important;\n    align-items: center !important;\n    gap: 8px !important;\n    margin-top: 6px !important;\n  }\n  .event-editor__date-field[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: 0 !important;\n  }\n  .event-editor__time-field[_ngcontent-%COMP%] {\n    flex: 1 1 0 !important;\n    width: auto !important;\n    min-width: 0 !important;\n  }\n  .event-editor__recurrence-field[_ngcontent-%COMP%], .event-editor__reminder-field[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .event-editor__calendar-row[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    gap: 8px !important;\n  }\n  .event-editor__footer[_ngcontent-%COMP%] {\n    padding: 10px 16px !important;\n    padding-bottom: calc(10px + env(safe-area-inset-bottom, 0)) !important;\n    flex-wrap: wrap !important;\n    gap: 8px !important;\n    position: sticky !important;\n    bottom: 0 !important;\n    background: #fff !important;\n    z-index: 5 !important;\n    border-top: 1px solid #e0e0e0 !important;\n  }\n  .event-editor__footer-right[_ngcontent-%COMP%] {\n    margin-left: auto !important;\n    gap: 6px !important;\n  }\n  .event-editor__cancel-btn[_ngcontent-%COMP%], .event-editor__save-btn[_ngcontent-%COMP%] {\n    padding: 10px 18px !important;\n    font-size: 14px !important;\n    min-height: 44px !important;\n  }\n}\n.event-editor__title-row[_ngcontent-%COMP%] {\n  padding: 20px 24px 8px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.event-editor__title-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 22px;\n  color: #3c4043;\n  padding: 8px 0;\n  border-bottom: 2px solid transparent;\n  transition: border-color 0.2s;\n}\n.event-editor__title-input[_ngcontent-%COMP%]:focus {\n  border-bottom-color: #ff9800;\n}\n.event-editor__title-input[_ngcontent-%COMP%]::placeholder {\n  color: #b0b0b0;\n}\n.event-editor__body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.event-editor__section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 6px 24px;\n  gap: 16px;\n}\n.event-editor__section-icon[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  margin-top: 12px;\n  flex-shrink: 0;\n}\n.event-editor__datetime[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.event-editor__date-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.event-editor__time-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 6px;\n  flex-wrap: wrap;\n}\n.event-editor__time-row[_ngcontent-%COMP%]   .event-editor__time-field[_ngcontent-%COMP%] {\n  flex: 0 0 170px;\n  width: 170px;\n}\n.event-editor__separator[_ngcontent-%COMP%] {\n  color: #81766e;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.event-editor__date-field[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.event-editor__date-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.event-editor__time-field[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.event-editor__time-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.event-editor__separator[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: 16px;\n  padding: 0 2px;\n}\n.event-editor__options-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-top: 4px;\n}\n.event-editor__allday-check[_ngcontent-%COMP%]     .mdc-form-field {\n  font-size: 13px;\n}\n.event-editor__recurrence-field[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.event-editor__recurrence-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.event-editor__full-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.event-editor__full-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.event-editor__video-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 8px;\n}\n.event-editor__video-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #dadce0;\n  background: #fff;\n  border-radius: 4px;\n  padding: 8px 16px;\n  font-size: 13px;\n  color: #1a73e8;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.event-editor__video-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a73e8;\n}\n.event-editor__video-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f4;\n}\n.event-editor__video-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.event-editor__video-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1a73e8;\n  font-size: 13px;\n  text-decoration: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 400px;\n}\n.event-editor__video-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.event-editor__reminders[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 4px;\n}\n.event-editor__reminder-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.event-editor__reminder-field[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.event-editor__reminder-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.event-editor__reminder-remove[_ngcontent-%COMP%] {\n  width: 28px !important;\n  height: 28px !important;\n  line-height: 28px !important;\n}\n.event-editor__reminder-remove[_ngcontent-%COMP%]     .mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.event-editor__add-reminder[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #1a73e8;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 4px 0;\n}\n.event-editor__add-reminder[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.event-editor__calendar-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex: 1;\n}\n.event-editor__calendar-field[_ngcontent-%COMP%], .event-editor__visibility-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.event-editor__calendar-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper, .event-editor__visibility-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.event-editor__cal-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.event-editor__colors[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  padding-top: 10px;\n  flex-wrap: wrap;\n}\n.event-editor__color-btn[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n  min-width: 24px !important;\n  max-width: 24px !important;\n  min-height: 24px !important;\n  max-height: 24px !important;\n  aspect-ratio: 1/1;\n  flex: 0 0 24px !important;\n  border-radius: 50% !important;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: border-color 0.15s, transform 0.15s;\n  padding: 0;\n  box-sizing: border-box;\n}\n.event-editor__color-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.event-editor__color-btn--selected[_ngcontent-%COMP%] {\n  border-color: #3c4043;\n  transform: scale(1.15);\n}\n.event-editor__availability[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 4px;\n}\n.event-editor__availability-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5f6368;\n  display: block;\n  margin-bottom: 4px;\n}\n.event-editor__availability-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1px;\n  height: 20px;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.event-editor__availability-slot[_ngcontent-%COMP%] {\n  flex: 1;\n  opacity: 0.7;\n  transition: opacity 0.15s;\n  cursor: default;\n}\n.event-editor__availability-slot[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.event-editor__availability-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 4px;\n}\n.event-editor__legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  color: #70757a;\n}\n.event-editor__legend-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.event-editor__attach-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #dadce0;\n  border-radius: 4px;\n  padding: 8px 16px;\n  font-size: 13px;\n  color: #5f6368;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: background-color 0.15s;\n}\n.event-editor__attach-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f4;\n}\n.event-editor__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 24px;\n  border-top: 1px solid #e0e0e0;\n}\n.event-editor__footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n.event-editor__delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #d32f2f;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px 16px;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.event-editor__delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fbe9e7;\n}\n.event-editor__cancel-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #dadce0;\n  color: #3c4043;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px 24px;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.event-editor__cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f4;\n}\n.event-editor__save-btn[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  border: none;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px 24px;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.event-editor__save-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f57c00;\n}\n.event-editor__save-btn[_ngcontent-%COMP%]:active {\n  background-color: #e65100;\n}\n/*# sourceMappingURL=event-editor.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventEditorComponent, { className: "EventEditorComponent", filePath: "src\\app\\features\\calendar\\components\\event-editor\\event-editor.component.ts", lineNumber: 67 });
})();

// src/app/features/calendar/pages/calendar-page/calendar-page.component.ts
function CalendarPageComponent_app_calendar_sidebar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-calendar-sidebar", 10);
    \u0275\u0275listener("dateSelected", function CalendarPageComponent_app_calendar_sidebar_1_Template_app_calendar_sidebar_dateSelected_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateSelected($event));
    })("createEventClicked", function CalendarPageComponent_app_calendar_sidebar_1_Template_app_calendar_sidebar_createEventClicked_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreateEventClicked());
    })("calendarVisibilityToggled", function CalendarPageComponent_app_calendar_sidebar_1_Template_app_calendar_sidebar_calendarVisibilityToggled_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCalendarVisibilityToggled($event));
    })("calendarSoloToggled", function CalendarPageComponent_app_calendar_sidebar_1_Template_app_calendar_sidebar_calendarSoloToggled_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCalendarSoloToggled($event));
    })("monthChanged", function CalendarPageComponent_app_calendar_sidebar_1_Template_app_calendar_sidebar_monthChanged_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMonthChanged($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("calendars", ctx_r1.calendars)("currentDate", ctx_r1.currentDate)("eventsMap", ctx_r1.eventsDateMap);
  }
}
function CalendarPageComponent_app_calendar_month_view_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-calendar-month-view", 11);
    \u0275\u0275listener("dateClicked", function CalendarPageComponent_app_calendar_month_view_5_Template_app_calendar_month_view_dateClicked_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateClicked($event));
    })("eventClicked", function CalendarPageComponent_app_calendar_month_view_5_Template_app_calendar_month_view_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventClicked($event));
    })("moreEventsClicked", function CalendarPageComponent_app_calendar_month_view_5_Template_app_calendar_month_view_moreEventsClicked_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMoreEventsClicked($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("currentDate", ctx_r1.currentDate)("events", ctx_r1.events)("visibleCalendarIds", ctx_r1.visibleCalendarIds)("calendars", ctx_r1.calendars);
  }
}
function CalendarPageComponent_app_calendar_week_view_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-calendar-week-view", 12);
    \u0275\u0275listener("eventClicked", function CalendarPageComponent_app_calendar_week_view_6_Template_app_calendar_week_view_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventClicked($event));
    })("timeSlotClicked", function CalendarPageComponent_app_calendar_week_view_6_Template_app_calendar_week_view_timeSlotClicked_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTimeSlotClicked($event));
    })("timeSlotDragged", function CalendarPageComponent_app_calendar_week_view_6_Template_app_calendar_week_view_timeSlotDragged_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTimeSlotDragged($event));
    })("eventMoved", function CalendarPageComponent_app_calendar_week_view_6_Template_app_calendar_week_view_eventMoved_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventMoved($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("currentDate", ctx_r1.currentDate)("events", ctx_r1.events)("visibleCalendarIds", ctx_r1.visibleCalendarIds)("calendars", ctx_r1.calendars)("viewType", ctx_r1.weekViewType);
  }
}
function CalendarPageComponent_app_calendar_day_view_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-calendar-day-view", 13);
    \u0275\u0275listener("eventClicked", function CalendarPageComponent_app_calendar_day_view_7_Template_app_calendar_day_view_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventClicked($event));
    })("timeSlotClicked", function CalendarPageComponent_app_calendar_day_view_7_Template_app_calendar_day_view_timeSlotClicked_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTimeSlotClicked($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("currentDate", ctx_r1.currentDate)("events", ctx_r1.events)("visibleCalendarIds", ctx_r1.visibleCalendarIds)("calendars", ctx_r1.calendars);
  }
}
function CalendarPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function CalendarPageComponent_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function CalendarPageComponent_div_8_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "app-event-detail", 16);
    \u0275\u0275listener("editClicked", function CalendarPageComponent_div_8_Template_app_event_detail_editClicked_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventDetailEdit($event));
    })("deleteClicked", function CalendarPageComponent_div_8_Template_app_event_detail_deleteClicked_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventDetailDelete($event));
    })("duplicateClicked", function CalendarPageComponent_div_8_Template_app_event_detail_duplicateClicked_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventDetailDuplicate($event));
    })("guestsInvited", function CalendarPageComponent_div_8_Template_app_event_detail_guestsInvited_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventDetailInvite($event));
    })("responseChanged", function CalendarPageComponent_div_8_Template_app_event_detail_responseChanged_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventDetailResponse($event));
    })("closed", function CalendarPageComponent_div_8_Template_app_event_detail_closed_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEventDetail());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("event", ctx_r1.selectedEvent)("calendar", ctx_r1.selectedEventCalendar);
  }
}
function CalendarPageComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function CalendarPageComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMobileFab());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
var CalendarPageComponent = class _CalendarPageComponent {
  constructor(calendarService, dialog, notification, cdr, titleService, route) {
    this.calendarService = calendarService;
    this.dialog = dialog;
    this.notification = notification;
    this.cdr = cdr;
    this.titleService = titleService;
    this.route = route;
    this.currentDate = /* @__PURE__ */ new Date();
    this.currentView = "week7";
    this.calendars = [];
    this.events = [];
    this.allEvents = [];
    this.visibleCalendarIds = [];
    this.eventSearchQuery = "";
    this.searchResultsForHeader = [];
    this.selectedEvent = null;
    this.showEventDetail = false;
    this.detailPosition = { top: 0, left: 0 };
    this.eventsDateMap = /* @__PURE__ */ new Map();
    this.sidebarCollapsed = false;
    this.isMobile = false;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.titleService.setTitle('\u30AB\u30EC\u30F3\u30C0\u30FC | \u65E5\u7A0B\u8ABF\u6574\u30C4\u30FC\u30EB"\u30B9\u30B1\u30B3\u30F3"');
    this.checkResponsive();
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params["q"]) {
        this.eventSearchQuery = params["q"];
        this.onEventSearch(params["q"]);
      }
    });
    combineLatest([
      this.calendarService.listCalendars(),
      this.calendarService.events$
    ]).pipe(takeUntil(this.destroy$)).subscribe(([calendars, events]) => {
      this.calendars = calendars;
      this.allEvents = events;
      this.events = this.applyEventSearch(events);
      this.visibleCalendarIds = calendars.filter((c) => c.visible).map((c) => c.id);
      this.eventsDateMap = buildEventsDateMap(this.events.filter((e) => this.visibleCalendarIds.includes(e.calendarId)));
      this.cdr.markForCheck();
    });
  }
  /** 検索クエリ適用 (タイトル / 説明 / 場所をターゲット) */
  applyEventSearch(list) {
    const q = this.eventSearchQuery.trim().toLowerCase();
    if (!q)
      return list;
    return list.filter((e) => (e.title || "").toLowerCase().includes(q) || (e.description || "").toLowerCase().includes(q) || (e.location || "").toLowerCase().includes(q));
  }
  /** ヘッダーの検索バーから呼ばれる */
  onEventSearch(q) {
    this.eventSearchQuery = q;
    this.events = this.applyEventSearch(this.allEvents);
    this.eventsDateMap = buildEventsDateMap(this.events.filter((e) => this.visibleCalendarIds.includes(e.calendarId)));
    if (q) {
      const visible = new Set(this.visibleCalendarIds);
      this.searchResultsForHeader = this.applyEventSearch(this.allEvents).filter((e) => visible.has(e.calendarId)).slice().sort((a, b) => (a.start?.getTime?.() || 0) - (b.start?.getTime?.() || 0)).slice(0, 20).map((e) => {
        const cal = this.calendars.find((c) => c.id === e.calendarId);
        const d = e.start;
        const dateLabel = d ? `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}` : "";
        return __spreadProps(__spreadValues({}, e), { _color: cal?.color || "#1a73e8", _dateLabel: dateLabel });
      });
    } else {
      this.searchResultsForHeader = [];
    }
    this.cdr.markForCheck();
  }
  /** ドロップダウンから選択されたイベントを開く */
  onSearchEventSelected(event) {
    if (event?.start) {
      this.currentDate = new Date(event.start);
    }
    this.selectedEvent = event;
    this.selectedEventCalendar = this.calendars.find((c) => c.id === event.calendarId);
    this.showEventDetail = true;
    this.cdr.markForCheck();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onResize() {
    this.checkResponsive();
  }
  onKeydown(event) {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
      return;
    }
    switch (event.key) {
      case "ArrowLeft":
        this.onDateChanged(this.getAdjacentDate(-1));
        event.preventDefault();
        break;
      case "ArrowRight":
        this.onDateChanged(this.getAdjacentDate(1));
        event.preventDefault();
        break;
      case "t":
        this.onTodayClicked();
        break;
      case "d":
        this.onViewChanged("day1");
        break;
      case "w":
        this.onViewChanged("week7");
        break;
      case "m":
        this.onViewChanged("month");
        break;
      case "c":
        this.openEventEditor("create");
        break;
      case "Escape":
        this.closeEventDetail();
        break;
    }
  }
  checkResponsive() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.sidebarCollapsed = width < 1024;
    this.cdr.markForCheck();
  }
  getAdjacentDate(direction) {
    const d = new Date(this.currentDate);
    switch (this.currentView) {
      case "month":
        d.setMonth(d.getMonth() + direction);
        break;
      case "week7":
        d.setDate(d.getDate() + 7 * direction);
        break;
      case "week5":
        d.setDate(d.getDate() + 5 * direction);
        break;
      case "day3":
        d.setDate(d.getDate() + 3 * direction);
        break;
      case "day1":
        d.setDate(d.getDate() + direction);
        break;
    }
    return d;
  }
  // === Header events ===
  onDateChanged(date) {
    this.currentDate = date;
    this.cdr.markForCheck();
  }
  onViewChanged(view) {
    this.currentView = view;
    this.cdr.markForCheck();
  }
  onTodayClicked() {
    this.currentDate = /* @__PURE__ */ new Date();
    this.cdr.markForCheck();
  }
  // === Sidebar events ===
  onDateSelected(date) {
    this.currentDate = date;
    this.cdr.markForCheck();
  }
  onCreateEventClicked() {
    this.openEventEditor("create");
  }
  onCalendarVisibilityToggled(calendarId) {
    this.calendarService.toggleCalendarVisibility(calendarId);
  }
  /** 右クリック: このカレンダーだけ表示 (他は全部非表示) — もう一度押すと全表示に戻る */
  onCalendarSoloToggled(calendarId) {
    const visibleIds = this.calendars.filter((c) => c.visible).map((c) => c.id);
    const isAlreadySolo = visibleIds.length === 1 && visibleIds[0] === calendarId;
    this.calendars.forEach((c) => {
      const shouldBeVisible = isAlreadySolo ? true : c.id === calendarId;
      if (c.visible !== shouldBeVisible) {
        this.calendarService.toggleCalendarVisibility(c.id);
      }
    });
  }
  onMonthChanged(date) {
  }
  // === View events ===
  onEventClicked(event) {
    this.selectedEvent = event;
    this.selectedEventCalendar = this.calendars.find((c) => c.id === event.calendarId);
    this.showEventDetail = true;
    this.cdr.markForCheck();
  }
  onDateClicked(date) {
    this.currentDate = date;
    if (this.currentView === "month") {
      this.currentView = "day1";
    }
    this.cdr.markForCheck();
  }
  onTimeSlotClicked(data) {
    const hh = String(data.hour).padStart(2, "0");
    const mm = String(data.minute).padStart(2, "0");
    const startTime = `${hh}:${mm}`;
    const endHour = data.minute >= 30 ? data.hour + 1 : data.hour;
    const endMin = data.minute >= 30 ? data.minute - 30 : data.minute + 30;
    const endTime = `${String(endHour).padStart(2, "0")}:${String(endMin).padStart(2, "0")}`;
    this.openEventEditor("create", void 0, data.date, startTime, endTime);
  }
  onMoreEventsClicked(data) {
    this.currentDate = data.date;
    this.currentView = "day1";
    this.cdr.markForCheck();
  }
  onTimeSlotDragged(data) {
    this.openEventEditor("create", void 0, data.date, data.startTime, data.endTime);
  }
  // === Event detail events ===
  closeEventDetail() {
    this.showEventDetail = false;
    this.selectedEvent = null;
    this.cdr.markForCheck();
  }
  onEventDetailEdit(event) {
    this.closeEventDetail();
    this.openEventEditor("edit", event);
  }
  onEventDetailDelete(event) {
    this.closeEventDetail();
    this.calendarService.deleteEvent(event.id).subscribe(() => {
      this.notification.warn("\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
    });
  }
  onEventDetailResponse(data) {
    this.calendarService.respondToEvent(data.event.id, data.response).subscribe();
    this.notification.success("\u51FA\u6B20\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
  }
  /** 予定詳細からメールで招待 (ユーザー指示 2026-04-21) */
  onEventDetailInvite(data) {
    this.calendarService.inviteGuests(data.event.id, data.emails).subscribe((updated) => {
      if (this.selectedEvent && this.selectedEvent.id === updated.id) {
        this.selectedEvent = updated;
        this.cdr.markForCheck();
      }
      this.notification.success(`${data.emails.length}\u540D\u3092\u62DB\u5F85\u3057\u307E\u3057\u305F`);
    });
  }
  /**
   * 予定詳細から「複製」: Google カレンダー と同じ挙動 (ユーザー指示 2026-04-21)
   * → 予定エディタが開き、元予定の値が全てプリフィルされた "新規作成" 状態で立ち上がる。
   *   ユーザーが中身を確認・編集して「保存」を押すと新しい予定として作成される。
   */
  onEventDetailDuplicate(event) {
    this.closeEventDetail();
    const sourceEvent = __spreadProps(__spreadValues({}, event), {
      // id を外して、create モードで新規扱いになるようにする (id 自体は editor で無視される)
      id: "",
      guests: event.guests ? event.guests.map((g) => __spreadValues({}, g)) : [],
      reminders: event.reminders ? event.reminders.map((r) => __spreadValues({}, r)) : [],
      start: new Date(event.start),
      end: new Date(event.end)
    });
    const data = {
      mode: "create",
      event: sourceEvent,
      calendars: this.calendars.filter((c) => c.id !== "cal-holidays" && c.id !== "cal-tanaka"),
      initialDate: this.currentDate
    };
    const dialogRef = this.dialog.open(EventEditorComponent, {
      data,
      panelClass: "event-editor-dialog",
      maxHeight: "90vh",
      disableClose: false
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result)
        return;
      if (result.action === "save") {
        this.calendarService.createEvent(result.event).subscribe(() => {
          this.notification.success("\u4E88\u5B9A\u3092\u8907\u88FD\u3057\u307E\u3057\u305F");
        });
      }
    });
  }
  /** 予定をドラッグで移動 (ユーザー指示 2026-04-21) */
  onEventMoved(data) {
    const baseId = data.event.id.includes("-rec-") ? data.event.id.split("-rec-")[0] : data.event.id;
    this.calendarService.updateEvent(baseId, { start: data.newStart, end: data.newEnd }).subscribe(() => {
      this.notification.success("\u4E88\u5B9A\u3092\u79FB\u52D5\u3057\u307E\u3057\u305F");
    });
  }
  // === Event editor ===
  openEventEditor(mode, event, initialDate, initialStartTime, initialEndTime) {
    const data = {
      mode,
      event,
      calendars: this.calendars.filter((c) => c.id !== "cal-holidays" && c.id !== "cal-tanaka"),
      initialDate: initialDate || this.currentDate,
      initialStartTime,
      initialEndTime
    };
    const dialogRef = this.dialog.open(EventEditorComponent, {
      data,
      panelClass: "event-editor-dialog",
      maxHeight: "90vh",
      disableClose: false
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result)
        return;
      switch (result.action) {
        case "save":
          if (mode === "edit" && result.event.id) {
            this.calendarService.updateEvent(result.event.id, result.event).subscribe(() => {
              this.notification.success("\u4E88\u5B9A\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F");
            });
          } else {
            this.calendarService.createEvent(result.event).subscribe(() => {
              this.notification.success("\u4E88\u5B9A\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F");
            });
          }
          break;
        case "delete":
          if (result.event?.id) {
            this.calendarService.deleteEvent(result.event.id).subscribe(() => {
              this.notification.warn("\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
            });
          }
          break;
      }
    });
  }
  // === Mobile FAB ===
  onMobileFab() {
    this.openEventEditor("create");
  }
  // === Overlay click ===
  onOverlayClick() {
    this.closeEventDetail();
  }
  get weekViewType() {
    if (this.currentView === "week7")
      return "week7";
    if (this.currentView === "week5")
      return "week5";
    return "day3";
  }
  static {
    this.\u0275fac = function CalendarPageComponent_Factory(t) {
      return new (t || _CalendarPageComponent)(\u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarPageComponent, selectors: [["app-calendar-page"]], hostBindings: function CalendarPageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function CalendarPageComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, \u0275\u0275resolveWindow)("keydown", function CalendarPageComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 13, consts: [[1, "calendar-page"], ["class", "calendar-page__sidebar", 3, "calendars", "currentDate", "eventsMap", "dateSelected", "createEventClicked", "calendarVisibilityToggled", "calendarSoloToggled", "monthChanged", 4, "ngIf"], [1, "calendar-page__main"], [3, "dateChanged", "viewChanged", "todayClicked", "eventSearch", "eventSelected", "currentDate", "currentView", "searchResults"], [1, "calendar-page__view"], [3, "currentDate", "events", "visibleCalendarIds", "calendars", "dateClicked", "eventClicked", "moreEventsClicked", 4, "ngIf"], [3, "currentDate", "events", "visibleCalendarIds", "calendars", "viewType", "eventClicked", "timeSlotClicked", "timeSlotDragged", "eventMoved", 4, "ngIf"], [3, "currentDate", "events", "visibleCalendarIds", "calendars", "eventClicked", "timeSlotClicked", 4, "ngIf"], ["class", "calendar-page__detail-overlay", 3, "click", 4, "ngIf"], ["class", "calendar-page__fab", 3, "click", 4, "ngIf"], [1, "calendar-page__sidebar", 3, "dateSelected", "createEventClicked", "calendarVisibilityToggled", "calendarSoloToggled", "monthChanged", "calendars", "currentDate", "eventsMap"], [3, "dateClicked", "eventClicked", "moreEventsClicked", "currentDate", "events", "visibleCalendarIds", "calendars"], [3, "eventClicked", "timeSlotClicked", "timeSlotDragged", "eventMoved", "currentDate", "events", "visibleCalendarIds", "calendars", "viewType"], [3, "eventClicked", "timeSlotClicked", "currentDate", "events", "visibleCalendarIds", "calendars"], [1, "calendar-page__detail-overlay", 3, "click"], [1, "calendar-page__detail-container", 3, "click"], [3, "editClicked", "deleteClicked", "duplicateClicked", "guestsInvited", "responseChanged", "closed", "event", "calendar"], [1, "calendar-page__fab", 3, "click"]], template: function CalendarPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, CalendarPageComponent_app_calendar_sidebar_1_Template, 1, 3, "app-calendar-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "app-calendar-header", 3);
        \u0275\u0275listener("dateChanged", function CalendarPageComponent_Template_app_calendar_header_dateChanged_3_listener($event) {
          return ctx.onDateChanged($event);
        })("viewChanged", function CalendarPageComponent_Template_app_calendar_header_viewChanged_3_listener($event) {
          return ctx.onViewChanged($event);
        })("todayClicked", function CalendarPageComponent_Template_app_calendar_header_todayClicked_3_listener() {
          return ctx.onTodayClicked();
        })("eventSearch", function CalendarPageComponent_Template_app_calendar_header_eventSearch_3_listener($event) {
          return ctx.onEventSearch($event);
        })("eventSelected", function CalendarPageComponent_Template_app_calendar_header_eventSelected_3_listener($event) {
          return ctx.onSearchEventSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275template(5, CalendarPageComponent_app_calendar_month_view_5_Template, 1, 4, "app-calendar-month-view", 5)(6, CalendarPageComponent_app_calendar_week_view_6_Template, 1, 5, "app-calendar-week-view", 6)(7, CalendarPageComponent_app_calendar_day_view_7_Template, 1, 4, "app-calendar-day-view", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, CalendarPageComponent_div_8_Template, 3, 2, "div", 8)(9, CalendarPageComponent_button_9_Template, 3, 0, "button", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("calendar-page--sidebar-collapsed", ctx.sidebarCollapsed)("calendar-page--mobile", ctx.isMobile);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.sidebarCollapsed);
        \u0275\u0275advance(2);
        \u0275\u0275property("currentDate", ctx.currentDate)("currentView", ctx.currentView)("searchResults", ctx.searchResultsForHeader);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.currentView === "month");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView === "week7" || ctx.currentView === "week5" || ctx.currentView === "day3");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView === "day1");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEventDetail && ctx.selectedEvent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isMobile);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatIcon,
      CalendarSidebarComponent,
      CalendarHeaderComponent,
      CalendarMonthViewComponent,
      CalendarWeekViewComponent,
      CalendarDayViewComponent,
      EventDetailComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  height: 100svh;\n  height: 100dvh;\n  width: 100%;\n  max-width: 100vw;\n  overflow: hidden;\n  overflow-x: hidden;\n  box-sizing: border-box;\n}\n.calendar-page[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  overflow-x: hidden;\n  background: #fff;\n  box-sizing: border-box;\n}\n.calendar-page__sidebar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.calendar-page__main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n}\n.calendar-page__view[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  position: relative;\n}\n.calendar-page__view[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n  min-width: 0;\n}\n.calendar-page--sidebar-collapsed[_ngcontent-%COMP%]   .calendar-page__sidebar[_ngcontent-%COMP%] {\n  display: none;\n}\n.calendar-page--mobile[_ngcontent-%COMP%]   .calendar-page__sidebar[_ngcontent-%COMP%] {\n  display: none;\n}\n.calendar-page__detail-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.calendar-page__detail-container[_ngcontent-%COMP%] {\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_detailFadeIn 0.15s ease-out;\n}\n.calendar-page__fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  width: 56px;\n  height: 56px;\n  border-radius: 28px;\n  background-color: #ff9800;\n  color: #fff;\n  border: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  transition: background-color 0.2s, box-shadow 0.2s;\n}\n.calendar-page__fab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.calendar-page__fab[_ngcontent-%COMP%]:hover {\n  background-color: #f57c00;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);\n}\n.calendar-page__fab[_ngcontent-%COMP%]:active {\n  background-color: #e65100;\n}\n@keyframes _ngcontent-%COMP%_detailFadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 767px) {\n  .calendar-page[_ngcontent-%COMP%] {\n  }\n  .calendar-page__main[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n  .calendar-page__view[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    -webkit-overflow-scrolling: touch;\n  }\n  .calendar-page__fab[_ngcontent-%COMP%] {\n    bottom: calc(20px + env(safe-area-inset-bottom, 0px));\n    right: 16px;\n    width: 48px;\n    height: 48px;\n    border-radius: 24px;\n  }\n  .calendar-page__fab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n    width: 24px;\n    height: 24px;\n  }\n  .calendar-page__view[_ngcontent-%COMP%] {\n    padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px));\n  }\n  .calendar-page__detail-overlay[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  app-calendar-page[_ngcontent-%COMP%], app-calendar-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    max-width: 100vw !important;\n    box-sizing: border-box !important;\n  }\n  app-calendar-page[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-calendar-page[_ngcontent-%COMP%]   .week-grid[_ngcontent-%COMP%], app-calendar-page[_ngcontent-%COMP%]   .day-grid[_ngcontent-%COMP%] {\n    table-layout: fixed !important;\n    width: 100% !important;\n  }\n}\n  .event-editor-dialog .mat-mdc-dialog-container {\n  padding: 0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=calendar-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarPageComponent, { className: "CalendarPageComponent", filePath: "src\\app\\features\\calendar\\pages\\calendar-page\\calendar-page.component.ts", lineNumber: 52 });
})();
export {
  CalendarPageComponent
};
//# sourceMappingURL=chunk-RIAGASTP.js.map
