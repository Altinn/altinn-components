import{t as o}from"./transmissions-8_zT-S46.js";import{T as m}from"./TransmissionList-Bqvnm80r.js";import"./iframe-D3QbR5Le.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Dc6ay856.js";import"./Badge-D-6Sz0uL.js";import"./Tooltip-r3UZaGLO.js";import"./ListItem-Bm9_FWTz.js";import"./Input-fbRgifOV.js";import"./Avatar-0HMs51Xi.js";import"./AvatarGroup-BqAJnN7l.js";import"./Heading-D807jdih.js";import"./useHighlightedText-Cs6VCP7b.js";import"./ChevronUp-CTGCEiGM.js";import"./ChevronDown-B0RV9pqr.js";import"./ChevronRight-CW8WMRnL.js";import"./Section-C8MEyA5r.js";import"./Flex-Dql3tqb8.js";import"./Typography-Dc0CQRXO.js";import"./AttachmentList-DZ1oOhI0.js";import"./AttachmentLink-De8uUclw.js";import"./File-ChXJOIkI.js";import"./SeenByLog-Dte4ga2B.js";import"./SeenByLogButton-BBP5anYH.js";import"./SeenByLogItem-CC2ME52E.js";import"./Byline-Dc9G7X2F.js";import"./Divider-D1ANnYjo.js";import"./List-DwnCtREa.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
