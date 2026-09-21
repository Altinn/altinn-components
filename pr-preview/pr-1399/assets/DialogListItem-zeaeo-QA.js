import{ag as r,a7 as e,r as o,C as t}from"./iframe-Bjjt_sJ1.js";import{a,D as d,G as h,h as l,U as p,M as c,S as m,e as u,d as g,I as x,C as j,b as f,c as b,f as w,R as v,T as y,A as D,g as A}from"./DialogListItem.stories-DlVOVov5.js";import"./DialogMetadata.stories-B1T4Hpk-.js";import"./preload-helper-PPVm8Dsz.js";import"./skatt-Eb53q4vT.js";import"./contextMenu-DhQhsCOW.js";import"./Checkmark-BJpweToD.js";import"./ArrowRedo-HjRVT5N6.js";import"./EyeClosed-P6MgQW2z.js";import"./Eye-L945VvwS.js";import"./Archive-DGmdwpez.js";import"./Trash-BgkXZGdB.js";import"./ClockDashed-Dou1qfdz.js";import"./MetaItem-D2aT0PUb.js";import"./ProgressIcon-BxS4TZ2g.js";import"./Avatar-DUGxJuve.js";import"./AvatarGroup-Bt2kizFo.js";import"./Tooltip-CYcMXzzg.js";import"./List-DIqwgyys.js";import"./Flex-GHRWEM3Q.js";import"./ListItem-C0qHzDdu.js";import"./Input-PLxdr44a.js";import"./Badge-Dlcy0_mS.js";import"./Heading-BHJvhrmD.js";import"./useHighlightedText-BPKtv5Uu.js";import"./ChevronUp-C-n4hHxG.js";import"./ChevronDown-C4cxiit8.js";import"./ChevronRight-MBNaUHNp.js";import"./seenByLog-A816RdIE.js";import"./DialogListItem-Cf6ocZFh.js";import"./ItemBase-DDpnq5qx.js";import"./ItemLink-BbRKplZ0.js";import"./DialogByline-SHoqSfNk.js";import"./Byline-BHcnyvRN.js";import"./ItemControls-Cf0gBB0S.js";import"./DialogMetadata-B9ZkYG4e.js";import"./DialogStatus-CzB9J6cM.js";import"./Paperclip-B9jawDMs.js";import"./Files-BFp85XKT.js";import"./MetaBase-D4Xieoi-.js";import"./ContextMenu-BqCCj7wW.js";import"./useDropdownMenuController-zn5n7TQt.js";import"./Dropdown-CeLlk6Ua.js";import"./SearchField-CN96vdWl.js";import"./MagnifyingGlass-B6DdP_wu.js";import"./FieldBase-xSixxw66.js";import"./Typography-D6uVUzG3.js";import"./Field-Cv6yJUU5.js";import"./Label-DSP8_VuM.js";import"./useMenu-CfDnO3tS.js";import"./MenuListItem-CebbbonR.js";import"./MenuListDivider-CP2Z2JTV.js";import"./MenuListHeading-NxhgYwSy.js";import"./MenuItem-Cqr4SOJp.js";import"./ItemMedia-cRp9TeR0.js";import"./ItemLabel-C7-OFrDm.js";import"./InformationSquare-BBRKQU3y.js";import"./MenuElipsisHorizontal-288HpaRD.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
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
`,e.jsx(t,{of:A})]})}function Se(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{Se as default};
