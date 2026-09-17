import{t as o}from"./transmissions-CuBkJHRM.js";import{T as m}from"./TransmissionList-Bx0-XxT5.js";import"./iframe-BlyVQ5Wf.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-C1UnPwyW.js";import"./Badge-BWoBgQxU.js";import"./Tooltip-DIerloK1.js";import"./ListItem-nb3WHA4w.js";import"./Input-7ZkrUdZt.js";import"./Avatar-DQIgsQd2.js";import"./AvatarGroup-6IOgo5me.js";import"./Heading-hWvyrxAT.js";import"./useHighlightedText-DCg_XHxB.js";import"./ChevronUp-CFGBj1-_.js";import"./ChevronDown-Bxa_Upno.js";import"./ChevronRight-C0zIwyjD.js";import"./Section-_AUVgHqB.js";import"./Flex-CGPMEzYL.js";import"./Typography-xETneU90.js";import"./AttachmentList-CpEFj7g3.js";import"./AttachmentLink-CfacrKMy.js";import"./File-BAjdS3gQ.js";import"./SeenByLog-DgtTEagv.js";import"./SeenByLogItem-CepS-NNw.js";import"./Byline-DGNmbHlc.js";import"./SeenByLogButton-De7EoLyh.js";import"./Divider-Dz1yzn0C.js";import"./List-DMggTgT6.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
