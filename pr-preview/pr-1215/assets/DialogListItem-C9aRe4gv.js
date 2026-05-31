import{w as o,p as e,c as r,C as t}from"./iframe-HmDeAVAp.js";import{a,D as d,G as h,h as l,U as p,M as c,S as m,e as u,d as g,I as x,C as j,b as f,c as b,f as w,R as v,T as y,A as D,g as A}from"./DialogListItem.stories-Ch7UUwEO.js";import"./DialogMetadata.stories-BFLNyyai.js";import"./preload-helper-PPVm8Dsz.js";import"./skatt-Eb53q4vT.js";import"./contextMenu-B3BwvEDN.js";import"./Checkmark-_BupHaSE.js";import"./useId-BNhfXdUV.js";import"./ArrowRedo-jTQJwTeE.js";import"./EyeClosed-Cbg7kKEm.js";import"./Eye-SZ3J1_6O.js";import"./Archive-DP3tiXIo.js";import"./Trash-DTo3Lvzs.js";import"./ClockDashed-DPb7YX4C.js";import"./MetaItem-Crpn6HZU.js";import"./index-CDtevUxF.js";import"./ProgressIcon-DynmCEs3.js";import"./Avatar-CUX9SLHz.js";import"./Skeleton-C_Dxe6ID.js";import"./AvatarGroup-CpvcYsvD.js";import"./Icon-DE5JaAj2.js";import"./Tooltip-DFVNjhLt.js";import"./tooltip-DaXe8rKK.js";import"./List-CZwq9NP_.js";import"./Flex-CKAWkLAd.js";import"./ListItem-u6nNWWO6.js";import"./Button-SB9AH0kY.js";import"./Input-Dd7kdPyi.js";import"./XMark-DFSmJjac.js";import"./Badge-DVsrmVw9.js";import"./Heading-CYuK0FXt.js";import"./useHighlightedText-CVbcsWEJ.js";import"./ChevronUp-DWlUIEYm.js";import"./ChevronDown-D8XmQ_JM.js";import"./ChevronRight-Cqfpq8PE.js";import"./seenByLog-A816RdIE.js";import"./DialogListItem-CM6EG_QX.js";import"./ItemBase-p8rf4Jdz.js";import"./ItemLink-DyGCCHkK.js";import"./DialogByline-qtAFVZlu.js";import"./Byline-CbAX77ox.js";import"./ItemControls-dRm3u7Mm.js";import"./DialogMetadata-C2PgRht5.js";import"./DialogStatus-CH5DyySD.js";import"./Paperclip-C8xe1fL3.js";import"./Files-FdN32_BN.js";import"./ContextMenu-oQVSL7Ks.js";import"./useDropdownMenuController-DyRpfBpv.js";import"./Dropdown-DitJK_eU.js";import"./SearchField-jJndU2uH.js";import"./MagnifyingGlass-BBPHMis4.js";import"./FieldBase-DgiW3HLY.js";import"./Typography-C3y2BBzr.js";import"./Field-D-jjHIb3.js";import"./Label-Bwfk_b4F.js";import"./useMenu-l9Wd3rxx.js";import"./MenuListItem-DjeDZ_MF.js";import"./MenuListHeading-Bby608mu.js";import"./MenuItem-C_rMT9NN.js";import"./ItemMedia-CLlob8fs.js";import"./ItemLabel-DIku2iz8.js";import"./index-4vigTm9p.js";import"./InformationSquare-C8JPrkni.js";import"./MenuElipsisHorizontal-BDeVXpR4.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(t,{of:A})]})}function We(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{We as default};
