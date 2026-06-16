import{ag as r,a7 as e,r as o,C as t}from"./iframe-5uZaoZDv.js";import{a,D as d,G as h,h as l,U as p,M as c,S as m,e as u,d as g,I as x,C as j,b as f,c as b,f as w,R as v,T as y,A as D,g as A}from"./DialogListItem.stories-DD28egyS.js";import"./DialogMetadata.stories-0Go8AgVY.js";import"./preload-helper-PPVm8Dsz.js";import"./skatt-Eb53q4vT.js";import"./contextMenu-hxREYIdP.js";import"./Checkmark-j8exHh37.js";import"./ArrowRedo-CNwhAcUP.js";import"./EyeClosed-D1hT4fNb.js";import"./Eye-f94ujOp8.js";import"./Archive-3ezaIRLA.js";import"./Trash-2WKaOU1P.js";import"./ClockDashed-D9mjhE8V.js";import"./MetaItem-CeJUQOSy.js";import"./ProgressIcon-BUQgVeTa.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./Tooltip-BCm3h_Ql.js";import"./List-CGkmFa0n.js";import"./Flex-n4FQi775.js";import"./ListItem-BXdKg3lG.js";import"./Input-C9_VoQpt.js";import"./Badge-CJMAUuOr.js";import"./Heading-B0bYr3fv.js";import"./useHighlightedText-SumDRzv0.js";import"./ChevronUp-DyiUf01B.js";import"./ChevronDown-WcynsFDk.js";import"./ChevronRight-Bm7ufgRx.js";import"./seenByLog-A816RdIE.js";import"./DialogListItem-MUiAJGvE.js";import"./ItemBase-CNx3m5cy.js";import"./ItemLink-1JWfbyN9.js";import"./DialogByline-DquPK1tC.js";import"./Byline-BzS4ED4j.js";import"./ItemControls-DqscoWhH.js";import"./DialogMetadata-ClQg8iMg.js";import"./DialogStatus-lIKXsK25.js";import"./Paperclip-Be3E3zxm.js";import"./Files-D0ujnwZc.js";import"./ContextMenu-B6BhHYA_.js";import"./useDropdownMenuController-CpFfsyiJ.js";import"./Dropdown-CDWM3_3M.js";import"./SearchField-BHTg7ejP.js";import"./MagnifyingGlass-BhHVps8f.js";import"./FieldBase-D-wimfjV.js";import"./Typography-DIry-l26.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./useMenu-ihj2gTIo.js";import"./MenuListItem-BbZ2xvN5.js";import"./MenuListDivider-BVxqYtLY.js";import"./MenuListHeading-gwVAdWe6.js";import"./MenuItem-CHpnlanL.js";import"./ItemMedia-CTN7-8P7.js";import"./ItemLabel-DdCL01OT.js";import"./InformationSquare-DVWbDPiI.js";import"./MenuElipsisHorizontal-BtmouW_1.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(i.h1,{id:"dialog-list-item",children:"Dialog list item"}),`
`,e.jsxs(i.p,{children:["In list views dialogs represent an excerpt of the full dialog and must include a ",e.jsx(i.code,{children:"title"})," and a ",e.jsx(i.code,{children:"summary"}),", as well as a timestamp representing when the dialog was created or updated. The ",e.jsx(i.code,{children:"sender"}),` of the dialog is presented with their avatar, and
the `,e.jsx(i.code,{children:"recipient"})," is included to emphasise which actor the dialog belongs to."]}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(i.h2,{id:"multiple-recipients",children:"Multiple recipients"}),`
`,e.jsx(i.p,{children:"In list views including more than a single recipient, both sender and recipient avatars should be presented to make it easier to distingish between dialogs."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(i.h2,{id:"signals-for-new-and-unread-dialogs",children:"Signals for new and unread dialogs"}),`
`,e.jsx(i.p,{children:"New dialogs are unseen until they have been opened by the current user. In list views, new dialogs are indicated using three clues; it has a coloured border, a stronger title weight and a small badge, emphasising that the dialog has unopened content. When a dialog is opened the dialog the border and title weight is neutralised, but the badge might remain if some content is unopened."}),`
`,e.jsxs(i.p,{children:["The coloured border and title weight are triggered by the ",e.jsx(i.code,{children:"unread"})," property, while the badge is displayed if the dialog has a ",e.jsx(i.code,{children:"badge"})," property."]}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i.p,{children:"Dialogs that have been opened, but still have unread content, are indicated using a badge."}),`
`,e.jsx(t,{of:p}),`
`,e.jsxs(i.p,{children:["When a dialog is marked as unread, the ",e.jsx(i.code,{children:"unread"}),` property should be set to true, adding the coloured border and strong title. This is useful in cases where a user has opened a dialog, but later wants to return to it,
or indicate for others that the dialog is important.`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i.h2,{id:"seen-by",children:"Seen by"}),`
`,e.jsx(i.p,{children:"When a dialog is opened, it is marked as seen by the end user."}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i.p,{children:"In shared inboxes, multiple people might have seen the dialog."}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(i.h2,{id:"requires-attention-in-progress-completed",children:"Requires attention, in progress, completed"}),`
`,e.jsx(i.p,{children:"Dialogs can have different statuses, representing different states of a dialog."}),`
`,e.jsxs(i.p,{children:["The inbox will include dialogs with four different statuses; ",e.jsx(i.code,{children:"new"}),", ",e.jsx(i.code,{children:"requires-attention"}),", ",e.jsx(i.code,{children:"in-progress"})," and ",e.jsx(i.code,{children:"completed"}),". Dialogs with status ",e.jsx(i.code,{children:"new"})," have no particular label, while the other statuses are highlighted using a label next to the timestamp."]}),`
`,e.jsxs(i.p,{children:["The most prominent status is ",e.jsx(i.code,{children:"requires-attention"}),", representing a state where an action needs to happen before a process can continue. Other statuses include ",e.jsx(i.code,{children:"in-progress"}),", and ",e.jsx(i.code,{children:"completed"}),", indicating that a dialog in a waiting state, or that it has reached a conclusion."]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(i.h2,{id:"drafts",children:"Drafts"}),`
`,e.jsxs(i.p,{children:["Dialogs that contain drafts are indicated using the ",e.jsx(i.code,{children:"draftsLabel"}),". A draft can be a dialog initiated by the user, by filling out a form."]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(i.p,{children:"In the future a draft might be part of a process where the user has not yet completed a reply."}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(i.p,{children:'These types of dialogs should be mapped to the "Drafts" folders.'}),`
`,e.jsx(i.h2,{id:"outgoing-and-incoming-transmissions",children:"Outgoing and incoming transmissions"}),`
`,e.jsxs(i.p,{children:["Dialogs containing transmissions should include metadata indicating how many transmissions have been sent or received. Use the ",e.jsx(i.code,{children:"sentCount"})," and ",e.jsx(i.code,{children:"receivedCount"})," properties to indicate how many transmissions have been sent or received, respectively."]}),`
`,e.jsx(i.p,{children:"A dialog including a single outogoing transmission:"}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(i.p,{children:"A dialog including a incoming transmission:"}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(i.p,{children:"Dialog with transmissions, but without summary and status."}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(i.h2,{id:"archived-and-trashed",children:"Archived and trashed"}),`
`,e.jsx(i.p,{children:'To clean up the inbox, users can move dialogs to archived or trashed. Archived dialogs should be mapped to the "Archived" folder, while trashed dialogs should be mapped to the "Trash" folder.'}),`
`,e.jsx(t,{of:D}),`
`,e.jsx(t,{of:A})]})}function Ie(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{Ie as default};
