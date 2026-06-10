import{t as o}from"./transmissions-hUEUM3G2.js";import{T as m}from"./TransmissionList-30tjgc8e.js";import"./iframe-B2qSCuzl.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BREEyPkx.js";import"./Badge-DVZKO9ha.js";import"./Tooltip-DOfER3P6.js";import"./ListItem-DsEnLTXV.js";import"./Input-BEYjfhLL.js";import"./Avatar-BRPRyGzj.js";import"./AvatarGroup-BepXVr5f.js";import"./Heading-BraOiwz9.js";import"./useHighlightedText-BGZ3rca6.js";import"./ChevronUp-DsaXlzpU.js";import"./ChevronDown-MLEeMvzz.js";import"./ChevronRight-CE-Naqr7.js";import"./Section-vcV9OTBL.js";import"./Flex-DUbFTLOy.js";import"./Typography-CidHk-ga.js";import"./AttachmentList-DCzTXYrs.js";import"./AttachmentLink-0kI8cgLC.js";import"./File-Cg4G2T_1.js";import"./SeenByLog-DCZUUodm.js";import"./SeenByLogButton-GYYkN8GN.js";import"./SeenByLogItem-BW98GjnB.js";import"./Byline-uBpvUPL7.js";import"./Divider-HnqZMYFb.js";import"./List-CHDOpQxZ.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
