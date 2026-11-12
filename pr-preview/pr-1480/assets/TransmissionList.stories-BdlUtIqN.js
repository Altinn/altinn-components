import{t as o}from"./transmissions-CFrBuKyW.js";import{T as m}from"./TransmissionList-C8YO-EsH.js";import"./iframe-DdPcKG0O.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-C37A8vgA.js";import"./Badge-BzZwcsiz.js";import"./Tooltip-wlipxmMb.js";import"./ListItem-DAMnEUMg.js";import"./Input-RBXxlYal.js";import"./Avatar-Dfz4UezB.js";import"./AvatarGroup-BtZlCnKI.js";import"./Heading-BJje4zKM.js";import"./useHighlightedText-BvQbOG8T.js";import"./ChevronUp-DhLREmKD.js";import"./ChevronDown-Bg2scdYv.js";import"./ChevronRight-Cmdt4Cn7.js";import"./Section-C3SZ48VL.js";import"./Flex-Cxkl80LA.js";import"./Typography-D4dRQ14t.js";import"./AttachmentList-BTrhjFz5.js";import"./File-BE2JgEjU.js";import"./SeenByLog-rKgQjGq4.js";import"./SeenByLogItem-DlBAk-kv.js";import"./Byline-4Yminzw9.js";import"./SeenByLogButton-DPt1ouuT.js";import"./Divider-Dmk3LnUK.js";import"./List-CQSNq3De.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,z as __namedExportsOrder,w as default};
