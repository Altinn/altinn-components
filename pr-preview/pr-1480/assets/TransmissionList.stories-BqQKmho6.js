import{t as o}from"./transmissions-C6a2aNrC.js";import{T as m}from"./TransmissionList-BJ84nIaw.js";import"./iframe-D6r7-MD4.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-3nG15wZe.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./ListItem-gXA8ij5k.js";import"./Input-CtcmBtOO.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./Heading-BBX9eyEy.js";import"./useHighlightedText-ByiYciR_.js";import"./ChevronUp-o2c5iYOu.js";import"./ChevronDown-CA3F-CAN.js";import"./ChevronRight-B-ItEsH6.js";import"./Section-CZyWrzO9.js";import"./Flex-BbelGz4F.js";import"./Typography-CHbDBJK8.js";import"./AttachmentList-BHTr-AH0.js";import"./File-COLq9qoZ.js";import"./SeenByLog-Dm9_LNj7.js";import"./SeenByLogItem-GYOSjHIZ.js";import"./Byline-U85WJkat.js";import"./SeenByLogButton-BJveyECc.js";import"./Divider-CAzg1frs.js";import"./List-CNLkXZoG.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
