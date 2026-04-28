import {
  CalendarService
} from "./chunk-5OGJ5V3Y.js";
import {
  MailService,
  MatDivider,
  MatDividerModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-HKDYSX2N.js";
import {
  BrowserNotificationService,
  ChatStateService,
  RealtimeGatewayService
} from "./chunk-JXBPGVLI.js";
import {
  ScheduleModalService
} from "./chunk-W3VOPBRX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-36EVFMHL.js";
import {
  CommunityService
} from "./chunk-GSEWMOGN.js";
import {
  MatButtonModule
} from "./chunk-A5WWN5VM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-YF2NDTP4.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter,
  withInMemoryScrolling,
  withRouterConfig
} from "./chunk-VOAOX4DE.js";
import {
  AUTO_STYLE,
  AnimationGroupPlayer,
  AnimationMetadataType,
  BrowserModule,
  DomRendererFactory2,
  MatIcon,
  MatIconModule,
  NoopAnimationPlayer,
  bootstrapApplication,
  sequence,
  style,
  ɵPRE_STYLE
} from "./chunk-MPKYFQD7.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  CommonModule,
  DOCUMENT,
  Inject,
  Injectable,
  NgForOf,
  NgIf,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  NgZone,
  PLATFORM_ID,
  RendererFactory2,
  RuntimeError,
  SlicePipe,
  Subject,
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  forkJoin,
  inject,
  isPlatformBrowser,
  of,
  performanceMarkFeature,
  setClassMetadata,
  switchMap,
  take,
  takeUntil,
  timeout,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
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

