import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{n as r}from"./lib-BuGdZX6V.js";import{ActivityLog as i,Completed as a,Draft as o,InProgress as s,NotApplicable as c,RequiresAttention as l,Transmissions as u,t as d}from"./DialogMetadata.stories-BXrheo2R.js";var f=e();function p(e){let p={h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{of:d}),`
`,(0,f.jsx)(p.h1,{id:`dialog-metadata`,children:`Dialog metadata`}),`
`,(0,f.jsx)(p.p,{children:`Dialog metadata should include a status and timestamp, and may contain additional metadata to indicate due date, number of attachments. Number of outgoing and/or incoming transmissions is presented next to the status.`}),`
`,(0,f.jsx)(p.h2,{id:`status`,children:`Status`}),`
`,(0,f.jsx)(p.p,{children:`Dialog is in draft mode:`}),`
`,(0,f.jsx)(t,{of:o}),`
`,(0,f.jsx)(p.p,{children:`Requires attention and has a due date:`}),`
`,(0,f.jsx)(t,{of:l}),`
`,(0,f.jsx)(p.p,{children:`Dialog is in progress, contains a single outgoing transmission and an attachment:`}),`
`,(0,f.jsx)(t,{of:s}),`
`,(0,f.jsx)(p.p,{children:`Dialog is completed, contains both outgoing and incoming transmisios and an attachment:`}),`
`,(0,f.jsx)(t,{of:a}),`
`,(0,f.jsx)(p.h2,{id:`no-particular-status`,children:`No particular status`}),`
`,(0,f.jsx)(p.p,{children:`Dialog has no particular status:`}),`
`,(0,f.jsx)(t,{of:c}),`
`,(0,f.jsx)(p.p,{children:`Dialog has no particular status, but contains transmissions:`}),`
`,(0,f.jsx)(t,{of:u}),`
`,(0,f.jsx)(p.h2,{id:`activity-log`,children:`Activity log`}),`
`,(0,f.jsx)(p.p,{children:`Dialog is open. Metadata contains a link to the activity log.`}),`
`,(0,f.jsx)(t,{of:i})]})}function m(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(p,{...e})}):p(e)}export{m as default};