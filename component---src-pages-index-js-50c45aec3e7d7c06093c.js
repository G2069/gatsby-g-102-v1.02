(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{8385:function(e,t,n){var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=c||u||Function("return this")(),p=Object.prototype.toString,d=Math.max,h=Math.min,m=function(){return f.Date.now()};function y(e,t,n){var r,a,i,l,s,c,u=0,f=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=a;return r=a=void 0,u=t,l=e.apply(o,n)}function w(e){return u=e,s=setTimeout(E,t),f?b(e):l}function _(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=i}function E(){var e=m();if(_(e))return O(e);s=setTimeout(E,function(e){var n=t-(e-c);return p?h(n,i-(e-u)):n}(e))}function O(e){return s=void 0,y&&r?b(e):(r=a=void 0,l)}function C(){var e=m(),n=_(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return w(c);if(p)return s=setTimeout(E,t),b(c)}return void 0===s&&(s=setTimeout(E,t)),l}return t=g(t)||0,v(n)&&(f=!!n.leading,i=(p="maxWait"in n)?d(g(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),C.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=c=a=s=void 0},C.flush=function(){return void 0===s?l:O(m())},C}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(o);return v(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),y(e,t,{leading:r,maxWait:t,trailing:a})}},7290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=i(n(7294)),a=i(n(5907));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return r.default.createElement("input",this.props,this.props.children)}}]),t}(r.default.Component);t.default=(0,a.default)(c)},1957:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=s(n(7294)),i=s(n(7371)),l=s(n(5697));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this,t=o({},this.props);return t.parentBindings&&delete t.parentBindings,a.default.createElement("div",o({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(a.default.Component);f.propTypes={name:l.default.string,id:l.default.string},t.default=(0,i.default)(f)},5883:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(7294)),r=a(n(5907));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;i(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.render=function(){return o.default.createElement("a",r.props,r.props.children)},l(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(o.default.Component);t.default=(0,r.default)(s)},2349:function(e,t,n){"use strict";t.NY=void 0;var o=d(n(5883)),r=d(n(7290)),a=d(n(1957)),i=d(n(332)),l=d(n(8638)),s=d(n(7614)),c=d(n(1450)),u=d(n(5907)),f=d(n(7371)),p=d(n(4627));function d(e){return e&&e.__esModule?e:{default:e}}o.default,r.default,a.default,i.default,l.default,s.default,t.NY=c.default,u.default,f.default,p.default,o.default,r.default,a.default,i.default,l.default,s.default,c.default,u.default,f.default,p.default},4627:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(7294),c=(n(3935),n(1719),n(7614)),u=n(332),f=n(5697),p=n(1521),d={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number},h={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||u,f=function(t){function u(e){a(this,u);var t=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return h.call(t),t.state={active:!1},t}return l(u,t),r(u,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();c.isMounted(e)||c.mount(e,this.props.spyThrottle),this.props.hashSpy&&(p.isMounted()||p.mount(n),p.mapContainer(this.props.to,e)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in d)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,s.createElement(e,n)}}]),u}(s.Component),h=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!p.isMounted()||p.isInitialized()){var r=e.props.to,a=null,i=0,l=0,s=0;if(o.getBoundingClientRect)s=o.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(r)))return;var u=a.getBoundingClientRect();l=(i=u.top-s+t)+u.height}var f=t-e.props.offset,d=f>=Math.floor(i)&&f<Math.floor(l),h=f<Math.floor(i)||f>=Math.floor(l),m=n.getActiveLink();return h?(r===m&&n.setActiveLink(void 0),e.props.hashSpy&&p.getHash()===r&&p.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),c.updateStates()):d&&m!==r?(n.setActiveLink(r),e.props.hashSpy&&p.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),c.updateStates()):void 0}}};return f.propTypes=d,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return l(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(e){u.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return s.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(s.Component);return t.propTypes={name:f.string,id:f.string},t}};e.exports=h},1450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(l(n(1719)),l(n(9239))),a=l(n(8150)),i=l(n(8638));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return r.default[e.smooth]||r.default.defaultEasing},c=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},u=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},f=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},p=function e(t,n,o){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.delta=Math.round(r.targetPosition-r.startPosition),null===r.start&&(r.start=o),r.progress=o-r.start,r.percent=r.progress>=r.duration?1:t(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var a=e.bind(null,t,n);c.call(window,a)}else i.default.registered.end&&i.default.registered.end(r.to,r.target,r.currentPosition);else i.default.registered.end&&i.default.registered.end(r.to,r.target,r.currentPositionY)},d=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},h=function(e,t,n,o){if(t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout),a.default.subscribe((function(){t.data.cancel=!0})),d(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?u(t):f(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var r;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"==typeof(r=t.duration)?r:function(){return r})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=o;var l=s(t),h=p.bind(null,l,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),c.call(window,h)}),t.delay):(i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),c.call(window,h))}else i.default.registered.end&&i.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},m=function(e){return(e=o({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:h,getAnimationType:s,scrollToTop:function(e){h(0,m(e))},scrollToBottom:function(e){e=m(e),d(e),h(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,o=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(e),e)},scrollTo:function(e,t){h(e,m(t))},scrollMore:function(e,t){t=m(t),d(t);var n=t.horizontal?u(t):f(t);h(e+n,t)}}},8150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8139),r=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!=typeof document&&r.forEach((function(t){return(0,o.addPassiveEventListener)(document,t,e)}))}}},8139:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,n){var o=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,n,!!o&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},7371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=s(n(7294)),i=(s(n(3935)),s(n(332))),l=s(n(5697));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){i.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return t.propTypes={name:l.default.string,id:l.default.string},t}},8638:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(e,t){n.registered[e]=t},remove:function(e){n.registered[e]=null}}};t.default=n},1521:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(8139);var o,r=n(1719),a=(o=r)&&o.__esModule?o:{default:o};var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var o=this.containers[e]||document;n.scrollTo(e,{container:o})}},getHash:function(){return a.default.getHash()},changeHash:function(e,t){this.isInitialized()&&a.default.getHash()!==e&&a.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=i},5907:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=u(n(7294)),i=u(n(7614)),l=u(n(332)),s=u(n(5697)),c=u(n(1521));function u(e){return e&&e.__esModule?e:{default:e}}var f={to:s.default.string.isRequired,containerId:s.default.string,container:s.default.object,activeClass:s.default.string,spy:s.default.bool,horizontal:s.default.bool,smooth:s.default.oneOfType([s.default.bool,s.default.string]),offset:s.default.number,delay:s.default.number,isDynamic:s.default.bool,onClick:s.default.func,duration:s.default.oneOfType([s.default.number,s.default.func]),absolute:s.default.bool,onSetActive:s.default.func,onSetInactive:s.default.func,ignoreCancelEvents:s.default.bool,hashSpy:s.default.bool,saveHashHistory:s.default.bool,spyThrottle:s.default.number};t.default=function(e,t){var n=t||l.default,s=function(t){function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return u.call(t),t.state={active:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,t),r(l,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();i.default.isMounted(e)||i.default.mount(e,this.props.spyThrottle),this.props.hashSpy&&(c.default.isMounted()||c.default.mount(n),c.default.mapContainer(this.props.to,e)),i.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in f)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,a.default.createElement(e,n)}}]),l}(a.default.PureComponent),u=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,o){var r=e.getScrollSpyContainer();if(!c.default.isMounted()||c.default.isInitialized()){var a=e.props.horizontal,i=e.props.to,l=null,s=void 0,u=void 0;if(a){var f=0,p=0,d=0;if(r.getBoundingClientRect)d=r.getBoundingClientRect().left;if(!l||e.props.isDynamic){if(!(l=n.get(i)))return;var h=l.getBoundingClientRect();p=(f=h.left-d+t)+h.width}var m=t-e.props.offset;s=m>=Math.floor(f)&&m<Math.floor(p),u=m<Math.floor(f)||m>=Math.floor(p)}else{var y=0,v=0,g=0;if(r.getBoundingClientRect)g=r.getBoundingClientRect().top;if(!l||e.props.isDynamic){if(!(l=n.get(i)))return;var b=l.getBoundingClientRect();v=(y=b.top-g+o)+b.height}var w=o-e.props.offset;s=w>=Math.floor(y)&&w<Math.floor(v),u=w<Math.floor(y)||w>=Math.floor(v)}var _=n.getActiveLink();if(u){if(i===_&&n.setActiveLink(void 0),e.props.hashSpy&&c.default.getHash()===i){var E=e.props.saveHashHistory,O=void 0!==E&&E;c.default.changeHash("",O)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(i,l))}if(s&&(_!==i||!1===e.state.active)){n.setActiveLink(i);var C=e.props.saveHashHistory,x=void 0!==C&&C;e.props.hashSpy&&c.default.changeHash(i,x),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(i,l))}}}};return s.propTypes=f,s.defaultProps={offset:0},s}},7614:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(8385),a=(o=r)&&o.__esModule?o:{default:o},i=n(8139);var l={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,a.default)(e,t)}((function(t){l.scrollHandler(e)}),t);l.scrollSpyContainers.push(e),(0,i.addPassiveEventListener)(e,"scroll",n)}},isMounted:function(e){return-1!==l.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(l.scrollSpyContainers[l.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(l.currentPositionX(e),l.currentPositionY(e))}))},addStateHandler:function(e){l.spySetState.push(e)},addSpyHandler:function(e,t){var n=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(l.currentPositionX(t),l.currentPositionY(t))},updateStates:function(){l.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){l.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),l.spySetState&&l.spySetState.length&&l.spySetState.splice(l.spySetState.indexOf(e),1),document.removeEventListener("scroll",l.scrollHandler)},update:function(){return l.scrollSpyContainers.forEach((function(e){return l.scrollHandler(e)}))}};t.default=l},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=l(n(1719)),a=l(n(1450)),i=l(n(8638));function l(e){return e&&e.__esModule?e:{default:e}}var s={},c=void 0;t.default={unmount:function(){s={}},register:function(e,t){s[e]=t},unregister:function(e){delete s[e]},get:function(e){return s[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return c=e},getActiveLink:function(){return c},scrollTo:function(e,t){var n=this.get(e);if(n){var l=(t=o({},t,{absolute:!1})).containerId,s=t.container,c=void 0;c=l?document.getElementById(l):s&&s.nodeType?s:document,t.absolute=!0;var u=t.horizontal,f=r.default.scrollOffset(c,n,u)+(t.offset||0);if(!t.smooth)return i.default.registered.begin&&i.default.registered.begin(e,n),c===document?t.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):c.scrollTop=f,void(i.default.registered.end&&i.default.registered.end(e,n));a.default.animateTopScroll(f,t,e,n)}else console.warn("target Element not found")}}},9239:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},1719:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var n=e.offsetTop,o=e.offsetParent;o&&!t(o);)n+=o.offsetTop,o=o.offsetParent;return{offsetTop:n,offsetParent:o}};t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,o=n?"#"+n:"",r=window&&window.location,a=o?r.pathname+r.search+o:r.pathname+r.search;t?history.pushState(null,"",a):history.replaceState(null,"",a)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,o){if(o)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(t.offsetParent!==e){var r=n(t,(function(t){return t===e||t===document})),a=r.offsetTop;if(r.offsetParent!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var i=function(e){return e===document};return n(t,i).offsetTop-n(e,i).offsetTop}}},8665:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var o=n(7294),r=n(2165),a=n(3751),i=n(2204),l=n(9),s=n.p+"static/email-background-7ffe79cfa71d87817780cf241e2553f9.png",c=n(5444),u=function(){return o.createElement(f,null,o.createElement(p,null,o.createElement("h1",null,"Register"),o.createElement("p",null,"To receive latest news of Presale"),o.createElement("form",{action:"#"},o.createElement(d,null,o.createElement("label",{htmlFor:"email"},o.createElement("input",{type:"email",placeholder:"Enter your email",id:"email"})),o.createElement(h,null,o.createElement("button",{class:"presale-btn"},"Register",o.createElement("span",{"aria-hidden":!0},"_"),o.createElement("a",{href:"google.com"},o.createElement("span",{"aria-hidden":!0,class:"presale-btn__glitch"},"Register"))))))))},f=l.default.div.withConfig({displayName:"Email__EmailContainer",componentId:"sc-svnqyy-0"})(["background:linear-gradient( 180 deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 35%,rgba(0,0,0,0.1) 100% );background-size:cover;height:3 50px;width:100%;padding:5rem calc((100vw - 1300px) / 2);color:#fff;display:flex;justify-content:center;align-items:center;background-image:url(",");"],s),p=l.default.div.withConfig({displayName:"Email__EmailContent",componentId:"sc-svnqyy-1"})(["display:flex;flex-direction:column;align-items:center;h1{text-align:center;margin-bottom:1rem;font-size:clamp(1rem,5vw,3rem);padding:0 1rem;color:black;}p{text-align:center;font-size:clamp(1rem,2.5vw,1.5rem);padding:0 1rem;margin-bottom:2rem;color:black;}form{z-index:10;}"]),d=l.default.div.withConfig({displayName:"Email__FormWrap",componentId:"sc-svnqyy-2"})(["input{padding:1rem 1.5rem;outline:none;width:350px;height:75px;border:none;}@media screen and (max-width:768px){display:flex;flex-direction:column;padding:0 1rem;input{margin-bottom:1rem;width:100%;margin-right:0;}}"]),h=(0,l.default)(c.Link).withConfig({displayName:"Email__Button",componentId:"sc-svnqyy-3"})(['@font-face{font-family:Cyber;src:url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");font-display:swap;}.presale-btn{--primary:hsl( var(--primary-hue),85%,calc(var(--primary-lightness,50) * 1%) );--shadow-primary:hsl(var(--shadow-primary-hue),90%,50%);--primary-hue:0;--primary-lightness:50;--color:hsl(0,0%,100%);--font-size:26px;--shadow-primary-hue:180;--label-size:9px;--shadow-secondary-hue:60;--shadow-secondary:hsl(var(--shadow-secondary-hue),90%,60%);--border:4px;--shimmy-distance:5;--clip-one:polygon( 0 2%,100% 2%,100% 95%,95% 95%,95% 90%,85% 90%,85% 95%,8% 95%,0 70% );--clip-two:polygon( 0 78%,100% 78%,100% 100%,95% 100%,95% 90%,85% 90%,85% 100%,8% 100%,0 78% );--clip-three:polygon( 0 44%,100% 44%,100% 54%,95% 54%,95% 54%,85% 54%,85% 54%,8% 54%,0 54% );--clip-four:polygon( 0 0,100% 0,100% 0,95% 0,95% 0,85% 0,85% 0,8% 0,0 0 );--clip-five:polygon( 0 0,100% 0,100% 0,95% 0,95% 0,85% 0,85% 0,8% 0,0 0 );--clip-six:polygon( 0 40%,100% 40%,100% 85%,95% 85%,95% 85%,85% 85%,85% 85%,8% 85%,0 70% );--clip-seven:polygon( 0 63%,100% 63%,100% 80%,95% 80%,95% 80%,85% 80%,85% 80%,8% 80%,0 70% );font-family:"Cyber",sans-serif;color:var(--color);cursor:pointer;background:transparent;text-transform:uppercase;font-size:var(--font-size);outline:transparent;letter-spacing:2px;position:relative;font-weight:700;border:0;min-width:170px;height:75px;line-height:75px;transition:0.2s;top:4.2px;}.presale-btn:hover{--primary:hsl( var(--primary-hue),85%,calc(var(--primary-lightness,50) * 0.8%) );}.presale-btn:active{--primary:hsl( var(--primary-hue),85%,calc(var(--primary-lightness,50) * 0.6%) );}.presale-btn:after,.presale-btn:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;clip-path:var(--clip);z-index:-1;}.presale-btn:before{background:var(--shadow-primary);transform:translate(var(--border),0);}.presale-btn:after{background:var(--primary);}.presale-btn__glitch{position:absolute;top:calc(var(--border) * -1);left:calc(var(--border) * -1);right:calc(var(--border) * -1);bottom:calc(var(--border) * -1);background:var(--shadow-primary);text-shadow:2px 2px var(--shadow-primary),-2px -2px var(--shadow-secondary);clip-path:var(--clip);animation:glitch 2s infinite;display:none;}.presale-btn:hover .presale-btn__glitch{display:block;}.presale-btn__glitch:before{content:"";position:absolute;top:calc(var(--border) * 1);right:calc(var(--border) * 1);bottom:calc(var(--border) * 1);left:calc(var(--border) * 1);clip-path:var(--clip);background:var(--primary);z-index:-1;}@keyframes glitch{0%{clip-path:var(--clip-one);}2%,8%{clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance) * -1%),0);}6%{clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance) * 1%),0);}9%{clip-path:var(--clip-two);transform:translate(0,0);}10%{clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance) * 1%),0);}13%{clip-path:var(--clip-three);transform:translate(0,0);}14%,21%{clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance) * 1%),0);}25%{clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance) * 1%),0);}30%{clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance) * -1%),0);}35%,45%{clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance) * -1%));}40%{clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance) * 1%));}50%{clip-path:var(--clip-six);transform:translate(0,0);}55%{clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance) * 1%),0);}60%{clip-path:var(--clip-seven);transform:translate(0,0);}31%,61%,100%{clip-path:var(--clip-four);}}.presale-btn:nth-of-type(2){--primary-hue:260;}']),m=n(3201),y=n(2349),v=function(){return o.createElement(g,null,o.createElement(b,null,o.createElement(w,null,o.createElement(_,null,o.createElement(E,null,o.createElement(O,null),o.createElement(C,{to:"/"},"FAQ"),o.createElement(C,{to:"/"},"Staking"),o.createElement(C,{to:"/"},"Whitepaper"),o.createElement(C,{to:"/"},"Audit")))),o.createElement(x,null,o.createElement(j,null,o.createElement(S,{to:"/",onClick:function(){y.NY.scrollToTop()}},"G-102"),o.createElement(P,null,"G-102 © ",(new Date).getFullYear()," All rights reserved."),o.createElement(k,null,o.createElement(T,{href:"/",target:"_blank","arial-label":"Twitter"},o.createElement(m.fWC,null)),o.createElement(M,{href:"/",target:"_blank","arial-label":"Telegram"},o.createElement(m.Ww5,null)),o.createElement(I,{href:"/",target:"_blank","arial-label":"Discord"},o.createElement(m.j2d,null)))))))},g=l.default.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-1xqajj9-0"})(["background-color:#101522;"]),b=l.default.div.withConfig({displayName:"Footer__FooterWrap",componentId:"sc-1xqajj9-1"})(["padding:48px 24px;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:1100px;margin:0 auto;"]),w=l.default.div.withConfig({displayName:"Footer__FooterLinkContainer",componentId:"sc-1xqajj9-2"})(["display:flex;justify-content:center;@media screen and (max-width:820px){padding-top:32px;}"]),_=l.default.div.withConfig({displayName:"Footer__FooterLinkWrapper",componentId:"sc-1xqajj9-3"})(["display:flex;@media screen and (max-width:820px){padding-top:column;}"]),E=l.default.div.withConfig({displayName:"Footer__FooterLinkItems",componentId:"sc-1xqajj9-4"})(["display:flex;flex-direction:column;align-items:flex-start;margin-bottom:16px;text-align:left;width:160px;box-sizing:border-box;color:#fff;@media screen and (max-width:420px){margin:0;padding:10px;width:100%;}"]),O=l.default.h1.withConfig({displayName:"Footer__FooterLinkTitle",componentId:"sc-1xqajj9-5"})(["font-size:14px;margin-bottom:16px;"]),C=(0,l.default)(c.Link).withConfig({displayName:"Footer__FooterLink",componentId:"sc-1xqajj9-6"})(["color:#fff;text-decoration:none;margin-bottom:0.5rem;font-size:20px;&:hover{color:cyan;transition:0.3s ease-out;}"]),x=l.default.section.withConfig({displayName:"Footer__SocialMedia",componentId:"sc-1xqajj9-7"})(["max-width:1000px;width:100%;"]),j=l.default.div.withConfig({displayName:"Footer__SocialMediaWrap",componentId:"sc-1xqajj9-8"})(["display:flex;justify-content:space-between;align-items:center;max-width:1100px;margin:40px auto 0 auto;@media screen and (max-width:820px){flex-direction:column;}"]),S=(0,l.default)(c.Link).withConfig({displayName:"Footer__SocialLogo",componentId:"sc-1xqajj9-9"})(["color:#fff;justify-self:start;cursor:pointer;text-decoration:none;font-size:1.5rem;display:flex;align-items:center;margin-bottom:16px;font-weight:bold;"]),P=l.default.small.withConfig({displayName:"Footer__WebsiteRight",componentId:"sc-1xqajj9-10"})(["color:#fff;margin-bottom:16px;"]),k=l.default.div.withConfig({displayName:"Footer__SocialIcons",componentId:"sc-1xqajj9-11"})(["display:flex;justify-content:space-between;align-items:center;width:240px;"]),T=l.default.a.withConfig({displayName:"Footer__SocialIconLink1",componentId:"sc-1xqajj9-12"})(["color:#fff;font-size:24px;&:hover{color:#00acee;transition:0.3s ease-out;}"]),M=l.default.a.withConfig({displayName:"Footer__SocialIconLink2",componentId:"sc-1xqajj9-13"})(["color:#fff;font-size:24px;&:hover{color:#0088cc;transition:0.3s ease-out;}"]),I=l.default.a.withConfig({displayName:"Footer__SocialIconLink3",componentId:"sc-1xqajj9-14"})(["color:#fff;font-size:24px;&:hover{color:#7289d9;transition:0.3s ease-out;}"]),H=function(){return o.createElement(r.Z,null,o.createElement(a.Z,{title:"Home"}),o.createElement(i.Z,null),o.createElement(u,null),o.createElement(v,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-50c45aec3e7d7c06093c.js.map