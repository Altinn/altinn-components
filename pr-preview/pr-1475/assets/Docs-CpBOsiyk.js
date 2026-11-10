var i=Object.defineProperty;var s=(o,e)=>i(o,"name",{value:e,configurable:!0});import{ag as t,a6 as n,r}from"./iframe-DV5agHf5.js";import"./preload-helper-Cc2_yIPf.js";function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Demo"}),`
`,n.jsx(e.h1,{id:"demo",children:"Demo"}),`
`,n.jsx(e.p,{children:"The demos are full pages built only from components in this library. They show how the components fit together in real Altinn flows: layout, navigation, account switching, lists, dialogs and settings. Use them to see composition and behaviour across pages. For props and variants, use the component stories."}),`
`,n.jsx(e.h2,{id:"the-scenario",children:"The scenario"}),`
`,n.jsx(e.p,{children:"All demos share one scenario. A person, Mathias Dyngeland, is logged in and can act on behalf of several other actors: other people, companies and some deleted units. Switching account in the header updates menus, colours and content across the demo."}),`
`,n.jsxs(e.p,{children:["The pages are linked. Menu items, breadcrumbs and links move between demo stories, and the selected account follows along through the ",n.jsx(e.code,{children:"accountId"}),' URL parameter. Open a demo in its own tab (the "Open canvas in new tab" button) to click through it like a real site.']}),`
`,n.jsx(e.h2,{id:"demos",children:"Demos"}),`
`,n.jsx(e.h3,{id:"inbox",children:"Inbox"}),`
`,n.jsxs(e.p,{children:["The end user's inbox, based on ",n.jsx(e.code,{children:"DialogList"}),", ",n.jsx(e.code,{children:"Dialog"})," and ",n.jsx(e.code,{children:"Toolbar"}),". It covers the inbox page with filters, opening a dialog, the seen-by log and activity log modals, search with highlighted hits, and the empty states for each folder. Two stories show messages on top of the inbox: one with the cookie banner and survey, and one with a notification above the dialog list."]}),`
`,n.jsxs(e.p,{children:["The folder pages the inbox menu links to (Drafts, Sent, Archive, Trash) live in ",n.jsx(e.a,{href:"?path=/story/inbox-inboxpage--inbox",children:"Inbox/InboxPage"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"?path=/story/demo-inbox--inbox-page",children:"Open the inbox demo"})}),`
`,n.jsx(e.h3,{id:"profile",children:"Profile"}),`
`,n.jsxs(e.p,{children:["The end user's own profile. It covers a dashboard, accounts the user can act for (",n.jsx(e.code,{children:"AccountList"}),"), notification settings and saved searches (",n.jsx(e.code,{children:"SettingsList"}),"), and a personal activity log. See ",n.jsx(e.a,{href:"?path=/docs/demo-profile--docs",children:"Demo/Profile"})," for a walkthrough of each page."]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"?path=/story/demo-profile--dashboard-page",children:"Open the profile demo"})}),`
`,n.jsx(e.h3,{id:"admin",children:"Admin"}),`
`,n.jsxs(e.p,{children:["Administration on behalf of a company: a dashboard (",n.jsx(e.code,{children:"Dashboard"}),"), users and access, settings and an activity log. Several pages are placeholders that only show the layout and heading."]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"?path=/story/demo-admin--dashboard-page",children:"Open the admin demo"})}),`
`,n.jsx(e.h3,{id:"portal",children:"Portal"}),`
`,n.jsxs(e.p,{children:["Public information pages: front page, search, category, topic, service and article pages. They are built with ",n.jsx(e.code,{children:"Article"}),", ",n.jsx(e.code,{children:"SearchItem"})," and the page layout components."]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"?path=/story/demo-portal--home",children:"Open the portal demo"})}),`
`,n.jsx(e.h3,{id:"error-pages",children:"Error pages"}),`
`,n.jsx(e.p,{children:"Error and status pages: page not found, unknown error, down for maintenance and logged out. Some variants include contact information."}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"?path=/story/demo-error--page-not-found",children:"Open the error pages"})}),`
`,n.jsx(e.h2,{id:"where-the-code-lives",children:"Where the code lives"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Demo stories: ",n.jsx(e.code,{children:"lib/stories/"})]}),`
`,n.jsxs(e.li,{children:["Data and hooks that drive them (",n.jsx(e.code,{children:"useInbox"}),", ",n.jsx(e.code,{children:"useProfile"}),", ",n.jsx(e.code,{children:"useAdmin"})," and others): ",n.jsx(e.code,{children:"examples/"})]}),`
`]}),`
`,n.jsx(e.p,{children:"Demo stories are not part of the screenshot tests. Visual regressions are caught in the component stories."})]})}s(a,"_createMdxContent");function l(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(a,{...o})}):a(o)}s(l,"MDXContent");export{l as default};
