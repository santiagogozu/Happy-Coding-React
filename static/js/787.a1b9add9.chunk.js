"use strict";(self.webpackChunkhappycoding=self.webpackChunkhappycoding||[]).push([[787],{787:function(e,n,t){t.r(n),t.d(n,{getCLS:function(){return y},getFCP:function(){return g},getFID:function(){return C},getLCP:function(){return P},getTTFB:function(){return D}});var i,r,a,o,u=function(e,n){return{name:e,value:void 0===n?-1:n,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var t=new PerformanceObserver((function(e){return e.getEntries().map(n)}));return t.observe({type:e,buffered:!0}),t}}catch(e){}},f=function(e,n){var t=function t(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),n&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},s=function(e){addEventListener("pageshow",(function(n){n.persisted&&e(n)}),!0)},m=function(e,n,t){var i;return function(r){n.value>=0&&(r||t)&&(n.delta=n.value-(i||0),(n.delta||void 0===i)&&(i=n.value,e(n)))}},v=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},d=function(){f((function(e){var n=e.timeStamp;v=n}),!0)},l=function(){return v<0&&(v=p(),d(),s((function(){setTimeout((function(){v=p(),d()}),0)}))),{get firstHiddenTime(){return v}}},g=function(e,n){var t,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),t(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(t=m(e,r,n),o&&a(o),s((function(i){r=u("FCP"),t=m(e,r,n),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,t(!0)}))}))})))},h=!1,T=-1,y=function(e,n){h||(g((function(e){T=e.value})),h=!0);var t,i=function(n){T>-1&&e(n)},r=u("CLS",0),a=0,o=[],v=function(e){if(!e.hadRecentInput){var n=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-n.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,t())}},p=c("layout-shift",v);p&&(t=m(i,r,n),f((function(){p.takeRecords().map(v),t(!0)})),s((function(){a=0,T=-1,r=u("CLS",0),t=m(i,r,n)})))},E={passive:!0,capture:!0},w=new Date,L=function(e,n){i||(i=n,r=e,a=new Date,F(removeEventListener),S())},S=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(n){n(e)})),o=[]}},b=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){L(e,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",t,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",t,E),addEventListener("pointercancel",i,E)}(n,e):L(n,e)}},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,b,E)}))},C=function(e,n){var t,a=l(),v=u("FID"),p=function(e){e.startTime<a.firstHiddenTime&&(v.value=e.processingStart-e.startTime,v.entries.push(e),t(!0))},d=c("first-input",p);t=m(e,v,n),d&&f((function(){d.takeRecords().map(p),d.disconnect()}),!0),d&&s((function(){var a;v=u("FID"),t=m(e,v,n),o=[],r=-1,i=null,F(addEventListener),a=p,o.push(a),S()}))},k={},P=function(e,n){var t,i=l(),r=u("LCP"),a=function(e){var n=e.startTime;n<i.firstHiddenTime&&(r.value=n,r.entries.push(e),t())},o=c("largest-contentful-paint",a);if(o){t=m(e,r,n);var v=function(){k[r.id]||(o.takeRecords().map(a),o.disconnect(),k[r.id]=!0,t(!0))};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),f(v,!0),s((function(i){r=u("LCP"),t=m(e,r,n),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,k[r.id]=!0,t(!0)}))}))}))}},D=function(e){var n,t=u("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,n={entryType:"navigation",startTime:0};for(var t in e)"navigationStart"!==t&&"toJSON"!==t&&(n[t]=Math.max(e[t]-e.navigationStart,0));return n}();if(t.value=t.delta=n.responseStart,t.value<0||t.value>performance.now())return;t.entries=[n],e(t)}catch(e){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("load",(function(){return setTimeout(n,0)}))}}}]);
//# sourceMappingURL=787.a1b9add9.chunk.js.map