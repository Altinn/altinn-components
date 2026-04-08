import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{n as r}from"./lib-BuGdZX6V.js";import{Completed as i,Default as a,InProgress as o,Loading as s,t as c}from"./DialogHeader.stories-DhMZjngb.js";var l=e();function u(e){let u={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{of:c}),`
`,(0,l.jsx)(u.h1,{id:`dialogheader`,children:`DialogHeader`}),`
`,(0,l.jsxs)(u.p,{children:[`The header introduces a dialog with a `,(0,l.jsx)(u.code,{children:`title`}),` and an optional a `,(0,l.jsx)(u.code,{children:`status`}),` and due date.`]}),`
`,(0,l.jsx)(u.h2,{id:`status`,children:`Status`}),`
`,(0,l.jsx)(u.p,{children:`Dialog requires attention:`}),`
`,(0,l.jsx)(t,{of:a}),`
`,(0,l.jsx)(u.p,{children:`Dialog is in progress or in a waiting state.`}),`
`,(0,l.jsx)(t,{of:o}),`
`,(0,l.jsx)(u.p,{children:`Dialog is completed. No action needed.`}),`
`,(0,l.jsx)(t,{of:i}),`
`,(0,l.jsx)(u.h2,{id:`loading-state`,children:`Loading state`}),`
`,(0,l.jsx)(t,{of:s})]})}function d(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}export{d as default};