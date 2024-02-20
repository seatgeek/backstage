/*! For license information please see 1b1d9b80.d268ba14.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[831768],{592553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=a(785893),n=a(511151);const s={title:"Adopter Spotlight: How Chicago Trading Company saved 18 months of developer effort with Backstage",author:"Tiffany Cox, Spotify"},r=void 0,i={permalink:"/blog/2023/09/29/chicago-traiding-company-adopter-spotlight",source:"@site/blog/2023-09-29-chicago-traiding-company-adopter-spotlight.mdx",title:"Adopter Spotlight: How Chicago Trading Company saved 18 months of developer effort with Backstage",description:"backstage header",date:"2023-09-29T00:00:00.000Z",formattedDate:"September 29, 2023",tags:[],readingTime:5.965,hasTruncateMarker:!0,authors:[{name:"Tiffany Cox, Spotify"}],frontMatter:{title:"Adopter Spotlight: How Chicago Trading Company saved 18 months of developer effort with Backstage",author:"Tiffany Cox, Spotify"},unlisted:!1,prevItem:{title:"Wrap up: BackstageCon \u201823, KubeCon + Cloud Native NA",permalink:"/blog/2023/11/15/backstagecon-kubecon-23"},nextItem:{title:"Expedia Group shares Backstage proof of value metrics 2.0",permalink:"/blog/2023/08/17/expedia-proof-of-value-metrics-2"}},d={authorsImageUrls:[void 0]},l=[{value:"Templates or the cluster didn&#39;t happen",id:"templates-or-the-cluster-didnt-happen",level:2},{value:"Early wins on documentation and onboarding",id:"early-wins-on-documentation-and-onboarding",level:2},{value:"Measuring Backstage impact at CTC",id:"measuring-backstage-impact-at-ctc",level:2},{value:"The power of partnership (and good docs!)",id:"the-power-of-partnership-and-good-docs",level:2}];function h(e){const t={a:"a",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"backstage header",src:a(300766).Z+"",width:"1200",height:"630"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:(0,o.jsxs)(t.em,{children:["TL;DR ",(0,o.jsx)(t.a,{href:"https://www.chicagotrading.com/",children:"Chicago Trading Company"})," (CTC) adopted Backstage ten months ago to help reduce onboarding frictions with their new cloud-based DevOps Kubernetes platform. Through templatization and open feedback loops, the team has conservatively saved 18 months of developer time to date with Backstage. We spoke with CTC DevOps engineer ",(0,o.jsx)(t.a,{href:"https://github.com/scott-kausler",children:"Scott Kausler"})," who shared the details of their onboarding journey, lessons learned, and insights for other Backstage adopters."]})})}),"\n",(0,o.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,o.jsx)(t.h2,{id:"templates-or-the-cluster-didnt-happen",children:"Templates or the cluster didn't happen"}),"\n",(0,o.jsx)(t.p,{children:"While mid-activation on a new cloud-based DevOps Kubernetes platform, Scott's team received early feedback that it was difficult to onboard teams onto this platform due to the breadth of requirements and new tools developers needed \u2014 from dependency management tools (such as Gradle, Conan, and Conda) to Docker/Kubernetes, Helm/FluxCD, and Vault. Not only were CTC developers required to learn new systems to build, package, and deploy their apps, in several cases even the code needed to be changed. There were also significant modifications required to existing tools such as Jenkins."}),"\n",(0,o.jsx)(t.p,{children:"Scott's team quickly recognized that this friction could lead to lower adoption and longer onboarding times to the new platform. So he started investigating solutions that would allow him to templatize these new services and create turnkey onboarding with less reference knowledge required."}),"\n",(0,o.jsxs)(t.p,{children:["After exploring several service routes from managed to in-house/owned, CTC opted to use Backstage \u2014 already in POC for use of the ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/",children:"Software Catalog"})," \u2014 due to the ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/",children:"Software Templates"})," plugin form-based input, UI/json-schema-form abilities, and its extensibility. Scott's team felt Backstage provided the most sustainable solution for growth amongst the multiple developer portal and templation options vetted and would help bridge the gap between UI-driven deployment and GitOps."]}),"\n",(0,o.jsx)(t.h2,{id:"early-wins-on-documentation-and-onboarding",children:"Early wins on documentation and onboarding"}),"\n",(0,o.jsx)(t.p,{children:"The CTC DevOps team created a small special interest group to champion the developer portal build and quickly delved into the big issues impacting their developer experience. From there, the team began creating tasks and templates within Backstage."}),"\n",(0,o.jsx)(t.p,{children:'To start, Scott worked with end-user teams outside DevOps early in the process of documenting migration to the new DevOps Kubernetes platform services. When Scott wrote the onboarding documentation, he made it a point to pair with a developer on another team that would be using it. This approach provided him with a quality sounding board, great instantaneous feedback, and a sort of "beta developer" to test V1 documentation clarity., A few weeks later, another colleague on the same end-user team followed the documentation and she didn\'t reach out to Scott at all.'}),"\n",(0,o.jsx)(t.p,{children:"After this early win, the team was ready for broad distribution. Partnering with the senior leadership team, Scott's team began onboarding teams to the new DevOps Kubernetes platform using the templates his team created in Backstage. At CTC, their Backstage instance is set up to automatically scan for deployments in Kubernetes; so if you're in Kubernetes, you're onboarded to Backstage."}),"\n",(0,o.jsx)(t.p,{children:'"Backstage made onboarding [to the new DevOps platform] not scary,"" Scott said. "Because now \u2014 all of a sudden \u2014 you have this recipe for how to do it, you don\'t have to jump through these hoops, the templates are there and ready for you. You choose what you want based on these templates we have available, and you\'re off and running on your own.""'}),"\n",(0,o.jsx)(t.p,{children:"Scott's team monitored progress against their onboarding goals partially by how often the DevOps team was getting pinged for support and found that it has made support smoother. They can easily refer people to templates and repo standards instead of making them create something ad hoc."}),"\n",(0,o.jsx)(t.p,{children:'"It\'s really been cool seeing how that progressed. I even have a few teams that didn\'t talk to DevOps at all. They used a [template] and they have a service ready. We were actually pretty excited about that, because that means now we have a scalable tool able to onboard others onto our platform."" said Scott.'}),"\n",(0,o.jsx)(t.p,{children:"Another exciting win for CTC was template additions generated outside the initial toolkit, which has eased the burden substantially for the DevOps team. They were able to create new templates to deploy against best practices such as a template for creating a brand-new Terraform module and Git repo or \u2014 Scott's favorite \u2014 \u200b\u200ba template that creates a Java repository along with Jenkins jobs for CI and the Flux CD config for deployment."}),"\n",(0,o.jsx)(t.p,{children:'"The template builds and auto-deploys a Docker image, so if you make a change to your mainline branch, then it will automatically build a new Docker image and deploy it to a Kubernetes cluster."" Scott said. "So within basically 10 minutes of you filling out a form, you actually have something deployed out to a Kubernetes cluster.""'}),"\n",(0,o.jsx)(t.p,{children:"This process eased flows for both end-user devs and DevOps teams overall."}),"\n",(0,o.jsx)(t.h2,{id:"measuring-backstage-impact-at-ctc",children:"Measuring Backstage impact at CTC"}),"\n",(0,o.jsx)(t.p,{children:"To calculate the impact of Backstage, Scott began with reviewing template types and assigning a weighted value to each based upon their perceived workload."}),"\n",(0,o.jsx)(t.p,{children:"At CTC, some templates create a repo, some templates create a repo with some code, some templates even go as far as creating a repo with code and all the prerequisites to deploy to Flux and Jenkins jobs. To be conservative, the highest weight Scott assigned to a template would be saving three days of developer time. Even with that conservative estimate, the figure came out to be a savings of 18 months in developer effort since Backstage was deployed ten months ago."}),"\n",(0,o.jsx)(t.p,{children:"For CTC, the journey with Backstage has just begun. They're now looking to drive more Catalog adoption and determine what custom plugins they need to build to better support their workflows."}),"\n",(0,o.jsx)(t.h2,{id:"the-power-of-partnership-and-good-docs",children:"The power of partnership (and good docs!)"}),"\n",(0,o.jsx)(t.p,{children:"When asked about advice he has for other Backstage adopters, Scott talked about the DevOps team's comms strategy and ensuring end-user developers had pathways to provide feedback. In addition to the focus on templates for the new services, having both a dedicated Slack channel and open-door communication with the DevOps team helped reduce onboarding friction to the DevOps Kubernetes platform."}),"\n",(0,o.jsx)(t.p,{children:'Outside of that, he believes the approach to documentation is paramount. "Write your documentation from the perspective of, \'Hey, you have this task assigned to you to write a template, here are the exact steps you have to follow.\'"" Scott said. "Think of it as a recipe. Removing your familiarity bias will help make this tool more useful for less familiar teams.""'}),"\n",(0,o.jsx)(t.p,{children:"Finally, don't be afraid to step outside the core use cases when it comes to the Backstage framework and finding solutions to meet your needs."}),"\n",(0,o.jsx)(t.p,{children:'"Backstage gives you a lot of really easy to use features right out of the box. And one of the great things about open source is you can look at the code and see exactly what the behavior is and work within that behavior. But we\'ve also developed our own processes for custom tasks because \u2014 at the end of the day \u2014 our platform has some very custom aspects to it."" Scott said.'}),"\n",(0,o.jsxs)(t.p,{children:["Interested in more stories from Backstage adopters? Check out these recent posts from ",(0,o.jsx)(t.a,{href:"https://backstage.io/blog/2023/07/08/stash-adopter-post",children:"Stash"})," and ",(0,o.jsx)(t.a,{href:"https://backstage.io/blog/2023/08/17/expedia-proof-of-value-metrics-2",children:"Expedia Group"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Want to learn more about Backstage? Join our weekly ",(0,o.jsx)(t.a,{href:"https://info.backstage.spotify.com/office-hours",children:"Office Hours"})," and bring your burning questions."]})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},675251:(e,t,a)=>{var o=a(667294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var o,s={},l=null,h=null;for(o in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,o)&&!d.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:n,type:e,key:l,ref:h,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},785893:(e,t,a)=>{e.exports=a(675251)},300766:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/header-92af1a87140c1ca77cef9d6dfea15779.png"},511151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>r});var o=a(667294);const n={},s=o.createContext(n);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);