function styleInject(css, ref) {
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
}

var css_248z = ".flag {width: 52px;height: 39px;display: inline-block;background-image: url(data:image/png;base64,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) }.f-dnk, .f-dk {background-position: 0 0;}.f-fra, .f-fr {background-position: 0 -41px;}.f-gbr, .f-gb {background-position: 0 -81px;}.f-ita, .f-it {background-position: 0 -121px;}.f-nor, .f-no {background-position: 0 -161px;}.f-swe, .f-se {background-position: 0 -201px;}.f-isl, .f-is {background-position: 0 -242px;}.f-lva, .f-lv {background-position: 0 -282px;}.f-est,.f-ee {background-position: 0 -320px;}.f-ltu,.f-lt {background-position: 0 -360px;}";
styleInject(css_248z);

//
var script = {
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
      validator: function (value) {
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
    flagIconClass() {
      return {
        [`flag ${this.flagIconCountry}`]: true,
        [`rounded`]: this.rounded,
        [`shadow`]: this.shadow,
        [this.flagMargin]: true
      };
    },

    flagIconCountry() {
      let country = this.country.toLowerCase();
      country = country === 'ad' ? 'andorra' : country;
      return `f-${country}`;
    },

    flagMargin() {
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
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.country ? _c('span', {
    class: _vm.flagIconClass
  }) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-6d355e59_0", {
    source: ".small-flag[data-v-6d355e59]{transform:scale(.25);-ms-transform:scale(.25);-webkit-transform:scale(.25);-moz-transform:scale(.25)}.normal-flag[data-v-6d355e59]{transform:scale(.5);-ms-transform:scale(.5);-webkit-transform:scale(.5);-moz-transform:scale(.5)}.big-flag[data-v-6d355e59]{margin:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-6d355e59";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = Vue => {
    Vue.component('CountryFlag', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
