"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[706868],{603905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},620027:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});a(667294);var n=a(603905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"How to quickly set up Backstage",author:"Marcus Eide, Spotify",authorURL:"https://github.com/marcuseide",authorImageURL:"https://secure.gravatar.com/avatar/20223f1e03673c7c1e6282fbebaf6942"},s=void 0,p={permalink:"/blog/2020/04/30/how-to-quickly-set-up-backstage",source:"@site/blog/2020-04-30-how-to-quickly-set-up-backstage.md",title:"How to quickly set up Backstage",description:"We wanted to make getting started with Backstage as easy as possible. Even though Backstage is still in the early phases of its development, we believe it is important for our users to get a feel for what Backstage really is.",date:"2020-04-30T00:00:00.000Z",formattedDate:"April 30, 2020",tags:[],readingTime:4.36,hasTruncateMarker:!0,authors:[{name:"Marcus Eide, Spotify",url:"https://github.com/marcuseide",imageURL:"https://secure.gravatar.com/avatar/20223f1e03673c7c1e6282fbebaf6942"}],frontMatter:{title:"How to quickly set up Backstage",author:"Marcus Eide, Spotify",authorURL:"https://github.com/marcuseide",authorImageURL:"https://secure.gravatar.com/avatar/20223f1e03673c7c1e6282fbebaf6942"},prevItem:{title:"Weaveworks\u2019 COVID-19 app uses Backstage UI",permalink:"/blog/2020/05/14/weaveworks-covid-19-app-uses-backstage-ui"},nextItem:{title:"Introducing Lighthouse for Backstage",permalink:"/blog/2020/04/06/lighthouse-plugin"}},u={authorsImageUrls:[void 0]},c=[{value:"What is a Backstage app?",id:"what-is-a-backstage-app",level:2},{value:"A personalized platform",id:"a-personalized-platform",level:2},{value:"How do I create an app?",id:"how-do-i-create-an-app",level:2},{value:"What do I get? (Let&#39;s get technical...)",id:"what-do-i-get-lets-get-technical",level:2},{value:"1. Lerna setup to manage multi-packages",id:"1-lerna-setup-to-manage-multi-packages",level:3},{value:"2. Fast builds",id:"2-fast-builds",level:3},{value:"3. Full TypeScript support",id:"3-full-typescript-support",level:3},{value:"4. Tests and coverage out of the box",id:"4-tests-and-coverage-out-of-the-box",level:3},{value:"Extend the app with plugins",id:"extend-the-app-with-plugins",level:2},{value:"Using a public plugin",id:"using-a-public-plugin",level:3},{value:"Creating an internal plugin",id:"creating-an-internal-plugin",level:3},{value:"Sharing is caring \ud83e\udd17",id:"sharing-is-caring-",level:3},{value:"Ready to get started?",id:"ready-to-get-started",level:2}],g={toc:c};function d(e){var{components:t}=e,l=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},g,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We wanted to make getting started with Backstage as easy as possible. Even though Backstage is still in the early phases of its development, we believe it is important for our users to get a feel for what Backstage really is."),(0,n.kt)("p",null,"We want users to be able to create their own version of Backstage quickly and easily, so that they can take advantage of all the infrastructure that we\u2019ve built into it \u2014 and start exploring."),(0,n.kt)("p",null,"In this blog post we\u2019ll look at what a Backstage app is and how to create one using our ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@backstage/cli"},"CLI"),"."),(0,n.kt)("h2",{id:"what-is-a-backstage-app"},"What is a Backstage app?"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(938259).Z,width:"2032",height:"1096"})),(0,n.kt)("p",null,"A Backstage app is a modern monorepo web project that is built using Backstage packages. It includes all the configuration and architecture you need to run Backstage so that you don\u2019t have to worry about setting everything up by yourself."),(0,n.kt)("p",null,"More specifically, a Backstage app includes the core packages and APIs that provide base functionality to the app. The actual UX is provided by plugins. As an example, when you first load the ",(0,n.kt)("inlineCode",{parentName:"p"},"/")," page of the app, the content is provided by the ",(0,n.kt)("inlineCode",{parentName:"p"},"welcome")," plugin."),(0,n.kt)("p",null,"Plugins are the essential building blocks of Backstage and extend the platform by providing additional features and functionality. Read more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started"},"Backstage plugins")," on GitHub."),(0,n.kt)("h2",{id:"a-personalized-platform"},"A personalized platform"),(0,n.kt)("p",null,"When you create a Backstage ",(0,n.kt)("em",{parentName:"p"},"app"),", you are creating your own installation of Backstage, an application that is built on top of the Backstage ",(0,n.kt)("em",{parentName:"p"},"platform"),"."),(0,n.kt)("p",null,"You get to take full advantage of a platform that we at Spotify have been using internally for years. But you also get to make it your own \u2014 starting with its name. You can rename the Backstage app anything you want, so that you can call it something that best fits your organization. Be creative!"),(0,n.kt)("h2",{id:"how-do-i-create-an-app"},"How do I create an app?"),(0,n.kt)("p",null,"Just run the backstage-cli:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npx @backstage/create-app\n")),(0,n.kt)("p",null,"Name your app, and we will create everything you need:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(908124).Z,width:"817",height:"1072"})),(0,n.kt)("p",null,"The only thing you need to do is to start the app:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-app\nyarn dev\n")),(0,n.kt)("p",null,"And you are good to go! \ud83d\udc4d"),(0,n.kt)("p",null,"Read the full documentation on how to ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/create-an-app"},"create an app")," on GitHub."),(0,n.kt)("h2",{id:"what-do-i-get-lets-get-technical"},"What do I get? (Let's get technical...)"),(0,n.kt)("p",null,"We\u2019ve been using Backstage internally for years, and we\u2019ve spent a lot of time adding to and tweaking the infrastructure so that it fits our needs. After all that testing and trial and error, we think it will fit your needs, too!"),(0,n.kt)("h3",{id:"1-lerna-setup-to-manage-multi-packages"},"1. Lerna setup to manage multi-packages"),(0,n.kt)("p",null,"The monorepo and its packages are managed by ",(0,n.kt)("a",{parentName:"p",href:"https://lerna.js.org/"},"Lerna"),". It lets you work with individual packages in a controlled way."),(0,n.kt)("h3",{id:"2-fast-builds"},"2. Fast builds"),(0,n.kt)("p",null,"Behind the scenes we use ",(0,n.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"Rollup")," to build the modules."),(0,n.kt)("p",null,"Each package is built individually. With the ",(0,n.kt)("inlineCode",{parentName:"p"},"--watch")," flag you will be able to detect changes per package and therefore speed up the local development process."),(0,n.kt)("p",null,"To further speed things up, we have also included our own caching system to avoid rebuilding unchanged packages."),(0,n.kt)("p",null,"Our hope is that there will be thousands of Backstage plugins in the future, so we need a fast and stable build process."),(0,n.kt)("h3",{id:"3-full-typescript-support"},"3. Full TypeScript support"),(0,n.kt)("p",null,"Most of the codebase is written in ",(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", and we aim for all of the core packages to be in TypeScript in the future."),(0,n.kt)("p",null,"All the knobs and handles needed for a stable and functioning TypeScript project are included."),(0,n.kt)("p",null,"Take a look at ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/cli/config/tsconfig.json")," for more details."),(0,n.kt)("h3",{id:"4-tests-and-coverage-out-of-the-box"},"4. Tests and coverage out of the box"),(0,n.kt)("p",null,"We include testing, linting, and end-to-end tests for your convenience."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn lint:all\nyarn test:all\nyarn test:e2e\n")),(0,n.kt)("h2",{id:"extend-the-app-with-plugins"},"Extend the app with plugins"),(0,n.kt)("p",null,"At Spotify, the main factor behind Backstage\u2019s success has been our large and diverse collection of plugins \u2014 the result of contributions from various teams over the years. Internally, we have more than a hundred different plugins."),(0,n.kt)("p",null,"There are two ways to add plugins to your Backstage app: use a publicly available plugin or create your own."),(0,n.kt)("h3",{id:"using-a-public-plugin"},"Using a public plugin"),(0,n.kt)("p",null,"We provide a collection of public Backstage plugins (look for packages with the ",(0,n.kt)("inlineCode",{parentName:"p"},"plugin-")," prefix under the ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage")," namespace on ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," that you can start using immediately."),(0,n.kt)("p",null,"Install in your app\u2019s package folder (",(0,n.kt)("inlineCode",{parentName:"p"},"<root>/packages/app"),") with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# From your Backstage root directory\nyarn add --cwd packages/app @backstage/plugin-<plugin-name>\n")),(0,n.kt)("p",null,"After that, you inject the plugin into the application where you want it to be exposed. Please read the documentation for the specific plugin you are installing for more information."),(0,n.kt)("h3",{id:"creating-an-internal-plugin"},"Creating an internal plugin"),(0,n.kt)("p",null,"We also know that each organization has different needs and will create their own plugins for internal purposes. To create an internal plugin, you can use our CLI again."),(0,n.kt)("p",null,"In the root of your app directory (",(0,n.kt)("inlineCode",{parentName:"p"},"<root>"),") run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create-plugin\n")),(0,n.kt)("p",null,"This command will create a new plugin in ",(0,n.kt)("inlineCode",{parentName:"p"},"<root>/plugins/")," and register it to your app automatically."),(0,n.kt)("h3",{id:"sharing-is-caring-"},"Sharing is caring \ud83e\udd17"),(0,n.kt)("p",null,"If you are developing a plugin that might be useful for others, consider releasing it publicly. A large, diverse ecosystem of Backstage plugins benefits the whole community"),(0,n.kt)("h2",{id:"ready-to-get-started"},"Ready to get started?"),(0,n.kt)("p",null,"Head over to GitHub and check out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage"},"project")," or download our ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@backstage/cli"},"CLI"),". If you have more questions, join us on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/backstage-687207715902193673"},"Discord")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/new/choose"},"create an issue"),"."))}d.isMDXComponent=!0},908124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-app-db506cb961f560f1a9a0aeec50faffa8.png"},938259:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/welcome-5fba87f712b87b93cd6f10c1ce6abb88.png"}}]);