import{t as o}from"./transmissions-C9vIL7Wz.js";import{T as m}from"./TransmissionList-C6sW3MLO.js";import"./iframe-BZiA3Dc9.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BlZHjSR6.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./ListItem-C4FhKt55.js";import"./Input-F50qI-5v.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./Heading-DduTyBY0.js";import"./useHighlightedText-gnIxErVs.js";import"./ChevronUp-BGK37JKw.js";import"./ChevronDown-CNxF5VIu.js";import"./ChevronRight-CRJJFvsY.js";import"./Section-B5v4sxTq.js";import"./Flex-DlKNIBbG.js";import"./Typography-HNFVi96c.js";import"./AttachmentList-D-mPPmSs.js";import"./AttachmentLink-DWyELlxh.js";import"./File-C_yyF1Wy.js";import"./SeenByLog-BSZepTSN.js";import"./SeenByLogButton-BsG7ncuK.js";import"./SeenByLogItem-BIhtHCwi.js";import"./Byline-Cqm72Kmq.js";import"./Divider-z3aWjxga.js";import"./List-DDPijhf8.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
