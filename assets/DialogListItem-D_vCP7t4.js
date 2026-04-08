import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{n as r}from"./lib-BuGdZX6V.js";import{Archived as i,Completed as a,Default as o,Draft as s,DraftAndStatus as c,GroupedAvatars as l,InProgress as u,MarkedAsUnread as d,ReceivedCount as f,RequiresAttention as p,SeenByEndUser as m,SeenByMultiple as h,SentCount as g,Transmissions as _,Trashed as v,UnopenedContent as y,Unread as b,t as x}from"./DialogListItem.stories-Cx0p6GEB.js";var S=e();function C(e){let C={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{of:x}),`
`,(0,S.jsx)(C.h1,{id:`dialog-list-item`,children:`Dialog list item`}),`
`,(0,S.jsxs)(C.p,{children:[`In list views dialogs represent an excerpt of the full dialog and must include a `,(0,S.jsx)(C.code,{children:`title`}),` and a `,(0,S.jsx)(C.code,{children:`summary`}),`, as well as a timestamp representing when the dialog was created or updated. The `,(0,S.jsx)(C.code,{children:`sender`}),` of the dialog is presented with their avatar, and
the `,(0,S.jsx)(C.code,{children:`recipient`}),` is included to emphasise which actor the dialog belongs to.`]}),`
`,(0,S.jsx)(t,{of:o}),`
`,(0,S.jsx)(C.h2,{id:`multiple-recipients`,children:`Multiple recipients`}),`
`,(0,S.jsx)(C.p,{children:`In list views including more than a single recipient, both sender and recipient avatars should be presented to make it easier to distingish between dialogs.`}),`
`,(0,S.jsx)(t,{of:l}),`
`,(0,S.jsx)(C.h2,{id:`signals-for-new-and-unread-dialogs`,children:`Signals for new and unread dialogs`}),`
`,(0,S.jsx)(C.p,{children:`New dialogs are unseen until they have been opened by the current user. In list views, new dialogs are indicated using three clues; it has a coloured border, a stronger title weight and a small badge, emphasising that the dialog has unopened content. When a dialog is opened the dialog the border and title weight is neutralised, but the badge might remain if some content is unopened.`}),`
`,(0,S.jsxs)(C.p,{children:[`The coloured border and title weight are triggered by the `,(0,S.jsx)(C.code,{children:`unread`}),` property, while the badge is displayed if the dialog has a `,(0,S.jsx)(C.code,{children:`badge`}),` property.`]}),`
`,(0,S.jsx)(t,{of:b}),`
`,(0,S.jsx)(C.p,{children:`Dialogs that have been opened, but still have unread content, are indicated using a badge.`}),`
`,(0,S.jsx)(t,{of:y}),`
`,(0,S.jsxs)(C.p,{children:[`When a dialog is marked as unread, the `,(0,S.jsx)(C.code,{children:`unread`}),` property should be set to true, adding the coloured border and strong title. This is useful in cases where a user has opened a dialog, but later wants to return to it,
or indicate for others that the dialog is important.`]}),`
`,(0,S.jsx)(t,{of:d}),`
`,(0,S.jsx)(C.h2,{id:`seen-by`,children:`Seen by`}),`
`,(0,S.jsx)(C.p,{children:`When a dialog is opened, it is marked as seen by the end user.`}),`
`,(0,S.jsx)(t,{of:m}),`
`,(0,S.jsx)(C.p,{children:`In shared inboxes, multiple people might have seen the dialog.`}),`
`,(0,S.jsx)(t,{of:h}),`
`,(0,S.jsx)(C.h2,{id:`requires-attention-in-progress-completed`,children:`Requires attention, in progress, completed`}),`
`,(0,S.jsx)(C.p,{children:`Dialogs can have different statuses, representing different states of a dialog.`}),`
`,(0,S.jsxs)(C.p,{children:[`The inbox will include dialogs with four different statuses; `,(0,S.jsx)(C.code,{children:`new`}),`, `,(0,S.jsx)(C.code,{children:`requires-attention`}),`, `,(0,S.jsx)(C.code,{children:`in-progress`}),` and `,(0,S.jsx)(C.code,{children:`completed`}),`. Dialogs with status `,(0,S.jsx)(C.code,{children:`new`}),` have no particular label, while the other statuses are highlighted using a label next to the timestamp.`]}),`
`,(0,S.jsxs)(C.p,{children:[`The most prominent status is `,(0,S.jsx)(C.code,{children:`requires-attention`}),`, representing a state where an action needs to happen before a process can continue. Other statuses include `,(0,S.jsx)(C.code,{children:`in-progress`}),`, and `,(0,S.jsx)(C.code,{children:`completed`}),`, indicating that a dialog in a waiting state, or that it has reached a conclusion.`]}),`
`,(0,S.jsx)(t,{of:p}),`
`,(0,S.jsx)(t,{of:u}),`
`,(0,S.jsx)(t,{of:a}),`
`,(0,S.jsx)(C.h2,{id:`drafts`,children:`Drafts`}),`
`,(0,S.jsxs)(C.p,{children:[`Dialogs that contain drafts are indicated using the `,(0,S.jsx)(C.code,{children:`draftsLabel`}),`. A draft can be a dialog initiated by the user, by filling out a form.`]}),`
`,(0,S.jsx)(t,{of:s}),`
`,(0,S.jsx)(C.p,{children:`In the future a draft might be part of a process where the user has not yet completed a reply.`}),`
`,(0,S.jsx)(t,{of:c}),`
`,(0,S.jsx)(C.p,{children:`These types of dialogs should be mapped to the "Drafts" folders.`}),`
`,(0,S.jsx)(C.h2,{id:`outgoing-and-incoming-transmissions`,children:`Outgoing and incoming transmissions`}),`
`,(0,S.jsxs)(C.p,{children:[`Dialogs containing transmissions should include metadata indicating how many transmissions have been sent or received. Use the `,(0,S.jsx)(C.code,{children:`sentCount`}),` and `,(0,S.jsx)(C.code,{children:`receivedCount`}),` properties to indicate how many transmissions have been sent or received, respectively.`]}),`
`,(0,S.jsx)(C.p,{children:`A dialog including a single outogoing transmission:`}),`
`,(0,S.jsx)(t,{of:g}),`
`,(0,S.jsx)(C.p,{children:`A dialog including a incoming transmission:`}),`
`,(0,S.jsx)(t,{of:f}),`
`,(0,S.jsx)(C.p,{children:`Dialog with transmissions, but without summary and status.`}),`
`,(0,S.jsx)(t,{of:_}),`
`,(0,S.jsx)(C.h2,{id:`archived-and-trashed`,children:`Archived and trashed`}),`
`,(0,S.jsx)(C.p,{children:`To clean up the inbox, users can move dialogs to archived or trashed. Archived dialogs should be mapped to the "Archived" folder, while trashed dialogs should be mapped to the "Trash" folder.`}),`
`,(0,S.jsx)(t,{of:i}),`
`,(0,S.jsx)(t,{of:v})]})}function w(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(C,{...e})}):C(e)}export{w as default};