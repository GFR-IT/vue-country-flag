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
}var css_248z = ".flag {width: 52px;height: 39px;display: inline-block;background-image: url(data:image/png;base64,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) }.f-dnk, .f-dk {background-position: 0 0;}.f-fra, .f-fr {background-position: 0 -39px;}.f-gbr, .f-gb {background-position: 0 -78px;}.f-ita, .f-it {background-position: 0 -117px;}.f-nor, .f-no {background-position: 0 -156px;}.f-swe, .f-se {background-position: 0 -195px;}";
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
  inject("data-v-65ec5906_0", {
    source: ".small-flag[data-v-65ec5906]{margin:-.9em -1.2em -.9em -1.2em;transform:scale(.25);-ms-transform:scale(.25);-webkit-transform:scale(.25);-moz-transform:scale(.25)}.normal-flag[data-v-65ec5906]{margin:0 -.9em -.6em -.7em;transform:scale(.5);-ms-transform:scale(.5);-webkit-transform:scale(.5);-moz-transform:scale(.5)}.big-flag[data-v-65ec5906]{margin:0}.small-flag.rounded[data-v-65ec5906]{-moz-border-radius:15px;border-radius:15px}.normal-flag.rounded[data-v-65ec5906]{-moz-border-radius:10px;border-radius:10px}.big-flag.rounded[data-v-65ec5906]{-moz-border-radius:8px;border-radius:8px}.small-flag.shadow[data-v-65ec5906]{-webkit-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);-moz-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%)}.normal-flag.shadow[data-v-65ec5906]{-webkit-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);-moz-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%)}.big-flag.shadow[data-v-65ec5906]{-webkit-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);-moz-box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);box-shadow:0 2px 4px -1px rgb(0 0 0 / 20%),0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-65ec5906";
/* module identifier */

var __vue_module_identifier__ = "data-v-65ec5906";
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