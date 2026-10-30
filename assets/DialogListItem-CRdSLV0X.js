var a=Object.defineProperty;var s=(n,i)=>a(n,"name",{value:i,configurable:!0});import{af as r,a5 as e,q as d,C as t}from"./iframe-BenRi1VF.js";import{a as h,D as l,G as p,h as c,U as m,M as u,S as g,e as x,d as j,I as f,C as b,b as w,c as v,f as y,R as D,T as A,A as C,g as T}from"./DialogListItem.stories-BzFMFuAJ.js";import"./DialogMetadata.stories-DlB8kQMB.js";import"./preload-helper-Cc2_yIPf.js";import"./skatt-Eb53q4vT.js";import"./contextMenu-DtvCqsFd.js";import"./Checkmark-Dysfm6au.js";import"./ArrowRedo-CM8cT5K_.js";import"./EyeClosed-BxLNsgQg.js";import"./Eye-DVrqDlUx.js";import"./Archive-BQnOimYU.js";import"./Trash-D1ucPBDs.js";import"./ClockDashed-L9d5kKWy.js";import"./MetaItem-0Zn3Mwzy.js";import"./ProgressIcon-xTOQDvAd.js";import"./Avatar-DXBUAkUc.js";import"./AvatarGroup-BAohrV6V.js";import"./Tooltip-BQW8S8Bj.js";import"./List-4vc_1Wif.js";import"./Flex-BtqRQeFd.js";import"./ListItem-DZ4jGznm.js";import"./Input-CYuEMmfW.js";import"./Badge-3MbQAaWj.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./ChevronUp-BbUZTqMr.js";import"./ChevronDown-CnLj0wQZ.js";import"./ChevronRight-B0Rwz_dW.js";import"./seenByLog-9sbnLyZl.js";import"./DialogListItem-BreFDVMH.js";import"./ItemBase-DRcUVeh_.js";import"./ItemLink-C36VfNvp.js";import"./DialogByline-NcaaAcQ_.js";import"./Byline-BbatCE13.js";import"./ItemControls-C62YDQLR.js";import"./DialogMetadata-BK_PzwPy.js";import"./DialogStatus-WmbXSdrm.js";import"./Paperclip-BXp6QEyX.js";import"./Files-mLYMUV6o.js";import"./MetaBase-B_eUGOds.js";import"./ContextMenu-DWCYTvGm.js";import"./useDropdownMenuController-chWbBTBL.js";import"./Dropdown-CC6-2lKu.js";import"./SearchField-BPBX14Ku.js";import"./MagnifyingGlass-DuDF4CwQ.js";import"./MenuListItem-B2_-lc8x.js";import"./MenuListHeading-BcNWVjjO.js";import"./MenuItem-BzrbgLmX.js";import"./CheckboxUncheckedIcon-DGOw9jdP.js";import"./RadioUncheckedIcon-BIRg52Rg.js";import"./ItemMedia-BMPM4W1l.js";import"./ItemLabel-lIFyccob.js";import"./FieldBase-Blf3tEjx.js";import"./Typography-CY6bfOBd.js";import"./Field-C3B81q5y.js";import"./Label-Dp2L8TH9.js";import"./useMenu-DrYFOky6.js";import"./MenuListDivider-v6fvRPAn.js";import"./InformationSquare-g2viFsxF.js";import"./MenuElipsisHorizontal-DAMpcxKP.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
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
`,e.jsx(t,{of:T})]})}s(o,"_createMdxContent");function Le(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}s(Le,"MDXContent");export{Le as default};
