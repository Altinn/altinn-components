import{t as o}from"./transmissions-yo0Zd_-t.js";import{T as m}from"./TransmissionList-CTMOIRO6.js";import"./iframe-B0WoJH5H.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-6X8E9Jae.js";import"./Badge-D2udDyy3.js";import"./Tooltip-KSMOwJOX.js";import"./ListItem-BtMv5Egs.js";import"./Input-CGgDhHHk.js";import"./Avatar-DoqQG8m_.js";import"./AvatarGroup-CareQQNx.js";import"./Heading-DxONre_z.js";import"./useHighlightedText-BkoAp9J_.js";import"./ChevronUp-DUEhyOAc.js";import"./ChevronDown-BDG9HWsL.js";import"./ChevronRight-DJgUHhg2.js";import"./Section-BK9NUwy5.js";import"./Flex-DKCofw-s.js";import"./Typography-BsE1w5gb.js";import"./AttachmentList-1Uq_Rr5e.js";import"./AttachmentLink-ClD_OAFX.js";import"./File-B7lmk7eM.js";import"./SeenByLog-CAOqUjGx.js";import"./SeenByLogButton-qFhnAXQV.js";import"./SeenByLogItem-C-_g6QTO.js";import"./Byline-BoWA2cIz.js";import"./Divider-C-5FnIHP.js";import"./List-Cid-T8iG.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
