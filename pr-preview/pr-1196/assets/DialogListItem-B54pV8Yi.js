import{j as e,M as r,C as t}from"./iframe-BDpWuaMs.js";import{useMDXComponents as o}from"./index-bvgxtA7N.js";import{D as a,a as d,G as h,U as l,b as p,M as c,S as m,c as u,R as g,I as x,C as j,d as f,e as b,f as w,g as v,T as y,A as D,h as A}from"./DialogListItem.stories-BJDhUvIr.js";import"./DialogMetadata.stories-JvEIdUik.js";import"./preload-helper-PPVm8Dsz.js";import"./contextMenu-DCYkV7iF.js";import"./Checkmark-DDYvLrrH.js";import"./useId-BKmV9YxM.js";import"./ArrowRedo-BLPxLVi1.js";import"./EyeClosed-Bu97Jm2t.js";import"./Eye-CswPk-T8.js";import"./Archive-DFGbX-XR.js";import"./Trash-CUnIoKK5.js";import"./ClockDashed-DDHzcO0b.js";import"./skatt-Eb53q4vT.js";import"./DialogListItem-M1pAI5wi.js";import"./ItemLink-CfhFFB25.js";import"./index-DVPUayQ0.js";import"./DialogByline-Bf8cgwsa.js";import"./Byline-BE77fsAg.js";import"./Skeleton-DC_TZb2p.js";import"./AvatarGroup-C5RQzawa.js";import"./Avatar-CT8r-oMP.js";import"./Heading-D4nA4ZwT.js";import"./useHighlightedText-B13W4IFy.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./tooltip-DLcd2lCg.js";import"./DialogMetadata-DGkXAmMB.js";import"./DialogStatus-D5GStjsj.js";import"./MetaItem-C27vspu9.js";import"./ProgressIcon-DtV7Xnhj.js";import"./Icon-4_NTN6mD.js";import"./Paperclip-Dm-BZpbK.js";import"./Files-C9tuwDdw.js";import"./ItemControls-BtUdj5a9.js";import"./seenByLog-A816RdIE.js";import"./List-BnWl-S7K.js";import"./Flex-zEgiMRQg.js";import"./ListItem-mkIEbDJT.js";import"./Button-m_FXpHGO.js";import"./Input-BoCHA0_0.js";import"./XMark-Cx5Omj8e.js";import"./ChevronUp-CUbZcbs3.js";import"./ChevronDown-Bc_cVxBY.js";import"./ChevronRight-BJTZ2o3o.js";import"./ContextMenu-CzieQggW.js";import"./useDropdownMenuController-P2ixjEDe.js";import"./Dropdown-COTBq4xu.js";import"./MenuElipsisHorizontal-_yoYMfaf.js";import"./SearchField-D16JUOzv.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./FieldBase-CGSHeWph.js";import"./Typography-DZRyPYmV.js";import"./Label-7jR2lGh9.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuListHeading-XsWTeeVe.js";import"./MenuItem-BH8ygUTz.js";import"./ItemMedia-CHwsaJTx.js";import"./useMenu-CniiHJSE.js";import"./index-BHwG3h0W.js";import"./InformationSquare-CS8D_BUZ.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(t,{of:A})]})}function ke(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{ke as default};
