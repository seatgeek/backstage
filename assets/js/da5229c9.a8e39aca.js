/*! For license information please see da5229c9.a8e39aca.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[484731],{509695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"threat-model",title:"Backstage Threat Model",description:"A document describing the threat model for Backstage."},s=void 0,i={unversionedId:"overview/threat-model",id:"overview/threat-model",title:"Backstage Threat Model",description:"A document describing the threat model for Backstage.",source:"@site/../docs/overview/threat-model.md",sourceDirName:"overview",slug:"/overview/threat-model",permalink:"/docs/overview/threat-model",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/overview/threat-model.md",tags:[],version:"current",frontMatter:{id:"threat-model",title:"Backstage Threat Model",description:"A document describing the threat model for Backstage."},sidebar:"docs",previous:{title:"Release & Versioning Policy",permalink:"/docs/overview/versioning-policy"},next:{title:"Support and community",permalink:"/docs/overview/support"}},c={},l=[{value:"Trust Model",id:"trust-model",level:2},{value:"Integrator Responsibilities",id:"integrator-responsibilities",level:2},{value:"Common Backend Configuration",id:"common-backend-configuration",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Scaffolder",id:"scaffolder",level:2},{value:"TechDocs",id:"techdocs",level:2},{value:"Proxy",id:"proxy",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",strong:"strong",code:"code",em:"em"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The threat model outlines key security considerations of Backstage for operators, developers and security researchers. This is a living document and will evolve and be expanded alongside the Backstage project as relevant."}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/security",children:"Security Policy and Advisories"})," in the Backstage GitHub repository for details on reporting security vulnerabilities and advisories on fixed security flaws."]}),"\n",(0,r.jsx)(t.h2,{id:"trust-model",children:"Trust Model"}),"\n",(0,r.jsx)(t.p,{children:"The Backstage trust model is divided into three groups with different trust levels."}),"\n",(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.strong,{children:"internal user"})," is an authenticated user that generally belongs to the organization of a particular Backstage deployment. These users are trusted to the extent that they are not expected to compromise the availability of Backstage, but they are not trusted to not compromise data confidentiality or integrity."]}),"\n",(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.strong,{children:"integrator"})," is a user responsible for configuring and maintaining an instance of Backstage. Integrators are fully trusted, since they operate the system and database and therefore have root access to the host system. Additional measures can be taken by adopters of Backstage in order to restrict or observe the access of this group, but that falls outside of the current scope of Backstage."]}),"\n",(0,r.jsx)(t.p,{children:"Another group of de facto integrators is internal and external code contributors. When installing Backstage plugins you should vet them just like any other package from an external source. While it\u2019s possible to limit the impact of for example a supply chain attack by splitting the deployment into separate services with different plugins, the Backstage project itself does not aim to prevent these kinds of attacks or in any other way sandbox or limit the access of plugins."}),"\n",(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.strong,{children:"external user"})," is a user that does not belong to the other two groups, for example a malicious actor outside of the organization. The security model of Backstage currently assumes that this group does not have any direct access to Backstage, and it is the responsibility of each adopter of Backstage to make sure this is the case."]}),"\n",(0,r.jsx)(t.h2,{id:"integrator-responsibilities",children:"Integrator Responsibilities"}),"\n",(0,r.jsx)(t.p,{children:"As an integrator of Backstage you yourself are responsible for protecting your Backstage installation from external and unauthorized access. The sign-in system in Backstage does not exist to limit access, only to inform the system of the identity of the user. There are some plugins that have more fine-grained access control through the permissions system, but the primary purpose of that system is to restrict access to resources for internal users rather than Backstage as a whole. A common and recommended way to protect a Backstage deployment from unauthorized access is to deploy it behind an authenticating proxy such as AWS\u2019s ALB, GCP\u2019s IAP, or Cloudflare Access."}),"\n",(0,r.jsx)(t.p,{children:"Other responsibilities include protecting the integrity of configuration files as it may otherwise be possible to introduce vulnerable configurations, as well as the confidentiality of configured secrets related to Backstage as these typically include authentication details to third party systems."}),"\n",(0,r.jsx)(t.p,{children:"The integrator is ultimately responsible for auditing usage of internal and external plugins as these run on the host system and have access to configuration and secrets. When installing plugins from sources like NPM, you should vet these in the same way that you would vet any other package installed from that source."}),"\n",(0,r.jsxs)(t.p,{children:["The integrator is also responsible for maintaining the resolved NPM dependencies of their Backstage project. This involves ensuring that ",(0,r.jsx)(t.code,{children:"yarn.lock"})," receives updated versions of packages that have vulnerabilities, when those fixed versions are in range of what the Backstage packages request in their respective ",(0,r.jsx)(t.code,{children:"package.json"})," files. This is commonly done by employing automated tooling such as ",(0,r.jsx)(t.a,{href:"https://dependabot.com/",children:"Dependabot"}),", ",(0,r.jsx)(t.a,{href:"https://snyk.io/",children:"Snyk"}),", and/or ",(0,r.jsx)(t.a,{href:"https://docs.renovatebot.com/",children:"Renovate"})," on your own repository. When fixed versions exist that are ",(0,r.jsx)(t.em,{children:"not"})," in range of what Backstage packages request, or when larger operations such as switching out an entire dependency for another one is required, maintainers collaborate with contributors to try to address those dependency declarations in the main project as soon as possible."]}),"\n",(0,r.jsx)(t.h2,{id:"common-backend-configuration",children:"Common Backend Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["There are many common facilities that are configured centrally and available to all Backstage backend plugins. For example there is a ",(0,r.jsx)(t.code,{children:"DatabaseManager"})," that provides access to a SQL database, ",(0,r.jsx)(t.code,{children:"TaskScheduler"})," for scheduling long-running tasks, ",(0,r.jsx)(t.code,{children:"Logger"})," as a general logging facility, and ",(0,r.jsx)(t.code,{children:"UrlReader"})," for reading content from external sources. These are all configured either directly in code, or within the ",(0,r.jsx)(t.code,{children:"backend"})," block of the static configuration. The appropriate care needs to be taken to ensure that any secrets remain confidential and no malicious configuration is injected."]}),"\n",(0,r.jsxs)(t.p,{children:["In a typical Backstage setup, there is no boundary between plugins that run on the same host. Likewise, there is no boundary between plugins that share the same database access. Any plugin that is running on a host that has access to the logical database of any other plugin should be considered to have full access to that other plugin. For example, if you deploy the ",(0,r.jsx)(t.code,{children:"auth"})," and ",(0,r.jsx)(t.code,{children:"catalog"})," plugins on separate hosts with separate configuration and credentials, the ",(0,r.jsx)(t.code,{children:"catalog"})," plugin is still considered to have full access to the ",(0,r.jsx)(t.code,{children:"auth"})," plugin if the ",(0,r.jsx)(t.code,{children:"catalog"})," plugin has access to the ",(0,r.jsx)(t.code,{children:"auth"})," plugin's logical database. The only way to create a boundary between the two plugins is to deploy them in such a way that they do not have access to each others\u2019 database. This applies to the database facility as well as any other shared resources, such as the cache."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"UrlReader"})," facility is of particular interest for a secure Backstage configuration. In particular the ",(0,r.jsx)(t.code,{children:"backend.reading.allow"})," configuration lists the hosts that you trust the backend to be able to read content from on behalf of users. It is extremely important that this list does not, for example, allow access to instance metadata endpoints of cloud providers, or other endpoints that your Backstage instance may have access to which contain sensitive information. In general it is recommended to keep the list minimal and only allow reading from required endpoints. The same concerns apply to custom implementations of the ",(0,r.jsx)(t.code,{children:"UrlReader"})," interface, if you need to implement these through code."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that the ",(0,r.jsx)(t.code,{children:"UrlReader"})," system operates with a service context and is not integrated with the Backstage permission system or other external access control mechanisms. This means users of your Backstage instance may be able to read external content which that individual should not have access to. For example, the ",(0,r.jsx)(t.code,{children:"$text"})," placeholder in a ",(0,r.jsx)(t.code,{children:"catalog-info.yaml"})," can be used to read contents from a source such as a GitHub repository that the user does not have direct access too. If this is a concern it is recommended to either disable or replace the resolvers in the catalog placeholder processor and similar features in any other plugin."]}),"\n",(0,r.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(t.p,{children:["Backstage provides authentication of users through the ",(0,r.jsx)(t.code,{children:"auth"})," plugin, which primarily acts as an authorization server for different OAuth 2.0 provider integrations. These integrations can both serve the purpose of signing users into Backstage, as well as providing delegated access to external resources, and are all subject to the common concerns of implementing secure OAuth 2.0 authorization servers. All auth provider integrations are disabled by default, and need to be enabled through configuration in order to be used. For each Backstage installation it is recommended to only enable the minimal set of providers that are in use by that instance."]}),"\n",(0,r.jsxs)(t.p,{children:["It is not within scope of the ",(0,r.jsx)(t.code,{children:"auth"})," backend to protect against unauthorized access, that is something that needs to be handled at a deployment level. See the ",(0,r.jsx)(t.a,{href:"#integrator-responsibilities",children:"Integrator Responsibilities"})," section for more information."]}),"\n",(0,r.jsxs)(t.p,{children:["In order to use an auth provider to sign in users into Backstage, it needs to be configured with an ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/auth/identity-resolver",children:"Identity resolver"}),", which is a custom callback implemented in code. The identity resolver is a sensitive part of configuring Backstage and it is important that it always resolves user identities correctly, based on information provided by the authentication provider. There are a number of built-in identity resolvers that can simplify configuration, and it is important that these all resolve users in a secure way, regardless of how they are used."]}),"\n",(0,r.jsxs)(t.p,{children:["As part of signing in with an identity resolver, a Backstage Token is issued containing the resolved user identity. The tokens are asymmetrically signed JSON Web Tokens, with the public keys available to any service that wishes to verify a token. The signing keys are rotated continuously and are unique to each installation of Backstage, meaning that Backstage Tokens are not shared across installations. The token contains claims for the user identity and ownership information, which can be used to determine what Backstage resources are owned by that user or group. It is important that this token can not be forged outside of the ",(0,r.jsx)(t.code,{children:"auth"})," plugin, with the exception of other plugins deployed in the same backend service or sharing the same database. For a high-security deployment, the ",(0,r.jsx)(t.code,{children:"auth"})," backend should therefore be deployed in a separate service with its own database."]}),"\n",(0,r.jsx)(t.p,{children:"The token is used to prove the identity of the user within the Backstage system, and is used throughout Backstage plugins to control access. It is important that the ownership resolution logic is consistent across the entire Backstage ecosystem, with no possibility of misinterpreting the ownership information."}),"\n",(0,r.jsx)(t.p,{children:"For cross backend communication the Backstage Token is typically forwarded or in strict backend to backend communication without a user party the backend itself issues a service token based on a pre-shared secret which is then validated on the receiving end. There are no unique service identities tied to these tokens at this point, meaning the tokens can be used across all services in a Backstage installation, this is something that we aim to improve in the future."}),"\n",(0,r.jsxs)(t.p,{children:["Backstage also supports authentication through a proxy where the user identity is read from the incoming request from the proxy, which has been decorated by an authenticating reverse proxy such as ",(0,r.jsx)(t.a,{href:"https://aws.amazon.com/elasticloadbalancing/application-load-balancer/",children:"AWS ALB"}),". The following proxy auth providers verify the signature of incoming requests, and are therefore safe to deploy with direct access by users: ",(0,r.jsx)(t.code,{children:"awsAlb"}),", ",(0,r.jsx)(t.code,{children:"cfAccess"}),", and ",(0,r.jsx)(t.code,{children:"gcpIap"}),". Providers like ",(0,r.jsx)(t.code,{children:"oauth2Proxy"})," does not verify the incoming request and can therefore be spoofed by a malicious internal user to supply the ",(0,r.jsx)(t.code,{children:"auth"})," backend with forged identity information. It\u2019s therefore highly recommended to restrict access to the ",(0,r.jsx)(t.code,{children:"oauth2Proxy"})," endpoints, or use a different provider."]}),"\n",(0,r.jsx)(t.h2,{id:"catalog",children:"Catalog"}),"\n",(0,r.jsxs)(t.p,{children:["Integrators should configure ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/configuration#catalog-rules",children:"catalog rules"})," to limit the allowed entity kinds that users can define. In general it is best to restrict definition of User, Group, and Template entities so that internal users cannot register additional ones. Template entities define actions that are executed on the backend hosts, and while the goal is for these actions to be secure regardless of input, it is still a more sensitive context and it is recommended that you protect it with additional checks. It is very important to not allow registration of User and Group entities if you ingest and rely on these as organizational data in your catalog. Doing so could otherwise open up for the ability to impersonate users and confuse group membership information. You should always ingest organizational data using a statically configured catalog location or an entity provider reading from a trusted source. The entities emitted directly by an entity provider are always trusted and rules are not applied to them, but any entities produced further down the chain are still subject to the rules."]}),"\n",(0,r.jsx)(t.p,{children:"The Catalog does not aim to protect against resource exhaustion attacks in its default setup. If you need to prevent your internal users from being able to register large amounts of entities, then it is recommended to disable entity registration and use a different approach for discovering entities. One way to mitigate any resource exhaustion attacks is to only allow the catalog to read from trusted SCM sources that have an audit trail. Catalog currently lacks limits for entity hierarchy depth and entity size, which we hope to address in the future."}),"\n",(0,r.jsxs)(t.p,{children:["By default all internal users are allowed to create and delete entities. If this does not fit your organization's needs it is recommended to enable and configure the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/permissions/overview",children:"permission"})," system to restrict these operations."]}),"\n",(0,r.jsx)(t.h2,{id:"scaffolder",children:"Scaffolder"}),"\n",(0,r.jsxs)(t.p,{children:["By default, Scaffolding jobs execute directly on the host machine, including any actions defined in the template. Because the Scaffolder templates are considered a more sensitive area it is recommended to control access to create and update templates to trusted parties. Template execution is intended to be secure regardless of input, but we still recommend this additional layer of protection. The string templating is executed in a ",(0,r.jsx)(t.a,{href:"https://github.com/patriksimek/vm2",children:"node VM sandbox"})," to mitigate the possibility of remote code execution attacks."]}),"\n",(0,r.jsx)(t.p,{children:"The Scaffolder often has elevated permissions to for example create repositories in a Github organization. The integrator should therefore be cautious of Scaffolder Templates that for example delete or update existing resources as the user input is typically user defined and can therefore delete or modify resources maliciously or by mistake."}),"\n",(0,r.jsx)(t.p,{children:"One strategy that allows you to reduce the access that the Scaffolder service has is to rely on user credentials when executing actions. For example, a GitHub App integration could be configured with read-only permissions, with a separate user OAuth token used to create repositories. This requires that your users have access to create repositories in the first place."}),"\n",(0,r.jsx)(t.p,{children:"The integrator should audit installed scaffolding actions just like any other plugin package. It is also important to verify that installed actions fall in line with your own security requirements, as some actions might be intended for more relaxed environments."}),"\n",(0,r.jsxs)(t.p,{children:["By default all internal users are allowed to execute templates in the scaffolder. If this does not fit your organization's needs it is recommended to enable and configure the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/permissions/overview",children:"permission"})," system to restrict these operations."]}),"\n",(0,r.jsx)(t.h2,{id:"techdocs",children:"TechDocs"}),"\n",(0,r.jsxs)(t.p,{children:["TechDocs' backend can be broadly configured in two ways. The default is when ",(0,r.jsx)(t.code,{children:"techdocs.builder"})," is set to ",(0,r.jsx)(t.code,{children:"local"}),", in which documentation is generated on-demand and stored locally by the TechDocs backend. When ",(0,r.jsx)(t.code,{children:"techdocs.builder"})," is set to ",(0,r.jsx)(t.code,{children:"external"})," instead, documentation is assumed to be generated by an external process (e.g. in a CI/CD pipeline), and merely read from a configured external storage provider."]}),"\n",(0,r.jsx)(t.p,{children:"When documentation is generated locally, integrators are responsible for ensuring secure configuration of file system permissions in the location where generated assets are stored. When documentation is generated externally, integrators are responsible for access control and permissioning between the external process that generates the documentation, the storage provider where documentation assets are published, and the TechDocs backend."}),"\n",(0,r.jsx)(t.p,{children:"Regardless of backend configuration, the TechDocs frontend does not trust the generated HTML of any documentation sites and therefore applies a strict sanitization process before rendering out any content to users."}),"\n",(0,r.jsx)(t.p,{children:"By default, all TechDocs documentation is visible to all Backstage users. Access can be restricted to TechDocs sites by configuring view permissions for the Catalog."}),"\n",(0,r.jsx)(t.h2,{id:"proxy",children:"Proxy"}),"\n",(0,r.jsx)(t.p,{children:"The proxy backend acts as a utility for frontend plugins to access remote services that may not be set up to receive traffic directly from the Backstage frontend. Typical reasons for this would be that the upstream service does not provide the appropriate CORS headers or does not serve its content over HTTPS."}),"\n",(0,r.jsxs)(t.p,{children:["The proxy entries are configured through static configuration. Each entry has a mount path and an upstream target, and also supports other options such as limiting the allowed methods, or injecting additional headers. It is recommended to avoid injecting authentication headers for upstream services, as this is a risky way to decorate requests with credentials. Anyone with access to your Backstage deployment will be able to make requests to the upstream service using the injected credentials. It is recommended that you instead create a backend plugin that forwards individual requests to the upstream service in a secure way. In case you do end up injecting credentials into upstream requests, be sure that you are not exposing any sensitive information or actions. You should also restrict the access as much as possible, for example using the ",(0,r.jsx)(t.code,{children:"allowedMethods"})," option to limit the methods that can be used, and using tokens with the minimum required authorization scope."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,s,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))n.call(a,l)&&(i[l]=a[l]);if(t){s=t(a);for(var d=0;d<s.length;d++)r.call(a,s[d])&&(i[s[d]]=a[s[d]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:a,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;o=h("react.element"),a=h("react.portal"),t.Fragment=h("react.fragment"),t.StrictMode=h("react.strict_mode"),t.Profiler=h("react.profiler"),s=h("react.provider"),i=h("react.context"),c=h("react.forward_ref"),t.Suspense=h("react.suspense"),l=h("react.memo"),d=h("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var v=b.prototype=new y;v.constructor=b,r(v,m.prototype),v.isPureReactComponent=!0;var x={current:null},k=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:x.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var B=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return s=s(c=e),e=""===r?"."+_(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(B,"$&/")+"/"),S(s,t,n,"",(function(e){return e}))):null!=s&&(T(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(B,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=r+_(i=e[l],l);c+=S(i,t,n,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)c+=S(i=i.value,t,n,d=r+_(i,l++),s);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function O(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function I(){var e=A.current;if(null===e)throw Error(p(321));return e}var P={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var a=r({},e.props),s=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=x.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)k.call(t,d)&&!w.hasOwnProperty(d)&&(a[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)a.children=n;else if(1<d){l=Array(d);for(var h=0;h<d;h++)l[h]=arguments[h+2];a.children=l}return{$$typeof:o,type:e.type,key:s,ref:i,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return I().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,n){return I().useReducer(e,t,n)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:a(e),r.createElement(o.Provider,{value:i},t)}}}]);