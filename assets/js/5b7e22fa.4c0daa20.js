/*! For license information please see 5b7e22fa.4c0daa20.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[890428],{436394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=r(824246),o=r(511151);const s={id:"plugin-kubernetes.kubernetesapi.getcustomobjectsbyentity",title:"KubernetesApi.getCustomObjectsByEntity()",description:"API reference for KubernetesApi.getCustomObjectsByEntity()"},u=void 0,c={unversionedId:"reference/plugin-kubernetes.kubernetesapi.getcustomobjectsbyentity",id:"reference/plugin-kubernetes.kubernetesapi.getcustomobjectsbyentity",title:"KubernetesApi.getCustomObjectsByEntity()",description:"API reference for KubernetesApi.getCustomObjectsByEntity()",source:"@site/../docs/reference/plugin-kubernetes.kubernetesapi.getcustomobjectsbyentity.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes.kubernetesapi.getcustomobjectsbyentity",permalink:"/docs/reference/plugin-kubernetes.kubernetesapi.getcustomobjectsbyentity",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes.kubernetesapi.getcustomobjectsbyentity.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes.kubernetesapi.getcustomobjectsbyentity",title:"KubernetesApi.getCustomObjectsByEntity()",description:"API reference for KubernetesApi.getCustomObjectsByEntity()"}},i={},a=[{value:"Parameters",id:"parameters",level:2}];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes.kubernetesapi",children:(0,n.jsx)(t.code,{children:"KubernetesApi"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes.kubernetesapi.getcustomobjectsbyentity",children:(0,n.jsx)(t.code,{children:"getCustomObjectsByEntity"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"getCustomObjectsByEntity(request: CustomObjectsByEntityRequest): Promise<ObjectsByEntityResponse>;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"request"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-common.customobjectsbyentityrequest",children:"CustomObjectsByEntityRequest"})}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-common.objectsbyentityresponse",children:"ObjectsByEntityResponse"}),">"]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,u,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var a in s=Object(arguments[i]))r.call(s,a)&&(c[a]=s[a]);if(t){u=t(s);for(var f=0;f<u.length;f++)n.call(s,u[f])&&(c[u[f]]=s[u[f]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,f=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:f,props:s,_owner:u.current}}t.jsx=a,t.jsxs=a},541535:(e,t,r)=>{var n=r(862525),o=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,c=60110,i=60112;t.Suspense=60113;var a=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),s=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),u=l("react.provider"),c=l("react.context"),i=l("react.forward_ref"),t.Suspense=l("react.suspense"),a=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}function m(){}function j(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var g=j.prototype=new m;g.constructor=j,n(g,h.prototype),g.isPureReactComponent=!0;var v={current:null},_=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,s={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)_.call(t,n)&&!k.hasOwnProperty(n)&&(s[n]=t[n]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var a=Array(i),f=0;f<i;f++)a[f]=arguments[f+2];s.children=a}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===s[n]&&(s[n]=i[n]);return{$$typeof:o,type:e,key:u,ref:c,props:s,_owner:v.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function w(e,t,r,n,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case s:i=!0}}if(i)return u=u(i=e),e=""===n?"."+C(i,0):n,Array.isArray(u)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),w(u,t,r,"",(function(e){return e}))):null!=u&&(x(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),t.push(u)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=n+C(c=e[a],a);i+=w(c,t,r,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(c=e.next()).done;)i+=w(c=c.value,t,r,f=n+C(c,a++),u);else if("object"===c)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function S(e,t,r){if(null==e)return e;var n=[],o=0;return w(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(y(321));return e}var A={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:S,forEach:function(e,t,r){S(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(y(143));return e}},t.Component=h,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var s=n({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=v.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)_.call(t,f)&&!k.hasOwnProperty(f)&&(s[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)s.children=r;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];s.children=a}return{$$typeof:o,type:e.type,key:u,ref:c,props:s,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:a,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>s});var n=r(667294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||u:s(e),n.createElement(o.Provider,{value:c},t)}}}]);