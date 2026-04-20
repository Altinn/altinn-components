import{j as e,M as r,C as t}from"./iframe-yBEatwQ0.js";import{useMDXComponents as o}from"./index-CsIRPvpu.js";import{D as a,a as d,G as h,U as l,b as p,M as c,S as m,c as u,R as g,I as x,C as j,d as f,e as b,f as w,g as v,T as y,A as D,h as A}from"./DialogListItem.stories--EJcTW4M.js";import"./DialogMetadata.stories-q-f2ZVHl.js";import"./preload-helper-PPVm8Dsz.js";import"./contextMenu-0wp-x4YU.js";import"./Checkmark-BOqpEP7R.js";import"./useId-DyCIbqyR.js";import"./ArrowRedo-CLRMb3xR.js";import"./EyeClosed-DYLG4tja.js";import"./Eye-RCRP_qEL.js";import"./Archive-BK62d9I_.js";import"./Trash-1ExTWg_2.js";import"./ClockDashed-B7qjsId-.js";import"./skatt-Eb53q4vT.js";import"./DialogListItem-Bq6ePfwh.js";import"./ItemLink-BJ7ieZn8.js";import"./index-B7J_eA84.js";import"./DialogByline-BBz9ywAo.js";import"./Byline-DhO_oqaK.js";import"./Skeleton-D2AOT5bt.js";import"./AvatarGroup-Em3MhneF.js";import"./Avatar-BHAY-jNJ.js";import"./Heading-gNorXCZa.js";import"./useHighlightedText-Dt8J34OD.js";import"./Badge-Bt5kdhhY.js";import"./DialogMetadata-C5OfsOmK.js";import"./DialogStatus-BFP312pd.js";import"./Hourglass-CZACOXLb.js";import"./MetaProgress-VPfD9DIu.js";import"./MetaItemLabel-CyUAmw-X.js";import"./Tooltip-ncAjVCVs.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./ProgressIcon-J4ruvy-X.js";import"./Icon-m6GSRHhZ.js";import"./MetaItem-Dz2FMR8e.js";import"./MetaTimestamp-DwbMJqEK.js";import"./Paperclip-BQfOcZQR.js";import"./ItemControls-CsC9idfH.js";import"./seenByLog-A816RdIE.js";import"./List-FR3qe7-6.js";import"./Flex-Co0GST2J.js";import"./ListItem-CFEmGYjw.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./XMark-DRdfunCf.js";import"./ChevronUp-BhUGhxGW.js";import"./ChevronDown-BJoDwoph.js";import"./ChevronRight-DNoffWLc.js";import"./ContextMenu-5DItNalo.js";import"./useDropdownMenuController-DyufIMTt.js";import"./Dropdown-Dt86DnuG.js";import"./MenuElipsisHorizontal-SYKnk3zn.js";import"./SearchField-Dq16b7ar.js";import"./MagnifyingGlass-SlzD67D9.js";import"./FieldBase-DJNauVgJ.js";import"./Typography-ggurnZ72.js";import"./Label-jtu-OMH2.js";import"./index-4yM6tgpO.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuListHeading-CMUrUTJP.js";import"./MenuItem-DG7ysQbI.js";import"./ItemMedia-po0tYTET.js";import"./useMenu-DUoC-ldr.js";import"./InformationSquare-CID74XMT.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(t,{of:A})]})}function Oe(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{Oe as default};
