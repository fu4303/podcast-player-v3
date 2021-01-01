(this["webpackJsonppodcast-player-v2"]=this["webpackJsonppodcast-player-v2"]||[]).push([[9],{96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=n(18),a=n(44);function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,e);var t,n,i,u=s(y);function y(){var e;l(this,y);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(d(e=u.call.apply(u,[this].concat(n))),"callPlayer",o.callPlayer),h(d(e),"mute",(function(){e.setVolume(0)})),h(d(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),h(d(e),"ref",(function(t){e.container=t})),e}return t=y,(n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,n=this.props,r=n.playing,i=n.config,u=n.onError,l=n.onDuration,p=e&&e.match(a.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,o.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((function(e){t.container&&(e.api.addReadyListener((function(e,n){t.player=n,t.player.on("ready",t.props.onReady),t.player.on("play",t.props.onPlay),t.player.on("pause",t.props.onPause),t.player.on("seek",t.props.onSeek),t.player.on("playerComplete",t.props.onEnded)}),p),e.api.renderPlayer(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({uuid:p,container:t.container,autoplay:r?1:0},i.options)),e.api.getPlayerMetadata(p).then((function(e){t.duration=e.length_in_seconds,l(e.length_in_seconds)})))}),u)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){window.VidyardV4.api.destroyPlayer(this.player)}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackSpeed",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.callPlayer("currentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return r.default.createElement("div",{style:e},r.default.createElement("div",{ref:this.ref}))}}])&&p(t.prototype,n),i&&p(t,i),y}(r.Component);t.default=v,h(v,"displayName","Vidyard"),h(v,"canPlay",a.canPlay.vidyard)}}]);
//# sourceMappingURL=reactPlayerVidyard.26d67fa7.chunk.js.map