// node_modules/@angular/animations/fesm2022/browser.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   * @deprecated unused
   */
  matchesElement(_element, _selector) {
    return false;
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static {
    this.\u0275fac = function NoopAnimationDriver_Factory(t) {
      return new (t || _NoopAnimationDriver)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NoopAnimationDriver,
      factory: _NoopAnimationDriver.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  static {
    this.NOOP = new NoopAnimationDriver();
  }
};
var AnimationStyleNormalizer = class {
};
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number")
    return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2)
    return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1)
      return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  (typeof ngDevMode === "undefined" || ngDevMode) && console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  (typeof ngDevMode === "undefined" || ngDevMode) && console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string")
        return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  constructor(errors) {
    this.errors = errors;
    this.queryCount = 0;
    this.depCount = 0;
    this.currentTransition = null;
    this.currentQuery = null;
    this.currentQuerySelector = null;
    this.currentAnimateTimings = null;
    this.currentTime = 0;
    this.collectedStyles = /* @__PURE__ */ new Map();
    this.options = null;
    this.unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string")
    return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map();
  }
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.parentContext = null;
    this.currentAnimateTimings = null;
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.subContextCount = 0;
    this.options = {};
    this.currentQueryIndex = 0;
    this.currentQueryTotal = 0;
    this.currentStaggerTime = 0;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options)
      return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    this.duration = 0;
    this.easing = null;
    this._previousKeyframe = /* @__PURE__ */ new Map();
    this._currentKeyframe = /* @__PURE__ */ new Map();
    this._keyframes = /* @__PURE__ */ new Map();
    this._styleSummary = /* @__PURE__ */ new Map();
    this._localTimelineStyles = /* @__PURE__ */ new Map();
    this._pendingStyles = /* @__PURE__ */ new Map();
    this._backFill = /* @__PURE__ */ new Map();
    this._currentEmptyStepKeyframe = null;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0)
      return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    this.transitionFactories = [];
    this.states = /* @__PURE__ */ new Map();
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states, this._normalizer);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
var TimelineAnimationEngine = class {
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._animations = /* @__PURE__ */ new Map();
    this._playersById = /* @__PURE__ */ new Map();
    this.players = [];
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (warnings.length) {
        warnRegister(warnings);
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this.players = [];
    this._triggers = /* @__PURE__ */ new Map();
    this._queue = [];
    this._elementListeners = /* @__PURE__ */ new Map();
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback)
        return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG])
        return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName))
          return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true))
      return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed)
        return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer, scheduler) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
    this.scheduler = scheduler;
    this.players = [];
    this.newHostElements = /* @__PURE__ */ new Map();
    this.playersByElement = /* @__PURE__ */ new Map();
    this.playersByQueriedElement = /* @__PURE__ */ new Map();
    this.statesByElement = /* @__PURE__ */ new Map();
    this.disabledNodes = /* @__PURE__ */ new Set();
    this.totalAnimations = 0;
    this.totalQueuedPlayers = 0;
    this._namespaceLookup = {};
    this._namespaceList = [];
    this._flushFns = [];
    this._whenQuietFns = [];
    this.namespacesByHostElement = /* @__PURE__ */ new Map();
    this.collectedEnterElements = [];
    this.collectedLeaveElements = [];
    this.onRemovalComplete = (element, context) => {
    };
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId)
      return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element))
      return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      this.scheduler?.notify();
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0)
      return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation)
        continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued)
            return;
          if (!isRemovalAnimation && player.triggerName != triggerName)
            return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId)
          return false;
        if (triggerName && triggerName != player.triggerName)
          return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried)
        return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
    this._player = new NoopAnimationPlayer();
    this._containsRealPlayer = false;
    this._queuedCallbacks = /* @__PURE__ */ new Map();
    this.destroyed = false;
    this.parentPlayer = null;
    this.markedForDestroy = false;
    this.disabled = false;
    this.queued = true;
    this.totalTime = 0;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer)
      return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0)
    return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node)
      return NULL_NODE;
    let root = localRootMap.get(node);
    if (root)
      return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length)
    return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop])
      return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry)
    return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  constructor(doc, _driver, _normalizer, scheduler) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._triggerCache = {};
    this.onRemovalComplete = (element, context) => {
    };
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer, scheduler);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (warnings.length) {
        warnTriggerBuild(name, warnings);
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  static {
    this.initialStylesByElement = /* @__PURE__ */ new WeakMap();
  }
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    this._state = 0;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._initialized = false;
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this.time = 0;
    this.parentPlayer = null;
    this.currentSnapshot = /* @__PURE__ */ new Map();
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized)
      return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  matchesElement(_element, _selector) {
    return false;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
    this.\u0275type = 0;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    return this.delegate.listen(target, eventName, callback);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    this._currentId = 0;
    this._microtaskId = 1;
    this._animationCallbacksBuffer = [];
    this._rendererCache = /* @__PURE__ */ new Map();
    this._cdRecurDepth = 0;
    engine.onRemovalComplete = (element, delegate2) => {
      const parentNode = delegate2?.parentNode(element);
      if (parentNode) {
        delegate2.removeChild(parentNode, element);
      }
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer, inject(ChangeDetectionScheduler, {
      optional: true
    }));
  }
  ngOnDestroy() {
    this.flush();
  }
  static {
    this.\u0275fac = function InjectableAnimationEngine_Factory(t) {
      return new (t || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _InjectableAnimationEngine,
      factory: _InjectableAnimationEngine.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static {
    this.\u0275fac = function BrowserAnimationsModule_Factory(t) {
      return new (t || _BrowserAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BrowserAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static {
    this.\u0275fac = function NoopAnimationsModule_Factory(t) {
      return new (t || _NoopAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NoopAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "top",
    pathMatch: "full"
  },
  {
    path: "top",
    loadComponent: () => import("./chunk-AJUZKLG3.js").then((m) => m.TopPageComponent)
  },
  {
    path: "calendar",
    loadComponent: () => import("./chunk-RIAGASTP.js").then((m) => m.CalendarPageComponent)
  },
  {
    path: "mail",
    loadComponent: () => import("./chunk-6IDAAQSF.js").then((m) => m.MailPageComponent)
  },
  {
    path: "chat",
    loadComponent: () => import("./chunk-E7NVHKKO.js").then((m) => m.ChatPageComponent)
  },
  {
    path: "chat/:roomId",
    loadComponent: () => import("./chunk-E7NVHKKO.js").then((m) => m.ChatPageComponent)
  },
  {
    path: "community",
    loadComponent: () => import("./chunk-OC74N3WT.js").then((m) => m.CommunityPageComponent)
  },
  /* fix (2026-04-27): モーダル → ページ遷移化 (PoC: コミュニティ新規作成).
     /community/create と /community/:id/sub/:subType/create を新設し、
     SP のモーダルクリック不能/反応悪い問題を構造的に解消 */
  {
    path: "community/create",
    loadComponent: () => import("./chunk-CPCBMPA2.js").then((m) => m.CommunityCreatePageComponent)
  },
  {
    path: "community/:id",
    loadComponent: () => import("./chunk-OC74N3WT.js").then((m) => m.CommunityPageComponent)
  },
  {
    path: "community/:id/sub/:subType/create",
    loadComponent: () => import("./chunk-TNQP67GG.js").then((m) => m.CommunitySubCreatePageComponent)
  },
  {
    path: "settings/profile",
    loadComponent: () => import("./chunk-X4LRQXZQ.js").then((m) => m.ProfilePageComponent)
  },
  {
    path: "settings/settings",
    loadComponent: () => import("./chunk-2Z4V4CCN.js").then((m) => m.SettingsPageComponent)
  },
  {
    path: "settings/service",
    loadComponent: () => import("./chunk-7CKPVTGN.js").then((m) => m.ServicePageComponent)
  },
  {
    path: "address-book",
    loadComponent: () => import("./chunk-V4O5DB6Y.js").then((m) => m.AddressBookPageComponent)
  },
  {
    path: "address-book/:id",
    loadComponent: () => import("./chunk-LCG6VN5O.js").then((m) => m.ContactDetailPageComponent)
  },
  {
    path: "history",
    loadComponent: () => import("./chunk-Z5GX7ZQG.js").then((m) => m.HistoryPageComponent)
  },
  {
    path: "one-on-one/event/:id",
    loadComponent: () => import("./chunk-JNTBNAKH.js").then((m) => m.OneOnOneEventPageComponent)
  },
  {
    path: "multiple/event/:id",
    loadComponent: () => import("./chunk-QKEHCONJ.js").then((m) => m.MultipleEventPageComponent)
  },
  {
    path: "confirm",
    loadComponent: () => import("./chunk-7B7X6WMO.js").then((m) => m.ConfirmPageComponent)
  },
  {
    path: "event/:id",
    loadComponent: () => import("./chunk-6HKOJOCT.js").then((m) => m.EventRedirectPageComponent)
  },
  {
    path: "multiple/create",
    loadComponent: () => import("./chunk-QGXQGLQK.js").then((m) => m.MultipleCreatePageComponent)
  },
  {
    path: "group/create",
    loadComponent: () => import("./chunk-CSF365PA.js").then((m) => m.GroupCreatePageComponent)
  },
  {
    path: "one-on-one-create",
    loadComponent: () => import("./chunk-HUQEJBXV.js").then((m) => m.OneOnOneCreatePageComponent)
  },
  {
    path: "one-on-one/edit/:id",
    loadComponent: () => import("./chunk-KCWE472V.js").then((m) => m.OneOnOneEditPageComponent)
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    }), withRouterConfig({ paramsInheritanceStrategy: "always" })),
    provideAnimations()
  ]
};

// src/app/shared/services/scroll-ui.service.ts
var ScrollUiService = class _ScrollUiService {
  constructor(zone) {
    this.zone = zone;
    this.lastY = 0;
    this.rafId = null;
    this.hidden = false;
    this.suspendUntil = 0;
    this.scrollListener = null;
    this.touchEndListener = null;
    this.focusInListener = null;
    this.focusOutListener = null;
    this.HIDE_DELTA = 6;
    this.TOP_Y = 10;
    this.NEAR_BOTTOM = 60;
  }
  /**
   * モバイルページで start を呼ぶと、body の scroll-ui-hidden クラスを動的に管理する。
   * PC 幅では何もしない。何度呼んでも idempotent。
   */
  start() {
    if (typeof window === "undefined")
      return;
    if (this.scrollListener)
      return;
    if (window.innerWidth > 1023)
      return;
    this.lastY = window.scrollY || 0;
    const run = () => {
      if (this.rafId)
        return;
      this.rafId = requestAnimationFrame(() => {
        this.rafId = null;
        if (Date.now() < this.suspendUntil) {
          this.lastY = window.scrollY || 0;
          return;
        }
        const y = window.scrollY || 0;
        const delta = y - this.lastY;
        const doc = document.documentElement;
        const nearBottom = doc.scrollHeight - doc.clientHeight - y <= this.NEAR_BOTTOM;
        if (y <= this.TOP_Y || nearBottom) {
          this.applyShow();
        } else if (delta < 0) {
          this.applyShow();
        } else if (delta > this.HIDE_DELTA && y > 30) {
          this.applyHide();
        }
        this.lastY = y;
      });
    };
    const onTouchEnd = () => {
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const doc = document.documentElement;
        const nearBottom = doc.scrollHeight - doc.clientHeight - y <= this.NEAR_BOTTOM;
        if (y <= this.TOP_Y || nearBottom)
          this.applyShow();
      });
    };
    const onFocusIn = (e) => {
      const t = e.target;
      if (!t)
        return;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) {
        this.applyShow();
        setTimeout(() => this.applyShow(), 120);
      }
    };
    this.zone.runOutsideAngular(() => {
      window.addEventListener("scroll", run, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
      document.addEventListener("focusin", onFocusIn, true);
    });
    this.scrollListener = run;
    this.touchEndListener = onTouchEnd;
    this.focusInListener = onFocusIn;
  }
  /** ページ遷移などで監視を止める (オプショナル)。body クラスは強制的に clear。 */
  stop() {
    if (typeof window === "undefined")
      return;
    if (this.scrollListener)
      window.removeEventListener("scroll", this.scrollListener);
    if (this.touchEndListener)
      window.removeEventListener("touchend", this.touchEndListener);
    if (this.focusInListener)
      document.removeEventListener("focusin", this.focusInListener, true);
    this.scrollListener = null;
    this.touchEndListener = null;
    this.focusInListener = null;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.forceShow();
  }
  /**
   * ルーム切替やモーダル表示直後など、プログラム的スクロールを走らせる局面で
   * 一時的に hide 判定を無効化 (デフォルト 500ms)。
   */
  suspend(ms = 500) {
    this.suspendUntil = Date.now() + ms;
  }
  /** UI を強制表示 (focus/near-bottom など) */
  forceShow() {
    this.applyShow();
  }
  applyShow() {
    if (!this.hidden)
      return;
    this.hidden = false;
    document.body.classList.remove("scroll-ui-hidden");
  }
  applyHide() {
    if (this.hidden)
      return;
    this.hidden = true;
    document.body.classList.add("scroll-ui-hidden");
  }
  ngOnDestroy() {
    this.stop();
  }
  static {
    this.\u0275fac = function ScrollUiService_Factory(t) {
      return new (t || _ScrollUiService)(\u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScrollUiService, factory: _ScrollUiService.\u0275fac, providedIn: "root" });
  }
};

// src/app/app.component.ts
function AppComponent_header_2_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function AppComponent_header_2_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_header_2_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u300C", ctx_r1.searchQuery, "\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u306F\u3042\u308A\u307E\u305B\u3093 ");
  }
}
function AppComponent_header_2_div_14_div_2_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_2_a_7_Template_a_mousedown_0_listener() {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.navigateToChat(c_r6));
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.channelName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.senderName);
  }
}
function AppComponent_header_2_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "mat-icon");
    \u0275\u0275text(3, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u30C1\u30E3\u30C3\u30C8 ");
    \u0275\u0275elementStart(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AppComponent_header_2_div_14_div_2_a_7_Template, 5, 2, "a", 58);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementStart(9, "button", 59);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_2_Template_button_mousedown_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateToSearchAll("chat"));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.searchResults.chat.length, "\u4EF6");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(8, 3, ctx_r1.searchResults.chat, 0, 3));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u30C1\u30E3\u30C3\u30C8\u306E\u691C\u7D22\u7D50\u679C\u3092\u3059\u3079\u3066\u898B\u308B (", ctx_r1.searchResults.chat.length, ") ");
  }
}
function AppComponent_header_2_div_14_div_3_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_3_a_7_Template_a_mousedown_0_listener() {
      const h_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.navigateToHistoryEntry(h_r9));
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", h_r9.organizer, " \xB7 ", h_r9.type, "");
  }
}
function AppComponent_header_2_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "mat-icon");
    \u0275\u0275text(3, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74 ");
    \u0275\u0275elementStart(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AppComponent_header_2_div_14_div_3_a_7_Template, 5, 3, "a", 58);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementStart(9, "button", 59);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_3_Template_button_mousedown_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateToSearchAll("history"));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.searchResults.history.length, "\u4EF6");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(8, 3, ctx_r1.searchResults.history, 0, 3));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74\u306E\u691C\u7D22\u7D50\u679C\u3092\u3059\u3079\u3066\u898B\u308B (", ctx_r1.searchResults.history.length, ") ");
  }
}
function AppComponent_header_2_div_14_div_4_a_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ct_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ct_r12.title, "");
  }
}
function AppComponent_header_2_div_14_div_4_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_4_a_7_Template_a_mousedown_0_listener() {
      const ct_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.navigateToContact(ct_r12));
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275text(4);
    \u0275\u0275template(5, AppComponent_header_2_div_14_div_4_a_7_span_5_Template, 2, 1, "span", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ct_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ct_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ct_r12.company);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ct_r12.title);
  }
}
function AppComponent_header_2_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "mat-icon");
    \u0275\u0275text(3, "import_contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u9023\u7D61\u5148 ");
    \u0275\u0275elementStart(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AppComponent_header_2_div_14_div_4_a_7_Template, 6, 3, "a", 58);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementStart(9, "button", 59);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_4_Template_button_mousedown_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateToSearchAll("contacts"));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.searchResults.contacts.length, "\u4EF6");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(8, 3, ctx_r1.searchResults.contacts, 0, 3));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u9023\u7D61\u5148\u306E\u691C\u7D22\u7D50\u679C\u3092\u3059\u3079\u3066\u898B\u308B (", ctx_r1.searchResults.contacts.length, ") ");
  }
}
function AppComponent_header_2_div_14_div_5_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_5_a_7_Template_a_mousedown_0_listener() {
      const e_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.navigateToCalendarEvent(e_r15));
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r15.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.formatDate(e_r15.start), " ", ctx_r1.formatTime(e_r15.start), "");
  }
}
function AppComponent_header_2_div_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "mat-icon");
    \u0275\u0275text(3, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u30AB\u30EC\u30F3\u30C0\u30FC ");
    \u0275\u0275elementStart(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AppComponent_header_2_div_14_div_5_a_7_Template, 5, 3, "a", 58);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementStart(9, "button", 59);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_5_Template_button_mousedown_9_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateToSearchAll("calendar"));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.searchResults.calendar.length, "\u4EF6");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(8, 3, ctx_r1.searchResults.calendar, 0, 3));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u691C\u7D22\u7D50\u679C\u3092\u3059\u3079\u3066\u898B\u308B (", ctx_r1.searchResults.calendar.length, ") ");
  }
}
function AppComponent_header_2_div_14_div_6_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_6_a_7_Template_a_mousedown_0_listener() {
      const m_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.navigateToMail(m_r18));
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r18.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r18.from.name, " \xB7 ", ctx_r1.formatDate(m_r18.date), "");
  }
}
function AppComponent_header_2_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "mat-icon");
    \u0275\u0275text(3, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u30E1\u30FC\u30EB ");
    \u0275\u0275elementStart(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AppComponent_header_2_div_14_div_6_a_7_Template, 5, 3, "a", 58);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementStart(9, "button", 59);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_6_Template_button_mousedown_9_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateToSearchAll("mail"));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.searchResults.mail.length, "\u4EF6");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(8, 3, ctx_r1.searchResults.mail, 0, 3));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u30E1\u30FC\u30EB\u306E\u691C\u7D22\u7D50\u679C\u3092\u3059\u3079\u3066\u898B\u308B (", ctx_r1.searchResults.mail.length, ") ");
  }
}
function AppComponent_header_2_div_14_div_7_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_7_a_7_Template_a_mousedown_0_listener() {
      const co_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.navigateToCommunity(co_r21));
    });
    \u0275\u0275elementStart(1, "div", 61)(2, "mat-icon", 63);
    \u0275\u0275text(3, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const co_r21 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", co_r21.title, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", co_r21.memberCount, "\u540D\u306E\u30E1\u30F3\u30D0\u30FC");
  }
}
function AppComponent_header_2_div_14_div_7_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_7_a_9_Template_a_mousedown_0_listener() {
      const ev_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.navigateToCommunityEvent(ev_r23));
    });
    \u0275\u0275elementStart(1, "div", 61)(2, "mat-icon", 63);
    \u0275\u0275text(3, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ev_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ev_r23.title, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u30A4\u30D9\u30F3\u30C8 \xB7 ", ctx_r1.getCommunityName(ev_r23.communityId), "");
  }
}
function AppComponent_header_2_div_14_div_7_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_7_a_11_Template_a_mousedown_0_listener() {
      const th_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.navigateToThread(th_r25));
    });
    \u0275\u0275elementStart(1, "div", 61)(2, "mat-icon", 63);
    \u0275\u0275text(3, "forum");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const th_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", th_r25.title || \u0275\u0275pipeBind3(5, 2, th_r25.content, 0, 40), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u30B9\u30EC\u30C3\u30C9 \xB7 ", ctx_r1.getCommunityName(th_r25.communityId), "");
  }
}
function AppComponent_header_2_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "mat-icon");
    \u0275\u0275text(3, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3 ");
    \u0275\u0275elementStart(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AppComponent_header_2_div_14_div_7_a_7_Template, 7, 2, "a", 58);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275template(9, AppComponent_header_2_div_14_div_7_a_9_Template, 7, 2, "a", 58);
    \u0275\u0275pipe(10, "slice");
    \u0275\u0275template(11, AppComponent_header_2_div_14_div_7_a_11_Template, 8, 6, "a", 58);
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementStart(13, "button", 59);
    \u0275\u0275listener("mousedown", function AppComponent_header_2_div_14_div_7_Template_button_mousedown_13_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateToSearchAll("community"));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u691C\u7D22\u7D50\u679C\u3092\u3059\u3079\u3066\u898B\u308B ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.searchResults.communities.length + ctx_r1.searchResults.communityEvents.length + ctx_r1.searchResults.threads.length + ctx_r1.searchResults.recruitments.length + ctx_r1.searchResults.appeals.length, "\u4EF6 ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(8, 4, ctx_r1.searchResults.communities, 0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(10, 8, ctx_r1.searchResults.communityEvents, 0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(12, 12, ctx_r1.searchResults.threads, 0, 2));
  }
}
function AppComponent_header_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, AppComponent_header_2_div_14_div_1_Template, 2, 1, "div", 52)(2, AppComponent_header_2_div_14_div_2_Template, 13, 7, "div", 53)(3, AppComponent_header_2_div_14_div_3_Template, 13, 7, "div", 53)(4, AppComponent_header_2_div_14_div_4_Template, 13, 7, "div", 53)(5, AppComponent_header_2_div_14_div_5_Template, 13, 7, "div", 53)(6, AppComponent_header_2_div_14_div_6_Template, 13, 7, "div", 53)(7, AppComponent_header_2_div_14_div_7_Template, 17, 16, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasResults);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchResults.chat.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchResults.history.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchResults.contacts.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchResults.calendar.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchResults.mail.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchResults.communities.length > 0 || ctx_r1.searchResults.communityEvents.length > 0 || ctx_r1.searchResults.threads.length > 0 || ctx_r1.searchResults.recruitments.length > 0 || ctx_r1.searchResults.appeals.length > 0);
  }
}
function AppComponent_header_2_mat_divider_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider");
  }
}
function AppComponent_header_2_div_63_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u8A31\u53EF\u6E08\u307F");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_header_2_div_63_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u30D6\u30ED\u30C3\u30AF\u4E2D");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_header_2_div_63_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u672A\u8A2D\u5B9A");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_header_2_div_63_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u975E\u5BFE\u5FDC");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_header_2_div_63_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "label", 73)(2, "input", 74);
    \u0275\u0275listener("change", function AppComponent_header_2_div_63_div_11_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleNotifyAppEnabled());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 75);
    \u0275\u0275elementStart(4, "span", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.notifyAppEnabled);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.notifyAppEnabled ? "ON" : "OFF");
  }
}
function AppComponent_header_2_div_63_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function AppComponent_header_2_div_63_button_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.sendTestNotification();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, " \u30C6\u30B9\u30C8\u901A\u77E5\u3092\u9001\u308B ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_header_2_div_63_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function AppComponent_header_2_div_63_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.enableNotifications());
    });
    \u0275\u0275text(1, "\u901A\u77E5\u3092\u8A31\u53EF");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_header_2_div_63_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function AppComponent_header_2_div_63_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDeniedHelp());
    });
    \u0275\u0275text(1, "\u30D6\u30ED\u30C3\u30AF\u89E3\u9664\u306E\u624B\u9806");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_header_2_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function AppComponent_header_2_div_63_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 65)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u901A\u77E5 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 66);
    \u0275\u0275elementContainerStart(6, 67);
    \u0275\u0275template(7, AppComponent_header_2_div_63_span_7_Template, 2, 0, "span", 68)(8, AppComponent_header_2_div_63_span_8_Template, 2, 0, "span", 68)(9, AppComponent_header_2_div_63_span_9_Template, 2, 0, "span", 68)(10, AppComponent_header_2_div_63_span_10_Template, 2, 0, "span", 68);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AppComponent_header_2_div_63_div_11_Template, 6, 2, "div", 69)(12, AppComponent_header_2_div_63_button_12_Template, 2, 0, "button", 70)(13, AppComponent_header_2_div_63_button_13_Template, 2, 0, "button", 70)(14, AppComponent_header_2_div_63_button_14_Template, 2, 0, "button", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.notifyPermission === "granted" ? "notifications_active" : ctx_r1.notifyPermission === "denied" ? "notifications_off" : "notifications_none");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-state", ctx_r1.notifyPermission);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r1.notifyPermission);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "granted");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "denied");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "default");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "unsupported");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifyPermission === "granted");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifyPermission === "granted" && ctx_r1.notifyAppEnabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifyPermission === "default");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifyPermission === "denied");
  }
}
function AppComponent_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 21)(1, "button", 22);
    \u0275\u0275listener("click", function AppComponent_header_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275element(2, "span", 23)(3, "span", 24)(4, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 26)(6, "a", 27);
    \u0275\u0275element(7, "img", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 29);
    \u0275\u0275elementStart(9, "div", 30)(10, "mat-icon", 31);
    \u0275\u0275text(11, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 32);
    \u0275\u0275listener("ngModelChange", function AppComponent_header_2_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchQueryChange($event));
    })("focus", function AppComponent_header_2_Template_input_focus_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchFocus());
    })("blur", function AppComponent_header_2_Template_input_blur_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AppComponent_header_2_button_13_Template, 3, 0, "button", 33)(14, AppComponent_header_2_div_14_Template, 8, 7, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 35, 0)(17, "div", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-menu", 37, 1)(21, "button", 38)(22, "mat-icon");
    \u0275\u0275text(23, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " \u30DE\u30A4\u30DA\u30FC\u30B8 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 39)(26, "mat-icon");
    \u0275\u0275text(27, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " \u30A2\u30AB\u30A6\u30F3\u30C8\u7BA1\u7406 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 40)(30, "mat-icon");
    \u0275\u0275text(31, "extension");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " \u5916\u90E8\u9023\u643A\u30B5\u30FC\u30D3\u30B9 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "mat-divider");
    \u0275\u0275elementStart(34, "button", 41);
    \u0275\u0275listener("click", function AppComponent_header_2_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openScheduleModal());
    });
    \u0275\u0275elementStart(35, "mat-icon");
    \u0275\u0275text(36, "event_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " \u4E88\u5B9A\u8ABF\u6574 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 42)(39, "mat-icon");
    \u0275\u0275text(40, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " \u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 43)(43, "mat-icon");
    \u0275\u0275text(44, "import_contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " \u9023\u7D61\u5148 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 44)(47, "mat-icon");
    \u0275\u0275text(48, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 44)(51, "mat-icon");
    \u0275\u0275text(52, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " \u30C1\u30E3\u30C3\u30C8 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 45)(55, "mat-icon");
    \u0275\u0275text(56, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " \u30E1\u30FC\u30EB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 46)(59, "mat-icon");
    \u0275\u0275text(60, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " \u30AB\u30EC\u30F3\u30C0\u30FC ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, AppComponent_header_2_mat_divider_62_Template, 1, 0, "mat-divider", 47)(63, AppComponent_header_2_div_63_Template, 15, 11, "div", 48);
    \u0275\u0275element(64, "mat-divider");
    \u0275\u0275elementStart(65, "button", 49)(66, "mat-icon");
    \u0275\u0275text(67, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " \u30ED\u30B0\u30A2\u30A6\u30C8 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const userMenu_r31 = \u0275\u0275reference(20);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("header--hidden", ctx_r1.isBottomNavHidden);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.isMobileMenuOpen);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("header__search--active", ctx_r1.searchActive);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showResults && ctx_r1.searchQuery.trim().length >= 1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", userMenu_r31);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.userInitial);
    \u0275\u0275advance();
    \u0275\u0275property("overlapTrigger", false);
    \u0275\u0275advance(43);
    \u0275\u0275property("ngIf", ctx_r1.isDesktop);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDesktop);
  }
}
function AppComponent_nav_4_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275element(1, "div", 92);
    \u0275\u0275elementStart(2, "a", 93);
    \u0275\u0275listener("click", function AppComponent_nav_4_div_36_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 83);
    \u0275\u0275text(6, "\u30E1\u30FC\u30EB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 94);
    \u0275\u0275listener("click", function AppComponent_nav_4_div_36_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 83);
    \u0275\u0275text(11, "\u30AB\u30EC\u30F3\u30C0\u30FC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 95);
    \u0275\u0275listener("click", function AppComponent_nav_4_div_36_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 83);
    \u0275\u0275text(16, "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "div", 92);
    \u0275\u0275elementStart(18, "a", 96);
    \u0275\u0275listener("click", function AppComponent_nav_4_div_36_Template_a_click_18_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 83);
    \u0275\u0275text(22, "\u30DE\u30A4\u30DA\u30FC\u30B8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "a", 97);
    \u0275\u0275listener("click", function AppComponent_nav_4_div_36_Template_a_click_23_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 83);
    \u0275\u0275text(27, "\u8A2D\u5B9A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "a", 98);
    \u0275\u0275listener("click", function AppComponent_nav_4_div_36_Template_a_click_28_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(29, "mat-icon");
    \u0275\u0275text(30, "extension");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 83);
    \u0275\u0275text(32, "\u5916\u90E8\u9023\u643A");
    \u0275\u0275elementEnd()()();
  }
}
function AppComponent_nav_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 79)(1, "div", 80)(2, "a", 81);
    \u0275\u0275listener("click", function AppComponent_nav_4_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openScheduleModal());
    });
    \u0275\u0275element(3, "img", 82);
    \u0275\u0275elementStart(4, "span", 83);
    \u0275\u0275text(5, "\u4E88\u5B9A\u8ABF\u6574");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 84);
    \u0275\u0275listener("click", function AppComponent_nav_4_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 83);
    \u0275\u0275text(10, "\u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 85);
    \u0275\u0275listener("click", function AppComponent_nav_4_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "import_contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 83);
    \u0275\u0275text(15, "\u9023\u7D61\u5148");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 86);
    \u0275\u0275listener("click", function AppComponent_nav_4_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 83);
    \u0275\u0275text(20, "\u30C1\u30E3\u30C3\u30C8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "a", 87);
    \u0275\u0275listener("click", function AppComponent_nav_4_Template_a_click_21_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 83);
    \u0275\u0275text(25, "\u30E1\u30FC\u30EB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "a", 88);
    \u0275\u0275listener("click", function AppComponent_nav_4_Template_a_click_26_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 83);
    \u0275\u0275text(30, "\u30AB\u30EC\u30F3\u30C0\u30FC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "a", 89);
    \u0275\u0275listener("click", function AppComponent_nav_4_Template_a_click_31_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 83);
    \u0275\u0275text(35, "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(36, AppComponent_nav_4_div_36_Template, 33, 0, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("navigation-rail--open", ctx_r1.isMobileMenuOpen);
    \u0275\u0275advance(36);
    \u0275\u0275property("ngIf", ctx_r1.isMobileMenuOpen);
  }
}
function AppComponent_aside_7_button_2_ng_container_2_div_4_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 114);
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("src", r_r36.memberAvatars[0].image, \u0275\u0275sanitizeUrl)("alt", r_r36.memberAvatars[0].initial);
  }
}
function AppComponent_aside_7_button_2_ng_container_2_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r36.memberAvatars[0].initial);
  }
}
function AppComponent_aside_7_button_2_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275template(1, AppComponent_aside_7_button_2_ng_container_2_div_4_img_1_Template, 1, 2, "img", 113)(2, AppComponent_aside_7_button_2_ng_container_2_div_4_span_2_Template, 2, 1, "span", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275styleProp("background", r_r36.memberAvatars[0].color);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r36.memberAvatars[0].image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r36.memberAvatars[0].image);
  }
}
function AppComponent_aside_7_button_2_ng_container_2_div_5_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 114);
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("src", r_r36.memberAvatars[1].image, \u0275\u0275sanitizeUrl)("alt", r_r36.memberAvatars[1].initial);
  }
}
function AppComponent_aside_7_button_2_ng_container_2_div_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r36.memberAvatars[1].initial);
  }
}
function AppComponent_aside_7_button_2_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275template(1, AppComponent_aside_7_button_2_ng_container_2_div_5_img_1_Template, 1, 2, "img", 113)(2, AppComponent_aside_7_button_2_ng_container_2_div_5_span_2_Template, 2, 1, "span", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275styleProp("background", r_r36.memberAvatars[1].color);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r36.memberAvatars[1].image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r36.memberAvatars[1].image);
  }
}
function AppComponent_aside_7_button_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 109)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AppComponent_aside_7_button_2_ng_container_2_div_4_Template, 3, 4, "div", 110)(5, AppComponent_aside_7_button_2_ng_container_2_div_5_Template, 3, 4, "div", 111);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", r_r36.avatarColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r36.initial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r36.memberAvatars && r_r36.memberAvatars[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r36.memberAvatars && r_r36.memberAvatars[1]);
  }
}
function AppComponent_aside_7_button_2_ng_template_3_img_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 118);
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", r_r36.avatarImage, \u0275\u0275sanitizeUrl)("alt", r_r36.name);
  }
}
function AppComponent_aside_7_button_2_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275styleProp("background", r_r36.avatarColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r36.initial);
  }
}
function AppComponent_aside_7_button_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_aside_7_button_2_ng_template_3_img_0_Template, 1, 2, "img", 116)(1, AppComponent_aside_7_button_2_ng_template_3_div_1_Template, 3, 3, "div", 117);
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", r_r36.avatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r36.avatarImage);
  }
}
function AppComponent_aside_7_button_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 120);
  }
}
function AppComponent_aside_7_button_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getRailUnread(r_r36.id));
  }
}
function AppComponent_aside_7_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275listener("click", function AppComponent_aside_7_button_2_Template_button_click_0_listener() {
      const r_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRecentRoom(r_r36.id));
    });
    \u0275\u0275elementStart(1, "div", 105);
    \u0275\u0275template(2, AppComponent_aside_7_button_2_ng_container_2_Template, 6, 5, "ng-container", 106)(3, AppComponent_aside_7_button_2_ng_template_3_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, AppComponent_aside_7_button_2_span_5_Template, 1, 0, "span", 107)(6, AppComponent_aside_7_button_2_span_6_Template, 2, 1, "span", 108);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r36 = ctx.$implicit;
    const singleAvatar_r37 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("chat-rail__item--group", r_r36.type === "group" && (r_r36.memberAvatars == null ? null : r_r36.memberAvatars.length));
    \u0275\u0275property("matTooltip", r_r36.name);
    \u0275\u0275attribute("data-testid", "rail-item-" + r_r36.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r36.type === "group" && (r_r36.memberAvatars == null ? null : r_r36.memberAvatars.length))("ngIfElse", singleAvatar_r37);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", r_r36.online);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getRailUnread(r_r36.id) > 0);
  }
}
function AppComponent_aside_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 122)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u4ED6", ctx_r1.hiddenRecentRoomsCount, "\u4EF6");
  }
}
function AppComponent_aside_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 99)(1, "div", 100);
    \u0275\u0275template(2, AppComponent_aside_7_button_2_Template, 7, 8, "button", 101)(3, AppComponent_aside_7_a_3_Template, 3, 1, "a", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 103);
    \u0275\u0275listener("click", function AppComponent_aside_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewChatPicker());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit_square");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.visibleRecentRooms)("ngForTrackBy", ctx_r1.trackByRoomId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hiddenRecentRoomsCount > 0);
  }
}
function AppComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 123);
    \u0275\u0275listener("click", function AppComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollPageToTop());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "keyboard_arrow_up");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_div_9_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.newChatPickerSelected.length === 1 ? "1\u5BFE1\u30C1\u30E3\u30C3\u30C8" : ctx_r1.newChatPickerSelected.length + "\u540D\u306E\u30B0\u30EB\u30FC\u30D7\u30C1\u30E3\u30C3\u30C8", " \u3068\u3057\u3066\u4F5C\u6210\u3055\u308C\u307E\u3059 ");
  }
}
function AppComponent_div_9_button_17_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 145);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_div_9_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 139);
    \u0275\u0275listener("click", function AppComponent_div_9_button_17_Template_button_click_0_listener() {
      const c_r41 = \u0275\u0275restoreView(_r40).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePickerContact(c_r41.id));
    });
    \u0275\u0275elementStart(1, "div", 140)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 141)(5, "div", 142);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 143);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AppComponent_div_9_button_17_mat_icon_9_Template, 2, 0, "mat-icon", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r41 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("new-chat-picker__item--selected", ctx_r1.isPickerSelected(c_r41.id));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", c_r41.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r41.initial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r41.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r41.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPickerSelected(c_r41.id));
  }
}
function AppComponent_div_9_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1, " \u8A72\u5F53\u3059\u308B\u9023\u7D61\u5148\u304C\u3042\u308A\u307E\u305B\u3093 ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275listener("click", function AppComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNewChatPicker());
    });
    \u0275\u0275elementStart(1, "div", 125);
    \u0275\u0275listener("click", function AppComponent_div_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r39);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 126)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u65B0\u898F\u30C1\u30E3\u30C3\u30C8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 127);
    \u0275\u0275listener("click", function AppComponent_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNewChatPicker());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 128)(11, "div", 129)(12, "mat-icon");
    \u0275\u0275text(13, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 130);
    \u0275\u0275twoWayListener("ngModelChange", function AppComponent_div_9_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newChatPickerQuery, $event) || (ctx_r1.newChatPickerQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, AppComponent_div_9_div_15_Template, 2, 1, "div", 131);
    \u0275\u0275elementStart(16, "div", 132);
    \u0275\u0275template(17, AppComponent_div_9_button_17_Template, 10, 8, "button", 133)(18, AppComponent_div_9_div_18_Template, 2, 0, "div", 134);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "footer", 135)(20, "button", 136);
    \u0275\u0275listener("click", function AppComponent_div_9_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNewChatPicker());
    });
    \u0275\u0275text(21, "\u30AD\u30E3\u30F3\u30BB\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 137);
    \u0275\u0275listener("click", function AppComponent_div_9_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createChatFromPicker());
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newChatPickerQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newChatPickerSelected.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredPickerContacts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredPickerContacts.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.newChatPickerSelected.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.newChatPickerSelected.length > 1 ? "\u30B0\u30EB\u30FC\u30D7\u3092\u4F5C\u6210" : "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB", " ");
  }
}
function AppComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 147)(1, "mat-icon", 148);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 149)(4, "div", 150);
    \u0275\u0275text(5, "\u30B9\u30B1\u30B3\u30F3\u3092\u30A2\u30D7\u30EA\u3068\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 151);
    \u0275\u0275text(7, "\u30DB\u30FC\u30E0\u753B\u9762\u304B\u3089\u7D20\u65E9\u304F\u30A2\u30AF\u30BB\u30B9 + \u30AA\u30D5\u30E9\u30A4\u30F3\u3067\u3082\u95B2\u89A7\u53EF\u80FD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 152)(9, "button", 153);
    \u0275\u0275listener("click", function AppComponent_div_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerInstall());
    });
    \u0275\u0275text(10, "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 154);
    \u0275\u0275listener("click", function AppComponent_div_10_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissInstallBanner());
    });
    \u0275\u0275text(12, "\u9589\u3058\u308B");
    \u0275\u0275elementEnd()()();
  }
}
function AppComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155)(1, "mat-icon", 156);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("realtime-status-bar--error", ctx_r1.realtimeStatus === "error");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.realtimeStatus === "error" ? "error_outline" : "wifi_off", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.realtimeStatus === "error" ? "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u540C\u671F\u3067\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F" : "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u540C\u671F\u304C\u5207\u65AD\u3055\u308C\u3066\u3044\u307E\u3059", " ");
  }
}
function AppComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 158)(1, "mat-icon", 159);
    \u0275\u0275text(2, "notifications_active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 160)(4, "div", 161);
    \u0275\u0275text(5, "\u901A\u77E5\u3092\u30AA\u30F3\u306B\u3057\u307E\u3059\u304B\uFF1F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 162);
    \u0275\u0275text(7, "\u65B0\u7740\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D6\u308A\u3053\u307C\u3055\u305A\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u901A\u77E5\u3067\u53D7\u3051\u53D6\u308C\u307E\u3059\u3002\u3044\u3064\u3067\u3082OFF\u306B\u3067\u304D\u307E\u3059\u3002");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 163)(9, "button", 164);
    \u0275\u0275listener("click", function AppComponent_div_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableNotifications());
    });
    \u0275\u0275text(10, "\u30AA\u30F3\u306B\u3059\u308B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 165);
    \u0275\u0275listener("click", function AppComponent_div_12_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissNotifyBanner());
    });
    \u0275\u0275text(12, "\u3042\u3068\u3067");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 166);
    \u0275\u0275listener("click", function AppComponent_div_12_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.suppressNotifyBannerForever());
    });
    \u0275\u0275text(14, "\u3082\u3046\u51FA\u3055\u306A\u3044");
    \u0275\u0275elementEnd()()();
  }
}
function AppComponent_div_13_ng_container_11_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r45 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r45);
  }
}
function AppComponent_div_13_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 172);
    \u0275\u0275text(2, " \u3053\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u306F\u30B9\u30B1\u30B3\u30F3\u306E\u901A\u77E5\u304C");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "\u30D6\u30ED\u30C3\u30AF");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u4E0B\u8A18\u306E\u624B\u9806\u3067\u30B5\u30A4\u30C8\u8A2D\u5B9A\u304B\u3089\u901A\u77E5\u3092\u8A31\u53EF\u3057\u3001\u305D\u306E\u5F8C ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "\u300C\u3082\u3046\u4E00\u5EA6\u8A66\u3059\u300D");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ol", 173);
    \u0275\u0275template(10, AppComponent_div_13_ng_container_11_li_10_Template, 2, 1, "li", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 175)(12, "mat-icon");
    \u0275\u0275text(13, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " \u30D6\u30E9\u30A6\u30B6: ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.notifyDeniedSteps.steps);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.notifyDeniedSteps.browser === "chrome" ? "Chrome" : ctx_r1.notifyDeniedSteps.browser === "edge" ? "Microsoft Edge" : "\u305D\u306E\u4ED6");
  }
}
function AppComponent_div_13_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 172);
    \u0275\u0275text(2, " \u901A\u77E5\u306E\u8A31\u53EF\u304C\u78BA\u8A8D\u3067\u304D\u307E\u3057\u305F\u3002\u300C\u30C6\u30B9\u30C8\u901A\u77E5\u3092\u9001\u308B\u300D\u3067\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u306B\u5B9F\u969B\u306E\u901A\u77E5\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AppComponent_div_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.notifyTestResultMessage, " ");
  }
}
function AppComponent_div_13_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 177);
    \u0275\u0275listener("click", function AppComponent_div_13_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retryNotifyPermission());
    });
    \u0275\u0275text(1, " \u3082\u3046\u4E00\u5EA6\u8A66\u3059 ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_div_13_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 178);
    \u0275\u0275listener("click", function AppComponent_div_13_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r47);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendTestNotification());
    });
    \u0275\u0275text(1, " \u30C6\u30B9\u30C8\u901A\u77E5\u3092\u9001\u308B ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 167);
    \u0275\u0275listener("click", function AppComponent_div_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeniedHelp());
    });
    \u0275\u0275elementStart(1, "div", 168);
    \u0275\u0275listener("click", function AppComponent_div_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r44);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 126)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 127);
    \u0275\u0275listener("click", function AppComponent_div_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeniedHelp());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 128);
    \u0275\u0275template(11, AppComponent_div_13_ng_container_11_Template, 17, 2, "ng-container", 47)(12, AppComponent_div_13_ng_container_12_Template, 3, 0, "ng-container", 47)(13, AppComponent_div_13_div_13_Template, 4, 1, "div", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "footer", 135)(15, "button", 136);
    \u0275\u0275listener("click", function AppComponent_div_13_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeniedHelp());
    });
    \u0275\u0275text(16, "\u9589\u3058\u308B");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AppComponent_div_13_button_17_Template, 2, 0, "button", 170)(18, AppComponent_div_13_button_18_Template, 2, 0, "button", 171);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.notifyPermission === "granted" ? "notifications_active" : "notifications_off");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.notifyPermission === "granted" ? "\u901A\u77E5\u304C\u6709\u52B9\u306B\u306A\u308A\u307E\u3057\u305F" : "\u901A\u77E5\u304C\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.notifyPermission === "denied");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifyPermission === "granted");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifyTestResultMessage);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.notifyPermission === "denied");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifyPermission === "granted");
  }
}
function AppComponent_div_14_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 195);
  }
  if (rf & 2) {
    const mc_r49 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", mc_r49.room.avatarImage, \u0275\u0275sanitizeUrl)("alt", mc_r49.room.name);
  }
}
function AppComponent_div_14_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mc_r49 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", mc_r49.room.avatarColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mc_r49.room.initial);
  }
}
function AppComponent_div_14_div_1_ng_container_22_div_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 114);
  }
  if (rf & 2) {
    const mc_r49 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("src", mc_r49.room.avatarImage, \u0275\u0275sanitizeUrl)("alt", mc_r49.room.name);
  }
}
function AppComponent_div_14_div_1_ng_container_22_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mc_r49 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mc_r49.room.initial);
  }
}
function AppComponent_div_14_div_1_ng_container_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207)(1, "div", 208);
    \u0275\u0275template(2, AppComponent_div_14_div_1_ng_container_22_div_2_img_2_Template, 1, 2, "img", 113)(3, AppComponent_div_14_div_1_ng_container_22_div_2_span_3_Template, 2, 1, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 209);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 210);
    \u0275\u0275text(7, "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3057\u3066\u4F1A\u8A71\u3092\u958B\u59CB");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mc_r49 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", mc_r49.room.avatarColor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mc_r49.room.avatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !mc_r49.room.avatarImage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mc_r49.room.name);
  }
}
function AppComponent_div_14_div_1_ng_container_22_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "div", 214);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 215);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r51 = ctx.$implicit;
    \u0275\u0275classProp("mini-chat__msg--me", msg_r51.isMe);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r51.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r51.time);
  }
}
function AppComponent_div_14_div_1_ng_container_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 211);
    \u0275\u0275template(1, AppComponent_div_14_div_1_ng_container_22_div_3_div_1_Template, 5, 4, "div", 212);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mc_r49 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getMiniMessages(mc_r49.room.id))("ngForTrackBy", ctx_r1.trackByMessageId);
  }
}
function AppComponent_div_14_div_1_ng_container_22_div_10_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 220);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_ng_container_22_div_10_button_11_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r53);
      const mc_r49 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.insertMiniChatText(mc_r49.room.id, "@", $event);
      return \u0275\u0275resetView(ctx_r1.miniChatAttachOpen = null);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "alternate_email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u30E1\u30F3\u30B7\u30E7\u30F3\u633F\u5165");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_div_14_div_1_ng_container_22_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 216)(1, "button", 217);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_ng_container_22_div_10_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.openScheduleModal();
      ctx_r1.miniChatAttachOpen = null;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "span", 218);
    \u0275\u0275element(3, "img", 219);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u4E88\u5B9A\u8ABF\u6574\u3092\u4F5C\u6210");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 220);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_ng_container_22_div_10_Template_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r52);
      const mc_r49 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleMiniChatAttachAll(mc_r49.room.id, $event));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "\u30D5\u30A1\u30A4\u30EB\u30FB\u753B\u50CF\u3092\u6DFB\u4ED8");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AppComponent_div_14_div_1_ng_container_22_div_10_button_11_Template, 5, 0, "button", 221);
    \u0275\u0275elementStart(12, "button", 220);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_ng_container_22_div_10_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r52);
      const mc_r49 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.insertMiniChatText(mc_r49.room.id, "#", $event);
      return \u0275\u0275resetView(ctx_r1.miniChatAttachOpen = null);
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "\u30BF\u30B0\u633F\u5165");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 220);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_ng_container_22_div_10_Template_button_click_17_listener($event) {
      \u0275\u0275restoreView(_r52);
      const mc_r49 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openAiFromMiniChat(mc_r49.room.id, $event);
      return \u0275\u0275resetView(ctx_r1.miniChatAttachOpen = null);
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "auto_fix_high");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "AI\u3067\u4F5C\u6210");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mc_r49 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", mc_r49.room.type === "group" || mc_r49.room.type === "my");
  }
}
function AppComponent_div_14_div_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 197);
    \u0275\u0275template(2, AppComponent_div_14_div_1_ng_container_22_div_2_Template, 8, 5, "div", 198)(3, AppComponent_div_14_div_1_ng_container_22_div_3_Template, 2, 2, "div", 199);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 200)(5, "div", 201)(6, "div", 202);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_ng_container_22_Template_div_click_6_listener($event) {
      \u0275\u0275restoreView(_r50);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(7, "button", 203);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_ng_container_22_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r50);
      const mc_r49 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMiniChatAttach(mc_r49.room.id, $event));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AppComponent_div_14_div_1_ng_container_22_div_10_Template, 22, 1, "div", 204);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "textarea", 205, 3);
    \u0275\u0275twoWayListener("ngModelChange", function AppComponent_div_14_div_1_ng_container_22_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r50);
      const mc_r49 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(mc_r49.input, $event) || (mc_r49.input = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AppComponent_div_14_div_1_ng_container_22_Template_textarea_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMiniInputChange());
    })("keydown", function AppComponent_div_14_div_1_ng_container_22_Template_textarea_keydown_11_listener($event) {
      \u0275\u0275restoreView(_r50);
      const mc_r49 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMiniInputKeydown($event, mc_r49.room.id));
    })("focus", function AppComponent_div_14_div_1_ng_container_22_Template_textarea_focus_11_listener() {
      \u0275\u0275restoreView(_r50);
      const mc_r49 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.miniChatFocusedId = mc_r49.room.id);
    })("blur", function AppComponent_div_14_div_1_ng_container_22_Template_textarea_blur_11_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.miniChatFocusedId = null);
    })("input", function AppComponent_div_14_div_1_ng_container_22_Template_textarea_input_11_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.autoResizeMiniInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 206);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_ng_container_22_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r50);
      const mc_r49 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendMiniMessage(mc_r49.room.id));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "send");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const mc_r49 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.getMiniMessages(mc_r49.room.id).length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getMiniMessages(mc_r49.room.id).length);
    \u0275\u0275advance();
    \u0275\u0275classProp("mini-chat__input--focused", ctx_r1.miniChatFocusedId === mc_r49.room.id);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("mini-chat__tool-btn--active", ctx_r1.miniChatAttachOpen === mc_r49.room.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.miniChatAttachOpen === mc_r49.room.id ? "close" : "add");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.miniChatAttachOpen === mc_r49.room.id);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", mc_r49.input);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !mc_r49.input.trim())("matTooltip", "\u9001\u4FE1 (Enter / Shift+Enter \u3067\u6539\u884C)");
  }
}
function AppComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 181)(1, "header", 182);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_Template_header_click_1_listener($event) {
      const mc_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMinimizeMiniChat(mc_r49.room.id, $event));
    })("keydown.enter", function AppComponent_div_14_div_1_Template_header_keydown_enter_1_listener($event) {
      const mc_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMinimizeMiniChat(mc_r49.room.id, $event));
    })("keydown.space", function AppComponent_div_14_div_1_Template_header_keydown_space_1_listener($event) {
      const mc_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.toggleMinimizeMiniChat(mc_r49.room.id, $event);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(2, "div", 183)(3, "div", 184);
    \u0275\u0275template(4, AppComponent_div_14_div_1_img_4_Template, 1, 2, "img", 185)(5, AppComponent_div_14_div_1_div_5_Template, 3, 3, "div", 186);
    \u0275\u0275element(6, "span", 187);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 188)(8, "div", 189);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 190);
    \u0275\u0275text(11, "\u30AA\u30F3\u30E9\u30A4\u30F3");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 191)(13, "button", 192);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_Template_button_click_13_listener($event) {
      const mc_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expandMiniChat(mc_r49.room.id, $event));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "open_in_full");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 193);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_Template_button_click_16_listener($event) {
      const mc_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMinimizeMiniChat(mc_r49.room.id, $event));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 194);
    \u0275\u0275listener("click", function AppComponent_div_14_div_1_Template_button_click_19_listener($event) {
      const mc_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMiniChat(mc_r49.room.id, $event));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(22, AppComponent_div_14_div_1_ng_container_22_Template, 16, 11, "ng-container", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mc_r49 = ctx.$implicit;
    \u0275\u0275classProp("mini-chat--minimized", mc_r49.minimized);
    \u0275\u0275attribute("aria-label", mc_r49.room.name + "\u3068\u306E\u30C1\u30E3\u30C3\u30C8")("aria-expanded", !mc_r49.minimized)("data-testid", "mini-chat-" + mc_r49.room.id)("data-minimized", mc_r49.minimized);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", (mc_r49.minimized ? "\u5C55\u958B" : "\u6700\u5C0F\u5316") + ": " + mc_r49.room.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", mc_r49.room.avatarImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !mc_r49.room.avatarImage);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(mc_r49.room.name);
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", mc_r49.minimized ? "\u5C55\u958B" : "\u6700\u5C0F\u5316");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mc_r49.minimized ? "expand_less" : "minimize");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !mc_r49.minimized);
  }
}
function AppComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275template(1, AppComponent_div_14_div_1_Template, 23, 13, "div", 180);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.openMiniChats)("ngForTrackBy", ctx_r1.trackByMiniChatId);
  }
}
function AppComponent_footer_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 222)(1, "div", 223)(2, "ul")(3, "li")(4, "a", 224);
    \u0275\u0275text(5, "\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u308A\u6271\u3044\u306B\u3064\u3044\u3066");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li")(7, "a", 225);
    \u0275\u0275text(8, "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li")(10, "a", 226);
    \u0275\u0275text(11, "\u5229\u7528\u898F\u7D04");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li")(13, "a", 227);
    \u0275\u0275text(14, "\u7279\u5B9A\u5546\u53D6\u5F15\u6CD5\u4E0A\u306E\u8868\u8A18");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 228);
    \u0275\u0275text(17, "FAQ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 229);
    \u0275\u0275text(20, "Schecon Magazine");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "a", 230);
    \u0275\u0275text(23, "Google API \u5236\u9650\u4ED8\u304D\u4F7F\u7528\u30DD\u30EA\u30B7\u30FC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li")(25, "a", 231);
    \u0275\u0275text(26, "\u904B\u55B6\u4F1A\u793E");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "li")(28, "a", 232);
    \u0275\u0275text(29, "\u304A\u554F\u3044\u5408\u308F\u305B");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "p", 233);
    \u0275\u0275text(31, "\xA9 Schecon.com All Rights Reserved.");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_nav_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 234)(1, "a", 235);
    \u0275\u0275listener("click", function AppComponent_nav_16_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openScheduleModal());
    });
    \u0275\u0275element(2, "img", 236);
    \u0275\u0275elementStart(3, "span", 237);
    \u0275\u0275text(4, "\u4E88\u5B9A\u8ABF\u6574");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 238);
    \u0275\u0275listener("click", function AppComponent_nav_16_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 237);
    \u0275\u0275text(9, "\u30C1\u30E3\u30C3\u30C8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 239);
    \u0275\u0275listener("click", function AppComponent_nav_16_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 237);
    \u0275\u0275text(14, "\u30E1\u30FC\u30EB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "a", 240);
    \u0275\u0275listener("click", function AppComponent_nav_16_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 237);
    \u0275\u0275text(19, "\u30AB\u30EC\u30F3\u30C0\u30FC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "a", 241);
    \u0275\u0275listener("click", function AppComponent_nav_16_Template_a_click_20_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 237);
    \u0275\u0275text(24, "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("nav-bottom--hidden", ctx_r1.isBottomNavHidden);
  }
}
function AppComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 242);
    \u0275\u0275listener("click", function AppComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function AppComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 243);
    \u0275\u0275listener("click", function AppComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeScheduleModal());
    });
    \u0275\u0275elementStart(1, "div", 244);
    \u0275\u0275listener("click", function AppComponent_div_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r56);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 245);
    \u0275\u0275listener("click", function AppComponent_div_18_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeScheduleModal());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 246)(6, "a", 247);
    \u0275\u0275listener("click", function AppComponent_div_18_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeScheduleModal());
    });
    \u0275\u0275element(7, "img", 248);
    \u0275\u0275elementStart(8, "span", 249)(9, "span", 250);
    \u0275\u0275text(10, "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 251)(12, "mat-icon", 252);
    \u0275\u0275text(13, "chevron_right");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "a", 253);
    \u0275\u0275listener("click", function AppComponent_div_18_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeScheduleModal());
    });
    \u0275\u0275element(15, "img", 254);
    \u0275\u0275elementStart(16, "span", 249)(17, "span", 250);
    \u0275\u0275text(18, "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 251)(20, "mat-icon", 252);
    \u0275\u0275text(21, "chevron_right");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "a", 255);
    \u0275\u0275listener("click", function AppComponent_div_18_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeScheduleModal());
    });
    \u0275\u0275element(23, "img", 256);
    \u0275\u0275elementStart(24, "span", 249)(25, "span", 250);
    \u0275\u0275text(26, "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 251)(28, "mat-icon", 252);
    \u0275\u0275text(29, "chevron_right");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "a", 257);
    \u0275\u0275listener("click", function AppComponent_div_18_Template_a_click_30_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeScheduleModal());
    });
    \u0275\u0275element(31, "img", 258);
    \u0275\u0275elementStart(32, "span", 249)(33, "span", 250);
    \u0275\u0275text(34, "\u7A7A\u304D\u6642\u9593\u78BA\u8A8D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 251)(36, "mat-icon", 252);
    \u0275\u0275text(37, "chevron_right");
    \u0275\u0275elementEnd()()()()()()();
  }
}
var MOCK_HISTORY_SEARCH = [
  { id: "h-001", title: "Q2\u4E8B\u696D\u8A08\u753B\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0", organizer: "\u7530\u4E2D \u592A\u90CE", type: "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574", scheduledDate: "2026-04-10 14:00", participants: ["\u7530\u4E2D \u592A\u90CE", "\u77F3\u6FA4 \u79C0\u6B21\u90CE"] },
  { id: "h-002", title: "\u30D7\u30ED\u30C0\u30AF\u30C8\u6226\u7565\u30EC\u30D3\u30E5\u30FC", organizer: "\u77F3\u6FA4 \u79C0\u6B21\u90CE", type: "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574", scheduledDate: "2026-04-05 10:00", participants: ["\u7530\u4E2D \u592A\u90CE", "\u9234\u6728 \u82B1\u5B50", "\u5C71\u7530 \u4E00\u90CE"] },
  { id: "h-003", title: "\u65B0\u5165\u793E\u54E1\u30A6\u30A7\u30EB\u30AB\u30E0\u30E9\u30F3\u30C1", organizer: "\u52A0\u85E4\uFF08\u4EBA\u4E8B\uFF09", type: "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574", scheduledDate: "2026-04-03 12:00", participants: ["\u52A0\u85E4\uFF08\u4EBA\u4E8B\uFF09", "\u7530\u4E2D \u592A\u90CE", "\u9234\u6728 \u82B1\u5B50"] },
  { id: "h-004", title: "\u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC 1on1", organizer: "\u9AD8\u6A4B \u7F8E\u54B2", type: "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574", scheduledDate: "2026-03-28 15:00", participants: ["\u9AD8\u6A4B \u7F8E\u54B2", "\u77F3\u6FA4 \u79C0\u6B21\u90CE"] },
  { id: "h-005", title: "\u30B9\u30D7\u30EA\u30F3\u30C8\u30D7\u30E9\u30F3\u30CB\u30F3\u30B0", organizer: "\u5C0F\u6797PM", type: "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574", scheduledDate: "2026-03-25 10:00", participants: ["\u5C0F\u6797PM", "\u5C71\u7530 \u4E00\u90CE", "\u4F50\u85E4 \u5065\u592A"] }
];
var MOCK_CONTACTS_SEARCH = [
  { id: "c-001", name: "\u7530\u4E2D \u592A\u90CE", company: "\u682A\u5F0F\u4F1A\u793E\u30C6\u30C3\u30AF\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3", department: "\u30D7\u30ED\u30C0\u30AF\u30C8\u958B\u767A\u90E8", title: "\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC" },
  { id: "c-002", name: "\u9234\u6728 \u82B1\u5B50", company: "\u682A\u5F0F\u4F1A\u793E\u30C7\u30B6\u30A4\u30F3\u30B9\u30BF\u30B8\u30AA", department: "\u30C7\u30B6\u30A4\u30F3\u90E8", title: "\u30B7\u30CB\u30A2\u30C7\u30B6\u30A4\u30CA\u30FC" },
  { id: "c-003", name: "\u5C71\u7530 \u4E00\u90CE", company: "\u682A\u5F0F\u4F1A\u793E\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0", department: "\u958B\u767A\u90E8", title: "\u30EA\u30FC\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2" },
  { id: "c-004", name: "\u4F50\u85E4 \u5065\u592A", company: "\u682A\u5F0F\u4F1A\u793E\u30DE\u30FC\u30B1\u30C3\u30C8", department: "\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u90E8", title: "\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC" },
  { id: "c-005", name: "\u9AD8\u6A4B \u7F8E\u54B2", company: "\u30C7\u30B6\u30A4\u30F3\u30AF\u30EA\u30A8\u30A4\u30C8", department: "UI/UX", title: "\u30A2\u30FC\u30C8\u30C7\u30A3\u30EC\u30AF\u30BF\u30FC" },
  { id: "c-006", name: "\u5C0F\u6797 PM", company: "\u682A\u5F0F\u4F1A\u793E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8", department: "PMO", title: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC" },
  { id: "c-007", name: "\u52A0\u85E4 \u4EBA\u4E8B", company: "\u682A\u5F0F\u4F1A\u793EHR\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u30BA", department: "\u4EBA\u4E8B\u90E8", title: "HR\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC" },
  { id: "c-008", name: "\u4E2D\u6751 \u4EE3\u8868", company: "\u682A\u5F0F\u4F1A\u793E\u30B9\u30B1\u30B3\u30F3", department: "\u7D4C\u55B6", title: "\u4EE3\u8868\u53D6\u7DE0\u5F79" }
];
var MOCK_CHAT_MESSAGES = [
  { id: "chat-1", senderName: "\u7530\u4E2D\u592A\u90CE", message: "\u660E\u65E5\u306E\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u4EF6\u3067\u3059\u304C\u3001\u8CC7\u6599\u306E\u6E96\u5099\u306F\u3067\u304D\u3066\u3044\u307E\u3059\u304B\uFF1F", date: /* @__PURE__ */ new Date("2026-03-27T10:30:00"), channelName: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8A" },
  { id: "chat-2", senderName: "\u9234\u6728\u82B1\u5B50", message: "\u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC\u306E\u65E5\u7A0B\u3092\u8ABF\u6574\u3057\u305F\u3044\u3067\u3059", date: /* @__PURE__ */ new Date("2026-03-27T11:15:00"), channelName: "\u30C7\u30B6\u30A4\u30F3\u30C1\u30FC\u30E0" },
  { id: "chat-3", senderName: "\u5C71\u7530\u4E00\u90CE", message: "\u30B9\u30D7\u30EA\u30F3\u30C8\u30EC\u30D3\u30E5\u30FC\u306E\u30A2\u30B8\u30A7\u30F3\u30C0\u3092\u5171\u6709\u3057\u307E\u3059", date: /* @__PURE__ */ new Date("2026-03-26T14:00:00"), channelName: "\u958B\u767A\u30C1\u30FC\u30E0" },
  { id: "chat-4", senderName: "\u4F50\u85E4\u5065\u592A", message: "\u6765\u9031\u306E\u30D7\u30EC\u30BC\u30F3\u8CC7\u6599\u3092\u30EC\u30D3\u30E5\u30FC\u304A\u9858\u3044\u3057\u307E\u3059", date: /* @__PURE__ */ new Date("2026-03-26T09:00:00"), channelName: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8B" },
  { id: "chat-5", senderName: "\u9AD8\u6A4B\u7F8E\u54B2", message: "\u30E9\u30F3\u30C1\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u5834\u6240\u306F\u3069\u3053\u306B\u3057\u307E\u3059\u304B\uFF1F", date: /* @__PURE__ */ new Date("2026-03-25T12:00:00"), channelName: "\u96D1\u8AC7" },
  { id: "chat-6", senderName: "\u5C0F\u6797PM", message: "\u4E88\u7B97\u306E\u898B\u7A4D\u3082\u308A\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002\u78BA\u8A8D\u304A\u9858\u3044\u3057\u307E\u3059\u3002", date: /* @__PURE__ */ new Date("2026-03-25T16:30:00"), channelName: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8A" },
  { id: "chat-7", senderName: "\u52A0\u85E4\uFF08\u4EBA\u4E8B\uFF09", message: "\u65B0\u5165\u793E\u54E1\u306E\u30AA\u30F3\u30DC\u30FC\u30C7\u30A3\u30F3\u30B0\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u5171\u6709\u3057\u307E\u3059", date: /* @__PURE__ */ new Date("2026-03-24T10:00:00"), channelName: "\u4EBA\u4E8B" },
  { id: "chat-8", senderName: "\u7530\u4E2D\u592A\u90CE", message: "\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u4E88\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044", date: /* @__PURE__ */ new Date("2026-03-24T15:00:00"), channelName: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8A" }
];
var AppComponent = class _AppComponent {
  get isDesktop() {
    return this.viewportWidth >= this.DESKTOP_BREAKPOINT;
  }
  /** Messenger 風サイドバーを表示するか: PC かつチャットページ以外 (top/scheduling除く) */
  get showChatRail() {
    if (!this.isDesktop)
      return false;
    if (this.isTopPage || this.isChatPage || this.isSchedulingPage)
      return false;
    return true;
  }
  /** recentChatRooms + ユーザーが作成したルーム (重複除外、ユーザー作成が先頭) */
  get mergedRailRooms() {
    const shared = this.chatState.snapshotUserRooms();
    const sharedConverted = shared.map((s) => ({
      id: s.id,
      name: s.name,
      initial: s.initial,
      avatarColor: s.avatarColor,
      avatarImage: s.avatarImage,
      unreadCount: s.unreadCount,
      online: s.online,
      type: s.type,
      memberAvatars: s.memberAvatars
    }));
    const existing = new Set(sharedConverted.map((r) => r.id));
    const remain = this.recentChatRooms.filter((r) => !existing.has(r.id));
    return [...sharedConverted, ...remain];
  }
  /** ビューポート高さに応じて表示するアバター数 (それ以外は「他N件」に集約) */
  get visibleRecentRooms() {
    const max = this.calcRailMaxItems();
    return this.mergedRailRooms.slice(0, max);
  }
  get hiddenRecentRoomsCount() {
    const max = this.calcRailMaxItems();
    return Math.max(0, this.mergedRailRooms.length - max);
  }
  /** 高さに応じて何件表示するか (アバター56px + gap8px = 64px / 1件) */
  calcRailMaxItems() {
    if (typeof window === "undefined")
      return 6;
    const reservedTop = 70 + 16;
    const reservedBottom = 60 + 16;
    const overflowReserve = 40;
    const usable = Math.max(120, window.innerHeight - reservedTop - reservedBottom - overflowReserve);
    return Math.max(1, Math.floor(usable / 64));
  }
  /** 絵文字ピッカーを開く/閉じる (サブメニューをインライン表示、全画面遷移はしない) */
  toggleMiniChatEmoji(roomId, event) {
    event?.stopPropagation();
    this.miniChatAttachOpen = null;
    this.miniChatEmojiOpen = this.miniChatEmojiOpen === roomId ? null : roomId;
  }
  /** 添付メニューを開く/閉じる */
  toggleMiniChatAttach(roomId, event) {
    event?.stopPropagation();
    this.miniChatEmojiOpen = null;
    this.miniChatAttachOpen = this.miniChatAttachOpen === roomId ? null : roomId;
  }
  /** 絵文字を入力欄に挿入 (ピッカーは閉じない連続挿入可) */
  insertMiniChatEmoji(roomId, emoji, event) {
    event?.stopPropagation();
    const mc = this.openMiniChats.find((m) => m.room.id === roomId);
    if (!mc)
      return;
    mc.input = (mc.input || "") + emoji;
    this.persistMiniChats();
  }
  /** ミニチャット入力欄に任意テキスト (@ / # など) を挿入 (ユーザー指示 2026-04-21) */
  insertMiniChatText(roomId, text, event) {
    event?.stopPropagation();
    const mc = this.openMiniChats.find((m) => m.room.id === roomId);
    if (!mc)
      return;
    mc.input = (mc.input || "") + text;
    this.persistMiniChats();
  }
  /** ミニチャットから AI モーダルを開く (通常のチャットと同じ挙動) (ユーザー指示 2026-04-21) */
  openAiFromMiniChat(roomId, event) {
    event?.stopPropagation();
    const mc = this.openMiniChats.find((m) => m.room.id === roomId);
    if (!mc)
      return;
    const placeholder = "AI\u306B\u4E0B\u66F8\u304D\u3092\u4F5C\u6210\u3057\u3066\u3082\u3089\u3046: ";
    mc.input = (mc.input || "") + placeholder;
    this.persistMiniChats();
  }
  /* 修正 No.63 (2026-04-25): chat-page の + メニューの「ファイル・画像を添付」と同じ挙動。
     image/video/ドキュメントを 1 つのネイティブファイルピッカーから一括選択可能にし、
     選択されたファイル名を含むメッセージを投稿する (chat-page の openAttachModal 相当) */
  handleMiniChatAttachAll(roomId, event) {
    event?.stopPropagation();
    const mc = this.openMiniChats.find((m) => m.room.id === roomId);
    if (!mc)
      return;
    this.miniChatAttachOpen = null;
    const accept = "image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt";
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    input.multiple = true;
    input.onchange = () => {
      if (!input.files || input.files.length === 0)
        return;
      const files = Array.from(input.files);
      const pickLabel = (f) => {
        if (f.type.startsWith("image/"))
          return { icon: "\u{1F5BC}\uFE0F", label: "\u753B\u50CF" };
        if (f.type.startsWith("video/"))
          return { icon: "\u{1F3AC}", label: "\u52D5\u753B" };
        return { icon: "\u{1F4CE}", label: "\u30D5\u30A1\u30A4\u30EB" };
      };
      const kinds = new Set(files.map(pickLabel).map((p) => p.label));
      const labelInfo = kinds.size === 1 ? pickLabel(files[0]) : { icon: "\u{1F4CE}", label: "\u30D5\u30A1\u30A4\u30EB" };
      const names = files.map((f) => f.name).join("\u3001");
      this.chatState.sendMessage(roomId, `${labelInfo.icon} [${labelInfo.label}\u3092\u5171\u6709\u3057\u307E\u3057\u305F] ${names}`);
    };
    input.click();
  }
  /** @deprecated 旧 3 分割 (image/document/video) 添付。互換のため残すが + メニューからは呼ばれなくなった */
  handleMiniChatAttach(roomId, kind, event) {
    event?.stopPropagation();
    const mc = this.openMiniChats.find((m) => m.room.id === roomId);
    if (!mc)
      return;
    this.miniChatAttachOpen = null;
    const accept = kind === "image" ? "image/*" : kind === "video" ? "video/*" : ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt";
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    input.multiple = true;
    input.onchange = () => {
      if (!input.files || input.files.length === 0)
        return;
      const files = Array.from(input.files);
      const icon = kind === "image" ? "\u{1F5BC}\uFE0F" : kind === "video" ? "\u{1F3AC}" : "\u{1F4CE}";
      const label = kind === "image" ? "\u753B\u50CF" : kind === "video" ? "\u52D5\u753B" : "\u30D5\u30A1\u30A4\u30EB";
      const names = files.map((f) => f.name).join("\u3001");
      this.chatState.sendMessage(roomId, `${icon} [${label}\u3092\u5171\u6709\u3057\u307E\u3057\u305F] ${names}`);
    };
    input.click();
  }
  /** 外側クリックで popovers を閉じる (document click) */
  onDocClick(_event) {
    this.miniChatEmojiOpen = null;
    this.miniChatAttachOpen = null;
  }
  /** レール/他のクリックで ChatPage へ遷移ではなくミニウィンドウを開く (非チャットページで呼ばれる) */
  openRecentRoom(roomId) {
    if (this.isChatPage) {
      this.router.navigate(["/chat", roomId]);
      return;
    }
    this.openMiniChat(roomId);
  }
  /** ミニチャットを開く / 最小化状態なら復元 */
  openMiniChat(roomId) {
    const existing = this.openMiniChats.find((m) => m.room.id === roomId);
    if (existing) {
      existing.minimized = false;
      this.chatState.markRoomAsRead(roomId);
      this.persistMiniChats();
      return;
    }
    if (this.openMiniChats.length >= this.MAX_MINI_CHATS) {
      this.openMiniChats.shift();
    }
    const r = this.mergedRailRooms.find((x) => x.id === roomId);
    if (!r)
      return;
    const room = {
      id: r.id,
      name: r.name,
      initial: r.initial,
      avatarColor: r.avatarColor,
      avatarImage: r.avatarImage,
      type: r.type,
      memberAvatars: r.memberAvatars
    };
    this.openMiniChats = [...this.openMiniChats, { room, minimized: false, input: "" }];
    this.chatState.markRoomAsRead(roomId);
    this.persistMiniChats();
  }
  /** localStorage に開いているミニチャットの状態を保存 (ページ遷移跨ぎで復元) */
  persistMiniChats() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const toSave = this.openMiniChats.map((mc) => ({
        room: mc.room,
        minimized: mc.minimized,
        input: mc.input
      }));
      window.localStorage.setItem(this.MINI_CHATS_STORAGE_KEY, JSON.stringify(toSave));
    } catch {
    }
  }
  /** localStorage からミニチャット状態を復元 (SPA 遷移後も同じ状態を保持) */
  restoreMiniChats() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const raw = window.localStorage.getItem(this.MINI_CHATS_STORAGE_KEY);
      if (!raw)
        return;
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr))
        return;
      this.openMiniChats = arr.filter((x) => x && x.room && x.room.id).slice(0, this.MAX_MINI_CHATS);
    } catch {
    }
  }
  /** ルームの未読数 (レールバッジ + ミニヘッダー用) */
  getRailUnread(roomId) {
    const u = this.chatState.snapshotUserRooms().find((r) => r.id === roomId);
    if (u)
      return u.unreadCount || 0;
    const m = this.recentChatRooms.find((r) => r.id === roomId);
    return m?.unreadCount || 0;
  }
  totalUnread() {
    return this.chatState.totalUnread();
  }
  /** *ngFor trackBy: ミニチャット (room.id 基準で DOM 再利用) */
  trackByMiniChatId(_i, mc) {
    return mc.room.id;
  }
  /** *ngFor trackBy: レールのルーム */
  trackByRoomId(_i, r) {
    return r.id;
  }
  /** *ngFor trackBy: ミニチャット内のメッセージ */
  trackByMessageId(_i, m) {
    return m.id;
  }
  closeMiniChat(roomId, event) {
    event?.stopPropagation();
    this.openMiniChats = this.openMiniChats.filter((m) => m.room.id !== roomId);
    this.persistMiniChats();
  }
  toggleMinimizeMiniChat(roomId, event) {
    event?.stopPropagation();
    this.openMiniChats = this.openMiniChats.map((m) => m.room.id === roomId ? __spreadProps(__spreadValues({}, m), { minimized: !m.minimized }) : m);
    this.persistMiniChats();
  }
  /** 全画面チャットへ遷移 */
  expandMiniChat(roomId, event) {
    event?.stopPropagation();
    this.router.navigate(["/chat", roomId]);
    this.closeMiniChat(roomId);
  }
  getMiniMessages(roomId) {
    return this.chatState.getMessages(roomId);
  }
  onMiniInputKeydown(event, roomId) {
    if (event.key !== "Enter")
      return;
    if (event.shiftKey || event.ctrlKey)
      return;
    if (event.isComposing)
      return;
    if (event.keyCode === 229)
      return;
    event.preventDefault();
    this.sendMiniMessage(roomId);
  }
  /** textarea の自動リサイズ (複数行入力時に高さを拡張、最大 96px) */
  autoResizeMiniInput(event) {
    const el = event.target;
    if (!el)
      return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 96) + "px";
  }
  sendMiniMessage(roomId) {
    const mc = this.openMiniChats.find((m) => m.room.id === roomId);
    if (!mc || !mc.input.trim())
      return;
    const text = mc.input.trim();
    mc.input = "";
    this.persistMiniChats();
    this.chatState.sendMessage(roomId, text);
    setTimeout(() => {
      this.chatState.injectAutoReply(roomId, "\u627F\u77E5\u3057\u307E\u3057\u305F\u3001\u78BA\u8A8D\u3057\u3066\u3054\u9023\u7D61\u3057\u307E\u3059\uFF01", mc.room.name);
    }, 1500);
  }
  /** 入力中テキストをドラフトとして永続化 (ページ遷移跨ぎで保持) */
  onMiniInputChange() {
    if (this.miniInputSaveTimer)
      clearTimeout(this.miniInputSaveTimer);
    this.miniInputSaveTimer = setTimeout(() => this.persistMiniChats(), 400);
  }
  get filteredPickerContacts() {
    const q = this.newChatPickerQuery.trim().toLowerCase();
    if (!q)
      return this.pickerContacts;
    return this.pickerContacts.filter((c) => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q));
  }
  openNewChatPicker() {
    this.showNewChatPicker = true;
    this.newChatPickerQuery = "";
    this.newChatPickerSelected = [];
  }
  closeNewChatPicker() {
    this.showNewChatPicker = false;
  }
  togglePickerContact(id) {
    const idx = this.newChatPickerSelected.indexOf(id);
    if (idx >= 0) {
      this.newChatPickerSelected = this.newChatPickerSelected.filter((x) => x !== id);
    } else {
      this.newChatPickerSelected = [...this.newChatPickerSelected, id];
    }
  }
  isPickerSelected(id) {
    return this.newChatPickerSelected.includes(id);
  }
  /** ピッカーで選択した相手で新規チャットを作成し、ミニチャットで即時開く */
  createChatFromPicker() {
    if (!this.newChatPickerSelected.length)
      return;
    const chosen = this.pickerContacts.filter((c) => this.newChatPickerSelected.includes(c.id));
    const type = chosen.length > 1 ? "group" : "direct";
    const name = type === "direct" ? chosen[0].name : `\u30B0\u30EB\u30FC\u30D7 (${chosen.length}\u540D)`;
    const initial = chosen[0].initial || name.charAt(0);
    const avatarColor = type === "group" ? "#26a69a" : chosen[0].color;
    const nowMs = Date.now();
    const roomId = "room-" + nowMs;
    this.chatState.addUserRoom({
      id: roomId,
      name,
      initial,
      avatarColor,
      type,
      lastMessage: "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u59CB\u3057\u307E\u3057\u305F",
      timestamp: "\u4ECA",
      updatedAt: nowMs,
      unreadCount: 0,
      memberAvatars: type === "group" ? chosen.slice(0, 2).map((c) => ({ initial: c.initial, color: c.color })) : void 0
    });
    this.showNewChatPicker = false;
    this.newChatPickerQuery = "";
    this.newChatPickerSelected = [];
    setTimeout(() => this.openMiniChat(roomId), 0);
  }
  /** ページを上部までスムーズスクロール */
  scrollPageToTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const appMain = document.querySelector(".app-main");
      if (appMain)
        appMain.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  constructor(router, mailService, calendarService, communityService, ngZone, platformId, chatState, browserNotify, realtimeGateway, scrollUi, scheduleModal) {
    this.router = router;
    this.mailService = mailService;
    this.calendarService = calendarService;
    this.communityService = communityService;
    this.ngZone = ngZone;
    this.platformId = platformId;
    this.chatState = chatState;
    this.browserNotify = browserNotify;
    this.realtimeGateway = realtimeGateway;
    this.scrollUi = scrollUi;
    this.scheduleModal = scheduleModal;
    this.title = "ScheCon";
    this.userInitial = "\u77F3";
    this.isMobileMenuOpen = false;
    this.isUserMenuOpen = false;
    this.isAppPage = true;
    this.isTopPage = typeof window !== "undefined" ? window.location.pathname.endsWith("/") || /\/(top|schecon-demo)\/?$/.test(window.location.pathname) || window.location.pathname.includes("/top") : false;
    this.isSchedulingPage = false;
    this.isChatPage = false;
    this.showScheduleModal = false;
    this.viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1280;
    this.DESKTOP_BREAKPOINT = 1024;
    this.recentChatRooms = [
      { id: "mychat", name: "\u30DE\u30A4\u30B9\u30DA\u30FC\u30B9", initial: "\u30DE", avatarColor: "#ff9800", avatarImage: "assets/imgs/common/schecon-favicon.png", type: "my" },
      { id: "test-1", name: "TIMEMACHINE \u55B6\u696D\u30C1\u30E3\u30C3\u30C8", initial: "T", avatarColor: "#26a69a", unreadCount: 2, online: true, type: "group", memberAvatars: [
        { initial: "\u7530", color: "#ab47bc" },
        { initial: "\u9234", color: "#ef5350" }
      ] },
      { id: "epoch", name: "\u682A\u5F0F\u4F1A\u793EEpoch", initial: "E", avatarColor: "#42a5f5", unreadCount: 1, online: true, type: "group", memberAvatars: [
        { initial: "\u5C71", color: "#5c6bc0" },
        { initial: "\u4F50", color: "#ffa726" }
      ] },
      { id: "tanaka", name: "\u7530\u4E2D \u592A\u90CE", initial: "\u7530", avatarColor: "#ab47bc", online: true, type: "direct" },
      { id: "eigyo-team", name: "\u55B6\u696D\u90E8\u5168\u4F53\u30C1\u30E3\u30C3\u30C8", initial: "\u55B6", avatarColor: "#66bb6a", type: "group", memberAvatars: [
        { initial: "\u9AD8", color: "#f48fb1" },
        { initial: "\u4F50", color: "#ffa726" }
      ] },
      { id: "suzuki", name: "\u9234\u6728 \u82B1\u5B50", initial: "\u9234", avatarColor: "#ef5350", online: true, type: "direct" },
      { id: "yamada", name: "\u5C71\u7530 \u4E00\u90CE", initial: "\u5C71", avatarColor: "#5c6bc0", type: "direct" },
      { id: "sato", name: "\u4F50\u85E4 \u5065\u592A", initial: "\u4F50", avatarColor: "#ffa726", type: "direct" },
      { id: "takahashi", name: "\u9AD8\u6A4B \u7F8E\u54B2", initial: "\u9AD8", avatarColor: "#f48fb1", type: "direct" }
    ];
    this.openMiniChats = [];
    this.MAX_MINI_CHATS = 3;
    this.MINI_CHATS_STORAGE_KEY = "schecon.miniChats.open.v1";
    this.miniChatFocusedId = null;
    this.miniChatEmojiOpen = null;
    this.miniChatAttachOpen = null;
    this.miniChatEmojis = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F60A}", "\u{1F602}", "\u{1F389}", "\u{1F64F}", "\u2728", "\u{1F44F}", "\u{1F525}", "\u{1F4AF}", "\u{1F440}", "\u{1F4AA}", "\u{1F64C}", "\u{1F62D}", "\u{1F605}", "\u{1F914}", "\u{1F60E}", "\u{1F680}", "\u2B50", "\u{1F4A1}"];
    this.miniInputSaveTimer = null;
    this.showNewChatPicker = false;
    this.newChatPickerQuery = "";
    this.newChatPickerSelected = [];
    this.pickerContacts = [
      { id: "tanaka", name: "\u7530\u4E2D \u592A\u90CE", email: "tanaka@example.com", initial: "\u7530", color: "#ab47bc" },
      { id: "suzuki", name: "\u9234\u6728 \u82B1\u5B50", email: "suzuki@example.com", initial: "\u9234", color: "#ef5350" },
      { id: "yamada", name: "\u5C71\u7530 \u4E00\u90CE", email: "yamada@example.com", initial: "\u5C71", color: "#5c6bc0" },
      { id: "sato", name: "\u4F50\u85E4 \u5065\u592A", email: "sato@example.com", initial: "\u4F50", color: "#ffa726" },
      { id: "takahashi", name: "\u9AD8\u6A4B \u7F8E\u54B2", email: "takahashi@example.com", initial: "\u9AD8", color: "#f48fb1" },
      { id: "ito", name: "\u4F0A\u85E4 \u592A\u4E00", email: "ito@example.com", initial: "\u4F0A", color: "#26a69a" },
      { id: "kobayashi", name: "\u5C0F\u6797 PM", email: "kobayashi@example.com", initial: "\u5C0F", color: "#42a5f5" },
      { id: "kato", name: "\u52A0\u85E4 (\u4EBA\u4E8B)", email: "kato@example.com", initial: "\u52A0", color: "#66bb6a" }
    ];
    this.isBottomNavHidden = false;
    this.lastScrollY = 0;
    this.showPageTopFab = false;
    this.scrollThresholdBottom = 15;
    this.scrollHandler = null;
    this.scrollCooldownMs = 0;
    this.scrollRafId = null;
    this.searchQuery = "";
    this.searchActive = false;
    this.showResults = false;
    this.searchResults = { calendar: [], mail: [], chat: [], history: [], contacts: [], communities: [], members: [], recruitments: [], appeals: [], threads: [], communityEvents: [], news: [] };
    this.searchSubject = new Subject();
    this.destroy$ = new Subject();
    this.showNotifyBanner = false;
    this.showNotifyDeniedModal = false;
    this.notifyPermission = "default";
    this.notifyAppEnabled = true;
    this.notifyDeniedSteps = { browser: "other", steps: [] };
    this.realtimeStatus = "idle";
    this.showRealtimeStatusIndicator = false;
    this.deferredInstallPrompt = null;
    this.showInstallBanner = false;
    this.INSTALL_BANNER_DISMISS_KEY = "schecon.installBanner.dismissed.v1";
    this.notifyTestResultMessage = "";
    this.resizeHandler = null;
    this.orientationHandler = null;
    this.appMainScrollHandler = null;
    this.pageTopFabTimer = null;
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", (e) => {
        if (this.showResults) {
          this.closeSearch();
          return;
        }
        if (this.showScheduleModal) {
          this.scheduleModal.close();
          return;
        }
        if (this.isMobileMenuOpen) {
          this.isMobileMenuOpen = false;
          return;
        }
      });
    }
    this.scheduleModal.isOpen$.subscribe((open) => {
      this.showScheduleModal = open;
    });
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const url = e.urlAfterRedirects;
      this.isTopPage = url.startsWith("/top") || url === "/";
      this.isSchedulingPage = url.startsWith("/one-on-one-create") || url.startsWith("/multiple/create") || url.startsWith("/group/create") || url.startsWith("/confirm");
      this.isChatPage = url.startsWith("/chat");
      this.isAppPage = url.startsWith("/mail") || url.startsWith("/calendar") || url.startsWith("/community") || url.startsWith("/chat") || this.isSchedulingPage;
      this.closeSearch();
      console.log("[AppComponent] NavigationEnd:", url, "isTopPage:", this.isTopPage);
    });
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$), switchMap((term) => {
      console.log("[Search] subject.next received term:", JSON.stringify(term));
      if (!term || term.trim().length < 1) {
        return of({ calendar: [], mail: [], chat: [], history: [], contacts: [], communities: [], members: [], recruitments: [], appeals: [], threads: [], communityEvents: [], news: [] });
      }
      const lower = term.toLowerCase();
      const chatResults = MOCK_CHAT_MESSAGES.filter((c) => c.senderName.toLowerCase().includes(lower) || c.channelName.toLowerCase().includes(lower));
      const historyResults = MOCK_HISTORY_SEARCH.filter((h) => h.title.toLowerCase().includes(lower) || h.organizer.toLowerCase().includes(lower) || h.participants.some((p) => p.toLowerCase().includes(lower)));
      const contactResults = MOCK_CONTACTS_SEARCH.filter((c) => c.name.toLowerCase().includes(lower) || (c.company || "").toLowerCase().includes(lower));
      const calendar$ = this.calendarService.events$.pipe(take(1), switchMap((events) => of(events.filter((e) => e.title?.toLowerCase().includes(lower) || (e.guests || []).some((g) => g.displayName?.toLowerCase().includes(lower) || g.email?.toLowerCase().includes(lower))))));
      const mail$ = this.mailService.searchMessages(term).pipe(take(1));
      const wrapErr = (label) => catchError((e) => {
        console.warn("[Search] " + label + " failed:", e);
        return of([]);
      });
      return forkJoin({
        calendar: calendar$.pipe(take(1), timeout(3e3), wrapErr("calendar")),
        mail: mail$.pipe(take(1), timeout(3e3), wrapErr("mail")),
        chat: of(chatResults),
        history: of(historyResults),
        contacts: of(contactResults),
        communities: this.communityService.globalSearchCommunities(term).pipe(take(1), timeout(3e3), wrapErr("communities")),
        members: this.communityService.globalSearchMembers(term).pipe(take(1), timeout(3e3), wrapErr("members")),
        recruitments: this.communityService.globalSearchRecruitments(term).pipe(take(1), timeout(3e3), wrapErr("recruitments")),
        appeals: this.communityService.globalSearchAppeals(term).pipe(take(1), timeout(3e3), wrapErr("appeals")),
        threads: this.communityService.globalSearchThreads(term).pipe(take(1), timeout(3e3), wrapErr("threads")),
        communityEvents: this.communityService.globalSearchEvents(term).pipe(take(1), timeout(3e3), wrapErr("communityEvents")),
        news: this.communityService.globalSearchNews(term).pipe(take(1), timeout(3e3), wrapErr("news"))
      });
    })).subscribe((results) => {
      console.log("[Search] subscribe handler fired, results:", results, "searchQuery:", this.searchQuery);
      this.ngZone.run(() => {
        this.searchResults = results;
        this.showResults = (this.searchQuery || "").trim().length >= 1;
      });
    });
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupMobileScrollHandler();
      this.setupResizeListener();
      this.scrollUi.start();
      this.restoreMiniChats();
      this.chatState.getUserRooms().pipe(takeUntil(this.destroy$)).subscribe();
      this.chatState.getAllMessages$().pipe(takeUntil(this.destroy$)).subscribe();
      this.browserNotify.getPermission$().pipe(takeUntil(this.destroy$)).subscribe((p) => {
        this.notifyPermission = p;
        if (p === "granted") {
          this.showNotifyBanner = false;
          if (this.showNotifyDeniedModal) {
            this.notifyTestResultMessage = "\u901A\u77E5\u304C\u6709\u52B9\u306B\u306A\u308A\u307E\u3057\u305F\u3002";
          }
        } else if (p === "denied") {
          this.showNotifyBanner = false;
        }
      });
      this.browserNotify.getAppEnabled$().pipe(takeUntil(this.destroy$)).subscribe((v) => {
        this.notifyAppEnabled = v;
      });
      this.scheduleNotificationBannerShow();
      this.router.events.pipe(filter((e) => e instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe((e) => {
        const m = e.urlAfterRedirects.match(/\/chat\/([^?/#]+)/);
        this.browserNotify.setActiveRoom(m ? m[1] : null);
      });
      this.realtimeGateway.getStatus$().pipe(takeUntil(this.destroy$)).subscribe((s) => {
        this.realtimeStatus = s;
        this.showRealtimeStatusIndicator = s === "closed" || s === "error";
      });
      this.registerServiceWorker();
      this.setupInstallPrompt();
    }
  }
  // ========================================================================
  // PWA: Service Worker 登録 & インストール誘導
  // ========================================================================
  registerServiceWorker() {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator))
      return;
    if (typeof window === "undefined")
      return;
    const swUrl = "/schecon-demo/sw.js";
    const onLoad = () => {
      navigator.serviceWorker.register(swUrl, { scope: "/schecon-demo/", updateViaCache: "none" }).then((reg) => {
        const tryUpdate = (worker) => {
          if (!worker)
            return;
          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              worker.postMessage({ type: "SKIP_WAITING" });
            }
          });
        };
        tryUpdate(reg.installing);
        reg.addEventListener("updatefound", () => tryUpdate(reg.installing));
        setInterval(() => {
          reg.update().catch(() => {
          });
        }, 10 * 60 * 1e3);
      }).catch((err) => {
        console.warn("[SW] registration failed:", err);
      });
      let reloaded = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (reloaded)
          return;
        reloaded = true;
        window.location.reload();
      });
    };
    if (document.readyState === "complete")
      onLoad();
    else
      window.addEventListener("load", onLoad, { once: true });
  }
  setupInstallPrompt() {
    if (typeof window === "undefined")
      return;
    if (window.localStorage?.getItem(this.INSTALL_BANNER_DISMISS_KEY) === "1")
      return;
    if (window.matchMedia?.("(display-mode: standalone)").matches)
      return;
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredInstallPrompt = e;
      setTimeout(() => {
        this.ngZone.run(() => {
          this.showInstallBanner = true;
        });
      }, 15e3);
    });
    window.addEventListener("appinstalled", () => {
      this.ngZone.run(() => {
        this.showInstallBanner = false;
      });
      this.deferredInstallPrompt = null;
    });
  }
  triggerInstall() {
    return __async(this, null, function* () {
      if (!this.deferredInstallPrompt) {
        this.showInstallBanner = false;
        return;
      }
      this.deferredInstallPrompt.prompt();
      try {
        const choice = yield this.deferredInstallPrompt.userChoice;
        this.deferredInstallPrompt = null;
        this.showInstallBanner = false;
        if (choice.outcome === "dismissed") {
          window.localStorage?.setItem(this.INSTALL_BANNER_DISMISS_KEY, "1");
        }
      } catch {
      }
    });
  }
  dismissInstallBanner() {
    this.showInstallBanner = false;
    window.localStorage?.setItem(this.INSTALL_BANNER_DISMISS_KEY, "1");
  }
  /**
   * バナー表示をユーザーエンゲージメント後に出す (Slack 風):
   *  - 最初の visibility=visible から 20 秒、または
   *  - chat ページに到達してから 2 秒、のいずれか先
   */
  scheduleNotificationBannerShow() {
    if (!this.browserNotify.shouldShowBanner())
      return;
    const showIfAllowed = () => {
      if (this.browserNotify.shouldShowBanner()) {
        this.ngZone.run(() => {
          this.showNotifyBanner = true;
        });
        this.browserNotify.markBannerShown();
      }
    };
    setTimeout(showIfAllowed, 2e4);
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe((e) => {
      if (e.urlAfterRedirects.startsWith("/chat")) {
        setTimeout(showIfAllowed, 2e3);
      }
    });
  }
  enableNotifications() {
    return __async(this, null, function* () {
      const current = this.browserNotify.getPermission();
      if (current === "denied") {
        this.showNotifyBanner = false;
        this.openDeniedHelp();
        return;
      }
      const p = yield this.browserNotify.requestPermission("banner-cta");
      this.showNotifyBanner = false;
      if (p === "denied") {
        this.openDeniedHelp();
      } else if (p === "granted") {
        this.browserNotify.sendTestNotification();
        this.notifyTestResultMessage = "\u901A\u77E5\u304C\u6709\u52B9\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u30C6\u30B9\u30C8\u901A\u77E5\u3092\u9001\u308A\u307E\u3057\u305F\u3002";
      }
    });
  }
  dismissNotifyBanner() {
    this.showNotifyBanner = false;
    this.browserNotify.dismissBanner();
  }
  suppressNotifyBannerForever() {
    this.showNotifyBanner = false;
    this.browserNotify.suppressBannerForever();
  }
  openDeniedHelp() {
    this.notifyDeniedSteps = this.browserNotify.getDeniedReenableGuide();
    this.notifyTestResultMessage = "";
    this.showNotifyDeniedModal = true;
  }
  closeDeniedHelp() {
    this.showNotifyDeniedModal = false;
    this.notifyTestResultMessage = "";
  }
  toggleNotifyAppEnabled() {
    this.browserNotify.setAppEnabled(!this.notifyAppEnabled);
    if (!this.notifyAppEnabled) {
      this.browserNotify.sendTestNotification();
    }
  }
  /**
   * denied モーダル内の「もう一度試す」ボタン (ユーザー指示 2026-04-21)
   * Firefox 等では再プロンプトされる場合がある。また、ユーザーが
   * 別タブでサイト設定を許可に変えた直後にこのボタンを押して確認する用途も兼ねる。
   */
  retryNotifyPermission() {
    return __async(this, null, function* () {
      const rechecked = yield this.browserNotify.recheckPermission();
      if (rechecked === "granted") {
        this.notifyTestResultMessage = "\u901A\u77E5\u304C\u6709\u52B9\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u30C6\u30B9\u30C8\u901A\u77E5\u3092\u9001\u308A\u307E\u3057\u305F\u3002";
        this.browserNotify.sendTestNotification();
        setTimeout(() => {
          this.ngZone.run(() => {
            this.showNotifyDeniedModal = false;
            this.notifyTestResultMessage = "";
          });
        }, 1500);
        return;
      }
      const p = yield this.browserNotify.requestPermission("banner-cta");
      if (p === "granted") {
        this.notifyTestResultMessage = "\u901A\u77E5\u304C\u6709\u52B9\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u30C6\u30B9\u30C8\u901A\u77E5\u3092\u9001\u308A\u307E\u3057\u305F\u3002";
        this.browserNotify.sendTestNotification();
        setTimeout(() => {
          this.ngZone.run(() => {
            this.showNotifyDeniedModal = false;
            this.notifyTestResultMessage = "";
          });
        }, 1500);
      } else {
        this.notifyTestResultMessage = "\u73FE\u5728\u3082\u30D6\u30ED\u30C3\u30AF\u72B6\u614B\u3067\u3059\u3002\u4E0A\u8A18\u306E\u624B\u9806\u3067\u30D6\u30E9\u30A6\u30B6\u5074\u306E\u30B5\u30A4\u30C8\u8A2D\u5B9A\u3092\u5909\u66F4\u3057\u3001\u3082\u3046\u4E00\u5EA6\u3053\u306E\u753B\u9762\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002";
      }
    });
  }
  /** 通知テスト: 手動で 1 通送る (ユーザー指示 2026-04-21) */
  sendTestNotification() {
    const ok = this.browserNotify.sendTestNotification();
    this.notifyTestResultMessage = ok ? "\u30C6\u30B9\u30C8\u901A\u77E5\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\u3002\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u53F3\u4E0B\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002" : "\u901A\u77E5\u3092\u9001\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6A29\u9650\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u308B\u304B\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002";
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.removeMobileScrollHandler();
    this.removeResizeListener();
  }
  setupResizeListener() {
    const handler = () => {
      const w = window.innerWidth;
      if (w !== this.viewportWidth) {
        this.ngZone.run(() => {
          this.viewportWidth = w;
        });
      }
    };
    this.resizeHandler = handler;
    const orientationHandler = () => {
      requestAnimationFrame(() => {
        const w = window.innerWidth;
        if (w !== this.viewportWidth) {
          this.ngZone.run(() => {
            this.viewportWidth = w;
          });
        } else {
          this.ngZone.run(() => {
          });
        }
      });
    };
    this.orientationHandler = orientationHandler;
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener("resize", handler, { passive: true });
      window.addEventListener("orientationchange", orientationHandler, { passive: true });
    });
  }
  removeResizeListener() {
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
      this.resizeHandler = null;
    }
    if (this.orientationHandler) {
      window.removeEventListener("orientationchange", this.orientationHandler);
      this.orientationHandler = null;
    }
  }
  /** モバイル: スクロール方向に応じて下部ナビ・ヘッダーを表示/非表示
   *  body root scroller 方式 (epoch-inc.jp パターン) でブラウザchrome自動hide
   *  rAF + cooldown + 最上部/最下部ガードでチカチカ防止 */
  setupMobileScrollHandler() {
    const onScroll = () => {
      if (this.scrollRafId)
        return;
      this.scrollRafId = requestAnimationFrame(() => {
        this.scrollRafId = null;
        const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
        if (this.showPageTopFab) {
          this.ngZone.run(() => {
            this.showPageTopFab = false;
          });
        }
        if (this.pageTopFabTimer)
          clearTimeout(this.pageTopFabTimer);
        this.pageTopFabTimer = setTimeout(() => {
          const shouldShow = (window.scrollY || document.documentElement.scrollTop || 0) > 300;
          if (shouldShow !== this.showPageTopFab) {
            this.ngZone.run(() => {
              this.showPageTopFab = shouldShow;
            });
          }
        }, 300);
        const delta = scrollY - this.lastScrollY;
        if (Math.abs(delta) < this.scrollThresholdBottom)
          return;
        const now = performance.now();
        if (now < this.scrollCooldownMs) {
          this.lastScrollY = scrollY;
          return;
        }
        const atTop = scrollY <= 10;
        const docH = document.documentElement.scrollHeight;
        const viewH = window.innerHeight;
        const atBottom = docH - scrollY - viewH < 30;
        if (atTop) {
          if (this.isBottomNavHidden) {
            this.ngZone.run(() => {
              this.isBottomNavHidden = false;
            });
            this.scrollCooldownMs = now + 300;
          }
        } else if (atBottom) {
        } else if (delta > 0 && scrollY > 60) {
          if (!this.isBottomNavHidden) {
            this.ngZone.run(() => {
              this.isBottomNavHidden = true;
            });
            this.scrollCooldownMs = now + 300;
          }
        } else if (delta < 0) {
          if (this.isBottomNavHidden) {
            this.ngZone.run(() => {
              this.isBottomNavHidden = false;
            });
            this.scrollCooldownMs = now + 300;
          }
        }
        this.lastScrollY = scrollY;
      });
    };
    this.scrollHandler = onScroll;
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener("scroll", onScroll, { passive: true });
      setTimeout(() => {
        const appMain = document.querySelector(".app-main");
        if (!appMain)
          return;
        const onMainScroll = () => {
          if (this.showPageTopFab) {
            this.ngZone.run(() => {
              this.showPageTopFab = false;
            });
          }
          if (this.pageTopFabTimer)
            clearTimeout(this.pageTopFabTimer);
          this.pageTopFabTimer = setTimeout(() => {
            const y = appMain.scrollTop;
            const should = y > 300;
            if (should !== this.showPageTopFab) {
              this.ngZone.run(() => {
                this.showPageTopFab = should;
              });
            }
          }, 300);
        };
        this.appMainScrollHandler = onMainScroll;
        appMain.addEventListener("scroll", onMainScroll, { passive: true });
      }, 0);
    });
  }
  removeMobileScrollHandler() {
    if (this.scrollHandler) {
      window.removeEventListener("scroll", this.scrollHandler);
      this.scrollHandler = null;
    }
    if (this.appMainScrollHandler) {
      const appMain = document.querySelector(".app-main");
      if (appMain)
        appMain.removeEventListener("scroll", this.appMainScrollHandler);
      this.appMainScrollHandler = null;
    }
    if (this.scrollRafId) {
      cancelAnimationFrame(this.scrollRafId);
      this.scrollRafId = null;
    }
  }
  /* fix C1 (2026-04-28): モバイルメニュー / スケジュールモーダル を開いたら
     history に entry を積む。ブラウザバックで自然に閉じるようになる (前ページに飛ばない) */
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen && typeof history !== "undefined") {
      try {
        history.pushState({ schecconOverlay: "mobile-menu" }, "");
      } catch {
      }
    }
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  openScheduleModal() {
    this.scheduleModal.open();
    this.closeMobileMenu();
    if (typeof history !== "undefined") {
      try {
        history.pushState({ schecconOverlay: "schedule-modal" }, "");
      } catch {
      }
    }
  }
  closeScheduleModal() {
    this.scheduleModal.close();
  }
  onSearchFocus() {
    this.searchActive = true;
    if (this.searchQuery && this.searchQuery.trim().length >= 1) {
      this.showResults = true;
    }
  }
  onSearchBlur() {
    setTimeout(() => {
      this.searchActive = false;
      this.showResults = false;
    }, 300);
  }
  /**
   * fix D3 (2026-04-28): 二重バインド (input)+(ngModel) を分離した版の handler。
   * (ngModelChange) から確実に呼ばれ、searchQuery を上書き + searchSubject.next を発火。
   * これにより BehaviorSubject から subscribe へ確実に値が流れる。
   */
  onSearchQueryChange(value) {
    console.log("[Search] onSearchQueryChange:", JSON.stringify(value));
    this.searchQuery = value || "";
    this.searchActive = true;
    if (this.searchQuery.trim().length >= 1) {
      this.showResults = true;
    } else {
      this.showResults = false;
    }
    this.searchSubject.next(this.searchQuery);
  }
  /** 旧 (input) ハンドラ。後方互換用に残置。 */
  onSearchChange() {
    this.onSearchQueryChange(this.searchQuery);
  }
  clearSearch() {
    this.searchQuery = "";
    this.searchResults = { calendar: [], mail: [], chat: [], history: [], contacts: [], communities: [], members: [], recruitments: [], appeals: [], threads: [], communityEvents: [], news: [] };
    this.showResults = false;
  }
  closeSearch() {
    this.clearSearch();
    this.searchActive = false;
  }
  get hasResults() {
    const r = this.searchResults;
    return r.calendar.length > 0 || r.mail.length > 0 || r.chat.length > 0 || r.history.length > 0 || r.contacts.length > 0 || r.communities.length > 0 || r.members.length > 0 || r.recruitments.length > 0 || r.appeals.length > 0 || r.threads.length > 0 || r.communityEvents.length > 0 || r.news.length > 0;
  }
  /** ユーザー指示 2026-04-23: 6 カテゴリにグルーピング。それぞれ トップ N 件 +
   *  「もっと見る」で当該ページに遷移できる。 */
  get searchCategories() {
    const r = this.searchResults;
    const communityCount = r.communities.length + r.communityEvents.length + r.threads.length + r.recruitments.length + r.appeals.length;
    return [
      {
        key: "chat",
        label: "\u30C1\u30E3\u30C3\u30C8",
        icon: "chat",
        count: r.chat.length,
        more: () => this.navigateToSearchAll("chat")
      },
      {
        key: "history",
        label: "\u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74",
        icon: "history",
        count: r.history.length,
        more: () => this.navigateToSearchAll("history")
      },
      {
        key: "contacts",
        label: "\u9023\u7D61\u5148",
        icon: "import_contacts",
        count: r.contacts.length,
        more: () => this.navigateToSearchAll("contacts")
      },
      {
        key: "calendar",
        label: "\u30AB\u30EC\u30F3\u30C0\u30FC",
        icon: "event",
        count: r.calendar.length,
        more: () => this.navigateToSearchAll("calendar")
      },
      {
        key: "mail",
        label: "\u30E1\u30FC\u30EB",
        icon: "mail",
        count: r.mail.length,
        more: () => this.navigateToSearchAll("mail")
      },
      {
        key: "community",
        label: "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3",
        icon: "groups",
        count: communityCount,
        more: () => this.navigateToSearchAll("community")
      }
    ];
  }
  /** カテゴリ「もっと見る」: 該当ページへ ?q=<term> 付きで遷移 */
  navigateToSearchAll(category) {
    const q = this.searchQuery;
    this.closeSearch();
    switch (category) {
      case "chat":
        this.router.navigate(["/chat"], { queryParams: { q } });
        break;
      case "history":
        this.router.navigate(["/history"], { queryParams: { q } });
        break;
      case "contacts":
        this.router.navigate(["/address-book"], { queryParams: { q } });
        break;
      case "calendar":
        this.router.navigate(["/calendar"], { queryParams: { q } });
        break;
      case "mail":
        this.router.navigate(["/mail"], { queryParams: { q } });
        break;
      case "community":
        this.router.navigate(["/community"], { queryParams: { q } });
        break;
    }
  }
  navigateToContact(c) {
    this.closeSearch();
    this.router.navigate(["/address-book", c.id]);
  }
  navigateToHistoryEntry(h) {
    this.closeSearch();
    this.router.navigate(["/history"], { queryParams: { q: h.title } });
  }
  navigateToCalendarEvent(event) {
    this.closeSearch();
    this.router.navigate(["/calendar"]);
  }
  navigateToMail(mail) {
    this.closeSearch();
    this.router.navigate(["/mail"], { queryParams: { message: mail.id } });
  }
  /* fix Sheet#66 (2026-04-27): 旧仕様: 検索結果のチャット項目をタップすると
     /community へ誤遷移していた。正しくはチャットルームページへ遷移。
     ChatMessage は roomId 相当の情報を持たないため (mock の channelName のみ)、
     ひとまず /chat に遷移してユーザーが手動で目的ルームを選択できるようにする。 */
  navigateToChat(chat) {
    this.closeSearch();
    this.router.navigate(["/chat"]);
  }
  /* fix Sheet#66 (2026-04-27): 旧仕様: /calendar へ誤遷移していた。
     予定調整履歴は /history が正解。 */
  navigateToHistory(mail) {
    this.closeSearch();
    this.router.navigate(["/history"]);
  }
  navigateToCommunity(community) {
    this.closeSearch();
    this.router.navigate(["/community", community.id]);
  }
  navigateToMember(member) {
    this.closeSearch();
    this.router.navigate(["/community", member.communityId], { queryParams: { tab: "members" } });
  }
  navigateToRecruitment(rec) {
    this.closeSearch();
    this.router.navigate(["/community", rec.communityId], { queryParams: { tab: "recruitment" } });
  }
  navigateToAppeal(appeal) {
    this.closeSearch();
    this.router.navigate(["/community", appeal.communityId], { queryParams: { tab: "appeals" } });
  }
  navigateToThread(thread) {
    this.closeSearch();
    this.router.navigate(["/community", thread.communityId], { queryParams: { tab: "threads" } });
  }
  navigateToCommunityEvent(event) {
    this.closeSearch();
    this.router.navigate(["/community", event.communityId], { queryParams: { tab: "events" } });
  }
  navigateToNews(news) {
    this.closeSearch();
    this.router.navigate(["/community", news.communityId], { queryParams: { tab: "news" } });
  }
  getCommunityName(communityId) {
    return this.communityService.getCommunityTitle(communityId);
  }
  formatDate(date) {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  }
  formatTime(date) {
    const d = new Date(date);
    return `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MailService), \u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(CommunityService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ChatStateService), \u0275\u0275directiveInject(BrowserNotificationService), \u0275\u0275directiveInject(RealtimeGatewayService), \u0275\u0275directiveInject(ScrollUiService), \u0275\u0275directiveInject(ScheduleModalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AppComponent_click_HostBindingHandler($event) {
          return ctx.onDocClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 22, consts: [["userMenuTrigger", "matMenuTrigger"], ["userMenu", "matMenu"], ["singleAvatar", ""], ["miniInputRef", ""], ["href", "#main-content", 1, "skip-link"], ["class", "header", "role", "banner", 3, "header--hidden", 4, "ngIf"], [1, "app-body"], ["id", "mobile-nav", "class", "navigation-rail", "role", "navigation", "aria-label", "\u30E1\u30A4\u30F3\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3", 3, "navigation-rail--open", 4, "ngIf"], ["id", "main-content", "role", "main", "tabindex", "-1", 1, "app-main"], ["class", "chat-rail", "aria-label", "\u6700\u8FD1\u306E\u30C1\u30E3\u30C3\u30C8", "data-testid", "chat-rail", 4, "ngIf"], ["type", "button", "class", "page-top-fab", "matTooltip", "\u30DA\u30FC\u30B8\u4E0A\u90E8\u3078\u623B\u308B", "aria-label", "\u30DA\u30FC\u30B8\u4E0A\u90E8\u3078\u623B\u308B", 3, "click", 4, "ngIf"], ["class", "modal-backdrop", "data-testid", "new-chat-picker-backdrop", 3, "click", 4, "ngIf"], ["class", "install-banner", "data-testid", "install-banner", "role", "complementary", "aria-label", "\u30A2\u30D7\u30EA\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB", 4, "ngIf"], ["class", "realtime-status-bar", "data-testid", "realtime-status-bar", 3, "realtime-status-bar--error", 4, "ngIf"], ["class", "notify-banner", "data-testid", "notify-banner", 4, "ngIf"], ["class", "modal-backdrop", "data-testid", "notify-denied-modal-backdrop", 3, "click", 4, "ngIf"], ["class", "mini-chats", "role", "region", "aria-label", "\u30DF\u30CB\u30C1\u30E3\u30C3\u30C8\u30A6\u30A3\u30F3\u30C9\u30A6", "data-testid", "mini-chats", 4, "ngIf"], ["class", "footer", 4, "ngIf"], ["class", "nav-bottom", 3, "nav-bottom--hidden", 4, "ngIf"], ["class", "mobile-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay schedule-picker-overlay", 3, "click", 4, "ngIf"], ["role", "banner", 1, "header"], ["type", "button", "aria-label", "\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u9589", "aria-controls", "mobile-nav", 1, "header__menu", 3, "click"], [1, "line-1"], [1, "line-2"], [1, "line-3"], [1, "header__logo"], ["routerLink", "/top"], ["src", "assets/imgs/common/logo.svg", "alt", "ScheCon"], [1, "header__spacer"], [1, "header__search"], [1, "header__search-icon"], ["type", "text", "placeholder", "\u30B9\u30B1\u30B3\u30F3\u5168\u4F53\u3092\u691C\u7D22", 1, "header__search-input", 3, "ngModelChange", "focus", "blur", "ngModel"], ["class", "header__search-clear", 3, "click", 4, "ngIf"], ["class", "header__search-results", 4, "ngIf"], [1, "header__user", 3, "matMenuTriggerFor"], [1, "header__user-avatar"], ["xPosition", "before", "yPosition", "below", 1, "user-menu-panel", 3, "overlapTrigger"], ["mat-menu-item", "", "routerLink", "/settings/profile"], ["mat-menu-item", "", "routerLink", "/settings/settings"], ["mat-menu-item", "", "routerLink", "/settings/service"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "routerLink", "/history"], ["mat-menu-item", "", "routerLink", "/address-book"], ["mat-menu-item", "", "routerLink", "/community"], ["mat-menu-item", "", "routerLink", "/mail"], ["mat-menu-item", "", "routerLink", "/calendar"], [4, "ngIf"], ["class", "notify-status-menu", "data-testid", "notify-status-menu", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/top"], [1, "header__search-clear", 3, "click"], [1, "header__search-results"], ["class", "header__search-empty", 4, "ngIf"], ["class", "header__search-category", 4, "ngIf"], [1, "header__search-empty"], [1, "header__search-category"], [1, "header__search-category-header"], [1, "header__search-category-count"], ["class", "header__search-result", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "header__search-more", 3, "mousedown"], [1, "header__search-result", 3, "mousedown"], [1, "header__search-result-title"], [1, "header__search-result-meta"], [1, "header__search-result-inline-icon"], ["data-testid", "notify-status-menu", 1, "notify-status-menu", 3, "click"], [1, "notify-status-menu__label"], [1, "notify-status-menu__state"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "notify-status-menu__toggle", 4, "ngIf"], ["class", "notify-status-menu__action", 3, "click", 4, "ngIf"], ["class", "notify-status-menu__action notify-status-menu__action--hint", 3, "click", 4, "ngIf"], [1, "notify-status-menu__toggle"], [1, "notify-toggle"], ["type", "checkbox", 3, "change", "checked"], [1, "notify-toggle__slider"], [1, "notify-toggle__text"], [1, "notify-status-menu__action", 3, "click"], [1, "notify-status-menu__action", "notify-status-menu__action--hint", 3, "click"], ["id", "mobile-nav", "role", "navigation", "aria-label", "\u30E1\u30A4\u30F3\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3", 1, "navigation-rail"], [1, "navigation-rail__items"], ["matTooltip", "\u4E88\u5B9A\u8ABF\u6574", 1, "navigation-rail__item", "navigation-rail__item--schedule", 3, "click"], ["src", "assets/imgs/common/schecon-favicon.png", "alt", "\u30B9\u30B1\u30B3\u30F3", 1, "navigation-rail__schecon-logo"], [1, "navigation-rail__label"], ["routerLink", "/history", "routerLinkActive", "navigation-rail__item--active", "matTooltip", "\u4E88\u5B9A\u8ABF\u6574\u5C65\u6B74", 1, "navigation-rail__item", 3, "click"], ["routerLink", "/address-book", "routerLinkActive", "navigation-rail__item--active", "matTooltip", "\u9023\u7D61\u5148", 1, "navigation-rail__item", 3, "click"], ["routerLink", "/chat", "routerLinkActive", "navigation-rail__item--active", "matTooltip", "\u30C1\u30E3\u30C3\u30C8", 1, "navigation-rail__item", 3, "click"], ["routerLink", "/mail", "routerLinkActive", "navigation-rail__item--active", "matTooltip", "\u30E1\u30FC\u30EB", 1, "navigation-rail__item", "navigation-rail__item--desktop-only", 3, "click"], ["routerLink", "/calendar", "routerLinkActive", "navigation-rail__item--active", "matTooltip", "\u30AB\u30EC\u30F3\u30C0\u30FC", 1, "navigation-rail__item", "navigation-rail__item--desktop-only", 3, "click"], ["routerLink", "/community", "routerLinkActive", "navigation-rail__item--active", "matTooltip", "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3", 1, "navigation-rail__item", 3, "click"], ["class", "navigation-rail__mobile-extra", 4, "ngIf"], [1, "navigation-rail__mobile-extra"], [1, "navigation-rail__divider"], ["routerLink", "/mail", "routerLinkActive", "navigation-rail__item--active", 1, "navigation-rail__item", 3, "click"], ["routerLink", "/calendar", "routerLinkActive", "navigation-rail__item--active", 1, "navigation-rail__item", 3, "click"], ["routerLink", "/community", "routerLinkActive", "navigation-rail__item--active", 1, "navigation-rail__item", 3, "click"], ["routerLink", "/settings/profile", 1, "navigation-rail__item", 3, "click"], ["routerLink", "/settings/settings", 1, "navigation-rail__item", 3, "click"], ["routerLink", "/settings/service", 1, "navigation-rail__item", 3, "click"], ["aria-label", "\u6700\u8FD1\u306E\u30C1\u30E3\u30C3\u30C8", "data-testid", "chat-rail", 1, "chat-rail"], [1, "chat-rail__list"], ["class", "chat-rail__item", "type", "button", "matTooltipPosition", "left", 3, "matTooltip", "chat-rail__item--group", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["routerLink", "/chat", "class", "chat-rail__more", "matTooltip", "\u30C1\u30E3\u30C3\u30C8\u4E00\u89A7\u3092\u958B\u304F", "matTooltipPosition", "left", 4, "ngIf"], ["type", "button", "matTooltip", "\u65B0\u898F\u30C1\u30E3\u30C3\u30C8", "matTooltipPosition", "left", "data-testid", "rail-compose-btn", 1, "chat-rail__compose", 3, "click"], ["type", "button", "matTooltipPosition", "left", 1, "chat-rail__item", 3, "click", "matTooltip"], [1, "chat-rail__avatar-wrap"], [4, "ngIf", "ngIfElse"], ["class", "chat-rail__online", "aria-hidden", "true", 4, "ngIf"], ["class", "chat-rail__unread", 4, "ngIf"], [1, "chat-rail__avatar", "chat-rail__avatar--group-main"], ["class", "chat-rail__avatar chat-rail__avatar--group-sub chat-rail__avatar--group-sub-1", 3, "background", 4, "ngIf"], ["class", "chat-rail__avatar chat-rail__avatar--group-sub chat-rail__avatar--group-sub-2", 3, "background", 4, "ngIf"], [1, "chat-rail__avatar", "chat-rail__avatar--group-sub", "chat-rail__avatar--group-sub-1"], [3, "src", "alt", 4, "ngIf"], [3, "src", "alt"], [1, "chat-rail__avatar", "chat-rail__avatar--group-sub", "chat-rail__avatar--group-sub-2"], ["class", "chat-rail__avatar chat-rail__avatar--img", 3, "src", "alt", 4, "ngIf"], ["class", "chat-rail__avatar", 3, "background", 4, "ngIf"], [1, "chat-rail__avatar", "chat-rail__avatar--img", 3, "src", "alt"], [1, "chat-rail__avatar"], ["aria-hidden", "true", 1, "chat-rail__online"], [1, "chat-rail__unread"], ["routerLink", "/chat", "matTooltip", "\u30C1\u30E3\u30C3\u30C8\u4E00\u89A7\u3092\u958B\u304F", "matTooltipPosition", "left", 1, "chat-rail__more"], ["type", "button", "matTooltip", "\u30DA\u30FC\u30B8\u4E0A\u90E8\u3078\u623B\u308B", "aria-label", "\u30DA\u30FC\u30B8\u4E0A\u90E8\u3078\u623B\u308B", 1, "page-top-fab", 3, "click"], ["data-testid", "new-chat-picker-backdrop", 1, "modal-backdrop", 3, "click"], ["data-testid", "new-chat-picker", 1, "modal", "modal--md", "new-chat-picker", 3, "click"], [1, "modal__header"], [1, "icon-btn", 3, "click"], [1, "modal__body"], [1, "new-chat-picker__search"], ["type", "text", "placeholder", "\u540D\u524D\u307E\u305F\u306F\u30E1\u30FC\u30EB\u3067\u691C\u7D22", "autocomplete", "off", 1, "new-chat-picker__search-input", 3, "ngModelChange", "ngModel"], ["class", "new-chat-picker__hint", 4, "ngIf"], [1, "new-chat-picker__list"], ["class", "new-chat-picker__item", "type", "button", 3, "new-chat-picker__item--selected", "click", 4, "ngFor", "ngForOf"], ["class", "new-chat-picker__empty", 4, "ngIf"], [1, "modal__footer"], [1, "btn", "btn--ghost", 3, "click"], ["data-testid", "picker-create", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "new-chat-picker__hint"], ["type", "button", 1, "new-chat-picker__item", 3, "click"], [1, "new-chat-picker__avatar"], [1, "new-chat-picker__body"], [1, "new-chat-picker__name"], [1, "new-chat-picker__email"], ["class", "new-chat-picker__check", 4, "ngIf"], [1, "new-chat-picker__check"], [1, "new-chat-picker__empty"], ["data-testid", "install-banner", "role", "complementary", "aria-label", "\u30A2\u30D7\u30EA\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB", 1, "install-banner"], [1, "install-banner__icon"], [1, "install-banner__body"], [1, "install-banner__title"], [1, "install-banner__desc"], [1, "install-banner__actions"], ["type", "button", "data-testid", "install-banner-accept", 1, "install-banner__btn", "install-banner__btn--primary", 3, "click"], ["type", "button", "data-testid", "install-banner-dismiss", 1, "install-banner__btn", 3, "click"], ["data-testid", "realtime-status-bar", 1, "realtime-status-bar"], [1, "realtime-status-bar__icon"], [1, "realtime-status-bar__label"], ["data-testid", "notify-banner", 1, "notify-banner"], [1, "notify-banner__icon"], [1, "notify-banner__body"], [1, "notify-banner__title"], [1, "notify-banner__desc"], [1, "notify-banner__actions"], ["data-testid", "notify-banner-enable", 1, "notify-banner__btn", "notify-banner__btn--primary", 3, "click"], ["data-testid", "notify-banner-later", 1, "notify-banner__btn", 3, "click"], ["data-testid", "notify-banner-never", 1, "notify-banner__btn", "notify-banner__btn--muted", 3, "click"], ["data-testid", "notify-denied-modal-backdrop", 1, "modal-backdrop", 3, "click"], ["data-testid", "notify-denied-modal", 1, "modal", "modal--sm", "notify-denied-modal", 3, "click"], ["class", "notify-denied-modal__result", "role", "status", "aria-live", "polite", 4, "ngIf"], ["class", "btn btn--primary", "data-testid", "notify-retry-btn", 3, "click", 4, "ngIf"], ["class", "btn btn--primary", "data-testid", "notify-test-btn", 3, "click", 4, "ngIf"], [1, "notify-denied-modal__intro"], [1, "notify-denied-modal__steps"], [4, "ngFor", "ngForOf"], [1, "notify-denied-modal__hint"], ["role", "status", "aria-live", "polite", 1, "notify-denied-modal__result"], ["data-testid", "notify-retry-btn", 1, "btn", "btn--primary", 3, "click"], ["data-testid", "notify-test-btn", 1, "btn", "btn--primary", 3, "click"], ["role", "region", "aria-label", "\u30DF\u30CB\u30C1\u30E3\u30C3\u30C8\u30A6\u30A3\u30F3\u30C9\u30A6", "data-testid", "mini-chats", 1, "mini-chats"], ["class", "mini-chat", "role", "dialog", 3, "mini-chat--minimized", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "dialog", 1, "mini-chat"], ["role", "button", "tabindex", "0", 1, "mini-chat__header", 3, "click", "keydown.enter", "keydown.space"], [1, "mini-chat__header-user"], [1, "mini-chat__avatar-wrap"], ["class", "mini-chat__avatar mini-chat__avatar--img", 3, "src", "alt", 4, "ngIf"], ["class", "mini-chat__avatar", 3, "background", 4, "ngIf"], ["aria-hidden", "true", 1, "mini-chat__online"], [1, "mini-chat__title"], [1, "mini-chat__name"], [1, "mini-chat__status"], [1, "mini-chat__header-actions"], ["type", "button", "matTooltip", "\u5168\u753B\u9762\u3067\u958B\u304F", "matTooltipPosition", "above", "data-testid", "mini-chat-expand", 1, "mini-chat__icon-btn", 3, "click"], ["type", "button", "matTooltipPosition", "above", "data-testid", "mini-chat-minimize", 1, "mini-chat__icon-btn", 3, "click", "matTooltip"], ["type", "button", "matTooltip", "\u9589\u3058\u308B", "matTooltipPosition", "above", "data-testid", "mini-chat-close", 1, "mini-chat__icon-btn", 3, "click"], [1, "mini-chat__avatar", "mini-chat__avatar--img", 3, "src", "alt"], [1, "mini-chat__avatar"], [1, "mini-chat__body"], ["class", "mini-chat__empty", 4, "ngIf"], ["class", "mini-chat__messages", 4, "ngIf"], [1, "mini-chat__input"], [1, "mini-chat__input-tools"], [1, "mini-chat__tool-wrap", 3, "click"], ["type", "button", "matTooltip", "\u30C4\u30FC\u30EB", 1, "mini-chat__tool-btn", 3, "click"], ["class", "mini-chat__popover mini-chat__popover--attach", 4, "ngIf"], ["rows", "1", "placeholder", "Aa", "autocomplete", "off", "data-testid", "mini-chat-input", 1, "mini-chat__input-field", 3, "ngModelChange", "keydown", "focus", "blur", "input", "ngModel"], ["type", "button", "matTooltipPosition", "above", "data-testid", "mini-chat-send", 1, "mini-chat__send", 3, "click", "disabled", "matTooltip"], [1, "mini-chat__empty"], [1, "mini-chat__avatar", "mini-chat__avatar--xl"], [1, "mini-chat__empty-name"], [1, "mini-chat__empty-hint"], [1, "mini-chat__messages"], ["class", "mini-chat__msg", 3, "mini-chat__msg--me", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mini-chat__msg"], [1, "mini-chat__bubble"], [1, "mini-chat__time"], [1, "mini-chat__popover", "mini-chat__popover--attach"], ["type", "button", 1, "mini-chat__popover-item", "mini-chat__popover-item--schecon", 3, "click"], [1, "mini-chat__popover-schecon-wrap"], ["src", "assets/imgs/common/schecon-favicon.png", "alt", "\u30B9\u30B1\u30B3\u30F3"], ["type", "button", 1, "mini-chat__popover-item", 3, "click"], ["type", "button", "class", "mini-chat__popover-item", 3, "click", 4, "ngIf"], [1, "footer"], [1, "footer__list"], ["href", "https://schecon.com/handling-of-personal-information", "target", "_blank"], ["href", "https://schecon.com/policy", "target", "_blank"], ["href", "https://schecon.com/terms", "target", "_blank"], ["href", "https://schecon.com/legal", "target", "_blank"], ["href", "https://schecon.com/faq", "target", "_blank"], ["href", "https://schecon.com/article/", "target", "_blank"], ["href", "https://schecon.com/google-api-limited-use-policy", "target", "_blank"], ["href", "https://time-machine.co.jp/", "target", "_blank"], ["href", "https://schecon.com/contact/inquiry", "target", "_blank"], [1, "footer__copyright"], [1, "nav-bottom"], [1, "nav-bottom__item", "nav-bottom__item--schedule", 3, "click"], ["src", "assets/imgs/common/schecon-favicon.png", "alt", "\u30B9\u30B1\u30B3\u30F3", 1, "nav-bottom__schecon-logo"], [1, "nav-bottom__label"], ["routerLink", "/chat", "routerLinkActive", "nav-bottom__item--active", 1, "nav-bottom__item", 3, "click"], ["routerLink", "/mail", "routerLinkActive", "nav-bottom__item--active", 1, "nav-bottom__item", 3, "click"], ["routerLink", "/calendar", "routerLinkActive", "nav-bottom__item--active", 1, "nav-bottom__item", 3, "click"], ["routerLink", "/community", "routerLinkActive", "nav-bottom__item--active", 1, "nav-bottom__item", 3, "click"], [1, "mobile-overlay", 3, "click"], [1, "modal-overlay", "schedule-picker-overlay", 3, "click"], [1, "schedule-picker", 3, "click"], ["type", "button", "aria-label", "\u9589\u3058\u308B", 1, "schedule-picker__close", 3, "click"], [1, "schedule-picker__list"], ["href", "/schecon-demo/one-on-one-create", "target", "_blank", "rel", "noopener", "aria-label", "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574", 1, "schedule-picker__item", "schedule-picker__item--one", 3, "click"], ["src", "assets/imgs/top/adjustment_sp_small_1.webp", "alt", "1\u5BFE1\u4E88\u5B9A\u8ABF\u6574", 1, "schedule-picker__item-img"], [1, "schedule-picker__item-footer"], [1, "schedule-picker__item-name"], ["aria-hidden", "true", 1, "schedule-picker__item-chevron-circle"], [1, "schedule-picker__item-chevron"], ["href", "/schecon-demo/multiple/create", "target", "_blank", "rel", "noopener", "aria-label", "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574", 1, "schedule-picker__item", "schedule-picker__item--multi", 3, "click"], ["src", "assets/imgs/top/adjustment_sp_small_2.webp", "alt", "\u8907\u6570\u4EBA\u4E88\u5B9A\u8ABF\u6574", 1, "schedule-picker__item-img"], ["href", "/schecon-demo/group/create", "target", "_blank", "rel", "noopener", "aria-label", "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574", 1, "schedule-picker__item", "schedule-picker__item--group", 3, "click"], ["src", "assets/imgs/top/adjustment_sp_small_3.webp", "alt", "\u793E\u5185\u4E88\u5B9A\u8ABF\u6574", 1, "schedule-picker__item-img"], ["href", "/schecon-demo/confirm", "target", "_blank", "rel", "noopener", "aria-label", "\u7A7A\u304D\u6642\u9593\u78BA\u8A8D", 1, "schedule-picker__item", "schedule-picker__item--free", 3, "click"], ["src", "assets/imgs/top/adjustment_sp_small_4.webp", "alt", "\u7A7A\u304D\u6642\u9593\u78BA\u8A8D", 1, "schedule-picker__item-img"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 4);
        \u0275\u0275text(1, "\u30E1\u30A4\u30F3\u30B3\u30F3\u30C6\u30F3\u30C4\u3078\u30B9\u30AD\u30C3\u30D7");
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, AppComponent_header_2_Template, 69, 13, "header", 5);
        \u0275\u0275elementStart(3, "div", 6);
        \u0275\u0275template(4, AppComponent_nav_4_Template, 37, 3, "nav", 7);
        \u0275\u0275elementStart(5, "main", 8);
        \u0275\u0275element(6, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, AppComponent_aside_7_Template, 7, 3, "aside", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, AppComponent_button_8_Template, 3, 0, "button", 10)(9, AppComponent_div_9_Template, 24, 6, "div", 11)(10, AppComponent_div_10_Template, 13, 0, "div", 12)(11, AppComponent_div_11_Template, 5, 4, "div", 13)(12, AppComponent_div_12_Template, 15, 0, "div", 14)(13, AppComponent_div_13_Template, 19, 7, "div", 15)(14, AppComponent_div_14_Template, 2, 2, "div", 16)(15, AppComponent_footer_15_Template, 32, 0, "footer", 17)(16, AppComponent_nav_16_Template, 25, 2, "nav", 18)(17, AppComponent_div_17_Template, 1, 0, "div", 19)(18, AppComponent_div_18_Template, 38, 0, "div", 20);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.isTopPage && !ctx.isSchedulingPage);
        \u0275\u0275advance();
        \u0275\u0275classProp("app-body--top", ctx.isTopPage)("app-body--has-header", !ctx.isTopPage && !ctx.isSchedulingPage)("app-body--scheduling", ctx.isSchedulingPage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isTopPage && !ctx.isSchedulingPage);
        \u0275\u0275advance();
        \u0275\u0275classProp("app-main--with-chat-rail", ctx.showChatRail);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showChatRail);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isTopPage && !ctx.isChatPage && !ctx.isSchedulingPage && ctx.showPageTopFab);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNewChatPicker);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showInstallBanner);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showRealtimeStatusIndicator);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isDesktop && ctx.showNotifyBanner);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNotifyDeniedModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isDesktop && ctx.openMiniChats.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isAppPage && !ctx.isTopPage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isTopPage && !ctx.isSchedulingPage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isMobileMenuOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showScheduleModal);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      NgSwitch,
      NgSwitchCase,
      SlicePipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      MatButtonModule,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDividerModule,
      MatDivider
    ], styles: ['@charset "UTF-8";\n\n\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 88px;\n  background: #fff;\n  border-bottom: 0.8px solid #e2dfdc;\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  z-index: 1000;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  gap: 16px;\n}\n.header--hidden[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n.header__menu[_ngcontent-%COMP%] {\n  display: flex;\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  margin-right: 8px;\n}\n.header__menu[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%], .header__menu[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%], .header__menu[_ngcontent-%COMP%]   .line-3[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: #9e9e9e;\n  border-radius: 1px;\n  transition: transform 0.3s;\n}\n.header__menu[_ngcontent-%COMP%]:hover   .line-1[_ngcontent-%COMP%], .header__menu[_ngcontent-%COMP%]:hover   .line-2[_ngcontent-%COMP%], .header__menu[_ngcontent-%COMP%]:hover   .line-3[_ngcontent-%COMP%] {\n  background: #5f6368;\n}\n.header__logo[_ngcontent-%COMP%] {\n  position: static;\n  transform: none;\n  margin: 0 0 0 16px;\n  font-size: 0;\n  flex-shrink: 0;\n}\n.header__logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 36px;\n  width: auto;\n}\n.header__spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 16px;\n}\n.header__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex: 1 1 auto;\n  width: auto;\n  max-width: calc(85vw - 200px);\n  height: 40px;\n  background: #f1f3f4;\n  border-radius: 24px;\n  padding: 0 12px;\n  margin-right: 16px;\n  transition:\n    max-width 0.3s ease,\n    box-shadow 0.3s ease,\n    background 0.3s ease;\n}\n.header__search--active[_ngcontent-%COMP%] {\n  max-width: calc(85vw - 200px);\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.header__search-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #5f6368;\n  flex-shrink: 0;\n}\n.header__search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  padding: 0 8px;\n  color: #81766e;\n  min-width: 0;\n}\n.header__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9e9e9e;\n  font-size: 13px;\n}\n.header__search-clear[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: #5f6368;\n  flex-shrink: 0;\n}\n.header__search-clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.header__search-clear[_ngcontent-%COMP%]:hover {\n  color: #81766e;\n}\n.header__search-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  max-height: 70vh;\n  max-height: 70dvh;\n  overflow-y: auto;\n  z-index: 1001;\n  padding: 8px 0;\n}\n.header__search-empty[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  color: #9e9e9e;\n  font-size: 13px;\n  text-align: center;\n}\n.header__search-category[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid #f1f3f4;\n}\n.header__search-category-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 16px 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #5f6368;\n  letter-spacing: 0.3px;\n}\n.header__search-category-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #ff9800;\n}\n.header__search-category-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: #fff3e0;\n  color: #e65100;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.header__search-more[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  background: #fafafa;\n  border: none;\n  border-top: 1px dashed #eee;\n  color: #e65100;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 10px 16px;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.header__search-more[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.header__search-more[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n}\n.header__search-result-inline-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  color: #ff9800 !important;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.header__search-result[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px 16px 8px 38px;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  transition: background 0.15s;\n}\n.header__search-result[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.06);\n}\n.header__search-result-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #81766e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.header__search-result-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  margin-top: 2px;\n}\n.header__user[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: auto;\n  margin-right: 16px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n.header__user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #7c4dff;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.header__navlinks[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-right: 16px;\n}\n.header__navlinks-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  color: #5f6368;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  white-space: nowrap;\n  transition: background 0.2s, color 0.2s;\n}\n.header__navlinks-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.header__navlinks-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.06);\n  color: #ff9800;\n}\n.header__navlinks-item--active[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.1);\n  color: #ff9800;\n}\n.header__navlinks-item--active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  height: 100dvh;\n  overflow: hidden;\n}\n.app-body--has-header[_ngcontent-%COMP%] {\n  margin-top: 88px;\n  height: calc(100vh - 88px);\n  height: calc(100dvh - 88px);\n}\n.app-body--top[_ngcontent-%COMP%], .app-body[_ngcontent-%COMP%]:has(app-top-page) {\n  height: auto !important;\n  min-height: 100vh;\n  min-height: 100dvh;\n  overflow: visible !important;\n  display: block;\n  margin-top: 0;\n}\n.app-body--top[_ngcontent-%COMP%]   .app-main[_ngcontent-%COMP%], .app-body[_ngcontent-%COMP%]:has(app-top-page)   .app-main[_ngcontent-%COMP%] {\n  overflow: visible !important;\n  height: auto !important;\n  min-height: 0;\n}\n.navigation-rail[_ngcontent-%COMP%] {\n  width: 72px;\n  min-width: 72px;\n  background: #fff;\n  border-right: 0.8px solid #e2dfdc;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 99;\n  position: relative;\n}\n.navigation-rail__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  gap: 16px;\n}\n.navigation-rail__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  color: #5f6368;\n  text-decoration: none;\n  cursor: pointer;\n  transition: color 0.2s;\n  position: relative;\n}\n.navigation-rail__item[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n}\n.navigation-rail__item[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.navigation-rail__item--active[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.navigation-rail__item--active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.navigation-rail__item--active[_ngcontent-%COMP%]   .navigation-rail__label[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-weight: 600;\n}\n.navigation-rail__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #5f6368;\n  transition: color 0.2s;\n}\n.navigation-rail__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 3px;\n  white-space: nowrap;\n  color: #5f6368;\n  line-height: 1;\n}\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  height: 100%;\n}\n.app-main[_ngcontent-%COMP%]:has(app-top-page) {\n  overflow: visible !important;\n  height: auto !important;\n}\n.footer[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-top: 1px solid #e2dfdc;\n  padding: 20px 24px 16px;\n  text-align: center;\n}\n.footer__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 4px 16px;\n}\n.footer__list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #666;\n  text-decoration: none;\n  font-size: 11px;\n  transition: color 0.2s;\n}\n.footer__list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n  text-decoration: underline;\n}\n.footer__copyright[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: #999;\n  font-size: 11px;\n}\n.navigation-rail__mobile-extra[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding-bottom: 16px;\n}\n.navigation-rail__divider[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 1px;\n  background: #e2dfdc;\n  margin: 4px 0;\n}\n.mobile-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 88px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 98;\n}\n.schedule-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 2000;\n}\n.schedule-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2001;\n  display: flex;\n  gap: 12px;\n  padding: 18px;\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n}\n.schedule-modal__card[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  text-decoration: none;\n  color: inherit;\n  background: #fff;\n}\n.schedule-modal__card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.schedule-modal__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  overflow: hidden;\n}\n.schedule-modal__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.schedule-modal__tag[_ngcontent-%COMP%] {\n  display: none;\n}\n.schedule-modal__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  border-radius: 0 0 12px 12px;\n}\n.schedule-modal__arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 24px;\n  height: 24px;\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.schedule-modal__card--one-on-one[_ngcontent-%COMP%]   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #a1c92f;\n}\n.schedule-modal__card--multiple[_ngcontent-%COMP%]   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #ed9630;\n}\n.schedule-modal__card--group[_ngcontent-%COMP%]   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #02d697;\n}\n.schedule-modal__card--free-time[_ngcontent-%COMP%]   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #f1ba2b;\n}\n.schedule-modal__card--one-on-one[_ngcontent-%COMP%]:hover   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #b0d63e;\n}\n.schedule-modal__card--multiple[_ngcontent-%COMP%]:hover   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #f0a545;\n}\n.schedule-modal__card--group[_ngcontent-%COMP%]:hover   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #1de2a8;\n}\n.schedule-modal__card--free-time[_ngcontent-%COMP%]:hover   .schedule-modal__title[_ngcontent-%COMP%] {\n  background: #f4c640;\n}\n.nav-bottom[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 48px;\n  background: #fff;\n  border-top: 0.8px solid #e2dfdc;\n  z-index: 1000;\n  align-items: center;\n  justify-content: space-around;\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.nav-bottom--hidden[_ngcontent-%COMP%] {\n  transform: translateY(100%);\n}\n.nav-bottom__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  height: 100%;\n  color: #5f6368;\n  text-decoration: none;\n  cursor: pointer;\n  transition: color 0.2s;\n  -webkit-tap-highlight-color: transparent;\n}\n.nav-bottom__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.nav-bottom__item[_ngcontent-%COMP%]:hover {\n  color: #ff9800;\n  text-decoration: none;\n}\n.nav-bottom__item--active[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.nav-bottom__item--active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.nav-bottom__item--active[_ngcontent-%COMP%]   .nav-bottom__label[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-weight: 600;\n}\n.nav-bottom__label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  margin-top: 1px;\n  white-space: nowrap;\n  line-height: 1;\n}\n@media (max-width: 1023px) {\n  .header__navlinks[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navigation-rail[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 56px;\n    left: 0;\n    bottom: 0;\n    width: 280px !important;\n    min-width: 280px !important;\n    background: #fff;\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n    z-index: 99;\n    box-shadow: none;\n    overflow-y: auto;\n    padding: 16px 0;\n  }\n  .navigation-rail--open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);\n  }\n  .navigation-rail__items[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    justify-content: flex-start !important;\n    gap: 0 !important;\n    padding: 8px 0 !important;\n  }\n  .navigation-rail__item[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    justify-content: flex-start !important;\n    align-items: center !important;\n    width: 100% !important;\n    height: auto !important;\n    padding: 14px 20px 14px 56px !important;\n    position: relative;\n    font-size: 15px;\n    font-weight: 700;\n    color: #81766e !important;\n    gap: 12px;\n  }\n  .navigation-rail__item[_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    left: 20px;\n    top: 50%;\n    width: 22px;\n    height: 22px;\n    margin-top: -11px;\n    border: 2px solid #ed9630;\n    border-radius: 50%;\n    background: transparent;\n    transition: background 0.25s ease;\n  }\n  .navigation-rail__item[_ngcontent-%COMP%]::after {\n    content: "";\n    position: absolute;\n    left: 27px;\n    top: 50%;\n    width: 6px;\n    height: 6px;\n    margin-top: -3px;\n    border-top: 2px solid #ed9630;\n    border-right: 2px solid #ed9630;\n    transform: rotate(45deg);\n    transition: border-color 0.25s ease;\n  }\n  .navigation-rail__item[_ngcontent-%COMP%]:hover, .navigation-rail__item--active[_ngcontent-%COMP%] {\n    color: #ed9630 !important;\n  }\n  .navigation-rail__item[_ngcontent-%COMP%]:hover::before, .navigation-rail__item--active[_ngcontent-%COMP%]::before {\n    background: #ed9630;\n  }\n  .navigation-rail__item[_ngcontent-%COMP%]:hover::after, .navigation-rail__item--active[_ngcontent-%COMP%]::after {\n    border-top-color: #fff;\n    border-right-color: #fff;\n  }\n  .navigation-rail__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .navigation-rail__item[_ngcontent-%COMP%]   .navigation-rail__label[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n    font-weight: 700 !important;\n    color: inherit !important;\n    margin-top: 0 !important;\n  }\n  .navigation-rail__mobile-extra[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .app-body[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .header__search[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .header__search--active[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n  .schedule-modal[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    max-width: 90vw;\n    justify-content: center;\n    padding: 16px;\n    gap: 12px;\n  }\n  .schedule-modal__card[_ngcontent-%COMP%] {\n    width: calc(50% - 8px);\n    min-width: 150px;\n  }\n  .schedule-modal__img[_ngcontent-%COMP%] {\n    height: 140px;\n  }\n}\n@media (max-width: 767px) {\n  .nav-bottom[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .app-body--has-header[_ngcontent-%COMP%] {\n    height: calc(100vh - 56px - 48px);\n    height: calc(100dvh - 56px - 48px);\n  }\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    padding: 0 8px;\n  }\n  .header__menu[_ngcontent-%COMP%] {\n    order: -1;\n    margin-right: 4px;\n    flex-shrink: 0;\n  }\n  .header__logo[_ngcontent-%COMP%] {\n    order: 0;\n    margin: 0 8px 0 8px !important;\n    flex-shrink: 0;\n  }\n  .header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 28px;\n  }\n  .header__spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header__search[_ngcontent-%COMP%] {\n    order: 1;\n    flex: 1 1 auto;\n    min-width: 0;\n    max-width: none !important;\n    margin: 0 8px !important;\n    height: 32px;\n  }\n  .header__user[_ngcontent-%COMP%] {\n    order: 2;\n    margin-left: auto !important;\n    margin-right: 8px !important;\n    flex-shrink: 0;\n  }\n  .header__user-avatar[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 13px;\n  }\n  body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%], body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input.chat-room__input--hidden[_ngcontent-%COMP%], .chat-room__input[_ngcontent-%COMP%]:focus-within, .chat-room__input[_ngcontent-%COMP%]:focus-within.chat-room__input--hidden, .chat-room__input.chat-room__input--hidden[_ngcontent-%COMP%]:focus-within {\n    z-index: 2147483647 !important;\n    position: fixed !important;\n    bottom: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    transform: none !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    pointer-events: auto !important;\n    isolation: isolate;\n    contain: layout style;\n  }\n  body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .chat-room__input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .chat-room__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n    z-index: 2147483647 !important;\n    position: relative;\n  }\n  body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%], body.keyboard-open[_ngcontent-%COMP%]   .chat-room.chat-room--scroll-collapsed[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%] {\n    transform: none !important;\n    will-change: auto !important;\n  }\n  body.keyboard-open[_ngcontent-%COMP%]   .chat-room__input[_ngcontent-%COMP%] {\n    bottom: var(--kb-h, 0px) !important;\n  }\n  .schedule-modal[_ngcontent-%COMP%] {\n    position: fixed;\n    top: auto !important;\n    bottom: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    transform: none !important;\n    border-radius: 16px 16px 0 0;\n    max-width: 100%;\n    width: 100%;\n    display: grid !important;\n    grid-template-columns: 1fr 1fr !important;\n    flex-direction: unset !important;\n    gap: 10px;\n    padding: 16px 12px max(16px, env(safe-area-inset-bottom, 16px));\n    animation: slide-up 0.25s ease;\n    max-height: 85vh;\n    max-height: 85dvh;\n    overflow-y: auto;\n  }\n  .schedule-modal__card[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex !important;\n    flex-direction: column !important;\n    border-radius: 10px;\n    border: 1px solid #e0e0e0;\n    background: #fff;\n    overflow: hidden;\n    transition: transform 0.15s;\n  }\n  .schedule-modal__card[_ngcontent-%COMP%]:active {\n    transform: scale(0.98);\n  }\n  .schedule-modal__img[_ngcontent-%COMP%] {\n    width: 100% !important;\n    height: 76px !important;\n    flex-shrink: 0;\n    border-radius: 0;\n    overflow: hidden;\n  }\n  .schedule-modal__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .schedule-modal__title[_ngcontent-%COMP%] {\n    display: flex !important;\n    align-items: center !important;\n    justify-content: space-between !important;\n    flex: 1;\n    padding: 8px 10px;\n    font-size: 12px;\n    font-weight: 700;\n    border-radius: 0 !important;\n    color: #fff;\n    line-height: 1.3;\n  }\n  .schedule-modal__arrow[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 18px;\n    height: 18px;\n    flex-shrink: 0;\n  }\n  @keyframes slide-up {\n    from {\n      transform: translateY(100%);\n    }\n    to {\n      transform: translateY(0);\n    }\n  }\n  .header[_ngcontent-%COMP%] {\n    height: 40px;\n    padding: 0 8px;\n  }\n  .header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 24px;\n  }\n  .header__logo[_ngcontent-%COMP%] {\n    position: static !important;\n    transform: none !important;\n    margin: 0 0 0 8px !important;\n    flex-shrink: 0 !important;\n    order: 0 !important;\n  }\n  .header__spacer[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .header[_ngcontent-%COMP%]   .header__search[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important;\n    width: auto !important;\n    max-width: none !important;\n    margin: 0 8px !important;\n    order: 1 !important;\n    min-width: 0 !important;\n  }\n  .header[_ngcontent-%COMP%]   .header__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n  }\n  .header[_ngcontent-%COMP%]   .header__search--active[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important;\n    width: auto !important;\n    max-width: none !important;\n  }\n  .header[_ngcontent-%COMP%]   .header__search-input[_ngcontent-%COMP%]::placeholder {\n    font-size: 12px;\n  }\n  .header[_ngcontent-%COMP%]   .header__search-results[_ngcontent-%COMP%] {\n    position: fixed !important;\n    top: 44px !important;\n    left: 8px !important;\n    right: 8px !important;\n    bottom: auto !important;\n    width: auto !important;\n    max-height: 70vh !important;\n    max-height: 70dvh !important;\n    min-width: unset !important;\n    border-radius: 12px;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n  }\n  .header__user[_ngcontent-%COMP%] {\n    order: 2 !important;\n    margin-left: auto !important;\n    margin-right: 8px !important;\n    flex-shrink: 0 !important;\n  }\n  .header__user-avatar[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 14px;\n  }\n  .app-body--has-header[_ngcontent-%COMP%] {\n    margin-top: 56px;\n    height: calc(100vh - 56px - 48px);\n    height: calc(100dvh - 56px - 48px);\n  }\n  .app-body--scheduling[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-left: 0;\n    height: 100vh;\n    height: 100dvh;\n    overflow-y: auto;\n    padding: 0;\n  }\n  .navigation-rail[_ngcontent-%COMP%] {\n    top: 56px;\n  }\n  .navigation-rail__item--desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .footer[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .footer__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    gap: 2px 10px;\n  }\n  .footer__list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n@media (max-width: 479px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 0 8px;\n  }\n  .header__logo[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n    margin-right: 8px;\n    flex-shrink: 0;\n  }\n  .header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 24px;\n  }\n  .header__spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .header__search[_ngcontent-%COMP%] {\n    flex: 1;\n    width: auto;\n    margin-right: 6px;\n    padding: 0 8px;\n    height: 36px;\n  }\n  .header[_ngcontent-%COMP%]   .header__search--active[_ngcontent-%COMP%] {\n    flex: 1;\n    width: auto;\n    position: relative;\n  }\n  .header[_ngcontent-%COMP%]   .header__search-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .header[_ngcontent-%COMP%]   .header__search-input[_ngcontent-%COMP%]::placeholder {\n    font-size: 12px;\n  }\n  .header[_ngcontent-%COMP%]   .header__search-results[_ngcontent-%COMP%] {\n    position: fixed !important;\n    top: 44px !important;\n    left: 8px !important;\n    right: 8px !important;\n    max-height: 70vh !important;\n    max-height: 70dvh !important;\n    min-width: unset !important;\n  }\n  .header__menu[_ngcontent-%COMP%] {\n    margin-right: 4px;\n  }\n}\n.app-main--with-chat-rail[_ngcontent-%COMP%] {\n  padding-right: 60px;\n}\n.chat-rail[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 104px;\n  right: 8px;\n  bottom: 16px;\n  width: 56px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 90;\n  pointer-events: none;\n}\n.chat-rail[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.chat-rail__list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 4px 0;\n  flex: 1;\n  min-height: 0;\n  scrollbar-width: none;\n}\n.chat-rail__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n.chat-rail__item[_ngcontent-%COMP%] {\n  appearance: none;\n  background: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.15s;\n  flex-shrink: 0;\n}\n.chat-rail__item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n}\n.chat-rail__item[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.chat-rail__avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 44px;\n}\n.chat-rail__avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 17px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  background-clip: padding-box;\n}\n.chat-rail__avatar--img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.chat-rail__avatar--group-main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  font-size: 12px;\n  z-index: 2;\n  border: 2px solid #fff;\n}\n.chat-rail__avatar--group-sub[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  font-size: 10px;\n  border: 2px solid #fff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.chat-rail__avatar--group-sub[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.chat-rail__avatar--group-sub-1[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  z-index: 3;\n}\n.chat-rail__avatar--group-sub-2[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 4px;\n  z-index: 1;\n}\n.chat-rail__item--group[_ngcontent-%COMP%]   .chat-rail__avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.chat-rail__online[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #31a24c;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04);\n}\n.chat-rail__unread[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  background: #fa3e3e;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #fff;\n  box-sizing: border-box;\n  line-height: 1;\n}\n.chat-rail__more[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  transition: background 0.15s, transform 0.15s;\n  flex-shrink: 0;\n  text-align: center;\n  line-height: 1.1;\n}\n.chat-rail__more[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 4px;\n}\n.chat-rail__more[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.75);\n  transform: scale(1.06);\n}\n.chat-rail__compose[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800,\n      #f57c00);\n  color: #fff;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  margin-top: 8px;\n  box-shadow: 0 4px 16px rgba(245, 124, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.12);\n  transition: transform 0.15s, box-shadow 0.15s;\n  cursor: pointer;\n}\n.chat-rail__compose[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  color: #fff;\n}\n.chat-rail__compose[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n  box-shadow: 0 6px 20px rgba(245, 124, 0, 0.45), 0 3px 10px rgba(0, 0, 0, 0.15);\n}\n.chat-rail__compose[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n@media (max-width: 1023px) {\n  .chat-rail[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .app-main--with-chat-rail[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n}\n.mini-chats[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 80px;\n  bottom: 0;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-end;\n  gap: 12px;\n  z-index: 100;\n  pointer-events: none;\n}\n.mini-chats[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.mini-chat[_ngcontent-%COMP%] {\n  width: 328px;\n  height: 460px;\n  background: #fff;\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_mini-chat-rise 0.28s cubic-bezier(0.22, 1, 0.36, 1);\n  transform-origin: bottom right;\n}\n.mini-chat--minimized[_ngcontent-%COMP%] {\n  height: auto;\n}\n.mini-chat__header[_ngcontent-%COMP%] {\n  height: 60px;\n  padding: 0 10px 0 14px;\n  background: #fff;\n  border-bottom: 1px solid #eaeaea;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.mini-chat__header[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.mini-chat__header-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  flex: 1;\n}\n.mini-chat__avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n}\n.mini-chat__avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n  overflow: hidden;\n}\n.mini-chat__avatar--img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.mini-chat__avatar--xl[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  font-size: 28px;\n}\n.mini-chat__avatar--xl[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.mini-chat__online[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #31a24c;\n  border: 2px solid #fff;\n}\n.mini-chat__title[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.mini-chat__name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: #050505;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mini-chat__status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #65676b;\n}\n.mini-chat__header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.mini-chat__icon-btn[_ngcontent-%COMP%] {\n  appearance: none;\n  background: transparent;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #606770;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.mini-chat__icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.mini-chat__icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f2f5;\n  color: #050505;\n}\n.mini-chat__body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 12px 4px;\n  background: #fff;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n}\n.mini-chat__empty[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 16px;\n}\n.mini-chat__empty-name[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: 700;\n  font-size: 15px;\n  color: #050505;\n}\n.mini-chat__empty-hint[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 12px;\n  color: #65676b;\n}\n.mini-chat__messages[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mini-chat__msg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 75%;\n}\n.mini-chat__msg--me[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  align-items: flex-end;\n}\n.mini-chat__msg--me[_ngcontent-%COMP%]   .mini-chat__bubble[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n  border-radius: 18px 18px 4px 18px;\n}\n.mini-chat__bubble[_ngcontent-%COMP%] {\n  background: #f0f2f5;\n  color: #050505;\n  padding: 8px 12px;\n  border-radius: 18px 18px 18px 4px;\n  font-size: 14px;\n  line-height: 1.35;\n  word-break: break-word;\n  white-space: pre-wrap;\n}\n.mini-chat__time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a8d91;\n  margin-top: 2px;\n  padding: 0 8px;\n}\n.mini-chat__input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 4px;\n  padding: 6px 8px 8px;\n  border-top: 1px solid #eaeaea;\n  background: #fff;\n  flex-shrink: 0;\n  transition: padding 0.15s;\n}\n.mini-chat__input-tools[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  align-items: center;\n  flex-shrink: 0;\n  padding-bottom: 2px;\n}\n.mini-chat__tool-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n}\n.mini-chat__tool-btn[_ngcontent-%COMP%] {\n  appearance: none;\n  background: transparent;\n  border: none;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  color: #ff9800;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.mini-chat__tool-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.mini-chat__tool-btn[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n}\n.mini-chat__tool-btn--active[_ngcontent-%COMP%] {\n  background: #fff3e0;\n}\n.mini-chat__popover[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 0;\n  background: #fff;\n  border: 1px solid #e2dfdc;\n  border-radius: 10px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);\n  padding: 6px;\n  z-index: 20;\n  animation: _ngcontent-%COMP%_mini-chat-popover-in 0.15s ease-out;\n}\n.mini-chat__popover--attach[_ngcontent-%COMP%] {\n  min-width: 220px;\n  max-height: 360px;\n  overflow-y: auto;\n  padding: 6px;\n}\n.mini-chat__popover--emoji[_ngcontent-%COMP%] {\n  width: 220px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 2px;\n}\n.mini-chat__popover-item[_ngcontent-%COMP%] {\n  appearance: none;\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 10px;\n  border-radius: 6px;\n  font-size: 13px;\n  color: #3c4043;\n  cursor: pointer;\n  font-family: inherit;\n  text-align: left;\n}\n.mini-chat__popover-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #ff9800;\n}\n.mini-chat__popover-item[_ngcontent-%COMP%]:hover {\n  background: #fff8e1;\n}\n.mini-chat__popover-item--schecon[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #e65100;\n}\n.mini-chat__popover-schecon-wrap[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.mini-chat__popover-schecon-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.mini-chat__popover-section[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  padding-top: 6px;\n  border-top: 1px solid #f0f0f0;\n}\n.mini-chat__popover-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #70757a;\n  padding: 2px 10px 4px;\n  font-weight: 500;\n}\n.mini-chat__popover-emoji-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 2px;\n  padding: 0 4px;\n}\n.mini-chat__emoji-btn[_ngcontent-%COMP%] {\n  appearance: none;\n  background: transparent;\n  border: none;\n  font-size: 18px;\n  line-height: 1;\n  padding: 6px 0;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.12s, transform 0.12s;\n}\n.mini-chat__emoji-btn[_ngcontent-%COMP%]:hover {\n  background: #fff8e1;\n  transform: scale(1.15);\n}\n.mini-chat__input-field[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f0f2f5;\n  border: none;\n  border-radius: 18px;\n  padding: 7px 12px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #050505;\n  outline: none;\n  min-width: 0;\n  resize: none;\n  line-height: 1.35;\n  max-height: 96px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n.mini-chat__input-field[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.mini-chat__input-field[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #d0d0d0;\n  border-radius: 2px;\n}\n.mini-chat__input-field[_ngcontent-%COMP%]::placeholder {\n  color: #8a8d91;\n}\n.mini-chat__input-field[_ngcontent-%COMP%]:focus {\n  background: #e4e6eb;\n}\n.mini-chat__send[_ngcontent-%COMP%] {\n  appearance: none;\n  background: transparent;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  color: #ff9800;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    transform 0.15s;\n  flex-shrink: 0;\n  margin-bottom: 1px;\n}\n.mini-chat__send[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.mini-chat__send[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fff3e0;\n  transform: scale(1.05);\n}\n.mini-chat__send[_ngcontent-%COMP%]:disabled {\n  color: #bdbdbd;\n  cursor: default;\n}\n@keyframes _ngcontent-%COMP%_mini-chat-popover-in {\n  from {\n    opacity: 0;\n    transform: translateY(4px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_mini-chat-rise {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 1023px) {\n  .mini-chats[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.notify-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  max-width: 380px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.1);\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  z-index: 100;\n  animation: _ngcontent-%COMP%_notify-banner-rise 0.28s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.notify-banner__icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #ff9800;\n  flex-shrink: 0;\n}\n.notify-banner__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notify-banner__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: #050505;\n  line-height: 1.3;\n}\n.notify-banner__desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #65676b;\n  line-height: 1.35;\n  margin-top: 2px;\n}\n.notify-banner__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.notify-banner__btn[_ngcontent-%COMP%] {\n  appearance: none;\n  border: none;\n  background: transparent;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 6px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  color: #606770;\n  transition: background 0.15s, color 0.15s;\n  white-space: nowrap;\n}\n.notify-banner__btn[_ngcontent-%COMP%]:hover {\n  background: #f0f2f5;\n  color: #050505;\n}\n.notify-banner__btn--primary[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.notify-banner__btn--primary[_ngcontent-%COMP%]:hover {\n  background: #fb8c00;\n  color: #fff;\n}\n.notify-banner__btn--muted[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  font-weight: 500;\n}\n.notify-banner__btn--muted[_ngcontent-%COMP%]:hover {\n  color: #606770;\n}\n.notify-banner--denied[_ngcontent-%COMP%]   .notify-banner__icon[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n@keyframes _ngcontent-%COMP%_notify-banner-rise {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 1023px) {\n  .notify-banner[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.install-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 16px;\n  right: 16px;\n  bottom: 64px;\n  max-width: 420px;\n  margin: 0 auto;\n  background: #fff;\n  border: 1px solid #ffcc80;\n  border-radius: 12px;\n  padding: 12px 14px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  z-index: 120;\n  animation: _ngcontent-%COMP%_installSlideUp 0.25s ease;\n}\n.install-banner__icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n}\n.install-banner__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.install-banner__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #050505;\n}\n.install-banner__desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #606770;\n  line-height: 1.4;\n}\n.install-banner__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.install-banner__btn[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 1px solid transparent;\n  background: transparent;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #606770;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.install-banner__btn[_ngcontent-%COMP%]:hover {\n  background: #f0f2f5;\n}\n.install-banner__btn--primary[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.install-banner__btn--primary[_ngcontent-%COMP%]:hover {\n  background: #fb8c00;\n  color: #fff;\n}\n@keyframes _ngcontent-%COMP%_installSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (min-width: 768px) {\n  .install-banner[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n}\n.realtime-status-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 88px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 16px;\n  background: #fff3e0;\n  color: #e65100;\n  border: 1px solid #ffcc80;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  z-index: 110;\n  white-space: nowrap;\n}\n.realtime-status-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.realtime-status-bar--error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  border-color: #ef9a9a;\n}\n@media (max-width: 767px) {\n  .realtime-status-bar[_ngcontent-%COMP%] {\n    top: 60px;\n    font-size: 11px;\n    padding: 5px 12px;\n  }\n}\n.notify-status-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 10px 16px 12px;\n  min-width: 220px;\n  background: #fafafa;\n  border-radius: 4px;\n  margin: 4px 8px;\n}\n.notify-status-menu__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #606770;\n}\n.notify-status-menu__label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.notify-status-menu__state[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n}\n.notify-status-menu__state[data-state=granted][_ngcontent-%COMP%] {\n  color: #31a24c;\n}\n.notify-status-menu__state[data-state=denied][_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.notify-status-menu__state[data-state=default][_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.notify-status-menu__state[data-state=unsupported][_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.notify-status-menu__toggle[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.notify-status-menu__action[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 1px solid #ff9800;\n  background: #fff;\n  color: #ff9800;\n  font-weight: 600;\n  font-size: 12px;\n  padding: 6px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  text-align: center;\n  transition: background 0.15s, color 0.15s;\n  margin-top: 4px;\n}\n.notify-status-menu__action[_ngcontent-%COMP%]:hover {\n  background: #ff9800;\n  color: #fff;\n}\n.notify-status-menu__action--hint[_ngcontent-%COMP%] {\n  border-color: #e53935;\n  color: #e53935;\n}\n.notify-status-menu__action--hint[_ngcontent-%COMP%]:hover {\n  background: #e53935;\n  color: #fff;\n}\n.notify-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.notify-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.notify-toggle__slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 32px;\n  height: 18px;\n  background: #bdbdbd;\n  border-radius: 9px;\n  transition: background 0.15s;\n}\n.notify-toggle__slider[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  transition: transform 0.15s;\n}\ninput[_ngcontent-%COMP%]:checked    + .notify-toggle__slider[_ngcontent-%COMP%] {\n  background: #ff9800;\n}\ninput[_ngcontent-%COMP%]:checked    + .notify-toggle__slider[_ngcontent-%COMP%]::after {\n  transform: translateX(14px);\n}\n.notify-toggle__text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #606770;\n}\n.page-top-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 90px;\n  right: 80px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #fff;\n  border: 2px solid #ff9800;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 95;\n  transition:\n    transform 0.15s,\n    box-shadow 0.15s,\n    opacity 0.2s;\n  animation: _ngcontent-%COMP%_pageTopFabIn 0.25s ease-out;\n}\n.page-top-fab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #ff9800;\n  line-height: 1;\n}\n.page-top-fab[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 14px rgba(255, 152, 0, 0.35);\n  background: #fff8e1;\n}\n.page-top-fab[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n@media (max-width: 1023px) {\n  .page-top-fab[_ngcontent-%COMP%] {\n    right: 16px;\n    bottom: 140px;\n  }\n}\n@media (max-width: 767px) {\n  .page-top-fab[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    right: 14px;\n    bottom: calc(60px + env(safe-area-inset-bottom, 0) + 52px + 10px);\n  }\n  .page-top-fab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 22px;\n    width: 22px;\n    height: 22px;\n  }\n}\n@keyframes _ngcontent-%COMP%_pageTopFabIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 16px;\n  animation: _ngcontent-%COMP%_modalBackdropIn 0.15s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalBackdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 360px;\n  max-height: 80vh;\n  max-height: 80dvh;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_modalRootIn 0.18s ease-out;\n  box-sizing: border-box;\n}\n.modal--sm[_ngcontent-%COMP%] {\n  max-width: 320px;\n}\n.modal--md[_ngcontent-%COMP%] {\n  max-width: 440px;\n}\n.modal--lg[_ngcontent-%COMP%] {\n  max-width: 560px;\n}\n.modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2dfdc;\n  flex-shrink: 0;\n}\n.modal__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #3c4043;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.modal__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.modal__header[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #5f6368;\n  transition: background 0.15s;\n}\n.modal__header[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.06);\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  box-sizing: border-box;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n.modal__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 10px 14px;\n  border-top: 1px solid #e2dfdc;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_modalRootIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-backdrop[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid transparent;\n  font-family: inherit;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.modal-backdrop[_ngcontent-%COMP%]   .btn--primary[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: #fff;\n}\n.modal-backdrop[_ngcontent-%COMP%]   .btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ef6c00;\n}\n.modal-backdrop[_ngcontent-%COMP%]   .btn--primary[_ngcontent-%COMP%]:disabled {\n  background: #e0e0e0;\n  color: #9e9e9e;\n  cursor: not-allowed;\n}\n.modal-backdrop[_ngcontent-%COMP%]   .btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #5f6368;\n  border-color: #e0e0e0;\n}\n.modal-backdrop[_ngcontent-%COMP%]   .btn--ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n  color: #3c4043;\n}\n.cdk-overlay-pane.new-chat-picker[_ngcontent-%COMP%], .modal.new-chat-picker[_ngcontent-%COMP%] {\n  max-width: 560px !important;\n  width: min(92vw, 560px) !important;\n}\n.new-chat-picker__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0f2f5;\n  border-radius: 18px;\n  padding: 8px 14px;\n  margin-bottom: 12px;\n}\n.new-chat-picker__search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #8a8d91;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.new-chat-picker__search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  outline: none;\n  min-width: 0;\n  font-family: inherit;\n}\n.new-chat-picker__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #8a8d91;\n}\n.new-chat-picker__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ff9800;\n  background: #fff8e1;\n  padding: 6px 10px;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.new-chat-picker__list[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.new-chat-picker__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 10px;\n  background: #fff;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.12s, border-color 0.12s;\n  font-family: inherit;\n}\n.new-chat-picker__item[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n  border-color: #eaeaea;\n}\n.new-chat-picker__item--selected[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  border-color: #ff9800;\n}\n.new-chat-picker__avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.new-chat-picker__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.new-chat-picker__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #050505;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.new-chat-picker__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #65676b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.new-chat-picker__check[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.new-chat-picker__empty[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-size: 13px;\n  color: #65676b;\n}\n.notify-denied-modal[_ngcontent-%COMP%] {\n}\n.notify-denied-modal__intro[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #81766e;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.notify-denied-modal__steps[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  padding-left: 20px;\n  font-size: 13px;\n  line-height: 1.8;\n  color: #050505;\n}\n.notify-denied-modal__steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.notify-denied-modal__steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: #ff9800;\n  font-weight: 700;\n}\n.notify-denied-modal__hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #65676b;\n  background: #fff8e1;\n  border-radius: 6px;\n  padding: 8px 10px;\n  margin: 0;\n}\n.notify-denied-modal__hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #ff9800;\n}\n.notify-denied-modal__result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 12px;\n  padding: 10px 12px;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-radius: 6px;\n  font-size: 13px;\n  color: #2e7d32;\n  line-height: 1.5;\n}\n.notify-denied-modal__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  color: #4caf50;\n  margin-top: 1px;\n}\n/*# sourceMappingURL=app.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 119 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/browser.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
