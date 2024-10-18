"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5899],{9233:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(4848),i=s(8453);const o={title:"Introduction",sidebar_label:"Introduction",sidebar_position:0},r=void 0,a={id:"introduction",title:"Introduction",description:"Docusaurus logo",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/oyster-docs/docs/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/colorstackorg/oyster/tree/main/docs/docs/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_label:"Introduction",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/oyster-docs/docs/contributing/introduction"}},l={},c=[{value:"Applications",id:"applications",level:2},{value:"Understanding the Codebase",id:"understanding-the-codebase",level:2},{value:"Important Tools &amp; Technologies",id:"important-tools--technologies",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"CI Pipeline (GitHub Actions)",id:"ci-pipeline-github-actions",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Contributing",id:"contributing",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Docusaurus logo",src:s(7387).A+"",width:"8022",height:"1224"})}),"\n",(0,t.jsxs)("p",{align:"center",children:[(0,t.jsx)("b",{children:"Oyster"}),": The open-source software that powers the ColorStack community experience. \u270a\ud83c\udfff\u270a\ud83c\udffe\u270a\ud83c\udffd\u270a\ud83c\udffc"]}),"\n",(0,t.jsx)("h4",{align:"center",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("a",{href:"./category/contributing",children:"How to Contribute"})," |\n",(0,t.jsx)("a",{href:"https://colorstack.org",children:"Website"})," |\n",(0,t.jsx)("a",{href:"https://app.colorstack.io/apply",children:"Family Application"})]})}),"\n",(0,t.jsx)(n.h2,{id:"applications",children:"Applications"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/colorstackorg/oyster/blob/main/apps/member-profile/package.json",children:(0,t.jsx)(n.strong,{children:"Member Profile"})})," -\nServes as the home for a ColorStack member, allowing them to manage their\ninformation, find and connect with other members, as well as events and\ngamification."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/colorstackorg/oyster/blob/main/apps/admin-dashboard/package.json",children:(0,t.jsx)(n.strong,{children:"Admin Dashboard"})})," -\nAn internal dashboard that the ColorStack team uses to manage important\nworkflows like application review."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/colorstackorg/oyster/blob/main/apps/api/package.json",children:(0,t.jsx)(n.strong,{children:"API"})})," -\nHandles all background jobs as well as any webhook integrations that we have\nwith external services."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"understanding-the-codebase",children:"Understanding the Codebase"}),"\n",(0,t.jsx)(n.h3,{id:"important-tools--technologies",children:"Important Tools & Technologies"}),"\n",(0,t.jsx)(n.p,{children:"Here is a list of important tools and technologies that power the ColorStack\ncodebase:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.bullmq.io",children:"BullMQ"})," to queue and process jobs asynchronously (in\nthe background)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://kysely.dev",children:"Kysely"})," to query our SQL database in a type-safe way."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://nodejs.org/en/about",children:"Node.js"}),"...because yes!"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/15/index.html",children:"PostgreSQL"})," to store all of\nour data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://railway.app",children:"Railway"})," to host our applications and databases."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://redis.io",children:"Redis"})," to store simple key/value based data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://remix.run",children:"Remix"}),"/",(0,t.jsx)(n.a,{href:"https://react.dev",children:"React"})," to build fast,\naccessible and delightful UI experiences."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://tailwindcss.com",children:"Tailwind"})," because scaling CSS is hard."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://turbo.build/repo",children:"Turborepo"})," to manage the build system for our\nTypescript monorepo."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org",children:"Typescript"})," because we like Javascript...and\nwe like type checking."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://zod.dev",children:"Zod"})," to validate all of our data and automatically generate\ntypes."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsx)(n.p,{children:"Here is the structure of our Typescript monorepo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apps\n|--- admin-dashboard\n|--- api\n|--- member-profile\npackages\n|--- core\n|--- db\n|--- email-templates\n|--- types\n|--- ui\n|--- utils\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"apps"}),' directory houses all of our applications (see "Applications"\nsection).']}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"packages"})," directory contains reusable pieces of code that are used across\nour applications."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"core"}),": Nearly all of our core business logic. Will eventually colocate\nfeature-based UI next to its related business logic."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"db"}),": Database layer, which houses all migrations, database scripts (ie:\n",(0,t.jsx)(n.code,{children:"seed"}),") and testing utilities that involve the database."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"email-templates"}),": React-based email templates built with\n",(0,t.jsx)(n.a,{href:"https://resend.com",children:"Resend"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"types"}),": Miscellaneous types shared across applications."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ui"}),": Reusable UI components built in React."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"utils"}),": Reusable utility functions, such as ",(0,t.jsx)(n.code,{children:"sleep"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ci-pipeline-github-actions",children:"CI Pipeline (GitHub Actions)"}),"\n",(0,t.jsx)(n.p,{children:"To ensure that we don't have any breaking changes, we have a GitHub Actions\nworkflow that runs, which can block a PR from being merged if certain checks\ndon't pass."}),"\n",(0,t.jsxs)(n.p,{children:["For more information on how that CI pipeline works, see\n",(0,t.jsx)(n.a,{href:"https://github.com/colorstackorg/oyster/blob/main/.github/workflows/ci.yml",children:"this"}),"\nfile."]}),"\n",(0,t.jsx)(n.h3,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsxs)(n.p,{children:["We use ",(0,t.jsx)(n.a,{href:"https://railway.app",children:"Railway"})," to host our applications as well as our\nPostgreSQL and Redis databases. Whenever we make some changes to our ",(0,t.jsx)(n.code,{children:"main"}),"\nbranch, Railway will automatically pick up those changes and deploy a new\nversion of our applications."]}),"\n",(0,t.jsxs)(n.p,{children:["Each application has a ",(0,t.jsx)(n.code,{children:"railway.json"})," file where we can configure certain\nsettings and instructions so Railway knows ",(0,t.jsx)(n.em,{children:"how and when"})," to build/start our\napplication. See\n",(0,t.jsx)(n.a,{href:"https://github.com/colorstackorg/oyster/blob/main/apps/api/railway.json",children:"this"}),"\nfile as an example. For a full list on what we can configure, see\n",(0,t.jsx)(n.a,{href:"https://docs.railway.app/reference/config-as-code#configurable-settings",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsxs)(n.p,{children:["Please see our ",(0,t.jsx)(n.a,{href:"/oyster-docs/docs/contributing/introduction",children:"contributing guide"}),"! \ud83d\udc4b"]}),"\n",(0,t.jsx)(n.p,{children:"A heartfelt thanks to our ColorStack members for their contributions! \ud83d\ude4f"}),"\n",(0,t.jsx)("a",{href:"https://github.com/colorstackorg/oyster/graphs/contributors",children:(0,t.jsx)("img",{src:"https://contrib.rocks/image?repo=colorstackorg/oyster"})}),"\n",(0,t.jsxs)(n.p,{children:["Made with ",(0,t.jsx)(n.a,{href:"https://contrib.rocks",children:"contrib.rocks"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7387:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/colorstack-wordmark-8e44761ed691dc3808b48e2d149b77c5.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);