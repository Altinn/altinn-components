import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{n as r}from"./lib-BuGdZX6V.js";import{CompanyAccount as i,CurrentAccount as a,Login as o}from"./Account.stories-DxgmFxdM.js";import{Default as s}from"./AccountMenu.stories-C5m_yLqh.js";var c=e();function l(e){let l={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Account`}),`
`,(0,c.jsx)(l.h1,{id:`the-account`,children:`The Account`}),`
`,(0,c.jsxs)(l.p,{children:[`An `,(0,c.jsx)(l.code,{children:`Account`}),` is a representation of a person or a company. Signing in will give access to your personal account.`]}),`
`,(0,c.jsx)(l.p,{children:`Depending on role and privileges granted by others, a user might have access to multiple accounts, both companies and other people.`}),`
`,(0,c.jsxs)(l.p,{children:[`To distinguish between different people and companies, accounts are followed by a unique `,(0,c.jsx)(l.code,{children:`Avatar`}),`. People accounts use light coloured circles, while companies use dark coloured squares.`]}),`
`,(0,c.jsx)(l.h2,{id:`signing-in`,children:`Signing in`}),`
`,(0,c.jsx)(l.p,{children:`Before signing in, a padlock will be displayed in the header, indicating that the user should sign in.`}),`
`,(0,c.jsx)(t,{of:o}),`
`,(0,c.jsx)(l.h2,{id:`current-account`,children:`Current account`}),`
`,(0,c.jsx)(l.p,{children:`User is signed in to their personal account. The current account avatar is displayed in the header.`}),`
`,(0,c.jsx)(t,{of:a}),`
`,(0,c.jsx)(l.p,{children:`User is signed in on behalf of a company. The company avatar is displayed in the header.`}),`
`,(0,c.jsx)(t,{of:i}),`
`,(0,c.jsx)(l.h2,{id:`switching-accounts`,children:`Switching accounts`}),`
`,(0,c.jsxs)(l.p,{children:[`Switching between accounts is done using the `,(0,c.jsx)(l.code,{children:`AccountMenu`}),`.`]}),`
`,(0,c.jsx)(t,{of:s})]})}function u(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}export{u as default};