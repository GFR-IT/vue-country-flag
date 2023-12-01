'use strict';function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = ".flag {width: 52px;height: 39px;display: inline-block;background-image: url(data:image/png;base64,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) }.f-dnk, .f-dk {background-position: 0 0;}.f-fra, .f-fr {background-position: 0 -41px;}.f-gbr, .f-gb {background-position: 0 -81px;}.f-ita, .f-it {background-position: 0 -121px;}.f-nor, .f-no {background-position: 0 -161px;}.f-swe, .f-se {background-position: 0 -201px;}.f-isl, .f-is {background-position: 0 -242px;}.f-lva, .f-lv {background-position: 0 -282px;}.f-est,.f-ee {background-position: 0 -320px;}.f-ltu,.f-lt {background-position: 0 -360px;}";
styleInject(css_248z);var script = {
  name: 'CountryFlag',
  props: {
    country: {
      type: String,
      required: true
    },
    rounded: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function validator(value) {
        return value === 'small' || value === 'normal' || value === 'big';
      },
      default: 'normal'
    },
    background: {
      type: String,
      default: ''
    }
  },
  computed: {
    flagIconClass: function flagIconClass() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, "flag ".concat(this.flagIconCountry), true), _defineProperty(_ref, "rounded", this.rounded), _defineProperty(_ref, "shadow", this.shadow), _defineProperty(_ref, this.flagMargin, true), _ref;
    },
    flagIconCountry: function flagIconCountry() {
      var country = this.country.toLowerCase();
      country = country === 'ad' ? 'andorra' : country;
      return "f-".concat(country);
    },
    flagMargin: function flagMargin() {
      switch (this.size) {
        case 'small':
          return 'small-flag';

        case 'normal':
          return 'normal-flag';

        case 'big':
          return 'big-flag';

        default:
          return 'normal-flag';
      }
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.country ? _c('span', {
    class: _vm.flagIconClass
  }, []) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6d355e59_0", {
    source: ".small-flag[data-v-6d355e59]{transform:scale(.25);-ms-transform:scale(.25);-webkit-transform:scale(.25);-moz-transform:scale(.25)}.normal-flag[data-v-6d355e59]{transform:scale(.5);-ms-transform:scale(.5);-webkit-transform:scale(.5);-moz-transform:scale(.5)}.big-flag[data-v-6d355e59]{margin:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-6d355e59";
/* module identifier */

var __vue_module_identifier__ = "data-v-6d355e59";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = function (Vue) {
    Vue.component('CountryFlag', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;