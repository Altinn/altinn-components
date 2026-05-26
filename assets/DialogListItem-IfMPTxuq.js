import{p as e,b as r,C as t}from"./iframe-a6n42jIx.js";import{useMDXComponents as o}from"./index-IXQiAFUy.js";import{a,D as d,G as h,h as l,U as p,M as c,S as m,e as u,d as g,I as x,C as j,b as f,c as b,f as w,R as v,T as y,A as D,g as A}from"./DialogListItem.stories-Cf1azeRc.js";import"./DialogMetadata.stories-C-329Hsp.js";import"./preload-helper-PPVm8Dsz.js";import"./skatt-Eb53q4vT.js";import"./contextMenu-CCBtCJrL.js";import"./Checkmark-NdO0COsu.js";import"./useId-JsUrCC3L.js";import"./ArrowRedo-BnbrKyQg.js";import"./EyeClosed-b6XBEaHm.js";import"./Eye-CrHnsRDH.js";import"./Archive-C-KNrort.js";import"./Trash-BiwQCIF6.js";import"./ClockDashed-D-ph8zZH.js";import"./MetaItem-BD3_j1Ky.js";import"./index-D2z1-3lt.js";import"./ProgressIcon-aB570L9Y.js";import"./Avatar-DDS_Cv_Z.js";import"./Skeleton-BMznOa58.js";import"./AvatarGroup-BaunAvi6.js";import"./Icon-C2KYL6xM.js";import"./Tooltip-CHTkUxru.js";import"./tooltip-D8RdZxwd.js";import"./List-COoWd7bx.js";import"./Flex-BTGTFkLF.js";import"./ListItem-CKB37Xdc.js";import"./Button-DYhT04-k.js";import"./Input-BUxVKC9v.js";import"./XMark-ENWUN_kz.js";import"./Badge-BmuPJ3WS.js";import"./Heading-Dza3pExo.js";import"./useHighlightedText-Bq-Ej33u.js";import"./ChevronUp-DaZVux3Q.js";import"./ChevronDown--dIT-Lld.js";import"./ChevronRight-DzQRiVjQ.js";import"./seenByLog-A816RdIE.js";import"./DialogListItem-BVzP8ll-.js";import"./ItemLink-BU8f8KGB.js";import"./DialogByline-BBkuGul4.js";import"./Byline-ByWU9zoP.js";import"./ItemControls-vHjq0nAG.js";import"./DialogMetadata-F_q8NyYW.js";import"./DialogStatus-fDTddun1.js";import"./Paperclip-BRGVjuSY.js";import"./Files-DnejBk2A.js";import"./ContextMenu-D_LAygeA.js";import"./useDropdownMenuController-ChUHZsVx.js";import"./Dropdown-MBw9TKMx.js";import"./SearchField-Cpk_dpFX.js";import"./MagnifyingGlass-CsfVCXI1.js";import"./FieldBase-BOMRGuHX.js";import"./Typography-K_BS0H0I.js";import"./Label-CP4RT8OS.js";import"./useMenu-BnSKl7OB.js";import"./MenuListItem-BG5nT3q2.js";import"./MenuListHeading-Bp0V-0Ne.js";import"./MenuItem-DlDQtEmE.js";import"./ItemMedia-9TYJyMgm.js";import"./index-Bc5QqnLi.js";import"./InformationSquare-DAX_zw-n.js";import"./MenuElipsisHorizontal-B575Bwb2.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
