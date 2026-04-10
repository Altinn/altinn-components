import{j as e,M as r,C as t}from"./iframe-DRbAvM8B.js";import{useMDXComponents as o}from"./index-BFC2XUFg.js";import{D as a,a as d,G as h,U as l,b as p,M as c,S as m,c as u,R as g,I as x,C as j,d as f,e as b,f as w,g as v,T as y,A as D,h as A}from"./DialogListItem.stories-CCmY_OAg.js";import"./DialogMetadata.stories-CEOPdfeF.js";import"./preload-helper-PPVm8Dsz.js";import"./contextMenu-Ceh66tuc.js";import"./Checkmark-BwvmX3W_.js";import"./useId-p3Uu13R2.js";import"./ArrowRedo-Dg6IFWSr.js";import"./EyeClosed-CCBARXxq.js";import"./Eye-Dtm3rmmu.js";import"./Archive-Can2FccB.js";import"./Trash-D6ryZk36.js";import"./ClockDashed-BWgjUcJM.js";import"./skatt-Eb53q4vT.js";import"./DialogListItem-Bdtiye4W.js";import"./index-Dpt5RUeZ.js";import"./DialogByline-x2ym7gET.js";import"./Byline-DvIPHZak.js";import"./Skeleton-C6w0Fovi.js";import"./AvatarGroup-BZTkgKpW.js";import"./Avatar-DHw0Umd5.js";import"./Heading-aiLobBhZ.js";import"./useHighlightedText-DaUYVTi5.js";import"./Badge-B0bOgxTq.js";import"./DialogMetadata-BvnX4OhB.js";import"./DialogStatus-F1r7I7Tj.js";import"./Hourglass-D2MD5QDU.js";import"./MetaProgress-BeWB-lF7.js";import"./MetaItemLabel-CGC4jvlK.js";import"./Tooltip-CJtJf-6I.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BRHMCtFk.js";import"./lite-DaUVFjkg.js";import"./ProgressIcon-DaSFbIOK.js";import"./Icon-BB196-C1.js";import"./MetaItem-gcZAnx0_.js";import"./MetaTimestamp-uO3ut3UU.js";import"./Paperclip-BUnfw_md.js";import"./MenuItem-GZbX5NAK.js";import"./ItemMedia-DLqoeXZM.js";import"./XMark-BeNK6Eym.js";import"./ChevronRight-BIwAZUpi.js";import"./seenByLog-A816RdIE.js";import"./List-DqiN2axT.js";import"./Flex-DfEZbiAr.js";import"./ListItem-B48A-xDW.js";import"./Button-DXRH0CtL.js";import"./button-DB6SpB_q.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./ChevronUp-DFhYQLlv.js";import"./ChevronDown-D8-ttEmo.js";import"./ContextMenu-kHX2Z4TH.js";import"./useDropdownMenuController-OmQMIEvc.js";import"./Dropdown-VBO2OC6w.js";import"./MenuElipsisHorizontal-Rg7tFK6D.js";import"./SearchField-Q4hKdicz.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./FieldBase-_93TCpK5.js";import"./Typography-Da6zx1kt.js";import"./Label-Zr8dB_9-.js";import"./index-Vs8aUpKw.js";import"./MenuListItem-CLLuPs6D.js";import"./MenuListHeading-DYidFrGe.js";import"./useMenu-BNYBCPCQ.js";import"./InformationSquare-Lr6VUhuh.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
