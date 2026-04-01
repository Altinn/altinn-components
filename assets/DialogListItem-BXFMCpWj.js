import{j as e,M as r,C as t}from"./iframe-DxKlu2kD.js";import{useMDXComponents as o}from"./index-xnwFrkNa.js";import{D as a,a as d,G as h,U as l,b as p,M as c,S as m,c as u,R as g,I as x,C as j,d as f,e as b,f as w,g as v,T as y,A as D,h as A}from"./DialogListItem.stories-BpD41xGV.js";import"./DialogMetadata.stories-L8X6J9UE.js";import"./preload-helper-PPVm8Dsz.js";import"./contextMenu-JDkYPgj4.js";import"./Checkmark-C9NR0hmL.js";import"./useId-_YfdAmsW.js";import"./ArrowRedo-D9tiKF0k.js";import"./EyeClosed-DdQAv9pG.js";import"./Eye-xoGFvx_M.js";import"./Archive-DOcjXifM.js";import"./Trash-BduIn3aS.js";import"./ClockDashed-D0rwVTqN.js";import"./skatt-Eb53q4vT.js";import"./DialogListItem-slO2dqjW.js";import"./index-BWCSYHeO.js";import"./DialogByline-D4Zm6GIw.js";import"./Byline-CIOZ3BUJ.js";import"./Skeleton-niSIm0IT.js";import"./AvatarGroup-D_QmYd99.js";import"./Avatar-BwF2spoI.js";import"./Heading-m7XVygop.js";import"./useHighlightedText-DHBtHLKn.js";import"./Badge-4TJDD2P9.js";import"./DialogMetadata-Bq3t6ASB.js";import"./DialogStatus-DFemhXu8.js";import"./Hourglass-Bw_PJxUj.js";import"./MetaProgress-D8av1T2X.js";import"./MetaItemLabel-BNPu2iZx.js";import"./Tooltip-DFu8-nHR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./ProgressIcon-DvBoHhvI.js";import"./Icon-CrZKj0Yv.js";import"./MetaItem-D5e-uN9I.js";import"./MetaTimestamp-BJxyGcPa.js";import"./Paperclip-BykLFP04.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./XMark-C1fx_pyo.js";import"./ChevronRight-DCeYx28-.js";import"./seenByLog-A816RdIE.js";import"./List-C5g4_qse.js";import"./Flex-CFZAXqgp.js";import"./ListItem-BFQ5Iogs.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./ChevronUp-CoEIha6w.js";import"./ChevronDown-C5m-qI-T.js";import"./ContextMenu-BRoNLVIW.js";import"./useDropdownMenuController-cNOqav4I.js";import"./Dropdown-BlFnr1UG.js";import"./MenuElipsisHorizontal-Brj3vs9F.js";import"./SearchField-yItf8ktv.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./Label-DPRrgAAI.js";import"./index-sO6KcVLH.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./useMenu-DwMeQcTX.js";import"./InformationSquare-D9H1eLzz.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(t,{of:A})]})}function Ee(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{Ee as default};
