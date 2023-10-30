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
}var css_248z = ".flag {width: 52px;height: 39px;display: inline-block;background-image: url(data:image/png;base64,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) }.f-dnk, .f-dk {background-position: 0 0;}.f-fra, .f-fr {background-position: 0 -39px;}.f-gbr, .f-gb {background-position: 0 -78px;}.f-ita, .f-it {background-position: 0 -117px;}.f-nor, .f-no {background-position: 0 -156px;}.f-swe, .f-se {background-position: 0 -195px;}.f-isl, .f-is {background-position: 0 -233px;}";
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