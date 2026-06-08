import{ag as r,a7 as e,r as o,C as t}from"./iframe-C3-39QZn.js";import{a,D as d,G as h,h as l,U as p,M as c,S as m,e as u,d as g,I as x,C as j,b as f,c as b,f as w,R as v,T as y,A as D,g as A}from"./DialogListItem.stories-CpdMRJ11.js";import"./DialogMetadata.stories-PM-ky_1G.js";import"./preload-helper-PPVm8Dsz.js";import"./skatt-Eb53q4vT.js";import"./contextMenu-CL2W3_dP.js";import"./Checkmark-DcGYSDVC.js";import"./ArrowRedo-DG6JiOfk.js";import"./EyeClosed-DPILsftP.js";import"./Eye-sZIwA-0p.js";import"./Archive-B4YJqA48.js";import"./Trash-Daess6ZY.js";import"./ClockDashed-BHfN0U-Y.js";import"./MetaItem-M2VsedRi.js";import"./ProgressIcon-jbwt389r.js";import"./Avatar-WM3RFSU5.js";import"./AvatarGroup-BCEXfOjH.js";import"./Tooltip-DTSJdaMh.js";import"./List-C0B2zVng.js";import"./Flex-cOQ4YkiH.js";import"./ListItem-BhGiT6gr.js";import"./Input-Ck9X-Ajd.js";import"./Badge-D3xvyoOt.js";import"./Heading-B2KBSzP-.js";import"./useHighlightedText--t_r6ff3.js";import"./ChevronUp-CNTxwGY1.js";import"./ChevronDown-C_O64CkH.js";import"./ChevronRight-C8E9q9OI.js";import"./seenByLog-A816RdIE.js";import"./DialogListItem-D7mumrKE.js";import"./ItemBase-BAbRxOK9.js";import"./ItemLink-B72RuPPU.js";import"./DialogByline-Czr1MLEf.js";import"./Byline-B1hqh-Dc.js";import"./ItemControls-CvvFc83j.js";import"./DialogMetadata-BzffzYLi.js";import"./DialogStatus-CiPC31jv.js";import"./Paperclip-B7l4T1Kq.js";import"./Files-dlvyHk1P.js";import"./ContextMenu-C49fggZX.js";import"./useDropdownMenuController-Ch-gS0ya.js";import"./Dropdown-DwcIrTVC.js";import"./SearchField-BHCumu4V.js";import"./MagnifyingGlass-W4-YHK47.js";import"./FieldBase-CuUVQ-X3.js";import"./Typography-DzSxU3qn.js";import"./Field-D-SteSQi.js";import"./Label-BXFq-CrQ.js";import"./useMenu-PdCJBcPZ.js";import"./MenuListItem-C_zHoz8h.js";import"./MenuListHeading-BABwYJ-w.js";import"./MenuItem-_nHd0yat.js";import"./ItemMedia-Dvk-rH5V.js";import"./ItemLabel-EUoHzQAm.js";import"./index-DsMJ5_O1.js";import"./InformationSquare-CikWmUv2.js";import"./MenuElipsisHorizontal-BDwvxdWn.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
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
