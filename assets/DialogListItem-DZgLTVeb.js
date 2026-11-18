var a=Object.defineProperty;var s=(n,i)=>a(n,"name",{value:i,configurable:!0});import{ag as o,a6 as e,r as d,C as t}from"./iframe-Cf4UALw8.js";import{a as h,D as l,G as p,h as c,U as m,M as u,S as g,e as x,d as j,I as f,C as b,b as w,c as v,f as y,R as D,T as A,A as C,g as T}from"./DialogListItem.stories-BRug3hA5.js";import"./DialogMetadata.stories-BceU2_Bk.js";import"./preload-helper-Cc2_yIPf.js";import"./skatt-Eb53q4vT.js";import"./contextMenu-HrT-ss8J.js";import"./Checkmark-Dha_gRss.js";import"./ArrowRedo-CCAle-YW.js";import"./EyeClosed-B0q-vwQw.js";import"./Eye-BeIULvpA.js";import"./Archive-DbxYD9lF.js";import"./Trash-B_p5hHVd.js";import"./ClockDashed-BLeXrSnX.js";import"./MetaItem-BAglRi5S.js";import"./ProgressIcon-DVvxuurE.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./Tooltip-vDvnT1in.js";import"./List-C8bvHqyv.js";import"./Flex-CiSMsFR7.js";import"./ListItem-BdmDs4G2.js";import"./Input-OKh8JSaI.js";import"./Badge-A8SwLO0m.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ChevronUp-BKdDwASh.js";import"./ChevronDown-B_UJ6uJ_.js";import"./ChevronRight-DcM2grMN.js";import"./seenByLog-9sbnLyZl.js";import"./DialogListItem-Boh_eFmU.js";import"./ItemBase-CxBRYBgT.js";import"./ItemLink-B3qiGYfX.js";import"./DialogByline-CnGvOryp.js";import"./Byline-CQqrvp19.js";import"./ItemControls-C74k2R8j.js";import"./DialogMetadata-CG69Jlyq.js";import"./DialogStatus-Mx6cvT55.js";import"./Paperclip-BlcRCygn.js";import"./Files-C2FWMwUb.js";import"./MetaBase-Btz9qIEk.js";import"./ContextMenu-DZnF37e0.js";import"./useDropdownMenuController-DWWF3mOW.js";import"./Dropdown-BbrYcScL.js";import"./SearchField-CpDf3EHS.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./MenuListItem-btKh04Ui.js";import"./MenuListDivider-CFCegYqH.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemMedia-BhGUpV92.js";import"./ItemLabel-C9vfNdbz.js";import"./FieldBase-DSaLFDie.js";import"./Typography-CsGx0b_o.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./useMenu-CfWidWjC.js";import"./InformationSquare-uRwoVJB-.js";function r(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(i.h1,{id:"dialog-list-item",children:"Dialog list item"}),`
`,e.jsxs(i.p,{children:["In list views dialogs represent an excerpt of the full dialog and must include a ",e.jsx(i.code,{children:"title"})," and a ",e.jsx(i.code,{children:"summary"}),", as well as a timestamp representing when the dialog was created or updated. The ",e.jsx(i.code,{children:"sender"}),` of the dialog is presented with their avatar, and
the `,e.jsx(i.code,{children:"recipient"})," is included to emphasise which actor the dialog belongs to."]}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i.h2,{id:"multiple-recipients",children:"Multiple recipients"}),`
`,e.jsx(i.p,{children:"In list views including more than a single recipient, both sender and recipient avatars should be presented to make it easier to distingish between dialogs."}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i.h2,{id:"signals-for-new-and-unread-dialogs",children:"Signals for new and unread dialogs"}),`
`,e.jsx(i.p,{children:"New dialogs are unseen until they have been opened by the current user. In list views, new dialogs are indicated using three clues; it has a coloured border, a stronger title weight and a small badge, emphasising that the dialog has unopened content. When a dialog is opened the dialog the border and title weight is neutralised, but the badge might remain if some content is unopened."}),`
`,e.jsxs(i.p,{children:["The coloured border and title weight are triggered by the ",e.jsx(i.code,{children:"unread"})," property, while the badge is displayed if the dialog has a ",e.jsx(i.code,{children:"badge"})," property."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i.p,{children:"Dialogs that have been opened, but still have unread content, are indicated using a badge."}),`
`,e.jsx(t,{of:m}),`
`,e.jsxs(i.p,{children:["When a dialog is marked as unread, the ",e.jsx(i.code,{children:"unread"}),` property should be set to true, adding the coloured border and strong title. This is useful in cases where a user has opened a dialog, but later wants to return to it,
or indicate for others that the dialog is important.`]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(i.h2,{id:"seen-by",children:"Seen by"}),`
`,e.jsx(i.p,{children:"When a dialog is opened, it is marked as seen by the end user."}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(i.p,{children:"In shared inboxes, multiple people might have seen the dialog."}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(i.h2,{id:"requires-attention-in-progress-completed",children:"Requires attention, in progress, completed"}),`
`,e.jsx(i.p,{children:"Dialogs can have different statuses, representing different states of a dialog."}),`
`,e.jsxs(i.p,{children:["The inbox will include dialogs with four different statuses; ",e.jsx(i.code,{children:"new"}),", ",e.jsx(i.code,{children:"requires-attention"}),", ",e.jsx(i.code,{children:"in-progress"})," and ",e.jsx(i.code,{children:"completed"}),". Dialogs with status ",e.jsx(i.code,{children:"new"})," have no particular label, while the other statuses are highlighted using a label next to the timestamp."]}),`
`,e.jsxs(i.p,{children:["The most prominent status is ",e.jsx(i.code,{children:"requires-attention"}),", representing a state where an action needs to happen before a process can continue. Other statuses include ",e.jsx(i.code,{children:"in-progress"}),", and ",e.jsx(i.code,{children:"completed"}),", indicating that a dialog in a waiting state, or that it has reached a conclusion."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(i.h2,{id:"drafts",children:"Drafts"}),`
`,e.jsxs(i.p,{children:["Dialogs that contain drafts are indicated using the ",e.jsx(i.code,{children:"draftsLabel"}),". A draft can be a dialog initiated by the user, by filling out a form."]}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(i.p,{children:"In the future a draft might be part of a process where the user has not yet completed a reply."}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(i.p,{children:'These types of dialogs should be mapped to the "Drafts" folders.'}),`
`,e.jsx(i.h2,{id:"outgoing-and-incoming-transmissions",children:"Outgoing and incoming transmissions"}),`
`,e.jsxs(i.p,{children:["Dialogs containing transmissions should include metadata indicating how many transmissions have been sent or received. Use the ",e.jsx(i.code,{children:"sentCount"})," and ",e.jsx(i.code,{children:"receivedCount"})," properties to indicate how many transmissions have been sent or received, respectively."]}),`
`,e.jsx(i.p,{children:"A dialog including a single outogoing transmission:"}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(i.p,{children:"A dialog including a incoming transmission:"}),`
`,e.jsx(t,{of:D}),`
`,e.jsx(i.p,{children:"Dialog with transmissions, but without summary and status."}),`
`,e.jsx(t,{of:A}),`
`,e.jsx(i.h2,{id:"archived-and-trashed",children:"Archived and trashed"}),`
`,e.jsx(i.p,{children:'To clean up the inbox, users can move dialogs to archived or trashed. Archived dialogs should be mapped to the "Archived" folder, while trashed dialogs should be mapped to the "Trash" folder.'}),`
`,e.jsx(t,{of:C}),`
`,e.jsx(t,{of:T})]})}s(r,"_createMdxContent");function Re(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}s(Re,"MDXContent");export{Re as default};
