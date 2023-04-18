/*! For license information please see 30fad491.b6082e49.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[582400],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},542448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(827378);var r=n(603905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"migrating-from-v1beta2-to-v1beta3",title:"Migrating to v1beta3 templates",description:"How to migrate your existing templates to beta3 syntax"},l="What's new?",p={unversionedId:"features/software-templates/migrating-from-v1beta2-to-v1beta3",id:"features/software-templates/migrating-from-v1beta2-to-v1beta3",title:"Migrating to v1beta3 templates",description:"How to migrate your existing templates to beta3 syntax",source:"@site/../docs/features/software-templates/migrating-from-v1beta2-to-v1beta3.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/migrating-from-v1beta2-to-v1beta3",permalink:"/docs/features/software-templates/migrating-from-v1beta2-to-v1beta3",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/migrating-from-v1beta2-to-v1beta3.md",tags:[],version:"current",frontMatter:{id:"migrating-from-v1beta2-to-v1beta3",title:"Migrating to v1beta3 templates",description:"How to migrate your existing templates to beta3 syntax"},sidebar:"docs",previous:{title:"Experimental: Testing out the alpha Scaffolder plugin",permalink:"/docs/features/software-templates/testing-scaffolder-alpha"},next:{title:"Overview",permalink:"/docs/features/search/"}},u={},c=[{value:"Add the Processor to the <code>plugin-catalog-backend</code>",id:"add-the-processor-to-the-plugin-catalog-backend",level:2},{value:"<code>backstage.io/v1beta2</code> -&gt; <code>scaffolder.backstage.io/v1beta3</code>",id:"backstageiov1beta2---scaffolderbackstageiov1beta3",level:2},{value:"<code>${{ }}</code> instead of <code>&quot;{{ }}&quot;</code>",id:"--instead-of--",level:2},{value:"No more <code>eq</code> or <code>not</code> helpers",id:"no-more-eq-or-not-helpers",level:2},{value:"No more <code>json</code> helper",id:"no-more-json-helper",level:2},{value:"<code>parseRepoUrl</code> is now a <code>filter</code>",id:"parserepourl-is-now-a-filter",level:2},{value:"Links should be used instead of named outputs",id:"links-should-be-used-instead-of-named-outputs",level:2},{value:"Watch out for <code>dash-case</code>",id:"watch-out-for-dash-case",level:2},{value:"Summary",id:"summary",level:3}],d={toc:c};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"whats-new"},"What's new?"),(0,r.kt)("p",null,"Well then, here we are! \ud83d\ude80"),(0,r.kt)("p",null,"Backstage has had many forms of templating languages throughout different\nplugins and different systems. We've had ",(0,r.kt)("inlineCode",{parentName:"p"},"cookiecutter")," syntax in templates, and\nwe also had ",(0,r.kt)("inlineCode",{parentName:"p"},"handlebars")," templating in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kind: Template"),". Then we wanted to\nremove the additional dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"cookiecutter")," for Software Templates out of\nthe box, so we introduced ",(0,r.kt)("inlineCode",{parentName:"p"},"nunjucks")," as an alternative in ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch:template"),"\naction which is based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"jinja2")," syntax so they're pretty similar. In an\neffort to reduce confusion and unify on to one templating language, we're\nofficially deprecating support for ",(0,r.kt)("inlineCode",{parentName:"p"},"handlebars")," templating in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"kind: Template")," entities with ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion")," ",(0,r.kt)("inlineCode",{parentName:"p"},"scaffolder.backstage.io/v1beta3"),"\nand moving to using ",(0,r.kt)("inlineCode",{parentName:"p"},"nunjucks")," instead."),(0,r.kt)("p",null,"This provides us a lot of built in ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," (",(0,r.kt)("inlineCode",{parentName:"p"},"handlebars")," helpers), that as\nTemplate authors will give you much more flexibility out of the box, and also\nopen up sharing of filters in the Entity and the actual ",(0,r.kt)("inlineCode",{parentName:"p"},"skeleton")," too, and\nremoving the slight differences between the two languages."),(0,r.kt)("p",null,"We've also removed a lot of the built in helpers that we shipped with\n",(0,r.kt)("inlineCode",{parentName:"p"},"handlebars"),", as they're now supported as first class citizens by either\n",(0,r.kt)("inlineCode",{parentName:"p"},"nunjucks")," or the new ",(0,r.kt)("inlineCode",{parentName:"p"},"scaffolder")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"scaffolder.backstage.io/v1beta3"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion")),(0,r.kt)("p",null,"The migration path is pretty simple, and we've removed some of the pain points\nfrom writing the ",(0,r.kt)("inlineCode",{parentName:"p"},"handlebars")," templates too. Let's go through what's new and how\nto upgrade."),(0,r.kt)("h2",{id:"add-the-processor-to-the-plugin-catalog-backend"},"Add the Processor to the ",(0,r.kt)("inlineCode",{parentName:"h2"},"plugin-catalog-backend")),(0,r.kt)("p",null,"An important change is to add the required processor to your ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/catalog.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',title:'"packages/backend/src/plugins/catalog.ts"'},"/* highlight-add-next-line */\nimport { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-next-line */\n  builder.addProcessor(new ScaffolderEntitiesProcessor());\n  const { processingEngine, router } = await builder.build();\n\n  // ..\n}\n")),(0,r.kt)("h2",{id:"backstageiov1beta2---scaffolderbackstageiov1beta3"},(0,r.kt)("inlineCode",{parentName:"h2"},"backstage.io/v1beta2")," -> ",(0,r.kt)("inlineCode",{parentName:"h2"},"scaffolder.backstage.io/v1beta3")),(0,r.kt)("p",null,"The most important change is that you'll need to switch over the ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion")," in\nyour templates to the new one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  kind: Template\n  # highlight-remove-next-line\n  apiVersion: backstage.io/v1beta2\n  # highlight-add-next-line\n  apiVersion: scaffolder.backstage.io/v1beta3\n")),(0,r.kt)("h2",{id:"--instead-of--"},(0,r.kt)("inlineCode",{parentName:"h2"},"${{ }}")," instead of ",(0,r.kt)("inlineCode",{parentName:"h2"},'"{{ }}"')),(0,r.kt)("p",null,"One really big readability issue and cause for confusion was the fact that with\n",(0,r.kt)("inlineCode",{parentName:"p"},"handlebars")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," you always had to wrap your templating strings in quotes\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," so that it didn't try to parse it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," object and fail. This\nwas pretty annoying, as it also meant that all things look like strings. Now\nthat's no longer the case, you can now remove the ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," and take advantage of\nwriting nice ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," files that just work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  steps:\n      input:\n        allowedHosts: ['github.com']\n        # highlight-remove-next-line\n        description: 'This is {{ parameters.name }}'\n        # highlight-add-next-line\n        description: This is ${{ parameters.name }}\n        # highlight-remove-next-line\n        repoUrl: '{{ parameters.repoUrl }}'\n        # highlight-add-next-line\n        repoUrl: ${{ parameters.repoUrl }}\n")),(0,r.kt)("h2",{id:"no-more-eq-or-not-helpers"},"No more ",(0,r.kt)("inlineCode",{parentName:"h2"},"eq")," or ",(0,r.kt)("inlineCode",{parentName:"h2"},"not")," helpers"),(0,r.kt)("p",null,"These helpers are no longer needed with the more expressive ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," that\n",(0,r.kt)("inlineCode",{parentName:"p"},"nunjucks")," provides. You can simply use the built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"nunjucks")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jinja2"),"\nstyle operators."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  steps:\n      input:\n        # highlight-remove-next-line\n        if: \'{{ eq parameters.value "backstage" }}\'\n        # highlight-add-next-line\n        if: ${{ parameters.value === "backstage" }}\n')),(0,r.kt)("p",null,"And then for the ",(0,r.kt)("inlineCode",{parentName:"p"},"not")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  steps:\n      input:\n        # highlight-remove-next-line\n        if: \'{{ not parameters.value "backstage" }}\'\n        # highlight-add-next-line\n        if: ${{ parameters.value !== "backstage" }}\n')),(0,r.kt)("p",null,"Much better right? \u2728"),(0,r.kt)("h2",{id:"no-more-json-helper"},"No more ",(0,r.kt)("inlineCode",{parentName:"h2"},"json")," helper"),(0,r.kt)("p",null,"This helper is no longer needed, as we've added support for complex values and\nsupporting the additional primitive values now rather than everything being a\n",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". This means that now that you can pass around ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," and it\nshould all work as expected and keep the type that has been declared in the\ninput schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  parameters:\n    test:\n      type: number\n      name: Test Number\n    address:\n      type: object\n      required:\n        - line1\n      properties:\n        line1:\n          type: string\n          name: Line 1\n        line2:\n          type: string\n          name: Line 2\n\n  steps:\n    - id: test step\n      action: run:something\n      input:\n        # highlight-remove-next-line\n        address: '{{ json parameters.address }}'\n        # highlight-add-next-line\n        address: ${{ parameters.address }}\n        # highlight-remove-next-line\n        test: '{{ parameters.test }}'\n        # highlight-add-next-line\n        test: ${{ parameters.test }} # this will now make sure that the type of test is a number \ud83d\ude4f\n")),(0,r.kt)("h2",{id:"parserepourl-is-now-a-filter"},(0,r.kt)("inlineCode",{parentName:"h2"},"parseRepoUrl")," is now a ",(0,r.kt)("inlineCode",{parentName:"h2"},"filter")),(0,r.kt)("p",null,"All calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"parseRepoUrl")," are now a ",(0,r.kt)("inlineCode",{parentName:"p"},"jinja2")," ",(0,r.kt)("inlineCode",{parentName:"p"},"filter"),", which means you'll need\nto update the syntax."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  steps:\n      input:\n        # highlight-remove-next-line\n        repoUrl: '{{ parseRepoUrl parameters.repoUrl }}'\n        # highlight-add-next-line\n        repoUrl: ${{ parameters.repoUrl | parseRepoUrl }}\n")),(0,r.kt)("p",null,"Now we have complex value support here too, expect that this ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," will go\naway in future versions and the ",(0,r.kt)("inlineCode",{parentName:"p"},"RepoUrlPicker")," will return an object so\n",(0,r.kt)("inlineCode",{parentName:"p"},"parameters.repoUrl")," will already be a\n",(0,r.kt)("inlineCode",{parentName:"p"},"{ host: string; owner: string; repo: string }")," \ud83d\ude80"),(0,r.kt)("h2",{id:"links-should-be-used-instead-of-named-outputs"},"Links should be used instead of named outputs"),(0,r.kt)("p",null,"Previously, it was possible to provide links to the frontend using the named output ",(0,r.kt)("inlineCode",{parentName:"p"},"entityRef")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteUrl"),".\nThese should be moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"links")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," object instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"output:\n  # highlight-remove-start\n  remoteUrl: {{ steps['publish'].output.remoteUrl }}\n  entityRef: {{ steps['register'].output.entityRef }}\n  # highlight-remove-end\n  # highlight-add-start\n  links:\n    - title: Repository\n      url: ${{ steps['publish'].output.remoteUrl }}\n    - title: Open in catalog\n      icon: catalog\n      entityRef: ${{ steps['register'].output.entityRef }}\n      # highlight-add-end\n")),(0,r.kt)("h2",{id:"watch-out-for-dash-case"},"Watch out for ",(0,r.kt)("inlineCode",{parentName:"h2"},"dash-case")),(0,r.kt)("p",null,"The nunjucks compiler can run into issues if the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," fields in your template steps use dash characters, since these IDs translate directly to JavaScript object properties when accessed as output. One possible migration path is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase")," for your action IDs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  steps:\n    # highlight-remove-start\n    id: my-custom-action\n    ...\n\n    id: publish-pull-request\n    input:\n      repoUrl: {{ steps.my-custom-action.output.repoUrl }} # Will not recognize 'my-custom-action' as a JS property since it contains dashes!\n      # highlight-remove-end\n\n  steps:\n    # highlight-add-start\n    id: myCustomAction\n    ...\n\n    id: publishPullRequest\n    input:\n      repoUrl: ${{ steps.myCustomAction.output.repoUrl }}\n      # highlight-add-end\n")),(0,r.kt)("p",null,"Alternatively, it's possible to keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"dash-case")," syntax and use brackets for property access as you would in JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"input:\n  repoUrl: ${{ steps['my-custom-action'].output.repoUrl }}\n")),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Of course, we're always available on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/backstage-687207715902193673"},"discord")," if\nyou're stuck or something's not working as expected. You can also\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/new/choose"},"raise an issue")," with\nfeedback or bugs!"))}h.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,l=a(e),p=1;p<arguments.length;p++){for(var u in i=Object(arguments[p]))n.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var c=0;c<s.length;c++)r.call(i,s[c])&&(l[s[c]]=i[s[c]])}}return l}},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;var i=60109,s=60110,l=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;a=c("react.element"),o=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),i=c("react.provider"),s=c("react.context"),l=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),u=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function g(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var k=y.prototype=new b;k.constructor=y,r(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!N.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];o.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:v.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===r?"."+x(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),P(i,t,n,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=r+x(s=e[p],p);l+=P(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(s=e.next()).done;)l+=P(s=s.value,t,n,u=r+x(s,p++),i);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function S(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function U(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function E(){var e=T.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,n)=>{n(541535)}}]);