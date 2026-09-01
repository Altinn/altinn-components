import{t as o}from"./transmissions-CHmCtfUj.js";import{T as m}from"./TransmissionList-7a63ERWN.js";import"./iframe-CD11FhkO.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CIr4_VXu.js";import"./Badge-C4mu-w43.js";import"./Tooltip-DHKVNtVP.js";import"./ListItem-BwiGPcXr.js";import"./Input-By1HeiMt.js";import"./Avatar-DnWg8nkP.js";import"./AvatarGroup-D_FMhzL-.js";import"./Heading-DRFiIxuE.js";import"./useHighlightedText-BLIWo84c.js";import"./ChevronUp-BuZXJZ6x.js";import"./ChevronDown-Z-rCEWMI.js";import"./ChevronRight-DorAbKkm.js";import"./Section-Cxsr3_z_.js";import"./Flex-BFs7VkGF.js";import"./Typography-CsSTPRBO.js";import"./AttachmentList-D5afP7tX.js";import"./AttachmentLink-Dxq_FBoI.js";import"./File-CnxeME3E.js";import"./SeenByLog-D087XNMT.js";import"./SeenByLogItem-koe8kMVL.js";import"./Byline-DE-vJ9Ow.js";import"./SeenByLogButton-CfsgYlUp.js";import"./Divider-COQO8iSC.js";import"./List-C9fldcID.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
