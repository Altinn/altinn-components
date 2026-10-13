import{t as o}from"./transmissions-EV_i2V5q.js";import{T as m}from"./TransmissionList-CEuxGPcZ.js";import"./iframe-BbHZTISi.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-C8li9dog.js";import"./Badge-DQBHy5Q9.js";import"./Tooltip-KX6NnDMS.js";import"./ListItem-BYKMPFNC.js";import"./Input-B1Y3KbZD.js";import"./Avatar-C_TtduNz.js";import"./AvatarGroup-BedFE_X6.js";import"./Heading-Bg_B2C5V.js";import"./useHighlightedText-BqQK_DfD.js";import"./ChevronUp-D4YgcdQR.js";import"./ChevronDown-88HBChSA.js";import"./ChevronRight-BedwSMvr.js";import"./Section-DsI3lDGv.js";import"./Flex-RSxiLUVh.js";import"./Typography-Ckv3AOJx.js";import"./AttachmentList-nWyZ07ZR.js";import"./AttachmentLink-D4VnEf0A.js";import"./File-BqQmYV8X.js";import"./SeenByLog-BTGf3MpZ.js";import"./SeenByLogItem-D_oLTy31.js";import"./Byline-BcQeWFgN.js";import"./SeenByLogButton-DUmiKrrN.js";import"./Divider-MYmbMM0W.js";import"./List-CzNKG4D0.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
