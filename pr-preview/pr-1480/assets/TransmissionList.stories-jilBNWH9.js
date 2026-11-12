import{t as o}from"./transmissions-DWnbAyZZ.js";import{T as m}from"./TransmissionList-pD1jOaDB.js";import"./iframe-CrglqwQn.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-BtjRhmbI.js";import"./Badge-DecVHfU_.js";import"./Tooltip-C3l4V9U1.js";import"./ListItem-CuGpAVUP.js";import"./Input-CFGd0v58.js";import"./Avatar-CdjH483A.js";import"./AvatarGroup-BVlT7mXX.js";import"./Heading-Cue2sNHi.js";import"./useHighlightedText-BwDaK6ea.js";import"./ChevronUp-fcfSgUs-.js";import"./ChevronDown-qCwX9ScZ.js";import"./ChevronRight-DGfPuTVb.js";import"./Section-DbuH07eX.js";import"./Flex-DJ9jSUVh.js";import"./Typography-BczTYRHT.js";import"./AttachmentList-7FVOn-hS.js";import"./File-mT0V8g7z.js";import"./SeenByLog-Bz2tN8gj.js";import"./SeenByLogItem-kaBVzLdt.js";import"./Byline-DiXajScB.js";import"./SeenByLogButton-TmTSfRzU.js";import"./Divider-BmN4lx7n.js";import"./List-CzL7cSjO.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
