import{j as e,M as r,C as t}from"./iframe-C30XMp4u.js";import{useMDXComponents as o}from"./index-Cihnk0wP.js";import{D as a,a as d,G as h,U as l,b as p,M as c,S as m,c as u,R as g,I as x,C as j,d as f,e as b,f as w,g as v,T as y,A as D,h as A}from"./DialogListItem.stories-lvpuWn7S.js";import"./DialogMetadata.stories-BS5xWPcu.js";import"./preload-helper-PPVm8Dsz.js";import"./contextMenu-Bo3QsNJR.js";import"./Checkmark-BHVaOMRl.js";import"./useId-k4Xjw1TB.js";import"./ArrowRedo-B5JSrOJy.js";import"./EyeClosed-BC4ju8B0.js";import"./Eye-CAhWVSdJ.js";import"./Archive-BZkpamMr.js";import"./Trash-CAta8Rpy.js";import"./ClockDashed-jA8a8t_j.js";import"./skatt-Eb53q4vT.js";import"./DialogListItem-BWCfXYAA.js";import"./ItemLink-fzbmrdbP.js";import"./index-Dfjgmy9H.js";import"./DialogByline-eJ618V6g.js";import"./Byline-_lZvj3fQ.js";import"./Skeleton-DYu3bsVd.js";import"./AvatarGroup-BxUIiam6.js";import"./Avatar-md5Lcy6_.js";import"./Heading-r7KrHQRq.js";import"./useHighlightedText-BcdufPkD.js";import"./Badge-BL5WZhsc.js";import"./DialogMetadata-DFuSkFd9.js";import"./DialogStatus-BXJsHQRL.js";import"./Hourglass-CWVLP2LZ.js";import"./MetaProgress-CYlEToHt.js";import"./MetaItemLabel-BRxEyyON.js";import"./Tooltip-BkHTwdrx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./ProgressIcon-Cx8OGjSP.js";import"./Icon-BW7eZq3t.js";import"./MetaItem-BeJZXVyp.js";import"./MetaTimestamp-Dk2zISZf.js";import"./Paperclip-BzWyAbZP.js";import"./ItemControls-XLXkfke2.js";import"./seenByLog-A816RdIE.js";import"./List-BOu6KRbF.js";import"./Flex-Olz8YtsP.js";import"./ListItem-BjER_6OV.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./XMark-ZCF0kQw6.js";import"./ChevronUp-Dd9Cdp1N.js";import"./ChevronDown-BpTniz1S.js";import"./ChevronRight-cMtudnfA.js";import"./ContextMenu-WHdt3mrD.js";import"./useDropdownMenuController-BEzXPzCy.js";import"./Dropdown-MMgMxLyt.js";import"./MenuElipsisHorizontal-D27tqclt.js";import"./SearchField-GqHOGaRS.js";import"./MagnifyingGlass-BcLoywmE.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./Label-CZ9Sm67x.js";import"./index-MPuYdx8K.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./useMenu-HLwWT2ab.js";import"./InformationSquare-Cu6RA9m9.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
