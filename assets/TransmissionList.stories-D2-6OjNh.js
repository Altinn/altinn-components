import{t as o}from"./transmissions-DFb7JWU9.js";import{T as m}from"./TransmissionList-D05wu8ov.js";import"./iframe-ju2_P8cU.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BYTyY5wG.js";import"./Badge-C5qbsRzf.js";import"./Tooltip-BIlU6ctt.js";import"./ListItem-CMgPAGjD.js";import"./Input-DOMevMNG.js";import"./Avatar-BseCFng7.js";import"./AvatarGroup-DlioajxJ.js";import"./Heading-BwdjGJ12.js";import"./useHighlightedText-Ds75xSSg.js";import"./ChevronUp-DzbOnysK.js";import"./ChevronDown-DI9j-k90.js";import"./ChevronRight-C-B7qVOy.js";import"./Section-BBG26hDa.js";import"./Flex-BBjiPxTz.js";import"./Typography-B5wbJTRa.js";import"./AttachmentList-CV6yA1WI.js";import"./AttachmentLink-BycAdmwm.js";import"./File-C8H_1ix6.js";import"./SeenByLog-C8tmCkhL.js";import"./SeenByLogItem-CIzJBabH.js";import"./Byline-C4m4OP28.js";import"./SeenByLogButton-BCVJE0Rh.js";import"./Divider-Cg9vCZeu.js";import"./List-CUFUNE10.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
