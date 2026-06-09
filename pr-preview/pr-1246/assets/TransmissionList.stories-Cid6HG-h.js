import{t as o}from"./transmissions-C_F_OLvE.js";import{T as m}from"./TransmissionList-8UEFfnVm.js";import"./iframe-D6Pw3lmv.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Ck6F_0g4.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./ListItem-B1hZ7A47.js";import"./Input-BPiAPMWI.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./Heading-Bsu5tLR0.js";import"./useHighlightedText-iOuYupmt.js";import"./ChevronUp-vVDQNUNf.js";import"./ChevronDown-CBhAS_PQ.js";import"./ChevronRight-DrJyRyMs.js";import"./Section-B6MiXL8W.js";import"./Flex-CRGRbwD2.js";import"./Typography-bPKdoJNM.js";import"./AttachmentList-D4KNVpKj.js";import"./AttachmentLink-B4EkCb0a.js";import"./File-BFUQG2XZ.js";import"./SeenByLog-BBeRYsXS.js";import"./SeenByLogButton-BtczMlH0.js";import"./SeenByLogItem-DfC146vE.js";import"./Byline-l1hiTfum.js";import"./Divider-BBy7x_-3.js";import"./List-yiBkID25.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const A=["Default","Outgoing","Incoming"];export{s as Default,t as Incoming,r as Outgoing,A as __namedExportsOrder,z as default};
