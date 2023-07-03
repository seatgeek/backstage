/*! For license information please see 705d9035.69ef2efc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[513054],{59898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>u,metadata:()=>c,toc:()=>a});var n=r(824246),o=r(511151);const u={id:"plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",title:"ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY",description:"API reference for ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY"},i=void 0,c={unversionedId:"reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",id:"reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",title:"ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY",description:"API reference for ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY",source:"@site/../docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",permalink:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",title:"ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY",description:"API reference for ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY"}},s={},a=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-common",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes-common"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",children:(0,n.jsx)(t.code,{children:"ANNOTATION\\_KUBERNETES\\_SKIP\\_TLS\\_VERIFY"})})]}),"\n",(0,n.jsx)(t.p,{children:"Annotation for specifying boolean value for skip tls verify."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY = "kubernetes.io/skip-tls-verify"\n'})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var u,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var a in u=Object(arguments[s]))r.call(u,a)&&(c[a]=u[a]);if(t){i=t(u);for(var f=0;f<i.length;f++)n.call(u,i[f])&&(c[i[f]]=u[i[f]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),t.Fragment=u("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,u={},a=null,f=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:f,props:u,_owner:i.current}}t.jsx=a,t.jsxs=a},541535:(e,t,r)=>{var n=r(862525),o=60103,u=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,s=60112;t.Suspense=60113;var a=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),u=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),i=l("react.provider"),c=l("react.context"),s=l("react.forward_ref"),t.Suspense=l("react.suspense"),a=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function h(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(_(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var b=v.prototype=new h;b.constructor=v,n(b,m.prototype),b.isPureReactComponent=!0;var k={current:null},g=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,u={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)g.call(t,n)&&!E.hasOwnProperty(n)&&(u[n]=t[n]);var s=arguments.length-2;if(1===s)u.children=r;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];u.children=a}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===u[n]&&(u[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:c,props:u,_owner:k.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case u:s=!0}}if(s)return i=i(s=e),e=""===n?"."+N(s,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),R(i,t,r,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=n+N(c=e[a],a);s+=R(c,t,r,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(c=e.next()).done;)s+=R(c=c.value,t,r,f=n+N(c,a++),i);else if("object"===c)throw t=""+e,Error(_(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function T(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var w={current:null};function P(){var e=w.current;if(null===e)throw Error(_(321));return e}var x={ReactCurrentDispatcher:w,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(_(143));return e}},t.Component=m,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x,t.cloneElement=function(e,t,r){if(null==e)throw Error(_(267,e));var u=n({},e.props),i=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)g.call(t,f)&&!E.hasOwnProperty(f)&&(u[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)u.children=r;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];u.children=a}return{$$typeof:o,type:e.type,key:i,ref:c,props:u,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:a,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>u});var n=r(667294);const o=n.createContext({});function u(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:u(e),n.createElement(o.Provider,{value:c},t)}}}]);