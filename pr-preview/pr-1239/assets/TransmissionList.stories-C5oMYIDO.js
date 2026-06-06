import{t as o}from"./transmissions-CcRlVnZm.js";import{T as m}from"./TransmissionList-DoOO6V9x.js";import"./iframe-azCfu0oF.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BltcPQMV.js";import"./Badge-CtmzFrHa.js";import"./Tooltip-DFhjbzqi.js";import"./ListItem-BaYTZi8Y.js";import"./Input-B4WsPqAp.js";import"./Avatar-B6mgyHuO.js";import"./AvatarGroup-BFb9xeKa.js";import"./Heading-BxIru1wm.js";import"./useHighlightedText-BA5UWeOm.js";import"./ChevronUp-_1tTwlgk.js";import"./ChevronDown-D-2Ujwox.js";import"./ChevronRight-DmbA9yvG.js";import"./Section-cdVnHieS.js";import"./Flex-Dtc9ln1d.js";import"./Typography-CWMVViTm.js";import"./AttachmentList-Dl3wUUHR.js";import"./AttachmentLink-DzyrhAep.js";import"./File-J7MWU-e7.js";import"./SeenByLog-DwVPppN1.js";import"./SeenByLogButton-PDznGy7F.js";import"./SeenByLogItem-D1ej895b.js";import"./Byline-CmE-rGGD.js";import"./Divider-nsYtSn1Q.js";import"./List-BJ8sIySu.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
