(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"08cd":function(e,t,n){"use strict";n("0d56")},"0d56":function(e,t,n){},"2db1":function(e,t,n){},3325:function(e,t,n){"use strict";n("d345")},"49f8":function(e,t,n){var r={"./en.json":"edd4","./hy.json":"dfc6","./ru.json":"7704"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="49f8"},"5a13":function(e,t,n){},6080:function(e,t,n){"use strict";var r=n("7c31"),a=n.n(r);t["default"]=a.a},"71cc":function(e,t,n){"use strict";n("e682")},7704:function(e){e.exports=JSON.parse("{}")},"7c31":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"week":"week | weeks"},"hy":{"week":"շաբաթ"},"ru":{"week":"недель | неделя | недели | недель"}}'),delete e.options._Ctor}},"85ec":function(e,t,n){},9868:function(e,t,n){"use strict";n("5a13")},adf6:function(e,t,n){"use strict";n("2db1")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],c=n("d4ec"),i=n("262e"),u=n("2caf"),s=n("60a3"),f=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(s["c"]),d=f,b=(n("034f"),n("2877")),l=Object(b["a"])(d,a,o,!1,null,null,null),p=l.exports,O=n("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4160"),n("d3b7"),n("ac1f"),n("466d"),n("159b"),n("ddb0");var j=n("a925");function y(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var a=r[1];t[a]=e(n)}})),t}r["a"].use(j["a"]);var v=new j["a"]({locale:"en",fallbackLocale:"ru",messages:y(),pluralizationRules:{ru:function(e,t){if(0===e)return 0;var n=e>10&&e<20,r=e%10===1;return t<4?!n&&r?1:2:!n&&r?1:!n&&e%10>=2&&e%10<=4||t<4?2:3}}}),g=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("WordLineDembel",{attrs:{start:new Date("July 30, 2019"),end:new Date("July 30, 2021")}})],1)},m=[],w=n("9ab4"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"layout"}},[n("WordLineDateRange",{attrs:{start:e.start,end:e.end}}),n("WordLineWeeksBetween",{attrs:{start:e.start,end:e.end}}),n("WordLineProgress",{attrs:{start:e.start,end:e.end}})],1)},k=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("WordLineText",{attrs:{text:this.percentText}})},D=[],L=(n("a9e3"),n("b680"),n("bee2")),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{id:"wlt-root"}},[e.disableFrame?e._e():n("span",{attrs:{id:"wlt-frame"}},[e._v(e._s(e.dummyText))]),n("span",{attrs:{id:"wlt-line"}},[e._v(e._s(e.text))]),e.disableFrame?e._e():n("span",{attrs:{id:"wlt-silhouette"}},[e._v(e._s(e.dummyText))]),e.disableTube?e._e():n("span",{attrs:{id:"wlt-tube"}})])},W=[],E=(n("38cf"),n("98db"),n("2fe1")),A=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(L["a"])(n,[{key:"dummyText",get:function(){var e;return"1".repeat((null===(e=this.text)||void 0===e?void 0:e.length)||0)}}]),n}(s["c"]);Object(w["a"])([Object(s["b"])(),Object(w["b"])("design:type",String)],A.prototype,"text",void 0),Object(w["a"])([Object(s["b"])({default:!1}),Object(w["b"])("design:type",Boolean)],A.prototype,"disableTube",void 0),Object(w["a"])([Object(s["b"])({default:!1}),Object(w["b"])("design:type",Boolean)],A.prototype,"disableFrame",void 0),A=Object(w["a"])([E["b"]],A);var F,S,N=A,P=N,$=(n("adf6"),n("9868"),Object(b["a"])(P,T,W,!1,null,"473badac",null)),R=$.exports,q=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.currentDate=new Date,e.animationTimerId=0,e}return Object(L["a"])(n,[{key:"created",value:function(){this.requestAnimationFrame()}},{key:"requestAnimationFrame",value:function(){var e=this;this.animationTimerId=window.requestAnimationFrame((function(){e.currentDate=new Date,e.requestAnimationFrame()}))}},{key:"destroyed",value:function(){window.cancelAnimationFrame(this.animationTimerId)}},{key:"percent",get:function(){return(+this.currentDate-+this.start)/(+this.end-+this.start)/.01}},{key:"percentText",get:function(){return"".concat(this.percent.toFixed(this.fractionDigits),"%")}}]),n}(s["c"]);Object(w["a"])([Object(s["b"])(),Object(w["b"])("design:type","function"===typeof(F="undefined"!==typeof Date&&Date)?F:Object)],q.prototype,"start",void 0),Object(w["a"])([Object(s["b"])(),Object(w["b"])("design:type","function"===typeof(S="undefined"!==typeof Date&&Date)?S:Object)],q.prototype,"end",void 0),Object(w["a"])([Object(s["b"])({default:10}),Object(w["b"])("design:type",Number)],q.prototype,"fractionDigits",void 0),q=Object(w["a"])([Object(E["b"])({components:{WordLineText:R}})],q);var B,I,J=q,G=J,M=Object(b["a"])(G,_,D,!1,null,null,null),U=M.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("WordLineText",{attrs:{text:e.text}})},z=[],H=(n("99af"),n("b9b9")),Z=n.n(H),K=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(L["a"])(n,[{key:"text",get:function(){return"".concat(Z()(this.start,"dd.mm.yyyy")," - ").concat(Z()(this.end,"yyyy"))}}]),n}(s["c"]);Object(w["a"])([Object(s["b"])(),Object(w["b"])("design:type","function"===typeof(B="undefined"!==typeof Date&&Date)?B:Object)],K.prototype,"start",void 0),Object(w["a"])([Object(s["b"])(),Object(w["b"])("design:type","function"===typeof(I="undefined"!==typeof Date&&Date)?I:Object)],K.prototype,"end",void 0),K=Object(w["a"])([Object(E["b"])({components:{WordLineText:R}})],K);var Q,V,X=K,Y=X,ee=Object(b["a"])(Y,C,z,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{id:"root"}},[n("WordLineText",{attrs:{text:e.text}}),n("WordLineText",{attrs:{"disable-tube":e.disableWeekDecorations(),"disable-frame":e.disableWeekDecorations(),text:e.$tc("week",this.weeksBetween)}})],1)},re=[],ae=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(L["a"])(n,[{key:"disableWeekDecorations",value:function(){return"en"!==v.locale}},{key:"created",value:function(){var e=this;this.timerId=setInterval((function(){e.$forceUpdate()}),864e3)}},{key:"beforeDestroy",value:function(){clearInterval(this.timerId)}},{key:"text",get:function(){return this.weeksBetween.toFixed(2)}},{key:"weeksBetween",get:function(){return(+this.end-Math.min(+Date.now(),+this.end))/6048e5}}]),n}(s["c"]);Object(w["a"])([Object(s["b"])(),Object(w["b"])("design:type","function"===typeof(Q="undefined"!==typeof Date&&Date)?Q:Object)],ae.prototype,"start",void 0),Object(w["a"])([Object(s["b"])(),Object(w["b"])("design:type","function"===typeof(V="undefined"!==typeof Date&&Date)?V:Object)],ae.prototype,"end",void 0),ae=Object(w["a"])([Object(E["b"])({components:{WordLineText:R}})],ae);var oe=ae,ce=oe,ie=(n("08cd"),n("6080")),ue=Object(b["a"])(ce,ne,re,!1,null,"7c0b9a24",null);"function"===typeof ie["default"]&&Object(ie["default"])(ue);var se,fe,de=ue.exports,be=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(s["c"]);Object(w["a"])([Object(s["b"])(),Object(w["b"])("design:type","function"===typeof(se="undefined"!==typeof Date&&Date)?se:Object)],be.prototype,"start",void 0),Object(w["a"])([Object(s["b"])(),Object(w["b"])("design:type","function"===typeof(fe="undefined"!==typeof Date&&Date)?fe:Object)],be.prototype,"end",void 0),be=Object(w["a"])([Object(s["a"])({components:{WordLineWeeksBetween:de,WordLineProgress:U,WordLineDateRange:te}})],be);var le=be,pe=le,Oe=(n("71cc"),Object(b["a"])(pe,x,k,!1,null,"8eb2c1fe",null)),je=Oe.exports,ye=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(s["c"]);ye=Object(w["a"])([Object(s["a"])({components:{WordLineDembel:je}})],ye);var ve=ye,ge=ve,he=(n("3325"),Object(b["a"])(ge,h,m,!1,null,"02bc3924",null)),me=he.exports;r["a"].use(g["a"]);var we=[{path:"/",name:"Home",component:me}],xe=new g["a"]({mode:"history",base:"/",routes:we}),ke=xe,_e=n("2f62"),De=(n("7db0"),n("7039"),n("4d63"),n("25f0"),n("1276"),n("96cf"),n("1da1")),Le=n("edd4"),Te=n("dfc6"),We=n("7704"),Ee={en:Le,hy:Te,ru:We},Ae=n("6fc5"),Fe=Object.getOwnPropertyNames(Ee);ke.afterEach(function(){var e=Object(De["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.query.lang,!n||"string"!==typeof n){e.next=6;break}return e.next=4,Pe.dispatch("language/setLanguage",n);case 4:e.next=8;break;case 6:return e.next=8,Pe.dispatch("language/setLanguage",navigator.languages);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var Se=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(L["a"])(n,[{key:"SET_LANGUAGE",value:function(){var e=Object(De["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t||(t="en"),v.locale=t,ke.currentRoute.query.lang===t){e.next=5;break}return e.next=5,ke.push({query:{lang:t}});case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setLanguage",value:function(e){return"string"===typeof e?e:Fe.find((function(t){return e.find((function(e){return e.split(new RegExp(t,"gi")).length-1>0?t:null}))}))}}]),n}(Ae["d"]);Object(w["a"])([Ae["c"],Object(w["b"])("design:type",Function),Object(w["b"])("design:paramtypes",[Object]),Object(w["b"])("design:returntype",Promise)],Se.prototype,"SET_LANGUAGE",null),Object(w["a"])([Object(Ae["a"])({commit:"SET_LANGUAGE"}),Object(w["b"])("design:type",Function),Object(w["b"])("design:paramtypes",[Object]),Object(w["b"])("design:returntype",void 0)],Se.prototype,"setLanguage",null),Se=Object(w["a"])([Object(Ae["b"])({namespaced:!0})],Se);var Ne=Se;r["a"].use(_e["a"]);var Pe=new _e["a"].Store({modules:{language:Ne}});r["a"].config.productionTip=!1,new r["a"]({i18n:v,router:ke,store:Pe,render:function(e){return e(p)}}).$mount("#app")},d345:function(e,t,n){},dfc6:function(e){e.exports=JSON.parse("{}")},e682:function(e,t,n){},edd4:function(e){e.exports=JSON.parse("{}")}});