import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{n as r}from"./lib-BuGdZX6V.js";import{Default as i}from"./Dialog.stories-9rwu-0HQ.js";import{Default as a}from"./DialogHeader.stories-DhMZjngb.js";import{Default as o}from"./DialogBody.stories-Du9vzS6L.js";import{Default as s,Transmissions as c}from"./DialogHistory.stories-CXJCwVOj.js";var l=e();function u(e){let u={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Inbox/Dialog`}),`
`,(0,l.jsx)(u.h1,{id:`anatomy-of-a-dialog`,children:`Anatomy of a dialog`}),`
`,(0,l.jsx)(u.p,{children:`A full dialog is built up of a header and a body, and depending on the content of the dialog, potentially a history part and a list of transmissions. Metadata is split and presented in relation to different parts of the dialog.`}),`
`,(0,l.jsx)(u.h2,{id:`dialogheader`,children:`DialogHeader`}),`
`,(0,l.jsxs)(u.p,{children:[`The header introduces the dialog with a `,(0,l.jsx)(u.code,{children:`title`}),` and an optional a `,(0,l.jsx)(u.code,{children:`status`}),` and due date.`]}),`
`,(0,l.jsx)(t,{of:a}),`
`,(0,l.jsx)(u.h2,{id:`dialogbody`,children:`DialogBody`}),`
`,(0,l.jsxs)(u.p,{children:[`The body is the main part of a dialog, including the `,(0,l.jsx)(u.code,{children:`summary`}),` potential `,(0,l.jsx)(u.code,{children:`attachments`}),` and/or one or more calls to `,(0,l.jsx)(u.code,{children:`actions`}),`. Content is introduced with a timestamp and highlighted with a border, pointing from the senders avatar, indicating the origin of the content and that it could be part of a timeline.`]}),`
`,(0,l.jsx)(t,{of:o}),`
`,(0,l.jsx)(u.h2,{id:`dialoghistory`,children:`DialogHistory`}),`
`,(0,l.jsx)(u.p,{children:`The history is a curated list of activities and/or transmissions that has happened in the past, informing the user of important events that has led to the current state of the dialog.`}),`
`,(0,l.jsx)(t,{of:s}),`
`,(0,l.jsx)(u.p,{children:`List of transmissions:`}),`
`,(0,l.jsx)(t,{of:c}),`
`,(0,l.jsx)(u.h2,{id:`putting-it-together`,children:`Putting it together`}),`
`,(0,l.jsx)(u.p,{children:`A dialog is made up by the header, body and history. Potential additional information and contact information is displayed below.`}),`
`,(0,l.jsx)(t,{of:i})]})}function d(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}export{d as default};